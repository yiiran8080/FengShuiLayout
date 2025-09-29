import { NextRequest, NextResponse } from "next/server";
import { EnhancedInitialAnalysis } from "@/lib/enhancedInitialAnalysis";
import getWuxingData from "@/lib/nayin";

export async function POST(request) {
	try {
		const {
			user1Birthday,
			user2Birthday,
			user1Element,
			user2Element,
			currentYear,
			nextYear,
			currentMonth,
			compatibilityData,
			requestType,
		} = await request.json();

		if (!user1Birthday || !user2Birthday) {
			return NextResponse.json(
				{ error: "Missing required birthday information" },
				{ status: 400 }
			);
		}

		// Generate comprehensive AI analysis for annual strategy
		const annualAnalysis = await generateAnnualStrategyWithAI(
			user1Birthday,
			user2Birthday,
			user1Element,
			user2Element,
			currentYear,
			nextYear,
			currentMonth,
			compatibilityData
		);

		return NextResponse.json({
			success: true,
			annualStrategy: annualAnalysis,
			timestamp: new Date().toISOString(),
		});
	} catch (error) {
		console.error("Error in couple annual analysis:", error);
		return NextResponse.json(
			{
				error: "Failed to generate annual analysis",
				details: error.message,
			},
			{ status: 500 }
		);
	}
}

async function generateAnnualStrategyWithAI(
	user1Birthday,
	user2Birthday,
	user1Element,
	user2Element,
	currentYear,
	nextYear,
	currentMonth,
	compatibilityData
) {
	try {
		// Get detailed bazi analysis for both users
		const user1BaziData = getWuxingData(user1Birthday, "male");
		const user2BaziData = getWuxingData(user2Birthday, "female");

		// Create detailed prompt for AI analysis
		const prompt = `作為專業的八字合婚分析師，請根據以下信息生成詳細的流年應對策略：

**基本信息：**
- 男方生日：${user1Birthday}，${user1Element}命
- 女方生日：${user2Birthday}，${user2Element}命
- 八字分析：男方 ${user1BaziData.year} ${user1BaziData.month} ${user1BaziData.day} ${user1BaziData.hour}
- 八字分析：女方 ${user2BaziData.year} ${user2BaziData.month} ${user2BaziData.day} ${user2BaziData.hour}
- 配對評分：${compatibilityData?.score || 75}分
- 當前年份：${currentYear}年${currentMonth}月
- 分析年份：${currentYear}年和${nextYear}年

**請提供以下詳細分析：**

1. **${currentYear}年感情運勢分析**
   - 整體趨勢和重點月份
   - 具體的月份建議（特別是當前${currentMonth}月份之後）
   - 需要注意的時期和建議

2. **${nextYear}年關鍵應對策略**
   - 年度整體運勢預測
   - 重要時期的具體建議
   - 財務和感情方面的策略

3. **具體月份建議**
   - 請提供類似"${currentYear}年農曆四月，避免重大決定，可安排短途旅行（寅木解巳申之刑）"的具體建議
   - 請提供類似"${nextYear}丙午年，女方財星過旺，男方須警惕'庚金正財被剋'引發的財務焦慮，建議提前設立共同儲備金"的專業建議

**分析要求：**
- 基於真實的八字理論和五行相生相剋原理
- 提供實用的生活建議
- 考慮兩人的五行配合情況
- 包含具體的時間節點和應對方法
- 專業術語與通俗解釋並重

請用繁體中文回答，格式要清晰專業。`;

		// Call AI service
		const aiResponse =
			await EnhancedInitialAnalysis.generateCoupleAIAnalysis(
				new Date(user1Birthday),
				new Date(user2Birthday),
				user1Element,
				user2Element,
				prompt
			);

		// Parse AI response and structure it
		const structuredAnalysis = parseAndStructureAIResponse(
			aiResponse,
			currentYear,
			nextYear,
			currentMonth,
			user1Element,
			user2Element,
			compatibilityData
		);

		return structuredAnalysis;
	} catch (error) {
		console.error("Error generating AI annual analysis:", error);

		// Fallback to structured basic analysis
		return generateFallbackAnnualStrategy(
			currentYear,
			nextYear,
			currentMonth,
			user1Element,
			user2Element,
			compatibilityData
		);
	}
}

