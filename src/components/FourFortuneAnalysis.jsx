"use client";

import React, { useRef, useState, useEffect } from "react";
import { useSearchParams, useParams, useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/home/Footer";
import getWuxingData from "@/lib/nayin";
import HealthFortuneAnalysis from "@/components/HealthFortuneAnalysis";
import CareerFortuneAnalysis from "@/components/CareerFortuneAnalysis";
import WealthFortuneAnalysis from "@/components/WealthFortuneAnalysis";
import RelationshipFortuneAnalysis from "@/components/RelationshipFortuneAnalysis";

const wuxingColorMap = {
	金: "#B2A062",
	木: "#567156",
	水: "#939393",
	火: "#B4003C",
	土: "#DEAB20",
};

const ELEMENTS = ["金", "木", "水", "火", "土"];

export default function FourFortuneAnalysis({
	birthDateTime: propBirthDateTime,
	gender: propGender,
	sessionId: propSessionId,
	userInfo: propUserInfo,
	wuxingData: propWuxingData,
	onFortuneDataUpdate,
}) {
	const router = useRouter();
	const locale = useLocale();
	const t = useTranslations("report");
	const sectionRefs = useRef([]);

	// State management
	const [userInfo, setUserInfo] = useState(null);
	const [sections, setSections] = useState([{ title: "四大運勢分析" }]);
	const [activeTab, setActiveTab] = useState("fortune"); // "report" or "fortune"

	// Fortune data states for persistence
	const [fortuneDataState, setFortuneDataState] = useState({
		health: null,
		career: null,
		wealth: null,
		relationship: null,
	});

	// Get URL params
	const searchParams = useSearchParams();
	const birthDateTime =
		propBirthDateTime || searchParams.get("birthDateTime");
	const gender = propGender || searchParams.get("gender");
	const sessionId = propSessionId || searchParams.get("sessionId");

	// Initialize user info - prioritize props from Report.jsx
	useEffect(() => {
		if (propUserInfo) {
			// Use user info from Report.jsx if available
			setUserInfo(propUserInfo);
		} else if (birthDateTime && gender) {
			// Fallback to URL params
			setUserInfo({
				birthDateTime: birthDateTime,
				gender: gender,
				sessionId: sessionId,
			});
		}
	}, [propUserInfo, birthDateTime, gender, sessionId]);

	// ✅ NEW: Auto-save fortune data when any fortune analysis is generated
	useEffect(() => {
		if (
			onFortuneDataUpdate &&
			Object.values(fortuneDataState).some((data) => data !== null)
		) {
			console.log(
				"🎯 Four Fortune Analysis data updated:",
				fortuneDataState
			);

			// Send updated data to Report.jsx for comprehensive saving
			Object.entries(fortuneDataState).forEach(([type, data]) => {
				if (data) {
					onFortuneDataUpdate(type, data);
				}
			});
		}
	}, [fortuneDataState, onFortuneDataUpdate]);

	// ✅ NEW: Handle fortune data updates from child components
	const handleFortuneUpdate = (fortuneType, data) => {
		console.log(`💾 Saving ${fortuneType} fortune analysis:`, data);
		setFortuneDataState((prev) => ({
			...prev,
			[fortuneType]: {
				...data,
				generatedAt: new Date().toISOString(),
				sessionId,
			},
		}));
	};

	// Analyze wuxing strength - same logic as Report.jsx
	const analyzeWuxingStrength = (elementCounts) => {
		const total = Object.values(elementCounts).reduce(
			(sum, count) => sum + count,
			0
		);
		const strongElements = [];
		const weakElements = [];

		Object.entries(elementCounts).forEach(([element, count]) => {
			const percentage = (count / total) * 100;
			if (percentage >= 25) {
				// 25% or more is considered strong
				strongElements.push(element);
			} else if (count === 0) {
				weakElements.push(element);
			}
		});

		// Generate strength description
		let strengthDesc = "";
		if (strongElements.length === 1) {
			strengthDesc = `${strongElements[0]}旺`;
		} else if (strongElements.length === 2) {
			strengthDesc = `${strongElements.join("")}兩旺`;
		} else if (strongElements.length >= 3) {
			strengthDesc = `${strongElements.slice(0, 2).join("")}等多旺`;
		} else {
			// No particularly strong elements, find the strongest
			const maxCount = Math.max(...Object.values(elementCounts));
			const dominant = Object.entries(elementCounts).find(
				([_, count]) => count === maxCount
			)?.[0];
			strengthDesc = dominant ? `${dominant}為主` : "五行平衡";
		}

		return {
			strongElements,
			weakElements,
			strengthDesc,
			elementCounts,
		};
	};

	// Determine useful gods based on wuxing balance
	const determineUsefulGods = (strengthAnalysis) => {
		const { strongElements, weakElements } = strengthAnalysis;

		let primaryGod = "正印";
		let auxiliaryGod = "食神";
		let strategy = "補缺";

		if (strongElements.length > 0) {
			// If there are strong elements, use strategy to balance
			strategy = "洩旺";
			if (strongElements.includes("火")) {
				primaryGod = "食神"; // Fire produces Earth
				auxiliaryGod = "財星"; // Fire consumes Wood
			} else if (strongElements.includes("土")) {
				primaryGod = "正官"; // Earth produces Metal
				auxiliaryGod = "正印"; // Earth consumes Fire
			}
		} else if (weakElements.length > 0) {
			// If there are weak elements, use strategy to strengthen
			strategy = "補缺";
			if (weakElements.includes("水")) {
				primaryGod = "正印"; // Metal produces Water
				auxiliaryGod = "比肩"; // Water itself
			}
		}

		return { primaryGod, auxiliaryGod, strategy };
	};

	// Calculate wuxing analysis
	const calculateWuxingAnalysis = (userInfo) => {
		if (!userInfo?.birthDateTime) return null;

		const wuxingData = getWuxingData(
			userInfo.birthDateTime,
			userInfo.gender
		);
		const elementCounts = {};
		const missingElements = [];

		// Count elements from all pillars
		ELEMENTS.forEach((element) => {
			let count = 0;
			const stemsBranches = [
				wuxingData.yearStemWuxing,
				wuxingData.yearBranchWuxing,
				wuxingData.monthStemWuxing,
				wuxingData.monthBranchWuxing,
				wuxingData.dayStemWuxing,
				wuxingData.dayBranchWuxing,
				wuxingData.hourStemWuxing,
				wuxingData.hourBranchWuxing,
			];

			stemsBranches.forEach((wuxing) => {
				if (wuxing === element) count++;
			});

			elementCounts[element] = count;
			if (count === 0) missingElements.push(element);
		});

		// Analyze element strength using the same logic as Report.jsx
		const strengthAnalysis = analyzeWuxingStrength(elementCounts);

		// Determine useful gods based on element balance
		const usefulGods = determineUsefulGods(strengthAnalysis);

		return {
			elementCounts,
			missingElements,
			wuxingData,
			strengthAnalysis,
			usefulGods,
		};
	};

	// Get wuxing analysis - prioritize prop data from Report.jsx
	const wuxingAnalysis = (() => {
		if (propWuxingData && userInfo) {
			// Use wuxingData passed from Report.jsx to ensure consistency
			return {
				wuxingData: propWuxingData,
				// Calculate other analysis parts using the same data
				...calculateWuxingAnalysis(userInfo),
			};
		}
		// Fallback to own calculation if no prop data
		return userInfo ? calculateWuxingAnalysis(userInfo) : null;
	})();

	return (
		<div className="min-h-screen bg-[#EFEFEF]">
			{/* Navbar */}
			<Navbar from="report" />

			{/* Main Content */}
			<div className="pt-4">
				{/* Header Section */}
				<div className="w-full sm:w-[95%] lg:w-[90%] mx-auto px-4 sm:px-5 pt-2s sm:pt-10 lg:pt-10 pb-6 sm:pb-10 flex flex-col lg:flex-row bg-[#EFEFEF]">
					<div className="flex items-start justify-center flex-1 mb-6 lg:justify-start lg:mb-0">
						<h1
							ref={(el) => (sectionRefs.current[0] = el)}
							style={{
								fontFamily: "Noto Serif TC, serif",
								fontWeight: 800,
								fontSize: "clamp(32px, 6vw, 56px)",
								color: "#A3B116",
								lineHeight: 1.1,
								textAlign: "center",
							}}
							className="lg:text-left"
						>
							{sections[0]?.title}
						</h1>
					</div>
				</div>

				{/* Zodiac and Four Pillars Detail Section */}
				<section className="w-full sm:w-[95%] lg:w-[85%] mx-auto bg-white rounded-[20px] sm:rounded-[26px] p-4 sm:p-8 lg:p-13 mb-6 sm:mb-10 shadow-[0_4px_5.3px_rgba(0,0,0,0.25)]">
					{(() => {
						const analysis = wuxingAnalysis;
						if (!analysis)
							return (
								<div className="flex items-center justify-center py-20">
									<div className="text-center">
										<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A3B116] mx-auto mb-4"></div>
										<p className="text-lg text-[#5A5A5A]">
											正在分析您的命理資料...
										</p>
									</div>
								</div>
							);

						const { wuxingData } = analysis;

						// Calculate zodiac from birth year
						const birthDate = new Date(userInfo.birthDateTime);
						const birthYear = birthDate.getFullYear();
						const zodiacAnimals = [
							"鼠",
							"牛",
							"虎",
							"兔",
							"龍",
							"蛇",
							"馬",
							"羊",
							"猴",
							"雞",
							"狗",
							"豬",
						];
						const userZodiac =
							zodiacAnimals[(birthYear - 1900) % 12];

						return (
							<div className="flex flex-col items-start gap-6 lg:flex-row lg:justify-between lg:gap-0">
								{/* Left Side - Zodiac Animal */}
								<div className="w-full lg:w-[20%] ml-10 flex items-center justify-center">
									<div className="text-center">
										<div className="flex items-center justify-center h-16 mx-auto mb-4 w-18 sm:w-20 sm:h-20 lg:w-100 lg:h-100">
											<Image
												src={`/images/animals/${
													userZodiac === "龍"
														? "dragon"
														: userZodiac === "鼠"
															? "mouse"
															: userZodiac ===
																  "牛"
																? "cow"
																: userZodiac ===
																	  "虎"
																	? "tiger"
																	: userZodiac ===
																		  "兔"
																		? "rabbit"
																		: userZodiac ===
																			  "蛇"
																			? "snake"
																			: userZodiac ===
																				  "馬"
																				? "horse"
																				: userZodiac ===
																					  "羊"
																					? "sheep"
																					: userZodiac ===
																						  "猴"
																						? "monkey"
																						: userZodiac ===
																							  "雞"
																							? "chicken"
																							: userZodiac ===
																								  "狗"
																								? "dog"
																								: userZodiac ===
																									  "豬"
																									? "pig"
																									: "mouse"
												}.png`}
												alt={userZodiac}
												width={328}
												height={328}
												className="object-contain"
											/>
										</div>
									</div>
								</div>

								{/* Right Side - Enhanced Display Following Image Design */}
								<div className="w-full lg:w-[70%] flex flex-col gap-4 sm:gap-6">
									{/* Header with Title */}
									<div className="text-center lg:text-start">
										<h3
											className="font-bold text-[#A3B116] mb-4 sm:mb-6"
											style={{
												fontFamily:
													"Noto Serif TC, serif",
												fontSize:
													"clamp(36px, 8vw, 70px)",
											}}
										>
											主要結論
										</h3>
									</div>

									{/* Four Pillars in responsive layout */}
									<div className="flex flex-wrap justify-center gap-3 mb-4 lg:justify-start sm:gap-4 sm:mb-6">
										{/* 年柱 */}
										<div className="bg-white border-2 border-black rounded-full px-3 sm:px-6 lg:px-10 py-2 min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] text-center flex-shrink-0">
											<div
												className="font-bold text-[#374A37]"
												style={{
													fontFamily:
														"Noto Serif TC, serif",
													fontSize:
														"clamp(14px, 3vw, 18px)",
												}}
											>
												年柱-
												<span className="text-[#A3B116]">
													{wuxingData.year}
												</span>
											</div>
										</div>

										{/* 月柱 */}
										<div className="bg-white border-2 border-black rounded-full px-3 sm:px-6 lg:px-10 py-2 min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] text-center flex-shrink-0">
											<div
												className="font-bold text-[#374A37]"
												style={{
													fontFamily:
														"Noto Serif TC, serif",
													fontSize:
														"clamp(14px, 3vw, 18px)",
												}}
											>
												月柱-
												<span className="text-[#A3B116]">
													{wuxingData.month}
												</span>
											</div>
										</div>

										{/* 日柱 */}
										<div className="bg-white border-2 border-black rounded-full px-3 sm:px-6 lg:px-10 py-2 min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] text-center flex-shrink-0">
											<div
												className="font-bold text-[#374A37]"
												style={{
													fontFamily:
														"Noto Serif TC, serif",
													fontSize:
														"clamp(14px, 3vw, 18px)",
												}}
											>
												日柱-
												<span className="text-[#A3B116]">
													{wuxingData.day}
												</span>
											</div>
										</div>

										{/* 時柱 */}
										<div className="bg-white border-2 border-black rounded-full px-3 sm:px-6 lg:px-10 py-2 min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] text-center flex-shrink-0">
											<div
												className="font-bold text-[#374A37]"
												style={{
													fontFamily:
														"Noto Serif TC, serif",
													fontSize:
														"clamp(14px, 3vw, 18px)",
												}}
											>
												時柱-
												<span className="text-[#A3B116]">
													{wuxingData.hour}
												</span>
											</div>
										</div>
									</div>

									{/* Two main analysis sections side by side like the image */}
									<div className="flex justify-start gap-8">
										{/* Left section - Wuxing Analysis */}
										<div className="bg-[#A3B116] text-white px-15 py-4 rounded-full">
											<div
												className="text-xl font-bold text-center"
												style={{
													fontFamily:
														"Noto Serif TC, serif",
												}}
											>
												五行-
												{
													analysis.strengthAnalysis
														.strengthDesc
												}
											</div>
										</div>

										{/* Right section - Missing Elements Analysis (Logic-based) */}
										<div className="bg-[#A3B116] text-white px-15 py-4 rounded-full">
											<div
												className="text-xl font-bold text-center"
												style={{
													fontFamily:
														"Noto Serif TC, serif",
												}}
											>
												{(() => {
													const missingElements =
														analysis
															.strengthAnalysis
															.weakElements || [];
													if (
														missingElements.length ===
														0
													) {
														return "五行沒有缺失";
													} else if (
														missingElements.length ===
														1
													) {
														return `缺${missingElements[0]}`;
													} else if (
														missingElements.length ===
														2
													) {
														return `缺${missingElements.join("")}`;
													} else {
														return `缺${missingElements.slice(0, 2).join("")}等`;
													}
												})()}
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})()}
				</section>

				{/* Health Fortune Analysis - Detailed Implementation */}
				<section className="w-full sm:w-[95%] lg:w-[85%] mx-auto bg-white rounded-[20px] sm:rounded-[26px] p-4 sm:p-8 lg:p-13 mb-6 sm:mb-10 shadow-[0_4px_5.3px_rgba(0,0,0,0.25)]">
					{(() => {
						const analysis = wuxingAnalysis;
						if (!analysis) {
							return (
								<div className="py-20 text-center">
									<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A3B116] mx-auto mb-4"></div>
									<p className="text-lg text-[#5A5A5A]">
										正在生成健康運勢分析...
									</p>
								</div>
							);
						}

						return (
							<HealthFortuneAnalysis
								userInfo={userInfo}
								wuxingData={analysis.wuxingData}
								sessionId={sessionId}
								onDataUpdate={(data) =>
									handleFortuneUpdate("health", data)
								}
							/>
						);
					})()}
				</section>

				{/* Career Fortune Analysis - Detailed Implementation */}
				<section className="w-full sm:w-[95%] lg:w-[85%] mx-auto bg-white rounded-[20px] sm:rounded-[26px] p-4 sm:p-8 lg:p-13 mb-6 sm:mb-10 shadow-[0_4px_5.3px_rgba(0,0,0,0.25)]">
					{(() => {
						const analysis = wuxingAnalysis;
						if (!analysis) {
							return (
								<div className="py-20 text-center">
									<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A3B116] mx-auto mb-4"></div>
									<p className="text-lg text-[#5A5A5A]">
										正在生成事業運勢分析...
									</p>
								</div>
							);
						}

						return (
							<CareerFortuneAnalysis
								userInfo={userInfo}
								wuxingData={analysis.wuxingData}
								sessionId={sessionId}
								onDataUpdate={(data) =>
									handleFortuneUpdate("career", data)
								}
							/>
						);
					})()}
				</section>

				{/* Wealth Fortune Analysis - Detailed Implementation */}
				<section className="w-full sm:w-[95%] lg:w-[85%] mx-auto bg-white rounded-[20px] sm:rounded-[26px] p-4 sm:p-8 lg:p-13 mb-6 sm:mb-10 shadow-[0_4px_5.3px_rgba(0,0,0,0.25)]">
					{(() => {
						const analysis = wuxingAnalysis;
						if (!analysis) {
							return (
								<div className="py-20 text-center">
									<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A3B116] mx-auto mb-4"></div>
									<p className="text-lg text-[#5A5A5A]">
										正在生成財運運勢分析...
									</p>
								</div>
							);
						}

						return (
							<WealthFortuneAnalysis
								userInfo={userInfo}
								wuxingData={analysis.wuxingData}
								sessionId={sessionId}
								onDataUpdate={(data) =>
									handleFortuneUpdate("wealth", data)
								}
							/>
						);
					})()}
				</section>

				{/* Relationship Fortune Analysis - Detailed Implementation */}
				<section className="w-full sm:w-[95%] lg:w-[85%] mx-auto bg-white rounded-[20px] sm:rounded-[26px] p-4 sm:p-8 lg:p-13 mb-6 sm:mb-10 shadow-[0_4px_5.3px_rgba(0,0,0,0.25)]">
					{(() => {
						const analysis = wuxingAnalysis;
						if (!analysis) {
							return (
								<div className="py-20 text-center">
									<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A3B116] mx-auto mb-4"></div>
									<p className="text-lg text-[#5A5A5A]">
										正在生成感情運勢分析...
									</p>
								</div>
							);
						}

						return (
							<RelationshipFortuneAnalysis
								userInfo={userInfo}
								wuxingData={analysis.wuxingData}
								sessionId={sessionId}
								onDataUpdate={(data) =>
									handleFortuneUpdate("relationship", data)
								}
							/>
						);
					})()}
				</section>
			</div>

			{/* Footer */}
			<Footer />
		</div>
	);
}
