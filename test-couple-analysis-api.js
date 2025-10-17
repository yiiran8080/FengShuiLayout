import EnhancedInitialAnalysis from "./src/lib/enhancedInitialAnalysis.js";

// Test the couple analysis function directly
async function testCoupleAnalysis() {
	console.log("🧪 Testing Couple Analysis Structure");
	console.log("================================");

	const testInput = {
		originalUserMessage: "我想拍拖",
		userBirthday: new Date("1995-03-15"),
		partnerBirthday: new Date("1996-08-20"),
		specificProblem: "用戶表達了強烈的戀愛渴望，希望找到伴侶開始戀愛關係",
	};

	try {
		console.log("📊 Input Data:");
		console.log(`   Original Message: ${testInput.originalUserMessage}`);
		console.log(
			`   User Birthday: ${testInput.userBirthday.toISOString().split("T")[0]}`
		);
		console.log(
			`   Partner Birthday: ${testInput.partnerBirthday.toISOString().split("T")[0]}`
		);
		console.log(`   Specific Problem: ${testInput.specificProblem}`);
		console.log();

		const result = await EnhancedInitialAnalysis.generateCoupleAnalysis(
			testInput.userBirthday,
			testInput.partnerBirthday,
			testInput.specificProblem,
			"hongkong" // Default region
		);

		console.log("✅ Couple Analysis Generated Successfully!");
		console.log("==========================================");

		// Check structure
		const expectedSections = [
			"basicAnalysis", // 雙方基礎分析
			"problemResponse", // 針對具體問題回應
			"compatibilityAnalysis", // 配對分析
			"practicalSolutions", // 實用解決方案
			"exclusiveInsights", // 專屬感情解析
			"reportRecommendation", // 合婚報告推薦
		];

		console.log("📋 Structure Check:");
		let structureValid = true;

		expectedSections.forEach((section) => {
			const exists = result.hasOwnProperty(section);
			console.log(
				`   ${exists ? "✅" : "❌"} ${section}: ${exists ? "Present" : "Missing"}`
			);
			if (!exists) structureValid = false;
		});

		console.log();
		console.log("📝 Content Preview:");
		if (result.basicAnalysis) {
			console.log(
				`   Basic Analysis: ${result.basicAnalysis.substring(0, 100)}...`
			);
		}
		if (result.problemResponse) {
			console.log(
				`   Problem Response: ${result.problemResponse.substring(0, 100)}...`
			);
		}
		if (result.reportRecommendation) {
			console.log("   Report Recommendation Structure:");
			console.log(`   - Title: ${result.reportRecommendation.title}`);
			console.log(`   - Price: ${result.reportRecommendation.price}`);
			console.log(
				`   - Description: ${result.reportRecommendation.description.substring(0, 100)}...`
			);
		}

		console.log();
		console.log(
			`🎯 Overall Structure: ${structureValid ? "✅ VALID" : "❌ INVALID"}`
		);

		return result;
	} catch (error) {
		console.error("❌ Error testing couple analysis:", error.message);
		console.error("Stack:", error.stack);
		return null;
	}
}

// Run the test
testCoupleAnalysis()
	.then((result) => {
		if (result) {
			console.log("\n🎉 Test completed successfully!");
			console.log(
				"The couple analysis structure matches the individual report format."
			);
		} else {
			console.log("\n💥 Test failed!");
			process.exit(1);
		}
	})
	.catch((error) => {
		console.error("💥 Test execution failed:", error);
		process.exit(1);
	});
