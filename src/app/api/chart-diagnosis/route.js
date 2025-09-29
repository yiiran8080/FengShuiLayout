import { NextResponse } from "next/server";

// Enhanced BaZi calculation functions (same as couple-specific-problem-analysis)
const calculateBaZi = (birthDate) => {
	const date = new Date(birthDate);
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

	// Calculate month pillar (月柱)
	const monthStemIndex = ((year - 4) * 12 + month - 1) % 10;
	const monthBranchIndex = (month + 1) % 12;
	const monthPillar =
		heavenlyStems[monthStemIndex] + earthlyBranches[monthBranchIndex];

	// Calculate day pillar (日柱) - day master
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
		dayMaster: heavenlyStems[dayStemIndex],
		dayBranch: earthlyBranches[dayBranchIndex],
		monthBranch: earthlyBranches[monthBranchIndex],
	};
};

// Helper function to filter out unwanted content
function shouldIncludeLine(line) {
	const trimmed = line.trim();

	// Skip empty lines
	if (!trimmed) return false;

	// Skip markdown formatting
	if (
		trimmed.startsWith("**") ||
		trimmed.startsWith("#") ||
		trimmed.startsWith("---")
	)
		return false;

	// Skip numbered lists and bullet points at the start
	if (
		/^\d+\.\s*\*\*/.test(trimmed) ||
		/^\*\*\d+\./.test(trimmed) ||
		/^\d+\.\s*$/.test(trimmed)
	)
		return false;

	// Skip lines that are just numbers or bullets
	if (
		/^\d+\.\s*$/.test(trimmed) ||
		/^\*+\s*$/.test(trimmed) ||
		/^[\d\*\-\+]+$/.test(trimmed)
	)
		return false;

	// Skip disclaimers and structural text
	if (
		trimmed.includes("以上診斷基於") ||
		trimmed.includes("命理如鏡") ||
		trimmed.includes("願此分析") ||
		trimmed.includes("基於雙方八字結構") ||
		trimmed.includes("著重問題根源") ||
		trimmed.includes("可行性調整") ||
		trimmed.includes("請提供") ||
		trimmed.includes("格式如下") ||
		trimmed.includes("請確保分析")
	)
		return false;

	// Skip section headers that we handle separately
	if (
		trimmed.includes("女方分析") ||
		trimmed.includes("男方分析") ||
		trimmed.includes("關鍵合盤") ||
		trimmed.includes("合盤徵象")
	)
		return false;

	// Skip lines that start with formatting numbers like "3. **"
	if (/^\d+\.\s*\*\*/.test(trimmed)) return false;

	// Skip very short lines that are likely structural
	if (trimmed.length < 15) return false;

	return true;
}

export async function POST(request) {
	try {
		const {
			femaleUser,
			maleUser,
			femaleBazi,
			maleBazi,
			femalePillars,
			malePillars,
			requestType,
		} = await request.json();

		if (!femaleUser?.birthDateTime || !maleUser?.birthDateTime) {
			return NextResponse.json(
				{ error: "Missing birth date information" },
				{ status: 400 }
			);
		}

		// Calculate detailed BaZi for both users
		const femaleBaziData = calculateBaZi(femaleUser.birthDateTime);
		const maleBaziData = calculateBaZi(maleUser.birthDateTime);

		// Generate AI analysis prompt
		const prompt = `作為專業命理師，請針對這對情侶進行簡要的「盤面診斷」分析。

基本資料：
女方生辰：${femaleUser.birthDateTime}
女方八字：${femaleBaziData.year} ${femaleBaziData.month} ${femaleBaziData.day} ${femaleBaziData.hour}
女方日主：${femaleBaziData.dayMaster}，日支：${femaleBaziData.dayBranch}，生於${femaleBaziData.monthBranch}月

男方生辰：${maleUser.birthDateTime}  
男方八字：${maleBaziData.year} ${maleBaziData.month} ${maleBaziData.day} ${maleBaziData.hour}
男方日主：${maleBaziData.dayMaster}，日支：${maleBaziData.dayBranch}，生於${maleBaziData.monthBranch}月

請提供三段簡潔分析，每段約100字：

女方分析：
以「${femaleBaziData.dayMaster}${femaleBaziData.monthBranch}月」為標題，簡要分析她的核心性格特徵、主要情感需求、在感情中的典型行為模式。重點突出最關鍵的性格特質和感情表達方式。

男方分析：
以「${maleBaziData.dayMaster}${maleBaziData.monthBranch}月」為標題，簡要分析他的性格特點、情感表達方式、在關係中的反應模式。聚焦最重要的性格傾向和溝通風格。

關鍵合盤徵象：
簡要分析雙方最主要的互動問題，解釋核心衝突點，提供1-2個最重要的調整建議。重點描述他們最容易出現的感情循環問題。

請用簡潔明瞭的中文，每段控制在100字左右，避免過於冗長的描述。`;

		// Call DeepSeek API
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
					max_tokens: 2000,
					temperature: 0.7,
				}),
			}
		);

		if (!response.ok) {
			throw new Error(`DeepSeek API error: ${response.status}`);
		}

		const aiResponse = await response.json();
		const aiAnalysis = aiResponse.choices[0].message.content;

		// Parse the AI response into structured data
		const parsedAnalysis = parseChartDiagnosis(
			aiAnalysis,
			femaleBaziData,
			maleBaziData
		);

		return NextResponse.json(parsedAnalysis);
	} catch (error) {
		console.error("Chart diagnosis error:", error);

		// Return fallback response
		return NextResponse.json({
			female: {
				title: "命局：計算中",
				content: "正在分析您的命局特徵和情感模式...",
			},
			male: {
				title: "命局：計算中",
				content: "正在分析伴侶的命局特徵和性格傾向...",
			},
			keySymptoms: "正在分析關鍵合盤徵象，包括五行互動和情感循環模式...",
		});
	}
}

