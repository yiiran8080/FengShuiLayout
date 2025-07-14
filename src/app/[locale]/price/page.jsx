"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/home/FAQ";
import PricePromo from "../../../components/PricePromo";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { get, post, patch } from "@/lib/ajax";

// Remove the metadata export - it's now in layout.jsx

export default function YourPage() {
	const t = useTranslations("pricePage");
	const { data: session } = useSession();
	const router = useRouter();
	const [isUnlocked, setIsUnlocked] = useState(false);
	const [promoCode, setPromoCode] = useState("");
	const [showPromoInput, setShowPromoInput] = useState(false);
	const [promoError, setPromoError] = useState("");
	const [copied, setCopied] = useState(false);

	// Sharing states (simplified without Facebook SDK)
	const [sharing, setSharing] = useState(false);
	const [showShareConfirm, setShowShareConfirm] = useState(false);
	const [showPromoModal, setShowPromoModal] = useState(false);
	const [sharePromoCode, setSharePromoCode] = useState("");

	// Square feet popup states
	const [showSqftPopup, setShowSqftPopup] = useState(false);
	const [sqftValue, setSqftValue] = useState("");
	const [sqftError, setSqftError] = useState("");
	const [isProcessingPayment, setIsProcessingPayment] = useState(false);
	const [currentCardType, setCurrentCardType] = useState(""); // Track which card is being processed

	// Add new state for existing report check
	const [showExistingReportDialog, setShowExistingReportDialog] =
		useState(false);
	const [existingReport, setExistingReport] = useState(null);
	const [checkingExistingReport, setCheckingExistingReport] = useState(false);

	const validPromoCodes = ["UNLOCK2025", "HARMONIQ", "FENGSHUI"];

	// Get current domain dynamically
	const getCurrentDomain = () => {
		if (typeof window !== "undefined") {
			return window.location.origin;
		}
		return "https://www.harmoniqfengshui.com";
	};

	const handlePromoSubmit = () => {
		if (validPromoCodes.includes(promoCode.toUpperCase())) {
			setIsUnlocked(true);
			setShowPromoInput(false);
			setPromoError("");
		} else {
			setPromoError(t("promoError"));
		}
	};

	// Check for existing reports when user is authenticated
	useEffect(() => {
		const checkExistingReports = async () => {
			if (!session?.user?.userId) return;

			setCheckingExistingReport(true);
			try {
				// Check for existing report in current locale
				const locale =
					typeof window !== "undefined"
						? window.location.pathname.split("/")[1]
						: "zh-CN";

				const { status, data } = await get(
					`/api/reportUserDoc/${session.user.userId}/${locale === "zh-CN" ? "zh" : "tw"}`
				);

				if (status === 0 && data) {
					setExistingReport(data);
				}
			} catch (error) {
				console.error("Error checking existing reports:", error);
			} finally {
				setCheckingExistingReport(false);
			}
		};

		checkExistingReports();
	}, [session?.user?.userId]);

	// Handle premium button click
	const handlePremiumClick = () => {
		// Check if user is logged in first
		if (!session?.user?.userId) {
			// Redirect to login page immediately
			router.push("/auth/login");
			return;
		}

		if (existingReport) {
			setShowExistingReportDialog(true);
			setCurrentCardType("premium");
		} else {
			setCurrentCardType("premium");
			setShowSqftPopup(true);
			setSqftError("");
			setSqftValue("");
		}
	};

	// Handle subscription button click
	const handleSubscriptionClick = () => {
		// Check if user is logged in first
		if (!session?.user?.userId) {
			// Redirect to login page immediately
			router.push("/auth/login");
			return;
		}

		if (existingReport) {
			setShowExistingReportDialog(true);
			setCurrentCardType("subscription");
		} else {
			setCurrentCardType("subscription");
			setShowSqftPopup(true);
			setSqftError("");
			setSqftValue("");
		}
	};

	// Handle viewing existing report
	const handleViewExistingReport = () => {
		setShowExistingReportDialog(false);
		router.push("/report");
	};

	// Handle retest (new payment)
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

			// Proceed to payment
			setShowSqftPopup(true);
			setSqftError("");
			setSqftValue("");
		} catch (error) {
			console.error("Error preparing for retest:", error);
			setSqftError("Failed to prepare for retest. Please try again.");
		}
	};

	// Handle square feet submission
	const handleSqftSubmit = async () => {
		const sqft = parseFloat(sqftValue);

		// Minimum 380 square feet validation
		if (!sqftValue || isNaN(sqft) || sqft < 380) {
			setSqftError(t("sqftValidationError"));
			return;
		}

		setIsProcessingPayment(true);
		setSqftError("");

		try {
			// Choose API endpoint based on card type
			const endpoint =
				currentCardType === "premium"
					? "/api/checkoutSessions/payment2"
					: "/api/checkoutSessions/payment1";

			// Create checkout session with square feet quantity
			const response = await fetch(endpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					quantity: Math.ceil(sqft), // Round up to nearest whole number
					squareFeet: sqft,
				}),
			});

			if (response.ok) {
				const data = await response.json();
				if (data.data?.url) {
					// Redirect to Stripe checkout
					window.location.href = data.data.url;
				} else {
					throw new Error("No checkout URL received");
				}
			} else {
				const errorData = await response.json();
				throw new Error(errorData.message || t("paymentError"));
			}
		} catch (error) {
			console.error("Payment error:", error);
			setSqftError(t("paymentError"));
			setIsProcessingPayment(false);
		}
	};

	// Handle popup close
	const handleSqftPopupClose = () => {
		if (!isProcessingPayment) {
			setShowSqftPopup(false);
			setSqftValue("");
			setSqftError("");
			setCurrentCardType("");
		}
	};

	// Simplified Facebook share - Facebook will use Open Graph meta tags
	const handleFacebookShare = () => {
		setSharing(true);

		// Use the current page URL instead of just the domain
		const shareUrl =
			typeof window !== "undefined"
				? window.location.href
				: "https://www.harmoniqfengshui.com/price";

		// Add explicit content for sharing (fallback method)
		const shareText = encodeURIComponent(
			"🏠✨ 發現了一個超棒的風水分析網站！HarmoniQ幫我優化家居布局，讓生活更和諧幸福！現在還有特別優惠，快來試試看吧！"
		);

		// Try with more explicit parameters
		const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
			shareUrl
		)}&quote=${shareText}`;

		console.log("Opening Facebook share dialog:", facebookShareUrl);
		console.log("Share URL:", shareUrl);

		// Open Facebook share dialog in new window
		const popup = window.open(
			facebookShareUrl,
			"facebook-share",
			"width=600,height=500,scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no,directories=no,status=no"
		);

		if (popup) {
			// Track when popup was opened
			const openedAt = Date.now();

			// Check if popup is closed (indicating user completed or cancelled sharing)
			const checkClosed = setInterval(() => {
				try {
					if (popup.closed) {
						clearInterval(checkClosed);
						setSharing(false);
						setTimeout(() => setShowShareConfirm(true), 500);
					}
				} catch (error) {
					clearInterval(checkClosed);
					setSharing(false);
				}
			}, 500);

			// Safety timeout to stop checking after 5 minutes
			setTimeout(() => {
				if (!popup.closed) {
					clearInterval(checkClosed);
					setSharing(false);
				}
			}, 300000); // 5 minutes

			// Focus on the popup window
			popup.focus();
		} else {
			// Popup was blocked
			setSharing(false);
			alert(
				"請允許彈出窗口以分享到Facebook，或手動複製網址分享：" +
					shareUrl
			);

			// Show confirmation dialog anyway in case user shares manually
			setTimeout(() => setShowShareConfirm(true), 1000);
		}
	};

	// Copy to clipboard function
	const copyToClipboard = (text) => {
		if (navigator.clipboard && window.isSecureContext) {
			navigator.clipboard
				.writeText(text)
				.then(() => {
					console.log("Copied to clipboard:", text);
				})
				.catch((err) => {
					console.error("Failed to copy: ", err);
				});
		} else {
			// Fallback for older browsers or non-HTTPS
			const textArea = document.createElement("textarea");
			textArea.value = text;
			textArea.style.position = "fixed";
			textArea.style.left = "-999999px";
			textArea.style.top = "-999999px";
			document.body.appendChild(textArea);
			textArea.focus();
			textArea.select();
			try {
				document.execCommand("copy");
				console.log("Copied to clipboard (fallback):", text);
			} catch (err) {
				console.error("Unable to copy to clipboard", err);
			}
			document.body.removeChild(textArea);
		}
	};

	// Handle share confirmation
	const handleShareConfirm = async (confirmed) => {
		setShowShareConfirm(false);
		if (confirmed) {
			try {
				const response = await fetch("/api/send-promo", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: "user@example.com",
						contentShared: "HarmoniQ Feng Shui Website",
						shareMethod: "facebook_browser",
						shareUrl: "https://www.harmoniqfengshui.com",
					}),
				});

				if (response.ok) {
					const data = await response.json();
					setSharePromoCode(data.code);
					setShowPromoModal(true);
				} else {
					console.error(
						"Failed to get promo code:",
						response.statusText
					);
				}
			} catch (error) {
				console.error("Error getting promo code:", error);
			}
		}
	};

	return (
		<>
			{/* Remove the entire Head component and its contents */}
			<div
				className="min-h-screen bg-center bg-no-repeat bg-cover"
				style={{
					backgroundImage: "url('/images/hero/Tipsbg.png')",
					backgroundColor: "#f8f9fa",
					fontFamily: '"Noto Serif TC", serif',
				}}
			>
				<Navbar />
				<section
					className="self-stretch flex flex-col items-center justify-start mb-25 gap-16 sm:gap-24 lg:gap-[164px] max-w-full text-center text-2xl sm:text-3xl lg:text-[40px] text-[#073e31] font-[ABeeZee] px-4 sm:px-6 lg:px-0"
					style={{ fontFamily: '"Noto Serif TC", serif' }}
				>
					<div className="w-full max-w-[996px] flex flex-col items-center justify-start mt-5 gap-16 sm:gap-20 lg:gap-[120px]">
						{/* Title Section */}
						<div
							className="w-full max-w-[960px] flex flex-col items-start justify-start gap-6 sm:gap-8 lg:gap-10"
							style={{ fontFamily: '"Noto Serif TC", serif' }}
						>
							<h2
								className="mt-6 sm:mt-8 lg:mt-10 self-stretch relative text-[length:inherit] font-bold font-[inherit] text-center sm:text-center"
								style={{ fontFamily: '"Noto Serif TC", serif' }}
							>
								{t("title")}
							</h2>
							<div
								className="self-stretch leading-6 text-center sm:leading-7 lg:leading-8"
								style={{ fontFamily: '"Noto Serif TC", serif' }}
							>
								<p className="mb-3 text-lg font-bold sm:mb-4 sm:text-xl">
									{t("subtitle")}
								</p>
								<p className="text-base sm:text-lg">
									{t("desc")}
								</p>
							</div>

							{/* Facebook Share Button - Simplified */}
							<div className="flex flex-col items-center w-full">
								<button
									onClick={handleFacebookShare}
									disabled={sharing}
									className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-[#1877F2] text-white rounded-[50px] hover:bg-[#166fe5] transition-colors text-sm sm:text-base lg:text-lg font-medium shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200 disabled:opacity-70 disabled:transform-none flex items-center gap-2 justify-center"
									style={{
										boxShadow:
											"0 6px 20px rgba(24, 119, 242, 0.4)",
										fontFamily: '"Noto Serif TC", serif',
									}}
								>
									{/* Facebook Icon SVG */}
									<svg
										className="w-5 h-5 sm:w-6 sm:h-6"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
									</svg>
									{sharing
										? t("shareProcessing")
										: t("shareToFacebook")}
								</button>

								{/* Promo Code Display */}
								{sharePromoCode && (
									<div className="flex flex-col items-center w-full max-w-xs mx-auto mt-6">
										<div
											className="flex flex-col items-center w-full p-4 border-2 rounded-lg shadow-md"
											style={{
												borderColor: "#096e56",
												backgroundColor:
													"rgba(9,110,86,0.08)",
												backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='60' viewBox='0 0 120 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='2' fill='%23096e56'/%3E%3Ccircle cx='60' cy='20' r='1.5' fill='%23fbbf24'/%3E%3Ccircle cx='100' cy='40' r='2' fill='%23f87171'/%3E%3Ccircle cx='30' cy='50' r='1.5' fill='%23096e56'/%3E%3Ccircle cx='80' cy='10' r='1.5' fill='%23096e56'/%3E%3Ccircle cx='110' cy='15' r='1' fill='%23fbbf24'/%3E%3Ccircle cx='50' cy='45' r='1' fill='%23f87171'/%3E%3C/svg%3E")`,
												backgroundRepeat: "repeat",
												fontFamily:
													'"Noto Serif TC", serif',
											}}
										>
											<div
												className="mb-2 text-sm"
												style={{
													color: "#096e56",
													fontFamily:
														'"Noto Serif TC", serif',
												}}
											>
												{t("yourPromoCode")}
											</div>
											<div
												className="mb-2 text-2xl font-bold tracking-wider select-all"
												style={{
													color: "#096e56",
													fontFamily:
														'"Noto Serif TC", serif',
												}}
											>
												{sharePromoCode}
											</div>
											<button
												onClick={() => {
													copyToClipboard(
														sharePromoCode
													);
													setCopied(true);
													setTimeout(
														() => setCopied(false),
														1500
													);
												}}
												className="px-4 py-1 text-sm font-medium bg-[#096e56] text-white rounded transition-colors shadow hover:bg-[#19ad6b] hover:shadow-lg"
												style={{
													fontFamily:
														'"Noto Serif TC", serif',
												}}
											>
												{t("copyPromoCode")}
											</button>
											{copied && (
												<div
													className="mt-2 text-xs font-semibold text-green-600 animate-fade-in"
													style={{
														fontFamily:
															'"Noto Serif TC", serif',
													}}
												>
													{t("copied")}
												</div>
											)}
											<div
												className="mt-2 text-xs text-center"
												style={{
													color: "#096e56",
													opacity: 0.7,
													fontFamily:
														'"Noto Serif TC", serif',
												}}
											>
												{t("usePromoCodeBelow")}
											</div>
										</div>
									</div>
								)}
							</div>
						</div>

						{/* Pricing Cards Section */}
						<div className="self-stretch flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-[70px] max-w-full">
							{/* First card - Free version */}
							<section
								className="group w-full max-w-[328px] sm:w-[280px] lg:w-[328px] h-auto sm:h-[480px] lg:h-[514px] rounded-[20px] bg-[#fff] border-[#066952] border-solid border-[1px] box-border flex flex-col items-center justify-between p-4 sm:p-6 lg:p-7 text-left text-2xl sm:text-3xl lg:text-4xl text-[#111827] font-[Inter] transition-all duration-200 hover:scale-105 sm:hover:scale-110 lg:hover:scale-120 hover:border-[#066952] hover:border-2 hover:bg-[#f2faf7] sm:flex-1 shadow-lg hover:shadow-xl"
								style={{
									boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
								}}
							>
								<div className="w-full max-w-[232.7px] h-full flex flex-col items-center justify-between pt-0 px-0 box-border">
									<div className="w-full max-w-[232px] flex flex-col items-start justify-start gap-4 sm:gap-5 lg:gap-6 flex-grow">
										{/* Price Section */}
										<div className="flex flex-col items-start self-stretch justify-start gap-3 sm:gap-4 lg:gap-5">
											<div className="flex flex-row items-start justify-start w-full">
												<div className="flex flex-row items-center justify-start gap-2">
													<h2 className="m-0 relative text-[length:inherit] leading-8 sm:leading-10 lg:leading-[46px] font-[500] font-[inherit] inline-block shrink-0 text-xl sm:text-2xl lg:text-4xl">
														$0
													</h2>
													<div className="relative text-sm sm:text-base lg:text-[17px] font-[500] text-[#848199] inline-block shrink-0">
														/ {t("perSqft")}
													</div>
												</div>
											</div>
											<div className="self-stretch flex flex-row items-start justify-start text-xl sm:text-2xl lg:text-[28px]">
												<h2 className="m-0 relative text-[length:inherit] font-[500] font-[inherit] inline-block">
													{t("freeVersion")}
												</h2>
											</div>
										</div>

										{/* Features List */}
										<div className="w-full flex flex-col items-start justify-start gap-2 text-xs sm:text-sm text-Font-Color font-[ABeeZee]">
											{t
												.raw("freeFeatures", {
													returnObjects: true,
												})
												.map((feature, index) => (
													<div
														key={index}
														className="self-stretch flex flex-row items-start justify-start h-auto min-h-[20px] text-sm sm:text-base font-['DM_Sans']"
													>
														<div className="w-full flex flex-row items-center justify-between gap-2.5">
															<Image
																className="relative w-4 h-4 sm:w-5 sm:h-5"
																loading="lazy"
																width={20}
																height={20}
																sizes="100vw"
																alt=""
																src="/images/hero/tick.svg"
															/>
															<div className="flex-1 relative leading-[14px] sm:leading-4 inline-block">
																{feature}
															</div>
														</div>
													</div>
												))}

											{/* Disabled features */}
											{t
												.raw("freeDisabled", {
													returnObjects: true,
												})
												.map((feature, index) => (
													<div
														key={index}
														className="self-stretch flex flex-row items-start justify-start h-auto min-h-[20px] text-sm sm:text-base font-['DM_Sans']"
													>
														<div className="w-full flex flex-row items-center justify-between gap-2.5">
															<Image
																className="relative w-4 h-4 sm:w-5 sm:h-5"
																loading="lazy"
																width={20}
																height={20}
																sizes="100vw"
																alt=""
																src="/images/hero/cross.svg"
															/>
															<div className="flex-1 relative leading-[14px] sm:leading-4 inline-block text-gray-400">
																{feature}
															</div>
														</div>
													</div>
												))}
										</div>
									</div>

									{/* Button */}
									<div className="w-full mt-6 sm:w-auto">
										<Link
											href="/free"
											className="w-full sm:w-auto"
										>
											<button
												className="cursor-pointer [border:none] px-4 sm:px-6 lg:px-[67px] py-2 sm:py-3 lg:py-[4.1px] bg-[#096e56] rounded-[50px] sm:rounded-[75px] lg:rounded-[100px] overflow-hidden flex flex-row items-center justify-center shrink-0 transition-all duration-200 group-hover:bg-[#19ad6b] hover:bg-[#19ad6b] w-full sm:w-auto shadow-md hover:shadow-lg"
												style={{
													boxShadow:
														"0 4px 15px rgba(0, 0, 0, 0.2)",
												}}
											>
												<div className="text-sm sm:text-base leading-6 sm:leading-8 font-[ABeeZee] text-[#fff] text-center">
													{t("freeBtn")}
												</div>
											</button>
										</Link>
									</div>
								</div>
							</section>

							{/* Second card - Premium version with button lock only */}
							<section
								className="relative w-full max-w-[328px] sm:w-[280px] lg:w-[328px] h-auto sm:h-[480px] lg:h-[514px] rounded-[20px] bg-[#fff] border-[#066952] border-solid border-[1px] box-border flex flex-col items-center justify-between p-4 sm:p-6 lg:p-7 text-left text-2xl sm:text-3xl lg:text-4xl text-[#111827] font-[Inter] transition-all duration-200 hover:scale-105 sm:hover:scale-110 lg:hover:scale-120 hover:border-[#066952] hover:border-2 hover:bg-[#f2faf7] sm:flex-1 shadow-lg hover:shadow-xl"
								style={{
									boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
								}}
							>
								{/* Badge - always visible */}
								<div className="absolute top-2 sm:top-[-10] right-2 sm:right-1 bg-[#0e8c6f] text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-md shadow-lg shadow-[#0e8c6f]/70 z-20">
									{isUnlocked
										? t("unlockedBadge")
										: t("popularBadge")}
								</div>

								<div className="w-full max-w-[232.7px] h-full flex flex-col items-center justify-between pt-0 px-0 box-border">
									<div className="w-full max-w-[232px] flex flex-col items-start justify-start gap-4 sm:gap-5 lg:gap-6 flex-grow">
										{/* Price Section */}
										<div className="flex flex-col items-start self-stretch justify-start gap-3 sm:gap-4 lg:gap-5">
											<div className="flex flex-row items-start justify-start w-full">
												<div className="flex flex-row items-center justify-start gap-2">
													<h2 className="m-0 relative text-[length:inherit] leading-8 sm:leading-10 lg:leading-[46px] font-[500] font-[inherit] inline-block shrink-0 text-xl sm:text-2xl lg:text-4xl">
														$1
														<span className="ml-1 text-sm text-gray-500 line-through sm:text-base">
															$3.8
														</span>
													</h2>
													<div className="relative text-sm sm:text-base lg:text-[17px] font-[500] text-[#848199] inline-block shrink-0">
														/ {t("perSqft")}
													</div>
												</div>
											</div>
											<div className="self-stretch flex flex-row items-start justify-start text-xl sm:text-2xl lg:text-[28px]">
												<h2 className="m-0 relative text-[length:inherit] font-[500] font-[inherit] inline-block">
													{t("premiumVersion")}
												</h2>
											</div>
										</div>

										{/* Features List */}
										<div className="w-full flex flex-col items-start justify-start gap-2 text-xs sm:text-sm text-Font-Color font-[ABeeZee]">
											{t
												.raw("premiumFeatures", {
													returnObjects: true,
												})
												.map((feature, index) => (
													<div
														key={index}
														className="self-stretch flex flex-row items-start justify-start h-auto min-h-[20px] text-sm sm:text-base font-['DM_Sans']"
													>
														<div className="w-full flex flex-row items-center justify-between gap-2.5">
															<Image
																className="relative w-4 h-4 sm:w-5 sm:h-5"
																loading="lazy"
																width={20}
																height={20}
																sizes="100vw"
																alt=""
																src="/images/hero/tick.svg"
															/>
															<div className="flex-1 relative leading-[14px] sm:leading-4 inline-block">
																{feature}
															</div>
														</div>
													</div>
												))}
										</div>
									</div>

									{/* Button Area - with promo code input when locked */}
									<div className="w-full mt-6 sm:w-auto">
										{isUnlocked ? (
											/* Unlocked State - Show promo section first, then button */
											<div className="w-full space-y-3">
												{/* Show promo code info when unlocked */}
												<div className="text-center">
													<p className="mb-2 text-xs text-gray-600">
														{t("unlockedWithPromo")}
													</p>
													<div className="text-xs text-[#096e56] font-medium">
														{t("promoCodeUsed")}
													</div>
												</div>

												{/* Unlocked Button */}
												<button
													onClick={handlePremiumClick}
													className="cursor-pointer [border:none] px-4 sm:px-6 lg:px-[67px] py-2 sm:py-3 lg:py-[4.1px] bg-[#096e56] rounded-[50px] sm:rounded-[75px] lg:rounded-[100px] overflow-hidden flex flex-row items-center justify-center shrink-0 transition-all duration-200 hover:bg-[#19ad6b] w-full sm:w-auto shadow-md hover:shadow-lg"
													disabled={
														isProcessingPayment
													}
													style={{
														boxShadow:
															"0 4px 15px rgba(0, 0, 0, 0.2)",
													}}
												>
													<div className="text-sm sm:text-base leading-6 sm:leading-8 font-[ABeeZee] text-[#fff] text-center">
														{isProcessingPayment &&
														currentCardType ===
															"premium"
															? t("processing")
															: t("premiumBtn")}
													</div>
												</button>
											</div>
										) : (
											/* Locked State - Show promo section first, then button */
											<div className="w-full space-y-3">
												{/* Promo Code Section - Always visible when locked */}
												{!showPromoInput ? (
													/* Unlock with Promo Code */
													<div className="text-center">
														<p className="mb-2 text-xs text-gray-600">
															{t("havePromoCode")}
														</p>
														<button
															onClick={() =>
																setShowPromoInput(
																	true
																)
															}
															className="text-xs text-[#096e56] hover:text-[#19ad6b] font-medium underline transition-colors"
														>
															{t(
																"enterPromoCode"
															)}
														</button>
													</div>
												) : (
													/* Promo Code Input */
													<div className="space-y-2">
														<input
															type="text"
															placeholder={t(
																"inputPromoPlaceholder"
															)}
															value={promoCode}
															onChange={(e) =>
																setPromoCode(
																	e.target
																		.value
																)
															}
															className="w-full px-3 py-2 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:border-[#096e56] focus:outline-none"
															onKeyPress={(e) =>
																e.key ===
																	"Enter" &&
																handlePromoSubmit()
															}
														/>
														{promoError && (
															<p className="text-xs text-center text-red-500">
																{promoError}
															</p>
														)}
														<div className="flex gap-2">
															<button
																onClick={
																	handlePromoSubmit
																}
																className="px-4 py-2 bg-[#096e56] text-white rounded-lg text-sm hover:bg-[#19ad6b] transition-colors flex-1 shadow-sm hover:shadow-md"
															>
																{t(
																	"confirmBtn"
																)}
															</button>
															<button
																onClick={() => {
																	setShowPromoInput(
																		false
																	);
																	setPromoCode(
																		""
																	);
																	setPromoError(
																		""
																	);
																}}
																className="flex-1 px-4 py-2 text-sm text-white transition-colors bg-gray-500 rounded-lg shadow-sm hover:bg-gray-600 hover:shadow-md"
															>
																{t("cancelBtn")}
															</button>
														</div>
													</div>
												)}

												{/* Locked Button - Moved to bottom */}
												<button
													className="cursor-not-allowed [border:none] px-4 sm:px-6 lg:px-[67px] py-2 sm:py-3 lg:py-[4.1px] bg-gray-400 rounded-[50px] sm:rounded-[75px] lg:rounded-[100px] overflow-hidden flex flex-row items-center justify-center shrink-0 w-full sm:w-auto shadow-md opacity-75"
													disabled
													style={{
														boxShadow:
															"0 4px 15px rgba(0, 0, 0, 0.2)",
													}}
												>
													<div className="text-sm sm:text-base leading-6 sm:leading-8 font-[ABeeZee] text-[#fff] text-center">
														{t("lockedBtn")}
													</div>
												</button>
											</div>
										)}
									</div>
								</div>
							</section>

							{/* Third card - Subscription version */}
							<section
								className="relative w-full max-w-[328px] sm:w-[280px] lg:w-[328px] h-auto sm:h-[480px] lg:h-[514px] rounded-[20px] bg-[#fff] border-[#066952] border-solid border-[1px] box-border flex flex-col items-center justify-between p-4 sm:p-6 lg:p-7 text-left text-2xl sm:text-3xl lg:text-4xl text-[#111827] font-[Inter] transition-all duration-200 hover:scale-105 sm:hover:scale-110 lg:hover:scale-120 hover:border-[#066952] hover:border-2 hover:bg-[#f2faf7] sm:flex-1 shadow-lg hover:shadow-xl"
								style={{
									boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
								}}
							>
								<div className="w-full max-w-[232.7px] h-full flex flex-col items-center justify-between pt-0 px-0 box-border">
									<div className="w-full max-w-[232px] flex flex-col items-start justify-start gap-4 sm:gap-5 lg:gap-6 flex-grow">
										{/* Price Section */}
										<div className="flex flex-col items-start self-stretch justify-start gap-3 sm:gap-4 lg:gap-5">
											<div className="flex flex-row items-start justify-start w-full">
												<div className="flex flex-row items-center justify-start gap-2">
													<h2 className="m-0 relative text-[length:inherit] leading-8 sm:leading-10 lg:leading-[46px] font-[500] font-[inherit] inline-block shrink-0 text-xl sm:text-2xl lg:text-4xl">
														$3.8
													</h2>
													<div className="relative text-sm sm:text-base lg:text-[17px] font-[500] text-[#848199] inline-block shrink-0">
														/ {t("perSqft")}
													</div>
												</div>
											</div>
											<div className="self-stretch flex flex-row items-start justify-start text-xl sm:text-2xl lg:text-[28px]">
												<h2 className="m-0 relative text-[length:inherit] font-[500] font-[inherit] inline-block">
													{t("subVersion")}
												</h2>
											</div>
										</div>

										{/* Features List */}
										<div className="w-full flex flex-col items-start justify-start gap-2 text-xs sm:text-sm text-Font-Color font-[ABeeZee]">
											{t
												.raw("premiumFeatures", {
													returnObjects: true,
												})
												.map((feature, index) => (
													<div
														key={index}
														className="self-stretch flex flex-row items-start justify-start h-auto min-h-[20px] text-sm sm:text-base font-['DM_Sans']"
													>
														<div className="w-full flex flex-row items-center justify-between gap-2.5">
															<Image
																className="relative w-4 h-4 sm:w-5 sm:h-5"
																loading="lazy"
																width={20}
																height={20}
																sizes="100vw"
																alt=""
																src="/images/hero/tick.svg"
															/>
															<div className="flex-1 relative leading-[14px] sm:leading-4 inline-block">
																{feature}
															</div>
														</div>
													</div>
												))}
										</div>
									</div>

									{/* Button */}
									<div className="w-full mt-6 sm:w-auto">
										<button
											onClick={handleSubscriptionClick}
											disabled={isProcessingPayment}
											className="cursor-pointer [border:none] px-4 sm:px-6 lg:px-[67px] py-2 sm:py-3 lg:py-[4.1px] bg-[#096e56] rounded-[50px] sm:rounded-[75px] lg:rounded-[100px] overflow-hidden flex flex-row items-center justify-center shrink-0 transition-all duration-200 group-hover:bg-[#19ad6b] hover:bg-[#19ad6b] w-full sm:w-auto shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
											style={{
												boxShadow:
													"0 4px 15px rgba(0, 0, 0, 0.2)",
											}}
										>
											<div className="text-sm sm:text-base leading-6 sm:leading-8 font-[ABeeZee] text-[#fff] text-center">
												{isProcessingPayment &&
												currentCardType ===
													"subscription"
													? t("processing")
													: t("subBtn")}
											</div>
										</button>
									</div>
								</div>
							</section>
						</div>
					</div>
				</section>

				{/* Square Feet Input Popup */}
				{showSqftPopup && (
					<div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/20">
						<div className="relative w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl animate-fade-in">
							<div className="text-center">
								{/* Icon */}
								<div className="mb-6 text-5xl">🏠</div>

								{/* Title */}
								<h3 className="mb-4 text-xl font-bold text-gray-800">
									{t("sqftPopupTitleNew")}
								</h3>

								{/* Description */}
								<p className="mb-6 text-sm leading-relaxed text-gray-600">
									{t("sqftPopupDescNew")}
									<br />
									<span className="font-medium text-red-600">
										{t("sqftMinimumNote")}
									</span>
								</p>

								{/* Input */}
								<div className="mb-6">
									<label className="block mb-2 text-sm font-medium text-left text-gray-700">
										{t("sqftInputLabelNew")}
									</label>
									<input
										type="number"
										value={sqftValue}
										onChange={(e) =>
											setSqftValue(e.target.value)
										}
										placeholder={t("sqftPlaceholderNew")}
										className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-center text-lg focus:border-[#096e56] focus:outline-none transition-colors"
										min="380"
										step="1"
										disabled={isProcessingPayment}
									/>
									{sqftError && (
										<p className="mt-2 text-sm text-center text-red-500">
											{sqftError}
										</p>
									)}
								</div>

								{/* Buttons */}
								<div className="flex gap-3">
									<button
										onClick={handleSqftSubmit}
										disabled={isProcessingPayment}
										className="flex-1 px-6 py-3 font-medium text-white transition-all duration-200 bg-[#096e56] rounded-lg hover:bg-[#19ad6b] shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
									>
										{isProcessingPayment
											? t("processing")
											: t("buyNow")}
									</button>
									<button
										onClick={handleSqftPopupClose}
										disabled={isProcessingPayment}
										className="flex-1 px-6 py-3 font-medium text-gray-700 transition-colors bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
									>
										{t("cancel")}
									</button>
								</div>
							</div>
						</div>
					</div>
				)}

				{/* Share Confirmation Modal */}
				{showShareConfirm && (
					<div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-white/30">
						<div className="relative max-w-md p-6 bg-white shadow-2xl rounded-2xl">
							<div className="text-center">
								<div className="mb-4 text-4xl">🤔</div>
								<h3 className="mb-3 text-lg font-bold text-gray-800">
									{t("shareConfirmTitle")}
								</h3>
								<p className="mb-6 text-sm leading-relaxed text-gray-600 whitespace-pre-line">
									{t("shareConfirmDesc")}
								</p>
								<div className="flex gap-3">
									<button
										onClick={() => handleShareConfirm(true)}
										className="flex-1 px-4 py-2 font-medium text-white transition-colors bg-[#096e56] rounded-lg hover:bg-[#19ad6b] shadow-md hover:shadow-lg"
									>
										{t("yesShared")}
									</button>
									<button
										onClick={() =>
											handleShareConfirm(false)
										}
										className="flex-1 px-4 py-2 font-medium text-gray-700 transition-colors bg-gray-200 rounded-lg hover:bg-gray-300"
									>
										{t("cancel")}
									</button>
								</div>
							</div>
						</div>
					</div>
				)}

				{/* Add Existing Report Dialog */}
				<AlertDialog
					open={showExistingReportDialog}
					onOpenChange={setShowExistingReportDialog}
				>
					<AlertDialogContent
						style={{ fontFamily: '"Noto Serif TC", serif' }}
					>
						<AlertDialogHeader>
							<AlertDialogTitle>
								{t("existingReportFound")}
							</AlertDialogTitle>
							<AlertDialogDescription>
								{t("existingReportDescription")}
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel>{t("cancel")}</AlertDialogCancel>
							<AlertDialogAction
								onClick={handleViewExistingReport}
							>
								{t("viewExistingReport")}
							</AlertDialogAction>
							<AlertDialogAction
								onClick={handleRetestWithPayment}
								className="bg-orange-500 hover:bg-orange-600"
							>
								{t("retestWithPayment")}
							</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>

				{/* Show loading state while checking for existing reports */}
				{/* {checkingExistingReport && (
					<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
						<div className="p-6 bg-white rounded-lg">
							<div className="w-8 h-8 mx-auto border-b-2 border-green-500 rounded-full animate-spin"></div>
							<p className="mt-2 text-center">
								{t("checkingExistingReports")}
							</p>
						</div>
					</div>
				)} */}

				<PricePromo />
				<FAQ />
				<Footer />
			</div>

			<style jsx global>
				{`
					@layer utilities {
						.animate-fade-in {
							animation: fadeIn 0.3s ease-out;
						}
						@keyframes fadeIn {
							from {
								opacity: 0;
								transform: scale(0.95);
							}
							to {
								opacity: 1;
								transform: scale(1);
							}
						}
					}
				`}
			</style>
		</>
	);
}
