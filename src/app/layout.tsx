import { Inter, Lora } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin", "symbols"] });

export const metadata = {
	title: "HarmoniqFengShui - 智慧風水命理分析平台",
	description:
		"專業風水命理分析平台 | 個人運勢解讀 | 情侶合盤分析 | 事業財運指導 | 桃花運提升 | AI智慧八字紫微斗數服務",
	keywords:
		"風水, 命理, 運勢, 八字, 紫微斗數, 桃花運, 財運, 事業運, feng shui, fortune telling",
	authors: [{ name: "HarmoniqFengShui" }],
	creator: "HarmoniqFengShui",
	publisher: "HarmoniqFengShui",

	// Open Graph meta tags for social media sharing
	openGraph: {
		type: "website",
		locale: "zh_TW",
		url: "https://harmoniqfengshui.com",
		siteName: "HarmoniqFengShui",
		title: "HarmoniqFengShui - 智慧風水命理分析平台",
		description:
			"專業風水命理分析平台 | 個人運勢解讀 | 情侶合盤分析 | 事業財運指導 | 桃花運提升 | AI智慧八字紫微斗數服務",
		images: [
			{
				url: "/images/hero/hero-bg.png", // Using hero background for better social media preview
				width: 1200,
				height: 630,
				alt: "HarmoniqFengShui - 風鈴智慧風水命理分析平台",
			},
		],
	},

	// Twitter Card meta tags
	twitter: {
		card: "summary_large_image",
		title: "HarmoniqFengShui - 智慧風水命理分析平台",
		description:
			"專業風水命理分析平台 | 個人運勢解讀 | 情侶合盤分析 | 事業財運指導 | 桃花運提升 | AI智慧八字紫微斗數服務",
		images: ["/images/hero/hero-bg.png"], // Using hero background for consistent branding
		creator: "@HarmoniqFengShui",
		site: "@HarmoniqFengShui",
	},

	// Favicon and app icons
	icons: {
		icon: [
			{ url: "/favicon.ico" },
			{
				url: "/images/logo/logo-black.png",
				sizes: "32x32",
				type: "image/png",
			},
			{
				url: "/images/logo/logo-black.png",
				sizes: "16x16",
				type: "image/png",
			},
		],
		shortcut: "/favicon.ico",
		apple: "/images/logo/logo-black.png",
	},

	// Additional meta tags
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},

	// Verification tags (if you have them)
	verification: {
		// google: "your-google-verification-code",
		// yandex: "your-yandex-verification-code",
		// yahoo: "your-yahoo-verification-code",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="zh-TW">
			<head>
				<Suspense fallback={null}>
					<GoogleAnalytics />
				</Suspense>
			</head>
			<body className={lora.className}>{children}</body>
		</html>
	);
}
