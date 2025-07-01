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

		// Get square feet and quantity from request body
		const body = await request.json();
		const quantity = Number(body.quantity) || 1;
		const squareFeet = Number(body.squareFeet) || quantity;

		// Create Checkout Sessions for premium using PRICE_ID2
		const session = await stripe.checkout.sessions.create({
			line_items: [
				{
					price: process.env.PRICE_ID2, // Use PRICE_ID2 for premium
					quantity,
				},
			],
			mode: "payment", // One-time payment mode
			allow_promotion_codes: false,
			success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${origin}/price?payment=cancelled`,
			metadata: {
				userId: userInfo.userId,
				quantity: String(quantity),
				squareFeet: String(squareFeet),
			},
		});

		console.log("Premium payment session.url", session.url);
		console.log("Square feet:", squareFeet, "Quantity:", quantity);

		return NextResponse.json(genSuccessData(session));
	} catch (err) {
		console.error("Premium payment error:", err);
		return NextResponse.json(genErrorData("支付錯誤: " + err.message));
	}
}
