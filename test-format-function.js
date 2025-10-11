// Quick test of the formatting function
function formatCoupleAnalysisResponse(analysisResult) {
	if (!analysisResult || typeof analysisResult !== "object") {
		return analysisResult;
	}

	let formattedResponse = "";

	// 1. 雙方基礎分析
	if (analysisResult.basicAnalysis) {
		formattedResponse += analysisResult.basicAnalysis + "\n\n";
	}

	// 2. 針對具體問題回應
	if (analysisResult.problemResponse) {
		formattedResponse += analysisResult.problemResponse + "\n\n";
	}

	// 3. 配對分析
	if (analysisResult.compatibilityAnalysis) {
		formattedResponse += analysisResult.compatibilityAnalysis + "\n\n";
	}

	// 4. 實用解決方案
	if (analysisResult.practicalSolutions) {
		formattedResponse += analysisResult.practicalSolutions + "\n\n";
	}

	// 5. 專屬感情解析
	if (analysisResult.exclusiveInsights) {
		formattedResponse += analysisResult.exclusiveInsights + "\n\n";
	}

	// 6. 合婚報告推薦
	if (analysisResult.reportRecommendation) {
		const rec = analysisResult.reportRecommendation;
		formattedResponse += `───────────────────\n💎 **想要更深入的分析嗎？**\n根據你們的狀況，風鈴為你們推薦：\n\n`;
		formattedResponse += `**${rec.title}** 價值${rec.originalPrice}，限時優惠${rec.price}\n`;
		if (rec.features && rec.features.length > 0) {
			rec.features.forEach((feature) => {
				formattedResponse += `- ${feature}\n`;
			});
		}
		formattedResponse += `\n${rec.action}`;
	}

	return formattedResponse.trim();
}

// Test with sample data
const testObject = {
	basicAnalysis: "Test basic analysis",
	problemResponse: "Test problem response",
	compatibilityAnalysis: "Test compatibility",
	practicalSolutions: "Test solutions",
	exclusiveInsights: "Test insights",
	reportRecommendation: {
		title: "💕 合婚配對詳細報告",
		price: "$88",
		originalPrice: "$168",
		features: ["Feature 1", "Feature 2"],
		action: "請回覆「1」選擇你想要的報告",
	},
};

const result = formatCoupleAnalysisResponse(testObject);
console.log("🧪 Format Test Result:");
console.log("Type:", typeof result);
console.log("Is String:", typeof result === "string");
console.log("Length:", result.length);
console.log("Preview:", result.substring(0, 100) + "...");
