"use client";

import { useState, useEffect } from "react";
import { ComponentErrorBoundary } from "./ErrorHandling";
import { getConcernColor } from "../utils/colorTheme";

export default function Season({ userInfo, currentYear = 2025 }) {
	const [analysisData, setAnalysisData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [activeSeasonIndex, setActiveSeasonIndex] = useState(0);
	const [error, setError] = useState(null);

	// Generate AI analysis based on user's birth info and current year
	const generateSeasonAnalysis = async (userInfo, year) => {
		try {
			const response = await fetch("/api/season-analysis", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					userInfo: {
						birthday:
							userInfo?.birthDateTime || userInfo?.birthday || "",
						gender: userInfo?.gender || "male",
						time: userInfo?.time || "",
						concern: userInfo?.concern || "財運",
					},
				}),
			});

			if (!response.ok) {
				throw new Error(`API request failed: ${response.status}`);
			}

			const result = await response.json();

			if (!result.success) {
				throw new Error(result.error || "Analysis failed");
			}

			return {
				title: result.analysis.parsed.title,
				seasons: result.analysis.parsed.seasons,
				year,
				concern: userInfo?.concern || "財運",
				userBirthday:
					userInfo?.birthDateTime || userInfo?.birthday || "",
				userGender: userInfo?.gender === "male" ? "男性" : "女性",
				fullContent: result.analysis.parsed.fullContent,
				timestamp: result.analysis.timestamp,
			};
		} catch (error) {
			console.error("Season AI analysis error:", error);
			// Return minimal fallback structure only when AI completely fails
			return getMinimalFallbackData(
				userInfo?.concern || "財運",
				year,
				userInfo
			);
		}
	};

	// Minimal fallback structure when AI is completely unavailable
	const getMinimalFallbackData = (concern, year, userInfo) => {
		return {
			title: `關鍵季節 (${concern}指南)`,
			seasons: [
				{
					name: "春季",
					period: "寅卯辰月，木旺",
					icon: "🌸",
					color: "bg-green-500",
					content: "", // Empty content - will show loading spinner
					keyPoints: [],
				},
				{
					name: "夏季",
					period: "巳午未月，火土極旺",
					icon: "☀️",
					color: "bg-red-500",
					content: "", // Empty content - will show loading spinner
					keyPoints: [],
				},
				{
					name: "秋季",
					period: "申酉戌月，金旺",
					icon: "🍂",
					color: "bg-yellow-500",
					content: "", // Empty content - will show loading spinner
					keyPoints: [],
				},
				{
					name: "冬季",
					period: "亥子丑月，水旺",
					icon: "❄️",
					color: "bg-blue-500",
					content: "", // Empty content - will show loading spinner
					keyPoints: [],
				},
			],
			year,
			concern,
			userBirthday: userInfo?.birthDateTime || userInfo?.birthday || "",
			userGender: userInfo?.gender === "male" ? "男性" : "女性",
			error: null, // Remove error message to avoid confusion
		};
	};

	useEffect(() => {
		if (userInfo) {
			setIsLoading(true);
			setError(null);

			// Use AI to generate analysis
			generateSeasonAnalysis(userInfo, currentYear)
				.then((analysis) => {
					setAnalysisData(analysis);
				})
				.catch((error) => {
					console.error("Season analysis failed:", error);
					setError(error.message);
					// Set minimal fallback only when AI completely fails
					setAnalysisData(
						getMinimalFallbackData(
							userInfo.concern || "財運",
							currentYear,
							userInfo
						)
					);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
	}, [userInfo, currentYear]);

	if (isLoading) {
		return (
			<section
				className="relative mx-auto bg-white rounded-[20px] sm:rounded-[26px] p-4 sm:p-12 lg:p-20 mb-6 sm:mb-10 shadow-[0_4px_5.3px_rgba(0,0,0,0.25)]"
				style={{ width: "95%" }}
			>
				<div className="flex items-center justify-center py-8">
					<div className="w-8 h-8 border-b-2 rounded-full animate-spin border-amber-600"></div>
					<span className="ml-3 text-gray-600">
						分析關鍵季節中...
					</span>
				</div>
			</section>
		);
	}

	if (!analysisData) {
		return (
			<section
				className="relative mx-auto bg-white rounded-[20px] sm:rounded-[26px] p-4 sm:p-12 lg:p-20 mb-6 sm:mb-10 shadow-[0_4px_5.3px_rgba(0,0,0,0.25)]"
				style={{ width: "95%" }}
			>
				<div className="py-8 text-center text-gray-500">
					無法載入季節分析資料
				</div>
			</section>
		);
	}

	return (
		<ComponentErrorBoundary componentName="Season">
			<section
				className="relative mx-auto bg-white rounded-[20px] sm:rounded-[26px] p-4 sm:p-12 lg:p-20 mb-6 sm:mb-10 shadow-[0_4px_5.3px_rgba(0,0,0,0.25)]"
				style={{ width: "95%" }}
			>
				{/* Header */}
				<div className="flex items-center justify-between mb-8">
					<h2
						style={{
							fontFamily: "Noto Serif TC, serif",
							fontSize: "40px",
							fontWeight: 800,
							color: getConcernColor(userInfo),
						}}
					>
						關鍵季節
					</h2>
				</div>

				{/* Error Message */}
				{analysisData?.error && (
					<div className="p-3 mb-6 bg-yellow-100 border border-yellow-400 rounded-lg">
						<p className="text-sm text-yellow-700">
							⚠️ {analysisData.error}
						</p>
					</div>
				)}

				{/* Season Icons */}
				<div className="flex justify-center mb-8">
					<div className="flex justify-between w-full max-w-md">
						{analysisData.seasons.map((season, index) => {
							const getSeasonBgColor = (seasonName, isActive) => {
								const colorMap = {
									春季: isActive
										? "bg-[#7cb856]"
										: "bg-[#EFEFEF]",
									夏季: isActive
										? "bg-[#B4003C]"
										: "bg-[#EFEFEF]",
									秋季: isActive
										? "bg-[#DEAB20]"
										: "bg-[#EFEFEF]",
									冬季: isActive
										? "bg-[#568CB8]"
										: "bg-[#EFEFEF]",
								};
								return (
									colorMap[seasonName] ||
									(isActive ? "bg-gray-600" : "bg-[#EFEFEF]")
								);
							};

							const getSeasonImage = (seasonName) => {
								const imageMap = {
									春季: "/images/report/spring.png",
									夏季: "/images/report/summer.png",
									秋季: "/images/report/autumn.png",
									冬季: "/images/report/winter.png",
								};
								return (
									imageMap[seasonName] ||
									"/images/report/spring.png"
								);
							};

							const getImageFilter = (seasonName, isActive) => {
								if (isActive) {
									// When selected, make image white
									return "brightness(0) invert(1)";
								} else {
									// When unselected, match the background color
									const filterMap = {
										春季: "hue-rotate(60deg) saturate(0.8) brightness(0.6)",
										夏季: "hue-rotate(330deg) saturate(1.2) brightness(0.4)",
										秋季: "hue-rotate(40deg) saturate(1.1) brightness(0.7)",
										冬季: "hue-rotate(200deg) saturate(0.9) brightness(0.5)",
									};
									return filterMap[seasonName] || "none";
								}
							};

							return (
								<button
									key={season.name}
									onClick={() => setActiveSeasonIndex(index)}
									className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_4px_4px_rgba(0,0,0,0.25)] ${getSeasonBgColor(
										season.name,
										activeSeasonIndex === index
									)} ${
										activeSeasonIndex === index
											? "transform scale-110"
											: "hover:scale-105"
									}`}
								>
									<img
										src={getSeasonImage(season.name)}
										alt={season.name}
										className="w-8 h-8"
										style={{
											filter: getImageFilter(
												season.name,
												activeSeasonIndex === index
											),
										}}
									/>
								</button>
							);
						})}
					</div>
				</div>

				{/* Active Season Content */}
				<div className="p-6 mb-8">
					<div className="flex items-center mb-4">
						<div className="w-full">
							{/* Season Name with Color */}
							<h3
								className={`text-2xl font-bold mb-2 ${(() => {
									const colorMap = {
										春季: "text-[#7cb856]",
										夏季: "text-[#B4003C]",
										秋季: "text-[#DEAB20]",
										冬季: "text-[#568CB8]",
									};
									return (
										colorMap[
											analysisData.seasons[
												activeSeasonIndex
											].name
										] || "text-gray-800"
									);
								})()}`}
							>
								{analysisData.seasons[activeSeasonIndex].name}
							</h3>

							{/* Period with Season Background */}
							<div
								className={`inline-block px-4 py-2 rounded-lg text-white font-medium ${(() => {
									const colorMap = {
										春季: "bg-[#7cb856]",
										夏季: "bg-[#B4003C]",
										秋季: "bg-[#DEAB20]",
										冬季: "bg-[#568CB8]",
									};
									return (
										colorMap[
											analysisData.seasons[
												activeSeasonIndex
											].name
										] || "bg-gray-600"
									);
								})()}`}
							>
								{analysisData.seasons[activeSeasonIndex].period}
							</div>
						</div>
					</div>

					{/* Season Description - Organized Content */}
					<div className="p-6">
						<div className="space-y-4 leading-relaxed text-gray-700">
							{(() => {
								const content =
									analysisData.seasons[activeSeasonIndex]
										.content;

								// Simple check - if no meaningful content, show loading
								if (!content || content.trim().length < 10) {
									return (
										<div className="flex items-center justify-center py-8">
											<div className="w-6 h-6 border-b-2 rounded-full animate-spin border-amber-600"></div>
											<span className="ml-3 text-gray-600">
												正在分析中...
											</span>
										</div>
									);
								}

								// Simple content cleaning - just remove obvious system messages
								let displayContent = content
									.replace(
										/以上分析由DeepSeek生成，僅供參考。.*$/gm,
										""
									)
									.replace(
										/命理之說旨在啟發思路，切勿全信。.*$/gm,
										""
									)
									.replace(
										/--\s*免責聲明：以上內容由DeepSeek生成.*$/gms,
										""
									)
									.replace(/免責聲明：.*$/gms, "")
									.replace(/以上內容由DeepSeek生成.*$/gms, "")
									.replace(/命理分析並非精密科學.*$/gms, "")
									.replace(
										/實際決策請務必結合現實情況.*$/gms,
										""
									)
									.replace(/--\s*總結：.*$/gms, "")
									.replace(/總結：.*$/gms, "")
									.replace(/^：\s*/gm, "")
									.replace(/\n--\s*$/gm, "")
									.replace(/--$/gm, "")
									.replace(/###.*$/gms, "")
									.replace(/^\s*###\s*$/gm, "")
									.trim();

								// If after cleaning we have no content, show loading
								if (displayContent.length < 10) {
									return (
										<div className="flex items-center justify-center py-8">
											<div className="w-6 h-6 border-b-2 rounded-full animate-spin border-amber-600"></div>
											<span className="ml-3 text-gray-600">
												正在分析中...
											</span>
										</div>
									);
								}

								// Display the content as-is, without complex parsing
								return (
									<div className="space-y-4">
										<p className="leading-relaxed text-gray-700 whitespace-pre-line">
											{displayContent}
										</p>
									</div>
								);
							})()}
						</div>
					</div>
				</div>

				{/* AI Prompt Section */}
			</section>
		</ComponentErrorBoundary>
	);
}
