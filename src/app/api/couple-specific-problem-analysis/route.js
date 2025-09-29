import { NextResponse } from "next/server";

export async function POST(request) {
	try {
		const { femaleUser, maleUser, specificProblem } = await request.json();

		// Format birth date for display
		const formatBirthDate = (birthDateTime) => {
			if (!birthDateTime) return "未提供";
			try {
				const date = new Date(birthDateTime);
				return `${date.getFullYear()}年${String(date.getMonth() + 1).padStart(2, "0")}月${String(date.getDate()).padStart(2, "0")}日${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
			} catch (error) {
				return birthDateTime;
			}
		};

		// BaZi calculation functions
		const calculateBaZi = (birthDateTime) => {
			const date = new Date(birthDateTime);
			const year = date.getFullYear();
			const month = date.getMonth() + 1;
			const day = date.getDate();
			const hour = date.getHours();

			// Heavenly Stems (天干)
			const heavenlyStems = [
				"甲",
				"乙",
				"丙",
				"丁",
				"戊",
				"己",
				"庚",
				"辛",
				"壬",
				"癸",
			];
			// Earthly Branches (地支)
			const earthlyBranches = [
				"子",
				"丑",
				"寅",
				"卯",
				"辰",
				"巳",
				"午",
				"未",
				"申",
				"酉",
				"戌",
				"亥",
			];

			// Calculate year pillar (年柱)
			const yearStemIndex = (year - 4) % 10;
			const yearBranchIndex = (year - 4) % 12;
			const yearPillar =
				heavenlyStems[yearStemIndex] + earthlyBranches[yearBranchIndex];

			// Calculate month pillar (月柱) - simplified calculation
			const monthStemIndex = ((year - 4) * 12 + month - 1) % 10;
			const monthBranchIndex = (month + 1) % 12;
			const monthPillar =
				heavenlyStems[monthStemIndex] +
				earthlyBranches[monthBranchIndex];

			// Calculate day pillar (日柱) - simplified calculation
			const daysSinceReference = Math.floor(
				(date - new Date("1900-01-01")) / (1000 * 60 * 60 * 24)
			);
			const dayStemIndex = (daysSinceReference + 9) % 10;
			const dayBranchIndex = (daysSinceReference + 11) % 12;
			const dayPillar =
				heavenlyStems[dayStemIndex] + earthlyBranches[dayBranchIndex];

			// Calculate hour pillar (時柱)
			const hourBranchIndex = Math.floor((hour + 1) / 2) % 12;
			const hourStemIndex = (dayStemIndex * 12 + hourBranchIndex) % 10;
			const hourPillar =
				heavenlyStems[hourStemIndex] + earthlyBranches[hourBranchIndex];

			return {
				year: yearPillar,
				month: monthPillar,
				day: dayPillar,
				hour: hourPillar,
				dayStem: heavenlyStems[dayStemIndex],
				dayBranch: earthlyBranches[dayBranchIndex],
			};
		};

		// Generate BaZi analysis based on actual birth date
		const generateBaZiAnalysis = (birthDateTime, gender) => {
			const baziData = calculateBaZi(birthDateTime);
			const formattedDate = formatBirthDate(birthDateTime);

			// Create pillars array
			const pillars = [
				`年柱-${baziData.year}`,
				`月柱-${baziData.month}`,
				`日柱-${baziData.day}`,
				`時柱-${baziData.hour}`,
			];

			// Create bazi string
			const baziString = `${baziData.year} ${baziData.month} ${baziData.day} ${baziData.hour}`;

			// Generate description based on day master
			const dayMaster = baziData.dayStem;
			const dayBranch = baziData.dayBranch;

			const elementDescriptions = {
				甲: "甲木如大樹，性格正直，具有領導能力",
				乙: "乙木如花草，性格溫和，適應力強",
				丙: "丙火如太陽，性格熱情，充滿活力",
				丁: "丁火如燭光，性格溫暖，富有創造力",
				戊: "戊土如山嶽，性格穩重，值得信賴",
				己: "己土如田園，性格務實，善於包容",
				庚: "庚金如刀劍，性格果斷，意志堅強",
				辛: "辛金如珠寶，性格細膩，追求完美",
				壬: "壬水如江河，性格靈活，智慧深邃",
				癸: "癸水如雨露，性格柔和，富有同情心",
			};

			const description = `日主${dayMaster}${dayBranch.includes("木") ? "木" : dayBranch.includes("火") ? "火" : dayBranch.includes("土") ? "土" : dayBranch.includes("金") ? "金" : "水"}，${elementDescriptions[dayMaster] || "性格獨特，具有獨特的人格魅力"}`;

			return {
				birthDate: formattedDate,
				bazi: baziString,
				description: description,
				pillars: pillars,
			};
		};

		// Calculate real BaZi for both users
		const femaleAnalysis = generateBaZiAnalysis(
			femaleUser.birthDateTime,
			"female"
		);
		const maleAnalysis = generateBaZiAnalysis(
			maleUser.birthDateTime,
			"male"
		);

		// Generate AI analysis prompt with actual BaZi data
		const prompt = `請根據以下真實八字資訊進行專業合盤分析：

女方資訊：
- 出生時間：${femaleAnalysis.birthDate}
- 八字：${femaleAnalysis.bazi}
- 性別：女

男方資訊：
- 出生時間：${maleAnalysis.birthDate}
- 八字：${maleAnalysis.bazi}  
- 性別：男

具體問題：${specificProblem}

請基於這些真實的八字資訊，提供專業的合盤分析和針對具體問題的建議。重點分析兩人的五行互補性、相沖相合情況，以及如何解決提到的具體問題。

請按照以下格式回覆：

1. **您的八字（女，${femaleAnalysis.birthDate}）**  
   八字：${femaleAnalysis.bazi}  
   （基於真實八字的詳細格局分析和性格特點）

2. **伴侶八字（男，${maleAnalysis.birthDate}）**  
   八字：${maleAnalysis.bazi}  
   （基於真實八字的詳細格局分析和性格特點）

請提供基於真實八字的專業命理分析，不要使用假設或示例數據。`;

		// Make API call to DeepSeek
		const deepseekResponse = await fetch(
			"https://api.deepseek.com/v1/chat/completions",
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
								"你是專業的八字命理分析師，精通八字合盤分析。請提供準確的八字計算和詳細的命理解讀。",
						},
						{
							role: "user",
							content: prompt,
						},
					],
					max_tokens: 2000,
					temperature: 0.7,
				}),
			}
		);

		if (!deepseekResponse.ok) {
			throw new Error("DeepSeek API request failed");
		}

		const deepseekData = await deepseekResponse.json();
		const aiResponse = deepseekData.choices[0]?.message?.content || "";

		// Parse the AI response to extract structured data
		const parseAnalysisResponse = (response) => {
			const sections = {
				female: {
					birthDate: formatBirthDate(femaleUser.birthDateTime),
					bazi: "",
					description: "",
					pillars: [],
				},
				male: {
					birthDate: formatBirthDate(maleUser.birthDateTime),
					bazi: "",
					description: "",
					pillars: [],
				},
			};

			// Parse female section
			const femaleMatch = response.match(
				/1\.\s*\*\*您的八字（女[^）]*）\*\*\s*八字：([^\n]*)\n([^]*?)(?=2\.|$)/
			);
			if (femaleMatch) {
				sections.female.bazi = femaleMatch[1].trim();
				sections.female.description = femaleMatch[2]
					.replace(/（([^）]*)）/, "$1")
					.trim();

				// Extract pillars from bazi
				const baziElements = femaleMatch[1].trim().split(/\s+/);
				if (baziElements.length >= 4) {
					sections.female.pillars = [
						`年柱-${baziElements[0] || "甲子"}`,
						`月柱-${baziElements[1] || "乙丑"}`,
						`日柱-${baziElements[2] || "丙寅"}`,
						`時柱-${baziElements[3] || "丁卯"}`,
					];
				}
			}

			// Parse male section
			const maleMatch = response.match(
				/2\.\s*\*\*伴侶八字（男[^）]*）\*\*\s*八字：([^\n]*)\n([^]*?)$/
			);
			if (maleMatch) {
				sections.male.bazi = maleMatch[1].trim();
				sections.male.description = maleMatch[2]
					.replace(/（([^）]*)）/, "$1")
					.trim();

				// Extract pillars from bazi
				const baziElements = maleMatch[1].trim().split(/\s+/);
				if (baziElements.length >= 4) {
					sections.male.pillars = [
						`年柱-${baziElements[0] || "戊辰"}`,
						`月柱-${baziElements[1] || "己巳"}`,
						`日柱-${baziElements[2] || "庚午"}`,
						`時柱-${baziElements[3] || "辛未"}`,
					];
				}
			}

			return sections;
		};

		let analysisData = parseAnalysisResponse(aiResponse);

		// Use real calculated BaZi if AI parsing failed or returned empty
		if (
			!analysisData.female.bazi ||
			analysisData.female.bazi.trim() === ""
		) {
			analysisData.female = {
				...femaleAnalysis,
				description:
					analysisData.female.description ||
					femaleAnalysis.description,
			};
		}

		if (!analysisData.male.bazi || analysisData.male.bazi.trim() === "") {
			analysisData.male = {
				...maleAnalysis,
				description:
					analysisData.male.description || maleAnalysis.description,
			};
		}

		// Ensure we always have the real BaZi data as backup
		analysisData.female.realBazi = femaleAnalysis.bazi;
		analysisData.male.realBazi = maleAnalysis.bazi;

		return NextResponse.json({
			success: true,
			female: analysisData.female,
			male: analysisData.male,
			rawResponse: aiResponse,
		});
	} catch (error) {
		console.error("Couple analysis error:", error);

		// Calculate real BaZi even if everything else fails
		try {
			const femaleAnalysis = generateBaZiAnalysis(
				femaleUser.birthDateTime,
				"female"
			);
			const maleAnalysis = generateBaZiAnalysis(
				maleUser.birthDateTime,
				"male"
			);

			return NextResponse.json({
				success: false,
				female: femaleAnalysis,
				male: maleAnalysis,
				error: "AI analysis failed, but real BaZi calculated successfully",
			});
		} catch (calcError) {
			console.error("BaZi calculation also failed:", calcError);
			return NextResponse.json({
				success: false,
				error: "Both AI analysis and BaZi calculation failed",
				female: {
					birthDate:
						formatBirthDate(femaleUser?.birthDateTime) || "未提供",
					bazi: "計算失敗",
					description: "無法計算八字，請檢查出生時間格式",
					pillars: [
						"年柱-未知",
						"月柱-未知",
						"日柱-未知",
						"時柱-未知",
					],
				},
				male: {
					birthDate:
						formatBirthDate(maleUser?.birthDateTime) || "未提供",
					bazi: "計算失敗",
					description: "無法計算八字，請檢查出生時間格式",
					pillars: [
						"年柱-未知",
						"月柱-未知",
						"日柱-未知",
						"時柱-未知",
					],
				},
			});
		}
	}
}
