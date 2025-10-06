"use client";
import Navbar from "@/components/Navbar";
import {
	useRef,
	useState,
	useEffect,
	useCallback,
	useMemo,
	Suspense,
	use,
} from "react";
import { useSearchParams, useParams, useRouter } from "next/navigation";
import useMobile from "@/app/hooks/useMobile";
import useReportDoc from "@/app/hooks/useReportDoc";
import Image from "next/image";
import emitter from "@/lib/emitter";
import { EVENT_TRANSLATE_STATUS } from "@/types/constants";
import { useTranslations } from "next-intl";
import UnlockButton from "@/components/UnlockButton";
import Chapter3 from "./report/Chapter3";
import MingLi from "./report/MingLi";
import LiuNian from "./report/LiuNian";
import Chapter6 from "./report/Chapter6";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "react-toastify";
import { useReactToPrint } from "react-to-print";
import { useSession } from "next-auth/react";
import { get, post, patch } from "@/lib/ajax";
import { AntdSpin } from "antd-spin";
import getWuxingData from "@/lib/nayin";
import FamilyReport from "@/components/FamilyReport";
import Pet from "@/components/Pet";
import FourFortuneAnalysis from "@/components/FourFortuneAnalysis";
import { useLifeReportPersistence } from "@/hooks/useLifeReportPersistence";
import { useReportDataPersistence } from "@/hooks/useReportDataPersistence";

const wuxingColorMap = {
	金: "#B2A062",
	木: "#567156",
	水: "#939393",
	火: "#B4003C",
	土: "#DEAB20",
};

const ELEMENTS = ["金", "木", "水", "火", "土"];

const ELEMENT_COLORS = {
	金: "from-yellow-400 to-yellow-600",
	木: "from-green-500 to-green-700",
	水: "from-blue-500 to-blue-700",
	火: "from-red-500 to-red-700",
	土: "from-amber-600 to-amber-800",
};

// you can use a function to return the target element besides using React refs

