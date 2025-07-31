"use client";
import { useEffect } from "react";
import { event } from "./GoogleAnalytics";

export default function AutoButtonTracker() {
	useEffect(() => {
		// Ensure page is properly tracked on mount
		const ensurePageTracking = () => {
			if (window.gtag) {
				const pageNames = {
					"/zh-TW": "Home Page",
					"/zh-TW/free": "Free Analysis Page",
					"/zh-TW/freereport": "Free Report Page",
					"/zh-TW/design": "Design Page",
					"/zh-TW/report": "Report Page",
					"/zh-TW/success": "Success Page",
					"/zh-TW/price": "Pricing Page",
					"/zh-CN": "Home Page (CN)",
					"/zh-CN/free": "Free Analysis Page (CN)",
					"/zh-CN/freereport": "Free Report Page (CN)",
					"/zh-CN/design": "Design Page (CN)",
					"/zh-CN/report": "Report Page (CN)",
					"/zh-CN/success": "Success Page (CN)",
					"/zh-CN/price": "Pricing Page (CN)",
				};

				const pathname = window.location.pathname;
				const pageName = pageNames[pathname] || `Page: ${pathname}`;

				// Force page tracking to avoid (not set)
				window.gtag("event", "page_view", {
					page_title: pageName,
					page_location: window.location.href,
					page_path: pathname,
					custom_page_name: pageName,
					send_to: "G-FSF2H5X9S4", // Your GA tracking ID
				});

				console.log(
					`🔄 Fallback page tracking: "${pageName}" at ${pathname}`
				);
			}
		};

		// Wait for gtag to be available
		const waitForGtag = () => {
			if (window.gtag) {
				ensurePageTracking();
			} else {
				setTimeout(waitForGtag, 100);
			}
		};

		waitForGtag();

		const trackButtonClick = (e) => {
			const button = e.target.closest(
				'button, a, .btn, [role="button"], [data-track], input[type="submit"], input[type="button"]'
			);

			if (button) {
				// Get button identifier
				const buttonText = button.textContent?.trim() || "";
				const buttonId = button.id || "";
				const buttonClass = button.className || "";
				const buttonAriaLabel = button.getAttribute("aria-label") || "";
				const buttonDataTrack = button.getAttribute("data-track") || "";
				const href = button.getAttribute("href") || "";

				// Better button identification for buttons without text
				let contextualName = "";
				if (
					!buttonText &&
					!buttonId &&
					!buttonAriaLabel &&
					!buttonDataTrack
				) {
					// Look for context clues
					const parentText =
						button.closest("div")?.textContent?.trim() || "";
					const siblingText =
						button.parentElement?.textContent?.trim() || "";
					const imageAlt = button.querySelector("img")?.alt || "";
					const iconClass =
						button.querySelector('[class*="icon"]')?.className ||
						"";

					// Check for specific patterns
					if (
						imageAlt.includes("trash") ||
						iconClass.includes("trash") ||
						button.querySelector('[src*="trash"]')
					) {
						contextualName = "delete_button";
					} else if (
						button.querySelector("svg") &&
						parentText.includes("照片")
					) {
						contextualName = "file_upload_area";
					} else if (
						button.classList.contains("rounded-full") &&
						button.querySelector("img")
					) {
						contextualName = "icon_button";
					} else if (
						parentText.includes("瀏覽") ||
						siblingText.includes("瀏覽")
					) {
						contextualName = "browse_area";
					} else {
						// Last resort - use a more descriptive class-based name
						const meaningfulClasses = buttonClass
							.split(" ")
							.find((cls) =>
								[
									"btn",
									"button",
									"upload",
									"delete",
									"close",
									"submit",
									"cta",
								].some((keyword) =>
									cls.toLowerCase().includes(keyword)
								)
							);
						contextualName = meaningfulClasses
							? `button_${meaningfulClasses}`
							: "unknown_button";
					}
				}

				// Determine if this is a trackable element
				const isButton = button.tagName === "BUTTON";
				const isInput =
					button.tagName === "INPUT" &&
					["submit", "button"].includes(button.type);
				const isClickableLink =
					button.tagName === "A" &&
					(buttonText.includes("免費開始測算") ||
						buttonText.includes("立即") ||
						buttonText.includes("開始") ||
						buttonText.includes("測算") ||
						buttonText.includes("分析") ||
						buttonClass.includes("btn") ||
						buttonClass.includes("button") ||
						buttonClass.includes("cta") ||
						buttonDataTrack ||
						buttonAriaLabel);

				// Only track if it's a button, input, or meaningful clickable link
				if (isButton || isInput || isClickableLink) {
					// Create a meaningful button name with better fallbacks
					const buttonName =
						buttonDataTrack ||
						buttonAriaLabel ||
						buttonId ||
						buttonText ||
						contextualName || // Use our contextual name
						(href ? `link_${href.split("/").pop()}` : null) ||
						"unidentified_button";

					// Get page context
					const pageUrl = window.location.pathname;
					const pageTitle = document.title;

					// Track the button click using your existing event function
					event({
						action: "button_click",
						category: "UI_Interaction",
						label: `${buttonName} | ${pageUrl}`,
						value: 1,
					});

					// Additional detailed tracking with direct gtag call
					if (window.gtag) {
						window.gtag("event", "button_click", {
							event_category: "Button_Click",
							event_label: buttonName,
							button_text: buttonText,
							button_href: href,
							page_path: pageUrl,
							page_title: pageTitle,
							button_type: button.tagName.toLowerCase(),
							button_context: contextualName,
							timestamp: new Date().toISOString(),
						});
					}

					console.log(
						`🔘 Button/Link tracked: "${buttonName}" (text: "${buttonText}", context: "${contextualName}") -> ${href || "no-href"} on ${pageUrl}`
					);
				}
			}
		};

		// Add event listener to document
		document.addEventListener("click", trackButtonClick, true);

		// Cleanup
		return () => {
			document.removeEventListener("click", trackButtonClick, true);
		};
	}, []);

	return null;
}
