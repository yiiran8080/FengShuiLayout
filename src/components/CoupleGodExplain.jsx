"use client";

import { useState, useEffect } from "react";
import { Download, Share2, Headphones, ArrowRight } from "lucide-react";
import { useCoupleAnalysis } from "@/contexts/CoupleAnalysisContext";
import { EnhancedInitialAnalysis } from "@/lib/enhancedInitialAnalysis";

const CoupleGodExplain = ({ user1, user2 }) => {
	const { analysisData, godAnalysisCache, setGodAnalysisCache } =
		useCoupleAnalysis();
	const [godExplanations, setGodExplanations] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// Check cache first to avoid re-loading
		if (godAnalysisCache) {
			console.log("📋 Using cached god analysis");
			setGodExplanations(godAnalysisCache);
			setLoading(false);
			return;
		}

		const generateGodExplanations = async () => {
			if (!user1?.birthDateTime || !user2?.birthDateTime) {
				setError("缺少生辰資料");
				setLoading(false);
				return;
			}

			try {
				// Generate AI-powered Ten Gods interaction analysis
				const explanations = await fetchGodInteractionAnalysis(
					user1,
					user2,
					analysisData
				);
				setGodExplanations(explanations);
				// Cache the result to prevent re-loading
				setGodAnalysisCache(explanations);
				console.log("💾 Cached god analysis for future use");
				setLoading(false);
			} catch (err) {
				console.error("Error generating god explanations:", err);
				setError("分析生成失敗");
				setLoading(false);
			}
		};

		generateGodExplanations();
	}, [user1, user2, analysisData]);

	const fetchGodInteractionAnalysis = async (user1, user2, coupleData) => {
		try {
			const response = await fetch("/api/couple-god-analysis", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Cache-Control": "no-cache",
				},
				body: JSON.stringify({
					user1Birthday: user1.birthDateTime,
					user2Birthday: user2.birthDateTime,
					user1Name: user1.name || "男方",
					user2Name: user2.name || "女方",
					compatibilityData: coupleData,
					analysisType: "ten_gods_interaction",
					timestamp: Date.now(), // Cache buster
				}),
			});

			if (!response.ok) {
				throw new Error("API request failed");
			}

			const result = await response.json();
			return result.godExplanations || [];
		} catch (error) {
			console.error("API call failed:", error);
			throw error;
		}
	};

	if (loading) {
		return (
			<div className="min-h-screen p-6 bg-gray-50">
				<div className="max-w-4xl mx-auto">
					<div className="flex items-center justify-center py-20">
						<div className="w-8 h-8 border-b-2 border-pink-500 rounded-full animate-spin"></div>
						<span className="ml-3 text-gray-600">
							正在生成十神互動精微解讀...
						</span>
					</div>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="min-h-screen p-6 bg-gray-50">
				<div className="max-w-4xl mx-auto">
					<div className="py-20 text-center">
						<div className="mb-4 text-red-500">分析生成失敗</div>
						<div className="text-gray-600">{error}</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen my-12">
			<div className="max-w-full mx-auto">
				{/* Header */}
				<div className="flex items-center justify-between mb-8">
					<h1 className="text-3xl font-bold text-gray-800">
						十神互動精微解讀
					</h1>
					{/* <div className="flex gap-3">
						<button className="flex items-center gap-2 px-4 py-2 text-white transition-colors bg-pink-500 rounded-full hover:bg-pink-600">
							<Download className="w-4 h-4" />
							下載報告
						</button>
						<button className="flex items-center gap-2 px-4 py-2 text-white transition-colors bg-pink-500 rounded-full hover:bg-pink-600">
							<Share2 className="w-4 h-4" />
							分享您的結果
						</button>
					</div> */}
				</div>

				{/* God Interaction Cards */}
				<div className="space-y-6">
					{godExplanations.map((explanation, index) => (
						<div
							key={index}
							className="w-full p-6 bg-white rounded-[30px] shadow-md p-15"
						>
							<GodInteractionCard
								explanation={explanation}
								index={index}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

const GodInteractionCard = ({ explanation, index }) => {
	const getGodColor = (explanation, isFromGod = true) => {
		// In the Ten Gods analysis:
		// - user1 is typically male (should be blue #4B6EB2)
		// - user2 is typically female (should be pink #C74772)

		const godName = isFromGod ? explanation.fromGod : explanation.toGod;

		// Check if god name explicitly mentions gender
		if (godName.includes("女方")) {
			return "#C74772"; // Female color - pink
		}
		if (godName.includes("男方")) {
			return "#4B6EB2"; // Male color - blue
		}

		// For interactions without explicit gender markers,
		// assume fromGod is from female (user2) and toGod is from male (user1)
		// based on the typical structure of the analysis
		if (isFromGod) {
			return "#C74772"; // Female color - pink (fromGod is typically female)
		} else {
			return "#4B6EB2"; // Male color - blue (toGod is typically male)
		}
	};

	return (
		<div className="space-y-4 ">
			{/* Interaction Direction Header - Shared for both cards */}
			<div className="flex items-center justify-center mb-6">
				<div className="flex items-center gap-4">
					<div
						className="px-10 py-2 text-lg font-medium text-white rounded-full"
						style={{
							backgroundColor: getGodColor(explanation, true),
						}}
					>
						{explanation.fromGod || "女方金偏印"}
					</div>
					<ArrowRight className="w-6 h-6 text-gray-400" />
					<div
						className="px-10 py-2 text-lg font-medium text-white rounded-full"
						style={{
							backgroundColor: getGodColor(explanation, false),
						}}
					>
						{explanation.toGod || "男方己土食神"}
					</div>
				</div>
			</div>

			{/* 互動分析 Card */}
			<div className="bg-[#EFEFEF] shadow-lg p-4 rounded-lg">
				<div className="text-black">
					<div className="mb-3">
						<h3 className="mb-2 text-lg font-semibold text-gray-800">
							互動分析
						</h3>
						<div className="leading-relaxed text-gray-700">
							{explanation.interaction || "分析中..."}
						</div>
					</div>

					{/* Key Issues within interaction analysis */}
					{explanation.keyIssues && (
						<div className="py-2 pl-4 mt-3 border-l-4 border-orange-400 rounded-r-lg bg-orange-50">
							<h4 className="mb-2 font-semibold text-orange-600">
								關鍵要點
							</h4>
							<p className="text-sm leading-relaxed text-gray-700">
								{explanation.keyIssues}
							</p>
						</div>
					)}
				</div>
			</div>

			{/* 相互影響 Card */}
			<div className="bg-[#EFEFEF] shadow-lg p-4 rounded-lg">
				<div className="text-black">
					<div className="mb-3">
						<h3 className="mb-2 text-lg font-semibold text-gray-800">
							相互影響
						</h3>

						{/* Mutual Effects Analysis */}
						{explanation.effects ? (
							<div className="leading-relaxed text-gray-700">
								{explanation.effects}
							</div>
						) : (
							<div className="leading-relaxed text-gray-700">
								{explanation.interaction
									? `這種${explanation.fromGod}與${explanation.toGod}的互動，會在雙方關係中產生深層的相互影響，需要特別注意平衡和調和。`
									: "相互影響分析中..."}
							</div>
						)}
					</div>

					{/* Problems section within mutual influence */}
					{explanation.problems &&
						explanation.problems.length > 0 && (
							<div className="py-2 pl-4 mt-3 border-l-4 border-red-400 rounded-r-lg bg-red-50">
								<h4 className="mb-2 font-semibold text-red-600">
									潛在問題
								</h4>
								<div className="space-y-1">
									{explanation.problems.map(
										(problem, idx) => (
											<p
												key={idx}
												className="text-sm leading-relaxed text-gray-700"
											>
												• {problem}
											</p>
										)
									)}
								</div>
							</div>
						)}

					{/* Solution section within mutual influence */}
					{explanation.solution && (
						<div className="py-2 pl-4 mt-3 border-l-4 border-green-400 rounded-r-lg bg-green-50">
							<h4 className="mb-2 font-semibold text-green-600">
								化解之道
							</h4>
							<p className="text-sm leading-relaxed text-gray-700">
								{explanation.solution}
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CoupleGodExplain;