export default function ReportPage({
	locale,
	birthDateTime: propBirthDateTime,
	gender: propGender,
	sessionId: propSessionId,
}) {
	const isMobile = useMobile();
	const router = useRouter();
	const searchParams = useSearchParams();
	const t = useTranslations("report");
	const t2 = useTranslations("toast");
	const contentRef = useRef(null);

	const sectionRefs = useRef([]);
	const [sections, setSections] = useState([]);
	const [anchorList, setAnchorList] = useState([]);

	const [activeIndex, setActiveIndex] = useState(0);
	const [showMenu, setShowMenu] = useState(false);
	const hideMenuTimer = useRef(null);
	const [isPrinting, setIsPrinting] = useState(false);
	const [isLock, setIsLock] = useState(true);
	const [userInfo, setUserInfo] = useState(null);
	const [aiGenerationStarted, setAiGenerationStarted] = useState(false);
	const [openedNianzhuIndex, setOpenedNianzhuIndex] = useState(null);
	const [openedYuezhuIndex, setOpenedYuezhuIndex] = useState(null);
	const [openedRizhuIndex, setOpenedRizhuIndex] = useState(null);
	const [openedShizhuIndex, setOpenedShizhuIndex] = useState(null);
	const [activePillar, setActivePillar] = useState("年柱");
	const [activeTab, setActiveTab] = useState("report"); // "report" or "fortune"
	const nianzhuRefs = useRef([]);
	const yuezhuRefs = useRef([]);
	const rizhuRefs = useRef([]);
	const shizhuRefs = useRef([]);
	const [mingLiData, setMingLiData] = useState(null);
	const [liuNianData, setLiuNianData] = useState(null);
	const [jiajuProData, setJiaJuData] = useState(null);

	// Life Report Persistence Hook
	const { saveLifeReport, markLifeReportComplete } =
		useLifeReportPersistence();

	// ✅ NEW: Alternative save system (no auth required)
	const { saveReportData, getReportData, markReportComplete } =
		useReportDataPersistence();

	// Clear cached content for new payment sessions to ensure fresh AI generation
	const clearContentForNewSession = useCallback((sessionId) => {
		console.log(
			"🧹 Clearing all cached content for new payment session:",
			sessionId
		);

		// Clear comprehensive advice
		setComprehensiveInterpersonalAdvice(null);
		setComprehensiveLifeAdvice(null);

		// Reset loading states
		setIsLoadingComprehensiveInterpersonal(false);
		setIsLoadingComprehensiveLifeAdvice(false);

		// Clear AI analysis data if it exists
		if (typeof setAiAnalysis === "function") {
			setAiAnalysis(null);
		}

		// Clear ming li data
		setMingLiData(null);
		setLiuNianData(null);
		setJiaJuData(null);

		// Clear four fortune data to force fresh generation
		setFourFortuneData({
			healthFortuneData: null,
			careerFortuneData: null,
			wealthFortuneData: null,
			relationshipFortuneData: null,
		});

		console.log("✅ All content cleared - fresh generation will begin");
	}, []);

	// Four Fortune Analysis data states for persistence
	const [fourFortuneData, setFourFortuneData] = useState({
		healthFortuneData: null,
		careerFortuneData: null,
		wealthFortuneData: null,
		relationshipFortuneData: null,
	});

	// Text-to-speech states
	const [isSpeaking, setIsSpeaking] = useState(false);
	const [currentSpeechText, setCurrentSpeechText] = useState("");
	const speechSynthesis =
		typeof window !== "undefined" ? window.speechSynthesis : null;
	const currentUtterance = useRef(null);

	// Stable ref callback functions to prevent infinite loops
	const setNianzhuRef = useCallback(
		(index) => (el) => {
			nianzhuRefs.current[index] = el;
		},
		[]
	);

	const setYuezhuRef = useCallback(
		(index) => (el) => {
			yuezhuRefs.current[index] = el;
		},
		[]
	);

	const setRizhuRef = useCallback(
		(index) => (el) => {
			rizhuRefs.current[index] = el;
		},
		[]
	);

	const setShizhuRef = useCallback(
		(index) => (el) => {
			shizhuRefs.current[index] = el;
		},
		[]
	);

	// AI Analysis state for wuxing patterns
	const [aiAnalysis, setAiAnalysis] = useState(null);
	const [activeTenGodsTab, setActiveTenGodsTab] = useState("正印");
	const [elementFlowAnalysis, setElementFlowAnalysis] = useState(null);
	const [isLoadingFlowAnalysis, setIsLoadingFlowAnalysis] = useState(false);

	// AI life stage analysis states
	const [lifeStageAnalysis, setLifeStageAnalysis] = useState({
		年柱: null,
		月柱: null,
		日柱: null,
		時柱: null,
	});
	const [isLoadingLifeStage, setIsLoadingLifeStage] = useState({
		年柱: false,
		月柱: false,
		日柱: false,
		時柱: false,
	});

	// Interpersonal and life advice states
	const [interpersonalAdvice, setInterpersonalAdvice] = useState({
		年柱: null,
		月柱: null,
		日柱: null,
		時柱: null,
	});
	const [lifeAdviceAnalysis, setLifeAdviceAnalysis] = useState({
		年柱: null,
		月柱: null,
		日柱: null,
		時柱: null,
	});
	const [isLoadingInterpersonal, setIsLoadingInterpersonal] = useState({
		年柱: false,
		月柱: false,
		日柱: false,
		時柱: false,
	});
	const [isLoadingLifeAdvice, setIsLoadingLifeAdvice] = useState({
		年柱: false,
		月柱: false,
		日柱: false,
		時柱: false,
	});

	// State for comprehensive sections (not tied to specific pillars)
	const [
		comprehensiveInterpersonalAdvice,
		setComprehensiveInterpersonalAdvice,
	] = useState(null);
	const [comprehensiveLifeAdvice, setComprehensiveLifeAdvice] =
		useState(null);
	const [
		isLoadingComprehensiveInterpersonal,
		setIsLoadingComprehensiveInterpersonal,
	] = useState(false);
	const [
		isLoadingComprehensiveLifeAdvice,
		setIsLoadingComprehensiveLifeAdvice,
	] = useState(false);

	// Comprehensive Life Advice Tab States
	const [activeComprehensiveTab, setActiveComprehensiveTab] =
		useState("五行調和");
	const [activeWuxingTab, setActiveWuxingTab] = useState("補益");
	const [activeHealthTab, setActiveHealthTab] = useState("運動建議");
	const [activeCareerTab, setActiveCareerTab] = useState("近期");

	// Interpersonal Balance Tab States
	const [activeInterpersonalTab, setActiveInterpersonalTab] =
		useState("個人關係");
	const [activePersonalTab, setActivePersonalTab] = useState("婚戀配對");
	const [activeWorkplaceTab, setActiveWorkplaceTab] = useState("領導風格");
	const [activeSocialTab, setActiveSocialTab] = useState("人脈建構");

	const { loading, reportDocData, assistantData } = useReportDoc(
		locale,
		userInfo
	);

	// Analyze Wuxing strength patterns (Logic-based)
	const analyzeWuxingStrength = (elementCounts) => {
		const total = Object.values(elementCounts).reduce(
			(sum, count) => sum + count,
			0
		);
		const strongElements = [];
		const weakElements = [];

		Object.entries(elementCounts).forEach(([element, count]) => {
			const percentage = (count / total) * 100;
			if (percentage >= 25) {
				// 25% or more is considered strong
				strongElements.push(element);
			} else if (count === 0) {
				weakElements.push(element);
			}
		});

		// Generate strength description
		let strengthDesc = "";
		if (strongElements.length === 1) {
			strengthDesc = `${strongElements[0]}旺`;
		} else if (strongElements.length === 2) {
			strengthDesc = `${strongElements.join("")}兩旺`;
		} else if (strongElements.length >= 3) {
			strengthDesc = `${strongElements.slice(0, 2).join("")}等多旺`;
		} else {
			// No particularly strong elements, find the strongest
			const maxCount = Math.max(...Object.values(elementCounts));
			const dominant = Object.entries(elementCounts).find(
				([_, count]) => count === maxCount
			)?.[0];
			strengthDesc = dominant ? `${dominant}為主` : "五行平衡";
		}

		return {
			strongElements,
			weakElements,
			strengthDesc,
			elementCounts,
		};
	};

	// Determine useful gods (用神) based on wuxing balance
	const determineUsefulGods = (strengthAnalysis) => {
		const { strongElements, weakElements, elementCounts } =
			strengthAnalysis;
		const elementCycle = ["木", "火", "土", "金", "水"];

		let primaryGod = "";
		let auxiliaryGod = "";
		let strategy = "";

		// Strategy 1: If there are missing elements, they become useful gods
		if (weakElements.length > 0) {
			primaryGod = weakElements[0];
			if (weakElements.length > 1) {
				auxiliaryGod = weakElements[1];
			} else {
				// Find element that generates the primary god
				const primaryIndex = elementCycle.indexOf(primaryGod);
				const generatorIndex = (primaryIndex - 1 + 5) % 5;
				auxiliaryGod = elementCycle[generatorIndex];
			}
			strategy = "補缺";
		}
		// Strategy 2: If elements are relatively balanced, support the weakest
		else if (strongElements.length === 0) {
			const minCount = Math.min(...Object.values(elementCounts));
			const weakestElements = Object.entries(elementCounts)
				.filter(([_, count]) => count === minCount)
				.map(([element, _]) => element);

			primaryGod = weakestElements[0];
			// Find element that generates the primary god
			const primaryIndex = elementCycle.indexOf(primaryGod);
			const generatorIndex = (primaryIndex - 1 + 5) % 5;
			auxiliaryGod = elementCycle[generatorIndex];
			strategy = "扶弱";
		}
		// Strategy 3: If there are overly strong elements, use restraining elements
		else if (strongElements.length >= 2) {
			// Use elements that restrain the strongest
			const strongestElement = strongElements[0];
			const strongestIndex = elementCycle.indexOf(strongestElement);
			const restrainingIndex = (strongestIndex + 1) % 5;
			primaryGod = elementCycle[restrainingIndex];

			// Secondary restraining element or supporting element
			const secondaryRestrainingIndex = (restrainingIndex + 1) % 5;
			auxiliaryGod = elementCycle[secondaryRestrainingIndex];
			strategy = "抑強";
		}
		// Strategy 4: Single strong element - moderate restraint
		else if (strongElements.length === 1) {
			const strongElement = strongElements[0];
			const strongIndex = elementCycle.indexOf(strongElement);

			// Use element that drains the strong element (generated by strong element)
			const drainingIndex = (strongIndex + 1) % 5;
			primaryGod = elementCycle[drainingIndex];

			// Use element that restrains the strong element
			const restrainingIndex = (strongIndex + 2) % 5;
			auxiliaryGod = elementCycle[restrainingIndex];
			strategy = "瀉強";
		}

		return {
			primaryGod,
			auxiliaryGod,
			strategy,
		};
	};

	// Calculate elements for 十神 based on user's wuxing data
	const calculateTenGodsElements = (userInfo) => {
		if (!userInfo?.birthDateTime) return {};

		const wuxingAnalysis = calculateWuxingAnalysis(userInfo);
		if (!wuxingAnalysis?.wuxingData) return {};

		const { wuxingData } = wuxingAnalysis;
		const dayStem = wuxingData.dayStem; // Get day stem (日干)
		const dayStemElement = wuxingData.dayStemWuxing; // Get day stem element

		// 十神 element relationships based on 五行生克 - using proper day stem
		const elementCycle = ["木", "火", "土", "金", "水"];
		const currentIndex = elementCycle.indexOf(dayStemElement);

		const tenGodsElements = {
			正印: elementCycle[(currentIndex + 4) % 5], // 生我者為印 (Previous in cycle: 水生木)
			財星: elementCycle[(currentIndex + 2) % 5], // 我克者為財 (Two ahead in cycle: 木克土)
			官殺: elementCycle[(currentIndex + 3) % 5], // 克我者為官殺 (Three ahead: 金克木)
			劫比: dayStemElement, // 同我者為比劫 (Same element)
			食傷: elementCycle[(currentIndex + 1) % 5], // 我生者為食傷 (Next in cycle: 木生火)
		};

		return { dayStemElement, tenGodsElements };
	};

	// AI-based analysis for complex patterns
	const analyzeComplexPatterns = async (wuxingData, userInfo) => {
		try {
			const response = await fetch("/api/wuxing-analysis", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					wuxingData,
					userInfo,
					birthDateTime: userInfo.birthDateTime,
					gender: userInfo.gender,
				}),
			});

			if (response.ok) {
				const result = await response.json();
				// Return the detailed analysis
				return (
					result.analysis || {
						pattern: "身強食神制殺格",
						primaryGod: "木",
						secondaryGod: "土",
						mainConclusion: {
							wuxingPattern: "金火兩旺",
							pattern: "身強食神制殺格",
						},
						wuxingDistribution: {
							detailed: {
								wood: {
									count: 1,
									strength: "★",
									characteristic: "孤立無根",
									influence: "創造力受限，難將靈感系統化落地",
								},
								fire: {
									count: 3,
									strength: "★★★",
									characteristic: "外顯熾熱",
									influence:
										"行動力強、熱情主動，但易急躁衝動",
								},
								earth: {
									count: 3,
									strength: "★★",
									characteristic: "鬆散無力",
									influence: "財運不穩，存錢實力，易衝動消費",
								},
								metal: {
									count: 4,
									strength: "★★★★",
									characteristic: "剛硬密集",
									influence:
										"追求完美、重規則壓力，身心易疲憊",
								},
								water: {
									count: 2,
									strength: "★★★",
									characteristic: "潛藏暗流",
									influence: "直覺敏銳，但思慮多，易焦慮失眠",
								},
							},
							conflicts: [
								{
									title: "金火對峙",
									description:
										"金（刚烈）与火（热烈）两强相争，消耗日主能量，易引发身心疲惫。",
									example:
										'想学习新技能（木），总被工作任务（金）打断，导致计划频繁中断，常怀入"忙到无成果"状态。',
								},
							],
						},
					}
				);
			}
		} catch (error) {
			console.error("AI analysis error:", error);
		}

		// Fallback if AI fails
		return {
			pattern: "身強食神制殺格",
			primaryGod: "木",
			secondaryGod: "土",
			mainConclusion: {
				wuxingPattern: "金火兩旺",
				pattern: "身強食神制殺格",
			},
			wuxingDistribution: {
				detailed: {
					wood: {
						count: 1,
						strength: "★",
						characteristic: "孤立無根",
						influence: "創造力受限，難將靈感系統化落地",
					},
					fire: {
						count: 3,
						strength: "★★★",
						characteristic: "外顯熾熱",
						influence: "行動力強、熱情主動，但易急躁衝動",
					},
					earth: {
						count: 3,
						strength: "★★",
						characteristic: "鬆散無力",
						influence: "財運不穩，存錢實力，易衝動消費",
					},
					metal: {
						count: 4,
						strength: "★★★★",
						characteristic: "剛硬密集",
						influence: "追求完美、重規則壓力，身心易疲憊",
					},
					water: {
						count: 2,
						strength: "★★★",
						characteristic: "潛藏暗流",
						influence: "直覺敏銳，但思慮多，易焦慮失眠",
					},
				},
				conflicts: [
					{
						title: "金火對峙",
						description:
							"金（刚烈）与火（热烈）两强相争，消耗日主能量，易引发身心疲惫。",
						example:
							'想学习新技能（木），总被工作任务（金）打断，导致计划频繁中断，常怀入"忙到无成果"状态。',
					},
				],
			},
		};
	};

	// AI-powered element flow analysis
	const analyzeElementFlow = async (userInfo) => {
		if (!userInfo || isLoadingFlowAnalysis) return;

		setIsLoadingFlowAnalysis(true);
		try {
			const response = await fetch("/api/element-flow-analysis", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					userInfo,
				}),
			});

			if (response.ok) {
				const result = await response.json();

				if (result.success && result.analysis) {
					setElementFlowAnalysis(result.analysis);
				} else {
					console.error("Invalid analysis result:", result);
				}
			} else {
				console.error("API request failed:", response.status);
			}
		} catch (error) {
			console.error("Element flow analysis error:", error);
		} finally {
			setIsLoadingFlowAnalysis(false);
		}
	};

	// AI-powered life stage analysis for four pillars
	const generateLifeStageAnalysis = async (
		pillarType,
		pillarData,
		userInfo
	) => {
		try {
			const stageMapping = {
				年柱: "童年",
				月柱: "青年",
				日柱: "成年",
				時柱: "老年",
			};

			const stage = stageMapping[pillarType] || "人生阶段";

			const response = await fetch("/api/life-stage-analysis", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					pillarType,
					stage,
					pillarData,
					userInfo,
					prompt: `关联人生阶段（${pillarType}=${stage}）
白话直断**（分两段）：  
   - **{关键词}**：生活场景说明（如"竞争与规则并存"）  
   - **现实案例**：如"被父母要求先写作业才能玩"`,
				}),
			});

			if (response.ok) {
				const result = await response.json();
				return result.analysis;
			}
		} catch (error) {
			console.error(
				`Life stage analysis error for ${pillarType}:`,
				error
			);
		}

		// Fallback content based on the examples provided
		const fallbackContent = {
			年柱: {
				title: "年柱甲申：竞争与规则并存的童年",
				content:
					"你小时候的环境（家庭或学校）存在明显的竞争压力，比如兄弟姐妹比较成绩，或父母用严格标准要求你。同时生活中规则感很强，例如必须按时回家、作业错一题罚抄十遍等。",
				example:
					"就像玩游戏时，别人轻松过关，你却总被要求「先写完数学题才能玩」，这种约束让你早早就学会在压力下找方法。",
				wisdom: "智慧如地下暗流：指你天生会暗中观察、动脑筋解决问题。比如被父母禁止看电视，你会偷偷用电脑查资料完成作业来争取自由时间——这种「钻空子」不是叛逆，而是懂得灵活应对规则。",
			},
			月柱: {
				title: "月柱丁巳：才华耀眼但容易三分热度",
				content:
					"你青年时期（中学到大学）能力突出，像学新技能比同学快、比赛容易拿奖。但热情来得快去得快，可能今天想学画画，明天又迷上编程，最后都没坚持。",
				example:
					"就像参加社团时，你一周就能当上组长（火性爆发力），但三个月后觉得无聊就退社了（火旺难持久）。",
				wisdom: "火焚高木的警告：你像一棵长在火山边的树，长得快但易被烧伤。比如熬夜三天写完报告拿了高分（才华耀眼），结果感冒一周（消耗过度）。",
			},
			日柱: {
				title: "日柱丁酉：能力与压力互相成就",
				content:
					"你成年后靠实力赚钱（如专业技能、创意作品），但这些机会总伴随高压挑战。比如接到高薪项目，却要天天加班；或自己创业当老板，但每笔支出都心惊胆战。",
				example:
					"像你设计海报被客户夸赞（丁火发光），但改了20版才通过（酉金磨人）。",
				wisdom: "钗钏金的本质：你的价值像金首饰，需要被打磨才能闪耀。压力（客户挑剔/老板刁难）其实是让你更专业的「打磨工具」。",
			},
			時柱: {
				title: "时柱庚子：晚年要懂得放松与放手",
				content:
					"你老年可能地位高、说话有分量（如当了领导或家族长辈），但责任也更大，常为小事操心失眠。",
				example:
					"像退休后还被请去当顾问，既高兴被看重（庚金权威），又烦心年轻人不按你的方法做（子水暗忧）。",
				wisdom: "壁上土的提醒：这堵墙既是保护（比如存款够多不怕生病），也可能隔绝快乐（比如嫌旅游太累只在家发呆）。学会偶尔「拆墙」——像勉强同意儿女用新方法装修老房，反而发现效果不错。",
			},
		};

		return fallbackContent[pillarType] || fallbackContent["年柱"];
	};

	// Generate interpersonal advice for each pillar
	const generateInterpersonalAdvice = async (pillar, userInfo) => {
		try {
			const response = await fetch("/api/interpersonal-advice", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					pillar,
					userInfo,
				}),
			});

			if (response.ok) {
				const result = await response.json();
				return result.analysis;
			}
		} catch (error) {
			console.error(`Interpersonal advice error for ${pillar}:`, error);
		}

		// Fallback content based on the image
		return {
			personalTraits:
				"年柱反映了您早期的人際特質，天生具有親和力，容易獲得他人信任。在人際關係中展現出純真和熱情，但有時可能過於直接，需要學習更多的人際技巧。",
			communicationStyle:
				"建議在溝通時保持真誠，但要學會察言觀色。避免過於衝動的表達，多聽少說，給對方充分的表達空間。在重要場合前先思考再開口。",
			relationshipMaintenance:
				"重視情感交流，定期與朋友家人聯繫。學會記住他人的重要日子，適時表達關心。建立互相支持的友誼圈，但要保持適當的界限。",
			conflictResolution:
				"面對衝突時，先冷靜下來，避免情緒化的反應。學會換位思考，理解對方的立場。用溫和但堅定的態度表達自己的觀點，尋求雙贏的解決方案。",
		};
	};

	// Generate comprehensive life advice for each pillar
	const generateLifeAdvice = async (pillar, userInfo) => {
		try {
			const response = await fetch("/api/comprehensive-advice", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					pillar,
					userInfo,
				}),
			});

			if (response.ok) {
				const result = await response.json();
				return result.analysis;
			}
		} catch (error) {
			console.error(`Comprehensive advice error for ${pillar}:`, error);
		}

		// Fallback content
		return {
			careerDevelopment:
				"年柱代表早期發展基礎，建議選擇能發揮創意和熱情的工作。適合從基層做起，紮實累積經驗。重視學習機會，為未來發展奠定基礎。",
			healthWellness:
				"注意心血管和神經系統的健康。保持規律的作息時間，多做戶外運動。年輕時養成良好的飲食習慣，避免過度熬夜和壓力。",
			wealthManagement:
				"理財觀念需要從年輕時培養，建議採用穩健的投資策略。避免高風險投資，重視儲蓄習慣的建立。學會記帳和預算管理。",
			relationshipGuidance:
				"感情方面較為純真，容易全心投入。建議保持理性，不要過於急躁。學會觀察對方的真實性格，建立穩固的感情基礎。",
			lifeDirection:
				"人生規劃應該注重基礎建設，包括教育、技能和人際關係。設定清晰的短期和長期目標，保持學習的心態，為未來發展做好準備。",
		};
	};

	// Helper function to generate comprehensive interpersonal advice
	const generateComprehensiveInterpersonalAdvice = async (
		userInfo,
		wuxingData
	) => {
		try {
			const response = await fetch("/api/comprehensive-interpersonal", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					userInfo,
					wuxingData,
				}),
			});

			if (response.ok) {
				const result = await response.json();
				return result.analysis;
			}
		} catch (error) {
			console.error(`Comprehensive interpersonal advice error:`, error);
		}

		// Fallback content
		return {
			cooperation: {
				analysis:
					"比劫異財的狀況下，須明確合作的邊界。創業合夥時重視財務契約，技術入股需確保專利權。",
				suggestions: [
					"技術入股須公證專利權屬，避免後續糾紛",
					"日常合作要學習西金的剛中帶韌，遇到方案爭執時可以設定「三日緩衝期」",
					"建立明確的權責分工機制，定期檢視合作成效",
				],
			},
			leadership: {
				analysis:
					"正官與金透出時旺，隨著年齡增長威望也會提升，應該用包容的態度替代鋒芒。",
				suggestions: [
					"庚金透干時以剛中帶韌化解爭執，避免過度強硬",
					"決策時要「先聽大家的意見，再做決定」，展現包容性領導風格",
					"培養下屬時注重因材施教，發揮每個人的長處",
				],
			},
			emotional: {
				analysis:
					"情感方面要小心火和金的衝突，需要通過五行調和來化解感情中的矛盾。",
				suggestions: [
					"伴侶最好是水木旺的人（比如生於亥卯未時）",
					"感情溝通時避開火旺的時段，選擇水旺時間（如子時、亥時）",
					"培養共同的興趣愛好，增進感情交流",
				],
				fengshui:
					"在家裡可以設置木質屏風來增旺西方（金方），坎位置黑曜石化解沖剋",
			},
		};
	};

	// Helper function to generate comprehensive life advice
	const generateComprehensiveLifeAdvice = async (userInfo, wuxingData) => {
		try {
			const response = await fetch("/api/comprehensive-life-advice", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					userInfo,
					wuxingData,
				}),
			});

			if (response.ok) {
				const result = await response.json();
				return result.analysis;
			}
		} catch (error) {
			console.error(`Comprehensive life advice error:`, error);
		}

		// Fallback content based on the image examples
		return {
			wuxingHarmony: {
				primaryGod: "以木為樞要",
				secondaryGod: "水為輔佐",
				summary: {
					supplement: [
						"日常著青碧服飾，東方青氣引動甲木根基",
						"居室增置綠植意象，晨起面東而立調息",
						"引少陽升發之氣，木方有運用神",
					],
					strengthen: [
						"土性承載，建議多用陶器、棕黃織物及方形陳設",
						"飲食偏重小米、南瓜等甘味食材，以回中宮脾胃之氣",
					],
					avoid: [
						"慎避金火過盛之境，避免穿著白色、赤色服飾及金屬配飾",
						"午時（11-13時）烈日曝曬需謹慎",
						"忌金色疊加紅色材質的組合使用",
					],
				},
				detailed:
					"水星暗導可微量補益，可於家中北位放置墨玉貔貅，既潤局中燥火，亦助百脈流通",
			},
			healthWellness: {
				exercise: [
					"申時林間習練太極拳，借木氣養身",
					"卯時戶外慢跑，配合東方木旺之時",
				],
				emotion: "透過書法練習涵養正官之氣，化解情緒起伏",
				detailed: "每日辰時面東靜坐15分鐘，按壓太沖穴，焚檀香調息",
			},
			careerDirection: {
				nearTerm: {
					ageRange: "20-30歲",
					pattern: "食神生財格漸顯，創意表達能力突出",
					industries: ["文化創意產業", "教育培訓行業"],
					risk: "逢金旺年份須防契約糾紛，重大決策前宜諮詢水木屬性人士",
				},
				midTerm: {
					ageRange: "30-40歲",
					transformation: "傷官化土生財，轉向管理和整合型工作",
					strategy: "創建平台整合創意資源，發揮協調統籌能力",
					decision: "重大投資前諮詢木火屬性人士，避開金旺時段做決策",
				},
				longTerm: {
					ageRange: "40歲後",
					fortune: "食神吐秀，財庫大開，智慧與財富並進",
					knowledge: "編纂行業標準典籍，建立專業知識體系",
					wellness: "參觀文化產業園既養木氣亦啟發靈感",
				},
			},
			interpersonalBalance: {
				cooperation: "技術入股須公證專利權屬，合作協議需明確權責邊界",
				leadership: "庚金透干時以剛中帶韌化解爭執，決策前廣納眾議",
				emotional: "宜選擇水木旺於月令者為伴，坎位置黑曜石化解沖剋",
			},
		};
	};

	const calculateWuxingAnalysis = (userInfo) => {
		if (!userInfo?.birthDateTime) return null;

		const wuxingData = getWuxingData(
			userInfo.birthDateTime,
			userInfo.gender
		);
		const elementCounts = {};
		const missingElements = [];

		// Count elements from all pillars
		ELEMENTS.forEach((element) => {
			let count = 0;
			const stemsBranches = [
				wuxingData.yearStemWuxing,
				wuxingData.yearBranchWuxing,
				wuxingData.monthStemWuxing,
				wuxingData.monthBranchWuxing,
				wuxingData.dayStemWuxing,
				wuxingData.dayBranchWuxing,
				wuxingData.hourStemWuxing,
				wuxingData.hourBranchWuxing,
			];

			stemsBranches.forEach((wuxing) => {
				if (wuxing === element) count++;
			});

			elementCounts[element] = count;
			if (count === 0) missingElements.push(element);
		});

		// Analyze element strength
		const strengthAnalysis = analyzeWuxingStrength(elementCounts);

		// Determine useful gods based on element balance
		const usefulGods = determineUsefulGods(strengthAnalysis);

		return {
			elementCounts,
			missingElements,
			wuxingData,
			strengthAnalysis,
			usefulGods,
		};
	};

	// Comprehensive element distribution calculation
	const calculateComprehensiveElementDistribution = (userInfo) => {
		if (!userInfo || !userInfo.birthDateTime) {
			console.warn(
				"calculateComprehensiveElementDistribution: Missing userInfo or birthDateTime",
				userInfo
			);
			return null;
		}

		try {
			// Get wuxing data from nayin library
			const wuxingData = getWuxingData(
				new Date(userInfo.birthDateTime),
				userInfo.gender
			);

			// Element counts combining stems, branches, and hidden stems
			const elementCounts = {
				金: 0,
				木: 0,
				水: 0,
				火: 0,
				土: 0,
			};

			// Count stems (weight 3) - Most influential, direct manifestation
			const stemElements = [
				wuxingData.yearStemWuxing,
				wuxingData.monthStemWuxing,
				wuxingData.dayStemWuxing,
				wuxingData.hourStemWuxing,
			];

			stemElements.forEach((element) => {
				if (elementCounts[element] !== undefined) {
					elementCounts[element] += 3;
				}
			});

			// Count branches (weight 2) - Strong influence, foundational
			const branchElements = [
				wuxingData.yearBranchWuxing,
				wuxingData.monthBranchWuxing,
				wuxingData.dayBranchWuxing,
				wuxingData.hourBranchWuxing,
			];

			branchElements.forEach((element) => {
				if (elementCounts[element] !== undefined) {
					elementCounts[element] += 2;
				}
			});

			// Count hidden stems (weight 1) - Indirect influence
			const hiddenStemsData = [
				{
					key: "yearBranchHiddenStems",
					data: wuxingData.yearBranchHiddenStems,
				},
				{
					key: "monthBranchHiddenStems",
					data: wuxingData.monthBranchHiddenStems,
				},
				{
					key: "dayBranchHiddenStems",
					data: wuxingData.dayBranchHiddenStems,
				},
				{
					key: "hourBranchHiddenStems",
					data: wuxingData.hourBranchHiddenStems,
				},
			];

			hiddenStemsData.forEach(({ data }) => {
				if (Array.isArray(data)) {
					data.forEach((stem) => {
						if (
							stem.element &&
							elementCounts[stem.element] !== undefined
						) {
							// Fixed weight of 1 for all hidden stems
							elementCounts[stem.element] += 1;
						}
					});
				}
			});

			// Convert counts to strength ratings (stars) - adjusted for new weight system
			const elementStrengthMap = {};
			Object.entries(elementCounts).forEach(([element, count]) => {
				if (count === 0) {
					elementStrengthMap[element] = "";
				} else if (count >= 15) {
					elementStrengthMap[element] = "★★★★★";
				} else if (count >= 12) {
					elementStrengthMap[element] = "★★★★";
				} else if (count >= 8) {
					elementStrengthMap[element] = "★★★";
				} else if (count >= 5) {
					elementStrengthMap[element] = "★★";
				} else {
					elementStrengthMap[element] = "★";
				}
			});

			return {
				elementCounts,
				elementStrengthMap,
				wuxingData,
			};
		} catch (error) {
			console.error(
				"Error calculating comprehensive element distribution:",
				error
			);
			return null;
		}
	};

	// Text-to-speech function
	const speakText = (text, key) => {
		if (!speechSynthesis) {
			toast.error("您的浏览器不支持语音功能");
			return;
		}

		// Stop current speech if speaking
		if (isSpeaking) {
			speechSynthesis.cancel();
			setIsSpeaking(false);
			setCurrentSpeechText("");
			return;
		}

		// Create new utterance
		const utterance = new SpeechSynthesisUtterance(text);
		currentUtterance.current = utterance;

		// Configure voice settings for male-like sound
		utterance.rate = 1; // Slower rate for deeper, more authoritative sound
		utterance.pitch = 0.3; // Lower pitch for male voice (0.1 was too low, 0.3-0.5 is better)
		utterance.volume = 1;

		// Just use any available Chinese voice and tune it manually
		const voices = speechSynthesis.getVoices();
		const chineseVoice = voices.find(
			(voice) =>
				voice.lang.includes("zh") ||
				voice.lang.includes("cmn") ||
				voice.lang.includes("zh-CN") ||
				voice.lang.includes("zh-TW")
		);

		if (chineseVoice) {
			utterance.voice = chineseVoice;
		}

		// Event handlers
		utterance.onstart = () => {
			setIsSpeaking(true);
			setCurrentSpeechText(key);
		};

		utterance.onend = () => {
			setIsSpeaking(false);
			setCurrentSpeechText("");
		};

		utterance.onerror = () => {
			setIsSpeaking(false);
			setCurrentSpeechText("");
		};

		// Start speaking
		speechSynthesis.speak(utterance);
	};

	// Get content for currently opened tab
	const getCurrentNianzhuContent = () => {
		if (openedNianzhuIndex !== null && reportDocData?.nianzhuData) {
			const entries = Object.entries(reportDocData.nianzhuData);
			if (entries[openedNianzhuIndex]) {
				const [key, value] = entries[openedNianzhuIndex];
				return { key, value };
			}
		}
		return null;
	};

	// Clean up speech on component unmount
	useEffect(() => {
		return () => {
			if (speechSynthesis) {
				speechSynthesis.cancel();
			}
		};
	}, []);

	const handlePrint = useReactToPrint({
		contentRef,
		pageStyle: `
            @page { 
                size: A4;
                margin: 20mm 15mm 20mm 15mm;  /* top right bottom left margins */
            }
            @media print {
                body, html {
                    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&display=swap');
                    height: auto;
                    font-family: 'SimSun', 'Microsoft YaHei', sans-serif;
                    overflow: initial !important;
                    margin: 0;
                    zoom: 100%;
                }
                .hidden-on-print { display: none !important; }
                .show-on-print { display: block !important;}
                
                /* Page breaks for chapters */
                .chapter-page-break {
                    page-break-before: always !important;
                }
                
                /* Show all tab content when printing */
                .tab-content-print {
                    max-height: none !important;
                    overflow: visible !important;
                    opacity: 1 !important;
                    display: block !important;
                }
                
                /* Hide interactive buttons when printing */
                .interactive-tabs {
                    display: none !important;
                }
                
                .page-break {
                    margin-top: 1rem;
                    display: block;
                    page-break-before: auto;
                }
                .canvasImage{
                    page-break-inside: avoid;
                    break-inside: avoid;
                }
                img{
                    max-width: 100% !important;
                    height: auto !important;
                    page-break-inside: auto;
                    break-inside: auto;
                }
      }
        `,
		removeAfterPrint: true,
		documentTitle: "Harmoniq风水家居报告",
	});
	// useEffect(() => {
	//     //触发事件，languageToggle组件监听
	//     emitter.emit(EVENT_TRANSLATE_STATUS, transStatus)
	// }, [transStatus])
	useEffect(() => {
		let sections = [
			{
				title: t("title1"),
				children: [
					{ title: "年柱" },
					{ title: "月柱" },
					{ title: "日柱" },
					{ title: t("shizhu") },
				],
			},
			{
				title: t("title2"),
				children: [
					{
						title: t("title2-1"),
						color: "#088C6E",
						bgColor: "#F7FAF9",
					},
					{
						title: t("title2-2"),
						color: "#00A637",
						bgColor: "#F5FAF7",
					},
					{
						title: t("title2-3"),
						color: "#0A58A6",
						bgColor: "#F5F8FA",
					},
					{
						title: t("title2-4"),
						color: "#E52E5C",
						bgColor: "#FAF5F6",
					},
					{
						title: t("title2-5"),
						color: "#D9B815",
						bgColor: "#FCFBF5",
					},
					{
						title: t("title2-6"),
						color: "#066952",
						bgColor: "#F7FAF9",
					},
				],
			},
			{
				title: t("title3"),
			},
		];
		let anchorList = [
			{
				id: "section-0",
				title: "第一章：个人命理基础分析",
				isMain: true,
			},
			{
				id: "section-0-0",
				title: "年柱",
				isMain: false,
			},
			{
				id: "section-0-1",
				title: "月柱",
			},
			{ id: "section-0-2", title: "日柱" },
			{ id: "section-0-3", title: "时柱" },

			{
				id: "section-1",
				title: "第二章：流年运程基础分析",
				isMain: true,
			},
			{ id: "section-1-0", title: "整体运势" },
			{ id: "section-1-1", title: "健康运势" },
			{ id: "section-1-2", title: "事业运势" },
			{ id: "section-1-3", title: "感情运势" },
			{ id: "section-1-4", title: "财运运势" },
			{ id: "section-1-5", title: "总结" },
			{
				id: "section-2",
				title: "第三章：流年运程基础分析",
				isMain: true,
			},
			{
				id: "section-3",
				isMain: true,
			},
		];
		if (isLock) {
			setSections([...sections, { title: t("title4") }]);
			setAnchorList(anchorList);
		} else {
			setSections([
				...sections,
				{ title: t("title4") },
				{ title: t("title5") },
				{ title: t("title6") },
			]);

			setAnchorList([
				...anchorList,
				{
					id: "section-4",
					isMain: true,
				},
				{
					id: "section-5",
					isMain: true,
				},
			]);
		}
	}, [isLock]);

	//sectionRefs.current = anchorList.map(() => null);
	const onPrint = () => {
		setIsPrinting(true);
		setTimeout(() => {
			handlePrint();
		}, 500);
		setTimeout(() => {
			setIsPrinting(false);
		}, 3000);
	};
	// 滚动监听，高亮当前章节
	useEffect(() => {
		const handleScroll = () => {
			const offsets = sectionRefs.current.map((ref) =>
				ref ? ref.getBoundingClientRect().top : Infinity
			);
			const index = offsets.findIndex((offset) => offset > 80); // 80为Navbar高度
			setActiveIndex(
				index === -1 ? anchorList.length - 1 : Math.max(0, index - 1)
			);
		};
		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const { data: session } = useSession();

	// Detect new payment sessions and clear cached content for fresh generation
	useEffect(() => {
		const currentSessionId = propSessionId || searchParams.get("sessionId");
		const storedSessionId = localStorage.getItem("lastProcessedSessionId");

		if (currentSessionId && currentSessionId !== storedSessionId) {
			console.log("🆕 NEW PAYMENT SESSION DETECTED!");
			console.log("Previous session:", storedSessionId);
			console.log("Current session:", currentSessionId);

			// Clear all cached content for fresh generation
			clearContentForNewSession(currentSessionId);

			// Store current session as processed
			localStorage.setItem("lastProcessedSessionId", currentSessionId);
		}
	}, [propSessionId, searchParams, clearContentForNewSession]);

	// Initialize comprehensive advice states from reportDocData - SESSION-AWARE CONTENT LOADING
	useEffect(() => {
		if (reportDocData) {
			const currentSessionId =
				propSessionId || searchParams.get("sessionId");
			console.log("🔄 Checking content for session:", currentSessionId);

			// Check if existing content is from current payment session
			const isFromCurrentSession =
				reportDocData.sessionId === currentSessionId ||
				reportDocData.comprehensiveInterpersonalAdvice?.sessionId ===
					currentSessionId;

			if (isFromCurrentSession) {
				console.log(
					"✅ Content from current session - loading cached data"
				);

				// Initialize comprehensive interpersonal advice
				if (
					reportDocData.comprehensiveInterpersonalAdvice &&
					!comprehensiveInterpersonalAdvice
				) {
					console.log(
						"✅ Loading existing comprehensive interpersonal advice"
					);
					setComprehensiveInterpersonalAdvice(
						reportDocData.comprehensiveInterpersonalAdvice
					);
				}

				// Initialize comprehensive life advice
				if (
					reportDocData.comprehensiveLifeAdvice &&
					!comprehensiveLifeAdvice
				) {
					console.log(
						"✅ Loading existing comprehensive life advice"
					);
					setComprehensiveLifeAdvice(
						reportDocData.comprehensiveLifeAdvice
					);
				}
			} else {
				console.log(
					"🆕 Content from different session - will generate fresh content"
				);
				// Clear existing content to force fresh generation for new payment
				if (comprehensiveInterpersonalAdvice) {
					console.log("🧹 Clearing old interpersonal advice");
					setComprehensiveInterpersonalAdvice(null);
				}
				if (comprehensiveLifeAdvice) {
					console.log("🧹 Clearing old life advice");
					setComprehensiveLifeAdvice(null);
				}
			}

			// Initialize mingLi, liuNian, jiajuPro data if they exist
			if (reportDocData.mingLiData && !mingLiData) {
				console.log("✅ Loading existing mingLi data");
				setMingLiData(reportDocData.mingLiData);
			}

			if (reportDocData.liuNianData && !liuNianData) {
				console.log("✅ Loading existing liuNian data");
				setLiuNianData(reportDocData.liuNianData);
			}

			if (reportDocData.jiajuProData && !jiajuProData) {
				console.log("✅ Loading existing jiajuPro data");
				setJiaJuData(reportDocData.jiajuProData);
			}

			// Initialize four fortune data if it exists
			if (reportDocData.fourFortuneAnalysisData) {
				const {
					healthFortuneData,
					careerFortuneData,
					wealthFortuneData,
					relationshipFortuneData,
				} = reportDocData.fourFortuneAnalysisData;

				setFourFortuneData((prev) => ({
					healthFortuneData:
						healthFortuneData || prev.healthFortuneData,
					careerFortuneData:
						careerFortuneData || prev.careerFortuneData,
					wealthFortuneData:
						wealthFortuneData || prev.wealthFortuneData,
					relationshipFortuneData:
						relationshipFortuneData || prev.relationshipFortuneData,
				}));

				console.log("✅ Loaded four fortune data from database");
			}
		}
	}, [reportDocData]);

	useEffect(() => {
		// PRIORITY 1: If URL parameters are provided, ALWAYS use them (even if user is logged in)
		if (propBirthDateTime && propGender) {
			console.log("🎯 Using URL parameters:", {
				propBirthDateTime,
				propGender,
				propSessionId,
			});
			console.log("🔧 Setting userInfo from URL parameters");
			console.log(
				"🚨 FORCING URL-ONLY MODE - Ignoring any logged-in user data"
			);

			// FORCE URL-only mode - completely ignore session data
			const urlUserInfo = {
				birthDateTime: propBirthDateTime,
				gender: propGender,
				sessionId: propSessionId,
				// Use sessionId as userId for URL-based reports
				userId: propSessionId || `url_${Date.now()}`,
				// Add default values for other properties that might be expected
				isLock: false,
				genStatus: "pending", // Allow report generation
				// Mark this as URL-based to prevent session interference
				isUrlBased: true,
			};
			setUserInfo(urlUserInfo);
			setIsLock(false);
			// Reset AI generation flag for new URL parameters
			setAiGenerationStarted(false);

			console.log("✅ URL userInfo set:", urlUserInfo);
			return;
		}

		// PRIORITY 2: Only fetch from database if NO URL parameters
		const userId = session?.user?.userId;
		if (userId) {
			console.log("📀 Using database user data for:", userId);
			const loadData = async () => {
				const {
					status,
					message,
					data: userInfo,
				} = await get(`/api/users/${userId}`);
				if (status == 0) {
					setUserInfo(userInfo);
					setIsLock(userInfo.isLock);
				}
			};
			loadData();
		}
	}, [session?.user?.userId, propBirthDateTime, propGender, propSessionId]);
	// 目录失焦自动隐藏
	useEffect(() => {
		const handleClick = (e) => {
			if (
				!e.target.closest(".report-menu") &&
				!e.target.closest(".progress-indicator")
			) {
				setShowMenu(false);
			}
		};
		window.addEventListener("mousedown", handleClick);
		return () => window.removeEventListener("mousedown", handleClick);
	}, []);

	// ✅ NEW: Comprehensive Life Report Auto-Save System
	// Saves both Report.jsx data and FourFortuneAnalysis.jsx data together
	useEffect(() => {
		const saveCompleteLifeReport = async () => {
			// Only save when we have basic report data
			if (!mingLiData && !liuNianData && !jiajuProData) return;

			console.log("💾 Auto-saving complete life report...");
			console.log("📊 Report data:", {
				mingLiData: !!mingLiData,
				liuNianData: !!liuNianData,
				jiajuProData: !!jiajuProData,
			});
			console.log("🎯 Fortune data:", fourFortuneData);

			// Determine report status
			let reportStatus = "generating";
			const hasBasicData = mingLiData || liuNianData || jiajuProData;
			const hasFourFortuneData = Object.values(fourFortuneData).some(
				(data) => data !== null
			);

			if (hasBasicData && hasFourFortuneData) {
				const allFortunesComplete = Object.values(
					fourFortuneData
				).every((data) => data !== null);
				reportStatus = allFortunesComplete ? "complete" : "partial";
			} else if (hasBasicData || hasFourFortuneData) {
				reportStatus = "partial";
			}

			const currentSessionId =
				propSessionId || searchParams.get("sessionId");

			const reportData = {
				// Template data (existing fields for backward compatibility)
				basicReportData: {
					mingLiData,
					liuNianData,
					jiajuProData,
				},
				fourFortuneData,
				reportStatus,
				sessionId: currentSessionId,
				// NEW: AI Generated Content Structure
				aiGeneratedContent: {
					sessionId: currentSessionId,
					generatedAt: new Date().toISOString(),
					generationStatus: reportStatus,
					comprehensiveAI: {
						// HIDDEN: interpersonalAdvice: comprehensiveInterpersonalAdvice
						//	? {
						//			...comprehensiveInterpersonalAdvice,
						//			sessionId: currentSessionId,
						//			generatedAt: new Date().toISOString(),
						//		}
						//	: null,
						lifeAdvice: comprehensiveLifeAdvice
							? {
									...comprehensiveLifeAdvice,
									sessionId: currentSessionId,
									generatedAt: new Date().toISOString(),
								}
							: null,
					},
					fourFortuneAI:
						fourFortuneData &&
						Object.keys(fourFortuneData).length > 0
							? fourFortuneData
							: null,
				},
			};

			const result = await saveLifeReport(reportData);

			// ✅ NEW: Also save to alternative reportData collection (no auth required)
			try {
				const alternativeReportData = {
					sessionId: currentSessionId,
					birthDateTime: userInfo?.birthDateTime || propBirthDateTime,
					gender: userInfo?.gender || propGender,
					basicReportData: {
						mingLiData,
						liuNianData,
						jiajuProData,
					},
					fourFortuneData,
					aiGeneratedContent: {
						sessionId: currentSessionId,
						generatedAt: new Date().toISOString(),
						generationStatus: reportStatus,
						comprehensiveAI: {
							lifeAdvice: comprehensiveLifeAdvice,
						},
						fourFortuneAI: fourFortuneData,
						wuxingAnalysis: aiAnalysis,
						lifeStageAnalysis: lifeStageAnalysis,
					},
					reportStatus,
				};

				const alternativeResult = await saveReportData(
					alternativeReportData
				);
				if (alternativeResult.success) {
					console.log(
						"🎉 Report data also saved to reportData collection!"
					);
				}
			} catch (error) {
				console.error(
					"❌ Error saving to alternative collection:",
					error
				);
			}

			if (result.success && reportStatus === "complete") {
				console.log("🎉 Complete life report saved successfully!");
				// Update user genStatus when everything is complete
				const userId = session?.user?.userId;
				if (userId) {
					await post(`/api/users/${userId}`, {
						genStatus: "done",
					});
				}
			}
		};

		// Use a small delay to debounce rapid state changes
		const timeoutId = setTimeout(() => {
			saveCompleteLifeReport();
		}, 100);

		return () => clearTimeout(timeoutId);
	}, [
		mingLiData,
		liuNianData,
		jiajuProData,
		fourFortuneData,
		// comprehensiveInterpersonalAdvice, // HIDDEN: 人際調衡要點
		comprehensiveLifeAdvice,
		saveLifeReport,
		saveReportData, // NEW: Alternative save function
		session?.user?.userId,
		propSessionId,
		searchParams,
		propBirthDateTime,
		propGender,
		aiAnalysis,
		lifeStageAnalysis,
	]);

	// ✅ NEW: Four Fortune Data Update Handler
	// This function will be passed to FourFortuneAnalysis to update fortune data
	const updateFortuneData = useCallback((fortuneType, data) => {
		console.log(`🎯 Updating ${fortuneType} fortune data:`, data);
		setFourFortuneData((prev) => ({
			...prev,
			[`${fortuneType}FortuneData`]: data,
		}));
	}, []);

	// Memoized loading state to prevent unnecessary re-renders
	const isAIGenerating = useMemo(() => {
		return (
			Object.values(isLoadingLifeStage).some((loading) => loading) ||
			Object.values(isLoadingInterpersonal).some((loading) => loading) ||
			Object.values(isLoadingLifeAdvice).some((loading) => loading) ||
			// isLoadingComprehensiveInterpersonal || // HIDDEN: 人際調衡要點
			isLoadingComprehensiveLifeAdvice ||
			Object.values(fourFortuneData).some((data) => data === null) ||
			// !comprehensiveInterpersonalAdvice || // HIDDEN: 人際調衡要點
			!comprehensiveLifeAdvice
		);
	}, [
		isLoadingLifeStage,
		isLoadingInterpersonal,
		isLoadingLifeAdvice,
		// isLoadingComprehensiveInterpersonal, // HIDDEN: 人際調衡要點
		isLoadingComprehensiveLifeAdvice,
		fourFortuneData,
		// comprehensiveInterpersonalAdvice, // HIDDEN: 人際調衡要點
		comprehensiveLifeAdvice,
	]);

	// Fetch AI analysis for wuxing patterns
	useEffect(() => {
		const getAiAnalysis = async () => {
			if (!userInfo) return;

			try {
				const wuxingAnalysis = calculateWuxingAnalysis(userInfo);
				if (wuxingAnalysis?.wuxingData) {
					const result = await analyzeComplexPatterns(
						wuxingAnalysis.wuxingData,
						userInfo
					);
					console.log("🔍 AI Analysis Result:", result);
					console.log("📋 LifeAdvice in result:", result?.lifeAdvice);
					console.log("🤖 AI Success:", !!result?.aiGenerated);
					console.log(
						"🎯 Content Type:",
						result?.contentType || "unknown"
					);
					setAiAnalysis(result);
				}
			} catch (error) {
				console.error("Error fetching AI analysis:", error);
				// Set fallback data
				setAiAnalysis({
					pattern: "身強食神制殺格",
					primaryGod: "木",
					secondaryGod: "土",
				});
			}
		};
		getAiAnalysis();
	}, [userInfo]);

	// Fetch AI analysis for element flow obstacles
	useEffect(() => {
		const getElementFlowAnalysis = async () => {
			if (!userInfo) return;

			try {
				await analyzeElementFlow(userInfo);
			} catch (error) {
				console.error("Error fetching element flow analysis:", error);
			}
		};
		getElementFlowAnalysis();
	}, [userInfo]);

	// Generate life stage analysis for all four pillars
	useEffect(() => {
		const generateAllAnalyses = async () => {
			if (!userInfo || !reportDocData) {
				console.log("Skipping AI generation - missing data:", {
					hasUserInfo: !!userInfo,
					hasReportDocData: !!reportDocData,
				});
				return;
			}

			// Prevent duplicate AI generation during development hot reloads
			if (aiGenerationStarted) {
				console.log(
					"⚠️ AI generation already started, skipping duplicate..."
				);
				return;
			}

			// EMERGENCY: Additional check for URL-based reports
			if (userInfo?.isUrlBased && userInfo?.sessionId) {
				const sessionKey = `ai_generation_${userInfo.sessionId}`;
				if (window[sessionKey]) {
					console.log(
						"🚨 EMERGENCY: URL session already generating, aborting!"
					);
					return;
				}
				window[sessionKey] = true;
			}

			console.log("Starting AI generation process...");
			console.log(
				"🎯 Generation for:",
				userInfo?.birthDateTime,
				userInfo?.sessionId
			);
			setAiGenerationStarted(true);
			const pillars = ["年柱", "月柱", "日柱", "時柱"];

			for (const pillar of pillars) {
				// Generate life stage analysis
				if (!lifeStageAnalysis[pillar] && !isLoadingLifeStage[pillar]) {
					setIsLoadingLifeStage((prev) => ({
						...prev,
						[pillar]: true,
					}));

					try {
						const pillarDataMap = {
							年柱: reportDocData.nianzhuData,
							月柱: reportDocData.yuezhuData,
							日柱: reportDocData.rizhuData,
							時柱: reportDocData.shizhuData,
						};

						const analysis = await generateLifeStageAnalysis(
							pillar,
							pillarDataMap[pillar],
							userInfo
						);

						setLifeStageAnalysis((prev) => ({
							...prev,
							[pillar]: analysis,
						}));
					} catch (error) {
						console.error(
							`Error generating ${pillar} analysis:`,
							error
						);
					} finally {
						setIsLoadingLifeStage((prev) => ({
							...prev,
							[pillar]: false,
						}));
					}
				}

				// Generate interpersonal advice
				if (
					!interpersonalAdvice[pillar] &&
					!isLoadingInterpersonal[pillar]
				) {
					setIsLoadingInterpersonal((prev) => ({
						...prev,
						[pillar]: true,
					}));

					try {
						const advice = await generateInterpersonalAdvice(
							pillar,
							userInfo
						);
						setInterpersonalAdvice((prev) => ({
							...prev,
							[pillar]: advice,
						}));
					} catch (error) {
						console.error(
							`Error generating interpersonal advice for ${pillar}:`,
							error
						);
					} finally {
						setIsLoadingInterpersonal((prev) => ({
							...prev,
							[pillar]: false,
						}));
					}
				}

				// Generate comprehensive life advice
				if (
					!lifeAdviceAnalysis[pillar] &&
					!isLoadingLifeAdvice[pillar]
				) {
					setIsLoadingLifeAdvice((prev) => ({
						...prev,
						[pillar]: true,
					}));

					try {
						const advice = await generateLifeAdvice(
							pillar,
							userInfo
						);
						setLifeAdviceAnalysis((prev) => ({
							...prev,
							[pillar]: advice,
						}));
					} catch (error) {
						console.error(
							`Error generating life advice for ${pillar}:`,
							error
						);
					} finally {
						setIsLoadingLifeAdvice((prev) => ({
							...prev,
							[pillar]: false,
						}));
					}
				}
			}

			// Generate comprehensive sections
			const wuxingData = getWuxingData(
				userInfo.birthDateTime,
				userInfo.gender
			);

			const currentSessionId =
				propSessionId || searchParams.get("sessionId");

			// HIDDEN: Generate comprehensive interpersonal advice - FRESH PER PAYMENT SESSION
			if (
				false &&
				!comprehensiveInterpersonalAdvice &&
				!isLoadingComprehensiveInterpersonal
			) {
				setIsLoadingComprehensiveInterpersonal(true);
				console.log(
					"🔥 Generating FRESH interpersonal advice for session:",
					currentSessionId
				);
				try {
					const advice =
						await generateComprehensiveInterpersonalAdvice(
							userInfo,
							wuxingData
						);
					// Add session tracking to ensure uniqueness per payment
					const adviceWithSession = {
						...advice,
						sessionId: currentSessionId,
						generatedAt: new Date().toISOString(),
					};
					setComprehensiveInterpersonalAdvice(adviceWithSession);
				} catch (error) {
					console.error(
						"Error generating comprehensive interpersonal advice:",
						error
					);
				} finally {
					setIsLoadingComprehensiveInterpersonal(false);
				}
			}

			// Generate comprehensive life advice - FRESH PER PAYMENT SESSION
			if (!comprehensiveLifeAdvice && !isLoadingComprehensiveLifeAdvice) {
				setIsLoadingComprehensiveLifeAdvice(true);
				console.log(
					"🔥 Generating FRESH life advice for session:",
					currentSessionId
				);
				try {
					const advice = await generateComprehensiveLifeAdvice(
						userInfo,
						wuxingData
					);
					// Add session tracking to ensure uniqueness per payment
					const adviceWithSession = {
						...advice,
						sessionId: currentSessionId,
						generatedAt: new Date().toISOString(),
					};
					setComprehensiveLifeAdvice(adviceWithSession);
				} catch (error) {
					console.error(
						"Error generating comprehensive life advice:",
						error
					);
				} finally {
					setIsLoadingComprehensiveLifeAdvice(false);
				}
			}
		};

		// Allow page to render first, then start AI generation after a brief delay
		const startAIGeneration = () => {
			setTimeout(() => {
				generateAllAnalyses();
			}, 2000); // 2 second delay to let page render completely and user see content first
		};

		startAIGeneration();
	}, [userInfo, reportDocData, aiGenerationStarted]);

	// Set the first 十神 tab when AI analysis is loaded
	useEffect(() => {
		if (aiAnalysis?.tenGodsAnalysis && !activeTenGodsTab) {
			const firstTabKey = Object.keys(aiAnalysis.tenGodsAnalysis)[0];
			if (firstTabKey) {
				setActiveTenGodsTab(firstTabKey);
			}
		}
	}, [aiAnalysis, activeTenGodsTab]);

	// 进度指示器hover/点击显示目录
	const handleProgressEnter = () => {
		clearTimeout(hideMenuTimer.current);
		setShowMenu(true);
	};
	// const handleProgressLeave = () => {
	//     hideMenuTimer.current = setTimeout(() => setShowMenu(false), 200);
	// };

	// 目录点击跳转
	const handleAnchorClick = (idx) => {
		sectionRefs.current[idx]?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
		// setShowMenu(false);
	};

	// Check if essential data is available (not AI data)
	if (loading || !reportDocData || !userInfo) {
		return (
			<div className="min-h-screen bg-[#EFEFEF] flex items-center justify-center">
				<div className="space-y-8">
					<div className="text-center">
						<div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#A3B115] mx-auto mb-4"></div>
						<p className="text-xl text-[#5A5A5A]">
							載入基本報告資料中...
						</p>
					</div>
					<div className="max-w-lg mx-auto space-y-4">
						<Skeleton className="h-4 w-[80%]" />
						<Skeleton className="h-4 w-[70%]" />
						<Skeleton className="h-4 w-[80%]" />
						<Skeleton className="h-4 w-[70%]" />
					</div>
				</div>
			</div>
		);
	}

	// console.log('reportDocData:', activeIndex);
	console.log("Report rendering with data:", {
		hasReportDocData: !!reportDocData,
		hasUserInfo: !!userInfo,
		loading,
	});

	// Helper functions for element analysis
	function getStar(strength) {
		if (strength.includes("★★★★★")) return 5;
		if (strength.includes("★★★")) return 3;
		if (strength.includes("★")) return 1;
		return 0;
	}

	function getElementTrait(element, star) {
		switch (element) {
			case "水":
				if (star === 1) return "容易沉滯";
				if (star === 3) return "能夠靈活應對變化";
				if (star === 5) return "能夠激發創造力和靈感";
				break;
			case "火":
				if (star === 1) return "缺乏熱情";
				if (star === 3) return "具備一定的熱情和活力";
				if (star === 5) return "象徵激情和驅動力，能夠引領變革";
				break;
			case "土":
				if (star === 1) return "缺乏支持，容易崩潰";
				if (star === 3) return "一定的穩定性，能夠支持基本需求";
				if (star === 5) return "堅實可靠";
				break;
			case "金":
				if (star === 1) return "缺乏堅固性";
				if (star === 3) return "具備一定的堅韌性和力量";
				if (star === 5) return "剛硬密集，能夠帶來變革";
				break;
			case "木":
				if (star === 1) return "孤立無根";
				if (star === 3) return "能夠展現成長潛力";
				if (star === 5) return "象徵生命力和繁榮，持續向上成長";
				break;
			default:
				return "";
		}
		return "";
	}

	function getElementInfluence(element, star) {
		switch (element) {
			case "水":
				if (star === 1) return "感到迷茫，難做出決策";
				if (star === 3)
					return "在變化中能夠保持一定的冷靜，適度支持個人成長";
				if (star === 5) return "自由流動的能量，促進個人發展和創新思維";
				break;
			case "火":
				if (star === 1) return "缺乏動力和目標";
				if (star === 3) return "能夠在挑戰中展現一定的勇氣和決心";
				if (star === 5)
					return "激發強烈的創造力和行動力，驅動成就和成功";
				break;
			case "土":
				if (star === 1) return "感到不安，缺乏安全感和根基";
				if (star === 3) return "提供穩定的支持，能夠協助應對日常挑戰";
				if (star === 5) return "增強自信心和安全感，促進個人繁榮和發展";
				break;
			case "金":
				if (star === 1) return "感到缺乏方向感，容易受到外界影響";
				if (star === 3) return "提供適度的支持，能夠協助做出合理的決策";
				if (star === 5) return "追求完美，重規則壓力，身心易疲憊";
				break;
			case "木":
				if (star === 1) return "創造力受阻，難將靈感系統化落地";
				if (star === 3)
					return "能夠在一定程度上激發靈感，但仍需更多支持";
				if (star === 5)
					return "促進創造力的發揮，能夠有效實現想法和計劃";
				break;
			default:
				return "";
		}
		return "";
	}

	// Calculate wuxing analysis for the component
	const wuxingAnalysis = userInfo ? calculateWuxingAnalysis(userInfo) : null;

	return (
		<div className="min-h-screen bg-[#EFEFEF] ">
			{!isPrinting && <Navbar from="report" />}

			{/* Navigation Row */}
			{!isPrinting && (
				<div className="w-full mt-16 bg-gradient-to-r from-[#A3B116] to-[#3D5C2D] py-4 sm:py-6">
					<div className="max-w-6xl px-3 mx-auto sm:px-4">
						<div className="flex items-center justify-center gap-3 sm:justify-between md:justify-center lg:justify-center xl:justify-center sm:gap-6">
							{/* 命理分析報告 Tab */}
							<button
								onClick={() => setActiveTab("report")}
								className={`flex-1 max-w-[280px] px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-200 ${
									activeTab === "report"
										? "bg-gradient-to-r from-[#A3B116] to-[#3D5C2D] text-white shadow-[0_4px_14px_rgba(0,0,0,0.25)]"
										: "bg-white text-[#374A37] shadow-inner shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)]"
								}`}
								style={{
									fontFamily: "Noto Serif TC, serif",
									fontSize: "clamp(14px, 3.5vw, 18px)",
									boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
								}}
							>
								命理分析報告
							</button>

							{/* 四大運勢分析 Tab */}
							<button
								onClick={() => setActiveTab("fortune")}
								className={`flex-1 max-w-[280px] px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-200 ${
									activeTab === "fortune"
										? "bg-gradient-to-r from-[#A3B116] to-[#3D5C2D] text-white shadow-[0_4px_14px_rgba(0,0,0,0.25)]"
										: "bg-white text-[#374A37] shadow-inner shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)]"
								}`}
								style={{
									fontFamily: "Noto Serif TC, serif",
									fontSize: "clamp(14px, 3.5vw, 18px)",
									boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
								}}
							>
								四大運勢分析
							</button>
						</div>
					</div>
				</div>
			)}

			{/* 正文内容 */}
			<div
				ref={contentRef}
				style={{ display: activeTab === "report" ? "block" : "none" }}
			>
				{/* 第一章 四柱*/}
				<div
					key="section-0"
					className="w-full sm:w-[95%] lg:w-[90%] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-10 flex flex-col lg:flex-row bg-[#EFEFEF]"
				>
					{/* Left Section */}
					<div className="flex items-center justify-center flex-1 mt-4 mb-4 sm:mb-6 lg:justify-start lg:mb-0">
						<h1
							ref={(el) => (sectionRefs.current[0] = el)}
							style={{
								fontFamily: "Noto Serif TC, serif",
								fontWeight: 800,
								fontSize: "clamp(24px, 5vw, 56px)",
								color: "#A3B116",
								lineHeight: 1.2,
							}}
							className="px-2 text-center lg:text-left sm:px-0"
						>
							{sections[0]?.title}
						</h1>
					</div>
					{/* Right Section */}
					{/* <div className="flex flex-col items-center justify-center flex-1">
						<div className="flex flex-col w-full max-w-md gap-3 sm:flex-row sm:gap-4 sm:max-w-none">
							<button
								onClick={onPrint}
								style={{
									width: "100%",
									maxWidth: "250px",
									height: "60px",
									backgroundColor: "#A3B116",
									borderRadius: "100px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									border: "none",
									cursor: "pointer",
									marginBottom: "16px",
								}}
								className="sm:h-[72px] sm:mb-6"
							>
								<span
									style={{
										fontFamily: "Noto Serif TC, serif",
										fontWeight: 800,
										fontSize: "clamp(16px, 4vw, 20px)",
										color: "#FFFFFF",
										letterSpacing: 2,
									}}
								>
									下載報告
								</span>
							</button>
							<button
								onClick={() => {
									// Add your share logic here
									alert("分享您的結果功能待实现");
								}}
								style={{
									width: "100%",
									maxWidth: "250px",
									height: "60px",
									backgroundColor: "#A3B116",
									borderRadius: "100px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									border: "none",
									cursor: "pointer",
									marginBottom: "16px",
								}}
								className="sm:h-[72px] sm:mb-6"
							>
								<span
									style={{
										fontFamily: "Noto Serif TC, serif",
										fontWeight: 800,
										fontSize: "clamp(16px, 4vw, 20px)",
										color: "#FFFFFF",
										letterSpacing: 2,
									}}
								>
									分享您的結果
								</span>
							</button>
						</div>
					</div> */}
				</div>
				{/* Paragraph below both columns */}
				<div className="w-full sm:w-[95%] lg:w-[85%] mx-auto px-3 sm:px-4 lg:px-6 pb-4 sm:pb-6 lg:pb-8 mb-4 sm:mb-6 lg:mb-10">
					<p
						style={{
							fontFamily: "Noto Sans HK, sans-serif",
							fontWeight: 400,
							fontSize: "clamp(14px, 3.5vw, 20px)",
							color: "#000000",
							lineHeight: 1.6,
						}}
						className="text-center sm:text-left"
					>
						{t("p1-4")}
					</p>
				</div>
				{/* Five Elements Summary Section */}
				<section className="w-[95%] sm:w-[90%] lg:w-[80%] mx-auto bg-white rounded-[30px] sm:rounded-[60px] lg:rounded-[160px] p-4 sm:p-6 lg:p-3 mb-6 sm:mb-10 shadow-[0_2px_5.3px_rgba(0,0,0,0.25)]">
					<style>{`
						@media (min-width: 1024px) and (max-width: 1090px) {
							.five-element-flex {
								flex-direction: column !important;
								align-items: center !important;
							}
							.five-element-analysis {
								margin-left: 0 !important;
								width: 100% !important;
								justify-content: center !important;
								text-align: center !important;
							}
						}
					`}</style>
					<div className="flex items-center justify-center">
						{/* Five Elements with counts and analysis */}
						<div className="flex flex-col items-center justify-center w-full space-y-1 lg:flex-row lg:space-y-0 lg:space-x-0 five-element-flex">
							{(() => {
								const analysis =
									calculateWuxingAnalysis(userInfo);
								if (!analysis) return null;

								const { elementCounts, missingElements } =
									analysis;

								return (
									<>
										{/* Element displays */}
										<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
											{ELEMENTS.map((element) => (
												<div
													key={element}
													className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3"
												>
													<div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
														<Image
															src={`/images/elements/${element}.png`}
															alt={element}
															width={48}
															height={48}
															className="object-contain w-full h-full"
														/>
													</div>
													<span
														style={{
															fontFamily:
																"Noto Serif TC, serif",
															fontWeight: 900,
															fontSize:
																"clamp(16px, 4vw, 20px)",
															color: wuxingColorMap[
																element
															],
														}}
													>
														{elementCounts[element]}
													</span>
												</div>
											))}
										</div>

										{/* Analysis */}
										<div className="w-full p-1 sm:p-4 lg:ml-15 lg:w-auto five-element-analysis">
											{/* <div
												className="mb-2 text-lg font-semibold"
												style={{
													fontFamily:
														"Noto Sans HK, sans-serif",
													color: "#333",
												}}
											>
												五行分析
											</div> */}
											<div
												className="text-sm text-center sm:text-base lg:text-left"
												style={{
													fontFamily:
														"Noto Sans HK, sans-serif",
													color: "#666",
												}}
											>
												{missingElements.length ===
												0 ? (
													<div>
														<span
															style={{
																fontFamily:
																	"Noto Serif TC, serif",
																fontWeight: 700,
																fontSize:
																	"clamp(24px, 5vw, 34px)",
																color: "#A3B116",
															}}
														>
															五行齊全
														</span>
														<span
															style={{
																fontFamily:
																	"Noto Serif TC, serif",
																fontWeight: 700,
																fontSize:
																	"clamp(18px, 4vw, 24px)",
																color: "#515151",
															}}
														>
															-
															沒有嚴重缺失某一元素
														</span>
													</div>
												) : (
													<div>
														{missingElements.map(
															(
																element,
																index
															) => (
																<span
																	key={
																		element
																	}
																>
																	<span
																		style={{
																			fontFamily:
																				"Noto Serif TC, serif",
																			fontWeight: 700,
																			fontSize:
																				"24px",
																			color: wuxingColorMap[
																				element
																			],
																		}}
																	>
																		{
																			element
																		}
																	</span>
																	{index <
																		missingElements.length -
																			1 && (
																		<span
																			style={{
																				fontFamily:
																					"Noto Serif TC, serif",
																				fontWeight: 700,
																				fontSize:
																					"24px",
																				color: "#515151",
																			}}
																		>
																			、
																		</span>
																	)}
																</span>
															)
														)}
														<span
															style={{
																fontFamily:
																	"Noto Serif TC, serif",
																fontWeight: 700,
																fontSize:
																	"24px",
																color: "#515151",
															}}
														>
															缺失
														</span>
													</div>
												)}
											</div>
										</div>
									</>
								);
							})()}
						</div>
					</div>
				</section>

				{/* Zodiac and Four Pillars Detail Section */}
				<section className="w-[95%] sm:w-[85%] mx-auto bg-white rounded-[24px] sm:rounded-[48px] lg:rounded-[80px] p-3 sm:p-3 lg:p-12 mb-6 sm:mb-10 shadow-[0_4px_5.3px_rgba(0,0,0,0.18)]">
					{(() => {
						const analysis = calculateWuxingAnalysis(userInfo);
						if (!analysis) return null;

						const { wuxingData } = analysis;

						// Calculate zodiac from birth year
						const birthDate = new Date(userInfo.birthDateTime);
						const birthYear = birthDate.getFullYear();
						const zodiacAnimals = [
							"鼠",
							"牛",
							"虎",
							"兔",
							"龍",
							"蛇",
							"馬",
							"羊",
							"猴",
							"雞",
							"狗",
							"豬",
						];
						const userZodiac =
							zodiacAnimals[(birthYear - 1900) % 12];

						return (
							<div className="flex flex-col items-center justify-center gap-0 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
								{/* Left Side - Zodiac Animal */}
								<div className="w-full lg:w-[22%] flex items-center justify-center mb-4 lg:mb-0">
									<div className="text-center">
										<div className="flex items-center justify-center w-40 h-40 mx-8 mx-auto mt-3 mb-0 sm:mb-4 sm:w-50 sm:h-50 lg:w-90 lg:h-90">
											<Image
												src={`/images/animals/${
													userZodiac === "龍"
														? "dragon"
														: userZodiac === "鼠"
															? "mouse"
															: userZodiac ===
																  "牛"
																? "cow"
																: userZodiac ===
																	  "虎"
																	? "tiger"
																	: userZodiac ===
																		  "兔"
																		? "rabbit"
																		: userZodiac ===
																			  "蛇"
																			? "snake"
																			: userZodiac ===
																				  "馬"
																				? "horse"
																				: userZodiac ===
																					  "羊"
																					? "sheep"
																					: userZodiac ===
																						  "猴"
																						? "monkey"
																						: userZodiac ===
																							  "雞"
																							? "chicken"
																							: userZodiac ===
																								  "狗"
																								? "dog"
																								: userZodiac ===
																									  "豬"
																									? "pig"
																									: "mouse"
												}.png`}
												alt={userZodiac}
												width={328}
												height={328}
												className="object-contain"
											/>
										</div>
									</div>
								</div>

								<div className="w-full lg:w-[70%] flex flex-col gap-4 sm:gap-6">
									{/* Four Pillars in responsive layout */}
									<div className="flex flex-wrap justify-center gap-5 mt-4 mb-4 lg:justify-start sm:gap-4 sm:mb-6 lg:mt-10">
										{/* 年柱 */}
										<div className="bg-white border-2 border-black rounded-full px-3 sm:px-6 lg:px-10 py-2 min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] text-center flex-shrink-0">
											<div
												className="font-bold text-[#374A37]"
												style={{
													fontFamily:
														"Noto Serif TC, serif",
													fontSize:
														"clamp(14px, 3vw, 18px)",
												}}
											>
												年柱-
												<span className="text-[#A3B116]">
													{wuxingData.year}
												</span>
											</div>
										</div>

										{/* 月柱 */}
										<div className="bg-white border-2 border-black rounded-full px-3 sm:px-6 lg:px-10 py-2 min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] text-center flex-shrink-0">
											<div
												className="font-bold text-[#374A37]"
												style={{
													fontFamily:
														"Noto Serif TC, serif",
													fontSize:
														"clamp(14px, 3vw, 18px)",
												}}
											>
												月柱-
												<span className="text-[#A3B116]">
													{wuxingData.month}
												</span>
											</div>
										</div>

										{/* 日柱 */}
										<div className="bg-white border-2 border-black rounded-full px-3 sm:px-6 lg:px-10 py-2 min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] text-center flex-shrink-0">
											<div
												className="font-bold text-[#374A37]"
												style={{
													fontFamily:
														"Noto Serif TC, serif",
													fontSize:
														"clamp(14px, 3vw, 18px)",
												}}
											>
												日柱-
												<span className="text-[#A3B116]">
													{wuxingData.day}
												</span>
											</div>
										</div>

										{/* 時柱 */}
										<div className="bg-white border-2 border-black rounded-full px-3 sm:px-6 lg:px-10 py-2 min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] text-center flex-shrink-0">
											<div
												className="font-bold text-[#374A37]"
												style={{
													fontFamily:
														"Noto Serif TC, serif",
													fontSize:
														"clamp(14px, 3vw, 18px)",
												}}
											>
												時柱-
												<span className="text-[#A3B116]">
													{wuxingData.hour}
												</span>
											</div>
										</div>
									</div>

									<div className="flex flex-row justify-center gap-4 sm:flex-row md:justify-start lg:justify-start xl:justify-start sm:justify-center sm:gap-8">
										{/* Left section - Wuxing Analysis */}
										<div
											className="px-4 py-3 text-white rounded-full shadow-lg sm:py-4 sm:px-8"
											style={{
												backgroundColor: "#A3B116",
												border: `3px solid #A3B116`,
												boxShadow: `0 4px 15px #A3B11640`,
											}}
										>
											<div
												className="text-lg font-bold text-center sm:text-xl"
												style={{
													fontFamily:
														"Noto Serif TC, serif",
												}}
											>
												五行-
												{
													analysis.strengthAnalysis
														.strengthDesc
												}
											</div>
										</div>

										{/* Right section - Missing Elements Analysis (Logic-based) */}
										<div
											className="px-4 py-3 text-white rounded-full shadow-lg sm:py-4 sm:px-8"
											style={{
												backgroundColor: "#A3B116",
											}}
										>
											<div
												className="text-lg font-bold text-center sm:text-xl"
												style={{
													fontFamily:
														"Noto Serif TC, serif",
												}}
											>
												{(() => {
													const missingElements =
														analysis
															.strengthAnalysis
															.weakElements || [];
													if (
														missingElements.length ===
														0
													) {
														return "五行沒有缺失";
													} else if (
														missingElements.length ===
														1
													) {
														return `缺${missingElements[0]}`;
													} else if (
														missingElements.length ===
														2
													) {
														return `缺${missingElements.join("")}`;
													} else {
														return `缺${missingElements.slice(0, 2).join("")}等`;
													}
												})()}
											</div>
										</div>
									</div>

									{/* Advice section like the image */}
									<div className="mt-4 sm:mt-6">
										<p
											className="text-sm sm:text-lg text-[#5A5A5A] text-start leading-relaxed"
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
												fontWeight: 400,
												lineHeight: 1.8,
											}}
										>
											{(() => {
												const {
													primaryGod,
													auxiliaryGod,
													strategy,
												} = analysis.usefulGods || {};

												if (
													!primaryGod ||
													!auxiliaryGod
												) {
													return "根據五行分析，需要進一步確認用神配置以達到最佳平衡效果。";
												}

												const strategyDesc = {
													補缺: "補足所缺",
													扶弱: "扶助偏弱",
													抑強: "抑制過強",
													瀉強: "化解過旺",
												};

												return `根據您的五行配置分析，建議以「${primaryGod}」為首選用神，「${auxiliaryGod}」為輔助用神。透過${strategyDesc[strategy] || "平衡調和"}的策略，兩者協同作用可有效調節五行能量，達到陰陽平衡，提升整體運勢發展。在日常生活中，可通過相應的顏色、方位、職業選擇等方式來強化這些有利元素的影響力。`;
											})()}
										</p>
									</div>
								</div>
							</div>
						);
					})()}
				</section>
				{/* 四柱排盤&納音解析 - Tabbed Interface */}
				<section className="relative w-[95%] sm:w-[95%] lg:w-[90%] mx-auto bg-white rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] p-3 sm:p-6 lg:p-12 mb-6 sm:mb-10 shadow-[0_4px_5.3px_rgba(0,0,0,0.25)]">
					{/* Background Image at Bottom Right */}
					<div className="absolute bottom-0 right-0 overflow-hidden rounded-br-[20px] sm:rounded-br-[30px] lg:rounded-br-[40px]">
						<Image
							src="/images/report/pillarbg.png"
							alt="Pillar Background"
							width={500}
							height={500}
							className="hidden object-contain opacity-40 lg:block"
							style={{ pointerEvents: "none" }}
						/>
					</div>

					<div className="relative z-10 mb-4 sm:mb-6 lg:mb-8">
						<h2
							className="font-bold text-[#A3B116] text-center lg:text-left"
							style={{
								fontFamily: "Noto Serif TC, serif",
								fontSize: "clamp(24px, 6vw, 56px)",
								marginBottom: "clamp(16px, 3vw, 40px)",
							}}
						>
							四柱排盤&納音解析
						</h2>
					</div>

					{/* Navigation Tabs */}
					<div className="relative z-10 mb-4 sm:mb-6 lg:mb-8">
						<div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-3 lg:gap-6">
							{["年柱", "月柱", "日柱", "時柱"].map((pillar) => (
								<button
									key={pillar}
									onClick={() => setActivePillar(pillar)}
									className="flex-shrink-0 w-full text-center transition-all duration-200 sm:w-auto"
									style={{
										minWidth: "clamp(100px, 20vw, 180px)",
										height: "clamp(35px, 8vw, 50px)",
										borderRadius: "clamp(16px, 4vw, 26px)",
										backgroundColor: "#FFFFFF",
										color: "#000000",
										border:
											activePillar === pillar
												? "4px solid #A3B116"
												: "4px solid transparent",
										fontFamily: "Noto Sans HK, sans-serif",
										fontWeight: 600,
										fontSize: "clamp(12px, 3vw, 16px)",
										cursor: "pointer",
										boxShadow:
											"0 2px 6.2px rgba(0, 0, 0, 0.4)",
									}}
								>
									{pillar}
								</button>
							))}
						</div>
					</div>

					{/* Tab Content */}
					<div className="relative z-10">
						{/* 年柱 Content */}
						{activePillar === "年柱" && (
							<>
								<div className="flex flex-col items-center gap-3 mb-4 sm:mb-6 lg:flex-row lg:justify-start lg:items-start lg:gap-6">
									{/* Left side - H2 title */}
									<div className="flex items-center justify-center w-full lg:justify-start lg:w-auto">
										<h2
											id={`section-0-1`}
											ref={(el) =>
												(sectionRefs.current[1] = el)
											}
											style={{
												fontFamily:
													"Noto Serif TC, serif",
												fontWeight: 800,
												fontSize:
													"clamp(24px, 5vw, 42px)",
												color: "#A3B115",
											}}
										>
											年柱
										</h2>
									</div>

									{/* Right side - Tag buttons */}
									<div className="flex flex-col w-full gap-2 sm:gap-3 lg:ml-4 lg:w-auto">
										{/* Tag buttons */}
										<div className="flex flex-wrap items-center justify-center gap-2 mb-3 sm:gap-3 sm:mb-4 lg:justify-start interactive-tabs">
											{Object.entries(
												reportDocData.nianzhuData
											).map(([key, value], index) => {
												const isLastButton =
													index ===
													Object.entries(
														reportDocData.nianzhuData
													).length -
														1;

												// Extract element from key - handle new format like 天干金, 地支木, 综合金木
												const getElementFromKey = (
													key
												) => {
													// Check if key contains any of the wuxing elements
													const elements = [
														"土",
														"木",
														"水",
														"火",
														"金",
													];
													for (const element of elements) {
														if (
															key.includes(
																element
															)
														) {
															return element;
														}
													}
													// Fallback to last character if no element found
													return key.slice(-1);
												};

												const elementKey =
													getElementFromKey(key);

												return (
													<button
														key={index}
														className="flex-shrink-0 transition-all duration-200 hover:border-6"
														style={{
															minWidth:
																"clamp(140px, 30vw, 200px)",
															height: "clamp(35px, 8vw, 50px)",
															borderRadius:
																"clamp(20px, 5vw, 30px)",
															backgroundColor:
																isLastButton
																	? "#FFFFFF"
																	: wuxingColorMap[
																			elementKey
																		],
															color: isLastButton
																? "#000000"
																: "#FFFFFF",
															border:
																openedNianzhuIndex ===
																index
																	? `3px solid #C9D923`
																	: "3px solid transparent",
															fontFamily:
																"Noto Sans HK, sans-serif",
															fontWeight: 400,
															fontSize:
																"clamp(12px, 3vw, 14px)",
															cursor: "pointer",
															boxShadow:
																"0 2px 6.2px rgba(0, 0, 0, 0.4)",
														}}
														onMouseEnter={(e) => {
															if (
																openedNianzhuIndex !==
																index
															) {
																e.target.style.border =
																	"6px solid #C9D923";
															}
														}}
														onMouseLeave={(e) => {
															if (
																openedNianzhuIndex !==
																index
															) {
																e.target.style.border =
																	"6px solid transparent";
															}
														}}
														onClick={() => {
															setOpenedNianzhuIndex(
																openedNianzhuIndex ===
																	index
																	? null
																	: index
															);
														}}
													>
														{key}
													</button>
												);
											})}
										</div>
									</div>
								</div>
								<div className="w-full sm:w-[95%]">
									<p
										className="mb-3 text-sm leading-relaxed text-black sm:text-lg lg:text-xl sm:mb-4"
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
											fontWeight: 400,
											lineHeight: 1.8,
										}}
									>
										{t("p1-5")}
									</p>
								</div>

								{/* Dropdown content */}
								{Object.entries(reportDocData.nianzhuData).map(
									([key, value], index) => (
										<div
											key={index}
											ref={setNianzhuRef(index)}
											className={`flex flex-col lg:flex-row mt-3 sm:mt-4 gap-3 sm:gap-4 ${isPrinting ? "tab-content-print" : ""}`}
											style={
												isPrinting
													? {}
													: {
															maxHeight:
																openedNianzhuIndex ===
																index
																	? "auto"
																	: 0,
															overflow: "hidden",
															transition:
																"max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s",
															opacity:
																openedNianzhuIndex ===
																index
																	? 1
																	: 0,
														}
											}
										>
											{/* Left side - Content */}
											<div className="w-full lg:w-1/2 lg:pr-4">
												<p
													className="mb-3 text-sm leading-relaxed text-black sm:text-lg lg:text-xl sm:mb-4"
													style={{
														fontFamily:
															"Noto Sans HK, sans-serif",
														fontWeight: 400,
														lineHeight: 1.8,
													}}
												>
													{value}
												</p>
											</div>

											{/* Right side - Image */}
											<div className="flex items-center justify-center w-full lg:w-1/2">
												<Image
													className="object-contain w-full h-auto max-w-xs sm:max-w-sm lg:max-w-md"
													priority
													src={(() => {
														// Extract element from key - handle new format like 天干金, 地支木, 综合金木
														const getElementFromKey =
															(key) => {
																const elements =
																	[
																		"土",
																		"木",
																		"水",
																		"火",
																		"金",
																	];
																for (const element of elements) {
																	if (
																		key.includes(
																			element
																		)
																	) {
																		return element;
																	}
																}
																return key.slice(
																	-1
																); // Fallback
															};

														const elementKey =
															getElementFromKey(
																key
															);
														// Map of available element images
														const availableImages =
															[
																"土",
																"木",
																"水",
																"火",
																"金",
															];
														if (
															availableImages.includes(
																elementKey
															)
														) {
															return `/images/report/${elementKey}.png`;
														}
														// Fallback to a default element image if not found
														return `/images/report/木.png`;
													})()}
													alt={key}
													width={420}
													height={320}
												/>
											</div>
										</div>
									)
								)}

								{/* AI Life Stage Analysis Section for 年柱 */}
								<div className="p-3 sm:p-6 lg:p-8">
									{isLoadingLifeStage["年柱"] ? (
										<div className="py-6 text-center sm:py-8">
											<div className="animate-spin rounded-full w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-[#A3B116] mx-auto mb-3 sm:mb-4"></div>
											<p className="text-sm sm:text-lg text-[#5A5A5A]">
												正在分析您的童年生活特征...
											</p>
										</div>
									) : lifeStageAnalysis["年柱"] ? (
										<div>
											<div className="mb-4 sm:mb-6">
												<h4
													className="font-bold text-[#A3B116] mb-3 sm:mb-4 text-center sm:text-left"
													style={{
														fontFamily:
															"Noto Serif TC, serif",
														fontSize:
															"clamp(20px, 5vw, 36px)",
													}}
												>
													{
														lifeStageAnalysis[
															"年柱"
														].title
													}
												</h4>
												<div className="p-2 mb-3 sm:p-4 sm:mb-4">
													<p
														className="leading-relaxed text-black"
														style={{
															fontFamily:
																"Noto Sans HK, sans-serif",
															fontWeight: 400,
															fontSize:
																"clamp(14px, 3.5vw, 18px)",
															lineHeight: 1.8,
														}}
													>
														{
															lifeStageAnalysis[
																"年柱"
															].content
														}
													</p>
												</div>
												<div className="p-2 mb-3 sm:p-4 sm:mb-4">
													<p
														className="leading-relaxed text-black"
														style={{
															fontFamily:
																"Noto Sans HK, sans-serif",
															fontWeight: 400,
															fontSize:
																"clamp(14px, 3.5vw, 18px)",
															lineHeight: 1.8,
														}}
													>
														{
															lifeStageAnalysis[
																"年柱"
															].example
														}
													</p>
												</div>
												{lifeStageAnalysis["年柱"]
													.wisdom && (
													<div className="p-2 sm:p-4">
														<p
															className="leading-relaxed text-black"
															style={{
																fontFamily:
																	"Noto Sans HK, sans-serif",
																fontWeight: 400,
																fontSize:
																	"clamp(14px, 3.5vw, 18px)",
																lineHeight: 1.8,
															}}
														>
															{
																lifeStageAnalysis[
																	"年柱"
																].wisdom
															}
														</p>
													</div>
												)}
											</div>
										</div>
									) : (
										<div className="py-6 sm:py-8">
											<div className="space-y-3 sm:space-y-4">
												<Skeleton className="w-3/4 h-4 sm:h-6" />
												<Skeleton className="w-full h-4 sm:h-6" />
												<Skeleton className="w-5/6 h-4 sm:h-6" />
												<Skeleton className="w-2/3 h-4 sm:h-6" />
											</div>
										</div>
									)}
								</div>
							</>
						)}

						{/* 月柱 Content */}
						{activePillar === "月柱" && (
							<>
								<div className="flex flex-col items-center gap-3 mb-4 sm:mb-6 lg:flex-row lg:justify-start lg:items-start lg:gap-6">
									{/* Left side - H2 title */}
									<div className="flex items-center justify-center w-full lg:justify-start lg:w-auto">
										<h2
											id={`section-0-2`}
											ref={(el) =>
												(sectionRefs.current[2] = el)
											}
											style={{
												fontFamily:
													"Noto Serif TC, serif",
												fontWeight: 800,
												fontSize:
													"clamp(24px, 5vw, 42px)",
												color: "#A3B115",
											}}
										>
											月柱
										</h2>
									</div>

									{/* Right side - Tag buttons */}
									<div className="flex flex-col w-full gap-2 sm:gap-3 lg:ml-4 lg:w-auto">
										{/* Tag buttons */}
										<div className="flex flex-wrap items-center justify-center gap-2 mb-3 sm:gap-3 sm:mb-4 lg:justify-start interactive-tabs">
											{Object.entries(
												reportDocData.yuezhuData
											).map(([key, value], index) => {
												const isLastButton =
													index ===
													Object.entries(
														reportDocData.yuezhuData
													).length -
														1;

												// Extract element from key - handle new format like 天干金, 地支木, 综合金木
												const getElementFromKey = (
													key
												) => {
													// Check if key contains any of the wuxing elements
													const elements = [
														"土",
														"木",
														"水",
														"火",
														"金",
													];
													for (const element of elements) {
														if (
															key.includes(
																element
															)
														) {
															return element;
														}
													}
													// Fallback to last character if no element found
													return key.slice(-1);
												};

												const elementKey =
													getElementFromKey(key);

												return (
													<button
														key={index}
														className="flex-shrink-0 transition-all duration-200 hover:border-6"
														style={{
															minWidth:
																"clamp(140px, 30vw, 200px)",
															height: "clamp(35px, 8vw, 50px)",
															borderRadius:
																"clamp(20px, 5vw, 30px)",
															backgroundColor:
																isLastButton
																	? "#FFFFFF"
																	: wuxingColorMap[
																			elementKey
																		],
															color: isLastButton
																? "#000000"
																: "#FFFFFF",
															border:
																openedYuezhuIndex ===
																index
																	? `3px solid #C9D923`
																	: "3px solid transparent",
															fontFamily:
																"Noto Sans HK, sans-serif",
															fontWeight: 400,
															fontSize:
																"clamp(12px, 3vw, 14px)",
															cursor: "pointer",
															boxShadow:
																"0 2px 6.2px rgba(0, 0, 0, 0.4)",
														}}
														onMouseEnter={(e) => {
															if (
																openedYuezhuIndex !==
																index
															) {
																e.target.style.border =
																	"6px solid #C9D923";
															}
														}}
														onMouseLeave={(e) => {
															if (
																openedYuezhuIndex !==
																index
															) {
																e.target.style.border =
																	"6px solid transparent";
															}
														}}
														onClick={() => {
															setOpenedYuezhuIndex(
																openedYuezhuIndex ===
																	index
																	? null
																	: index
															);
														}}
													>
														{key}
													</button>
												);
											})}
										</div>
									</div>
								</div>
								<div className="w-full sm:w-[95%]">
									<p
										className="mb-3 text-sm leading-relaxed text-black sm:text-lg lg:text-xl sm:mb-4"
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
											fontWeight: 400,
											lineHeight: 1.8,
										}}
									>
										{t("p1-6")}
									</p>
								</div>
								{/* Dropdown content */}
								{Object.entries(reportDocData.yuezhuData).map(
									([key, value], index) => (
										<div
											key={index}
											ref={setYuezhuRef(index)}
											className={`flex flex-col lg:flex-row mt-3 sm:mt-4 gap-3 sm:gap-4 ${isPrinting ? "tab-content-print" : ""}`}
											style={
												isPrinting
													? {}
													: {
															maxHeight:
																openedYuezhuIndex ===
																index
																	? "auto"
																	: 0,
															overflow: "hidden",
															transition:
																"max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s",
															opacity:
																openedYuezhuIndex ===
																index
																	? 1
																	: 0,
														}
											}
										>
											{/* Left side - Content */}
											<div className="w-full lg:w-1/2 lg:pr-4">
												<p
													className="mb-3 text-sm leading-relaxed text-black sm:text-lg lg:text-xl sm:mb-4"
													style={{
														fontFamily:
															"Noto Sans HK, sans-serif",
														fontWeight: 400,
														lineHeight: 1.8,
													}}
												>
													{value}
												</p>
											</div>

											{/* Right side - Image */}
											<div className="flex items-center justify-center w-full lg:w-1/2">
												<Image
													className="object-contain w-full h-auto max-w-xs sm:max-w-sm lg:max-w-md"
													priority
													src={(() => {
														// Extract element from key - handle new format like 天干金, 地支木, 综合金木
														const getElementFromKey =
															(key) => {
																const elements =
																	[
																		"土",
																		"木",
																		"水",
																		"火",
																		"金",
																	];
																for (const element of elements) {
																	if (
																		key.includes(
																			element
																		)
																	) {
																		return element;
																	}
																}
																return key.slice(
																	-1
																); // Fallback
															};

														const elementKey =
															getElementFromKey(
																key
															);
														// Map of available element images
														const availableImages =
															[
																"土",
																"木",
																"水",
																"火",
																"金",
															];
														if (
															availableImages.includes(
																elementKey
															)
														) {
															return `/images/report/${elementKey}.png`;
														}
														// Fallback to a default element image if not found
														return `/images/report/木.png`;
													})()}
													alt={key}
													width={420}
													height={320}
												/>
											</div>
										</div>
									)
								)}

								{/* AI Life Stage Analysis Section for 月柱 */}
								<div className="p-3 sm:p-6 lg:p-8">
									{isLoadingLifeStage["月柱"] ? (
										<div className="py-6 text-center sm:py-8">
											<div className="animate-spin rounded-full w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-[#A3B116] mx-auto mb-3 sm:mb-4"></div>
											<p className="text-sm sm:text-lg text-[#5A5A5A]">
												正在分析您的青年时期特征...
											</p>
										</div>
									) : lifeStageAnalysis["月柱"] ? (
										<div>
											<div className="mb-4 sm:mb-6">
												<h4
													className="font-bold text-[#A3B116] mb-3 sm:mb-4 text-center sm:text-left"
													style={{
														fontFamily:
															"Noto Serif TC, serif",
														fontSize:
															"clamp(20px, 5vw, 36px)",
													}}
												>
													{
														lifeStageAnalysis[
															"月柱"
														].title
													}
												</h4>
												<div className="p-2 mb-3 sm:p-4 sm:mb-4">
													<p
														className="leading-relaxed text-black"
														style={{
															fontFamily:
																"Noto Sans HK, sans-serif",
															fontWeight: 400,
															fontSize:
																"clamp(14px, 3.5vw, 18px)",
															lineHeight: 1.8,
														}}
													>
														{
															lifeStageAnalysis[
																"月柱"
															].content
														}
													</p>
												</div>
												<div className="p-2 mb-3 sm:p-4 sm:mb-4">
													<p
														className="leading-relaxed text-black"
														style={{
															fontFamily:
																"Noto Sans HK, sans-serif",
															fontWeight: 400,
															fontSize:
																"clamp(14px, 3.5vw, 18px)",
															lineHeight: 1.8,
														}}
													>
														<strong>例子：</strong>{" "}
														{
															lifeStageAnalysis[
																"月柱"
															].example
														}
													</p>
												</div>
												{lifeStageAnalysis["月柱"]
													.wisdom && (
													<div className="p-2 sm:p-4">
														<p
															className="leading-relaxed text-black"
															style={{
																fontFamily:
																	"Noto Sans HK, sans-serif",
																fontWeight: 400,
																fontSize:
																	"clamp(14px, 3.5vw, 18px)",
																lineHeight: 1.8,
															}}
														>
															<strong>
																智慧洞察：
															</strong>
															{
																lifeStageAnalysis[
																	"月柱"
																].wisdom
															}
														</p>
													</div>
												)}
											</div>
										</div>
									) : (
										<div className="py-6 sm:py-8">
											<div className="space-y-3 sm:space-y-4">
												<Skeleton className="w-3/4 h-4 sm:h-6" />
												<Skeleton className="w-full h-4 sm:h-6" />
												<Skeleton className="w-5/6 h-4 sm:h-6" />
												<Skeleton className="w-2/3 h-4 sm:h-6" />
											</div>
										</div>
									)}
								</div>
							</>
						)}

						{/* 日柱 Content */}
						{activePillar === "日柱" && (
							<>
								<div className="flex flex-col items-center gap-3 mb-4 sm:mb-6 lg:flex-row lg:justify-start lg:items-start lg:gap-6">
									{/* Left side - H2 title */}
									<div className="flex items-center justify-center w-full lg:justify-start lg:w-auto">
										<h2
											id={`section-0-3`}
											ref={(el) =>
												(sectionRefs.current[3] = el)
											}
											style={{
												fontFamily:
													"Noto Serif TC, serif",
												fontWeight: 800,
												fontSize:
													"clamp(24px, 5vw, 42px)",
												color: "#A3B115",
											}}
										>
											日柱
										</h2>
									</div>

									{/* Right side - Tag buttons */}
									<div className="flex flex-col w-full gap-2 sm:gap-3 lg:ml-4 lg:w-auto">
										{/* Tag buttons */}
										<div className="flex flex-wrap items-center justify-center gap-2 mb-3 sm:gap-3 sm:mb-4 lg:justify-start interactive-tabs">
											{Object.entries(
												reportDocData.rizhuData
											).map(([key, value], index) => {
												const isLastButton =
													index ===
													Object.entries(
														reportDocData.rizhuData
													).length -
														1;

												// Extract element from key - handle new format like 天干金, 地支木, 综合金木
												const getElementFromKey = (
													key
												) => {
													// Check if key contains any of the wuxing elements
													const elements = [
														"土",
														"木",
														"水",
														"火",
														"金",
													];
													for (const element of elements) {
														if (
															key.includes(
																element
															)
														) {
															return element;
														}
													}
													// Fallback to last character if no element found
													return key.slice(-1);
												};

												const elementKey =
													getElementFromKey(key);

												return (
													<button
														key={index}
														className="flex-shrink-0 transition-all duration-200 hover:border-6"
														style={{
															minWidth:
																"clamp(140px, 30vw, 200px)",
															height: "clamp(35px, 8vw, 50px)",
															borderRadius:
																"clamp(20px, 5vw, 30px)",
															backgroundColor:
																isLastButton
																	? "#FFFFFF"
																	: wuxingColorMap[
																			elementKey
																		],
															color: isLastButton
																? "#000000"
																: "#FFFFFF",
															border:
																openedRizhuIndex ===
																index
																	? `3px solid #C9D923`
																	: "3px solid transparent",
															fontFamily:
																"Noto Sans HK, sans-serif",
															fontWeight: 400,
															fontSize:
																"clamp(12px, 3vw, 14px)",
															cursor: "pointer",
															boxShadow:
																"0 2px 6.2px rgba(0, 0, 0, 0.4)",
														}}
														onMouseEnter={(e) => {
															if (
																openedRizhuIndex !==
																index
															) {
																e.target.style.border =
																	"6px solid #C9D923";
															}
														}}
														onMouseLeave={(e) => {
															if (
																openedRizhuIndex !==
																index
															) {
																e.target.style.border =
																	"6px solid transparent";
															}
														}}
														onClick={() => {
															setOpenedRizhuIndex(
																openedRizhuIndex ===
																	index
																	? null
																	: index
															);
														}}
													>
														{key}
													</button>
												);
											})}
										</div>
									</div>
								</div>
								<div className="w-full sm:w-[95%]">
									<p
										className="mb-3 text-sm leading-relaxed text-black sm:text-lg lg:text-xl sm:mb-4"
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
											fontWeight: 400,
											lineHeight: 1.8,
										}}
									>
										{t("p1-7")}
									</p>
								</div>

								{/* Dropdown content */}
								{Object.entries(reportDocData.rizhuData).map(
									([key, value], index) => (
										<div
											key={index}
											ref={setRizhuRef(index)}
											className={`flex flex-col lg:flex-row mt-3 sm:mt-4 gap-3 sm:gap-4 ${isPrinting ? "tab-content-print" : ""}`}
											style={
												isPrinting
													? {}
													: {
															maxHeight:
																openedRizhuIndex ===
																index
																	? "auto"
																	: 0,
															overflow: "hidden",
															transition:
																"max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s",
															opacity:
																openedRizhuIndex ===
																index
																	? 1
																	: 0,
														}
											}
										>
											{/* Left side - Content */}
											<div className="w-full lg:w-1/2 lg:pr-4">
												<p
													className="mb-3 text-sm leading-relaxed text-black sm:text-lg lg:text-xl sm:mb-4"
													style={{
														fontFamily:
															"Noto Sans HK, sans-serif",
														fontWeight: 400,
														lineHeight: 1.8,
													}}
												>
													{value}
												</p>
											</div>

											{/* Right side - Image */}
											<div className="flex items-center justify-center w-full lg:w-1/2">
												<Image
													className="object-contain w-full h-auto max-w-xs sm:max-w-sm lg:max-w-md"
													priority
													src={(() => {
														// Extract element from key - handle new format like 天干金, 地支木, 综合金木
														const getElementFromKey =
															(key) => {
																const elements =
																	[
																		"土",
																		"木",
																		"水",
																		"火",
																		"金",
																	];
																for (const element of elements) {
																	if (
																		key.includes(
																			element
																		)
																	) {
																		return element;
																	}
																}
																return key.slice(
																	-1
																); // Fallback
															};

														const elementKey =
															getElementFromKey(
																key
															);
														// Map of available element images
														const availableImages =
															[
																"土",
																"木",
																"水",
																"火",
																"金",
															];
														if (
															availableImages.includes(
																elementKey
															)
														) {
															return `/images/report/${elementKey}.png`;
														}
														// Fallback to a default element image if not found
														return `/images/report/木.png`;
													})()}
													alt={key}
													width={420}
													height={320}
												/>
											</div>
										</div>
									)
								)}
								{/* AI Life Stage Analysis Section for 日柱 */}
								<div className="p-3 sm:p-6 lg:p-8">
									{isLoadingLifeStage["日柱"] ? (
										<div className="py-6 text-center sm:py-8">
											<div className="animate-spin rounded-full w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-[#A3B116] mx-auto mb-3 sm:mb-4"></div>
											<p className="text-sm sm:text-lg text-[#5A5A5A]">
												正在分析您的成年时期特征...
											</p>
										</div>
									) : lifeStageAnalysis["日柱"] ? (
										<div>
											<div className="mb-4 sm:mb-6">
												<h4
													className="font-bold text-[#A3B116] mb-3 sm:mb-4 text-center sm:text-left"
													style={{
														fontFamily:
															"Noto Serif TC, serif",
														fontSize:
															"clamp(20px, 5vw, 36px)",
													}}
												>
													{
														lifeStageAnalysis[
															"日柱"
														].title
													}
												</h4>
												<div className="p-2 mb-3 sm:p-4 sm:mb-4">
													<p
														className="leading-relaxed text-black"
														style={{
															fontFamily:
																"Noto Sans HK, sans-serif",
															fontWeight: 400,
															fontSize:
																"clamp(14px, 3.5vw, 18px)",
															lineHeight: 1.8,
														}}
													>
														{
															lifeStageAnalysis[
																"日柱"
															].content
														}
													</p>
												</div>
												<div className="p-2 mb-3 sm:p-4 sm:mb-4">
													<p
														className="leading-relaxed text-black"
														style={{
															fontFamily:
																"Noto Sans HK, sans-serif",
															fontWeight: 400,
															fontSize:
																"clamp(14px, 3.5vw, 18px)",
															lineHeight: 1.8,
														}}
													>
														{
															lifeStageAnalysis[
																"日柱"
															].example
														}
													</p>
												</div>
												{lifeStageAnalysis["日柱"]
													.wisdom && (
													<div className="p-2 sm:p-4">
														<p
															className="leading-relaxed text-black"
															style={{
																fontFamily:
																	"Noto Sans HK, sans-serif",
																fontWeight: 400,
																fontSize:
																	"clamp(14px, 3.5vw, 18px)",
																lineHeight: 1.8,
															}}
														>
															{
																lifeStageAnalysis[
																	"日柱"
																].wisdom
															}
														</p>
													</div>
												)}
											</div>
										</div>
									) : (
										<div className="py-6 sm:py-8">
											<div className="space-y-3 sm:space-y-4">
												<Skeleton className="w-3/4 h-4 sm:h-6" />
												<Skeleton className="w-full h-4 sm:h-6" />
												<Skeleton className="w-5/6 h-4 sm:h-6" />
												<Skeleton className="w-2/3 h-4 sm:h-6" />
											</div>
										</div>
									)}
								</div>
							</>
						)}

						{/* 時柱 Content */}
						{activePillar === "時柱" && (
							<>
								<div className="flex flex-col items-center gap-3 mb-4 sm:mb-6 lg:flex-row lg:justify-start lg:items-start lg:gap-6">
									{/* Left side - H2 title */}
									<div className="flex items-center justify-center w-full lg:justify-start lg:w-auto">
										<h2
											id={`section-0-4`}
											ref={(el) =>
												(sectionRefs.current[4] = el)
											}
											style={{
												fontFamily:
													"Noto Serif TC, serif",
												fontWeight: 800,
												fontSize:
													"clamp(24px, 5vw, 42px)",
												color: "#A3B115",
											}}
										>
											{t("shizhu")}
										</h2>
									</div>

									{/* Right side - Tag buttons */}
									<div className="flex flex-col w-full gap-2 sm:gap-3 lg:ml-4 lg:w-auto">
										{/* Tag buttons */}
										<div className="flex flex-wrap items-center justify-center gap-2 mb-3 sm:gap-3 sm:mb-4 lg:justify-start interactive-tabs">
											{Object.entries(
												reportDocData.shizhuData
											).map(([key, value], index) => {
												const isLastButton =
													index ===
													Object.entries(
														reportDocData.shizhuData
													).length -
														1;

												// Extract element from key - handle new format like 天干金, 地支木, 综合金木
												const getElementFromKey = (
													key
												) => {
													// Check if key contains any of the wuxing elements
													const elements = [
														"土",
														"木",
														"水",
														"火",
														"金",
													];
													for (const element of elements) {
														if (
															key.includes(
																element
															)
														) {
															return element;
														}
													}
													// Fallback to last character if no element found
													return key.slice(-1);
												};

												const elementKey =
													getElementFromKey(key);

												return (
													<button
														key={index}
														className="flex-shrink-0 transition-all duration-200 hover:border-6"
														style={{
															minWidth:
																"clamp(140px, 30vw, 200px)",
															height: "clamp(35px, 8vw, 50px)",
															borderRadius:
																"clamp(20px, 5vw, 30px)",
															backgroundColor:
																isLastButton
																	? "#FFFFFF"
																	: wuxingColorMap[
																			elementKey
																		],
															color: isLastButton
																? "#000000"
																: "#FFFFFF",
															border:
																openedShizhuIndex ===
																index
																	? `3px solid #C9D923`
																	: "3px solid transparent",
															fontFamily:
																"Noto Sans HK, sans-serif",
															fontWeight: 400,
															fontSize:
																"clamp(12px, 3vw, 14px)",
															cursor: "pointer",
															boxShadow:
																"0 2px 6.2px rgba(0, 0, 0, 0.4)",
														}}
														onMouseEnter={(e) => {
															if (
																openedShizhuIndex !==
																index
															) {
																e.target.style.border =
																	"6px solid #C9D923";
															}
														}}
														onMouseLeave={(e) => {
															if (
																openedShizhuIndex !==
																index
															) {
																e.target.style.border =
																	"6px solid transparent";
															}
														}}
														onClick={() => {
															setOpenedShizhuIndex(
																openedShizhuIndex ===
																	index
																	? null
																	: index
															);
														}}
													>
														{key}
													</button>
												);
											})}
										</div>
									</div>
								</div>
								<div className="w-full sm:w-[95%]">
									<p
										className="mb-3 text-sm leading-relaxed text-black sm:text-lg lg:text-xl sm:mb-4"
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
											fontWeight: 400,
											lineHeight: 1.8,
										}}
									>
										{t("p1-8")}
									</p>
								</div>

								{/* Dropdown content */}
								{Object.entries(reportDocData.shizhuData).map(
									([key, value], index) => (
										<div
											key={index}
											ref={setShizhuRef(index)}
											className={`flex flex-col lg:flex-row mt-3 sm:mt-4 gap-3 sm:gap-4 ${isPrinting ? "tab-content-print" : ""}`}
											style={
												isPrinting
													? {}
													: {
															maxHeight:
																openedShizhuIndex ===
																index
																	? "auto"
																	: 0,
															overflow: "hidden",
															transition:
																"max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s",
															opacity:
																openedShizhuIndex ===
																index
																	? 1
																	: 0,
														}
											}
										>
											{/* Left side - Content */}
											<div className="w-full lg:w-1/2 lg:pr-4">
												<p
													className="mb-3 text-sm leading-relaxed text-black sm:text-lg lg:text-xl sm:mb-4"
													style={{
														fontFamily:
															"Noto Sans HK, sans-serif",
														fontWeight: 400,
														lineHeight: 1.8,
													}}
												>
													{value}
												</p>
											</div>
											{/* Right side - Image */}
											<div className="flex items-center justify-center w-full lg:w-1/2">
												<Image
													className="object-contain w-full h-auto max-w-xs sm:max-w-sm lg:max-w-md"
													priority
													src={(() => {
														// Extract element from key - handle new format like 天干金, 地支木, 综合金木
														const getElementFromKey =
															(key) => {
																const elements =
																	[
																		"土",
																		"木",
																		"水",
																		"火",
																		"金",
																	];
																for (const element of elements) {
																	if (
																		key.includes(
																			element
																		)
																	) {
																		return element;
																	}
																}
																return key.slice(
																	-1
																); // Fallback
															};

														const elementKey =
															getElementFromKey(
																key
															);
														// Map of available element images
														const availableImages =
															[
																"土",
																"木",
																"水",
																"火",
																"金",
															];
														if (
															availableImages.includes(
																elementKey
															)
														) {
															return `/images/report/${elementKey}.png`;
														}
														// Fallback to a default element image if not found
														return `/images/report/木.png`;
													})()}
													alt={key}
													width={420}
													height={320}
												/>
											</div>
										</div>
									)
								)}

								{/* AI Life Stage Analysis Section for 時柱 */}
								<div className="p-3 sm:p-6 lg:p-8">
									{isLoadingLifeStage["時柱"] ? (
										<div className="py-6 text-center sm:py-8">
											<div className="animate-spin rounded-full w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-[#A3B116] mx-auto mb-3 sm:mb-4"></div>
											<p className="text-sm sm:text-lg text-[#5A5A5A]">
												正在分析您的老年时期特征...
											</p>
										</div>
									) : lifeStageAnalysis["時柱"] ? (
										<div>
											<div className="mb-4 sm:mb-6">
												<h4
													className="font-bold text-[#A3B116] mb-3 sm:mb-4 text-center sm:text-left"
													style={{
														fontFamily:
															"Noto Serif TC, serif",
														fontSize:
															"clamp(20px, 5vw, 36px)",
													}}
												>
													{
														lifeStageAnalysis[
															"時柱"
														].title
													}
												</h4>
												<div className="p-2 mb-3 sm:p-4 sm:mb-4">
													<p
														className="leading-relaxed text-black"
														style={{
															fontFamily:
																"Noto Sans HK, sans-serif",
															fontWeight: 400,
															fontSize:
																"clamp(14px, 3.5vw, 18px)",
															lineHeight: 1.8,
														}}
													>
														{
															lifeStageAnalysis[
																"時柱"
															].content
														}
													</p>
												</div>
												<div className="p-2 mb-3 sm:p-4 sm:mb-4">
													<p
														className="leading-relaxed text-black"
														style={{
															fontFamily:
																"Noto Sans HK, sans-serif",
															fontWeight: 400,
															fontSize:
																"clamp(14px, 3.5vw, 18px)",
															lineHeight: 1.8,
														}}
													>
														{
															lifeStageAnalysis[
																"時柱"
															].example
														}
													</p>
												</div>
												{lifeStageAnalysis["時柱"]
													.wisdom && (
													<div className="p-2 sm:p-4">
														<p
															className="leading-relaxed text-black"
															style={{
																fontFamily:
																	"Noto Sans HK, sans-serif",
																fontWeight: 400,
																fontSize:
																	"clamp(14px, 3.5vw, 18px)",
																lineHeight: 1.8,
															}}
														>
															{
																lifeStageAnalysis[
																	"時柱"
																].wisdom
															}
														</p>
													</div>
												)}
											</div>
										</div>
									) : (
										<div className="py-6 sm:py-8">
											<div className="space-y-3 sm:space-y-4">
												<Skeleton className="w-3/4 h-4 sm:h-6" />
												<Skeleton className="w-full h-4 sm:h-6" />
												<Skeleton className="w-5/6 h-4 sm:h-6" />
												<Skeleton className="w-2/3 h-4 sm:h-6" />
											</div>
										</div>
									)}
								</div>
							</>
						)}
					</div>
				</section>
				{/* New Sections Based on Attached Images */}
				{(() => {
					// Always render sections, use fallback if aiAnalysis is null
					const analysis = aiAnalysis || {
						mainConclusion: {
							wuxingPattern: "金火兩旺",
							pattern: "身強食神制殺格",
						},
						wuxingDistribution: {
							detailed: {
								wood: {
									count: 1,
									strength: "★",
									characteristic: "孤立無根",
									influence: "創造力受限，難將靈感系統化落地",
								},
								fire: {
									count: 3,
									strength: "★★★",
									characteristic: "外顯熾熱",
									influence:
										"行動力強、熱情主動，但易急躁衝動",
								},
								earth: {
									count: 3,
									strength: "★★",
									characteristic: "鬆散無力",
									influence: "財運不穩，存錢實力，易衝動消費",
								},
								metal: {
									count: 4,
									strength: "★★★★",
									characteristic: "剛硬密集",
									influence:
										"追求完美、重規則壓力，身心易疲憊",
								},
								water: {
									count: 2,
									strength: "★★★",
									characteristic: "潛藏暗流",
									influence: "直覺敏銳，但思慮多，易焦慮失眠",
								},
							},
							conflicts: [
								{
									title: "金火對峙",
									description:
										"金（刚烈）与火（热烈）两强相争，消耗日主能量，易引发身心疲惫。",
									example:
										'想学习新技能（木），总被工作任务（金）打断，导致计划频繁中断，常怀入"忙到无成果"状态。',
								},
							],
						},
						tenGodsPattern: {
							selectedGod: "正印",
							description:
								"年干透出，主智慧、學業與長輩緣，但孤立無根，需主動尋求知識滋養。",
							characteristics:
								"你學東西比一般人快，尤其擅長支持、企劃類知識容易獲得威信教等你的長輩或老師（例如實習時的導師主動帶你）",
							challenges:
								"但甲木被年支申金「斬腳」（木坐金上），意味著...",
							coreAnalysis: {
								title: "核心矛盾-才華vs壓力",
								sections: [
									{
										title: "得vs失財",
										color: "red",
										content: "你的創意能夠為你帶來來利",
										example:
											"等你發出了一個出色的營銷方案或改功獲得大獎暑，這是你實質的才華在發揮",
									},
									{
										title: "劫財vs年財",
										color: "purple",
										content:
											"在與朋友合作時，你可能會面臨財分配的問題",
										example:
											"讓約中容間友作夥伴所各等级的利益分配能夠促進合作的順利進行，避免未來的予盾",
									},
									{
										title: "正印效時",
										color: "green",
										content:
											"調要時到，往在能夠到判帶來幫助",
										example:
											"當你為求業務訂定個等，或是待在某個況的危勞求，可能有上老師為你解答",
									},
								],
							},
						},
						// Remove lifeAdvice from fallback - let it show loading instead
						// lifeAdvice: null, // This will trigger loading state in UI
					};
					return (
						<>
							{/* Debug: Check analysis data */}
							{/* {console.log(
								"🧪 Analysis object in 化解提示:",
								analysis
							)}
							{console.log(
								"🧪 LifeAdvice available:",
								analysis?.lifeAdvice
							)}
							{console.log(
								"🧪 LifeAdvice tips count:",
								analysis?.lifeAdvice?.tips?.length || 0
							)}
							{console.log(
								"⚠️ Using AI content:",
								!!analysis?.lifeAdvice?.tips,
								"vs Fallback content:",
								!analysis?.lifeAdvice?.tips
							)}
 */}
							{/* 五行分佈深度解析 Section - Third Image */}
							<section className="w-[95%] sm:w-[95%] lg:w-[85%] mx-auto bg-white rounded-[20px] sm:rounded-[26px] p-4 sm:p-8 lg:p-12 mb-6 sm:mb-10 shadow-[0_4px_5.3px_rgba(0,0,0,0.25)]">
								<div className="mb-6 sm:mb-8">
									<h2
										className="font-bold text-[#A3B116] text-center lg:text-left"
										style={{
											fontFamily: "Noto Serif TC, serif",
											fontSize: "clamp(32px, 7vw, 60px)",
											marginBottom:
												"clamp(16px, 3vw, 24px)",
										}}
									>
										五行分佈深度解析
									</h2>
								</div>

								{/* Five elements analysis table */}
								<div className="p-2 mb-4 sm:p-6 lg:p-8 sm:mb-8 rounded-2xl">
									{(() => {
										const distribution =
											calculateComprehensiveElementDistribution(
												userInfo
											);

										if (!distribution) {
											return (
												<div className="py-6 text-center text-gray-500 sm:py-8">
													無法載入五行分析數據
												</div>
											);
										}

										const {
											elementCounts,
											elementStrengthMap,
										} = distribution;
										const elements = [
											"金",
											"木",
											"水",
											"火",
											"土",
										];

										return (
											<>
												{/* Mobile Card Layout */}
												<div className="block lg:hidden">
													{elements.map((element) => {
														const count =
															elementCounts[
																element
															] || 0;
														const strength =
															elementStrengthMap[
																element
															] || "";
														const star =
															getStar(strength);

														return (
															<div
																key={element}
																className="mb-4 bg-white border border-gray-200 rounded-lg shadow-sm"
															>
																{/* Element Header */}
																<div
																	className="flex items-center gap-3 p-3 text-white rounded-t-lg"
																	style={{
																		backgroundColor:
																			wuxingColorMap[
																				element
																			],
																	}}
																>
																	<img
																		src={`/images/elements/${element}.png`}
																		alt={
																			element
																		}
																		className="w-6 h-6 sm:w-8 sm:h-8"
																		style={{
																			filter: "brightness(0) saturate(100%) invert(1)",
																		}}
																	/>
																	<span
																		className="font-bold"
																		style={{
																			fontFamily:
																				"Noto Serif TC, serif",
																			fontSize:
																				"clamp(16px, 4vw, 20px)",
																		}}
																	>
																		{
																			element
																		}
																	</span>
																</div>

																{/* Element Details */}
																<div className="p-3 space-y-3">
																	<div className="flex justify-between">
																		<span
																			className="font-medium text-gray-600"
																			style={{
																				fontSize:
																					"clamp(12px, 3vw, 14px)",
																			}}
																		>
																			數量:
																		</span>
																		<span
																			className="font-bold text-[#374A37]"
																			style={{
																				fontSize:
																					"clamp(12px, 3vw, 14px)",
																			}}
																		>
																			{count.toFixed(
																				1
																			)}
																		</span>
																	</div>
																	<div className="flex justify-between">
																		<span
																			className="font-medium text-gray-600"
																			style={{
																				fontSize:
																					"clamp(12px, 3vw, 14px)",
																			}}
																		>
																			強度:
																		</span>
																		<span
																			className="font-bold text-yellow-600"
																			style={{
																				fontSize:
																					"clamp(12px, 3vw, 14px)",
																			}}
																		>
																			{
																				strength
																			}
																		</span>
																	</div>
																	<div>
																		<span
																			className="font-medium text-gray-600"
																			style={{
																				fontSize:
																					"clamp(12px, 3vw, 14px)",
																			}}
																		>
																			特性:
																		</span>
																		<p
																			className="mt-1 text-[#374A37]"
																			style={{
																				fontSize:
																					"clamp(12px, 3vw, 14px)",
																				lineHeight: 1.5,
																			}}
																		>
																			{getElementTrait(
																				element,
																				star
																			)}
																		</p>
																	</div>
																	<div>
																		<span
																			className="font-medium text-gray-600"
																			style={{
																				fontSize:
																					"clamp(12px, 3vw, 14px)",
																			}}
																		>
																			對命主的影響:
																		</span>
																		<p
																			className="mt-1"
																			style={{
																				fontSize:
																					"clamp(12px, 3vw, 14px)",
																				color: "#3E5513",
																				lineHeight: 1.5,
																			}}
																		>
																			{getElementInfluence(
																				element,
																				star
																			)}
																		</p>
																	</div>
																</div>
															</div>
														);
													})}
												</div>

												{/* Desktop Table Layout */}
												<div className="hidden lg:block">
													<div className="overflow-x-auto">
														<div className="min-w-full">
															{/* Table Header */}
															<div className="grid items-center gap-2 mb-4 text-center bg-[#A3B116] rounded-lg p-2">
																<div
																	className="grid gap-2"
																	style={{
																		gridTemplateColumns:
																			"1fr 1fr 1.2fr 2fr 2.5fr",
																	}}
																>
																	<div
																		className="py-2 font-bold text-white"
																		style={{
																			fontFamily:
																				"Noto Serif TC, serif",
																			fontSize:
																				"clamp(14px, 1.5vw, 16px)",
																		}}
																	>
																		五行
																	</div>
																	<div
																		className="py-2 font-bold text-white"
																		style={{
																			fontFamily:
																				"Noto Serif TC, serif",
																			fontSize:
																				"clamp(14px, 1.5vw, 16px)",
																		}}
																	>
																		數量
																	</div>
																	<div
																		className="py-2 font-bold text-white"
																		style={{
																			fontFamily:
																				"Noto Serif TC, serif",
																			fontSize:
																				"clamp(14px, 1.5vw, 16px)",
																		}}
																	>
																		強度
																	</div>
																	<div
																		className="py-2 font-bold text-white"
																		style={{
																			fontFamily:
																				"Noto Serif TC, serif",
																			fontSize:
																				"clamp(14px, 1.5vw, 16px)",
																		}}
																	>
																		特性
																	</div>
																	<div
																		className="py-2 font-bold text-white"
																		style={{
																			fontFamily:
																				"Noto Serif TC, serif",
																			fontSize:
																				"clamp(14px, 1.5vw, 16px)",
																		}}
																	>
																		對命主的影響
																	</div>
																</div>
															</div>

															{/* Table Rows */}
															{elements.map(
																(element) => {
																	const count =
																		elementCounts[
																			element
																		] || 0;
																	const strength =
																		elementStrengthMap[
																			element
																		] || "";
																	const star =
																		getStar(
																			strength
																		);

																	return (
																		<div
																			key={
																				element
																			}
																			className="mb-2"
																		>
																			<div
																				className="grid items-center gap-2"
																				style={{
																					gridTemplateColumns:
																						"1fr 1fr 1.2fr 2fr 2.5fr",
																				}}
																			>
																				{/* Element with image and color */}
																				<div
																					className="flex items-center justify-center gap-2 py-3 font-bold text-white rounded-lg lg:gap-3"
																					style={{
																						backgroundColor:
																							wuxingColorMap[
																								element
																							],
																					}}
																				>
																					<img
																						src={`/images/elements/${element}.png`}
																						alt={
																							element
																						}
																						className="w-6 h-6 lg:w-8 lg:h-8"
																						style={{
																							filter: "brightness(0) saturate(100%) invert(1)",
																						}}
																					/>
																					<span
																						style={{
																							fontFamily:
																								"Noto Serif TC, serif",
																							fontSize:
																								"clamp(14px, 1.5vw, 18px)",
																						}}
																					>
																						{
																							element
																						}
																					</span>
																				</div>

																				{/* Count */}
																				<div
																					className="bg-[#EFEFEF] py-3 rounded-lg font-bold text-[#374A37] text-center"
																					style={{
																						fontSize:
																							"clamp(14px, 1.5vw, 18px)",
																					}}
																				>
																					{count.toFixed(
																						1
																					)}
																				</div>

																				{/* Strength */}
																				<div
																					className="py-3 font-bold text-yellow-600 bg-[#EFEFEF] rounded-lg text-center"
																					style={{
																						fontSize:
																							"clamp(14px, 1.5vw, 18px)",
																					}}
																				>
																					{
																						strength
																					}
																				</div>

																				{/* 特性 */}
																				<div
																					className="bg-[#EFEFEF] py-3 rounded-lg text-[#374A37] text-left px-3"
																					style={{
																						fontSize:
																							"clamp(12px, 1.3vw, 16px)",
																						lineHeight: 1.4,
																					}}
																				>
																					{getElementTrait(
																						element,
																						star
																					)}
																				</div>

																				{/* 對命主的影響 */}
																				<div
																					className="bg-[#EFEFEF] py-3 rounded-lg text-left px-3"
																					style={{
																						fontSize:
																							"clamp(12px, 1.3vw, 16px)",
																						color: "#3E5513",
																						lineHeight: 1.4,
																					}}
																				>
																					{getElementInfluence(
																						element,
																						star
																					)}
																				</div>
																			</div>
																		</div>
																	);
																}
															)}
														</div>
													</div>
												</div>
											</>
										);
									})()}
								</div>

								{/* Five elements flow conflicts */}
								<div className="mb-6 sm:mb-8">
									<h3
										className="font-bold text-[#A3B116] mb-4 sm:mb-6 text-center lg:text-left"
										style={{
											fontFamily: "Noto Serif TC, serif",
											fontSize: "clamp(24px, 6vw, 42px)",
										}}
									>
										五行流通阻礙點
									</h3>

									<div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 xl:grid-cols-3">
										{/* Loading state */}
										{isLoadingFlowAnalysis && (
											<div className="py-8 text-center col-span-full sm:py-12">
												<div className="inline-block animate-spin rounded-full w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-[#A3B116] mb-3 sm:mb-4"></div>
												<p
													className="text-[#5A5A5A]"
													style={{
														fontFamily:
															"Noto Sans HK, sans-serif",
														fontSize:
															"clamp(14px, 3vw, 16px)",
													}}
												>
													正在進行五行流通深度分析...
												</p>
											</div>
										)}

										{/* AI-generated flow obstacles */}
										{!isLoadingFlowAnalysis &&
											elementFlowAnalysis?.flowObstacles?.map(
												(obstacle, index) => (
													<div
														key={index}
														className="p-4 sm:p-6 bg-[#EFEFEF] border border-gray-200 shadow-lg rounded-xl"
													>
														<div
															className="inline-block px-3 py-2 mb-3 font-bold text-white rounded-full sm:mb-4"
															style={{
																fontFamily:
																	"Noto Serif TC, serif",
																backgroundColor:
																	"#B4003C",
																fontSize:
																	"clamp(12px, 3vw, 16px)",
															}}
														>
															{obstacle.title}
														</div>
														<p
															className="mb-3 leading-relaxed text-black sm:mb-4"
															style={{
																fontFamily:
																	"Noto Sans HK, sans-serif",
																fontWeight: 400,
																fontSize:
																	"clamp(14px, 3.5vw, 16px)",
																lineHeight: 1.6,
															}}
														>
															{
																obstacle.description
															}
														</p>
														<div className="mb-2">
															<span
																className="text-[#A3B116] font-medium"
																style={{
																	fontFamily:
																		"Noto Sans HK, sans-serif",
																	fontSize:
																		"clamp(13px, 3vw, 15px)",
																}}
															>
																生活影響...
															</span>
														</div>
														<p
															className="leading-relaxed text-black"
															style={{
																fontFamily:
																	"Noto Sans HK, sans-serif",
																fontWeight: 400,
																fontSize:
																	"clamp(12px, 3vw, 14px)",
																lineHeight: 1.5,
															}}
														>
															{
																obstacle.lifeImpact
															}
														</p>
													</div>
												)
											)}

										{/* Fallback when no AI data */}
										{!isLoadingFlowAnalysis &&
											!elementFlowAnalysis?.flowObstacles && (
												<div className="py-6 text-center col-span-full sm:py-8">
													<p
														className="text-[#5A5A5A] mb-4"
														style={{
															fontFamily:
																"Noto Sans HK, sans-serif",
															fontSize:
																"clamp(14px, 3vw, 16px)",
														}}
													>
														正在為您準備個人化的五行流通分析...
													</p>
												</div>
											)}
									</div>
								</div>
							</section>

							{/* 十神格局與內在關聯 Section - Comprehensive Design */}
							<section className="w-[95%] sm:w-[95%] lg:w-[85%] mx-auto bg-white rounded-[20px] sm:rounded-[26px] p-4 sm:p-8 lg:p-12 mb-6 sm:mb-10 shadow-[0_4px_5.3px_rgba(0,0,0,0.25)]">
								<div className="mb-6 sm:mb-8">
									<h2
										className="font-bold text-[#A3B116] text-center lg:text-left"
										style={{
											fontFamily: "Noto Serif TC, serif",
											fontSize: "clamp(32px, 7vw, 70px)",
											marginBottom:
												"clamp(24px, 4vw, 60px)",
										}}
									>
										十神格局與內在關聯
									</h2>
								</div>

								{(() => {
									// Use AI-generated content if available, otherwise use fallback data
									const tenGodsData =
										analysis?.tenGodsAnalysis || {
											正印: {
												name: "正印",
												meaning: "主學業、貴人、長輩緣",
												expression:
													"載入個人化分析中...",
												realManifestation: [
													"正在分析您的學習天賦...",
													"正在分析您的貴人運勢...",
												],
												warnings: {
													title: "正在分析潛在挑戰...",
													items: [
														"個人化分析載入中...",
														"請稍候...",
													],
												},
												coreConflicts: {
													title: "核心矛盾分析中...",
													conflicts: [
														{
															title: "分析中...",
															color: "red",
															description:
																"正在生成個人化分析...",
															example:
																"請稍候獲取專屬洞察...",
														},
														{
															title: "分析中...",
															color: "purple",
															description:
																"正在生成個人化分析...",
															example:
																"請稍候獲取專屬洞察...",
														},
														{
															title: "分析中...",
															color: "green",
															description:
																"正在生成個人化分析...",
															example:
																"請稍候獲取專屬洞察...",
														},
													],
												},
											},
											財星: {
												name: "財星",
												meaning: "主財富、物質、配偶",
												expression:
													"載入個人化分析中...",
												realManifestation: [
													"正在分析您的財運特質...",
													"正在分析您的物質天賦...",
												],
												warnings: {
													title: "正在分析潛在挑戰...",
													items: [
														"個人化分析載入中...",
														"請稍候...",
													],
												},
												coreConflicts: {
													title: "核心矛盾分析中...",
													conflicts: [
														{
															title: "分析中...",
															color: "red",
															description:
																"正在生成個人化分析...",
															example:
																"請稍候獲取專屬洞察...",
														},
														{
															title: "分析中...",
															color: "purple",
															description:
																"正在生成個人化分析...",
															example:
																"請稍候獲取專屬洞察...",
														},
														{
															title: "分析中...",
															color: "green",
															description:
																"正在生成個人化分析...",
															example:
																"請稍候獲取專屬洞察...",
														},
													],
												},
											},
											官殺: {
												name: "官殺",
												meaning: "主事業、權威、責任",
												expression:
													"載入個人化分析中...",
												realManifestation: [
													"正在分析您的領導天賦...",
													"正在分析您的事業運勢...",
												],
												warnings: {
													title: "正在分析潛在挑戰...",
													items: [
														"個人化分析載入中...",
														"請稍候...",
													],
												},
												coreConflicts: {
													title: "核心矛盾分析中...",
													conflicts: [
														{
															title: "分析中...",
															color: "red",
															description:
																"正在生成個人化分析...",
															example:
																"請稍候獲取專屬洞察...",
														},
														{
															title: "分析中...",
															color: "purple",
															description:
																"正在生成個人化分析...",
															example:
																"請稍候獲取專屬洞察...",
														},
														{
															title: "分析中...",
															color: "green",
															description:
																"正在生成個人化分析...",
															example:
																"請稍候獲取專屬洞察...",
														},
													],
												},
											},
											劫比: {
												name: "劫比",
												meaning: "主朋友、競爭、協作",
												expression:
													"載入個人化分析中...",
												realManifestation: [
													"正在分析您的人際天賦...",
													"正在分析您的合作能力...",
												],
												warnings: {
													title: "正在分析潛在挑戰...",
													items: [
														"個人化分析載入中...",
														"請稍候...",
													],
												},
												coreConflicts: {
													title: "核心矛盾分析中...",
													conflicts: [
														{
															title: "分析中...",
															color: "red",
															description:
																"正在生成個人化分析...",
															example:
																"請稍候獲取專屬洞察...",
														},
														{
															title: "分析中...",
															color: "purple",
															description:
																"正在生成個人化分析...",
															example:
																"請稍候獲取專屬洞察...",
														},
														{
															title: "分析中...",
															color: "green",
															description:
																"正在生成個人化分析...",
															example:
																"請稍候獲取專屬洞察...",
														},
													],
												},
											},
											食傷: {
												name: "食傷",
												meaning: "主創意、表達、子女",
												expression:
													"載入個人化分析中...",
												realManifestation: [
													"正在分析您的創意天賦...",
													"正在分析您的表達能力...",
												],
												warnings: {
													title: "正在分析潛在挑戰...",
													items: [
														"個人化分析載入中...",
														"請稍候...",
													],
												},
												coreConflicts: {
													title: "核心矛盾分析中...",
													conflicts: [
														{
															title: "分析中...",
															color: "red",
															description:
																"正在生成個人化分析...",
															example:
																"請稍候獲取專屬洞察...",
														},
														{
															title: "分析中...",
															color: "purple",
															description:
																"正在生成個人化分析...",
															example:
																"請稍候獲取專屬洞察...",
														},
														{
															title: "分析中...",
															color: "green",
															description:
																"正在生成個人化分析...",
															example:
																"請稍候獲取專屬洞察...",
														},
													],
												},
											},
										};

									const { tenGodsElements } =
										calculateTenGodsElements(userInfo);

									// Use existing activeTenGodsTab state, set default if empty
									const activeTab =
										activeTenGodsTab || "正印";

									return (
										<>
											{/* Tab Navigation */}
											<div className="flex flex-wrap justify-center gap-3 mb-8 sm:gap-6 lg:gap-9 sm:mb-12 lg:mb-15 lg:justify-start">
												{Object.keys(tenGodsData).map(
													(godName) => (
														<button
															key={godName}
															onClick={() =>
																setActiveTenGodsTab(
																	godName
																)
															}
															className="flex-shrink-0 font-extrabold transition-colors"
															style={{
																fontFamily:
																	"Noto Serif TC, serif",
																fontSize:
																	"clamp(14px, 3vw, 18px)",
																width: "clamp(120px, 25vw, 180px)",
																height: "clamp(40px, 8vw, 61px)",
																borderRadius:
																	"1000px",
																border:
																	activeTenGodsTab ===
																	godName
																		? "clamp(3px, 1vw, 7px) solid #A3B116"
																		: "none",
																backgroundColor:
																	"#FFFFFF",
																color: "#5A5A5A",
																boxShadow:
																	activeTenGodsTab ===
																	godName
																		? "none"
																		: "0 2px 6.2px rgba(0, 0, 0, 0.4)",
															}}
														>
															{godName}
														</button>
													)
												)}
											</div>

											{/* Tab Content */}
											{Object.entries(tenGodsData).map(
												([godName, data]) =>
													activeTab === godName && (
														<div key={godName}>
															{/* Header Section */}
															<div className="mb-4 sm:mb-6">
																{/* Mobile Layout */}
																<div className="block lg:hidden">
																	<div className="mb-4 text-center">
																		<div
																			className="text-[#A3B116] font-extrabold mb-3"
																			style={{
																				fontFamily:
																					"Noto Serif TC, serif",
																				fontSize:
																					"clamp(32px, 8vw, 48px)",
																			}}
																		>
																			{
																				godName
																			}
																		</div>
																		<div
																			className="flex items-center justify-center gap-2 py-2 mx-auto mb-3 font-extrabold text-white rounded-full"
																			style={{
																				fontFamily:
																					"Noto Sans HK, sans-serif",
																				fontSize:
																					"clamp(16px, 4vw, 24px)",
																				padding:
																					"clamp(8px, 2vw, 12px) clamp(16px, 4vw, 24px)",
																				backgroundColor:
																					(() => {
																						const element =
																							data.element ||
																							tenGodsElements[
																								godName
																							];
																						switch (
																							element
																						) {
																							case "金":
																								return "#DAA520";
																							case "木":
																								return "#228B22";
																							case "水":
																								return "#4169E1";
																							case "火":
																								return "#DC143C";
																							case "土":
																								return "#8B4513";
																							default:
																								return "#6B8E23";
																						}
																					})(),
																			}}
																		>
																			<img
																				src={`/images/elements/${data.element || tenGodsElements[godName]}.png`}
																				alt={
																					data.element ||
																					tenGodsElements[
																						godName
																					]
																				}
																				className="w-5 h-5 sm:w-6 sm:h-6"
																				style={{
																					filter: "brightness(0) saturate(100%) invert(1)",
																				}}
																			/>
																			{data.element ||
																				tenGodsElements[
																					godName
																				]}
																		</div>
																		<div
																			className="bg-[#EFEFEF] text-[#515151] py-2 px-4 rounded-full flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4"
																			style={{
																				fontFamily:
																					"Noto Sans HK, sans-serif",
																			}}
																		>
																			<span
																				className="font-extrabold"
																				style={{
																					fontSize:
																						"clamp(18px, 4vw, 24px)",
																				}}
																			>
																				{
																					godName
																				}
																			</span>
																			<span
																				style={{
																					fontSize:
																						"clamp(14px, 3.5vw, 18px)",
																				}}
																			>
																				-{" "}
																				{
																					data.meaning
																				}
																			</span>
																		</div>
																	</div>
																</div>

																{/* Desktop Layout */}
																<div className="items-center justify-start hidden gap-4 mb-4 lg:flex">
																	<div
																		className="text-[#A3B116] pl-0 pr-4 py-2 rounded-full font-extrabold"
																		style={{
																			fontFamily:
																				"Noto Serif TC, serif",
																			fontSize:
																				"clamp(40px, 5vw, 60px)",
																		}}
																	>
																		{
																			godName
																		}
																	</div>
																	<div
																		className="flex items-center justify-center gap-3 py-2 font-extrabold text-white rounded-full"
																		style={{
																			fontFamily:
																				"Noto Sans HK, sans-serif",
																			fontSize:
																				"clamp(20px, 2.5vw, 32px)",
																			padding:
																				"clamp(8px, 1vw, 12px) clamp(24px, 3vw, 40px)",
																			backgroundColor:
																				(() => {
																					const element =
																						data.element ||
																						tenGodsElements[
																							godName
																						];
																					switch (
																						element
																					) {
																						case "金":
																							return "#DAA520";
																						case "木":
																							return "#228B22";
																						case "水":
																							return "#4169E1";
																						case "火":
																							return "#DC143C";
																						case "土":
																							return "#8B4513";
																						default:
																							return "#6B8E23";
																					}
																				})(),
																		}}
																	>
																		<img
																			src={`/images/elements/${data.element || tenGodsElements[godName]}.png`}
																			alt={
																				data.element ||
																				tenGodsElements[
																					godName
																				]
																			}
																			className="w-6 h-6 lg:w-8 lg:h-8"
																			style={{
																				filter: "brightness(0) saturate(100%) invert(1)",
																			}}
																		/>
																		{data.element ||
																			tenGodsElements[
																				godName
																			]}
																	</div>
																	<div
																		className="bg-[#EFEFEF] text-[#515151] rounded-full flex items-center justify-center gap-4"
																		style={{
																			fontFamily:
																				"Noto Sans HK, sans-serif",
																			padding:
																				"clamp(8px, 1vw, 12px) clamp(24px, 3vw, 40px)",
																		}}
																	>
																		<span
																			className="font-extrabold"
																			style={{
																				fontSize:
																					"clamp(20px, 2.5vw, 32px)",
																			}}
																		>
																			{
																				godName
																			}
																		</span>
																		<span
																			style={{
																				fontSize:
																					"clamp(16px, 2vw, 24px)",
																			}}
																		>
																			-{" "}
																			{
																				data.meaning
																			}
																		</span>
																	</div>
																</div>

																<h3
																	className="font-bold text-[#374A37] mb-3 sm:mb-4 text-center lg:text-left"
																	style={{
																		fontFamily:
																			"Noto Serif TC, serif",
																		fontSize:
																			"clamp(16px, 4vw, 24px)",
																	}}
																>
																	{
																		data.expression
																	}
																</h3>
															</div>

															{/* 實際表現 Section */}
															<div className="mb-4 sm:mb-6">
																<h4
																	className="font-extrabold text-[#A3B116] mb-3 text-center lg:text-left"
																	style={{
																		fontFamily:
																			"Noto Serif TC, serif",
																		fontSize:
																			"clamp(24px, 6vw, 42px)",
																	}}
																>
																	實際表現
																</h4>
																{data.realManifestation.map(
																	(
																		item,
																		index
																	) => (
																		<p
																			key={
																				index
																			}
																			className="mb-2 leading-relaxed text-black"
																			style={{
																				fontFamily:
																					"Noto Sans HK, sans-serif",
																				fontWeight: 400,
																				fontSize:
																					"clamp(14px, 3.5vw, 20px)",
																				lineHeight: 1.6,
																			}}
																		>
																			{
																				item
																			}
																		</p>
																	)
																)}
															</div>

															{/* Warning Section */}
															<div className="mb-6 sm:mb-8">
																<p
																	className="mb-3 leading-relaxed text-black"
																	style={{
																		fontFamily:
																			"Noto Sans HK, sans-serif",
																		fontSize:
																			"clamp(16px, 4vw, 24px)",
																		lineHeight: 1.6,
																	}}
																>
																	{
																		data
																			.warnings
																			.title
																	}
																</p>
																{data.warnings.items.map(
																	(
																		item,
																		index
																	) => (
																		<p
																			key={
																				index
																			}
																			className="ml-3 leading-relaxed text-black sm:ml-4"
																			style={{
																				fontFamily:
																					"Noto Sans HK, sans-serif",
																				fontWeight: 400,
																				fontSize:
																					"clamp(14px, 3.5vw, 20px)",
																				lineHeight: 1.6,
																			}}
																		>
																			▶{" "}
																			{
																				item
																			}
																		</p>
																	)
																)}
															</div>

															{/* Core Conflicts Section */}
															<div className="p-4 bg-white sm:p-6 lg:p-8">
																<h3
																	className="mb-4 sm:mb-6 font-extrabold text-[#B4003C] text-center lg:text-left"
																	style={{
																		fontFamily:
																			"Noto Serif TC, serif",
																		fontSize:
																			"clamp(24px, 6vw, 42px)",
																	}}
																>
																	{
																		data
																			.coreConflicts
																			.title
																	}
																</h3>

																<div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-2 xl:grid-cols-3">
																	{data.coreConflicts.conflicts.map(
																		(
																			conflict,
																			index
																		) => (
																			<div
																				key={
																					index
																				}
																				className="bg-[#EFEFEF] p-4 sm:p-6 shadow-md rounded-2xl"
																			>
																				<div
																					className="inline-block px-4 py-2 mb-3 font-bold text-white rounded-full sm:px-6 sm:py-3 sm:mb-4"
																					style={{
																						fontFamily:
																							"Noto Serif TC, serif",
																						backgroundColor:
																							"#B4003C",
																						fontSize:
																							"clamp(12px, 3vw, 16px)",
																					}}
																				>
																					{
																						conflict.title
																					}
																				</div>

																				{/* Main description */}
																				<div className="mb-3">
																					<p
																						className="leading-relaxed text-black"
																						style={{
																							fontFamily:
																								"Noto Sans HK, sans-serif",
																							fontSize:
																								"clamp(14px, 3.5vw, 16px)",
																							lineHeight: 1.6,
																						}}
																					>
																						{
																							conflict.description
																						}
																					</p>
																				</div>

																				{/* Psychological Roots */}
																				{conflict.psychologicalRoots && (
																					<div className="p-2 mb-3 sm:p-3">
																						<h5
																							className="mb-2 font-medium text-[#A3B116]"
																							style={{
																								fontFamily:
																									"Noto Sans HK, sans-serif",
																								fontSize:
																									"clamp(13px, 3vw, 15px)",
																							}}
																						>
																							💭
																							心理根源
																						</h5>
																						<p
																							className="leading-relaxed text-black"
																							style={{
																								fontFamily:
																									"Noto Sans HK, sans-serif",
																								fontSize:
																									"clamp(12px, 3vw, 14px)",
																								lineHeight: 1.5,
																							}}
																						>
																							{
																								conflict.psychologicalRoots
																							}
																						</p>
																					</div>
																				)}

																				{/* Developmental Stages */}
																				{conflict.developmentalStages && (
																					<div className="p-2 mb-3 sm:p-3">
																						<h5
																							className="mb-2 font-medium text-[#A3B116]"
																							style={{
																								fontFamily:
																									"Noto Sans HK, sans-serif",
																								fontSize:
																									"clamp(13px, 3vw, 15px)",
																							}}
																						>
																							📈
																							發展演變
																						</h5>
																						<p
																							className="leading-relaxed text-black"
																							style={{
																								fontFamily:
																									"Noto Sans HK, sans-serif",
																								fontSize:
																									"clamp(12px, 3vw, 14px)",
																								lineHeight: 1.5,
																							}}
																						>
																							{
																								conflict.developmentalStages
																							}
																						</p>
																					</div>
																				)}

																				{/* Example */}
																				<div className="pt-0 mt-0">
																					<p
																						className="text-[#A3B116] font-medium mb-2"
																						style={{
																							fontFamily:
																								"Noto Sans HK, sans-serif",
																							fontSize:
																								"clamp(13px, 3vw, 15px)",
																						}}
																					>
																						💡
																						具體例子
																					</p>
																					<p
																						className="leading-relaxed text-black"
																						style={{
																							fontFamily:
																								"Noto Sans HK, sans-serif",
																							fontWeight: 400,
																							fontSize:
																								"clamp(12px, 3vw, 14px)",
																							lineHeight: 1.5,
																						}}
																					>
																						{
																							conflict.example
																						}
																					</p>
																				</div>
																			</div>
																		)
																	)}
																</div>
															</div>
														</div>
													)
											)}
										</>
									);
								})()}
							</section>

							{/* 化解提示 Section - First Image */}
							<section className="w-full sm:w-[95%] lg:w-[85%] mx-auto p-4 sm:p-8 lg:p-12 mb-6 sm:mb-10">
								<div className="mb-6 sm:mb-8">
									<h2
										className="font-extrabold text-[#A3B116] mb-6 sm:mb-10 text-center lg:text-left"
										style={{
											fontFamily: "Noto Serif TC, serif",
											fontSize: "clamp(32px, 8vw, 70px)",
										}}
									>
										化解提示
									</h2>

									{/* Show loading state if no AI content */}
									{!analysis?.lifeAdvice?.tips ? (
										<div className="py-8 text-center sm:py-12">
											<div className="animate-spin rounded-full w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-[#A3B116] mx-auto mb-3 sm:mb-4"></div>
											<p
												className="text-[#5A5A5A] mb-3 sm:mb-4"
												style={{
													fontSize:
														"clamp(14px, 3.5vw, 18px)",
												}}
											>
												正在生成個人化建議...
											</p>
											<p
												className="text-gray-500"
												style={{
													fontSize:
														"clamp(12px, 3vw, 14px)",
												}}
											>
												AI正在根據您的八字命理分析，為您量身定制專屬的化解提示
											</p>
										</div>
									) : (
										<>
											<p
												className="mb-6 leading-relaxed text-center text-black sm:mb-8 lg:text-left"
												style={{
													fontFamily:
														"Noto Sans HK, sans-serif",
													fontWeight: 400,
													fontSize:
														"clamp(16px, 4vw, 24px)",
													lineHeight: 1.6,
												}}
											>
												透過這些策略，你可以在生活和工作中更好地平衡才華與壓力，發揮自己的潛力，迎接機會的來臨。
											</p>
										</>
									)}
								</div>

								{/* Only show content grid if AI data is available */}
								{analysis?.lifeAdvice?.tips && (
									<div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-2 xl:grid-cols-3">
										{analysis.lifeAdvice.tips.map(
											(tip, index) => (
												<div
													key={index}
													className="p-4 bg-white border border-gray-100 shadow-lg sm:p-6 lg:p-8 rounded-2xl"
												>
													<h3
														className="font-bold text-[#A3B116] mb-3 sm:mb-4"
														style={{
															fontFamily:
																"Noto Serif TC, serif",
															fontSize:
																"clamp(18px, 4.5vw, 36px)",
														}}
													>
														{tip.title}
													</h3>
													<p
														className="leading-relaxed text-black"
														style={{
															fontFamily:
																"Noto Sans HK, sans-serif",
															fontWeight: 400,
															fontSize:
																"clamp(14px, 3.5vw, 20px)",
														}}
													>
														{tip.content}
													</p>
													{tip.example && (
														<div className="mt-3 sm:mt-4">
															<p
																className="text-[#A3B116] font-medium"
																style={{
																	fontFamily:
																		"Noto Sans HK, sans-serif",
																	fontSize:
																		"clamp(14px, 3.5vw, 20px)",
																}}
															>
																例如：
															</p>
															<p
																className="text-[#5A5A5A] leading-relaxed mt-1"
																style={{
																	fontFamily:
																		"Noto Sans HK, sans-serif",
																	fontSize:
																		"clamp(13px, 3.2vw, 20px)",
																}}
															>
																{tip.example}
															</p>
														</div>
													)}
												</div>
											)
										)}
									</div>
								)}
							</section>
							{/* 綜合調理与人生建議 - Comprehensive Section */}
							<section className="w-[95%] sm:w-[95%] lg:w-[85%] mx-auto bg-white rounded-[20px] sm:rounded-[26px] p-4 sm:p-12 lg:p-20 mb-6 sm:mb-10 shadow-[0_4px_5.3px_rgba(0,0,0,0.25)]">
								<h3
									className="font-bold text-[#A3B116] flex items-center justify-center lg:justify-start text-center lg:text-left"
									style={{
										fontFamily: "Noto Serif TC, serif",
										fontSize: "clamp(32px, 7vw, 70px)",
										marginBottom: "clamp(32px, 5vw, 88px)",
									}}
								>
									<span>綜合調理与人生建議</span>
								</h3>

								{isLoadingComprehensiveLifeAdvice ? (
									<div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl">
										<div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
											<div className="animate-spin rounded-full h-8 w-8 sm:h-10 sm:w-10 border-b-2 border-[#8B4513]"></div>
											<span className="text-lg sm:text-xl text-[#8B4513] text-center">
												AI正在生成綜合人生建議...
											</span>
										</div>
									</div>
								) : comprehensiveLifeAdvice ? (
									<div className="space-y-6 sm:space-y-8">
										{/* Main Tab Navigation */}
										<div className="flex flex-row justify-center gap-2 px-0 sm:gap-4 lg:justify-between sm:gap-6 lg:gap-8 sm:px-4 lg:px-25">
											{[
												{
													key: "五行調和",
													icon: "⭐",
													image: "/images/report/star.png",
												},
												{
													key: "身心養護",
													icon: "❤️",
													image: "/images/report/heart.png",
												},
												{
													key: "事業方向",
													icon: "💼",
													image: "/images/report/bag.png",
												},
											].map((tab) => (
												<div
													key={tab.key}
													className="flex flex-col items-center flex-1 min-w-0 gap-1 sm:gap-2 lg:gap-3"
												>
													<button
														onClick={() =>
															setActiveComprehensiveTab(
																tab.key
															)
														}
														className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full transition-all duration-300 flex items-center justify-center ${
															activeComprehensiveTab ===
															tab.key
																? "bg-[#EFEFEF] shadow-lg border-2 border-black"
																: "bg-[#EFEFEF] shadow-lg "
														}`}
													>
														{tab.image && (
															<div className="flex items-center justify-center w-full h-full overflow-hidden rounded-full">
																<img
																	src={
																		tab.image
																	}
																	alt={
																		tab.key
																	}
																	className="object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
																	onError={(
																		e
																	) => {
																		e.target.style.display =
																			"none";
																		e.target.nextSibling.style.display =
																			"flex";
																	}}
																/>
																<div
																	className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
																	style={{
																		display:
																			"none",
																		fontSize:
																			"clamp(16px, 3vw, 28px)",
																	}}
																>
																	{tab.icon}
																</div>
															</div>
														)}
													</button>
													<span
														className={`font-semibold text-center leading-tight ${
															activeComprehensiveTab ===
															tab.key
																? "text-[#A3B116]"
																: "text-gray-600"
														}`}
														style={{
															fontSize:
																"clamp(11px, 2.5vw, 18px)",
														}}
													>
														{tab.key}
													</span>
												</div>
											))}
										</div>

										{/* Selected Tab Title */}
										<div className="mb-6 text-center sm:mb-8">
											<h4
												className="font-extrabold"
												style={{
													fontFamily:
														"Noto Serif TC, serif",
													fontWeight: 800,
													fontSize:
														"clamp(28px, 6vw, 38px)",
												}}
											>
												{activeComprehensiveTab}
											</h4>
										</div>

										{/* Tab Content */}
										{activeComprehensiveTab ===
											"五行調和" && (
											<div className="px-2 sm:px-4 md:px-8 lg:px-30">
												{/* Sub-tab Navigation */}
												<div className="flex justify-center gap-2 p-3 mb-3 sm:justify-between sm:gap-3 sm:p-6">
													{[
														"補益",
														"强化",
														"避免",
													].map((subTab) => (
														<button
															key={subTab}
															onClick={() =>
																setActiveWuxingTab(
																	subTab
																)
															}
															className={`flex-1 max-w-[120px] py-2 rounded-full font-bold transition-all duration-300 sm:flex-none sm:max-w-none sm:py-3 ${
																activeWuxingTab ===
																subTab
																	? "bg-[#89960A] text-white shadow-lg border-2 border-black"
																	: "bg-[#89960A] text-white "
															}`}
															style={{
																fontSize:
																	"clamp(12px, 3vw, 18px)",
																paddingLeft:
																	"clamp(8px, 4vw, 22px)",
																paddingRight:
																	"clamp(8px, 4vw, 22px)",
															}}
														>
															{subTab}
														</button>
													))}
												</div>

												{/* Sub-tab Content */}
												<div className="p-6">
													{activeWuxingTab ===
														"補益" && (
														<div className="space-y-4">
															<h4
																className="mb-3 sm:mb-4 font-bold text-[#89960A]"
																style={{
																	fontSize:
																		"clamp(20px, 5vw, 36px)",
																}}
															>
																補益建議
															</h4>
															<div
																className="leading-relaxed text-black"
																style={{
																	fontSize:
																		"clamp(14px, 3.5vw, 20px)",
																}}
															>
																{comprehensiveLifeAdvice
																	.wuxingHarmony
																	?.summary
																	?.supplement ? (
																	Array.isArray(
																		comprehensiveLifeAdvice
																			.wuxingHarmony
																			.summary
																			.supplement
																	) ? (
																		<ul className="space-y-2">
																			{comprehensiveLifeAdvice.wuxingHarmony.summary.supplement.map(
																				(
																					item,
																					index
																				) => (
																					<li
																						key={
																							index
																						}
																						className="flex items-start gap-3"
																					>
																						<span className="font-bold text-green-600">
																							•
																						</span>
																						<span>
																							{
																								item
																							}
																						</span>
																					</li>
																				)
																			)}
																		</ul>
																	) : (
																		<p>
																			{
																				comprehensiveLifeAdvice
																					.wuxingHarmony
																					.summary
																					.supplement
																			}
																		</p>
																	)
																) : (
																	<p className="italic text-gray-500">
																		暫無補益建議
																	</p>
																)}
															</div>
														</div>
													)}

													{activeWuxingTab ===
														"强化" && (
														<div className="space-y-4">
															<h4
																className="mb-3 font-bold text-green-700 sm:mb-4"
																style={{
																	fontSize:
																		"clamp(20px, 5vw, 36px)",
																}}
															>
																强化方法
															</h4>
															<div
																className="leading-relaxed text-black"
																style={{
																	fontSize:
																		"clamp(14px, 3.5vw, 20px)",
																}}
															>
																{comprehensiveLifeAdvice
																	.wuxingHarmony
																	?.summary
																	?.strengthen ? (
																	Array.isArray(
																		comprehensiveLifeAdvice
																			.wuxingHarmony
																			.summary
																			.strengthen
																	) ? (
																		<ul className="space-y-3">
																			{comprehensiveLifeAdvice.wuxingHarmony.summary.strengthen.map(
																				(
																					item,
																					index
																				) => (
																					<li
																						key={
																							index
																						}
																						className="flex items-start gap-3"
																					>
																						<span className="font-bold text-green-600">
																							•
																						</span>
																						<span>
																							{
																								item
																							}
																						</span>
																					</li>
																				)
																			)}
																		</ul>
																	) : (
																		<p>
																			{
																				comprehensiveLifeAdvice
																					.wuxingHarmony
																					.summary
																					.strengthen
																			}
																		</p>
																	)
																) : (
																	<p className="italic text-gray-500">
																		暫無强化建議
																	</p>
																)}
															</div>
														</div>
													)}

													{activeWuxingTab ===
														"避免" && (
														<div className="space-y-4">
															<h4
																className="mb-3 font-bold text-green-700 sm:mb-4"
																style={{
																	fontSize:
																		"clamp(20px, 5vw, 36px)",
																}}
															>
																避免事項
															</h4>
															<div
																className="leading-relaxed text-black"
																style={{
																	fontSize:
																		"clamp(14px, 3.5vw, 20px)",
																}}
															>
																{comprehensiveLifeAdvice
																	.wuxingHarmony
																	?.summary
																	?.avoid ? (
																	Array.isArray(
																		comprehensiveLifeAdvice
																			.wuxingHarmony
																			.summary
																			.avoid
																	) ? (
																		<ul className="space-y-3">
																			{comprehensiveLifeAdvice.wuxingHarmony.summary.avoid.map(
																				(
																					item,
																					index
																				) => (
																					<li
																						key={
																							index
																						}
																						className="flex items-start gap-3"
																					>
																						<span className="font-bold text-red-600">
																							•
																						</span>
																						<span>
																							{
																								item
																							}
																						</span>
																					</li>
																				)
																			)}
																		</ul>
																	) : (
																		<p>
																			{
																				comprehensiveLifeAdvice
																					.wuxingHarmony
																					.summary
																					.avoid
																			}
																		</p>
																	)
																) : (
																	<p className="italic text-gray-500">
																		暫無避免事項
																	</p>
																)}
															</div>
														</div>
													)}
												</div>

												{/* Detailed explanation */}
												{comprehensiveLifeAdvice
													.wuxingHarmony
													?.detailed && (
													<div className="p-4 mt-6 bg-[#EFEFEF]  rounded-xl">
														<h5
															className="mb-2 font-semibold text-black"
															style={{
																fontSize:
																	"clamp(16px, 4vw, 24px)",
															}}
														>
															詳細說明
														</h5>
														<p
															className="leading-relaxed text-black"
															style={{
																fontSize:
																	"clamp(14px, 3.5vw, 20px)",
															}}
														>
															{
																comprehensiveLifeAdvice
																	.wuxingHarmony
																	.detailed
															}
														</p>
													</div>
												)}
											</div>
										)}

										{activeComprehensiveTab ===
											"身心養護" && (
											<div className="px-2 sm:px-4 md:px-8 lg:px-30">
												{/* Sub-tab Navigation */}
												<div className="flex justify-center gap-2 p-3 mb-3 sm:justify-between sm:gap-3 sm:p-6">
													{[
														"運動建議",
														"情緒調節",
													].map((subTab) => (
														<button
															key={subTab}
															onClick={() =>
																setActiveHealthTab(
																	subTab
																)
															}
															className={`flex-1 max-w-[140px] py-2 rounded-full font-bold transition-all duration-300 sm:flex-none sm:max-w-none sm:py-3 ${
																activeHealthTab ===
																subTab
																	? "bg-[#B4003C] text-white shadow-lg border-2 border-black"
																	: "bg-[#B4003C] text-white "
															}`}
															style={{
																fontSize:
																	"clamp(12px, 3vw, 18px)",
																paddingLeft:
																	"clamp(8px, 4vw, 22px)",
																paddingRight:
																	"clamp(8px, 4vw, 22px)",
															}}
														>
															{subTab}
														</button>
													))}
												</div>

												{/* Sub-tab Content */}
												<div className="p-6">
													{activeHealthTab ===
														"運動建議" && (
														<div className="space-y-4">
															<h4
																className="mb-3 sm:mb-4 font-bold text-[#B4003C]"
																style={{
																	fontSize:
																		"clamp(20px, 5vw, 36px)",
																}}
															>
																運動建議
															</h4>
															<div
																className="leading-relaxed text-black"
																style={{
																	fontSize:
																		"clamp(14px, 3.5vw, 20px)",
																}}
															>
																{comprehensiveLifeAdvice
																	.healthWellness
																	?.exercise ? (
																	Array.isArray(
																		comprehensiveLifeAdvice
																			.healthWellness
																			.exercise
																	) ? (
																		<ul className="space-y-3">
																			{comprehensiveLifeAdvice.healthWellness.exercise.map(
																				(
																					item,
																					index
																				) => (
																					<li
																						key={
																							index
																						}
																						className="flex items-start gap-3"
																					>
																						<span className="font-bold text-[#B4003C]">
																							•
																						</span>
																						<span>
																							{
																								item
																							}
																						</span>
																					</li>
																				)
																			)}
																		</ul>
																	) : (
																		<p>
																			{
																				comprehensiveLifeAdvice
																					.healthWellness
																					.exercise
																			}
																		</p>
																	)
																) : (
																	<p className="italic text-gray-500">
																		暫無運動建議
																	</p>
																)}
															</div>
														</div>
													)}

													{activeHealthTab ===
														"情緒調節" && (
														<div className="space-y-4">
															<h4
																className="mb-3 sm:mb-4 font-bold text-[#B4003C]"
																style={{
																	fontSize:
																		"clamp(20px, 5vw, 36px)",
																}}
															>
																情緒調節
															</h4>
															<div
																className="leading-relaxed text-black"
																style={{
																	fontSize:
																		"clamp(14px, 3.5vw, 20px)",
																}}
															>
																{comprehensiveLifeAdvice
																	.healthWellness
																	?.emotion ? (
																	<p>
																		{
																			comprehensiveLifeAdvice
																				.healthWellness
																				.emotion
																		}
																	</p>
																) : (
																	<p className="italic text-gray-500">
																		暫無情緒調節建議
																	</p>
																)}
															</div>
														</div>
													)}
												</div>

												{/* Detailed explanation */}
												{comprehensiveLifeAdvice
													.healthWellness
													?.detailed && (
													<div className="p-4 mt-6 bg-[#EFEFEF] rounded-xl">
														<h5
															className="mb-2 font-semibold text-black"
															style={{
																fontSize:
																	"clamp(16px, 4vw, 24px)",
															}}
														>
															詳細說明
														</h5>
														<p
															className="leading-relaxed text-black"
															style={{
																fontSize:
																	"clamp(14px, 3.5vw, 20px)",
															}}
														>
															{
																comprehensiveLifeAdvice
																	.healthWellness
																	.detailed
															}
														</p>
													</div>
												)}
											</div>
										)}

										{activeComprehensiveTab ===
											"事業方向" && (
											<div className="px-2 sm:px-4 md:px-8 lg:px-30">
												{/* Sub-tab Navigation */}
												<div className="flex justify-center gap-2 p-3 mb-3 sm:justify-between sm:gap-3 sm:p-6">
													{[
														"近期",
														"中期",
														"遠期",
													].map((subTab) => (
														<button
															key={subTab}
															onClick={() =>
																setActiveCareerTab(
																	subTab
																)
															}
															className={`flex-1 max-w-[100px] py-2 rounded-full font-bold transition-all duration-300 sm:flex-none sm:max-w-none sm:py-3 ${
																activeCareerTab ===
																subTab
																	? "bg-[#007BFF] text-white shadow-lg border-2 border-black"
																	: "bg-[#007BFF] text-white "
															}`}
															style={{
																fontSize:
																	"clamp(12px, 3vw, 18px)",
																paddingLeft:
																	"clamp(8px, 4vw, 22px)",
																paddingRight:
																	"clamp(8px, 4vw, 22px)",
															}}
														>
															{subTab}
														</button>
													))}
												</div>

												{/* Sub-tab Content */}
												<div className="p-6">
													{activeCareerTab ===
														"近期" &&
														comprehensiveLifeAdvice
															.careerDirection
															?.nearTerm && (
															<div className="space-y-4">
																<h4
																	className="mb-3 sm:mb-4 font-bold text-[#007BFF]"
																	style={{
																		fontSize:
																			"clamp(20px, 5vw, 36px)",
																	}}
																>
																	近期事業方向
																</h4>
																<div
																	className="leading-relaxed text-black"
																	style={{
																		fontSize:
																			"clamp(14px, 3.5vw, 20px)",
																	}}
																>
																	{typeof comprehensiveLifeAdvice
																		.careerDirection
																		.nearTerm ===
																	"string" ? (
																		<p className="leading-relaxed">
																			{
																				comprehensiveLifeAdvice
																					.careerDirection
																					.nearTerm
																			}
																		</p>
																	) : (
																		<div className="space-y-3">
																			{comprehensiveLifeAdvice
																				.careerDirection
																				.nearTerm
																				.ageRange && (
																				<p>
																					<strong className="text-[#007BFF]">
																						年齡範圍：
																					</strong>
																					{
																						comprehensiveLifeAdvice
																							.careerDirection
																							.nearTerm
																							.ageRange
																					}
																				</p>
																			)}
																			{comprehensiveLifeAdvice
																				.careerDirection
																				.nearTerm
																				.pattern && (
																				<p>
																					<strong className="text-[#007BFF]">
																						格局：
																					</strong>
																					{
																						comprehensiveLifeAdvice
																							.careerDirection
																							.nearTerm
																							.pattern
																					}
																				</p>
																			)}
																			{comprehensiveLifeAdvice
																				.careerDirection
																				.nearTerm
																				.industries && (
																				<p>
																					<strong className="text-[#007BFF]">
																						推薦行業：
																					</strong>
																					{Array.isArray(
																						comprehensiveLifeAdvice
																							.careerDirection
																							.nearTerm
																							.industries
																					)
																						? comprehensiveLifeAdvice.careerDirection.nearTerm.industries.join(
																								"、"
																							)
																						: comprehensiveLifeAdvice
																								.careerDirection
																								.nearTerm
																								.industries}
																				</p>
																			)}
																			{comprehensiveLifeAdvice
																				.careerDirection
																				.nearTerm
																				.risk && (
																				<p>
																					<strong className="text-[#B4003C]">
																						風險預警：
																					</strong>
																					{
																						comprehensiveLifeAdvice
																							.careerDirection
																							.nearTerm
																							.risk
																					}
																				</p>
																			)}
																		</div>
																	)}
																</div>
															</div>
														)}

													{activeCareerTab ===
														"中期" &&
														comprehensiveLifeAdvice
															.careerDirection
															?.midTerm && (
															<div className="space-y-4">
																<h4
																	className="mb-3 sm:mb-4 font-bold text-[#007BFF]"
																	style={{
																		fontSize:
																			"clamp(20px, 5vw, 36px)",
																	}}
																>
																	中期事業方向
																</h4>
																<div
																	className="leading-relaxed text-black"
																	style={{
																		fontSize:
																			"clamp(14px, 3.5vw, 20px)",
																	}}
																>
																	{typeof comprehensiveLifeAdvice
																		.careerDirection
																		.midTerm ===
																	"string" ? (
																		<p className="leading-relaxed">
																			{
																				comprehensiveLifeAdvice
																					.careerDirection
																					.midTerm
																			}
																		</p>
																	) : (
																		<div className="space-y-3">
																			{comprehensiveLifeAdvice
																				.careerDirection
																				.midTerm
																				.ageRange && (
																				<p>
																					<strong className="text-[#007BFF]">
																						年齡範圍：
																					</strong>
																					{
																						comprehensiveLifeAdvice
																							.careerDirection
																							.midTerm
																							.ageRange
																					}
																				</p>
																			)}
																			{comprehensiveLifeAdvice
																				.careerDirection
																				.midTerm
																				.transformation && (
																				<p>
																					<strong className="text-[#007BFF]">
																						轉化：
																					</strong>
																					{
																						comprehensiveLifeAdvice
																							.careerDirection
																							.midTerm
																							.transformation
																					}
																				</p>
																			)}
																			{comprehensiveLifeAdvice
																				.careerDirection
																				.midTerm
																				.strategy && (
																				<p>
																					<strong className="text-[#007BFF]">
																						策略：
																					</strong>
																					{
																						comprehensiveLifeAdvice
																							.careerDirection
																							.midTerm
																							.strategy
																					}
																				</p>
																			)}
																			{comprehensiveLifeAdvice
																				.careerDirection
																				.midTerm
																				.decision && (
																				<p>
																					<strong className="text-[#007BFF]">
																						決策：
																					</strong>
																					{
																						comprehensiveLifeAdvice
																							.careerDirection
																							.midTerm
																							.decision
																					}
																				</p>
																			)}
																		</div>
																	)}
																</div>
															</div>
														)}

													{activeCareerTab ===
														"遠期" &&
														comprehensiveLifeAdvice
															.careerDirection
															?.longTerm && (
															<div className="space-y-4">
																<h4
																	className="mb-3 sm:mb-4 font-bold text-[#007BFF]"
																	style={{
																		fontSize:
																			"clamp(20px, 5vw, 36px)",
																	}}
																>
																	遠期事業方向
																</h4>
																<div
																	className="leading-relaxed text-black"
																	style={{
																		fontSize:
																			"clamp(14px, 3.5vw, 20px)",
																	}}
																>
																	{typeof comprehensiveLifeAdvice
																		.careerDirection
																		.longTerm ===
																	"string" ? (
																		<p className="leading-relaxed">
																			{
																				comprehensiveLifeAdvice
																					.careerDirection
																					.longTerm
																			}
																		</p>
																	) : (
																		<div className="space-y-3">
																			{comprehensiveLifeAdvice
																				.careerDirection
																				.longTerm
																				.ageRange && (
																				<p>
																					<strong className="text-[#007BFF]">
																						年齡範圍：
																					</strong>
																					{
																						comprehensiveLifeAdvice
																							.careerDirection
																							.longTerm
																							.ageRange
																					}
																				</p>
																			)}
																			{comprehensiveLifeAdvice
																				.careerDirection
																				.longTerm
																				.fortune && (
																				<p>
																					<strong className="text-[#007BFF]">
																						運勢：
																					</strong>
																					{
																						comprehensiveLifeAdvice
																							.careerDirection
																							.longTerm
																							.fortune
																					}
																				</p>
																			)}
																			{comprehensiveLifeAdvice
																				.careerDirection
																				.longTerm
																				.knowledge && (
																				<p>
																					<strong className="text-[#007BFF]">
																						知識：
																					</strong>
																					{
																						comprehensiveLifeAdvice
																							.careerDirection
																							.longTerm
																							.knowledge
																					}
																				</p>
																			)}
																			{comprehensiveLifeAdvice
																				.careerDirection
																				.longTerm
																				.wellness && (
																				<p>
																					<strong className="text-[#007BFF]">
																						養生：
																					</strong>
																					{
																						comprehensiveLifeAdvice
																							.careerDirection
																							.longTerm
																							.wellness
																					}
																				</p>
																			)}
																		</div>
																	)}
																</div>
															</div>
														)}
												</div>

												{/* Detailed explanation */}
												{comprehensiveLifeAdvice
													.careerDirection
													?.detailed && (
													<div className="p-4 mt-6 bg-[#EFEFEF] rounded-xl">
														<h5
															className="mb-2 font-semibold text-black"
															style={{
																fontSize:
																	"clamp(16px, 4vw, 24px)",
															}}
														>
															詳細說明
														</h5>
														<p
															className="leading-relaxed text-black"
															style={{
																fontSize:
																	"clamp(14px, 3.5vw, 20px)",
															}}
														>
															{
																comprehensiveLifeAdvice
																	.careerDirection
																	.detailed
															}
														</p>
													</div>
												)}
											</div>
										)}
									</div>
								) : (
									<div className="py-8">
										<div className="space-y-6">
											<div>
												<Skeleton className="w-40 h-5 mb-3" />
												<div className="space-y-2">
													<Skeleton className="w-full h-4" />
													<Skeleton className="w-4/5 h-4" />
													<Skeleton className="w-5/6 h-4" />
												</div>
											</div>
											<div>
												<Skeleton className="h-5 mb-3 w-36" />
												<div className="space-y-2">
													<Skeleton className="w-full h-4" />
													<Skeleton className="w-3/4 h-4" />
												</div>
											</div>
											<div>
												<Skeleton className="h-5 mb-3 w-44" />
												<div className="space-y-2">
													<Skeleton className="w-full h-4" />
													<Skeleton className="w-2/3 h-4" />
													<Skeleton className="w-4/5 h-4" />
												</div>
											</div>
										</div>
									</div>
								)}
							</section>

							{/* HIDDEN: 人際調衡要點 - Comprehensive Section */}
							{false && (
								<section className="w-full sm:w-[95%] lg:w-[85%] mx-auto bg-white rounded-[20px] sm:rounded-[26px] p-4 sm:p-12 lg:p-20 mb-6 sm:mb-10 shadow-[0_4px_5.3px_rgba(0,0,0,0.25)]">
									<h3
										className="font-bold text-[#A3B116] flex items-center justify-center lg:justify-start text-center lg:text-left"
										style={{
											fontFamily: "Noto Serif TC, serif",
											fontSize: "clamp(32px, 7vw, 70px)",
											marginBottom:
												"clamp(24px, 4vw, 52px)",
										}}
									>
										<span>人際調衡要點</span>
									</h3>

									{isLoadingComprehensiveInterpersonal ? (
										<div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl">
											<div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
												<div className="animate-spin rounded-full h-8 w-8 sm:h-10 sm:w-10 border-b-2 border-[#8B4513]"></div>
												<span className="text-lg sm:text-xl text-[#8B4513] text-center">
													AI正在生成綜合人際關係建議...
												</span>
											</div>
										</div>
									) : comprehensiveInterpersonalAdvice ? (
										<div className="space-y-8">
											{/* Main Tab Navigation */}
											<div className="flex justify-center gap-2 px-2 mb-6 sm:justify-between sm:gap-4 lg:gap-8 sm:px-4 lg:px-25">
												{[
													{
														key: "個人關係",
														color: "#8E44AD", // Purple
													},
													{
														key: "職場協作",
														color: "#3498DB", // Blue
													},
													{
														key: "社交網絡",
														color: "#27AE60", // Green
													},
												].map((tab) => (
													<div
														key={tab.key}
														className="flex flex-col items-center flex-1 min-w-0 gap-1 sm:gap-2 lg:gap-3"
													>
														<button
															onClick={() =>
																setActiveInterpersonalTab(
																	tab.key
																)
															}
															className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full transition-all duration-300 flex items-center justify-center font-bold text-white ${
																activeInterpersonalTab ===
																tab.key
																	? "shadow-lg border-2 border-black"
																	: "shadow-lg "
															}`}
															style={{
																backgroundColor:
																	"#EFEFEF",
																fontSize:
																	"clamp(16px, 4vw, 32px)",
															}}
														>
															{tab.key ===
																"個人關係" &&
																"👥"}
															{tab.key ===
																"職場協作" &&
																"🤝"}
															{tab.key ===
																"社交網絡" &&
																"🌐"}
														</button>
														<span
															className={`font-semibold text-center leading-tight ${
																activeInterpersonalTab ===
																tab.key
																	? "text-[#A3B116]"
																	: "text-gray-600"
															}`}
															style={{
																fontSize:
																	"clamp(11px, 2.5vw, 18px)",
															}}
														>
															{tab.key}
														</span>
													</div>
												))}
											</div>

											{/* Selected Tab Title */}
											<div className="mb-8 text-center">
												<h4
													className="text-[38px] font-extrabold"
													style={{
														fontFamily:
															"Noto Serif TC, serif",
														fontWeight: 800,
													}}
												>
													{activeInterpersonalTab}
												</h4>
											</div>

											{/* Tab Content */}
											{activeInterpersonalTab ===
												"個人關係" && (
												<div className="px-2 sm:px-4 md:px-8 lg:px-30">
													{/* Sub-tab Navigation */}
													<div className="flex justify-center gap-2 p-3 mb-3 sm:justify-between sm:gap-3 sm:p-6">
														{[
															"婚戀配對",
															"家庭關係",
															"交友圈層",
														].map((subTab) => (
															<button
																key={subTab}
																onClick={() =>
																	setActivePersonalTab(
																		subTab
																	)
																}
																className={`flex-1 max-w-[120px] py-2 rounded-full font-bold transition-all duration-300 sm:flex-none sm:max-w-none sm:py-3 ${
																	activePersonalTab ===
																	subTab
																		? "bg-[#8E44AD] text-white shadow-lg border-2 border-black"
																		: "bg-[#8E44AD] text-white "
																}`}
																style={{
																	fontSize:
																		"clamp(12px, 3vw, 18px)",
																	paddingLeft:
																		"clamp(8px, 4vw, 22px)",
																	paddingRight:
																		"clamp(8px, 4vw, 22px)",
																}}
															>
																{subTab}
															</button>
														))}
													</div>

													{/* Sub-tab Content */}
													<div className="p-6">
														{activePersonalTab ===
															"婚戀配對" && (
															<div className="space-y-4">
																<h4
																	className="mb-3 sm:mb-4 font-bold text-[#8E44AD]"
																	style={{
																		fontSize:
																			"clamp(20px, 5vw, 36px)",
																	}}
																>
																	婚戀配對建議
																</h4>
																<div
																	className="leading-relaxed text-black"
																	style={{
																		fontSize:
																			"clamp(14px, 3.5vw, 20px)",
																	}}
																>
																	{comprehensiveInterpersonalAdvice
																		.personalRelationships
																		?.romanticCompatibility ? (
																		<p>
																			{
																				comprehensiveInterpersonalAdvice
																					.personalRelationships
																					.romanticCompatibility
																			}
																		</p>
																	) : (
																		<p className="italic text-gray-500">
																			暫無婚戀配對建議
																		</p>
																	)}
																</div>
															</div>
														)}

														{activePersonalTab ===
															"家庭關係" && (
															<div className="space-y-4">
																<h4
																	className="mb-3 sm:mb-4 font-bold text-[#8E44AD]"
																	style={{
																		fontSize:
																			"clamp(20px, 5vw, 36px)",
																	}}
																>
																	家庭關係建議
																</h4>
																<div
																	className="leading-relaxed text-black"
																	style={{
																		fontSize:
																			"clamp(14px, 3.5vw, 20px)",
																	}}
																>
																	{comprehensiveInterpersonalAdvice
																		.personalRelationships
																		?.familyDynamics ? (
																		<p>
																			{
																				comprehensiveInterpersonalAdvice
																					.personalRelationships
																					.familyDynamics
																			}
																		</p>
																	) : (
																		<p className="italic text-gray-500">
																			暫無家庭關係建議
																		</p>
																	)}
																</div>
															</div>
														)}

														{activePersonalTab ===
															"交友圈層" && (
															<div className="space-y-4">
																<h4
																	className="mb-3 sm:mb-4 font-bold text-[#8E44AD]"
																	style={{
																		fontSize:
																			"clamp(20px, 5vw, 36px)",
																	}}
																>
																	交友圈層建議
																</h4>
																<div
																	className="leading-relaxed text-black"
																	style={{
																		fontSize:
																			"clamp(14px, 3.5vw, 20px)",
																	}}
																>
																	{comprehensiveInterpersonalAdvice
																		.personalRelationships
																		?.friendshipCircle ? (
																		<p>
																			{
																				comprehensiveInterpersonalAdvice
																					.personalRelationships
																					.friendshipCircle
																			}
																		</p>
																	) : (
																		<p className="italic text-gray-500">
																			暫無交友圈層建議
																		</p>
																	)}
																</div>
															</div>
														)}
													</div>

													{/* Detailed explanation */}
													{comprehensiveInterpersonalAdvice
														.personalRelationships
														?.detailed && (
														<div className="p-4 mt-6 bg-[#EFEFEF] rounded-xl">
															<h5
																className="mb-2 font-semibold text-black"
																style={{
																	fontSize:
																		"clamp(16px, 4vw, 24px)",
																}}
															>
																詳細說明
															</h5>
															<p
																className="leading-relaxed text-black"
																style={{
																	fontSize:
																		"clamp(14px, 3.5vw, 20px)",
																}}
															>
																{
																	comprehensiveInterpersonalAdvice
																		.personalRelationships
																		.detailed
																}
															</p>
														</div>
													)}
												</div>
											)}

											{activeInterpersonalTab ===
												"職場協作" && (
												<div className="px-2 sm:px-4 md:px-8 lg:px-30">
													{/* Sub-tab Navigation */}
													<div className="flex justify-center gap-2 p-3 mb-3 sm:justify-between sm:gap-3 sm:p-6">
														{[
															"領導風格",
															"團隊配合",
															"衝突化解",
														].map((subTab) => (
															<button
																key={subTab}
																onClick={() =>
																	setActiveWorkplaceTab(
																		subTab
																	)
																}
																className={`flex-1 max-w-[120px] py-2 rounded-full font-bold transition-all duration-300 sm:flex-none sm:max-w-none sm:py-3 ${
																	activeWorkplaceTab ===
																	subTab
																		? "bg-[#3498DB] text-white shadow-lg border-2 border-black"
																		: "bg-[#3498DB] text-white "
																}`}
																style={{
																	fontSize:
																		"clamp(12px, 3vw, 18px)",
																	paddingLeft:
																		"clamp(8px, 4vw, 22px)",
																	paddingRight:
																		"clamp(8px, 4vw, 22px)",
																}}
															>
																{subTab}
															</button>
														))}
													</div>

													{/* Sub-tab Content */}
													<div className="p-6">
														{activeWorkplaceTab ===
															"領導風格" && (
															<div className="space-y-4">
																<h4
																	className="mb-3 sm:mb-4 font-bold text-[#3498DB]"
																	style={{
																		fontSize:
																			"clamp(20px, 5vw, 36px)",
																	}}
																>
																	領導風格建議
																</h4>
																<div
																	className="leading-relaxed text-black"
																	style={{
																		fontSize:
																			"clamp(14px, 3.5vw, 20px)",
																	}}
																>
																	{comprehensiveInterpersonalAdvice
																		.workplaceCollaboration
																		?.leadershipStyle ? (
																		<p>
																			{
																				comprehensiveInterpersonalAdvice
																					.workplaceCollaboration
																					.leadershipStyle
																			}
																		</p>
																	) : (
																		<p className="italic text-gray-500">
																			暫無領導風格建議
																		</p>
																	)}
																</div>
															</div>
														)}

														{activeWorkplaceTab ===
															"團隊配合" && (
															<div className="space-y-4">
																<h4
																	className="mb-3 sm:mb-4 font-bold text-[#3498DB]"
																	style={{
																		fontSize:
																			"clamp(20px, 5vw, 36px)",
																	}}
																>
																	團隊配合建議
																</h4>
																<div
																	className="leading-relaxed text-black"
																	style={{
																		fontSize:
																			"clamp(14px, 3.5vw, 20px)",
																	}}
																>
																	{comprehensiveInterpersonalAdvice
																		.workplaceCollaboration
																		?.teamDynamics ? (
																		<p>
																			{
																				comprehensiveInterpersonalAdvice
																					.workplaceCollaboration
																					.teamDynamics
																			}
																		</p>
																	) : (
																		<p className="italic text-gray-500">
																			暫無團隊配合建議
																		</p>
																	)}
																</div>
															</div>
														)}

														{activeWorkplaceTab ===
															"衝突化解" && (
															<div className="space-y-4">
																<h4
																	className="mb-3 sm:mb-4 font-bold text-[#3498DB]"
																	style={{
																		fontSize:
																			"clamp(20px, 5vw, 36px)",
																	}}
																>
																	衝突化解建議
																</h4>
																<div
																	className="leading-relaxed text-black"
																	style={{
																		fontSize:
																			"clamp(14px, 3.5vw, 20px)",
																	}}
																>
																	{comprehensiveInterpersonalAdvice
																		.workplaceCollaboration
																		?.conflictResolution ? (
																		<p>
																			{
																				comprehensiveInterpersonalAdvice
																					.workplaceCollaboration
																					.conflictResolution
																			}
																		</p>
																	) : (
																		<p className="italic text-gray-500">
																			暫無衝突化解建議
																		</p>
																	)}
																</div>
															</div>
														)}
													</div>

													{/* Detailed explanation */}
													{comprehensiveInterpersonalAdvice
														.workplaceCollaboration
														?.detailed && (
														<div className="p-4 mt-6 bg-[#EFEFEF] rounded-xl">
															<h5
																className="mb-2 font-semibold text-black"
																style={{
																	fontSize:
																		"clamp(16px, 4vw, 24px)",
																}}
															>
																詳細說明
															</h5>
															<p
																className="leading-relaxed text-black"
																style={{
																	fontSize:
																		"clamp(14px, 3.5vw, 20px)",
																}}
															>
																{
																	comprehensiveInterpersonalAdvice
																		.workplaceCollaboration
																		.detailed
																}
															</p>
														</div>
													)}
												</div>
											)}

											{activeInterpersonalTab ===
												"社交網絡" && (
												<div className="px-2 sm:px-4 md:px-8 lg:px-30">
													{/* Sub-tab Navigation */}
													<div className="flex justify-center gap-2 p-3 mb-3 sm:justify-between sm:gap-3 sm:p-6">
														{[
															"人脈建構",
															"溝通技巧",
															"聚會參與",
														].map((subTab) => (
															<button
																key={subTab}
																onClick={() =>
																	setActiveSocialTab(
																		subTab
																	)
																}
																className={`flex-1 max-w-[120px] py-2 rounded-full font-bold transition-all duration-300 sm:flex-none sm:max-w-none sm:py-3 ${
																	activeSocialTab ===
																	subTab
																		? "bg-[#27AE60] text-white shadow-lg border-2 border-black"
																		: "bg-[#27AE60] text-white "
																}`}
																style={{
																	fontSize:
																		"clamp(12px, 3vw, 18px)",
																	paddingLeft:
																		"clamp(8px, 4vw, 22px)",
																	paddingRight:
																		"clamp(8px, 4vw, 22px)",
																}}
															>
																{subTab}
															</button>
														))}
													</div>

													{/* Sub-tab Content */}
													<div className="p-6">
														{activeSocialTab ===
															"人脈建構" && (
															<div className="space-y-4">
																<h4
																	className="mb-3 sm:mb-4 font-bold text-[#27AE60]"
																	style={{
																		fontSize:
																			"clamp(20px, 5vw, 36px)",
																	}}
																>
																	人脈建構建議
																</h4>
																<div
																	className="leading-relaxed text-black"
																	style={{
																		fontSize:
																			"clamp(14px, 3.5vw, 20px)",
																	}}
																>
																	{comprehensiveInterpersonalAdvice
																		.socialNetworking
																		?.networkBuilding ? (
																		<p>
																			{
																				comprehensiveInterpersonalAdvice
																					.socialNetworking
																					.networkBuilding
																			}
																		</p>
																	) : (
																		<p className="italic text-gray-500">
																			暫無人脈建構建議
																		</p>
																	)}
																</div>
															</div>
														)}

														{activeSocialTab ===
															"溝通技巧" && (
															<div className="space-y-4">
																<h4
																	className="mb-3 sm:mb-4 font-bold text-[#27AE60]"
																	style={{
																		fontSize:
																			"clamp(20px, 5vw, 36px)",
																	}}
																>
																	溝通技巧建議
																</h4>
																<div
																	className="leading-relaxed text-black"
																	style={{
																		fontSize:
																			"clamp(14px, 3.5vw, 20px)",
																	}}
																>
																	{comprehensiveInterpersonalAdvice
																		.socialNetworking
																		?.communicationSkills ? (
																		<p>
																			{
																				comprehensiveInterpersonalAdvice
																					.socialNetworking
																					.communicationSkills
																			}
																		</p>
																	) : (
																		<p className="italic text-gray-500">
																			暫無溝通技巧建議
																		</p>
																	)}
																</div>
															</div>
														)}

														{activeSocialTab ===
															"聚會參與" && (
															<div className="space-y-4">
																<h4
																	className="mb-3 sm:mb-4 font-bold text-[#27AE60]"
																	style={{
																		fontSize:
																			"clamp(20px, 5vw, 36px)",
																	}}
																>
																	聚會參與建議
																</h4>
																<div
																	className="leading-relaxed text-black"
																	style={{
																		fontSize:
																			"clamp(14px, 3.5vw, 20px)",
																	}}
																>
																	{comprehensiveInterpersonalAdvice
																		.socialNetworking
																		?.socialGatherings ? (
																		<p>
																			{
																				comprehensiveInterpersonalAdvice
																					.socialNetworking
																					.socialGatherings
																			}
																		</p>
																	) : (
																		<p className="italic text-gray-500">
																			暫無聚會參與建議
																		</p>
																	)}
																</div>
															</div>
														)}
													</div>

													{/* Detailed explanation */}
													{comprehensiveInterpersonalAdvice
														.socialNetworking
														?.detailed && (
														<div className="p-4 mt-6 bg-[#EFEFEF] rounded-xl">
															<h5
																className="mb-2 font-semibold text-black"
																style={{
																	fontSize:
																		"clamp(16px, 4vw, 24px)",
																}}
															>
																詳細說明
															</h5>
															<p
																className="leading-relaxed text-black"
																style={{
																	fontSize:
																		"clamp(14px, 3.5vw, 20px)",
																}}
															>
																{
																	comprehensiveInterpersonalAdvice
																		.socialNetworking
																		.detailed
																}
															</p>
														</div>
													)}
												</div>
											)}
										</div>
									) : (
										<div className="py-8">
											<div className="space-y-6">
												<div>
													<Skeleton className="w-40 h-5 mb-3" />
													<div className="space-y-2">
														<Skeleton className="w-full h-4" />
														<Skeleton className="w-4/5 h-4" />
														<Skeleton className="w-5/6 h-4" />
													</div>
												</div>
												<div>
													<Skeleton className="h-5 mb-3 w-36" />
													<div className="space-y-2">
														<Skeleton className="w-full h-4" />
														<Skeleton className="w-3/4 h-4" />
													</div>
												</div>
												<div>
													<Skeleton className="h-5 mb-3 w-44" />
													<div className="space-y-2">
														<Skeleton className="w-full h-4" />
														<Skeleton className="w-2/3 h-4" />
														<Skeleton className="w-4/5 h-4" />
													</div>
												</div>
											</div>
										</div>
									)}
								</section>
							)}
						</>
					);
				})()}

				{/* Existing sections continue below... */}
			</div>

			<div
				style={{ display: activeTab === "fortune" ? "block" : "none" }}
			>
				<FourFortuneAnalysis
					userInfo={userInfo}
					wuxingData={wuxingAnalysis?.wuxingData}
					sessionId={propSessionId || searchParams.get("sessionId")}
					onFortuneDataUpdate={updateFortuneData}
				/>
			</div>
			{/* 第二章 流年运程解析 */}
			{/* <div
				key="section-1"
				className="relative mx-auto max-w-250 md:px-5 chapter-page-break"
			>
				<h1
					ref={(el) => (sectionRefs.current[5] = el)}
					className="md:text-[40px] text-[28px] text-center font-bold md:mt-18 mt-10 mb-10 md:px-0 px-5 text-[#073E31]"
					id={`section-1`}
				>
					{sections[1].title}
				</h1>
				<p className="px-5 font-bold leading-8 tracking-normal text-justify md:px-0">
					<span className="text-[#073E31]">{t("p2-1")}</span>
					{t("p2-2")}
				</p> */}

			{/* 指數展示 */}
			{/* <div className="flex flex-wrap justify-center gap-3 px-5 mt-8 mb-8 sm:gap-4 md:gap-6 md:px-0 md:justify-between">
					{reportDocData.yunchengData
						.slice(0, 5)
						.map((item, index) => (
							<div
								key={index}
								className="flex flex-col items-center min-w-0 flex-1 max-w-[calc(50%-6px)] sm:max-w-[calc(33.333%-8px)] md:max-w-none"
							>
								<div
									className="flex flex-col items-center justify-center w-16 h-16 mb-2 border-2 rounded-full sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 sm:border-3 md:border-4"
									style={{
										borderColor:
											sections[1].children[index].color,
										background: "#fff",
									}}
								>
									<span
										className="text-xl font-extrabold sm:text-2xl md:text-4xl lg:text-5xl"
										style={{
											color: sections[1].children[index]
												.color,
										}}
									>
										{item.zhishu?.split("/")[0]}
									</span>
									<span
										className="text-xs font-bold sm:text-sm md:text-base lg:text-lg"
										style={{
											color: sections[1].children[index]
												.color,
										}}
									>
										/10
									</span>
								</div> */}
			{/* Optional: Add labels below for mobile */}
			{/* <span className="mt-1 text-xs text-center text-gray-600 sm:text-sm md:hidden">
									{sections[1].children[index].title}
								</span>
							</div>
						))}
				</div>

				<div className="relative">
					<div>
						{reportDocData.yunchengData.map((item, index) => {
							return (
								<section
									style={{
										backgroundColor:
											sections[1].children[index].bgColor,
									}}
									className="md:rounded-[26px] rounded-none md:p-8 p-5 md:mt-10 mt-10"
								>
									<div className="flex items-center justify-between">
										<p
											ref={(el) =>
												(sectionRefs.current[
													6 + index
												] = el)
											}
											id={`section-1-${index}`}
											className={`leading-8 text-xl font-bold flex items-center`}
											style={{
												color: sections[1].children[
													index
												].color,
											}}
										>
											{index < 5 && (
												<Image
													src={`/images/report/icon${index}.png`}
													width={24}
													height={24}
													alt=""
													className="mr-1"
												/>
											)}
											{sections[1].children[index].title}
										</p>
										{index < 5 && (
											<p
												className={`leading-8 flex items-end`}
												style={{
													color: sections[1].children[
														index
													].color,
												}}
											>
												<span className="text-xl font-bold">
													{item.zhishu?.split("/")[0]}
												</span>
												<span className="text-sm">
													/10
												</span>
											</p>
										)}
									</div>
									<p className="leading-8 text-justify">
										{item.content}
									</p>
								</section>
							);
						})}
					</div>
				</div>
			</div> */}
			{/* 第三章 家居风水解析 */}
			{/* <div
				key="section-0"
				className="w-[80%] mx-auto px-5 pt-30 pb-10 flex flex-col lg:flex-row bg-[#EFEFEF]"
			> */}
			{/* Left Section */}
			{/* <div className="flex items-start justify-start flex-1">
					<h1
						ref={(el) => (sectionRefs.current[2] = el)}
						style={{
							fontFamily: "Noto Serif TC, serif",
							fontWeight: 800,
							fontSize: 56,
							color: "#A3B116",
							lineHeight: 1.1,
						}}
					>
						{sections[2]?.title}
					</h1>
				</div> */}
			{/* Right Section */}
			{/* <div className="flex flex-col items-center justify-center flex-1">
					<div className="flex flex-row gap-4">
						<button
							onClick={onPrint}
							style={{
								width: 250,
								height: 72,
								backgroundColor: "#A3B116",
								borderRadius: "100px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								border: "none",
								cursor: "pointer",
								marginBottom: 24,
							}}
						>
							<span
								style={{
									fontFamily: "Noto Serif TC, serif",
									fontWeight: 800,
									fontSize: 20,
									color: "#FFFFFF",
									letterSpacing: 2,
								}}
							>
								下載報告
							</span>
						</button>
						<button
							onClick={() => {
								// Add your share logic here
								alert("分享您的結果功能待实现");
							}}
							style={{
								width: 250,
								height: 72,
								backgroundColor: "#A3B116",
								borderRadius: "100px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								border: "none",
								cursor: "pointer",
								marginBottom: 24,
							}}
						>
							<span
								style={{
									fontFamily: "Noto Serif TC, serif",
									fontWeight: 800,
									fontSize: 20,
									color: "#FFFFFF",
									letterSpacing: 2,
								}}
							>
								分享您的結果
							</span>
						</button>
					</div>
				</div>
			</div> */}
			{/* Paragraph below both columns */}
			{/* <div className="w-[80%] align-center mx-auto px-5 pb-8 mb-10">
				<p
					style={{
						fontFamily: "Noto Sans HK, sans-serif",
						fontWeight: 400,
						fontSize: 20,
						color: "#000000",
						lineHeight: 1.8,
					}}
				>
					<span>{t("p3-1")}</span>
					{t("p3-2")}
				</p>
				<p
					style={{
						fontFamily: "Noto Sans HK, sans-serif",
						fontWeight: 400,
						fontSize: 20,
						color: "#000000",
						lineHeight: 1.8,
					}}
				>
					{t("p3-3")}
				</p>
				<p
					style={{
						fontFamily: "Noto Sans HK, sans-serif",
						fontWeight: 400,
						fontSize: 20,
						color: "#000000",
						lineHeight: 1.8,
					}}
				>
					<span>{t("p3-4")}</span>
					{t("p3-5")}
				</p>
			</div>
			<div key="section-2" className="mx-auto md:px-5 chapter-page-break">
				<Chapter3
					locale={locale}
					onSaveData={setJiaJuData}
					userInfo={userInfo}
					jiajuProDataString={JSON.stringify(
						reportDocData.jiajuProData || undefined
					)}
					assistantDataString={JSON.stringify(
						assistantData.jiajuProData
					)}
					jiajuDataString={JSON.stringify(reportDocData.jiajuData)}
					isPrinting={isPrinting}
				/>
			</div>
 */}
			{/* 第四章 个人命理进阶解析 */}
			{/* <div className="pb-30">
				<div
					key="section-3"
					className="relative mx-auto w-[80%] bg-white shadow-[0_4px_5.3px_rgba(0,0,0,0.25)] p-20 rounded-[60px]  md:px-5 chapter-page-break"
				> */}
			{/* <h1
					ref={(el) => (sectionRefs.current[13] = el)}
					className="md:text-[40px] text-[28px] text-center font-bold md:mt-18 mt-10 mb-10 md:px-0 px-5 text-[#073E31]"
					id={`section-3`}
				>
					{sections[3]?.title}
				</h1> */}
			{/* <div>
						<div>
							<MingLi
								locale={locale}
								onSaveData={setMingLiData}
								userInfo={userInfo}
								mingLiDataString={JSON.stringify(
									reportDocData.mingLiData || undefined
								)}
								assistantDataString={JSON.stringify(
									assistantData.mingLiData
								)}
								isPrinting={isPrinting}
							/>
						</div>
					</div>
				</div>
			</div>
 */}
			{/* 第五章 流年运程进阶解析
				{!isLock && (
				</div>
						</div>

			{/* 第五章 流年运程进阶解析
				{!isLock && (
					<div key="section-4">
						<h1
							ref={(el) => (sectionRefs.current[14] = el)}
							className="md:text-[40px] text-[28px] text-center font-bold md:mt-18 mt-10 mb-10 md:px-0 px-5 text-[#073E31]"
							id={`section-4`}
						>
							{sections[4]?.title}
						</h1>
						<LiuNian
							locale={locale}
							onSaveData={setLiuNianData}
							userInfo={userInfo}
							liuNianDataString={JSON.stringify(
								reportDocData.liuNianData || undefined
							)}
							assistantDataString={JSON.stringify(
								assistantData.liuNianData
							)}
							isPrinting={isPrinting}
						/>
					</div>
				)} */}
			{/* 第六章 家居进阶解析 */}
			{/* <div
					key="section-5"
					className="relative mx-auto md:max-w-250 md:px-5"
				>
					<h1
						ref={(el) => (sectionRefs.current[15] = el)}
						className="md:text-[40px] text-[28px] text-center font-bold md:mt-18 mt-10 mb-10 md:px-0 px-5 text-[#073E31]"
						id={`section-5`}
					>
						{sections[5]?.title}
					</h1>
					<div className="relative">
						{isLock && (
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[90%] md:w-[480px] bg-white rounded-xl shadow-lg border border-[#20B580] p-6 flex flex-col items-center">
								<div className="text-xl font-bold text-[#20B580] mb-2">
									立即解鎖
								</div>
								<div className="mb-4 text-base text-center text-gray-700">
									取得完整報告，解鎖符合你性格的 10
									種職涯路徑。
								</div>
								<button
									className="bg-[#20B580] hover:bg-[#168c6e] text-white font-bold py-2 px-6 rounded-full text-lg transition"
									onClick={() =>
										(window.location.href = "/payment")
									}
								>
									解鎖全部結果
								</button>
							</div>
						)}
						<div
							className={
								isLock
									? "filter blur-sm pointer-events-none relative max-h-[900px] overflow-hidden"
									: ""
							}
						>
							<Chapter6
								locale={locale}
								onSaveData={setJiaJuData}
								userInfo={userInfo}
								jiajuProDataString={JSON.stringify(
									reportDocData.jiajuProData || undefined
								)}
								assistantDataString={JSON.stringify(
									assistantData.jiajuProData
								)}
								isPrinting={isPrinting}
							/>
						</div>
					</div>
				</div> */}
		</div>
	);
}
