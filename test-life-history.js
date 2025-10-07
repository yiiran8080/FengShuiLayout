require("dotenv").config();
const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;

async function testLifeHistoryQuery() {
	const client = new MongoClient(uri);
	try {
		await client.connect();
		const db = client.db();
		const collection = db.collection("reportdatas");

		// Get a real userId from the data
		const sampleDoc = await collection.findOne({});
		console.log("📋 Sample document userId:", sampleDoc?.userId);

		if (sampleDoc?.userId) {
			// Test the query used by life history API
			const query = {
				userId: sampleDoc.userId,
				$or: [
					{
						"aiGeneratedContent.wuxingAnalysis": {
							$exists: true,
							$ne: null,
						},
					},
					{
						"aiGeneratedContent.lifeStageAnalysis": {
							$exists: true,
							$ne: null,
						},
					},
					{
						"aiGeneratedContent.comprehensiveAI": {
							$exists: true,
							$ne: null,
						},
					},
					{
						"fourFortuneData.healthFortuneData": {
							$exists: true,
							$ne: null,
						},
					},
					{
						"fourFortuneData.careerFortuneData": {
							$exists: true,
							$ne: null,
						},
					},
					{
						"fourFortuneData.wealthFortuneData": {
							$exists: true,
							$ne: null,
						},
					},
					{
						"fourFortuneData.relationshipFortuneData": {
							$exists: true,
							$ne: null,
						},
					},
				],
			};

			const results = await collection.find(query).toArray();
			console.log(`🔍 Query results: ${results.length} documents found`);

			results.forEach((doc, idx) => {
				console.log(
					`  Doc ${idx + 1}: sessionId=${doc.sessionId}, has fourFortuneData=${!!doc.fourFortuneData}`
				);
				if (doc.fourFortuneData) {
					const keys = Object.keys(doc.fourFortuneData);
					const nonNullKeys = keys.filter(
						(key) => doc.fourFortuneData[key] !== null
					);
					console.log(
						`    fourFortuneData keys: ${nonNullKeys.join(", ")}`
					);
				}
			});
		}
	} catch (error) {
		console.error("❌ Error:", error.message);
	} finally {
		await client.close();
	}
}

testLifeHistoryQuery();
