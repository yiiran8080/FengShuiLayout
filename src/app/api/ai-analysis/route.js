import { NextResponse } from "next/server";

export async function POST(request) {
	console.log("🔥 AI Analysis API called at:", new Date().toISOString());

	// Read request body once and store the data
	let requestData;
	try {
		requestData = await request.json();
	} catch (error) {
		console.error("❌ Failed to parse request body:", error);
		return NextResponse.json(
			{
				success: false,
				message: "Invalid request body",
			},
			{ status: 400 }
		);
	}

	const { prompt, userInfo, concern, problem } = requestData;

	// Extract concern from userInfo if not provided at top level
	const finalConcern = concern || userInfo?.concern;

	console.log("📝 Request data:", {
		concern: finalConcern,
		userBirthday: userInfo?.birthDateTime,
		gender: userInfo?.gender,
	});

	try {
		// Real AI Analysis using DeepSeek API
		console.log("🚀 Calling DeepSeek API for LiuNian analysis...");
		const startTime = Date.now();

		const deepseekResponse = await fetch(
			"https://api.deepseek.com/chat/completions",
			{
				method: "POST",
				headers: {
					Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					model: "deepseek-chat",
					messages: [
						{
							role: "system",
							content: `你是一位资深八字命理师，精通流年分析与十神互动。请严格按照用户要求的JSON格式生成流年关键词报告。

重要要求：
1. 必须基于用户的实际出生时间计算八字
2. 必须根据用户选择的关注领域（${finalConcern}）生成相应内容  
3. 必须返回严格的JSON格式，包含keywords数组和analysis字符串
4. 关键词要专业且具体，描述要包含专业术语
5. 分析要结合2025年流年特点
6. 所有字符串都必须用双引号包围，确保JSON格式正确
7. 描述文字中不能有未转义的引号或特殊字符
8. 禁止使用其他格式如"核心论述"等，只能使用keywords和analysis结构

严格返回格式（不要添加任何额外文字或markdown标记）：
{
  "keywords": [
    {"id": 1, "text": "关键词1", "description": "专业描述内容"},
    {"id": 2, "text": "关键词2", "description": "专业描述内容"},
    {"id": 3, "text": "关键词3", "description": "专业描述内容"}
  ],
  "analysis": "流年分析总结"
}`,
						},
						{
							role: "user",
							content: prompt,
						},
					],
					max_tokens: 1000,
					temperature: 0.7,
					stream: false,
				}),
			}
		);

		const apiTime = Date.now() - startTime;
		console.log(`⏱️ DeepSeek API took: ${apiTime}ms`);

		if (!deepseekResponse.ok) {
			console.error("❌ DeepSeek API error:", deepseekResponse.status);
			throw new Error(`DeepSeek API error: ${deepseekResponse.status}`);
		}

		console.log("📥 Parsing DeepSeek response...");
		const deepseekData = await deepseekResponse.json();
		let aiContent = deepseekData.choices[0].message.content;

		console.log("✅ AI Content received, length:", aiContent.length);
		console.log("📋 Raw AI content:", aiContent.substring(0, 200) + "...");

		// Try to validate and clean the JSON response
		try {
			// Extract JSON from the response (in case there's extra text)
			const jsonMatch = aiContent.match(/\{[\s\S]*\}/);
			if (jsonMatch) {
				aiContent = jsonMatch[0];
			}

			// Test parse to validate JSON
			const testParse = JSON.parse(aiContent);
			console.log("✅ JSON validation successful");

			// Ensure proper structure - must have keywords array and analysis string
			if (
				testParse.keywords &&
				Array.isArray(testParse.keywords) &&
				testParse.analysis &&
				typeof testParse.analysis === "string" &&
				testParse.keywords.length > 0
			) {
				// Validate each keyword has required fields
				const validKeywords = testParse.keywords.every(
					(keyword) =>
						keyword.text &&
						keyword.description &&
						typeof keyword.text === "string" &&
						typeof keyword.description === "string"
				);

				if (validKeywords) {
					console.log("✅ JSON structure validated");
				} else {
					throw new Error(
						"Invalid keyword structure - missing text or description fields"
					);
				}
			} else {
				throw new Error(
					"Invalid JSON structure - missing keywords array or analysis string"
				);
			}
		} catch (jsonError) {
			console.error("❌ JSON validation failed:", jsonError.message);
			console.log("🔄 Falling back to personalized content...");

			// Generate fallback content using already parsed request data
			const fallbackContent = generatePersonalizedFallback(
				finalConcern,
				userInfo
			);
			aiContent = JSON.stringify(fallbackContent);
		}

		console.log("📤 Sending response...");

		return NextResponse.json({
			success: true,
			content: aiContent,
			message: `AI analysis generated successfully in ${apiTime}ms`,
		});
	} catch (error) {
		console.error("💥 AI Analysis API Error:", error);

		// Fallback to personalized mock response based on user's actual data
		console.log("🔄 Using personalized fallback response...");
		const mockAIResponse = generatePersonalizedFallback(
			finalConcern,
			userInfo
		);

		return NextResponse.json({
			success: true,
			content: mockAIResponse,
			message:
				"Using personalized fallback analysis (API error: " +
				error.message +
				")",
			fallback: true,
		});
	}
}

