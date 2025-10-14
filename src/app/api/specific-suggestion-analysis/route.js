import { NextResponse } from "next/server";

// DeepSeek AI Service
async function callDeepSeekAPI(prompt) {
	try {
		const response = await fetch(
			"https://api.deepseek.com/chat/completions",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
				},
				body: JSON.stringify({
					model: "deepseek-chat",
					messages: [
						{
							role: "system",
							content:
								"你是一位專業的風水命理大師，具備深厚的八字分析能力。請根據用戶的具體問題生成專業建議。請全部使用繁體中文回應。",
						},
						{
							role: "user",
							content: prompt,
						},
					],
					max_tokens: 6000,
					temperature: 0.8,
				}),
			}
		);

		if (!response.ok) {
			throw new Error(`DeepSeek API error: ${response.status}`);
		}

		const data = await response.json();
		return data.choices[0].message.content;
	} catch (error) {
		console.error("DeepSeek API Error:", error);
		throw error;
	}
}

// Parse AI response into structured suggestions and taboos
function parseSpecificSuggestionContent(aiResponse) {
	try {
		console.log("Raw AI Response:", aiResponse);

		// Extract suggestions section
		const suggestionsMatch = aiResponse.match(
			/五大建議方案[：:](.*?)五大禁忌行為/s
		);
		let suggestionsText = suggestionsMatch
			? suggestionsMatch[1].trim()
			: "";

		if (!suggestionsText) {
			// Alternative pattern for suggestions
			const altSuggestionsMatch = aiResponse.match(
				/建議方案[：:]?(.*?)(?=禁忌|避免|注意)/s
			);
			suggestionsText = altSuggestionsMatch
				? altSuggestionsMatch[1].trim()
				: "";
		}

		// Extract taboos section
		const taboosMatch = aiResponse.match(
			/五大禁忌行為[：:](.*?)(?:\n\n|$)/s
		);
		let taboosText = taboosMatch ? taboosMatch[1].trim() : "";

		if (!taboosText) {
			// Alternative pattern for taboos
			const altTaboosMatch = aiResponse.match(/禁忌行為[：:]?(.*?)$/s);
			taboosText = altTaboosMatch ? altTaboosMatch[1].trim() : "";
		}

		console.log("Extracted suggestions text:", suggestionsText);
		console.log("Extracted taboos text:", taboosText);

		// Parse suggestions
		const suggestions = parseSuggestionsFromText(suggestionsText);

		// Parse taboos
		const taboos = parseTaboosFromText(taboosText);

		console.log("Parsed suggestions:", suggestions);
		console.log("Parsed taboos:", taboos);

		return {
			suggestions:
				suggestions.length > 0
					? suggestions
					: generateFallbackSuggestions(),
			taboos: taboos.length > 0 ? taboos : generateFallbackTaboos(),
		};
	} catch (error) {
		console.error("Parse error:", error);
		return {
			suggestions: generateFallbackSuggestions(),
			taboos: generateFallbackTaboos(),
		};
	}
}

function parseSuggestionsFromText(text) {
	const suggestions = [];

	// Primary pattern: numbered list (1. Title: Content)
	const primaryPattern =
		/(\d+)[、.\s]*([^：:\n]+)[：:]([^]+?)(?=\n\d+[、.\s]*[^：:\n]+[：:]|\n【|$)/gs;
	let matches = [...text.matchAll(primaryPattern)];

	// Fallback pattern: simple numbered format
	if (matches.length === 0) {
		const fallbackPattern = /(\d+)[、.\s]*([^]+?)(?=\n\d+[、.\s]|\n【|$)/g;
		matches = [...text.matchAll(fallbackPattern)];
	}

	// Additional fallback: Chinese numerals
	if (matches.length === 0) {
		const chinesePattern =
			/([一二三四五])[、.\s]*([^]+?)(?=\n[一二三四五][、.\s]|\n【|$)/g;
		matches = [...text.matchAll(chinesePattern)];
	}

	// Process matches
	matches.forEach((match, index) => {
		if (index < 5) {
			// Limit to 5 suggestions
			let title, content;

			if (match[3]) {
				// Format: "1. Title: Content"
				title = match[2] || `建議 ${index + 1}`;
				content = match[3];
			} else {
				// Format: "1. Title+Content" - split on first colon if exists
				let fullText = match[2] || match[1] || "";
				let colonIndex =
					fullText.indexOf("：") || fullText.indexOf(":");
				if (colonIndex > 0 && colonIndex < fullText.length * 0.4) {
					title = fullText.substring(0, colonIndex);
					content = fullText.substring(colonIndex + 1);
				} else {
					title = `建議 ${index + 1}`;
					content = fullText;
				}
			}

			// Clean up content
			title = title.trim().replace(/[：:]/g, "");
			content = content.trim();

			// Remove newlines and clean up formatting
			content = content.replace(/\n+/g, " ").replace(/\s+/g, " ");

			// Clean up content length
			if (content.length > 150) {
				content = content.substring(0, 120) + "...";
			}

			// Remove any existing repetitive endings
			content = content.replace(
				/\.\.\.根據你的八字分析，建議持續觀察並調整策略，以達到最佳效果。$/,
				""
			);
			content = content.replace(
				/根據你的八字分析，建議持續觀察並調整策略，以達到最佳效果。$/,
				""
			);

			const icons = ["🎯", "💡", "⭐", "🚀", "🔮"];
			const categories = [
				"核心型",
				"實用型",
				"提升型",
				"突破型",
				"智慧型",
			];

			suggestions.push({
				title: title,
				description: content,
				icon: icons[index] || "💫",
				category: categories[index] || "建議型",
			});
		}
	});

	return suggestions;
}

