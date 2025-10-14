export async function POST(req) {
	try {
		const {
			user1Info,
			user2Info,
			currentYear,
			currentDate,
			concern = "感情",
		} = await req.json();

		if (!user1Info || !user2Info) {
			return Response.json(
				{ error: "Missing couple information" },
				{ status: 400 }
			);
		}

		const { birthday: birthday1, gender: gender1, name: name1 } = user1Info;
		const { birthday: birthday2, gender: gender2, name: name2 } = user2Info;

		// Get current date information for season prioritization
		const currentMonth = currentDate?.month || new Date().getMonth() + 1;
		const currentSeasonName = currentDate?.currentSeason || "秋季";
		const relevantSeasons = currentDate?.relevantSeasons || [
			"秋季",
			"冬季",
			"春季",
			"夏季",
		];

		// Enhanced date-aware prompt for couple season analysis
		const prompt = `你是專業的八字命理分析師。請根據夫妻雙方的八字信息進行夫妻感情關鍵季節分析：

夫妻八字信息：
- ${name1}生日：${birthday1}，性別：${gender1}
- ${name2}生日：${birthday2}，性別：${gender2}
- 分析年份：${currentYear}
- 當前時間：${currentYear}年${currentMonth}月，當前季節：${currentSeasonName}
- 關注領域：夫妻${concern}

**重要提示：當前是${currentSeasonName}（${currentMonth}月），請優先分析當前季節和未來季節，避免過度分析已過季節。按以下順序分析：${relevantSeasons.join("→")}**

請針對夫妻雙方的具體八字合盤和夫妻${concern}關注領域，提供個人化的夫妻關鍵季節分析。**每個季節的內容長度要均衡，每季節約100字左右**：

【夫妻關鍵季節分析】

#### **春季（寅卯辰月，木旺）**：
根據夫妻雙方八字合盤分析春季木旺對夫妻${concern}的具體影響。需包含：
- 雙方八字中木的作用如何影響夫妻關係
- 對夫妻${concern}的正面影響和潛在風險
- 具體夫妻相處建議（2-3條具體行動建議）
- 春季夫妻互動重點和注意事項
**內容長度：約100字**

#### **夏季（巳午未月，火土極旺）**：
分析火土極旺期對夫妻${concern}的影響。需包含：
- 火旺對夫妻雙方八字的影響和夫妻關係變化
- 夫妻${concern}方面的危險期預警
- 夫妻防護措施和化解方法（2-3條具體措施）
- 夏季夫妻衝突預防和情緒管理建議
**內容長度：約100字**

#### **秋季（申酉戌月，金旺）**：
分析金旺期對夫妻關係的影響。需包含：
- 金旺對夫妻雙方的影響和相處模式
- 秋季夫妻關係的機遇和挑戰
- 夫妻關係調和建議（2-3條具體建議）
- 秋季夫妻共同成長和感情鞏固方法
**內容長度：約100字**

#### **冬季（亥子丑月，水旺）**：
分析水旺調候期對夫妻關係的作用。需包含：
- 水旺的調候作用對夫妻${concern}的幫助
- 冬季夫妻關係修復的機遇
- 夫妻感情修復和規劃建議（2-3條具體建議）
- 冬季夫妻深度溝通和來年準備工作
**內容長度：約100字**

參考格式和風格：

夫妻感情示例：
春季（寅卯辰月，木旺）：木主生發，夫妻感情萌芽期。${name1}的印星得助，利於理解包容；${name2}的比劫旺盛，需注意情緒表達。夫妻宜：多戶外活動增進感情、開放溝通表達想法、共同制定年度計劃。辰月濕土調和，適合深入了解彼此內心。

夏季（巳午未月，火土極旺）：夫妻感情考驗期！火旺易引發爭執，雙方情緒激動。務必：控制脾氣避免激烈爭吵、給彼此適當空間冷靜、重大決定延後討論、多關注對方優點。未月土旺加劇，特別注意家庭經濟壓力對感情的影響。

秋季（申酉戌月，金旺）：夫妻感情收穫期。申月（金水）：最佳溝通窗口，利於深度交流、化解誤會、重建信任。酉月（純金）：感情鞏固期，適合做重要承諾、規劃未來、增進親密度。戌月（土金）：注意家庭責任分工，避免因瑣事影響感情。

冬季（亥子丑月，水旺）：夫妻感情深化期！水主情感深度，最利修復感情裂痕、增進理解。亥子月調候最佳：加強情感交流（深夜談心、分享內心）、培養共同興趣愛好、規劃未來藍圖、修復過往傷害。丑月土庫收藏，適合總結感情經驗、制定長期感情目標、為來年感情發展奠定基礎。

夫妻婚姻示例：
春季（寅卯辰月，木旺）：婚姻新生期，木氣生發利於婚姻關係更新。雙方印星互助，利於相互支持、共同成長。建議：重新審視婚姻目標、增加夫妻共同活動、改善溝通方式。辰月適合處理婚姻中的實際問題。

夏季（巳午未月，火土極旺）：婚姻危機期！火旺沖克，易發生婚姻衝突。務必：避免提及敏感話題、暫緩重大婚姻決定、尋求專業婚姻諮詢、加強家庭責任感。未月注意經濟壓力對婚姻的影響。

要求：
1. 必須基於夫妻雙方具體八字合盤進行個人化分析，體現夫妻八字的相互作用
2. 針對夫妻${concern}領域提供專業且具體的季節性建議
3. 每個季節必須包含標準格式：#### **季節名（地支月份，五行旺相）**：
4. **四個季節的內容長度要均衡**，每季節約100字左右，包含：
   - 具體的夫妻八字合盤分析要點
   - 夫妻關係影響的重點說明
   - 具體可執行的夫妻相處建議（2-3條）
   - 該季節的特殊注意事項
5. 內容要具體實用，包含具體的夫妻互動指導
6. 語言專業but易懂，體現八字合盤命理的專業性
7. 重點突出夫妻關係危險期的防護措施和有利期的把握方法
8. 提供具體實例和操作建議，避免空泛的概念性描述
9. **確保四個季節的內容都完整且長度相近，平衡詳細程度**
10. 分析中要體現${name1}和${name2}的個性化特點和相處模式
11. 每季節控制在80-120字範圍內，保持內容密度一致

請確保每個季節的夫妻分析都足夠詳細深入，為夫妻雙方提供真正有價值的個人化感情經營指導。`;

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
				{ error: "No couple season analysis generated" },
				{ status: 500 }
			);
		}

		// Parse the AI response to extract structured data
		const parsedContent = parseCoupleSeasonContent(
			aiContent,
			concern,
			user1Info,
			user2Info,
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
		console.error("Couple Season Analysis Error:", error);
		return Response.json(
			{ error: "Couple season analysis generation failed" },
			{ status: 500 }
		);
	}
}

