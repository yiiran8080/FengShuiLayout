import { NextRequest, NextResponse } from "next/server";
import { EnhancedInitialAnalysis } from "@/lib/enhancedInitialAnalysis";

export async function POST(request) {
	try {
		const {
			birthDateTime,
			dominantElement,
			category,
			specificQuestion,
			gender,
		} = await request.json();

		if (!birthDateTime) {
			return NextResponse.json(
				{ error: "Missing required birthday information" },
				{ status: 400 }
			);
		}

		// Generate AI-powered individual analysis
		const birthday = new Date(birthDateTime);
		const bazi = EnhancedInitialAnalysis.calculateBazi(birthday);

		// Call AI analysis on server side
		const individualAI =
			await EnhancedInitialAnalysis.generatePersonalAIAnalysis(
				birthday,
				dominantElement || bazi.yearElement,
				category || "感情",
				specificQuestion ||
					`請詳細分析${gender || "此人"}的八字特性和性格特質`
			);

		return NextResponse.json({
			success: true,
			aiAnalysis: individualAI,
			baziData: bazi,
			timestamp: new Date().toISOString(),
		});
	} catch (error) {
		console.error("Error in individual analysis:", error);
		return NextResponse.json(
			{
				error: "Failed to generate individual analysis",
				details: error.message,
			},
			{ status: 500 }
		);
	}
}
