"use client";

import { useState, useEffect } from "react";
import { ComponentErrorBoundary } from "./ErrorHandling";
import { getConcernColor } from "../utils/colorTheme";

export default function SpecificSuggestion({ userInfo, currentYear = 2025 }) {
	const [analysisData, setAnalysisData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	// Generate AI analysis based on user's specific problem
	const generateSpecificSuggestionAnalysis = async (userInfo, year) => {
		try {
			console.log("Generating AI analysis for:", userInfo);

			const response = await fetch("/api/specific-suggestion-analysis", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					userInfo: userInfo,
				}),
			});

			const result = await response.json();
			console.log("API response:", result);

			if (result.success) {
				return {
					...result.data,
					year,
					isAiGenerated: true,
					fallback: result.fallback || false,
				};
			} else {
				throw new Error(result.error || "Failed to generate analysis");
			}
		} catch (error) {
			console.error("Error generating AI analysis:", error);

			// Return fallback data on error
			return {
				title: "針對性建議",
				subtitle: `專門解決：${userInfo?.problem || "個人關注問題"}`,
				suggestions: [
					{
						title: "環境調整優化",
						description:
							"根據你的八字分析，建議調整居住或工作環境的風水佈局。選擇有利的方位和色彩搭配，創造積極正面的能量場，有助於改善當前困擾。",
						icon: "🏠",
						category: "環境型",
					},
					{
						title: "時機把握策略",
						description:
							"依據你的命理週期和當前運勢，建議在最有利的時間段採取行動。關注農曆時間節點和個人的吉凶日期，把握最佳時機解決問題。",
						icon: "⏰",
						category: "時機型",
					},
					{
						title: "個人能力提升",
						description:
							"針對你的八字特點和問題根源，建議加強相應的個人能力培養。透過學習新技能或改善既有能力，從根本上解決困擾。",
						icon: "📚",
						category: "提升型",
					},
					{
						title: "人際關係調整",
						description:
							"根據你的社交宮位分析，建議重新整理人際關係網絡。與對你有利的人加深聯繫，適當疏遠可能帶來負面影響的關係。",
						icon: "🤝",
						category: "人脈型",
					},
					{
						title: "心態平衡調節",
						description:
							"基於你的性格特質和當前狀況，建議透過冥想、運動或其他方式調節心態。保持內心平衡，以更積極的態度面對挑戰。",
						icon: "🧘",
						category: "心理型",
					},
				],
				taboos: [
					{
						title: "情緒化決策",
						description:
							"避免在情緒激動或心情低落時做重要決定。這種狀態下容易做出錯誤判斷，建議冷靜思考後再採取行動，以免加重問題。",
						icon: "🚫",
						level: "嚴禁",
						consequence: "可能導致問題惡化",
					},
					{
						title: "負面環境接觸",
						description:
							"遠離充滿負能量的人、事、物，避免長期處於消極的環境中。這些負面因素會影響你的判斷力和解決問題的能力。",
						icon: "⚠️",
						level: "避免",
						consequence: "影響個人氣場和運勢",
					},
					{
						title: "過度焦慮擾心",
						description:
							"不要過分擔心未來或沉溺於過去的失誤。過度的焦慮會消耗精神能量，影響現在的行動力和解決問題的效率。",
						icon: "�",
						level: "控制",
						consequence: "消耗精神能量",
					},
					{
						title: "孤立無援狀態",
						description:
							"避免完全依靠自己解決所有問題，適當尋求可靠朋友或專業人士的建議。孤立會限制視野和解決方案的多樣性。",
						icon: "🏝️",
						level: "改變",
						consequence: "限制解決方案選擇",
					},
					{
						title: "急於求成心態",
						description:
							"不要期望問題能夠立即完全解決，保持耐心和持續努力的心態。急躁的心態容易導致半途而廢或採取不當手段。",
						icon: "⚡",
						level: "調整",
						consequence: "可能採取不當方法",
					},
				],
				concern: userInfo?.concern || "綜合",
				problem: userInfo?.problem || "個人關注問題",
				userBirthday: userInfo?.birthDateTime || "未指定",
				userGender: userInfo?.gender === "male" ? "男性" : "女性",
				year,
				aiResponse: "使用預設建議內容（網路連接或API問題）",
				prompt: "系統預設分析",
				isAiGenerated: false,
				fallback: true,
			};
		}
	};

	useEffect(() => {
		if (userInfo) {
			setIsLoading(true);
			// Generate AI analysis
			generateSpecificSuggestionAnalysis(userInfo, currentYear)
				.then((analysis) => {
					setAnalysisData(analysis);
					setIsLoading(false);
				})
				.catch((error) => {
					console.error("Error generating analysis:", error);
					setIsLoading(false);
				});
		}
	}, [userInfo, currentYear]);

	if (isLoading) {
		return (
			<section className="relative w-full sm:w-[95%] lg:w-[85%] mx-auto bg-white rounded-[20px] sm:rounded-[26px] p-4 sm:p-12 lg:p-20 mb-6 sm:mb-10 shadow-[0_4px_5.3px_rgba(0,0,0,0.25)]">
				<div className="flex items-center justify-center py-8">
					<div className="w-8 h-8 border-b-2 border-blue-600 rounded-full animate-spin"></div>
					<span className="ml-3 text-gray-600">
						生成針對性建議中..
					</span>
				</div>
			</section>
		);
	}

	if (!analysisData) {
		return (
			<section className="relative w-full sm:w-[95%] lg:w-[85%] mx-auto bg-white rounded-[20px] sm:rounded-[26px] p-4 sm:p-12 lg:p-20 mb-6 sm:mb-10 shadow-[0_4px_5.3px_rgba(0,0,0,0.25)]">
				<div className="py-8 text-center text-gray-500">
					無法載入針對性建議資料
				</div>
			</section>
		);
	}

	return (
		<ComponentErrorBoundary componentName="SpecificSuggestion">
			<section
				className="relative mx-auto mb-6 bg-white sm:mb-10"
				style={{
					width: "95%",
					padding: "40px",
					boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
					borderRadius: "45px",
				}}
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
						{analysisData.title}
					</h2>
				</div>

				{/* Suggestions Section */}
				<div className="mb-12">
					<div className="flex items-center mb-6">
						<div className="p-2 mr-3 bg-green-500 rounded-full">
							<svg
								className="w-5 h-5 text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fillRule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<h3 className="text-2xl font-bold text-green-700">
							五大建議方案
						</h3>
					</div>

					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{analysisData.suggestions.map((suggestion, index) => (
							<div
								key={index}
								className="p-6 transition-all duration-300 border border-green-200 bg-green-50 rounded-xl hover:shadow-lg"
							>
								<div className="flex items-center mb-4">
									<span className="mr-3 text-3xl">
										{suggestion.icon}
									</span>
									<div>
										<h4 className="text-lg font-bold text-green-800">
											{suggestion.title}
										</h4>
										<span className="px-2 py-1 text-xs text-green-700 bg-green-200 rounded-full">
											{suggestion.category}
										</span>
									</div>
								</div>
								<p className="text-sm leading-relaxed text-gray-700">
									{suggestion.description}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* Taboos Section */}
				<div className="mb-8">
					<div className="flex items-center mb-6">
						<div className="p-2 mr-3 bg-red-500 rounded-full">
							<svg
								className="w-5 h-5 text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fillRule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<h3 className="text-2xl font-bold text-red-700">
							五大禁忌行為
						</h3>
					</div>

					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{analysisData.taboos.map((taboo, index) => (
							<div
								key={index}
								className="p-6 transition-all duration-300 border border-red-200 bg-red-50 rounded-xl hover:shadow-lg"
							>
								<div className="flex items-center mb-4">
									<span className="mr-3 text-3xl">
										{taboo.icon}
									</span>
									<div>
										<h4 className="text-lg font-bold text-red-800">
											{taboo.title}
										</h4>
										<span className="px-2 py-1 text-xs text-red-700 bg-red-200 rounded-full">
											{taboo.level}
										</span>
									</div>
								</div>
								<p className="mb-3 text-sm leading-relaxed text-gray-700">
									{taboo.description}
								</p>
								<div className="p-3 bg-red-100 rounded-lg">
									<p className="text-xs font-medium text-red-600">
										⚠️ 後果：{taboo.consequence}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</ComponentErrorBoundary>
	);
}
