import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { getJiajuPrompt } from "./report/utilsZh";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { useImage } from "../context/ImageContext";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import { post } from "@/lib/ajax";
import { toast } from "react-toastify";
import { useUser } from "@/context/UserContext";
import getWuxingData from "@/lib/nayin"; // Add this import

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

const UploadPic = () => {
	const t = useTranslations("upload");
	const params = useParams();
	const locale = params?.locale || "zh-TW";
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
	const [isInitialized, setIsInitialized] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const fileInputRef = useRef(null);
	const router = useRouter();
	const { setPreview: setGlobalPreview, setFile: setGlobalFile } = useImage();
	const { data: session, status } = useSession();
	const { userData, forceRefresh } = useUser(); // Add forceRefresh

	// Get room types and directions from translations
	const roomTypes = Object.keys(roomTypeMap);
	const directions = Object.keys(directionMap);

	// Form validation function
	const validateForm = () => {
		const missingFields = [];

		if (!gender) missingFields.push(t("gender"));
		if (!year) missingFields.push(t("year"));
		if (!month) missingFields.push(t("month"));
		if (!day) missingFields.push(t("day"));
		if (!hour) missingFields.push(t("hour"));
		if (!roomType) missingFields.push(t("roomType"));
		if (!direction) missingFields.push(t("direction"));

		if (missingFields.length > 0) {
			const message =
				t("pleaseCompleteFields") + ": " + missingFields.join(", ");
			toast.warning(message);
			return false;
		}

		return true;
	};

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
					timestamp: Date.now(),
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

				const isDataFresh =
					!fileData.timestamp ||
					Date.now() - fileData.timestamp < 60 * 60 * 1000;

				if (isDataFresh) {
					const restoredFile = base64ToFile(
						fileData.base64,
						fileData.name,
						fileData.type
					);

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

					return true;
				} else {
					sessionStorage.removeItem("uploadPicFileData");
					console.log("Cleared old file data from sessionStorage");
				}
			}
		} catch (error) {
			console.error("Error loading file data:", error);
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
			if (isInitialized) return;

			console.log("Initializing component, loading saved data...");
			console.log("Session status:", status);

			loadFormData();

			const fileLoaded = await loadFileData();
			if (fileLoaded) {
				console.log("File successfully restored from storage");
			} else {
				console.log("No saved file found");
			}

			setIsInitialized(true);
		};

		initializeData();

		return () => {
			if (preview && preview.startsWith("blob:")) {
				URL.revokeObjectURL(preview);
			}
		};
	}, []);

	// Additional effect to handle session changes
	useEffect(() => {
		if (status !== "loading" && isInitialized) {
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

	// Save form data whenever it changes
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
		if (preview && preview.startsWith("blob:")) {
			URL.revokeObjectURL(preview);
		}

		setLocalFile(null);
		setPreview(null);
		setGlobalFile(null);
		setGlobalPreview(null);
		setValidationError(null);
		clearSavedData();
		if (fileInputRef.current) fileInputRef.current.value = "";
	};

	const handleStart = async () => {
		if (isSubmitting) return; // Prevent double submission
		setIsSubmitting(true);
		setLoading(true);

		try {
			// Validate form first
			if (!validateForm()) {
				return;
			}

			// CLEAR ALL OLD DATA to prevent conflicts
			console.log("🧹 Clearing all old saved data...");
			localStorage.removeItem("uploadPicFormData");
			sessionStorage.removeItem("freeReportUserData");

			const birthDateTime = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}T${hour.padStart(2, "0")}:00`;

			// Generate fresh user data with current form input
			const userData = {
				gender,
				birthDateTime,
				roomType: roomTypeMap[roomType],
				direction: directionMap[direction],
				furniture: furniture || "",
			};

			// Save FRESH data to sessionStorage (UserContext will prioritize this)
			sessionStorage.setItem(
				"freeReportUserData",
				JSON.stringify(userData)
			);
			console.log("💾 Saved FRESH userData to sessionStorage:", userData);

			// Force UserContext to refresh with new data
			if (forceRefresh) {
				forceRefresh();
			}

			// Get English room type and direction for URL
			const engRoomType = roomTypeMap[roomType];
			const engDirection = directionMap[direction];

			// Calculate actual wuxing data using the same function as the report
			const wuxingData = getWuxingData(birthDateTime, gender);
			console.log("🔮 Calculated wuxing data:", wuxingData);

			// Generate report data to save in analysisResult with ACTUAL calculated values
			const analysisResult = {
				roomType: engRoomType,
				direction: engDirection,
				userInfo: userData,
				generatedAt: new Date().toISOString(),
				reportType: "free_report",
				birthYear: year,
				nayin: wuxingData.nayin, // Use calculated nayin instead of hardcoded
				wuxingJu: wuxingData.wuxingJu, // Add calculated wuxing ju
				bazi: {
					year: wuxingData.year,
					month: wuxingData.month,
					day: wuxingData.day,
					hour: wuxingData.hour,
				},
				mingPalace: wuxingData.mingPalace,
				bodyPalace: wuxingData.bodyPalace,
				wuxingScale: wuxingData.wuxingScale,
				// Add any other relevant calculated data
			};

			console.log(
				"📊 Analysis result with calculated data:",
				analysisResult
			);

			// Track free report generation with the actual calculated analysis result
			await trackFreeReportGeneration(
				engRoomType,
				engDirection,
				{ gender, birthDateTime },
				analysisResult // Pass the actual calculated report data
			);

			toast.success(t("reportGenerating") || "正在生成您的免費報告...");

			// Redirect to free report page
			router.push(
				`/freereport?roomType=${encodeURIComponent(engRoomType)}&direction=${encodeURIComponent(engDirection)}&generated=true`
			);
		} catch (error) {
			console.error("Error in handleStart:", error);
			toast.error(t("errorGeneratingReport") || "生成報告時發生錯誤");
		} finally {
			setLoading(false);
			setIsSubmitting(false);
		}
	};

	const handleBack = () => {
		setShowModal(false);
	};

	// Track free report generation
	const trackFreeReportGeneration = async (
		roomType,
		direction,
		userInfo,
		analysis
	) => {
		try {
			const response = await fetch("/api/track-free-report-generation", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					roomType,
					direction,
					userInfo,
					hasUploadedImage: !!file,
					imageFileName: file?.name || null,
					analysisResult: analysis,
					locale: locale || "zh-TW",
					timeSpentOnPage: 0,
					referrer: document.referrer || "",
					sessionId:
						sessionStorage.getItem("ga_session_id") ||
						`session_${Date.now()}`,
					isAnonymous: true,
				}),
			});

			if (response.ok) {
				const result = await response.json();
				console.log("✅ Free report generation tracked:", result);
			} else {
				console.error("❌ Failed to track free report generation");
			}
		} catch (error) {
			console.error("❌ Error tracking free report generation:", error);
		}
	};

	return (
		<div
			className="relative flex flex-col items-center justify-start w-full min-h-screen px-4 py-6 mb-10 text-center sm:px-6 md:px-8 lg:px-0"
			style={{
				backgroundImage: "url('/images/report/freebg.png')",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "right center",
				backgroundSize: "contain",
			}}
		>
			{/* Mobile background overlay with blur */}
			<div
				className="absolute inset-0 bg-white/20 backdrop-blur-sm sm:hidden"
				style={{ zIndex: 1 }}
			></div>

			{/* Title */}
			<h1
				className="relative z-10 mt-3 mb-2 mb-4 text-2xl leading-tight md:text-3xl lg:text-4xl sm:leading-normal"
				style={{
					fontFamily: '"Noto Serif TC", serif',
					fontWeight: 900,
					color: "#374A37",
				}}
			>
				{t("modalTitle")}
			</h1>

			{/* User Info Form */}
			<div className="relative z-10 w-full max-w-4xl mx-auto lg:right-[130px]">
				<div className="p-1 rounded-xl">
					{/* Form Body */}
					<div className="p-4 space-y-4 sm:p-6 sm:space-y-6">
						<h2
							className="text-2xl md:text-3xl lg:text-4xl"
							style={{
								fontFamily: '"Noto Serif TC", serif',
								fontWeight: 900,
								color: "#000000",
								marginBottom: "16px",
								textAlign: "start",
							}}
						>
							{t("personalInfo")}
						</h2>
						<p
							className="text-base md:text-lg lg:text-xl"
							style={{
								fontFamily: '"Noto Serif TC", serif',
								fontWeight: 700,
								color: "#777777",
								marginBottom: "24px",
								textAlign: "start",
							}}
						>
							{t("personalInfoDescription")}
						</p>

						{/* Gender */}
						<div className="space-y-2">
							<label
								className="block text-xl text-left md:text-2xl lg:text-3xl"
								style={{
									fontFamily: '"Noto Serif TC", serif',
									fontWeight: 900,
									color: "#004F44",
								}}
							>
								{t("gender")}
							</label>
							{/* Custom Radio Buttons for Gender */}
							<div className="flex space-x-4">
								<label className="flex items-center cursor-pointer">
									<input
										type="radio"
										name="gender"
										value="male"
										checked={gender === "male"}
										onChange={(e) =>
											setGender(e.target.value)
										}
										className="sr-only"
									/>
									<div
										className="w-6 h-6 mr-2 rounded-full"
										style={{
											backgroundColor:
												gender === "male"
													? "#004F44"
													: "#D9D9D9",
										}}
									></div>
									<span
										className="text-sm md:text-base"
										style={{
											fontFamily:
												'"Noto Serif TC", serif',
										}}
									>
										{t("male")}
									</span>
								</label>
								<label className="flex items-center cursor-pointer">
									<input
										type="radio"
										name="gender"
										value="female"
										checked={gender === "female"}
										onChange={(e) =>
											setGender(e.target.value)
										}
										className="sr-only"
									/>
									<div
										className="w-6 h-6 mr-2 rounded-full"
										style={{
											backgroundColor:
												gender === "female"
													? "#004F44"
													: "#D9D9D9",
										}}
									></div>
									<span
										className="text-sm md:text-base"
										style={{
											fontFamily:
												'"Noto Serif TC", serif',
										}}
									>
										{t("female")}
									</span>
								</label>
							</div>
						</div>

						{/* Birth Date Time */}
						<div className="space-y-2">
							<label
								className="block text-xl text-left md:text-2xl lg:text-3xl"
								style={{
									fontFamily: '"Noto Serif TC", serif',
									fontWeight: 900,
									color: "#004F44",
								}}
							>
								{t("birthDateTime")}
							</label>
							<div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap">
								<select
									className="px-3 py-3 text-sm border-0 sm:text-base focus:outline-none"
									style={{
										borderRadius: "100px",
										backgroundColor: "#FFFFFF",
										boxShadow:
											"inset 0 1px 4px rgba(0, 0, 0, 0.25)",
										fontFamily: '"Noto Serif TC", serif',
										width: "100%",
										maxWidth: "158px",
									}}
									value={year}
									onChange={(e) => setYear(e.target.value)}
								>
									<option value="">{t("year")}</option>
									{years.map((y) => (
										<option key={y} value={y}>
											{y}
										</option>
									))}
								</select>
								<select
									className="px-3 py-3 text-sm border-0 sm:text-base focus:outline-none"
									style={{
										borderRadius: "100px",
										backgroundColor: "#FFFFFF",
										boxShadow:
											"inset 0 1px 4px rgba(0, 0, 0, 0.25)",
										fontFamily: '"Noto Serif TC", serif',
										width: "100%",
										maxWidth: "158px",
									}}
									value={month}
									onChange={(e) => setMonth(e.target.value)}
								>
									<option value="">{t("month")}</option>
									{months.map((m) => (
										<option key={m} value={m}>
											{m}
										</option>
									))}
								</select>
								<select
									className="px-3 py-3 text-sm border-0 sm:text-base focus:outline-none"
									style={{
										borderRadius: "100px",
										backgroundColor: "#FFFFFF",
										boxShadow:
											"inset 0 1px 4px rgba(0, 0, 0, 0.25)",
										fontFamily: '"Noto Serif TC", serif',
										width: "100%",
										maxWidth: "158px",
									}}
									value={day}
									onChange={(e) => setDay(e.target.value)}
								>
									<option value="">{t("day")}</option>
									{days.map((d) => (
										<option key={d} value={d}>
											{d}
										</option>
									))}
								</select>
								<select
									className="px-3 py-3 text-sm border-0 sm:text-base focus:outline-none"
									style={{
										borderRadius: "100px",
										backgroundColor: "#FFFFFF",
										boxShadow:
											"inset 0 1px 4px rgba(0, 0, 0, 0.25)",
										fontFamily: '"Noto Serif TC", serif',
										width: "100%",
										maxWidth: "158px",
									}}
									value={hour}
									onChange={(e) => setHour(e.target.value)}
								>
									<option value="">{t("hour")}</option>
									{hours.map((h) => (
										<option key={h} value={h}>
											{h}
										</option>
									))}
								</select>
							</div>
						</div>

						{/* Room Data Section */}
						<h2
							className="text-2xl md:text-3xl lg:text-4xl"
							style={{
								fontFamily: '"Noto Serif TC", serif',
								fontWeight: 900,
								color: "#000000",
								marginTop: "32px",
								marginBottom: "24px",
								justifyContent: "start",
								textAlign: "start",
							}}
						>
							{t("roomData")}
						</h2>

						{/* Room Type and Direction - Responsive Layout */}
						<div className="flex flex-col items-start gap-4 sm:flex-row sm:items-start">
							{/* Room Type */}
							<div className="flex flex-col items-start space-y-2">
								<label
									className="block text-lg text-left md:text-xl lg:text-2xl"
									style={{
										fontFamily: '"Noto Serif TC", serif',
										fontWeight: 900,
										color: "#004F44",
									}}
								>
									{t("roomType")}
								</label>
								<select
									className="px-3 py-2 text-sm border-0 focus:outline-none sm:text-base"
									style={{
										borderRadius: "100px",
										backgroundColor: "#FFFFFF",
										boxShadow:
											"inset 0 1px 4px rgba(0, 0, 0, 0.25)",
										fontFamily: '"Noto Serif TC", serif',
										width: "158px",
									}}
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
							<div className="flex flex-col items-start space-y-2">
								<label
									className="block text-lg text-left md:text-xl lg:text-2xl"
									style={{
										fontFamily: '"Noto Serif TC", serif',
										fontWeight: 900,
										color: "#004F44",
									}}
								>
									{t("direction")}
								</label>
								<select
									className="px-3 py-2 text-sm border-0 focus:outline-none sm:text-base"
									style={{
										borderRadius: "100px",
										backgroundColor: "#FFFFFF",
										boxShadow:
											"inset 0 1px 4px rgba(0, 0, 0, 0.25)",
										fontFamily: '"Noto Serif TC", serif',
										width: "158px",
									}}
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
					</div>

					{/* Modal Footer */}
					<div className="sticky bottom-0 z-10 flex flex-col items-start p-4 space-y-3 sm:p-6">
						<button
							className="w-full max-w-[200px] py-3 text-base font-bold text-white transition-all duration-200 rounded-lg shadow-lg sm:text-lg bg-[#004F44] hover:scale-105 hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
							onClick={handleStart}
							disabled={loading || status === "loading"}
						>
							{loading
								? t("calculating")
								: status === "loading"
									? t("checkingAuth") || "Checking..."
									: t("startAnalysis")}
						</button>
						{/* <button
							className="w-full max-w-[200px] px-3 py-2 text-sm text-gray-500 transition-colors bg-transparent rounded hover:text-gray-700 hover:bg-gray-50"
							onClick={handleBack}
						>
							{t("back")}
						</button> */}
					</div>
				</div>
			</div>

			{/* Results and Loading */}
			{result && (
				<div className="relative z-10 w-full max-w-2xl p-4 mt-6 text-sm text-gray-800 whitespace-pre-line bg-[#004F44] rounded-lg sm:text-base">
					{result}
				</div>
			)}
			{loading && (
				<div className="relative z-10 mt-6 text-sm text-blue-500 sm:text-base">
					{t("processing")}
				</div>
			)}
		</div>
	);
};

export default UploadPic;