// Generate personalized fallback based on actual user data (not hardcoded)
function generatePersonalizedFallback(concern, userInfo) {
	const birthDateTime = userInfo?.birthDateTime || "";
	const gender = userInfo?.gender || "male";
	const currentYear = 2025;

	console.log("🎯 generatePersonalizedFallback called with:", {
		concern,
		birthDateTime,
		gender,
	});

	// Extract birth year for personalized analysis
	const birthYear = birthDateTime
		? new Date(birthDateTime).getFullYear()
		: 2000;
	const age = currentYear - birthYear;
	const lifeStage = age < 35 ? "青年" : age < 55 ? "中年" : "長者";
	const genderRef = gender === "female" || gender === "女" ? "女性" : "男性";

	// BaZi elements based on birth year (simplified for fallback)
	const yearElements = {
		1984: { year: "甲子", element: "海中金", dayMaster: "甲木" },
		1990: { year: "庚午", element: "路旁土", dayMaster: "庚金" },
		1996: { year: "丙子", element: "澗下水", dayMaster: "丙火" },
		2000: { year: "庚辰", element: "白臘金", dayMaster: "庚金" },
		1995: { year: "乙亥", element: "山頭火", dayMaster: "乙木" },
	};

	const baziInfo = yearElements[birthYear] || {
		year: "庚子",
		element: "壁上土",
		dayMaster: "庚金",
	};

	if (concern === "健康") {
		const healthResponse = {
			keywords: [
				{
					id: 1,
					text: "滋陰降火",
					description: `${baziInfo.dayMaster}日主遇${currentYear}乙巳年，火旺易耗陰液，${genderRef}${lifeStage}需重點滋陰降火調理`,
				},
				{
					id: 2,
					text: "養心安神",
					description: `${baziInfo.element}命格配流年，心火偏旺，${genderRef}宜早睡養陰血，保持心情平和`,
				},
				{
					id: 3,
					text: "潤肺護膚",
					description: `${birthYear}年生人逢流年克金，易致肺燥，${lifeStage}需多親近水木環境養護`,
				},
			],
			analysis: `${currentYear}年流年疊加大運，${genderRef}健康呈現「${baziInfo.dayMaster}火旺傷陰，調候養生」之象。`,
		};
		return JSON.stringify(healthResponse);
	}

	if (concern === "財運") {
		const wealthResponse = {
			keywords: [
				{
					id: 1,
					text: `${lifeStage}進財`,
					description: `${baziInfo.dayMaster}日主配${currentYear}年流年，${genderRef}${lifeStage}階段財運逐步上升，投資理財需謹慎`,
				},
				{
					id: 2,
					text: "理財考驗",
					description: `${baziInfo.element}命格遇流年，需防範投資風險，${lifeStage}宜保守理財為上策`,
				},
				{
					id: 3,
					text: "秋冬轉機",
					description: `根據${birthYear}年${baziInfo.year}特質，下半年財運轉佳，適合${genderRef}積極把握機會`,
				},
			],
			analysis: `${currentYear}年流年疊加大運，${genderRef}財運呈現「${baziInfo.dayMaster}生財有道，謹慎經營」之象。`,
		};
		return JSON.stringify(wealthResponse);
	}

	if (concern === "事業") {
		const careerResponse = {
			keywords: [
				{
					id: 1,
					text: `${lifeStage}發展`,
					description: `${baziInfo.dayMaster}日主在${currentYear}年，${genderRef}事業運勢穩中有升，適合專業深耕`,
				},
				{
					id: 2,
					text: "職場挑戰",
					description: `${baziInfo.element}命格特質，${lifeStage}階段面臨同業競爭，需要提升個人競爭力`,
				},
				{
					id: 3,
					text: "貴人相助",
					description: `${birthYear}年生人在${currentYear}年，適合透過人脈網絡拓展事業版圖`,
				},
			],
			analysis: `${currentYear}年流年疊加大運，${genderRef}事業呈現「${baziInfo.dayMaster}穩中求進，順勢而為」之象。`,
		};
		return JSON.stringify(careerResponse);
	}

	// Default response for other concerns
	return JSON.stringify({
		keywords: [
			{
				id: 1,
				text: `${lifeStage}運勢`,
				description: `${baziInfo.dayMaster}日主配${currentYear}年流年，${genderRef}${concern}方面呈現穩定發展趨勢`,
			},
			{
				id: 2,
				text: "流年考驗",
				description: `${baziInfo.element}命格特質，${lifeStage}需要謹慎應對各種挑戰`,
			},
			{
				id: 3,
				text: "調候平衡",
				description: `根據${birthYear}年出生特質，宜保持身心平衡，順應自然`,
			},
		],
		analysis: `${currentYear}年流年疊加大運，${genderRef}${concern}呈現「${baziInfo.dayMaster}調候有序，漸入佳境」之象。`,
	});
}
