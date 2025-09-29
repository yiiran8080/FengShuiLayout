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

		// Get square meters and quantity from request body
		const body = await request.json();
		const quantity = Number(body.quantity) || 1;
		const squareMeters = Number(body.squareMeters) || quantity;

		// Create Checkout Sessions for China subscription using special price
		const session = await stripe.checkout.sessions.create({
			line_items: [
				{
					price: process.env.PRICE_ID1_CHINA, // Use China-specific price
					quantity,
				},
			],
			mode: "payment",
			allow_promotion_codes: false,
			success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${origin}/price?payment=cancelled`,
			metadata: {
				userId: userInfo.userId,
				quantity: String(quantity),
				squareMeters: String(squareMeters),
				unit: "sqm",
				region: "china",
			},
		});

		console.log("China subscription session.url (SQM)", session.url);return NextResponse.json(genSuccessData(session));
	} catch (err) {
		console.error("China subscription payment error (SQM):", err);
		return NextResponse.json(genErrorData("支付错误: " + err.message));
	}
}
