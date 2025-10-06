async function testDatabaseFlow() {
	console.log("🧪 Testing complete database saving flow...\n");

	// Test with a fake Stripe session that would actually exist in a real scenario
	const testSessionId = "test_session_" + Date.now();

	console.log("1️⃣ Testing Phase 1: Initial report save");
	console.log("Session ID:", testSessionId);

	// Test Phase 1: Initial save (what happens immediately)
	try {
		const phase1Response = await fetch(
			"http://localhost:3000/api/fortune-report",
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					sessionId: testSessionId,
					reportContent: {
						basicAnalysis: {
							concern: "財運",
							problem: "想了解今年財運",
							analysis: "Test analysis content",
						},
						initialSaveTime: new Date().toISOString(),
						fiveElementAnalysis: null,
						zodiacAnalysis: null,
						// ... other component analyses
					},
				}),
			}
		);

		const phase1Data = await phase1Response.json();
		console.log("Phase 1 Response Status:", phase1Response.status);
		console.log("Phase 1 Response Body:", phase1Data);

		if (phase1Data.status === 0) {
			console.log("✅ Phase 1: Initial save successful");
		} else {
			console.log("❌ Phase 1: Initial save failed -", phase1Data.error);
			return;
		}
	} catch (error) {
		console.error("❌ Phase 1 failed:", error.message);
		return;
	}

	console.log("\n2️⃣ Testing Phase 2: Check if report exists");

	// Test Phase 2: Check if the report was saved (POST request)
	try {
		const checkResponse = await fetch(
			"http://localhost:3000/api/fortune-report",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					sessionId: testSessionId,
				}),
			}
		);

		const checkData = await checkResponse.json();
		console.log("Check Response Status:", checkResponse.status);
		console.log("Check Response Body:", checkData);

		if (checkData.status === 0 && checkData.report) {
			console.log(
				"✅ Phase 2: Report successfully saved and retrievable"
			);
			console.log("Saved report ID:", checkData.report._id);
			console.log(
				"Report content keys:",
				Object.keys(checkData.report.reportContent || {})
			);
		} else {
			console.log("❌ Phase 2: Report not found or failed to retrieve");
		}
	} catch (error) {
		console.error("❌ Phase 2 failed:", error.message);
	}

	console.log("\n3️⃣ Testing Phase 3: Complete report update");

	// Test Phase 3: Update with complete content (what happens after 20 seconds)
	try {
		const completeContent = {
			basicAnalysis: {
				concern: "財運",
				problem: "想了解今年財運",
				analysis: "Test analysis content",
			},
			fiveElementAnalysis: {
				elements: ["金", "木"],
				strength: "balanced",
			},
			ganZhiAnalysis: { year: "甲子", analysis: "Good fortune" },
			reportGeneratedAt: new Date().toISOString(),
			completeSaveTime: new Date().toISOString(),
		};

		const phase3Response = await fetch(
			"http://localhost:3000/api/fortune-report",
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					sessionId: testSessionId,
					reportContent: completeContent,
				}),
			}
		);

		const phase3Data = await phase3Response.json();
		console.log("Phase 3 Response Status:", phase3Response.status);
		console.log("Phase 3 Response Body:", phase3Data);

		if (phase3Data.status === 0) {
			console.log("✅ Phase 3: Complete content update successful");
		} else {
			console.log(
				"❌ Phase 3: Complete content update failed -",
				phase3Data.error
			);
		}
	} catch (error) {
		console.error("❌ Phase 3 failed:", error.message);
	}

	console.log("\n4️⃣ Final verification: Re-check saved content");

	// Final verification
	try {
		const finalCheckResponse = await fetch(
			"http://localhost:3000/api/fortune-report",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					sessionId: testSessionId,
				}),
			}
		);

		const finalCheckData = await finalCheckResponse.json();

		if (finalCheckData.status === 0 && finalCheckData.report) {
			console.log("✅ Final check: Report exists with updated content");
			console.log(
				"Final report content keys:",
				Object.keys(finalCheckData.report.reportContent || {})
			);

			// Check if complete content was saved
			const reportContent = finalCheckData.report.reportContent;
			if (reportContent.completeSaveTime) {
				console.log(
					"✅ Complete save timestamp found - background save working!"
				);
			} else {
				console.log(
					"⚠️  No complete save timestamp - background save may not be working"
				);
			}
		} else {
			console.log("❌ Final check failed");
		}
	} catch (error) {
		console.error("❌ Final check failed:", error.message);
	}

	console.log("\n🏁 Database flow test completed!");
}

// Run the test
testDatabaseFlow();