function parseTaboosFromText(text) {
	const taboos = [];

	// Primary pattern: numbered list (1. Title: Content)
	const primaryPattern =
		/(\d+)[、.\s]*([^：:\n]+)[：:]([^]+?)(?=\n\d+[、.\s]*[^：:\n]+[：:]|\n【|$)/gs;
	let matches = [...text.matchAll(primaryPattern)];

	// Fallback pattern: simple numbered format
	if (matches.length === 0) {
		const fallbackPattern = /(\d+)[、.\s]*([^]+?)(?=\n\d+[、.\s]|\n【|$)/g;
		matches = [...text.matchAll(fallbackPattern)];
	}

	// Additional fallback: Chinese numerals
	if (matches.length === 0) {
		const chinesePattern =
			/([一二三四五])[、.\s]*([^]+?)(?=\n[一二三四五][、.\s]|\n【|$)/g;
		matches = [...text.matchAll(chinesePattern)];
	}

	// Process matches
	matches.forEach((match, index) => {
		if (index < 5) {
			// Limit to 5 taboos
			let title, content;

			if (match[3]) {
				// Format: "1. Title: Content"
				title = match[2] || `禁忌 ${index + 1}`;
				content = match[3];
			} else {
				// Format: "1. Title+Content" - split on first colon if exists
				let fullText = match[2] || match[1] || "";
				let colonIndex =
					fullText.indexOf("：") || fullText.indexOf(":");
				if (colonIndex > 0 && colonIndex < fullText.length * 0.4) {
					title = fullText.substring(0, colonIndex);
					content = fullText.substring(colonIndex + 1);
				} else {
					title = `禁忌 ${index + 1}`;
					content = fullText;
				}
			}

			// Clean up content
			title = title.trim().replace(/[：:]/g, "");
			content = content.trim();

			// Remove newlines and clean up formatting
			content = content.replace(/\n+/g, " ").replace(/\s+/g, " ");

			// Clean up content length
			if (content.length > 150) {
				content = content.substring(0, 120) + "...";
			}

			// Remove any existing repetitive endings
			content = content.replace(
				/\.\.\.避免此行為可能導致的負面後果，建議謹慎處理相關事務。$/,
				""
			);
			content = content.replace(
				/避免此行為可能導致的負面後果，建議謹慎處理相關事務。$/,
				""
			);

			const icons = ["🚫", "⚠️", "❌", "🔴", "🛑"];
			const levels = ["嚴禁", "避免", "謹慎", "警惕", "注意"];
			const consequences = [
				"影響運勢",
				"阻礙發展",
				"增加風險",
				"損害利益",
				"破壞平衡",
			];

			taboos.push({
				title: title,
				description: content,
				icon: icons[index] || "⛔",
				level: levels[index] || "注意",
				consequence: consequences[index] || "可能影響整體運勢",
			});
		}
	});

	return taboos;
}

function generateFallbackSuggestions() {
	return [
		{
			title: "環境調整",
			description:
				"根據你的八字分析，建議調整居住或工作環境，增強有利的風水元素。選擇適合的方位和佈局，有助於提升整體運勢。",
			icon: "🏠",
			category: "環境型",
		},
		{
			title: "時機把握",
			description:
				"依據你的命理週期，建議在有利的時間段進行重要決策。關注農曆時間和個人運勢週期，把握最佳行動時機。",
			icon: "⏰",
			category: "時機型",
		},
		{
			title: "個人提升",
			description:
				"針對你的八字特點，建議加強相應的個人能力和素質。透過學習和實踐，提升自身的競爭力和適應能力。",
			icon: "📚",
			category: "提升型",
		},
		{
			title: "人際網絡",
			description:
				"根據你的社交宮位分析，建議擴展有益的人際關係。與貴人建立良好關係，避免與不利的人過多接觸。",
			icon: "🤝",
			category: "人脈型",
		},
		{
			title: "心態調整",
			description:
				"基於你的性格特質，建議保持積極正面的心態。透過冥想、運動等方式調節情緒，維持內心的平衡與和諧。",
			icon: "🧘",
			category: "心理型",
		},
	];
}

