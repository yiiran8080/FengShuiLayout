"use client";

import React, { useState, useEffect } from "react";
import { generateRelationshipFortunePrompt } from "@/lib/relationshipFortunePrompt";
import {
	getCurrentFortunePeriods,
	formatFortunePeriod,
} from "@/lib/fortunePeriodCalculator";

const RelationshipFortuneAnalysis = ({
	userInfo,
	wuxingData,
	sessionId,
	onDataUpdate,
	showHistorical,
	historicalData,
}) => {
	const [activeTab, setActiveTab] = useState("正緣特徵三重認證");
	const [relationshipAnalysis, setRelationshipAnalysis] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isAIGenerated, setIsAIGenerated] = useState(false);
	const [hasGenerated, setHasGenerated] = useState(false);

	// Calculate dynamic fortune periods based on birth date
	const fortunePeriods = userInfo?.birthDateTime
		? getCurrentFortunePeriods(userInfo.birthDateTime, userInfo.gender)
		: null;

	// Generate AI analysis on component mount
	useEffect(() => {
		// ✅ Load historical data when showing historical report
		if (showHistorical && historicalData) {
			setRelationshipAnalysis(historicalData.analysis || historicalData);
			setIsAIGenerated(historicalData.isAIGenerated || false);
			setIsLoading(false);
			setHasGenerated(true);
			return;
		}

		// ✅ Skip generation when showing historical data but no data available
		if (showHistorical) {
			setIsLoading(false);
			return;
		}

		// ✅ Only generate once for new reports, prevent infinite loops
		if (userInfo && wuxingData && !showHistorical && !hasGenerated) {
			console.log("💕 RelationshipFortuneAnalysis: Starting generation");
			generateRelationshipAnalysis();
		} else {
			console.log("💕 RelationshipFortuneAnalysis: Skipping generation", {
				userInfo: !!userInfo,
				wuxingData: !!wuxingData,
				showHistorical,
				hasGenerated,
			});
		}
	}, [userInfo, wuxingData, showHistorical, historicalData, hasGenerated]);

	const generateRelationshipAnalysis = async () => {
		try {
			setIsLoading(true);
			const prompt = generateRelationshipFortunePrompt(
				userInfo,
				wuxingData
			);

			// Call the AI API
			const response = await fetch("/api/relationship-fortune-analysis", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ prompt, userInfo, wuxingData }),
			});

			const result = await response.json();

			if (result.success) {
				setRelationshipAnalysis(result.analysis);
				setIsAIGenerated(result.isAIGenerated || false);
				setHasGenerated(true);
				console.log(
					`💕 Using ${result.isAIGenerated ? "DeepSeek AI" : "Structured Mock"} relationship data`
				);

				// ✅ NEW: Auto-save relationship fortune data
				if (onDataUpdate && result.analysis) {
					console.log("💾 Saving relationship fortune analysis data");
					onDataUpdate({
						analysis: result.analysis,
						isAIGenerated: result.isAIGenerated || false,
						generatedAt: new Date().toISOString(),
						sessionId,
						userInfo,
						wuxingData,
					});
				}
			} else {
				// Fallback to mock data if API fails
				console.warn(
					"Relationship API failed, using mock data:",
					result.error
				);
				const mockAnalysis = generateMockRelationshipAnalysis(
					userInfo,
					wuxingData
				);
				setRelationshipAnalysis(mockAnalysis);
				setIsAIGenerated(false);
				setHasGenerated(true);

				// ✅ NEW: Auto-save mock relationship fortune data
				if (onDataUpdate && mockAnalysis) {
					console.log(
						"💾 Saving mock relationship fortune analysis data"
					);
					onDataUpdate({
						analysis: mockAnalysis,
						isAIGenerated: false,
						generatedAt: new Date().toISOString(),
						sessionId,
						userInfo,
						wuxingData,
					});
				}
			}
		} catch (error) {
			console.error("Error generating relationship analysis:", error);
			// Fallback to mock data on error
			const mockAnalysis = generateMockRelationshipAnalysis(
				userInfo,
				wuxingData
			);
			setRelationshipAnalysis(mockAnalysis);
			setHasGenerated(true);

			// ✅ NEW: Auto-save fallback relationship fortune data after error
			if (onDataUpdate && mockAnalysis) {
				console.log(
					"💾 Saving fallback relationship fortune analysis data after error"
				);
				onDataUpdate({
					analysis: mockAnalysis,
					isAIGenerated: false,
					generatedAt: new Date().toISOString(),
					sessionId,
					userInfo,
					wuxingData,
					error: error.message,
				});
			}
		} finally {
			setIsLoading(false);
		}
	};

	const generateMockRelationshipAnalysis = (userInfo, wuxingData) => {
		const birthDate = new Date(userInfo.birthDateTime);
		const currentYear = new Date().getFullYear();
		const age = currentYear - birthDate.getFullYear();
		const dayMaster = wuxingData.dayStem || "癸";
		const dayMasterElement = wuxingData.dayStemWuxing || "水";

		return {
			summary: {
				title: "殺星混雜，晚婚得良緣",
				description:
					"月干己土七殺為夫星，日支丑土藏殺，時柱壬子劫財，形成「殺星混雜」格局，婚戀需過濾爛桃花。",
			},
			authenticity: {
				profession: {
					title: "基本屬性",
					description:
						"正緣伴侶具七殺格，代表紀律、權威與責任感強烈，適合軍警、執法人員或外科醫師等需高度自律與決斷力的職業。此類人士能提供穩定保護，補足癸水日主的柔韌性，助感情長久。",
					warning: "注意事項：七殺過旺易嚴苛，需互補溫柔",
				},
				ageGap: {
					title: "年齡差距",
					description:
						"伴侶年長6-12歲，己土印星得火生助，利於中老年運勢發達，此差距助穩定感情，避免年輕衝動導致的波折。年長者帶來成熟智慧，平衡癸水的滲透性。",
					warning: "注意事項：差距過大易生代溝，定期溝通興趣",
				},
				meetingChance: {
					title: "相識契機",
					description:
						"2041年辛酉，辛金印星通關，酉金合局，利智慧交流，適合在學術會議、研討會或專業論壇相遇，透過共同興趣快速建立連結。",
					warning: "注意事項：酉金暗藏競爭，勿急於表白",
				},
			},
			romanticCycles: {
				[`${fortunePeriods?.periods?.[0]?.ageRange || "25歲前"}`]: {
					period: fortunePeriods?.periods?.[0]?.ageRange || "25歲前",
					fortune: `${fortunePeriods?.periods?.[0]?.dayun || "丁卯"}運`,
					dangerousYear: `${fortunePeriods?.periods?.[0]?.startYear + 4 || 2029}年：七殺透干`,
					crisis: "遇激情戀情，但子酉破終分手",
					solution:
						"避開生肖馬者（午火增殺攻身）：午火增殺攻身；易放大衝突；分手後靜心1個月，勿衝動脫單。",
				},
				[`${fortunePeriods?.periods?.[1]?.ageRange || "35歲危機"}`]: {
					period: `${fortunePeriods?.periods?.[1]?.ageRange || "35歲危機"}`,
					fortune: `${fortunePeriods?.periods?.[1]?.dayun || "丙寅"}運`,
					dangerousYear: `${fortunePeriods?.periods?.[1]?.startYear + 8 || 2037}年：巳丑拱殺，易陷三角關係`,
					crisis: "丁火生己火，巳丑拱金局，紆氣過旺；易推入第三者糾紛，影響婚姻穩定。",
					solution:
						"臥室懸掛高山流水畫（金生水）：選擇絲綢畫作，掛南牆；化解火熱，每日約會1次，重建信任。",
				},
				"45歲波動": {
					period: "45歲波動",
					fortune: "乙丑運",
					dangerousYear: "2047丁卯年：子卯刑剋，防財產糾紛",
					crisis: "丁火激木火，子水與西金相刑，易因金錢或產爭執，導致夫妻不和。",
					solution:
						"家中財位（東南角）放置聚寶盆（陶瓷，內放3枚銅錢）：穩財運，簽訂婚前協議，明確財產歸屬。",
				},
			},
			marriageRules: {
				bestYear: {
					title: "最佳婚年",
					year: "2033癸丑年（丑土夫宮到位）",
					description:
						"2033年癸水上旺，己土丑印星得火生利於中老年運勢發達，利金錢或產爭執，導致夫妻不和。應先記錄雙方共同目標，建立記錄整婚時間。",
				},
				taboos: {
					title: "相處禁忌",
					financial: {
						title: "禁止財務共有（壬水劫財奪財）",
						description:
							"因壬水劫財星奪財，建議分開管理財產，定期清理投資狀況，避免產權糾紛影響感情和諧。",
					},
					frequency: {
						title: "週末分房睡（緩解水火相激）",
						description:
							"水火五行有輕微相剋，週末分開睡覺能緩解衝突，每日約會1次，重建信任。",
					},
				},
				childrenFate: {
					title: "子女緣",
					timing: "2044甲子年得長子（子水祿神應期）",
					description:
						"子年利財祿，生子時機良好，甲子年天干地支都符合，子女聰明有智慧，多與學術或水相關行業。",
				},
			},
		};
	};

	if (isLoading) {
		return (
			<div className="py-20 text-center">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C74772] mx-auto mb-4"></div>
				<p className="text-lg text-[#5A5A5A]">
					正在生成感情運勢分析...
				</p>
			</div>
		);
	}

	if (!relationshipAnalysis) {
		return (
			<div className="py-20 text-center">
				<p className="text-lg text-[#5A5A5A]">
					感情分析生成失敗，請重新整理頁面
				</p>
			</div>
		);
	}

	const tabs = ["正緣特徵三重認證", "三大情劫週期"];

	return (
		<div className="w-full">
			{/* Header */}
			<div className="mb-4 sm:mb-8">
				<div className="flex items-center gap-2 mb-3 sm:gap-3 sm:mb-4">
					<h2
						className="font-bold text-[#374A37]"
						style={{
							fontFamily: "Noto Serif TC, serif",
							fontSize: "clamp(24px, 5vw, 36px)",
						}}
					>
						感情運勢分析
					</h2>
				</div>

				{/* Summary Section */}
				<div className="bg-gradient-to-r from-[#C74772] to-[#A03A5A] rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 inline-block">
					<h3
						className="font-bold text-white"
						style={{
							fontFamily: "Noto Serif TC, serif",
							fontSize: "clamp(16px, 3.5vw, 20px)",
						}}
					>
						總結：{relationshipAnalysis.summary.title}
					</h3>
				</div>

				<p
					className="text-[#374A37] leading-relaxed mb-4 sm:mb-8"
					style={{
						fontFamily: "Noto Sans HK, sans-serif",
						fontSize: "clamp(14px, 3vw, 18px)",
						lineHeight: 1.6,
					}}
				>
					{relationshipAnalysis.summary.description}
				</p>
			</div>

			{/* Relationship Analysis Sections */}
			<div
				className="bg-[#EFEFEF] rounded-xl p-3 sm:p-6 mb-4 sm:mb-6"
				style={{ boxShadow: "inset 0 4px 4px rgba(0, 0, 0, 0.25)" }}
			>
				<h3
					className="font-bold text-[#C74772] mb-4 sm:mb-6"
					style={{
						fontFamily: "Noto Serif TC, serif",
						fontSize: "clamp(20px, 4vw, 28px)",
					}}
				>
					感情全週期透視
				</h3>

				{/* Tab Navigation */}
				<div className="flex flex-col justify-center gap-3 mb-6 sm:flex-row sm:gap-6 sm:mb-8">
					{tabs.map((tab) => (
						<button
							key={tab}
							onClick={() => setActiveTab(tab)}
							className={`px-4 sm:px-8 py-2 sm:py-4 rounded-full font-semibold transition-all duration-200 ${
								activeTab === tab
									? "bg-[#C74772] text-white"
									: "bg-white text-[#757575] hover:bg-gray-50"
							}`}
							style={{
								fontFamily: "Noto Serif TC, serif",
								fontSize: "clamp(14px, 3vw, 18px)",
								boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
							}}
						>
							{tab}
						</button>
					))}
				</div>

				{/* Tab Content */}
				<div className="mb-4 sm:mb-8">
					{activeTab === "正緣特徵三重認證" && (
						<div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
							{/* 基本屬性 */}
							<div
								className="p-3 bg-white rounded-lg sm:p-4"
								style={{
									boxShadow:
										"inset 0 4px 4px rgba(0, 0, 0, 0.25)",
								}}
							>
								<div className="bg-[#C74772] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-2 sm:mb-3 inline-block">
									<h4
										className="font-bold text-white"
										style={{
											fontFamily: "Noto Serif TC, serif",
											fontSize:
												"clamp(12px, 2.5vw, 14px)",
										}}
									>
										基本屬性
									</h4>
								</div>
								<div className="space-y-2 sm:space-y-3">
									<p
										className="text-[#374A37]"
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
											fontSize:
												"clamp(12px, 2.5vw, 14px)",
											lineHeight: 1.5,
										}}
									>
										{
											relationshipAnalysis.authenticity
												.profession.description
										}
									</p>
									<div className="p-2 rounded-lg sm:p-3 bg-red-50">
										<p
											className="text-red-700"
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
												fontSize:
													"clamp(12px, 2.5vw, 14px)",
												lineHeight: 1.4,
											}}
										>
											{
												relationshipAnalysis
													.authenticity.profession
													.warning
											}
										</p>
									</div>
								</div>
							</div>

							{/* 年齡差距 */}
							<div
								className="p-3 bg-white rounded-lg sm:p-4"
								style={{
									boxShadow:
										"inset 0 4px 4px rgba(0, 0, 0, 0.25)",
								}}
							>
								<div className="bg-[#C74772] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-2 sm:mb-3 inline-block">
									<h4
										className="font-bold text-white"
										style={{
											fontFamily: "Noto Serif TC, serif",
											fontSize:
												"clamp(12px, 2.5vw, 14px)",
										}}
									>
										年齡差距
									</h4>
								</div>
								<div className="space-y-2 sm:space-y-3">
									<p
										className="text-[#374A37]"
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
											fontSize:
												"clamp(12px, 2.5vw, 14px)",
											lineHeight: 1.5,
										}}
									>
										{
											relationshipAnalysis.authenticity
												.ageGap.description
										}
									</p>
									<div className="p-2 rounded-lg sm:p-3 bg-red-50">
										<p
											className="text-red-700"
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
												fontSize:
													"clamp(12px, 2.5vw, 14px)",
												lineHeight: 1.4,
											}}
										>
											{
												relationshipAnalysis
													.authenticity.ageGap.warning
											}
										</p>
									</div>
								</div>
							</div>

							{/* 相識契機 */}
							<div
								className="p-3 bg-white rounded-lg sm:p-4 md:col-span-2 lg:col-span-1"
								style={{
									boxShadow:
										"inset 0 4px 4px rgba(0, 0, 0, 0.25)",
								}}
							>
								<div className="bg-[#C74772] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-2 sm:mb-3 inline-block">
									<h4
										className="font-bold text-white"
										style={{
											fontFamily: "Noto Serif TC, serif",
											fontSize:
												"clamp(12px, 2.5vw, 14px)",
										}}
									>
										相識契機
									</h4>
								</div>
								<div className="space-y-2 sm:space-y-3">
									<p
										className="text-[#374A37]"
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
											fontSize:
												"clamp(12px, 2.5vw, 14px)",
											lineHeight: 1.5,
										}}
									>
										{
											relationshipAnalysis.authenticity
												.meetingChance.description
										}
									</p>
									<div className="p-2 rounded-lg sm:p-3 bg-red-50">
										<p
											className="text-red-700"
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
												fontSize:
													"clamp(12px, 2.5vw, 14px)",
												lineHeight: 1.4,
											}}
										>
											{
												relationshipAnalysis
													.authenticity.meetingChance
													.warning
											}
										</p>
									</div>
								</div>
							</div>
						</div>
					)}

					{activeTab === "三大情劫週期" && (
						<div>
							{/* Mobile Card Layout */}
							<div className="block space-y-4 md:hidden">
								{Object.entries(
									relationshipAnalysis.romanticCycles
								).map(([key, cycle], index) => (
									<div
										key={key}
										className="p-3 bg-white rounded-lg shadow-sm"
									>
										<div className="mb-3">
											<h5
												className="font-bold text-[#C74772] mb-1"
												style={{
													fontFamily:
														"Noto Serif TC, serif",
													fontSize:
														"clamp(14px, 3vw, 16px)",
												}}
											>
												{cycle.period}
											</h5>
											<p
												className="text-[#374A37]"
												style={{
													fontFamily:
														"Noto Sans HK, sans-serif",
													fontSize:
														"clamp(12px, 2.5vw, 14px)",
												}}
											>
												{cycle.fortune}
											</p>
										</div>
										<div className="mb-2">
											<p
												className="font-medium text-[#374A37] mb-1"
												style={{
													fontFamily:
														"Noto Serif TC, serif",
													fontSize:
														"clamp(12px, 2.5vw, 14px)",
												}}
											>
												關鍵流年：
											</p>
											<p
												className="text-[#374A37] mb-1"
												style={{
													fontFamily:
														"Noto Sans HK, sans-serif",
													fontSize:
														"clamp(12px, 2.5vw, 14px)",
													lineHeight: 1.4,
												}}
											>
												{cycle.dangerousYear}
											</p>
											{cycle.crisis && (
												<p
													className="text-[#374A37]"
													style={{
														fontFamily:
															"Noto Sans HK, sans-serif",
														fontSize:
															"clamp(12px, 2.5vw, 14px)",
														lineHeight: 1.4,
													}}
												>
													{cycle.crisis}
												</p>
											)}
										</div>
										<div className="p-2 rounded-lg bg-red-50">
											<p
												className="text-red-700"
												style={{
													fontFamily:
														"Noto Sans HK, sans-serif",
													fontSize:
														"clamp(12px, 2.5vw, 14px)",
													lineHeight: 1.4,
												}}
											>
												<strong>解決方案：</strong>
												{cycle.solution}
											</p>
										</div>
									</div>
								))}
							</div>

							{/* Desktop Table Layout */}
							<div className="hidden space-y-4 md:block sm:space-y-6">
								{/* Table Header */}
								<div className="grid grid-cols-4 gap-3 mb-3 sm:gap-4 sm:mb-4">
									<div className="bg-[#C74772] text-white p-2 sm:p-3 rounded-lg text-center">
										<h5
											className="font-bold"
											style={{
												fontFamily:
													"Noto Serif TC, serif",
												fontSize:
													"clamp(12px, 2.5vw, 14px)",
											}}
										>
											時期
										</h5>
									</div>
									<div className="bg-[#C74772] text-white p-2 sm:p-3 rounded-lg text-center">
										<h5
											className="font-bold"
											style={{
												fontFamily:
													"Noto Serif TC, serif",
												fontSize:
													"clamp(12px, 2.5vw, 14px)",
											}}
										>
											大運
										</h5>
									</div>
									<div className="bg-[#C74772] text-white p-2 sm:p-3 rounded-lg text-center">
										<h5
											className="font-bold"
											style={{
												fontFamily:
													"Noto Serif TC, serif",
												fontSize:
													"clamp(12px, 2.5vw, 14px)",
											}}
										>
											關鍵流年
										</h5>
									</div>
									<div className="bg-[#C74772] text-white p-2 sm:p-3 rounded-lg text-center">
										<h5
											className="font-bold"
											style={{
												fontFamily:
													"Noto Serif TC, serif",
												fontSize:
													"clamp(12px, 2.5vw, 14px)",
											}}
										>
											風險預警
										</h5>
									</div>
								</div>

								{/* 25歲前 */}
								<div className="grid items-start grid-cols-4 gap-3 sm:gap-4">
									<div className="p-2 bg-white rounded-lg sm:p-3">
										<h5
											className="font-bold text-[#374A37]"
											style={{
												fontFamily:
													"Noto Serif TC, serif",
												fontSize:
													"clamp(12px, 2.5vw, 14px)",
											}}
										>
											{
												relationshipAnalysis
													.romanticCycles["25歲前"]
													.period
											}
										</h5>
									</div>
									<div className="p-2 bg-white rounded-lg sm:p-3">
										<p
											className="text-[#374A37]"
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
												fontSize:
													"clamp(12px, 2.5vw, 14px)",
											}}
										>
											{
												relationshipAnalysis
													.romanticCycles["25歲前"]
													.fortune
											}
										</p>
									</div>
									<div className="p-2 bg-white rounded-lg sm:p-3">
										<p
											className="text-[#374A37] mb-1 sm:mb-2"
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
												fontSize:
													"clamp(12px, 2.5vw, 14px)",
												lineHeight: 1.4,
											}}
										>
											{
												relationshipAnalysis
													.romanticCycles["25歲前"]
													.dangerousYear
											}
										</p>
										<p
											className="text-[#374A37]"
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
												fontSize:
													"clamp(12px, 2.5vw, 14px)",
												lineHeight: 1.4,
											}}
										>
											{
												relationshipAnalysis
													.romanticCycles["25歲前"]
													.crisis
											}
										</p>
									</div>
									<div className="p-2 bg-white rounded-lg sm:p-3">
										<p
											className="text-[#374A37]"
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
												fontSize:
													"clamp(12px, 2.5vw, 14px)",
												lineHeight: 1.4,
											}}
										>
											{
												relationshipAnalysis
													.romanticCycles["25歲前"]
													.solution
											}
										</p>
									</div>
								</div>

								{/* 35歲危機 */}
								<div className="grid items-start grid-cols-4 gap-3 sm:gap-4">
									<div className="p-2 bg-white rounded-lg sm:p-3">
										<h5
											className="font-bold text-[#374A37]"
											style={{
												fontFamily:
													"Noto Serif TC, serif",
												fontSize:
													"clamp(12px, 2.5vw, 14px)",
											}}
										>
											{
												relationshipAnalysis
													.romanticCycles["35歲危機"]
													.period
											}
										</h5>
									</div>
									<div className="p-2 bg-white rounded-lg sm:p-3">
										<p
											className="text-[#374A37]"
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
												fontSize:
													"clamp(12px, 2.5vw, 14px)",
											}}
										>
											{
												relationshipAnalysis
													.romanticCycles["35歲危機"]
													.fortune
											}
										</p>
									</div>
									<div className="p-2 bg-white rounded-lg sm:p-3">
										<p
											className="text-[#374A37]"
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
												fontSize:
													"clamp(12px, 2.5vw, 14px)",
												lineHeight: 1.4,
											}}
										>
											{
												relationshipAnalysis
													.romanticCycles["35歲危機"]
													.dangerousYear
											}
										</p>
									</div>
									<div className="p-2 bg-white rounded-lg sm:p-3">
										<p
											className="text-[#374A37]"
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
												fontSize:
													"clamp(12px, 2.5vw, 14px)",
												lineHeight: 1.4,
											}}
										>
											{
												relationshipAnalysis
													.romanticCycles["35歲危機"]
													.solution
											}
										</p>
									</div>
								</div>

								{/* 45歲波動 */}
								<div className="grid items-start grid-cols-4 gap-3 sm:gap-4">
									<div className="p-2 bg-white rounded-lg sm:p-3">
										<h5
											className="font-bold text-[#374A37]"
											style={{
												fontFamily:
													"Noto Serif TC, serif",
												fontSize:
													"clamp(12px, 2.5vw, 14px)",
											}}
										>
											{
												relationshipAnalysis
													.romanticCycles["45歲波動"]
													.period
											}
										</h5>
									</div>
									<div className="p-2 bg-white rounded-lg sm:p-3">
										<p
											className="text-[#374A37]"
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
												fontSize:
													"clamp(12px, 2.5vw, 14px)",
											}}
										>
											{
												relationshipAnalysis
													.romanticCycles["45歲波動"]
													.fortune
											}
										</p>
									</div>
									<div className="p-2 bg-white rounded-lg sm:p-3">
										<p
											className="text-[#374A37]"
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
												fontSize:
													"clamp(12px, 2.5vw, 14px)",
												lineHeight: 1.4,
											}}
										>
											{
												relationshipAnalysis
													.romanticCycles["45歲波動"]
													.dangerousYear
											}
										</p>
									</div>
									<div className="p-2 bg-white rounded-lg sm:p-3">
										<p
											className="text-[#374A37]"
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
												fontSize:
													"clamp(12px, 2.5vw, 14px)",
												lineHeight: 1.4,
											}}
										>
											{
												relationshipAnalysis
													.romanticCycles["45歲波動"]
													.solution
											}
										</p>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>

			{/* Marriage Rules Section */}
			<div className="p-3 sm:p-4 lg:p-6">
				<h3
					className="font-bold text-[#C74772] mb-4 sm:mb-6"
					style={{
						fontFamily: "Noto Serif TC, serif",
						fontSize: "clamp(20px, 4vw, 28px)",
					}}
				>
					婚姻穩固法則
				</h3>

				<div className="w-full sm:w-[95%] mx-auto">
					<div className="grid grid-cols-1 gap-3 sm:gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3">
						{/* Best Marriage Year */}
						<div
							className="bg-[#EFEFEF] rounded-lg p-3 sm:p-4"
							style={{
								boxShadow:
									"inset 0 4px 4px rgba(0, 0, 0, 0.25)",
							}}
						>
							<div className="bg-[#C74772] rounded-full px-3 sm:px-4 py-2 mb-3 inline-block">
								<h4
									className="font-bold text-white"
									style={{
										fontFamily: "Noto Serif TC, serif",
										fontSize: "clamp(12px, 2.5vw, 14px)",
									}}
								>
									最佳婚年
								</h4>
							</div>
							<div className="space-y-2 sm:space-y-3">
								<p
									className="font-medium text-[#374A37]"
									style={{
										fontFamily: "Noto Serif TC, serif",
										fontSize: "clamp(13px, 2.8vw, 15px)",
									}}
								>
									{
										relationshipAnalysis.marriageRules
											.bestYear.year
									}
								</p>
								<p
									className="text-[#374A37] leading-relaxed"
									style={{
										fontFamily: "Noto Sans HK, sans-serif",
										fontSize: "clamp(12px, 2.5vw, 14px)",
										lineHeight: 1.5,
									}}
								>
									{
										relationshipAnalysis.marriageRules
											.bestYear.description
									}
								</p>
							</div>
						</div>

						{/* Relationship Taboos */}
						<div
							className="bg-[#EFEFEF] rounded-lg p-3 sm:p-4"
							style={{
								boxShadow:
									"inset 0 4px 4px rgba(0, 0, 0, 0.25)",
							}}
						>
							<div className="bg-[#C74772] rounded-full px-3 sm:px-4 py-2 mb-3 inline-block">
								<h4
									className="font-bold text-white"
									style={{
										fontFamily: "Noto Serif TC, serif",
										fontSize: "clamp(12px, 2.5vw, 14px)",
									}}
								>
									相處禁忌
								</h4>
							</div>
							<div className="space-y-3">
								<div>
									<p
										className="text-sm font-medium text-[#374A37] mb-1"
										style={{
											fontFamily: "Noto Serif TC, serif",
										}}
									>
										{
											relationshipAnalysis.marriageRules
												.taboos.financial.title
										}
									</p>
									<p
										className="text-xs text-[#757575]"
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
										}}
									>
										{
											relationshipAnalysis.marriageRules
												.taboos.financial.description
										}
									</p>
								</div>
								<div>
									<p
										className="text-sm font-medium text-[#374A37] mb-1"
										style={{
											fontFamily: "Noto Serif TC, serif",
										}}
									>
										{
											relationshipAnalysis.marriageRules
												.taboos.frequency.title
										}
									</p>
									<p
										className="text-xs text-[#757575]"
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
										}}
									>
										{
											relationshipAnalysis.marriageRules
												.taboos.frequency.description
										}
									</p>
								</div>
							</div>
						</div>

						{/* Children Fate */}
						<div
							className="bg-[#EFEFEF] rounded-lg p-3 sm:p-4 md:col-span-2 lg:col-span-1"
							style={{
								boxShadow:
									"inset 0 4px 4px rgba(0, 0, 0, 0.25)",
							}}
						>
							<div className="bg-[#C74772] rounded-full px-3 sm:px-4 py-2 mb-3 inline-block">
								<h4
									className="font-bold text-white"
									style={{
										fontFamily: "Noto Serif TC, serif",
										fontSize: "clamp(12px, 2.5vw, 14px)",
									}}
								>
									子女緣
								</h4>
							</div>
							<div className="space-y-2 sm:space-y-3">
								<p
									className="font-medium text-[#374A37]"
									style={{
										fontFamily: "Noto Serif TC, serif",
										fontSize: "clamp(13px, 2.8vw, 15px)",
									}}
								>
									{
										relationshipAnalysis.marriageRules
											.childrenFate.timing
									}
								</p>
								<p
									className="text-[#374A37] leading-relaxed"
									style={{
										fontFamily: "Noto Sans HK, sans-serif",
										fontSize: "clamp(12px, 2.5vw, 14px)",
										lineHeight: 1.5,
									}}
								>
									{
										relationshipAnalysis.marriageRules
											.childrenFate.description
									}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RelationshipFortuneAnalysis;
