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
			const button = e.target.closest('button, a[role="button"], .btn');
			if (button) {
				// Get button identifier
				const buttonText = button.textContent?.trim() || "";
				const buttonId = button.id || "";
				const buttonClass = button.className || "";
				const buttonAriaLabel = button.getAttribute("aria-label") || "";
				const buttonDataTrack = button.getAttribute("data-track") || "";

				// Create a meaningful button name
				const buttonName =
					buttonDataTrack ||
					buttonAriaLabel ||
					buttonId ||
					buttonText ||
					`button-${buttonClass.split(" ")[0]}`;

				// Get page context
				const pageUrl = window.location.pathname;
				const pageTitle = document.title;

				// Track the button click
				event({
					action: "button_click",
					category: "UI_Interaction",
					label: `${buttonName} | ${pageUrl}`,
					value: 1,
				});

				// Additional detailed tracking
				event({
					action: "detailed_button_click",
					category: "Button_Analytics",
					label: buttonName,
					custom_parameters: {
						button_text: buttonText,
						button_id: buttonId,
						button_classes: buttonClass,
						page_url: pageUrl,
						page_title: pageTitle,
						timestamp: new Date().toISOString(),
					},
				});

				console.log(`🔘 Button tracked: "${buttonName}" on ${pageUrl}`);
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
