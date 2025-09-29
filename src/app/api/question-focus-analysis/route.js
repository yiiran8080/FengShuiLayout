import { NextResponse } from "next/server";

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY || process.env.API_KEY;
const DEEPSEEK_API_URL = "https://api.deepseek.com/chat/completions";

// DeepSeek AI API 調用
async function callDeepSeekAPI(messages, options = {}) {
	try {
		const response = await fetch(DEEPSEEK_API_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
			},
			body: JSON.stringify({
				model: "deepseek-chat",
				messages: messages,
				temperature: options.temperature || 0.7,
				max_tokens: options.max_tokens || 1000,
				stream: false,
			}),
		});

		if (!response.ok) {
			throw new Error(`DeepSeek API error: ${response.status}`);
		}

		const data = await response.json();
		return data.choices[0].message.content;
	} catch (error) {
		console.error("DeepSeek API call failed:", error);
		throw error;
	}
}

// Generate personalized solution based on user's problem and concern
async function generatePersonalizedSolution(userInfo) {
	const { problem, concern, name, birthday } = userInfo;

	// Create system prompt for professional fortune teller
	const systemPrompt = `你是一位資深的命理師，專精八字、風水和人生指導，擁有30年的實戰經驗。
	
請根據用戶的具體問題和關注領域，提供個人化、實用的建議和解答。

要求：
1. 回答必須使用繁體中文
2. 語氣溫和、專業、具有同理心
3. 提供具體可行的建議，避免空泛的說辭
4. 結合命理智慧與現實考量
5. 回答格式為JSON，包含title和content兩個字段
6. title應該是簡潔的標題（10字以內）
7. content應該是詳細的建議內容（150-300字）

回答格式範例：
{
  "title": "健康管理要點",
  "content": "基於您的問題..."
}`;

	// Create user prompt with specific problem details
	const userPrompt = `用戶資訊：
姓名：${name}
生日：${birthday}
關注領域：${concern}
具體問題：${problem}

請針對這個具體問題，結合用戶的關注領域，提供個人化的專業建議。重點關注實用性和可操作性。`;

	const messages = [
		{
			role: "system",
			content: systemPrompt,
		},
		{
			role: "user",
			content: userPrompt,
		},
	];

	try {
		const response = await callDeepSeekAPI(messages, {
			temperature: 0.7,
			max_tokens: 1000,
		});

		// Parse AI response
		let aiResponse;
		try {
			// Try to extract JSON from response
			const jsonMatch = response.match(/\{[\s\S]*\}/);
			if (jsonMatch) {
				aiResponse = JSON.parse(jsonMatch[0]);
			} else {
				// Fallback: create structured response from plain text
				aiResponse = {
					title: `${concern}指導建議`,
					content: response.trim(),
				};
			}
		} catch (parseError) {
			console.error("Failed to parse AI response:", parseError);
			// Fallback response
			aiResponse = {
				title: `${concern}指導建議`,
				content: response.trim(),
			};
		}

		return aiResponse;
	} catch (error) {
		console.error("AI generation failed:", error);

		// Fallback to basic solution based on concern type
		const fallbackSolutions = {
			健康: {
				title: "健康管理要點",
				content:
					"建議定期健康檢查，保持規律作息與適度運動。注重飲食均衡，避免過度勞累。如有身體不適應及時就醫，以專業醫療建議為主。",
			},
			財運: {
				title: "理財策略重點",
				content:
					"建議採取穩健投資策略，避免高風險投機。重視現金流管理，建立緊急基金。投資前需充分了解風險，分散投資組合。",
			},
			感情: {
				title: "情感經營要點",
				content:
					"注重溝通技巧的提升，學會換位思考與包容。建立健康的相處模式，給彼此適當空間。遇到衝突時保持冷靜，尋求雙贏解決方案。",
			},
			事業: {
				title: "職涯發展建議",
				content:
					"專注提升核心競爭力，持續學習新技能。建立良好人際關係網絡，把握合適機會但避免過度冒進。制定明確職涯規劃。",
			},
		};

		return (
			fallbackSolutions[concern] || {
				title: "綜合指導原則",
				content:
					"建議採取務實穩健的態度面對問題，充分收集資訊後再做決策。保持積極心態，但也要有合理預期。",
			}
		);
	}
}

// API endpoint
export async function POST(request) {
	try {
		const body = await request.json();
		const { userInfo } = body;

		// Validate required fields
		if (!userInfo || !userInfo.problem || !userInfo.concern) {
			return NextResponse.json(
				{ error: "缺少必要的用戶資訊" },
				{ status: 400 }
			);
		}

		// Generate AI-powered solution
		const solution = await generatePersonalizedSolution(userInfo);

		return NextResponse.json({
			success: true,
			solution: solution,
		});
	} catch (error) {
		console.error("Question Focus Analysis API Error:", error);
		return NextResponse.json(
			{
				error: "分析服務暫時不可用，請稍後再試",
				fallback: true,
			},
			{ status: 500 }
		);
	}
}