function parseCoupleSeasonContent(
	content,
	concern,
	user1Info,
	user2Info,
	currentSeasonName = "秋季"
) {
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
				keyPoints: ["感情萌芽", "寅卯辰月", "木旺生發"],
			},
			{
				name: "夏季",
				period: "巳午未月，火土極旺",
				icon: "☀️",
				color: "bg-red-500",
				keyPoints: ["情感考驗", "巳午未月", "火旺沖克"],
			},
			{
				name: "秋季",
				period: "申酉戌月，金旺",
				icon: "🍂",
				color: "bg-yellow-500",
				keyPoints: ["感情收穫", "申酉戌月", "金旺調和"],
			},
			{
				name: "冬季",
				period: "亥子丑月，水旺",
				icon: "❄️",
				color: "bg-blue-500",
				keyPoints: ["感情修復", "亥子丑月", "水旺調候"],
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
						`${originalSeasonName}[^\\n]*\\n([\\s\\S]{50,400}?)(?=(?:春季|夏季|秋季|冬季)|$)`,
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

				// Allow full content display without truncation
				if (seasonContent.length < 200) {
					// If content is too short, try to expand with fallback
					const fallbackContent = getCoupleFallbackSeasonContent(
						originalSeasonName,
						concern,
						user1Info,
						user2Info
					);
					// Combine original and fallback if needed - allowing full content
					if (
						seasonContent.length < 150 &&
						fallbackContent.length > 100
					) {
						seasonContent = seasonContent + " " + fallbackContent;
					}
				}

				season.content = seasonContent;
			} else {
				// Use enhanced fallback content for couples
				season.content = getCoupleFallbackSeasonContent(
					originalSeasonName,
					concern,
					user1Info,
					user2Info
				);
			}
		});

		return {
			seasons: seasons,
			fullContent: content,
			title: `夫妻關鍵季節&注意事項 (${concern}指南)`,
		};
	} catch (error) {
		console.error("Couple season content parsing error:", error);
		return getCoupleFallbackSeasonData(concern, user1Info, user2Info);
	}
}

