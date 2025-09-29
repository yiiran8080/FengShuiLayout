"use client";

import React, { useState, useEffect } from "react";
import { generateWealthFortunePrompt } from "@/lib/wealthFortunePrompt";
import {
	getCurrentFortunePeriods,
	formatFortunePeriod,
} from "@/lib/fortunePeriodCalculator";

const WealthFortuneAnalysis = ({ userInfo, wuxingData }) => {
	const [activeTab, setActiveTab] = useState("奠基期");
	const [wealthAnalysis, setWealthAnalysis] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isAIGenerated, setIsAIGenerated] = useState(false);

	// Calculate dynamic fortune periods based on birth date
	const fortunePeriods = userInfo?.birthDateTime
		? getCurrentFortunePeriods(userInfo.birthDateTime, userInfo.gender)
		: null;

	// Generate AI analysis on component mount
	useEffect(() => {
		if (userInfo && wuxingData) {
			generateWealthAnalysis();
		}
	}, [userInfo, wuxingData]);

	const generateWealthAnalysis = async () => {
		try {
			setIsLoading(true);
			const prompt = generateWealthFortunePrompt(userInfo, wuxingData);

			// Call the AI API
			const response = await fetch("/api/wealth-fortune-analysis", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ prompt, userInfo, wuxingData }),
			});

			const result = await response.json();

			if (result.success) {
				setWealthAnalysis(result.analysis);
				setIsAIGenerated(result.isAIGenerated || false);
				console.log(
					`🎯 Using ${result.isAIGenerated ? "DeepSeek AI" : "Structured Mock"} wealth data`
				);
			} else {
				// Fallback to mock data if API fails
				console.warn(
					"Wealth API failed, using mock data:",
					result.error
				);
				const mockAnalysis = generateMockWealthAnalysis(
					userInfo,
					wuxingData
				);
				setWealthAnalysis(mockAnalysis);
				setIsAIGenerated(false);
			}
		} catch (error) {
			console.error("Error generating wealth analysis:", error);
			// Fallback to mock data on error
			const mockAnalysis = generateMockWealthAnalysis(
				userInfo,
				wuxingData
			);
			setWealthAnalysis(mockAnalysis);
		} finally {
			setIsLoading(false);
		}
	};

	const generateMockWealthAnalysis = (userInfo, wuxingData) => {
		const birthDate = new Date(userInfo.birthDateTime);
		const currentYear = new Date().getFullYear();
		const age = currentYear - birthDate.getFullYear();
		const dayMaster = wuxingData.dayStem || "壬";
		const dayMasterElement = wuxingData.dayStemWuxing || "水";

		// Get dynamic fortune periods
		const periods = fortunePeriods?.periods || [];
		const foundationPeriod = periods[0] || {
			dayun: "丙寅",
			yearRange: "2025-2034",
			ageRange: "25-34歲",
		};
		const explosivePeriod = periods[1] || {
			dayun: "丁卯",
			yearRange: "2035-2044",
			ageRange: "35-44歲",
		};
		const conservativePeriod = periods[2] || {
			dayun: "壬戌",
			yearRange: "2045-2054",
			ageRange: "45-54歲",
		};

		return {
			summary: {
				title: `劫財奪財，置業守成為上`,
				description: `月干${wuxingData.monthStem}土七殺透出，時柱${dayMaster}${wuxingData.dayBranch}劫財坐旺，全局無明財星，財富需通過制殺獲取（金製木→木疏土→土生金循環）。`,
			},
			threeStages: {
				奠基期: {
					title: "奠基期",
					ageRange: foundationPeriod.ageRange,
					fortune: `${foundationPeriod.dayun}運`,
					content: {
						phase1: {
							name: formatFortunePeriod(foundationPeriod),
							description: `${foundationPeriod.dayun[0]}火偏財虛透，${foundationPeriod.dayun[1]}木食神生財，主勞力得財`,
							keyYear: `${foundationPeriod.startYear + 3}年：利考金融證照（證券/基金從業資格）`,
							trapYear: `致命陷阱：${foundationPeriod.startYear + 6}年慎防P2P理財`,
						},
						phase2: {
							name: `次階段（${foundationPeriod.startYear + 5} - ${foundationPeriod.endYear}）`,
							description: `${foundationPeriod.dayun[0]}火正財合身，${foundationPeriod.dayun[1]}木傷官生財，收入躍升但開支激增`,
							warning: `${foundationPeriod.endYear - 2}年：合作投資需謹慎`,
						},
					},
				},
				爆發期: {
					title: "爆發期",
					ageRange: explosivePeriod.ageRange,
					fortune: `${explosivePeriod.dayun}運`,
					content: {
						description: `${explosivePeriod.dayun[0]}木傷官制殺，${explosivePeriod.dayun[1]}水祿神助身`,
						keyYear: `${explosivePeriod.startYear + 5}年：不動產增值收益可觀`,
						industries: `核心領域：${explosivePeriod.dayun[1] === "子" ? "水處理工程" : "相關行業"}、法律服務`,
						peakYear: `財富峰值：${explosivePeriod.endYear - 2}年，利資源貿易`,
					},
				},
				守成期: {
					title: "守成期",
					ageRange: conservativePeriod.ageRange,
					fortune: `${conservativePeriod.dayun}運`,
					content: {
						description: `${conservativePeriod.dayun[1]}土制劫財開財庫，財運穩定`,
						keyYear: `${conservativePeriod.startYear + 5}年：金水相生，可建立家族信託基金`,
						avoidIndustries: "忌諱產業：餐飲（火）、林業（木剋土）",
					},
				},
			},
			wealthRules: {
				assetAllocation: {
					title: "資產配比",
					realEstate: "70%不動產：投資房地產，確保穩健回報",
					preciousMetals:
						"20%貴金屬：購買黃金、銀條或相關ETF，作為抗通脹保值資產",
					cash: "10%流動現金：保留現金或貨幣基金，應對緊急需求或短期投資機會",
				},
				partnerships: {
					title: "合作禁忌",
					zodiacA: {
						animal: "生肖馬（午沖子）",
						description:
							"屬馬者五行屬火，與子鼠相沖，合作易生衝突，導致決策分歧或財務損失。",
					},
					zodiacB: {
						animal: "生肖兔（卯刑子）",
						description:
							"屬兔者五行屬木，與子鼠相刑，易引發信任危機或隱性競爭，影響財運。",
					},
				},
				wealthDirection: {
					title: "催財方位",
					location: "臥室西北角（戌位）",
					description:
						"西北角屬乾卦，主財運與貴人運。擺放白水晶簇，可聚財旺氣，增強正財運勢。",
					warning:
						"注意事項：西北角避免堆放雜物，保持通風明亮；忌擺放尖銳物品或電子產品，以免破壞財氣場。",
				},
			},
		};
	};

	if (isLoading) {
		return (
			<div className="py-20 text-center">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D09900] mx-auto mb-4"></div>
				<p className="text-lg text-[#5A5A5A]">
					正在生成財運運勢分析...
				</p>
			</div>
		);
	}

	if (!wealthAnalysis) {
		return (
			<div className="py-20 text-center">
				<p className="text-lg text-[#5A5A5A]">
					財運分析生成失敗，請重新整理頁面
				</p>
			</div>
		);
	}

	const tabs = ["奠基期", "爆發期", "守成期"];

	return (
		<div className="w-full">
			{/* Header */}
			<div className="mb-8">
				<div className="flex items-center gap-3 mb-4">
					<h2
						className="text-4xl font-bold text-[#374A37]"
						style={{ fontFamily: "Noto Serif TC, serif" }}
					>
						財運運勢分析
					</h2>
				</div>

				{/* Summary Section */}
				<div className="bg-gradient-to-r from-[#D09900] to-[#BD4800] rounded-full px-6 py-3 mb-6 inline-block">
					<h3
						className="text-xl font-bold text-white"
						style={{ fontFamily: "Noto Serif TC, serif" }}
					>
						總結：{wealthAnalysis.summary.title}
					</h3>
				</div>

				<p
					className="text-lg text-[#374A37] leading-relaxed mb-8"
					style={{ fontFamily: "Noto Sans HK, sans-serif" }}
				>
					{wealthAnalysis.summary.description}
				</p>
			</div>

			{/* Three Stages Wealth Analysis */}
			<div
				className="bg-[#EFEFEF] rounded-xl p-6 mb-6"
				style={{ boxShadow: "inset 0 4px 4px rgba(0, 0, 0, 0.25)" }}
			>
				<h3
					className="text-3xl font-bold text-[#D09900] mb-6"
					style={{ fontFamily: "Noto Serif TC, serif" }}
				>
					三階段財運密碼
				</h3>

				{/* Tab Navigation */}
				<div className="flex flex-wrap justify-center gap-6 mb-8">
					{tabs.map((tab) => (
						<button
							key={tab}
							onClick={() => setActiveTab(tab)}
							className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 ${
								activeTab === tab
									? "bg-[#D09900] text-white"
									: "bg-white text-[#757575] hover:bg-gray-50"
							}`}
							style={{
								fontFamily: "Noto Serif TC, serif",
								boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
							}}
						>
							{tab}
						</button>
					))}
				</div>

				{/* Age Range Banner */}
				<div className="bg-gradient-to-r from-[#D09900] to-[#BD4800] rounded-full px-6 py-2 mb-6 text-center">
					<h4
						className="text-lg font-bold text-white"
						style={{ fontFamily: "Noto Serif TC, serif" }}
					>
						{wealthAnalysis.threeStages[activeTab].ageRange}·
						{wealthAnalysis.threeStages[activeTab].fortune}
					</h4>
				</div>

				{/* Tab Content */}
				<div className="mb-8">
					{activeTab === "奠基期" && (
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
							<div className="p-6 bg-white rounded-lg shadow-md">
								<div className="bg-gradient-to-r from-[#D09900] to-[#BD4800] rounded-full px-6 py-3 mb-4 inline-block">
									<h5
										className="text-base font-bold text-white"
										style={{
											fontFamily: "Noto Serif TC, serif",
										}}
									>
										{
											wealthAnalysis.threeStages["奠基期"]
												.fortune
										}
									</h5>
								</div>
								<div className="space-y-4">
									<p
										className="text-sm text-[#374A37]"
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
										}}
									>
										{
											wealthAnalysis.threeStages["奠基期"]
												.content.phase1.description
										}
									</p>
									<div className="bg-[#F5F5F5] rounded-lg p-3">
										<p
											className="text-sm font-medium text-[#374A37]"
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
											}}
										>
											{
												wealthAnalysis.threeStages[
													"奠基期"
												].content.phase1.keyYear
											}
										</p>
									</div>
									<div className="p-3 rounded-lg bg-red-50">
										<p
											className="text-sm text-red-700"
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
											}}
										>
											{
												wealthAnalysis.threeStages[
													"奠基期"
												].content.phase1.trapYear
											}
										</p>
									</div>
								</div>
							</div>

							<div className="p-6 bg-white rounded-lg shadow-md">
								<div className="bg-[#D09900] rounded-full px-6 py-3 mb-4 inline-block">
									<h5
										className="text-base font-bold text-white"
										style={{
											fontFamily: "Noto Serif TC, serif",
										}}
									>
										{
											wealthAnalysis.threeStages[
												"奠基期"
											].content.phase2.name.split("（")[0]
										}
									</h5>
								</div>
								<div className="space-y-4">
									<p
										className="text-sm text-[#374A37]"
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
										}}
									>
										{
											wealthAnalysis.threeStages["奠基期"]
												.content.phase2.description
										}
									</p>
									<div className="p-3 rounded-lg bg-red-50">
										<p
											className="text-sm text-red-700"
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
											}}
										>
											{
												wealthAnalysis.threeStages[
													"奠基期"
												].content.phase2.warning
											}
										</p>
									</div>
								</div>
							</div>
						</div>
					)}

					{activeTab === "爆發期" && (
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
							<div className="p-6 bg-white rounded-lg shadow-md">
								<div className="bg-[#D09900] rounded-full px-6 py-3 mb-4 inline-block">
									<h5
										className="text-base font-bold text-white"
										style={{
											fontFamily: "Noto Serif TC, serif",
										}}
									>
										甲木傷官
									</h5>
								</div>
								<div className="space-y-4">
									<p
										className="text-sm text-[#374A37]"
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
										}}
									>
										{
											wealthAnalysis.threeStages["爆發期"]
												.content.description
										}
									</p>
									<div className="bg-[#F5F5F5] rounded-lg p-3">
										<p
											className="text-sm font-medium text-[#374A37]"
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
											}}
										>
											{
												wealthAnalysis.threeStages[
													"爆發期"
												].content.keyYear
											}
										</p>
									</div>
								</div>
							</div>

							<div className="p-6 bg-white rounded-lg shadow-md">
								<div className="bg-[#D09900] rounded-full px-6 py-3 mb-4 inline-block">
									<h5
										className="text-base font-bold text-white"
										style={{
											fontFamily: "Noto Serif TC, serif",
										}}
									>
										財富峰值
									</h5>
								</div>
								<div className="space-y-4">
									<p
										className="text-sm text-[#374A37]"
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
										}}
									>
										{
											wealthAnalysis.threeStages["爆發期"]
												.content.industries
										}
									</p>
									<div className="bg-[#F5F5F5] rounded-lg p-3">
										<p
											className="text-sm font-medium text-[#374A37]"
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
											}}
										>
											{
												wealthAnalysis.threeStages[
													"爆發期"
												].content.peakYear
											}
										</p>
									</div>
								</div>
							</div>
						</div>
					)}

					{activeTab === "守成期" && (
						<div className="p-6 bg-white rounded-lg shadow-md">
							<div className="bg-[#D09900] rounded-full px-6 py-3 mb-4 inline-block">
								<h5
									className="text-base font-bold text-white"
									style={{
										fontFamily: "Noto Serif TC, serif",
									}}
								>
									{
										wealthAnalysis.threeStages["守成期"]
											.ageRange
									}
									·
									{
										wealthAnalysis.threeStages["守成期"]
											.fortune
									}
								</h5>
							</div>
							<div className="space-y-4">
								<p
									className="text-sm text-[#374A37]"
									style={{
										fontFamily: "Noto Sans HK, sans-serif",
									}}
								>
									{
										wealthAnalysis.threeStages["守成期"]
											.content.description
									}
								</p>
								<div className="bg-[#F5F5F5] rounded-lg p-3">
									<p
										className="text-sm font-medium text-[#374A37]"
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
										}}
									>
										{
											wealthAnalysis.threeStages["守成期"]
												.content.keyYear
										}
									</p>
								</div>
								<div className="p-3 rounded-lg bg-red-50">
									<p
										className="text-sm text-red-700"
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
										}}
									>
										{
											wealthAnalysis.threeStages["守成期"]
												.content.avoidIndustries
										}
									</p>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>

			{/* Wealth Rules Section */}
			<div className="p-6">
				<h3
					className="text-3xl font-bold text-[#D09900] mb-6"
					style={{ fontFamily: "Noto Serif TC, serif" }}
				>
					財富法則
				</h3>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
					{/* Asset Allocation */}
					<div
						className="bg-[#EFEFEF] rounded-lg p-4"
						style={{
							boxShadow: "inset 0 4px 4px rgba(0, 0, 0, 0.25)",
						}}
					>
						<div className="bg-[#D09900] rounded-full px-6 py-3 mb-3 inline-block">
							<h4
								className="text-base font-bold text-white"
								style={{ fontFamily: "Noto Serif TC, serif" }}
							>
								{
									wealthAnalysis.wealthRules.assetAllocation
										.title
								}
							</h4>
						</div>
						<div className="space-y-3">
							<p
								className="text-sm text-[#374A37]"
								style={{
									fontFamily: "Noto Sans HK, sans-serif",
								}}
							>
								{
									wealthAnalysis.wealthRules.assetAllocation
										.realEstate
								}
							</p>
							<p
								className="text-sm text-[#374A37]"
								style={{
									fontFamily: "Noto Sans HK, sans-serif",
								}}
							>
								{
									wealthAnalysis.wealthRules.assetAllocation
										.preciousMetals
								}
							</p>
							<p
								className="text-sm text-[#374A37]"
								style={{
									fontFamily: "Noto Sans HK, sans-serif",
								}}
							>
								{
									wealthAnalysis.wealthRules.assetAllocation
										.cash
								}
							</p>
						</div>
					</div>

					{/* Partnership Taboos */}
					<div
						className="bg-[#EFEFEF] rounded-lg p-4"
						style={{
							boxShadow: "inset 0 4px 4px rgba(0, 0, 0, 0.25)",
						}}
					>
						<div className="bg-[#D09900] rounded-full px-6 py-3 mb-3 inline-block">
							<h4
								className="text-base font-bold text-white"
								style={{ fontFamily: "Noto Serif TC, serif" }}
							>
								{wealthAnalysis.wealthRules.partnerships.title}
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
										wealthAnalysis.wealthRules.partnerships
											.zodiacA.animal
									}
								</p>
								<p
									className="text-xs text-[#757575]"
									style={{
										fontFamily: "Noto Sans HK, sans-serif",
									}}
								>
									{
										wealthAnalysis.wealthRules.partnerships
											.zodiacA.description
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
										wealthAnalysis.wealthRules.partnerships
											.zodiacB.animal
									}
								</p>
								<p
									className="text-xs text-[#757575]"
									style={{
										fontFamily: "Noto Sans HK, sans-serif",
									}}
								>
									{
										wealthAnalysis.wealthRules.partnerships
											.zodiacB.description
									}
								</p>
							</div>
						</div>
					</div>

					{/* Wealth Direction */}
					<div
						className="bg-[#EFEFEF] rounded-lg p-4"
						style={{
							boxShadow: "inset 0 4px 4px rgba(0, 0, 0, 0.25)",
						}}
					>
						<div className="bg-[#D09900] rounded-full px-6 py-3 mb-3 inline-block">
							<h4
								className="text-base font-bold text-white"
								style={{ fontFamily: "Noto Serif TC, serif" }}
							>
								{
									wealthAnalysis.wealthRules.wealthDirection
										.title
								}
							</h4>
						</div>
						<div className="space-y-3">
							<p
								className="text-sm font-medium text-[#374A37]"
								style={{ fontFamily: "Noto Serif TC, serif" }}
							>
								{
									wealthAnalysis.wealthRules.wealthDirection
										.location
								}
							</p>
							<p
								className="text-sm text-[#374A37]"
								style={{
									fontFamily: "Noto Sans HK, sans-serif",
								}}
							>
								{
									wealthAnalysis.wealthRules.wealthDirection
										.description
								}
							</p>
							<p
								className="text-xs text-[#757575]"
								style={{
									fontFamily: "Noto Sans HK, sans-serif",
								}}
							>
								{
									wealthAnalysis.wealthRules.wealthDirection
										.warning
								}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WealthFortuneAnalysis;
