// 八字計算模塊
export class BaziCalculator {
	// 天干
	static tianGan = [
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

	// 地支
	static diZhi = [
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

	// 五行對應
	static wuXing = {
		甲: "木",
		乙: "木",
		丙: "火",
		丁: "火",
		戊: "土",
		己: "土",
		庚: "金",
		辛: "金",
		壬: "水",
		癸: "水",
		子: "水",
		丑: "土",
		寅: "木",
		卯: "木",
		辰: "土",
		巳: "火",
		午: "火",
		未: "土",
		申: "金",
		酉: "金",
		戌: "土",
		亥: "水",
	};

	// 計算年柱
	static getYearPillar(year) {
		const tianGanIndex = (year - 4) % 10;
		const diZhiIndex = (year - 4) % 12;

		return {
			tianGan: this.tianGan[tianGanIndex],
			diZhi: this.diZhi[diZhiIndex],
			element: this.wuXing[this.tianGan[tianGanIndex]],
		};
	}

	// 計算日柱（簡化版）
	static getDayPillar(date) {
		const baseDate = new Date("1900-01-01");
		const targetDate = new Date(date);
		const daysDiff = Math.floor(
			(targetDate - baseDate) / (1000 * 60 * 60 * 24)
		);

		const tianGanIndex = daysDiff % 10;
		const diZhiIndex = daysDiff % 12;

		return {
			tianGan: this.tianGan[tianGanIndex],
			diZhi: this.diZhi[diZhiIndex],
			element: this.wuXing[this.tianGan[tianGanIndex]],
		};
	}

	// 分析五行強弱
	static analyzeElementStrength(yearElement, dayElement) {
		const strengthMap = {
			木: { strong: "春季出生，木旺", weak: "秋季出生，金克木" },
			火: { strong: "夏季出生，火旺", weak: "冬季出生，水克火" },
			土: { strong: "四季末出生，土旺", weak: "春季出生，木克土" },
			金: { strong: "秋季出生，金旺", weak: "夏季出生，火克金" },
			水: { strong: "冬季出生，水旺", weak: "夏季出生，土克水" },
		};

		const currentMonth = new Date().getMonth() + 1;
		let season = "";

		if (currentMonth >= 3 && currentMonth <= 5) season = "春季";
		else if (currentMonth >= 6 && currentMonth <= 8) season = "夏季";
		else if (currentMonth >= 9 && currentMonth <= 11) season = "秋季";
		else season = "冬季";

		return {
			description: strengthMap[dayElement]?.strong || "中等強度",
			season,
			advice: this.getElementAdvice(dayElement),
		};
	}

	// 獲取五行建議
	static getElementAdvice(element) {
		const advice = {
			木: "宜東方發展，忌金屬尖銳物品，多接觸綠色植物",
			火: "宜南方發展，忌水濕環境，多使用紅色物品",
			土: "宜中央或西南發展，穩重踏實，多使用黃色物品",
			金: "宜西方發展，忌火熱環境，多使用白色金屬物品",
			水: "宜北方發展，忌土燥環境，多使用黑色或藍色物品",
		};

		return advice[element] || "根據個人情況調整";
	}

	// 性格分析
	static getPersonalityAnalysis(dayElement) {
		const personalities = {
			木: "性格正直，具有成長性和創造力，但有時過於理想化",
			火: "性格熱情，具有領導力和行動力，但有時過於急躁",
			土: "性格穩重，具有包容性和責任感，但有時過於保守",
			金: "性格堅毅，具有組織力和決斷力，但有時過於固執",
			水: "性格靈活，具有智慧和適應力，但有時過於多變",
		};

		return personalities[dayElement] || "性格特質需要進一步分析";
	}
}

// CommonJS 導出（為了測試）
if (typeof module !== "undefined" && module.exports) {
	module.exports = { BaziCalculator };
}
