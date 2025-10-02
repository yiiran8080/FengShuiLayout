// Set API timeout to 60 seconds for this route
export const maxDuration = 60;

export async function POST(req) {
	try {
		const { userInfo } = await req.json();

		if (!userInfo) {
			return Response.json(
				{ error: "Missing user information" },
				{ status: 400 }
			);
		}

		const { concern, birthday, gender, time } = userInfo;

		// Enhanced prompt for comprehensive Season analysis based on 八字
		const prompt = `你是專業的八字命理分析師。請根據用戶的八字信息進行個人化的關鍵季節分析：

用戶八字信息：
- 生日：${birthday}
- 性別：${gender}
- 時間：${time}
- 關注領域：${concern}

請針對用戶的具體八字和${concern}關注領域，提供個人化的關鍵季節分析：

【關鍵季節分析】

#### **春季（寅卯辰月，木旺）**：
根據用戶八字分析春季木旺對其${concern}的具體影響。需包含：
- 八字中木的作用（印星、比劫、食傷等）
- 對${concern}的正面影響和風險
- 具體建議和注意事項（至少3條具體行動建議）
- 辰月的特殊性分析

#### **夏季（巳午未月，火土極旺）**：
分析火土極旺期對用戶${concern}的影響。需包含：
- 火旺對用戶八字的沖克情況
- ${concern}方面的危險和機遇
- 極致防護措施（至少3條具體措施）
- 未月土旺的特殊影響

#### **秋季（申酉戌月，金旺）**：
分析金旺期的影響，分月詳述：
- 申月（金水）的影響和建議
- 酉月（純金）的最佳時機
- 戌月（土金）的注意事項
- 對${concern}的具體操作指導（至少3條建議）

#### **冬季（亥子丑月，水旺）**：
**重點分析**水旺調候期的作用，需詳細說明：
- 亥子月水旺的調候作用對${concern}的具體幫助
- 丑月土金庫的特殊性和機遇
- 對${concern}的修復和規劃建議（至少3條具體建議）
- 來年準備工作的具體指導
- 調候對整體命局的改善作用

參考格式和風格：

財運示例：
春季（寅卯辰月，木旺）：印星旺，利學習、考證、維繫客戶/上司關係以保職位（護正財）。但木生火，野心易膨脹，嚴禁投資、合夥。辰月濕土稍緩燥。

夏季（巳午未月，火土極旺）：凶險巔峰期！巳午月（火）應流年劫財，破財風險最高！務必：極度節儉、只做必要支出、全力保工作、杜絕任何投機/合夥/借貸。未月（土）未戌刑加劇，注意公司/平台內部問題或壓力。

健康示例：
夏季（巳午未月，火土極旺）：生死攸關期！巳午月（火）應流年凶煞，務必：絕對避免：暴曬、高溫作業、劇烈運動、情緒激動、熬夜、辛辣油膩飲食。嚴格執行：防暑降溫（空調、陰涼）、大量補充水分電解質（淡鹽水、清湯）、清淡飲食（粥、瓜果）、保證充足睡眠、隨身攜帶急救藥（如降壓、救心）。

秋季（申酉戌月，金旺）：相對緩和期（金氣壓火）。申月（金水）：最佳調理窗口，利於滋陰潤燥（銀耳、百合）、修復夏季損傷、系統治療慢性病。酉月（純金）：繼續鞏固，重點保養肺與大腸（呼吸、皮膚、排便）。戌月（土金）：金氣漸弱，後半月運支戌土引動未戌刑，注意脾胃保養，防舊病復發。

冬季（亥子丑月，水旺）示例：
亥子月（水旺）：救命調候期！水制火潤燥，最利修復元氣、恢復健康。具體措施：溫補腎陰（黑豆、黑芝麻、山藥）、加強保暖（尤其腰腎）、早睡晚起養精神、溫和運動（太極、散步）。子月調候最佳，心神漸穩、體力恢復。丑月（土庫）：鞏固調候成果，土潤金生、金水相生，利於制定來年健康規劃，可考慮系統體檢、治療根本問題。

工作/事業冬季示例：
亥子月（水旺）：智慧調候期，水為傷官主創新思維，利於深度學習、策略規劃、創新方案研發。具體建議：參加培訓課程提升專業能力、研究市場趨勢制定來年計劃、與同行深度交流拓展視野、整理工作經驗形成知識體系。丑月（土庫）：收藏階段，土印生金，利於知識沉澱、經驗總結、制定長期職業規劃。

要求：
1. 必須基於用戶具體八字進行個人化分析，不可泛泛而談
2. ${concern === "工作" ? "請按事業運勢分析，" : ""}針對${concern}領域提供專業且具體的季節性建議
3. 每個季節必須包含標準格式：#### **季節名（地支月份，五行旺相）**：
4. **特別強調冬季分析必須詳細完整**，至少100字，包含：
   - 具體的八字分析原理
   - 詳細的影響說明
   - 具體可執行的建議措施（至少3條）
   - 月份細分的特殊注意事項
   - 來年準備的具體指導
5. 內容要具體實用，包含具體的行動指導
6. 語言專業但易懂，體現八字命理的專業性
7. 重點突出危險期的防護措施和有利期的把握方法
8. 秋季和冬季需要分月細述（如申月、酉月、戌月的不同特點）
9. 提供具體實例和操作建議，避免空泛的概念性描述
10. **確保四個季節的內容都完整且詳細，特別是冬季部分**

請確保每個季節的分析都足夠詳細深入，為用戶提供真正有價值的個人化指導。`;

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
							role: "user",
							content: prompt,
						},
					],
					stream: false,
					max_tokens: 6000,
					temperature: 0.6,
				}),
			}
		);

		if (!response.ok) {
			console.error(
				"DeepSeek API Error:",
				response.status,
				response.statusText
			);
			return Response.json(
				{ error: "AI analysis service unavailable" },
				{ status: 500 }
			);
		}

		const data = await response.json();
		const aiContent = data.choices?.[0]?.message?.content;

		if (!aiContent) {
			return Response.json(
				{ error: "No analysis generated" },
				{ status: 500 }
			);
		}

		// Parse the AI response to extract structured data
		const parsedContent = parseSeasonContent(aiContent, concern);

		return Response.json({
			success: true,
			analysis: {
				concern: concern,
				content: aiContent,
				parsed: parsedContent,
				timestamp: new Date().toISOString(),
			},
		});
	} catch (error) {
		console.error("Season Analysis Error:", error);
		return Response.json(
			{ error: "Analysis generation failed" },
			{ status: 500 }
		);
	}
}

