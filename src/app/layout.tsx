import { Inter, Lora } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin", "symbols"] });

export const metadata = {
	title: "HarmoniqFengShui - 風水命理分析",
	description: "專業風水命理分析平台",
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
