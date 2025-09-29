import { NextResponse } from "next/server";
import { headers } from "next/headers";
import {
	genSuccessData,
	genUnAuthData,
	genErrorData,
} from "../../utils/gen-res-data";
import { stripe } from "@/lib/stripe";
import { getUserInfo } from "@/lib/session";
import {
	getRegionalPriceId,
	getLocaleFromRequest,
} from "@/utils/regionalPricing";

export async function POST(request) {
	const userInfo = await getUserInfo();
	if (userInfo == null) return NextResponse.json(genUnAuthData());

	try {
		const headersList = await headers();
		const origin = headersList.get("origin");

		// Get quantity and locale from request body
		const body = await request.json();
		const quantity = Number(body.quantity) || 1;
		const requestLocale = body.locale;

		// Detect user's locale to determine pricing (use request body locale if provided)
		const locale = requestLocale || getLocaleFromRequest(request);
		console.log(`🌍 Detected locale: ${locale}`);
		console.log(`🔍 Payment4 - Request body locale: ${requestLocale}`);
		console.log(
			`🔍 Payment4 - Headers locale: ${getLocaleFromRequest(request)}`
		);

		// Get the appropriate price ID for life based on locale
		const priceId = getRegionalPriceId(locale, "life");
		console.log(`💰 Using price ID: ${priceId} for life ${locale}`);

		console.log("Payment4 API - Regional pricing:", {
			locale: locale,
			priceId: priceId,
			hasPrice: !!priceId,
		});

		console.log("About to create Stripe session with regional pricing:", {
			price: priceId,
			quantity,
			origin,
			userId: userInfo.userId || userInfo.id,
			locale: locale,
		});

		// Create Checkout Sessions for $88 Expert Card using regional price ID
		const session = await stripe.checkout.sessions.create({
			line_items: [
				{
					price: priceId, // Use regional price ID instead of hardcoded PRICE_ID4
					quantity,
				},
			],
			mode: "payment",
			allow_promotion_codes: true,
			success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}&type=expert88`,
			cancel_url: `${origin}/price?payment=cancelled`,
			metadata: {
				userId: userInfo.userId || userInfo.id,
				quantity: String(quantity),
				paymentType: "expert88",
				locale: locale,
			},
		});

		console.log("Expert88 Payment Session Created:", {
			hasUrl: !!session.url,
			url: session.url,
			id: session.id,
			payment_status: session.payment_status,
			sessionKeys: Object.keys(session),
		});

		const responseData = genSuccessData(session);
		console.log("Response structure:", {
			hasResponseData: !!responseData,
			hasDataProperty: !!responseData.data,
			hasUrlInData: !!responseData.data?.url,
			responseKeys: Object.keys(responseData),
			dataKeys: responseData.data
				? Object.keys(responseData.data)
				: "no data property",
		});

		return NextResponse.json(responseData);
	} catch (err) {
		console.log("Payment4 API Error:", err.message);

		// Provide more specific error messages
		let errorMessage = "專家版支付錯誤: " + err.message;
		if (err.message.includes("total amount due must add up to at least")) {
			errorMessage = "付款金額設定錯誤，請聯絡客服";
		}

		return NextResponse.json(genErrorData(errorMessage));
	}
}
