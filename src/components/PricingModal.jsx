"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function PricingModal({ isOpen, onClose }) {
	const t = useTranslations("pricePage");
	const { data: session } = useSession();
	const router = useRouter();
	const [isUnlocked, setIsUnlocked] = useState(false);
	const [showPromoInput, setShowPromoInput] = useState(false);
	const [promoCode, setPromoCode] = useState("");
	const [promoError, setPromoError] = useState("");
	const [isProcessingPayment, setIsProcessingPayment] = useState(false);
	const [currentCardType, setCurrentCardType] = useState("");
	const [showSqftPopup, setShowSqftPopup] = useState(false);
	const [sqftValue, setSqftValue] = useState("");
	const [sqftError, setSqftError] = useState("");

	// Facebook sharing states
	const [sharing, setSharing] = useState(false);
	const [showShareConfirm, setShowShareConfirm] = useState(false);
	const [sharePromoCode, setSharePromoCode] = useState("");
	const [showPromoModal, setShowPromoModal] = useState(false);
	const [copied, setCopied] = useState(false);

	const validPromoCodes = ["UNLOCK2025", "HARMONIQ", "FENGSHUI"];

	// Facebook share function
	const handleFacebookShare = () => {
		setSharing(true);

		// Use the current page URL
		const shareUrl =
			typeof window !== "undefined"
				? window.location.href
				: "https://www.harmoniqfengshui.com";

		// Add content for sharing
		const shareText = encodeURIComponent(
			"🏠✨ 發現了一個超棒的風水分析網站！HarmoniQ幫我優化家居布局，讓生活更和諧幸福！現在還有特別優惠，快來試試看吧！"
		);

		// Create Facebook share URL
		const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${shareText}`;

		console.log("Opening Facebook share dialog:", facebookShareUrl);
		console.log("Share URL:", shareUrl);

		// Open Facebook share dialog in new window
		const popup = window.open(
			facebookShareUrl,
			"facebook-share",
			"width=600,height=500,scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no,directories=no,status=no"
		);

		if (popup) {
			// Check if popup is closed
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
					setShowPromoModal(true); // Show promo modal instead of inline display
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

	const handlePromoSubmit = () => {
		if (promoCode.trim() === "") {
			setPromoError("請輸入優惠碼");
			return;
		}

		// Use the same validation as the price page
		if (validPromoCodes.includes(promoCode.toUpperCase())) {
			setIsUnlocked(true);
			setShowPromoInput(false);
			setPromoError("");
		} else {
			setPromoError("無效的優惠碼");
		}
	};

	const handlePremiumClick = () => {
		// Check if user is logged in first
		if (!session?.user?.userId) {
			router.push("/auth/login");
			onClose();
			return;
		}

		setCurrentCardType("premium");
		setShowSqftPopup(true);
	};

	const handleSubscriptionClick = () => {
		// Check if user is logged in first
		if (!session?.user?.userId) {
			router.push("/auth/login");
			onClose();
			return;
		}

		setCurrentCardType("subscription");
		setShowSqftPopup(true);
	};

	const handleSqftSubmit = async () => {
		const sqft = parseFloat(sqftValue);

		// Minimum 380 square feet validation
		if (!sqftValue || isNaN(sqft) || sqft < 380) {
			setSqftError("最少需要380平方尺");
			return;
		}

		setIsProcessingPayment(true);
		setSqftError("");

		try {
			// Choose API endpoint based on card type (same as price page)
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
				throw new Error(errorData.message || "支付錯誤");
			}
		} catch (error) {
			console.error("Payment error:", error);
			setSqftError("支付錯誤，請重試");
			setIsProcessingPayment(false);
		}
	};

	const handleSqftPopupClose = () => {
		if (!isProcessingPayment) {
			setShowSqftPopup(false);
			setSqftValue("");
			setSqftError("");
			setCurrentCardType("");
		}
	};

	if (!isOpen) return null;

	return (
		<>
			<div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/50">
				<div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl rounded-2xl animate-fade-in">
					{/* Close Button */}
					<button
						onClick={onClose}
						className="absolute z-10 flex items-center justify-center w-8 h-8 transition-colors bg-gray-200 rounded-full top-4 right-4 hover:bg-gray-300"
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>

					{/* Modal Content */}
					<div className="p-8">
						<div className="mb-8 text-center">
							<h2 className="text-3xl font-bold text-[#374A37] mb-4">
								選擇您的方案
							</h2>
							<p className="text-gray-600">
								解鎖詳細風水分析，獲得專業建議
							</p>
						</div>

						{/* Facebook Share Button */}
						<div className="w-full max-w-md mx-auto mb-8">
							<button
								onClick={handleFacebookShare}
								disabled={sharing}
								className="w-full px-6 py-3 bg-[#1877F2] text-white rounded-lg hover:bg-[#166fe5] transition-colors text-sm font-medium shadow-md hover:shadow-lg disabled:opacity-70 flex items-center gap-3 justify-center"
								style={{
									boxShadow:
										"0 4px 15px rgba(24, 119, 242, 0.3)",
									fontFamily: "Noto Serif TC, serif",
								}}
							>
								{/* Facebook Icon SVG */}
								<svg
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
								</svg>
								{sharing
									? "分享中..."
									: "分享到Facebook獲得優惠碼"}
							</button>
						</div>

						{/* Pricing Cards Section */}
						<div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-[70px] max-w-full">
							{/* First card - Free version */}
							<section
								className="group w-full max-w-[328px] sm:w-[280px] lg:w-[328px] h-auto sm:h-[480px] lg:h-[514px] rounded-[20px] bg-[#fff] border-[#066952] border-solid border-[1px] box-border flex flex-col items-center justify-between p-4 sm:p-6 lg:p-7 text-left text-2xl sm:text-3xl lg:text-4xl text-[#111827] font-[Inter] transition-all duration-200 hover:border-[#A3B116] hover:border-[4px] hover:bg-[#F7FAF2] sm:flex-1 shadow-lg hover:shadow-xl"
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
														/ 每平方尺
													</div>
												</div>
											</div>
											<div className="self-stretch flex flex-row items-start justify-start text-xl sm:text-2xl lg:text-[28px]">
												<h2 className="m-0 relative text-[length:inherit] font-[500] font-[inherit] inline-block">
													免費版本
												</h2>
											</div>
										</div>

										{/* Features List */}
										<div className="w-full flex flex-col items-start justify-start gap-2 text-xs sm:text-sm text-Font-Color font-[ABeeZee]">
											{[
												"基本房間分析",
												"簡單建議",
												"有限內容",
											].map((feature, index) => (
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
											{[
												"詳細分析",
												"專業建議",
												"完整報告",
											].map((feature, index) => (
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
										<button
											className="cursor-pointer [border:none] px-4 sm:px-6 lg:px-[67px] py-2 sm:py-3 lg:py-[4.1px] bg-[#A3B116] rounded-[50px] sm:rounded-[75px] lg:rounded-[100px] overflow-hidden flex flex-row items-center justify-center shrink-0 transition-all duration-200 hover:bg-[#8a9913] w-full sm:w-auto shadow-md hover:shadow-lg"
											style={{
												boxShadow:
													"0 4px 15px rgba(0, 0, 0, 0.2)",
											}}
										>
											<div className="text-sm sm:text-base leading-6 sm:leading-8 font-[ABeeZee] text-[#fff] text-center">
												免費使用
											</div>
										</button>
									</div>
								</div>
							</section>

							{/* Second card - Premium version */}
							<section
								className="relative w-full max-w-[328px] sm:w-[280px] lg:w-[328px] h-auto sm:h-[480px] lg:h-[514px] rounded-[20px] bg-[#fff] border-[#066952] border-solid border-[1px] box-border flex flex-col items-center justify-between p-4 sm:p-6 lg:p-7 text-left text-2xl sm:text-3xl lg:text-4xl text-[#111827] font-[Inter] transition-all duration-200 hover:border-[#A3B116] hover:border-[4px] hover:bg-[#F7FAF2] sm:flex-1 shadow-lg hover:shadow-xl"
								style={{
									boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
								}}
							>
								{/* Badge */}
								<div className="absolute top-2 sm:top-[-10] right-2 sm:right-1 bg-[#A3B116] text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-md shadow-lg shadow-[#A3B116]/70 z-20">
									{isUnlocked ? "已解鎖" : "熱門"}
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
														/ 每平方尺
													</div>
												</div>
											</div>
											<div className="self-stretch flex flex-row items-start justify-start text-xl sm:text-2xl lg:text-[28px]">
												<h2 className="m-0 relative text-[length:inherit] font-[500] font-[inherit] inline-block">
													高級版本
												</h2>
											</div>
										</div>

										{/* Features List */}
										<div className="w-full flex flex-col items-start justify-start gap-2 text-xs sm:text-sm text-Font-Color font-[ABeeZee]">
											{[
												"詳細房間分析",
												"專業風水建議",
												"完整報告",
												"個人化建議",
												"無限制訪問",
											].map((feature, index) => (
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

										{/* Remove the Facebook Share Button from here - it's now moved to the top */}
									</div>

									{/* Button Area */}
									<div className="w-full mt-6 sm:w-auto">
										{isUnlocked ? (
											<div className="w-full space-y-3">
												<div className="text-center">
													<p className="mb-2 text-xs text-gray-600">
														使用優惠碼解鎖
													</p>
													<div className="text-xs text-[#A3B116] font-medium">
														優惠碼已使用
													</div>
												</div>
												<button
													onClick={handlePremiumClick}
													className="cursor-pointer [border:none] px-4 sm:px-6 lg:px-[67px] py-2 sm:py-3 lg:py-[4.1px] bg-[#A3B116] rounded-[50px] sm:rounded-[75px] lg:rounded-[100px] overflow-hidden flex flex-row items-center justify-center shrink-0 transition-all duration-200 hover:bg-[#8a9913] w-full sm:w-auto shadow-md hover:shadow-lg"
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
															? "處理中..."
															: "立即購買"}
													</div>
												</button>
											</div>
										) : (
											<div className="w-full space-y-3">
												{!showPromoInput ? (
													<div className="text-center">
														<p className="mb-2 text-xs text-gray-600">
															有優惠碼嗎？
														</p>
														<button
															onClick={() =>
																setShowPromoInput(
																	true
																)
															}
															className="text-xs text-[#A3B116] hover:text-[#8a9913] font-medium underline transition-colors"
														>
															輸入優惠碼
														</button>
													</div>
												) : (
													<div className="space-y-2">
														<input
															type="text"
															placeholder="輸入優惠碼"
															value={promoCode}
															onChange={(e) =>
																setPromoCode(
																	e.target
																		.value
																)
															}
															className="w-full px-3 py-2 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:border-[#A3B116] focus:outline-none"
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
																className="px-4 py-2 bg-[#A3B116] text-white rounded-lg text-sm hover:bg-[#8a9913] transition-colors flex-1 shadow-sm hover:shadow-md"
															>
																確認
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
																取消
															</button>
														</div>
													</div>
												)}

												<button
													className="cursor-not-allowed [border:none] px-4 sm:px-6 lg:px-[67px] py-2 sm:py-3 lg:py-[4.1px] bg-gray-400 rounded-[50px] sm:rounded-[75px] lg:rounded-[100px] overflow-hidden flex flex-row items-center justify-center shrink-0 w-full sm:w-auto shadow-md opacity-75"
													disabled
													style={{
														boxShadow:
															"0 4px 15px rgba(0, 0, 0, 0.2)",
													}}
												>
													<div className="text-sm sm:text-base leading-6 sm:leading-8 font-[ABeeZee] text-[#fff] text-center">
														已鎖定
													</div>
												</button>
											</div>
										)}
									</div>
								</div>
							</section>

							{/* Third card - Subscription version */}
							<section
								className="relative w-full max-w-[328px] sm:w-[280px] lg:w-[328px] h-auto sm:h-[480px] lg:h-[514px] rounded-[20px] bg-[#fff] border-[#066952] border-solid border-[1px] box-border flex flex-col items-center justify-between p-4 sm:p-6 lg:p-7 text-left text-2xl sm:text-3xl lg:text-4xl text-[#111827] font-[Inter] transition-all duration-200 hover:border-[#A3B116] hover:border-[4px] hover:bg-[#F7FAF2] sm:flex-1 shadow-lg hover:shadow-xl"
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
														/ 每平方尺
													</div>
												</div>
											</div>
											<div className="self-stretch flex flex-row items-start justify-start text-xl sm:text-2xl lg:text-[28px]">
												<h2 className="m-0 relative text-[length:inherit] font-[500] font-[inherit] inline-block">
													訂閱版本
												</h2>
											</div>
										</div>

										{/* Features List */}
										<div className="w-full flex flex-col items-start justify-start gap-2 text-xs sm:text-sm text-Font-Color font-[ABeeZee]">
											{[
												"詳細房間分析",
												"專業風水建議",
												"完整報告",
												"個人化建議",
												"無限制訪問",
											].map((feature, index) => (
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
											className="cursor-pointer [border:none] px-4 sm:px-6 lg:px-[67px] py-2 sm:py-3 lg:py-[4.1px] bg-[#A3B116] rounded-[50px] sm:rounded-[75px] lg:rounded-[100px] overflow-hidden flex flex-row items-center justify-center shrink-0 transition-all duration-200 hover:bg-[#8a9913] w-full sm:w-auto shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
											style={{
												boxShadow:
													"0 4px 15px rgba(0, 0, 0, 0.2)",
											}}
										>
											<div className="text-sm sm:text-base leading-6 sm:leading-8 font-[ABeeZee] text-[#fff] text-center">
												{isProcessingPayment &&
												currentCardType ===
													"subscription"
													? "處理中..."
													: "立即訂閱"}
											</div>
										</button>
									</div>
								</div>
							</section>
						</div>
					</div>

					{/* Square Feet Input Popup */}
					{showSqftPopup && (
						<div className="fixed inset-0 flex items-center justify-center p-4 z-60 backdrop-blur-sm bg-black/20">
							<div className="relative w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl animate-fade-in">
								<div className="text-center">
									{/* Icon */}
									<div className="mb-6 text-5xl">🏠</div>

									{/* Title */}
									<h3 className="mb-4 text-xl font-bold text-gray-800">
										輸入房屋面積
									</h3>

									{/* Description */}
									<p className="mb-6 text-sm leading-relaxed text-gray-600">
										請輸入您的房屋總面積以計算準確的費用
										<br />
										<span className="font-medium text-red-600">
											最少需要380平方尺
										</span>
									</p>

									{/* Input */}
									<div className="mb-6">
										<label className="block mb-2 text-sm font-medium text-left text-gray-700">
											房屋面積（平方尺）
										</label>
										<input
											type="number"
											value={sqftValue}
											onChange={(e) =>
												setSqftValue(e.target.value)
											}
											placeholder="輸入面積..."
											className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-center text-lg focus:border-[#A3B116] focus:outline-none transition-colors"
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
											className="flex-1 px-6 py-3 font-medium text-white transition-all duration-200 bg-[#A3B116] rounded-lg hover:bg-[#8a9913] shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
										>
											{isProcessingPayment
												? "處理中..."
												: "立即購買"}
										</button>
										<button
											onClick={handleSqftPopupClose}
											disabled={isProcessingPayment}
											className="flex-1 px-6 py-3 font-medium text-gray-700 transition-colors bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
										>
											取消
										</button>
									</div>
								</div>
							</div>
						</div>
					)}

					{/* Share Confirmation Modal */}
					{showShareConfirm && (
						<div className="fixed inset-0 flex items-center justify-center p-4 z-60 backdrop-blur-sm bg-white/30">
							<div className="relative max-w-md p-6 bg-white shadow-2xl rounded-2xl">
								<div className="text-center">
									<div className="mb-4 text-4xl">🤔</div>
									<h3 className="mb-3 text-lg font-bold text-gray-800">
										您分享了嗎？
									</h3>
									<p className="mb-6 text-sm leading-relaxed text-gray-600">
										如果您剛剛分享了我們的網站到Facebook，點擊「是的，我分享了」來獲得您的專屬優惠碼！
									</p>
									<div className="flex gap-3">
										<button
											onClick={() =>
												handleShareConfirm(true)
											}
											className="flex-1 px-4 py-2 font-medium text-white transition-colors bg-[#A3B116] rounded-lg hover:bg-[#8a9913] shadow-md hover:shadow-lg"
										>
											是的，我分享了
										</button>
										<button
											onClick={() =>
												handleShareConfirm(false)
											}
											className="flex-1 px-4 py-2 font-medium text-gray-700 transition-colors bg-gray-200 rounded-lg hover:bg-gray-300"
										>
											取消
										</button>
									</div>
								</div>
							</div>
						</div>
					)}

					{/* Promo Code Modal */}
					{showPromoModal && sharePromoCode && (
						<div className="fixed inset-0 flex items-center justify-center p-4 z-60 backdrop-blur-sm bg-black/50">
							<div className="relative w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl animate-fade-in">
								<div className="text-center">
									{/* Close Button */}
									<button
										onClick={() => setShowPromoModal(false)}
										className="absolute z-10 flex items-center justify-center w-6 h-6 transition-colors bg-gray-200 rounded-full top-4 right-4 hover:bg-gray-300"
									>
										<svg
											className="w-4 h-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>

									{/* Success Icon */}
									<div className="mb-6 text-6xl">🎉</div>

									{/* Title */}
									<h3 className="mb-4 text-2xl font-bold text-gray-800">
										恭喜！獲得優惠碼
									</h3>

									{/* Description */}
									<p className="mb-6 text-sm leading-relaxed text-gray-600">
										感謝您分享我們的網站！以下是您的專屬優惠碼
									</p>

									{/* Promo Code Display */}
									<div
										className="p-6 mb-6 border-2 rounded-lg shadow-md"
										style={{
											borderColor: "#A3B116",
											backgroundColor:
												"rgba(163,177,22,0.08)",
											backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='60' viewBox='0 0 120 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='2' fill='%23A3B116'/%3E%3Ccircle cx='60' cy='20' r='1.5' fill='%23fbbf24'/%3E%3Ccircle cx='100' cy='40' r='2' fill='%23f87171'/%3E%3Ccircle cx='30' cy='50' r='1.5' fill='%23A3B116'/%3E%3Ccircle cx='80' cy='10' r='1.5' fill='%23A3B116'/%3E%3Ccircle cx='110' cy='15' r='1' fill='%23fbbf24'/%3E%3Ccircle cx='50' cy='45' r='1' fill='%23f87171'/%3E%3C/svg%3E")`,
											backgroundRepeat: "repeat",
										}}
									>
										<div
											className="mb-3 text-sm text-[#A3B116]"
											style={{
												fontFamily:
													"Noto Serif TC, serif",
											}}
										>
											您的優惠碼
										</div>
										<div
											className="mb-4 text-3xl font-bold tracking-wider text-[#A3B116] select-all"
											style={{
												fontFamily:
													"Noto Serif TC, serif",
											}}
										>
											{sharePromoCode}
										</div>
										<button
											onClick={() => {
												copyToClipboard(sharePromoCode);
												setCopied(true);
												setTimeout(
													() => setCopied(false),
													1500
												);
											}}
											className="px-6 py-2 font-medium bg-[#A3B116] text-white rounded-lg transition-colors shadow-md hover:bg-[#8a9913] hover:shadow-lg"
											style={{
												fontFamily:
													"Noto Serif TC, serif",
											}}
										>
											複製優惠碼
										</button>
										{copied && (
											<div
												className="mt-2 text-sm font-semibold text-green-600 animate-fade-in"
												style={{
													fontFamily:
														"Noto Serif TC, serif",
												}}
											>
												已複製到剪貼板！
											</div>
										)}
									</div>

									{/* Instructions */}
									<p className="mb-6 text-xs text-gray-500">
										請將此優惠碼輸入到上方的「輸入優惠碼」欄位中以解鎖高級版本
									</p>

									{/* Close Button */}
									<button
										onClick={() => setShowPromoModal(false)}
										className="px-8 py-3 font-medium text-white transition-all duration-200 bg-[#A3B116] rounded-lg hover:bg-[#8a9913] shadow-md hover:shadow-lg"
									>
										了解，繼續使用
									</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>

			{/* Add CSS for animation using a style tag in the head */}
			<style
				dangerouslySetInnerHTML={{
					__html: `
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
                    .animate-fade-in {
                        animation: fadeIn 0.3s ease-out;
                    }
                `,
				}}
			/>
		</>
	);
}
