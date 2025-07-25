import mongoose from "mongoose";

const FreeReportActivitySchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        index: true,
    },
    email: {
        type: String,
        required: false,
        index: true,
    },
    sessionId: {
        type: String,
        required: false,
    },
    // Report generation details
    roomType: {
        type: String,
        required: true,
        enum: ["bedroom", "living_room", "dining_room", "kitchen", "bathroom", "study_room", "balcony", "storage_room"],
    },
    direction: {
        type: String,
        required: true,
        enum: ["north", "northEast", "east", "southEast", "south", "southWest", "west", "northWest", "center"],
    },
    userInfo: {
        gender: {
            type: String,
            enum: ["female", "male"],
            required: true,
        },
        birthDateTime: {
            type: Date,
            required: true,
        },
    },
    // File information
    hasUploadedImage: {
        type: Boolean,
        default: false,
    },
    imageFileName: {
        type: String,
        required: false,
    },
    // Analysis results
    analysisResult: {
        type: mongoose.Schema.Types.Mixed,
        required: false,
    },
    // Tracking data
    generatedAt: {
        type: Date,
        default: Date.now,
        index: true,
    },
    ipAddress: {
        type: String,
        required: false,
    },
    userAgent: {
        type: String,
        required: false,
    },
    locale: {
        type: String,
        enum: ["zh-TW", "zh-CN"],
        default: "zh-TW",
    },
    // Analytics data
    timeSpentOnPage: {
        type: Number, // seconds
        required: false,
    },
    referrer: {
        type: String,
        required: false,
    },
    // Success status
    status: {
        type: String,
        enum: ["success", "failed", "partial"],
        default: "success",
    },
    errorMessage: {
        type: String,
        required: false,
    },
});

// Indexes for better query performance
FreeReportActivitySchema.index({ userId: 1, generatedAt: -1 });
FreeReportActivitySchema.index({ generatedAt: -1 });
FreeReportActivitySchema.index({ email: 1, generatedAt: -1 });

export default mongoose.models.FreeReportActivity || mongoose.model("FreeReportActivity", FreeReportActivitySchema);