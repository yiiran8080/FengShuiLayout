#!/usr/bin/env node

// Test script to verify all couple components are saving data correctly
// This script simulates the save calls that would happen in each component

const API_BASE = "http://localhost:3001";

const testCoupleComponents = async () => {
	console.log("🧪 Testing Complete Couple Component Save Integration...\n");

	// Test data for couple analysis
	const sessionId = "test_couple_1990-01-01_1992-02-02".replace(
		/[^a-zA-Z0-9]/g,
		"_"
	);
	const testMetadata = {
		birthday: "1990-01-01T10:00:00.000Z",
		birthday2: "1992-02-02T14:00:00.000Z",
		gender: "female",
		gender2: "male",
	};

	const componentsToTest = [
		{
			name: "coupleAnnualAnalysis",
			data: {
				compatibility: { score: 85, level: "優秀配對" },
				annualAnalysis: { 2024: "今年運勢良好", 2025: "明年更佳" },
				predictions: ["感情穩定", "事業順利"],
			},
		},
		{
			name: "coupleMingJu",
			data: {
				mingjuAnalysis: "八字合婚分析結果",
				compatibility: "中上配對",
				recommendations: ["互相扶持", "共同成長"],
			},
		},
		{
			name: "coupleGodExplain",
			data: {
				godAnalysis: "神煞分析內容",
				explanations: ["天乙貴人", "桃花星"],
				guidance: "風水建議",
			},
		},
		{
			name: "coupleSeason",
			data: {
				seasonAnalysis: "四季運勢分析",
				spring: "春季運勢",
				summer: "夏季運勢",
				autumn: "秋季運勢",
				winter: "冬季運勢",
			},
		},
		{
			name: "coupleCoreSuggestion",
			data: {
				coreSuggestions: "核心建議內容",
				priorities: ["溝通改善", "風水調整"],
				timeline: "建議實施時間",
			},
		},
		{
			name: "enhancedCoupleSpecificProblemSolution",
			data: {
				problemSolution: "具體問題解決方案",
				female: { analysis: "女方分析" },
				male: { analysis: "男方分析" },
				specificProblem: "感情問題",
			},
			metadata: { ...testMetadata, specificProblem: "感情降溫" },
		},
	];

	let passedTests = 0;
	let totalTests = componentsToTest.length;

	for (const component of componentsToTest) {
		try {
			console.log(`📝 Testing ${component.name}...`);

			const response = await fetch(`${API_BASE}/api/couple-content`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					sessionId,
					componentName: component.name,
					data: component.data,
					metadata: component.metadata || testMetadata,
				}),
			});

			if (response.ok) {
				const result = await response.json();
				console.log(`✅ ${component.name}: SAVED successfully`);
				passedTests++;
			} else {
				const error = await response.text();
				console.log(`❌ ${component.name}: FAILED - ${error}`);
			}
		} catch (error) {
			console.log(`❌ ${component.name}: ERROR - ${error.message}`);
		}
	}

	console.log(
		`\n📊 Test Results: ${passedTests}/${totalTests} components saving successfully`
	);

	// Test retrieval of all saved data
	console.log("\n🔍 Testing data retrieval...");
	try {
		const response = await fetch(
			`${API_BASE}/api/couple-content?sessionId=${sessionId}`
		);
		if (response.ok) {
			const savedData = await response.json();
			console.log("✅ Data retrieval: SUCCESS");
			console.log(
				`📋 Components found: ${Object.keys(savedData.components || {}).length}`
			);

			// Show which components were successfully saved and retrieved
			if (savedData.components) {
				Object.keys(savedData.components).forEach((componentName) => {
					console.log(`   - ${componentName}: Data present ✓`);
				});
			}
		} else {
			console.log("❌ Data retrieval: FAILED");
		}
	} catch (error) {
		console.log(`❌ Data retrieval: ERROR - ${error.message}`);
	}

	if (passedTests === totalTests) {
		console.log(
			"\n🎉 ALL COMPONENTS INTEGRATION COMPLETE! Simple save pattern working perfectly."
		);
	} else {
		console.log(
			`\n⚠️  ${totalTests - passedTests} components need attention`
		);
	}
};

// Run the test
testCoupleComponents().catch(console.error);
