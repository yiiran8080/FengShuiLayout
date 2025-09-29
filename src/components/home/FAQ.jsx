"use client";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useResponsiveScale } from "../../hooks/useResponsiveScale";

export default function FAQ() {
	const t = useTranslations("home.FAQ");
	const [showMore, setShowMore] = useState(false);
	const pathname = usePathname();
	const isPricePage = pathname.endsWith("/price");
	const { scaleRatio, isMobileLayout } = useResponsiveScale();

	if (isMobileLayout) {
		// Mobile layout - optimized for small screens
		return (
			<section
				className="relative py-8 -mt-10 -mb-10"
				style={{
					background: "#EFEFEF",
					borderRadius: "30px",
					zIndex: 50, // Higher than TheoryTips (40)
					width: "100vw",
					marginTop: "-40px", // Overlap with TheoryTips
				}}
			>
				<div className="container px-4 mx-auto">
					<h3
						className="mb-6 font-extrabold text-center"
						style={{
							fontFamily: "Noto Serif TC, serif",
							fontWeight: 800,
							fontSize: "32px", // Mobile size
							color: "#073E31",
						}}
					>
						FAQ
					</h3>

					<div className="flex flex-col items-center max-w-full mx-auto">
						<Accordion
							type="single"
							collapsible
							className="w-full"
							defaultValue="item-1"
						>
							<AccordionItem
								value="item-1"
								className="data-[state=open]:bg-[#EFEFEF] py-4 px-4 data-[state=open]:mb-4 data-[state=closed]:pt-0 data-[state=open]:border-t-4 border-[#25826C]"
							>
								<AccordionTrigger
									className="font-normal"
									style={{
										fontFamily: "Noto Sans HK, sans-serif",
										fontWeight: 400,
										fontSize: "16px", // Mobile size
										color: "#073E31",
									}}
								>
									<span
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
											fontWeight: 400,
											fontSize: "16px",
											color: "#073E31",
										}}
									>
										{t("q1")}
									</span>
								</AccordionTrigger>
								<AccordionContent
									className="pt-3 pb-0"
									style={{
										fontFamily: "Noto Sans HK, sans-serif",
										fontWeight: 300,
										fontSize: "14px", // Mobile size
										color: "#2E3933",
									}}
								>
									{t("a1")}
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value="item-2"
								className="data-[state=open]:bg-[#EFEFEF] py-4 px-4 data-[state=open]:mb-4 data-[state=closed]:pt-0 data-[state=open]:border-t-4 border-[#25826C]"
							>
								<AccordionTrigger
									className="font-normal"
									style={{
										fontFamily: "Noto Sans HK, sans-serif",
										fontWeight: 400,
										fontSize: "16px",
										color: "#073E31",
									}}
								>
									<span
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
											fontWeight: 400,
											fontSize: "16px",
											color: "#073E31",
										}}
									>
										{t("q2")}
									</span>
								</AccordionTrigger>
								<AccordionContent
									className="pt-3 pb-0"
									style={{
										fontFamily: "Noto Sans HK, sans-serif",
										fontWeight: 300,
										fontSize: "14px",
										color: "#2E3933",
									}}
								>
									{t("a2")}
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value="item-3"
								className="data-[state=open]:bg-[#EFEFEF] py-4 px-4 data-[state=open]:mb-4 data-[state=closed]:pt-0 data-[state=open]:border-t-4 border-[#25826C]"
							>
								<AccordionTrigger
									className="font-normal"
									style={{
										fontFamily: "Noto Sans HK, sans-serif",
										fontWeight: 400,
										fontSize: "16px",
										color: "#073E31",
									}}
								>
									<span
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
											fontWeight: 400,
											fontSize: "16px",
											color: "#073E31",
										}}
									>
										{t("q3")}
									</span>
								</AccordionTrigger>
								<AccordionContent
									className="pt-3 pb-0"
									style={{
										fontFamily: "Noto Sans HK, sans-serif",
										fontWeight: 300,
										fontSize: "14px",
										color: "#2E3933",
									}}
								>
									{t("a3")}
								</AccordionContent>
							</AccordionItem>

							{showMore && (
								<>
									{/* Mobile additional items with same styling pattern */}
									{[4, 5, 6, 7, 8].map((num) => (
										<AccordionItem
											key={`item-${num}`}
											value={`item-${num}`}
											className="data-[state=open]:bg-[#EFEFEF] py-4 px-4 data-[state=open]:mb-4 data-[state=closed]:pt-0 data-[state=open]:border-t-4 border-[#25826C]"
										>
											<AccordionTrigger
												className="font-normal"
												style={{
													fontFamily:
														"Noto Sans HK, sans-serif",
													fontWeight: 400,
													fontSize: "16px",
													color: "#073E31",
												}}
											>
												<span
													style={{
														fontFamily:
															"Noto Sans HK, sans-serif",
														fontWeight: 400,
														fontSize: "16px",
														color: "#073E31",
													}}
												>
													{t(`q${num}`)}
												</span>
											</AccordionTrigger>
											<AccordionContent
												className="pt-3 pb-0"
												style={{
													fontFamily:
														"Noto Sans HK, sans-serif",
													fontWeight: 300,
													fontSize: "14px",
													color: "#2E3933",
												}}
											>
												{t(`a${num}`)}
											</AccordionContent>
										</AccordionItem>
									))}
								</>
							)}
						</Accordion>

						<button
							onClick={() => {
								setShowMore(!showMore);
							}}
							className="flex items-center justify-center mt-4 text-center cursor-pointer"
							style={{
								width: "140px", // Mobile size
								height: "40px",
								borderRadius: "20px",
								background: "#A3B116",
								color: "white",
								fontFamily: "Noto Sans HK, sans-serif",
								fontWeight: 400,
								fontSize: "14px", // Mobile size
								border: "none",
							}}
						>
							{showMore ? (
								<span className="flex items-center gap-1">
									<ChevronUp size={16} />
									{t("closeMore")}
								</span>
							) : (
								<span className="flex items-center gap-1">
									<ChevronDown size={16} />
									{t("showMore")}
								</span>
							)}
						</button>
					</div>
				</div>
			</section>
		);
	}

	// Desktop layout with responsive scaling
	return (
		<div
			style={{
				width: "100vw",
				overflow: "visible",
				position: "relative",
				zIndex: 50, // Higher than TheoryTips (40)
				marginTop: "-80px", // Overlap with TheoryTips
			}}
		>
			<div
				style={{
					width: `${100 / scaleRatio}%`,
					transform: `scale(${scaleRatio})`,
					transformOrigin: "top center",
					marginLeft: "auto",
					marginRight: "auto",
					position: "relative",
				}}
			>
				<section
					className="relative -mt-20 -mb-20 md:py-20 py-15"
					style={{
						background: "#EFEFEF",
						borderRadius: "60px", // Original MacBook Air 13" size
						zIndex: 1,
					}}
				>
					<div className="container px-4 mx-auto">
						<h3
							className="mb-5 font-extrabold text-center md:mb-9"
							style={{
								fontFamily: "Noto Serif TC, serif",
								fontWeight: 800,
								fontSize: "56px", // Original MacBook Air 13" size
								color: "#073E31",
							}}
						>
							FAQ
						</h3>

						<div className="flex flex-col items-center max-w-6xl mx-auto">
							<Accordion
								type="single"
								collapsible
								className="w-full"
								defaultValue="item-1"
							>
								<AccordionItem
									value="item-1"
									className="data-[state=open]:bg-[#EFEFEF] py-7 px-6 data-[state=open]:mb-8 data-[state=closed]:pt-0 md:data-[state=open]:border-l-4 data-[state=open]:border-l-0 md:data-[state=open]:border-t-0 data-[state=open]:border-t-4 border-[#25826C]"
								>
									<AccordionTrigger
										className="font-normal"
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
											fontWeight: 400,
											fontSize: "20px", // Original size
											color: "#073E31",
										}}
									>
										<span
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
												fontWeight: 400,
												fontSize: "20px",
												color: "#073E31",
											}}
										>
											{t("q1")}
										</span>
									</AccordionTrigger>
									<AccordionContent
										className="pt-4 pb-0"
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
											fontWeight: 300,
											fontSize: "18px", // Original size
											color: "#2E3933",
										}}
									>
										{t("a1")}
									</AccordionContent>
								</AccordionItem>

								<AccordionItem
									value="item-2"
									className="data-[state=open]:bg-[#EFEFEF] py-7 px-6 data-[state=open]:mb-8 data-[state=closed]:pt-0 md:data-[state=open]:border-l-4 data-[state=open]:border-l-0 md:data-[state=open]:border-t-0 data-[state=open]:border-t-4 border-[#25826C]"
								>
									<AccordionTrigger
										className="font-normal"
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
											fontWeight: 400,
											fontSize: "20px",
											color: "#073E31",
										}}
									>
										<span
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
												fontWeight: 400,
												fontSize: "20px",
												color: "#073E31",
											}}
										>
											{t("q2")}
										</span>
									</AccordionTrigger>
									<AccordionContent
										className="pt-4 pb-0"
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
											fontWeight: 300,
											fontSize: "18px",
											color: "#2E3933",
										}}
									>
										{t("a2")}
									</AccordionContent>
								</AccordionItem>

								<AccordionItem
									value="item-3"
									className="data-[state=open]:bg-[#EFEFEF] py-7 px-6 data-[state=open]:mb-8 data-[state=closed]:pt-0 md:data-[state=open]:border-l-4 data-[state=open]:border-l-0 md:data-[state=open]:border-t-0 data-[state=open]:border-t-4 border-[#25826C]"
								>
									<AccordionTrigger
										className="font-normal"
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
											fontWeight: 400,
											fontSize: "20px",
											color: "#073E31",
										}}
									>
										<span
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
												fontWeight: 400,
												fontSize: "20px",
												color: "#073E31",
											}}
										>
											{t("q3")}
										</span>
									</AccordionTrigger>
									<AccordionContent
										className="pt-4 pb-0"
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
											fontWeight: 300,
											fontSize: "18px",
											color: "#2E3933",
										}}
									>
										{t("a3")}
									</AccordionContent>
								</AccordionItem>

								{showMore && (
									<>
										{/* Desktop additional items with original styling */}
										{[4, 5, 6, 7, 8].map((num) => (
											<AccordionItem
												key={`item-${num}`}
												value={`item-${num}`}
												className="data-[state=open]:bg-[#EFEFEF] py-7 px-6 data-[state=open]:mb-8 data-[state=closed]:pt-0 md:data-[state=open]:border-l-4 data-[state=open]:border-l-0 md:data-[state=open]:border-t-0 data-[state=open]:border-t-4 border-[#25826C]"
											>
												<AccordionTrigger
													className="font-normal"
													style={{
														fontFamily:
															"Noto Sans HK, sans-serif",
														fontWeight: 400,
														fontSize: "20px",
														color: "#073E31",
													}}
												>
													<span
														style={{
															fontFamily:
																"Noto Sans HK, sans-serif",
															fontWeight: 400,
															fontSize: "20px",
															color: "#073E31",
														}}
													>
														{t(`q${num}`)}
													</span>
												</AccordionTrigger>
												<AccordionContent
													className="pt-4 pb-0"
													style={{
														fontFamily:
															"Noto Sans HK, sans-serif",
														fontWeight: 300,
														fontSize: "18px",
														color: "#2E3933",
													}}
												>
													{t(`a${num}`)}
												</AccordionContent>
											</AccordionItem>
										))}
									</>
								)}
							</Accordion>

							<button
								onClick={() => {
									setShowMore(!showMore);
								}}
								className="flex items-center justify-center text-center cursor-pointer"
								style={{
									width: "168px", // Original size
									height: "50px",
									borderRadius: "20px",
									background: "#A3B116",
									color: "white",
									fontFamily: "Noto Sans HK, sans-serif",
									fontWeight: 400,
									fontSize: "16px", // Original size
									border: "none",
								}}
							>
								{showMore ? (
									<span className="flex items-center gap-1">
										<ChevronUp size={20} />
										{t("closeMore")}
									</span>
								) : (
									<span className="flex items-center gap-1">
										<ChevronDown size={20} />
										{t("showMore")}
									</span>
								)}
							</button>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
