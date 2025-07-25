import { NextResponse } from "next/server";
import { auth } from "@/auth"; // Use the new auth from auth.ts
import connectDB from "@/lib/mongoose";
import User from "@/models/User";
import FreeReportActivity from "@/models/FreeReportActivity";

export async function POST(request) {
	try {
		// Get session using the new auth method
		const session = await auth();
		const body = await request.json();

		const {
			roomType,
			direction,
			userInfo,
			hasUploadedImage,
			imageFileName,
			analysisResult,
			locale,
			timeSpentOnPage,
			referrer,
			sessionId,
		} = body;

		// Get user identification
		const userId =
			session?.user?.email || session?.user?.userId || "anonymous";
		const email = session?.user?.email || null;

		console.log("📊 Tracking request received:", {
			userId,
			roomType,
			direction,
		});

		if (!userId || userId === "anonymous") {
			console.log("❌ User not authenticated");
			return NextResponse.json(
				{ error: "User must be authenticated to track free reports" },
				{ status: 401 }
			);
		}

		// Get request info
		const ipAddress =
			request.headers.get("x-forwarded-for") ||
			request.headers.get("x-real-ip") ||
			"unknown";
		const userAgent = request.headers.get("user-agent") || "unknown";

		await connectDB();
		console.log("📁 Database connected");

		// Create free report activity record
		const freeReportActivity = new FreeReportActivity({
			userId,
			email,
			sessionId,
			roomType,
			direction,
			userInfo: {
				gender: userInfo?.gender || "female",
				birthDateTime: userInfo?.birthDateTime
					? new Date(userInfo.birthDateTime)
					: new Date(),
			},
			hasUploadedImage: !!hasUploadedImage,
			imageFileName,
			analysisResult,
			generatedAt: new Date(),
			ipAddress,
			userAgent,
			locale: locale || "zh-TW",
			timeSpentOnPage,
			referrer,
			status: "success",
		});

		await freeReportActivity.save();
		console.log("✅ Activity saved:", freeReportActivity._id);

		// Update user statistics
		let user = await User.findOne({ userId });
		console.log("👤 Found user:", !!user);

		if (!user) {
			// Create new user if doesn't exist
			user = new User({
				userId,
				email,
				gender: userInfo?.gender || "female",
				birthDateTime: userInfo?.birthDateTime
					? new Date(userInfo.birthDateTime)
					: new Date(1996, 2, 12, 22),
				freeReportStats: {
					totalGenerated: 1,
					firstGeneratedAt: new Date(),
					lastGeneratedAt: new Date(),
					favoriteRoomType: roomType,
					favoriteDirection: direction,
				},
			});
			console.log("🆕 Creating new user");
		} else {
			// Update existing user stats
			if (!user.freeReportStats) {
				user.freeReportStats = {};
			}

			const currentTotal = user.freeReportStats.totalGenerated || 0;
			user.freeReportStats.totalGenerated = currentTotal + 1;
			user.freeReportStats.lastGeneratedAt = new Date();

			if (!user.freeReportStats.firstGeneratedAt) {
				user.freeReportStats.firstGeneratedAt = new Date();
			}

			// Update favorite room type and direction based on most recent usage
			user.freeReportStats.favoriteRoomType = roomType;
			user.freeReportStats.favoriteDirection = direction;
			user.updatedAt = new Date();

			console.log(
				"📈 Updating user stats. New total:",
				user.freeReportStats.totalGenerated
			);
		}

		await user.save();
		console.log("💾 User saved successfully");

		return NextResponse.json({
			success: true,
			activityId: freeReportActivity._id,
			totalGenerated: user.freeReportStats.totalGenerated,
			message: "Free report generation tracked successfully",
		});
	} catch (error) {
		console.error("❌ Error tracking free report generation:", error);

		// Log more details about the error
		console.error("Error stack:", error.stack);
		console.error("Error name:", error.name);
		console.error("Error message:", error.message);

		return NextResponse.json(
			{
				error: "Failed to track free report generation",
				details: error.message,
				type: error.name,
			},
			{ status: 500 }
		);
	}
}

export async function GET(request) {
	try {
		const session = await auth();
		const { searchParams } = new URL(request.url);
		const userId = searchParams.get("userId") || session?.user?.email;

		if (!userId) {
			return NextResponse.json(
				{ error: "User ID required" },
				{ status: 400 }
			);
		}

		await connectDB();

		// Get user stats
		const user = await User.findOne({ userId });

		// Get recent activities
		const recentActivities = await FreeReportActivity.find({ userId })
			.sort({ generatedAt: -1 })
			.limit(10)
			.select(
				"roomType direction generatedAt status locale hasUploadedImage"
			);

		return NextResponse.json({
			userStats: user?.freeReportStats || { totalGenerated: 0 },
			recentActivities,
			totalActivities: recentActivities.length,
		});
	} catch (error) {
		console.error("Error getting free report stats:", error);
		return NextResponse.json(
			{ error: "Failed to get free report statistics" },
			{ status: 500 }
		);
	}
}
