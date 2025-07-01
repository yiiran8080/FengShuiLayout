"use client";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import useMobile from "../../app/hooks/useMobile";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const backgrounds = [
	"/images/hero/banner-1.png",
	"/images/hero/heroback2.jpg",
	"/images/hero/heroback3.jpg",
];

const heroImages = [
	"/images/hero/Herosmall1.png",
	"/images/hero/Herosmall2.png",
	"/images/hero/Herosmall3.png",
	"/images/hero/Herosmall4.png",
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

	// Background carousel state
	const [bgIndex, setBgIndex] = useState(0);
	const [prevBgIndex, setPrevBgIndex] = useState(0);
	const [fade, setFade] = useState(false);

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

	// Background carousel effect
	useEffect(() => {
		const interval = setInterval(() => {
			setPrevBgIndex(bgIndex);
			setFade(true);
			setTimeout(() => {
				setBgIndex((prev) => (prev + 1) % backgrounds.length);
				setFade(false);
			}, 800);
		}, 2500);
		return () => clearInterval(interval);
	}, [bgIndex]);

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

	const handleDotClick = (idx) => {
		if (idx !== bgIndex) {
			setPrevBgIndex(bgIndex);
			setFade(true);
			setTimeout(() => {
				setBgIndex(idx);
				setFade(false);
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
		<section className="relative flex items-center min-h-[80vh] py-8 md:py-12">
			<div className="absolute inset-0 z-2 bg-shadow" />
			{/* Previous background for crossfade */}
			<div className="absolute inset-0 z-0 w-full transition-all duration-700">
				<Image
					src={backgrounds[prevBgIndex]}
					alt="Hero background"
					fill
					className={`object-cover transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}
					priority={true}
				/>
			</div>
			{/* Current background */}
			<div className="absolute inset-0 z-0 w-full transition-all duration-700">
				<Image
					src={backgrounds[bgIndex]}
					alt="Hero background"
					fill
					className={`object-cover transition-opacity duration-700 ${fade ? "opacity-0" : "opacity-100"}`}
					priority={true}
				/>
			</div>
			{/* Carousel Dots for background */}
			<div className="absolute z-20 flex gap-3 -translate-x-1/2 bottom-4 md:bottom-8 left-1/2">
				{backgrounds.map((_, idx) => (
					<button
						key={idx}
						onClick={() => handleDotClick(idx)}
						className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border border-white transition-all duration-300 ${
							bgIndex === idx ? "bg-white" : "bg-white/40"
						}`}
						aria-label={`Go to slide ${idx + 1}`}
					/>
				))}
			</div>
			<div className="container relative z-10 flex flex-col px-4 md:px-4">
				<div className="flex-1">
					<div className="grid items-stretch grid-cols-1 gap-8 md:gap-14 md:grid-cols-2">
						{/* Left Side */}
						<motion.div
							initial={{ opacity: 0, x: -80 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							className="flex flex-col justify-center"
						>
							<div className="flex flex-col items-center max-w-4xl text-white md:items-start font-yahei">
								<h1 className="text-3xl sm:text-4xl md:text-[52px] font-bold mb-8 md:mb-20 mt-10 md:mt-0 leading-tight flex flex-col items-center md:items-start gap-3 md:gap-4 w-full font-yahei">
									<span>{t("title")}</span>
									{isMobile ? (
										<>
											<span className="whitespace-nowrap">
												{t("title2").split("，")[0]}
											</span>
											<span className="whitespace-nowrap">
												{t("title2").split("，")[1]}
											</span>
										</>
									) : (
										<span className="w-full whitespace-nowrap">
											{t("title2")}
										</span>
									)}
								</h1>
								<p className="mb-2 text-center sm:text-lg md:text-xl md:text-left font-yahei">
									{t("subtitle1")}
								</p>
								<p className="mb-2 text-center sm:text-lg md:text-xl md:text-left font-yahei">
									{t("subtitle2")}
								</p>
								<p className="mb-2 text-center sm:text-lg md:text-xl md:text-left font-yahei">
									{t("subtitle3")}
								</p>{" "}
								<p className="mb-2 text-center t sm:text-lg md:text-xl md:text-left font-yahei">
									{t("subtitle4")}
								</p>{" "}
								<p className="mb-2 text-center t sm:text-lg md:text-xl md:text-left font-yahei">
									{t("subtitle5")}
								</p>
							</div>
						</motion.div>
						{/* Right Side */}
						<motion.div
							className="flex flex-col items-center h-full md:items-start md:pl-16"
							initial={{ opacity: 0, x: 80 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
						>
							<div className="flex flex-col items-center justify-center w-full h-auto p-0 md:pt-4 md:pb-0 md:px-0">
								{/* Image Carousel */}
								<div className="relative w-full max-w-xs mb-6 sm:max-w-sm">
									<div className="relative w-full lg:h-[335.4px] h-80 rounded-[20px] overflow-hidden">
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
									{/* CTA Button - Centered with reduced gap */}
									<div className="flex justify-center mt-0">
										<Link
											href="/free"
											className="inline-flex items-center justify-center gap-2 text-base font-bold text-white transition-all duration-300 ease-in-out rounded-[20px] shadow-[0_8px_32px_0_rgba(0,0,0,0.35)] sm:text-xl hover:-translate-y-1 hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.45)]"
											style={{
												backgroundColor: "#004F44",
												height: "70.51px",
												width: "275px",
											}}
											onMouseEnter={(e) => {
												e.currentTarget.style.backgroundColor =
													"#0a6b5d";
											}}
											onMouseLeave={(e) => {
												e.currentTarget.style.backgroundColor =
													"#004F44";
											}}
										>
											{t("cta")}
										</Link>
									</div>
									{/* Hero Carousel Dots - Hidden */}
									{/*
									<div className="flex justify-center gap-2 mt-2">
										{heroImages.map((_, idx) => (
											<button
											 key={idx}
											 onClick={() =>
												 handleHeroDotClick(idx)
											 }
											 className={`w-2 h-2 rounded-full transition-all duration-300 ${
												 heroIndex === idx
													 ? "bg-[#19AD6B]"
													 : "bg-gray-300"
											 }`}
											 aria-label={`Go to image ${idx + 1}`}
											/>
										))}
									</div>
									*/}
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
