"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import useReportDoc from "@/app/hooks/useReportDoc";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { get, post, patch } from "@/lib/ajax";
import Promo from "@/components/Promo";

export function FreeChapter6({ locale }) {
	const [userInfo, setUserInfo] = useState(null);
	const t = useTranslations("report");
	const [isLock, setIsLock] = useState(true);
	const [sections, setSections] = useState([]);
	const [anchorList, setAnchorList] = useState([]);

	useEffect(() => {
		let sections = [
			{
				title: t("title1"),
				children: [
					{ title: "年柱" },
					{ title: "月柱" },
					{ title: "日柱" },
					{ title: t("shizhu") },
				],
			},
			{
				title: t("title2"),
				children: [
					{
						title: t("title2-1"),
						color: "#088C6E",
						bgColor: "#F7FAF9",
					},
					{
						title: t("title2-2"),
						color: "#00A637",
						bgColor: "#F5FAF7",
					},
					{
						title: t("title2-3"),
						color: "#0A58A6",
						bgColor: "#F5F8FA",
					},
					{
						title: t("title2-4"),
						color: "#E52E5C",
						bgColor: "#FAF5F6",
					},
					{
						title: t("title2-5"),
						color: "#D9B815",
						bgColor: "#FCFBF5",
					},
					{
						title: t("title2-6"),
						color: "#066952",
						bgColor: "#F7FAF9",
					},
				],
			},
			{
				title: t("title3"),
			},
		];
		let anchorList = [
			{
				id: "section-0",
				title: "第一章：个人命理基础分析",
				isMain: true,
			},
			{
				id: "section-0-0",
				title: "年柱",
				isMain: false,
			},
			{
				id: "section-0-1",
				title: "月柱",
			},
			{ id: "section-0-2", title: "日柱" },
			{ id: "section-0-3", title: "时柱" },

			{
				id: "section-1",
				title: "第二章：流年运程基础分析",
				isMain: true,
			},
			{ id: "section-1-0", title: "整体运势" },
			{ id: "section-1-1", title: "健康运势" },
			{ id: "section-1-2", title: "事业运势" },
			{ id: "section-1-3", title: "感情运势" },
			{ id: "section-1-4", title: "财运运势" },
			{ id: "section-1-5", title: "总结" },
			{
				id: "section-2",
				title: "第三章：流年运程基础分析",
				isMain: true,
			},
			{
				id: "section-3",
				isMain: true,
			},
		];
		if (isLock) {
			setSections([...sections, { title: t("title4") }]);
			setAnchorList(anchorList);
		} else {
			setSections([
				...sections,
				{ title: t("title4") },
				{ title: t("title5") },
				{ title: t("title6") },
			]);

			setAnchorList([
				...anchorList,
				{
					id: "section-4",
					isMain: true,
				},
				{
					id: "section-5",
					isMain: true,
				},
			]);
		}
	}, [isLock]);

	const { loading, reportDocData, assistantData } = useReportDoc(
		locale,
		userInfo
	);
	const { data: session } = useSession();

	useEffect(() => {
		const userId = session?.user?.userId;
		if (userId) {
			const loadData = async () => {
				const {
					status,
					message,
					data: userInfo,
				} = await get(`/api/users/${userId}`);
				if (status == 0) {
					setUserInfo(userInfo);
					setIsLock(userInfo.isLock);
				}
			};
			loadData();
		}
	}, [session?.user?.userId]);

	useEffect(() => {
		console.log("userInfo", userInfo);
		console.log("locale", locale);
	}, [userInfo, locale]);

	useEffect(() => {
		console.log("reportDocData", reportDocData);
	}, [reportDocData]);

	// Component for individual score item with responsive sizing
	const ScoreItem = ({
		item,
		index,
		isMobile = false,
		containerClass = "",
	}) => {
		// More conservative sizing to ensure container fit
		const baseCircleSize = isMobile
			? "w-12 h-12 sm:w-14 sm:h-14"
			: `w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 ${containerClass}`;

		const baseTitleSize = isMobile
			? "text-xs"
			: "text-xs md:text-sm lg:text-sm xl:text-base";

		const baseScoreSize = isMobile
			? "text-sm sm:text-base"
			: "text-sm md:text-base lg:text-lg xl:text-xl";

		const baseScoreSubSize = isMobile
			? "text-xs"
			: "text-xs md:text-xs lg:text-sm xl:text-sm";

		const iconSize = isMobile ? 16 : 18;

		return (
			<div className="flex flex-col items-center max-w-full">
				{/* Title and icon */}
				<p
					className={`flex items-center mb-1 md:mb-2 font-bold leading-tight text-center ${baseTitleSize}`}
					style={{
						color:
							sections?.[1]?.children?.[index]?.color ||
							"#20B580",
					}}
				>
					{index < 5 && (
						<Image
							src={`/images/report/icon${index}.png`}
							width={iconSize}
							height={iconSize}
							alt=""
							className="flex-shrink-0 mr-1"
						/>
					)}
					<span className="max-w-full truncate">
						{sections?.[1]?.children?.[index]?.title ||
							`运势${index + 1}`}
					</span>
				</p>

				{/* Score circle with enhanced shadow */}
				<div
					className={`flex flex-col items-center justify-center border-2 md:border-3 lg:border-4 rounded-full flex-shrink-0 ${baseCircleSize}`}
					style={{
						borderColor:
							sections?.[1]?.children?.[index]?.color ||
							"#20B580",
						background: "#fff",
						boxShadow:
							"0 4px 15px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08)",
					}}
				>
					<span
						className={`font-extrabold leading-none ${baseScoreSize}`}
						style={{
							color:
								sections?.[1]?.children?.[index]?.color ||
								"#20B580",
						}}
					>
						{item.zhishu?.split("/")[0]}
					</span>
					<span
						className={`font-bold leading-none ${baseScoreSubSize}`}
						style={{
							color:
								sections?.[1]?.children?.[index]?.color ||
								"#20B580",
						}}
					>
						/10
					</span>
				</div>
			</div>
		);
	};

	return (
		<div className="flex items-start justify-center w-full min-h-screen ">
			<div className="w-full max-w-full p-2 mx-auto bg-white lg:w-full sm:p-1 sm:mt-16 rounded-xl">
				<div className="flex flex-row justify-between md:mr-10 sm:mr-0">
					{/* <p className=" text-lg px-9  text-[#25826c] flex items-center justify-center inline-block mb-5 max-w-full">
						{t("pro.scrollInstruction")}
					</p> */}
					<div className="flex flex-col items-center w-full gap-3 mb-5 sm:flex-row sm:justify-between sm:gap-0">
						{/* <p className=" text-lg px-9  text-[#25826c] flex items-center justify-center inline-block mb-5 max-w-full">
							{t("pro.scrollInstruction")}
						</p> */}
						<p className="font-bold text-2xl sm:text-4xl px-4 sm:px-9 text-[#25826c] flex items-center justify-center inline-block max-w-full mb-2 sm:mb-0">
							{t("pro.advancedAnalysisTitle")}
						</p>
						<Link
							href="/price"
							className="flex justify-center w-full sm:w-auto"
						>
							<button className="w-full sm:w-auto pointer-events-auto px-3 sm:px-3 py-2 rounded-full bg-[rgba(49,129,97)] hover:bg-green-600 text-white font-bold text-sm sm:text-lg shadow-[0_8px_16px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.3)] transition-all duration-300">
								{t("unlockButton")}
							</button>
						</Link>
					</div>
				</div>
				<div className="flex items-center justify-center mb-5">
					<p className="text-base font-bold leading-8 tracking-normal text-justify px-9">
						<span className="text-[#073E31] font-bold">
							{t("p2-1")}
						</span>
						{t("p2-2")}
					</p>
				</div>

				{/* Card Section */}
				<div className="flex-1 rounded-t-none rounded-b-[20px] mb-2 flex flex-col items-start justify-start pt-5 sm:pt-[20px] px-2 sm:px-[35px] pb-5 sm:pb-[37px] box-border gap-4 max-w-full z-[1]">
					{/* Intro */}
					<section className="flex flex-col bg-[#f5faf7] rounded-[20px] p-3 sm:p-5 w-full shadow-lg">
						{/* 指數展示 - Improved Layout */}
						<div className="w-full mb-6 sm:mb-2 bg-[#f5faf7] pt-4 sm:pt-[31px] px-2 sm:px-[20px] pb-8 sm:pb-[50px] box-border rounded-t-none rounded-b-[20px] z-[1] overflow-hidden">
							{/* Mobile Layout: Always 3+2 */}
							<div className="block sm:hidden">
								{/* First row: 3 items */}
								<div className="flex items-center justify-between px-1 mb-4">
									{reportDocData?.yunchengData
										?.slice(0, 3)
										.map((item, index) => (
											<div
												key={index}
												className="flex-1 max-w-[30%] px-1"
											>
												<ScoreItem
													item={item}
													index={index}
													isMobile={true}
												/>
											</div>
										))}
								</div>

								{/* Second row: 2 items */}
								<div className="flex items-center justify-center gap-8">
									{reportDocData?.yunchengData
										?.slice(3, 5)
										.map((item, index) => (
											<div
												key={index + 3}
												className="flex-1 max-w-[40%] px-1"
											>
												<ScoreItem
													item={item}
													index={index + 3}
													isMobile={true}
												/>
											</div>
										))}
								</div>
							</div>

							{/* Desktop Layout: Responsive single row or two rows */}
							<div className="hidden sm:block">
								{/* Container with improved responsive logic */}
								<div className="w-full scores-container">
									{/* Single row layout for large screens */}
									<div className="single-row-layout">
										<div className="flex items-center justify-between gap-2 px-2 py-4 md:gap-3 lg:gap-4 xl:gap-6 md:px-4 md:py-6">
											{reportDocData?.yunchengData
												?.slice(0, 5)
												.map((item, index) => (
													<div
														key={index}
														className="flex-1 min-w-0 max-w-[18%] px-1"
													>
														<ScoreItem
															item={item}
															index={index}
															isMobile={false}
															containerClass="single-row-circle"
														/>
													</div>
												))}
										</div>
									</div>

									{/* Two rows layout for medium screens */}
									<div
										className="two-rows-layout"
										style={{ display: "none" }}
									>
										{/* First row: 3 items */}
										<div className="flex items-center justify-between gap-2 px-2 mb-4 md:gap-4 md:px-4 md:mb-6">
											{reportDocData?.yunchengData
												?.slice(0, 3)
												.map((item, index) => (
													<div
														key={index}
														className="flex-1 min-w-0 max-w-[30%] px-1"
													>
														<ScoreItem
															item={item}
															index={index}
															isMobile={false}
															containerClass="two-row-circle"
														/>
													</div>
												))}
										</div>

										{/* Second row: 2 items */}
										<div className="flex items-center justify-center gap-8 md:gap-12">
											{reportDocData?.yunchengData
												?.slice(3, 5)
												.map((item, index) => (
													<div
														key={index + 3}
														className="flex-1 min-w-0 max-w-[40%] px-1"
													>
														<ScoreItem
															item={item}
															index={index + 3}
															isMobile={false}
															containerClass="two-row-circle"
														/>
													</div>
												))}
										</div>
									</div>
								</div>
							</div>

							{/* Enhanced CSS for responsive switching with container-based sizing */}
							<style jsx>{`
								.scores-container {
									width: 100%;
									max-width: 100%;
									overflow: hidden;
								}

								/* Default: Show single row */
								.single-row-layout {
									display: block;
								}

								.two-rows-layout {
									display: none;
								}

								/* Ensure circles fit within their containers */
								.single-row-circle {
									max-width: 100%;
									max-height: 100%;
								}

								.two-row-circle {
									max-width: 100%;
									max-height: 100%;
								}

								/* Switch to two rows for medium screens where single row might be cramped */
								@media (min-width: 640px) and (max-width: 1199px) {
									.single-row-layout {
										display: none !important;
									}

									.two-rows-layout {
										display: block !important;
									}
								}

								/* For large screens, ensure single row is shown */
								@media (min-width: 1200px) {
									.single-row-layout {
										display: block !important;
									}

									.two-rows-layout {
										display: none !important;
									}
								}

								/* Additional responsive adjustments for very small desktop screens */
								@media (min-width: 640px) and (max-width: 768px) {
									.single-row-layout .flex {
										gap: 0.25rem !important;
									}
									.two-rows-layout .flex {
										gap: 0.5rem !important;
									}
								}

								/* Ensure no overflow on any screen size */
								@media (max-width: 639px) {
									.scores-container {
										padding: 0 0.25rem;
									}
								}
							`}</style>
						</div>
					</section>

					{/* 运势详细内容 */}
					<div className="flex flex-col w-full gap-4">
						{reportDocData?.yunchengData?.map((item, index) => (
							<div key={index} className="relative w-full">
								<section
									style={{
										backgroundColor:
											sections?.[1]?.children?.[index]
												?.bgColor || "#F7FAF9",
										overflow: "hidden",
										position: "relative",
										...(index > 0 && { height: "250px" }),
									}}
									className={`rounded-[20px] p-5 ${index === 0 ? "shadow-lg" : "shadow-md"}`}
								>
									<div className="flex items-center justify-between mb-3">
										<p
											className="flex items-center text-xl font-bold leading-8"
											style={{
												color:
													sections?.[1]?.children?.[
														index
													]?.color || "#20B580",
											}}
										>
											{index < 5 && (
												<Image
													src={`/images/report/icon${index}.png`}
													width={24}
													height={24}
													alt=""
													className="mr-1"
												/>
											)}
											{sections?.[1]?.children?.[index]
												?.title || `运势${index + 1}`}
										</p>
										{index < 5 && (
											<p
												className="flex items-end leading-8"
												style={{
													color:
														sections?.[1]
															?.children?.[index]
															?.color ||
														"#20B580",
												}}
											>
												<span className="text-xl font-bold">
													{item.zhishu?.split("/")[0]}
												</span>
												<span className="text-sm">
													/10
												</span>
											</p>
										)}
									</div>
									<p className="leading-8 text-justify">
										{item.content}
									</p>

									{/* Enhanced blur overlay for sections after the first one */}
									{index > 0 && (
										<div
											className="absolute left-0 bottom-0 w-full pointer-events-none rounded-b-[20px]"
											style={{
												height: "64%",
												background:
													"linear-gradient(to top, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 20%, rgba(255,255,255,0.8) 40%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.1) 80%, transparent 100%)",
												backdropFilter: "blur(2.6px)",
												WebkitBackdropFilter:
													"blur(2.6px)",
											}}
										/>
									)}
								</section>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