function parseChartDiagnosis(aiText, femaleBaziData, maleBaziData) {
	// Enhanced parsing to extract structured information
	const sections = {
		female: {
			title: `命局：${femaleBaziData.dayMaster}${femaleBaziData.monthBranch}月`,
			content: "",
		},
		male: {
			title: `命局：${maleBaziData.dayMaster}${maleBaziData.monthBranch}月`,
			content: "",
		},
		keySymptoms: "",
	};

	try {
		// Split the analysis into sections
		const lines = aiText.split("\n").filter((line) => line.trim());
		let currentSection = null;
		let contentBuffer = [];

		for (const line of lines) {
			const trimmedLine = line.trim();

			// Check for section headers
			if (
				trimmedLine.includes("女方分析") ||
				(trimmedLine.includes("女方") && !currentSection)
			) {
				// Save previous section
				if (currentSection && contentBuffer.length > 0) {
					if (currentSection === "keySymptoms") {
						sections.keySymptoms = contentBuffer.join(" ");
					} else {
						sections[currentSection].content =
							contentBuffer.join(" ");
					}
				}
				currentSection = "female";
				contentBuffer = [];

				// Extract title if in the same line
				const titleMatch = trimmedLine.match(/命局：([^：\n]+)/);
				if (titleMatch) {
					sections.female.title = titleMatch[1];
				}
				continue;
			}

			if (
				trimmedLine.includes("男方分析") ||
				(trimmedLine.includes("男方") && currentSection === "female")
			) {
				// Save previous section
				if (currentSection && contentBuffer.length > 0) {
					if (currentSection === "keySymptoms") {
						sections.keySymptoms = contentBuffer.join(" ");
					} else {
						sections[currentSection].content =
							contentBuffer.join(" ");
					}
				}
				currentSection = "male";
				contentBuffer = [];

				// Extract title if in the same line
				const titleMatch = trimmedLine.match(/命局：([^：\n]+)/);
				if (titleMatch) {
					sections.male.title = titleMatch[1];
				}
				continue;
			}

			if (
				trimmedLine.includes("關鍵合盤") ||
				trimmedLine.includes("合盤徵象")
			) {
				// Save previous section
				if (currentSection && contentBuffer.length > 0) {
					if (currentSection === "keySymptoms") {
						sections.keySymptoms = contentBuffer.join(" ");
					} else {
						sections[currentSection].content =
							contentBuffer.join(" ");
					}
				}
				currentSection = "keySymptoms";
				contentBuffer = [];
				continue;
			}

			// Check for title lines that start with 命局：
			if (
				trimmedLine.startsWith("命局：") &&
				(currentSection === "female" || currentSection === "male")
			) {
				const titleContent = trimmedLine.replace("命局：", "").trim();
				if (currentSection === "female") {
					sections.female.title = titleContent;
				} else if (currentSection === "male") {
					sections.male.title = titleContent;
				}
				continue;
			}

			// Add content lines
			if (
				trimmedLine &&
				shouldIncludeLine(trimmedLine) &&
				currentSection
			) {
				contentBuffer.push(trimmedLine);
			}
		}

		// Don't forget the last section
		if (currentSection && contentBuffer.length > 0) {
			if (currentSection === "keySymptoms") {
				sections.keySymptoms = contentBuffer.join(" ");
			} else {
				sections[currentSection].content = contentBuffer.join(" ");
			}
		}

		// Ensure we have some content for each section
		if (!sections.female.content) {
			sections.female.content = `${femaleBaziData.dayMaster}命生於${femaleBaziData.monthBranch}月，當前大運流年2025乙巳年影響下，情感表達模式具有獨特特徵，需要特別關注溝通方式的調整。`;
		}

		if (!sections.male.content) {
			sections.male.content = `${maleBaziData.dayMaster}命生於${maleBaziData.monthBranch}月，性格傾向和情感需求在當前時運影響下呈現特定模式，對感情關係的處理方式需要相互理解。`;
		}

		if (!sections.keySymptoms) {
			sections.keySymptoms = `根據雙方八字合盤分析，主要關注點在於五行互動和性格差異如何影響情感溝通，建議通過相互理解和調整溝通方式來改善關係品質。`;
		}
	} catch (error) {
		console.error("Error parsing chart diagnosis:", error);
	}

	return sections;
}
