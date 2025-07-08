"use client";
import _ from "lodash";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import UnlockButton from "../UnlockButton";
import RoomCanvas from "./RoomCanvas";
import DonutChart from "../DonutChart";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { useImage } from "../../context/ImageContext";

Chart.register(ArcElement, Tooltip, Legend);

export function FreeChapter3({ roomType, direction, data }) {
	const t = useTranslations("freeChapter3");
	const [jiajuData, setJiajuData] = useState(null);
	const [randomEntry, setRandomEntry] = useState(null);
	const [activeTab, setActiveTab] = useState("base");
	const [currentSlide, setCurrentSlide] = useState(0);
	const { preview } = useImage();

	// Tab list with translations
	const tabList = [
		{ label: t("tabs.base"), key: "base" },
		{ label: t("tabs.furniture"), key: "furniture" },
		{ label: t("tabs.taboo"), key: "taboo" },
		{ label: t("tabs.wuxing"), key: "wuxing" },
	];

	// Carousel data with translations
	const carouselData = [
		{
			title: t("risks.career"),
			content: t("careerContent"),
			titleColor: "text-blue-600",
			contentColor: "text-blue-700",
			bgColor: "bg-blue-50",
		},
		{
			title: t("risks.relationship"),
			content: t("relationshipContent"),
			titleColor: "text-red-600",
			contentColor: "text-red-700",
			bgColor: "bg-red-50",
		},
		{
			title: t("risks.wealth"),
			content: t("wealthContent"),
			titleColor: "text-yellow-600",
			contentColor: "text-yellow-700",
			bgColor: "bg-yellow-50",
		},
	];

	useEffect(() => {
		if (!data) return;
		const langData = data.zhData || data.twData;
		setJiajuData(langData?.jiajuData);
	}, [data]);

	useEffect(() => {
		if (
			jiajuData &&
			jiajuData[roomType] &&
			jiajuData[roomType][direction]
		) {
			const entries = Object.entries(jiajuData[roomType][direction]);
			if (entries.length > 0) {
				const randomIdx = Math.floor(Math.random() * entries.length);
				setRandomEntry(entries[randomIdx]);
			}
		}
	}, [jiajuData, roomType, direction]);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % carouselData.length);
	};

	const prevSlide = () => {
		setCurrentSlide(
			(prev) => (prev - 1 + carouselData.length) % carouselData.length
		);
	};

	if (!jiajuData || !jiajuData[roomType] || !jiajuData[roomType][direction])
		return <div>{t("noData")}</div>;

	if (!randomEntry) return null;

	return (
		<div
			className="flex items-start justify-center w-full min-h-screen px-2 mx-auto sm:px-4 lg:px-0"
			style={{ fontFamily: '"Noto Serif TC", serif' }}
		>
			<div className="w-full max-w-full p-2 mt-4 sm:p-4 sm:mt-6 lg:p-8 lg:mt-10 rounded-xl">
				<>
					{/* Main Title */}
					<div className="flex flex-row items-start justify-center mb-3 sm:mb-4 lg:mb-6 pt-0 px-1 sm:px-2 lg:px-3.5 text-[#25826c] pb-4 sm:pb-6 lg:pb-[40px] box-border">
						<h1 className="relative h-auto m-0 text-xl font-bold leading-tight text-center sm:text-2xl lg:text-4xl">
							{t("title")}
						</h1>
					</div>

					{/* Main Content Container */}
					<div className="flex-1 rounded-2xl sm:mb-8 lg:mb-13 bg-[#f5faf7] flex flex-col items-start justify-start pt-4 sm:pt-6 lg:pt-[40px] px-3 sm:px-4 lg:px-[30px] pb-4 sm:pb-6 lg:pb-[37px] box-border gap-3 sm:gap-4 lg:gap-8 z-[1] shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
						{/* Upload Image Section */}
						<div className="flex flex-col items-center w-full gap-2 mx-auto">
							{preview && (
								<img
									src={preview}
									alt={t("uploadedImage")}
									className="object-cover w-full h-auto max-w-full mb-2 rounded-lg"
									style={{ aspectRatio: "4/3" }} // Taller than 16/9
								/>
							)}
						</div>

						{/* Room Analysis Header */}
						<div className="flex flex-row items-start justify-start h-auto gap-2 text-base sm:text-lg lg:text-xl">
							<Image
								className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 relative overflow-hidden shrink-0 z-[2] bg-transparent"
								loading="lazy"
								width={100}
								height={100}
								sizes="100vw"
								alt=""
								src="/images/room-icon/bedroom.png"
							/>
							<h3 className="m-0 relative top-0.5 leading-6 sm:leading-8 font-[400] font-[inherit] z-[2] text-sm sm:text-base lg:text-xl">
								{t("roomAnalysis")}
							</h3>
						</div>

						{/* Tabs Section */}
						<div className="flex flex-col items-start justify-start w-full max-w-full gap-2 px-0 pt-0 pb-2">
							<div className="flex flex-row items-start justify-between w-full gap-1 overflow-x-auto border-b sm:gap-2 lg:gap-5">
								{tabList.map((tab) => (
									<button
										key={tab.key}
										className={`relative leading-4 z-[2] px-1 sm:px-2 py-1 focus:outline-none whitespace-nowrap text-xs sm:text-sm lg:text-base ${
											activeTab === tab.key
												? "border-b-2 border-blue-500 font-bold text-blue-600"
												: "text-gray-500"
										}`}
										onClick={() => setActiveTab(tab.key)}
										style={{
											minWidth:
												tab.key === "wuxing"
													? "auto"
													: "3rem",
										}}
									>
										{tab.label}
									</button>
								))}
							</div>
						</div>

						{/* Tab Content */}
						<div className="w-full">
							{activeTab === "base" && (
								<div>
									{randomEntry &&
										(typeof randomEntry[1] === "object" &&
										randomEntry[1] !== null ? (
											Object.entries(randomEntry[1]).map(
												([subKey, subValue]) => (
													<p
														className="flex flex-col mb-2 text-sm leading-6 sm:flex-row sm:leading-8 sm:text-base"
														key={
															randomEntry[0] +
															"-" +
															subKey
														}
													>
														<span className="font-bold whitespace-nowrap min-w-0 sm:min-w-22.5 mb-1 sm:mb-0">
															{subKey}：
														</span>
														<span className="whitespace-pre-wrap">
															{String(subValue)}
														</span>
													</p>
												)
											)
										) : (
											<p
												className="flex flex-col text-sm leading-6 sm:flex-row sm:leading-8 sm:text-base"
												key={randomEntry[0]}
											>
												<span className="font-bold whitespace-nowrap min-w-0 sm:min-w-22.5 mb-1 sm:mb-0">
													{randomEntry[0]}：
												</span>
												<span className="whitespace-pre-wrap">
													{String(randomEntry[1])}
												</span>
											</p>
										))}
								</div>
							)}

							{/* Locked Content for other tabs */}
							{["furniture", "taboo", "wuxing"].includes(
								activeTab
							) && (
								<div className="relative w-full">
									<div className="bg-[#e6f3fa] rounded-2xl p-4 sm:p-6 min-h-[150px] sm:min-h-[180px] overflow-hidden">
										<div className="space-y-2 text-sm leading-relaxed sm:text-base">
											<p>{t("enhancementFocus")}</p>
											<p>{t("suggestion1")}</p>
											<p>{t("suggestion2")}</p>
										</div>
										{/* Blur overlay and unlock button */}
										<div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full rounded-2xl bg-[#f5faf7]/80 backdrop-blur-xs">
											<Link href="/price">
												<button className="pointer-events-auto px-4 sm:px-6 py-2 rounded-full bg-[rgba(49,129,97)] text-white font-bold text-sm sm:text-lg shadow-[0_8px_16px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.3)] transition-shadow duration-300">
													{t("unlockButton")}
												</button>
											</Link>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>

					{/* Risk Detection Section */}
					<section className="self-stretch flex flex-col items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-5 text-left text-lg sm:text-2xl lg:text-[40px] text-[#25826c] font-[ABeeZee]">
						<div className="self-stretch flex flex-row items-center justify-start pl-0.5 box-border max-w-full mt-8 sm:mt-4 lg:mt-0">
							<div className="flex flex-row items-center justify-center flex-1 gap-2">
								<div className="flex flex-row items-start justify-start">
									<Image
										className="relative object-cover w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
										loading="lazy"
										width={50}
										height={50}
										alt=""
										src="/images/image-206@2x.jpeg"
									/>
								</div>
								<h2
									className="m-0 justify-center font-semibold leading-6 sm:leading-8 font-[400] z-[1] text-sm sm:text-lg lg:text-[32px] lg:leading-[26px]"
									style={{ fontFamily: '"Noto Serif TC", serif' }}
								>
									{t("riskDetected")}
								</h2>
							</div>
						</div>

						{/* Carousel Container */}
						<div className="w-full rounded-2xl mb-3 sm:mb-5 flex flex-col items-center justify-center pt-0 sm:pt-[31px] lg:pt-[41px] px-0 pb-3 sm:pb-5 box-border relative gap-2 sm:gap-4 lg:gap-[26px] max-w-full z-[2] text-xs sm:text-sm text-[#0a58a6] font-Font-Family">
							{/* Carousel */}
							<div className="relative w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-full">
								{/* Carousel Content */}
								<div className="relative px-2 overflow-hidden rounded-lg">
									{/* Navigation buttons */}
									<button
										onClick={prevSlide}
										className="absolute left-0 sm:left-0 lg:left-2 z-20 p-1.5 sm:p-2 transition-all duration-200 transform -translate-y-1/2 rounded-full shadow-[0_8px_10px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_10px_rgba(0,0,0,0.35)] top-1/2 bg-white/90 hover:bg-white hover:scale-110"
										disabled={currentSlide === 0}
									>
										<svg
											className="w-4 h-4 text-gray-600 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15 19l-7-7 7-7"
											/>
										</svg>
									</button>

									<button
										onClick={nextSlide}
										className="absolute right-0 sm:right-0 lg:right-2 z-20 p-1.5 sm:p-2 transition-all duration-200 transform -translate-y-1/2 rounded-full shadow-[0_8px_10px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_10px_rgba(0,0,0,0.35)] top-1/2 bg-white/90 hover:bg-white hover:scale-110"
										disabled={
											currentSlide ===
											carouselData.length - 1
										}
									>
										<svg
											className="w-4 h-4 text-gray-600 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 5l7 7-7 7"
											/>
										</svg>
									</button>

									{/* Carousel slides */}
									<div
										className="flex transition-transform duration-300 ease-in-out"
										style={{
											transform: `translateX(-${currentSlide * 100}%)`,
										}}
									>
										{carouselData.map((item, index) => (
											<div
												key={index}
												className="flex justify-center flex-shrink-0 w-full px-3 py-2 sm:px-6 lg:px-12 sm:py-4"
											>
												<div
													className={`p-3 sm:p-4 lg:p-6 rounded-lg ${item.bgColor} relative shadow-[0_6px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.18)] transition-shadow duration-300 max-w-full sm:max-w-xl lg:max-w-2xl w-full`}
													style={{ fontFamily: '"Noto Serif TC", serif' }}
												>
													<div
														className={`mb-2 sm:mb-3 lg:mb-4 text-base sm:text-lg lg:text-xl font-bold ${item.titleColor}`}
														style={{ fontFamily: '"Noto Serif TC", serif' }}
													>
														{item.title}:
													</div>
													<div
														className={`text-sm sm:text-base lg:text-lg leading-relaxed ${item.contentColor} ${
															item.title ===
																t(
																	"risks.relationship"
																) ||
															item.title ===
																t(
																	"risks.wealth"
																)
																? "blur-sm"
																: ""
														}`}
														style={{ fontFamily: '"Noto Serif TC", serif' }}
													>
														{item.content}
													</div>

													{/* Unlock overlay for blurred content */}
													{(item.title ===
														t(
															"risks.relationship"
														) ||
														item.title ===
															t(
																"risks.wealth"
															)) && (
														<div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/10">
															<Link href="/price">
																<button
																	className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-white transition-shadow duration-300 rounded-full bg-[rgba(49,129,97)] hover:shadow-xl"
																	style={{
																		boxShadow:
																			"0 4px 15px rgba(0, 0, 0, 0.3)",
																	}}
																>
																	{t(
																		"unlockDetail"
																	)}
																</button>
															</Link>
														</div>
													)}
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</section>
				</>
			</div>
		</div>
	);
}