"use client";

import Image from "next/image";
import { ComponentErrorBoundary } from "./ErrorHandling";

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
	// Check if userInfo is provided
	if (!userInfo) {
		return null;
	}

	const analysis = calculateWuxingAnalysis(userInfo);
	if (!analysis) {
		return null;
	}

	const { elementCounts, missingElements } = analysis;

	return (
		<ComponentErrorBoundary componentName="FiveElement">
			<section className="w-full sm:w-[90%] lg:w-[95%] mx-auto bg-white rounded-[30px] sm:rounded-[60px] lg:rounded-[160px] p-4 sm:p-6 lg:p-3 mb-6 sm:mb-10 shadow-[0_2px_5.3px_rgba(0,0,0,0.25)]">
				<div className="flex items-center justify-center">
					{/* Five Elements with counts */}
					<div className="flex flex-col items-center justify-center w-full space-y-6 lg:flex-row lg:space-y-0 lg:space-x-8">
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
						<div className="w-full p-3 sm:p-4 lg:ml-15 lg:w-auto">
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
