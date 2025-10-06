"use client";

import React, { useState, useEffect } from "react";

const RelationshipMethodSection = ({ femaleUser, maleUser, analysisData }) => {
	const [methodData, setMethodData] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		let isMounted = true;

		if (femaleUser && maleUser && analysisData && isMounted) {
			generateRelationshipMethod();
		}

		return () => {
			isMounted = false;
		};
	}, [femaleUser, maleUser, analysisData]);

	const generateRelationshipMethod = async () => {
		setLoading(true);
		console.log("💫 Starting Relationship Method generation...", {
			femaleUser: femaleUser?.name,
			maleUser: maleUser?.name,
			hasAnalysisData: !!analysisData,
		});

		try {
			const requestBody = {
				femaleUser,
				maleUser,
				femaleBazi: analysisData?.female?.bazi,
				maleBazi: analysisData?.male?.bazi,
				femalePillars: analysisData?.female?.pillars,
				malePillars: analysisData?.male?.pillars,
				requestType: "relationship_method",
			};

			console.log(
				"📤 Sending relationship method request body:",
				requestBody
			);

			const response = await fetch("/api/relationship-method", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(requestBody),
			});

			console.log(
				"📥 Relationship method response status:",
				response.status,
				response.ok
			);

			if (response.ok) {
				const data = await response.json();
				console.log("✅ Received relationship method API data:", data);
				setMethodData(data);
			} else {
				console.log(
					"Relationship method API response not OK, status:",
					response.status
				);
				// Fallback data structure
				setMethodData({
					dailyRituals: [
						{
							title: "晨光能量同頻儀式",
							steps: [
								"每日清晨6:30-7:00，面向東方站立3分鐘，深呼吸調息",
								"輪流分享昨夜夢境或今日期待，時間各限2分鐘",
								"以雙手交握結束，默念「木氣生發，愛意流轉」三次",
							],
							principle:
								"利用晨光木氣上升時刻，透過金生水→水生木的能量循環，調和你們八字中的沉寂氣場，重啟一日活力",
							gradient:
								"linear-gradient(135deg, #C74772 0%, #D09900 100%)",
						},
						{
							title: "午後土金平衡茶禪",
							steps: [
								"下午3-4點選用陶瓷茶具（土），沖泡白茶或烏龍（金氣茶品）",
								"無言靜坐品茶5分鐘，感受彼此存在能量",
								"輪流說出對方今日一個優點，用「我感謝你...」開頭",
							],
							principle:
								"午後土金時段最適合穩定關係能量，透過土生金→金生水循環，化解你們過度理性的溝通模式",
							gradient:
								"linear-gradient(135deg, #C74772 0%, #D09900 100%)",
						},
						{
							title: "夜晚水火調和儀式",
							steps: [
								"睡前點燃紅色蠟燭（火元素），旁邊放置水晶球（水元素）",
								"相視而坐，輪流說出今日最困擾與最開心的事各一件",
								"以溫暖擁抱結束，心中默念「水火既濟，情深意長」",
							],
							principle:
								"夜晚水氣旺盛配合火光，形成水火既濟卦象，專門針對你們八字能量沉寂核心進行深度調和",
							gradient:
								"linear-gradient(135deg, #C74772 0%, #D09900 100%)",
						},
					],
					communicationAdvice:
						"基於你們的八字分析，建議增加「元素感受日」活動（每週選一天專注體驗某種五行元素），調整表達方式為「先讚美後建議」模式，建立每晚「感恩三件事」分享習慣。重點是透過規律儀式打破能量沉寂，用溫和方式重建情感連結，讓關係在穩定中逐步升溫。",
				});
			}
		} catch (error) {
			console.error("Relationship Method generation failed:", error);

			// Handle different types of errors
			let errorMessage = "正在生成相處心法";
			if (error.name === "AbortError") {
				errorMessage = "分析超時，正在使用預設分析";
			} else if (error.message?.includes("timeout")) {
				errorMessage = "請求超時，正在重新嘗試";
			}

			// Provide actual relationship method as fallback
			setMethodData({
				dailyRituals: [
					{
						title: "清晨共鳴儀式",
						steps: [
							"每日早晨面向東方，一起深呼吸調息3分鐘",
							"輪流分享夢境或當日期待，各限時2分鐘",
							"雙手相握默念正向話語，啟動一日能量",
						],
						principle:
							"運用清晨木氣上升，透過金生水能量循環，調和八字中的沉寂氣場，重啟關係活力",
						gradient:
							"linear-gradient(135deg, #C74772 0%, #D09900 100%)",
					},
					{
						title: "午後靜心茶會",
						steps: [
							"下午時光使用陶瓷茶具沖泡淡雅茶品",
							"靜坐品茶5分鐘，感受彼此能量交流",
							"分享對方優點，用感謝話語表達",
						],
						principle:
							"午後土金時段穩定關係能量，土生金循環化解過度理性溝通，增進感情溫度",
						gradient:
							"linear-gradient(135deg, #C74772 0%, #D09900 100%)",
					},
					{
						title: "夜晚和諧儀式",
						steps: [
							"睡前點燃蠟燭營造溫暖氛圍",
							"分享當日感受，包含困擾與開心事項",
							"溫暖擁抱結束，心念感恩話語",
						],
						principle:
							"夜晚水火調和，形成既濟格局，針對能量沉寂核心進行深度平衡調整",
						gradient:
							"linear-gradient(135deg, #C74772 0%, #D09900 100%)",
					},
				],
				communicationAdvice:
					"根據八字特質，建議建立「元素體驗日」（每週專注一種五行元素），採用「先肯定後建議」的溝通模式，養成每晚感恩分享習慣。透過規律儀式化解能量沉寂，用溫和方式重建情感連結，在穩定基礎上逐步提升關係溫度。",
			});
		} finally {
			setLoading(false);
		}
	};

	if (loading) {
		return (
			<div
				className="w-full bg-white shadow-lg"
				style={{
					padding: "clamp(20px, 5vw, 32px)",
					borderRadius: "clamp(20px, 5vw, 30px)",
				}}
			>
				<div className="flex items-center justify-center">
					<div
						className="border-b-2 border-pink-500 rounded-full animate-spin"
						style={{
							width: "clamp(20px, 5vw, 24px)",
							height: "clamp(20px, 5vw, 24px)",
						}}
					></div>
					<span
						className="ml-2 text-gray-600"
						style={{ fontSize: "clamp(13px, 3.2vw, 15px)" }}
					>
						生成相處心法中..
					</span>
				</div>
			</div>
		);
	}

	if (!methodData) {
		return null;
	}

	return (
		<div
			className="w-full bg-white shadow-lg"
			style={{
				padding: "clamp(20px, 5vw, 32px)",
				borderRadius: "clamp(20px, 5vw, 30px)",
			}}
		>
			{/* Subtitle */}
			<div style={{ marginBottom: "clamp(24px, 6vw, 32px)" }}>
				<h3
					className="font-bold text-[#C74772]"
					style={{
						fontSize: "clamp(24px, 6vw, 42px)",
						fontFamily: "Noto Serif TC, serif",
					}}
				>
					關係升級提示
				</h3>
			</div>

			{/* Daily Rituals Grid */}
			<div
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
				style={{
					gap: "clamp(16px, 4vw, 24px)",
					marginBottom: "clamp(24px, 6vw, 32px)",
				}}
			>
				{methodData.dailyRituals?.map((item, index) => (
					<div
						key={index}
						className="bg-[#EFEFEF]"
						style={{
							padding: "clamp(16px, 4vw, 24px)",
							borderRadius: "clamp(8px, 2vw, 12px)",
							gap: "clamp(12px, 3vw, 16px)",
							display: "flex",
							flexDirection: "column",
						}}
					>
						{/* Title Badge */}
						<div className="flex justify-center">
							<div
								className="inline-block font-bold text-white rounded-full"
								style={{
									padding:
										"clamp(8px, 2vw, 12px) clamp(16px, 4vw, 24px)",
									fontSize: "clamp(13px, 3.2vw, 16px)",
									background: item.gradient,
									fontFamily: "Noto Serif TC, serif",
								}}
							>
								▸ {item.title}
							</div>
						</div>

						{/* Steps */}
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "clamp(10px, 2.5vw, 12px)",
							}}
						>
							{item.steps?.map((step, stepIndex) => (
								<div
									key={stepIndex}
									className="flex items-start"
								>
									<div
										className="flex items-center justify-center flex-shrink-0 font-bold text-white rounded-full"
										style={{
											width: "clamp(20px, 5vw, 24px)",
											height: "clamp(20px, 5vw, 24px)",
											fontSize:
												"clamp(10px, 2.5vw, 14px)",
											marginTop: "clamp(2px, 0.5vw, 4px)",
											marginRight:
												"clamp(8px, 2vw, 12px)",
											background:
												"linear-gradient(135deg, #C74772 0%, #D09900 100%)",
										}}
									>
										{stepIndex + 1}
									</div>
									<p
										className="text-gray-800"
										style={{
											fontSize: "clamp(12px, 3vw, 14px)",
											lineHeight: "1.6",
											fontFamily:
												"Noto Sans TC, sans-serif",
										}}
									>
										{step}
									</p>
								</div>
							))}
						</div>

						{/* Principle Box */}
						<div
							className="border-red-400 bg-gradient-to-r from-red-50 to-yellow-50"
							style={{
								padding: "clamp(10px, 2.5vw, 12px)",
								marginTop: "clamp(12px, 3vw, 16px)",
								borderRadius: "clamp(6px, 1.5vw, 8px)",
							}}
						>
							<p
								className="font-medium text-center text-red-700"
								style={{
									fontSize: "clamp(11px, 2.8vw, 12px)",
									lineHeight: "1.5",
									fontFamily: "Noto Sans TC, sans-serif",
								}}
							>
								{item.principle}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default RelationshipMethodSection;