function getCoupleFallbackSeasonContent(
	seasonName,
	concern,
	user1Info,
	user2Info
) {
	const name1 = user1Info.name || "男方";
	const name2 = user2Info.name || "女方";

	const fallbacks = {
		感情: {
			春季: `${name1}與${name2}在春季木旺期間，感情迎來新的萌芽機會。木主生發，利於雙方開放溝通、增進理解。建議：1）多進行戶外活動增進感情，2）共同制定年度感情目標，3）辰月適合深入了解彼此內心世界。春季宜主動表達關愛，為全年感情發展奠定基礎。`,
			夏季: `${name1}與${name2}在夏季需特別注意情緒管理。火旺易引發爭執，雙方應保持理性。建議：1）控制脾氣避免激烈爭吵，2）給彼此適當空間冷靜思考，3）重大決定延後到秋季討論。未月注意家庭經濟壓力對感情的影響，多關注對方優點維護感情穩定。`,
			秋季: `${name1}與${name2}迎來感情收穫期。金氣收斂利於感情關係穩定發展。建議：1）申月適合深度交流化解前期誤會，2）酉月感情鞏固可做重要承諾規劃未來，3）戌月注意家庭責任分工避免摩擦。秋季是感情關係成熟和收穫的最佳時機，把握機會鞏固感情基礎。`,
			冬季: `${name1}與${name2}進入感情深化黃金期！水旺調候最利修復感情裂痕。建議：1）亥子月加強情感交流培養共同興趣，2）共同規劃未來藍圖制定長期目標，3）丑月總結感情經驗為來年發展做準備。冬季深度溝通效果最佳，是修復關係和增進理解的關鍵時期。`,
		},
		婚姻: {
			春季: `${name1}與${name2}迎來婚姻新生期，木氣生發利於婚姻關係更新發展。建議：1）重新審視婚姻目標調整相處模式，2）增加夫妻共同活動增進親密度，3）改善溝通方式提升理解品質。辰月適合處理婚姻中的實際問題，為全年婚姻和諧奠定基礎。`,
			夏季: `${name1}與${name2}面臨婚姻考驗期。火旺沖克易發生衝突，需要謹慎應對。建議：1）避免討論敏感話題減少爭執，2）暫緩重大婚姻決定等待理性時機，3）加強家庭責任感共同面對挑戰。未月特別注意經濟壓力對婚姻和諧的影響，多展現關愛支持。`,
			秋季: `${name1}與${name2}進入婚姻穩定期。金氣收斂有助婚姻關係成熟發展。建議：1）申月利於解決婚姻中的實際問題，2）酉月適合鞏固夫妻關係做出長期承諾，3）戌月注意家務分工維護家庭和諧。秋季是婚姻關係鞏固和升華的最佳時機。`,
			冬季: `${name1}與${name2}迎來婚姻修復最佳期！水旺調候利於重建和諧夫妻關係。建議：1）制定夫妻溝通規則改善互動品質，2）重新分配家庭責任實現公平合理，3）規劃婚姻長期目標加強親密關係。丑月總結婚姻經驗制定來年發展計劃，為婚姻長久幸福做準備。`,
		},
	};

	return (
		fallbacks[concern]?.[seasonName] ||
		`${name1}與${name2}在${seasonName}期間請根據雙方具體情況謹慎分析夫妻關係發展。建議加強溝通理解，共同面對季節性的關係挑戰，把握有利時機促進感情發展。`
	);
}

function getCoupleFallbackSeasonData(concern, user1Info, user2Info) {
	const name1 = user1Info.name || "男方";
	const name2 = user2Info.name || "女方";

	const seasons = [
		{
			name: "春季",
			period: "寅卯辰月，木旺",
			icon: "🌸",
			color: "bg-green-500",
			content: getCoupleFallbackSeasonContent(
				"春季",
				concern,
				user1Info,
				user2Info
			),
			keyPoints: ["感情萌芽", "寅卯辰月", "木旺生發"],
		},
		{
			name: "夏季",
			period: "巳午未月，火土極旺",
			icon: "☀️",
			color: "bg-red-500",
			content: getCoupleFallbackSeasonContent(
				"夏季",
				concern,
				user1Info,
				user2Info
			),
			keyPoints: ["情感考驗", "巳午未月", "火旺沖克"],
		},
		{
			name: "秋季",
			period: "申酉戌月，金旺",
			icon: "🍂",
			color: "bg-yellow-500",
			content: getCoupleFallbackSeasonContent(
				"秋季",
				concern,
				user1Info,
				user2Info
			),
			keyPoints: ["感情收穫", "申酉戌月", "金旺調和"],
		},
		{
			name: "冬季",
			period: "亥子丑月，水旺",
			icon: "❄️",
			color: "bg-blue-500",
			content: getCoupleFallbackSeasonContent(
				"冬季",
				concern,
				user1Info,
				user2Info
			),
			keyPoints: ["感情修復", "亥子丑月", "水旺調候"],
		},
	];

	return {
		seasons: seasons,
		title: `夫妻關鍵季節&注意事項 (${concern}指南)`,
		fullContent: `${name1}與${name2}的夫妻季節分析基礎版本。`,
	};
}
