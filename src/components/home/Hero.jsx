"use client";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import useMobile from "../../app/hooks/useMobile";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useResponsiveScale } from "../../hooks/useResponsiveScale";

export default function Hero() {
	const t = useTranslations("home.hero");
	const isMobile = useMobile();
	const { scaleRatio, isMobileLayout } = useResponsiveScale();
	const [isClient, setIsClient] = useState(false);

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

	// Background overlay effects
	const backgroundOverlayEffects = [
		{ color: "#1C312E", opacity: 0.6 },
		{ color: "#1A3B2C", opacity: 0.5 },
		{ color: "#73897F", opacity: 0.1 },
	];

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		let timer;
		let end = null;

		const fetchEndTime = async () => {
			try {
				const res = await fetch("/api/countdown-end");
				const data = await res.json();
				end = data.endTime;

				const updateCountdown = () => {
					const diff = end - Date.now();
					if (diff <= 0) {
						setTimeLeft({
							days: 0,
							hours: 0,
							minutes: 0,
							seconds: 0,
						});
						clearInterval(timer);
					} else {
						const days = Math.floor(diff / (1000 * 60 * 60 * 24));
						const hours = Math.floor(
							(diff / (1000 * 60 * 60)) % 24
						);
						const minutes = Math.floor((diff / (1000 * 60)) % 60);
						const seconds = Math.floor((diff / 1000) % 60);
						setTimeLeft({ days, hours, minutes, seconds });
					}
				};

				updateCountdown();
				timer = setInterval(updateCountdown, 1000);
			} catch (error) {
			} finally {
				setLoading(false);
			}
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

	const links = {
		social: [
			{
				icon: "/images/footer/Facebook.png",
				href: "https://www.facebook.com/profile.php?id=61578389876952",
			},
			{
				icon: "/images/footer/Instagram.png",
				href: "https://www.instagram.com/harmoniq_fengshui/",
			},
		],
	};

	// During SSR and initial hydration, render desktop layout to prevent mismatch
	if (!isClient) {
		return (
			<div className="relative w-full overflow-hidden">
				<section
					className="relative flex items-center overflow-hidden"
					style={{
						fontFamily: "Noto Serif TC, serif",
						minHeight: "100vh",
						transform: `scale(${scaleRatio})`,
						transformOrigin: "top center",
						width: `${100 / scaleRatio}%`,
						marginLeft: "auto",
						marginRight: "auto",
					}}
				>
					{/* Static Background Image */}
					<div className="absolute inset-0 z-0 w-full">
						<Image
							src="/images/hero/01.png"
							alt="Hero background"
							fill
							className="object-cover"
							priority={true}
						/>
					</div>

					{/* Current overlay */}
					<div
						className="absolute inset-0 w-full z-1"
						style={{
							backgroundColor: backgroundOverlayEffects[0].color,
							opacity: backgroundOverlayEffects[0].opacity,
						}}
					/>

					{/* Title 1 above the line */}
					<div
						className="absolute z-20 -translate-x-1/2 left-1/2"
						style={{
							top: "25%",
							left: "33%",
							width: "832px",
							height: "160px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							overflow: "hidden",
							pointerEvents: "none",
						}}
					>
						<span
							className="block whitespace-nowrap"
							style={{
								fontSize: "95px",
								lineHeight: "160px",
								fontWeight: 800,
								color: "#FEF8EF",
								fontFamily: "Noto Serif TC, serif",
								width: "100%",
								textAlign: "center",
							}}
						>
							{t("title")}
						</span>
					</div>

					{/* Decorative: Centered White Horizontal Line */}
					<div
						className="absolute left-0 right-0 z-10 pointer-events-none"
						style={{
							top: "45%",
							height: 0,
							borderTop: `${2 * scaleRatio}px solid #FEF8EF`,
							width: "100%",
							opacity: 0.7,
						}}
					/>

					{/* Group below the line: title2, subtitle1 */}
					<div
						className="absolute z-20 flex flex-col items-start -translate-x-1/2 left-[40%]"
						style={{
							top: "calc(38% + 60px)",
							width: "947px",
							pointerEvents: "none",
						}}
					>
						<span
							className="block whitespace-nowrap"
							style={{
								fontSize: "25px",
								lineHeight: "36px",
								fontWeight: 500,
								color: "#FEF8EF",
								fontFamily: "Noto Serif TC, serif",
								textAlign: "start",
							}}
						>
							{t("title2")}
						</span>
						<span
							className="block mt-2 whitespace-nowrap"
							style={{
								fontSize: "25px",
								lineHeight: "36px",
								fontWeight: 500,
								color: "#FEF8EF",
								fontFamily: "Noto Serif TC, serif",
								textAlign: "start",
							}}
						>
							{t("subtitle1")}
						</span>
					</div>

					{/* Button positioned further right */}
					<div
						className="absolute z-20"
						style={{
							top: "calc(38%)",
							right: "5%",
							pointerEvents: "auto",
						}}
					>
						<Link
							href="/"
							className="flex items-center justify-center transition-transform duration-200 hover:scale-105"
						>
							<Image
								src="/images/風水妹/chart-button.png"
								alt={t("cta")}
								width={400}
								height={150}
								className="cursor-pointer"
								style={{
									filter: "drop-shadow(0 8px 32px rgba(163, 177, 22, 0.22))",
								}}
							/>
						</Link>
					</div>

					{/* Extended Bottom Section - Creates seamless transition */}
					<div
						className="absolute bottom-0 left-0 right-0 z-5"
						style={{
							height: "200px",
							background:
								"linear-gradient(to bottom, transparent 0%, rgba(239, 239, 239, 0.3) 70%, rgba(239, 239, 239, 0.8) 100%)",
						}}
					/>
				</section>
			</div>
		);
	}

	// MOBILE LAYOUT - Redesigned according to requirements
	if (isMobile) {
		return (
			<div className="relative w-full min-h-[60vh] overflow-hidden b">
				{/* Background Image */}
				<div className="absolute inset-0 z-0">
					<Image
						src="/images/hero/mainmobilebg.png" // <-- updated here
						alt="Hero background"
						fill
						className="object-cover"
						priority={true}
					/>
				</div>

				{/* Background Overlay with animation */}
				{/* <div
					className={`absolute inset-0 z-1 transition-all duration-1000 ${
						bgFade ? "opacity-50" : "opacity-100"
					}`}
					style={{
						backgroundColor:
							backgroundOverlayEffects[bgOverlayIndex].color,
						opacity:
							backgroundOverlayEffects[bgOverlayIndex].opacity,
					}}
				/> */}

				{/* Main Content Container */}
				<div className="relative z-10 flex flex-col px-4 py-8 mt-15">
					{/* Header Section */}
					<div className="flex-shrink-0 pt-16 pb-8">
						{/* HarmoniQ Brand Name - right aligned */}
						<div className="flex justify-end mb-6 ">
							<span
								style={{
									fontFamily: "Noto Serif TC, serif",
									fontWeight: 1000,
									fontSize: "50px",
									color: "#E8E2DA",
									letterSpacing: "2px",
									lineHeight: "1",
								}}
							>
								HarmoniQ
							</span>
						</div>
						{/* Main Title */}
						<h1
							className="justify-center px-2 mb-8 text-start"
							style={{
								fontFamily: "Noto Serif TC, serif",
								fontWeight: 800,
								fontSize: "32px",
								color: "#E8E2DA",
								lineHeight: "1.2",
								textShadow: "0 2px 4px rgba(0,0,0,0.3)",
							}}
						>
							{t("title")}
						</h1>
						{/* Title2 */}
						<div className="px-4 mb-6">
							<p
								className="text-lg sm:text-xl font-medium text-[#FEF8EF]"
								style={{
									fontFamily: "Noto Serif TC, serif",
									lineHeight: "1.4",
									textShadow: "0 1px 2px rgba(0,0,0,0.3)",
								}}
							>
								{t("title2")}
							</p>
						</div>
					</div>

					{/* Steps Section */}
					<div className="flex flex-col justify-center flex-1 px-2">
						{/* Steps Title with Subtitle1 and Button in a row */}
						<div
							className="relative flex items-start mb-6"
							style={{ minHeight: "60px" }}
						>
							<div className="w-[70%]">
								<p
									className="text-base sm:text-lg font-medium text-[#FEF8EF] mb-2"
									style={{
										fontFamily: "Noto Serif TC, serif",
										lineHeight: "1.4",
										textShadow: "0 1px 2px rgba(0,0,0,0.3)",
									}}
								>
									{t("subtitle1")}
								</p>
							</div>
							<div className="w-[30%] flex justify-end relative">
								<div
									style={{
										position: "absolute",
										top: "32px",
										right: 0,
										zIndex: 20,
									}}
								>
									<Link
										href="/"
										className="flex items-center justify-center transition-transform duration-200 active:scale-95 hover:scale-105"
									>
										<Image
											src="/images/風水妹/chart-button.png"
											alt={t("cta")}
											width={120}
											height={48}
											className="cursor-pointer"
											style={{
												filter: "drop-shadow(0 8px 32px rgba(163, 177, 22, 0.22))",
											}}
										/>
									</Link>
								</div>
							</div>
						</div>
					</div>

					{/* Bottom Spacing */}
					<div className="flex-shrink-0 h-8" />
				</div>

				{/* Bottom Gradient Overlay */}
				<div
					className="absolute bottom-0 left-0 pointer-events-none right-10 z-5"
					style={{
						height: "80px",
						background:
							"linear-gradient(to bottom, transparent 0%, rgba(239, 239, 239, 0.1) 50%, rgba(239, 239, 239, 0.3) 100%)",
						borderTopLeftRadius: "30px",
						borderTopRightRadius: "30px",
					}}
				/>
			</div>
		);
	}

	// DESKTOP LAYOUT (keeping your existing desktop code)
	return (
		<div className="relative w-full overflow-hidden">
			<section
				className="relative flex items-center overflow-hidden"
				style={{
					fontFamily: "Noto Serif TC, serif",
					minHeight: "100vh",
					transform: `scale(${scaleRatio})`,
					transformOrigin: "top center",
					width: `${100 / scaleRatio}%`,
					marginLeft: "auto",
					marginRight: "auto",
				}}
			>
				{/* Static Background Image */}
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
							? backgroundOverlayEffects[prevBgOverlayIndex]
									.opacity
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

				{/* Title 1 above the line */}
				<div
					className="absolute z-20 -translate-x-1/2 left-1/2"
					style={{
						top: "25%",
						left: "33%",
						width: "832px",
						height: "160px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						overflow: "hidden",
						pointerEvents: "none",
					}}
				>
					<span
						className="block whitespace-nowrap"
						style={{
							fontSize: "95px",
							lineHeight: "160px",
							fontWeight: 800,
							color: "#FEF8EF",
							fontFamily: "Noto Serif TC, serif",
							width: "100%",
							textAlign: "center",
						}}
					>
						{t("title")}
					</span>
				</div>

				{/* Decorative: Centered White Horizontal Line */}
				<div
					className="absolute left-0 right-0 z-10 pointer-events-none"
					style={{
						top: "45%",
						height: 0,
						borderTop: `${2 * scaleRatio}px solid #FEF8EF`,
						width: "100%",
						opacity: 0.7,
					}}
				/>

				{/* Decorative: Large White Circle on Left */}
				<div
					className="absolute z-10 pointer-events-none"
					style={{
						top: "45%",
						left: "5vw",
						transform: "translateY(-50%)",
						width: `${525 * scaleRatio}px`,
						height: `${525 * scaleRatio}px`,
						border: `${2.5 * scaleRatio}px solid #FEF8EF`,
						borderRadius: "50%",
						background: "transparent",
						opacity: 0.7,
					}}
				/>

				{/* Social icons at top right */}
				<div
					className="absolute z-30 flex flex-col space-y-4"
					style={{
						pointerEvents: "auto",
						top: "90px",
						right: "82px",
					}}
				>
					{links.social.map((social, index) =>
						social.href ? (
							<a
								key={index}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								className="transition-opacity hover:opacity-80"
							>
								<Image
									src={social.icon}
									alt=""
									width={40}
									height={40}
								/>
							</a>
						) : (
							<Image
								key={index}
								src={social.icon}
								alt=""
								width={30}
								height={30}
							/>
						)
					)}
				</div>

				{/* Group below the line: title2, subtitle1 */}
				<div
					className="absolute z-20 flex flex-col items-start -translate-x-1/2 left-[40%]"
					style={{
						top: "calc(38% + 60px)",
						width: "947px",
						pointerEvents: "none",
					}}
				>
					<span
						className="block whitespace-nowrap"
						style={{
							fontSize: "25px",
							lineHeight: "36px",
							fontWeight: 500,
							color: "#FEF8EF",
							fontFamily: "Noto Serif TC, serif",
							textAlign: "start",
						}}
					>
						{t("title2")}
					</span>
					<span
						className="block mt-2 whitespace-nowrap"
						style={{
							fontSize: "25px",
							lineHeight: "36px",
							fontWeight: 500,
							color: "#FEF8EF",
							fontFamily: "Noto Serif TC, serif",
							textAlign: "start",
						}}
					>
						{t("subtitle1")}
					</span>
				</div>

				{/* Button positioned further right */}
				<div
					className="absolute z-20"
					style={{
						top: "calc(38%)",
						right: "5%",
						pointerEvents: "auto",
					}}
				>
					<Link
						href="/"
						className="flex items-center justify-center transition-transform duration-200 hover:scale-105"
					>
						<Image
							src="/images/風水妹/chart-button.png"
							alt={t("cta")}
							width={400}
							height={150}
							className="cursor-pointer"
							style={{
								filter: "drop-shadow(0 8px 32px rgba(163, 177, 22, 0.22))",
							}}
						/>
					</Link>
				</div>

				{/* Extended Bottom Section - Creates seamless transition */}
				<div
					className="absolute bottom-0 left-0 right-0 z-5"
					style={{
						height: "200px",
						background:
							"linear-gradient(to bottom, transparent 0%, rgba(239, 239, 239, 0.3) 70%, rgba(239, 239, 239, 0.8) 100%)",
					}}
				/>
			</section>
		</div>
	);
}
