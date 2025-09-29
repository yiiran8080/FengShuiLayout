import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import {
	getRegionalPriceId,
	getLocaleFromRequest,
} from "@/utils/regionalPricing";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
	try {
		const body = await req.json();
		const {
			concern,
			fromChat,
			specificProblem,
			locale: requestLocale,
		} = body;

		if (!concern) {
			return NextResponse.json(
				{ error: "Concern type is required" },
				{ status: 400 }
			);
		}

		// Detect user's locale to determine pricing
		const headerLocale = getLocaleFromRequest(req);

		// Enhanced locale detection with URL path fallback
		let detectedLocale = requestLocale || headerLocale;

		// If still zh-TW, check if URL indicates zh-CN route from referer or origin
		const referer = req.headers.get("referer") || "";
		const origin = req.headers.get("origin") || "";
		const urlPath = req.url || "";

		if (
			detectedLocale === "zh-TW" &&
			(referer.includes("/zh-CN") ||
				origin.includes("/zh-CN") ||
				urlPath.includes("/zh-CN"))
		) {
			detectedLocale = "zh-CN";
			console.log(
				"🔄 Fortune payment - Overriding locale from URL context: zh-CN"
			);
		}

		const locale = detectedLocale;
		console.log(`🌍 Fortune payment - Detected locale: ${locale}`);
		console.log(
			`🔍 Fortune payment - Request body locale: ${requestLocale}`
		);
		console.log(`🔍 Fortune payment - Headers locale: ${headerLocale}`);
		console.log(`🔍 Fortune payment - Referer URL: ${referer}`);

		// Get the appropriate price ID for fortune based on locale
		const priceId = getRegionalPriceId(locale, "fortune");
		console.log(
			`💰 Fortune payment - Using price ID: ${priceId} for fortune ${locale}`
		);

		// Build success URL with locale and chat context if available
		const baseUrl = process.env.NEXTAUTH_URL;
		let successUrl = `${baseUrl}/${locale}/success?session_id={CHECKOUT_SESSION_ID}&type=fortune&concern=${concern}`;

		if (fromChat && specificProblem) {
			successUrl += `&specificProblem=${encodeURIComponent(specificProblem)}&fromChat=true`;
		}

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card", "wechat_pay", "alipay"],
			payment_method_options: {
				wechat_pay: {
					client: "web",
				},
			},
			line_items: [
				{
					price: priceId, // Use regional price ID instead of hardcoded PRICE_ID5
					quantity: 1,
				},
			],
			mode: "payment",
			success_url: successUrl,
			cancel_url: `${baseUrl}/${locale}/price`,
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
				type: "fortune",
				concern: concern, // financial, love, health, career
				locale: locale,
				...(fromChat &&
					specificProblem && {
						specificProblem: specificProblem,
						fromChat: "true",
					}),
			},
		});

		return NextResponse.json({ sessionId: session.id });
	} catch (error) {
		console.error("Stripe error:", error);
		return NextResponse.json(
			{ error: "Error creating checkout session" },
			{ status: 500 }
		);
	}
}
