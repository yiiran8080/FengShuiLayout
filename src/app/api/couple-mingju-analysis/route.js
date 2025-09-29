import { NextResponse } from "next/server";

export async function POST(request) {
	try {
		const {
			user1Birthday,
			user2Birthday,
			user1Name,
			user2Name,
			concern,
			problem,
			currentYear,
			analysisType,
			prompt,
		} = await request.json();

		console.log("🔮 Couple MingJu Analysis API called with:", {
			user1Birthday,
			user2Birthday,
			user1Name,
			user2Name,
			concern,
			analysisType,
			currentYear,
		});

		// Validate required inputs
		if (!user1Birthday || !user2Birthday || !analysisType || !prompt) {
			return NextResponse.json(
				{ error: "Missing required parameters" },
				{ status: 400 }
			);
		}

		// Prepare the analysis prompt with couple information
		const systemMessage = `你是專業的八字合盤命理大師，精通夫妻配對分析、五行調和、與合盤命理學。請根據提供的雙方生辰八字，提供準確、具體、實用的夫妻合盤分析。

重要要求：
1. 必須使用繁體中文回應
2. 提供具體而非模糊的分析結果
3. 基於真實的八字合盤理論
4. 避免使用"可能"、"或許"等不確定詞彙
5. 確保分析內容實用且有指導意義
6. 嚴格按照指定的格式輸出

分析對象：
男方：${user1Name}，生辰：${user1Birthday}
女方：${user2Name}，生辰：${user2Birthday}
關注領域：${concern}
分析年份：${currentYear}`;

		// Call DeepSeek API for AI analysis
		const aiResponse = await fetch(
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
							content: systemMessage,
						},
						{
							role: "user",
							content: prompt,
						},
					],
					max_tokens: 2000,
					temperature: 0.7,
					stream: false,
				}),
			}
		);

		if (!aiResponse.ok) {
			const errorText = await aiResponse.text();
			console.error(
				"❌ DeepSeek API error:",
				aiResponse.status,
				errorText
			);
			throw new Error(`DeepSeek API error: ${aiResponse.status}`);
		}

		const aiResult = await aiResponse.json();
		console.log("🤖 DeepSeek API response received");

		// Extract the analysis content
		const analysis = aiResult.choices?.[0]?.message?.content;

		if (!analysis || analysis.trim().length === 0) {
			throw new Error("Empty response from AI");
		}

		console.log("✅ Couple MingJu analysis generated successfully");

		return NextResponse.json({
			success: true,
			analysis: analysis.trim(),
			metadata: {
				user1Name,
				user2Name,
				concern,
				analysisType,
				currentYear,
				timestamp: new Date().toISOString(),
			},
		});
	} catch (error) {
		console.error("❌ Couple MingJu Analysis API error:", error);

		// Return fallback content on error
		const fallbackContent = generateFallbackContent(
			request.body?.analysisType || "配對特性",
			request.body?.concern || "感情",
			request.body?.user1Name || "男方",
			request.body?.user2Name || "女方"
		);

		return NextResponse.json({
			success: false,
			analysis: fallbackContent,
			error: error.message,
			fallback: true,
		});
	}
}

function generateFallbackContent(analysisType, concern, user1Name, user2Name) {
	if (analysisType === "配對特性") {
		return `${user1Name}與${user2Name}的八字配對分析：

根據雙方生辰八字，此配對展現出獨特的五行互動格局。雙方在性格特質上既有互補優勢，也存在需要調和的差異。

配對優勢：
• 五行互補：雙方的日干五行形成良性互動，有助於相互支持
• 性格平衡：在處事方式上能夠互相補足，形成穩定的配對基礎

需要注意：
• 溝通調和：不同的表達方式可能需要更多理解和包容
• 節奏協調：在生活步調上需要找到平衡點

調和建議：
建議雙方多關注對方的五行特質，在日常相處中運用相生原理，避免相剋情況。通過適當的風水調節和時機把握，可以增進感情和諧，建立長久穩定的關係。

此配對具有良好的發展潛力，關鍵在於雙方的理解與配合。`;
	} else if (analysisType === "middle") {
		return JSON.stringify(
			{
				合盤核心: {
					主要内容: `${user1Name}與${user2Name}的八字合盤顯示良好的配對基礎`,
					状态列表: [
						"配對強弱：雙方日干形成穩定的相互關係",
						"感情互動：在情感表達上有互補特質",
						"吸引力源：基於五行相生的天然吸引力",
					],
					结论: "整體配對評價為良好，具有發展潛力",
				},
				發展分析: {
					主要分析:
						"雙方的命格配置較為和諧，男方的理性與女方的感性形成良好互補，關係發展呈現穩定上升趨勢。",
					关键问题: {
						问题1: {
							名称: "溝通方式差異",
							解释: "雙方在表達情感的方式上有所不同，需要多一些耐心和理解。",
						},
						问题2: {
							名称: "生活節奏調和",
							解释: "在日常生活安排上需要找到雙方都舒適的平衡點。",
						},
					},
				},
				配對優勢: {
					互动列表: [
						{
							方面: "情感交流",
							特點: "建議多用行動表達關愛，減少語言上的誤解",
						},
						{
							方面: "生活規劃",
							特點: "在重大決定上多商量，發揮各自的優勢特質",
						},
						{
							方面: "相處模式",
							特點: "保持適當的個人空間，同時增進共同興趣",
						},
					],
					格局核心: "互補配對，和諧發展",
				},
			},
			null,
			2
		);
	} else if (analysisType === "right") {
		return JSON.stringify(
			{
				调候核心: {
					五行调节: `${user1Name}需要調和火土之氣，${user2Name}適合平衡金水能量`,
					调候重点:
						"重點在於雙方的五行平衡，建議在季節轉換時特別注意關係調節",
				},
				实用建议: {
					日常调和: [
						"多在自然環境中相處，增進五行和諧",
						"選擇適合的顏色和飾品輔助調候",
						"注意飲食搭配，避免五行相剋的食物組合",
					],
					时机把握: [
						"在吉利的時辰進行重要決定和溝通",
						"利用流年大運的有利時機推進關係發展",
					],
				},
				长期策略: {
					感情发展:
						"建議循序漸進，在穩固關係基礎的同時，規劃未來的共同目標和發展方向。",
					关键节点:
						"特別注意農曆的重要節氣，這些時間點對關係發展有重要影響。",
				},
			},
			null,
			2
		);
	}

	return `分析中...請稍候，正在為您生成專業的夫妻合盤${concern}分析報告。`;
}
