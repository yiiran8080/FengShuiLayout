"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
	ArrowLeft,
	Calendar,
	User,
	AlertCircle,
	Heart,
	Users,
} from "lucide-react";
import FiveElement from "@/components/FiveElement";
import Zodiac from "@/components/Zodiac";
import LiuNianKeyWord from "@/components/LiuNianKeyWord";
import { MingJu } from "@/components/MingJu";
import LiuNianGanZhi from "@/components/LiuNianGanZhi";
import GanZhi from "@/components/GanZhi";
import JiXiong from "@/components/JiXiong";
import Season from "@/components/Season";
import CoreSuggestion from "@/components/CoreSuggestion";
import SpecificSuggestion from "@/components/SpecificSuggestion";
import getWuxingData from "@/lib/nayin";
import { LoadingProvider } from "@/utils/LoadingStateManagement";
import { CoupleAnalysisProvider } from "@/contexts/CoupleAnalysisContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/home/Footer";

// Couple-specific components
// import CoupleCompatibility from "@/components/CoupleCompatibility"; // HIDDEN
// import CoupleWuxingAnalysis from "@/components/CoupleWuxingAnalysis"; // HIDDEN
import RelationshipFortune from "@/components/RelationshipFortune";
// import CoupleAdvice from "@/components/CoupleAdvice"; // HIDDEN
// import RelationshipTaboos from "@/components/RelationshipTaboos"; // HIDDEN
// import CoupleFengShuiLayout from "@/components/CoupleFengShuiLayout"; // HIDDEN
import CoupleSpecificProblemSolution from "@/components/CoupleSpecificProblemSolution";
import EnhancedCoupleSpecificProblemSolution from "@/components/EnhancedCoupleSpecificProblemSolution";
import CoupleAnnualAnalysis from "@/components/CoupleAnnualAnalysis";
import CoupleGodExplain from "@/components/CoupleGodExplain";
import CoupleMingJu from "@/components/CoupleMingJu";
import CoupleSeason from "@/components/CoupleSeason";
import CoupleCoreSuggestion from "@/components/CoupleCoreSuggestion";

