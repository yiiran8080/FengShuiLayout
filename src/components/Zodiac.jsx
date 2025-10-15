"use client";

import { memo, useState, useEffect } from "react";
import Image from "next/image";
import { getConcernColor } from "../utils/colorTheme";

const Zodiac = memo(function Zodiac({
	userInfo,
	calculateWuxingAnalysis,
	analyzeWuxingStrength,
	determineUsefulGods,
}) {
	const [loading, setLoading] = useState(true);
	const [analysisData, setAnalysisData] = useState(null);

	// Check if userInfo is provided
	if (!userInfo) {
		return null;
	}

	useEffect(() => {
		const processData = async () => {
			try {
				const analysis = calculateWuxingAnalysis(userInfo);
				if (!analysis) {
					setLoading(false);
					return;
				}

				// Calculate zodiac from birth year
				const birthDate = new Date(userInfo.birthDateTime);
				const birthYear = birthDate.getFullYear();
				const zodiacAnimals = [
					"鼠",
					"牛",
					"虎",
					"兔",
					"龍",
					"蛇",
					"馬",
					"羊",
					"猴",
					"雞",
					"狗",
					"豬",
				];
				const userZodiac = zodiacAnimals[(birthYear - 1900) % 12];

				// Calculate strength analysis and useful gods
				const strengthAnalysis = analyzeWuxingStrength(
					analysis.elementCounts
				);
				const usefulGods = determineUsefulGods(strengthAnalysis);

				// Create enhanced analysis object with all needed data
				const enhancedAnalysis = {
					...analysis,
					strengthAnalysis,
					usefulGods,
					userZodiac,
					birthYear,
				};

				setAnalysisData(enhancedAnalysis);

				// Store analysis data for database saving
				if (typeof window !== "undefined") {
					const zodiacData = {
						userZodiac,
						birthYear,
						strengthAnalysis,
						usefulGods,
						enhancedAnalysis,
						timestamp: new Date().toISOString(),
					};

					window.componentDataStore = window.componentDataStore || {};
					window.componentDataStore.zodiacAnalysis = zodiacData;
					console.log("📊 Stored Zodiac data:", "SUCCESS");
				}
			} catch (error) {
				console.error("❌ Zodiac data processing error:", error);
			} finally {
				setLoading(false);
			}
		};

		processData();
	}, [
		userInfo,
		calculateWuxingAnalysis,
		analyzeWuxingStrength,
		determineUsefulGods,
	]);

	// Show loading state
	if (loading) {
		return (
			<section className="w-full max-w-full sm:w-[95%] mx-auto bg-white rounded-[24px] sm:rounded-[48px] lg:rounded-[80px] p-3 sm:p-3 lg:p-12 mb-6 sm:mb-10 shadow-[0_4px_5.3px_rgba(0,0,0,0.18)]">
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
								fontSize: "clamp(14px, 3.5vw, 16px)",
							}}
						>
							風水妹已經在運算八字分析中，請稍候
						</div>
					</div>
				</div>
			</section>
		);
	}

	// Return null if no data could be processed
	if (!analysisData) {
		return null;
	}

	const { wuxingData, userZodiac, strengthAnalysis, usefulGods } =
		analysisData;

	// Debug color assignment
	const currentColor = getConcernColor(userInfo);
	console.log("🎨 Zodiac Color Debug:", {
		concern: userInfo?.concern,
		color: currentColor,
		userInfo: userInfo,
	});

	return (
		<section className="w-full max-w-full sm:w-[95%] mx-auto bg-white rounded-[24px] sm:rounded-[48px] lg:rounded-[80px] p-3 sm:p-3 lg:p-12 mb-6 sm:mb-10 shadow-[0_4px_5.3px_rgba(0,0,0,0.18)]">
			<div className="flex flex-col items-center gap-0 lg:flex-row lg:items-start lg:gap-10">
				{/* Left Side - Zodiac Animal */}
				<div className="w-full lg:w-[22%] flex items-center justify-center mb-4 lg:mb-0">
					<div className="text-center">
						<div className="flex items-center justify-center w-40 h-40 mx-8 mx-auto mt-3 mb-0 sm:mb-4 sm:w-50 sm:h-50 lg:w-90 lg:h-90">
							<Image
								src={`/images/animals/${
									analysisData.userZodiac === "龍"
										? "dragon"
										: analysisData.userZodiac === "鼠"
											? "mouse"
											: analysisData.userZodiac === "牛"
												? "cow"
												: analysisData.userZodiac ===
													  "虎"
													? "tiger"
													: analysisData.userZodiac ===
														  "兔"
														? "rabbit"
														: analysisData.userZodiac ===
															  "蛇"
															? "snake"
															: analysisData.userZodiac ===
																  "馬"
																? "horse"
																: analysisData.userZodiac ===
																	  "羊"
																	? "sheep"
																	: analysisData.userZodiac ===
																		  "猴"
																		? "monkey"
																		: analysisData.userZodiac ===
																			  "雞"
																			? "chicken"
																			: analysisData.userZodiac ===
																				  "狗"
																				? "dog"
																				: analysisData.userZodiac ===
																					  "豬"
																					? "pig"
																					: "mouse"
								}.png`}
								alt={analysisData.userZodiac}
								width={280}
								height={280}
								className="object-contain"
							/>
						</div>
					</div>
				</div>

				<div className="w-full lg:w-[78%] flex flex-col gap-4 sm:gap-6">
					{/* Four Pillars in responsive layout */}
					<div className="flex flex-wrap justify-center gap-5 mt-4 mb-4 lg:justify-start sm:gap-4 sm:mb-6 lg:mt-10">
						{/* 年柱 */}
						<div className="bg-white border-2 border-black rounded-full px-3 sm:px-6 lg:px-10 py-2 min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] text-center flex-shrink-0">
							<div
								className="font-bold text-[#374A37]"
								style={{
									fontFamily: "Noto Serif TC, serif",
									fontSize: "clamp(14px, 3vw, 20px)",
								}}
							>
								年柱-
								<span className="text-[#A3B116]">
									{analysisData.wuxingData.year}
								</span>
							</div>
						</div>

						{/* 月柱 */}
						<div className="bg-white border-2 border-black rounded-full px-3 sm:px-6 lg:px-10 py-2 min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] text-center flex-shrink-0">
							<div
								className="font-bold text-[#374A37]"
								style={{
									fontFamily: "Noto Serif TC, serif",
									fontSize: "clamp(14px, 3vw, 20px)",
								}}
							>
								月柱-
								<span className="text-[#A3B116]">
									{analysisData.wuxingData.month}
								</span>
							</div>
						</div>

						{/* 日柱 */}
						<div className="bg-white border-2 border-black rounded-full px-3 sm:px-6 lg:px-10 py-2 min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] text-center flex-shrink-0">
							<div
								className="font-bold text-[#374A37]"
								style={{
									fontFamily: "Noto Serif TC, serif",
									fontSize: "clamp(14px, 3vw, 20px)",
								}}
							>
								日柱-
								<span className="text-[#A3B116]">
									{analysisData.wuxingData.day}
								</span>
							</div>
						</div>

						{/* 時柱 */}
						<div className="bg-white border-2 border-black rounded-full px-3 sm:px-6 lg:px-10 py-2 min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] text-center flex-shrink-0">
							<div
								className="font-bold text-[#374A37]"
								style={{
									fontFamily: "Noto Serif TC, serif",
									fontSize: "clamp(14px, 3vw, 20px)",
								}}
							>
								時柱-
								<span className="text-[#A3B116]">
									{analysisData.wuxingData.hour}
								</span>
							</div>
						</div>
					</div>
					<div className="flex flex-row justify-center gap-4 sm:flex-row md:justify-start lg:justify-start xl:justify-start sm:justify-center sm:gap-8">
						{/* Left section - Wuxing Analysis */}
						<div
							className="px-4 py-3 text-white rounded-full shadow-lg sm:py-4 sm:px-8"
							style={{
								backgroundColor: getConcernColor(userInfo),
								border: `3px solid ${getConcernColor(userInfo)}`,
								boxShadow: `0 4px 15px ${getConcernColor(userInfo)}40`,
							}}
						>
							<div
								className="text-lg font-bold text-center sm:text-xl"
								style={{
									fontFamily: "Noto Serif TC, serif",
								}}
							>
								五行-
								{analysisData.strengthAnalysis.strengthDesc}
							</div>
						</div>

						{/* Right section - Missing Elements Analysis (Logic-based) */}
						<div
							className="px-4 py-3 text-white rounded-full shadow-lg sm:py-4 sm:px-8"
							style={{
								backgroundColor: getConcernColor(userInfo),
							}}
						>
							<div
								className="text-lg font-bold text-center sm:text-xl"
								style={{
									fontFamily: "Noto Serif TC, serif",
								}}
							>
								{(() => {
									const missingElements =
										analysisData.strengthAnalysis
											.weakElements || [];
									if (missingElements.length === 0) {
										return "五行沒有缺失";
									} else if (missingElements.length === 1) {
										return `缺${missingElements[0]}`;
									} else if (missingElements.length === 2) {
										return `缺${missingElements.join("")}`;
									} else {
										return `缺${missingElements.slice(0, 2).join("")}等`;
									}
								})()}
							</div>
						</div>
					</div>

					{/* Advice section like the image */}
					<div className="mt-4 sm:mt-6">
						<p
							className="text-base sm:text-lg text-[#5A5A5A] text-start leading-relaxed"
							style={{
								fontFamily: "Noto Sans HK, sans-serif",
								fontWeight: 400,
								lineHeight: 1.8,
							}}
						>
							{(() => {
								const { primaryGod, auxiliaryGod, strategy } =
									analysisData.usefulGods || {};

								if (!primaryGod || !auxiliaryGod) {
									return "根據五行分析，需要進一步確認用神配置以達到最佳平衡效果。";
								}

								const strategyDesc = {
									補缺: "補足所缺",
									扶弱: "扶助偏弱",
									抑強: "抑制過強",
									瀉強: "化解過旺",
								};

								return `根據你的五行配置分析，建議以「${primaryGod}」為首選用神，「${auxiliaryGod}」為輔助用神。透過${strategyDesc[strategy] || "平衡調和"}的策略，兩者協同作用可有效調節五行能量，達到陰陽平衡，提升整體運勢發展。在日常生活中，可通過相應的顏色、方位、職業選擇等方式來強化這些有利元素的影響力。`;
							})()}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
});

export default Zodiac;
