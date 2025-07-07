import React, { useState, useRef } from "react";
import Image from "next/image";
import { getJiajuPrompt } from "./report/utilsZh";
import { useRouter, useSearchParams } from "next/navigation";
import { useImage } from "../context/ImageContext";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import { post } from "@/lib/ajax";
import { toast } from "react-toastify";

const years = Array.from({ length: 2025 - 1926 + 1 }, (_, i) => 1926 + i);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const hours = Array.from({ length: 24 }, (_, i) => i + 1);

const roomTypeMap = {
	bedroom: "bedroom",
	livingRoom: "living_room",
	diningRoom: "dining_room",
	kitchen: "kitchen",
	bathroom: "bathroom",
	studyRoom: "study_room",
	balcony: "balcony",
	storageRoom: "storage_room",
};

const directionMap = {
	north: "north",
	northEast: "northEast",
	east: "east",
	center: "center",
	southEast: "southEast",
	south: "south",
	southWest: "southWest",
	west: "west",
	northWest: "northWest",
};

export default function UploadPic({ onResult }) {
	const t = useTranslations("upload");
	const [file, setLocalFile] = useState(null);
	const [preview, setPreview] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [gender, setGender] = useState("");
	const [year, setYear] = useState("");
	const [month, setMonth] = useState("");
	const [day, setDay] = useState("");
	const [hour, setHour] = useState("");
	const [roomType, setRoomType] = useState("");
	const [direction, setDirection] = useState("");
	const [furniture, setFurniture] = useState("");
	const [result, setResult] = useState("");
	const [loading, setLoading] = useState(false);
	const [validating, setValidating] = useState(false);
	const [validationError, setValidationError] = useState(null); // New state for validation error
	const fileInputRef = useRef(null);
	const router = useRouter();
	const { setPreview: setGlobalPreview, setFile: setGlobalFile } = useImage();
	const { data: session } = useSession();

	// Get room types and directions from translations
	const roomTypes = Object.keys(roomTypeMap);
	const directions = Object.keys(directionMap);

	const handleDelete = () => {
		setLocalFile(null);
		setPreview(null);
		setGlobalFile(null);
		setGlobalPreview(null);
		setValidationError(null); // Clear validation error
		if (fileInputRef.current) fileInputRef.current.value = "";
	};

	async function handleStart() {
		const engRoomType = roomTypeMap[roomType];
		const engDirection = directionMap[direction];

		if (!session?.user?.userId) {
			router.replace("/auth/login");
			return;
		}
		setLoading(true);
		try {
			// Compose birthDateTime string
			const birthDateTime = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}T${hour.padStart(2, "0")}:00`;
			const { status } = await post(`/api/users/${session.user.userId}`, {
				gender,
				birthDateTime,
			});
			if (status === 0) {
				toast.success("保存成功！");
				router.push(
					`/freereport?roomType=${encodeURIComponent(engRoomType)}&direction=${encodeURIComponent(engDirection)}`
				);
			} else {
				toast.error("保存失败！");
			}
		} catch (error) {
			toast.error("保存失败：" + error);
			console.error("Error saving user info:", error);
		} finally {
			setLoading(false);
		}
	}

	const handleBack = () => {
		setShowModal(false);
	};

	// Improved room detection function with balanced criteria
	const detectRoomFeatures = async (file) => {
		return new Promise((resolve) => {
			const img = document.createElement("img");
			img.src = URL.createObjectURL(file);

			img.onload = () => {
				const canvas = document.createElement("canvas");
				const ctx = canvas.getContext("2d");

				const maxSize = 400;
				const ratio = Math.min(
					maxSize / img.width,
					maxSize / img.height
				);
				canvas.width = img.width * ratio;
				canvas.height = img.height * ratio;

				ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
				const imageData = ctx.getImageData(
					0,
					0,
					canvas.width,
					canvas.height
				);

				// Early filter: relax color variance threshold
				let colorVariance = 0;
				const { data } = imageData;
				let avgR = 0,
					avgG = 0,
					avgB = 0;
				for (let i = 0; i < data.length; i += 32) {
					avgR += data[i];
					avgG += data[i + 1];
					avgB += data[i + 2];
				}
				const samples = data.length / 32;
				avgR /= samples;
				avgG /= samples;
				avgB /= samples;
				for (let i = 0; i < data.length; i += 32) {
					colorVariance +=
						Math.abs(data[i] - avgR) +
						Math.abs(data[i + 1] - avgG) +
						Math.abs(data[i + 2] - avgB);
				}
				colorVariance /= samples;
				if (colorVariance < 5) {
					// Lowered from 10 to 5
					URL.revokeObjectURL(img.src);
					return resolve(false);
				}

				const analysis = {
					hasIndoorLighting: detectIndoorLighting(imageData),
					hasStructuralLines: detectStructuralLines(imageData),
					hasRoomGeometry: detectRoomGeometry(imageData),
					hasIndoorColors: detectIndoorColors(imageData),
					hasDepth: detectDepthIndicators(imageData),
					aspectRatio: canvas.width / canvas.height,
					lightingVariance: calculateLightingVariance(imageData),
					edgeComplexity: calculateEdgeComplexity(imageData),
				};

				// Essentials: at least 2 out of 3
				const essentialsCount =
					(analysis.hasIndoorLighting ? 1 : 0) +
					(analysis.hasStructuralLines ? 1 : 0) +
					(analysis.hasRoomGeometry ? 1 : 0);

				// Relaxed supporting features
				let score = 0;
				if (analysis.hasIndoorColors) score += 15;
				if (analysis.hasDepth) score += 10;
				if (analysis.aspectRatio > 0.5 && analysis.aspectRatio < 3.0)
					score += 5;
				if (
					analysis.lightingVariance > 0.07 &&
					analysis.lightingVariance < 0.8
				)
					score += 10;
				if (
					analysis.edgeComplexity > 0.1 &&
					analysis.edgeComplexity < 0.9
				)
					score += 10;

				const isRoom = essentialsCount >= 2 && score >= 10; // Lowered score threshold

				console.log("Room detection analysis (relaxed):", {
					analysis,
					score,
					essentialsCount,
					isRoom,
				});

				URL.revokeObjectURL(img.src);
				resolve(isRoom);
			};

			img.onerror = () => {
				URL.revokeObjectURL(img.src);
				resolve(false);
			};
		});
	};

	// Detect indoor lighting patterns (more strict)
	const detectIndoorLighting = (imageData) => {
		const { data, width, height } = imageData;
		let veryBrightSpots = 0;
		let moderateBrightSpots = 0;
		let darkSpots = 0;
		let totalPixels = 0;

		// Sample every 8th pixel for better coverage
		for (let i = 0; i < data.length; i += 32) {
			const r = data[i];
			const g = data[i + 1];
			const b = data[i + 2];

			const brightness = (r + g + b) / 3;
			if (brightness > 220) veryBrightSpots++;
			else if (brightness > 150) moderateBrightSpots++;
			else if (brightness < 60) darkSpots++;
			totalPixels++;
		}

		const veryBrightRatio = veryBrightSpots / totalPixels;
		const moderateBrightRatio = moderateBrightSpots / totalPixels;
		const darkRatio = darkSpots / totalPixels;

		// Indoor spaces have controlled lighting: some bright spots (lights/windows),
		// moderate brightness areas, and some shadows
		return (
			veryBrightRatio > 0.02 &&
			veryBrightRatio < 0.15 &&
			moderateBrightRatio > 0.25 &&
			darkRatio > 0.1 &&
			darkRatio < 0.4
		);
	};

	// Detect structural lines with better edge detection
	const detectStructuralLines = (imageData) => {
		const { data, width, height } = imageData;
		let strongHorizontalEdges = 0;
		let strongVerticalEdges = 0;
		let totalChecks = 0;

		// More comprehensive edge detection
		for (let y = 5; y < height - 5; y += 5) {
			for (let x = 5; x < width - 5; x += 5) {
				const index = (y * width + x) * 4;
				const currentBrightness =
					(data[index] + data[index + 1] + data[index + 2]) / 3;

				// Check horizontal edges (walls, furniture tops)
				const rightIndex = (y * width + (x + 5)) * 4;
				const rightBrightness =
					(data[rightIndex] +
						data[rightIndex + 1] +
						data[rightIndex + 2]) /
					3;

				// Check vertical edges (wall corners, furniture sides)
				const bottomIndex = ((y + 5) * width + x) * 4;
				const bottomBrightness =
					(data[bottomIndex] +
						data[bottomIndex + 1] +
						data[bottomIndex + 2]) /
					3;

				// Stronger threshold for room edges
				if (Math.abs(currentBrightness - rightBrightness) > 40)
					strongHorizontalEdges++;
				if (Math.abs(currentBrightness - bottomBrightness) > 40)
					strongVerticalEdges++;
				totalChecks++;
			}
		}

		const horizontalEdgeRatio = strongHorizontalEdges / totalChecks;
		const verticalEdgeRatio = strongVerticalEdges / totalChecks;

		// Rooms have significant architectural lines
		return horizontalEdgeRatio > 0.15 && verticalEdgeRatio > 0.15;
	};

	// New function to detect room geometry (corners, rectangular shapes)
	const detectRoomGeometry = (imageData) => {
		const { data, width, height } = imageData;
		let corners = 0;
		let rectangularShapes = 0;

		// Look for corner-like patterns (L-shapes in brightness)
		for (let y = 10; y < height - 10; y += 10) {
			for (let x = 10; x < width - 10; x += 10) {
				const centerIndex = (y * width + x) * 4;
				const centerBright =
					(data[centerIndex] +
						data[centerIndex + 1] +
						data[centerIndex + 2]) /
					3;

				// Check surrounding pixels for corner patterns
				const topIndex = ((y - 5) * width + x) * 4;
				const bottomIndex = ((y + 5) * width + x) * 4;
				const leftIndex = (y * width + (x - 5)) * 4;
				const rightIndex = (y * width + (x + 5)) * 4;

				const topBright =
					(data[topIndex] + data[topIndex + 1] + data[topIndex + 2]) /
					3;
				const bottomBright =
					(data[bottomIndex] +
						data[bottomIndex + 1] +
						data[bottomIndex + 2]) /
					3;
				const leftBright =
					(data[leftIndex] +
						data[leftIndex + 1] +
						data[leftIndex + 2]) /
					3;
				const rightBright =
					(data[rightIndex] +
						data[rightIndex + 1] +
						data[rightIndex + 2]) /
					3;

				// Corner detection: significant brightness differences in perpendicular directions
				const verticalDiff = Math.abs(topBright - bottomBright);
				const horizontalDiff = Math.abs(leftBright - rightBright);

				if (verticalDiff > 50 && horizontalDiff > 50) corners++;
			}
		}

		// Rooms typically have multiple corners from walls, furniture, etc.
		return corners > (width * height) / 2000; // Threshold based on image size
	};

	// Calculate lighting variance (rooms have varied lighting)
	const calculateLightingVariance = (imageData) => {
		const { data } = imageData;
		let brightnesses = [];

		for (let i = 0; i < data.length; i += 40) {
			const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
			brightnesses.push(brightness);
		}

		const mean =
			brightnesses.reduce((sum, b) => sum + b, 0) / brightnesses.length;
		const variance =
			brightnesses.reduce((sum, b) => sum + Math.pow(b - mean, 2), 0) /
			brightnesses.length;
		const stdDev = Math.sqrt(variance);

		return stdDev / 255; // Normalize to 0-1
	};

	// Calculate edge complexity (rooms have moderate complexity)
	const calculateEdgeComplexity = (imageData) => {
		const { data, width, height } = imageData;
		let edgeCount = 0;
		let totalPixels = 0;

		for (let y = 1; y < height - 1; y += 2) {
			for (let x = 1; x < width - 1; x += 2) {
				const index = (y * width + x) * 4;
				const currentBright =
					(data[index] + data[index + 1] + data[index + 2]) / 3;

				// Check all 8 neighbors
				let maxDiff = 0;
				for (let dy = -1; dy <= 1; dy++) {
					for (let dx = -1; dx <= 1; dx++) {
						if (dx === 0 && dy === 0) continue;
						const neighborIndex = ((y + dy) * width + (x + dx)) * 4;
						const neighborBright =
							(data[neighborIndex] +
								data[neighborIndex + 1] +
								data[neighborIndex + 2]) /
							3;
						maxDiff = Math.max(
							maxDiff,
							Math.abs(currentBright - neighborBright)
						);
					}
				}

				if (maxDiff > 30) edgeCount++;
				totalPixels++;
			}
		}

		return edgeCount / totalPixels;
	};

	// Stricter indoor color detection
	const detectIndoorColors = (imageData) => {
		const { data } = imageData;
		const colorCategories = {
			neutral: 0,
			wood: 0,
			wall: 0,
			fabric: 0,
			vibrant: 0,
		};

		for (let i = 0; i < data.length; i += 32) {
			const r = data[i];
			const g = data[i + 1];
			const b = data[i + 2];

			if (isNeutralColor(r, g, b)) colorCategories.neutral++;
			if (isWoodColor(r, g, b)) colorCategories.wood++;
			if (isWallColor(r, g, b)) colorCategories.wall++;
			if (isFabricColor(r, g, b)) colorCategories.fabric++;
			if (isVibrantColor(r, g, b)) colorCategories.vibrant++;
		}

		const totalSamples = data.length / 32;
		const neutralRatio = colorCategories.neutral / totalSamples;
		const woodRatio = colorCategories.wood / totalSamples;
		const wallRatio = colorCategories.wall / totalSamples;
		const fabricRatio = colorCategories.fabric / totalSamples;
		const vibrantRatio = colorCategories.vibrant / totalSamples;

		// Rooms have high neutral/wall colors, some wood, some fabric, but not too vibrant
		return (
			neutralRatio + wallRatio > 0.5 &&
			(woodRatio > 0.05 || fabricRatio > 0.1) &&
			vibrantRatio < 0.3
		);
	};

	// Enhanced color classification
	const isNeutralColor = (r, g, b) => {
		const avg = (r + g + b) / 3;
		const variance =
			Math.abs(r - avg) + Math.abs(g - avg) + Math.abs(b - avg);
		return variance < 25 && avg > 80 && avg < 220; // More specific range
	};

	const isWoodColor = (r, g, b) => {
		return (
			r > 80 &&
			r < 180 &&
			g > 50 &&
			g < 140 &&
			b > 20 &&
			b < 100 &&
			r > g &&
			g > b // Wood has this color progression
		);
	};

	const isWallColor = (r, g, b) => {
		const avg = (r + g + b) / 3;
		return (
			avg > 160 &&
			avg < 240 &&
			Math.abs(r - g) < 30 &&
			Math.abs(g - b) < 30 &&
			Math.abs(r - b) < 30
		);
	};

	const isFabricColor = (r, g, b) => {
		const saturation = Math.max(r, g, b) - Math.min(r, g, b);
		const brightness = (r + g + b) / 3;
		return (
			saturation > 20 &&
			saturation < 100 &&
			brightness > 60 &&
			brightness < 180
		);
	};

	const isVibrantColor = (r, g, b) => {
		const saturation = Math.max(r, g, b) - Math.min(r, g, b);
		return saturation > 100;
	};

	// Improved depth detection
	const detectDepthIndicators = (imageData) => {
		const { data, width, height } = imageData;
		let shadowAreas = 0;
		let midtones = 0;
		let highlights = 0;
		let totalSamples = 0;

		for (let i = 0; i < data.length; i += 120) {
			const r = data[i];
			const g = data[i + 1];
			const b = data[i + 2];

			const brightness = (r + g + b) / 3;
			if (brightness < 60) shadowAreas++;
			else if (brightness < 140) midtones++;
			else if (brightness > 180) highlights++;
			totalSamples++;
		}

		const shadowRatio = shadowAreas / totalSamples;
		const midtoneRatio = midtones / totalSamples;
		const highlightRatio = highlights / totalSamples;

		// Rooms have good distribution of shadows, midtones, and highlights
		return (
			shadowRatio > 0.1 &&
			shadowRatio < 0.35 &&
			midtoneRatio > 0.3 &&
			highlightRatio > 0.1 &&
			highlightRatio < 0.3
		);
	};

	// Update handleFileChange to include validation
	const handleFileChange = async (e) => {
		const f = e.target.files[0];
		if (
			f &&
			(f.type === "image/jpeg" || f.type === "image/png") &&
			f.size <= 10 * 1024 * 1024
		) {
			setValidating(true);
			setValidationError(null); // Clear any previous error

			try {
				// Validate if image contains a room
				const isRoom = await detectRoomFeatures(f);

				if (!isRoom) {
					setValidationError(t("invalidRoomImage")); // Set validation error
					setLocalFile(f); // Still show the file
					setPreview(URL.createObjectURL(f));
					setGlobalFile(f);
					setGlobalPreview(URL.createObjectURL(f));
					toast.error(t("invalidRoomImage")); // Keep toast as well
				} else {
					setLocalFile(f);
					setPreview(URL.createObjectURL(f));
					setGlobalFile(f);
					setGlobalPreview(URL.createObjectURL(f));
					toast.success(t("roomDetected"));
				}
			} catch (error) {
				console.error("Room validation error:", error);
				// If validation fails, allow the upload anyway
				setLocalFile(f);
				setPreview(URL.createObjectURL(f));
				setGlobalFile(f);
				setGlobalPreview(URL.createObjectURL(f));
				setValidationError(null); // No error if validation fails due to technical issues
			}

			setValidating(false);
		} else {
			toast.error(t("invalidFileFormat"));
		}
	};

	return (
		<div className="flex flex-col items-center justify-start w-full px-4 py-6 text-center mb-30 sm:px-6 md:px-8 lg:px-0">
			{/* Title */}
			<h1 className="mb-4 text-xl font-normal mt-10  text-[#004f44] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight sm:leading-normal">
				{t("title")}
			</h1>

			{/* Description */}
			<div className="w-full max-w-3xl mb-8 text-sm leading-relaxed text-[#004f44] sm:text-base md:text-lg lg:text-xl sm:mb-10 md:mb-12">
				<p className="mb-2">{t("description1")}</p>
				<p className="m-0">{t("description2")}</p>
			</div>

			{/* Upload section */}
			<div className="flex flex-col items-center justify-center w-full max-w-6xl gap-6 md:flex-row md:items-start lg:gap-8">
				{/* Upload Box */}
				<div className="w-full md:flex-1 md:max-w-5xl">
					<div className="h-48 sm:h-56 md:h-64 lg:h-80 rounded-lg bg-[#f7fffd] border-[#25826c] border-dashed border-2 box-border flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
						{validating ? (
							<div className="flex flex-col items-center gap-4">
								<div className="w-8 h-8 border-2 border-[#318161] border-t-transparent rounded-full animate-spin"></div>
								<p className="text-sm text-[#004f44]">
									{t("validatingImage")}
								</p>
							</div>
						) : (
							<label
								className="flex items-center justify-center w-full h-full cursor-pointer"
								htmlFor="file-upload"
							>
								<div className="flex flex-col items-center justify-center w-full gap-3 sm:gap-4 md:gap-6">
									<Image
										className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
										loading="lazy"
										width={66}
										height={66}
										alt=""
										src="/images/report/materialsymbolsupload.svg"
									/>
									<h3 className="text-sm font-normal text-center sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#004f44] px-2">
										{t("uploadAction")}
									</h3>
									<div className="text-xs text-center sm:text-sm md:text-base lg:text-lg text-[#666] px-2">
										{t("fileFormat")}
									</div>
									<button
										type="button"
										className="px-4 py-2 text-sm font-medium text-white transition-all duration-200 bg-transparent border-none rounded-lg cursor-pointer sm:px-6 sm:py-3 md:text-base lg:text-lg bg-gradient-to-r from-[#318161] to-[#318177] hover:scale-105 active:scale-95"
										onClick={() =>
											fileInputRef.current?.click()
										}
									>
										{t("browseButton")}
									</button>
								</div>
							</label>
						)}
						<input
							className="hidden"
							type="file"
							id="file-upload"
							accept="image/jpeg,image/png"
							ref={fileInputRef}
							onChange={handleFileChange}
							disabled={validating}
						/>
					</div>
					<div className="mt-3 text-xs text-left sm:text-sm md:text-base text-[#004f44] px-1">
						{t("disclaimer")}
					</div>
				</div>

				{/* Uploaded File Info */}
				{file && (
					<div className="flex flex-col items-center w-full gap-4 mt-4 md:items-end md:w-auto md:mt-0">
						<div
							className={`flex items-center gap-3 p-3 border rounded-lg shadow-sm sm:gap-4 ${
								validationError
									? "bg-red-50 border-red-200"
									: "bg-white border-gray-100"
							}`}
						>
							<Image
								className="object-cover w-12 h-12 rounded sm:w-14 sm:h-14 md:w-16 md:h-16"
								loading="lazy"
								width={64}
								height={64}
								alt=""
								src={preview}
							/>
							<div className="flex flex-col justify-center min-w-0">
								<div className="text-sm font-medium truncate sm:text-base text-[#004f44] max-w-32 sm:max-w-40">
									{file.name}
								</div>
								<div className="text-xs text-gray-500 sm:text-sm">
									{(file.size / 1024 / 1024).toFixed(2)} MB
								</div>
								{/* Validation Error Message */}
								{validationError && (
									<div className="flex items-center gap-1 mt-1">
										<svg
											className="flex-shrink-0 w-3 h-3 text-red-500"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
												clipRule="evenodd"
											/>
										</svg>
										<span className="text-xs font-medium text-red-600 sm:text-sm">
											{validationError}
										</span>
									</div>
								)}
							</div>
						</div>
						<button
							onClick={handleDelete}
							className={`flex items-center justify-center w-8 h-8 transition-colors rounded-full sm:w-10 sm:h-10 ${
								validationError
									? "bg-red-100 hover:bg-red-200"
									: "bg-red-50 hover:bg-red-100"
							}`}
						>
							<Image
								className="w-4 h-4 sm:w-5 sm:h-5"
								loading="lazy"
								width={20}
								height={20}
								alt={t("close")}
								src="/images/linemdtrash.png"
							/>
						</button>
					</div>
				)}
			</div>

			{/* Next Step Button */}
			{file &&
				!validationError && ( // Only show if no validation error
					<div className="flex justify-center w-full mt-8 sm:mt-10">
						<button
							type="button"
							className="w-full max-w-xs px-6 py-3 text-base font-medium text-white transition-all duration-200 rounded-lg shadow-lg sm:w-auto sm:px-8 sm:py-4 sm:text-lg bg-gradient-to-r from-[#7BB8A9] to-[#318177] hover:scale-105 hover:shadow-xl active:scale-95"
							onClick={() => setShowModal(true)}
						>
							{t("nextStep")}
						</button>
					</div>
				)}

			{/* Error message for non-room images */}
			{file && validationError && (
				<div className="flex justify-center w-full mt-8 sm:mt-10">
					<div className="flex items-center max-w-md gap-3 px-4 py-3 text-sm text-red-700 border border-red-200 rounded-lg bg-red-50 sm:text-base">
						<svg
							className="flex-shrink-0 w-5 h-5 text-red-500"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fillRule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
								clipRule="evenodd"
							/>
						</svg>
						<div>
							<p className="font-medium">
								{t("uploadDifferentImage")}
							</p>
							<p className="mt-1 text-xs text-red-600">
								{t("roomImageRequired")}
							</p>
						</div>
					</div>
				</div>
			)}

			{/* Modal */}
			{showModal && (
				<>
					{/* Backdrop */}
					<div
						className="fixed inset-0 z-40 bg-opacity-30 backdrop-blur-sm"
						onClick={() => setShowModal(false)}
					/>

					{/* Modal Content */}
					<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
						<div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl">
							{/* Modal Header */}
							<div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-white border-b rounded-t-xl sm:p-6">
								<h2 className="text-lg font-bold text-center text-[#004f44] sm:text-xl">
									{t("modalTitle")}
								</h2>
								<button
									className="text-2xl text-gray-400 transition-colors hover:text-gray-600"
									onClick={() => setShowModal(false)}
									aria-label={t("close")}
								>
									×
								</button>
							</div>

							{/* Modal Body */}
							<div className="p-4 space-y-4 sm:p-6 sm:space-y-6">
								{/* Gender */}
								<div className="space-y-2">
									<label className="block text-sm font-medium text-left text-[#004f44] sm:text-base">
										{t("gender")}
									</label>
									<select
										className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#318161] focus:border-transparent sm:text-base"
										value={gender}
										onChange={(e) =>
											setGender(e.target.value)
										}
									>
										<option value="">
											{t("genderSelect")}
										</option>
										<option value="male">
											{t("male")}
										</option>
										<option value="female">
											{t("female")}
										</option>
									</select>
								</div>

								{/* Birth Date Time */}
								<div className="space-y-2">
									<label className="block text-sm font-medium text-left text-[#004f44] sm:text-base">
										{t("birthDateTime")}
									</label>
									<div className="grid grid-cols-4 gap-2 sm:gap-3">
										<select
											className="px-2 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#318161] focus:border-transparent sm:text-sm"
											value={year}
											onChange={(e) =>
												setYear(e.target.value)
											}
										>
											<option value="">
												{t("year")}
											</option>
											{years.map((y) => (
												<option key={y} value={y}>
													{y}
												</option>
											))}
										</select>
										<select
											className="px-2 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#318161] focus:border-transparent sm:text-sm"
											value={month}
											onChange={(e) =>
												setMonth(e.target.value)
											}
										>
											<option value="">
												{t("month")}
											</option>
											{months.map((m) => (
												<option key={m} value={m}>
													{m}
												</option>
											))}
										</select>
										<select
											className="px-2 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#318161] focus:border-transparent sm:text-sm"
											value={day}
											onChange={(e) =>
												setDay(e.target.value)
											}
										>
											<option value="">{t("day")}</option>
											{days.map((d) => (
												<option key={d} value={d}>
													{d}
												</option>
											))}
										</select>
										<select
											className="px-2 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#318161] focus:border-transparent sm:text-sm"
											value={hour}
											onChange={(e) =>
												setHour(e.target.value)
											}
										>
											<option value="">
												{t("hour")}
											</option>
											{hours.map((h) => (
												<option key={h} value={h}>
													{h}
												</option>
											))}
										</select>
									</div>
								</div>

								{/* Room Type */}
								<div className="space-y-2">
									<label className="block text-sm font-medium text-left text-[#004f44] sm:text-base">
										{t("roomType")}
									</label>
									<select
										className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#318161] focus:border-transparent sm:text-base"
										value={roomType}
										onChange={(e) =>
											setRoomType(e.target.value)
										}
									>
										<option value="">
											{t("roomTypeSelect")}
										</option>
										{roomTypes.map((type) => (
											<option key={type} value={type}>
												{t(`roomTypes.${type}`)}
											</option>
										))}
									</select>
								</div>

								{/* Direction */}
								<div className="space-y-2">
									<label className="block text-sm font-medium text-left text-[#004f44] sm:text-base">
										{t("direction")}
									</label>
									<select
										className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#318161] focus:border-transparent sm:text-base"
										value={direction}
										onChange={(e) =>
											setDirection(e.target.value)
										}
									>
										<option value="">
											{t("directionSelect")}
										</option>
										{directions.map((dir) => (
											<option key={dir} value={dir}>
												{t(`directions.${dir}`)}
											</option>
										))}
									</select>
								</div>
							</div>

							{/* Modal Footer */}
							<div className="sticky bottom-0 z-10 p-4 space-y-3 bg-white border-t rounded-b-xl sm:p-6">
								<button
									className="w-full py-3 text-base font-bold text-white transition-all duration-200 rounded-lg shadow-lg sm:text-lg bg-gradient-to-r from-[#7BB8A9] to-[#318177] hover:scale-105 hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
									onClick={handleStart}
									disabled={loading}
								>
									{loading
										? t("calculating")
										: t("startAnalysis")}
								</button>
								<button
									className="w-full px-3 py-2 text-sm text-gray-500 transition-colors bg-transparent rounded hover:text-gray-700 hover:bg-gray-50"
									onClick={handleBack}
								>
									{t("back")}
								</button>
							</div>
						</div>
					</div>
				</>
			)}

			{/* Results and Loading */}
			{result && (
				<div className="w-full max-w-2xl p-4 mt-6 text-sm text-gray-800 whitespace-pre-line bg-gray-100 rounded-lg sm:text-base">
					{result}
				</div>
			)}
			{loading && (
				<div className="mt-6 text-sm text-blue-500 sm:text-base">
					{t("processing")}
				</div>
			)}
		</div>
	);
}