function parseAndStructureAIResponse(
	aiResponse,
	currentYear,
	nextYear,
	currentMonth,
	user1Element,
	user2Element,
	compatibilityData
) {
	// Try to parse the AI response and extract structured information
	const lines = aiResponse.split("\n").filter((line) => line.trim());

	let currentYearAnalysis = "";
	let nextYearAnalysis = "";
	let monthlyAdvice = "";

	let currentSection = "";

	for (const line of lines) {
		const trimmedLine = line.trim();

		if (
			trimmedLine.includes(currentYear.toString()) &&
			trimmedLine.includes("年")
		) {
			currentSection = "currentYear";
			currentYearAnalysis += trimmedLine + "\n";
		} else if (
			trimmedLine.includes(nextYear.toString()) &&
			trimmedLine.includes("年")
		) {
			currentSection = "nextYear";
			nextYearAnalysis += trimmedLine + "\n";
		} else if (
			trimmedLine.includes("月份") ||
			trimmedLine.includes("農曆") ||
			trimmedLine.includes("應對")
		) {
			currentSection = "monthly";
			monthlyAdvice += trimmedLine + "\n";
		} else if (currentSection && trimmedLine.length > 10) {
			if (currentSection === "currentYear") {
				currentYearAnalysis += trimmedLine + "\n";
			} else if (currentSection === "nextYear") {
				nextYearAnalysis += trimmedLine + "\n";
			} else if (currentSection === "monthly") {
				monthlyAdvice += trimmedLine + "\n";
			}
		}
	}

	// Structure the response
	return {
		[currentYear]: {
			title: `${currentYear}年感情運勢`,
			description:
				currentYearAnalysis.trim() ||
				generateBasicYearAnalysis(
					currentYear,
					user1Element,
					user2Element,
					compatibilityData
				),
			monthlyFocus:
				extractMonthlyFocus(monthlyAdvice, currentYear) ||
				generateBasicMonthlyAdvice(
					currentYear,
					currentMonth,
					user1Element,
					user2Element
				),
		},
		[nextYear]: {
			title: `${nextYear}年關鍵應對策略`,
			description:
				nextYearAnalysis.trim() ||
				generateBasicYearAnalysis(
					nextYear,
					user1Element,
					user2Element,
					compatibilityData
				),
			monthlyFocus:
				extractMonthlyFocus(monthlyAdvice, nextYear) ||
				generateBasicMonthlyAdvice(
					nextYear,
					6,
					user1Element,
					user2Element
				),
		},
	};
}

function extractMonthlyFocus(monthlyText, year) {
	const lines = monthlyText.split("\n");
	for (const line of lines) {
		if (
			line.includes(year.toString()) &&
			(line.includes("月") || line.includes("建議"))
		) {
			return line.trim();
		}
	}
	return null;
}

function generateBasicYearAnalysis(
	year,
	element1,
	element2,
	compatibilityData
) {
	const score = compatibilityData?.score || 75;
	const level = score >= 80 ? "優秀" : score >= 70 ? "良好" : "穩定";

	const elementAnalysis = getElementYearAnalysis(element1, element2, year);

	return `${year}年整體配對評分${score}分，屬於${level}配對。${elementAnalysis}建議加強溝通，維持感情穩定發展。`;
}

function generateBasicMonthlyAdvice(year, month, element1, element2) {
	const seasonAdvice = {
		spring: "春季感情昇溫，適合增進感情",
		summer: "夏季需要冷靜，避免情緒化決定",
		autumn: "秋季適合規劃未來，討論重要事項",
		winter: "冬季注重內在交流，培養默契",
	};

	const season =
		month <= 3
			? "winter"
			: month <= 6
				? "spring"
				: month <= 9
					? "summer"
					: "autumn";

	return `${year}年${month}月，${seasonAdvice[season]}。根據${element1}命與${element2}命的配合，建議此時期重點關注相互理解和支持。`;
}

function getElementYearAnalysis(element1, element2, year) {
	const combinations = {
		金水: "金水相生，感情和諧，",
		水木: "水木相生，關係持續成長，",
		木火: "木火相生，熱情洋溢，",
		火土: "火土相生，感情踏實穩固，",
		土金: "土金相生，相互支持，",
		金火: "金火相剋，需要調和，",
		火水: "水火不容，需要包容，",
		水土: "水土相剋，需要理解，",
		土木: "土木相剋，需要溝通，",
		木金: "金克木，需要平衡，",
	};

	const combo1 = `${element1}${element2}`;
	const combo2 = `${element2}${element1}`;

	return combinations[combo1] || combinations[combo2] || "需要相互調適，";
}

function generateFallbackAnnualStrategy(
	currentYear,
	nextYear,
	currentMonth,
	user1Element,
	user2Element,
	compatibilityData
) {
	return {
		[currentYear]: {
			title: `${currentYear}年感情運勢`,
			description: generateBasicYearAnalysis(
				currentYear,
				user1Element,
				user2Element,
				compatibilityData
			),
			monthlyFocus: generateBasicMonthlyAdvice(
				currentYear,
				currentMonth,
				user1Element,
				user2Element
			),
		},
		[nextYear]: {
			title: `${nextYear}年關鍵應對策略`,
			description: generateBasicYearAnalysis(
				nextYear,
				user1Element,
				user2Element,
				compatibilityData
			),
			monthlyFocus: generateBasicMonthlyAdvice(
				nextYear,
				6,
				user1Element,
				user2Element
			),
		},
	};
}