function parseSeasonContent(content, concern) {
	try {
		// Extract season sections
		const seasons = [
			{
				name: "春季",
				period: "寅卯辰月，木旺",
				icon: "🌸",
				color: "bg-green-500",
				keyPoints: ["印星助學", "寅卯辰月", "木旺"],
			},
			{
				name: "夏季",
				period: "巳午未月，火土極旺",
				icon: "☀️",
				color: "bg-red-500",
				keyPoints: ["極端防護", "巳午未月", "火旺"],
			},
			{
				name: "秋季",
				period: "申酉戌月，金旺",
				icon: "🍂",
				color: "bg-yellow-500",
				keyPoints: ["黃金收穫", "申酉戌月", "金旺"],
			},
			{
				name: "冬季",
				period: "亥子丑月，水旺",
				icon: "❄️",
				color: "bg-blue-500",
				keyPoints: ["黃金修復期", "亥子丑月", "水旺"],
			},
		];

		// Parse content for each season - try multiple formats
		seasons.forEach((season) => {
			let seasonContent = "";

			// Try different patterns that AI might use
			const patterns = [
				// Pattern 1: 【春季（寅卯辰月，木旺）】：
				new RegExp(
					`【${season.name}[^】]*】[：:]?\\s*([\\s\\S]*?)(?=【|####|$)`,
					"g"
				),
				// Pattern 2: **春季（寅卯辰月，木旺）**：
				new RegExp(
					`\\*\\*${season.name}[^*]*\\*\\*[：:]?\\s*([\\s\\S]*?)(?=\\*\\*|####|$)`,
					"g"
				),
				// Pattern 3: #### **春季（寅卯辰月，木旺）**：
				new RegExp(
					`####\\s*\\*\\*${season.name}[^*]*\\*\\*[：:]?\\s*([\\s\\S]*?)(?=####|$)`,
					"g"
				),
				// Pattern 4: 春季（寅卯辰月，木旺）：
				new RegExp(
					`${season.name}（[^）]*）[：:]?\\s*([\\s\\S]*?)(?=(?:春季|夏季|秋季|冬季)（|####|$)`,
					"g"
				),
				// Pattern 5: More flexible - season name followed by content
				new RegExp(
					`${season.name}[^\\n]*[：:]([\\s\\S]*?)(?=(?:春季|夏季|秋季|冬季)|###|$)`,
					"g"
				),
			];

			// Try each pattern until we find substantial content
			for (let pattern of patterns) {
				pattern.lastIndex = 0; // Reset regex
				let match;
				while ((match = pattern.exec(content)) !== null) {
					if (match[1]) {
						let rawContent = match[1].trim();
						// Look for substantial content (more than 50 characters)
						if (rawContent.length > 50) {
							seasonContent = rawContent;
							break;
						}
					}
				}
				if (seasonContent) break;
			}

			// If still no good content, try more aggressive extraction
			if (!seasonContent || seasonContent.length < 50) {
				// Find any occurrence of season name and extract following content
				const flexiblePatterns = [
					new RegExp(
						`${season.name}[^\\n]*\\n([\\s\\S]{50,500}?)(?=(?:春季|夏季|秋季|冬季)|$)`,
						"g"
					),
					new RegExp(
						`${season.name}[^。]*。([\\s\\S]{30,400}?)(?=(?:春季|夏季|秋季|冬季)|$)`,
						"g"
					),
				];

				for (let pattern of flexiblePatterns) {
					pattern.lastIndex = 0;
					let match;
					while ((match = pattern.exec(content)) !== null) {
						if (match[1] && match[1].trim().length > 30) {
							seasonContent = match[1].trim();
							break;
						}
					}
					if (seasonContent) break;
				}
			}

			// Clean up the content if found
			if (seasonContent && seasonContent.length > 20) {
				// Remove formatting and clean up
				seasonContent = seasonContent
					.replace(/^[：:]\s*/, "") // Remove leading colon
					.replace(/^[。．]\s*/, "") // Remove leading period
					.replace(/【[^】]*】/g, "") // Remove bracketed headers
					.replace(/\*\*/g, "") // Remove bold markers
					.replace(/####/g, "") // Remove markdown headers
					.replace(/^\s*[-•]\s*/gm, "") // Remove bullet points at line start
					.replace(/\s*。\s*(?=。)/g, "") // Remove duplicate periods
					.replace(/\n\s*\n/g, "\n") // Collapse multiple newlines
					.trim();

				// Don't cut off content - let the frontend handle the display
				// Just ensure it's reasonable length (under 1000 chars for performance)
				if (seasonContent.length > 1000) {
					// Find a good breaking point near 800 characters
					const sentences = seasonContent.split(/[。！？]/);
					let truncated = "";
					for (let sentence of sentences) {
						if (truncated.length + sentence.length < 800) {
							truncated += sentence + "。";
						} else {
							break;
						}
					}
					seasonContent =
						truncated || seasonContent.substring(0, 800) + "...";
				}

				season.content = seasonContent;
			} else {
				// Use enhanced fallback content based on concern
				season.content = getFallbackSeasonContent(season.name, concern);
			}
		});

		return {
			seasons: seasons,
			fullContent: content,
			title: `關鍵季節&注意事項 (${concern}指南)`,
		};
	} catch (error) {
		console.error("Season content parsing error:", error);
		return getFallbackSeasonData(concern);
	}
}

function getFallbackSeasonContent(seasonName, concern) {
	const fallbacks = {
		財運: {
			春季: "印星旺，利學習、考證、維繫客戶/上司關係以保職位（護正財）。但木生火，野心易膨脹，嚴禁投資、合夥。辰月濕土稍緩燥。",
			夏季: "凶險巔峰期！巳午月（火）應流年劫財，破財風險最高！務必：極度節儉、只做必要支出、全力保工作、杜絕任何投機/合夥/借貸。",
			秋季: "一年中相對最利於財務操作的窗口（金氣壓火）。申月短暫緩解，酉月護財最佳，戌月謹慎處理財務。",
			冬季: "調候關鍵期，大局趨穩。利於覆盤、制定保守財務計畫、修復信用、低調儲蓄。子月最佳調候月，壓力緩解。",
		},
		健康: {
			春季: "木主肝膽，春季養肝正當時。適合戶外運動、早起鍛煉。注意情緒調節，避免肝氣鬱結。飲食宜清淡，多吃綠色蔬菜。",
			夏季: "生死攸關期！務必絕對避免：暴曬、高溫作業、劇烈運動、情緒激動、熬夜、辛辣油膩飲食。嚴格執行防暑降溫。",
			秋季: "相對緩和期（金氣壓火）。申月最佳調理窗口，利於滋陰潤燥。酉月繼續鞏固，重點保養肺與大腸。戌月注意脾胃保養。",
			冬季: "救命調候期！水旺制火潤燥。亥子月滋補腎陰最佳時機，穩固心神，修復元氣。",
		},
		事業: {
			春季: "印星助力，利於學習提升、建立專業形象、維護職場關係。木氣生發，適合制定年度計劃，但忌急躁冒進。",
			夏季: "火氣過旺易衝動，職場中需格外謹慎。避免與同事發生衝突，控制情緒表達。此期間不宜跳槽或重大職業變動。",
			秋季: "金氣收斂，適合總結工作成果，整理職業規劃。可考慮技能提升、資格認證。是展示專業能力的好時機。",
			冬季: "水主智慧，適合深度學習、研究規劃。可制定來年職業發展計劃，建立長期目標。是積蓄能量的重要時期。",
		},
		感情: {
			春季: "木氣生發，感情萌芽的好時機。單身者易遇良緣，有伴者關係升溫。但需注意不要過於理想化，保持現實期待。",
			夏季: "火氣旺盛易衝動，感情中容易發生爭執。需控制脾氣，避免因小事傷害感情。此期間不宜做重大感情決定。",
			秋季: "金氣收斂，適合深化感情關係。可考慮訂婚、結婚等重要決定。是檢視感情關係、做出承諾的好時機。",
			冬季: "水主情感深度，適合培養感情深度。可透過深度溝通增進理解，規劃未來。是修復關係、重建信任的時期。",
		},
	};

	return (
		fallbacks[concern]?.[seasonName] ||
		`${seasonName}期間請根據個人情況謹慎分析。`
	);
}

function getFallbackSeasonData(concern) {
	const seasons = [
		{
			name: "春季",
			period: "寅卯辰月，木旺",
			icon: "🌸",
			color: "bg-green-500",
			content: getFallbackSeasonContent("春季", concern),
			keyPoints: ["印星助學", "寅卯辰月", "木旺"],
		},
		{
			name: "夏季",
			period: "巳午未月，火土極旺",
			icon: "☀️",
			color: "bg-red-500",
			content: getFallbackSeasonContent("夏季", concern),
			keyPoints: ["極端防護", "巳午未月", "火旺"],
		},
		{
			name: "秋季",
			period: "申酉戌月，金旺",
			icon: "🍂",
			color: "bg-yellow-500",
			content: getFallbackSeasonContent("秋季", concern),
			keyPoints: ["黃金收穫", "申酉戌月", "金旺"],
		},
		{
			name: "冬季",
			period: "亥子丑月，水旺",
			icon: "❄️",
			color: "bg-blue-500",
			content: getFallbackSeasonContent("冬季", concern),
			keyPoints: ["黃金修復期", "亥子丑月", "水旺"],
		},
	];

	return {
		seasons: seasons,
		title: `關鍵季節&注意事項 (${concern}指南)`,
		fullContent: "使用基礎季節分析。",
	};
}
