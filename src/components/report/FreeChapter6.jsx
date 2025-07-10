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
	return (
		<div className="flex items-start justify-center w-full min-h-screen ">
			<div className="w-full max-w-full p-2 mx-auto bg-white lg:w-full sm:p-1 sm:mt-20 rounded-xl">
				<div className="flex flex-col justify-start">
					<p className=" text-lg px-9  text-[#25826c] flex items-center justify-center inline-block mb-5 max-w-full">
						{t("pro.scrollInstruction")}
					</p>
					<p className="font-bold text-4xl px-9 font-boldsm:text-lg text-[#25826c] flex items-center justify-center inline-block mb-5 max-w-full">
						{t("pro.advancedAnalysisTitle")}
					</p>
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
				<div className="flex-1 rounded-t-none rounded-b-[20px] mb-2 flex flex-col items-start justify-start pt-5 sm:pt-[20px] px-2 sm:px-[35px] pb-5 sm:pb-[37px] box-border gap-4 max-w-full z-[1] ">
					{/* Intro */}
					<section className="flex flex-col bg-[#f5faf7] rounded-[20px] p-3 sm:p-5 w-full shadow-md">
						{/* 指數展示 */}
						<div className="w-full mb-6 sm:mb-2 bg-[#f5faf7] pt-4 sm:pt-[31px] px-1 sm:px-[20px] pb-4 sm:pb-[37px] box-border rounded-t-none rounded-b-[20px] z-[1]">
							{/* Mobile: Keep original 2-column grid */}
							<div className="grid grid-cols-2 gap-4 sm:hidden">
								{reportDocData?.yunchengData
									?.slice(0, 5)
									.map((item, index) => (
										<div
											key={index}
											className="flex flex-col items-center w-full mb-2"
										>
											{/* Title and icon at the top */}
											<p
												className="flex items-center mb-2 text-sm font-bold leading-8"
												style={{
													color:
														sections?.[1]
															?.children?.[index]
															?.color ||
														"#20B580",
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
												{sections?.[1]?.children?.[
													index
												]?.title || `运势${index + 1}`}
											</p>
											{/* Score circle */}
											<div
												className="flex flex-col items-center justify-center w-16 h-16 mb-2 border-4 rounded-full"
												style={{
													borderColor:
														sections?.[1]
															?.children?.[index]
															?.color ||
														"#20B580",
													background: "#fff",
													boxShadow:
														"0 6px 20px rgba(0, 0, 0, 0.4)",
												}}
											>
												<span
													className="text-xl font-extrabold"
													style={{
														color:
															sections?.[1]
																?.children?.[
																index
															]?.color ||
															"#20B580",
													}}
												>
													{item.zhishu?.split("/")[0]}
												</span>
												<span
													className="text-xs font-bold"
													style={{
														color:
															sections?.[1]
																?.children?.[
																index
															]?.color ||
															"#20B580",
													}}
												>
													/10
												</span>
											</div>
										</div>
									))}
							</div>

							{/* Desktop: Two rows layout */}
							<div className="hidden sm:block">
								{/* First row: 3 items */}
								<div className="flex items-center justify-between mb-6 px-30">
									{reportDocData?.yunchengData
										?.slice(0, 3)
										.map((item, index) => (
											<div
												key={index}
												className="flex flex-col items-center"
											>
												{/* Title and icon at the top */}
												<p
													className="flex items-center mb-2 text-xl font-bold leading-8"
													style={{
														color:
															sections?.[1]
																?.children?.[
																index
															]?.color ||
															"#20B580",
													}}
												>
													<Image
														src={`/images/report/icon${index}.png`}
														width={24}
														height={24}
														alt=""
														className="mr-1"
													/>
													{sections?.[1]?.children?.[
														index
													]?.title ||
														`运势${index + 1}`}
												</p>
												{/* Score circle */}
												<div
													className="flex flex-col items-center justify-center w-24 h-24 mb-2 border-4 rounded-full"
													style={{
														borderColor:
															sections?.[1]
																?.children?.[
																index
															]?.color ||
															"#20B580",
														background: "#fff",
														boxShadow:
															"0 6px 20px rgba(0, 0, 0, 0.4)",
													}}
												>
													<span
														className="text-4xl font-extrabold"
														style={{
															color:
																sections?.[1]
																	?.children?.[
																	index
																]?.color ||
																"#20B580",
														}}
													>
														{
															item.zhishu?.split(
																"/"
															)[0]
														}
													</span>
													<span
														className="text-base font-bold"
														style={{
															color:
																sections?.[1]
																	?.children?.[
																	index
																]?.color ||
																"#20B580",
														}}
													>
														/10
													</span>
												</div>
											</div>
										))}
								</div>

								{/* Second row: 2 items */}
								<div className="flex items-center px-20 justify-evenly">
									{reportDocData?.yunchengData
										?.slice(3, 5)
										.map((item, index) => (
											<div
												key={index + 3}
												className="flex flex-col items-center"
											>
												{/* Title and icon at the top */}
												<p
													className="flex items-center mb-2 text-xl font-bold leading-8"
													style={{
														color:
															sections?.[1]
																?.children?.[
																index + 3
															]?.color ||
															"#20B580",
													}}
												>
													<Image
														src={`/images/report/icon${index + 3}.png`}
														width={24}
														height={24}
														alt=""
														className="mr-1"
													/>
													{sections?.[1]?.children?.[
														index + 3
													]?.title ||
														`运势${index + 4}`}
												</p>
												{/* Score circle */}
												<div
													className="flex flex-col items-center justify-center w-24 h-24 mb-2 border-4 rounded-full"
													style={{
														borderColor:
															sections?.[1]
																?.children?.[
																index + 3
															]?.color ||
															"#20B580",
														background: "#fff",
														boxShadow:
															"0 6px 20px rgba(0, 0, 0, 0.4)",
													}}
												>
													<span
														className="text-4xl font-extrabold"
														style={{
															color:
																sections?.[1]
																	?.children?.[
																	index + 3
																]?.color ||
																"#20B580",
														}}
													>
														{
															item.zhishu?.split(
																"/"
															)[0]
														}
													</span>
													<span
														className="text-base font-bold"
														style={{
															color:
																sections?.[1]
																	?.children?.[
																	index + 3
																]?.color ||
																"#20B580",
														}}
													>
														/10
													</span>
												</div>
											</div>
										))}
								</div>
							</div>
						</div>
					</section>
					{/* 运势详细内容 */}

					<div className="flex flex-col w-full gap-4">
						{reportDocData?.yunchengData
							?.slice(0, 3) // Changed from slice(0, 2) to slice(0, 3)
							.map((item, index) => (
								<div key={index} className="relative w-full">
									<section
										style={{
											backgroundColor:
												sections?.[1]?.children?.[index]
													?.bgColor || "#F7FAF9",
											overflow: "hidden",
											position: "relative",
										}}
										className={`rounded-[20px] p-5 ${index === 0 ? "shadow-md" : ""}`}
									>
										<div className="flex items-center justify-between">
											<p
												className="flex items-center text-xl font-bold leading-8"
												style={{
													color:
														sections?.[1]
															?.children?.[index]
															?.color ||
														"#20B580",
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
												{sections?.[1]?.children?.[
													index
												]?.title || `运势${index + 1}`}
											</p>
											{index < 5 && (
												<p
													className="flex items-end leading-8"
													style={{
														color:
															sections?.[1]
																?.children?.[
																index
															]?.color ||
															"#20B580",
													}}
												>
													<span className="text-xl font-bold">
														{
															item.zhishu?.split(
																"/"
															)[0]
														}
													</span>
													<span className="text-sm">
														/10
													</span>
												</p>
											)}
										</div>
										<p className="leading-8 text-justify">
											{
												index === 1
													? (() => {
															// Show first two sentences for second section
															const sentences =
																item.content.split(
																	"。"
																);
															if (
																sentences.length >=
																2
															) {
																return (
																	sentences[0] +
																	"。" +
																	sentences[1] +
																	"。"
																);
															} else {
																return (
																	sentences[0] +
																	"。"
																);
															}
														})()
													: item.content // Show full content for first section and third section
											}
										</p>
										{/* Blur overlay for second section - half height */}
										{/* {index === 1 && (
											<div className="absolute left-0 bottom-[-15px] w-full h-1/2 pointer-events-none rounded-b-[20px] bg-gradient-to-t from-white/90 via-white/60 to-transparent backdrop-blur-sm flex items-center justify-center"></div>
										)} */}
										{/* Blur overlay for third section - full height */}
										{index === 2 && (
											<div className="absolute left-0 bottom-0 w-full h-full pointer-events-none rounded-b-[20px] bg-gradient-to-t from-white/95 via-white/70 to-transparent backdrop-blur-sm flex items-center justify-center">
												<Link href="/price">
													<button
														className="pointer-events-auto px-6 py-2 rounded-full bg-[rgba(49,129,97)] text-white font-bold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
														style={{
															position:
																"absolute",
															left: "50%",
															top: "50%",
															transform:
																"translate(-50%, -50%)",
															boxShadow:
																"0 4px 15px rgba(0, 0, 0, 0.4)",
														}}
													>
														{t(
															"pro.unlockAdvancedAnalysis"
														)}
													</button>
												</Link>
											</div>
										)}
									</section>
								</div>
							))}
					</div>
				</div>
				{/* Promo Section */}
				<Promo />
			</div>
		</div>
	);
}
