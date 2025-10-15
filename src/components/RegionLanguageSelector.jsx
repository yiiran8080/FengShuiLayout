"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";
import { useRouter } from "@/i18n/navigation";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRegionDetectionWithRedirect } from "@/hooks/useRegionDetectionEnhanced";

export default function RegionLanguageSelector({
	className,
	navTextColor = "#fff",
	compact = false,
}) {
	const pathname = usePathname();
	const router = useRouter();
	const {
		region,
		changeRegion,
		isLoading,
		currentLocale: detectedLocale,
	} = useRegionDetectionWithRedirect({
		autoRedirect: true,
		skipFirstRedirect: true,
	});
	const [mounted, setMounted] = useState(false);

	// Prevent hydration mismatch
	useEffect(() => {
		setMounted(true);
	}, []);

	// Get current locale from pathname
	const currentLocale = pathname.startsWith("/zh-CN") ? "zh-CN" : "zh-TW";

	// Region configurations with language mapping
	const regions = [
		{
			key: "china",
			name: "中国大陆",
			flag: "🇨🇳",
			locale: "zh-CN",
			currency: "CNY",
			symbol: "¥",
			displayText: "🇨🇳 简体中文",
		},
		{
			key: "hongkong",
			name: "香港",
			flag: "🇭🇰",
			locale: "zh-TW",
			currency: "HKD",
			symbol: "HK$",
			displayText: "🇭🇰 繁體中文",
		},
	];

	// Get current region config
	const currentRegionConfig =
		regions.find((r) => r.key === region) || regions[1];

	// Get display text based on current state
	const getDisplayText = () => {
		if (!mounted) return compact ? "…" : "🌍 Loading...";
		if (isLoading) return compact ? "…" : "🌍 Detecting...";

		// Find region that matches current locale
		const matchingRegion = regions.find((r) => r.locale === currentLocale);

		if (compact) {
			// Return simplified Chinese character based on locale
			return currentLocale === "zh-CN" ? "簡" : "繁";
		}

		return matchingRegion
			? matchingRegion.displayText
			: currentRegionConfig.displayText;
	};

	// Handle region change - this will change both language and pricing
	const handleRegionChange = (selectedRegion) => {
		const regionConfig = regions.find((r) => r.key === selectedRegion);
		if (!regionConfig) return;

		// Update region (for pricing)
		changeRegion(selectedRegion);

		// Update language (for locale) by navigating to new locale
		const newPathname = `/${pathname.split("/").slice(2).join("/")}`;

		// Use Next.js navigation to change locale
		router.push(newPathname, { locale: regionConfig.locale });
	};

	if (!mounted) {
		return (
			<div
				className={cn(
					"cursor-pointer flex items-center space-x-1 opacity-50",
					className
				)}
			>
				<span style={{ color: navTextColor }}>
					{compact ? "…" : "🌍 Loading..."}
				</span>
			</div>
		);
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				asChild
				className={cn(
					"cursor-pointer flex items-center space-x-1 hover:opacity-80",
					className
				)}
			>
				<div style={{ color: navTextColor }}>
					{getDisplayText()}
					{!compact && (
						<ChevronDownIcon className="w-4 h-4 ml-1 inline" />
					)}
				</div>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="bg-white rounded-lg shadow-lg p-1 min-w-[160px]">
				{regions.map((regionConfig) => (
					<DropdownMenuItem
						key={regionConfig.key}
						className="focus:bg-inherit"
					>
						<button
							onClick={() => handleRegionChange(regionConfig.key)}
							className={cn(
								"w-full text-left px-4 py-2 text-sm hover:text-primary rounded text-foreground flex items-center justify-between",
								region === regionConfig.key &&
									currentLocale === regionConfig.locale
									? "bg-green-50 text-green-600 font-medium"
									: ""
							)}
						>
							<span>{regionConfig.displayText}</span>
							<span className="text-xs text-gray-500 ml-2">
								{regionConfig.symbol}
							</span>
						</button>
					</DropdownMenuItem>
				))}

				{/* Debug info in development */}
				{process.env.NODE_ENV === "development" && (
					<>
						<div className="border-t border-gray-100 my-1"></div>
						<div className="px-4 py-2 text-xs text-gray-400">
							<div>Region: {region}</div>
							<div>Locale: {currentLocale}</div>
						</div>
					</>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
