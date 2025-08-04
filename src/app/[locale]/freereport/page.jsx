"use client";
import { useState, useEffect, useRef } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic"; // Add this import
import UploadPic from "@/components/uploadpic2";
import { getReportDocData } from "./action";
import { FreeChapter3 } from "@/components/report/FreeChapter3";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/Navbar";
import DonutChart from "@/components/DonutChart";
import { FreeChapter6 } from "@/components/report/FreeChapter6";
import Promo from "@/components/Promo";
import { useUser } from "@/context/UserContext";

// Full-Width Floating Promo Component
const FloatingPromo = ({ locale, onClose }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className="fixed bottom-0 left-0 right-0 z-50">
			<div
				className="w-full bg-gradient-to-r from-[#f5faf7] via-[#ffffff] to-[#f5faf7] border-t border-gray-200 shadow-2xl relative"
				style={{
					fontFamily: '"Noto Serif TC", serif',
					boxShadow:
						"0 -8px 32px rgba(0, 0, 0, 0.12), 0 -4px 16px rgba(0, 0, 0, 0.08)",
					background:
						"linear-gradient(135deg, #f5faf7 0%, #ffffff 50%, #f5faf7 100%)",
				}}
			>
				<div className="w-full h-1 bg-gradient-to-r from-[#318161] via-[#20B580] to-[#318177] animate-pulse"></div>

				<div className="max-w-full px-2 py-3 mx-auto sm:px-4 sm:py-4 sm:max-w-7xl">
					<div className="flex flex-col items-center justify-between w-full gap-3 sm:flex-row sm:items-center sm:gap-4">
						{/* Left: Content */}
						<div className="flex flex-col items-center w-full sm:items-start">
							<h3
								className="text-base sm:text-lg md:text-xl font-bold text-[#073E31] truncate text-center sm:text-left"
								style={{
									fontFamily: '"Noto Serif TC", serif',
								}}
							>
								{locale === "zh-CN"
									? "全面掌握家庭风水运势?"
									: "全面掌握家庭風水運勢?"}
							</h3>
							<p
								className="text-xs sm:text-sm md:text-base text-[#088C6E] opacity-90 line-clamp-2 sm:line-clamp-2 w-full text-center sm:text-left sm:mt-1"
								style={{
									fontFamily: '"Noto Serif TC", serif',
								}}
							>
								{locale === "zh-CN"
									? "想要更加精准了解家庭风水, 改善运势状况, 增强生活幸福感? 只需要花点时间, 就可以改变您的长期运势!"
									: "想要更加精準了解家庭風水, 改善運勢狀況, 增強生活幸福感? 只需要花點時間, 就可以改變您的長期運勢!"}
							</p>
						</div>

						{/* Right: CTA Button */}
						<div className="flex justify-center flex-shrink-0 w-full sm:w-auto sm:justify-end">
							<a
								href="/price"
								className="group relative inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-[#318161] to-[#318177] hover:from-[#2a6e56] hover:to-[#2a6e62] hover:scale-105 active:scale-100 shadow-lg hover:shadow-xl"
								style={{
									fontFamily: '"Noto Serif TC", serif',
									boxShadow:
										"0 8px 24px rgba(49, 129, 97, 0.3)",
								}}
							>
								<div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#318161] to-[#318177] opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"></div>
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
								<div className="absolute w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-1 -right-1 animate-pulse"></div>
							</a>
						</div>
					</div>
				</div>

				{/* Close button (top-right) */}
				<button
					onClick={onClose}
					className="absolute z-20 flex items-center justify-center w-8 h-8 transition rounded-full top-2 right-2 bg-white/80 hover:bg-gray-200"
					aria-label="Close"
				>
					<svg
						className="w-5 h-5 text-gray-700"
						viewBox="0 0 20 20"
						fill="none"
					>
						<line
							x1="5"
							y1="5"
							x2="15"
							y2="15"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
						/>
						<line
							x1="15"
							y1="5"
							x2="5"
							y2="15"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
						/>
					</svg>
				</button>
				{/* Make promo scrollable on small screens if content overflows */}
				<style jsx>{`
					@media (max-width: 639px) {
						.max-w-full {
							max-width: 100vw !important;
						}
						.px-2 {
							padding-left: 0.5rem !important;
							padding-right: 0.5rem !important;
						}
						.py-3 {
							padding-top: 0.75rem !important;
							padding-bottom: 0.75rem !important;
						}
						.overflow-y-auto {
							overflow-y: auto !important;
						}
					}
				`}</style>
			</div>
		</div>
	);
};

export default function FreeReportPage() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { data: session, status } = useSession();
	const roomType = searchParams.get("roomType");
	const direction = searchParams.get("direction");

	// Extract locale from pathname, e.g. "/zh-TW/freereport"
	const locale = pathname.split("/")[1];

	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [showFloating, setShowFloating] = useState(false);
	const [floatingClosed, setFloatingClosed] = useState(false);
	const [mounted, setMounted] = useState(false); // Add mounted state

	const { userData, isInitialized } = useUser(); // Add this line

	const promoSectionRef = useRef(null);
	const contentRef = useRef(null);
	const pageStartTime = useRef(Date.now()); // Track page start time

	// Handle client-side mounting
	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!roomType || !direction) return;
		setLoading(true);
		setError(null);

		getReportDocData()
			.then((result) => {
				setData(result);
			})
			.catch(() => setError("Failed to fetch data"))
			.finally(() => setLoading(false));
	}, [roomType, direction]);

	// In your scroll/observer logic, only update showFloating if not closed
	useEffect(() => {
		const handleScroll = () => {
			if (!promoSectionRef.current || floatingClosed) return; // ADD floatingClosed check

			const promoElement = promoSectionRef.current;
			const rect = promoElement.getBoundingClientRect();
			const windowHeight = window.innerHeight;

			const isPromoVisible = rect.top < windowHeight && rect.bottom > 0;
			setShowFloating(!isPromoVisible);
		};

		const observer = new IntersectionObserver(
			(entries) => {
				if (floatingClosed) return; // ADD floatingClosed check
				entries.forEach((entry) => {
					setShowFloating(!entry.isIntersecting);
				});
			},
			{
				threshold: 0.1,
				rootMargin: "0px 0px -100px 0px",
			}
		);

		if (promoSectionRef.current) {
			observer.observe(promoSectionRef.current);
		}

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			observer.disconnect();
			window.removeEventListener("scroll", handleScroll);
		};
	}, [floatingClosed]); // ADD floatingClosed as dependency

	// Don't render anything until mounted to avoid SSR issues
	if (!mounted) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-lg">Loading...</div>
			</div>
		);
	}

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
			{showFloating && !floatingClosed && (
				<FloatingPromo
					locale={locale}
					onClose={() => {
						setShowFloating(false);
						setFloatingClosed(true); // Hide until refresh
					}}
				/>
			)}

			<Footer />
		</div>
	);
}
