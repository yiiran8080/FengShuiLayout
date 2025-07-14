"use client";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import useMobile from "../../app/hooks/useMobile";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Background overlay effects for 01.png
const backgroundOverlayEffects = [
	{ color: "#1C312E", opacity: 0.6 },
	{ color: "#1A3B2C", opacity: 0.5 },
	{ color: "#73897F", opacity: 0.1 },
];

const heroImages = [
	"/images/hero/02.png",
	"/images/hero/6.png",
	"/images/hero/04.png",
	"/images/hero/05.png",
];

export default function Hero() {
	const t = useTranslations("home.hero");
	const isMobile = useMobile();

	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});
	const [loading, setLoading] = useState(true);

	// Background overlay carousel state
	const [bgOverlayIndex, setBgOverlayIndex] = useState(0);
	const [prevBgOverlayIndex, setPrevBgOverlayIndex] = useState(0);
	const [bgFade, setBgFade] = useState(false);

	// Hero images carousel state (separate)
	const [heroIndex, setHeroIndex] = useState(0);

	// New state for responsive layout detection
	const [isMobileLayout, setIsMobileLayout] = useState(false);

	useEffect(() => {
		let timer;
		let end = null;

		const fetchEndTime = async () => {
			const res = await fetch("/api/countdown-end");
			const data = await res.json();
			end = data.endTime;

			const updateCountdown = () => {
				const diff = end - Date.now();
				if (diff <= 0) {
					setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
					clearInterval(timer);
				} else {
					const days = Math.floor(diff / (1000 * 60 * 60 * 24));
					const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
					const minutes = Math.floor((diff / (1000 * 60)) % 60);
					const seconds = Math.floor((diff / 1000) % 60);
					setTimeLeft({ days, hours, minutes, seconds });
				}
			};

			updateCountdown();
			timer = setInterval(updateCountdown, 1000);
			setLoading(false);
		};

		fetchEndTime();

		return () => clearInterval(timer);
	}, []);

	// Responsive layout detection
	useEffect(() => {
		const checkLayout = () => {
			// Switch to mobile layout when screen width is less than 1024px (lg breakpoint)
			// or when the gap between elements becomes too small
			const shouldUseMobileLayout = window.innerWidth < 1024;
			setIsMobileLayout(shouldUseMobileLayout);
		};

		// Check on mount
		checkLayout();

		// Check on resize
		window.addEventListener("resize", checkLayout);
		return () => window.removeEventListener("resize", checkLayout);
	}, []);

	// Background overlay carousel effect
	useEffect(() => {
		const interval = setInterval(() => {
			setPrevBgOverlayIndex(bgOverlayIndex);
			setBgFade(true);
			setTimeout(() => {
				setBgOverlayIndex(
					(prev) => (prev + 1) % backgroundOverlayEffects.length
				);
				setBgFade(false);
			}, 800);
		}, 3500);
		return () => clearInterval(interval);
	}, [bgOverlayIndex]);

	// Hero images carousel effect
	useEffect(() => {
		const interval = setInterval(() => {
			setHeroIndex((prev) => (prev + 1) % heroImages.length);
		}, 3000); // Different timing than background
		return () => clearInterval(interval);
	}, [heroIndex]);

	const handleBgOverlayClick = (idx) => {
		if (idx !== bgOverlayIndex) {
			setPrevBgOverlayIndex(bgOverlayIndex);
			setBgFade(true);
			setTimeout(() => {
				setBgOverlayIndex(idx);
				setBgFade(false);
			}, 800);
		}
	};

	const handleHeroDotClick = (idx) => {
		if (idx !== heroIndex) {
			setHeroIndex(idx);
		}
	};

	return (
		<section
			className="relative flex items-center min-h-[85vh] sm:min-h-[90vh] md:min-h-[80vh] py-3 sm:py-6 md:py-8 lg:py-12"
			style={{ fontFamily: "Noto Serif TC, serif" }}
		>
			{/* Static Background Image - 01.png */}
			<div className="absolute inset-0 z-0 w-full">
				<Image
					src="/images/hero/01.png"
					alt="Hero background"
					fill
					className="object-cover"
					priority={true}
				/>
			</div>

			{/* Previous overlay for crossfade */}
			<div
				className={`absolute inset-0 z-1 w-full transition-opacity duration-1000 ${bgFade ? "opacity-100" : "opacity-0"}`}
				style={{
					backgroundColor:
						backgroundOverlayEffects[prevBgOverlayIndex].color,
					opacity: bgFade
						? backgroundOverlayEffects[prevBgOverlayIndex].opacity
						: 0,
				}}
			/>

			{/* Current overlay */}
			<div
				className={`absolute inset-0 z-1 w-full transition-opacity duration-1000 ${bgFade ? "opacity-0" : "opacity-100"}`}
				style={{
					backgroundColor:
						backgroundOverlayEffects[bgOverlayIndex].color,
					opacity: bgFade
						? 0
						: backgroundOverlayEffects[bgOverlayIndex].opacity,
				}}
			/>

			<div className="container relative z-10 flex flex-col items-center justify-center px-4 mx-auto md:px-8 max-w-7xl">
				<div className="flex-1 flex items-center justify-center w-full min-h-[60vh]">
					<div
						className={`w-full mx-auto max-w-7xl ${
							isMobileLayout
								? "flex flex-col items-center gap-8"
								: "grid grid-cols-2 items-center gap-x-8 xl:gap-x-16 2xl:gap-x-24"
						}`}
					>
						{/* Left Side */}
						<motion.div
							initial={{ opacity: 0, x: -80 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							className={`flex flex-col w-full min-w-0 ${
								isMobileLayout
									? "items-center order-2"
									: "items-start justify-center order-1"
							}`}
						>
							<div
								className={`flex flex-col max-w-4xl text-white ${
									isMobileLayout
										? "items-center"
										: "items-start"
								}`}
								style={{ fontFamily: "Noto Serif TC, serif" }}
							>
								<h1
									className={`text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] 2xl:text-[52px] font-bold mb-3 sm:mb-6 lg:mb-12 xl:mb-16 2xl:mb-20 mt-3 sm:mt-6 lg:mt-0 leading-tight w-full
    ${isMobileLayout ? "flex flex-col gap-2 items-center text-center" : "block text-left whitespace-nowrap"}`}
									style={{
										fontFamily: "Noto Serif TC, serif",
									}}
								>
									<span
										className="block whitespace-nowrap"
										style={{
											background:
												"linear-gradient(135deg, #EDDAC1 0%,rgb(248, 245, 245) 100%)",
											WebkitBackgroundClip: "text",
											WebkitTextFillColor: "transparent",
											backgroundClip: "text",
											fontFamily: "Noto Serif TC, serif",
										}}
									>
										{t("title")}
									</span>
									<span
										className="block whitespace-nowrap"
										style={{
											background:
												"linear-gradient(135deg, #EDDAC1 0%,rgb(250, 247, 247) 100%)",
											WebkitBackgroundClip: "text",
											WebkitTextFillColor: "transparent",
											backgroundClip: "text",
											fontFamily: "Noto Serif TC, serif",
										}}
									>
										{t("title2")}
									</span>
								</h1>
								<div
									className={`flex w-full mb-1 sm:mb-2 ${
										isMobileLayout
											? "justify-center"
											: "justify-start"
									}`}
								>
									<p
										className={`text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed whitespace-nowrap ${
											isMobileLayout
												? "text-center max-w-[240px] sm:max-w-none"
												: "text-left max-w-none"
										}`}
										style={{
											fontFamily: "Noto Serif TC, serif",
										}}
									>
										{t("subtitle1")}
									</p>
								</div>
								<div
									className={`flex w-full ${
										isMobileLayout
											? "justify-center"
											: "justify-start"
									}`}
								>
									<p
										className={`text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed ${
											isMobileLayout
												? "text-center max-w-[240px] sm:max-w-none"
												: "text-left max-w-none"
										}`}
										style={{
											fontFamily: "Noto Serif TC, serif",
										}}
									>
										{t("subtitle2")}
									</p>
								</div>
							</div>
						</motion.div>

						{/* Right Side */}
						<motion.div
							className={`flex flex-col items-center justify-center w-full min-w-0 ${
								isMobileLayout ? "order-1" : "order-2"
							}`}
							initial={{ opacity: 0, x: 80 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
						>
							<div className="flex flex-col items-center justify-center w-full">
								{/* Container with 50% opacity and rounded corners */}
								<div
									className={`relative w-full p-4 sm:p-5 rounded-[16px] sm:rounded-[20px] md:rounded-[24px] ${
										isMobileLayout
											? "max-w-[280px] sm:max-w-xs"
											: "max-w-[250px] lg:max-w-xs xl:max-w-sm"
									}`}
									style={{
										backgroundColor:
											"rgba(255, 255, 255, 0.5)",
										backdropFilter: "blur(2px)",
									}}
								>
									{/* Image Carousel */}
									<div className="relative w-full mb-1 sm:mb-3 md:mb-2">
										<div
											className={`relative w-full rounded-[12px] sm:rounded-[16px] md:rounded-[20px] overflow-hidden ${
												isMobileLayout
													? "h-48 sm:h-56"
													: "h-45 sm:h-64 lg:h-72 xl:h-80 2xl:h-[320px]"
											}`}
										>
											{/* Sliding container */}
											<div
												className="flex h-full transition-transform duration-700 ease-in-out"
												style={{
													transform: `translateX(-${heroIndex * 25}%)`,
													width: `400%`,
												}}
											>
												{heroImages.map(
													(image, idx) => (
														<div
															key={idx}
															className="relative flex-shrink-0 w-1/4 h-full px-2"
														>
															<div className="relative w-full h-full">
																<Image
																	className="object-contain w-full h-full"
																	fill
																	alt={`Hero carousel ${idx + 1}`}
																	src={image}
																	sizes={
																		isMobileLayout
																			? "(max-width: 640px) 280px, 384px"
																			: "(max-width: 640px) 250px, (max-width: 1024px) 384px, 448px"
																	}
																	priority={
																		idx ===
																		0
																	}
																/>
															</div>
														</div>
													)
												)}
											</div>
										</div>

										{/* Hero Image Carousel Dots */}
										<div className="flex justify-center mb-5 sm:gap-2">
											{heroImages.map((_, idx) => (
												<button
													key={idx}
													onClick={() =>
														handleHeroDotClick(idx)
													}
													className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white transition-all duration-300 ${
														heroIndex === idx
															? "opacity-100 scale-110"
															: "opacity-60 scale-100"
													}`}
													aria-label={`Switch to hero image ${idx + 1}`}
												/>
											))}
										</div>
									</div>

									{/* CTA Button - Centered within container */}
									<div className="flex justify-center">
										<Link
											href="/free"
											className={`inline-flex items-center justify-center gap-2 font-bold text-white transition-all duration-300 ease-in-out rounded-[16px] sm:rounded-[18px] md:rounded-[20px] shadow-[0_6px_24px_0_rgba(0,0,0,0.3)] sm:shadow-[0_8px_32px_0_rgba(0,0,0,0.35)] hover:-translate-y-1 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] sm:hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.45)] ${
												isMobileLayout
													? "h-[50px] w-[200px] text-lg"
													: "h-[46px] w-[220px] text-base lg:h-[50px] lg:w-[240px] lg:text-lg xl:h-[54px] xl:w-[260px] xl:text-xl"
											}`}
											style={{
												background:
													"linear-gradient(135deg, #096E56 0%, #19AD6B 100%)",
												fontFamily:
													"Noto Serif TC, serif",
												color: "white",
											}}
											onMouseEnter={(e) => {
												e.currentTarget.style.background =
													"linear-gradient(135deg, #096E56 0%, #19AD6B 100%)";
											}}
											onMouseLeave={(e) => {
												e.currentTarget.style.background =
													"linear-gradient(135deg, #096E56 0%, #19AD6B 100%)";
											}}
										>
											{t("cta")}
										</Link>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
