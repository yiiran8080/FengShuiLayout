/**
 * Region Detection Utility
 * Detects user's region (China, Hong Kong, Taiwan) for currency and locale selection
 */

/**
 * Detect user's region based on IP geolocation
 * @returns {Promise<string>} - 'china', 'hongkong', or 'taiwan' (default)
 */
export const detectUserRegion = async () => {
	try {
		console.log("🌍 Detecting user region...");

		// Use ipapi.co for IP-based geolocation (free tier: 1000 requests/day)
		const response = await fetch("https://ipapi.co/json/", {
			timeout: 5000, // 5 second timeout
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		console.log("🌍 Geolocation data:", data);

		const countryCode = data.country_code;

		// Map country codes to our regions
		if (countryCode === "CN") {
			console.log("🇨🇳 Detected: China");
			return "china";
		} else if (countryCode === "HK") {
			console.log("🇭🇰 Detected: Hong Kong");
			return "hongkong";
		} else {
			console.log(
				"� Detected: Other region - using Hong Kong as default"
			);
			return "hongkong";
		}
	} catch (error) {
		console.warn("⚠️ Region detection failed:", error.message);
		console.log("🇹🇼 Falling back to Taiwan as default region");
		return "taiwan"; // Default fallback
	}
};

/**
 * Detect region based on browser language as fallback
 * @returns {string} - 'china', 'hongkong', or 'taiwan'
 */
export const detectRegionFromLanguage = () => {
	try {
		const languages = navigator.languages || [
			navigator.language || navigator.userLanguage,
		];

		for (let lang of languages) {
			const langLower = lang.toLowerCase();

			if (langLower.includes("zh-cn") || langLower.includes("zh-hans")) {
				console.log("🈸 Language detected: Simplified Chinese (China)");
				return "china";
			}
			if (langLower.includes("zh-hk")) {
				console.log("🈳 Language detected: Hong Kong Chinese");
				return "hongkong";
			}
		}

		console.log(
			"🌐 No specific Chinese locale detected, defaulting to Hong Kong"
		);
		return "hongkong";
	} catch (error) {
		console.warn("⚠️ Language detection failed:", error.message);
		return "taiwan";
	}
};

/**
 * Get user's region with multiple fallback methods
 * Priority: IP geolocation > Browser language > Default (Taiwan)
 * @returns {Promise<string>} - 'china', 'hongkong', or 'taiwan'
 */
export const getUserRegion = async () => {
	console.log("🚀 Starting region detection...");

	// Check if user has manually selected a region (stored in localStorage)
	const storedRegion =
		typeof window !== "undefined"
			? localStorage.getItem("userRegion")
			: null;
	if (storedRegion && ["china", "hongkong"].includes(storedRegion)) {
		console.log("💾 Using stored region preference:", storedRegion);
		return storedRegion;
	}

	// Try IP-based detection first
	const ipRegion = await detectUserRegion();

	// If IP detection fails, try language detection
	if (ipRegion === "hongkong") {
		const langRegion = detectRegionFromLanguage();
		console.log("📍 Final region selection:", langRegion);
		return langRegion;
	}

	console.log("📍 Final region selection:", ipRegion);
	return ipRegion;
};

/**
 * Save user's region preference to localStorage
 * @param {string} region - 'china', 'hongkong', or 'taiwan'
 */
export const saveRegionPreference = (region) => {
	if (
		typeof window !== "undefined" &&
		["china", "hongkong"].includes(region)
	) {
		localStorage.setItem("userRegion", region);
		console.log("💾 Saved region preference:", region);
	}
};

/**
 * Clear stored region preference (for testing or reset)
 */
export const clearRegionPreference = () => {
	if (typeof window !== "undefined") {
		localStorage.removeItem("userRegion");
		console.log("🗑️ Cleared region preference");
	}
};
