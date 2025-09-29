/**
 * Enhanced Region Detection Hook with Auto-Redirect
 * Handles both region detection and automatic locale redirection
 */

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { getUserRegion, saveRegionPreference } from "../utils/regionDetection";
import { getRegionConfig, formatPrice } from "../config/regions";

/**
 * Enhanced custom hook for region detection with auto-redirect
 * @param {object} options - Configuration options
 * @returns {object} - Region state and methods
 */
export const useRegionDetectionWithRedirect = (options = {}) => {
	const { autoRedirect = false, skipFirstRedirect = true } = options;
	const router = useRouter();
	const pathname = usePathname();

	const [region, setRegion] = useState("hongkong");
	const [regionConfig, setRegionConfig] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [hasAutoRedirected, setHasAutoRedirected] = useState(false);

	// Get current locale from pathname
	const currentLocale = pathname.startsWith("/zh-CN") ? "zh-CN" : "zh-TW";

	// Region to locale mapping
	const regionLocaleMap = {
		china: "zh-CN",
		hongkong: "zh-TW",
	};

	// Initialize region detection
	useEffect(() => {
		const initRegion = async () => {
			try {
				setIsLoading(true);
				console.log("🚀 Initializing enhanced region detection...");

				const detectedRegion = await getUserRegion();
				const config = getRegionConfig(detectedRegion);

				setRegion(detectedRegion);
				setRegionConfig(config);
				setError(null);

				console.log("✅ Region initialized:", detectedRegion);

				// Auto-redirect to appropriate locale if enabled
				if (autoRedirect && !hasAutoRedirected && !skipFirstRedirect) {
					const expectedLocale = regionLocaleMap[detectedRegion];
					if (expectedLocale && expectedLocale !== currentLocale) {
						console.log(
							`🔄 Auto-redirecting from ${currentLocale} to ${expectedLocale}`
						);
						const newPathname = `/${pathname.split("/").slice(2).join("/")}`;
						router.push(newPathname, { locale: expectedLocale });
						setHasAutoRedirected(true);
					}
				}
			} catch (err) {
				console.error("❌ Region detection failed:", err);
				setError(err.message);

				// Fallback to Hong Kong
				const fallbackConfig = getRegionConfig("hongkong");
				setRegion("hongkong");
				setRegionConfig(fallbackConfig);
			} finally {
				setIsLoading(false);
			}
		};

		initRegion();
	}, [
		autoRedirect,
		hasAutoRedirected,
		skipFirstRedirect,
		currentLocale,
		pathname,
		router,
	]);

	// Method to manually change region (also changes locale)
	const changeRegion = (newRegion) => {
		if (["china", "hongkong"].includes(newRegion)) {
			const config = getRegionConfig(newRegion);
			const targetLocale = regionLocaleMap[newRegion];

			setRegion(newRegion);
			setRegionConfig(config);
			saveRegionPreference(newRegion);

			console.log("🔄 Region changed to:", newRegion);

			// Redirect to appropriate locale
			if (targetLocale && targetLocale !== currentLocale) {
				const newPathname = `/${pathname.split("/").slice(2).join("/")}`;
				router.push(newPathname, { locale: targetLocale });
			}
		}
	};

	// Method to format price for current region
	const formatPriceForRegion = (amount) => {
		return formatPrice(amount, region);
	};

	// Method to get Stripe price ID for current region
	const getStripePriceId = (plan = "basic") => {
		return regionConfig?.stripePriceIds?.[plan] || null;
	};

	return {
		// State
		region,
		regionConfig,
		isLoading,
		error,
		currentLocale,
		hasAutoRedirected,

		// Methods
		changeRegion,
		formatPriceForRegion,
		getStripePriceId,

		// Computed values
		currency: regionConfig?.currency || "HKD",
		symbol: regionConfig?.symbol || "HK$",
		locale: regionConfig?.locale || "zh-TW",
		flag: regionConfig?.flag || "🇭🇰",
	};
};

// Keep the original hook for backward compatibility
export const useRegionDetection = () => {
	return useRegionDetectionWithRedirect({ autoRedirect: false });
};
