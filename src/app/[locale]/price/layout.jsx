import React from "react";

export const metadata = {
	title: "HarmoniQ 風水分析 - 打造和諧家居布局",
	description:
		"🏠✨ 專業風水分析服務，幫您優化家居布局，提升生活品質。現在還有特別優惠，立即體驗！",

	// Open Graph
	openGraph: {
		title: "HarmoniQ 風水分析 - 打造和諧家居布局",
		description:
			"🏠✨ 發現了一個超棒的風水分析網站！HarmoniQ幫我優化家居布局，讓生活更和諧幸福！現在還有特別優惠，快來試試看吧！我在HarmoniQ風水測算領取專屬家居風水報告，分享或發佈貼文到Facebook領取優惠碼即可獲得市場價一折限時優惠，立即分享給親朋好友一起享受專屬折扣價格🙌🏻",
		url: "https://www.harmoniqfengshui.com/zh-TW/price", // 修正 URL
		siteName: "HarmoniQ 風水分析",
		images: [
			{
				url: "https://www.harmoniqfengshui.com/images/before.png",
				width: 1200,
				height: 630,
				alt: "HarmoniQ 風水分析 - 專業家居布局優化",
			},
		],
		locale: "zh_TW",
		type: "website",
	},

	// Twitter Card
	twitter: {
		card: "summary_large_image",
		title: "HarmoniQ 風水分析 - 打造和諧家居布局",
		description:
			"🏠✨ 發現了一個超棒的風水分析網站！HarmoniQ幫我優化家居布局，讓生活更和諧幸福！現在還有特別優惠，快來試試看吧！我在HarmoniQ風水測算領取專屬家居風水報告，分享或發佈貼文到Facebook領取優惠碼即可獲得市場價一折限時優惠，立即分享給親朋好友一起享受專屬折扣價格🙌🏻",
		images: ["https://www.harmoniqfengshui.com/images/before.png"],
	},

	// Additional meta tags for better social sharing
	other: {
		"fb:app_id": process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || "",
	},
};

export default function PriceLayout({ children }) {
	return <>{children}</>;
}
