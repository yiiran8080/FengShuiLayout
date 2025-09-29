import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
	try {
		const { user1Info, user2Info, currentYear, concern } =
			await request.json();

		// Validate input
		if (!user1Info?.birthday || !user2Info?.birthday) {
			return NextResponse.json(
				{
					success: false,
					error: "Missing birth information for both partners",
				},
				{ status: 400 }
			);
		}

		// Parse birth dates for both partners
		const user1Date = new Date(user1Info.birthday);
		const user2Date = new Date(user2Info.birthday);

		if (isNaN(user1Date.getTime()) || isNaN(user2Date.getTime())) {
			return NextResponse.json(
				{ success: false, error: "Invalid birth dates provided" },
				{ status: 400 }
			);
		}

		// Build detailed prompt for couple core suggestion analysis
		const prompt = `
作為專業的夫妻八字合盤分析師，請為以下夫妻提供詳細的感情開運建議：

## 夫妻基本資訊
- ${user1Info.name || "男方"}: ${user1Info.birthday} (${user1Info.gender === "female" ? "女性" : "男性"})
- ${user2Info.name || "女方"}: ${user2Info.birthday} (${user2Info.gender === "female" ? "女性" : "男性"})
- 分析年份: ${currentYear}年
- 關注領域: ${concern || "感情"}

## 分析要求
請從以下四個維度進行夫妻合盤分析，每個維度提供詳細的實用建議：

### 一、關係發展建議
請按照以下格式提供詳細分析：

**具体分析：**
根據男方和女方的八字排盤，分析雙方日主、月令、流年的相互關係。詳細說明土生金、五行相生相剋關係，以及${currentYear}年流年對雙方感情的影響。

**行动建议：**
1. 共同制定年度计划：提供具體的時間點（如立春後）和行動方案
2. 定期"土壤"约会：根據男女雙方五行屬性，建議具體活動類型

**时机与方法：**
指出最佳感情升溫時機（具體到農曆月份），說明節奏安排的原則。

**注意事项：**
分析可能出現問題的時間點（如農曆七月），提供預防措施。

### 二、溝通建議  
請按照以下格式提供溝通建議：

**男方溝通特質分析：**
男方[五行屬性]性格特點，溝通風格描述（如：土性沉穩擅長傾聽，善於包容）

**女方溝通特質分析：**  
女方[五行屬性]性格特點，溝通風格描述（如：火性直率需要表達空間，情感豐富）

**建議採用溝通方法：**
具體的溝通技巧和方法，如「土火相生溝通法」等

**最佳溝通時辰：**
具體時間建議（如：巳時9-11時、午時11-13時）

**可能出現的溝通障礙：**
分析潛在問題和解決方案

**可採用五行轉化法：**
使用五行理論的具體轉化建議

### 三、能量提升建議
**男方提升建議：**
行動建議：列出2-3項具體的日常活動建議（如運動時間、興趣愛好等）
開運物：推薦適合的飾品或物品

**女方提升建議：**
行動建議：列出2-3項具體的日常活動建議（如冥想時間、技能學習等）
開運物：推薦適合的飾品或物品

**共同能量場強化：**
每週儀式：建議一個固定的共同活動

**場合色彩搭配：**
請嚴格按照以下格式輸出，確保包含所有3個場合：

重要商務場合：
- 男方：深藍色西裝配白色襯衫
- 女方：米色套裝配珍珠首飾  
- 能量作用：增強專業形象和自信心

社交聚會：
- 男方：淺綠色休閒裝配棕色皮鞋
- 女方：淡紫色連衣裙配銀色飾品
- 能量作用：提升人際關係和社交魅力

居家生活：
- 男方：藍色居家服配竹製拖鞋
- 女方：粉色家居服配絲綢髮帶
- 能量作用：營造和諧溫馨的家庭氛圍

**重要：請務必完整輸出上述場合色彩搭配部分，不可省略任何場合。**

### 四、感情關係禁忌

**重要格式說明：感情關係禁忌部分必須嚴格按照以下格式輸出，不可使用markdown標記（#, *, -, •等），每行一個標題或內容：**

感情關係禁忌
溝通禁忌
女方忌用
具體忌用語言或行為（基於八字分析）

男方忌用
具體忌用語言或行為（基於八字分析）

行為禁忌
春季
春季時節具體避免的行為

夏季
夏季時節具體避免的行為

戊月
戊月期間具體注意事項

環境禁忌
約會避開
約會時應避開的場所或環境

同房禁忌
同房時應注意的時辰或禁忌

每月初
化解方法：具體的化解建議和方法

**請務必完全按照上述格式輸出，不可添加任何markdown符號或其他格式標記**

## 輸出格式要求
請確保每個部分內容充實（200-400字），**特別是場合色彩搭配部分必須完整包含所有3個場合的詳細建議**。

請嚴格按照以下結構輸出：

### 一、關係發展建議
（此部分省略詳細說明）

### 二、溝通建議  
（此部分省略詳細說明）

### 三、能量提升建議

**男方提升建議：**
行動建議：
• 具體建議1
• 具體建議2

開運物：
具體物品推薦

**女方提升建議：**
行動建議：  
• 具體建議1
• 具體建議2

開運物：
具體物品推薦

**共同能量場強化：**
每週儀式：具體儀式描述

**場合色彩搭配：**

重要商務場合：
- 男方：具體色彩建議
- 女方：具體色彩建議
- 能量作用：具體說明

社交聚會：
- 男方：具體色彩建議
- 女方：具體色彩建議
- 能量作用：具體說明

居家生活：
- 男方：具體色彩建議
- 女方：具體色彩建議
- 能量作用：具體說明

### 四、感情關係禁忌

感情關係禁忌
溝通禁忌
女方忌用
具體忌用語言或行為（基於八字分析）

男方忌用
具體忌用語言或行為（基於八字分析）

行為禁忌
春季
春季時節具體避免的行為

夏季
夏季時節具體避免的行為

戊月
戊月期間具體注意事項

環境禁忌
約會避開
約會時應避開的場所或環境

同房禁忌
同房時應注意的時辰或禁忌

每月初
化解方法：具體的化解建議和方法

請確保分析內容：
- 基於八字五行理論和具體排盤
- 針對夫妻關係特點
- 提供實用可行的建議
- 語言溫和正面
- 結合${currentYear}年流年運勢
- **必須包含完整的場合色彩搭配表格，不可省略**

**重要：感情關係禁忌部分格式要求**
- 必須包含完整的「溝通禁忌」「行為禁忌」「環境禁忌」三個主要部分
- 每個部分都要有相應的子分類和具體內容
- 絕對不可使用markdown格式（如#, *, -, •等符號）
- 每行只包含一個標題或一段內容
- 標題獨占一行，內容獨占一行
- 格式必須與提供的範例完全一致

夫妻箴言：請在最後提供一句適合這對夫妻的感情箴言。
`;

		// Call DeepSeek API
		const deepSeekResponse = await fetch(
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
								"你是一位專業的夫妻八字合盤分析師，擅長提供感情開運建議。請基於中國傳統八字命理學，為夫妻提供詳細的關係發展指導。特別重要：在輸出「感情關係禁忌」部分時，必須嚴格按照用戶提供的格式要求，不可使用任何markdown符號，每行只包含一個標題或內容，確保格式完全符合解析需求。",
						},
						{
							role: "user",
							content: prompt,
						},
					],
					max_tokens: 2500,
					temperature: 0.7,
				}),
			}
		);

		if (!deepSeekResponse.ok) {
			throw new Error(`DeepSeek API error: ${deepSeekResponse.status}`);
		}

		const deepSeekData = await deepSeekResponse.json();
		const analysis = deepSeekData.choices[0].message.content;

		// Structure the response
		const analysisResult = {
			content: analysis,
			timestamp: new Date().toISOString(),
			user1Info: {
				name: user1Info.name || "男方",
				birthday: user1Info.birthday,
				gender: user1Info.gender,
			},
			user2Info: {
				name: user2Info.name || "女方",
				birthday: user2Info.birthday,
				gender: user2Info.gender,
			},
			currentYear,
			concern,
			analysisType: "couple-core-suggestion",
		};

		return NextResponse.json({
			success: true,
			analysis: analysisResult,
			message: "Couple core suggestion analysis completed successfully",
		});
	} catch (error) {
		console.error("Couple core suggestion analysis API error:", error);

		return NextResponse.json(
			{
				success: false,
				error:
					error.message ||
					"Internal server error during couple analysis",
				details:
					process.env.NODE_ENV === "development"
						? error.stack
						: undefined,
			},
			{ status: 500 }
		);
	}
}
