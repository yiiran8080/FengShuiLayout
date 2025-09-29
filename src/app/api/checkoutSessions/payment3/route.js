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

		// Get quantity from request body
		const body = await request.json();
		const quantity = Number(body.quantity) || 1;

		console.log("Payment3 API - Environment check:", {
			hasPRICE_ID1: !!process.env.PRICE_ID1,
			PRICE_ID1_value: process.env.PRICE_ID1 ? "SET" : "NOT_SET",
		});

		console.log("About to create Stripe session with:", {
			price: process.env.PRICE_ID3, // Using PRICE_ID3
			quantity,
			origin,
			userId: userInfo.userId,
		});

		// Create Checkout Sessions for $188 Expert Card using PRICE_ID1 (testing)
		const session = await stripe.checkout.sessions.create({
			line_items: [
				{
					price: process.env.PRICE_ID3, // Using PRICE_ID3
					quantity,
				},
			],
			mode: "payment",
			allow_promotion_codes: true,
			success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}&type=expert188`,
			cancel_url: `${origin}/price?payment=cancelled`,
			metadata: {
				userId: userInfo.userId,
				quantity: String(quantity),
				paymentType: "expert188",
			},
		});

		console.log("Expert188 Payment Session Created:", {
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
		console.log("Payment3 API Error:", err.message);

		// Provide more specific error messages
		let errorMessage = "專家版支付錯誤: " + err.message;
		if (err.message.includes("total amount due must add up to at least")) {
			errorMessage = "付款金額設定錯誤，請聯絡客服";
		}

		return NextResponse.json(genErrorData(errorMessage));
	}
}