function generateFallbackTaboos() {
	return [
		{
			title: "衝動決策",
			description:
				"避免在情緒激動或壓力大的時候做重要決定。冷靜思考，諮詢可靠的建議後再行動，以免造成不必要的損失。",
			icon: "🚫",
			level: "嚴禁",
			consequence: "可能導致重大失誤",
		},
		{
			title: "負面環境",
			description:
				"遠離充滿負能量的人和環境，避免長期處於消極的氛圍中。選擇積極正面的環境，有助於維持良好的運勢。",
			icon: "⚠️",
			level: "避免",
			consequence: "影響個人氣場",
		},
		{
			title: "過度勞累",
			description:
				"注意工作與生活的平衡，避免過度透支身體和精神。適當休息和放鬆，保持身心健康的狀態。",
			icon: "😵",
			level: "注意",
			consequence: "損害身體健康",
		},
		{
			title: "投機行為",
			description:
				"避免參與高風險的投機活動，包括賭博、投機股票等。穩健理財，避免因貪心而造成財務損失。",
			icon: "🎰",
			level: "禁止",
			consequence: "財務風險增大",
		},
		{
			title: "忽視直覺",
			description:
				"不要完全忽視內心的直覺和感受，特別是在重要決策時。適當相信第六感，但也要結合理性分析。",
			icon: "🔮",
			level: "警惕",
			consequence: "錯失重要機會",
		},
	];
}

// Create structured prompt for specific suggestion analysis
function createSpecificSuggestionPrompt(userInfo) {
	const { birthDateTime, concern, problem, gender } = userInfo;

	const concernTitles = {
		財運: "財務財運",
		事業: "事業發展",
		感情: "感情關係",
		健康: "健康養生",
		學業: "學業成就",
		工作: "工作職場",
	};

	const concernTitle = concernTitles[concern] || concern;

	return `請為用戶的具體問題提供專業的風水命理建議分析：

【用戶資訊】
出生時間：${birthDateTime}
性別：${gender === "male" ? "男性" : "女性"}
關注領域：${concernTitle}
具體問題：${problem}

【分析要求】
請基於用戶的八字命理和具體問題，生成：

五大建議方案：
1. [建議標題]：[具體可行的建議內容，約100字，包含實際操作方法]
2. [建議標題]：[具體可行的建議內容，約100字，包含實際操作方法]
3. [建議標題]：[具體可行的建議內容，約100字，包含實際操作方法]
4. [建議標題]：[具體可行的建議內容，約100字，包含實際操作方法]
5. [建議標題]：[具體可行的建議內容，約100字，包含實際操作方法]

五大禁忌行為：
1. [禁忌標題]：[必須避免的行為，約100字，說明為什麼要避免和可能後果]
2. [禁忌標題]：[必須避免的行為，約100字，說明為什麼要避免和可能後果]
3. [禁忌標題]：[必須避免的行為，約100字，說明為什麼要避免和可能後果]
4. [禁忌標題]：[必須避免的行為，約100字，說明為什麼要避免和可能後果]
5. [禁忌標題]：[必須避免的行為，約100字，說明為什麼要避免和可能後果]

【格式要求】
- **必須嚴格按照數字編號格式：1. 2. 3. 4. 5.**
- 每個建議和禁忌都要具體可行
- 內容長度控制在80-120字左右
- 結合八字命理原理
- 針對具體問題提供解決方案
- 語言專業但易懂
- **重要：請全部使用繁體中文輸出，不要使用簡體中文**
- **必須提供完整的5個建議和5個禁忌，不可少於此數量**

請嚴格按照上述格式輸出，確保內容的專業性和實用性。所有回應必須使用繁體中文。`;
}

export async function POST(request) {
	try {
		const { userInfo } = await request.json();

		if (!userInfo) {
			return NextResponse.json(
				{ error: "User information is required" },
				{ status: 400 }
			);
		}

		// Create the analysis prompt
		const prompt = createSpecificSuggestionPrompt(userInfo);

		console.log("Generated prompt:", prompt);

		// Call DeepSeek AI
		const aiResponse = await callDeepSeekAPI(prompt);

		console.log("AI Response received:", aiResponse);

		// Parse the AI response
		const parsedContent = parseSpecificSuggestionContent(aiResponse);

		// Structure the response
		const analysisResult = {
			title: "針對性建議",
			subtitle: `專門解決：${userInfo.problem || "個人關注問題"}`,
			suggestions: parsedContent.suggestions,
			taboos: parsedContent.taboos,
			concern: userInfo.concern,
			problem: userInfo.problem,
			userBirthday: userInfo.birthDateTime,
			userGender: userInfo.gender === "male" ? "男性" : "女性",
			aiResponse: aiResponse,
			prompt: prompt,
		};

		return NextResponse.json({
			success: true,
			data: analysisResult,
		});
	} catch (error) {
		console.error("API Error:", error);

		// Return fallback content on error
		const fallbackData = {
			title: "針對性建議",
			subtitle: "基於傳統風水命理的一般性建議",
			suggestions: generateFallbackSuggestions(),
			taboos: generateFallbackTaboos(),
			concern: "綜合",
			problem: "一般性問題",
			userBirthday: "未指定",
			userGender: "未指定",
			aiResponse: "使用預設建議內容",
			prompt: "系統預設分析",
		};

		return NextResponse.json({
			success: true,
			data: fallbackData,
			fallback: true,
		});
	}
}
