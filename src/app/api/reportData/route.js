import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import { genSuccessData, genErrorData } from "../utils/gen-res-data";
import mongoose from "mongoose";

// Create a new schema for report data that doesn't depend on user authentication
const ReportDataSchema = new mongoose.Schema(
	{
		sessionId: {
			type: String,
			required: true,
			unique: true,
			index: true,
		},
		birthDateTime: {
			type: String,
			required: true,
		},
		gender: {
			type: String,
			required: true,
		},
		language: {
			type: String,
			default: "zh-TW",
		},

		// Basic Report Data (from Report.jsx)
		basicReportData: {
			mingLiData: mongoose.Schema.Types.Mixed,
			liuNianData: mongoose.Schema.Types.Mixed,
			jiajuProData: mongoose.Schema.Types.Mixed,
		},

		// Four Fortune Data (from FourFortuneAnalysis.jsx)
		fourFortuneData: {
			healthFortuneData: mongoose.Schema.Types.Mixed,
			careerFortuneData: mongoose.Schema.Types.Mixed,
			wealthFortuneData: mongoose.Schema.Types.Mixed,
			relationshipFortuneData: mongoose.Schema.Types.Mixed,
		},

		// AI Generated Content
		aiGeneratedContent: {
			sessionId: String,
			generatedAt: String,
			generationStatus: String, // 'generating', 'partial', 'complete'

			// Four Fortune AI Data
			fourFortuneAI: {
				healthFortuneData: mongoose.Schema.Types.Mixed,
				careerFortuneData: mongoose.Schema.Types.Mixed,
				wealthFortuneData: mongoose.Schema.Types.Mixed,
				relationshipFortuneData: mongoose.Schema.Types.Mixed,
			},

			// Comprehensive AI Analysis
			comprehensiveAI: {
				lifeAdvice: mongoose.Schema.Types.Mixed,
			},

			// Wuxing Analysis
			wuxingAnalysis: mongoose.Schema.Types.Mixed,

			// Life Stage Analysis (年柱, 月柱, 日柱, 時柱)
			lifeStageAnalysis: {
				年柱: mongoose.Schema.Types.Mixed,
				月柱: mongoose.Schema.Types.Mixed,
				日柱: mongoose.Schema.Types.Mixed,
				時柱: mongoose.Schema.Types.Mixed,
			},
		},

		// Report Status
		reportStatus: {
			type: String,
			enum: ["generating", "partial", "complete"],
			default: "generating",
		},

		// Timestamps
		createdAt: {
			type: Date,
			default: Date.now,
		},
		updatedAt: {
			type: Date,
			default: Date.now,
		},
	},
	{
		timestamps: true,
	}
);

// Create or get the model
const ReportData =
	mongoose.models.ReportData ||
	mongoose.model("ReportData", ReportDataSchema);

// GET - Retrieve report data by sessionId
export async function GET(request) {
	try {
		const { searchParams } = new URL(request.url);
		const sessionId = searchParams.get("sessionId");

		if (!sessionId) {
			return NextResponse.json(genErrorData("SessionId is required"));
		}

		await dbConnect();
		const reportData = await ReportData.findOne({ sessionId }).select(
			"-__v"
		);

		return NextResponse.json(genSuccessData(reportData));
	} catch (error) {
		console.error("Error fetching report data:", error);
		return NextResponse.json(genErrorData("Error fetching report data"));
	}
}

// POST - Create new report data
export async function POST(request) {
	try {
		const body = await request.json();
		const { sessionId, birthDateTime, gender } = body;

		if (!sessionId || !birthDateTime || !gender) {
			return NextResponse.json(
				genErrorData(
					"SessionId, birthDateTime, and gender are required"
				)
			);
		}

		await dbConnect();

		// Check if report already exists
		const existingReport = await ReportData.findOne({ sessionId });
		if (existingReport) {
			return NextResponse.json(
				genErrorData("Report with this sessionId already exists")
			);
		}

		const reportData = await ReportData.create({
			sessionId,
			birthDateTime,
			gender,
			language: body.language || "zh-TW",
			basicReportData: body.basicReportData || {},
			fourFortuneData: body.fourFortuneData || {},
			aiGeneratedContent: body.aiGeneratedContent || {},
			reportStatus: body.reportStatus || "generating",
		});

		console.log(
			"✅ Report data created successfully for session:",
			sessionId
		);
		return NextResponse.json(genSuccessData(reportData));
	} catch (error) {
		console.error("Error creating report data:", error);
		return NextResponse.json(genErrorData("Error creating report data"));
	}
}

// PATCH - Update existing report data
export async function PATCH(request) {
	try {
		const body = await request.json();
		const { sessionId } = body;

		if (!sessionId) {
			return NextResponse.json(genErrorData("SessionId is required"));
		}

		await dbConnect();

		let reportData = await ReportData.findOne({ sessionId });
		if (!reportData) {
			// Create new report if it doesn't exist
			reportData = await ReportData.create({
				sessionId,
				birthDateTime: body.birthDateTime || new Date().toISOString(),
				gender: body.gender || "male",
				language: body.language || "zh-TW",
			});
			console.log("✅ New report data created for session:", sessionId);
		}

		// Update fields
		if (body.basicReportData) {
			reportData.basicReportData = {
				...reportData.basicReportData.toObject(),
				...body.basicReportData,
			};
		}
		if (body.fourFortuneData) {
			reportData.fourFortuneData = {
				...reportData.fourFortuneData.toObject(),
				...body.fourFortuneData,
			};
		}
		if (body.aiGeneratedContent) {
			reportData.aiGeneratedContent = {
				...reportData.aiGeneratedContent.toObject(),
				...body.aiGeneratedContent,
			};
		}
		if (body.reportStatus) {
			reportData.reportStatus = body.reportStatus;
		}

		reportData.updatedAt = new Date();
		await reportData.save();

		console.log(
			"✅ Report data updated successfully for session:",
			sessionId
		);
		return NextResponse.json(genSuccessData(reportData));
	} catch (error) {
		console.error("Error updating report data:", error);
		return NextResponse.json(genErrorData("Error updating report data"));
	}
}

// DELETE - Delete report data by sessionId
export async function DELETE(request) {
	try {
		const { searchParams } = new URL(request.url);
		const sessionId = searchParams.get("sessionId");

		if (!sessionId) {
			return NextResponse.json(genErrorData("SessionId is required"));
		}

		await dbConnect();
		await ReportData.deleteOne({ sessionId });

		console.log(
			"✅ Report data deleted successfully for session:",
			sessionId
		);
		return NextResponse.json(genSuccessData());
	} catch (error) {
		console.error("Error deleting report data:", error);
		return NextResponse.json(genErrorData("Error deleting report data"));
	}
}
