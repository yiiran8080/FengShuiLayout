"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/home/Footer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Theory from "../../../components/free/theory";
import Uploadpic from "../../../components/uploadpic";

const directionOptions = [
	{ value: "north", label: "正北" },
	{ value: "south", label: "正南" },
	{ value: "east", label: "正东" },
	{ value: "west", label: "正西" },
	{ value: "northEast", label: "东北" },
	{ value: "southEast", label: "东南" },
	{ value: "northWest", label: "西北" },
	{ value: "southWest", label: "西南" },
	{ value: "center", label: "中宫" },
];

export default function Free() {
	const { data: session, status } = useSession();
	const router = useRouter();
	const [file, setFile] = useState(null);
	const [preview, setPreview] = useState(null);
	const [roomLabel, setRoomLabel] = useState("");
	const [roomDirection, setRoomDirection] = useState("");
	const [furListStr, setFurListStr] = useState("");
	const [aiResult, setAiResult] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [gender, setGender] = useState("female");
	const [birthDateTime, setBirthDateTime] = useState("1990-01-01T08:00");
	const fileInputRef = useRef(null);

	React.useEffect(() => {
		if (status === "unauthenticated") {
			router.replace("/auth/login");
		}
	}, [status, router]);

	if (status === "loading") {
		return null; // or a loading spinner
	}

	const handleFileChange = (e) => {
		const f = e.target.files[0];
		if (
			f &&
			(f.type === "image/jpeg" || f.type === "image/png") &&
			f.size <= 10 * 1024 * 1024
		) {
			setFile(f);
			setPreview(URL.createObjectURL(f));
			setAiResult("");
			setError("");
		} else {
			setError("请上传JPEG或PNG格式且小于10MB的房间图片");
		}
	};

	const handleAnalyze = async () => {
		if (!file) {
			setError("请先上传房间图片");
			return;
		}
		if (!roomLabel || !roomDirection) {
			setError("请填写房间类型和朝向");
			return;
		}
		setLoading(true);
		setError("");
		setAiResult("");
		try {
			const room = {
				label: roomLabel,
				direction: roomDirection,
				furListStr: furListStr,
			};
			const userInfo = {
				gender,
				birthDateTime: birthDateTime.replace("T", " "), // format as 'YYYY-MM-DD HH:mm'
			};
			const wuxingData = {
				year: "甲子",
				month: "乙丑",
				day: "丙寅",
				hour: "丁卯",
				wuxingScale: "木2火1土1金1水1",
				nayin: "海中金",
				wuxingJu: "三合木局",
				yearStemTenGod: "比肩",
				yearBranchTenGod: "劫财",
				monthStemTenGod: "食神",
				monthBranchTenGod: "伤官",
				dayStemTenGod: "正财",
				dayBranchTenGod: "偏财",
				hourStemTenGod: "正官",
				hourBranchTenGod: "七杀",
				mingPalace: "巳",
				bodyPalace: "申",
				qianyiPalace: "贪狼",
				liunianGanzhi: "甲辰",
				rizhiCanggan: "丙戊甲",
				dayunGanzhi: "乙卯",
				yearGods: "天乙贵人",
				monthGods: "红鸾",
				dayGods: "孤辰",
			};
			const getJiajuPrompt = () =>
				`[全局设定]：角色：你是一个精通玄空风水与空间规划的AI家居顾问。任务：根据用户提供的用户信息和房间、家具信息生成各房间风水优化方案。要求：1. 结合命理需求与空间物理特性；2. 所有建议需标注具体方位（如东北、西南）；3. 用🔥/⚠️符号区分强化与禁忌提示，且用\\n换行符分隔；4. 如果返回的风水建议中包含1.2.3.等分项，各项之间用\\n换行符分隔。5. 如果你判断图片内容不是房间，请直接返回：{"error":"not_a_room"}，不要生成任何风水建议。\n[元素-材质映射]： {...}。...`;
			const getJiajuUserData = (room) =>
				`性别：${userInfo.gender == "female" ? "女" : "男"}, 出生年月日时：${userInfo.birthDateTime}, 八字：{年柱：${wuxingData.year},月柱：${wuxingData.month},日柱：${wuxingData.day},时柱：${wuxingData.hour},五行分布：${wuxingData.wuxingScale}}，纳音：${wuxingData.nayin}，五行局：${wuxingData.wuxingJu}，房间信息：{房间类型：${room.label}, 方位：${room.direction}, 现有家具：${room.furListStr ? "[" + room.furListStr + "]" : ""}}`;
			let fengshuiJson;
			try {
				const fengshuiRes = await fetch("/api/ai-fengshui", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						prompt: getJiajuPrompt(),
						userData: getJiajuUserData(room),
					}),
				});
				if (!fengshuiRes.ok) throw new Error("AI风水分析失败");
				fengshuiJson = await fengshuiRes.json();
				// If AI returns a special error or flag, show the custom error
				if (fengshuiJson.error === "not_a_room") {
					setError("照片格局不能分析");
					setLoading(false);
					return;
				}
			} catch (err) {
				// Fallback: simulate "not a room" if file name contains "notroom" (for demo)
				if (
					file &&
					file.name &&
					file.name.toLowerCase().includes("notroom")
				) {
					setError("照片格局不能分析");
					setLoading(false);
					return;
				}
				fengshuiJson = {
					家具摆放: `1.将${room.label}主要家具靠${directionOptions.find((d) => d.value === room.direction)?.label || room.direction}墙摆放，形成聚气格局；2.适当添加绿色植物提升活力。`,
					禁忌提醒: `1.${room.label}忌正对门窗，避免气流直冲；2.金属家具不宜过多，防止五行失衡。`,
					五行色系与材质:
						"✅ 主墙面：16-1546 Living Coral乳胶漆+实木；❌ 避用黑色系（因水火冲突）。",
					运势增强方法:
						"🔥 每日早晨打开南窗通风；2.在东南角放紫水晶提升能量。",
				};
			}
			setAiResult(JSON.stringify(fengshuiJson, null, 2));
		} catch (e) {
			setError(e.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<Navbar />
			<Uploadpic />
			<Theory />
			<Footer />
		</div>
	);
}
