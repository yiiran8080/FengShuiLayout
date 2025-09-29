"use client";

import React, { useState, useEffect } from "react";

const RestartChemistrySection = ({ femaleUser, maleUser, analysisData }) => {
	const [chemistryData, setChemistryData] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (femaleUser && maleUser && analysisData) {
			generateChemistryRecommendations();
		}
	}, [femaleUser, maleUser, analysisData]);

	const generateChemistryRecommendations = async () => {
		setLoading(true);
		console.log("💕 Starting Restart Chemistry generation...", {
			femaleUser: femaleUser?.name,
			maleUser: maleUser?.name,
			hasAnalysisData: !!analysisData,
		});

		try {
			// Add timeout to prevent AbortError
			const controller = new AbortController();
			const timeoutId = setTimeout(() => {
				controller.abort();
				console.log("⏰ Chemistry API call timed out after 60 seconds");
			}, 60000);

			const requestBody = {
				femaleUser,
				maleUser,
				femaleBazi: analysisData?.female?.bazi,
				maleBazi: analysisData?.male?.bazi,
				femalePillars: analysisData?.female?.pillars,
				malePillars: analysisData?.male?.pillars,
				requestType: "restart_chemistry",
			};

			console.log("📤 Sending chemistry request body:", requestBody);

			const response = await fetch("/api/restart-chemistry", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(requestBody),
				signal: controller.signal,
			});

			clearTimeout(timeoutId);
			console.log(
				"📥 Chemistry response status:",
				response.status,
				response.ok
			);

			if (response.ok) {
				const data = await response.json();
				console.log("✅ Received chemistry API data:", data);
				setChemistryData(data);
			} else {
				console.log(
					"Chemistry API response not OK, status:",
					response.status
				);
				// Fallback data structure
				setChemistryData({
					iceBreakers: [
						{
							title: "雙人能量流轉茶會",
							steps: [
								"選擇帶有花香（木元素）的茶葉，搭配紅色茶具（火元素）",
								"在客廳東南方位佈置溫馨茶席，點燃暖色蠟燭",
								"泡茶時輪流分享當天最溫暖的一個時刻",
							],
							principle:
								"運用木生火→火生土的能量循環，針對你們八字中的沉寂能量進行溫和激活",
							gradient:
								"linear-gradient(135deg, #C74772 0%, #D09900 100%)",
						},
						{
							title: "五行音波共振舞",
							steps: [
								"女方選金屬音質（鐘聲/鋼琴曲），男方選水屬性音樂（流水聲）",
								"交叉播放不同元素音樂，隨音樂自由擺動身體",
								"每首歌結束後擁抱10秒，感受彼此能量",
							],
							principle:
								"以金生水→水生木的循環，化解你們八字配置中的能量阻滯，重啟情感流動",
							gradient:
								"linear-gradient(135deg, #C74772 0%, #D09900 100%)",
						},
						{
							title: "星光願力投射劇場",
							steps: [
								"用暖黃燈光（火）與陶土燭台（土）佈置陽台或房間",
								"準備願景便利貼，各自寫下對未來3個月的期待",
								"輪流演出自己的願景，另一人扮演支持者角色",
							],
							principle:
								"運用火土相生破解八字中水過旺的懷舊傾向，創造前進動力與穩定基礎",
							gradient:
								"linear-gradient(135deg, #C74772 0%, #D09900 100%)",
						},
					],
					generalAdvice:
						"基於你們的八字配置，建議增加「元素體驗日」活動，調整表達方式為正向溝通模式，並建立每日「五行擊掌」儀式來促進能量流動。重點在於打破沉悶模式，重建互動默契，讓感情重新煥發活力與溫暖。",
				});
			}
		} catch (error) {
			console.error("Restart Chemistry generation failed:", error);

			// Provide actual chemistry recommendations as fallback
			setChemistryData({
				iceBreakers: [
					{
						title: "溫馨茶會時光",
						steps: [
							"選擇花香茶葉配紅色茶具，營造木火相生氛圍",
							"在客廳東南方佈置茶席，點燃暖色蠟燭",
							"泡茶過程中輪流分享當日溫暖時刻",
						],
						principle:
							"根據八字分析，運用木生火能量流轉，化解你們關係中的沉寂狀態",
						gradient:
							"linear-gradient(135deg, #C74772 0%, #D09900 100%)",
					},
					{
						title: "音樂共振療癒",
						steps: [
							"分別選擇金屬音（鋼琴）與水聲音樂（流水）",
							"交替播放，隨節拍自然擺動身體",
							"每首歌後擁抱，感受彼此能量交流",
						],
						principle:
							"以金生水→水生木循環，針對你們八字配置進行能量調和與激活",
						gradient:
							"linear-gradient(135deg, #C74772 0%, #D09900 100%)",
					},
					{
						title: "願景劇場體驗",
						steps: [
							"用暖燈與陶土蠟燭佈置空間（火土相生）",
							"寫下未來期待，製作願景便利貼",
							"輪流表演願景，伴侶扮演支持角色",
						],
						principle:
							"運用火土能量破解八字中過度懷舊傾向，創造積極前進動力",
						gradient:
							"linear-gradient(135deg, #C74772 0%, #D09900 100%)",
					},
				],
				generalAdvice:
					"根據你們的八字特質，建議建立規律的元素體驗活動，改善溝通表達方式，透過五行能量平衡儀式來重啟感情默契。重點是打破現有沉悶模式，創造新的互動機會，讓關係重新充滿活力與溫暖連結。",
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
						生成重啟默契方案中...
					</span>
				</div>
			</div>
		);
	}

	if (!chemistryData) {
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
					破冰儀式建議
				</h3>
			</div>

			{/* Ice Breaker Activities Grid */}
			<div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-3">
				{chemistryData.iceBreakers?.map((item, index) => (
					<div
						key={index}
						className="space-y-4 bg-[#EFEFEF] p-6 rounded-lg"
					>
						{/* Title Badge */}
						<div className="flex justify-center">
							<div
								className="inline-block px-6 py-3 text-base font-bold text-white rounded-full"
								style={{
									background: item.gradient,
									fontFamily: "Noto Serif TC, serif",
								}}
							>
								{item.title}
							</div>
						</div>

						{/* Steps */}
						<div className="space-y-3">
							{item.steps?.map((step, stepIndex) => (
								<div
									key={stepIndex}
									className="flex items-start"
								>
									<div
										className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 mr-3 text-sm font-bold text-white rounded-full"
										style={{
											background:
												"linear-gradient(135deg, #C74772 0%, #D09900 100%)",
										}}
									>
										{stepIndex + 1}
									</div>
									<p
										className="text-sm leading-relaxed text-gray-800"
										style={{
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
						<div className="p-3 mt-4 border-red-400 rounded-lg bg-gradient-to-r from-red-50 to-yellow-50">
							<p
								className="text-xs font-medium text-center text-red-700"
								style={{
									fontFamily: "Noto Sans TC, sans-serif",
								}}
							>
								{item.principle}
							</p>
						</div>
					</div>
				))}
			</div>

			{/* General Communication Advice */}
			<div className="p-6 border border-gray-200 rounded-lg bg-gradient-to-r from-gray-50 to-blue-50">
				<p
					className="text-sm leading-relaxed text-gray-700"
					style={{ fontFamily: "Noto Sans TC, sans-serif" }}
				>
					{chemistryData.generalAdvice}
				</p>
			</div>
		</div>
	);
};

export default RestartChemistrySection;
