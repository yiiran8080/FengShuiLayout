"use client";

import { useState, useRef, useEffect } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { Link } from "@/i18n/navigation";
import {
	Send,
	User,
	MessageCircle,
	Clock,
	Sparkles,
	Brain,
	Mic,
	Menu,
	X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import BirthdayModal from "@/components/BirthdayModal";
import Navbar from "@/components/Navbar";

export default function Home() {
	const { data: session } = useSession();
	const router = useRouter();
	const pathname = usePathname();
	const currentLocale = pathname?.split("/")[1] || "zh-TW"; // Extract locale from URL
	// 定義消息類型
	interface Message {
		role: string;
		content: string;
		timestamp: Date;
		aiAnalysis?: any;
		systemType?: any;
		isError?: boolean;
	}

	const [messages, setMessages] = useState<Message[]>([]);
	const [inputMessage, setInputMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [sessionId, setSessionId] = useState("");
	const [isClient, setIsClient] = useState(false);
	const messagesEndRef = useRef<HTMLDivElement>(null);

	// Modal 相關狀態
	const [showBirthdayModal, setShowBirthdayModal] = useState(false);
	const [needsBirthdayInfo, setNeedsBirthdayInfo] = useState(false);
	const [concern, setConcern] = useState("");
	const [isCoupleAnalysis, setIsCoupleAnalysis] = useState(false);
	const [reportType, setReportType] = useState("");
	const [originalUserQuestion, setOriginalUserQuestion] = useState(""); // Track original question
	const [latestSpecificProblem, setLatestSpecificProblem] = useState(""); // Track the most recent specific problem

	// 對話歷史相關狀態
	interface ConversationHistory {
		conversationId: string;
		title?: string;
		lastUpdated: string;
		messageCount: number;
		topics?: any[];
	}
	const [conversationHistory, setConversationHistory] = useState<
		ConversationHistory[]
	>([]);
	const [currentUserId, setCurrentUserId] = useState("");
	const [isLoadingHistory, setIsLoadingHistory] = useState(false);
	const [isInitialized, setIsInitialized] = useState(false);
	const [showLandingPage, setShowLandingPage] = useState(true);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// 打字機效果狀態
	const [isTyping, setIsTyping] = useState(false);
	const [typingMessageIndex, setTypingMessageIndex] = useState(-1);
	const [displayedContent, setDisplayedContent] = useState("");
	const [loadingDuration, setLoadingDuration] = useState(15); // 動態載入時間
	const typingIntervalRef = useRef<ReturnType<typeof setTimeout> | null>(
		null
	);

	// Keep page position when component mounts - only scroll to top on visibility change
	useEffect(() => {
		// Function to scroll to top
		const scrollToTop = () => {
			window.scrollTo({ top: 0, behavior: "smooth" });
			document.documentElement.scrollTop = 0;
			document.body.scrollTop = 0;
		};

		// Only scroll to top when user comes back to the page (e.g., browser back button)
		// Remove automatic scroll on mount to preserve navbar visibility
		const handleVisibilityChange = () => {
			if (!document.hidden) {
				scrollToTop();
			}
		};

		// Add event listener for visibility change
		document.addEventListener("visibilitychange", handleVisibilityChange);

		// Cleanup
		return () => {
			document.removeEventListener(
				"visibilitychange",
				handleVisibilityChange
			);
		};
	}, []);

	// Ensure proper page position on initial load - show navbar and chatbox
	useEffect(() => {
		// Small delay to ensure DOM is fully rendered
		const timer = setTimeout(() => {
			// Ensure we can see both navbar and content
			window.scrollTo({ top: 0, behavior: "auto" });
		}, 100);

		return () => clearTimeout(timer);
	}, [showLandingPage]);

	// 客戶端初始化 - 添加防重複初始化邏輯
	useEffect(() => {
		// 防止重複初始化
		if (isInitialized) {
			console.log("⏭️ Smart-Chat2 已初始化，跳過重複初始化");
			return;
		}

		setIsClient(true);

		// 使用session中的email作為用戶ID，fallback到本地存儲的ID
		let userId: string;
		let shouldTransferConversations = false;
		let oldAnonymousId: string | null = null;

		if (session?.user?.email) {
			userId = session.user.email;

			// 檢查是否有舊的匿名ID需要轉移
			const storedAnonymousId = localStorage.getItem("feng-shui-user-id");
			if (
				storedAnonymousId &&
				storedAnonymousId.startsWith("user-") &&
				storedAnonymousId !== userId
			) {
				shouldTransferConversations = true;
				oldAnonymousId = storedAnonymousId;
				console.log(
					"🔄 檢測到需要轉移對話記錄:",
					oldAnonymousId,
					"→",
					userId
				);
			}
		} else {
			const storedUserId = localStorage.getItem("feng-shui-user-id");
			if (!storedUserId) {
				userId = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
				localStorage.setItem("feng-shui-user-id", userId);
			} else {
				userId = storedUserId;
			}
		}

		// 如果用戶ID沒有變化，不需要重新初始化
		if (currentUserId === userId && messages.length > 1) {
			console.log("👤 用戶未變化，跳過重新初始化");
			return;
		}

		console.log("🔄 初始化 Smart-Chat2，用戶:", userId);

		setCurrentUserId(userId);

		const newSessionId = `smart-chat2-${Date.now()}`;
		setSessionId(newSessionId);

		// 初始狀態顯示落地頁，不設置歡迎消息
		setMessages([]);
		setShowLandingPage(true);

		// 如果需要轉移對話，先執行轉移再加載歷史
		if (shouldTransferConversations && oldAnonymousId) {
			transferAnonymousConversations(oldAnonymousId, userId).then(() => {
				// 轉移完成後更新localStorage並加載對話歷史
				localStorage.setItem("feng-shui-user-id", userId);
				loadConversationHistory(userId);
			});
		} else {
			// 正常加載對話歷史
			loadConversationHistory(userId);
		}

		setIsInitialized(true);
	}, [session?.user?.email, isInitialized, currentUserId, messages.length]); // 只在用戶email變化時重新初始化，而不是整個session對象

	// Auto-scroll to bottom only for new user messages or completed AI responses
	useEffect(() => {
		if (messages.length > 0 && !isTyping) {
			// Only scroll if the last message is complete (not during typing animation)
			const timer = setTimeout(() => {
				messagesEndRef.current?.scrollIntoView({
					behavior: "smooth",
					block: "end",
				});
			}, 100); // Small delay to ensure content is rendered

			return () => clearTimeout(timer);
		}
	}, [messages.length, isTyping]); // Remove displayedContent dependency to avoid constant scrolling

	// 檢測新的助手消息並觸發打字機效果
	useEffect(() => {
		if (messages.length > 0) {
			const lastMessage = messages[messages.length - 1];
			if (
				lastMessage.role === "assistant" &&
				lastMessage.content === "" &&
				!isTyping
			) {
				console.log("🔍 檢測到空的助手消息，準備觸發打字機效果");
				// 從sessionStorage獲取待顯示的內容
				const pendingContent = sessionStorage.getItem(
					"pending_typewriter_content"
				);
				if (pendingContent) {
					console.log(
						"📝 找到待顯示內容，啟動打字機:",
						pendingContent.substring(0, 50) + "..."
					);
					setTimeout(() => {
						startTypewriterEffect(
							messages.length - 1,
							pendingContent
						);
						sessionStorage.removeItem("pending_typewriter_content");
					}, 100);
				}
			}
		}
	}, [messages, isTyping]);

	// 打字機效果函數
	const startTypewriterEffect = (
		messageIndex: number,
		fullContent: string
	) => {
		console.log(
			"⚡ 開始打字機效果，索引:",
			messageIndex,
			"內容長度:",
			fullContent.length
		);
		setIsTyping(true);
		setTypingMessageIndex(messageIndex);
		setDisplayedContent("");

		const words = fullContent.split("");
		let currentIndex = 0;

		const typeNextCharacter = () => {
			if (currentIndex < words.length) {
				const currentContent = words
					.slice(0, currentIndex + 1)
					.join("");
				setDisplayedContent(currentContent);

				// 更新消息數組中的實際內容
				setMessages((prev) => {
					const updated = [...prev];
					if (updated[messageIndex]) {
						updated[messageIndex].content = currentContent;
					}
					return updated;
				});

				currentIndex++;
				typingIntervalRef.current = setTimeout(typeNextCharacter, 30); // 30ms per character
			} else {
				// 完成打字效果
				setIsTyping(false);
				setTypingMessageIndex(-1);
				setDisplayedContent("");

				// 確保最終內容完整
				setMessages((prev) => {
					const updated = [...prev];
					if (updated[messageIndex]) {
						updated[messageIndex].content = fullContent;
					}
					return updated;
				});
			}
		};

		typeNextCharacter();
	};

	// 清理打字機效果
	useEffect(() => {
		return () => {
			if (typingIntervalRef.current) {
				clearTimeout(typingIntervalRef.current);
			}
		};
	}, []);

	// 根據問題長度計算載入時間
	const calculateLoadingDuration = (message: string) => {
		const length = message.length;
		if (length <= 10) {
			return 21; // 短問題 21秒
		} else if (length <= 30) {
			return 30; // 中等問題 30秒
		} else {
			return 35; // 長問題 35秒
		}
	};

	const handleSendMessage = async () => {
		if (!inputMessage.trim() || isLoading) return;

		// Check if user is logged in before sending message
		if (!session) {
			router.push("/auth/login");
			return;
		}

		// 隱藏落地頁，顯示正常聊天界面
		if (showLandingPage) {
			setShowLandingPage(false);
		}

		// 🔥 Special handling for couple analysis report selection
		console.log(
			"🔍 Before checking couple analysis - isCoupleAnalysis:",
			isCoupleAnalysis,
			"inputMessage:",
			inputMessage.trim()
		);
		if (isCoupleAnalysis && inputMessage.trim() === "1") {
			console.log(
				"🎯 Couple analysis option 1 selected - redirecting directly to couple payment"
			);

			const userMessage = {
				role: "user",
				content: inputMessage.trim(),
				timestamp: new Date(),
			};

			setMessages((prev) => [...prev, userMessage]);
			setInputMessage("");

			// Add response message about payment
			const responseMessage = {
				role: "assistant",
				content: "太好了！正在為您處理情侶合盤分析付款...",
				timestamp: new Date(),
			};

			setMessages((prev) => [...prev, responseMessage]);

			// 優先使用最新的具體問題，然後是原始問題，最後是 concern
			const problemToUse =
				latestSpecificProblem ||
				originalUserQuestion ||
				concern ||
				"感情關係和諧改善建議";

			console.log("🎯 Couple payment problem selection debug:", {
				latestSpecificProblem,
				originalUserQuestion,
				concern,
				selectedProblem: problemToUse,
			});

			// Call couple payment API directly
			try {
				setIsLoading(true);

				console.log("🚀 Sending to payment-couple API:", {
					locale: currentLocale,
					specificProblem: problemToUse,
					concern: concern,
					fromChat: true,
					sessionId: sessionId,
				});

				const paymentResponse = await fetch("/api/payment-couple", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						locale: currentLocale,
						specificProblem: problemToUse,
						concern: concern,
						fromChat: true,
						sessionId: sessionId,
					}),
				});

				if (paymentResponse.ok) {
					const paymentData = await paymentResponse.json();
					console.log("💳 Couple Payment Response:", paymentData);

					if (paymentData.sessionId) {
						// Import Stripe and redirect to checkout
						const stripePublicKey =
							process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
						if (!stripePublicKey) {
							throw new Error("Stripe public key not configured");
						}

						const stripe = await import("@stripe/stripe-js").then(
							(mod) => mod.loadStripe(stripePublicKey)
						);

						if (stripe) {
							console.log(
								"🚀 Redirecting to Stripe checkout for couple payment"
							);
							await stripe.redirectToCheckout({
								sessionId: paymentData.sessionId,
							});
						} else {
							throw new Error("Failed to load Stripe");
						}
					} else {
						throw new Error(
							"No session ID received from couple payment"
						);
					}
				} else {
					throw new Error(
						`Payment API error: ${paymentResponse.status}`
					);
				}
			} catch (error) {
				console.error("💳 Couple payment error:", error);
				setIsLoading(false);

				// Show error message
				const errorMessage = {
					role: "assistant",
					content: "抱歉，付款處理時發生錯誤，請稍後再試。",
					timestamp: new Date(),
				};
				setMessages((prev) => [...prev, errorMessage]);
			}

			return;
		}

		const userMessage = {
			role: "user",
			content: inputMessage.trim(),
			timestamp: new Date(),
		};

		setMessages((prev) => [...prev, userMessage]);
		setInputMessage("");

		// 根據問題長度設定載入時間
		const duration = calculateLoadingDuration(userMessage.content);
		console.log(
			`🕒 Question: "${userMessage.content}" (${userMessage.content.length} chars) → Duration: ${duration}s`
		);
		setLoadingDuration(duration);

		setIsLoading(true);

		try {
			const response = await fetch("/api/smart-chat2", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					message: userMessage.content,
					sessionId: sessionId,
					userId: currentUserId,
				}),
			});

			const data = await response.json();

			console.log("🔍 完整 API 回應:", data);
			console.log("🔍 data.specificProblem:", data.specificProblem);
			console.log("🔍 data.concern:", data.concern);

			if (response.ok) {
				const assistantMessage = {
					role: "assistant",
					content: data.response,
					timestamp: new Date(),
					aiAnalysis: data.aiAnalysis,
					systemType: data.systemType,
				};

				// 儲存內容到sessionStorage供useEffect使用
				sessionStorage.setItem(
					"pending_typewriter_content",
					assistantMessage.content
				);

				// 添加空內容的消息先顯示，然後觸發打字機效果
				const emptyAssistantMessage = {
					...assistantMessage,
					content: "",
				};

				console.log("🎬 準備添加空消息並觸發打字機效果");
				console.log(
					"📝 打字機內容長度:",
					assistantMessage.content.length
				);

				setMessages((prev) => [...prev, emptyAssistantMessage]);

				// 🔥 Always update specific problem when available in API response
				if (data.specificProblem) {
					console.log(
						"💾 Updating latestSpecificProblem from API response:",
						data.specificProblem
					);
					setLatestSpecificProblem(data.specificProblem);

					// Only set original question if not already set
					if (!originalUserQuestion) {
						console.log(
							"📝 Setting originalUserQuestion:",
							data.specificProblem
						);
						setOriginalUserQuestion(data.specificProblem);
					}
				}

				// Also update concern if available
				if (data.concern) {
					console.log(
						"💾 Updating concern from API response:",
						data.concern
					);
					setConcern(data.concern);
				}

				// 注意：移除不必要的對話歷史重新載入，這會造成過多的API呼叫
				// 只有在創建新對話時才需要更新歷史列表

				// Payment 觸發邏輯 - Check for couple analysis from API response
				console.log(
					"🔍 檢查 Payment 觸發條件:",
					data.needsBirthdayInfo,
					data.shouldTriggerModal,
					"isCoupleAnalysis:",
					data.isCoupleAnalysis
				);

				// 🎯 Set couple analysis flag if couple birthdays detected
				if (data.hasCouplesBirthdays || data.isCoupleAnalysis) {
					console.log(
						"🎯 Setting couple analysis to true due to couple birthdays detected"
					);
					setIsCoupleAnalysis(true);
				}

				if (data.needsBirthdayInfo || data.shouldTriggerModal) {
					setNeedsBirthdayInfo(true);
					setConcern(data.concern || "");
					setReportType(data.reportType || "");

					// 🔥 保存原始用戶問題 - 每次都更新最新的具體問題
					console.log(
						"🔔 檢查 API 回應中的 specificProblem:",
						data.specificProblem
					);
					let problemToUse = "";
					if (data.specificProblem) {
						setLatestSpecificProblem(data.specificProblem);
						console.log(
							"💾 更新最新具體問題:",
							data.specificProblem
						);

						// 只在第一次時設置原始問題
						if (!originalUserQuestion) {
							setOriginalUserQuestion(data.specificProblem);
							console.log(
								"📝 設置原始問題:",
								data.specificProblem
							);
						}
						problemToUse = data.specificProblem;
					}

					// 🚀 直接觸發付款，跳過價格頁面
					console.log(
						"💳 直接觸發付款 - concern:",
						data.concern,
						"problem:",
						problemToUse
					);

					// 🔥 檢查付款類型，決定使用哪個 API
					console.log(
						"💳 檢查付款類型 - paymentType:",
						data.paymentType,
						"concern:",
						data.concern,
						"problem:",
						problemToUse
					);

					// 決定使用哪個付款 API
					const useComprehensivePayment =
						data.paymentType === "comprehensive";
					const usePremiumPayment = data.paymentType === "premium";

					let paymentEndpoint;
					if (useComprehensivePayment) {
						paymentEndpoint = "/api/checkoutSessions/payment4"; // Expert88 ($88)
					} else if (usePremiumPayment) {
						paymentEndpoint = "/api/checkoutSessions/payment2"; // Premium ($188)
					} else {
						paymentEndpoint =
							"/api/checkoutSessions/payment-fortune-category"; // Fortune ($38) - Updated to use new category API
					}

					console.log(
						`💳 使用付款端點: ${paymentEndpoint} (comprehensive: ${useComprehensivePayment}, premium: ${usePremiumPayment})`
					);

					// 直接觸發付款 API
					try {
						setIsLoading(true);

						let paymentResponse;

						if (useComprehensivePayment || usePremiumPayment) {
							// Get fresh locale for comprehensive/premium payments too
							const storedRegion =
								localStorage.getItem("userRegion");
							const regionToLocaleMap = {
								china: "zh-CN",
								hongkong: "zh-TW",
								taiwan: "zh-TW",
							};
							const freshLocale =
								regionToLocaleMap[storedRegion || "hongkong"] ||
								currentLocale;

							console.log(
								`💰 Main page ${useComprehensivePayment ? "comprehensive" : "premium"} payment - Using fresh locale:`,
								freshLocale,
								"from stored region:",
								storedRegion
							);

							// 使用 Stripe Checkout Session APIs (payment4 或 payment2)
							paymentResponse = await fetch(paymentEndpoint, {
								method: "POST",
								headers: {
									"Content-Type": "application/json",
								},
								body: JSON.stringify({
									quantity: 1, // 固定數量
									directPayment: true, // 標記為直接付款
									locale: freshLocale, // 🔥 Fix: Add locale parameter for comprehensive/premium too
								}),
							});
						} else {
							// 將 concern 從中文轉換為英文以符合新的 concernType 格式
							const concernMapping = {
								財運: "financial",
								健康: "health",
								事業: "career",
								工作: "career",
								感情: "love",
							};

							const concernType =
								concernMapping[data.concern] || "financial";

							// Get fresh locale from localStorage to ensure consistency
							const storedRegion =
								localStorage.getItem("userRegion");
							const regionToLocaleMap = {
								china: "zh-CN",
								hongkong: "zh-TW",
								taiwan: "zh-TW",
							};
							const freshLocale =
								regionToLocaleMap[storedRegion || "hongkong"] ||
								currentLocale;

							console.log(
								"💰 Main page fortune payment - Using fresh locale:",
								freshLocale,
								"for concernType:",
								concernType,
								"from stored region:",
								storedRegion
							);

							// 使用新的 fortune category API，與 price page 保持一致
							paymentResponse = await fetch(paymentEndpoint, {
								method: "POST",
								headers: {
									"Content-Type": "application/json",
								},
								body: JSON.stringify({
									concernType: concernType, // 使用 concernType 而不是 concern
									locale: freshLocale,
									quantity: 1,
									specificProblem: problemToUse,
									fromChat: true,
								}),
							});
						}

						if (paymentResponse.ok) {
							const paymentData = await paymentResponse.json();
							console.log(
								`💳 ${useComprehensivePayment ? "Expert88 ($88)" : usePremiumPayment ? "Premium ($188)" : "Fortune ($38)"} Payment Response:`,
								paymentData
							);

							if (
								useComprehensivePayment ||
								usePremiumPayment ||
								!useComprehensivePayment
							) {
								// 處理所有付款回應 - 直接重定向到 Stripe URL (fortune category API 也返回 data.url)
								if (paymentData.data?.url) {
									window.location.href = paymentData.data.url;
								} else {
									throw new Error(
										`No checkout URL received from ${useComprehensivePayment ? "Expert88" : usePremiumPayment ? "Premium" : "Fortune"} payment`
									);
								}
							}
						} else {
							const errorData = await paymentResponse.json();
							throw new Error(errorData.error || "Payment error");
						}
					} catch (paymentError) {
						console.error(
							`💳 ${useComprehensivePayment ? "Comprehensive ($88)" : usePremiumPayment ? "Premium ($188)" : "Fortune ($38)"} payment error:`,
							paymentError
						);
						setIsLoading(false);
						// Show error message to user
						setMessages((prev) => [
							...prev,
							{
								role: "assistant",
								content:
									"抱歉，付款過程中出現錯誤。請稍後再試。",
								timestamp: new Date(),
								isError: true,
							},
						]);
					}
				}
			} else {
				throw new Error(data.error || "請求失敗");
			}
		} catch (error) {
			console.error("發送訊息失敗:", error);
			const errorMessage = {
				role: "assistant",
				content: "抱歉，發送訊息時出現錯誤。請稍後再試。",
				timestamp: new Date(),
				isError: true,
			};
			setMessages((prev) => [...prev, errorMessage]);
		} finally {
			setIsLoading(false);
		}
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSendMessage();
		}
	};

	// 處理快捷標籤點擊
	const handleShortcutClick = (shortcutText) => {
		setInputMessage(shortcutText);
		// 自動聚焦到輸入框
		setTimeout(() => {
			const textarea = document.querySelector("textarea");
			if (textarea) {
				textarea.focus();
			}
		}, 100);
	};

	// 生日表單提交處理
	const handleBirthdaySubmit = async (birthdayData) => {
		setShowBirthdayModal(false);
		setIsLoading(true);

		console.log("🔥 Birthday submit received:", birthdayData);

		// For couple analysis, generate URL and redirect directly (payment already completed)
		if (birthdayData.isCoupleAnalysis || isCoupleAnalysis) {
			console.log(
				"📊 Couple analysis detected, generating report URL..."
			);

			// 優先使用最新的具體問題，然後是原始問題，最後是 concern
			const problemToUse =
				latestSpecificProblem ||
				originalUserQuestion ||
				concern ||
				"感情關係和諧改善建議";

			console.log("🔍 DEBUG - URL生成時的狀態檢查:");
			console.log("   latestSpecificProblem:", latestSpecificProblem);
			console.log("   originalUserQuestion:", originalUserQuestion);
			console.log("   concern:", concern);
			console.log("   problemToUse:", problemToUse);

			const reportUrl =
				`/couple-report?` +
				`birthday=${encodeURIComponent(birthdayData.userBirthday)}&` +
				`birthday2=${encodeURIComponent(birthdayData.partnerBirthday)}&` +
				`gender=${encodeURIComponent(birthdayData.userGender)}&` +
				`gender2=${encodeURIComponent(birthdayData.partnerGender)}&` +
				`concern=${encodeURIComponent(concern)}&` +
				`originalProblem=${encodeURIComponent(problemToUse)}&` +
				`reportType=${encodeURIComponent(reportType)}`;

			console.log("🚀 Opening couple report:", reportUrl);
			window.open(reportUrl, "_blank");
			setIsLoading(false);
			return;
		}

		// For individual analysis, continue with API call
		try {
			const response = await fetch("/api/smart-chat2", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					userBirthday: birthdayData.birthday,
					gender: birthdayData.gender,
					partnerBirthday: birthdayData.partnerBirthday,
					partnerGender: birthdayData.partnerGender,
					concern: concern,
					isCoupleAnalysis:
						isCoupleAnalysis || birthdayData.isCoupleAnalysis,
					reportType: reportType,
					messageType: "birthday_submission",
					sessionId: sessionId,
					userId: currentUserId,
				}),
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();

			const assistantMessage = {
				role: "assistant",
				content: data.response || data.message,
				timestamp: new Date(),
				aiAnalysis: data.aiAnalysis,
				systemType: data.systemType,
			};

			setMessages((prev) => [...prev, assistantMessage]);

			// 注意：移除不必要的對話歷史重新載入，減少API呼叫
			// 對話歷史會在頁面初始化時載入，之後不需要重複載入

			// Open report in new window if URL is provided
			if (data.reportUrl) {
				console.log("Opening report:", data.reportUrl);
				window.open(data.reportUrl, "_blank");
			}
		} catch (error) {
			console.error("生日提交錯誤:", error);
			setMessages((prev) => [
				...prev,
				{
					role: "assistant",
					content: "抱歉，處理生日資料時發生錯誤。請稍後再試。",
					timestamp: new Date(),
				},
			]);
		} finally {
			setIsLoading(false);
		}
	};

	// 加載對話歷史
	const loadConversationHistory = async (userId) => {
		try {
			setIsLoadingHistory(true);

			// 如果userId看起來像email，使用userEmail參數，否則使用userId參數
			const isEmail = userId.includes("@");
			const queryParam = isEmail
				? `userEmail=${encodeURIComponent(userId)}`
				: `userId=${encodeURIComponent(userId)}`;

			const response = await fetch(
				`/api/conversation-history?${queryParam}`
			);

			if (response.ok) {
				const data = await response.json();
				setConversationHistory(data.conversations || []);
			} else {
				console.error("加載對話歷史失敗:", response.statusText);
			}
		} catch (error) {
			console.error("加載對話歷史錯誤:", error);
		} finally {
			setIsLoadingHistory(false);
		}
	};

	// 轉移匿名對話記錄到註冊用戶
	const transferAnonymousConversations = async (
		oldAnonymousId: string,
		newUserEmail: string
	) => {
		try {
			console.log(
				"🔄 開始轉移對話記錄:",
				oldAnonymousId,
				"→",
				newUserEmail
			);

			// 🔒 檢查是否已設置轉移完成標記，避免重複轉移
			const transferKey = `transfer-completed-${oldAnonymousId}-${newUserEmail}`;
			if (localStorage.getItem(transferKey)) {
				console.log("⚠️ 對話記錄已轉移過，跳過重複轉移");
				return;
			}

			const response = await fetch("/api/transfer-conversations", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					oldUserId: oldAnonymousId,
					newUserId: newUserEmail,
				}),
			});

			if (response.ok) {
				const data = await response.json();
				console.log(
					"✅ 對話記錄轉移成功:",
					data.transferredCount,
					"個對話"
				);

				// 🔒 設置轉移完成標記，防止重複轉移
				localStorage.setItem(transferKey, "completed");
			} else {
				console.error("❌ 對話記錄轉移失敗:", response.statusText);
			}
		} catch (error) {
			console.error("❌ 轉移對話記錄時發生錯誤:", error);
		}
	};

	// 加載特定對話
	const loadSpecificConversation = async (conversationId) => {
		try {
			setIsLoading(true);
			const response = await fetch(
				`/api/load-conversation?conversationId=${encodeURIComponent(conversationId)}`
			);

			if (response.ok) {
				const data = await response.json();

				// 設置對話訊息 - 修正數據格式轉換
				if (
					data.conversation &&
					Array.isArray(data.conversation) &&
					data.conversation.length > 0
				) {
					// 轉換消息格式以匹配前端期望的格式
					const formattedMessages = data.conversation.map(
						(msg, index) => ({
							role: msg.role,
							content: msg.content || "",
							timestamp: new Date(msg.timestamp),
							aiAnalysis: msg.aiAnalysis || null,
							systemType: msg.systemType || "smart-chat2",
							id: msg.id || `loaded-${index}`,
						})
					);

					// 添加初始歡迎消息（如果還沒有）
					const hasWelcomeMessage = formattedMessages.some(
						(msg) =>
							msg.role === "assistant" &&
							msg.content.includes("歡迎來到風鈴聊天室")
					);

					if (!hasWelcomeMessage) {
						formattedMessages.unshift({
							role: "assistant",
							content:
								"你好呀～我是風鈴！✨ 歡迎回到風鈴聊天室！\n\n繼續您之前的對話...",
							timestamp: new Date(
								data.metadata?.createdAt || Date.now()
							),
							aiAnalysis: null,
							systemType: "smart-chat2",
						});
					}

					setMessages(formattedMessages);
					setShowLandingPage(false); // 載入對話時隱藏落地頁
				} else {
					// 如果沒有消息，設置默認歡迎消息
					setMessages([
						{
							role: "assistant",
							content:
								"你好呀～我是風鈴！✨ 歡迎來到風鈴聊天室！\n\n這是您之前的對話，請繼續...",
							timestamp: new Date(),
							aiAnalysis: null,
							systemType: "smart-chat2",
						},
					]);
					setShowLandingPage(false); // 載入對話時隱藏落地頁
				}

				// 設置對話相關狀態
				if (data.metadata) {
					const metadata = data.metadata;
					setSessionId(
						metadata.sessionId || `smart-chat2-${Date.now()}`
					);
					setConcern(metadata.primaryConcern || "");
					setIsCoupleAnalysis(
						metadata.userData?.relationshipType === "couple" ||
							false
					);
					setReportType("");
				}

				console.log(
					"對話加載成功:",
					data.metadata?.title || conversationId
				);
			} else {
				console.error("加載對話失敗:", response.statusText);
				// 加載失敗時顯示錯誤消息
				setMessages([
					{
						role: "assistant",
						content: "抱歉，無法加載該對話記錄。請嘗試創建新對話。",
						timestamp: new Date(),
						isError: true,
					},
				]);
			}
		} catch (error) {
			console.error("加載對話錯誤:", error);
			setMessages([
				{
					role: "assistant",
					content: "載入對話時發生錯誤，請稍後再試。",
					timestamp: new Date(),
					isError: true,
				},
			]);
		} finally {
			setIsLoading(false);
		}
	};

	// 創建新對話
	const createNewConversation = () => {
		setMessages([]);
		setInputMessage("");
		setConcern("");
		setIsCoupleAnalysis(false);
		setReportType("");
		setSessionId(`smart-chat2-${Date.now()}`);
		setShowLandingPage(true);
		// Close mobile menu after creating new conversation
		setIsMobileMenuOpen(false);
	};

	// Helper function to close mobile menu when navigating
	const handleMobileNavigation = () => {
		// Add a small delay for visual feedback
		setTimeout(() => {
			setIsMobileMenuOpen(false);
		}, 150);
	};

	// 格式化時間顯示
	const formatConversationTime = (timestamp) => {
		if (!timestamp) return "";

		const date = new Date(timestamp);
		const now = new Date();
		const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

		if (diffInHours < 24) {
			return date.toLocaleTimeString("zh-TW", {
				hour: "2-digit",
				minute: "2-digit",
			});
		} else if (diffInHours < 24 * 7) {
			const days = Math.floor(diffInHours / 24);
			return `${days}天前`;
		} else {
			return date.toLocaleDateString("zh-TW", {
				month: "short",
				day: "numeric",
			});
		}
	};

	const getTopicBadgeColor = (topic) => {
		const colors = {
			感情: "bg-pink-100 text-pink-800",
			財運: "bg-yellow-100 text-yellow-800",
			工作: "bg-blue-100 text-blue-800",
			健康: "bg-green-100 text-green-800",
			人際關係: "bg-purple-100 text-purple-800",
			子女: "bg-orange-100 text-orange-800",
			因緣: "bg-indigo-100 text-indigo-800",
			其他: "bg-gray-100 text-gray-800",
		};
		return colors[topic] || colors["其他"];
	};

	return (
		<div className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
			{/* Navigation Bar */}
			<Navbar from="smart-chat" backgroundColor="EFEFEF" />
			<div className="relative flex h-[calc(100vh-4rem)] mt-16 overflow-hidden">
				{/* 移動端菜單按鈕 */}
				<button
					className="fixed z-50 p-2 bg-white rounded-lg shadow-lg xl:hidden top-20 left-2"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				>
					{isMobileMenuOpen ? (
						<X className="w-5 h-5 text-gray-600" />
					) : (
						<Menu className="w-5 h-5 text-gray-600" />
					)}
				</button>

				{/* 左側邊欄 - 響應式設計 */}
				<div
					className={`
					${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
					xl:translate-x-0 transition-transform duration-300 ease-in-out
					fixed xl:relative z-40 w-72 sm:w-80 xl:w-80 bg-[#EFEFEF] flex flex-col h-full
				`}
				>
					{/* 建立新的對話 */}
					<div
						className="bg-[#E0E0E0] rounded-lg m-4 p-4 cursor-pointer hover:bg-[#d0d0d0] transition-colors"
						onClick={createNewConversation}
					>
						<div className="flex items-center space-x-3">
							<img
								src="/images/風水妹/風水妹2.png"
								alt="風鈴"
								className="w-10 h-10 rounded-full"
								onError={(e) => {
									(
										e.target as HTMLImageElement
									).style.display = "none";
								}}
							/>
							<div className="flex-1">
								<span className="font-medium text-gray-800">
									建立新的對話
								</span>
							</div>
							<div className="text-xl text-gray-800">+</div>
						</div>
					</div>

					{/* 歷史對話 */}
					<div className="bg-[#E0E0E0] rounded-lg mx-4 mb-4">
						<div className="p-4 border-b border-[#d0d0d0]">
							<h3 className="flex items-center justify-between font-medium text-gray-800">
								歷史對話
								{isLoadingHistory && (
									<div className="w-4 h-4 border-b-2 border-gray-800 rounded-full animate-spin"></div>
								)}
							</h3>
						</div>
						<div className="p-2 overflow-y-auto max-h-48">
							{conversationHistory.length === 0 ? (
								<div className="p-3 text-sm text-center text-gray-600">
									{isLoadingHistory
										? "載入中..."
										: "尚無歷史對話"}
								</div>
							) : (
								conversationHistory.map((conversation) => (
									<div
										key={conversation.conversationId}
										className="p-3 hover:bg-[#d0d0d0] rounded cursor-pointer transition-colors mb-1"
										onClick={() => {
											loadSpecificConversation(
												conversation.conversationId
											);
											handleMobileNavigation();
										}}
									>
										<div className="text-sm font-medium text-gray-800 truncate">
											{conversation.title || "未命名對話"}
										</div>
										<div className="flex items-center justify-between mt-1 text-xs text-gray-600">
											<span>
												{formatConversationTime(
													conversation.lastUpdated
												)}
											</span>
											<span className="bg-[#d0d0d0] text-gray-800 px-2 py-0.5 rounded-full text-xs">
												{conversation.messageCount || 0}
											</span>
										</div>
										{conversation.topics &&
											conversation.topics.length > 0 && (
												<div className="flex flex-wrap gap-1 mt-2">
													{conversation.topics
														.slice(0, 2)
														.map((topic, index) => (
															<span
																key={index}
																className="text-xs bg-[#c0c0c0] text-gray-800 px-2 py-0.5 rounded"
															>
																{topic}
															</span>
														))}
													{conversation.topics
														.length > 2 && (
														<span className="text-xs text-gray-600">
															+
															{conversation.topics
																.length - 2}
														</span>
													)}
												</div>
											)}
									</div>
								))
							)}
						</div>
					</div>

					{/* 付費報告預覽 */}
					<div className="px-4 mb-4">
						<div className="p-2 transition-colors ">
							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-2">
									<span className="text-lg text-[#606060] font-bold">
										付費報告預覽
									</span>
									<span className="text-xl">👇</span>
								</div>
							</div>
						</div>
					</div>

					{/* 功能區域 */}
					<div className="flex-1 px-4 pb-4 space-y-3 overflow-y-auto">
						{/* 其他功能 */}
						<Link href="/demo?category=fengshui">
							<div
								className="bg-[#768976] rounded-lg py-7 mb-3 cursor-pointer hover:bg-[#6b7d6b] transition-colors relative overflow-hidden"
								style={{
									backgroundImage:
										"url(/images/chatbox/house.png)",
									backgroundSize: "cover",
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
								}}
								onClick={handleMobileNavigation}
							></div>
						</Link>

						<Link href="/demo?category=life">
							<div
								className="bg-[#768976] rounded-lg py-7 mb-3 cursor-pointer hover:bg-[#6b7d6b] transition-colors relative overflow-hidden"
								style={{
									backgroundImage:
										"url(/images/chatbox/life.png)",
									backgroundSize: "cover",
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
								}}
								onClick={handleMobileNavigation}
							></div>
						</Link>

						<Link href="/demo?category=relationship">
							<div
								className="bg-[#768976] rounded-lg py-7 mb-3 cursor-pointer hover:bg-[#6b7d6b] transition-colors relative overflow-hidden"
								style={{
									backgroundImage:
										"url(/images/chatbox/relationship.png)",
									backgroundSize: "cover",
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
								}}
								onClick={handleMobileNavigation}
							></div>
						</Link>

						<Link href="/demo?category=career">
							<div
								className="bg-[#768976] rounded-lg py-7 mb-3 cursor-pointer hover:bg-[#6b7d6b] transition-colors relative overflow-hidden"
								style={{
									backgroundImage:
										"url(/images/chatbox/career.png)",
									backgroundSize: "cover",
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
								}}
								onClick={handleMobileNavigation}
							></div>
						</Link>

						<Link href="/demo?category=wealth">
							<div
								className="bg-[#768976] rounded-lg py-7 mb-3 cursor-pointer hover:bg-[#6b7d6b] transition-colors relative overflow-hidden"
								style={{
									backgroundImage:
										"url(/images/chatbox/wealth.png)",
									backgroundSize: "cover",
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
								}}
								onClick={handleMobileNavigation}
							></div>
						</Link>

						<Link href="/demo?category=health">
							<div
								className="bg-[#768976] rounded-lg py-7 mb-3 cursor-pointer hover:bg-[#6b7d6b] transition-colors relative overflow-hidden"
								style={{
									backgroundImage:
										"url(/images/chatbox/health.png)",
									backgroundSize: "cover",
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
								}}
								onClick={handleMobileNavigation}
							></div>
						</Link>
					</div>
				</div>

				{/* 移動端遮罩層 */}
				{isMobileMenuOpen && (
					<div
						className="fixed inset-0 z-30 bg-transparent xl:hidden"
						onClick={() => setIsMobileMenuOpen(false)}
						style={{ width: "100vw", height: "100vh" }}
					/>
				)}

				{/* 右側聊天區域 - 更新背景樣式和響應式設計 */}
				<div
					className="flex flex-col flex-1 w-full min-h-0 xl:ml-0"
					style={{
						backgroundColor: "#EFEFEF",
						backgroundImage:
							"url(/images/report/housing-report-bg.png)",
						backgroundSize: "60%", // Try: "contain", "cover", "50%", "200px 150px"
						backgroundPosition: "bottom right", // Try: "top left", "bottom right", "50% 25%"
						backgroundRepeat: "no-repeat",
						boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
						border: "3px solid #E0E0E0",
					}}
				>
					{/* 聊天界面 */}
					<div className="flex flex-col h-full min-h-0">
						{/* 消息區域 */}
						<div
							className="flex-1 min-h-0 p-2 pt-2 space-y-4 overflow-y-auto sm:p-4 sm:pt-4 md:p-6 md:pt-6"
							style={{
								height: showLandingPage
									? "calc(100vh - 8rem)"
									: "calc(100vh - 12rem)",
							}}
						>
							{showLandingPage ? (
								/* 落地頁 */
								<div className="flex flex-col items-center justify-center h-full px-2 sm:px-4">
									{/* HarmoniQ Logo和風鈴 - 響應式設計 */}
									<div className="flex flex-row items-center gap-3 mt-20 sm:flex-row sm:gap-6 md:gap-8 sm:mt-0">
										<img
											src="/images/風水妹/風水妹.png"
											alt="風鈴"
											className="flex-shrink-0 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-50 lg:h-50"
											onError={(e) => {
												(
													e.target as HTMLImageElement
												).style.display = "none";
											}}
										/>
										<div
											className="text-3xl text-left sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl responsive-title-margin"
											style={{
												width: "auto",
												minWidth: "120px",
												maxWidth: "350px",
												height: "auto",
												minHeight: "40px",
												background:
													"linear-gradient(45deg, #A3B116, #374A37)",
												WebkitBackgroundClip: "text",
												WebkitTextFillColor:
													"transparent",
												backgroundClip: "text",
												display: "flex",
												alignItems: "center",
												justifyContent: "flex-start",
												fontFamily: "'UoqMunThenKhung'",
												lineHeight: "1.2",
												padding: "4px",
											}}
										>
											風鈴聊天室
										</div>
									</div>

									{/* 輸入框 - 響應式設計 */}
									<div className="w-full max-w-2xl px-1 sm:px-2 md:px-4 lg:px-0">
										<div className="flex items-center transition-shadow bg-white border border-gray-300 rounded-full shadow-lg hover:shadow-xl">
											<textarea
												value={inputMessage}
												onChange={(e) =>
													setInputMessage(
														e.target.value
													)
												}
												onKeyPress={handleKeyPress}
												placeholder="有任何疑問嗎？請隨時與我分享～"
												className="flex-1 px-3 py-2.5 text-sm text-black placeholder-gray-500 bg-transparent resize-none focus:outline-none sm:px-4 sm:py-3 md:px-6 md:py-4 md:text-base"
												rows={1}
												disabled={isLoading}
												style={{ minHeight: "40px" }}
											/>
											<div className="flex items-center px-2 space-x-1 sm:px-3 sm:space-x-1 md:px-4 md:space-x-2">
												{/* Mic button - hidden on very small screens */}
												{/* <button className="hidden p-1.5 text-gray-400 transition-colors hover:text-gray-600 active:text-gray-700 sm:block md:p-2">
													<Mic className="w-4 h-4 md:w-5 md:h-5" />
												</button> */}
												{/* Send button - larger touch target on mobile */}
												<button
													onClick={handleSendMessage}
													disabled={
														!inputMessage.trim() ||
														isLoading
													}
													className="p-2 text-purple-600 transition-all duration-200 rounded-full hover:text-purple-700 hover:bg-purple-50 active:bg-purple-100 disabled:text-gray-300 disabled:cursor-not-allowed disabled:hover:bg-transparent md:p-2"
													style={{
														minWidth: "40px",
														minHeight: "40px",
													}}
												>
													<Send className="w-4 h-4 md:w-5 md:h-5" />
												</button>
											</div>
										</div>
									</div>

									{/* 快捷標籤 - 自動滾動 */}
									<div className="w-full max-w-4xl mx-auto mt-3 overflow-hidden sm:mt-5">
										<div className="flex gap-2 sm:gap-3 animate-scroll-continuous">
											{/* 第一組標籤 */}
											<button
												onClick={() =>
													handleShortcutClick(
														"我想增強財運"
													)
												}
												className="flex items-center px-2 py-1.5 space-x-1 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap sm:px-3 sm:py-2 sm:space-x-2 md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900"
											>
												<div className="flex items-center justify-center w-6 h-6 bg-yellow-100 rounded-full">
													<span className="text-sm text-yellow-600">
														💰
													</span>
												</div>
												<span>我想增多財運</span>
											</button>
											<button
												onClick={() =>
													handleShortcutClick(
														"如何更健康"
													)
												}
												className="flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900"
											>
												<div className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
													<span className="text-sm text-green-600">
														🍃
													</span>
												</div>
												<span>如何更健康</span>
											</button>
											<button
												onClick={() =>
													handleShortcutClick(
														"我想中六合彩"
													)
												}
												className="flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900"
											>
												<div className="flex items-center justify-center w-6 h-6 bg-red-100 rounded-full">
													<span className="text-sm text-red-600">
														🎰
													</span>
												</div>
												<span>我想中六合彩</span>
											</button>
											<button
												onClick={() =>
													handleShortcutClick(
														"我想加人工"
													)
												}
												className="flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900"
											>
												<div className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full">
													<span className="text-sm text-blue-600">
														💼
													</span>
												</div>
												<span>我想加人工</span>
											</button>
											<button
												onClick={() =>
													handleShortcutClick(
														"如何可以升職"
													)
												}
												className="flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900"
											>
												<div className="flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full">
													<span className="text-sm text-purple-600">
														📈
													</span>
												</div>
												<span>如何可以升職</span>
											</button>
											<button
												onClick={() =>
													handleShortcutClick(
														"我想拍拖"
													)
												}
												className="flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900"
											>
												<div className="flex items-center justify-center w-6 h-6 bg-pink-100 rounded-full">
													<span className="text-sm text-pink-600">
														💕
													</span>
												</div>
												<span>我想拍拖</span>
											</button>
											<button
												onClick={() =>
													handleShortcutClick(
														"我想增強桃花運"
													)
												}
												className="flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900"
											>
												<div className="flex items-center justify-center w-6 h-6 bg-pink-100 rounded-full">
													<span className="text-sm text-pink-600">
														🌸
													</span>
												</div>
												<span>我想增強桃花運</span>
											</button>
											<button
												onClick={() =>
													handleShortcutClick(
														"我身體會有隱患嗎"
													)
												}
												className="flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900"
											>
												<div className="flex items-center justify-center w-6 h-6 bg-orange-100 rounded-full">
													<span className="text-sm text-orange-600">
														⚕️
													</span>
												</div>
												<span>我身體會有隱患嗎</span>
											</button>

											{/* 重複第一組標籤以實現無縫循環 */}
											<button
												onClick={() =>
													handleShortcutClick(
														"我想增多財運"
													)
												}
												className="flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900"
											>
												<div className="flex items-center justify-center w-6 h-6 bg-yellow-100 rounded-full">
													<span className="text-sm text-yellow-600">
														💰
													</span>
												</div>
												<span>我想增多財運</span>
											</button>
											<button
												onClick={() =>
													handleShortcutClick(
														"如何更健康"
													)
												}
												className="flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900"
											>
												<div className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
													<span className="text-sm text-green-600">
														🍃
													</span>
												</div>
												<span>如何更健康</span>
											</button>
											<button
												onClick={() =>
													handleShortcutClick(
														"我想中六合彩"
													)
												}
												className="flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900"
											>
												<div className="flex items-center justify-center w-6 h-6 bg-red-100 rounded-full">
													<span className="text-sm text-red-600">
														🎰
													</span>
												</div>
												<span>我想中六合彩</span>
											</button>
											<button
												onClick={() =>
													handleShortcutClick(
														"我想加人工"
													)
												}
												className="flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900"
											>
												<div className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full">
													<span className="text-sm text-blue-600">
														💼
													</span>
												</div>
												<span>我想加人工</span>
											</button>
											<button
												onClick={() =>
													handleShortcutClick(
														"如何可以升職"
													)
												}
												className="flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900"
											>
												<div className="flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full">
													<span className="text-sm text-purple-600">
														📈
													</span>
												</div>
												<span>如何可以升職</span>
											</button>
											<button
												onClick={() =>
													handleShortcutClick(
														"我想拍拖"
													)
												}
												className="flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900"
											>
												<div className="flex items-center justify-center w-6 h-6 bg-pink-100 rounded-full">
													<span className="text-sm text-pink-600">
														💕
													</span>
												</div>
												<span>我想拍拖</span>
											</button>
											<button
												onClick={() =>
													handleShortcutClick(
														"我想增強桃花運"
													)
												}
												className="flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900"
											>
												<div className="flex items-center justify-center w-6 h-6 bg-pink-100 rounded-full">
													<span className="text-sm text-pink-600">
														🌸
													</span>
												</div>
												<span>我想增強桃花運</span>
											</button>
											<button
												onClick={() =>
													handleShortcutClick(
														"我身體會有隱患嗎"
													)
												}
												className="flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900"
											>
												<div className="flex items-center justify-center w-6 h-6 bg-orange-100 rounded-full">
													<span className="text-sm text-orange-600">
														⚕️
													</span>
												</div>
												<span>我身體會有隱患嗎</span>
											</button>
										</div>
									</div>
								</div>
							) : (
								/* 正常聊天消息 */
								messages.map((message, index) => (
									<div
										key={index}
										className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
									>
										{message.role === "user" ? (
											/* 用戶消息樣式 - 黃色背景黑色文字 */
											<div
												className="max-w-[80%] sm:max-w-[85%] md:max-w-[70%] p-2 sm:p-3 md:p-4 rounded-2xl shadow-md"
												style={{
													backgroundColor: "#CFE117",
												}}
											>
												<div className="text-xs font-medium text-black sm:text-sm">
													{message.content || ""}
												</div>
											</div>
										) : (
											/* AI助手消息樣式 - 白色背景配風鈴頭像 */
											<div className="max-w-[90%] sm:max-w-[95%] md:max-w-[90%] bg-white rounded-2xl shadow-md border border-gray-200">
												{/* 助手頭像和標題 */}
												<div className="flex items-center p-3 md:p-4">
													<img
														src="/images/風水妹/風水妹2.png"
														alt="風鈴"
														className="w-10 h-10 mr-2 rounded-full shadow-lg md:w-12 md:h-12 md:mr-3"
														onError={(e) => {
															(
																e.target as HTMLImageElement
															).style.display =
																"none";
														}}
													/>
													<div>
														<div className="text-sm font-medium text-black md:text-base">
															風鈴
														</div>
													</div>
												</div>

												{/* 消息內容 */}
												<div className="px-3 pb-2 md:px-4">
													<div className="text-sm leading-relaxed text-black whitespace-pre-wrap">
														{(() => {
															const content =
																message.content ||
																"";
															// 檢查是否包含結構化內容的各種模式
															const hasStructuredOptions =
																/\*\*[0-9]️⃣.*\*\*/.test(
																	content
																) ||
																/[0-9]️⃣.*/.test(
																	content
																) ||
																/為了提供最適合的分析/.test(
																	content
																) ||
																/📅.*\*\*生日格式範例/.test(
																	content
																) ||
																/告訴風鈴你的生日/.test(
																	content
																) ||
																/風鈴會先給你一個簡單的分析/.test(
																	content
																) ||
																/───────────────────/.test(
																	content
																) ||
																/💎.*\*\*想要更深入的分析嗎/.test(
																	content
																);

															if (
																hasStructuredOptions
															) {
																// 使用分隔線來分割內容
																if (
																	content.includes(
																		"───────────────────"
																	)
																) {
																	const parts =
																		content.split(
																			"───────────────────"
																		);
																	return parts.map(
																		(
																			part,
																			index
																		) => {
																			// 第一部分是AI分析內容，應該加粗
																			if (
																				index ===
																				0
																			) {
																				return (
																					<span
																						key={
																							index
																						}
																						className="font-bold"
																					>
																						{
																							part
																						}
																					</span>
																				);
																			}
																			// 分隔線後的內容是報告選項，保持正常字重
																			return (
																				<span
																					key={
																						index
																					}
																					className="font-normal"
																				>
																					{"───────────────────" +
																						part}
																				</span>
																			);
																		}
																	);
																}

																// 其他結構化內容的處理（生日格式等）
																const splitPatterns =
																	/(?=為了提供最適合的分析|你想要哪種分析|告訴風鈴你的生日|📅.*\*\*生日格式範例)/;
																const parts =
																	content.split(
																		splitPatterns
																	);

																return parts.map(
																	(
																		part,
																		index
																	) => {
																		// 檢查這部分是否為純粹的AI自然回應
																		const isNaturalResponse =
																			index ===
																				0 &&
																			part.trim() &&
																			!part.includes(
																				"️⃣"
																			) &&
																			!part.includes(
																				"📅"
																			) &&
																			!part.includes(
																				"**生日格式範例"
																			) &&
																			!part.includes(
																				"告訴風鈴你的生日"
																			) &&
																			!part.includes(
																				"風鈴會先給你一個簡單的分析"
																			);

																		if (
																			isNaturalResponse
																		) {
																			return (
																				<span
																					key={
																						index
																					}
																					className="font-bold"
																				>
																					{
																						part
																					}
																				</span>
																			);
																		}
																		// 其他部分是結構化內容，保持正常字重
																		return (
																			<span
																				key={
																					index
																				}
																				className="font-normal"
																			>
																				{
																					part
																				}
																			</span>
																		);
																	}
																);
															} else {
																// 檢查是否包含呼叫行動(CTA)部分
																const ctaPattern =
																	/(?=想要開始分析的話|想了解的話|想要分析的話)/;
																const ctaParts =
																	content.split(
																		ctaPattern
																	);

																if (
																	ctaParts.length >
																	1
																) {
																	// 有CTA部分，分別處理
																	return ctaParts.map(
																		(
																			part,
																			index
																		) => {
																			// 第一部分是主要內容，加粗
																			if (
																				index ===
																				0
																			) {
																				return (
																					<span
																						key={
																							index
																						}
																						className="font-bold"
																					>
																						{
																							part
																						}
																					</span>
																				);
																			}
																			// CTA部分使用正常字重
																			return (
																				<span
																					key={
																						index
																					}
																					className="font-normal"
																				>
																					{
																						part
																					}
																				</span>
																			);
																		}
																	);
																} else {
																	// 如果沒有結構化選項和CTA，整個內容都加粗（純AI回應）
																	return (
																		<span className="font-bold">
																			{
																				content
																			}
																		</span>
																	);
																}
															}
														})()}
													</div>
												</div>

												{/* AI 分析結果顯示 */}
												{message.aiAnalysis && (
													<div className="p-2 mx-3 mb-3 text-xs border rounded-lg md:p-3 md:mx-4 md:mb-4 bg-gray-50">
														<div className="flex items-center gap-2 mb-2">
															<Sparkles
																size={14}
																className="text-purple-600"
															/>
															<span className="font-medium text-gray-700">
																AI 分析結果
															</span>
														</div>

														<div className="space-y-2">
															<div className="flex items-center gap-2">
																<span className="text-gray-600">
																	話題:
																</span>
																<Badge
																	className={getTopicBadgeColor(
																		message
																			.aiAnalysis
																			.detectedTopic
																	)}
																>
																	{
																		message
																			.aiAnalysis
																			.detectedTopic
																	}
																</Badge>
															</div>

															<div className="flex items-center gap-2">
																<span className="text-gray-600">
																	範圍內:
																</span>
																<Badge
																	variant={
																		message
																			.aiAnalysis
																			.isWithinScope
																			? "default"
																			: "secondary"
																	}
																>
																	{message
																		.aiAnalysis
																		.isWithinScope
																		? "✅ 是"
																		: "❌ 否"}
																</Badge>
															</div>

															<div className="flex items-center gap-2">
																<span className="text-gray-600">
																	信心度:
																</span>
																<span className="font-mono text-sm text-purple-600">
																	{(
																		message
																			.aiAnalysis
																			.confidence *
																		100
																	).toFixed(
																		0
																	)}
																	%
																</span>
															</div>

															{message.aiAnalysis
																.specificProblem && (
																<div>
																	<span className="text-gray-600">
																		具體問題:
																	</span>
																	<p className="mt-1 text-xs text-gray-800">
																		{
																			message
																				.aiAnalysis
																				.specificProblem
																		}
																	</p>
																</div>
															)}
														</div>
													</div>
												)}

												{/* 時間戳 */}
												<div className="px-3 pb-2 md:px-4 md:pb-3">
													<div className="text-xs text-gray-500">
														{isClient
															? (() => {
																	const date =
																		new Date(
																			message.timestamp
																		);
																	const hours =
																		date
																			.getHours()
																			.toString()
																			.padStart(
																				2,
																				"0"
																			);
																	const minutes =
																		date
																			.getMinutes()
																			.toString()
																			.padStart(
																				2,
																				"0"
																			);
																	const seconds =
																		date
																			.getSeconds()
																			.toString()
																			.padStart(
																				2,
																				"0"
																			);
																	return `${hours}:${minutes}:${seconds}`;
																})()
															: "--:--:--"}
														{/* {message.systemType && (
															<span className="ml-2 text-purple-600">
																•{" "}
																{
																	message.systemType
																}
															</span>
														)} */}
													</div>
												</div>
											</div>
										)}
									</div>
								))
							)}

							{isLoading && (
								<div className="flex justify-start">
									<div className="bg-white border border-gray-200 shadow-md rounded-2xl">
										<div className="flex items-center p-3 md:p-4">
											<img
												src="/images/風水妹/風水妹2.png"
												alt="風鈴"
												className="w-10 h-10 mr-2 rounded-full shadow:lg md:w-12 md:h-12 md:mr-3"
												onError={(e) => {
													(
														e.target as HTMLImageElement
													).style.display = "none";
												}}
											/>
											<div>
												<div className="font-medium text-black">
													風鈴
												</div>
											</div>
										</div>
										<div className="px-3 pb-3 md:px-4 md:pb-4">
											<div className="flex items-center space-x-2">
												<span className="text-sm text-black">
													風鈴費神運算中
												</span>
												<Brain className="w-4 h-4 text-purple-600 animate-pulse" />
												<div className="w-32 h-2 overflow-hidden bg-gray-200 rounded-full">
													<div
														className="h-full rounded-full bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400"
														style={{
															animation: `progress-bar ${loadingDuration}s linear infinite`,
														}}
														onAnimationStart={() =>
															console.log(
																`🎬 Progress bar started with ${loadingDuration}s duration`
															)
														}
													></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							)}

							{/* Scroll anchor */}
							<div ref={messagesEndRef} />
						</div>

						{/* 輸入區域 - 只在非落地頁時顯示，響應式設計 */}
						{!showLandingPage && (
							<div className="flex-shrink-0 p-1 border-t border-gray-200 sm:p-2 md:p-4">
								<div className="flex items-center mx-1 transition-shadow bg-white border border-gray-200 rounded-full shadow-lg sm:mx-0 hover:shadow-xl">
									<textarea
										value={inputMessage}
										onChange={(e) =>
											setInputMessage(e.target.value)
										}
										onKeyPress={handleKeyPress}
										placeholder="輸入任何問題，風鈴會分析並引導你..."
										className="flex-1 px-2 py-2 text-xs text-black placeholder-gray-500 bg-transparent resize-none focus:outline-none sm:px-3 sm:py-2.5 sm:text-sm md:px-6 md:py-3 md:text-base"
										rows={1}
										disabled={isLoading}
										style={{ minHeight: "32px" }}
									/>
									<div className="flex items-center px-1 space-x-1 sm:px-2 md:px-4 md:space-x-2">
										{/* Send button with larger touch target on mobile */}
										<button
											onClick={handleSendMessage}
											disabled={
												!inputMessage.trim() ||
												isLoading
											}
											className="p-1.5 text-purple-600 transition-all duration-200 rounded-full hover:text-purple-700 hover:bg-purple-50 active:bg-purple-100 disabled:text-gray-300 disabled:cursor-not-allowed disabled:hover:bg-transparent sm:p-2"
											style={{
												minWidth: "32px",
												minHeight: "32px",
											}}
										>
											<Send className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
										</button>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* 生日信息收集模態框 */}
			{showBirthdayModal && (
				<BirthdayModal
					isOpen={showBirthdayModal}
					onClose={() => setShowBirthdayModal(false)}
					onSubmit={handleBirthdaySubmit}
					concern={concern}
					isCoupleAnalysis={isCoupleAnalysis}
				/>
			)}

			{/* Custom Font Definition */}
			<style jsx global>{`
				@font-face {
					font-family: "UoqMunThenKhung";
					src: url("/fonts/UoqMunThenKhung.ttf") format("truetype");
					font-weight: normal;
					font-style: normal;
					font-display: swap;
				}

				@keyframes progress-bar {
					0% {
						width: 100%;
					}
					100% {
						width: 0%;
					}
				}

				@keyframes scroll-left {
					0% {
						transform: translateX(50%);
					}
					100% {
						transform: translateX(-50%);
					}
				}

				@keyframes scroll-continuous {
					0% {
						transform: translateX(0%);
					}
					100% {
						transform: translateX(-50%);
					}
				}

				.animate-progress-bar {
					animation: progress-bar 15s linear infinite;
				}

				.animate-scroll-left {
					animation: scroll-left 20s linear infinite;
					width: max-content;
					max-width: 800px;
				}

				.animate-scroll-left:hover {
					animation-play-state: paused;
				}

				.animate-scroll-continuous {
					animation: scroll-continuous 30s linear infinite;
					width: max-content;
					display: flex;
				}

				.animate-scroll-continuous:hover {
					animation-play-state: paused;
				}
			`}</style>
		</div>
	);
}
