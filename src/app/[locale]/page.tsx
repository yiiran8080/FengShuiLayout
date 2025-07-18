import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Share from "@/components/home/Share";
import BeforeAfter from "@/components/home/BeforeAfter";
import Comments from "@/components/home/Comments";
import Tips from "@/components/home/Tips";
import FAQ from "@/components/home/FAQ";
import Message from "@/components/home/Message";
import Footer from "@/components/home/Footer";
import Desire from "@/components/home/Desire";
import Theory from "@/components/free/theory"; // Changed import

import { get } from "@/lib/ajax";

// Add metadata for homepage
export const metadata = {
	title: "HarmoniQ 風水分析 - 打造和諧家居布局",
	description:
		"🏠✨ 專業風水分析服務，幫您優化家居布局，提升生活品質。現在還有特別優惠，立即體驗！",

	// Open Graph
	openGraph: {
		title: "HarmoniQ 風水分析 - 打造和諧家居布局",
		description:
			"🏠✨ 發現了一個超棒的風水分析網站！HarmoniQ幫我優化家居布局，讓生活更和諧幸福！現在還有特別優惠，快來試試看吧！我在HarmoniQ風水測算領取專屬家居風水報告，分享或發佈貼文到Facebook領取優惠碼即可獲得市場價一折限時優惠，立即分享給親朋好友一起享受專屬折扣價格🙌🏻",
		url: "https://www.harmoniqfengshui.com/zh-TW",
		siteName: "HarmoniQ 風水分析",
		images: [
			{
				url: "https://www.harmoniqfengshui.com/images/hero/Facebookpost.jpg", // 使用 Facebook 專用圖片
				width: 1200,
				height: 630,
				alt: "HarmoniQ 風水分析 - 專業家居布局優化",
			},
		],
		locale: "zh_TW",
		type: "website",
		appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || "687233617481228",
	},

	// Twitter Card
	twitter: {
		card: "summary_large_image",
		title: "HarmoniQ 風水分析 - 打造和諧家居布局",
		description:
			"🏠✨ 發現了一個超棒的風水分析網站！HarmoniQ幫我優化家居布局，讓生活更和諧幸福！現在還有特別優惠，快來試試看吧！我在HarmoniQ風水測算領取專屬家居風水報告，分享或發佈貼文到Facebook領取優惠碼即可獲得市場價一折限時優惠，立即分享給親朋好友一起享受專屬折扣價格🙌🏻",
		images: [
			"https://www.harmoniqfengshui.com/images/hero/Facebookpost.jpg",
		],
	},
};

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<section id="hero">
					<Hero />
				</section>
				<Features />
				<Desire />
				<section id="share">
					<Share />
				</section>
				<BeforeAfter />
				<section id="theory">
					<Theory bgColor="bg-white" />{" "}
					{/* Use Theory with white background */}
				</section>
				{/* Hide Tips component on mobile devices */}
				<div className="hidden md:block">
					<Tips />
				</div>
				<Comments />
				{/* <Message /> */}
				<section id="faq">
					<FAQ />
				</section>
			</main>
			<Footer />
		</>
	);
}
