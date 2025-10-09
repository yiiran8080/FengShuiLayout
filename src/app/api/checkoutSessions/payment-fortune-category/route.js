import { NextResponse } from "next/server";
import { headers } from "next/headers";
import {
	genSuccessData,
	genUnAuthData,
	genErrorData,
} from "../../utils/gen-res-data";
import { stripe } from "@/lib/stripe";
import { getUserInfo } from "@/lib/session";

export async function POST(request) {
	const userInfo = await getUserInfo();
	if (userInfo == null) return NextResponse.json(genUnAuthData());

	try {
		const headersList = await headers();
		const origin = headersList.get("origin");

		// Get request body
		const body = await request.json();
		const {
			concernType,
			locale: requestLocale,
			quantity = 1,
			fromChat,
			specificProblem,
		} = body;

		if (!concernType) {
			return NextResponse.json(genErrorData("Concern type is required"));
		}

		console.log(`🌍 Fortune category payment - Request:`, {
			concernType,
			requestLocale,
			quantity,
			fromChat: !!fromChat,
		});

		// Map concern types to price IDs based on locale
		const priceIdMap = {
			// Wealth/Financial
			financial: {
				"zh-CN": process.env.PRICE_ID5_CNY, // ¥38 wealth
				"zh-TW": process.env.PRICE_ID5_HKD, // HK$38 wealth
			},
			wealth: {
				"zh-CN": process.env.PRICE_ID5_CNY, // ¥38 wealth
				"zh-TW": process.env.PRICE_ID5_HKD, // HK$38 wealth
			},
			// Relationship/Love
			love: {
				"zh-CN": process.env.PRICE_ID7_CNY, // ¥38 relationship
				"zh-TW": process.env.PRICE_ID7_HKD, // HK$38 relationship
			},
			relationship: {
				"zh-CN": process.env.PRICE_ID7_CNY, // ¥38 relationship
				"zh-TW": process.env.PRICE_ID7_HKD, // HK$38 relationship
			},
			// Health
			health: {
				"zh-CN": process.env.PRICE_ID8_CNY, // ¥38 health
				"zh-TW": process.env.PRICE_ID8_HKD, // HK$38 health
			},
			// Career
			career: {
				"zh-CN": process.env.PRICE_ID9_CNY, // ¥38 career
				"zh-TW": process.env.PRICE_ID9_HKD, // HK$38 career
			},
		};

		// Get the appropriate price ID
		const priceIds = priceIdMap[concernType];
		if (!priceIds) {
			return NextResponse.json(
				genErrorData(`Unsupported concern type: ${concernType}`)
			);
		}

		// Determine locale - default to zh-TW if not specified
		const locale = requestLocale || "zh-TW";
		const priceId = priceIds[locale];

		if (!priceId) {
			console.error(
				`No price ID found for concern: ${concernType}, locale: ${locale}`
			);
			return NextResponse.json(
				genErrorData(
					`Price ID not configured for ${concernType} in ${locale}`
				)
			);
		}

		console.log(
			`💰 Using price ID: ${priceId} for concern: ${concernType}, locale: ${locale}`
		);

		// Build success URL with locale and context
		let successUrl = `${origin}/${locale}/success?session_id={CHECKOUT_SESSION_ID}&type=fortune&concern=${concernType}`;

		if (fromChat && specificProblem) {
			successUrl += `&specificProblem=${encodeURIComponent(specificProblem)}&fromChat=true`;
		}

		// Create Stripe checkout session
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card", "wechat_pay", "alipay"],
			payment_method_options: {
				wechat_pay: {
					client: "web",
				},
			},
			line_items: [
				{
					price: priceId,
					quantity: parseInt(quantity),
				},
			],
			mode: "payment",
			allow_promotion_codes: true,
			success_url: successUrl,
			cancel_url: `${origin}/${locale}/price?payment=cancelled`,
			locale: locale === "zh-CN" ? "zh" : "zh-TW", // Stripe locale format
			custom_text: {
				submit: {
					message:
						locale === "zh-CN"
							? "完成付款后，您将收到专属的运势分析报告"
							: "完成付款後，您將收到專屬的運勢分析報告",
				},
			},
			metadata: {
				userId: userInfo.userId || userInfo.id,
				paymentType: "fortune",
				concern: concernType,
				locale: locale,
				quantity: String(quantity),
				...(fromChat &&
					specificProblem && {
						specificProblem: specificProblem,
						fromChat: "true",
					}),
			},
		});

		console.log("Fortune category payment session created:", {
			sessionId: session.id,
			hasUrl: !!session.url,
			concern: concernType,
			locale: locale,
		});

		return NextResponse.json(genSuccessData(session));
	} catch (err) {
		console.error("Fortune category payment error:", err);
		return NextResponse.json(genErrorData("Payment error: " + err.message));
	}
}
