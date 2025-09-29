"use client";

import React, { useState, useEffect } from "react";

const EmergencyFengShuiSection = ({ femaleUser, maleUser, analysisData }) => {
	const [fengShuiData, setFengShuiData] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (femaleUser && maleUser && analysisData) {
			generateFengShuiRecommendations();
		}
	}, [femaleUser, maleUser, analysisData]);

	const generateFengShuiRecommendations = async () => {
		setLoading(true);
		console.log("🔥 Starting Emergency Feng Shui generation...", {
			femaleUser: femaleUser?.name,
			maleUser: maleUser?.name,
			hasAnalysisData: !!analysisData,
		});

		try {
			// Add timeout to prevent AbortError
			const controller = new AbortController();
			const timeoutId = setTimeout(() => {
				controller.abort();
				console.log("⏰ Feng Shui API call timed out after 60 seconds");
			}, 60000);

			const requestBody = {
				femaleUser,
				maleUser,
				femaleBazi: analysisData?.female?.bazi,
				maleBazi: analysisData?.male?.bazi,
				femalePillars: analysisData?.female?.pillars,
				malePillars: analysisData?.male?.pillars,
				requestType: "emergency_feng_shui",
			};

			console.log("📤 Sending request body:", requestBody);

			const response = await fetch("/api/emergency-feng-shui", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(requestBody),
				signal: controller.signal,
			});

			clearTimeout(timeoutId);
			console.log("📥 Response status:", response.status, response.ok);

			if (response.ok) {
				const data = await response.json();
				console.log("✅ Received API data:", data);
				setFengShuiData(data);
			} else {
				console.log("API response not OK, status:", response.status);
				// Fallback data structure
				setFengShuiData({
					recommendations: [
						{
							title: "臥室東側放置銅製擺件",
							description:
								"在臥室東側放置小型銅製龍鳳擺件或金屬風鈴，能調和金木相剋的能量，增強感情穩定性，每日清晨整理一次。",
							color: "#B08D57",
						},
						{
							title: "客廳點燃粉色蠟燭",
							description:
								"每晚7-9點在客廳點燃粉色或暖黃色蠟燭30分鐘，營造溫馨氛圍，粉色屬火能溫暖感情，促進深度溝通交流。",
							color: "#C4839F",
						},
						{
							title: "床頭擺放紅色靠枕",
							description:
								"在床頭放置紅色或粉色抱枕，激活愛情能量，紅色屬火能溫暖雙方感情，建議選用絲質或棉質材料效果更佳。",
							color: "#7B8B5C",
						},
					],
				});
			}
		} catch (error) {
			console.error("Emergency Feng Shui generation failed:", error);

			// Provide actual feng shui recommendations as fallback
			setFengShuiData({
				recommendations: [
					{
						title: "臥室擺放金屬擺件",
						description:
							"在臥室東側放置小型銅製飾品或金屬風鈴，能調和五行能量，增強感情穩定性，建議每晚睡前整理一次，保持金屬表面光亮。",
						color: "#B08D57",
					},
					{
						title: "床頭點燃暖色蠟燭",
						description:
							"每晚點燃暖黃色蠟燭約30分鐘，營造溫馨氛圍，暖光能柔化彼此情緒，促進深度溝通，建議使用天然蜂蠟蠟燭效果更佳。",
						color: "#C4839F",
					},
					{
						title: "客廳西南角鋪紅毯",
						description:
							"在客廳西南方向鋪設小塊紅色或暖色地毯，激活坤土能量，增強家庭和諧與包容心，紅色屬火能溫暖感情氣場。",
						color: "#7B8B5C",
					},
				],
			});
		} finally {
			setLoading(false);
		}
	};

	if (loading) {
		return (
			<div className="w-full p-8 bg-white rounded-[30px] shadow-lg">
				<div className="flex items-center justify-center">
					<div className="w-6 h-6 border-b-2 border-pink-500 rounded-full animate-spin"></div>
					<span className="ml-2 text-gray-600">
						生成風水急救方案中...
					</span>
				</div>
			</div>
		);
	}

	if (!fengShuiData) {
		return null;
	}

	return (
		<div className="w-full bg-white rounded-[30px] shadow-lg p-8">
			{/* Subtitle */}
			<div className="mb-8">
				<h3
					className="font-bold text-[#C74772]"
					style={{
						fontSize: "42px",
						fontFamily: "Noto Serif TC, serif",
					}}
				>
					72小時內行動方案
				</h3>
			</div>

			{/* Recommendations Grid */}
			<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
				{fengShuiData.recommendations?.map((item, index) => (
					<div
						key={index}
						className="space-y-3 bg-[#EFEFEF] p-4 rounded-lg"
					>
						{/* Title Badge */}
						<div className="flex justify-center">
							<div
								className="inline-block px-4 py-2 text-lg font-medium text-white rounded-full"
								style={{
									background:
										"linear-gradient(135deg, #C74772 0%, #D09900 100%)",
									fontFamily: "Noto Sans TC, sans-serif",
								}}
							>
								{item.title}
							</div>
						</div>

						{/* Content Box */}
						<div className="p-4 ">
							<p
								className="leading-relaxed text-gray-800 text-md"
								style={{
									fontFamily: "Noto Sans TC, sans-serif",
								}}
							>
								{item.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default EmergencyFengShuiSection;
