"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { generateCareerFortunePrompt } from "@/lib/careerFortunePrompt";
import {
	getCurrentFortunePeriods,
	formatFortunePeriod,
} from "@/lib/fortunePeriodCalculator";

const CareerFortuneAnalysis = ({
	userInfo,
	wuxingData,
	sessionId,
	onDataUpdate,
}) => {
	const [activeTab, setActiveTab] = useState("天賦特質解碼");
	const [careerAnalysis, setCareerAnalysis] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isAIGenerated, setIsAIGenerated] = useState(false);

	// Calculate dynamic fortune periods based on birth date
	const fortunePeriods = userInfo?.birthDateTime
		? getCurrentFortunePeriods(userInfo.birthDateTime, userInfo.gender)
		: null;

	// Generate AI analysis on component mount
	useEffect(() => {
		if (userInfo && wuxingData) {
			generateCareerAnalysis();
		}
	}, [userInfo, wuxingData]);

	const generateCareerAnalysis = async () => {
		try {
			setIsLoading(true);
			const prompt = generateCareerFortunePrompt(userInfo, wuxingData);

			// Call the AI API
			const response = await fetch("/api/career-fortune-analysis", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ prompt, userInfo, wuxingData }),
			});

			const result = await response.json();

			if (result.success) {
				setCareerAnalysis(result.analysis);
				setIsAIGenerated(result.isAIGenerated || false);
				console.log(
					`🎯 Using ${result.isAIGenerated ? "DeepSeek AI" : "Structured Mock"} career data`
				);

				// ✅ NEW: Auto-save career fortune data
				if (onDataUpdate && result.analysis) {
					console.log("💾 Saving career fortune analysis data");
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
					"Career API failed, using mock data:",
					result.error
				);
				const mockAnalysis = generateMockCareerAnalysis(
					userInfo,
					wuxingData
				);
				setCareerAnalysis(mockAnalysis);
				setIsAIGenerated(false);

				// ✅ NEW: Auto-save mock career fortune data
				if (onDataUpdate && mockAnalysis) {
					console.log("💾 Saving mock career fortune analysis data");
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
			console.error("Error generating career analysis:", error);
			// Fallback to mock data on error
			const mockAnalysis = generateMockCareerAnalysis(
				userInfo,
				wuxingData
			);
			setCareerAnalysis(mockAnalysis);
		} finally {
			setIsLoading(false);
		}
	};

	const generateMockCareerAnalysis = (userInfo, wuxingData) => {
		const birthDate = new Date(userInfo.birthDateTime);
		const currentYear = new Date().getFullYear();
		const age = currentYear - birthDate.getFullYear();
		const dayMaster = wuxingData.dayStem || "甲";
		const dayMasterElement = wuxingData.dayStemWuxing || "木";

		return {
			summary: {
				title: `傷官制殺，專業權威之路`,
				description: `年柱${wuxingData.yearStem}${wuxingData.yearBranch}傷官駕殺（制${wuxingData.monthStem}中${wuxingData.monthBranch}金），月柱${wuxingData.monthStem}${wuxingData.monthBranch}七殺透干，構成「傷官制殺」貴格，適合金性權威職業。`,
			},
			talents: {
				天賦特質解碼: {
					title: "天賦特質解碼",
					content: [
						{
							name: `${wuxingData.yearStem}${wuxingData.yearBranch}傷官`,
							description: `${wuxingData.yearStem}${dayMasterElement}代表生發與創新，傷官格賦予顛覆性思維，擅長打破常規，轉化危機為機會，能在混亂中快速識別問題核心，提出獨到解決方案。`,
							attention: `注意事項：傷官過旺易招是非，職場中謹言慎行。可佩戴綠玉吊墜，化傷為財，穩定情緒。`,
						},
					],
				},
				二十年黃金賽道: {
					title: "二十年黃金賽道",
					content: {
						periods: [
							{
								years: "2025 - 2035",
								luck: `${fortunePeriods?.periods?.[0]?.dayun || "丁卯"}運`,
								action: "考取司法/醫師資格",
								bestYear: "2027丁未年最佳",
								warning: "2031辛亥年慎言辭職",
							},
							{
								years: "2035 - 2045",
								luck: `${fortunePeriods?.periods?.[1]?.dayun || "丙寅"}運`,
								action: "組建專業團隊",
								bestYear: "2038戊午年契機",
								warning: "避開東南亞市場（寅巳申三刑）",
							},
							{
								years: "2045 - 2055",
								luck: "乙丑運",
								action: "創立行業標準",
								bestYear: "2046丙寅年",
								warning: "防下屬背叛（丑戌刑）",
							},
						],
					},
				},
				權力巔峰標誌: {
					title: "權力巔峰標誌",
					content: {
						peakYear: `${currentYear + 24}己巳年`,
						peakDescription: "己土殺星透干，掌機構決策權",
						bestPartners: "猴（申）、鼠（子）、龍（辰）三合水局",
						avoidIndustries:
							"遠離地產業（土重剋水）、娛樂業（火旺耗身）",
					},
				},
			},
			strategies: {
				officeLayout: {
					title: "辦公室佈局",
					description: "正西放銅質文昌塔（申金位）",
					details:
						"銅質文昌塔，放置於辦公桌正西或辦公室西牆邊，底座穩固，塔尖朝上，增強文昌星能量，助思考敏捷與職場表現。",
					warning:
						"正西避免放置紅色物品（如紅色文件夾或裝飾），以免火剋金，削弱文昌塔功效；保持該區域整潔，避免雜物堆積。",
				},
				annualStrategy: {
					title: "流年借力",
					year: `${currentYear + 4}年為己酉年`,
					description:
						"天干己土（印星）與地支酉金（七殺）形成殺印相生格局",
					benefit:
						"利於權力提升與職場突破。此年你的壬水日主得印星生助，思維清晰，決策果斷，適合競聘管理職位或承擔更高責任。",
				},
				lifelongTaboo: {
					title: "終身禁忌",
					warning: "勿與上司發生戀情（七殺為忌神）",
					reason: "七殺為忌神，代表壓力與權威，若與上司發展戀情，易因權力不平衡引發職場危機，影響事業前途，甚至導致名譽損失或職位不穩。",
				},
			},
		};
	};

	if (isLoading) {
		return (
			<div className="py-20 text-center">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A3B116] mx-auto mb-4"></div>
				<p className="text-lg text-[#5A5A5A]">
					正在生成事業運勢分析...
				</p>
			</div>
		);
	}

	if (!careerAnalysis) {
		return (
			<div className="py-20 text-center">
				<p className="text-lg text-[#5A5A5A]">
					事業分析生成失敗，請重新整理頁面
				</p>
			</div>
		);
	}

	const tabs = ["天賦特質解碼", "二十年黃金賽道", "權力巔峰標誌"];

	return (
		<div className="w-full">
			{/* Header */}
			<div className="mb-6 sm:mb-8">
				<div className="flex items-center gap-2 mb-3 sm:gap-3 sm:mb-4">
					<h2
						className="font-bold text-[#374A37]"
						style={{
							fontFamily: "Noto Serif TC, serif",
							fontSize: "clamp(24px, 5vw, 36px)",
						}}
					>
						事業運勢分析
					</h2>
				</div>

				{/* Summary Section */}
				<div className="bg-gradient-to-r from-[#3263C4] to-[#567156] rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 inline-block max-w-full">
					<h3
						className="font-bold text-center text-white"
						style={{
							fontFamily: "Noto Serif TC, serif",
							fontSize: "clamp(16px, 3.5vw, 20px)",
						}}
					>
						總結：{careerAnalysis.summary.title}
					</h3>
				</div>

				<p
					className="text-[#374A37] leading-relaxed mb-6 sm:mb-8"
					style={{
						fontFamily: "Noto Sans HK, sans-serif",
						fontSize: "clamp(14px, 3vw, 18px)",
						lineHeight: 1.6,
					}}
				>
					{careerAnalysis.summary.description}
				</p>
			</div>

			{/* Career Development Overview */}
			<div
				className="bg-[#EFEFEF] rounded-xl p-3 sm:p-6 mb-4 sm:mb-6"
				style={{ boxShadow: "inset 0 4px 4px rgba(0, 0, 0, 0.25)" }}
			>
				<h3
					className="font-bold text-[#567156] mb-4 sm:mb-6 text-center"
					style={{
						fontFamily: "Noto Serif TC, serif",
						fontSize: "clamp(20px, 4vw, 28px)",
					}}
				>
					事業發展全景圖
				</h3>

				{/* Tab Navigation */}
				<div className="flex flex-col justify-center gap-3 mb-6 sm:flex-row sm:flex-wrap sm:gap-4 lg:gap-6 sm:mb-8">
					{tabs.map((tab) => (
						<button
							key={tab}
							onClick={() => setActiveTab(tab)}
							className={`px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-200 flex-shrink-0 ${
								activeTab === tab
									? "bg-[#3263C4] text-white"
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
				<div className="mb-6 sm:mb-8">
					{activeTab === "天賦特質解碼" && (
						<div className="bg-gradient-to-r from-[#3263C4] to-[#567156] rounded-xl p-4 sm:p-6 text-white mb-4 sm:mb-6">
							<h4
								className="mb-4 font-bold sm:mb-6"
								style={{
									fontFamily: "Noto Serif TC, serif",
									fontSize: "clamp(18px, 4vw, 24px)",
								}}
							>
								天賦解碼
							</h4>

							<div className="space-y-4 sm:space-y-6">
								{careerAnalysis.talents[
									"天賦特質解碼"
								].content.map((talent, index) => (
									<div
										key={index}
										className="p-3 rounded-lg sm:p-4 bg-white/20"
									>
										<h5
											className="mb-2 font-bold sm:mb-3"
											style={{
												fontFamily:
													"Noto Serif TC, serif",
												fontSize:
													"clamp(16px, 3.5vw, 20px)",
											}}
										>
											{talent.name}
										</h5>
										<p
											className="mb-3 leading-relaxed sm:mb-4"
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
												fontSize:
													"clamp(14px, 3vw, 16px)",
												lineHeight: 1.5,
											}}
										>
											{talent.description}
										</p>
										<div className="p-2 rounded-lg sm:p-3 bg-white/10">
											<p
												style={{
													fontFamily:
														"Noto Sans HK, sans-serif",
													fontSize:
														"clamp(12px, 2.5vw, 14px)",
													lineHeight: 1.4,
												}}
											>
												{talent.attention}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					)}

					{activeTab === "二十年黃金賽道" && (
						<div className="bg-gradient-to-r from-[#3263C4] to-[#567156] rounded-xl p-4 sm:p-6 text-white mb-4 sm:mb-6">
							<h4
								className="mb-4 font-bold sm:mb-6"
								style={{
									fontFamily: "Noto Serif TC, serif",
									fontSize: "clamp(18px, 4vw, 24px)",
								}}
							>
								黃金賽道
							</h4>

							{/* Mobile Card Layout */}
							<div className="block space-y-3 sm:hidden">
								{careerAnalysis.talents[
									"二十年黃金賽道"
								].content.periods.map((period, index) => (
									<div
										key={index}
										className="p-3 rounded-lg bg-white/20"
									>
										<div className="mb-2">
											<span
												className="font-bold"
												style={{
													fontFamily:
														"Noto Serif TC, serif",
													fontSize:
														"clamp(14px, 3vw, 16px)",
												}}
											>
												{period.years}
											</span>
											<span
												className="ml-2 text-white/80"
												style={{
													fontFamily:
														"Noto Sans HK, sans-serif",
													fontSize:
														"clamp(12px, 2.5vw, 14px)",
												}}
											>
												{period.luck}
											</span>
										</div>
										<div
											className="mb-1"
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
												fontSize:
													"clamp(12px, 2.5vw, 14px)",
												lineHeight: 1.4,
											}}
										>
											<strong>動作：</strong>
											{period.action}（{period.bestYear}）
										</div>
										<div
											className="text-white/80"
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
												fontSize:
													"clamp(12px, 2.5vw, 14px)",
												lineHeight: 1.4,
											}}
										>
											<strong>注意：</strong>
											{period.warning}
										</div>
									</div>
								))}
							</div>

							{/* Desktop Table Layout */}
							<div className="hidden overflow-x-auto sm:block">
								<table className="w-full rounded-lg bg-white/10">
									<thead>
										<tr className="border-b border-white/20">
											<th
												className="p-3 text-left lg:p-4"
												style={{
													fontFamily:
														"Noto Serif TC, serif",
													fontSize:
														"clamp(14px, 2.5vw, 16px)",
												}}
											>
												時期
											</th>
											<th
												className="p-3 text-left lg:p-4"
												style={{
													fontFamily:
														"Noto Serif TC, serif",
													fontSize:
														"clamp(14px, 2.5vw, 16px)",
												}}
											>
												大運
											</th>
											<th
												className="p-3 text-left lg:p-4"
												style={{
													fontFamily:
														"Noto Serif TC, serif",
													fontSize:
														"clamp(14px, 2.5vw, 16px)",
												}}
											>
												關鍵動作
											</th>
											<th
												className="p-3 text-left lg:p-4"
												style={{
													fontFamily:
														"Noto Serif TC, serif",
													fontSize:
														"clamp(14px, 2.5vw, 16px)",
												}}
											>
												風險預警
											</th>
										</tr>
									</thead>
									<tbody>
										{careerAnalysis.talents[
											"二十年黃金賽道"
										].content.periods.map(
											(period, index) => (
												<tr
													key={index}
													className="border-b border-white/10"
												>
													<td
														className="p-3 lg:p-4"
														style={{
															fontFamily:
																"Noto Sans HK, sans-serif",
															fontSize:
																"clamp(12px, 2.5vw, 14px)",
														}}
													>
														{period.years}
													</td>
													<td
														className="p-3 lg:p-4"
														style={{
															fontFamily:
																"Noto Sans HK, sans-serif",
															fontSize:
																"clamp(12px, 2.5vw, 14px)",
														}}
													>
														{period.luck}
													</td>
													<td
														className="p-3 lg:p-4"
														style={{
															fontFamily:
																"Noto Sans HK, sans-serif",
															fontSize:
																"clamp(12px, 2.5vw, 14px)",
														}}
													>
														{period.action}（
														{period.bestYear}）
													</td>
													<td
														className="p-3 lg:p-4"
														style={{
															fontFamily:
																"Noto Sans HK, sans-serif",
															fontSize:
																"clamp(12px, 2.5vw, 14px)",
														}}
													>
														{period.warning}
													</td>
												</tr>
											)
										)}
									</tbody>
								</table>
							</div>
						</div>
					)}

					{activeTab === "權力巔峰標誌" && (
						<div className="bg-gradient-to-r from-[#3263C4] to-[#567156] rounded-xl p-4 sm:p-6 text-white mb-4 sm:mb-6">
							<h4
								className="mb-4 font-bold sm:mb-6"
								style={{
									fontFamily: "Noto Serif TC, serif",
									fontSize: "clamp(18px, 4vw, 24px)",
								}}
							>
								巔峰時機
							</h4>

							<div className="grid grid-cols-1 gap-3 sm:gap-6 md:grid-cols-2">
								<div className="p-3 rounded-lg sm:p-4 bg-white/20">
									<h5
										className="mb-2 font-bold"
										style={{
											fontFamily: "Noto Serif TC, serif",
											fontSize:
												"clamp(14px, 3.5vw, 18px)",
										}}
									>
										權力巔峰
									</h5>
									<p
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
											fontSize:
												"clamp(12px, 2.5vw, 14px)",
											lineHeight: 1.5,
										}}
									>
										{
											careerAnalysis.talents[
												"權力巔峰標誌"
											].content.peakYear
										}
										：
										{
											careerAnalysis.talents[
												"權力巔峰標誌"
											].content.peakDescription
										}
									</p>
								</div>
								<div className="p-3 rounded-lg sm:p-4 bg-white/20">
									<h5
										className="mb-2 font-bold"
										style={{
											fontFamily: "Noto Serif TC, serif",
											fontSize:
												"clamp(14px, 3.5vw, 18px)",
										}}
									>
										最佳合作
									</h5>
									<p
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
											fontSize:
												"clamp(12px, 2.5vw, 14px)",
											lineHeight: 1.5,
										}}
									>
										{
											careerAnalysis.talents[
												"權力巔峰標誌"
											].content.bestPartners
										}
									</p>
								</div>
								<div className="p-3 rounded-lg sm:p-4 bg-white/20 md:col-span-2">
									<h5
										className="mb-2 font-bold"
										style={{
											fontFamily: "Noto Serif TC, serif",
											fontSize:
												"clamp(14px, 3.5vw, 18px)",
										}}
									>
										行業紅線
									</h5>
									<p
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
											fontSize:
												"clamp(12px, 2.5vw, 14px)",
											lineHeight: 1.5,
										}}
									>
										{
											careerAnalysis.talents[
												"權力巔峰標誌"
											].content.avoidIndustries
										}
									</p>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>

			{/* Career Strategies Section */}
			<div className="p-4 sm:p-6">
				<h3
					className="font-bold text-[#567156] mb-4 sm:mb-6"
					style={{
						fontFamily: "Noto Serif TC, serif",
						fontSize: "clamp(20px, 5vw, 30px)",
					}}
				>
					晉升秘訣
				</h3>

				<div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
					<div
						className="bg-[#EFEFEF] rounded-lg p-3 sm:p-4"
						style={{
							boxShadow: "inset 0 4px 4px rgba(0, 0, 0, 0.25)",
						}}
					>
						<div className="bg-[#3263C4] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-2 sm:mb-3 inline-block">
							<h4
								className="font-bold text-white"
								style={{
									fontFamily: "Noto Serif TC, serif",
									fontSize: "clamp(12px, 2.5vw, 14px)",
								}}
							>
								{careerAnalysis.strategies.officeLayout.title}
							</h4>
						</div>
						<p
							className="text-[#374A37] mb-2 sm:mb-3"
							style={{
								fontFamily: "Noto Sans HK, sans-serif",
								fontSize: "clamp(12px, 2.5vw, 14px)",
								lineHeight: 1.5,
							}}
						>
							{careerAnalysis.strategies.officeLayout.description}
						</p>
						<p
							className="text-[#757575]"
							style={{
								fontFamily: "Noto Sans HK, sans-serif",
								fontSize: "clamp(11px, 2vw, 12px)",
								lineHeight: 1.4,
							}}
						>
							{careerAnalysis.strategies.officeLayout.details}
						</p>
					</div>

					<div
						className="bg-[#EFEFEF] rounded-lg p-3 sm:p-4"
						style={{
							boxShadow: "inset 0 4px 4px rgba(0, 0, 0, 0.25)",
						}}
					>
						<div className="bg-[#3263C4] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-2 sm:mb-3 inline-block">
							<h4
								className="font-bold text-white"
								style={{
									fontFamily: "Noto Serif TC, serif",
									fontSize: "clamp(12px, 2.5vw, 14px)",
								}}
							>
								{careerAnalysis.strategies.annualStrategy.title}
							</h4>
						</div>
						<p
							className="text-[#374A37] mb-2 sm:mb-3"
							style={{
								fontFamily: "Noto Sans HK, sans-serif",
								fontSize: "clamp(12px, 2.5vw, 14px)",
								lineHeight: 1.5,
							}}
						>
							{careerAnalysis.strategies.annualStrategy.year}：
							{
								careerAnalysis.strategies.annualStrategy
									.description
							}
						</p>
						<p
							className="text-[#757575]"
							style={{
								fontFamily: "Noto Sans HK, sans-serif",
								fontSize: "clamp(11px, 2vw, 12px)",
								lineHeight: 1.4,
							}}
						>
							{careerAnalysis.strategies.annualStrategy.benefit}
						</p>
					</div>

					<div
						className="bg-[#EFEFEF] rounded-lg p-3 sm:p-4 md:col-span-2 lg:col-span-1"
						style={{
							boxShadow: "inset 0 4px 4px rgba(0, 0, 0, 0.25)",
						}}
					>
						<div className="bg-[#3263C4] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-2 sm:mb-3 inline-block">
							<h4
								className="font-bold text-white"
								style={{
									fontFamily: "Noto Serif TC, serif",
									fontSize: "clamp(12px, 2.5vw, 14px)",
								}}
							>
								{careerAnalysis.strategies.lifelongTaboo.title}
							</h4>
						</div>
						<p
							className="text-[#374A37] mb-2 sm:mb-3"
							style={{
								fontFamily: "Noto Sans HK, sans-serif",
								fontSize: "clamp(12px, 2.5vw, 14px)",
								lineHeight: 1.5,
							}}
						>
							{careerAnalysis.strategies.lifelongTaboo.warning}
						</p>
						<p
							className="text-[#757575]"
							style={{
								fontFamily: "Noto Sans HK, sans-serif",
								fontSize: "clamp(11px, 2vw, 12px)",
								lineHeight: 1.4,
							}}
						>
							{careerAnalysis.strategies.lifelongTaboo.reason}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CareerFortuneAnalysis;
