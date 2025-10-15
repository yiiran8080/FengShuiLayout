"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ComponentErrorBoundary } from "./ErrorHandling";
import {
	getComponentData,
	storeComponentData,
} from "../utils/componentDataStore";

// Five Elements constants
const ELEMENTS = ["金", "木", "水", "火", "土"];

// Element colors mapping (original from Report.jsx)
const wuxingColorMap = {
	金: "#B2A062",
	木: "#567156",
	水: "#939393",
	火: "#B4003C",
	土: "#DEAB20",
};

const FiveElement = ({
	userInfo,
	calculateWuxingAnalysis,
	analyzeWuxingStrength,
	determineUsefulGods,
}) => {
	const [loading, setLoading] = useState(true);
	const [elementCounts, setElementCounts] = useState(null);
	const [missingElements, setMissingElements] = useState([]);

	// Check if userInfo is provided
	if (!userInfo) {
		return null;
	}

	useEffect(() => {
		const processData = async () => {
			try {
				// First check if we have existing historical data
				const existingData = getComponentData("fiveElementAnalysis");
				console.log(
					"🔍 FiveElement checking for existing data:",
					existingData ? "FOUND" : "NOT_FOUND"
				);

				if (existingData) {
					// Use historical data
					console.log("📚 FiveElement using historical data");
					setElementCounts(existingData.elementCounts);
					setMissingElements(existingData.missingElements);
				} else {
					// Generate fresh analysis
					console.log("🆕 FiveElement generating fresh analysis");
					const analysis = calculateWuxingAnalysis(userInfo);
					if (analysis) {
						setElementCounts(analysis.elementCounts);
						setMissingElements(analysis.missingElements);

						// Store analysis data for database saving
						const analysisData = {
							elementCounts: analysis.elementCounts,
							missingElements: analysis.missingElements,
							hasFullElements:
								analysis.missingElements.length === 0,
							timestamp: new Date().toISOString(),
						};

						storeComponentData("fiveElementAnalysis", analysisData);
						console.log(
							"📊 Stored FiveElement fresh data:",
							"SUCCESS"
						);
					}
				}
			} catch (error) {
				console.error("❌ FiveElement data processing error:", error);
			} finally {
				setLoading(false);
			}
		};

		processData();
	}, [userInfo, calculateWuxingAnalysis]);

	// Show loading state
	if (loading) {
		return (
			<ComponentErrorBoundary componentName="FiveElement">
				<section className="w-full sm:w-[85%] lg:w-[85%] mx-auto bg-white rounded-[30px] sm:rounded-[60px] lg:rounded-[160px] p-4 sm:p-6 lg:p-3 mb-6 sm:mb-10 shadow-[0_2px_5.3px_rgba(0,0,0,0.25)]">
					<div className="flex flex-col items-center justify-center py-8 space-y-4">
						{/* Loading spinner */}
						<div className="w-8 h-8 border-b-2 border-pink-500 rounded-full animate-spin"></div>

						{/* 風水妹 loading image */}
						<div className="flex items-center justify-center">
							<Image
								src="/images/風水妹/風水妹-loading.png"
								alt="風水妹運算中"
								width={120}
								height={120}
								className="object-contain"
							/>
						</div>

						{/* Loading text */}
						<div className="space-y-2 text-center">
							<div
								className="text-gray-700"
								style={{
									fontFamily: "Noto Sans HK, sans-serif",
									fontSize: "clamp(14px, 3.5vw, 16px)",
								}}
							>
								風水妹已經在運算五行配置中，請稍候
							</div>
						</div>
					</div>
				</section>
			</ComponentErrorBoundary>
		);
	}

	// Return null if no data could be processed
	if (!elementCounts) {
		return null;
	}

	return (
		<ComponentErrorBoundary componentName="FiveElement">
			<section className="w-full sm:w-[85%] lg:w-[85%] mx-auto bg-white rounded-[30px] sm:rounded-[60px] lg:rounded-[160px] p-4 sm:p-6 lg:p-3 mb-6 sm:mb-10 shadow-[0_2px_5.3px_rgba(0,0,0,0.25)]">
				<style>{`
					@media (min-width: 1024px) and (max-width: 1090px) {
						.five-element-flex {
							flex-direction: column !important;
							align-items: center !important;
						}
						.five-element-analysis {
							margin-left: 0 !important;
							width: 100% !important;
							justify-content: center !important;
							text-align: center !important;
						}
					}
				`}</style>
				<div className="flex items-center justify-center">
					{/* Five Elements with counts and analysis */}
					<div className="flex flex-col items-center justify-center w-full space-y-1 lg:flex-row lg:space-y-0 lg:space-x-8 five-element-flex">
						{/* Element displays */}
						<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
							{ELEMENTS.map((element) => (
								<div
									key={element}
									className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3"
								>
									<div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
										<Image
											src={`/images/elements/${element}.png`}
											alt={element}
											width={48}
											height={48}
											className="object-contain w-full h-full"
										/>
									</div>
									<span
										style={{
											fontFamily: "Noto Serif TC, serif",
											fontWeight: 900,
											fontSize: "clamp(16px, 4vw, 20px)",
											color: wuxingColorMap[element],
										}}
									>
										{elementCounts[element]}
									</span>
								</div>
							))}
						</div>

						{/* Analysis */}
						<div className="w-full p-1 sm:p-4 lg:ml-15 lg:w-auto five-element-analysis">
							<div
								className="text-sm text-center sm:text-base lg:text-left"
								style={{
									fontFamily: "Noto Sans HK, sans-serif",
									color: "#666",
								}}
							>
								{missingElements.length === 0 ? (
									<div>
										<span
											style={{
												fontFamily:
													"Noto Serif TC, serif",
												fontWeight: 700,
												fontSize:
													"clamp(24px, 5vw, 34px)",
												color: "#A3B116",
											}}
										>
											五行齊全
										</span>
										<span
											style={{
												fontFamily:
													"Noto Serif TC, serif",
												fontWeight: 700,
												fontSize:
													"clamp(18px, 4vw, 24px)",
												color: "#515151",
											}}
										>
											- 沒有嚴重缺失某一元素
										</span>
									</div>
								) : (
									<div>
										{missingElements.map(
											(element, index) => (
												<span key={element}>
													<span
														style={{
															fontFamily:
																"Noto Serif TC, serif",
															fontWeight: 700,
															fontSize: "24px",
															color: wuxingColorMap[
																element
															],
														}}
													>
														{element}
													</span>
													{index <
														missingElements.length -
															1 && (
														<span
															style={{
																fontFamily:
																	"Noto Serif TC, serif",
																fontWeight: 700,
																fontSize:
																	"24px",
																color: "#515151",
															}}
														>
															、
														</span>
													)}
												</span>
											)
										)}
										<span
											style={{
												fontFamily:
													"Noto Serif TC, serif",
												fontWeight: 700,
												fontSize: "24px",
												color: "#515151",
											}}
										>
											缺失
										</span>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
		</ComponentErrorBoundary>
	);
};

export default FiveElement;
