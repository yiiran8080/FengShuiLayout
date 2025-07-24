"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

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
	// Add more routes as needed
};

export default function PageTracker() {
	const pathname = usePathname();

	useEffect(() => {
		const trackPage = () => {
			if (typeof window !== "undefined" && window.gtag) {
				const pageName = pageNames[pathname] || `Page: ${pathname}`;

				// Send page view with custom title
				window.gtag("event", "page_view", {
					page_title: pageName,
					page_location: window.location.href,
					page_path: pathname,
					custom_page_name: pageName,
					send_to: "G-FSF2H5X9S4", // Explicitly specify tracking ID
					page_referrer: document.referrer || "(direct)",
				});

				console.log(`Page tracked: ${pageName} at ${pathname}`);
				return true;
			}
			return false;
		};

		// Retry logic for gtag availability
		let attempts = 0;
		const maxAttempts = 50; // 5 seconds max wait

		const tryTracking = () => {
			if (trackPage() || attempts >= maxAttempts) {
				return;
			}
			attempts++;
			setTimeout(tryTracking, 100);
		};

		tryTracking();
	}, [pathname]);

	return null; // This component doesn't render anything
}
