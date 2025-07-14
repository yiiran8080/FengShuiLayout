"use client";
import Navbar from "@/components/Navbar";
import { useRef, useState, useEffect, Suspense, use } from "react";
import { useSearchParams, useParams, useRouter } from "next/navigation";
import useMobile from "@/app/hooks/useMobile";
import useReportDoc from "@/app/hooks/useReportDoc";
import Image from "next/image";
import emitter from "@/lib/emitter";
import { EVENT_TRANSLATE_STATUS } from "@/types/constants";
import { useTranslations } from "next-intl";
import UnlockButton from "@/components/UnlockButton";
import Chapter3 from "./report/Chapter3";
import MingLi from "./report/MingLi";
import LiuNian from "./report/LiuNian";
import Chapter6 from "./report/Chapter6";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "react-toastify";
import { useReactToPrint } from "react-to-print";
import { useSession } from "next-auth/react";
import { get, post, patch } from "@/lib/ajax";
import { AntdSpin } from "antd-spin";
const wuxingColorMap = {
	金: "#CCBB00",
	木: "#00991B",
	水: "#0088CC",
	火: "#E52918",
	土: "#BF8F00",
};

// you can use a function to return the target element besides using React refs

export default function ReportPage({ locale }) {
	const isMobile = useMobile();
	const router = useRouter();
	const t = useTranslations("report");
	const t2 = useTranslations("toast");
	const contentRef = useRef(null);

	const sectionRefs = useRef([]);
	const [sections, setSections] = useState([]);
	const [anchorList, setAnchorList] = useState([]);

	const [activeIndex, setActiveIndex] = useState(0);
	const [showMenu, setShowMenu] = useState(false);
	const hideMenuTimer = useRef(null);
	const [isPrinting, setIsPrinting] = useState(false);
	const [isLock, setIsLock] = useState(true);
	const [userInfo, setUserInfo] = useState(null);
	const [openedNianzhuIndex, setOpenedNianzhuIndex] = useState(null);
	const [openedYuezhuIndex, setOpenedYuezhuIndex] = useState(null);
	const [openedRizhuIndex, setOpenedRizhuIndex] = useState(null);
	const [openedShizhuIndex, setOpenedShizhuIndex] = useState(null);
	const nianzhuRefs = useRef([]);
	const yuezhuRefs = useRef([]);
	const rizhuRefs = useRef([]);
	const shizhuRefs = useRef([]);
	const [mingLiData, setMingLiData] = useState(null);
	const [liuNianData, setLiuNianData] = useState(null);
	const [jiajuProData, setJiaJuData] = useState(null);
	// const [proReportDataObj, setProReportDataObj] = useState({});
	const { loading, reportDocData, assistantData } = useReportDoc(
		locale,
		userInfo
	);

	const handlePrint = useReactToPrint({
		contentRef,
		pageStyle: `
            @page { 
                size: A4;
                margin: 20mm 15mm 20mm 15mm;  /* top right bottom left margins */
            }
            @media print {
                body, html {
                    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&display=swap');
                    height: auto;
                    font-family: 'SimSun', 'Microsoft YaHei', sans-serif;
                    overflow: initial !important;
                    margin: 0;
                    zoom: 100%;
                }
                .hidden-on-print { display: none !important; }
                .show-on-print { display: block !important;}
                
                /* Page breaks for chapters */
                .chapter-page-break {
                    page-break-before: always !important;
                }
                
                /* Show all tab content when printing */
                .tab-content-print {
                    max-height: none !important;
                    overflow: visible !important;
                    opacity: 1 !important;
                    display: block !important;
                }
                
                /* Hide interactive buttons when printing */
                .interactive-tabs {
                    display: none !important;
                }
                
                .page-break {
                    margin-top: 1rem;
                    display: block;
                    page-break-before: auto;
                }
                .canvasImage{
                    page-break-inside: avoid;
                    break-inside: avoid;
                }
                img{
                    max-width: 100% !important;
                    height: auto !important;
                    page-break-inside: auto;
                    break-inside: auto;
                }
      }
        `,
		removeAfterPrint: true,
		documentTitle: "Harmoniq风水家居报告",
	});
	// useEffect(() => {
	//     //触发事件，languageToggle组件监听
	//     emitter.emit(EVENT_TRANSLATE_STATUS, transStatus)
	// }, [transStatus])
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

	//sectionRefs.current = anchorList.map(() => null);
	const onPrint = () => {
		setIsPrinting(true);
		setTimeout(() => {
			handlePrint();
		}, 500);
		setTimeout(() => {
			setIsPrinting(false);
		}, 3000);
	};
	// 滚动监听，高亮当前章节
	useEffect(() => {
		const handleScroll = () => {
			const offsets = sectionRefs.current.map((ref) =>
				ref ? ref.getBoundingClientRect().top : Infinity
			);
			const index = offsets.findIndex((offset) => offset > 80); // 80为Navbar高度
			setActiveIndex(
				index === -1 ? anchorList.length - 1 : Math.max(0, index - 1)
			);
		};
		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

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
	// 目录失焦自动隐藏
	useEffect(() => {
		const handleClick = (e) => {
			if (
				!e.target.closest(".report-menu") &&
				!e.target.closest(".progress-indicator")
			) {
				setShowMenu(false);
			}
		};
		window.addEventListener("mousedown", handleClick);
		return () => window.removeEventListener("mousedown", handleClick);
	}, []);

	//保存MingLi数据
	useEffect(() => {
		const saveMingLi = async () => {
			const userId = session?.user?.userId;
			if (!userId || !mingLiData) return;

			console.log("💾 Saving MingLi data:", mingLiData);
			const { status } = await patch(
				`/api/reportUserDoc/${userId}/${locale == "zh-CN" ? "zh" : "tw"}`,
				{ mingLiData }
			);
			console.log("💾 MingLi save result:", status);
		};
		if (mingLiData) {
			saveMingLi();
		}
	}, [mingLiData]);

	//保存LiuNian数据
	useEffect(() => {
		const saveLiuNian = async () => {
			const userId = session?.user?.userId;
			if (!userId || !liuNianData) return;

			console.log("💾 Saving LiuNian data:", liuNianData);
			const { status } = await patch(
				`/api/reportUserDoc/${userId}/${locale == "zh-CN" ? "zh" : "tw"}`,
				{ liuNianData }
			);
			console.log("💾 LiuNian save result:", status);
		};
		if (liuNianData) {
			saveLiuNian();
		}
	}, [liuNianData]);

	//保存JiajuPro数据
	useEffect(() => {
		const saveJiajuPro = async () => {
			const userId = session?.user?.userId;
			if (!userId || !jiajuProData) return;

			console.log("💾 Saving JiajuPro data:", jiajuProData);
			const { status } = await patch(
				`/api/reportUserDoc/${userId}/${locale == "zh-CN" ? "zh" : "tw"}`,
				{ jiajuProData }
			);
			console.log("💾 JiajuPro save result:", status);

			// Only update genStatus when all premium data is saved
			if (status === 0 && mingLiData && liuNianData) {
				await post(`/api/users/${userId}`, {
					genStatus: "done",
				});
			}
		};
		if (jiajuProData) {
			saveJiajuPro();
		}
	}, [jiajuProData]);

	// 进度指示器hover/点击显示目录
	const handleProgressEnter = () => {
		clearTimeout(hideMenuTimer.current);
		setShowMenu(true);
	};
	// const handleProgressLeave = () => {
	//     hideMenuTimer.current = setTimeout(() => setShowMenu(false), 200);
	// };

	// 目录点击跳转
	const handleAnchorClick = (idx) => {
		sectionRefs.current[idx]?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
		// setShowMenu(false);
	};

	if (loading) {
		return (
			<div className="space-y-8 mt-25">
				<Skeleton className="h-4 w-[80%]" />
				<Skeleton className="h-4 w-[70%]" />
				<Skeleton className="h-4 w-[80%]" />
				<Skeleton className="h-4 w-[70%]" />
			</div>
		);
	}

	if (!reportDocData) {
		toast.error(t("error"));
		router.push("/design");
		return;
	}

	// console.log('reportDocData:', activeIndex);

	return (
		<div className="relative min-h-screen bg-white">
			{!isPrinting && <Navbar from="report" />}

			{/* 右侧进度指示器+目录 */}
			<div className="fixed z-10 right-4 top-32">
				{!isPrinting && (
					<a
						href="#"
						className="absolute right-0 py-1 text-center text-white hidden-on-print rounded-3xl w-25 -top-12 bg-primary"
						onClick={onPrint}
					>
						{t("download")}
					</a>
				)}
				{/* 进度指示器 */}
				<div
					className="flex flex-col items-center gap-2 cursor-pointer select-none progress-indicator"
					onMouseEnter={handleProgressEnter}
					// onMouseLeave={handleProgressLeave}
					onClick={handleProgressEnter}
				>
					{anchorList.map((item, idx) => (
						<div
							key={item.id}
							className={`transition-all duration-200 ${
								item.isMain ? "w-5 h-5" : "w-2 h-2"
							} rounded-full  ${
								activeIndex === idx
									? "bg-[#20B580]"
									: "bg-[#E7F2EE] "
							}`}
							style={{ margin: item.isMain ? "8px 0" : "3px 0" }}
						/>
					))}
				</div>
				{/* 目录结构 */}
				{showMenu && (
					<div
						className="absolute top-0 right-0 report-menu w-56 bg-white shadow-lg rounded-lg py-4 px-4 text-sm max-h-[70vh] overflow-y-auto"
						tabIndex={-1}
					>
						{sections.map((section, i) => (
							<div key={section.title}>
								<div
									className={`text-sm mb-1 cursor-pointer ${
										activeIndex ===
										anchorList.findIndex(
											(a) => a.id === `section-${i}`
										)
											? "text-[#20B580]"
											: ""
									}`}
									onClick={() =>
										handleAnchorClick(
											anchorList.findIndex(
												(a) => a.id === `section-${i}`
											)
										)
									}
								>
									{section.title}
								</div>
								{section.children?.map((child, j) => (
									<div
										key={child.title}
										className={`text-sm pl-4 py-1 cursor-pointer ${
											activeIndex ===
											anchorList.findIndex(
												(a) =>
													a.id === `section-${i}-${j}`
											)
												? "text-[#20B580]"
												: "text-gray-700"
										}`}
										onClick={() =>
											handleAnchorClick(
												anchorList.findIndex(
													(a) =>
														a.id ===
														`section-${i}-${j}`
												)
											)
										}
									>
										{child.title}
									</div>
								))}
							</div>
						))}
					</div>
				)}
			</div>
			{/* 正文内容 */}

			<div ref={contentRef}>
				{/* 第一章 四柱*/}
				<div key="section-0" className="mx-auto md:max-w-250 md:px-5">
					<h1
						ref={(el) => (sectionRefs.current[0] = el)}
						className="md:text-[40px] text-[28px] text-center font-bold my-10 md:mt-30 md:px-0 px-5 text-[#073E31]"
						id={`section-0`}
					>
						{sections[0].title}
					</h1>
					<p className="px-5 font-bold leading-8 tracking-normal text-justify md:px-0">
						<span className="text-[#073E31]">{t("p1-1")}</span>
						{t("p1-2")}
						<span className="text-[#073E31]">{t("p1-3")}</span>。
						<br />
						{t("p1-4")}
					</p>

					{/* 年柱 */}
					<section className="md:rounded-[26px] rounded-none bg-gradient-to-br from-white via-[#e8f7ef] to-[#cbead6] p-8 md:mt-8 mt-2">
						{" "}
						<h2
							id={`section-0-1`}
							ref={(el) => (sectionRefs.current[1] = el)}
							className="text-[28px] text-[#073E31] font-bold mb-3"
						>
							年柱
						</h2>
						<p className="mb-6 leading-8 text-justify">
							{t("p1-5")}
						</p>
						{/* Tag buttons */}
						<div className="flex flex-wrap gap-3 mb-6 interactive-tabs">
							{Object.entries(reportDocData.nianzhuData).map(
								([key, value], index) => (
									<button
										key={index}
										className={`px-4 py-2 rounded-full font-bold border transition-all duration-200 ${
											openedNianzhuIndex === index
												? "bg-[#20B580] text-white border-[#20B580]"
												: "bg-white text-[#20B580] border-[#20B580]"
										}`}
										style={{
											color:
												openedNianzhuIndex === index
													? "#fff"
													: wuxingColorMap[
															key.slice(-1)
														],
											borderColor:
												wuxingColorMap[key.slice(-1)],
										}}
										onClick={() => {
											setOpenedNianzhuIndex(
												openedNianzhuIndex === index
													? null
													: index
											);
										}}
									>
										{key}
									</button>
								)
							)}
						</div>
						{/* Dropdown content */}
						{Object.entries(reportDocData.nianzhuData).map(
							([key, value], index) => (
								<div
									key={index}
									ref={(el) =>
										(nianzhuRefs.current[index] = el)
									}
									className={`flex justify-center mt-4 ${isPrinting ? "tab-content-print" : ""}`}
									style={
										isPrinting
											? {}
											: {
													maxHeight:
														openedNianzhuIndex ===
														index
															? 500
															: 0,
													overflow: "hidden",
													transition:
														"max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s",
													opacity:
														openedNianzhuIndex ===
														index
															? 1
															: 0,
												}
									}
								>
									<section
										className={`${index !== 2 && "lg:max-w-125"} flex-grow`}
									>
										<p
											className={`leading-8 text-xl font-bold text-[#073E31]`}
											style={{
												color: wuxingColorMap[
													key.slice(-1)
												],
											}}
										>
											{key}
										</p>
										<p className="leading-8 text-justify">
											{value}
										</p>
									</section>
									{index !== 2 && (
										<div
											className="flex items-center justify-end ml-4"
											style={{
												marginRight: "-40px",
												zIndex: 1,
											}}
										>
											<Image
												className="object-contain w-105 h-75"
												priority
												src={`/images/report/${key.slice(-1)}.png`}
												alt={key}
												width={420}
												height={320}
											/>
										</div>
									)}
								</div>
							)
						)}
					</section>
					{/* 月柱 */}
					<section className="md:rounded-[26px] rounded-none bg-gradient-to-br from-white via-[#e8f7ef] to-[#cbead6] p-8 md:mt-8 mt-2">
						<h2
							id={`section-0-2`}
							ref={(el) => (sectionRefs.current[2] = el)}
							className="text-[28px] text-[#073E31] font-bold mb-3"
						>
							月柱
						</h2>
						<p className="mb-6 leading-8 text-justify">
							{t("p1-6")}
						</p>
						{/* Tag buttons */}
						<div className="flex flex-wrap gap-3 mb-6 interactive-tabs">
							{Object.entries(reportDocData.yuezhuData).map(
								([key, value], index) => (
									<button
										key={index}
										className={`px-4 py-2 rounded-full font-bold border transition-all duration-200 ${
											openedYuezhuIndex === index
												? "bg-[#20B580] text-white border-[#20B580]"
												: "bg-white text-[#20B580] border-[#20B580]"
										}`}
										style={{
											color:
												openedYuezhuIndex === index
													? "#fff"
													: wuxingColorMap[
															key.slice(-1)
														],
											borderColor:
												wuxingColorMap[key.slice(-1)],
										}}
										onClick={() => {
											setOpenedYuezhuIndex(
												openedYuezhuIndex === index
													? null
													: index
											);
										}}
									>
										{key}
									</button>
								)
							)}
						</div>
						{/* Dropdown content */}
						{Object.entries(reportDocData.yuezhuData).map(
							([key, value], index) => (
								<div
									key={index}
									ref={(el) =>
										(yuezhuRefs.current[index] = el)
									}
									className={`flex justify-center mt-4 ${isPrinting ? "tab-content-print" : ""}`}
									style={
										isPrinting
											? {}
											: {
													maxHeight:
														openedYuezhuIndex ===
														index
															? 500
															: 0,
													overflow: "hidden",
													transition:
														"max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s",
													opacity:
														openedYuezhuIndex ===
														index
															? 1
															: 0,
												}
									}
								>
									<section
										className={`${index !== 2 && "lg:max-w-125"} flex-grow`}
									>
										<p
											className="leading-8 text-xl font-bold text-[#073E31]"
											style={{
												color: wuxingColorMap[
													key.slice(-1)
												],
											}}
										>
											{key}
										</p>
										<p className="leading-8 text-justify">
											{value}
										</p>
									</section>
									{index !== 2 && (
										<div
											className="flex items-center justify-end ml-4"
											style={{
												marginRight: "-40px", // adjust as needed
												zIndex: 1,
											}}
										>
											<Image
												className="object-contain w-105 h-75"
												priority
												src={`/images/report/${key.slice(-1)}.png`}
												alt={key}
												width={420}
												height={320}
											/>
										</div>
									)}
								</div>
							)
						)}
					</section>
					{/* 日柱 */}
					<section className="md:rounded-[26px] rounded-none bg-gradient-to-br from-white via-[#e8f7ef] to-[#cbead6] p-8 md:mt-8 mt-2">
						<h2
							id={`section-0-3`}
							ref={(el) => (sectionRefs.current[3] = el)}
							className="text-[28px] text-[#073E31] font-bold mb-3"
						>
							日柱
						</h2>
						<p className="mb-6 leading-8 text-justify">
							{t("p1-7")}
						</p>
						{/* Tag buttons */}
						<div className="flex flex-wrap gap-3 mb-6 interactive-tabs">
							{Object.entries(reportDocData.rizhuData).map(
								([key, value], index) => (
									<button
										key={index}
										className={`px-4 py-2 rounded-full font-bold border transition-all duration-200 ${
											openedRizhuIndex === index
												? "bg-[#20B580] text-white border-[#20B580]"
												: "bg-white text-[#20B580] border-[#20B580]"
										}`}
										style={{
											color:
												openedRizhuIndex === index
													? "#fff"
													: wuxingColorMap[
															key.slice(-1)
														],
											borderColor:
												wuxingColorMap[key.slice(-1)],
										}}
										onClick={() => {
											setOpenedRizhuIndex(
												openedRizhuIndex === index
													? null
													: index
											);
											// Remove the scrolling behavior
										}}
									>
										{key}
									</button>
								)
							)}
						</div>
						{/* Dropdown content */}
						{Object.entries(reportDocData.rizhuData).map(
							([key, value], index) => (
								<div
									key={index}
									ref={(el) =>
										(rizhuRefs.current[index] = el)
									}
									className={`flex justify-center mt-4 ${isPrinting ? "tab-content-print" : ""}`}
									style={
										isPrinting
											? {}
											: {
													maxHeight:
														openedRizhuIndex ===
														index
															? 500
															: 0,
													overflow: "hidden",
													transition:
														"max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s",
													opacity:
														openedRizhuIndex ===
														index
															? 1
															: 0,
												}
									}
								>
									<section
										className={`${index !== 2 && "lg:max-w-125"} flex-grow`}
									>
										<p
											className="leading-8 text-xl font-bold text-[#073E31]"
											style={{
												color: wuxingColorMap[
													key.slice(-1)
												],
											}}
										>
											{key}
										</p>
										<p className="leading-8 text-justify">
											{value}
										</p>
									</section>
									{index !== 2 && (
										<div
											className="flex items-center justify-end ml-4"
											style={{
												marginRight: "-40px",
												zIndex: 1,
											}}
										>
											<Image
												className="object-contain w-105 h-75"
												priority
												src={`/images/report/${key.slice(-1)}.png`}
												alt={key}
												width={420}
												height={320}
											/>
										</div>
									)}
								</div>
							)
						)}
					</section>

					{/* 时柱 */}
					<section className="md:rounded-[26px] rounded-none bg-gradient-to-br from-white via-[#e8f7ef] to-[#cbead6] p-8 md:mt-8 mt-2">
						<h2
							id={`section-0-4`}
							ref={(el) => (sectionRefs.current[4] = el)}
							className="text-[28px] text-[#073E31] font-bold mb-3"
						>
							{t("shizhu")}
						</h2>
						<p className="mb-6 leading-8 text-justify">
							{t("p1-8")}
						</p>
						{/* Tag buttons */}
						<div className="flex flex-wrap gap-3 mb-6 interactive-tabs">
							{Object.entries(reportDocData.shizhuData).map(
								([key, value], index) => (
									<button
										key={index}
										className={`px-4 py-2 rounded-full font-bold border transition-all duration-200 ${
											openedShizhuIndex === index
												? "bg-[#20B580] text-white border-[#20B580]"
												: "bg-white text-[#20B580] border-[#20B580]"
										}`}
										style={{
											color:
												openedShizhuIndex === index
													? "#fff"
													: wuxingColorMap[
															key.slice(-1)
														],
											borderColor:
												wuxingColorMap[key.slice(-1)],
										}}
										onClick={() => {
											setOpenedShizhuIndex(
												openedShizhuIndex === index
													? null
													: index
											);
										}}
									>
										{key}
									</button>
								)
							)}
						</div>
						{/* Dropdown content */}
						{Object.entries(reportDocData.shizhuData).map(
							([key, value], index) => (
								<div
									key={index}
									ref={(el) =>
										(shizhuRefs.current[index] = el)
									}
									className={`flex justify-center mt-4 ${isPrinting ? "tab-content-print" : ""}`}
									style={
										isPrinting
											? {}
											: {
													maxHeight:
														openedShizhuIndex ===
														index
															? 500
															: 0,
													overflow: "hidden",
													transition:
														"max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s",
													opacity:
														openedShizhuIndex ===
														index
															? 1
															: 0,
												}
									}
								>
									<section
										className={`${index !== 2 && "lg:max-w-125"} flex-grow`}
									>
										<p
											className="leading-8 text-xl font-bold text-[#073E31]"
											style={{
												color: wuxingColorMap[
													key.slice(-1)
												],
											}}
										>
											{key}
										</p>
										<p className="leading-8 text-justify">
											{value}
										</p>
									</section>
									{index !== 2 && (
										<div
											className="flex items-center justify-end ml-4"
											style={{
												marginRight: "-40px",
												zIndex: 1,
											}}
										>
											<Image
												className="object-contain w-105 h-75"
												priority
												src={`/images/report/${key.slice(-1)}.png`}
												alt={key}
												width={420}
												height={320}
											/>
										</div>
									)}
								</div>
							)
						)}
					</section>
					{/* <div className="items-center px-6 mt-10 md:flex md:p-0">
						<p>
							<span className="text-[#FF531A]">*</span>{" "}
							{t("p1-9")}
							<span className="font-bold">{t("p1-10")}</span>
						</p>
						{isLock && (
							<UnlockButton className="bg-[#096E56] text-white md:ml-2 w-full md:w-auto mt-5 md:mt-0 block md:inline text-center" />
						)}
					</div> */}
				</div>
				{/* 第二章 流年运程解析 */}
				<div
					key="section-1"
					className="relative mx-auto max-w-250 md:px-5 chapter-page-break"
				>
					<h1
						ref={(el) => (sectionRefs.current[5] = el)}
						className="md:text-[40px] text-[28px] text-center font-bold md:mt-18 mt-10 mb-10 md:px-0 px-5 text-[#073E31]"
						id={`section-1`}
					>
						{sections[1].title}
					</h1>
					<p className="px-5 font-bold leading-8 tracking-normal text-justify md:px-0">
						<span className="text-[#073E31]">{t("p2-1")}</span>
						{t("p2-2")}
					</p>

					{/* 指數展示 */}
					<div className="flex flex-wrap justify-center gap-3 px-5 mt-8 mb-8 sm:gap-4 md:gap-6 md:px-0 md:justify-between">
						{reportDocData.yunchengData
							.slice(0, 5)
							.map((item, index) => (
								<div
									key={index}
									className="flex flex-col items-center min-w-0 flex-1 max-w-[calc(50%-6px)] sm:max-w-[calc(33.333%-8px)] md:max-w-none"
								>
									<div
										className="flex flex-col items-center justify-center w-16 h-16 mb-2 border-2 rounded-full sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 sm:border-3 md:border-4"
										style={{
											borderColor:
												sections[1].children[index]
													.color,
											background: "#fff",
										}}
									>
										<span
											className="text-xl font-extrabold sm:text-2xl md:text-4xl lg:text-5xl"
											style={{
												color: sections[1].children[
													index
												].color,
											}}
										>
											{item.zhishu?.split("/")[0]}
										</span>
										<span
											className="text-xs font-bold sm:text-sm md:text-base lg:text-lg"
											style={{
												color: sections[1].children[
													index
												].color,
											}}
										>
											/10
										</span>
									</div>
									{/* Optional: Add labels below for mobile */}
									<span className="mt-1 text-xs text-center text-gray-600 sm:text-sm md:hidden">
										{sections[1].children[index].title}
									</span>
								</div>
							))}
					</div>

					<div className="relative">
						<div>
							{reportDocData.yunchengData.map((item, index) => {
								return (
									<section
										style={{
											backgroundColor:
												sections[1].children[index]
													.bgColor,
										}}
										className="md:rounded-[26px] rounded-none md:p-8 p-5 md:mt-10 mt-10"
									>
										<div className="flex items-center justify-between">
											<p
												ref={(el) =>
													(sectionRefs.current[
														6 + index
													] = el)
												}
												id={`section-1-${index}`}
												className={`leading-8 text-xl font-bold flex items-center`}
												style={{
													color: sections[1].children[
														index
													].color,
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
												{
													sections[1].children[index]
														.title
												}
											</p>
											{index < 5 && (
												<p
													className={`leading-8 flex items-end`}
													style={{
														color: sections[1]
															.children[index]
															.color,
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
											{item.content}
										</p>
									</section>
								);
							})}
						</div>
					</div>
				</div>
				{/* 第三章 家居风水解析 */}
				<div
					key="section-2"
					className="mx-auto md:max-w-250 md:px-5 chapter-page-break"
				>
					<h1
						ref={(el) => (sectionRefs.current[12] = el)}
						className="md:text-[40px] text-[28px] text-center font-bold md:mt-18 mt-10 mb-10 md:px-0 px-5 text-[#073E31]"
						id={`section-2`}
					>
						{sections[2].title}
					</h1>
					<p className="px-5 mb-8 font-bold leading-8 tracking-normal text-justify md:px-0">
						<span className="text-[#073E31]">{t("p3-1")}</span>
						{t("p3-2")}
						<br />
						{t("p3-3")}
						<span className="text-[#073E31]"> {t("p3-4")}</span>
						{t("p3-5")}
					</p>

					<Chapter3
						locale={locale}
						onSaveData={setJiaJuData}
						userInfo={userInfo}
						jiajuProDataString={JSON.stringify(
							reportDocData.jiajuProData || undefined
						)}
						assistantDataString={JSON.stringify(
							assistantData.jiajuProData
						)}
						jiajuDataString={JSON.stringify(
							reportDocData.jiajuData
						)}
						isPrinting={isPrinting}
					/>
				</div>

				{/* 第四章 个人命理进阶解析 */}
				<div
					key="section-3"
					className="relative mx-auto md:max-w-250 md:px-5 chapter-page-break"
				>
					<h1
						ref={(el) => (sectionRefs.current[13] = el)}
						className="md:text-[40px] text-[28px] text-center font-bold md:mt-18 mt-10 mb-10 md:px-0 px-5 text-[#073E31]"
						id={`section-3`}
					>
						{sections[3]?.title}
					</h1>
					<div className="relative">
						<div>
							<MingLi
								locale={locale}
								onSaveData={setMingLiData}
								userInfo={userInfo}
								mingLiDataString={JSON.stringify(
									reportDocData.mingLiData || undefined
								)}
								assistantDataString={JSON.stringify(
									assistantData.mingLiData
								)}
								isPrinting={isPrinting}
							/>
						</div>
					</div>
				</div>

				{/* 第五章 流年运程进阶解析
				{!isLock && (
					<div key="section-4">
						<h1
							ref={(el) => (sectionRefs.current[14] = el)}
							className="md:text-[40px] text-[28px] text-center font-bold md:mt-18 mt-10 mb-10 md:px-0 px-5 text-[#073E31]"
							id={`section-4`}
						>
							{sections[4]?.title}
						</h1>
						<LiuNian
							locale={locale}
							onSaveData={setLiuNianData}
							userInfo={userInfo}
							liuNianDataString={JSON.stringify(
								reportDocData.liuNianData || undefined
							)}
							assistantDataString={JSON.stringify(
								assistantData.liuNianData
							)}
							isPrinting={isPrinting}
						/>
					</div>
				)} */}
				{/* 第六章 家居进阶解析 */}
				{/* <div
					key="section-5"
					className="relative mx-auto md:max-w-250 md:px-5"
				>
					<h1
						ref={(el) => (sectionRefs.current[15] = el)}
						className="md:text-[40px] text-[28px] text-center font-bold md:mt-18 mt-10 mb-10 md:px-0 px-5 text-[#073E31]"
						id={`section-5`}
					>
						{sections[5]?.title}
					</h1>
					<div className="relative">
						{isLock && (
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[90%] md:w-[480px] bg-white rounded-xl shadow-lg border border-[#20B580] p-6 flex flex-col items-center">
								<div className="text-xl font-bold text-[#20B580] mb-2">
									立即解鎖
								</div>
								<div className="mb-4 text-base text-center text-gray-700">
									取得完整報告，解鎖符合你性格的 10
									種職涯路徑。
								</div>
								<button
									className="bg-[#20B580] hover:bg-[#168c6e] text-white font-bold py-2 px-6 rounded-full text-lg transition"
									onClick={() =>
										(window.location.href = "/payment")
									}
								>
									解鎖全部結果
								</button>
							</div>
						)}
						<div
							className={
								isLock
									? "filter blur-sm pointer-events-none relative max-h-[900px] overflow-hidden"
									: ""
							}
						>
							<Chapter6
								locale={locale}
								onSaveData={setJiaJuData}
								userInfo={userInfo}
								jiajuProDataString={JSON.stringify(
									reportDocData.jiajuProData || undefined
								)}
								assistantDataString={JSON.stringify(
									assistantData.jiajuProData
								)}
								isPrinting={isPrinting}
							/>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
}