export default function CoupleReportPage() {
	const [reportData, setReportData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [activeTab, setActiveTab] = useState("analysis"); // "analysis" or "solution"
	const searchParams = useSearchParams();
	const router = useRouter();

	// Memoize user objects to prevent unnecessary re-renders of EnhancedCoupleSpecificProblemSolution
	const memoizedUser1 = useMemo(() => {
		if (!reportData) return null;
		return {
			birthDateTime: reportData.birthday,
			gender: reportData.gender,
			concern: "感情",
			problem: reportData.problem,
		};
	}, [reportData?.birthday, reportData?.gender, reportData?.problem]);

	const memoizedUser2 = useMemo(() => {
		if (!reportData) return null;
		return {
			birthDateTime: reportData.birthday2,
			gender: reportData.gender2,
			concern: "感情",
			problem: reportData.problem,
		};
	}, [reportData?.birthday2, reportData?.gender2, reportData?.problem]);

	// Five Elements analysis functions
	const calculateWuxingAnalysis = (userInfo) => {
		if (!userInfo?.birthDateTime) return null;

		const wuxingData = getWuxingData(
			userInfo.birthDateTime,
			userInfo.gender || "male"
		);

		if (!wuxingData) return null;

		// Count elements in the four pillars
		const elementCounts = { 金: 0, 木: 0, 水: 0, 火: 0, 土: 0 };

		// Count year stem and branch
		if (wuxingData.yearStemWuxing)
			elementCounts[wuxingData.yearStemWuxing]++;
		if (wuxingData.yearBranchWuxing)
			elementCounts[wuxingData.yearBranchWuxing]++;

		// Count month stem and branch
		if (wuxingData.monthStemWuxing)
			elementCounts[wuxingData.monthStemWuxing]++;
		if (wuxingData.monthBranchWuxing)
			elementCounts[wuxingData.monthBranchWuxing]++;

		// Count day stem and branch
		if (wuxingData.dayStemWuxing) elementCounts[wuxingData.dayStemWuxing]++;
		if (wuxingData.dayBranchWuxing)
			elementCounts[wuxingData.dayBranchWuxing]++;

		// Count hour stem and branch
		if (wuxingData.hourStemWuxing)
			elementCounts[wuxingData.hourStemWuxing]++;
		if (wuxingData.hourBranchWuxing)
			elementCounts[wuxingData.hourBranchWuxing]++;

		// Calculate missing elements
		const missingElements = Object.entries(elementCounts)
			.filter(([element, count]) => count === 0)
			.map(([element]) => element);

		return {
			wuxingData,
			elementCounts,
			missingElements,
			dominantElement: Object.keys(elementCounts).reduce((a, b) =>
				elementCounts[a] > elementCounts[b] ? a : b
			),
		};
	};

	const analyzeWuxingStrength = (elementCounts) => {
		// Ensure elementCounts is a valid object
		if (!elementCounts || typeof elementCounts !== "object") {
			return {};
		}

		const total = Object.values(elementCounts).reduce(
			(sum, count) => sum + count,
			0
		);
		const strengths = {};

		Object.entries(elementCounts).forEach(([element, count]) => {
			const percentage = (count / total) * 100;
			if (percentage >= 30) strengths[element] = "強";
			else if (percentage >= 15) strengths[element] = "中";
			else strengths[element] = "弱";
		});

		return strengths;
	};

	const determineUsefulGods = (wuxingAnalysis) => {
		if (!wuxingAnalysis || !wuxingAnalysis.elementCounts) return [];

		const { elementCounts, dominantElement } = wuxingAnalysis;

		// Ensure elementCounts is a valid object
		if (!elementCounts || typeof elementCounts !== "object") return [];

		const usefulGods = [];

		// Basic useful god determination logic
		const weakElements = Object.entries(elementCounts)
			.filter(([element, count]) => count <= 1)
			.map(([element]) => element);

		if (weakElements.length > 0) {
			usefulGods.push(...weakElements);
		}

		// Add elements that can balance the dominant element
		const balanceMap = {
			金: ["火", "木"],
			木: ["金", "土"],
			水: ["土", "火"],
			火: ["水", "金"],
			土: ["木", "水"],
		};

		if (balanceMap[dominantElement]) {
			balanceMap[dominantElement].forEach((element) => {
				if (!usefulGods.includes(element)) {
					usefulGods.push(element);
				}
			});
		}

		return usefulGods.slice(0, 3); // Return top 3 useful gods
	};

	useEffect(() => {
		const loadReportData = async () => {
			try {
				// First check for URL parameters (fresh input from couple modal)
				const birthday = searchParams.get("birthday");
				const birthday2 = searchParams.get("birthday2");
				const gender = searchParams.get("gender");
				const gender2 = searchParams.get("gender2");
				const time = searchParams.get("time");
				const time2 = searchParams.get("time2");
				const problem = searchParams.get("problem");

				// If we have fresh birthday data from URL parameters, use that first
				if (birthday && birthday2) {
					console.log(
						"🔍 Using fresh URL parameters for couple analysis"
					);
					console.log("📅 Birthday 1:", birthday);
					console.log("📅 Birthday 2:", birthday2);

					// 🔧 修正：優先使用 originalProblem 參數，確保保持用戶的具體問題
					const originalProblem = searchParams.get("originalProblem");
					const specificProblem =
						originalProblem || problem || "感情關係和諧改善建議";

					console.log("🔍 URL參數詳細檢查:");
					console.log("   problem:", problem);
					console.log("   originalProblem:", originalProblem);
					console.log(
						"   最終使用的 specificProblem:",
						specificProblem
					);

					// Set report data with fresh input
					setReportData({
						birthday,
						birthday2,
						gender: gender || "male",
						gender2: gender2 || "female",
						time,
						time2,
						concern: "感情", // Fixed concern for couple reports
						problem: specificProblem,
					});

					console.log("📊 使用URL參數設置的報告數據:", {
						birthday,
						birthday2,
						problem: specificProblem,
						urlProblem: problem,
						originalProblem: originalProblem,
						finalProblem: specificProblem,
					});

					setLoading(false);
					return;
				}

				// Fallback: Check if we have a report ID (from database)
				const reportId = searchParams.get("id");

				if (reportId) {
					console.log("🔍 正在載入報告 ID:", reportId);
					// Fetch report data from database
					const response = await fetch(
						`/api/smart-chat2/${reportId}`
					);
					if (response.ok) {
						const savedReport = await response.json();
						console.log("📄 載入的報告數據:", savedReport);

						if (savedReport && savedReport.userInputs) {
							const inputs = savedReport.userInputs;

							// Validate required data
							if (!inputs.birthday || !inputs.birthday2) {
								console.error("❌ 缺少必要的生日資料:", inputs);
								setError("報告資料不完整：缺少生日資訊");
								setLoading(false);
								return;
							}

							setReportData({
								birthday:
									inputs.birthday || inputs.user1_birthday,
								birthday2:
									inputs.birthday2 || inputs.user2_birthday,
								gender:
									inputs.gender ||
									inputs.user1_gender ||
									"male",
								gender2:
									inputs.gender2 ||
									inputs.user2_gender ||
									"female",
								time: inputs.time || inputs.user1_time,
								time2: inputs.time2 || inputs.user2_time,
								concern: "感情", // Fixed concern for couple reports
								problem:
									savedReport.reportMetadata
										?.originalSpecificProblem ||
									inputs.problem ||
									savedReport.messages?.[0]?.content ||
									"感情配對分析",
								reportId: reportId,
							});

							console.log("📊 設置的報告數據:", {
								reportId: reportId,
								originalSpecificProblem:
									savedReport.reportMetadata
										?.originalSpecificProblem,
								inputsProblem: inputs.problem,
								finalProblem:
									savedReport.reportMetadata
										?.originalSpecificProblem ||
									inputs.problem ||
									savedReport.messages?.[0]?.content ||
									"感情配對分析",
							});
							setLoading(false);
							return;
						} else {
							console.error("❌ 報告格式錯誤:", savedReport);
							setError("報告資料格式錯誤");
							setLoading(false);
							return;
						}
					} else {
						console.error("❌ 無法載入報告:", response.status);
						setError("無法載入報告資料");
						setLoading(false);
						return;
					}
				}

				// Fallback: No database report and no URL parameters
				if (!birthday || !birthday2) {
					setError("缺少必要的出生日期信息");
					setLoading(false);
					return;
				}

				// This should not be reached since we handle URL params first
				console.log(
					"⚠️ Fallback case - should not happen with new logic"
				);
				setError("無法獲取分析數據");
				setLoading(false);
			} catch (err) {
				console.error("Error loading report data:", err);
				setError("無法讀取報告數據");
				setLoading(false);
			}
		};

		loadReportData();
	}, [searchParams]);

	if (loading) {
		return (
			<div className="flex items-center justify-center min-h-screen bg-[#EFEFEF]">
				<div className="text-center">
					<div className="w-12 h-12 mx-auto mb-4 border-b-2 border-pink-500 rounded-full animate-spin"></div>
					<p className="text-gray-600">生成合婚報告中...</p>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex items-center justify-center min-h-screen bg-[#EFEFEF]">
				<div className="text-center">
					<AlertCircle className="w-16 h-16 mx-auto mb-4 text-red-400" />
					<p className="mb-4 text-gray-600">{error}</p>
					<button
						onClick={() => router.push("/")}
						className="px-6 py-2 text-white transition-colors bg-pink-500 rounded-lg hover:bg-pink-600"
					>
						返回智能諮詢
					</button>
				</div>
			</div>
		);
	}

	if (!reportData) {
		return (
			<div className="flex items-center justify-center min-h-screen bg-[#EFEFEF]">
				<div className="text-center">
					<Heart className="w-16 h-16 mx-auto mb-4 text-gray-400" />
					<p className="text-gray-600">未找到報告數據</p>
					<button
						onClick={() => router.push("/")}
						className="px-6 py-2 mt-4 text-white transition-colors bg-pink-500 rounded-lg hover:bg-pink-600"
					>
						返回智能諮詢
					</button>
				</div>
			</div>
		);
	}

	return (
		<LoadingProvider>
			<CoupleAnalysisProvider
				user1={{
					birthDateTime: reportData.birthday,
					gender: reportData.gender,
				}}
				user2={{
					birthDateTime: reportData.birthday2,
					gender: reportData.gender2,
				}}
				specificProblem={reportData.problem}
			>
				{/* Navbar */}
				<Navbar from="report" backgroundColor="white" />

				{/* Navigation Row */}
				<div className="w-full mt-16 bg-gradient-to-r from-[#C74772] to-[#D09900] py-4 sm:py-6">
					<div className="max-w-6xl px-3 mx-auto sm:px-4">
						<div className="flex items-center justify-center gap-3 sm:justify-between md:justify-center lg:justify-center xl:justify-center sm:gap-6">
							{/* 姻緣合盤流年分析報告 Tab */}
							<button
								onClick={() => setActiveTab("analysis")}
								className={`flex-1 max-w-[320px] px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-200 ${
									activeTab === "analysis"
										? "bg-gradient-to-r from-[#C74772] to-[#D09900] text-white shadow-[0_4px_14px_rgba(0,0,0,0.25)]"
										: "bg-white text-[#374A37] shadow-inner shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)]"
								}`}
								style={{
									fontFamily: "Noto Serif TC, serif",
									fontSize: "clamp(14px, 3.5vw, 18px)",
									boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
								}}
							>
								姻緣合盤分析報告
							</button>

							{/* 專屬問題解決方案 Tab */}
							<button
								onClick={() => setActiveTab("solution")}
								className={`flex-1 max-w-[320px] px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-200 ${
									activeTab === "solution"
										? "bg-gradient-to-r from-[#C74772] to-[#D09900] text-white shadow-[0_4px_14px_rgba(0,0,0,0.25)]"
										: "bg-white text-[#374A37] shadow-inner shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)]"
								}`}
								style={{
									fontFamily: "Noto Serif TC, serif",
									fontSize: "clamp(14px, 3.5vw, 18px)",
									boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
								}}
							>
								專屬問題解決方案
							</button>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-center w-full min-h-screen bg-[#EFEFEF]">
					<div className="w-[95%] max-w-7xl px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8 mx-auto">
						{/* Report Title */}
						<div className="mb-4 sm:mb-6 lg:mb-8 text-start">
							<h1
								className="mb-2 font-extrabold leading-tight"
								style={{
									fontFamily: "Noto Serif TC, Serif",
									fontWeight: 800,
									fontSize: "clamp(32px, 8vw, 60px)",
									color: "#D91A5A", // Pink color for couple theme
								}}
							>
								姻緣配對分析
							</h1>
						</div>

						{/* Tab Content */}
						{activeTab === "analysis" && (
							<div className="tab-content">
								{/* 姻緣合盤流年分析報告 Content */}
								{reportData && (
									<>
										<CoupleAnnualAnalysis
											user1={{
												birthDateTime:
													reportData.birthday,
												gender: reportData.gender,
											}}
											user2={{
												birthDateTime:
													reportData.birthday2,
												gender: reportData.gender2,
											}}
											calculateWuxingAnalysis={
												calculateWuxingAnalysis
											}
											analyzeWuxingStrength={
												analyzeWuxingStrength
											}
											determineUsefulGods={
												determineUsefulGods
											}
										/>
										<CoupleMingJu
											user1={{
												birthDateTime:
													reportData.birthday,
												gender: reportData.gender,
												name: reportData.name || "男方",
											}}
											user2={{
												birthDateTime:
													reportData.birthday2,
												gender: reportData.gender2,
												name:
													reportData.name2 || "女方",
											}}
											currentYear={new Date().getFullYear()}
										/>
										<CoupleGodExplain
											user1={{
												birthDateTime:
													reportData.birthday,
												gender: reportData.gender,
												name: reportData.name || "男方",
											}}
											user2={{
												birthDateTime:
													reportData.birthday2,
												gender: reportData.gender2,
												name:
													reportData.name2 || "女方",
											}}
										/>

										<CoupleSeason
											user1={{
												birthDateTime:
													reportData.birthday,
												gender: reportData.gender,
												name: reportData.name || "男方",
											}}
											user2={{
												birthDateTime:
													reportData.birthday2,
												gender: reportData.gender2,
												name:
													reportData.name2 || "女方",
											}}
											currentYear={new Date().getFullYear()}
										/>
										<CoupleCoreSuggestion
											user1={{
												birthDateTime:
													reportData.birthday,
												gender: reportData.gender,
												name: reportData.name || "男方",
											}}
											user2={{
												birthDateTime:
													reportData.birthday2,
												gender: reportData.gender2,
												name:
													reportData.name2 || "女方",
											}}
											currentYear={new Date().getFullYear()}
										/>
									</>
								)}
							</div>
						)}

						{/* Enhanced Couple Specific Problem Solution - Always mounted but conditionally visible */}
						{reportData && memoizedUser1 && memoizedUser2 && (
							<div
								className={`w-full mx-0 mb-6 ${activeTab === "solution" ? "block" : "hidden"}`}
							>
								<EnhancedCoupleSpecificProblemSolution
									user1={memoizedUser1}
									user2={memoizedUser2}
									specificProblem={reportData.problem}
									calculateWuxingAnalysis={
										calculateWuxingAnalysis
									}
									analyzeWuxingStrength={
										analyzeWuxingStrength
									}
									determineUsefulGods={determineUsefulGods}
								/>
							</div>
						)}

						{activeTab === "solution" && (
							<div className="tab-content">
								{/* Couple Compatibility Overview - HIDDEN */}
								{/* {reportData && (
								<div className="w-full mx-auto mb-6">
									<CoupleCompatibility
										user1={{
											birthDateTime:
												reportData.birthday,
											gender: reportData.gender,
										}}
										user2={{
											birthDateTime:
												reportData.birthday2,
											gender: reportData.gender2,
										}}
										calculateWuxingAnalysis={
											calculateWuxingAnalysis
										}
										analyzeWuxingStrength={
											analyzeWuxingStrength
										}
										determineUsefulGods={
											determineUsefulGods
										}
									/>
								</div>
							)} */}{" "}
								{/* Individual Analysis Section - HIDDEN */}
								{/* <div className="mb-8 text-start">
									<h1
										className="mb-2 font-extrabold"
										style={{
											fontFamily: "Noto Serif TC, Serif",
											fontWeight: 800,
											fontSize: "60px",
											color: "#8B5A3C",
										}}
									>
										雙方命理分析
									</h1>
								</div> */}
								{/* Couple Wuxing Analysis - HIDDEN */}
								{/* {reportData && (
									<div className="w-full mx-auto mb-6">
										<CoupleWuxingAnalysis
											user1={{
												birthDateTime:
													reportData.birthday,
												gender: reportData.gender,
											}}
											user2={{
												birthDateTime:
													reportData.birthday2,
												gender: reportData.gender2,
											}}
											calculateWuxingAnalysis={
												calculateWuxingAnalysis
											}
											analyzeWuxingStrength={
												analyzeWuxingStrength
											}
											determineUsefulGods={
												determineUsefulGods
											}
										/>
									</div>
								)} */}
								{/* Relationship Fortune Section */}
								{/* <div className="mb-8 text-start">
									<h1
										className="mb-2 font-extrabold"
										style={{
											fontFamily: "Noto Serif TC, Serif",
											fontWeight: 800,
											fontSize: "60px",
											color: "#374A37",
										}}
									>
										流年感情運勢
									</h1>
								</div> */}
								{/* Relationship Fortune Analysis */}
								{/* {reportData && (
									<div className="w-full mx-auto mb-6">
										<RelationshipFortune
											user1={{
												birthDateTime:
													reportData.birthday,
												gender: reportData.gender,
												concern: "感情",
												problem: reportData.problem,
											}}
											user2={{
												birthDateTime:
													reportData.birthday2,
												gender: reportData.gender2,
												concern: "感情",
												problem: reportData.problem,
											}}
											currentYear={new Date().getFullYear()}
										/>
									</div>
								)} */}
								{/* Relationship Guidance Section - HIDDEN */}
								{/* <div className="mb-8 text-start">
									<h1
										className="mb-2 font-extrabold"
										style={{
											fontFamily: "Noto Serif TC, Serif",
											fontWeight: 800,
											fontSize: "60px",
											color: "#D91A5A",
										}}
									>
										感情開運建議
									</h1>
								</div> */}
								{/* Couple Advice - HIDDEN */}
								{/* {reportData && (
									<div className="w-full mx-auto mb-6">
										<CoupleAdvice
											user1={{
												birthDateTime:
													reportData.birthday,
												gender: reportData.gender,
												concern: "感情",
												problem: reportData.problem,
											}}
											user2={{
												birthDateTime:
													reportData.birthday2,
												gender: reportData.gender2,
												concern: "感情",
												problem: reportData.problem,
											}}
											calculateWuxingAnalysis={
												calculateWuxingAnalysis
											}
											analyzeWuxingStrength={
												analyzeWuxingStrength
											}
											determineUsefulGods={
												determineUsefulGods
											}
											currentYear={new Date().getFullYear()}
										/>
									</div>
								)} */}
								{/* Relationship Taboos - HIDDEN */}
								{/* {reportData && (
									<div className="w-full mx-auto mb-6">
										<RelationshipTaboos
											user1={{
												birthDateTime:
													reportData.birthday,
												gender: reportData.gender,
												concern: "感情",
												problem: reportData.problem,
											}}
											user2={{
												birthDateTime:
													reportData.birthday2,
												gender: reportData.gender2,
												concern: "感情",
												problem: reportData.problem,
											}}
											calculateWuxingAnalysis={
												calculateWuxingAnalysis
											}
											analyzeWuxingStrength={
												analyzeWuxingStrength
											}
											determineUsefulGods={
												determineUsefulGods
											}
										/>
									</div>
								)} */}
								{/* Couple Feng Shui Layout - HIDDEN */}
								{/* {reportData && (
									<div className="w-full mx-auto mb-6">
										<CoupleFengShuiLayout
											user1={{
												birthDateTime:
													reportData.birthday,
												gender: reportData.gender,
												concern: "感情",
												problem: reportData.problem,
											}}
											user2={{
												birthDateTime:
													reportData.birthday2,
												gender: reportData.gender2,
												concern: "感情",
												problem: reportData.problem,
											}}
											calculateWuxingAnalysis={
												calculateWuxingAnalysis
											}
											analyzeWuxingStrength={
												analyzeWuxingStrength
											}
											determineUsefulGods={
												determineUsefulGods
											}
										/>
									</div>
								)} */}
								{/* Enhanced Couple Specific Problem Solution - Moved outside tab to prevent unmounting */}
							</div>
						)}
					</div>
				</div>

				{/* Footer */}
				<Footer />
			</CoupleAnalysisProvider>
		</LoadingProvider>
	);
}
