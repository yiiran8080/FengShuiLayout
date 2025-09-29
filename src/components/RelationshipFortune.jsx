"use client";

import { useState, useEffect } from "react";
import { Heart, TrendingUp, Calendar, Star } from "lucide-react";
import { useCoupleAnalysis } from "@/contexts/CoupleAnalysisContext";

const RelationshipFortune = ({ user1, user2, currentYear }) => {
	const { analysisData, loading: aiLoading, error } = useCoupleAnalysis();
	const [fortuneData, setFortuneData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (analysisData) {
			// Use available AI data and enhance with insights
			const currentYearData = new Date().getFullYear();

			setFortuneData({
				currentYear: {
					overall:
						analysisData.fortuneAnalysis?.currentYear ||
						`${currentYearData}年感情運勢：配對評分${analysisData.compatibility?.score || 75}分，${analysisData.compatibility?.level || "整體運勢良好"}`,
					favorablePeriods: analysisData.fortuneAnalysis
						?.favorablePeriods || [
						"春季 - 感情昇溫期",
						"秋季 - 關係穩定期",
					],
					cautionPeriods: analysisData.fortuneAnalysis
						?.cautionPeriods || [
						"夏季 - 注意溝通",
						"冬季 - 加強理解",
					],
				},
				monthlyFortune:
					analysisData.fortuneAnalysis?.monthlyFortune ||
					generateMonthlyFromAI(analysisData),
				monthlyPredictions:
					analysisData.fortuneAnalysis?.monthlyFortune ||
					generateMonthlyFromAI(analysisData),
				annualAdvice:
					analysisData.advice?.[0] || "建議定期溝通，增進相互理解",
				seasonalFortune:
					generateSeasonalFortuneFromCompatibility(analysisData),
				favorablePeriods: analysisData.fortuneAnalysis?.bestTiming
					? [
							{
								period: "感情昇溫期",
								reason: analysisData.fortuneAnalysis.bestTiming,
							},
						]
					: [
							{
								period: "感情昇溫的最佳時機",
								reason: "適合深化關係的時期",
							},
							{
								period: "深化關係的良好契機",
								reason: "增進理解的好時機",
							},
						],
				cautionPeriods: analysisData.fortuneAnalysis?.warnings
					? [
							{
								period: "需要注意期",
								reason: analysisData.fortuneAnalysis.warnings,
							},
						]
					: (
							analysisData.challenges?.slice(0, 2) || [
								"需要注意溝通方式",
								"避免誤解產生",
							]
						).map((challenge) => ({
							period: "注意期",
							reason: challenge,
						})),
				// Add missing relationshipFortune object with overallScore
				relationshipFortune: {
					overallScore: analysisData.compatibility?.score || 75,
					level: analysisData.compatibility?.level || "良好",
					description: `您們的感情運勢評分為${analysisData.compatibility?.score || 75}分`,
					advice:
						analysisData.advice?.[0] ||
						"建議保持良好溝通，增進相互理解",
					yearStem: "甲", // Default values for Chinese calendar
					yearBranch: "子",
				},
			});
			setLoading(false);
		} else if (!aiLoading && !analysisData) {
			// Fallback to basic analysis if AI data is not available
			if (user1?.birthDateTime && user2?.birthDateTime) {
				analyzeRelationshipFortuneFallback();
			}
		}
	}, [analysisData, aiLoading, user1, user2, currentYear]);

	const generateSeasonalFortuneFromAI = (fortuneData) => {
		// Extract seasonal insights from AI monthly data
		const months = fortuneData.monthlyFortune || [];
		return {
			spring: months.slice(2, 5),
			summer: months.slice(5, 8),
			autumn: months.slice(8, 11),
			winter: [...months.slice(11), ...months.slice(0, 2)],
		};
	};

	// Helper functions to generate content from available AI data
	const generateMonthlyFromAI = (aiData) => {
		const months = [
			"一",
			"二",
			"三",
			"四",
			"五",
			"六",
			"七",
			"八",
			"九",
			"十",
			"十一",
			"十二",
		];
		const patterns = aiData.strengths || [
			"感情和諧",
			"默契良好",
			"互相支持",
		];
		const warnings = aiData.challenges || [
			"注意溝通",
			"加強理解",
			"保持耐心",
		];

		return months.map((month, index) => ({
			month: `${month}月`,
			score: Math.floor(Math.random() * 30) + 70, // 70-100 range based on good compatibility
			fortuneLevel: Math.floor(Math.random() * 30) + 70, // Keeping both for compatibility
			description:
				index % 2 === 0
					? `${patterns[index % patterns.length]}，感情運勢穩中有升`
					: `需要${warnings[index % warnings.length]}，但整體關係良好`,
			keyAdvice:
				aiData.advice?.[index % (aiData.advice?.length || 1)] ||
				"保持良好溝通",
		}));
	};

	const generateSeasonalFortuneFromCompatibility = (aiData) => {
		const baseScore = aiData.compatibility?.score || 75;
		return [
			{
				name: "春季",
				months: ["3月", "4月", "5月"],
				element: "木",
				fortune:
					"感情昇溫的季節，" +
					(aiData.strengths?.[0] || "關係和諧發展"),
				fortuneLevel: Math.min(100, baseScore + 10),
				description:
					"感情昇溫的季節，" +
					(aiData.strengths?.[0] || "關係和諧發展"),
			},
			{
				name: "夏季",
				months: ["6月", "7月", "8月"],
				element: "火",
				fortune:
					"熱情如火，但需注意" +
					(aiData.challenges?.[0] || "溝通方式"),
				fortuneLevel: Math.max(60, baseScore - 5),
				description:
					"熱情如火，但需注意" +
					(aiData.challenges?.[0] || "溝通方式"),
			},
			{
				name: "秋季",
				months: ["9月", "10月", "11月"],
				element: "金",
				fortune:
					"穩定發展期，" + (aiData.advice?.[0] || "建議加強相互理解"),
				fortuneLevel: baseScore,
				description:
					"穩定發展期，" + (aiData.advice?.[0] || "建議加強相互理解"),
			},
			{
				name: "冬季",
				months: ["12月", "1月", "2月"],
				element: "水",
				fortune:
					"考驗期，需要" +
					(aiData.challenges?.[1] || "更多耐心和包容"),
				fortuneLevel: Math.max(65, baseScore - 3),
				description:
					"考驗期，需要" +
					(aiData.challenges?.[1] || "更多耐心和包容"),
			},
		];
	};

	const analyzeRelationshipFortuneFallback = () => {
		try {
			// Get birth years for both users
			const user1BirthYear = new Date(user1.birthDateTime).getFullYear();
			const user2BirthYear = new Date(user2.birthDateTime).getFullYear();

			// Calculate relationship fortune for current year
			const relationshipFortune = calculateRelationshipFortune(
				user1BirthYear,
				user2BirthYear,
				currentYear
			);

			// Get seasonal analysis
			const seasonalFortune = getSeasonalFortune(currentYear);

			// Calculate monthly predictions
			const monthlyPredictions = getMonthlyPredictions(
				user1BirthYear,
				user2BirthYear,
				currentYear
			);

			setFortuneData({
				relationshipFortune,
				seasonalFortune,
				monthlyPredictions,
				favorablePeriods: getFavorablePeriods(currentYear),
				cautionPeriods: getCautionPeriods(currentYear),
			});

			setLoading(false);
		} catch (error) {
			console.error("Error analyzing relationship fortune:", error);
			setLoading(false);
		}
	};

	const calculateRelationshipFortune = (birthYear1, birthYear2, year) => {
		// Calculate compatibility with current year's heavenly stem and earthly branch
		const yearStem = getHeavenlyStem(year);
		const yearBranch = getEarthlyBranch(year);

		const user1Compatibility = calculateYearCompatibility(birthYear1, year);
		const user2Compatibility = calculateYearCompatibility(birthYear2, year);

		const overallScore = Math.round(
			(user1Compatibility.score + user2Compatibility.score) / 2
		);

		return {
			yearStem,
			yearBranch,
			overallScore,
			user1Compatibility,
			user2Compatibility,
			description: getFortuneDescription(overallScore),
			advice: getFortuneAdvice(overallScore),
		};
	};

	const calculateYearCompatibility = (birthYear, currentYear) => {
		const birthBranch = getEarthlyBranch(birthYear);
		const currentBranch = getEarthlyBranch(currentYear);

		// Calculate branch compatibility
		const branchCompatibility = {
			子: {
				子: 70,
				丑: 85,
				寅: 40,
				卯: 60,
				辰: 90,
				巳: 70,
				午: 30,
				未: 45,
				申: 95,
				酉: 65,
				戌: 50,
				亥: 80,
			},
			丑: {
				子: 85,
				丑: 60,
				寅: 35,
				卯: 75,
				辰: 70,
				巳: 95,
				午: 40,
				未: 25,
				申: 60,
				酉: 90,
				戌: 55,
				亥: 65,
			},
			寅: {
				子: 40,
				丑: 35,
				寅: 70,
				卯: 80,
				辰: 60,
				巳: 30,
				午: 90,
				未: 75,
				申: 25,
				酉: 45,
				戌: 85,
				亥: 95,
			},
			卯: {
				子: 60,
				丑: 75,
				寅: 80,
				卯: 65,
				辰: 55,
				巳: 70,
				午: 75,
				未: 95,
				申: 50,
				酉: 35,
				戌: 90,
				亥: 85,
			},
			辰: {
				子: 90,
				丑: 70,
				寅: 60,
				卯: 55,
				辰: 65,
				巳: 80,
				午: 70,
				未: 60,
				申: 85,
				酉: 95,
				戌: 40,
				亥: 75,
			},
			巳: {
				子: 70,
				丑: 95,
				寅: 30,
				卯: 70,
				辰: 80,
				巳: 65,
				午: 75,
				未: 80,
				申: 90,
				酉: 85,
				戌: 60,
				亥: 35,
			},
			午: {
				子: 30,
				丑: 40,
				寅: 90,
				卯: 75,
				辰: 70,
				巳: 75,
				午: 60,
				未: 85,
				申: 65,
				酉: 70,
				戌: 95,
				亥: 80,
			},
			未: {
				子: 45,
				丑: 25,
				寅: 75,
				卯: 95,
				辰: 60,
				巳: 80,
				午: 85,
				未: 70,
				申: 75,
				酉: 80,
				戌: 65,
				亥: 90,
			},
			申: {
				子: 95,
				丑: 60,
				寅: 25,
				卯: 50,
				辰: 85,
				巳: 90,
				午: 65,
				未: 75,
				申: 70,
				酉: 60,
				戌: 45,
				亥: 55,
			},
			酉: {
				子: 65,
				丑: 90,
				寅: 45,
				卯: 35,
				辰: 95,
				巳: 85,
				午: 70,
				未: 80,
				申: 60,
				酉: 65,
				戌: 30,
				亥: 75,
			},
			戌: {
				子: 50,
				丑: 55,
				寅: 85,
				卯: 90,
				辰: 40,
				巳: 60,
				午: 95,
				未: 65,
				申: 45,
				酉: 30,
				戌: 70,
				亥: 85,
			},
			亥: {
				子: 80,
				丑: 65,
				寅: 95,
				卯: 85,
				辰: 75,
				巳: 35,
				午: 80,
				未: 90,
				申: 55,
				酉: 75,
				戌: 85,
				亥: 70,
			},
		};

		const score = branchCompatibility[birthBranch]?.[currentBranch] || 50;

		return {
			score,
			description: getCompatibilityDescription(score),
		};
	};

	const getSeasonalFortune = (year) => {
		const seasons = [
			{
				name: "春季",
				months: ["2月", "3月", "4月"],
				element: "木",
				fortune: "感情萌芽，新的開始",
				advice: "適合表達愛意，開展新關係",
			},
			{
				name: "夏季",
				months: ["5月", "6月", "7月"],
				element: "火",
				fortune: "感情熱烈，激情燃燒",
				advice: "感情升溫的好時機，但要注意控制情緒",
			},
			{
				name: "秋季",
				months: ["8月", "9月", "10月"],
				element: "金",
				fortune: "感情收穫，關係穩定",
				advice: "適合談論未來，作出承諾",
			},
			{
				name: "冬季",
				months: ["11月", "12月", "1月"],
				element: "水",
				fortune: "感情深沉，內心交流",
				advice: "適合深度溝通，增進了解",
			},
		];

		return seasons;
	};

	const getMonthlyPredictions = (birthYear1, birthYear2, year) => {
		const months = [
			{ month: "1月", score: 75, trend: "穩定", advice: "適合計劃未來" },
			{
				month: "2月",
				score: 85,
				trend: "上升",
				advice: "感情升溫的好時機",
			},
			{
				month: "3月",
				score: 80,
				trend: "穩定",
				advice: "保持現狀，細水長流",
			},
			{
				month: "4月",
				score: 70,
				trend: "波動",
				advice: "需要多溝通理解",
			},
			{
				month: "5月",
				score: 90,
				trend: "上升",
				advice: "最佳發展期，把握機會",
			},
			{
				month: "6月",
				score: 88,
				trend: "穩定",
				advice: "感情穩定，適合承諾",
			},
			{ month: "7月", score: 65, trend: "下降", advice: "注意情緒管理" },
			{
				month: "8月",
				score: 78,
				trend: "回升",
				advice: "關係修復的好時機",
			},
			{ month: "9月", score: 82, trend: "上升", advice: "適合深度交流" },
			{
				month: "10月",
				score: 76,
				trend: "穩定",
				advice: "保持耐心和理解",
			},
			{
				month: "11月",
				score: 73,
				trend: "波動",
				advice: "避免衝突，多包容",
			},
			{
				month: "12月",
				score: 80,
				trend: "上升",
				advice: "年終總結，展望未來",
			},
		];

		return months;
	};

	const getFavorablePeriods = (year) => {
		return [
			{ period: "2-3月", reason: "春季木旺，感情萌芽" },
			{ period: "5-6月", reason: "夏季火旺，激情燃燒" },
			{ period: "9-10月", reason: "秋季金旺，關係穩定" },
		];
	};

	const getCautionPeriods = (year) => {
		return [
			{ period: "7月", reason: "夏火過旺，情緒易激動" },
			{ period: "11月", reason: "冬水初起，情感內斂" },
		];
	};

	const getHeavenlyStem = (year) => {
		const stems = [
			"甲",
			"乙",
			"丙",
			"丁",
			"戊",
			"己",
			"庚",
			"辛",
			"壬",
			"癸",
		];
		return stems[(year - 4) % 10];
	};

	const getEarthlyBranch = (year) => {
		const branches = [
			"子",
			"丑",
			"寅",
			"卯",
			"辰",
			"巳",
			"午",
			"未",
			"申",
			"酉",
			"戌",
			"亥",
		];
		return branches[(year - 4) % 12];
	};

	const getCompatibilityDescription = (score) => {
		if (score >= 85) return "感情運勢極佳，天時地利人和";
		if (score >= 75) return "感情運勢良好，發展順利";
		if (score >= 65) return "感情運勢平穩，需要努力";
		if (score >= 50) return "感情運勢一般，需要磨合";
		return "感情運勢較弱，需要化解";
	};

	const getFortuneDescription = (score) => {
		if (score >= 85)
			return `${currentYear}年是你們感情的黃金年，各方面都會有很好的發展。`;
		if (score >= 75)
			return `${currentYear}年你們的感情運勢不錯，是穩定發展的一年。`;
		if (score >= 65)
			return `${currentYear}年你們的感情需要更多的經營和維護。`;
		if (score >= 50)
			return `${currentYear}年你們的感情會有一些挑戰，需要互相理解。`;
		return `${currentYear}年你們的感情需要特別注意，多溝通少爭執。`;
	};

	const getFortuneAdvice = (score) => {
		if (score >= 85)
			return "把握機會，可以考慮更進一步的發展，如結婚或同居。";
		if (score >= 75) return "保持現狀，繼續培養感情，適合制定長期計劃。";
		if (score >= 65) return "需要更多的溝通和理解，避免因小事爭吵。";
		if (score >= 50)
			return "要有耐心，多包容對方的缺點，共同努力改善關係。";
		return "建議暫緩重大決定，先解決現有問題再談未來。";
	};

	if (loading) {
		return (
			<div className="w-full p-8 bg-white rounded-lg shadow-lg">
				<div className="flex items-center justify-center">
					<div className="w-8 h-8 border-b-2 border-green-500 rounded-full animate-spin"></div>
					<span className="ml-2 text-gray-600">
						分析感情運勢中...
					</span>
				</div>
			</div>
		);
	}

	if (!fortuneData) {
		return (
			<div className="w-full p-8 bg-white rounded-lg shadow-lg">
				<div className="text-center text-gray-500">
					<TrendingUp className="w-12 h-12 mx-auto mb-2 text-gray-300" />
					<p>無法分析感情運勢，請檢查出生資料</p>
				</div>
			</div>
		);
	}

	return (
		<div
			className="w-full bg-white p-8 rounded-[45px]"
			style={{ boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)" }}
		>
			{/* Header */}
			<div className="p-6">
				<h2
					className="flex items-center text-2xl font-bold"
					style={{
						fontFamily: "Noto Serif TC, Serif",
						color: "#D91A5A",
						fontSize: "40px",
					}}
				>
					{currentYear}年感情運勢分析
				</h2>
			</div>

			{/* Overall Fortune */}
			<div className="p-8">
				<div className="mb-8">
					<div
						className="px-4 py-2 mb-4 rounded"
						style={{ backgroundColor: "#D91A5A" }}
					>
						<h3 className="flex items-center text-lg text-white">
							<TrendingUp className="w-5 h-5 mr-2" />
							整體運勢評分
						</h3>
					</div>
					<div className="text-center p-6 border border-gray-200 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
						<div
							className="text-5xl font-bold mb-2"
							style={{
								color:
									(fortuneData?.relationshipFortune
										?.overallScore || 75) >= 75
										? "#10B981"
										: (fortuneData?.relationshipFortune
													?.overallScore || 75) >= 60
											? "#F59E0B"
											: "#EF4444",
							}}
						>
							{fortuneData?.relationshipFortune?.overallScore ||
								75}
							分
						</div>
						<h3 className="text-xl font-semibold text-gray-800 mb-2">
							{currentYear}
							{fortuneData?.relationshipFortune?.yearStem || ""}
							{fortuneData?.relationshipFortune?.yearBranch || ""}
							年 感情運勢
						</h3>
						<p
							className="text-black mb-4"
							style={{ fontSize: "15px" }}
						>
							{fortuneData?.relationshipFortune?.description ||
								"感情運勢分析中..."}
						</p>
						<p className="text-black" style={{ fontSize: "15px" }}>
							{fortuneData?.relationshipFortune?.advice ||
								"建議保持良好溝通"}
						</p>
					</div>
				</div>

				{/* Seasonal Fortune */}
				<div className="mb-8">
					<div
						className="px-4 py-2 mb-4 rounded"
						style={{ backgroundColor: "#D91A5A" }}
					>
						<h3 className="flex items-center text-lg text-white">
							<Calendar className="w-5 h-5 mr-2" />
							四季感情運勢
						</h3>
					</div>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
						{fortuneData?.seasonalFortune?.map((season, index) => {
							// Get season background color based on season name
							const getSeasonBgColor = (seasonName) => {
								const colorMap = {
									春季: "bg-[#7cb856]",
									夏季: "bg-[#B4003C]",
									秋季: "bg-[#DEAB20]",
									冬季: "bg-[#568CB8]",
								};
								return colorMap[seasonName] || "bg-gray-600";
							};

							// Get season container border color
							const getSeasonContainerBorder = (seasonName) => {
								const colorMap = {
									春季: "border-[#7cb856]",
									夏季: "border-[#B4003C]",
									秋季: "border-[#DEAB20]",
									冬季: "border-[#568CB8]",
								};
								return (
									colorMap[seasonName] || "border-gray-200"
								);
							};

							// Get season image path
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

							return (
								<div
									key={index}
									className={`border-2 ${getSeasonContainerBorder(season?.name)} rounded-lg p-4 bg-white`}
								>
									<div className="text-center mb-3">
										<div
											className={`flex items-center justify-center w-16 h-16 mx-auto mb-3 rounded-full ${getSeasonBgColor(season?.name)}`}
										>
											<img
												src={getSeasonImage(
													season?.name
												)}
												alt={season?.name || "季節"}
												className="object-contain w-8 h-8"
												style={{
													filter: "brightness(0) invert(1)",
												}}
											/>
										</div>
										<h4 className="font-semibold text-gray-800">
											{season?.name || "季節"}
										</h4>
										<p className="text-sm text-gray-600">
											{season?.months?.join(" ") ||
												"月份信息"}
										</p>
									</div>
									<div className="space-y-2">
										<div className="flex items-center">
											<span className="text-sm text-gray-600">
												五行：
											</span>
											<div className="flex items-center ml-1">
												<img
													src={`/images/elements/${season?.element || "木"}.png`}
													alt={
														season?.element ||
														"未知"
													}
													className="w-6 h-6 object-contain mr-2"
												/>
												<span className="text-sm font-semibold text-gray-800">
													{season?.element || "未知"}
												</span>
											</div>
										</div>
										<div>
											<p
												className="text-black"
												style={{ fontSize: "15px" }}
											>
												{season?.fortune ||
													season?.description ||
													"運勢分析中..."}
											</p>
											<p
												className="text-gray-600 mt-1"
												style={{ fontSize: "13px" }}
											>
												{season.advice}
											</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* Monthly Predictions */}
				<div className="mb-8">
					<div
						className="px-4 py-2 mb-4 rounded"
						style={{ backgroundColor: "#D91A5A" }}
					>
						<h3 className="flex items-center text-lg text-white">
							<Star className="w-5 h-5 mr-2" />
							月度感情預測
						</h3>
					</div>
					<div className="grid gap-3 md:grid-cols-3 lg:grid-cols-4">
						{fortuneData?.monthlyPredictions?.map(
							(month, index) => {
								// Get seasonal border color based on month
								const getMonthSeasonBorder = (monthName) => {
									// Convert Chinese number characters to Arabic numbers
									const chineseToNumber = {
										一: 1,
										二: 2,
										三: 3,
										四: 4,
										五: 5,
										六: 6,
										七: 7,
										八: 8,
										九: 9,
										十: 10,
										十一: 11,
										十二: 12,
									};

									let monthNumber;
									if (monthName.includes("月")) {
										const monthPart = monthName.replace(
											"月",
											""
										);
										monthNumber =
											chineseToNumber[monthPart] ||
											parseInt(monthPart);
									} else {
										monthNumber = parseInt(monthName);
									}

									if (monthNumber >= 3 && monthNumber <= 5) {
										return "border-[#7cb856]"; // Spring
									} else if (
										monthNumber >= 6 &&
										monthNumber <= 8
									) {
										return "border-[#B4003C]"; // Summer
									} else if (
										monthNumber >= 9 &&
										monthNumber <= 11
									) {
										return "border-[#DEAB20]"; // Autumn
									} else {
										return "border-[#568CB8]"; // Winter (12, 1, 2)
									}
								};

								return (
									<div
										key={index}
										className={`bg-white rounded-lg p-4 border-2 ${getMonthSeasonBorder(month?.month)}`}
									>
										<div className="flex justify-between items-center mb-2">
											<h4 className="font-medium text-gray-800">
												{month?.month || "月份"}
											</h4>
											<span
												className="text-sm font-semibold"
												style={{
													color:
														(month?.score || 70) >=
														80
															? "#10B981"
															: (month?.score ||
																		70) >=
																  70
																? "#3B82F6"
																: (month?.score ||
																			70) >=
																	  60
																	? "#F59E0B"
																	: "#EF4444",
												}}
											>
												{month?.score || 70}分
											</span>
										</div>
										<div className="space-y-1">
											<div className="flex items-center">
												<span className="text-xs text-gray-600">
													趨勢：
												</span>
												<span
													className="text-xs ml-1"
													style={{
														color:
															month.trend ===
															"上升"
																? "#10B981"
																: month.trend ===
																	  "穩定"
																	? "#3B82F6"
																	: "#F59E0B",
													}}
												>
													{month.trend}
												</span>
											</div>
											<p
												className="text-black"
												style={{ fontSize: "15px" }}
											>
												{month.advice}
											</p>
										</div>
									</div>
								);
							}
						)}
					</div>
				</div>

				{/* Favorable and Caution Periods */}
				<div className="grid gap-8 md:grid-cols-2">
					<div>
						<div
							className="px-4 py-2 mb-4 rounded"
							style={{ backgroundColor: "#D91A5A" }}
						>
							<h3 className="flex items-center text-lg text-white">
								<Heart className="w-5 h-5 mr-2" />
								有利時期
							</h3>
						</div>
						<div className="space-y-3">
							{fortuneData?.favorablePeriods?.map(
								(period, index) => (
									<div
										key={index}
										className="bg-green-50 rounded-lg p-4 border border-green-200"
									>
										<h4 className="font-medium text-green-800">
											{period?.period || period}
										</h4>
										<p
											className="text-green-700"
											style={{ fontSize: "15px" }}
										>
											{period?.reason || "有利時期"}
										</p>
									</div>
								)
							)}
						</div>
					</div>

					<div>
						<div
							className="px-4 py-2 mb-4 rounded"
							style={{ backgroundColor: "#D91A5A" }}
						>
							<h3 className="flex items-center text-lg text-white">
								<Calendar className="w-5 h-5 mr-2" />
								注意時期
							</h3>
						</div>
						<div className="space-y-3">
							{fortuneData?.cautionPeriods?.map(
								(period, index) => (
									<div
										key={index}
										className="bg-orange-50 rounded-lg p-4 border border-orange-200"
									>
										<h4 className="font-medium text-orange-800">
											{period?.period || period}
										</h4>
										<p
											className="text-orange-700"
											style={{ fontSize: "15px" }}
										>
											{period?.reason || "需要注意的時期"}
										</p>
									</div>
								)
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RelationshipFortune;
