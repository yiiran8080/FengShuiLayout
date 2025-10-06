"use client";

import { useState, useEffect } from "react";
import { ComponentErrorBoundary } from "./ErrorHandling";
import { getConcernColor } from "../utils/colorTheme";

// Helper functions to map stems and branches to their elements
const getStemElement = (stem) => {
	const stemElements = {
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
	};
	return stemElements[stem] || "木";
};

const getBranchElement = (branch) => {
	const branchElements = {
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
	return branchElements[branch] || "火";
};

// Helper function to generate concern-specific fallback content
const getConcernSpecificContent = (concern, yearStem, yearBranch) => {
	const contentMap = {
		健康: {
			risks: `健康方面需特別注意：${yearStem}${getStemElement(yearStem)}年易有情緒波動影響睡眠品質，${yearBranch}${getBranchElement(yearBranch)}沖擊可能導致消化系統敏感。建議定期健檢，注意作息規律。`,
			suggestions: `健康養生建議：適合進行溫和運動如瑜伽、太極，多攝取應季蔬果。避免過度勞累，保持心境平和。可考慮中醫調理體質，增強免疫力。`,
			conclusion: `2025年健康運勢整體穩定，但需注意防範小病痛累積。${yearStem}${yearBranch}年適合建立長期健康習慣，重視預防勝於治療，身心靈平衡發展將帶來良好體質基礎。`,
		},
		事業: {
			risks: `事業發展風險：${yearStem}${getStemElement(yearStem)}年容易遇到決策分歧或合作夥伴意見不合，${yearBranch}${getBranchElement(yearBranch)}的變動能量可能帶來職場環境變化。需謹慎處理人際關係。`,
			suggestions: `事業發展建議：適合主動學習新技能，建立專業優勢。把握${yearStem}年的機會拓展業務網絡，但避免過度擴張。穩紮穩打，注重品質勝過速度。`,
			conclusion: `2025年事業運勢有突破機會，${yearStem}${yearBranch}年帶來新的發展契機。適合轉型升級或開拓新領域，但需平衡理想與現實，謹慎評估風險後再行動。`,
		},
		財運: {
			risks: `財運風險提醒：${yearStem}${getStemElement(yearStem)}年易有衝動消費傾向，投資方面需避免跟風操作。${yearBranch}${getBranchElement(yearBranch)}的能量變化可能影響收入穩定性，需做好財務規劃。`,
			suggestions: `財運提升建議：適合穩健投資策略，分散風險。增加技能投資自己，提升賺錢能力。記帳理財，控制不必要支出。可考慮長期儲蓄計劃。`,
			conclusion: `2025年財運機會與挑戰並存，${yearStem}${yearBranch}年適合重新檢視財務狀況。通過學習理財知識和謹慎投資，有望建立更穩固的財富基礎。`,
		},
		感情: {
			risks: `感情風險警示：${yearStem}${getStemElement(yearStem)}年容易因溝通不當引發誤會，${yearBranch}${getBranchElement(yearBranch)}的變動可能帶來感情考驗。單身者需避免過於挑剔，已婚者需注意包容理解。`,
			suggestions: `感情經營建議：多關注伴侶的感受，增加互動時間。單身者可通過朋友介紹或參加社交活動認識合適對象。重視溝通技巧，學會表達和傾聽。`,
			conclusion: `2025年感情運勢需要用心經營，${yearStem}${yearBranch}年帶來感情新機會。無論單身或有伴，都適合反思感情模式，提升情商，建立更成熟穩定的感情關係。`,
		},
	};

	// Support both simplified and traditional Chinese characters
	const supportedConcern =
		concern === "事业" ? "事業" : concern === "财运" ? "財運" : concern;
	return contentMap[supportedConcern] || contentMap["事業"];
};

export default function GanZhi({ userInfo, currentYear = 2025 }) {
	const [analysisData, setAnalysisData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [activeSection, setActiveSection] = useState("tianGan"); // Will be set dynamically

	// Generate AI analysis based on user's birth info and current year
	const generateGanZhiAnalysis = (userInfo, year) => {
		const concern = userInfo?.concern || "事業";
		const problem = userInfo?.problem || "";
		const birthday = userInfo?.birthDateTime || "";
		const gender = userInfo?.gender || "male";

		const prompt = `
角色设定：「你是一位资深八字命理师，精通事业格局与流年互动。请严格按以下结构生成报告，所有【】标题必须原文保留，专业术语需精确对应十神生克关系。」

客户资料：${birthday}出生，${gender === "male" ? "男性" : "女性"}，关注领域：${concern}
具体问题：${problem}
当前年份：${year}年

生成规则：
1. 结构强制：依序输出7大模块，不可删改标题或调整顺序
2. 术语规范：
   - 刑冲合害需标注符号（如「寅巳刑」「未戌刑」）
   - 十神属性精确表述（如「巳火劫财」「乙木正印」）
   - 格局命名需含五行矛盾（例：「火炎土燥」「焦土熔金」）
3. 流年关键词：固定输出3个四字词＋破折号解释
4. 变量替换：方括号 [ ] 内为可替换字段，保持其他文字不变

【${year}流年詳解】
1.【流年干支作用】
2.【流年天干/地支各自觸發的三重效應】  
3.【白話版實際表現】

请根据客户的具体关注领域${concern}和问题"${problem}"，调整分析重点和建议方向。
`;

		// Generate content based on user's specific concern and birth data
		const getYearlyStems = (year) => {
			const stems = [
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
			const branches = [
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
			const stemIndex = (year - 4) % 10;
			const branchIndex = (year - 4) % 12;
			return { stem: stems[stemIndex], branch: branches[branchIndex] };
		};

		const yearGanZhi = getYearlyStems(year);
		const currentStem = yearGanZhi.stem;
		const currentBranch = yearGanZhi.branch;

		// Dynamic content based on user's concern
		const concernBasedAnalysis = {
			事業: {
				focus: "事業發展、職場競爭、創業機遇",
				risks: "合夥糾紛、職場人事、項目變動",
				advice: "穩固職業基礎、避免冒進擴張",
			},
			財運: {
				focus: "投資理財、收入變化、財富積累",
				risks: "投資虧損、破財風險、資金周轉",
				advice: "保守理財、避免高風險投資",
			},
			感情: {
				focus: "感情發展、婚戀機遇、人際關係",
				risks: "感情糾紛、第三者介入、關係破裂",
				advice: "理性溝通、避免感情衝動",
			},
			健康: {
				focus: "身體狀況、疾病預防、養生調理",
				risks: "健康問題、意外傷害、情緒波動",
				advice: "注重養生、定期檢查、情緒管理",
			},
			學業: {
				focus: "學習進展、考試運勢、技能提升",
				risks: "學習障礙、考試失利、專注力不足",
				advice: "穩扎穩打、系統學習、避免急躁",
			},
		};

		const analysis =
			concernBasedAnalysis[concern] || concernBasedAnalysis["事業"];

		// For demo purposes, return structured data based on the example you provided
		return {
			title: `${year}年流年詳解`,
			description: `針對${concern}領域的專業分析：如同一陣東風來襲（${currentStem}木），點燃原有的火苗（丙火），引發漣漪，但巨實相衝濟勢如場蕩適，易生異動。流年作用重點在調和機緣，否則火土失調，導致${analysis.risks}。整體而言，此年干支提升${analysis.focus}的關注度，適合${analysis.advice}，惟需謹慎應對各種挑戰。`,

			sections: {
				[`天干${currentStem}${getStemElement(currentStem)}-正印`]: {
					title: `天干${currentStem}${getStemElement(currentStem)}觸發三重效應`,
					subtitle: `天干${currentStem}${getStemElement(currentStem)}（正印）三重效應`,
					badges: [
						{
							text: "生身助劫",
							color: "bg-green-100 text-green-700",
						},
						{
							text: `${currentStem}庚合-合絆虛金`,
							color: "bg-yellow-100 text-yellow-700",
						},
						{
							text: "木焚添火",
							color: "bg-orange-100 text-orange-700",
						},
					],
					effects: [
						{
							title: "生身助劫",
							content: `強化日主自信/野心，同時助長劫財（火）奪財（金）之勢。在${concern}方面，貴人運存在，但助力可能體現在非直接層面（如建議、資質），或伴隨較高成本/付出。特別是在${problem ? `"${problem}"` : analysis.focus}方面需要特別注意。`,
						},
						{
							title: `${currentStem}庚合-合絆虛金`,
							content: `羈絆、阻礙與「金」相關的機遇（如金融操作、金屬相關項目、精密交易），或使此類機遇條件苛刻、進展遲緩。對於${concern}領域，可能表現為${analysis.risks}的情況出現。`,
						},
						{
							title: "木焚添火",
							content: `為地支${currentBranch}火提供燃料，加劇全局火炎熔金之勢。在${concern}方面容易出現過度激進或衝動的決策，需要特別謹慎。`,
						},
					],
				},
				[`地支${currentBranch}${getBranchElement(currentBranch)}-劫財`]:
					{
						title: `地支${currentBranch}${getBranchElement(currentBranch)}觸發三重效應`,
						subtitle: `地支${currentBranch}${getBranchElement(currentBranch)}（劫財/驛馬）三重效應`,
						badges: [
							{
								text: "劫財明奪",
								color: "bg-red-100 text-red-700",
							},
							{
								text: "刑動破基",
								color: "bg-purple-100 text-purple-700",
							},
							{
								text: "驛馬奔忙",
								color: "bg-blue-100 text-blue-700",
							},
						],
						effects: [
							{
								title: "劫財明奪（核心凶效）",
								content: `${currentBranch}火劫財強勢登場，直接、猛烈地克奪月干正財辛金。在${concern}領域，體現為：激烈競爭導致利潤削薄甚至虧損、合夥人/競爭對手搶奪利益、意外大額支出。${problem ? `針對"${problem}"的情況，` : ""}特別需要防範${analysis.risks}。`,
							},
							{
								title: `刑動破基（寅${currentBranch}刑）`,
								content: `動搖財富根基與穩定環境，導致收入來源中斷/不穩（如項目終止、客戶流失、崗位變動）、預期收益落空、墊付款難收回、因是非（官非、口舌）破財。在${concern}方面，需要特別注意基礎穩定性。`,
							},
							{
								title: "驛馬奔忙",
								content: `奔波勞碌求財，但多屬『火中取栗』，付出與回報嚴重不成正比，且加劇身心消耗與決策失誤風險。對於${concern}領域的發展，建議${analysis.advice}。`,
							},
						],
					},
			},

			ganZhiCore: {
				title: "流年干支作用",
				content: `${currentStem}${currentBranch}流年作用於原局：天干${currentStem}木（正印）：再生旺丙火日主（身本旺，印生更旺），${currentStem}庚合（原局庚虛透或無，此合難化，更多是羈絆消耗之象，或暗示與金相關的機遇有阻礙）加劇火勢克金（財）。地支${currentBranch}火（劫財祿神）：${currentBranch}火為劫財（丙火之祿）：強力助火，火勢登頂，猛烈熔煉財星辛金。${currentBranch === "巳" ? "巳刑寅" : `${currentBranch}刑寅`}（日支）- 核心凶動！：寅${currentBranch}相刑（主變動、是非、內部損耗）動搖事業/財富根基，易引發合作破裂、計畫生變、意外支出。針對${concern}領域，${problem ? `特別是"${problem}"相關的問題，` : ""}此年需要格外謹慎應對各種挑戰。`,
			},

			practicalManifestations: {
				title: "白話版實際表現",
				description: `此年${concern}運呈「生存保衛戰」格局，核心目標：保住${analysis.focus}穩定性、嚴控風險支出、杜絕投機行為、化解潛在糾紛、維持身心健康。${problem ? `針對您關心的"${problem}"，` : ""}建議${analysis.advice}，不求激進突破，但求穩健發展或減少損失。`,

				caseStudies: {
					title: "經典案例",
					cases: [
						{
							category: `${concern}領域 - 創業者/自僱人士`,
							description: `受${currentStem}木印星影響（政策風向、融資消息），可能啟動新項目（寅${currentBranch}刑動主變）。但${currentBranch}火劫財主強勢競爭者入場或合夥人反目爭利，寅${currentBranch}刑易致核心客戶流失、供應鏈斷裂、關鍵合約出問題。火旺熔金，項目極度燒錢、現金流斷裂風險高企。${problem ? `特別是關於"${problem}"的規劃需要格外謹慎。` : ""}`,
						},
						{
							category: `${concern}領域 - 職場人士`,
							description: `或有職責擴大、新項目機會（印），但面臨內部激烈競爭（劫財）、複雜人事鬥爭（刑）。實際收入（正財辛金）易受剋扣、扣薪、獎金縮水或遲發（火克金）。${currentBranch}未拱火，易因團隊失誤或過度承擔而背鍋、扣薪。${concern === "事業" || concern === "事业" ? "在職業發展上需要特別謹慎處理人際關係。" : `在${concern}方面需要平衡工作與個人需求。`}`,
						},
						{
							category: `${concern}領域 - 投資者/理財者`,
							description: `任何高風險投資（尤其股票、期貨、虛擬幣、礦產）大概率遭遇『熔斷式』虧損（火旺熔金象）。不動產相關操作（買賣、抵押）易遇糾紛、估值陷阱或流動性凍結（刑+土滯）。${concern === "財運" || concern === "财运" ? `針對您的理財需求，建議採取極度保守的策略。` : `即使關注${concern}，也要注意財務風險管控。`}`,
						},
					],
				},

				dangerZones: {
					title: "注意雷區",
					subtitle: "極度高危",
					zones: [
						{
							category: `${concern}領域高風險行為`,
							description:
								concern === "財運" || concern === "财运"
									? "包括但不限於：股市、幣圈、高槓桿、陌生領域創業、加盟。『火中取栗』在此年是字面意義的警告。"
									: `在${concern}方面避免過度激進或冒險的決策，特別是涉及重大變動的選擇。${problem ? `對於"${problem}"相關的決定需要三思而後行。` : ""}`,
						},
						{
							category: "合夥、借貸、擔保",
							description: `比劫奪財年，合夥必生嫌隙利爭，借貸難收回，擔保必惹禍上身。務必獨資、現金交易、不碰他人財務。${concern === "感情" ? "感情關係中也要避免金錢糾葛。" : ""}`,
						},
						{
							category: `過度擴張/${concern}領域急進`,
							description: `火旺火虛，表面繁榮下基礎極度脆弱。任何在${concern}領域的急進擴張都可能帶來風險。${analysis.advice}是當前最佳策略。`,
						},
						{
							category: "忽略契約與法律風險",
							description: `寅${currentBranch}刑易惹官非。任何協議務必條款清晰、合法合規，留存證據。避免口頭承諾。${concern === "事業" || concern === "事业" ? "商業合作中更要謹慎。" : ""}`,
						},
						{
							category: `忽視健康與情緒（影響${concern}發展）`,
							description: `焦躁之局損身心。健康崩潰（尤其心腦血管）是最大風險源。情緒失控易致決策連環錯。${concern}領域的發展也需要良好的身心狀態支撐。`,
						},
					],
				},
			},
		};
	};

	// Function to call AI API for real content generation
	const generateAIAnalysis = async (userInfo, year) => {
		try {
			const response = await fetch("/api/ganzhi-analysis", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					userInfo,
					currentYear: year,
				}),
			});

			if (!response.ok) {
				throw new Error("Failed to generate AI analysis");
			}

			const data = await response.json();

			if (data.success) {
				return parseAIResponse(data, userInfo, year);
			} else {
				throw new Error(data.message || "AI analysis failed");
			}
		} catch (error) {
			console.error("AI Analysis Error:", error);
			// Fallback to mock data if AI fails
			const fallbackData = generateGanZhiAnalysis(userInfo, year);
			const yearGanZhi = getYearlyStems(year);
			// Ensure fallback data has proper parsedContent structure
			return {
				...fallbackData,
				parsedContent: {
					description:
						fallbackData.description || "流年分析載入中...",
					tianGan: {
						title: `天干${yearGanZhi.stem}${getStemElement(yearGanZhi.stem)}-正官`,
						effects: [
							{
								title: "職權提升",
								content:
									"天干在事業方面的正面影響，帶來升職機會和責任提升。",
							},
							{
								title: "合庚減洩",
								content:
									"需要注意創意發揮受限，建議以穩健執行為主。",
							},
							{
								title: "官星透出",
								content:
									"利於求名考績，但需防過於保守而錯失機會。",
							},
						],
						keyActions: [],
					},
					diZhi: {
						title: `地支${yearGanZhi.branch}${getBranchElement(yearGanZhi.branch)}-偏印`,
						effects: [
							{
								title: "火旺生土",
								content:
									"增強日主能量，利於扛壓與長期項目推進，但需防固執己見。",
							},
							{
								title: "巳酉半合",
								content:
									"技術專業能力易受肯定，但需避免與同事的意見衝突。",
							},
							{
								title: "伏吟月支",
								content:
									"原有工作環境可能重複挑戰，需主動尋求突破。",
							},
						],
						keyActions: [],
					},
					practicalResults: "實際表現分析載入中...",
					risks: "風險分析載入中...",
					suggestions: "建議內容載入中...",
					conclusion: `${year}年為突破年，雖有壓力卻暗藏機遇，需平衡各方面因素。`,
				},
			};
		}
	};

	// Parse AI response into the expected format
	const parseAIResponse = (aiData, userInfo, year) => {
		const concern = userInfo?.concern || "事業";
		const problem = userInfo?.problem || "";
		const yearGanZhi = aiData.yearGanZhi;
		const analysis = aiData.analysis;

		// Parse the AI analysis to extract structured content
		const parseAIContent = (text) => {
			console.log(
				"🔍 parseAIContent called with text length:",
				text?.length
			);

			const result = {
				description: "",
				tianGan: {
					title: `天干${yearGanZhi?.stem || "乙"}${getStemElement(yearGanZhi?.stem || "乙")}-正官`,
					effects: [],
					keyActions: [],
				},
				diZhi: {
					title: `地支${yearGanZhi?.branch || "巳"}${getBranchElement(yearGanZhi?.branch || "巳")}-偏印`,
					effects: [],
					keyActions: [],
				},
				practicalResults: "",
				risks: "",
				suggestions: "",
				conclusion: "",
			};

			if (!text || typeof text !== "string") {
				console.log("⚠️ Invalid text provided to parseAIContent");
				return result;
			}

			// Log a sample of the text for debugging
			console.log(
				"📄 Sample text (first 300 chars):",
				text.substring(0, 300)
			);
			console.log("🔍 Looking for patterns...");
			console.log(
				"- Contains ### 2. 【天干:",
				text.includes("### 2. 【天干")
			);
			console.log(
				"- Contains ### 3. 【地支:",
				text.includes("### 3. 【地支")
			);

			// Extract description - look for 格局特性 or take first meaningful paragraph
			let descMatch = text.match(/格局特性[：:]*(.*?)(?=[\n\r]|---)/s);
			if (!descMatch) {
				// If no 格局特性, take content from 八字分析 section
				descMatch = text.match(/\*\*八字[：:](.*?)(?=---|###)/s);
			}
			if (!descMatch) {
				// Fallback: take content after first heading until next section
				descMatch = text.match(/(?:###.*?\n)(.*?)(?=###|---)/s);
			}
			if (descMatch) {
				result.description = descMatch[1]
					.trim()
					.replace(/\*\*/g, "")
					.replace(/^\s*[\-\*]\s*/gm, "")
					.trim();
				console.log(
					"✅ Description extracted:",
					result.description.substring(0, 100)
				);
			} else {
				console.log("⚠️ No description pattern found");
			}

			// Extract 天干 effects with better parsing
			const tianGanSection = text.match(
				/### 2\. 【天干.*?效應】(.*?)(?=### 3\.|---)/s
			);
			if (tianGanSection) {
				console.log("✅ TianGan section found");
				const tianGanText = tianGanSection[1];

				// Extract title - look for pattern like "天干乙木為**正官**"
				const titleMatch = tianGanText.match(
					/天干(.+?)為\*\*(.+?)\*\*/
				);
				if (titleMatch) {
					result.tianGan.title = `天干${titleMatch[1].trim()}-${titleMatch[2].trim()}`;
					console.log(
						"✅ TianGan title extracted:",
						result.tianGan.title
					);
				} else {
					// Fallback: extract from year info
					result.tianGan.title = `天干${yearGanZhi?.stem || "乙"}${getStemElement(yearGanZhi?.stem || "乙")}-正官`;
					console.log("⚠️ TianGan title fallback used");
				}

				// Extract numbered effects (1., 2., 3.)
				const effectMatches = tianGanText.match(
					/\d+\.\s*\*\*(.+?)\*\*[：:]*(.*?)(?=\d+\.|$)/gs
				);
				if (effectMatches) {
					result.tianGan.effects = effectMatches
						.slice(0, 3)
						.map((match, index) => {
							const effectMatch = match.match(
								/\d+\.\s*\*\*(.+?)\*\*[：:]*(.*)/s
							);
							return {
								title: effectMatch
									? effectMatch[1].trim()
									: `效應${index + 1}`,
								content: effectMatch
									? effectMatch[2].trim()
									: match
											.replace(
												/\d+\.\s*\*\*.*?\*\*[：:]*/,
												""
											)
											.trim(),
							};
						});
					console.log(
						`✅ Extracted ${result.tianGan.effects.length} TianGan effects`
					);
				} else {
					console.log("⚠️ No TianGan effects found with regex");
				}

				// If not enough effects, create fallback ones
				while (result.tianGan.effects.length < 3) {
					const index = result.tianGan.effects.length;
					result.tianGan.effects.push({
						title:
							["職權提升", "合庚減洩", "官星透出"][index] ||
							`效應${index + 1}`,
						content: `天干${yearGanZhi?.stem || "乙"}在${concern}方面的第${index + 1}重效應，具體影響需結合個人八字分析。`,
					});
				}
			} else {
				console.log("⚠️ TianGan section not found with regex");
			}

			// Extract 地支 effects with similar logic
			const diZhiSection = text.match(
				/### 3\. 【地支.*?效應】(.*?)(?=### 4\.|---)/s
			);
			if (diZhiSection) {
				const diZhiText = diZhiSection[1];

				// Extract title
				const titleMatch = diZhiText.match(/地支(.+?)為\*\*(.+?)\*\*/);
				if (titleMatch) {
					result.diZhi.title = `地支${titleMatch[1].trim()}-${titleMatch[2].trim()}`;
				} else {
					result.diZhi.title = `地支${yearGanZhi?.branch || "巳"}${getBranchElement(yearGanZhi?.branch || "巳")}-偏印`;
				}

				// Extract numbered effects
				const effectMatches = diZhiText.match(
					/\d+\.\s*\*\*(.+?)\*\*[：:]*(.*?)(?=\d+\.|$)/gs
				);
				if (effectMatches) {
					result.diZhi.effects = effectMatches
						.slice(0, 3)
						.map((match, index) => {
							const effectMatch = match.match(
								/\d+\.\s*\*\*(.+?)\*\*[：:]*(.*)/s
							);
							return {
								title: effectMatch
									? effectMatch[1].trim()
									: `效應${index + 1}`,
								content: effectMatch
									? effectMatch[2].trim()
									: match
											.replace(
												/\d+\.\s*\*\*.*?\*\*[：:]*/,
												""
											)
											.trim(),
							};
						});
				}

				// Fallback effects if needed
				while (result.diZhi.effects.length < 3) {
					const index = result.diZhi.effects.length;
					result.diZhi.effects.push({
						title:
							["火旺生土", "巳酉半合", "伏吟月支"][index] ||
							`效應${index + 1}`,
						content: `地支${yearGanZhi?.branch || "巳"}在${concern}方面的第${index + 1}重效應，需結合流年特點進行分析。`,
					});
				}
			}

			// Extract key actions from 關鍵作用 or similar sections
			const keyActionsMatch = text.match(
				/(?:\*\*關鍵作用\*\*|\*\*關鍵影響\*\*)[：:]?(.*?)(?=---|###)/s
			);
			if (keyActionsMatch) {
				const actions = keyActionsMatch[1]
					.split(/[-•]\s*/)
					.filter((action) => action.trim())
					.map((action) => action.trim())
					.slice(0, 2);
				result.tianGan.keyActions = actions;
			}

			// Extract practical results
			const practicalMatch = text.match(
				/### 4\. 【實際表現】(.*?)(?=### 5\.|---)/s
			);
			if (practicalMatch) {
				result.practicalResults = practicalMatch[1].trim();
			}

			// Extract risks and suggestions with improved parsing
			const noticeMatch = text.match(
				/### 5\. 【注意事項】(.*?)(?=### |$)/s
			);
			if (noticeMatch) {
				const noticeText = noticeMatch[1];

				// Look for specific subsections
				const riskMatch = noticeText.match(
					/\*\*風險提醒\*\*[：:]?(.*?)(?=\*\*建議指引\*\*|\*\*總結要點\*\*|$)/s
				);
				if (riskMatch) {
					result.risks = riskMatch[1]
						.trim()
						.replace(/\*\*/g, "")
						.replace(/^\s*[\-\*]\s*/gm, "")
						.trim();
				}

				const suggestionMatch = noticeText.match(
					/\*\*建議指引\*\*[：:]?(.*?)(?=\*\*總結要點\*\*|$)/s
				);
				if (suggestionMatch) {
					result.suggestions = suggestionMatch[1]
						.trim()
						.replace(/\*\*/g, "")
						.replace(/^\s*[\-\*]\s*/gm, "")
						.trim();
				}

				const conclusionMatch = noticeText.match(
					/\*\*總結要點\*\*[：:]?(.*?)$/s
				);
				if (conclusionMatch) {
					result.conclusion = conclusionMatch[1]
						.trim()
						.replace(/\*\*/g, "")
						.replace(/^\s*[\-\*]\s*/gm, "")
						.trim();
				}

				// Fallback: if no specific subsections found, try to extract risks and suggestions differently
				if (!result.risks && !result.suggestions) {
					const riskFallback =
						noticeText.match(/風險[：:]?(.*?)(?=建議|$)/s);
					if (riskFallback) {
						result.risks = riskFallback[1]
							.trim()
							.replace(/\*\*/g, "");
					}

					const suggestionFallback =
						noticeText.match(/建議[：:]?(.*?)(?=總結|$)/s);
					if (suggestionFallback) {
						result.suggestions = suggestionFallback[1]
							.trim()
							.replace(/\*\*/g, "");
					}
				}
			}

			// Extract conclusion
			const conclusionMatch = text.match(
				/(?:### 總結|總結)[：:]?(.*?)$/s
			);
			if (conclusionMatch) {
				result.conclusion = conclusionMatch[1].trim();
			} else {
				// Fallback conclusion
				result.conclusion = `2025年為${concern}突破年，雖有壓力卻暗藏機遇，需平衡「官星責任」與「印星自信」，並以金水調候避免過燥。主動爭取機會、強化專業表現，有望獲得實質進展。`;
			}

			return result;
		};

		const parsedContent = parseAIContent(analysis);

		// Ensure parsedContent is properly structured with fallbacks
		const concernContent = getConcernSpecificContent(
			concern,
			yearGanZhi?.stem || "乙",
			yearGanZhi?.branch || "巳"
		);

		const safeParsedContent = {
			description:
				parsedContent.description ||
				`針對${concern}領域的專業分析，基於您的八字和流年${yearGanZhi?.stem || "乙"}${yearGanZhi?.branch || "巳"}的相互作用。`,
			tianGan: {
				title:
					parsedContent.tianGan?.title ||
					`天干${yearGanZhi?.stem || "乙"}${getStemElement(yearGanZhi?.stem || "乙")}-正官`,
				effects:
					parsedContent.tianGan?.effects?.length > 0
						? parsedContent.tianGan.effects
						: [
								{
									title: "職權提升",
									content:
										"天干在事業方面的正面影響，帶來升職機會和責任提升。",
								},
								{
									title: "合庚減洩",
									content:
										"需要注意創意發揮受限，建議以穩健執行為主。",
								},
								{
									title: "官星透出",
									content:
										"利於求名考績，但需防過於保守而錯失機會。",
								},
							],
				keyActions: parsedContent.tianGan?.keyActions || [],
			},
			diZhi: {
				title:
					parsedContent.diZhi?.title ||
					`地支${yearGanZhi?.branch || "巳"}${getBranchElement(yearGanZhi?.branch || "巳")}-偏印`,
				effects:
					parsedContent.diZhi?.effects?.length > 0
						? parsedContent.diZhi.effects
						: [
								{
									title: "火旺生土",
									content:
										"增強日主能量，利於扛壓與長期項目推進，但需防固執己見。",
								},
								{
									title: "巳酉半合",
									content:
										"技術專業能力易受肯定，但需避免與同事的意見衝突。",
								},
								{
									title: "伏吟月支",
									content:
										"原有工作環境可能重複挑戰，需主動尋求突破。",
								},
							],
				keyActions: parsedContent.diZhi?.keyActions || [],
			},
			practicalResults:
				parsedContent.practicalResults ||
				`在${concern}領域將呈現階段性變化，結合流年${yearGanZhi?.stem || "乙"}${yearGanZhi?.branch || "巳"}的影響，建議關注具體表現時機和調整策略。`,
			risks: parsedContent.risks || concernContent.risks,
			suggestions:
				parsedContent.suggestions || concernContent.suggestions,
			conclusion: parsedContent.conclusion || concernContent.conclusion,
		};

		return {
			title: `${year}年流年詳解`,
			description: safeParsedContent.description,
			aiAnalysis: analysis,
			baZi: aiData.baZi,
			yearGanZhi: yearGanZhi,
			parsedContent: safeParsedContent,
			concern: concern,
			problem: problem,
		};
	};

	useEffect(() => {
		const loadAnalysis = async () => {
			setIsLoading(true);
			try {
				console.log("� GanZhi always generating fresh AI analysis");

				const aiData = await generateAIAnalysis(userInfo, currentYear);
				setAnalysisData(aiData);
				// Set the active section to the first toggle option
				setActiveSection("tianGan");
			} catch (error) {
				console.error("Failed to load analysis:", error);
				// Fallback to mock data with proper structure
				const mockData = generateGanZhiAnalysis(userInfo, currentYear);
				const yearGanZhi = getYearlyStems(currentYear);
				// Convert mock data to expected format
				const structuredMockData = {
					...mockData,
					parsedContent: {
						description:
							mockData.description || "流年分析載入中...",
						tianGan: {
							title: `天干${yearGanZhi.stem}${getStemElement(yearGanZhi.stem)}-正官`,
							effects: [
								{
									title: "職權提升",
									content:
										"天干在事業方面的正面影響，帶來升職機會和責任提升。",
								},
								{
									title: "合庚減洩",
									content:
										"需要注意創意發揮受限，建議以穩健執行為主。",
								},
								{
									title: "官星透出",
									content:
										"利於求名考績，但需防過於保守而錯失機會。",
								},
							],
							keyActions: [],
						},
						diZhi: {
							title: `地支${yearGanZhi.branch}${getBranchElement(yearGanZhi.branch)}-偏印`,
							effects: [
								{
									title: "火旺生土",
									content:
										"增強日主能量，利於扛壓與長期項目推進，但需防固執己見。",
								},
								{
									title: "巳酉半合",
									content:
										"技術專業能力易受肯定，但需避免與同事的意見衝突。",
								},
								{
									title: "伏吟月支",
									content:
										"原有工作環境可能重複挑戰，需主動尋求突破。",
								},
							],
							keyActions: [],
						},
						practicalResults: "實際表現分析載入中...",
						risks: "風險分析載入中...",
						suggestions: "建議內容載入中...",
						conclusion: `${currentYear}年為突破年，雖有壓力卻暗藏機遇，需平衡各方面因素。`,
					},
					yearGanZhi: {
						stem: currentYear === 2025 ? "乙" : "甲",
						branch: currentYear === 2025 ? "巳" : "午",
					},
				};
				setAnalysisData(structuredMockData);
				setActiveSection("tianGan");
			} finally {
				setIsLoading(false);
			}
		};

		loadAnalysis();
	}, [userInfo, currentYear]);

	if (isLoading) {
		return (
			<div
				className="py-6 mx-auto mb-6 bg-white sm:py-8 lg:py-10 sm:mb-10"
				style={{
					width: "95%",
					borderRadius: "45px sm:45px md:45px lg:45px xl:45px",
					boxShadow: "0 4px 4px rgba(0,0,0,0.25)",
				}}
			>
				<div className="py-6 text-center sm:py-8">
					<div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-[#A3B116] mx-auto mb-3 sm:mb-4"></div>
					<p
						className="text-[#5A5A5A] mb-2"
						style={{
							fontFamily: "Noto Sans HK, sans-serif",
							fontSize: "clamp(1rem, 3vw, 1.125rem)",
						}}
					>
						AI正在生成個性化流年干支分析...
					</p>
					<p
						className="text-gray-500"
						style={{
							fontFamily: "Noto Sans HK, sans-serif",
							fontSize: "clamp(0.875rem, 2.5vw, 0.875rem)",
						}}
					>
						根據您的八字信息和關注領域進行深度分析
					</p>
				</div>
			</div>
		);
	}

	// Safety check for analysisData structure
	if (!analysisData || !analysisData.parsedContent) {
		return (
			<div
				className="py-6 mx-auto mb-6 bg-white rounded-[45px] sm:py-8 lg:py-10 sm:mb-10"
				style={{
					width: "95%",
					boxShadow: "0 4px 4px rgba(0,0,0,0.25)",
				}}
			>
				<div className="py-6 text-center sm:py-8">
					<div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-[#A3B116] mx-auto mb-3 sm:mb-4"></div>
					<p
						className="text-[#5A5A5A] mb-2"
						style={{
							fontFamily: "Noto Sans HK, sans-serif",
							fontSize: "clamp(1rem, 3vw, 1.125rem)",
						}}
					>
						載入流年分析數據中...
					</p>
				</div>
			</div>
		);
	}

	return (
		<ComponentErrorBoundary componentName="GanZhi">
			<div
				className="py-6 mx-auto rounded-[45px] mb-6 bg-white sm:py-8 lg:py-10 sm:mb-10"
				style={{
					width: "95%",
					boxShadow: "0 4px 4px rgba(0,0,0,0.25)",
				}}
			>
				{/* Header */}
				<div className="px-4 mb-6 sm:mb-8 sm:px-6 md:px-8 lg:px-13">
					<h2
						className="mb-3 font-bold text-center lg:text-left sm:mb-4"
						style={{
							fontFamily: "Noto Serif TC, serif",
							fontSize: "clamp(1.75rem, 6vw, 3.5rem)",
							color: getConcernColor(userInfo),
							lineHeight: 1.1,
						}}
					>
						流年干支作用
					</h2>

					{/* Description */}
					<p
						className="mb-4 leading-relaxed text-gray-700 sm:mb-6"
						style={{
							fontFamily: "Noto Sans HK, sans-serif",
							fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
						}}
					>
						{analysisData?.description}
					</p>

					{/* Main Container with EFEFEF background */}
					<div
						className="bg-[#EFEFEF] rounded-lg p-4 sm:p-6 mb-4 sm:mb-6"
						style={{ boxShadow: "0 4px 4px rgba(0,0,0,0.25)" }}
					>
						{/* Toggle Buttons */}
						<div className="flex flex-col gap-3 mb-4 sm:flex-row sm:gap-4 sm:mb-6">
							<button
								onClick={() => setActiveSection("tianGan")}
								className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 flex-1 sm:flex-none text-center ${
									activeSection === "tianGan"
										? "text-white"
										: "bg-white text-black"
								}`}
								style={{
									fontFamily: "Noto Sans HK, sans-serif",
									fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
									backgroundColor:
										activeSection === "tianGan"
											? getConcernColor(userInfo)
											: undefined,
								}}
							>
								{analysisData?.parsedContent?.tianGan?.title ||
									`天干${analysisData?.yearGanZhi?.stem || "乙"}${getStemElement(analysisData?.yearGanZhi?.stem || "乙")}-正官`}
							</button>
							<button
								onClick={() => setActiveSection("diZhi")}
								className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 flex-1 sm:flex-none text-center ${
									activeSection === "diZhi"
										? "text-white"
										: "bg-white text-black"
								}`}
								style={{
									fontFamily: "Noto Sans HK, sans-serif",
									fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
									backgroundColor:
										activeSection === "diZhi"
											? getConcernColor(userInfo)
											: undefined,
								}}
							>
								{analysisData?.parsedContent?.diZhi?.title ||
									`地支${analysisData?.yearGanZhi?.branch || "巳"}${getBranchElement(analysisData?.yearGanZhi?.branch || "巳")}-偏印`}
							</button>
						</div>

						{/* Content based on active section */}
						{activeSection === "tianGan" && (
							<div>
								{/* Title */}
								<h3
									className="mb-3 font-black sm:mb-4"
									style={{
										fontFamily: "Noto Serif TC, serif",
										color: getConcernColor(userInfo),
										fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
										lineHeight: 1.2,
									}}
								>
									天干{analysisData?.yearGanZhi?.stem || "乙"}
									{getStemElement(
										analysisData?.yearGanZhi?.stem || "乙"
									)}
									觸發三重效應
								</h3>

								{/* Content from AI analysis */}
								<div
									className="mb-4 leading-relaxed text-gray-700 sm:mb-6"
									style={{
										fontFamily: "Noto Sans HK, sans-serif",
										fontSize:
											"clamp(0.875rem, 2.5vw, 1rem)",
									}}
								>
									{/* Extract content from sections 1 and 2 of AI analysis */}
								</div>

								{/* Key Actions Container */}
								{/* {analysisData?.parsedContent?.tianGan
									?.keyActions?.length > 0 && (
									<div
										className="bg-[#567156] text-white p-4 rounded-lg mb-6"
										style={{
											boxShadow:
												"0 4px 4px rgba(0,0,0,0.25)",
										}}
									>
										<h4
											className="mb-2 font-semibold"
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
											}}
										>
											關鍵作用
										</h4>
										<ul className="space-y-2">
											{analysisData.parsedContent.tianGan.keyActions.map(
												(action, index) => (
													<li
														key={index}
														className="text-sm"
													>
														- {action}
													</li>
												)
											)}
										</ul>
									</div>
								)}
 */}
								{/* Three Cards */}
								<div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
									{(
										analysisData?.parsedContent?.tianGan
											?.effects || [
											{
												title: "職權提升",
												content:
													"天干在事業方面的正面影響，帶來升職機會和責任提升。",
											},
											{
												title: "合庚減洩",
												content:
													"需要注意創意發揮受限，建議以穩健執行為主。",
											},
											{
												title: "官星透出",
												content:
													"利於求名考績，但需防過於保守而錯失機會。",
											},
										]
									)
										.slice(0, 3)
										.map((effect, index) => (
											<div
												key={index}
												className="bg-white rounded-lg p-4 h-[200px] flex flex-col"
												style={{
													boxShadow:
														"0 4px 4px rgba(0,0,0,0.25)",
												}}
											>
												<div
													className="p-2 mb-3 text-center text-white rounded-lg"
													style={{
														backgroundColor:
															getConcernColor(
																userInfo
															),
													}}
												>
													<h4
														className="font-semibold"
														style={{
															fontFamily:
																"Noto Sans HK, sans-serif",
														}}
													>
														{effect.title}
													</h4>
												</div>
												<div className="flex-1 overflow-y-auto">
													<p
														className="text-black text-[15px] leading-relaxed"
														style={{
															fontFamily:
																"Noto Sans HK, sans-serif",
														}}
													>
														{effect.content}
													</p>
												</div>
											</div>
										))}
								</div>
							</div>
						)}

						{/* DiZhi Section */}
						{activeSection === "diZhi" && (
							<div>
								{/* Title */}
								<h3
									className="mb-3 font-black sm:mb-4"
									style={{
										fontFamily: "Noto Serif TC, serif",
										color: getConcernColor(userInfo),
										fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
										lineHeight: 1.2,
									}}
								>
									地支
									{analysisData?.yearGanZhi?.branch || "巳"}
									{getBranchElement(
										analysisData?.yearGanZhi?.branch || "巳"
									)}
									觸發三重效應
								</h3>

								{/* Content from AI analysis */}
								<div
									className="mb-4 leading-relaxed text-gray-700 sm:mb-6"
									style={{
										fontFamily: "Noto Sans HK, sans-serif",
										fontSize:
											"clamp(0.875rem, 2.5vw, 1rem)",
									}}
								></div>

								{/* Three Cards */}
								<div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
									{(
										analysisData?.parsedContent?.diZhi
											?.effects || [
											{
												title: "火旺生土",
												content:
													"增強日主能量，利於扛壓與長期項目推進，但需防固執己見。",
											},
											{
												title: "巳酉半合",
												content:
													"技術專業能力易受肯定，但需避免與同事的意見衝突。",
											},
											{
												title: "伏吟月支",
												content:
													"原有工作環境可能重複挑戰，需主動尋求突破。",
											},
										]
									)
										.slice(0, 3)
										.map((effect, index) => (
											<div
												key={index}
												className="bg-white rounded-lg p-4 h-[200px] flex flex-col"
												style={{
													boxShadow:
														"0 4px 4px rgba(0,0,0,0.25)",
												}}
											>
												<div
													className="p-2 mb-3 text-center text-white rounded-lg"
													style={{
														backgroundColor:
															getConcernColor(
																userInfo
															),
													}}
												>
													<h4
														className="font-semibold"
														style={{
															fontFamily:
																"Noto Sans HK, sans-serif",
														}}
													>
														{effect.title}
													</h4>
												</div>
												<div className="flex-1 overflow-y-auto">
													<p
														className="text-black text-[15px] leading-relaxed"
														style={{
															fontFamily:
																"Noto Sans HK, sans-serif",
														}}
													>
														{effect.content}
													</p>
												</div>
											</div>
										))}
								</div>
							</div>
						)}
					</div>

					{/* Practical Results Section */}
					<div className="mb-4 sm:mb-6">
						<h3
							className="mb-3 font-semibold sm:mb-4"
							style={{
								fontFamily: "Noto Serif TC, serif",
								color: getConcernColor(userInfo),
								fontSize: "clamp(1.25rem, 4vw, 1.875rem)",
								lineHeight: 1.2,
							}}
						>
							實際表現
						</h3>
						<div
							className="leading-relaxed text-black"
							style={{
								fontFamily: "Noto Sans HK, sans-serif",
								fontSize: "clamp(0.875rem, 2.5vw, 0.9375rem)",
							}}
							dangerouslySetInnerHTML={{
								__html:
									analysisData?.parsedContent?.practicalResults
										?.replace(
											/\*\*(.+?)\*\*/g,
											"<strong>$1</strong>"
										)
										?.replace(/\n/g, "<br/>") ||
									analysisData?.aiAnalysis
										?.split("### 4. 【實際表現】")[1]
										?.split("### 5.")[0]
										?.replace(
											/\*\*(.+?)\*\*/g,
											"<strong>$1</strong>"
										)
										?.replace(/\n/g, "<br/>") ||
									"內容載入中...",
							}}
						/>
					</div>

					{/* Notice Section */}
					<div
						className="p-4 mb-4 bg-white border-2 rounded-lg sm:p-6 sm:mb-6"
						style={{ borderColor: getConcernColor(userInfo) }}
					>
						<h3
							className="mb-3 font-semibold sm:mb-4"
							style={{
								fontFamily: "Noto Serif TC, serif",
								color: getConcernColor(userInfo),
								fontSize: "clamp(1.125rem, 3.5vw, 1.5625rem)",
								lineHeight: 1.2,
							}}
						>
							【注意事項】
						</h3>

						{/* Risk Section */}
						<div className="mb-3 sm:mb-4">
							<div className="px-3 py-2 mb-2 text-white bg-red-500 rounded-lg sm:px-4">
								<h4
									className="font-semibold"
									style={{
										fontFamily: "Noto Sans HK, sans-serif",
										fontSize:
											"clamp(1.125rem, 3.5vw, 1.5625rem)",
									}}
								>
									風險
								</h4>
							</div>
							<div
								className="leading-relaxed text-black"
								style={{
									fontFamily: "Noto Sans HK, sans-serif",
									fontSize:
										"clamp(0.875rem, 2.5vw, 0.9375rem)",
								}}
								dangerouslySetInnerHTML={{
									__html:
										analysisData?.parsedContent?.risks
											?.replace(
												/\*\*(.+?)\*\*/g,
												"<strong>$1</strong>"
											)
											?.replace(/\n/g, "<br/>") ||
										analysisData?.aiAnalysis
											?.match(
												/\*\*風險\*\*[：:]?(.*?)(?=\*\*建議\*\*|-)/s
											)?.[1]
											?.replace(
												/\*\*(.+?)\*\*/g,
												"<strong>$1</strong>"
											)
											?.replace(/\n/g, "<br/>") ||
										"風險內容載入中...",
								}}
							/>
						</div>

						{/* Suggestions Section */}
						<div>
							<div className="px-3 py-2 mb-2 text-white bg-black rounded-lg sm:px-4">
								<h4
									className="font-semibold"
									style={{
										fontFamily: "Noto Sans HK, sans-serif",
										fontSize:
											"clamp(1.125rem, 3.5vw, 1.5625rem)",
									}}
								>
									建議
								</h4>
							</div>
							<div
								className="leading-relaxed text-black"
								style={{
									fontFamily: "Noto Sans HK, sans-serif",
									fontSize:
										"clamp(0.875rem, 2.5vw, 0.9375rem)",
								}}
								dangerouslySetInnerHTML={{
									__html:
										analysisData?.parsedContent?.suggestions
											?.replace(
												/\*\*(.+?)\*\*/g,
												"<strong>$1</strong>"
											)
											?.replace(/\n/g, "<br/>") ||
										analysisData?.aiAnalysis
											?.match(
												/\*\*建議\*\*[：:]?(.*?)(?=---|###|總結)/s
											)?.[1]
											?.replace(
												/\*\*(.+?)\*\*/g,
												"<strong>$1</strong>"
											)
											?.replace(/\n/g, "<br/>") ||
										"建議內容載入中...",
								}}
							/>
						</div>
					</div>

					{/* Conclusion */}
					<div>
						<h3
							className="mb-3 font-semibold text-red-500 sm:mb-4"
							style={{
								fontFamily: "Noto Serif TC, serif",
								fontSize: "clamp(1.125rem, 3.5vw, 1.5625rem)",
								lineHeight: 1.2,
							}}
						>
							總結：
						</h3>
						<p
							className="leading-relaxed text-black"
							style={{
								fontFamily: "Noto Sans HK, sans-serif",
								fontSize: "clamp(0.875rem, 2.5vw, 0.9375rem)",
							}}
							dangerouslySetInnerHTML={{
								__html:
									analysisData?.parsedContent?.conclusion?.replace(
										/\*\*(.+?)\*\*/g,
										"<strong>$1</strong>"
									) ||
									analysisData?.aiAnalysis
										?.match(/### 總結[：:]?(.*?)$/s)?.[1]
										?.replace(
											/\*\*(.+?)\*\*/g,
											"<strong>$1</strong>"
										) ||
									"2025年為事業突破年，雖有壓力卻暗藏升職契機，需平衡「官星責任」與「印星自信」，並以金水調候避免過燥。主動爭取考核、強化專業表現，有望在體制內獲得實質晉升。",
							}}
						/>
					</div>
				</div>
			</div>
		</ComponentErrorBoundary>
	);
}
