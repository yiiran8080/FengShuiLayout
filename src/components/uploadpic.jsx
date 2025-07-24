import React, { useState, useRef, useEffect } from "react";
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

// Helper function to convert file to base64
const fileToBase64 = (file) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
};

// Helper function to convert base64 back to file
const base64ToFile = (base64, filename, type) => {
	const arr = base64.split(",");
	const mime = arr[0].match(/:(.*?);/)[1];
	const bstr = atob(arr[1]);
	let n = bstr.length;
	const u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new File([u8arr], filename, { type: mime });
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
	const [validationError, setValidationError] = useState(null);
	const [isInitialized, setIsInitialized] = useState(false); // Add this state
	const fileInputRef = useRef(null);
	const router = useRouter();
	const { setPreview: setGlobalPreview, setFile: setGlobalFile } = useImage();
	const { data: session, status } = useSession();

	// Get room types and directions from translations
	const roomTypes = Object.keys(roomTypeMap);
	const directions = Object.keys(directionMap);

	// Save form data to localStorage
	const saveFormData = () => {
		try {
			const formData = {
				gender,
				year,
				month,
				day,
				hour,
				roomType,
				direction,
				validationError,
			};
			localStorage.setItem("uploadPicFormData", JSON.stringify(formData));
			console.log("Form data saved to localStorage");
		} catch (error) {
			console.error("Error saving form data:", error);
		}
	};

	// Load form data from localStorage
	const loadFormData = () => {
		try {
			const savedData = localStorage.getItem("uploadPicFormData");
			if (savedData) {
				const formData = JSON.parse(savedData);
				setGender(formData.gender || "");
				setYear(formData.year || "");
				setMonth(formData.month || "");
				setDay(formData.day || "");
				setHour(formData.hour || "");
				setRoomType(formData.roomType || "");
				setDirection(formData.direction || "");
				setValidationError(formData.validationError || null);
				console.log("Form data loaded from localStorage");
			}
		} catch (error) {
			console.error("Error loading form data:", error);
		}
	};

	// Save file data to sessionStorage
	const saveFileData = async (fileObj) => {
		try {
			if (fileObj) {
				const base64 = await fileToBase64(fileObj);
				const fileData = {
					base64,
					name: fileObj.name,
					size: fileObj.size,
					type: fileObj.type,
					lastModified: fileObj.lastModified,
					timestamp: Date.now(), // Add timestamp to track freshness
				};
				sessionStorage.setItem(
					"uploadPicFileData",
					JSON.stringify(fileData)
				);
				console.log("File data saved to sessionStorage:", fileObj.name);
			}
		} catch (error) {
			console.error("Error saving file data:", error);
		}
	};

	// Load file data from sessionStorage
	const loadFileData = async () => {
		try {
			const savedFileData = sessionStorage.getItem("uploadPicFileData");
			if (savedFileData) {
				const fileData = JSON.parse(savedFileData);

				// Check if file data is not too old (optional: 1 hour expiry)
				const isDataFresh =
					!fileData.timestamp ||
					Date.now() - fileData.timestamp < 60 * 60 * 1000;

				if (isDataFresh) {
					const restoredFile = base64ToFile(
						fileData.base64,
						fileData.name,
						fileData.type
					);

					// Create proper blob URL for preview instead of using base64 directly
					const previewUrl = URL.createObjectURL(restoredFile);

					setLocalFile(restoredFile);
					setPreview(previewUrl);
					setGlobalFile(restoredFile);
					setGlobalPreview(previewUrl);

					console.log(
						"File restored from sessionStorage:",
						fileData.name
					);
					console.log("Preview URL created:", previewUrl);

					return true; // Indicates file was restored
				} else {
					// Clear old data
					sessionStorage.removeItem("uploadPicFileData");
					console.log("Cleared old file data from sessionStorage");
				}
			}
		} catch (error) {
			console.error("Error loading file data:", error);
			// Clear corrupted data
			sessionStorage.removeItem("uploadPicFileData");
		}
		return false;
	};

	// Clear saved data
	const clearSavedData = () => {
		localStorage.removeItem("uploadPicFormData");
		sessionStorage.removeItem("uploadPicFileData");
		console.log("Saved data cleared");
	};

	// Enhanced initialization effect
	useEffect(() => {
		const initializeData = async () => {
			if (isInitialized) return; // Prevent multiple initializations

			console.log("Initializing component, loading saved data...");
			console.log("Session status:", status);

			// Always load form data
			loadFormData();

			// Try to restore file data
			const fileLoaded = await loadFileData();
			if (fileLoaded) {
				console.log("File successfully restored from storage");
			} else {
				console.log("No saved file found");
			}

			setIsInitialized(true);
		};

		initializeData();

		// Cleanup blob URLs on unmount
		return () => {
			if (preview && preview.startsWith("blob:")) {
				URL.revokeObjectURL(preview);
			}
		};
	}, []); // Remove session dependency to ensure it runs immediately

	// Additional effect to handle session changes
	useEffect(() => {
		if (status !== "loading" && isInitialized) {
			// If user just logged in and we have saved data, ensure the file is still displayed
			const recheckSavedData = async () => {
				if (!file && !preview) {
					console.log(
						"Session loaded, rechecking saved file data..."
					);
					const fileLoaded = await loadFileData();
					if (fileLoaded) {
						console.log("File restored after login");
					}
				}
			};
			recheckSavedData();
		}
	}, [status, isInitialized, file, preview]);

	// Save form data whenever it changes (but don't save on first render with empty values)
	useEffect(() => {
		if (
			isInitialized &&
			(gender || year || month || day || hour || roomType || direction)
		) {
			saveFormData();
		}
	}, [
		gender,
		year,
		month,
		day,
		hour,
		roomType,
		direction,
		validationError,
		isInitialized,
	]);

	const handleDelete = () => {
		// Cleanup blob URL if it exists
		if (preview && preview.startsWith("blob:")) {
			URL.revokeObjectURL(preview);
		}

		setLocalFile(null);
		setPreview(null);
		setGlobalFile(null);
		setGlobalPreview(null);
		setValidationError(null);
		clearSavedData(); // Clear saved data when user deletes
		if (fileInputRef.current) fileInputRef.current.value = "";
	};

	async function handleStart() {
		const engRoomType = roomTypeMap[roomType];
		const engDirection = directionMap[direction];

		// Check if user is authenticated
		if (status === "loading") {
			// Still loading session, wait a bit
			toast.info(t("checkingAuth") || "Checking authentication...");
			return;
		}

		if (status === "unauthenticated" || !session?.user?.userId) {
			// Save current form data before redirecting
			saveFormData();
			if (file) {
				await saveFileData(file);
			}

			// User is not authenticated, redirect to login with callback URL
			const callbackUrl = `/freereport?roomType=${encodeURIComponent(engRoomType)}&direction=${encodeURIComponent(engDirection)}`;
			const loginUrl = `/auth/login?callbackUrl=${encodeURIComponent(callbackUrl)}`;

			toast.info(
				t("redirectingToLogin") || "Please log in to continue..."
			);
			router.push(loginUrl);
			return;
		}

		// User is authenticated, proceed with saving user info
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
				// Clear saved data after successful submission
				clearSavedData();
				// Redirect to freereport with room parameters
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

	// Replace the existing isRoomImage function and related helper functions with this new comprehensive room detection logic:

	const isRoomImage = (file) => {
		return new Promise((resolve) => {
			const img = document.createElement("img");
			img.onload = () => {
				const canvas = document.createElement("canvas");
				const ctx = canvas.getContext("2d");

				// Optimize image size for analysis
				const maxSize = 512;
				const scale = Math.min(
					maxSize / img.width,
					maxSize / img.height
				);
				canvas.width = img.width * scale;
				canvas.height = img.height * scale;

				ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
				const imageData = ctx.getImageData(
					0,
					0,
					canvas.width,
					canvas.height
				);

				// Run comprehensive room detection
				const roomAnalysis = analyzeRoomFeatures(imageData);
				const isRoom = determineIfRoom(roomAnalysis);

				console.log("Room Detection Analysis:", {
					...roomAnalysis,
					finalDecision: isRoom ? "ROOM DETECTED" : "NOT A ROOM",
					confidence: roomAnalysis.overallScore,
				});

				URL.revokeObjectURL(img.src);
				resolve(isRoom);
			};

			img.onerror = () => {
				console.error("Failed to load image for room detection");
				URL.revokeObjectURL(img.src);
				resolve(false);
			};

			img.src = URL.createObjectURL(file);
		});
	};

	// Main analysis function that checks all room indicators
	const analyzeRoomFeatures = (imageData) => {
		const { data, width, height } = imageData;

		return {
			// Architectural features
			wallDetection: detectWalls(imageData),
			floorDetection: detectFloor(imageData),
			ceilingDetection: detectCeiling(imageData),
			cornersDetection: detectRoomCorners(imageData),

			// Openings and fixtures
			doorDetection: detectDoors(imageData),
			windowDetection: detectWindows(imageData),

			// Lighting and atmosphere
			lightingAnalysis: analyzeLighting(imageData),
			shadowAnalysis: analyzeShadows(imageData),

			// Indoor elements
			furnitureDetection: detectFurniture(imageData),
			textureAnalysis: analyzeTextures(imageData),
			colorAnalysis: analyzeIndoorColors(imageData),

			// Spatial characteristics
			perspectiveAnalysis: analyzePerspective(imageData),
			depthAnalysis: analyzeDepth(imageData),
			scaleAnalysis: analyzeScale(imageData),

			// Calculate overall score
			overallScore: 0, // Will be calculated in determineIfRoom
		};
	};

	// Determine if image is a room based on analysis
	const determineIfRoom = (analysis) => {
		let score = 0;
		let maxScore = 0;

		// Architectural features (high weight)
		if (analysis.wallDetection.detected)
			score += analysis.wallDetection.confidence * 25;
		maxScore += 25;

		if (analysis.floorDetection.detected)
			score += analysis.floorDetection.confidence * 20;
		maxScore += 20;

		if (analysis.cornersDetection.detected)
			score += analysis.cornersDetection.confidence * 15;
		maxScore += 15;

		// Openings (medium weight)
		if (analysis.doorDetection.detected)
			score += analysis.doorDetection.confidence * 15;
		maxScore += 15;

		if (analysis.windowDetection.detected)
			score += analysis.windowDetection.confidence * 10;
		maxScore += 10;

		// Indoor atmosphere (medium weight)
		if (analysis.lightingAnalysis.isIndoorLighting)
			score += analysis.lightingAnalysis.confidence * 10;
		maxScore += 10;

		if (analysis.shadowAnalysis.hasIndoorShadows)
			score += analysis.shadowAnalysis.confidence * 8;
		maxScore += 8;

		// Indoor elements (lower weight but important)
		if (analysis.furnitureDetection.detected)
			score += analysis.furnitureDetection.confidence * 12;
		maxScore += 12;

		if (analysis.textureAnalysis.hasIndoorTextures)
			score += analysis.textureAnalysis.confidence * 8;
		maxScore += 8;

		if (analysis.colorAnalysis.hasIndoorColors)
			score += analysis.colorAnalysis.confidence * 7;
		maxScore += 7;

		// Spatial characteristics (lower weight)
		if (analysis.perspectiveAnalysis.hasIndoorPerspective)
			score += analysis.perspectiveAnalysis.confidence * 5;
		maxScore += 5;

		if (analysis.depthAnalysis.hasIndoorDepth)
			score += analysis.depthAnalysis.confidence * 5;
		maxScore += 5;

		analysis.overallScore = (score / maxScore) * 100;

		// Updated room detection logic - simplified and more lenient
		// Pass if score is higher than 40
		const meetsScoreThreshold = analysis.overallScore > 37; // Changed from >= 45 to > 40

		// More lenient essential features check
		const hasBasicRoomFeatures =
			analysis.wallDetection.detected ||
			analysis.floorDetection.detected ||
			analysis.cornersDetection.detected ||
			analysis.lightingAnalysis.isIndoorLighting ||
			analysis.furnitureDetection.detected;

		// Room passes if it meets the score threshold AND has at least one basic room feature
		return meetsScoreThreshold && hasBasicRoomFeatures;
	};

	// Wall detection - looks for vertical surfaces and wall-like textures
	const detectWalls = (imageData) => {
		const { data, width, height } = imageData;
		let wallIndicators = 0;
		let verticalLines = 0;
		let wallTextures = 0;

		// Scan for vertical edges and consistent textures
		for (let x = 10; x < width - 10; x += 8) {
			let verticalConsistency = 0;
			let lastBrightness = null;

			for (let y = 10; y < height - 10; y += 8) {
				const index = (y * width + x) * 4;
				const brightness =
					(data[index] + data[index + 1] + data[index + 2]) / 3;

				// Check for vertical consistency (wall characteristic)
				if (lastBrightness !== null) {
					if (Math.abs(brightness - lastBrightness) < 30) {
						verticalConsistency++;
					}
				}
				lastBrightness = brightness;

				// Check for wall-like colors (neutral tones)
				const r = data[index],
					g = data[index + 1],
					b = data[index + 2];
				if (isWallColor(r, g, b)) {
					wallTextures++;
				}
			}

			if (verticalConsistency > (height / 8) * 0.6) {
				verticalLines++;
			}
		}

		// Check for horizontal wall boundaries
		let horizontalBoundaries = 0;
		for (let y = height * 0.2; y < height * 0.8; y += 15) {
			let edgeStrength = 0;
			for (let x = 10; x < width - 10; x += 10) {
				const topIndex = ((y - 5) * width + x) * 4;
				const bottomIndex = ((y + 5) * width + x) * 4;

				if (topIndex >= 0 && bottomIndex < data.length) {
					const topBright =
						(data[topIndex] +
							data[topIndex + 1] +
							data[topIndex + 2]) /
						3;
					const bottomBright =
						(data[bottomIndex] +
							data[bottomIndex + 1] +
							data[bottomIndex + 2]) /
						3;

					if (Math.abs(topBright - bottomBright) > 25) {
						edgeStrength++;
					}
				}
			}
			if (edgeStrength > (width / 10) * 0.3) {
				horizontalBoundaries++;
			}
		}

		const wallScore =
			(verticalLines / (width / 8)) * 0.5 +
			(wallTextures / ((width * height) / 64)) * 0.3 +
			(horizontalBoundaries / 10) * 0.2;

		return {
			detected: wallScore > 0.3,
			confidence: Math.min(wallScore, 1.0),
			verticalLines,
			wallTextures,
			horizontalBoundaries,
		};
	};

	// Floor detection - looks for horizontal surfaces at bottom of image
	const detectFloor = (imageData) => {
		const { data, width, height } = imageData;
		const floorRegionStart = Math.floor(height * 0.6); // Bottom 40% of image
		let floorTextures = 0;
		let horizontalPatterns = 0;
		let totalChecks = 0;

		// Analyze bottom portion for floor characteristics
		for (let y = floorRegionStart; y < height - 5; y += 6) {
			for (let x = 5; x < width - 5; x += 8) {
				const index = (y * width + x) * 4;
				const r = data[index],
					g = data[index + 1],
					b = data[index + 2];

				// Check for floor-like colors and textures
				if (isFloorColor(r, g, b)) {
					floorTextures++;
				}

				// Check for horizontal consistency (floor perspective)
				const rightIndex = (y * width + (x + 8)) * 4;
				if (rightIndex < data.length) {
					const currentBright = (r + g + b) / 3;
					const rightBright =
						(data[rightIndex] +
							data[rightIndex + 1] +
							data[rightIndex + 2]) /
						3;

					if (Math.abs(currentBright - rightBright) < 25) {
						horizontalPatterns++;
					}
				}
				totalChecks++;
			}
		}

		const floorScore =
			(floorTextures / totalChecks) * 0.7 +
			(horizontalPatterns / totalChecks) * 0.3;

		return {
			detected: floorScore > 0.25,
			confidence: Math.min(floorScore * 2, 1.0),
			floorTextures,
			horizontalPatterns,
		};
	};

	// Ceiling detection - looks for horizontal surfaces at top of image
	const detectCeiling = (imageData) => {
		const { data, width, height } = imageData;
		const ceilingRegionEnd = Math.floor(height * 0.4); // Top 40% of image
		let ceilingTextures = 0;
		let uniformAreas = 0;
		let totalChecks = 0;

		for (let y = 5; y < ceilingRegionEnd; y += 8) {
			for (let x = 5; x < width - 5; x += 8) {
				const index = (y * width + x) * 4;
				const r = data[index],
					g = data[index + 1],
					b = data[index + 2];

				// Check for ceiling-like colors (usually light/white)
				if (isCeilingColor(r, g, b)) {
					ceilingTextures++;
				}

				// Check for uniform areas (typical of ceilings)
				let uniformity = 0;
				for (let dx = -4; dx <= 4; dx += 4) {
					for (let dy = -4; dy <= 4; dy += 4) {
						const checkX = x + dx,
							checkY = y + dy;
						if (
							checkX >= 0 &&
							checkX < width &&
							checkY >= 0 &&
							checkY < height
						) {
							const checkIndex = (checkY * width + checkX) * 4;
							const checkBright =
								(data[checkIndex] +
									data[checkIndex + 1] +
									data[checkIndex + 2]) /
								3;
							const currentBright = (r + g + b) / 3;

							if (Math.abs(checkBright - currentBright) < 20) {
								uniformity++;
							}
						}
					}
				}

				if (uniformity >= 6) {
					uniformAreas++;
				}
				totalChecks++;
			}
		}

		const ceilingScore =
			(ceilingTextures / totalChecks) * 0.6 +
			(uniformAreas / totalChecks) * 0.4;

		return {
			detected: ceilingScore > 0.2,
			confidence: Math.min(ceilingScore * 2.5, 1.0),
			ceilingTextures,
			uniformAreas,
		};
	};

	// Room corners detection - looks for corner formations
	const detectRoomCorners = (imageData) => {
		const { data, width, height } = imageData;
		let corners = 0;

		// Check potential corner areas
		const cornerRegions = [
			{ x: 0, y: 0, w: width * 0.3, h: height * 0.3 }, // Top-left
			{ x: width * 0.7, y: 0, w: width * 0.3, h: height * 0.3 }, // Top-right
			{ x: 0, y: height * 0.7, w: width * 0.3, h: height * 0.3 }, // Bottom-left
			{
				x: width * 0.7,
				y: height * 0.7,
				w: width * 0.3,
				h: height * 0.3,
			}, // Bottom-right
		];

		cornerRegions.forEach((region) => {
			let cornerStrength = 0;
			const samples = 20;

			for (let i = 0; i < samples; i++) {
				const x = region.x + Math.random() * region.w;
				const y = region.y + Math.random() * region.h;

				if (x >= 5 && x < width - 5 && y >= 5 && y < height - 5) {
					cornerStrength += analyzeCornerPoint(
						data,
						width,
						height,
						Math.floor(x),
						Math.floor(y)
					);
				}
			}

			if (cornerStrength / samples > 0.3) {
				corners++;
			}
		});

		return {
			detected: corners >= 2,
			confidence: corners / 4,
			cornersFound: corners,
		};
	};

	// Analyze a point for corner characteristics
	const analyzeCornerPoint = (data, width, height, x, y) => {
		const directions = [
			[-1, -1],
			[0, -1],
			[1, -1],
			[-1, 0],
			[1, 0],
			[-1, 1],
			[0, 1],
			[1, 1],
		];

		const centerIndex = (y * width + x) * 4;
		const centerBright =
			(data[centerIndex] +
				data[centerIndex + 1] +
				data[centerIndex + 2]) /
			3;

		let edgeCount = 0;
		let brightnessDiffs = [];

		directions.forEach(([dx, dy]) => {
			const nx = x + dx * 3,
				ny = y + dy * 3;
			if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
				const neighborIndex = (ny * width + nx) * 4;
				const neighborBright =
					(data[neighborIndex] +
						data[neighborIndex + 1] +
						data[neighborIndex + 2]) /
					3;
				const diff = Math.abs(centerBright - neighborBright);
				brightnessDiffs.push(diff);

				if (diff > 30) {
					edgeCount++;
				}
			}
		});

		// Corner should have multiple edge directions
		return edgeCount >= 4 ? edgeCount / 8 : 0;
	};

	// Door detection - looks for door-like rectangular openings
	const detectDoors = (imageData) => {
		const { data, width, height } = imageData;
		let doorShapes = 0;

		// Scan for door-like rectangles (tall and narrow)
		for (let y = height * 0.1; y < height * 0.9; y += 12) {
			for (let x = 10; x < width - 40; x += 12) {
				const doorScore = analyzeDoorRegion(data, width, height, x, y);
				if (doorScore > 0.5) {
					doorShapes++;
				}
			}
		}

		return {
			detected: doorShapes > 0,
			confidence: Math.min(doorShapes / 3, 1.0),
			doorShapes,
		};
	};

	// Analyze region for door characteristics
	const analyzeDoorRegion = (data, width, height, startX, startY) => {
		const doorWidth = 30,
			doorHeight = 60;

		if (startX + doorWidth >= width || startY + doorHeight >= height) {
			return 0;
		}

		let darkInterior = 0;
		let frameEdges = 0;
		let totalChecks = 0;

		// Check interior darkness and frame edges
		for (let y = startY; y < startY + doorHeight; y += 6) {
			for (let x = startX; x < startX + doorWidth; x += 6) {
				const index = (y * width + x) * 4;
				const brightness =
					(data[index] + data[index + 1] + data[index + 2]) / 3;

				// Door interior should be darker
				if (brightness < 80) {
					darkInterior++;
				}

				// Check if we're at the edge
				const isEdge =
					x === startX ||
					x === startX + doorWidth - 6 ||
					y === startY ||
					y === startY + doorHeight - 6;

				if (isEdge && brightness > 100) {
					frameEdges++;
				}

				totalChecks++;
			}
		}

		const darkRatio = darkInterior / totalChecks;
		const frameRatio = frameEdges / (totalChecks * 0.3); // Approximate edge pixels

		return darkRatio * 0.7 + frameRatio * 0.3;
	};

	// Window detection - looks for bright rectangular areas
	const detectWindows = (imageData) => {
		const { data, width, height } = imageData;
		let windowShapes = 0;

		for (let y = height * 0.1; y < height * 0.7; y += 15) {
			for (let x = 10; x < width - 50; x += 15) {
				const windowScore = analyzeWindowRegion(
					data,
					width,
					height,
					x,
					y
				);
				if (windowScore > 0.4) {
					windowShapes++;
				}
			}
		}

		return {
			detected: windowShapes > 0,
			confidence: Math.min(windowShapes / 2, 1.0),
			windowShapes,
		};
	};

	// Analyze region for window characteristics
	const analyzeWindowRegion = (data, width, height, startX, startY) => {
		const windowWidth = 50,
			windowHeight = 40;

		if (startX + windowWidth >= width || startY + windowHeight >= height) {
			return 0;
		}

		let brightInterior = 0;
		let totalChecks = 0;

		for (let y = startY + 5; y < startY + windowHeight - 5; y += 6) {
			for (let x = startX + 5; x < startX + windowWidth - 5; x += 6) {
				const index = (y * width + x) * 4;
				const brightness =
					(data[index] + data[index + 1] + data[index + 2]) / 3;

				if (brightness > 150) {
					brightInterior++;
				}
				totalChecks++;
			}
		}

		return brightInterior / totalChecks;
	};

	// Lighting analysis - checks for indoor lighting characteristics
	const analyzeLighting = (imageData) => {
		const { data } = imageData;
		let brightPixels = 0,
			darkPixels = 0,
			mediumPixels = 0;
		let totalPixels = 0;

		for (let i = 0; i < data.length; i += 12) {
			const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;

			if (brightness > 180) brightPixels++;
			else if (brightness < 70) darkPixels++;
			else mediumPixels++;

			totalPixels++;
		}

		const brightRatio = brightPixels / totalPixels;
		const darkRatio = darkPixels / totalPixels;
		const mediumRatio = mediumPixels / totalPixels;

		// Indoor lighting has balanced bright/medium/dark areas
		const isIndoorLighting =
			brightRatio > 0.05 &&
			brightRatio < 0.4 &&
			darkRatio > 0.1 &&
			darkRatio < 0.5 &&
			mediumRatio > 0.3;

		return {
			isIndoorLighting,
			confidence: isIndoorLighting ? 0.8 : 0.2,
			brightRatio,
			darkRatio,
			mediumRatio,
		};
	};

	// Shadow analysis - looks for indoor shadow patterns
	const analyzeShadows = (imageData) => {
		const { data, width, height } = imageData;
		let shadowAreas = 0;
		let shadowTransitions = 0;
		let totalChecks = 0;

		for (let y = 10; y < height - 10; y += 10) {
			for (let x = 10; x < width - 10; x += 10) {
				const index = (y * width + x) * 4;
				const brightness =
					(data[index] + data[index + 1] + data[index + 2]) / 3;

				if (brightness < 60) {
					shadowAreas++;

					// Check for shadow transitions (edges)
					const rightIndex = (y * width + (x + 10)) * 4;
					if (rightIndex < data.length) {
						const rightBright =
							(data[rightIndex] +
								data[rightIndex + 1] +
								data[rightIndex + 2]) /
							3;
						if (rightBright > brightness + 40) {
							shadowTransitions++;
						}
					}
				}
				totalChecks++;
			}
		}

		const shadowRatio = shadowAreas / totalChecks;
		const transitionRatio = shadowTransitions / totalChecks;
		const hasIndoorShadows =
			shadowRatio > 0.05 && shadowRatio < 0.4 && transitionRatio > 0.02;

		return {
			hasIndoorShadows,
			confidence: hasIndoorShadows ? 0.7 : 0.3,
			shadowRatio,
			transitionRatio,
		};
	};

	// Furniture detection - looks for furniture-like shapes and colors
	const detectFurniture = (imageData) => {
		const { data, width, height } = imageData;
		let furnitureShapes = 0;
		let furnitureColors = 0;
		let totalChecks = 0;

		for (let y = height * 0.3; y < height - 20; y += 15) {
			for (let x = 20; x < width - 20; x += 15) {
				// Fixed: removed comma, added semicolon
				const index = (y * width + x) * 4;
				const r = data[index],
					g = data[index + 1],
					b = data[index + 2];

				// Check for furniture colors (wood, fabric, etc.)
				if (isFurnitureColor(r, g, b)) {
					furnitureColors++;
				}

				// Check for furniture-like rectangular shapes
				if (
					analyzeRectangularShape(data, width, height, x, y, 25, 20)
				) {
					furnitureShapes++;
				}

				totalChecks++;
			}
		}

		const furnitureScore =
			(furnitureColors / totalChecks) * 0.6 +
			(furnitureShapes / totalChecks) * 0.4;

		return {
			detected: furnitureScore > 0.15,
			confidence: Math.min(furnitureScore * 3, 1.0),
			furnitureColors,
			furnitureShapes,
		};
	};

	// Texture analysis - checks for indoor surface textures
	const analyzeTextures = (imageData) => {
		const { data, width, height } = imageData;
		let smoothTextures = 0;
		let patternedTextures = 0;
		let totalChecks = 0;

		for (let y = 10; y < height - 10; y += 12) {
			for (let x = 10; x < width - 10; x += 12) {
				const textureType = analyzeLocalTexture(
					data,
					width,
					height,
					x,
					y
				);

				if (textureType === "smooth") smoothTextures++;
				else if (textureType === "patterned") patternedTextures++;

				totalChecks++;
			}
		}

		const smoothRatio = smoothTextures / totalChecks;
		const patternedRatio = patternedTextures / totalChecks;
		const hasIndoorTextures = smoothRatio > 0.2 || patternedRatio > 0.1;

		return {
			hasIndoorTextures,
			confidence: hasIndoorTextures ? 0.6 : 0.4,
			smoothRatio,
			patternedRatio,
		};
	};

	// Analyze local texture at a point
	const analyzeLocalTexture = (data, width, height, x, y) => {
		let variance = 0;
		let samples = 0;
		let brightnesses = [];

		// Sample 3x3 area
		for (let dy = -3; dy <= 3; dy += 3) {
			for (let dx = -3; dx <= 3; dx += 3) {
				const nx = x + dx,
					ny = y + dy;
				if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
					const index = (ny * width + nx) * 4;
					const brightness =
						(data[index] + data[index + 1] + data[index + 2]) / 3;
					brightnesses.push(brightness);
					samples++;
				}
			}
		}

		if (samples > 0) {
			const mean = brightnesses.reduce((a, b) => a + b, 0) / samples;
			variance =
				brightnesses.reduce(
					(sum, b) => sum + Math.pow(b - mean, 2),
					0
				) / samples;
		}

		if (variance < 200) return "smooth";
		else if (variance > 800) return "rough";
		else return "patterned";
	};

	// Indoor color analysis
	const analyzeIndoorColors = (imageData) => {
		const { data } = imageData;
		let neutralColors = 0;
		let warmColors = 0;
		let vibrantColors = 0;
		let totalPixels = 0;

		for (let i = 0; i < data.length; i += 16) {
			const r = data[i],
				g = data[i + 1],
				b = data[i + 2];

			if (isNeutralColor(r, g, b)) neutralColors++;
			else if (isWarmColor(r, g, b)) warmColors++;
			else if (isVibrantColor(r, g, b)) vibrantColors++;

			totalPixels++;
		}

		const neutralRatio = neutralColors / totalPixels;
		const warmRatio = warmColors / totalPixels;
		const vibrantRatio = vibrantColors / totalPixels;

		const hasIndoorColors = neutralRatio > 0.3 && vibrantRatio < 0.3;

		return {
			hasIndoorColors,
			confidence: hasIndoorColors ? 0.7 : 0.3,
			neutralRatio,
			warmRatio,
			vibrantRatio,
		};
	};

	// Perspective analysis - checks for indoor perspective cues
	const analyzePerspective = (imageData) => {
		const { data, width, height } = imageData;
		let convergeingLines = 0;
		let horizontalLines = 0;

		// Check for perspective lines
		for (let y = height * 0.3; y < height * 0.7; y += 20) {
			let lineStrength = 0;
			for (let x = 10; x < width - 10; x += 10) {
				const index = (y * width + x) * 4;
				const rightIndex = (y * width + (x + 10)) * 4;

				if (rightIndex < data.length) {
					const brightness1 =
						(data[index] + data[index + 1] + data[index + 2]) / 3;
					const brightness2 =
						(data[rightIndex] +
							data[rightIndex + 1] +
							data[rightIndex + 2]) /
						3;

					if (Math.abs(brightness1 - brightness2) > 25) {
						lineStrength++;
					}
				}
			}

			if (lineStrength > (width / 10) * 0.3) {
				horizontalLines++;
			}
		}

		const hasIndoorPerspective = horizontalLines >= 2;

		return {
			hasIndoorPerspective,
			confidence: hasIndoorPerspective ? 0.6 : 0.4,
			horizontalLines,
		};
	};

	// Depth analysis - looks for depth cues
	const analyzeDepth = (imageData) => {
		const { data, width, height } = imageData;
		let depthCues = 0;

		// Check for size variation (things get smaller with distance)
		const foregroundBrightness = getRegionBrightness(
			data,
			width,
			height,
			0,
			height * 0.7,
			width,
			height
		);
		const backgroundBrightness = getRegionBrightness(
			data,
			width,
			height,
			0,
			0,
			width,
			height * 0.3
		);

		if (Math.abs(foregroundBrightness - backgroundBrightness) > 20) {
			depthCues++;
		}

		// Check for overlapping objects
		let overlaps = 0;
		for (let y = height * 0.2; y < height * 0.8; y += 25) {
			for (let x = width * 0.2; x < width * 0.8; x += 25) {
				if (analyzeObjectOverlap(data, width, height, x, y)) {
					overlaps++;
				}
			}
		}

		if (overlaps > 2) depthCues++;

		const hasIndoorDepth = depthCues >= 1;

		return {
			hasIndoorDepth,
			confidence: hasIndoorDepth ? 0.5 : 0.3,
			depthCues,
		};
	};

	// Scale analysis - checks if objects are at indoor scale
	const analyzeScale = (imageData) => {
		const { data, width, height } = imageData;
		let appropriateScale = 0;
		let totalObjects = 0;

		// Look for objects of appropriate indoor scale
		for (let y = 20; y < height - 40; y += 30) {
			for (let x = 20; x < width - 40; x += 30) {
				const objectSize = measureObjectSize(data, width, height, x, y);
				if (objectSize > 10 && objectSize < width * 0.3) {
					appropriateScale++;
				}
				totalObjects++;
			}
		}

		const scaleRatio = appropriateScale / totalObjects;
		const hasAppropriateScale = scaleRatio > 0.3;

		return {
			hasAppropriateScale,
			confidence: hasAppropriateScale ? 0.5 : 0.3,
			scaleRatio,
		};
	};

	// Helper functions for color classification
	const isWallColor = (r, g, b) => {
		const brightness = (r + g + b) / 3;
		const saturation = Math.max(r, g, b) - Math.min(r, g, b);
		return brightness > 120 && brightness < 240 && saturation < 40;
	};

	const isFloorColor = (r, g, b) => {
		// Wood, tile, carpet colors
		const isWood =
			r > 80 && r < 180 && g > 60 && g < 140 && b > 30 && b < 100;
		const isTile =
			Math.abs(r - g) < 30 &&
			Math.abs(g - b) < 30 &&
			(r + g + b) / 3 > 100;
		const isCarpet =
			Math.max(r, g, b) - Math.min(r, g, b) > 20 && (r + g + b) / 3 > 60;
		return isWood || isTile || isCarpet;
	};

	const isCeilingColor = (r, g, b) => {
		const brightness = (r + g + b) / 3;
		const saturation = Math.max(r, g, b) - Math.min(r, g, b);
		return brightness > 180 && saturation < 30;
	};

	const isFurnitureColor = (r, g, b) => {
		// Wood, fabric, leather, metal colors
		const isWood =
			r > 60 && r < 160 && g > 40 && g < 120 && b > 20 && b < 80;
		const isFabric =
			Math.max(r, g, b) - Math.min(r, g, b) > 15 && (r + g + b) / 3 > 50;
		const isLeather =
			r > 80 && r < 140 && g > 50 && g < 100 && b > 30 && b < 70;
		return isWood || isFabric || isLeather;
	};

	const isNeutralColor = (r, g, b) => {
		const avg = (r + g + b) / 3;
		const maxDiff = Math.max(
			Math.abs(r - avg),
			Math.abs(g - avg),
			Math.abs(b - avg)
		);
		return maxDiff < 30 && avg > 60 && avg < 200;
	};

	const isWarmColor = (r, g, b) => {
		return r > g && r > b && r > 100;
	};

	const isVibrantColor = (r, g, b) => {
		const saturation = Math.max(r, g, b) - Math.min(r, g, b);
		return saturation > 60;
	};

	// Additional helper functions
	const getRegionBrightness = (
		data,
		width,
		height,
		startX,
		startY,
		endX,
		endY
	) => {
		let totalBrightness = 0;
		let pixels = 0;

		for (let y = startY; y < endY; y += 5) {
			for (let x = startX; x < endX; x += 5) {
				if (x >= 0 && x < width && y >= 0 && y < height) {
					const index = (y * width + x) * 4;
					totalBrightness +=
						(data[index] + data[index + 1] + data[index + 2]) / 3;
					pixels++;
				}
			}
		}

		return pixels > 0 ? totalBrightness / pixels : 0;
	};

	const analyzeObjectOverlap = (data, width, height, x, y) => {
		// Simple overlap detection based on edge complexity
		let edgeCount = 0;
		const checkRadius = 8;

		for (let dy = -checkRadius; dy <= checkRadius; dy += 4) {
			for (let dx = -checkRadius; dx <= checkRadius; dx += 4) {
				const nx = x + dx,
					ny = y + dy;
				if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
					const index = (ny * width + nx) * 4;
					const centerIndex = (y * width + x) * 4;

					const brightness1 =
						(data[index] + data[index + 1] + data[index + 2]) / 3;
					const brightness2 =
						(data[centerIndex] +
							data[centerIndex + 1] +
							data[centerIndex + 2]) /
						3;
					if (Math.abs(brightness1 - brightness2) > 30) {
						edgeCount++;
					}
				}
			}
		}

		return edgeCount > 8; // High edge density suggests overlapping objects
	};

	const measureObjectSize = (data, width, height, startX, startY) => {
		// Measure connected region size
		const visited = new Set();
		const stack = [[startX, startY]];
		const startIndex = (startY * width + startX) * 4;
		const startBrightness =
			(data[startIndex] + data[startIndex + 1] + data[startIndex + 2]) /
			3;
		let size = 0;

		while (stack.length > 0 && size < 100) {
			// Limit to prevent excessive computation
			const [x, y] = stack.pop();
			const key = `${x},${y}`;

			if (
				visited.has(key) ||
				x < 0 ||
				x >= width ||
				y < 0 ||
				y >= height
			) {
				continue;
			}

			visited.add(key);
			const index = (y * width + x) * 4;
			const brightness =
				(data[index] + data[index + 1] + data[index + 2]) / 3;

			if (Math.abs(brightness - startBrightness) < 25) {
				size++;
				// Add neighbors
				stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
			}
		}

		return size;
	};

	const analyzeRectangularShape = (
		data,
		width,
		height,
		x,
		y,
		rectWidth,
		rectHeight
	) => {
		if (x + rectWidth >= width || y + rectHeight >= height) {
			return false;
		}

		let edgePixels = 0;
		let totalEdgePixels = 0;

		// Check perimeter for consistent edges
		for (let i = 0; i < rectWidth; i += 3) {
			// Top and bottom edges
			const topIndex = (y * width + (x + i)) * 4;
			const bottomIndex = ((y + rectHeight) * width + (x + i)) * 4;

			if (bottomIndex < data.length) {
				const topBright =
					(data[topIndex] + data[topIndex + 1] + data[topIndex + 2]) /
					3;
				const bottomBright =
					(data[bottomIndex] +
						data[bottomIndex + 1] +
						data[bottomIndex + 2]) /
					3;

				if (Math.abs(topBright - bottomBright) < 20) {
					edgePixels++;
				}
				totalEdgePixels++;
			}
		}

		for (let i = 0; i < rectHeight; i += 3) {
			// Left and right edges
			const leftIndex = ((y + i) * width + x) * 4;
			const rightIndex = ((y + i) * width + (x + rectWidth)) * 4;

			if (rightIndex < data.length) {
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

				if (Math.abs(leftBright - rightBright) < 20) {
					edgePixels++;
				}
				totalEdgePixels++;
			}
		}

		return totalEdgePixels > 0 && edgePixels / totalEdgePixels > 0.6;
	};

	// Update handleFileChange to save file data and create proper preview
	const handleFileChange = async (e) => {
		const f = e.target.files[0];
		if (
			f &&
			(f.type === "image/jpeg" || f.type === "image/png") &&
			f.size <= 10 * 1024 * 1024
		) {
			setValidating(true);
			setValidationError(null);

			try {
				// Validate if image contains a room
				const isRoom = await isRoomImage(f);

				// Create preview URL
				const previewUrl = URL.createObjectURL(f);

				if (!isRoom) {
					setValidationError(t("invalidRoomImage"));
					setLocalFile(f);
					setPreview(previewUrl);
					setGlobalFile(f);
					setGlobalPreview(previewUrl);
					toast.error(t("invalidRoomImage"));
				} else {
					setLocalFile(f);
					setPreview(previewUrl);
					setGlobalFile(f);
					setGlobalPreview(previewUrl);
					toast.success(t("roomDetected"));
				}

				// Save file data regardless of validation result
				await saveFileData(f);
				console.log("File uploaded and saved:", f.name);
			} catch (error) {
				console.error("Room validation error:", error);
				// If validation fails, allow the upload anyway
				const previewUrl = URL.createObjectURL(f);
				setLocalFile(f);
				setPreview(previewUrl);
				setGlobalFile(f);
				setGlobalPreview(previewUrl);
				setValidationError(null);
				await saveFileData(f);
			}

			setValidating(false);
		} else {
			toast.error(t("invalidFileFormat"));
		}
	};

	return (
		<div
			className="flex flex-col items-center justify-start w-full px-4 py-6 text-center mb-30 sm:px-6 md:px-8 lg:px-0"
			style={{ fontFamily: '"Noto Serif TC", serif' }}
		>
			{/* Title */}
			<h1 className="mb-4 text-xl font-normal mt-10 mb-30 text-[#004f44] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight sm:leading-normal">
				{t("title")}
			</h1>

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
							{preview && (
								<Image
									className="object-cover w-12 h-12 rounded sm:w-14 sm:h-14 md:w-16 md:h-16"
									loading="lazy"
									width={64}
									height={64}
									alt=""
									src={preview}
									onError={(e) => {
										console.error(
											"Image failed to load:",
											preview
										);
										console.log("File object:", file);
									}}
								/>
							)}
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
			{file && !validationError && (
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
									disabled={loading || status === "loading"}
								>
									{loading
										? t("calculating")
										: status === "loading"
											? t("checkingAuth") || "Checking..."
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
