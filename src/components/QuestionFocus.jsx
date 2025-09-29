"use client";

import { useState, useEffect } from "react";
import { getConcernColor } from "../utils/colorTheme";

export default function QuestionFocus({ userInfo }) {
	const [solution, setSolution] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// Check if userInfo is provided
	if (!userInfo || !userInfo.problem) {
		return null;
	}

	const themeColor = getConcernColor(userInfo);

	// Debug color application
	console.log("🎨 QuestionFocus Color Debug:", {
		userInfo,
		concern: userInfo?.concern,
		themeColor,
		colorMapping: {
			財運: "#D09900",
			财运: "#D09900",
			感情: "#C74772",
			健康: "#389D7D",
			事業: "#3263C4",
			事业: "#3263C4",
		},
	});

	// Generate AI-powered solution
	useEffect(() => {
		const generateAISolution = async () => {
			try {
				setLoading(true);
				setError(null);

				const response = await fetch("/api/question-focus-analysis", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						userInfo: userInfo,
					}),
				});

				const data = await response.json();

				if (data.success) {
					setSolution(data.solution);
				} else {
					throw new Error(data.error || "分析失敗");
				}
			} catch (error) {
				console.error("Failed to generate AI solution:", error);
				setError(error.message);

				// Fallback to basic solution
				const fallbackSolutions = {
					健康: {
						title: "健康管理要點",
						content:
							"建議定期健康檢查，保持規律作息與適度運動。注重飲食均衡，避免過度勞累。如有身體不適應及時就醫，以專業醫療建議為主。",
					},
					財運: {
						title: "理財策略重點",
						content:
							"建議採取穩健投資策略，避免高風險投機。重視現金流管理，建立緊急基金。投資前需充分了解風險，分散投資組合。",
					},
					感情: {
						title: "情感經營要點",
						content:
							"注重溝通技巧的提升，學會換位思考與包容。建立健康的相處模式，給彼此適當空間。遇到衝突時保持冷靜，尋求雙贏解決方案。",
					},
					事業: {
						title: "職涯發展建議",
						content:
							"專注提升核心競爭力，持續學習新技能。建立良好人際關係網絡，把握合適機會但避免過度冒進。制定明確職涯規劃。",
					},
				};

				setSolution(
					fallbackSolutions[userInfo.concern] || {
						title: "綜合指導原則",
						content:
							"建議採取務實穩健的態度面對問題，充分收集資訊後再做決策。保持積極心態，但也要有合理預期。",
					}
				);
			} finally {
				setLoading(false);
			}
		};

		generateAISolution();
	}, [userInfo]);

	// Loading state
	if (loading) {
		return (
			<section className="w-full sm:w-[95%] lg:w-[95%] mx-auto bg-white rounded-[45px] p-6 sm:p-8 lg:p-10 mb-6 sm:mb-10 shadow-[0_4px_5.3px_rgba(0,0,0,0.25)]">
				<div className="flex items-center justify-center py-20">
					<div className="text-center">
						<div
							className="inline-block w-8 h-8 mb-4 border-b-2 rounded-full animate-spin"
							style={{ borderColor: themeColor }}
						></div>
						<p className="text-gray-600">AI正在分析您的問題...</p>
					</div>
				</div>
			</section>
		);
	}

	// Error state (should not happen due to fallback)
	if (error && !solution) {
		return (
			<section className="w-full sm:w-[95%] lg:w-[95%] mx-auto bg-white rounded-[45px] p-6 sm:p-8 lg:p-10 mb-6 sm:mb-10 shadow-[0_4px_5.3px_rgba(0,0,0,0.25)]">
				<div className="py-10 text-center">
					<p className="text-red-600">
						分析服務暫時不可用，請稍後再試
					</p>
				</div>
			</section>
		);
	}

	return (
		<section className="w-full sm:w-[95%] lg:w-[95%] mx-auto p-6 sm:p-8 lg:p-10 mb-6 sm:mb-10 ">
			{/* Question Focus Section */}
			<div className="mb-8">
				<div
					className="border-4 rounded-[30px] bg-white p-6 mb-6"
					style={{ borderColor: themeColor }}
				>
					<h2
						className="text-center text-[32px] font-bold mb-4"
						style={{
							fontFamily: "Noto Serif TC, serif",
							color: themeColor,
						}}
					>
						疑問重點
					</h2>
					<div
						className="text-center text-[18px] leading-relaxed px-4"
						style={{
							fontFamily: "Noto Sans HK, sans-serif",
							color: "#333",
						}}
					>
						{userInfo.problem}
					</div>
				</div>
			</div>

			{/* Solution Section */}
			<div
				className="border-4 rounded-[30px] bg-white p-8"
				style={{ borderColor: themeColor }}
			>
				<h3
					className="text-center text-[32px] font-bold mb-6"
					style={{
						fontFamily: "Noto Serif TC, serif",
						color: themeColor,
					}}
				>
					{solution.title}
				</h3>
				<div
					className="text-[16px] leading-relaxed text-center px-4"
					style={{
						fontFamily: "Noto Sans HK, sans-serif",
						color: "#333",
						lineHeight: "1.8",
					}}
				>
					{solution.content}
				</div>
			</div>
		</section>
	);
}
