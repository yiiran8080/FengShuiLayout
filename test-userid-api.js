#!/usr/bin/env node

// Test script to verify userId is being saved in reportData API
const http = require("http");
const { URL } = require("url");

const API_BASE = "http://localhost:3000/api/reportData";

// Helper function to make HTTP requests
function makeRequest(url, options = {}) {
	return new Promise((resolve, reject) => {
		const urlObj = new URL(url);
		const requestOptions = {
			hostname: urlObj.hostname,
			port: urlObj.port,
			path: urlObj.pathname + urlObj.search,
			method: options.method || "GET",
			headers: options.headers || {},
		};

		const req = http.request(requestOptions, (res) => {
			let data = "";
			res.on("data", (chunk) => {
				data += chunk;
			});
			res.on("end", () => {
				try {
					const jsonData = JSON.parse(data);
					resolve(jsonData);
				} catch (error) {
					resolve({ error: "Invalid JSON response", raw: data });
				}
			});
		});

		req.on("error", (error) => {
			reject(error);
		});

		if (options.body) {
			req.write(options.body);
		}
		req.end();
	});
}

async function testUserIdSaving() {
	console.log("🧪 Testing userId saving in reportData API...\n");

	const testSessionId = `test_session_${Date.now()}`;
	const testUserId = "test_user@example.com";

	// Test 1: POST - Create new report with userId
	console.log("📤 Test 1: Creating new report with userId...");
	try {
		const postResult = await makeRequest(API_BASE, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				sessionId: testSessionId,
				userId: testUserId,
				birthDateTime: "1999-09-03T14:04",
				gender: "male",
				language: "tw",
				reportStatus: "generating",
			}),
		});

		console.log("📋 Raw response:", JSON.stringify(postResult, null, 2));
		console.log(
			"✅ POST Response:",
			postResult.success ? "SUCCESS" : "FAILED"
		);
		if (postResult.success) {
			console.log(
				"🔍 Created document userId:",
				postResult.data?.userId || "MISSING!"
			);
		} else {
			console.log("❌ POST Error:", postResult.error || "Unknown error");
		}
	} catch (error) {
		console.log("❌ POST Request failed:", error.message);
	}

	console.log("\n" + "=".repeat(50) + "\n");

	// Test 2: GET - Retrieve the created report
	console.log("📥 Test 2: Retrieving created report...");
	try {
		const getResult = await makeRequest(
			`${API_BASE}?sessionId=${testSessionId}`
		);

		console.log(
			"✅ GET Response:",
			getResult.success ? "SUCCESS" : "FAILED"
		);
		if (getResult.success && getResult.data) {
			console.log(
				"🔍 Retrieved document userId:",
				getResult.data.userId || "MISSING!"
			);
			console.log("📋 Document keys:", Object.keys(getResult.data));
			console.log(
				"🆔 SessionId match:",
				getResult.data.sessionId === testSessionId ? "YES" : "NO"
			);
		} else {
			console.log("❌ GET Error:", getResult.error);
		}
	} catch (error) {
		console.log("❌ GET Request failed:", error.message);
	}

	console.log("\n" + "=".repeat(50) + "\n");

	// Test 3: PATCH - Update the report with more data
	console.log("🔄 Test 3: Updating report with PATCH...");
	try {
		const patchResult = await makeRequest(API_BASE, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				sessionId: testSessionId,
				userId: testUserId,
				fourFortuneData: {
					healthFortuneData: { test: "health data" },
				},
				reportStatus: "partial",
			}),
		});

		console.log(
			"✅ PATCH Response:",
			patchResult.success ? "SUCCESS" : "FAILED"
		);
		if (patchResult.success) {
			console.log(
				"🔍 Updated document userId:",
				patchResult.data?.userId || "MISSING!"
			);
		} else {
			console.log("❌ PATCH Error:", patchResult.error);
		}
	} catch (error) {
		console.log("❌ PATCH Request failed:", error.message);
	}

	console.log("\n" + "=".repeat(50) + "\n");

	// Test 4: Final GET to verify userId persisted
	console.log("🔍 Test 4: Final verification...");
	try {
		const finalResult = await makeRequest(
			`${API_BASE}?sessionId=${testSessionId}`
		);

		if (finalResult.success && finalResult.data) {
			const hasUserId = finalResult.data.userId === testUserId;
			console.log("🎯 FINAL RESULT:");
			console.log(
				"   userId saved correctly:",
				hasUserId ? "✅ YES" : "❌ NO"
			);
			console.log("   Expected userId:", testUserId);
			console.log(
				"   Actual userId:",
				finalResult.data.userId || "undefined"
			);

			if (hasUserId) {
				console.log("\n🎉 SUCCESS: userId is being saved correctly!");
			} else {
				console.log("\n💥 FAILURE: userId is NOT being saved!");
				console.log(
					"🔧 This indicates the API fix is not working properly."
				);
			}
		}
	} catch (error) {
		console.log("❌ Final GET failed:", error.message);
	}

	console.log("\n" + "=".repeat(50));
	console.log("🧪 Test completed. Check the server console for debug logs.");
}

// Run the test
testUserIdSaving().catch(console.error);
