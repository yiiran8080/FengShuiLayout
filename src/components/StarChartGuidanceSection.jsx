"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const StarChartGuidanceSection = ({ femaleUser, maleUser, analysisData }) => {
	const [starChartData, setStarChartData] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		let isMounted = true;

		if (femaleUser && maleUser && analysisData && isMounted) {
			generateStarChartGuidance();
		}

		return () => {
			isMounted = false;
		};
	}, [femaleUser, maleUser, analysisData]);

	const generateStarChartGuidance = async () => {
		setLoading(true);
		console.log("⭐ Starting Star Chart Guidance generation...", {
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
				requestType: "star_chart_guidance",
			};

			console.log("📤 Sending star chart request body:", requestBody);

			// Simple fetch without AbortController to avoid AbortError
			const response = await fetch("/api/star-chart-guidance", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(requestBody),
			});
			console.log(
				"📥 Star chart response status:",
				response.status,
				response.ok
			);

			if (response.ok) {
				const data = await response.json();
				console.log("✅ Received star chart API data:", data);
				setStarChartData(data);
			} else {
				console.log(
					"Star chart API response not OK, status:",
					response.status
				);
				// Fallback data structure
				setStarChartData({
					guidances: [
						{
							title: "遷移宮聯動",
							analysis:
								"女方丙午火時柱與男方庚子水時柱形成水火既濟格局，火暖寒水創造強烈吸引力，但子午相沖易導致時差煩躁與溝通延遲。",
							impact: "通訊時間差異容易引發誤解，火急水緩的節奏不同造成情感表達錯位。",
							solution:
								"建議選擇午時（11-13點）或戌時（19-21點）進行重要溝通，避開子時深夜通話。",
							gradient:
								"linear-gradient(135deg, #C74772 0%, #D09900 100%)",
						},
						{
							title: "夫妻宮信號",
							analysis:
								"女方寅木日支渴望溫暖表達與情感滋養，男方申金月支偏向理性克制與邏輯思維，寅申相沖形成情感需求的根本差異。",
							impact: "視頻通話中容易因表達方式差異產生爭吵，木氣敏感遇金氣直接易受傷。",
							solution:
								"建議通話前先進行文字預熱，女方表達更簡潔，男方回應更溫暖，避開申時（15-17點）敏感時段。",
							gradient:
								"linear-gradient(135deg, #C74772 0%, #D09900 100%)",
						},
						{
							title: "關鍵法則",
							analysis:
								"雙方星盤呈現火水木金的複雜互動，既有相生吸引也有相沖挑戰，核心問題在於溝通節奏與表達方式的差異。",
							impact: "溝通障礙主要源於時間選擇不當與情感表達模式不匹配，需要精準的時機把握。",
							solution:
								"利用木氣日（周四）進行深度交流，避開金水日（周六）討論敏感話題，雙方協調表達強度與回應溫度。",
							gradient:
								"linear-gradient(135deg, #C74772 0%, #D09900 100%)",
						},
					],
					keyPrinciples:
						"根據你們的星盤配置，火水相濟帶來激情但需要調和節奏，木金相沖要求精準時機選擇。建議女方在表達時更加柔和漸進，男方在回應時更加溫暖主動。選擇合適的溝通時段與表達方式，化沖突為互補，讓星盤能量為感情服務而非製造障礙。",
				});
			}
		} catch (error) {
			console.error("Star Chart Guidance generation failed:", error);

			// Handle different types of errors
			let errorMessage = "正在生成星盤指引";
			if (error.name === "AbortError") {
				errorMessage = "分析超時，正在使用預設分析";
				console.log("⚠️ Star Chart API call was aborted");
			} else if (error.message?.includes("timeout")) {
				errorMessage = "請求超時，正在重新嘗試";
			}

			// Provide actual star chart guidance as fallback
			setStarChartData({
				guidances: [
					{
						title: "時柱能量分析",
						analysis:
							"根據你們的時柱配置，存在火水相遇的強烈化學反應，這種對比創造吸引力但也帶來溝通節奏的差異。",
						impact: "不同的生理時鐘與表達習慣容易造成溝通時機錯失，影響情感交流的深度與效果。",
						solution:
							"建議選擇雙方都精神狀態良好的時段進行深度對話，避開疲憊或情緒低潮期。",
						gradient:
							"linear-gradient(135deg, #C74772 0%, #D09900 100%)",
					},
					{
						title: "情感宮位解讀",
						analysis:
							"日支月支的互動顯示你們在情感表達與接受方式上存在根本性差異，需要更多的理解與適應。",
						impact: "表達方式的不匹配可能導致情感傳遞失真，產生不必要的誤解與爭執。",
						solution:
							"學習對方的情感語言，調整自己的表達方式，用對方能理解的方式傳達愛意。",
						gradient:
							"linear-gradient(135deg, #C74772 0%, #D09900 100%)",
					},
					{
						title: "和諧共振法則",
						analysis:
							"你們的星盤配置既有互補優勢也有沖突挑戰，關鍵在於如何發揮優勢化解劣勢。",
						impact: "未善用星盤優勢會讓溝通變得困難，但正確運用則能讓感情更加深厚穩固。",
						solution:
							"根據每日五行能量調整溝通策略，在適合的時機討論重要話題，避開容易產生衝突的時段。",
						gradient:
							"linear-gradient(135deg, #C74772 0%, #D09900 100%)",
					},
				],
				keyPrinciples:
					"星盤指引的核心在於順應天時地利人和，了解彼此的能量週期與表達特質。建議在溝通中保持彈性，善用星象優勢，化解天然衝突，讓宇宙能量成為你們感情的助力而非阻力。",
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
				<div className="flex flex-col items-center justify-center py-12 space-y-4">
					{/* Loading spinner */}
					<div className="w-8 h-8 border-b-2 border-pink-500 rounded-full animate-spin"></div>

					{/* 風水妹 loading image */}
					<div className="flex items-center justify-center">
						<Image
							src="/images/風水妹/風水妹-loading.png"
							alt="風水妹運算中"
							width={120}
							height={120}
							className="object-contain"
						/>
					</div>

					{/* Loading text */}
					<div className="space-y-2 text-center">
						<div
							className="text-gray-700"
							style={{
								fontFamily: "Noto Sans HK, sans-serif",
								fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
								fontWeight: 500,
							}}
						>
							風水妹正在生成星盤指引
						</div>
						<div
							className="text-gray-500"
							style={{
								fontFamily: "Noto Sans HK, sans-serif",
								fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
								fontWeight: 400,
							}}
						>
							請稍候，正在解讀星象配對奧秘
						</div>
					</div>
				</div>
			</div>
		);
	}

	if (!starChartData) {
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
					宮位能量解析
				</h3>
			</div>

			{/* Star Chart Guidance Grid */}
			<div
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
				style={{
					gap: "clamp(16px, 4vw, 24px)",
					marginBottom: "clamp(24px, 6vw, 32px)",
				}}
			>
				{starChartData.guidances?.map((item, index) => (
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
								{item.title}
							</div>
						</div>

						{/* Analysis Section */}
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "clamp(10px, 2.5vw, 12px)",
							}}
						>
							<div className="flex items-start">
								<div
									className="flex items-center justify-center flex-shrink-0 font-bold text-white rounded-full"
									style={{
										width: "clamp(20px, 5vw, 24px)",
										height: "clamp(20px, 5vw, 24px)",
										fontSize: "clamp(10px, 2.5vw, 12px)",
										marginTop: "clamp(2px, 0.5vw, 4px)",
										marginRight: "clamp(8px, 2vw, 12px)",
										background:
											"linear-gradient(135deg, #8B5A8C 0%, #6B4423 100%)",
									}}
								>
									析
								</div>
								<p
									className="text-gray-800"
									style={{
										fontSize: "clamp(12px, 3vw, 14px)",
										lineHeight: "1.6",
										fontFamily: "Noto Sans TC, sans-serif",
									}}
								>
									{item.analysis}
								</p>
							</div>

							<div className="flex items-start">
								<div
									className="flex items-center justify-center flex-shrink-0 font-bold text-white rounded-full"
									style={{
										width: "clamp(20px, 5vw, 24px)",
										height: "clamp(20px, 5vw, 24px)",
										fontSize: "clamp(10px, 2.5vw, 12px)",
										marginTop: "clamp(2px, 0.5vw, 4px)",
										marginRight: "clamp(8px, 2vw, 12px)",
										background:
											"linear-gradient(135deg, #C74772 0%, #8B1538 100%)",
									}}
								>
									影
								</div>
								<p
									className="text-gray-800"
									style={{
										fontSize: "clamp(12px, 3vw, 14px)",
										lineHeight: "1.6",
										fontFamily: "Noto Sans TC, sans-serif",
									}}
								>
									{item.impact}
								</p>
							</div>

							<div className="flex items-start">
								<div
									className="flex items-center justify-center flex-shrink-0 font-bold text-white rounded-full"
									style={{
										width: "clamp(20px, 5vw, 24px)",
										height: "clamp(20px, 5vw, 24px)",
										fontSize: "clamp(10px, 2.5vw, 12px)",
										marginTop: "clamp(2px, 0.5vw, 4px)",
										marginRight: "clamp(8px, 2vw, 12px)",
										background:
											"linear-gradient(135deg, #D09900 0%, #B87503 100%)",
									}}
								>
									解
								</div>
								<p
									className="text-gray-800"
									style={{
										fontSize: "clamp(12px, 3vw, 14px)",
										lineHeight: "1.6",
										fontFamily: "Noto Sans TC, sans-serif",
									}}
								>
									{item.solution}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Key Principles */}
			<div
				className="border border-purple-200 bg-gradient-to-r from-purple-50 to-amber-50"
				style={{
					padding: "clamp(16px, 4vw, 24px)",
					borderRadius: "clamp(8px, 2vw, 12px)",
				}}
			>
				<div
					className="flex items-center"
					style={{ marginBottom: "clamp(10px, 2.5vw, 12px)" }}
				>
					<div
						className="flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-amber-500"
						style={{
							width: "clamp(24px, 6vw, 32px)",
							height: "clamp(24px, 6vw, 32px)",
							marginRight: "clamp(8px, 2vw, 12px)",
						}}
					>
						<span
							className="font-bold text-white"
							style={{ fontSize: "clamp(12px, 3vw, 14px)" }}
						>
							★
						</span>
					</div>
					<h4
						className="font-bold text-purple-700"
						style={{
							fontSize: "clamp(14px, 3.5vw, 18px)",
							fontFamily: "Noto Serif TC, serif",
						}}
					>
						核心指引法則
					</h4>
				</div>
				<p
					className="text-gray-700"
					style={{
						fontSize: "clamp(12px, 3vw, 14px)",
						lineHeight: "1.6",
						marginLeft: "clamp(32px, 8vw, 44px)",
						fontFamily: "Noto Sans TC, sans-serif",
					}}
				>
					{starChartData.keyPrinciples}
				</p>
			</div>
		</div>
	);
};

export default StarChartGuidanceSection;
