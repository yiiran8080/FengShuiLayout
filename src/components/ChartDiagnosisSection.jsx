"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const ChartDiagnosisSection = ({
	femaleUser,
	maleUser,
	analysisData,
	savedData,
	onDataReady,
}) => {
	const [diagnosisData, setDiagnosisData] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// Check for saved data first
		if (savedData) {
			console.log("🏛️ Using saved ChartDiagnosis data:", savedData);
			setDiagnosisData(savedData);
			setLoading(false);

			// Notify parent component that saved data is ready
			if (onDataReady) {
				onDataReady(savedData);
			}
			return;
		}

		// Generate new data if no saved data
		if (femaleUser && maleUser && analysisData) {
			generateChartDiagnosis();
		}
	}, [femaleUser, maleUser, analysisData, savedData]);

	const generateChartDiagnosis = async () => {
		setLoading(true);
		try {
			// Add timeout to prevent AbortError
			const controller = new AbortController();
			const timeoutId = setTimeout(() => {
				controller.abort();
				console.log(
					"⏰ Chart diagnosis API call timed out after 60 seconds"
				);
			}, 60000); // 60 second timeout

			const response = await fetch("/api/chart-diagnosis", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					femaleUser,
					maleUser,
					femaleBazi: analysisData?.female?.bazi,
					maleBazi: analysisData?.male?.bazi,
					femalePillars: analysisData?.female?.pillars,
					malePillars: analysisData?.male?.pillars,
					requestType: "chart_diagnosis",
				}),
				signal: controller.signal,
			});

			clearTimeout(timeoutId);

			if (response.ok) {
				const data = await response.json();
				setDiagnosisData(data);

				// Notify parent component that data is ready
				if (onDataReady) {
					onDataReady(data);
				}
			} else {
				// Fallback data structure
				const fallbackData = {
					female: {
						title: "命局：王水生寅月",
						content: generateFallbackAnalysis(
							analysisData?.female,
							"female"
						),
					},
					male: {
						title: "命局：王水生申月",
						content: generateFallbackAnalysis(
							analysisData?.male,
							"male"
						),
					},
					keySymptoms:
						"您日支「寅」（需情表達）與伴侶日支「申金」沖克，貴水代表您的內在情感需求，渴望溫暖、直接且充滿活力的表達方式；而申金則代表伴侶的理性與克制，偏向於以靜默的方式處理情感。形成「想溝通卻無法順暢」的核心循環，非單純爭吵，而是熱情漸受侵蝕，彼此間的默契與親密度受到挑戰。",
				};
				setDiagnosisData(fallbackData);

				// Notify parent component that fallback data is ready
				if (onDataReady) {
					onDataReady(fallbackData);
				}
			}
		} catch (error) {
			console.error("Chart diagnosis generation failed:", error);

			// Handle different types of errors
			let errorMessage = "正在分析";
			if (error.name === "AbortError") {
				errorMessage = "分析超時，請稍後重試";
			} else if (error.message?.includes("timeout")) {
				errorMessage = "請求超時，正在重新嘗試";
			}

			setDiagnosisData({
				female: {
					title: "命局：分析中",
					content: `${errorMessage}，您的命局特性分析中...`,
				},
				male: {
					title: "命局：分析中",
					content: `${errorMessage}，伴侶的命局特性分析中...`,
				},
				keySymptoms: `${errorMessage}，關鍵合盤徵象分析中...`,
			});
		} finally {
			setLoading(false);
		}
	};

	const generateFallbackAnalysis = (userData, gender) => {
		if (!userData) return "分析數據準備中...";

		const genderText = gender === "female" ? "您" : "伴侶";
		return `${genderText}的八字顯示${userData.bazi || "特殊命格"}，在感情表達上具有獨特的模式。根據當前大運流年（2025乙巳年）的影響，${genderText}的情感需求和表達方式可能受到一定程度的影響，需要特別注意溝通方式的調整。`;
	};

	if (loading) {
		return (
			<div
				className="w-full bg-white shadow-lg"
				style={{
					padding: "clamp(20px, 5vw, 32px)",
					borderRadius: "clamp(20px, 5vw, 30px)",
				}}
			>
				<div className="flex flex-col items-center justify-center py-12 space-y-4">
					{/* Loading spinner */}
					<div className="w-8 h-8 border-b-2 border-pink-500 rounded-full animate-spin"></div>

					{/* 風水妹 loading image */}
					<div className="flex items-center justify-center">
						<Image
							src="/images/風水妹/風水妹-loading.png"
							alt="風水妹運算中"
							width={120}
							height={120}
							className="object-contain"
						/>
					</div>

					{/* Loading text */}
					<div className="space-y-2 text-center">
						<div
							className="text-gray-700"
							style={{
								fontFamily: "Noto Sans HK, sans-serif",
								fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
								fontWeight: 500,
							}}
						>
							風水妹正在生成盤面診斷
						</div>
						<div
							className="text-gray-500"
							style={{
								fontFamily: "Noto Sans HK, sans-serif",
								fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
								fontWeight: 400,
							}}
						>
							請稍候，正在分析命盤配對細節
						</div>
					</div>
				</div>
			</div>
		);
	}

	if (!diagnosisData) {
		return null;
	}

	return (
		<div
			className="w-full bg-white shadow-lg"
			style={{
				padding: "clamp(20px, 5vw, 32px)",
				borderRadius: "clamp(20px, 5vw, 30px)",
			}}
		>
			{/* Content Layout */}
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "clamp(20px, 5vw, 24px)",
				}}
			>
				{/* Female and Male Analysis - Side by Side */}
				<div
					className="grid grid-cols-1 lg:grid-cols-2"
					style={{ gap: "clamp(16px, 4vw, 24px)" }}
				>
					{/* Female Analysis */}
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "clamp(12px, 3vw, 16px)",
						}}
					>
						{/* Title Section */}
						<div
							className="flex flex-wrap items-center"
							style={{ gap: "clamp(8px, 2vw, 16px)" }}
						>
							<h3
								className="font-bold text-[#C74772]"
								style={{
									fontSize: "clamp(20px, 5vw, 30px)",
									fontFamily: "Noto Serif TC, serif",
								}}
							>
								女方
							</h3>
							<div
								className="bg-white border-2 border-[#C74772] rounded-full"
								style={{
									padding:
										"clamp(6px, 1.5vw, 8px) clamp(12px, 3vw, 16px)",
								}}
							>
								<span
									className="font-medium text-[#C74772]"
									style={{
										fontSize: "clamp(11px, 2.8vw, 14px)",
									}}
								>
									{diagnosisData.female.title}
								</span>
							</div>
						</div>

						{/* Content */}
						<div
							className="bg-gray-100"
							style={{
								padding: "clamp(12px, 3vw, 16px)",
								borderRadius: "clamp(6px, 1.5vw, 8px)",
							}}
						>
							<p
								className="text-gray-800"
								style={{
									fontSize: "clamp(12px, 3vw, 14px)",
									lineHeight: "1.6",
								}}
							>
								{diagnosisData.female.content}
							</p>
						</div>
					</div>

					{/* Male Analysis */}
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "clamp(12px, 3vw, 16px)",
						}}
					>
						{/* Title Section */}
						<div
							className="flex flex-wrap items-center"
							style={{ gap: "clamp(8px, 2vw, 16px)" }}
						>
							<h3
								className="font-bold text-[#3263C4]"
								style={{
									fontSize: "clamp(20px, 5vw, 30px)",
									fontFamily: "Noto Serif TC, serif",
								}}
							>
								男方
							</h3>
							<div
								className="bg-white border-2 border-[#3263C4] rounded-full"
								style={{
									padding:
										"clamp(6px, 1.5vw, 8px) clamp(12px, 3vw, 16px)",
								}}
							>
								<span
									className="font-medium text-[#3263C4]"
									style={{
										fontSize: "clamp(11px, 2.8vw, 14px)",
									}}
								>
									{diagnosisData.male.title}
								</span>
							</div>
						</div>

						{/* Content */}
						<div
							className="bg-gray-100"
							style={{
								padding: "clamp(12px, 3vw, 16px)",
								borderRadius: "clamp(6px, 1.5vw, 8px)",
							}}
						>
							<p
								className="text-gray-800"
								style={{
									fontSize: "clamp(12px, 3vw, 14px)",
									lineHeight: "1.6",
								}}
							>
								{diagnosisData.male.content}
							</p>
						</div>
					</div>
				</div>

				{/* Key Symptoms Section */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "clamp(12px, 3vw, 16px)",
					}}
				>
					{/* Title */}
					<div className="flex items-center">
						<div
							className="bg-white border-2 border-[#C74772] rounded-full"
							style={{
								padding:
									"clamp(6px, 1.5vw, 8px) clamp(12px, 3vw, 16px)",
							}}
						>
							<span
								className="font-bold text-[#C74772]"
								style={{
									fontSize: "clamp(16px, 4vw, 20px)",
									fontFamily: "Noto Serif TC, serif",
								}}
							>
								關鍵合盤徵象
							</span>
						</div>
					</div>

					{/* Content */}
					<div
						className="bg-gray-100"
						style={{
							padding: "clamp(16px, 4vw, 24px)",
							borderRadius: "clamp(6px, 1.5vw, 8px)",
						}}
					>
						<p
							className="text-gray-800"
							style={{
								fontSize: "clamp(12px, 3vw, 14px)",
								lineHeight: "1.6",
							}}
						>
							{diagnosisData.keySymptoms}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChartDiagnosisSection;
