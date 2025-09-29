"use client";

import React, { useState, useEffect } from "react";
import { generateHealthFortunePrompt } from "@/lib/healthFortunePrompt";
import {
	getCurrentFortunePeriods,
	formatFortunePeriod,
} from "@/lib/fortunePeriodCalculator";

const HealthFortuneAnalysis = ({
	userInfo,
	wuxingData,
	sessionId,
	onDataUpdate,
}) => {
	const [activeTab, setActiveTab] = useState("腎骨系統核心");
	const [healthAnalysis, setHealthAnalysis] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isAIGenerated, setIsAIGenerated] = useState(false);

	// Calculate dynamic fortune periods based on birth date
	const fortunePeriods = userInfo?.birthDateTime
		? getCurrentFortunePeriods(userInfo.birthDateTime, userInfo.gender)
		: null;

	// Generate AI analysis on component mount
	useEffect(() => {
		if (userInfo && wuxingData) {
			generateHealthAnalysis();
		}
	}, [userInfo, wuxingData]);

	const generateHealthAnalysis = async () => {
		try {
			setIsLoading(true);
			const prompt = generateHealthFortunePrompt(userInfo, wuxingData);

			// Call the AI API
			const response = await fetch("/api/health-fortune-analysis", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ prompt, userInfo, wuxingData }),
			});

			const result = await response.json();

			if (result.success) {
				setHealthAnalysis(result.analysis);
				setIsAIGenerated(result.isAIGenerated || false);
				console.log(
					`🎯 Using ${result.isAIGenerated ? "DeepSeek AI" : "Structured Mock"} data`
				);

				// ✅ NEW: Auto-save health fortune data
				if (onDataUpdate && result.analysis) {
					console.log("💾 Saving health fortune analysis data");
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
				console.warn("API failed, using mock data:", result.error);
				const mockAnalysis = generateMockHealthAnalysis(
					userInfo,
					wuxingData
				);
				setHealthAnalysis(mockAnalysis);
				setIsAIGenerated(false);

				// ✅ NEW: Auto-save mock health fortune data
				if (onDataUpdate && mockAnalysis) {
					console.log("💾 Saving mock health fortune analysis data");
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
			console.error("Error generating health analysis:", error);
			// Fallback to mock data on error
			const mockAnalysis = generateMockHealthAnalysis(
				userInfo,
				wuxingData
			);
			setHealthAnalysis(mockAnalysis);

			// ✅ NEW: Auto-save error fallback health fortune data
			if (onDataUpdate && mockAnalysis) {
				console.log(
					"💾 Saving error fallback health fortune analysis data"
				);
				onDataUpdate({
					analysis: mockAnalysis,
					isAIGenerated: false,
					generatedAt: new Date().toISOString(),
					sessionId,
					userInfo,
					wuxingData,
					isErrorFallback: true,
				});
			}
		} finally {
			setIsLoading(false);
		}
	};

	const generateMockHealthAnalysis = (userInfo, wuxingData) => {
		const birthDate = new Date(userInfo.birthDateTime);
		const currentYear = new Date().getFullYear();
		const age = currentYear - birthDate.getFullYear();
		const dayMaster = wuxingData.dayStem || "癸";
		const dayMasterElement = wuxingData.dayStemWuxing || "水";

		return {
			summary: {
				title: `${dayMasterElement}${dayMaster}交戰，養腎固本為要`,
				description: `日主${dayMaster}${dayMasterElement}坐${wuxingData.dayBranch || "丑"}土七殺，生於${wuxingData.monthBranch || "巳"}月火旺之時，時柱${wuxingData.hourStem || "壬"}${wuxingData.hourBranch || "子"}劫財助身。月支${wuxingData.monthBranch || "巳"}火生旺己土七殺，形成「火生土→土剋水」的攻身格局，健康需重點調和${dayMasterElement}土矛盾。`,
			},
			systems: {
				腎骨系統核心: {
					title: "腎骨系統核心",
					content: {
						description: `${dayMaster}${dayMasterElement}通腎，日支${wuxingData.dayBranch || "丑"}土為濕土晦火存水，雖有調和作用，但月柱己巳火土熾烈。`,
						advantages:
							"時柱壬子強根護持，骨骼密度佳，傷口癒合能力強",
						risks: [
							{
								period: `青年期 (${fortunePeriods?.periods?.[0]?.ageRange || "20-35歲"})`,
								description:
									"火土運旺易耗腎陰，可能出現經期不準、腰肌勞損",
							},
							{
								period: `${fortunePeriods?.periods?.[2]?.yearRange || "2040年後"}${fortunePeriods?.periods?.[2]?.dayun || "丙寅"}運`,
								description: `${fortunePeriods?.periods?.[2]?.dayun?.[1] || "寅"}巳申三刑，需防關節退行性病變`,
							},
						],
						keyYears:
							"2026丙午（火極）、2038戊午（三合火局）避免高溫曝曬",
					},
				},
				代謝循環特質: {
					title: "代謝循環特質",
					content: {
						description: "巳火當令透己土，火土旺而水受制：",
						bloodCharacteristics:
							"血粘稠度易偏高（火煉金→金生水不足），2031辛亥年後需定期檢測血脂",
						digestiveFeatures:
							"丑土為濕土，常現脾胃濕熱（食慾好但消化滯緩），忌冰飲加重濕氣",
						skinConcerns:
							"己土七殺主皮膚屏障弱，換季易發蕁麻疹（2024甲辰年辰丑破尤甚）",
					},
				},
				神經免疫平衡: {
					title: "神經免疫平衡",
					content: {
						description: "年柱甲木傷官制殺，時柱劫財幫身：",
						advantages: "應激反應敏捷，疫苗抗體生成力強",
						weaknesses:
							"子水為「夜神」，熬夜易致植物神經紊亂（頭皮出油、入睡困難）",
						periodicPattern:
							"每逢鼠年（子）、馬年（午）睡眠質量波動明顯",
					},
				},
			},
			careRegimen: {
				diet: "晨起飲淡鹽水（50ml，鹽1g）固腎，補癸水鹹味需求；午後小米粥健脾養胃；秋季每日食用銀耳蓮子湯，滋陰潤肺，養心安神。",
				acupoints:
					"每晚5點到7點，按摩腳底湧泉穴（每腳3分鐘）和三陰交（每邊5分鐘），幫忙調氣血、穩陰陽。",
				exercise:
					"游泳最合適（一周2-3次，每次30-45分鐘），補水又降火，增強體力；中午11點到1點別劇烈運動，免得傷心氣。",
				lifeStageReminder: `${fortunePeriods?.periods?.[1]?.startYear || "2029"}年開始走${fortunePeriods?.periods?.[1]?.dayun || "丙寅"}運，春天（3-5月）要做肝膽排毒（像喝蒲公英茶或找專業調理），幫肝臟順氣，順應節氣變化。`,
			},
		};
	};

	if (isLoading) {
		return (
			<div className="py-20 text-center">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A3B116] mx-auto mb-4"></div>
				<p className="text-lg text-[#5A5A5A]">
					正在生成健康運勢分析...
				</p>
			</div>
		);
	}

	if (!healthAnalysis) {
		return (
			<div className="py-20 text-center">
				<p className="text-lg text-[#5A5A5A]">
					健康分析生成失敗，請重新整理頁面
				</p>
			</div>
		);
	}

	const tabs = ["腎骨系統核心", "代謝循環特質", "神經免疫平衡"];

	// Dynamic tab content renderer
	const renderTabContent = (tabName, systemData) => {
		const getTabTitle = (tab) => {
			switch (tab) {
				case "腎骨系統核心":
					return "優勢";
				case "代謝循環特質":
					return "弱點";
				case "神經免疫平衡":
					return "週期規律";
				default:
					return "分析";
			}
		};

		const getTabDescription = (tab, content) => {
			switch (tab) {
				case "腎骨系統核心":
					return content.advantages;
				case "代謝循環特質":
					return content.description;
				case "神經免疫平衡":
					return content.description;
				default:
					return content.description;
			}
		};

		const getTabCards = (tab, content) => {
			switch (tab) {
				case "腎骨系統核心":
					return [
						{ title: "先天優勢", text: content.advantages },
						{
							title: "潛在風險",
							text: Array.isArray(content.risks)
								? content.risks
										.map(
											(r) =>
												`${r.period}: ${r.description}`
										)
										.join("；")
								: "青年期（20 - 35歲）：火土運旺易耗腎陰，可能出現經期不準、腰肌勞損",
						},
						{ title: "關鍵年份", text: content.keyYears },
					];
				case "代謝循環特質":
					return [
						{
							title: "血液特質",
							text: content.bloodCharacteristics,
						},
						{ title: "消化特徵", text: content.digestiveFeatures },
						{ title: "皮膚隱患", text: content.skinConcerns },
					];
				case "神經免疫平衡":
					return [
						{ title: "先天優勢", text: content.advantages },
						{ title: "潛在風險", text: content.weaknesses },
						{ title: "關鍵年份", text: content.periodicPattern },
					];
				default:
					return [];
			}
		};

		return (
			<>
				<h4
					className="mb-4 text-2xl font-bold"
					style={{ fontFamily: "Noto Serif TC, serif" }}
				>
					{getTabTitle(tabName)}
				</h4>
				<p
					className="mb-6 text-lg"
					style={{ fontFamily: "Noto Sans HK, sans-serif" }}
				>
					{getTabDescription(tabName, systemData.content)}
				</p>

				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					{getTabCards(tabName, systemData.content).map(
						(card, index) => (
							<div
								key={index}
								className="p-4 rounded-lg bg-white/20"
							>
								<h5
									className="mb-2 font-bold"
									style={{
										fontFamily: "Noto Serif TC, serif",
									}}
								>
									{card.title}
								</h5>
								<p
									style={{
										fontFamily: "Noto Sans HK, sans-serif",
									}}
								>
									{card.text}
								</p>
							</div>
						)
					)}
				</div>
			</>
		);
	};

	return (
		<div className="w-full">
			{/* Header */}
			<div className="mb-8">
				<div className="flex items-center gap-3 mb-4">
					<h2
						className="text-4xl font-bold text-[#374A37]"
						style={{ fontFamily: "Noto Serif TC, serif" }}
					>
						健康運勢分析
					</h2>
				</div>

				{/* Summary Section */}
				<div className="bg-gradient-to-r from-[#389D7D] to-[#567156] rounded-full px-6 py-3 mb-6 inline-block">
					<h3
						className="text-xl font-bold text-white"
						style={{ fontFamily: "Noto Serif TC, serif" }}
					>
						總結：{healthAnalysis.summary.title}
					</h3>
				</div>

				<p
					className="text-lg text-[#374A37] leading-relaxed mb-8"
					style={{ fontFamily: "Noto Sans HK, sans-serif" }}
				>
					{healthAnalysis.summary.description}
				</p>
			</div>

			{/* Three Systems Analysis Header */}
			<div
				className="bg-[#EFEFEF] rounded-xl p-6 mb-6"
				style={{ boxShadow: "inset 0 4px 4px rgba(0, 0, 0, 0.25)" }}
			>
				<h3
					className="text-3xl font-bold text-[#567156] mb-6"
					style={{ fontFamily: "Noto Serif TC, serif" }}
				>
					三大系統深度解析
				</h3>

				{/* Tab Navigation */}
				<div className="flex flex-wrap justify-center gap-6 mb-8">
					{tabs.map((tab) => (
						<button
							key={tab}
							onClick={() => setActiveTab(tab)}
							className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 ${
								activeTab === tab
									? "bg-[#389D7D] text-white"
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

				{/* Tab Content */}
				<div className="mb-8">
					{healthAnalysis.systems[activeTab] && (
						<div className="bg-[#389D7D] rounded-xl p-6 text-white mb-6">
							{renderTabContent(
								activeTab,
								healthAnalysis.systems[activeTab]
							)}
						</div>
					)}
				</div>
			</div>
			{/* Care Regimen Section */}
			<div className="p-6">
				<h3
					className="text-3xl font-bold text-[#567156] mb-6"
					style={{ fontFamily: "Noto Serif TC, serif" }}
				>
					全週期調養方案
				</h3>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
					<div
						className="bg-[#EFEFEF] rounded-lg p-4"
						style={{
							boxShadow: "inset 0 4px 4px rgba(0, 0, 0, 0.25)",
						}}
					>
						<div className="bg-[#389D7D] rounded-full px-4 py-2 mb-3 inline-block">
							<h4
								className="text-sm font-bold text-white"
								style={{ fontFamily: "Noto Serif TC, serif" }}
							>
								作息
							</h4>
						</div>
						<p
							className="text-sm text-[#374A37]"
							style={{ fontFamily: "Noto Sans HK, sans-serif" }}
						>
							{healthAnalysis.careRegimen.diet}
						</p>
					</div>

					<div
						className="bg-[#EFEFEF] rounded-lg p-4"
						style={{
							boxShadow: "inset 0 4px 4px rgba(0, 0, 0, 0.25)",
						}}
					>
						<div className="bg-[#389D7D] rounded-full px-4 py-2 mb-3 inline-block">
							<h4
								className="text-sm font-bold text-white"
								style={{ fontFamily: "Noto Serif TC, serif" }}
							>
								經絡
							</h4>
						</div>
						<p
							className="text-sm text-[#374A37]"
							style={{ fontFamily: "Noto Sans HK, sans-serif" }}
						>
							{healthAnalysis.careRegimen.acupoints}
						</p>
					</div>

					<div
						className="bg-[#EFEFEF] rounded-lg p-4"
						style={{
							boxShadow: "inset 0 4px 4px rgba(0, 0, 0, 0.25)",
						}}
					>
						<div className="bg-[#389D7D] rounded-full px-4 py-2 mb-3 inline-block">
							<h4
								className="text-sm font-bold text-white"
								style={{ fontFamily: "Noto Serif TC, serif" }}
							>
								運動
							</h4>
						</div>
						<p
							className="text-sm text-[#374A37]"
							style={{ fontFamily: "Noto Sans HK, sans-serif" }}
						>
							{healthAnalysis.careRegimen.exercise}
						</p>
					</div>

					<div
						className="bg-[#EFEFEF] rounded-lg p-4"
						style={{
							boxShadow: "inset 0 4px 4px rgba(0, 0, 0, 0.25)",
						}}
					>
						<div className="bg-[#389D7D] rounded-full px-4 py-2 mb-3 inline-block">
							<h4
								className="text-sm font-bold text-white"
								style={{ fontFamily: "Noto Serif TC, serif" }}
							>
								大運提醒
							</h4>
						</div>
						<p
							className="text-sm text-[#374A37]"
							style={{ fontFamily: "Noto Sans HK, sans-serif" }}
						>
							{healthAnalysis.careRegimen.lifeStageReminder}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HealthFortuneAnalysis;
