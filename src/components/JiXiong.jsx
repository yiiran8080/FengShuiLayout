"use client";

import { useState, useEffect, memo } from "react";
import { ComponentErrorBoundary } from "./ErrorHandling";

const JiXiong = memo(function JiXiong({
	userInfo,
	calculateWuxingAnalysis,
	analyzeWuxingStrength,
	determineUsefulGods,
	setGlobalReportData,
}) {
	const [analysisData, setAnalysisData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	// Check if userInfo is provided
	if (!userInfo) {
		return null;
	}

	useEffect(() => {
		const fetchJiXiongAnalysis = async () => {
			if (!userInfo) return;

			try {
				setIsLoading(true);
				setError(null);

				console.log("� JiXiong always generating fresh AI analysis");

				// Calculate traditional analysis data
				let calculatedWuxing = null;
				let strengthData = null;
				let usefulGodsData = null;

				if (calculateWuxingAnalysis) {
					calculatedWuxing = calculateWuxingAnalysis(userInfo);
				}

				if (analyzeWuxingStrength && calculatedWuxing) {
					strengthData = analyzeWuxingStrength(calculatedWuxing);
				}

				if (determineUsefulGods && strengthData) {
					usefulGodsData = determineUsefulGods(strengthData);
				}

				// Fetch AI-generated JiXiong analysis
				const response = await fetch("/api/jixiong-analysis", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						userInfo: {
							birthday:
								userInfo.birthDateTime || userInfo.birthday,
							gender: userInfo.gender,
							time: userInfo.time || "00:00:00", // Default time if not provided
							concern: userInfo.concern || "財運",
						},
					}),
				});

				if (!response.ok) {
					throw new Error(`API request failed: ${response.status}`);
				}

				const result = await response.json();

				if (!result.success) {
					throw new Error(result.error || "Analysis failed");
				}

				// Check if we have valid analysis data
				if (result.analysis.parsed.error) {
					throw new Error(result.analysis.parsed.error);
				}

				// Check if we actually have content
				const hasJixiang =
					result.analysis.parsed.jixiang &&
					result.analysis.parsed.jixiang.length > 0;
				const hasXiongxiang =
					result.analysis.parsed.xiongxiang &&
					result.analysis.parsed.xiongxiang.length > 0;

				if (!hasJixiang && !hasXiongxiang) {
					throw new Error(
						"AI response was incomplete or truncated. Please try again."
					);
				}

				const analysis = {
					primaryConcern: userInfo.concern || "財運",
					jixiang: result.analysis.parsed.jixiang,
					xiongxiang: result.analysis.parsed.xiongxiang,
					seasonInfo: result.analysis.parsed.seasonInfo,
					fullContent: result.analysis.parsed.fullContent,
					wuxingAnalysis: calculatedWuxing,
					strengthData: strengthData,
					usefulGods: usefulGodsData,
					timestamp: result.analysis.timestamp,
				};

				setAnalysisData(analysis);

				// Set global report data for report page
				if (setGlobalReportData) {
					setGlobalReportData((prevData) => ({
						...prevData,
						jixiongData: analysis,
					}));
				}
			} catch (error) {
				console.error("JiXiong analysis error:", error);
				setError(error.message);

				// Fallback to basic analysis without AI
				const fallbackAnalysis = {
					primaryConcern: userInfo.concern || "財運",
					jixiang: getFallbackJixiang(userInfo.concern),
					xiongxiang: getFallbackXiongxiang(userInfo.concern),
					seasonInfo: "請根據個人情況謹慎分析關鍵時期。",
					error: "AI分析暫時不可用，顯示基礎分析。",
				};

				setAnalysisData(fallbackAnalysis);
			} finally {
				setIsLoading(false);
			}
		};

		fetchJiXiongAnalysis();
	}, [
		userInfo,
		calculateWuxingAnalysis,
		analyzeWuxingStrength,
		determineUsefulGods,
		setGlobalReportData,
	]);

	// Fallback functions for when AI is unavailable
	const getFallbackJixiang = (concern) => {
		const fallbacks = {
			財運: [
				{
					title: "印星護持",
					content:
						"通過提升個人資質和信用獲得財運保護，建議投資學習和品德修養。",
				},
				{
					title: "技能避險",
					content:
						"依靠專業技能獲得穩定收益，避免高風險投資，專注本職工作。",
				},
				{
					title: "根基穩固",
					content: "在保守策略下維持現有財務基礎，避免大幅投資變動。",
				},
			],
			事業: [
				{
					title: "身強勝任",
					content:
						"個人能力強，能夠承擔工作壓力，容易獲得上司信任和認可。",
				},
				{
					title: "印綬生身",
					content: "有貴人提攜或學習機會，通過提升技能獲得事業發展。",
				},
				{
					title: "食神吐秀",
					content:
						"創意和專業技能得以發揮，在工作中展現才華獲得機會。",
				},
			],
			工作: [
				{
					title: "身強勝任",
					content:
						"工作能力強，表現穩定可靠，容易獲得同事和上司信任。",
				},
				{
					title: "技能提升",
					content: "有學習和進修機會，通過提升專業技能獲得發展。",
				},
				{
					title: "穩定發展",
					content: "工作環境相對穩定，適合穩扎穩打的職業發展策略。",
				},
			],
			感情: [
				{
					title: "貴人相助",
					content: "容易遇到真心相待的對象，感情關係中有正面影響。",
				},
				{
					title: "溝通順暢",
					content: "表達能力強，能夠與伴侶良好溝通，關係和諧。",
				},
				{
					title: "關係穩定",
					content: "感情基礎穩固，雙方性格互補，關係發展穩定。",
				},
			],
			健康: [
				{
					title: "體質良好",
					content: "基礎體質不錯，有較強的抗病能力和恢復力。",
				},
				{
					title: "精神穩定",
					content: "精神狀態平穩，睡眠質量好，心理健康狀況良好。",
				},
				{
					title: "調理得當",
					content: "通過適當的養生調理，能夠維持較好的健康狀態。",
				},
			],
		};
		// Support both simplified and traditional Chinese characters
		const supportedConcern =
			concern === "事业" ? "事業" : concern === "财运" ? "財運" : concern;
		return fallbacks[supportedConcern] || fallbacks.財運;
	};

	const getFallbackXiongxiang = (concern) => {
		const fallbacks = {
			財運: [
				{
					title: "比劫奪財",
					content:
						"競爭激烈導致利益受損，需要防範合作風險和意外支出。",
				},
				{
					title: "投資風險",
					content:
						"高風險投資容易虧損，應該避免投機行為，選擇穩健策略。",
				},
				{
					title: "財源不穩",
					content:
						"收入來源可能不穩定，需要提前做好財務規劃和風險防範。",
				},
			],
			事業: [
				{
					title: "競爭激烈",
					content: "職場競爭加劇，同事間爭奪資源，需防範被搶奪功勞。",
				},
				{
					title: "才華埋沒",
					content:
						"個人才能難以發揮，容易被繁重事務拖累，需要主動爭取機會。",
				},
				{
					title: "決策失誤",
					content: "容易因急躁做出錯誤決策，需要保持冷靜和理性分析。",
				},
			],
			工作: [
				{
					title: "工作壓力",
					content: "工作壓力較大，需要注意身心平衡，避免過度勞累。",
				},
				{
					title: "人際複雜",
					content:
						"職場人際關係複雜，需要謹慎處理同事關係，避免衝突。",
				},
				{
					title: "變動較大",
					content: "工作環境可能有較大變動，需要提前準備應對策略。",
				},
			],
			感情: [
				{
					title: "外界干擾",
					content: "感情關係容易受外界影響，需防範第三者介入。",
				},
				{
					title: "溝通障礙",
					content: "與伴侶溝通可能出現問題，需要更多耐心和理解。",
				},
				{
					title: "性格衝突",
					content: "雙方性格差異可能導致衝突，需要學會包容和妥協。",
				},
			],
			健康: [
				{
					title: "體質偏弱",
					content: "體質相對較弱，需要注意養生保健，避免過度勞累。",
				},
				{
					title: "情緒波動",
					content: "情緒容易波動，需要注意心理調節和壓力管理。",
				},
				{
					title: "慢性問題",
					content: "可能有慢性健康問題，需要定期檢查和持續調理。",
				},
			],
		};
		// Support both simplified and traditional Chinese characters
		const supportedConcern =
			concern === "事业" ? "事業" : concern === "财运" ? "財運" : concern;
		return fallbacks[supportedConcern] || fallbacks.財運;
	};

	if (isLoading) {
		return (
			<ComponentErrorBoundary componentName="JiXiong">
				<div className="flex items-center justify-center p-8">
					<div className="text-center">
						<div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#8B4513] mb-4"></div>
						<p className="text-[#8B4513] font-medium">
							正在分析吉凶...
						</p>
					</div>
				</div>
			</ComponentErrorBoundary>
		);
	}

	if (error) {
		return (
			<ComponentErrorBoundary componentName="JiXiong">
				<div className="flex items-center justify-center p-8">
					<div className="text-center">
						<p className="mb-4 text-red-600">
							分析出現問題：{error}
						</p>
						<p className="text-gray-600">顯示基礎分析結果</p>
					</div>
				</div>
			</ComponentErrorBoundary>
		);
	}

	return (
		<ComponentErrorBoundary componentName="JiXiong">
			<section
				className="mx-0 mb-6 sm:mb-10"
				style={{
					width: "95%",
				}}
			>
				<div className="w-full px-4 sm:px-8 lg:px-13">
					{/* Header */}

					{/* Analysis Content */}
					{analysisData && (
						<>
							<div className="flex flex-col mb-8 lg:flex-row lg:gap-8">
								{/* Left Side - 吉象 */}
								<div className="w-full mb-8 lg:w-1/2 lg:mb-0">
									<div className="h-full p-6 bg-white rounded-[20px] shadow-[0_4px_5.3px_rgba(0,0,0,0.25)]">
										<h2
											className="mb-6 text-3xl font-bold text-start sm:text-3xl"
											style={{
												color: "#AD7F00",
												fontFamily:
													"Noto Sans HK, sans-serif",
												fontWeight: 700,
											}}
										>
											吉象
										</h2>

										<div className="space-y-6">
											{analysisData.jixiang.map(
												(item, index) => (
													<div
														key={index}
														className="p-4 h-[250px] flex flex-col"
													>
														<div
															className="flex items-center justify-center mb-3 font-bold text-white rounded-lg"
															style={{
																backgroundColor:
																	"#AD7F00",
																width: "200px",
																height: "40px",
																boxShadow:
																	"0 4px 4px rgba(0,0,0,0.25)",
																fontFamily:
																	"Noto Sans HK, sans-serif",
															}}
														>
															{item.title}
														</div>
														<div
															className="overflow-y-auto"
															style={{
																height: "350px",
															}}
														>
															<p
																className="leading-relaxed text-black"
																style={{
																	fontSize:
																		"15px",
																	fontFamily:
																		"Noto Sans HK, sans-serif",
																}}
															>
																{item.content}
															</p>
														</div>
													</div>
												)
											)}
										</div>
									</div>
								</div>

								{/* Right Side - 凶象 */}
								<div className="w-full lg:w-1/2">
									<div className="bg-gray-800 rounded-[20px] p-6 h-full shadow-[0_4px_5.3px_rgba(0,0,0,0.25)]">
										<h2
											className="mb-6 text-3xl font-bold text-white text-start sm:text-3xl"
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
												fontWeight: 700,
											}}
										>
											凶象
										</h2>

										<div className="space-y-6">
											{analysisData.xiongxiang.map(
												(item, index) => (
													<div
														key={index}
														className="p-4 h-[250px] flex flex-col"
													>
														<div
															className="flex items-center justify-center mb-3 font-bold text-white rounded-lg"
															style={{
																backgroundColor:
																	"black",
																width: "200px",
																height: "40px",
																boxShadow:
																	"0 4px 4px rgba(0,0,0,0.25)",
																fontFamily:
																	"Noto Sans HK, sans-serif",
															}}
														>
															{item.title}
														</div>
														<div
															className="overflow-y-auto"
															style={{
																height: "350px",
															}}
														>
															<p
																className="leading-relaxed text-white"
																style={{
																	fontSize:
																		"15px",
																	fontFamily:
																		"Noto Sans HK, sans-serif",
																}}
															>
																{item.content}
															</p>
														</div>
													</div>
												)
											)}
										</div>
									</div>
								</div>
							</div>

							{/* Useful Gods Analysis - Removed as requested */}
						</>
					)}

					{/* Fallback if no analysis data */}
					{!analysisData && (
						<div className="py-8 text-center">
							<p className="text-gray-500">暫無吉凶分析數據</p>
						</div>
					)}
				</div>
			</section>
		</ComponentErrorBoundary>
	);
});

export default JiXiong;
