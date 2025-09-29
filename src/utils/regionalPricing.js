/**
 * Regional Pricing Utility
 * Automatically selects the correct Stripe Price ID based on user's locale/region
 */

/**
 * Get the appropriate price ID based on locale and payment type
 * @param {string} locale - Current locale (zh-CN or zh-TW)
 * @param {string} paymentType - Type of payment (fengshui, life, fortune, couple)
 * @returns {string} - Appropriate Stripe price ID
 */
export function getRegionalPriceId(locale, paymentType) {
	// Determine currency based on locale
	const currency = locale === "zh-CN" ? "CNY" : "HKD";

	// Price ID mapping based on currency and payment type
	const priceIdMap = {
		CNY: {
			fengshui: process.env.PRICE_ID2_CNY, // ¥188 fengshui
			life: process.env.PRICE_ID4_CNY, // ¥88 life
			fortune: process.env.PRICE_ID5_CNY, // ¥38 fortune
			couple: process.env.PRICE_ID6_CNY, // ¥88 couple
		},
		HKD: {
			fengshui: process.env.PRICE_ID2_HKD, // HK$188 fengshui
			life: process.env.PRICE_ID4_HKD, // HK$88 life
			fortune: process.env.PRICE_ID5_HKD, // HK$38 fortune
			couple: process.env.PRICE_ID6_HKD, // HK$88 couple
		},
	};

	const priceId = priceIdMap[currency]?.[paymentType];

	if (!priceId) {
		console.error(
			`❌ No price ID found for currency: ${currency}, paymentType: ${paymentType}`
		);
		// Fallback to HKD if CNY price not found
		return priceIdMap.HKD[paymentType] || process.env.PRICE_ID2_HKD;
	}

	console.log(
		`✅ Selected price ID: ${priceId} for ${currency} ${paymentType}`
	);
	return priceId;
}

/**
 * Extract locale from request headers
 * @param {Request} request - Next.js request object
 * @returns {string} - Detected locale (zh-CN or zh-TW)
 */
export function getLocaleFromRequest(request) {
	// Method 1: Check the pathname for locale
	const url = new URL(request.url);
	const pathSegments = url.pathname.split("/");

	if (pathSegments[1] === "zh-CN") {
		return "zh-CN";
	} else if (pathSegments[1] === "zh-TW") {
		return "zh-TW";
	}

	// Method 2: Check Accept-Language header
	const acceptLanguage = request.headers.get("accept-language") || "";
	if (acceptLanguage.includes("zh-CN")) {
		return "zh-CN";
	}

	// Method 3: Check referer URL
	const referer = request.headers.get("referer") || "";
	if (referer.includes("/zh-CN/")) {
		return "zh-CN";
	}

	// Default to Traditional Chinese (HKD)
	return "zh-TW";
}

/**
 * Get currency symbol based on locale
 * @param {string} locale - Current locale
 * @returns {string} - Currency symbol
 */
export function getCurrencySymbol(locale) {
	return locale === "zh-CN" ? "¥" : "HK$";
}

/**
 * Get currency code based on locale
 * @param {string} locale - Current locale
 * @returns {string} - Currency code
 */
export function getCurrencyCode(locale) {
	return locale === "zh-CN" ? "CNY" : "HKD";
}

/**
 * Get display prices based on locale
 * @param {string} locale - Current locale
 * @returns {object} - Price information for display
 */
export function getDisplayPrices(locale) {
	const currency = locale === "zh-CN" ? "CNY" : "HKD";
	const symbol = getCurrencySymbol(locale);

	const prices = {
		CNY: {
			fengshui: { original: 388, discount: 188 },
			life: { original: 168, discount: 88 },
			fortune: { original: 88, discount: 38 },
			couple: { original: 188, discount: 88 },
		},
		HKD: {
			fengshui: { original: 388, discount: 188 },
			life: { original: 168, discount: 88 },
			fortune: { original: 88, discount: 38 },
			couple: { original: 188, discount: 88 },
		},
	};

	return {
		currency,
		symbol,
		prices: prices[currency],
	};
}

export default {
	getRegionalPriceId,
	getLocaleFromRequest,
	getCurrencySymbol,
	getCurrencyCode,
	getDisplayPrices,
};
