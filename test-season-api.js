// Use built-in fetch in Node.js 18+

async function testSeasonAnalysis() {
	const testData = {
		birthday: "1990-05-15",
		gender: "男",
		time: "08:30",
		concern: "事業",
		season: "春季",
	};

	try {
		console.log("Testing season analysis API...");
		console.log("Request data:", testData);

		const startTime = Date.now();

		const response = await fetch(
			"http://localhost:3001/api/season-analysis",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(testData),
			}
		);

		const endTime = Date.now();
		const duration = endTime - startTime;

		console.log(`Response time: ${duration}ms`);
		console.log(`Response status: ${response.status}`);

		if (response.ok) {
			const result = await response.json();
			console.log("✅ Season analysis successful!");
			console.log("Analysis keys:", Object.keys(result.analysis || {}));
			if (result.analysis?.parsed) {
				console.log(
					"Parsed content keys:",
					Object.keys(result.analysis.parsed)
				);
			}
		} else {
			const error = await response.text();
			console.log("❌ Season analysis failed:");
			console.log("Error:", error);
		}
	} catch (error) {
		console.log("❌ Test failed with error:");
		console.log(error.message);
	}
}

testSeasonAnalysis();
