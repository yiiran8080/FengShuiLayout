// Set API timeout to 120 seconds for this route to handle heavy server load
export const maxDuration = 120;

export async function POST(req) {
	try {
		const { userInfo, currentDate } = await req.json();

		if (!userInfo) {
			return Response.json(
				{ error: "Missing user information" },
				{ status: 400 }
			);
		}

		const { concern, birthday, gender, time } = userInfo;

		// Get current date information
		const currentYear = currentDate?.year || new Date().getFullYear();
		const currentMonth = currentDate?.month || new Date().getMonth() + 1;
		const currentSeasonName = currentDate?.currentSeason || "秋季";
		const relevantSeasons = currentDate?.relevantSeasons || [
			"秋季",
			"冬季",
			"春季",
			"夏季",
		];
		const isLatePart = currentDate?.isLatePart || false;

		// Create season analysis sections
		const seasonPeriods = {
			春季: "寅卯辰月，木旺",
			夏季: "巳午未月，火土極旺",
			秋季: "申酉戌月，金旺",
			冬季: "亥子丑月，水旺",
		};

		const createSeasonSection = (season, index) => {
			const isCurrentSeason = season === currentSeasonName;
			const priority = isCurrentSeason
				? "【當前季節 - 立即行動】"
				: index === 0
					? "【即將來臨】"
					: "【未來參考】";

			let focus = "";
			switch (season) {
				case "春季":
					focus = `八字中木的作用（印星、比劫、食傷等）、對${concern}的正面影響和風險、具體建議和注意事項（至少3條具體行動建議）、辰月的特殊性分析`;
					break;
				case "夏季":
					focus = `火旺對用戶八字的沖克情況、${concern}方面的危險和機遇、極致防護措施（至少3條具體措施）、未月土旺的特殊影響`;
					break;
				case "秋季":
					focus = `申月（金水）的影響和建議、酉月（純金）的最佳時機、戌月（土金）的注意事項、對${concern}的具體操作指導（至少3條建議）`;
					break;
				case "冬季":
					focus = `亥子月水旺的調候作用對${concern}的具體幫助、丑月土金庫的特殊性和機遇、對${concern}的修復和規劃建議（至少3條具體建議）、來年準備工作的具體指導、調候對整體命局的改善作用`;
					break;
			}

			let section = `#### **${priority} ${season}（${seasonPeriods[season]}）**：\n根據用戶八字分析${season}對其${concern}的具體影響。需包含：\n- ${focus}`;

			if (isCurrentSeason) {
				section += `\n- **當前${currentMonth}月${isLatePart ? "下旬" : "上旬"}的緊急注意事項**\n- **本月剩餘時間的具體行動計劃**`;
			}

			return section;
		};

		const seasonSections = relevantSeasons
			.map(createSeasonSection)
			.join("\n\n");

		// Enhanced prompt for comprehensive Season analysis based on 八字
		const prompt = `你是資深八字命理分析師。請為用戶生成詳細的四季運勢分析：

用戶信息：
- 生日：${birthday}
- 性別：${gender} 
- 時間：${time}
- 關注領域：${concern}

當前時間：${currentYear}年${currentMonth}月（${currentSeasonName}）

分析要求：
1. **季節順序**：按當前季節開始，依次分析四季（${relevantSeasons.join(" → ")}）
2. **內容深度**：每季節120-160字的深度分析（平衡品質與效能）
3. **格式標準**：#### **季節名【狀態標籤】**（月份，五行特性）：詳細分析內容
4. **具體建議**：每季節提供4-6個可執行的具體建議
5. **時間精確**：提及具體月份的重點時期和關鍵節氣

**分析重點：**
- 基於用戶八字五行分析該季節的影響
- 針對${concern}領域的具體影響和對策
- 詳細的時間節點建議（如"申月上旬"、"秋分前後"等）
- 具體的行動方案和禁忌事項
- 傳統節氣與現代實踐的結合建議

**特別要求：**
- 當前季節${currentSeasonName}需要額外詳細，包含"本月剩餘時間的緊急行動計劃"
- 每個建議都要具體可操作，避免空泛描述
- 結合五行生剋理論深度解析
- 使用專業術語但保持易懂性
- 重點突出季節轉換的關鍵時機

請嚴格按照格式生成完整的四季分析，確保內容豐富實用。`;

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
					max_tokens: 2000, // Optimized for server performance under load
					temperature: 0.5, // More consistent responses for production
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
		const parsedContent = parseSeasonContent(
			aiContent,
			concern,
			currentSeasonName
		);

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

function parseSeasonContent(content, concern, currentSeasonName = "秋季") {
	try {
		// Get season context for time-aware content
		const getSeasonContext = (season) => {
			if (season === currentSeasonName) {
				return "【當前季節】";
			} else {
				return "【未來參考】";
			}
		};

		// Extract season sections with time context
		const baseSeasonsData = [
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

		// Reorder seasons: current first, then chronological future seasons
		const currentIndex = baseSeasonsData.findIndex(
			(s) => s.name === currentSeasonName
		);
		const orderedSeasonsData =
			currentIndex >= 0
				? [
						...baseSeasonsData.slice(currentIndex),
						...baseSeasonsData.slice(0, currentIndex),
					]
				: baseSeasonsData;

		// Add time context to season names
		const seasons = orderedSeasonsData.map((season) => ({
			...season,
			name: season.name + getSeasonContext(season.name),
		}));

		// Parse content for each season - try multiple formats
		seasons.forEach((season) => {
			let seasonContent = "";

			// Use original season name without time context for parsing
			const originalSeasonName = season.name.replace(/【[^】]*】/, "");

			// Try different patterns that AI might use
			const patterns = [
				// Pattern 1: 【春季（寅卯辰月，木旺）】：
				new RegExp(
					`【${originalSeasonName}[^】]*】[：:]?\\s*([\\s\\S]*?)(?=【|####|$)`,
					"g"
				),
				// Pattern 2: **春季（寅卯辰月，木旺）**：
				new RegExp(
					`\\*\\*${originalSeasonName}[^*]*\\*\\*[：:]?\\s*([\\s\\S]*?)(?=\\*\\*|####|$)`,
					"g"
				),
				// Pattern 3: #### **春季（寅卯辰月，木旺）**：
				new RegExp(
					`####\\s*\\*\\*${originalSeasonName}[^*]*\\*\\*[：:]?\\s*([\\s\\S]*?)(?=####|$)`,
					"g"
				),
				// Pattern 4: 春季（寅卯辰月，木旺）：
				new RegExp(
					`${originalSeasonName}（[^）]*）[：:]?\\s*([\\s\\S]*?)(?=(?:春季|夏季|秋季|冬季)（|####|$)`,
					"g"
				),
				// Pattern 5: More flexible - season name followed by content
				new RegExp(
					`${originalSeasonName}[^\\n]*[：:]([\\s\\S]*?)(?=(?:春季|夏季|秋季|冬季)|###|$)`,
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
						`${originalSeasonName}[^\\n]*\\n([\\s\\S]{50,500}?)(?=(?:春季|夏季|秋季|冬季)|$)`,
						"g"
					),
					new RegExp(
						`${originalSeasonName}[^。]*。([\\s\\S]{30,400}?)(?=(?:春季|夏季|秋季|冬季)|$)`,
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

				// Allow full content - the AI should provide comprehensive analysis
				// Only truncate if extremely long (over 2500 characters)
				if (seasonContent.length > 2500) {
					// Find a good breaking point near 2000 characters
					const sentences = seasonContent.split(/[。！？]/);
					let truncated = "";
					for (let sentence of sentences) {
						if (truncated.length + sentence.length < 2000) {
							truncated += sentence + "。";
						} else {
							break;
						}
					}
					seasonContent =
						truncated || seasonContent.substring(0, 2000) + "...";
				}

				season.content = seasonContent;
			} else {
				// Use enhanced fallback content based on concern
				season.content = getFallbackSeasonContent(
					originalSeasonName,
					concern,
					currentSeasonName
				);
			}
		});

		return {
			seasons: seasons,
			fullContent: content,
			title: `關鍵季節&注意事項 (${concern}指南)`,
		};
	} catch (error) {
		console.error("Season content parsing error:", error);
		return getFallbackSeasonData(concern, currentSeasonName);
	}
}

function getFallbackSeasonContent(
	seasonName,
	concern,
	currentSeasonName = "秋季"
) {
	const getSeasonContext = (season) => {
		if (season === currentSeasonName) {
			return "【當前季節】";
		} else {
			return "【未來參考】";
		}
	};

	const fallbacks = {
		財運: {
			春季: `${getSeasonContext("春季")} 印星旺，利學習、考證、維繫客戶/上司關係以保職位（護正財）。但木生火，野心易膨脹，嚴禁投資、合夥。辰月濕土稍緩燥。`,
			夏季: `${getSeasonContext("夏季")} 凶險巔峰期！巳午月（火）應流年劫財，破財風險最高！務必：極度節儉、只做必要支出、全力保工作、杜絕任何投機/合夥/借貸。`,
			秋季: `${getSeasonContext("秋季")} 一年中相對最利於財務操作的窗口（金氣壓火）。申月短暫緩解，酉月護財最佳，戌月謹慎處理財務。`,
			冬季: `${getSeasonContext("冬季")} 調候關鍵期，大局趨穩。利於覆盤、制定保守財務計畫、修復信用、低調儲蓄。子月最佳調候月，壓力緩解。`,
		},
		健康: {
			春季: `${getSeasonContext("春季")} 春季養肝正當時，多進行戶外運動，調節情緒。飲食宜清淡，多吃綠色蔬菜，注意情緒管理。`,
			夏季: `${getSeasonContext("夏季")} 生死攸關期！務必絕對避免：暴曬、高溫作業、劇烈運動、情緒激動、熬夜、辛辣油膩飲食。嚴格執行防暑降溫。`,
			秋季: `${getSeasonContext("秋季")} 相對緩和期（金氣壓火）。申月最佳調理窗口，利於滋陰潤燥。酉月繼續鞏固，重點保養肺與大腸。戌月注意脾胃保養。`,
			冬季: `${getSeasonContext("冬季")} 救命調候期！水旺制火潤燥。亥子月滋補腎陰最佳時機，穩固心神，修復元氣。`,
		},
		事業: {
			春季: `${getSeasonContext("春季")} 印星助力，利於學習提升、建立專業形象、維護職場關係。木氣生發，適合制定年度計劃，但忌急躁冒進。`,
			夏季: `${getSeasonContext("夏季")} 火氣過旺易衝動，職場中需格外謹慎。避免與同事發生衝突，控制情緒表達。此期間不宜跳槽或重大職業變動。`,
			秋季: `${getSeasonContext("秋季")} 金氣收斂，適合總結工作成果，整理職業規劃。可考慮技能提升、資格認證。是展示專業能力的好時機。`,
			冬季: `${getSeasonContext("冬季")} 水主智慧，適合深度學習、研究規劃。可制定來年職業發展計劃，建立長期目標。是積蓄能量的重要時期。`,
		},
		感情: {
			春季: `${getSeasonContext("春季")} 木氣生發，感情萌芽的好時機。單身者易遇良緣，有伴者關係升溫。但需注意不要過於理想化，保持現實期待。`,
			夏季: `${getSeasonContext("夏季")} 火氣旺盛易衝動，感情中容易發生爭執。需控制脾氣，避免因小事傷害感情。此期間不宜做重大感情決定。`,
			秋季: `${getSeasonContext("秋季")} 金氣收斂，適合深化感情關係。可考慮訂婚、結婚等重要決定。是檢視感情關係、做出承諾的好時機。`,
			冬季: `${getSeasonContext("冬季")} 水主情感深度，適合培養感情深度。可透過深度溝通增進理解，規劃未來。是修復關係、重建信任的時期。`,
		},
	};

	return (
		fallbacks[concern]?.[seasonName] ||
		`${seasonName}期間請根據個人情況謹慎分析。`
	);
}

function getFallbackSeasonData(concern, currentSeasonName = "秋季") {
	const seasons = [
		{
			name: "春季",
			period: "寅卯辰月，木旺",
			icon: "🌸",
			color: "bg-green-500",
			content: getFallbackSeasonContent(
				"春季",
				concern,
				currentSeasonName
			),
			keyPoints: ["印星助學", "寅卯辰月", "木旺"],
		},
		{
			name: "夏季",
			period: "巳午未月，火土極旺",
			icon: "☀️",
			color: "bg-red-500",
			content: getFallbackSeasonContent(
				"夏季",
				concern,
				currentSeasonName
			),
			keyPoints: ["極端防護", "巳午未月", "火旺"],
		},
		{
			name: "秋季",
			period: "申酉戌月，金旺",
			icon: "🍂",
			color: "bg-yellow-500",
			content: getFallbackSeasonContent(
				"秋季",
				concern,
				currentSeasonName
			),
			keyPoints: ["黃金收穫", "申酉戌月", "金旺"],
		},
		{
			name: "冬季",
			period: "亥子丑月，水旺",
			icon: "❄️",
			color: "bg-blue-500",
			content: getFallbackSeasonContent(
				"冬季",
				concern,
				currentSeasonName
			),
			keyPoints: ["黃金修復期", "亥子丑月", "水旺"],
		},
	];

	return {
		seasons: seasons,
		title: `關鍵季節&注意事項 (${concern}指南)`,
		fullContent: "使用基礎季節分析。",
	};
}
