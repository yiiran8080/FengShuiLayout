"use client";

import { useState, useEffect } from "react";
import { ComponentErrorBoundary } from "./ErrorHandling";
import { useCoupleAnalysis } from "@/contexts/CoupleAnalysisContext";

export default function CoupleSeason({ user1, user2, currentYear = 2025 }) {
	const { coupleSeasonCache, setCoupleSeasonCache } = useCoupleAnalysis();

	const [analysisData, setAnalysisData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [activeSeasonIndex, setActiveSeasonIndex] = useState(0);
	const [error, setError] = useState(null);

	// Generate couple season analysis using both partners' birth info
	const generateCoupleSeasonAnalysis = async (user1, user2, year) => {
		try {
			const response = await fetch("/api/couple-season-analysis", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					user1Info: {
						birthday: user1?.birthDateTime || "",
						gender: user1?.gender || "male",
						name: user1?.name || "男方",
					},
					user2Info: {
						birthday: user2?.birthDateTime || "",
						gender: user2?.gender || "female",
						name: user2?.name || "女方",
					},
					currentYear: year,
					concern: "感情", // Default concern for couple analysis
				}),
			});

			if (!response.ok) {
				throw new Error(`API request failed: ${response.status}`);
			}

			const result = await response.json();

			if (!result.success) {
				throw new Error(
					result.error || "Couple season analysis failed"
				);
			}

			return {
				title: result.analysis.parsed.title,
				seasons: result.analysis.parsed.seasons,
				year,
				concern: "感情",
				user1Birthday: user1?.birthDateTime || "",
				user2Birthday: user2?.birthDateTime || "",
				user1Name: user1?.name || "男方",
				user2Name: user2?.name || "女方",
				fullContent: result.analysis.parsed.fullContent,
				timestamp: result.analysis.timestamp,
			};
		} catch (error) {
			console.error("Couple season AI analysis error:", error);
			// Return minimal fallback structure when AI fails
			return getMinimalCoupleFallbackData(year, user1, user2);
		}
	};

	// Minimal fallback structure when AI is completely unavailable
	const getMinimalCoupleFallbackData = (year, user1, user2) => {
		return {
			title: `夫妻季節分析 (感情指南)`,
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
			concern: "感情",
			user1Birthday: user1?.birthDateTime || "",
			user2Birthday: user2?.birthDateTime || "",
			user1Name: user1?.name || "男方",
			user2Name: user2?.name || "女方",
			error: null,
		};
	};

	// Create cache key for couple season analysis
	const getCacheKey = (user1, user2, year) => {
		return `couple_season_${user1.birthDateTime}_${user2.birthDateTime}_${year}`;
	};

	useEffect(() => {
		if (!user1 || !user2) return;

		const cacheKey = getCacheKey(user1, user2, currentYear);

		// Check cache first
		if (coupleSeasonCache && coupleSeasonCache[cacheKey]) {
			console.log("📋 Using cached couple season analysis");
			setAnalysisData(coupleSeasonCache[cacheKey]);
			setIsLoading(false);
			return;
		}

		setIsLoading(true);
		setError(null);

		// Generate new analysis
		generateCoupleSeasonAnalysis(user1, user2, currentYear)
			.then((analysis) => {
				setAnalysisData(analysis);

				// Cache the result
				setCoupleSeasonCache((prevCache) => ({
					...prevCache,
					[cacheKey]: analysis,
				}));
			})
			.catch((error) => {
				console.error("Couple season analysis failed:", error);
				setError(error.message);

				// Set minimal fallback
				const fallback = getMinimalCoupleFallbackData(
					currentYear,
					user1,
					user2
				);
				setAnalysisData(fallback);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [user1, user2, currentYear, coupleSeasonCache, setCoupleSeasonCache]);

	if (isLoading) {
		return (
			<section
				className="relative mx-auto bg-white shadow-[0_4px_5.3px_rgba(0,0,0,0.25)] mb-4 sm:mb-6 lg:mb-10"
				style={{
					width: "100%",
					borderRadius: "clamp(15px, 4vw, 26px)",
					padding: "clamp(16px, 4vw, 80px)",
				}}
			>
				<div className="flex items-center justify-center py-6 sm:py-8">
					<div
						className="border-b-2 rounded-full animate-spin border-amber-600"
						style={{
							width: "clamp(24px, 6vw, 32px)",
							height: "clamp(24px, 6vw, 32px)",
						}}
					></div>
					<span
						className="ml-2 text-gray-600 sm:ml-3"
						style={{ fontSize: "clamp(14px, 3.5vw, 16px)" }}
					>
						分析夫妻關鍵季節中...
					</span>
				</div>
			</section>
		);
	}

	if (!analysisData) {
		return (
			<section
				className="relative mx-auto bg-white shadow-[0_4px_5.3px_rgba(0,0,0,0.25)] mb-4 sm:mb-6 lg:mb-10"
				style={{
					width: "100%",
					borderRadius: "clamp(15px, 4vw, 26px)",
					padding: "clamp(16px, 4vw, 80px)",
				}}
			>
				<div
					className="py-6 text-center text-gray-500 sm:py-8"
					style={{ fontSize: "clamp(14px, 3.5vw, 16px)" }}
				>
					無法載入夫妻季節分析資料
				</div>
			</section>
		);
	}

	return (
		<ComponentErrorBoundary componentName="CoupleSeason">
			<section
				className="relative mx-auto bg-white shadow-[0_4px_5.3px_rgba(0,0,0,0.25)] mb-4 sm:mb-6 lg:mb-10"
				style={{
					width: "100%",
					borderRadius: "clamp(15px, 4vw, 26px)",
					padding: "clamp(16px, 4vw, 80px)",
				}}
			>
				{/* Header - Responsive */}
				<div className="flex flex-col mb-6 text-center sm:flex-row sm:items-center sm:justify-between sm:mb-8 sm:text-left">
					<h2
						style={{
							fontFamily: "Noto Serif TC, serif",
							fontSize: "clamp(24px, 6vw, 40px)",
							fontWeight: 800,
							color: "#B4003C", // Couple theme color
						}}
					>
						夫妻關鍵季節
					</h2>
				</div>

				{/* Couple Info Banner */}
				{/* <div className="p-4 mb-8 border border-pink-200 rounded-lg bg-gradient-to-r from-pink-50 to-red-50">
					<div className="flex items-center justify-center text-center">
						<span className="text-lg font-medium text-gray-700">
							{analysisData.user1Name} & {analysisData.user2Name}
						</span>
						<span className="mx-3 text-pink-500">💕</span>
						<span className="text-sm text-gray-600">
							{analysisData.year}年 感情運勢季節分析
						</span>
					</div>
				</div> */}

				{/* Error Message - Responsive */}
				{analysisData?.error && (
					<div
						className="mb-4 bg-yellow-100 border border-yellow-400 rounded-lg sm:mb-6"
						style={{ padding: "clamp(12px, 3vw, 16px)" }}
					>
						<p
							className="text-yellow-700"
							style={{ fontSize: "clamp(12px, 3vw, 14px)" }}
						>
							⚠️ {analysisData.error}
						</p>
					</div>
				)}

				{/* Season Icons - Responsive */}
				<div className="flex justify-center mb-6 sm:mb-8">
					<div className="flex justify-between w-full max-w-xs gap-2 sm:max-w-md sm:gap-4">
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
									className={`rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_4px_4px_rgba(0,0,0,0.25)] ${getSeasonBgColor(
										season.name,
										activeSeasonIndex === index
									)} ${
										activeSeasonIndex === index
											? "transform scale-110"
											: "hover:scale-105"
									}`}
									style={{
										width: "clamp(48px, 12vw, 64px)",
										height: "clamp(48px, 12vw, 64px)",
									}}
								>
									<img
										src={getSeasonImage(season.name)}
										alt={season.name}
										style={{
											width: "clamp(24px, 6vw, 32px)",
											height: "clamp(24px, 6vw, 32px)",
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

				{/* Active Season Content - Responsive */}
				<div
					className="mb-6 sm:mb-8"
					style={{ padding: "clamp(16px, 4vw, 24px)" }}
				>
					<div className="flex flex-col items-center mb-3 text-center sm:items-start sm:mb-4 sm:text-left">
						<div className="w-full">
							{/* Season Name with Color - Responsive */}
							<h3
								className={`font-bold mb-2 sm:mb-2 ${(() => {
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
								style={{ fontSize: "clamp(20px, 5vw, 28px)" }}
							>
								{analysisData.seasons[activeSeasonIndex].name}
							</h3>

							{/* Period with Season Background - Responsive */}
							<div
								className={`inline-block rounded-lg text-white font-medium ${(() => {
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
								style={{
									padding:
										"clamp(8px, 2vw, 12px) clamp(12px, 3vw, 16px)",
									fontSize: "clamp(12px, 3vw, 16px)",
								}}
							>
								{analysisData.seasons[activeSeasonIndex].period}
							</div>
						</div>
					</div>

					{/* Season Description - Responsive Content */}
					<div style={{ padding: "clamp(16px, 4vw, 24px)" }}>
						<div className="space-y-3 leading-relaxed text-gray-700 sm:space-y-4">
							{(() => {
								const content =
									analysisData.seasons[activeSeasonIndex]
										.content;

								// Simple check - if no meaningful content, show loading
								if (!content || content.trim().length < 10) {
									return (
										<div className="flex items-center justify-center py-6 sm:py-8">
											<div
												className="border-b-2 rounded-full animate-spin border-amber-600"
												style={{
													width: "clamp(20px, 5vw, 24px)",
													height: "clamp(20px, 5vw, 24px)",
												}}
											></div>
											<span
												className="ml-2 text-gray-600 sm:ml-3"
												style={{
													fontSize:
														"clamp(14px, 3.5vw, 16px)",
												}}
											>
												正在分析夫妻感情季節中...
											</span>
										</div>
									);
								}

								// Simple content cleaning
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
										<div className="flex items-center justify-center py-6 sm:py-8">
											<div
												className="border-b-2 rounded-full animate-spin border-amber-600"
												style={{
													width: "clamp(20px, 5vw, 24px)",
													height: "clamp(20px, 5vw, 24px)",
												}}
											></div>
											<span
												className="ml-2 text-gray-600 sm:ml-3"
												style={{
													fontSize:
														"clamp(14px, 3.5vw, 16px)",
												}}
											>
												正在分析夫妻感情季節中...
											</span>
										</div>
									);
								}

								// Display the content as-is, without complex parsing - Responsive
								return (
									<div className="space-y-3 sm:space-y-4">
										<p
											className="leading-relaxed text-gray-700 whitespace-pre-line"
											style={{
												fontSize:
													"clamp(14px, 3.5vw, 16px)",
											}}
										>
											{displayContent}
										</p>
									</div>
								);
							})()}
						</div>
					</div>
				</div>
			</section>
		</ComponentErrorBoundary>
	);
}
