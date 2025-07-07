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
	const [prevHeroIndex, setPrevHeroIndex] = useState(0);
	const [heroFade, setHeroFade] = useState(false);

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
			setPrevHeroIndex(heroIndex);
			setHeroFade(true);
			setTimeout(() => {
				setHeroIndex((prev) => (prev + 1) % heroImages.length);
				setHeroFade(false);
			}, 800);
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
			setPrevHeroIndex(heroIndex);
			setHeroFade(true);
			setTimeout(() => {
				setHeroIndex(idx);
				setHeroFade(false);
			}, 800);
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

			{/* Carousel Dots for background overlay effects */}
			<div className="absolute z-20 flex gap-2 -translate-x-1/2 sm:gap-3 bottom-4 sm:bottom-6 md:bottom-8 left-1/2">
				{backgroundOverlayEffects.map((overlay, idx) => (
					<button
						key={idx}
						onClick={() => handleBgOverlayClick(idx)}
						className={`w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full border-2 border-white transition-all duration-300 ${
							bgOverlayIndex === idx ? "scale-110" : "scale-100"
						}`}
						style={{
							backgroundColor:
								bgOverlayIndex === idx
									? overlay.color
									: "transparent",
							opacity: bgOverlayIndex === idx ? 1 : 0.6,
						}}
						aria-label={`Switch to background overlay ${idx + 1}`}
					/>
				))}
			</div>

			<div className="container relative z-10 flex flex-col px-3 sm:px-4 md:px-0">
				<div className="flex-1">
					<div className="grid items-stretch grid-cols-1 gap-4 sm:gap-8 md:gap-14 md:grid-cols-2">
						{/* Left Side */}
						<motion.div
							initial={{ opacity: 0, x: -80 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							className="flex flex-col justify-center order-2 md:order-1"
						>
							<div
								className="flex flex-col items-center max-w-4xl ml-2 text-white md:items-start sm:ml-4 md:ml-4 lg:ml-4 xl:ml-0"
								style={{ fontFamily: "Noto Serif TC, serif" }}
							>
								<h1
									className="text-2xl sm:text-3xl md:text-[52px] font-bold mb-3 sm:mb-6 md:mb-20 mt-3 sm:mt-6 md:mt-0 leading-tight flex flex-col items-center md:items-start gap-2 sm:gap-3 md:gap-4 w-full"
									style={{
										fontFamily: "Noto Serif TC, serif",
									}}
								>
									<span
										style={{
											background:
												"linear-gradient(135deg, #EDDAC1 0%,rgb(248, 245, 245) 100%)",
											WebkitBackgroundClip: "text",
											WebkitTextFillColor: "transparent",
											backgroundClip: "text",
										}}
									>
										{t("title")}
									</span>
									{isMobile ? (
										<>
											<span
												className="text-center"
												style={{
													background:
														"linear-gradient(135deg, #EDDAC1 0%,rgb(239, 235, 235) 100%)",
													WebkitBackgroundClip:
														"text",
													WebkitTextFillColor:
														"transparent",
													backgroundClip: "text",
												}}
											>
												{t("title2").split("，")[0]}
											</span>
											<span
												className="text-center"
												style={{
													background:
														"linear-gradient(135deg, #EDDAC1 0%,rgb(240, 236, 236) 100%)",
													WebkitBackgroundClip:
														"text",
													WebkitTextFillColor:
														"transparent",
													backgroundClip: "text",
												}}
											>
												{t("title2").split("，")[1]}
											</span>
										</>
									) : (
										<span
											className="w-full whitespace-nowrap"
											style={{
												background:
													"linear-gradient(135deg, #EDDAC1 0%,rgb(250, 247, 247) 100%)",
												WebkitBackgroundClip: "text",
												WebkitTextFillColor:
													"transparent",
												backgroundClip: "text",
											}}
										>
											{t("title2")}
										</span>
									)}
								</h1>
								<div className="flex justify-center w-full mb-1 md:justify-start sm:mb-2">
									<p
										className="text-sm sm:text-base md:text-xl text-center md:text-left leading-relaxed max-w-[240px] sm:max-w-none md:max-w-none"
										style={{
											fontFamily: "Noto Serif TC, serif",
										}}
									>
										{t("subtitle1")}
									</p>
								</div>
								<div className="flex justify-center w-full md:justify-start">
									<p
										className="text-sm sm:text-base md:text-xl text-center md:text-left leading-relaxed max-w-[240px] sm:max-w-none md:max-w-none"
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
							className="flex flex-col items-center order-1 h-full md:items-start md:pl-16 md:order-2"
							initial={{ opacity: 0, x: 80 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
						>
							<div className="flex flex-col items-center justify-center w-full h-auto p-0 md:pt-4 md:pb-0 md:px-0">
								{/* Container with 50% opacity and rounded corners */}
								<div
									className="relative w-full max-w-[250px] sm:max-w-xs md:max-w-sm p-3 sm:p-4 md:p-6 rounded-[16px] sm:rounded-[20px] md:rounded-[24px]"
									style={{
										backgroundColor:
											"rgba(255, 255, 255, 0.5)",
										backdropFilter: "blur(2px)",
									}}
								>
									{/* Image Carousel */}
									<div className="relative w-full mb-3 sm:mb-4 md:mb-6">
										<div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[335.4px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] overflow-hidden">
											{/* Previous hero image */}
											<Image
												className={`absolute inset-0 object-contain w-full h-full transition-all duration-700 ease-in-out ${
													heroFade
														? "opacity-100 scale-110"
														: "opacity-0 scale-95"
												}`}
												loading="lazy"
												fill
												alt="Hero carousel"
												src={heroImages[prevHeroIndex]}
											/>
											{/* Current hero image */}
											<Image
												className={`absolute inset-0 object-contain w-full h-full transition-all duration-700 ease-in-out ${
													heroFade
														? "opacity-0 scale-95"
														: "opacity-100 scale-100"
												}`}
												loading="lazy"
												fill
												alt="Hero carousel"
												src={heroImages[heroIndex]}
											/>
										</div>

										{/* Hero Image Carousel Dots */}
										<div className="flex justify-center gap-1.5 sm:gap-2 mt-2">
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
											className="inline-flex items-center justify-center gap-2 font-bold text-white transition-all duration-300 ease-in-out rounded-[16px] sm:rounded-[18px] md:rounded-[20px] shadow-[0_6px_24px_0_rgba(0,0,0,0.3)] sm:shadow-[0_8px_32px_0_rgba(0,0,0,0.35)] hover:-translate-y-1 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] sm:hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.45)]"
											style={{
												background:
													"linear-gradient(135deg, #096E56 0%, #19AD6B 100%)",
												height: "38px",
												width: "220px",
												fontSize: "13px",
												fontFamily:
													"Noto Serif TC, serif",
												color: "white",
												// Responsive styles for larger screens
												...(typeof window !==
													"undefined" &&
													window.innerWidth >=
														640 && {
														height: "46px",
														width: "260px",
														fontSize: "16px",
													}),
												...(typeof window !==
													"undefined" &&
													window.innerWidth >=
														768 && {
														height: "50.51px",
														width: "275px",
														fontSize: "20px",
													}),
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
