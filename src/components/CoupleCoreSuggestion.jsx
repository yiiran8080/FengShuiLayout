"use client";

import { useState, useEffect } from "react";
import { ComponentErrorBoundary } from "./ErrorHandling";
import { useCoupleAnalysis } from "@/contexts/CoupleAnalysisContext";

export default function CoupleCoreSuggestion({
	user1,
	user2,
	currentYear = 2025,
}) {
	const { coupleCoreSuggestionCache, setCoupleCoreSuggestionCache } =
		useCoupleAnalysis();

	const [analysisData, setAnalysisData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
	const [error, setError] = useState(null);

	// Generate couple core suggestion analysis using both partners' birth info
	const generateCoupleCoreSuggestionAnalysis = async (user1, user2, year) => {
		try {
			const response = await fetch(
				"/api/couple-core-suggestion-analysis",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						user1Info: {
							birthday: user1?.birthDateTime || "",
							gender: user1?.gender || "male",
							name: user1?.name || "男方",
						},
						user2Info: {
							birthday: user2?.birthDateTime || "",
							gender: user2?.gender || "female",
							name: user2?.name || "女方",
						},
						currentYear: year,
						concern: "感情", // Default concern for couple analysis
					}),
				}
			);

			if (!response.ok) {
				throw new Error(`API request failed: ${response.status}`);
			}

			const result = await response.json();

			if (!result.success) {
				throw new Error(
					result.error || "Couple core suggestion analysis failed"
				);
			}

			// Transform AI response into component structure
			return transformCoupleAIResponseToComponentData(
				result.analysis,
				user1,
				user2,
				year
			);
		} catch (error) {
			console.error("Couple core suggestion AI analysis error:", error);
			// Return minimal fallback structure when AI fails
			return getCoupleFallbackComponentData(year, user1, user2);
		}
	};

	// Transform AI response to component data structure
	const transformCoupleAIResponseToComponentData = (
		analysisData,
		user1,
		user2,
		year
	) => {
		// Create category structure for couple analysis
		const coupleCategories = [
			{
				title: "關係發展建議",
				subtitle: "夫妻合盤策略指南",
				icon: "/images/report/star.png",
				color: "bg-[#DEAB20]",
				content: extractCategoryContent(
					analysisData.content,
					"關係發展建議",
					"關係發展策略"
				),
			},
			{
				title: "溝通建議",
				subtitle: "夫妻溝通技巧",
				icon: "/images/report/chat.png",
				color: "bg-[#8A71C7]",
				content: extractCategoryContent(
					analysisData.content,
					"溝通建議",
					"溝通能量指南"
				),
			},
			{
				title: "能量提升建議",
				subtitle: "夫妻能量調和",
				icon: "/images/report/fengshui.png",
				color: "bg-[#8FA940]",
				content: extractCategoryContent(
					analysisData.content,
					"能量提升建議",
					"能量提升方案"
				),
			},
			{
				title: "感情關係禁忌",
				subtitle: "夫妻相處禁忌",
				icon: "/images/report/warning.png",
				color: "bg-[#B4003C]",
				content: extractCategoryContent(
					analysisData.content,
					"感情關係禁忌",
					"感情關係禁忌"
				),
			},
		];

		// Create icon list
		const coupleIconList = coupleCategories.map((category, index) => ({
			icon: category.icon,
			label: category.title,
			color: category.color,
			active: index === 0,
		}));

		return {
			title: "夫妻開運建議",
			subtitle: `${user1?.name || "男方"} & ${user2?.name || "女方"} 感情指南`,
			coreIcon: "💕",
			iconColor: "bg-[#B4003C]",
			coreTitle: "夫妻和諧",
			coreIconList: coupleIconList,
			coreCategories: coupleCategories,
			motto: extractCoupleMottoFromContent(analysisData.content),
			coreStrategy: "夫妻八字合盤，五行調和，感情長久",
			year,
			concern: "感情",
			user1Birthday: user1?.birthDateTime || "",
			user2Birthday: user2?.birthDateTime || "",
			user1Name: user1?.name || "男方",
			user2Name: user2?.name || "女方",
			fullContent: analysisData.content,
			timestamp: analysisData.timestamp,
		};
	};

	// Extract content for specific category
	const extractCategoryContent = (
		fullContent,
		categoryTitle,
		sectionPattern
	) => {
		try {
			// For 感情關係禁忌, first try to use actual provided content if available
			if (categoryTitle === "感情關係禁忌") {
				// Enhanced detection: look for the specific structure patterns that AI should generate
				if (
					fullContent &&
					(fullContent.includes("溝通禁忌") ||
						fullContent.includes("行為禁忌") ||
						fullContent.includes("環境禁忌") ||
						(fullContent.includes("女方忌用") &&
							fullContent.includes("男方忌用")) ||
						fullContent.includes("約會避開") ||
						fullContent.includes("同房禁忌"))
				) {
					return parseRelationshipTaboosContent(fullContent);
				} else {
					return getFallbackCategoryContent(categoryTitle);
				}
			} // Try to find the specific section using multiple patterns
			const patterns = [
				new RegExp(
					`${sectionPattern}[：:]?([\\s\\S]*?)(?=(?:一、|二、|三、|四、|###|$))`,
					"g"
				),
				new RegExp(
					`${categoryTitle}[：:]?([\\s\\S]*?)(?=(?:關係發展|溝通建議|能量提升|感情關係|$))`,
					"g"
				),
				new RegExp(`【${categoryTitle}】([\\s\\S]*?)(?=【|$)`, "g"),
			];

			for (let pattern of patterns) {
				pattern.lastIndex = 0;
				const match = pattern.exec(fullContent);
				if (match && match[1] && match[1].trim().length > 50) {
					// Special handling for different categories
					if (categoryTitle === "關係發展建議") {
						return parseRelationshipDevelopmentContent(
							match[1].trim()
						);
					} else if (categoryTitle === "溝通建議") {
						return parseCommunicationAdviceContent(match[1].trim());
					} else if (categoryTitle === "能量提升建議") {
						return parseEnergyEnhancementContent(match[1].trim());
					} else if (categoryTitle === "感情關係禁忌") {
						return parseRelationshipTaboosContent(match[1].trim());
					}
					return cleanAndStructureContent(match[1].trim());
				}
			}

			// If no specific content found, return default
			return getFallbackCategoryContent(categoryTitle);
		} catch (error) {
			console.error("Error extracting category content:", error);
			return getFallbackCategoryContent(categoryTitle);
		}
	};

	// Parse communication advice content into structured format
	const parseCommunicationAdviceContent = (content) => {
		try {
			// Extract communication styles for both partners
			const maleStyleMatch = content.match(
				/男方([^，]*?(?:土性|沉穩|傾聽|包容)[^，]*?)，/
			);
			const femaleStyleMatch = content.match(
				/女方([^。]*?(?:火性|直率|表達|情緒)[^。]*?)。/
			);

			// Extract communication methods and timing
			const methodMatch = content.match(/建議採用[^。]*?([^。]*?)。/);
			const timingMatch = content.match(/最佳溝通時辰([^。]*?)。/);
			const obstacleMatch =
				content.match(/可能出現的溝通障礙([^。]*?)。/);
			const solutionMatch = content.match(/可採用[^。]*?([^。]*?)。/);

			// Extract strategies from AI content for specific conflict types
			const extractStrategiesForType = (type) => {
				// Look for patterns like "意見不合" followed by strategies
				const typePattern = new RegExp(
					`${type}[^：]*：?([^\\n]*(?:男方[^\\n]*女方[^\\n]*|女方[^\\n]*男方[^\\n]*)?[^\\n]*)`,
					"g"
				);
				const matches = content.match(typePattern);

				if (matches && matches.length > 0) {
					const typeContent = matches[0];
					// Extract male strategy
					const maleStrategyMatch =
						typeContent.match(/男方[^：]*：([^女方]*)/);
					// Extract female strategy
					const femaleStrategyMatch =
						typeContent.match(/女方[^：]*：([^男方]*)/);

					return {
						male: maleStrategyMatch
							? maleStrategyMatch[1]
									.trim()
									.replace(/[，。]*$/, "")
							: null,
						female: femaleStrategyMatch
							? femaleStrategyMatch[1]
									.trim()
									.replace(/[，。]*$/, "")
							: null,
					};
				}
				return { male: null, female: null };
			};

			// Extract strategies for different conflict types
			const conflictStrategies = {
				衝突類型: extractStrategiesForType("衝突類型"),
				意見不合: extractStrategiesForType("意見不合"),
				情緒低落: extractStrategiesForType("情緒低落"),
				親友干涉: extractStrategiesForType("親友干涉"),
			};

			// Create structured communication content
			const communicationSections = [];

			// Partner communication styles section
			const stylesSection = {
				title: "溝通風格分析",
				type: "partner-styles",
				maleStyle: maleStyleMatch
					? maleStyleMatch[1].trim()
					: "土性沉穩擅長傾聽",
				femaleStyle: femaleStyleMatch
					? femaleStyleMatch[1].trim()
					: "火性直率需要表達空間",
			};

			// Practical application section with male/female strategies
			const practicalSection = {
				title: "實際應用",
				type: "practical-application",
				subsections: [
					{
						title: "衝突類型",
						maleStrategy:
							conflictStrategies["衝突類型"].male ||
							"先認可再補充：「你說的X部分很有道理，我補充Y...」",
						femaleStrategy:
							conflictStrategies["衝突類型"].female ||
							"用選項代替質問：「A或B方案你覺得哪個可行？」",
					},
					{
						title: "意見不合",
						maleStrategy:
							conflictStrategies["意見不合"].male ||
							"先認可再補充：「你說的X部分很有道理，我補充Y...」",
						femaleStrategy:
							conflictStrategies["意見不合"].female ||
							"用選項代替質問：「A或B方案你覺得哪個可行？」",
					},
					{
						title: "情緒低落",
						maleStrategy:
							conflictStrategies["情緒低落"].male ||
							"肢體接觸>言語（輕拍背、遞熱飲）",
						femaleStrategy:
							conflictStrategies["情緒低落"].female ||
							"分享自身類似經歷（主水比劫助共情）",
					},
					{
						title: "親友干涉問題",
						maleStrategy:
							conflictStrategies["親友干涉"].male ||
							"明確立場：「我會處理」+事後同步結果",
						femaleStrategy:
							conflictStrategies["親友干涉"].female ||
							"預設「防火牆」：「這事我們自己決定」",
					},
				],
				timing: timingMatch
					? timingMatch[1].trim()
					: "巳時（9-11時）與午時（11-13時）",
				methods: methodMatch ? methodMatch[1].trim() : "土火相生溝通法",
			};

			return {
				type: "communication-structure",
				sections: [stylesSection, practicalSection],
			};
		} catch (error) {
			console.error("Error parsing communication advice content:", error);
			return { type: "text", content: content };
		}
	};

	// Helper functions to extract content dynamically from AI-generated text
	const extractActionAdvice = (content, gender) => {
		// Try multiple patterns to handle different formats
		const patterns = [
			// Pattern 1: With ** markers
			`${gender}提升建議[：]*\\*\\*[^：]*行動建議[：]*([\\s\\S]*?)(?=開運物|${gender === "男方" ? "女方" : "共同"}|$)`,
			// Pattern 2: Without ** markers
			`${gender}提升建議[\\s\\S]*?行動建議[\\s\\S]*?([\\s\\S]*?)(?=開運物|${gender === "男方" ? "女方" : "共同"}|$)`,
		];

		for (let pattern of patterns) {
			const regex = new RegExp(pattern, "i");
			const match = content.match(regex);

			if (match && match[1]) {
				const actionText = match[1].trim();

				// Handle numbered lists (1. 2. 3.)
				let actionItems = actionText.match(
					/\d+\.\s*([^0-9]*?)(?=\d+\.|$)/g
				);

				// If no numbered lists, try bullet points (•)
				if (!actionItems) {
					actionItems = actionText
						.split("•")
						.filter((item) => item.trim().length > 0);
				}

				if (actionItems && actionItems.length > 0) {
					return actionItems
						.map((item) => item.replace(/^\d+\.\s*/, "").trim())
						.slice(0, 3);
				}
			}
		}

		// Fallback: look for any action-related content for this gender
		const fallbackPattern = new RegExp(
			`${gender}[^。]*([^。]*運動[^。]*|[^。]*冥想[^。]*|[^。]*學習[^。]*|[^。]*創作[^。]*)`,
			"g"
		);
		const fallbackMatches = content.match(fallbackPattern);
		if (fallbackMatches && fallbackMatches.length > 0) {
			return fallbackMatches.map((match) => match.trim()).slice(0, 2);
		}

		return [];
	};

	const extractAccessories = (content, gender) => {
		// Try multiple patterns to handle different formats
		const patterns = [
			// Pattern 1: With ** markers
			`${gender}提升建議[\\s\\S]*?\\*\\* 開運物[：]*([^*]*?)(?=\\*\\*|${gender === "男方" ? "女方" : "共同"}|$)`,
			// Pattern 2: Without ** markers
			`${gender}提升建議[\\s\\S]*?開運物[\\s\\S]*?([\\s\\S]*?)(?=${gender === "男方" ? "女方" : "共同"}|$)`,
		];

		for (let pattern of patterns) {
			const regex = new RegExp(pattern, "i");
			const match = content.match(regex);

			if (match && match[1]) {
				const accessoryText = match[1].trim().replace(/^\s*：\s*/, "");
				// Split by common separators and clean up
				const accessories = accessoryText
					.split(/[、，,]/)
					.filter((item) => item.trim().length > 0);
				return accessories.length > 0 ? accessories : accessoryText;
			}
		}

		// Fallback pattern for direct "gender適合" mentions
		const fallbackPattern = new RegExp(`${gender}適合[^。]*`, "g");
		const fallbackMatch = content.match(fallbackPattern);
		return fallbackMatch
			? fallbackMatch[0].replace(`${gender}適合`, "").trim()
			: "";
	};

	const extractWeeklyRitual = (content) => {
		// Try multiple patterns to handle different formats
		const patterns = [
			// Pattern 1: With ** markers
			/\*\* 每週儀式：([\s\S]*?)(?=\*\*|$)/,
			// Pattern 2: Standard format
			/每週儀式[：]*([^場合]*?)(?=場合|$)/i,
			// Pattern 3: Direct ritual text
			/每週六[^。]*。?/,
		];

		for (let pattern of patterns) {
			const match = content.match(pattern);

			if (match && match[1]) {
				return match[1].trim();
			} else if (match && match[0] && pattern.source.includes("每週六")) {
				return match[0];
			}
		}

		// Other ritual patterns
		const alternativePatterns = [
			/每週[^。]*共同[^。]*。/,
			/定期[^。]*活動[^。]*。/,
			/共同[^。]*儀式[^。]*。/,
		];

		for (let pattern of alternativePatterns) {
			const altMatch = content.match(pattern);
			if (altMatch) return altMatch[0];
		}
		return "";
	};

	const extractSituationTable = (content) => {
		try {
			// Multiple patterns to catch different AI formats
			const patterns = [
				// Pattern 1: With ** markers
				/\*\* 場合色彩搭配：([\s\S]*?)(?=###|$)/,
				// Pattern 2: Without ** markers
				/場合色彩搭配[：]*([^#]*?)(?=###|四、|$)/i,
				// Pattern 3: Direct search for situation blocks
				/重要商務場合[：]*([^#]*?)(?=###|四、|$)/i,
			];

			let tableContent = null;

			for (let pattern of patterns) {
				const match = content.match(pattern);
				if (match && match[1]) {
					tableContent = match[1].trim();
					break;
				}
			}

			// If we found content, parse the situations
			if (tableContent) {
				const situations = [];

				// Look for standard situation names
				const situationNames = ["重要商務場合", "社交聚會", "居家生活"];

				for (let situationName of situationNames) {
					// Extract this specific situation - fixed regex
					const situationPattern = new RegExp(
						`${situationName}[：]*([\\s\\S]*?)(?=${situationNames.filter((s) => s !== situationName).join("|")}|$)`,
						"i"
					);
					const situationMatch = tableContent.match(situationPattern);

					if (situationMatch && situationMatch[1]) {
						const situationText = situationMatch[1].trim();

						// Extract male, female colors and energy function - fixed regex
						const maleMatch = situationText.match(
							/[-–]*\s*男方[：]*([^\n]*)/
						);
						const femaleMatch = situationText.match(
							/[-–]*\s*女方[：]*([^\n]*)/
						);
						const energyMatch = situationText.match(
							/[-–]*\s*能量作用[：]*([^\n]*)/
						);

						if (maleMatch && femaleMatch) {
							situations.push({
								title: situationName,
								colors: {
									male: [maleMatch[1].trim()],
									female: [femaleMatch[1].trim()],
								},
								energyFunction: energyMatch
									? energyMatch[1].trim()
									: "五行調和",
							});
						}
					}
				}

				return situations;
			}

			return [];
		} catch (error) {
			console.error("Error extracting situation table:", error);
			return [];
		}
	};

	const extractSituations = (content) => {
		const situationPatterns = [/約會/g, /聚會/g, /旅行/g, /工作/g, /社交/g];

		const foundSituations = [];
		situationPatterns.forEach((pattern) => {
			const matches = content.match(pattern);
			if (matches) {
				matches.forEach((match) => {
					if (!foundSituations.includes(match)) {
						foundSituations.push(match);
					}
				});
			}
		});

		return foundSituations.length > 0
			? foundSituations.slice(0, 3)
			: ["重要場合", "日常生活", "特殊時刻"];
	};

	const extractMaleColors = (content) => {
		const maleColorPattern = /男方[^（）]*([^。]*色[^。]*)/;
		const match = content.match(maleColorPattern);
		if (match) {
			const colors = match[1].match(
				/[紅綠藍黃白黑灰橙紫粉土米軍][^，。]*/g
			);
			return colors ? colors.slice(0, 2) : null;
		}
		return null;
	};

	const extractFemaleColors = (content) => {
		const femaleColorPattern = /女方[^（）]*([^。]*色[^。]*)/;
		const match = content.match(femaleColorPattern);
		if (match) {
			const colors = match[1].match(
				/[紅綠藍黃白黑灰橙紫粉淺珊瑚][^，。]*/g
			);
			return colors ? colors.slice(0, 2) : null;
		}
		return null;
	};

	const extractEnergyFunctions = (content) => {
		const functionPatterns = [
			/五行[^。]*相生[^。]*。/g,
			/能量[^。]*平衡[^。]*。/g,
			/相剋[^。]*化解[^。]*。/g,
			/（([^）]*)）/g, // Content in parentheses
		];

		const functions = [];
		functionPatterns.forEach((pattern) => {
			const matches = content.match(pattern);
			if (matches) {
				functions.push(...matches.slice(0, 1));
			}
		});

		return functions.length > 0
			? functions.slice(0, 3)
			: ["五行相生相剋原理", "能量平衡調和", "個性化建議方案"];
	};

	// Parse energy enhancement content into structured layout matching the attached image
	const parseEnergyEnhancementContent = (content) => {
		try {
			// Extract male and female enhancement suggestions
			const maleEnhancementMatch = content.match(/男方適合[^。]*。/g);
			const femaleEnhancementMatch = content.match(/女方適合[^。]*。/g);

			// Extract shared activities and weekly rituals
			const weeklyRitualMatch = content.match(/每月[^。]*農曆初[^。]*。/);
			const sharedActivityMatch = content.match(/共同[^。]*。/g);

			// Extract feng shui and home arrangement suggestions
			const fengShuiMatch = content.match(
				/居家風水[^。]*。|家居佈置[^。]*。|擺放[^。]*。/g
			);

			// Extract lucky colors and accessories
			const luckyColorsMatch =
				content.match(/年度幸運色系[：:]?([^。]*)/);
			const accessoriesMatch =
				content.match(/開運物品推薦[：:]?([^。]*)/);

			// Extract energy relationship analysis
			const energyAnalysisMatch =
				content.match(/雙方五行[^。]*互補關係[^。]*。/);

			// Create structured energy enhancement content with enhanced helper functions
			const energyStructure = {
				title: "能量提升建議",
				type: "energy-enhancement",
				maleSection: {
					title: "男方提升建議",
					actionAdvice: extractActionAdvice(content, "男方"),
					accessories: extractAccessories(content, "男方"),
				},
				femaleSection: {
					title: "女方提升建議",
					actionAdvice: extractActionAdvice(content, "女方"),
					accessories: extractAccessories(content, "女方"),
				},
				sharedEnhancement: {
					title: "共同能量場強化",
					weeklyRitual: {
						title: "每週儀式",
						content: extractWeeklyRitual(content),
					},
					situations: extractSituationTable(content),
				},
			}; // Add feng shui analysis if available
			if (energyAnalysisMatch) {
				energyStructure.analysis = energyAnalysisMatch[0];
			}

			// Add extracted feng shui suggestions if available
			if (fengShuiMatch && fengShuiMatch.length > 0) {
				energyStructure.fengShuiSuggestions = fengShuiMatch;
			}

			// Add lucky colors if available
			if (luckyColorsMatch) {
				energyStructure.luckyColors = luckyColorsMatch[1].trim();
			}

			return energyStructure;
		} catch (error) {
			console.error("Error parsing energy enhancement content:", error);
			return { type: "text", content: content };
		}
	};

	// Parse relationship taboos content into structured layout matching the attached image
	const parseRelationshipTaboosContent = (content) => {
		try {
			// Initialize structure
			const tabooStructure = {
				type: "relationship-taboos",
				title: "感情關係禁忌",
				sections: [],
				monthlyNote: null,
			};

			// Split content into sections based on main headers
			const lines = content
				.split("\n")
				.filter((line) => line.trim() !== "");

			let currentSection = null;
			let currentSubsection = null;
			let collectingContent = "";

			for (let i = 0; i < lines.length; i++) {
				const line = lines[i].trim();

				// Main section headers
				if (line === "溝通禁忌") {
					currentSection = {
						title: "溝通禁忌",
						color: "bg-pink-600",
						subsections: [],
					};
					tabooStructure.sections.push(currentSection);
					continue;
				}

				if (line === "行為禁忌") {
					currentSection = {
						title: "行為禁忌",
						color: "bg-red-600",
						subsections: [],
					};
					tabooStructure.sections.push(currentSection);
					continue;
				}

				if (line === "環境禁忌") {
					currentSection = {
						title: "環境禁忌",
						color: "bg-red-800",
						subsections: [],
					};
					tabooStructure.sections.push(currentSection);
					continue;
				}

				// Handle monthly note
				if (line.startsWith("每月初")) {
					tabooStructure.monthlyNote = {
						title: "每月初",
						content: line,
					};
					continue;
				}

				// Subsection headers and content
				if (currentSection) {
					// Check if this is a subsection header
					if (
						line === "女方忌用" ||
						line === "男方忌用" ||
						line === "春季" ||
						line === "夏季" ||
						line === "戊月" ||
						line === "約會避開" ||
						line === "同房禁忌"
					) {
						// Save previous subsection if exists
						if (currentSubsection && collectingContent.trim()) {
							currentSubsection.content =
								collectingContent.trim();
							collectingContent = "";
						}

						// Start new subsection
						currentSubsection = {
							title: line,
							content: "",
						};
						currentSection.subsections.push(currentSubsection);
					} else if (currentSubsection && line !== "") {
						// Collect content for current subsection
						if (collectingContent) {
							collectingContent += " ";
						}
						collectingContent += line;
					}
				}
			}

			// Handle last subsection
			if (currentSubsection && collectingContent.trim()) {
				currentSubsection.content = collectingContent.trim();
			}

			// Fallback to hardcoded structure if parsing fails or is incomplete
			if (tabooStructure.sections.length === 0) {
				tabooStructure.sections = [
					{
						title: "溝通禁忌",
						color: "bg-pink-600",
						subsections: [
							{
								title: "女方忌用",
								content:
									"「你總是…」「為什麼不…」（黃木食神受剋易引爆情緒）",
							},
							{
								title: "男方忌用",
								content:
									"「隨便」「以後再說」（子水七殺過量拖延強化冷暴力）",
							},
						],
					},
					{
						title: "行為禁忌",
						color: "bg-red-600",
						subsections: [
							{
								title: "春季",
								content:
									"避免在申時（15-17時）討論敏感話題，因此時金氣旺盛易引發爭執",
							},
							{
								title: "夏季",
								content:
									"忌在臥室西北方放置尖銳物品，防止金木相剋影響感情",
							},
							{
								title: "戊月",
								content:
									"2025年農曆九月需特別注意財務規劃，避免因金錢問題產生隔閡",
							},
						],
					},
					{
						title: "環境禁忌",
						color: "bg-red-800",
						subsections: [
							{
								title: "約會避開",
								content:
									"約會避開：火鍋店（火氣過重）、地下室（水氣滯沉）",
							},
							{
								title: "同房禁忌",
								content:
									"子時（23-1點）宜砂，易成心結；可改為備忘錄次日再議",
							},
						],
					},
				];
			}

			if (!tabooStructure.monthlyNote) {
				tabooStructure.monthlyNote = {
					title: "每月初",
					content:
						"化解方法：在客廳東南方懸掛牡丹圖（木火相生），共同佩戴鴛鴦玉佩增強緣分",
				};
			}

			return tabooStructure;
		} catch (error) {
			console.error("Error parsing relationship taboos content:", error);
			return { type: "text", content: content };
		}
	};
	const extractCommunicationPattern = (content, pattern) => {
		try {
			const regex = new RegExp(`([^。]*(?:${pattern})[^。]*。?)`, "gi");
			const matches = content.match(regex);
			if (matches && matches.length > 0) {
				// Return full content without arbitrary truncation
				return matches[0].trim();
			}
			return null;
		} catch (error) {
			return null;
		}
	};

	// Parse relationship development content into structured subsections
	const parseRelationshipDevelopmentContent = (content) => {
		try {
			// Extract main analysis content
			const analysisMatch = content.match(
				/具体分析[：:]?([\s\S]*?)(?=行动建议|时机与方法|注意事项|$)/
			);
			const actionMatch = content.match(
				/行动建议[：:]?([\s\S]*?)(?=时机与方法|注意事项|$)/
			);
			const timingMatch = content.match(
				/时机与方法[：:]?([\s\S]*?)(?=注意事项|$)/
			);
			const noteMatch = content.match(/注意事项[：:]?([\s\S]*?)$/);

			// Structure the content into seasonal recommendations
			const structuredContent = {
				analysis: analysisMatch ? analysisMatch[1].trim() : "",
				actions: actionMatch ? actionMatch[1].trim() : "",
				timing: timingMatch ? timingMatch[1].trim() : "",
				notes: noteMatch ? noteMatch[1].trim() : "",
			};

			// Create seasonal subsections based on the content
			const subsections = [];

			// Spring section - Focus on planning and new beginnings
			if (
				structuredContent.actions.includes("立春") ||
				structuredContent.actions.includes("年度") ||
				content.includes("立春")
			) {
				const springContent =
					extractSeasonalContent(content, "立春|年度|計劃|规划") ||
					structuredContent.actions ||
					"避免重大關係決策（如同居、購房），優先經營日常溫情。";
				subsections.push({
					title: "春季-黃月",
					color: "bg-yellow-500",
					content: springContent,
				});
			}

			// Summer section - Focus on relationship development
			if (
				structuredContent.timing.includes("夏季") ||
				structuredContent.timing.includes("四月") ||
				content.includes("巳火")
			) {
				const summerContent =
					extractSeasonalContent(
						content,
						"夏季|夏|四月|五月|六月|巳|午|未|升温|庆典"
					) ||
					structuredContent.timing ||
					"每月安排一次「無目的約會」（如深夜散步、看星星），脫離現實壓力場景。最佳感情升溫期，適合見家長或舉辦慶典。";
				subsections.push({
					title: "立夏至處暑",
					color: "bg-yellow-500",
					content: summerContent,
				});
			}

			// Autumn section - Focus on challenges and precautions
			if (
				structuredContent.notes.includes("申") ||
				structuredContent.notes.includes("七月") ||
				content.includes("注意")
			) {
				const autumnContent =
					extractSeasonalContent(
						content,
						"申|七月|八月|九月|注意|避免|分歧"
					) ||
					structuredContent.notes ||
					"男方主動策劃驚喜（丁火需木火激發熱情），例如親手製作禮物。需注意避免翻舊賬，加強溝通。";
				subsections.push({
					title: "白露後",
					color: "bg-yellow-500",
					content: autumnContent,
				});
			}

			// If no specific seasonal content found, create general subsections from the structured content
			if (subsections.length === 0) {
				subsections.push(
					{
						title: "春季-黃月",
						color: "bg-yellow-500",
						content:
							structuredContent.actions ||
							"避免重大關係決策（如同居、購房），優先經營日常溫情。",
					},
					{
						title: "立夏至處暑",
						color: "bg-yellow-500",
						content:
							structuredContent.timing ||
							"每月安排一次「無目的約會」（如深夜散步、看星星），脫離現實壓力場景。",
					},
					{
						title: "白露後",
						color: "bg-yellow-500",
						content:
							structuredContent.notes ||
							"男方主動策劃驚喜（丁火需木火激發熱情），例如親手製作禮物。",
					}
				);
			}

			return { type: "subsections", subsections };
		} catch (error) {
			console.error(
				"Error parsing relationship development content:",
				error
			);
			// Fallback to simple text
			return { type: "text", content: content };
		}
	};

	// Extract seasonal content from the full text
	const extractSeasonalContent = (fullContent, seasonPattern) => {
		try {
			// First try to find complete sentences with seasonal keywords
			const sentenceRegex = new RegExp(
				`([^。！？]*(?:${seasonPattern})[^。！？]*[。！？])`,
				"gi"
			);
			const sentenceMatches = fullContent.match(sentenceRegex);

			if (sentenceMatches && sentenceMatches.length > 0) {
				// Join the first 2-3 relevant sentences and allow full content
				const relevantSentences = sentenceMatches.slice(0, 3).join("");
				// Remove arbitrary truncation - return full relevant content
				return relevantSentences;
			}

			// Fallback: find any mention with broader context
			const contextRegex = new RegExp(
				`([^。]{0,50}(?:${seasonPattern})[^。]{0,50})`,
				"gi"
			);
			const contextMatches = fullContent.match(contextRegex);

			if (contextMatches && contextMatches.length > 0) {
				return contextMatches[0].trim() + "。";
			}

			return null;
		} catch (error) {
			console.error("Error extracting seasonal content:", error);
			return null;
		}
	};

	// Clean and structure the extracted content
	const cleanAndStructureContent = (content) => {
		// Remove formatting markers and clean up
		let cleanContent = content
			.replace(/^[：:]\s*/, "")
			.replace(/【[^】]*】/g, "")
			.replace(/\*\*/g, "")
			.replace(/####/g, "")
			.replace(/\n\s*\n/g, "\n")
			.trim();

		// Return full content without truncation for complete AI analysis
		return cleanContent;
	};

	// Extract motto from AI content
	const extractCoupleMottoFromContent = (content) => {
		// Try to find motto-like statements for couples
		const mottoPatterns = [
			/夫妻箴言[：:]([^。\n]*)/,
			/感情核心[：:]([^。\n]*)/,
			/關係要訣[：:]([^。\n]*)/,
		];

		for (let pattern of mottoPatterns) {
			const match = content.match(pattern);
			if (match && match[1]) {
				return match[1].trim();
			}
		}

		// Fallback motto for couples
		return "夫妻同心，其利斷金。相互理解，彼此包容，愛情長久。";
	};

	// Get fallback content for each category
	const getFallbackCategoryContent = (categoryTitle) => {
		const fallbackContent = {
			關係發展建議:
				"根據夫妻雙方八字合盤分析，建議在春季加強溝通，夏季注意情緒管理，秋季深化感情，冬季規劃未來。重點把握關鍵時間節點，避免在不利時期做重大決定。",
			溝通建議:
				"夫妻溝通需要根據雙方性格特點調整方式。建議選擇合適的時間和地點，用溫和的語氣表達想法，多聆聽對方觀點，避免在情緒激動時討論重要問題。",
			能量提升建議:
				"通過五行調和提升夫妻感情能量。建議佩戴適合的飾品，調整居家環境，選擇有利的活動時間，共同進行能量提升的活動。",
			感情關係禁忌: parseRelationshipTaboosContent(`感情關係禁忌
溝通禁忌
女方忌用
「你總是…」「為什麼不…」（黃木食神受剋易引爆情緒）

男方忌用
「隨便」「以後再說」（子水七殺過量拖延強化冷暴力）

行為禁忌
春季
避免在申時（15-17時）討論敏感話題，因此時金氣旺盛易引發爭執

夏季
忌在臥室西北方放置尖銳物品，防止金木相剋影響感情

戊月
2025年農曆九月需特別注意財務規劃，避免因金錢問題產生隔閡

環境禁忌
約會避開
約會避開：火鍋店（火氣過重）、地下室（水氣滯沉）

同房禁忌
子時（23-1點）宜砂，易成心結；可改為備忘錄次日再議

每月初
化解方法：在客廳東南方懸掛牡丹圖（木火相生），共同佩戴鴛鴦玉佩增強緣分`),
		};
		return fallbackContent[categoryTitle] || "正在為您分析夫妻關係建議...";
	};

	// Minimal fallback when AI completely fails
	const getCoupleFallbackComponentData = (year, user1, user2) => {
		return {
			title: "夫妻開運建議",
			subtitle: `${user1?.name || "男方"} & ${user2?.name || "女方"} 感情指南`,
			coreIcon: "💕",
			iconColor: "bg-[#B4003C]",
			coreTitle: "夫妻和諧",
			coreIconList: [
				{
					icon: "/images/report/star.png",
					label: "關係發展建議",
					color: "bg-[#DEAB20]",
					active: true,
				},
				{
					icon: "/images/report/chat.png",
					label: "溝通建議",
					color: "bg-[#8A71C7]",
					active: false,
				},
				{
					icon: "/images/report/fengshui.png",
					label: "能量提升建議",
					color: "bg-[#8FA940]",
					active: false,
				},
				{
					icon: "/images/report/warning.png",
					label: "感情關係禁忌",
					color: "bg-[#B4003C]",
					active: false,
				},
			],
			coreCategories: [
				{
					title: "關係發展建議",
					subtitle: "等待AI分析",
					icon: "/images/report/star.png",
					color: "bg-[#DEAB20]",
					content: "正在為您生成個人化的夫妻關係發展建議，請稍候...",
				},
				{
					title: "溝通建議",
					subtitle: "等待AI分析",
					icon: "/images/report/chat.png",
					color: "bg-[#8A71C7]",
					content: "正在為您生成個人化的夫妻溝通建議，請稍候...",
				},
				{
					title: "能量提升建議",
					subtitle: "等待AI分析",
					icon: "/images/report/fengshui.png",
					color: "bg-[#8FA940]",
					content: "正在為您生成個人化的夫妻能量提升建議，請稍候...",
				},
				{
					title: "感情關係禁忌",
					subtitle: "等待AI分析",
					icon: "/images/report/warning.png",
					color: "bg-[#B4003C]",
					content: "正在為您生成個人化的夫妻相處禁忌，請稍候...",
				},
			],
			motto: "夫妻同心，其利斷金。相互理解，彼此包容，愛情長久。",
			coreStrategy: "夫妻八字合盤，五行調和，感情長久",
			year,
			concern: "感情",
			user1Birthday: user1?.birthDateTime || "",
			user2Birthday: user2?.birthDateTime || "",
			user1Name: user1?.name || "男方",
			user2Name: user2?.name || "女方",
			error: "AI分析服務暫時不可用，系統正在嘗試重新連線。",
		};
	};

	// Create cache key for couple core suggestion analysis
	const getCacheKey = (user1, user2, year) => {
		return `couple_core_suggestion_${user1.birthDateTime}_${user2.birthDateTime}_${year}`;
	};

	useEffect(() => {
		if (!user1 || !user2) return;

		const cacheKey = getCacheKey(user1, user2, currentYear);

		// Check cache first
		if (coupleCoreSuggestionCache && coupleCoreSuggestionCache[cacheKey]) {
			console.log("📋 Using cached couple core suggestion analysis");
			setAnalysisData(coupleCoreSuggestionCache[cacheKey]);
			setIsLoading(false);
			return;
		}

		setIsLoading(true);
		setError(null);

		// Generate new analysis
		generateCoupleCoreSuggestionAnalysis(user1, user2, currentYear)
			.then((analysis) => {
				setAnalysisData(analysis);

				// Cache the result
				setCoupleCoreSuggestionCache((prevCache) => ({
					...prevCache,
					[cacheKey]: analysis,
				}));
			})
			.catch((error) => {
				console.error("Couple core suggestion analysis failed:", error);
				setError(error.message);

				// Set minimal fallback
				const fallback = getCoupleFallbackComponentData(
					currentYear,
					user1,
					user2
				);
				setAnalysisData(fallback);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [
		user1,
		user2,
		currentYear,
		coupleCoreSuggestionCache,
		setCoupleCoreSuggestionCache,
	]);

	if (isLoading) {
		return (
			<section
				className="relative mx-auto mb-6 bg-white sm:mb-10"
				style={{
					width: "95%",
					padding: "40px",
					boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
					borderRadius: "45px",
				}}
			>
				<div className="flex items-center justify-center py-8">
					<div className="w-8 h-8 border-b-2 border-pink-600 rounded-full animate-spin"></div>
					<span className="ml-3 text-gray-600">
						生成夫妻開運建議中...
					</span>
				</div>
			</section>
		);
	}

	if (!analysisData) {
		return (
			<section
				className="relative mx-auto mb-6 bg-white sm:mb-10"
				style={{
					width: "95%",
					padding: "40px",
					boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
					borderRadius: "45px",
				}}
			>
				<div className="py-8 text-center text-gray-500">
					無法載入夫妻開運建議資料
				</div>
			</section>
		);
	}

	const activeCategory = analysisData.coreCategories[activeCategoryIndex];

	return (
		<ComponentErrorBoundary componentName="CoupleCoreSuggestion">
			<section
				className="relative mx-auto mb-6 bg-white sm:mb-10"
				style={{
					width: "100%",
					padding: "40px",
					boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
					borderRadius: "45px",
				}}
			>
				{/* Header */}
				<div className="flex items-center justify-between mb-8">
					<h2
						style={{
							fontFamily: "Noto Serif TC, serif",
							fontSize: "40px",
							fontWeight: 800,
							color: "#B4003C", // Couple theme color
						}}
					>
						感情開運建議
					</h2>
				</div>

				{/* Couple Info Banner */}
				{/* <div className="p-4 mb-8 border border-pink-200 rounded-lg bg-gradient-to-r from-pink-50 to-red-50">
					<div className="flex items-center justify-center text-center">
						<span className="text-lg font-medium text-gray-700">
							{analysisData.user1Name} & {analysisData.user2Name}
						</span>
						<span className="mx-3 text-pink-500">💕</span>
						<span className="text-sm text-gray-600">
							夫妻合盤開運指南
						</span>
					</div>
				</div>
 */}
				{/* Error Message */}
				{analysisData?.error && (
					<div className="p-3 mb-6 bg-yellow-100 border border-yellow-400 rounded-lg">
						<p className="text-sm text-yellow-700">
							⚠️ {analysisData.error}
						</p>
					</div>
				)}

				{/* Core Icons Section */}
				<div className="p-6 mb-8 bg-white">
					<div className="flex items-center justify-between w-full mb-6">
						{analysisData.coreIconList.map((item, index) => {
							const getButtonBgColor = (itemLabel, isActive) => {
								const colorMap = {
									關係發展建議: isActive
										? "bg-[#DEAB20]"
										: "bg-white",
									溝通建議: isActive
										? "bg-[#8A71C7]"
										: "bg-white",
									能量提升建議: isActive
										? "bg-[#8FA940]"
										: "bg-white",
									感情關係禁忌: isActive
										? "bg-[#B4003C]"
										: "bg-white",
								};
								return (
									colorMap[itemLabel] ||
									(isActive ? "bg-gray-600" : "bg-gray-300")
								);
							};

							const getItemImage = (itemLabel) => {
								const imageMap = {
									關係發展建議: "/images/report/star.png",
									溝通建議: "/images/report/chat.png",
									能量提升建議: "/images/report/fengshui.png",
									感情關係禁忌: "/images/report/warning.png",
								};
								return (
									imageMap[itemLabel] ||
									"/images/report/heart.png"
								);
							};

							const getImageFilter = (isActive) => {
								return isActive
									? "brightness(0) invert(1)"
									: "none";
							};

							return (
								<button
									key={index}
									onClick={() =>
										setActiveCategoryIndex(index)
									}
									className={`flex flex-col items-center space-y-2 transition-all duration-300 flex-1 ${
										activeCategoryIndex === index
											? "transform scale-110"
											: "hover:scale-105"
									}`}
								>
									<div
										className={`w-16 h-16 rounded-full flex items-center justify-center text-white transition-all duration-300 ${getButtonBgColor(
											item.label,
											activeCategoryIndex === index
										)}`}
										style={{
											boxShadow:
												"0 4px 4px rgba(0, 0, 0, 0.25)",
										}}
									>
										<img
											src={getItemImage(item.label)}
											alt={item.label}
											className="w-8 h-8"
											style={{
												filter: getImageFilter(
													activeCategoryIndex ===
														index
												),
											}}
										/>
									</div>
									<span
										className={`text-sm font-medium ${
											activeCategoryIndex === index
												? "text-gray-800"
												: "text-gray-500"
										}`}
									>
										{item.label}
									</span>
								</button>
							);
						})}
					</div>

					{/* Active Category Title */}
					<div className="text-center">
						<h3
							style={{
								fontFamily: "Noto Serif TC, serif",
								fontSize: "40px",
								fontWeight: 700,
								color: (() => {
									const colorMap = {
										關係發展建議: "#DEAB20",
										溝通建議: "#8A71C7",
										能量提升建議: "#8FA940",
										感情關係禁忌: "#B4003C",
									};
									return (
										colorMap[
											analysisData.coreIconList[
												activeCategoryIndex
											]?.label
										] || "#B4003C"
									);
								})(),
								marginBottom: "8px",
							}}
						>
							{activeCategory.title}
						</h3>
					</div>

					{/* Content Display */}
					<div className="mt-8">
						<div className="p-6 ">
							<div className="space-y-4">
								{/* Check content type and render accordingly */}
								{typeof activeCategory.content === "object" &&
								activeCategory.content.type ===
									"subsections" ? (
									/* Relationship Development Subsections */
									<div className="space-y-6">
										{activeCategory.content.subsections.map(
											(subsection, index) => (
												<div
													key={index}
													className="overflow-hidden border border-[#EFEFEF] shadow-lg rounded-lg"
												>
													{/* Subsection Header */}
													<div
														className={`${subsection.color} text-white px-4 py-2 font-medium text-center rounded-t-lg`}
													>
														{subsection.title}
													</div>
													{/* Subsection Content */}
													<div className="p-4 bg-[#EFEFEF]">
														<p className="leading-relaxed text-gray-700">
															{subsection.content}
														</p>
													</div>
												</div>
											)
										)}
									</div>
								) : typeof activeCategory.content ===
										"object" &&
								  activeCategory.content.type ===
										"communication-structure" ? (
									/* Communication Advice Structure */
									<div className="space-y-6">
										{activeCategory.content.sections.map(
											(section, sectionIndex) => (
												<div key={sectionIndex}>
													{section.type ===
													"partner-styles" ? (
														/* Partner Communication Styles */
														<div className="space-y-4">
															<h4 className="mb-4 text-lg font-semibold text-purple-600">
																{section.title}
															</h4>
															<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
																{/* Male Communication Style */}
																<div className="p-4 border border-blue-200 rounded-lg">
																	<div className="flex items-center mb-2">
																		<div className="w-3 h-3 mr-2 bg-blue-500 rounded-full"></div>
																		<span className="font-medium text-blue-700">
																			男方溝通風格
																		</span>
																	</div>
																	<p className="text-sm leading-relaxed text-gray-700">
																		{
																			section.maleStyle
																		}
																	</p>
																</div>
																{/* Female Communication Style */}
																<div className="p-4 border border-pink-200 rounded-lg">
																	<div className="flex items-center mb-2">
																		<div className="w-3 h-3 mr-2 bg-pink-500 rounded-full"></div>
																		<span className="font-medium text-pink-700">
																			女方溝通風格
																		</span>
																	</div>
																	<p className="text-sm leading-relaxed text-gray-700">
																		{
																			section.femaleStyle
																		}
																	</p>
																</div>
															</div>
														</div>
													) : section.type ===
													  "practical-application" ? (
														/* Practical Application Section with Male/Female Strategies */
														<div className="space-y-4">
															<h4 className="mb-4 text-lg font-semibold text-purple-600">
																{section.title}
															</h4>
															{/* Each conflict type with side-by-side strategies */}
															{section.subsections.map(
																(
																	subsection,
																	subIndex
																) => (
																	<div
																		key={
																			subIndex
																		}
																		className="space-y-3"
																	>
																		{/* Conflict Type Title */}
																		<div className="px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded">
																			{
																				subsection.title
																			}
																		</div>
																		{/* Male and Female Strategies Side by Side */}
																		<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
																			{/* Male Strategy */}
																			<div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
																				<div className="flex items-center mb-2">
																					<div className="w-3 h-3 mr-2 bg-blue-500 rounded-full"></div>
																					<span className="text-sm font-medium text-blue-700">
																						男方溝通策略
																					</span>
																				</div>
																				<div className="p-3 text-sm leading-relaxed text-gray-700 bg-gray-100 rounded">
																					{
																						subsection.maleStrategy
																					}
																				</div>
																			</div>
																			{/* Female Strategy */}
																			<div className="p-4 border border-pink-200 rounded-lg bg-pink-50">
																				<div className="flex items-center mb-2">
																					<div className="w-3 h-3 mr-2 bg-pink-500 rounded-full"></div>
																					<span className="text-sm font-medium text-pink-700">
																						女方溝通策略
																					</span>
																				</div>
																				<div className="p-3 text-sm leading-relaxed text-gray-700 bg-gray-100 rounded">
																					{
																						subsection.femaleStrategy
																					}
																				</div>
																			</div>
																		</div>
																	</div>
																)
															)}
															{/* Additional Info */}
															{section.timing && (
																<div className="p-3 mt-4 rounded-lg bg-purple-50">
																	<span className="text-sm font-medium text-purple-700">
																		最佳時機：
																	</span>
																	<span className="text-sm text-gray-700">
																		{
																			section.timing
																		}
																	</span>
																</div>
															)}
														</div>
													) : null}
												</div>
											)
										)}
									</div>
								) : typeof activeCategory.content ===
										"object" &&
								  activeCategory.content.type ===
										"relationship-taboos" ? (
									/* Relationship Taboos Structure */
									<div className="space-y-6">
										{/* <h3 className="mb-6 text-xl font-bold text-center text-red-600">
											{activeCategory.content.title}
										</h3> */}

										{/* Main Taboo Sections */}
										{activeCategory.content.sections.map(
											(section, sectionIndex) => (
												<div
													key={sectionIndex}
													className="space-y-4"
												>
													{/* Section Header */}
													<div
														className={`${section.color} text-white px-4 py-3 font-bold text-center rounded-lg`}
													>
														{section.title}
													</div>

													{/* Subsections Grid */}
													<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
														{section.subsections.map(
															(
																subsection,
																subIndex
															) => (
																<div
																	key={
																		subIndex
																	}
																	className="overflow-hidden border-2 border-gray-200 rounded-lg"
																>
																	{/* Subsection Header */}
																	<div
																		className={`${
																			sectionIndex ===
																			0
																				? "bg-pink-500"
																				: sectionIndex ===
																					  1
																					? "bg-green-500"
																					: "bg-red-700"
																		} text-white px-3 py-2 font-medium text-center`}
																	>
																		{
																			subsection.title
																		}
																	</div>
																	{/* Subsection Content */}
																	<div className="p-4 bg-gray-50">
																		<p className="text-sm leading-relaxed text-gray-700">
																			{
																				subsection.content
																			}
																		</p>
																	</div>
																</div>
															)
														)}
													</div>
												</div>
											)
										)}

										{/* Monthly Note Section */}
										{/* {activeCategory.content.monthlyNote && (
											<div className="p-4 mt-6 border-2 border-yellow-300 rounded-lg bg-yellow-50">
												<h4 className="mb-2 font-medium text-yellow-700">
													{
														activeCategory.content
															.monthlyNote.title
													}
												</h4>
												<p className="text-sm leading-relaxed text-gray-700">
													{
														activeCategory.content
															.monthlyNote.content
													}
												</p>
											</div>
										)} */}
									</div>
								) : typeof activeCategory.content ===
										"object" &&
								  activeCategory.content.type ===
										"energy-enhancement" ? (
									/* Energy Enhancement Structure */
									<div className="space-y-6">
										{/* Title */}
										{/* <h3 className="mb-6 text-xl font-bold text-center text-green-600">
											{activeCategory.content.title}
										</h3>
 */}
										{/* Energy Analysis (if available) */}
										{activeCategory.content.analysis && (
											<div className="p-4 mb-6 bg-green-100 border border-green-300 rounded-lg">
												<h4 className="mb-2 font-medium text-green-700">
													五行能量分析
												</h4>
												<p className="text-sm text-gray-700">
													{
														activeCategory.content
															.analysis
													}
												</p>
											</div>
										)}

										{/* Male and Female Enhancement Sections */}
										<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
											{/* Male Enhancement Section */}
											<div className="overflow-hidden border-2 border-blue-300 rounded-lg">
												{/* Male Header */}
												<div className="px-4 py-2 font-medium text-center text-white bg-blue-500 rounded-t-lg">
													{
														activeCategory.content
															.maleSection.title
													}
												</div>

												{/* Male Action Advice */}
												<div className="p-4 space-y-3">
													<div className="p-3 bg-blue-100 rounded-lg">
														<h5 className="mb-2 font-medium text-blue-700">
															行動建議
														</h5>
														{activeCategory.content.maleSection.actionAdvice.map(
															(advice, index) => (
																<p
																	key={index}
																	className="mb-2 text-sm text-gray-700"
																>
																	• {advice}
																</p>
															)
														)}
													</div>

													{/* Male Accessories */}
													<div className="p-3 rounded-lg bg-blue-50">
														<h5 className="mb-2 font-medium text-blue-700">
															開運物
														</h5>
														<p className="text-sm text-gray-700">
															{
																activeCategory
																	.content
																	.maleSection
																	.accessories
															}
														</p>
													</div>
												</div>
											</div>

											{/* Female Enhancement Section */}
											<div className="overflow-hidden border-2 border-pink-300 rounded-lg">
												{/* Female Header */}
												<div className="px-4 py-2 font-medium text-center text-white bg-pink-500 rounded-t-lg">
													{
														activeCategory.content
															.femaleSection.title
													}
												</div>

												{/* Female Action Advice */}
												<div className="p-4 space-y-3">
													<div className="p-3 bg-pink-100 rounded-lg">
														<h5 className="mb-2 font-medium text-pink-700">
															行動建議
														</h5>
														{activeCategory.content.femaleSection.actionAdvice.map(
															(advice, index) => (
																<p
																	key={index}
																	className="mb-2 text-sm text-gray-700"
																>
																	• {advice}
																</p>
															)
														)}
													</div>

													{/* Female Accessories */}
													<div className="p-3 rounded-lg bg-pink-50">
														<h5 className="mb-2 font-medium text-pink-700">
															開運物
														</h5>
														<p className="text-sm text-gray-700">
															{
																activeCategory
																	.content
																	.femaleSection
																	.accessories
															}
														</p>
													</div>
												</div>
											</div>
										</div>

										{/* Feng Shui Suggestions (if available) */}
										{activeCategory.content
											.fengShuiSuggestions && (
											<div className="p-4 border border-yellow-300 rounded-lg bg-yellow-50">
												<h4 className="mb-2 font-medium text-yellow-700">
													居家風水建議
												</h4>
												{activeCategory.content.fengShuiSuggestions.map(
													(suggestion, index) => (
														<p
															key={index}
															className="mb-2 text-sm text-gray-700"
														>
															• {suggestion}
														</p>
													)
												)}
											</div>
										)}

										{/* Lucky Colors (if available) */}
										{activeCategory.content.luckyColors && (
											<div className="p-4 border border-purple-300 rounded-lg bg-purple-50">
												<h4 className="mb-2 font-medium text-purple-700">
													年度幸運色系
												</h4>
												<p className="text-sm text-gray-700">
													{
														activeCategory.content
															.luckyColors
													}
												</p>
											</div>
										)}

										{/* Shared Enhancement Section */}
										<div className="overflow-hidden border-2 border-green-300 rounded-lg bg-green-50">
											{/* Shared Enhancement Header */}
											<div className="px-4 py-2 font-medium text-center text-white bg-green-500">
												{
													activeCategory.content
														.sharedEnhancement.title
												}
											</div>

											<div className="p-4 space-y-4">
												{/* Weekly Ritual */}
												<div className="p-4 bg-white border border-green-200 rounded-lg">
													<h5 className="mb-2 font-medium text-green-700">
														{
															activeCategory
																.content
																.sharedEnhancement
																.weeklyRitual
																.title
														}
													</h5>
													<p className="text-sm text-gray-700">
														{
															activeCategory
																.content
																.sharedEnhancement
																.weeklyRitual
																.content
														}
													</p>
												</div>

												{/* Situations Table */}
												{activeCategory.content
													.sharedEnhancement
													.situations &&
												activeCategory.content
													.sharedEnhancement
													.situations.length > 0 ? (
													<div className="overflow-hidden bg-white border border-green-200 rounded-lg">
														{/* Table Header */}
														<div className="grid grid-cols-4 text-sm font-medium text-gray-700 bg-green-100">
															<div className="p-2 text-center border-r border-green-200">
																場合
															</div>
															<div className="p-2 text-center border-r border-green-200">
																男方主色
															</div>
															<div className="p-2 text-center border-r border-green-200">
																女方主色
															</div>
															<div className="p-2 text-center">
																能量作用
															</div>
														</div>

														{/* Table Rows */}
														{activeCategory.content.sharedEnhancement.situations.map(
															(
																situation,
																index
															) => (
																<div
																	key={index}
																	className="grid grid-cols-4 text-sm border-b border-green-100 last:border-b-0"
																>
																	{/* Situation */}
																	<div className="p-2 font-medium text-center border-r border-green-200 bg-green-50">
																		{
																			situation.title
																		}
																	</div>

																	{/* Male Colors */}
																	<div className="p-2 text-center border-r border-green-200">
																		<div className="flex flex-wrap justify-center gap-1">
																			{situation.colors.male.map(
																				(
																					colorText,
																					colorIndex
																				) => {
																					// Extract color names from the full text
																					const colorMatches =
																						colorText.match(
																							/[深淺][藍綠黃紅白黑灰橙紫粉棕米卡][\w色]*/g
																						) ||
																							colorText.match(
																								/[藍綠黃紅白黑灰橙紫粉棕米卡][\w色]*/g
																							) || [
																								"墨綠",
																							];
																					return colorMatches.map(
																						(
																							colorName,
																							nameIndex
																						) => (
																							<div
																								key={`${colorIndex}-${nameIndex}`}
																								className="flex items-center mb-1 space-x-1"
																							>
																								<div
																									className={`w-3 h-3 rounded-full ${
																										colorName.includes(
																											"藍"
																										) ||
																										colorName.includes(
																											"深藍"
																										)
																											? "bg-blue-600"
																											: colorName.includes(
																														"綠"
																												  ) ||
																												  colorName.includes(
																														"淺綠"
																												  ) ||
																												  colorName.includes(
																														"卡其"
																												  )
																												? "bg-green-500"
																												: colorName.includes(
																															"灰"
																													  ) ||
																													  colorName.includes(
																															"深灰"
																													  )
																													? "bg-gray-500"
																													: colorName.includes(
																																"橙"
																														  ) ||
																														  colorName.includes(
																																"橙紅"
																														  )
																														? "bg-orange-500"
																														: colorName.includes(
																																	"棕"
																															  )
																															? "bg-orange-800"
																															: "bg-green-600"
																									}`}
																								></div>
																								<span className="text-xs">
																									{
																										colorName
																									}
																								</span>
																							</div>
																						)
																					);
																				}
																			)}
																		</div>
																	</div>

																	{/* Female Colors */}
																	<div className="p-2 text-center border-r border-green-200">
																		<div className="flex flex-wrap justify-center gap-1">
																			{situation.colors.female.map(
																				(
																					colorText,
																					colorIndex
																				) => {
																					// Extract color names from the full text
																					const colorMatches =
																						colorText.match(
																							/[深淺][藍綠黃紅白黑灰橙紫粉棕米][\w色]*/g
																						) ||
																							colorText.match(
																								/[藍綠黃紅白黑灰橙紫粉棕米淡][\w色]*/g
																							) || [
																								"冰藍",
																							];
																					return colorMatches.map(
																						(
																							colorName,
																							nameIndex
																						) => (
																							<div
																								key={`${colorIndex}-${nameIndex}`}
																								className="flex items-center mb-1 space-x-1"
																							>
																								<div
																									className={`w-3 h-3 rounded-full ${
																										colorName.includes(
																											"粉"
																										) ||
																										colorName.includes(
																											"淺粉"
																										)
																											? "bg-pink-300"
																											: colorName.includes(
																														"紫"
																												  ) ||
																												  colorName.includes(
																														"淡紫"
																												  )
																												? "bg-purple-300"
																												: colorName.includes(
																															"藍"
																													  ) ||
																													  colorName.includes(
																															"冰藍"
																													  )
																													? "bg-blue-200"
																													: colorName.includes(
																																"米"
																														  ) ||
																														  colorName.includes(
																																"米色"
																														  )
																														? "bg-yellow-100"
																														: colorName.includes(
																																	"白"
																															  ) ||
																															  colorName.includes(
																																	"銀白"
																															  )
																															? "bg-gray-100"
																															: colorName.includes(
																																		"黃"
																																  ) ||
																																  colorName.includes(
																																		"淡黃"
																																  )
																																? "bg-yellow-200"
																																: "bg-pink-200"
																									}`}
																								></div>
																								<span className="text-xs">
																									{
																										colorName
																									}
																								</span>
																							</div>
																						)
																					);
																				}
																			)}
																		</div>
																	</div>

																	{/* Energy Function */}
																	<div className="p-2 text-center">
																		<span className="text-xs text-gray-600">
																			{
																				situation.energyFunction
																			}
																		</span>
																	</div>
																</div>
															)
														)}
													</div>
												) : (
													<div className="p-4 border border-orange-300 rounded-lg bg-orange-50">
														<h5 className="mb-2 font-medium text-orange-700">
															場合色彩搭配
														</h5>
														<p className="text-sm text-orange-600">
															🔄 AI
															尚未生成場合色彩搭配表格。這是因為當前的
															API
															輸出中缺少結構化的色彩建議部分。
														</p>
														<p className="mt-2 text-xs text-gray-500">
															請重新生成分析以獲取完整的色彩搭配建議。
														</p>
													</div>
												)}
											</div>
										</div>
									</div>
								) : (
									/* Regular text content */
									<div className="text-base leading-relaxed text-gray-700 whitespace-pre-line">
										{typeof activeCategory.content ===
											"object" &&
										activeCategory.content.type === "text"
											? activeCategory.content.content
											: activeCategory.content}
									</div>
								)}
							</div>
						</div>
					</div>
				</div>

				{/* Motto Section */}
				{/* <div className="p-6 mt-8 text-center bg-gradient-to-r from-pink-100 to-red-100 rounded-xl">
					<p className="text-lg font-medium text-gray-800">
						💕 {analysisData.motto}
					</p>
				</div> */}
			</section>
		</ComponentErrorBoundary>
	);
}
