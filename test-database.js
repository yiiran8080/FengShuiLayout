// Using built-in fetch in Node.js 18+

async function testDatabaseSaving() {
	try {
		console.log("Testing database saving functionality...");

		// First, test if the API endpoint is accessible
		console.log("1. Testing API endpoint accessibility...");
		const response = await fetch(
			"http://localhost:3000/api/fortune-report",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					sessionId: "test-session-" + Date.now(),
				}),
				timeout: 10000,
			}
		);

		console.log("Response status:", response.status);
		const responseText = await response.text();
		console.log("Response body:", responseText);

		if (response.ok) {
			console.log("✅ API endpoint is accessible");
		} else {
			console.log("❌ API endpoint returned error");
		}
	} catch (error) {
		console.error("❌ Error testing database saving:", error.message);

		if (error.code === "ECONNREFUSED") {
			console.log(
				"💡 Server might not be running or not accessible on localhost:3000"
			);
		}
	}
}

// Run the test
testDatabaseSaving();
