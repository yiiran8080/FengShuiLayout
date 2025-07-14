"use client";
import { useState, useEffect, useRef } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import UploadPic from "@/components/uploadpic";
import { getReportDocData } from "./action";
import { FreeChapter3 } from "@/components/report/FreeChapter3";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/Navbar";
import DonutChart from "@/components/DonutChart";
import { FreeChapter6 } from "@/components/report/FreeChapter6";
import Promo from "@/components/Promo";

// Full-Width Floating Promo Component
const FloatingPromo = ({ locale }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className="fixed bottom-0 left-0 right-0 z-50">
			{/* Full-width floating container */}
			<div
				className="w-full bg-gradient-to-r from-[#f5faf7] via-[#ffffff] to-[#f5faf7] border-t border-gray-200 shadow-2xl"
				style={{
					fontFamily: '"Noto Serif TC", serif',
					boxShadow:
						"0 -8px 32px rgba(0, 0, 0, 0.12), 0 -4px 16px rgba(0, 0, 0, 0.08)",
					background:
						"linear-gradient(135deg, #f5faf7 0%, #ffffff 50%, #f5faf7 100%)",
				}}
			>
				{/* Animated accent line */}
				<div className="w-full h-1 bg-gradient-to-r from-[#318161] via-[#20B580] to-[#318177] animate-pulse"></div>

				<div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
					{/* Main content area */}
					<div className="flex items-center justify-between gap-4">
						{/* Left: Content */}
						<div className="flex-1 min-w-0">
							<div className="flex items-center gap-3 mb-2">
								{/* Icon */}
								<div className="flex-shrink-0">
									<div className="w-10 h-10 bg-gradient-to-r from-[#318161] to-[#20B580] rounded-full flex items-center justify-center text-white text-lg shadow-lg">
										🏠
									</div>
								</div>

								{/* Title */}
								<h3
									className="text-lg sm:text-xl font-bold text-[#073E31] truncate"
									style={{
										fontFamily: '"Noto Serif TC", serif',
									}}
								>
									{locale === "zh-CN"
										? "全面掌握家庭风水运势?"
										: "全面掌握家庭風水運勢?"}
								</h3>
							</div>

							{/* Description */}
							<p
								className="text-sm sm:text-base text-[#088C6E] opacity-90 line-clamp-2"
								style={{ fontFamily: '"Noto Serif TC", serif' }}
							>
								{locale === "zh-CN"
									? "想要更加精准了解家庭风水, 改善运势状况, 增强生活幸福感? 只需要花点时间, 就可以改变您的长期运势!"
									: "想要更加精準了解家庭風水, 改善運勢狀況, 增強生活幸福感? 只需要花點時間, 就可以改變您的長期運勢!"}
							</p>
						</div>

						{/* Right: CTA Button */}
						<div className="flex-shrink-0">
							<a
								href="/price"
								className="group relative inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-[#318161] to-[#318177] hover:from-[#2a6e56] hover:to-[#2a6e62] hover:scale-105 active:scale-100 shadow-lg hover:shadow-xl"
								style={{
									fontFamily: '"Noto Serif TC", serif',
									boxShadow:
										"0 8px 24px rgba(49, 129, 97, 0.3)",
								}}
							>
								{/* Button background glow */}
								<div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#318161] to-[#318177] opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"></div>

								{/* Button content */}
								<span className="relative z-10 flex items-center gap-2">
									<span>
										{locale === "zh-CN"
											? "推荐HarmoniQ"
											: "推薦HarmoniQ"}
									</span>
									<svg
										className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
								</span>

								{/* Notification indicator */}
								<div className="absolute w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-1 -right-1 animate-pulse"></div>
							</a>
						</div>
					</div>

					{/* Expandable content (optional) */}
					{isExpanded && (
						<div className="pt-4 mt-4 transition-all duration-300 border-t border-gray-200">
							<div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
								<div className="flex flex-col items-center">
									<div className="mb-1 text-2xl">📊</div>
									<p
										className="text-xs text-[#088C6E]"
										style={{
											fontFamily:
												'"Noto Serif TC", serif',
										}}
									>
										{locale === "zh-CN"
											? "专业分析"
											: "專業分析"}
									</p>
								</div>
								<div className="flex flex-col items-center">
									<div className="mb-1 text-2xl">⚡</div>
									<p
										className="text-xs text-[#088C6E]"
										style={{
											fontFamily:
												'"Noto Serif TC", serif',
										}}
									>
										{locale === "zh-CN"
											? "快速生成"
											: "快速生成"}
									</p>
								</div>
								<div className="flex flex-col items-center">
									<div className="mb-1 text-2xl">💎</div>
									<p
										className="text-xs text-[#088C6E]"
										style={{
											fontFamily:
												'"Noto Serif TC", serif',
										}}
									>
										{locale === "zh-CN"
											? "个性化建议"
											: "個性化建議"}
									</p>
								</div>
							</div>
						</div>
					)}
				</div>

				{/* Toggle expand button (optional) */}
				<button
					onClick={() => setIsExpanded(!isExpanded)}
					className="absolute flex items-center justify-center w-6 h-6 text-gray-500 transition-colors duration-200 bg-white rounded-full shadow-md top-2 right-4 hover:text-gray-700"
				>
					<svg
						className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default function FreeReportPage() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const roomType = searchParams.get("roomType");
	const direction = searchParams.get("direction");

	// Extract locale from pathname, e.g. "/zh-TW/freereport"
	const locale = pathname.split("/")[1];

	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [showFloating, setShowFloating] = useState(false);

	const promoSectionRef = useRef(null);
	const contentRef = useRef(null);

	useEffect(() => {
		if (!roomType || !direction) return;
		setLoading(true);
		setError(null);

		getReportDocData()
			.then((result) => setData(result))
			.catch(() => setError("Failed to fetch data"))
			.finally(() => setLoading(false));
	}, [roomType, direction]);

	useEffect(() => {
		const handleScroll = () => {
			if (!promoSectionRef.current) return;

			const promoElement = promoSectionRef.current;
			const rect = promoElement.getBoundingClientRect();
			const windowHeight = window.innerHeight;

			// Show floating button when promo section is not visible
			const isPromoVisible = rect.top < windowHeight && rect.bottom > 0;
			setShowFloating(!isPromoVisible);
		};

		// Use Intersection Observer for better performance
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					setShowFloating(!entry.isIntersecting);
				});
			},
			{
				threshold: 0.1,
				rootMargin: "0px 0px -100px 0px", // Start showing floating button before promo is completely out of view
			}
		);

		if (promoSectionRef.current) {
			observer.observe(promoSectionRef.current);
		}

		// Fallback to scroll listener
		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Initial check

		return () => {
			observer.disconnect();
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className="relative flex flex-col min-h-screen bg-white"
			style={{ fontFamily: '"Noto Serif TC", serif' }}
		>
			<Navbar />

			{/* Main content area - Add bottom padding when floating promo is visible */}
			<div
				ref={contentRef}
				className={`flex flex-col flex-1 w-full gap-2 px-2 py-2 mx-0 sm:gap-4 sm:px-4 sm:py-4 sm:mx-2 md:mx-5 md:flex-row lg:gap-6 lg:px-6 ${
					showFloating ? "pb-32 sm:pb-36" : "pb-4"
				} transition-all duration-300`}
			>
				{/* Left: FreeChapter3 */}
				<div className="flex items-start justify-center w-full mb-4 md:w-2/5 md:mb-0">
					{roomType && direction && data && (
						<FreeChapter3
							roomType={roomType}
							direction={direction}
							data={data}
						/>
					)}
				</div>
				{/* Right: FreeChapter6 */}
				<div className="flex items-start justify-center w-full md:w-3/5">
					<FreeChapter6 locale={locale} />
				</div>
			</div>

			{/* Full Promo Section - Always present in document flow */}
			<div ref={promoSectionRef} className="relative">
				<Promo />
			</div>

			{/* Floating Full-Width Promo - Shows when main promo is not visible */}
			{showFloating && <FloatingPromo locale={locale} />}

			<Footer />
		</div>
	);
}
