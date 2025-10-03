"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { get, post, patch } from "@/lib/ajax";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/home/Footer";

export default function DemoPage() {
	const t = useTranslations("demoPage");
	const locale = useLocale();
	const searchParams = useSearchParams();
	const { data: session } = useSession();
	const router = useRouter();
	const [activeTag, setActiveTag] = useState("fengshui");
	const [isProcessingPayment, setIsProcessingPayment] = useState(false);
	const [currentCardType, setCurrentCardType] = useState("");
	const [existingReport, setExistingReport] = useState(null);
	const [showExistingReportDialog, setShowExistingReportDialog] =
		useState(false);
	const [couplePreviewType, setCouplePreviewType] = useState("compatibility"); // "compatibility" or "exclusive"

	// Debug dialog state changes
	useEffect(() => {
		console.log("🔔 Dialog state changed:", showExistingReportDialog);
		console.log("📄 Current existing report:", existingReport);
	}, [showExistingReportDialog]);

	// Debug: Force show dialog for testing (remove this later)
	useEffect(() => {
		if (existingReport && activeTag === "fengshui") {
			console.log(
				"🧪 TEST: Should show dialog for feng shui with existing report"
			);
		}
	}, [existingReport, activeTag]);
	const scrollContainerRef = useRef(null);

	// Handle URL parameters
	useEffect(() => {
		const category = searchParams.get("category");
		if (category && tags.find((tag) => tag.id === category)) {
			setActiveTag(category);
		}
	}, [searchParams]);

	// Check for existing reports when user is authenticated
	useEffect(() => {
		const checkExistingReports = async () => {
			if (!session?.user?.userId) {
				console.log("👤 No user session for report check");
				return;
			}

			console.log(
				"🔍 Checking for existing reports for user:",
				session.user.userId
			);

			try {
				// Check for existing report in current locale
				const locale =
					typeof window !== "undefined"
						? window.location.pathname.split("/")[1]
						: "zh-CN";

				console.log("🌐 Current locale:", locale);

				const { status, data } = await get(
					`/api/reportUserDoc/${session.user.userId}/${locale === "zh-CN" ? "zh" : "tw"}`
				);

				console.log("📊 API response - Status:", status, "Data:", data);

				if (status === 0 && data) {
					console.log("✅ Found existing report:", data);
					setExistingReport(data);
				} else {
					console.log("❌ No existing report found");
					setExistingReport(null);
				}
			} catch (error) {
				console.log("⚠️ Error checking existing reports:", error);
				// Silently handle error
			}
		};

		checkExistingReports();
	}, [session?.user?.userId]);

	const tags = [
		{
			id: "fengshui",
			name: t("tags.fengshui.name"),
			image: "/images/demo/fengshui.png",
			description: t("tags.fengshui.description"),
		},
		{
			id: "life",
			name: t("tags.life.name"),
			image: "/images/demo/life.png",
			description: t("tags.life.description"),
		},
		{
			id: "wealth",
			name: t("tags.wealth.name"),
			image: "/images/demo/wealth.png",
			description: t("tags.wealth.description"),
		},
		{
			id: "relationship",
			name: t("tags.relationship.name"),
			image: "/images/demo/relationship.png",
			description: t("tags.relationship.description"),
		},
		{
			id: "health",
			name: t("tags.health.name"),
			image: "/images/demo/health.png",
			description: t("tags.health.description"),
		},
		{
			id: "career",
			name: t("tags.career.name"),
			image: "/images/demo/career.png",
			description: t("tags.career.description"),
		},
		{
			id: "couple",
			name: t("tags.couple.name"),
			image: "/images/demo/couple.png",
			description: t("tags.couple.description"),
		},
	];

	// Drag functionality
	let isDown = false;
	let startX;
	let scrollLeft;

	const handleMouseDown = (e) => {
		isDown = true;
		startX = e.pageX - scrollContainerRef.current.offsetLeft;
		scrollLeft = scrollContainerRef.current.scrollLeft;
	};

	const handleMouseLeave = () => {
		isDown = false;
	};

	const handleMouseUp = () => {
		isDown = false;
	};

	const handleMouseMove = (e) => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - scrollContainerRef.current.offsetLeft;
		const walk = (x - startX) * 2;
		scrollContainerRef.current.scrollLeft = scrollLeft - walk;
	};

	const getContentForTag = (tagId) => {
		const content = {
			fengshui: {
				title: t("content.fengshui.title"),
				features: [
					t("content.fengshui.features.0"),
					t("content.fengshui.features.1"),
					t("content.fengshui.features.2"),
					t("content.fengshui.features.3"),
				],
				description: t("content.fengshui.description"),
				isSpecial: true,
				mainTitle: t("content.fengshui.mainTitle"),
				previewTitle: t("content.fengshui.previewTitle"),
				previewImage: "/images/demo/風水.png",
			},
			life: {
				title: t("content.life.title"),
				features: [
					t("content.life.features.0"),
					t("content.life.features.1"),
					t("content.life.features.2"),
					t("content.life.features.3"),
				],
				description: t("content.life.description"),
				isSpecial: true,
				mainTitle: t("content.life.mainTitle"),
				previewTitle: t("content.life.previewTitle"),
				previewImage: "/images/demo/命理.png",
			},
			wealth: {
				title: t("content.wealth.title"),
				features: [
					t("content.wealth.features.0"),
					t("content.wealth.features.1"),
					t("content.wealth.features.2"),
					t("content.wealth.features.3"),
				],
				description: t("content.wealth.description"),
				isSpecial: true,
				mainTitle: t("content.wealth.mainTitle"),
				previewTitle: t("content.wealth.previewTitle"),
				previewImage: "/images/demo/財運.png",
			},
			relationship: {
				title: t("content.relationship.title"),
				features: [
					t("content.relationship.features.0"),
					t("content.relationship.features.1"),
					t("content.relationship.features.2"),
					t("content.relationship.features.3"),
				],
				description: t("content.relationship.description"),
				isSpecial: true,
				mainTitle: t("content.relationship.mainTitle"),
				previewTitle: t("content.relationship.previewTitle"),
				previewImage: "/images/demo/感情.png",
			},
			health: {
				title: t("content.health.title"),
				features: [
					t("content.health.features.0"),
					t("content.health.features.1"),
					t("content.health.features.2"),
					t("content.health.features.3"),
				],
				description: t("content.health.description"),
				isSpecial: true,
				mainTitle: t("content.health.mainTitle"),
				previewTitle: t("content.health.previewTitle"),
				previewImage: "/images/demo/健康.png",
			},
			career: {
				title: t("content.career.title"),
				features: [
					t("content.career.features.0"),
					t("content.career.features.1"),
					t("content.career.features.2"),
					t("content.career.features.3"),
				],
				description: t("content.career.description"),
				isSpecial: true,
				mainTitle: t("content.career.mainTitle"),
				previewTitle: t("content.career.previewTitle"),
				previewImage: "/images/demo/事業.png",
			},
			couple: {
				title: t("content.couple.title"),
				features: [
					t("content.couple.features.0"),
					t("content.couple.features.1"),
					t("content.couple.features.2"),
					t("content.couple.features.3"),
				],
				description: t("content.couple.description"),
				isSpecial: true,
				isCouple: true,
				mainTitle: t("content.couple.mainTitle"),
				previewTitle: t("content.couple.previewTitle"),
				previewImage: "/images/demo/couple.png",
			},
		};
		return content[tagId] || content.fengshui;
	};

	// Payment functions
	// Handle viewing existing report
	const handleViewExistingReport = () => {
		setShowExistingReportDialog(false);
		router.push("/report");
	};

	// Handle retest (new payment for feng shui)
	const handleRetestWithPayment = async () => {
		if (!session?.user?.userId) return;

		try {
			setShowExistingReportDialog(false);

			// Reset user's lock status to require new payment
			await post(`/api/users/${session.user.userId}`, {
				isLock: true,
				genStatus: "none",
			});

			// Mark old reports as deleted
			await patch(`/api/reportUserDoc/${session.user.userId}`, {
				isDelete: 1,
			});

			// Proceed to feng shui payment
			await handleFengshuiDirectPayment();
		} catch (error) {
			console.error("Failed to prepare for retest:", error);
		}
	};

	// Handle feng shui payment with authentication checks
	const handleFengshuiPayment = async () => {
		console.log("🔍 Feng shui payment called");
		console.log("👤 Session user ID:", session?.user?.userId);
		console.log("📄 Existing report:", existingReport);

		// Check if user is logged in first
		if (!session?.user?.userId) {
			console.log("❌ No session, redirecting to login");
			// Redirect to login page immediately
			router.push("/auth/login");
			return;
		}

		if (existingReport) {
			console.log("✅ Found existing report, showing dialog");
			setShowExistingReportDialog(true);
			setCurrentCardType("fengshui");
		} else {
			console.log("🆕 No existing report, proceeding to payment");
			// Skip dialog and go directly to payment
			await handleFengshuiDirectPayment();
		}
	};

	// Direct feng shui payment
	const handleFengshuiDirectPayment = async () => {
		setIsProcessingPayment(true);
		setCurrentCardType("fengshui");

		try {
			const response = await fetch("/api/checkoutSessions/payment2", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					quantity: 1,
					directPayment: true,
				}),
			});

			if (response.ok) {
				const data = await response.json();
				if (data.data?.url) {
					window.location.href = data.data.url;
				} else {
					throw new Error("No checkout URL received");
				}
			} else {
				const errorData = await response.json();
				throw new Error(errorData.message || "Payment error");
			}
		} catch (error) {
			console.error("Feng shui payment error:", error);
			setIsProcessingPayment(false);
			setCurrentCardType("");
		}
	};

	// Handle premium payment ($188 for fengshui, $88 for life)
	const handlePremiumPayment = async () => {
		setIsProcessingPayment(true);
		setCurrentCardType("premium");

		try {
			let endpoint;
			if (activeTag === "fengshui") {
				endpoint = "/api/checkoutSessions/payment2"; // $188 fengshui premium
			} else if (activeTag === "life") {
				endpoint = "/api/checkoutSessions/payment4"; // $88 life premium
			} else {
				endpoint = "/api/checkoutSessions/payment4"; // $88 for other categories
			}

			const response = await fetch(endpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					quantity: 1,
					directPayment: true,
				}),
			});

			if (response.ok) {
				const data = await response.json();
				if (data.data?.url) {
					window.location.href = data.data.url;
				} else {
					throw new Error("No checkout URL received");
				}
			} else {
				const errorData = await response.json();
				throw new Error(errorData.message || "Payment error");
			}
		} catch (error) {
			console.error("Premium payment error:", error);
			setIsProcessingPayment(false);
			setCurrentCardType("");
		}
	};

	// Handle $88 couple payment
	const handleCouplePayment = async () => {
		setIsProcessingPayment(true);
		setCurrentCardType("couple");

		try {
			// Prepare request body
			const requestBody = {
				locale: locale, // Use current locale for couple analysis
			};

			// Create checkout session for couple analysis
			const response = await fetch("/api/payment-couple", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(requestBody),
			});

			if (response.ok) {
				const data = await response.json();
				console.log("Couple Payment Response:", data);

				if (data.sessionId) {
					// Import Stripe and redirect to checkout
					const stripe = await import("@stripe/stripe-js").then(
						(mod) =>
							mod.loadStripe(
								process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
							)
					);

					if (stripe) {
						await stripe.redirectToCheckout({
							sessionId: data.sessionId,
						});
					} else {
						throw new Error("Failed to load Stripe");
					}
				} else {
					throw new Error("No session ID received");
				}
			} else {
				const errorData = await response.json();
				throw new Error(errorData.error || "Payment error");
			}
		} catch (error) {
			console.error("Couple payment error:", error);
			setIsProcessingPayment(false);
			setCurrentCardType("");
		}
	};

	// Handle discounted payment ($188 for fengshui, $88 for life, $38 for others)
	const handleDiscountPayment = async () => {
		setIsProcessingPayment(true);
		setCurrentCardType("discount");

		try {
			if (activeTag === "fengshui") {
				// For 風水測算, use the proper authentication flow
				setIsProcessingPayment(false); // Reset state before calling feng shui payment
				await handleFengshuiPayment();
				return;
			} else if (activeTag === "life") {
				// For 命理流年測算, use $88 payment
				const response = await fetch("/api/checkoutSessions/payment4", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						quantity: 1,
						directPayment: true,
					}),
				});

				if (response.ok) {
					const data = await response.json();
					if (data.data?.url) {
						window.location.href = data.data.url;
					} else {
						throw new Error("No checkout URL received");
					}
				} else {
					const errorData = await response.json();
					throw new Error(errorData.message || "Payment error");
				}
			} else if (activeTag === "couple") {
				// For 感情合盤流年測算, use couple payment
				setIsProcessingPayment(false); // Reset state before calling couple payment
				await handleCouplePayment();
				return;
			} else {
				// For 感情, 財運, 健康, 事業 - use $38 fortune payment
				const concernMapping = {
					relationship: "love",
					wealth: "financial",
					health: "health",
					career: "career",
				};

				const concernType = concernMapping[activeTag] || "financial";

				// Get fresh locale from localStorage to ensure consistency
				const storedRegion = localStorage.getItem("userRegion");
				const regionToLocaleMap = {
					china: "zh-CN",
					hongkong: "zh-TW",
					taiwan: "zh-TW",
				};
				const freshLocale =
					regionToLocaleMap[storedRegion] || locale || "zh-TW";

				console.log(
					"💰 Demo page individual payment - Using fresh locale:",
					freshLocale,
					"from stored region:",
					storedRegion
				);

				const response = await fetch("/api/payment-fortune", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						concern: concernType,
						locale: freshLocale, // 🔥 Fix: Add locale parameter like couple payment
					}),
				});

				if (response.ok) {
					const data = await response.json();
					if (data.sessionId) {
						const stripe = await import("@stripe/stripe-js").then(
							(mod) =>
								mod.loadStripe(
									process.env
										.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
								)
						);

						if (stripe) {
							await stripe.redirectToCheckout({
								sessionId: data.sessionId,
							});
						} else {
							throw new Error("Failed to load Stripe");
						}
					} else {
						throw new Error("No session ID received");
					}
				} else {
					const errorData = await response.json();
					throw new Error(errorData.error || "Payment error");
				}
			}
		} catch (error) {
			console.error("Discount payment error:", error);
			setIsProcessingPayment(false);
			setCurrentCardType("");
		}
	};

	// Get pricing based on active tag
	const getPricing = () => {
		let pricing;
		if (activeTag === "fengshui") {
			pricing = {
				originalPrice: "$388",
				discountPrice: "$188",
				unit: t("pricing.perTime"),
			};
		} else if (activeTag === "life") {
			pricing = {
				originalPrice: "$168",
				discountPrice: "$88",
				unit: t("pricing.perTime"),
			};
		} else if (activeTag === "couple") {
			pricing = {
				originalPrice: "$188",
				discountPrice: "$88",
				unit: t("pricing.perTime"),
			};
		} else {
			// For 感情, 財運, 健康, 事業
			pricing = {
				originalPrice: "$88",
				discountPrice: "$38",
				unit: t("pricing.perTime"),
			};
		}
		console.log("Current pricing for", activeTag, ":", pricing);
		return pricing;
	};

	return (
		<div className="min-h-screen bg-[#EFEFEF]">
			{/* Navbar */}
			<Navbar />

			{/* Horizontal Tags Navigation */}
			<div className="w-[95%] mx-auto px-2 md:px-4 pt-20 mb-8 md:mb-15">
				{/* Tags Container with Drag */}
				<div
					ref={scrollContainerRef}
					className="flex px-4 py-4 space-x-3 overflow-x-auto md:px-12 md:space-x-6 scrollbar-hide cursor-grab active:cursor-grabbing"
					style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
					onMouseDown={handleMouseDown}
					onMouseLeave={handleMouseLeave}
					onMouseUp={handleMouseUp}
					onMouseMove={handleMouseMove}
				>
					{tags.map((tag) => (
						<div
							key={tag.id}
							className={`flex-shrink-0 cursor-pointer transition-all duration-300 ${
								activeTag === tag.id
									? "transform scale-105"
									: "hover:transform hover:scale-110"
							}`}
							onClick={() => setActiveTag(tag.id)}
						>
							<div className="relative group">
								{/* Image Container */}
								<div
									className={`relative overflow-hidden rounded-xl transition-all duration-300 w-[120px] md:w-[200px] h-[90px] md:h-[150px] ${
										activeTag === tag.id
											? " transform -translate-y-2"
											: " group-hover:transform group-hover:-translate-y-3"
									}`}
								>
									<img
										src={tag.image}
										alt={tag.name}
										className="object-cover object-top w-full h-full transition-transform duration-300 group-hover:scale-110"
										draggable={false}
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Content Section */}
			<div className="max-w-full px-4 pb-20 mx-auto">
				<div className="p-8">
					{(() => {
						const content = getContentForTag(activeTag);

						// Special layout for all tags except fengshui
						if (content.isSpecial) {
							return (
								<div className="space-y-12">
									{/* Section 1: 流年測算 with buttons */}
									<div className="text-center">
										<div className="mb-8">
											<h2
												className="relative inline-block text-center text-[32px] md:text-[64px] font-extrabold text-[#635D3B] leading-[40px] md:leading-[90px]"
												style={{
													fontFamily:
														"Noto Serif TC,serif",
													WebkitTextStroke:
														"1px #635D3B",
												}}
											>
												{content.mainTitle}
												<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-400 mt-2"></div>
											</h2>
										</div>
										<div className="flex justify-center px-2 space-x-4 md:px-4 md:space-x-8">
											{/* Overlapping Cards Container */}
											<div className="relative flex items-center justify-center w-full max-w-sm mb-4 mr-8 sm:mr-20 md:max-w-md lg:max-w-md md:mb-0">
												{/* Top Card - 限時優惠 (Green Discount) */}
												<div
													className="relative z-20 flex items-center w-full h-20 gap-1 px-5 sm:h-23 md:h-28 sm:px-5 md:px-7 rounded-xl"
													style={{
														background:
															"linear-gradient(to right, #E8F37A, #A6B41B)",
														boxShadow:
															"3px 6px 11.4px rgba(0, 0, 0, 0.25)",
													}}
												>
													<div className="flex flex-col">
														<div
															className="px-2 py-1 text-xl sm:text-3xl md:px-3 md:py-2 md:text-[36px]"
															style={{
																fontFamily:
																	"Noto Serif TC, serif",
																WebkitTextStroke:
																	" 1.5px #838A53",
															}}
														>
															{t(
																"ui.limitedOffer"
															)}
														</div>
														{/* Right Side Button */}
														<div className="flex items-center mb-2">
															<button
																className="bg-white text-[#A3B116] px-6 sm:px-10 rounded-full text-xs sm:text-sm md:text-base font-extrabold hover:bg-gray-100 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
																style={{
																	background:
																		"linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
																	boxShadow:
																		"0 4px 4px rgba(0, 0, 0, 0.25)",
																	color: "#A1B00E",
																	fontFamily:
																		"Noto Sans HK",
																}}
																onClick={
																	handleDiscountPayment
																}
																disabled={
																	isProcessingPayment &&
																	currentCardType ===
																		"discount"
																}
															>
																{isProcessingPayment &&
																currentCardType ===
																	"discount"
																	? t(
																			"ui.processing"
																		)
																	: t(
																			"ui.paymentCalculation"
																		)}
															</button>
														</div>
													</div>

													{/* Centered Price */}
													<div className="flex flex-row justify-center flex-1">
														<div
															className="text-[45px] font-extrabold text-center sm:text-5xl font-arial-black md:text-7xl"
															style={{
																background:
																	"linear-gradient(to bottom, #697304, #838A53)",
																WebkitBackgroundClip:
																	"text",
																WebkitTextFillColor:
																	"transparent",
																backgroundClip:
																	"text",
																WebkitTextStroke:
																	"2.5px white",
																filter: "drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25))",
															}}
														>
															{
																getPricing()
																	.discountPrice
															}
														</div>
														<div
															className="text-xs text-white sm:text-sm font-noto-sans-hk md:text-base"
															style={{
																marginTop:
																	"auto",
																marginBottom:
																	"8px",
																marginLeft:
																	"4px",
																fontWeight:
																	"bold",
															}}
														>
															{getPricing().unit}
														</div>
													</div>
												</div>

												{/* Bottom Card - 專享版 (White Premium) - Partially Visible */}
												<div
													className="absolute z-10 flex items-center justify-between w-full h-12 px-2 py-2 bg-white border-2 border-gray-300 sm:h-16 left-8 top-18 sm:left-16 sm:top-22 md:left-48 md:top-24 md:h-24 sm:px-4 md:px-6 md:py-4 rounded-xl"
													style={{
														boxShadow:
															"0 4px 8px rgba(0, 0, 0, 0.25)",
													}}
												>
													<div
														className="px-2 py-1 text-lg sm:text-2xl md:text-[36px] font-bold text-[#A1A1A1]"
														style={{
															fontFamily:
																"Noto Serif TC, serif",
															WebkitTextStroke:
																" 1.0px #A1A1A1",
														}}
													>
														{t("ui.premiumVersion")}
													</div>
													<div className="flex flex-col items-center">
														<div
															className="text-2xl font-extrabold text-center sm:text-4xl md:text-5xl"
															style={{
																fontFamily:
																	"Noto Sans HK",
																color: "#A1A1A1",
															}}
														>
															<span
																style={{
																	textDecoration:
																		"line-through",
																	textDecorationColor:
																		"#ef4444",
																	textDecorationThickness:
																		"3px",
																}}
															>
																{
																	getPricing()
																		.originalPrice
																}
															</span>
															<span
																className="text-xs font-normal sm:text-sm md:text-base"
																style={{
																	textDecoration:
																		"none !important",
																	textDecorationLine:
																		"none",
																}}
															>
																{
																	getPricing()
																		.unit
																}
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									{/* Section 2: 所需材料 */}
									<div className="relative text-start">
										<div className="flex items-center justify-between px-4 mb-8 md:px-0">
											<h2
												className="relative inline-block text-start text-[32px] md:text-[64px] ml-2 md:ml-10 font-extrabold text-[#635D3B] leading-[40px] md:leading-[90px] flex-1"
												style={{
													fontFamily:
														"Noto Serif TC, serif",
													WebkitTextStroke:
														"1px #635D3B",
												}}
											>
												{t("sections.materialsNeeded")}
												<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-400 mt-2"></div>
											</h2>
										</div>

										{/* Fixed Chart Button */}
										<div className="fixed z-40 bottom-4 right-4">
											<Link
												href="/"
												className="flex items-center justify-center transition-transform duration-200 active:scale-95 hover:scale-105"
											>
												<Image
													src="/images/風水妹/chart-button.png"
													alt={t(
														"ui.paymentCalculation"
													)}
													width={250}
													height={250}
													className="cursor-pointer w-[110px] md:w-[220px] h-[110px] md:h-[220px]"
													style={{
														filter: "drop-shadow(0 8px 32px rgba(163, 177, 22, 0.22))",
													}}
												/>
											</Link>
										</div>

										<div className="flex justify-center px-4">
											<img
												src={
													activeTag === "fengshui"
														? "/images/demo/material2.png"
														: "/images/demo/material.png"
												}
												alt={t(
													"sections.materialsNeeded"
												)}
												className="h-auto max-w-full md:max-w-[80%] shadow-lg rounded-xl"
											/>
										</div>
									</div>

									{/* Section 3: 流年報告預覽 */}
									<div className="text-start">
										<div className="px-4 mb-8 md:px-0">
											<h2
												className="relative inline-block text-start ml-2 md:ml-10 text-[32px] md:text-[64px] font-extrabold text-[#635D3B] leading-[40px] md:leading-[90px]"
												style={{
													fontFamily:
														"Noto Serif TC, serif",
													WebkitTextStroke:
														"1px #635D3B",
												}}
											>
												{content.previewTitle}
												<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-400 mt-2"></div>
											</h2>
										</div>

										{/* Special couple preview section with toggle buttons */}
										{activeTag === "couple" ? (
											<div className="flex flex-col items-center px-4 space-y-6 md:px-0">
												{/* Toggle Buttons */}
												{/* Toggle Buttons */}
												<div className="flex flex-row space-x-2 md:flex-row md:space-y-0 md:space-x-14">
													<button
														onClick={() =>
															setCouplePreviewType(
																"compatibility"
															)
														}
														className={`px-10 md:px-18 py-3 font-bold text-sm md:text-lg transition-colors duration-300 ${
															couplePreviewType ===
															"compatibility"
																? "bg-[#A3B116] text-white"
																: "bg-[#C1C1C1] text-black"
														}`}
														style={{
															borderRadius:
																"100px",
															fontFamily:
																"Noto Serif TC, serif",
															WebkitTextStroke:
																couplePreviewType ===
																"compatibility"
																	? "0.5px #FFFFFF"
																	: "0.5px #000000",
														}}
													>
														{t(
															"ui.coupleCompatibility"
														)}
													</button>
													<button
														onClick={() =>
															setCouplePreviewType(
																"exclusive"
															)
														}
														className={`px-10 md:px-18 py-3 font-bold text-sm md:text-lg transition-colors duration-300 ${
															couplePreviewType ===
															"exclusive"
																? "bg-[#A3B116] text-white"
																: "bg-[#C1C1C1] text-black"
														}`}
														style={{
															borderRadius:
																"100px",
															fontFamily:
																"Noto Serif TC, serif",
															WebkitTextStroke:
																couplePreviewType ===
																"exclusive"
																	? "0.5px #FFFFFF"
																	: "0.5px #000000",
														}}
													>
														{t("ui.exclusivePlan")}
													</button>
												</div>

												{/* Dynamic Image based on selection */}
												<div className="flex justify-center">
													<img
														src={
															couplePreviewType ===
															"compatibility"
																? "/images/demo/合盤1.png"
																: "/images/demo/合盤2.png"
														}
														alt={
															couplePreviewType ===
															"compatibility"
																? t(
																		"ui.coupleCompatibilityReport"
																	)
																: t(
																		"ui.exclusivePlanReport"
																	)
														}
														className="h-auto max-w-[70%]"
													/>
												</div>
											</div>
										) : activeTag === "life" ? (
											/* Special life preview section with toggle buttons */
											<div className="flex flex-col items-center px-4 space-y-6 md:px-0">
												{/* Toggle Buttons */}
												<div className="flex flex-row space-x-2 md:flex-row md:space-y-0 md:space-x-14">
													<button
														onClick={() =>
															setCouplePreviewType(
																"compatibility"
															)
														}
														className={`px-10 md:px-18 py-3 font-bold text-sm md:text-lg transition-colors duration-300 ${
															couplePreviewType ===
															"compatibility"
																? "bg-[#A3B116] text-white"
																: "bg-[#C1C1C1] text-black"
														}`}
														style={{
															borderRadius:
																"100px",
															fontFamily:
																"Noto Serif TC, serif",
															WebkitTextStroke:
																couplePreviewType ===
																"compatibility"
																	? "0.5px #FFFFFF"
																	: "0.5px #000000",
														}}
													>
														{t(
															"content.life.toggleButton1"
														) || "年運分析"}
													</button>
													<button
														onClick={() =>
															setCouplePreviewType(
																"exclusive"
															)
														}
														className={`px-10 md:px-18 py-3 font-bold text-sm md:text-lg transition-colors duration-300 ${
															couplePreviewType ===
															"exclusive"
																? "bg-[#A3B116] text-white"
																: "bg-[#C1C1C1] text-black"
														}`}
														style={{
															borderRadius:
																"100px",
															fontFamily:
																"Noto Serif TC, serif",
															WebkitTextStroke:
																couplePreviewType ===
																"exclusive"
																	? "0.5px #FFFFFF"
																	: "0.5px #000000",
														}}
													>
														{t(
															"content.life.toggleButton2"
														) || "命格詳解"}
													</button>
												</div>

												{/* Dynamic Image based on selection */}
												<div className="flex justify-center">
													<img
														src={
															couplePreviewType ===
															"compatibility"
																? "/images/demo/命理.png"
																: "/images/demo/命理2.png"
														}
														alt={
															couplePreviewType ===
															"compatibility"
																? t(
																		"content.life.previewAlt1"
																	) ||
																	"年運分析報告"
																: t(
																		"content.life.previewAlt2"
																	) ||
																	"命格詳解報告"
														}
														className="h-auto max-w-[70%]"
													/>
												</div>
											</div>
										) : (
											/* Regular preview for other categories */
											<div className="flex justify-center">
												<img
													src={content.previewImage}
													alt={content.previewTitle}
													className="h-auto max-w-[70%] "
												/>
											</div>
										)}
									</div>
								</div>
							);
						}
					})()}
				</div>
			</div>

			{/* Existing Report Dialog */}
			{showExistingReportDialog && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
					<div className="w-full max-w-md p-4 mx-4 bg-white rounded-lg shadow-xl md:p-6">
						<h3 className="mb-4 text-lg font-bold text-gray-900 md:text-xl">
							{t("dialog.existingReport.title")}
						</h3>
						<p className="mb-6 text-sm text-gray-600 md:text-base">
							{t("dialog.existingReport.message")}
						</p>
						<div className="flex flex-col gap-4 md:flex-row">
							<button
								onClick={handleViewExistingReport}
								className="flex-1 px-4 py-2 text-sm text-white transition-colors bg-blue-600 rounded-lg md:text-base hover:bg-blue-700"
							>
								{t("dialog.existingReport.viewReport")}
							</button>
							<button
								onClick={handleRetestWithPayment}
								className="flex-1 px-4 py-2 text-sm text-white transition-colors bg-green-600 rounded-lg md:text-base hover:bg-green-700"
								disabled={isProcessingPayment}
							>
								{isProcessingPayment
									? t("ui.processing")
									: t("dialog.existingReport.retest")}
							</button>
						</div>
						<button
							onClick={() => setShowExistingReportDialog(false)}
							className="w-full px-4 py-2 mt-3 text-sm text-gray-600 transition-colors bg-gray-200 rounded-lg md:text-base hover:bg-gray-300"
							disabled={isProcessingPayment}
						>
							{t("dialog.existingReport.cancel")}
						</button>
					</div>
				</div>
			)}

			{/* Add custom CSS for hiding scrollbar and 3D flip animation */}
			<style jsx>{`
				.scrollbar-hide::-webkit-scrollbar {
					display: none;
				}
				.perspective-1000 {
					perspective: 1000px;
				}
				.transform-style-preserve-3d {
					transform-style: preserve-3d;
				}
				.backface-hidden {
					backface-visibility: hidden;
				}
				.rotate-y-180 {
					transform: rotateY(180deg);
				}
				.group:hover .group-hover\\:rotate-y-180 {
					transform: rotateY(180deg);
				}

				/* Enhanced payment button animations */
				button:hover {
					transform: scale(1.05) translateY(-2px);
				}

				button:active {
					transform: scale(0.98);
				}

				/* Pulse animation for payment button */
				@keyframes pulse-payment {
					0%,
					100% {
						box-shadow:
							0 8px 20px rgba(163, 177, 22, 0.3),
							0 4px 8px rgba(0, 0, 0, 0.1);
					}
					50% {
						box-shadow:
							0 12px 30px rgba(163, 177, 22, 0.5),
							0 6px 12px rgba(0, 0, 0, 0.15);
					}
				}

				.payment-button {
					animation: pulse-payment 2s ease-in-out infinite;
				}

				/* Glow effect for flip card on hover */
				.flip-card-glow:hover {
					filter: drop-shadow(0 8px 16px rgba(163, 177, 22, 0.2));
				}
			`}</style>

			{/* Footer */}
			<Footer />
		</div>
	);
}
