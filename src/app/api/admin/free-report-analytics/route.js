import { NextResponse } from "next/server";
import connectDB from "@/lib/mongoose";
import FreeReportActivity from "@/models/FreeReportActivity";
import User from "@/models/User";

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const startDate = searchParams.get('startDate');
        const endDate = searchParams.get('endDate');
        const period = searchParams.get('period') || '30'; // days

        await connectDB();

        // Date range
        const end = endDate ? new Date(endDate) : new Date();
        const start = startDate ? new Date(startDate) : new Date(Date.now() - (parseInt(period) * 24 * 60 * 60 * 1000));

        // Overall statistics
        const overallStats = await FreeReportActivity.aggregate([
            {
                $match: {
                    generatedAt: { $gte: start, $lte: end }
                }
            },
            {
                $group: {
                    _id: null,
                    totalReports: { $sum: 1 },
                    successfulReports: {
                        $sum: { $cond: [{ $eq: ["$status", "success"] }, 1, 0] }
                    },
                    uniqueUsers: { $addToSet: "$userId" },
                    withImages: {
                        $sum: { $cond: ["$hasUploadedImage", 1, 0] }
                    },
                    averageTimeSpent: { $avg: "$timeSpentOnPage" }
                }
            }
        ]);

        // Daily breakdown
        const dailyStats = await FreeReportActivity.aggregate([
            {
                $match: {
                    generatedAt: { $gte: start, $lte: end }
                }
            },
            {
                $group: {
                    _id: {
                        $dateToString: { format: "%Y-%m-%d", date: "$generatedAt" }
                    },
                    count: { $sum: 1 },
                    uniqueUsers: { $addToSet: "$userId" }
                }
            },
            { $sort: { "_id": 1 } }
        ]);

        // Room type popularity
        const roomTypeStats = await FreeReportActivity.aggregate([
            {
                $match: {
                    generatedAt: { $gte: start, $lte: end }
                }
            },
            {
                $group: {
                    _id: "$roomType",
                    count: { $sum: 1 },
                    percentage: { $sum: 1 }
                }
            },
            { $sort: { count: -1 } }
        ]);

        // Direction popularity
        const directionStats = await FreeReportActivity.aggregate([
            {
                $match: {
                    generatedAt: { $gte: start, $lte: end }
                }
            },
            {
                $group: {
                    _id: "$direction",
                    count: { $sum: 1 }
                }
            },
            { $sort: { count: -1 } }
        ]);

        // User engagement
        const userEngagement = await FreeReportActivity.aggregate([
            {
                $match: {
                    generatedAt: { $gte: start, $lte: end }
                }
            },
            {
                $group: {
                    _id: "$userId",
                    reportCount: { $sum: 1 },
                    lastActivity: { $max: "$generatedAt" },
                    averageTimeSpent: { $avg: "$timeSpentOnPage" }
                }
            },
            {
                $group: {
                    _id: null,
                    singleUseUsers: {
                        $sum: { $cond: [{ $eq: ["$reportCount", 1] }, 1, 0] }
                    },
                    multiUseUsers: {
                        $sum: { $cond: [{ $gt: ["$reportCount", 1] }, 1, 0] }
                    },
                    averageReportsPerUser: { $avg: "$reportCount" },
                    totalUsers: { $sum: 1 }
                }
            }
        ]);

        // Recent activity
        const recentActivity = await FreeReportActivity
            .find({ generatedAt: { $gte: start, $lte: end } })
            .sort({ generatedAt: -1 })
            .limit(20)
            .select('userId email roomType direction generatedAt status locale hasUploadedImage timeSpentOnPage');

        return NextResponse.json({
            period: { start, end, days: parseInt(period) },
            overallStats: overallStats[0] || {},
            dailyStats,
            roomTypeStats,
            directionStats,
            userEngagement: userEngagement[0] || {},
            recentActivity,
            uniqueUsersCount: overallStats[0]?.uniqueUsers?.length || 0
        });

    } catch (error) {
        console.error("Error getting free report analytics:", error);
        return NextResponse.json(
            { error: "Failed to get analytics data" },
            { status: 500 }
        );
    }
}