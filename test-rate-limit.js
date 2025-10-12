/**
 * Test script for Daily Analysis Rate Limiting
 * This script tests the rate limiting functionality without making actual API calls
 */

async function testRateLimit() {
	console.log("🧪 Testing Daily Analysis Rate Limit System...\n");

	try {
		// Dynamic imports to handle ES modules
		const { default: connectMongo } = await import("./src/lib/mongoose.js");
		const { default: DailyAnalysisRateLimit } = await import("./src/lib/dailyAnalysisRateLimit.js");

		// Connect to MongoDB
		await connectMongo();
		console.log("✅ Connected to MongoDB\n");

		const testUserEmail = "test@example.com";
		const testUserId = "test-user-123";
		const testSessionId = "test-session-123";

		// Test 1: Check initial state
		console.log("📊 Test 1: Check initial daily stats");
		let stats = await DailyAnalysisRateLimit.getUserStats(testUserEmail, testUserId);
		console.log("Initial stats:", stats);
		console.log(`Can analyze: ${stats.canAnalyze}, Count: ${stats.analysisCount}, Remaining: ${stats.remaining}\n`);

		// Test 2: Check if user can analyze
		console.log("🔍 Test 2: Check if user can perform analysis");
		let canAnalyze = await DailyAnalysisRateLimit.checkUserLimit(testUserEmail, testUserId);
		console.log("Rate limit check:", canAnalyze);
		console.log(`Can analyze: ${canAnalyze.canAnalyze}, Current: ${canAnalyze.currentCount}, Remaining: ${canAnalyze.remaining}\n`);

		// Test 3: Record several analyses (simulate user activity)
		console.log("📝 Test 3: Recording multiple analyses to test limit");
		
		const analysesToRecord = [
			{ type: "individual", topic: "感情", message: "想知道我的感情運勢" },
			{ type: "individual", topic: "財運", message: "今年財運如何" },
			{ type: "couple", topic: "感情", message: "我和伴侶是否合適" },
			{ type: "individual", topic: "工作", message: "工作運勢分析" },
			{ type: "individual", topic: "健康", message: "健康方面的建議" },
		];

		for (let i = 0; i < analysesToRecord.length; i++) {
			const analysis = analysesToRecord[i];
			console.log(`Recording analysis ${i + 1}: ${analysis.type} - ${analysis.topic}`);
			
			const result = await DailyAnalysisRateLimit.recordAnalysis(
				testUserEmail,
				testUserId,
				testSessionId,
				analysis.type,
				analysis.topic,
				analysis.message
			);
			
			console.log(`✅ Recorded: ${result.currentCount}/${result.limit}, Remaining: ${result.remaining}`);
		}

		console.log("\n");

		// Test 4: Check stats after recording
		console.log("📊 Test 4: Check stats after recording analyses");
		stats = await DailyAnalysisRateLimit.getUserStats(testUserEmail, testUserId);
		console.log("Updated stats:", {
			date: stats.date,
			count: stats.analysisCount,
			canAnalyze: stats.canAnalyze,
			remaining: stats.remaining,
			totalAnalyses: stats.analyses.length
		});

		// Test 5: Test near-limit behavior
		console.log("\n🚨 Test 5: Testing near-limit behavior");
		
		// Record analyses until we're near the limit
		let currentCount = stats.analysisCount;
		while (currentCount < 8) { // Leave 2 remaining to test warning
			await DailyAnalysisRateLimit.recordAnalysis(
				testUserEmail,
				testUserId,
				testSessionId,
				"individual",
				"其他",
				`Test analysis ${currentCount + 1}`
			);
			currentCount++;
		}

		// Check warning message
		stats = await DailyAnalysisRateLimit.getUserStats(testUserEmail, testUserId);
		const warningMessage = DailyAnalysisRateLimit.generateWarningMessage(stats.remaining);
		console.log(`Remaining: ${stats.remaining}`);
		console.log(`Warning message: ${warningMessage || "No warning"}`);

		// Test 6: Test limit exceeded
		console.log("\n🚫 Test 6: Testing limit exceeded behavior");
		
		// Fill up to the limit
		while (stats.remaining > 0) {
			await DailyAnalysisRateLimit.recordAnalysis(
				testUserEmail,
				testUserId,
				testSessionId,
				"individual",
				"其他",
				`Limit test analysis`
			);
			stats = await DailyAnalysisRateLimit.getUserStats(testUserEmail, testUserId);
		}

		// Try to record one more (should be blocked)
		const limitCheck = await DailyAnalysisRateLimit.checkUserLimit(testUserEmail, testUserId);
		console.log(`At limit - Can analyze: ${limitCheck.canAnalyze}`);
		
		if (!limitCheck.canAnalyze) {
			const limitMessage = DailyAnalysisRateLimit.generateLimitExceededMessage(
				limitCheck.currentCount,
				limitCheck.limit
			);
			console.log("\n📋 Limit exceeded message:");
			console.log(limitMessage);
		}

		console.log("\n✅ All tests completed successfully!");
		
	} catch (error) {
		console.error("❌ Test failed:", error);
	}

	process.exit(0);
}

// Run the test
testRateLimit();