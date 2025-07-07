"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Tips() {
	const t = useTranslations("home.tips");
	const [active, setActive] = useState(null);
	const [isMounted, setIsMounted] = useState(false);

	// Enhanced tip configuration with responsive sizes
	const tipConfig = [
		{
			color: "bg-gradient-to-b from-[#dcb8a0] to-[#c4a084]",
			angle: 0,
			width: "w-10 sm:w-12 md:w-16 lg:w-20",
			height: "h-56 sm:h-64 md:h-80 lg:h-96",
			margin: "mr-0",
			fontSize: "text-[8px] sm:text-[10px] md:text-lg lg:text-xl",
			shadow: "shadow-lg",
			thickness:
				"border-l-[2px] border-r-[2px] sm:border-l-[3px] sm:border-r-[3px] md:border-l-[4px] md:border-r-[4px]",
			baseOffset: "mb-0",
		},
		{
			color: "bg-gradient-to-b from-[#8eb4a6] to-[#7a9f91]",
			angle: 3,
			width: "w-12 sm:w-14 md:w-20 lg:w-24",
			height: "h-64 sm:h-72 md:h-88 lg:h-104",
			margin: "mr-0.5 sm:mr-1 md:mr-4 lg:mr-7",
			fontSize: "text-[8px] sm:text-[10px] md:text-lg lg:text-xl",
			shadow: "shadow-xl",
			thickness:
				"border-l-[2px] border-r-[2px] sm:border-l-[3px] sm:border-r-[3px] md:border-l-[4px] md:border-r-[4px] lg:border-l-[5px] lg:border-r-[5px]",
			baseOffset: "mb-0",
		},
		{
			color: "bg-gradient-to-b from-[#40807d] to-[#356b68]",
			angle: -2,
			width: "w-9 sm:w-10 md:w-14 lg:w-18",
			height: "h-52 sm:h-60 md:h-76 lg:h-92",
			margin: "mr-0.5 sm:mr-1 md:mr-3 lg:mr-5",
			fontSize: "text-[7px] sm:text-[9px] md:text-base lg:text-lg",
			shadow: "shadow-lg",
			thickness:
				"border-l-[2px] border-r-[2px] sm:border-l-[3px] sm:border-r-[3px] md:border-l-[4px] md:border-r-[4px]",
			baseOffset: "mb-0",
		},
		{
			color: "bg-gradient-to-b from-[#407ea5] to-[#356890]",
			angle: -5,
			width: "w-11 sm:w-13 md:w-17 lg:w-21",
			height: "h-60 sm:h-68 md:h-84 lg:h-100",
			margin: "mr-0.5 sm:mr-1 md:mr-1.5 lg:mr-2",
			fontSize: "text-[8px] sm:text-[10px] md:text-lg lg:text-xl",
			shadow: "shadow-lg",
			thickness:
				"border-l-[2px] border-r-[2px] sm:border-l-[3px] sm:border-r-[3px] md:border-l-[4px] md:border-r-[4px]",
			baseOffset: "mb-0",
		},
		{
			color: "bg-gradient-to-b from-[#7a6b9b] to-[#665786]",
			angle: 1,
			width: "w-10 sm:w-12 md:w-16 lg:w-19",
			height: "h-58 sm:h-66 md:h-82 lg:h-98",
			margin: "mr-1 sm:mr-2 md:mr-4 lg:mr-8",
			fontSize: "text-[7px] sm:text-[9px] md:text-base lg:text-lg",
			shadow: "shadow-lg",
			thickness:
				"border-l-[2px] border-r-[2px] sm:border-l-[3px] sm:border-r-[3px] md:border-l-[4px] md:border-r-[4px]",
			baseOffset: "mb-0",
		},
		{
			color: "bg-gradient-to-b from-[#d782a3] to-[#c26e8f]",
			angle: -4,
			width: "w-10 sm:w-12 md:w-16 lg:w-20",
			height: "h-54 sm:h-62 md:h-78 lg:h-94",
			margin: "mr-0",
			fontSize: "text-[7px] sm:text-[9px] md:text-base lg:text-lg",
			shadow: "shadow-lg",
			rounded: "rounded-r-md",
			thickness:
				"border-l-[2px] border-r-[3px] sm:border-l-[3px] sm:border-r-[4px] md:border-l-[4px] md:border-r-[5px]",
			baseOffset: "mb-0",
		},
	];

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const handleClick = (e, index) => {
		e.stopPropagation();
		setActive(active === index ? null : index);
	};

	const handleBackgroundClick = () => {
		setActive(null);
	};

	// Responsive book animation function
	const getBookTransform = (index, activeIndex) => {
		if (activeIndex === null) return "translateX(0)";

		// Responsive push distance
		let pushDistance = 120; // mobile default
		if (typeof window !== "undefined") {
			if (window.innerWidth >= 1024) {
				pushDistance = 220; // desktop
			} else if (window.innerWidth >= 768) {
				pushDistance = 180; // tablet
			} else if (window.innerWidth >= 640) {
				pushDistance = 150; // small tablet
			}
		}

		if (index < activeIndex) {
			return `translateX(-${pushDistance}px)`;
		} else if (index > activeIndex) {
			return `translateX(${pushDistance}px)`;
		}
		return "translateX(0)";
	};

	if (!isMounted) {
		return null;
	}

	return (
		<section
			className="relative flex flex-col items-center justify-center px-2 py-4 overflow-hidden bg-center bg-cover sm:px-4 md:py-8 lg:py-12"
			style={{
				backgroundImage: "url('/images/hero/tipsbg.png')",
				backgroundAttachment: "fixed",
			}}
			onClick={handleBackgroundClick}
		>
			{/* Enhanced backdrop overlay */}
			<div className="absolute inset-0 bg-black/10"></div>

			{/* Title Section */}
			<div className="relative z-10 mb-6 text-center sm:mb-4 md:mb-8 lg:mb-8">
				<h2 className="text-2xl font-bold text-white d sm:text-3xl md:text-4xl lg:text-5xl text-shadow-lg">
					{t("title")}
				</h2>
			</div>

			{/* Books Container - Responsive */}
			<div className="relative z-10 flex items-end justify-center w-full overflow-x-auto min-h-[40vh] sm:min-h-[65vh] md:min-h-[40vh] lg:min-h-[40vh] ">
				{/* Enhanced book shelf */}
				<div className="relative px-2 min-w-fit sm:px-4">
					{/* Shelf base with responsive alignment */}
					<div className="relative flex items-end justify-center pb-0">
						{tipConfig.map((config, index) => (
							<div
								key={index}
								className={`relative group ${config.baseOffset} transition-all duration-700 ease-in-out`}
								style={{
									transform:
										active !== null
											? getBookTransform(index, active)
											: "translateX(0)",
									zIndex:
										active === index
											? 30
											: active !== null
												? 5
												: 10,
								}}
							>
								{active === index ? (
									/* Active book card - responsive display */
									<div className="relative">
										{/* Responsive card container */}
										<div
											className="absolute bottom-0 z-40 transition-all duration-500 ease-out transform -translate-x-1/2 left-1/2"
											style={{
												width:
													typeof window !==
														"undefined" &&
													window.innerWidth < 640
														? "95vw"
														: typeof window !==
																	"undefined" &&
															  window.innerWidth <
																	768
															? "90vw"
															: typeof window !==
																		"undefined" &&
																  window.innerWidth <
																		1024
																? "80vw"
																: "auto",
												height: "auto",
												maxWidth:
													typeof window !==
														"undefined" &&
													window.innerWidth < 640
														? "350px"
														: typeof window !==
																	"undefined" &&
															  window.innerWidth <
																	768
															? "450px"
															: "95vw",
												maxHeight: "90vh",
												minWidth: "280px",
											}}
										>
											{/* Responsive card content */}
											<div className="relative overflow-hidden border border-gray-200 shadow-2xl bg-gradient-to-br from-white via-white to-gray-50 rounded-xl">
												{/* Responsive image */}
												<Image
													src={`https://d3cbeloe0vn1bb.cloudfront.net/images/tips/${index + 1}.png`}
													alt={
														t(`tip${index + 1}`) ||
														`Tip ${index + 1}`
													}
													width={600}
													height={440}
													className="block w-full h-auto rounded-xl"
													style={{
														maxHeight:
															typeof window !==
																"undefined" &&
															window.innerWidth <
																640
																? "70vh"
																: typeof window !==
																			"undefined" &&
																	  window.innerWidth <
																			768
																	? "70vh"
																	: typeof window !==
																				"undefined" &&
																		  window.innerWidth <
																				1024
																		? "75vh"
																		: "60vh",
														objectFit: "contain",
													}}
													priority
												/>
											</div>

											{/* Responsive close button */}
											<button
												onClick={(e) =>
													handleClick(e, index)
												}
												className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 bg-gray-800/80 hover:bg-gray-900 rounded-full p-1.5 sm:p-2.5 transition-all duration-200 backdrop-blur-sm shadow-lg"
											>
												<svg
													className="w-4 h-4 text-white sm:w-5 sm:h-5"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M6 18L18 6M6 6l12 12"
													/>
												</svg>
											</button>
										</div>

										{/* Responsive book spine - smaller when active */}
										<div
											style={{
												writingMode: "vertical-lr",
												transform: `rotate(${config.angle}deg) translateZ(0) scale(0.7)`,
												transformOrigin:
													"bottom center",
												opacity: 0.6,
											}}
											className={`
                                                relative ${config.height} ${config.color} ${config.shadow}
                                                leading-3 sm:leading-4 md:leading-6 lg:leading-8 tracking-wide
                                                flex items-center justify-center text-center text-white
                                                cursor-pointer ${config.width} ${config.fontSize} ${config.margin}
                                                transition-all duration-300 ease-out
                                                ${config.thickness} border-white/25
                                                ${config.rounded || "rounded-t-sm"}
                                                backdrop-blur-sm
                                            `}
										>
											<span className="relative z-10 px-0.5 sm:px-1 font-semibold leading-tight text-shadow">
												{t(`tip${index + 1}`) ||
													`Tip ${index + 1}`}
											</span>
										</div>
									</div>
								) : (
									/* Responsive Book spine */
									<div
										style={{
											writingMode: "vertical-lr",
											transform: `rotate(${config.angle}deg) translateZ(0)`,
											transformOrigin: "bottom center",
										}}
										className={`
                                            relative ${config.height} ${config.color} ${config.shadow}
                                            leading-3 sm:leading-4 md:leading-6 lg:leading-8 tracking-wide
                                            flex items-center justify-center text-center text-white
                                            cursor-pointer ${config.width} ${config.fontSize} ${config.margin}
                                            transition-all duration-300 ease-out
                                            hover:scale-105 sm:hover:scale-110 hover:brightness-110 hover:shadow-2xl hover:z-20
                                            ${config.thickness} border-white/25
                                            ${config.rounded || "rounded-t-sm"}
                                            group-hover:z-10
                                            backdrop-blur-sm
                                        `}
										onClick={(e) => handleClick(e, index)}
									>
										{/* Responsive decorative elements */}
										<div className="absolute top-2 sm:top-3 md:top-4 left-1/2 transform -translate-x-1/2 w-4 sm:w-6 md:w-8 lg:w-12 h-0.5 bg-white/50 rounded"></div>
										<div className="absolute top-4 sm:top-5 md:top-7 left-1/2 transform -translate-x-1/2 w-3 sm:w-4 md:w-6 lg:w-10 h-0.5 bg-white/40 rounded"></div>
										<div className="absolute bottom-4 sm:bottom-5 md:bottom-7 left-1/2 transform -translate-x-1/2 w-3 sm:w-4 md:w-6 lg:w-10 h-0.5 bg-white/40 rounded"></div>
										<div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 w-4 sm:w-6 md:w-8 lg:w-12 h-0.5 bg-white/50 rounded"></div>

										{/* Responsive book title */}
										<span className="relative z-10 px-1 font-bold leading-tight sm:px-2 text-shadow">
											{t(`tip${index + 1}`) ||
												`Tip ${index + 1}`}
										</span>

										{/* Enhanced hover glow effect */}
										<div className="absolute inset-0 transition-opacity duration-300 rounded-t-sm opacity-0 bg-gradient-to-t from-white/5 to-white/20 group-hover:opacity-100"></div>

										{/* Book spine texture */}
										<div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/10 via-transparent to-black/10"></div>
									</div>
								)}
							</div>
						))}
					</div>

					{/* Responsive shelf */}
					<div className="relative mt-0">
						{/* Main shelf */}
						<div className="w-full h-3 sm:h-4 md:h-5 lg:h-6 bg-gradient-to-b from-[#8B7355] to-[#6B5B47] border-t-2 sm:border-t-3 border-[#7EAAAB] rounded-sm shadow-xl">
							<div className="w-full h-full bg-gradient-to-r from-transparent via-black/5 to-transparent"></div>
						</div>

						{/* Shelf edge */}
						<div className="w-full h-1.5 sm:h-2 bg-gradient-to-b from-[#6B5B47] to-[#5A4A36] shadow-lg"></div>

						{/* Shelf shadow */}
						<div className="w-full h-2 sm:h-3 bg-gradient-to-b from-black/30 to-transparent blur-sm"></div>

						{/* Responsive decorative shelf brackets */}
						<div className="absolute bottom-1.5 sm:bottom-2 left-4 sm:left-6 md:left-8 w-1.5 sm:w-2 md:w-3 h-4 sm:h-5 md:h-6 lg:h-8 bg-gradient-to-b from-[#6B5B47] to-[#5A4A36] rounded-b-sm shadow-sm"></div>
						<div className="absolute bottom-1.5 sm:bottom-2 right-4 sm:right-6 md:right-8 w-1.5 sm:w-2 md:w-3 h-4 sm:h-5 md:h-6 lg:h-8 bg-gradient-to-b from-[#6B5B47] to-[#5A4A36] rounded-b-sm shadow-sm"></div>

						{/* Center support */}
						<div className="absolute bottom-1.5 sm:bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 sm:w-2 md:w-3 h-4 sm:h-5 md:h-6 lg:h-8 bg-gradient-to-b from-[#6B5B47] to-[#5A4A36] rounded-b-sm shadow-sm"></div>
					</div>
				</div>
			</div>

			{/* Responsive background decorations */}
			<div className="absolute w-8 h-8 rounded-full sm:w-12 sm:h-12 md:w-16 md:h-16 top-5 sm:top-10 left-5 sm:left-10 bg-white/5 blur-xl animate-pulse"></div>
			<div className="absolute w-10 h-10 delay-1000 rounded-full sm:w-16 sm:h-16 md:w-20 md:h-20 bottom-10 sm:bottom-20 right-5 sm:right-10 bg-white/5 blur-xl animate-pulse"></div>
			<div className="absolute w-6 h-6 delay-500 rounded-full sm:w-8 sm:h-8 md:w-12 md:h-12 top-1/3 right-10 sm:right-20 bg-white/5 blur-xl animate-pulse"></div>
		</section>
	);
}
