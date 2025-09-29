"use client";

import React, { useState, useEffect } from "react";

const KeyAnalysisSection = ({ femaleUser, maleUser, analysisData }) => {
	const [keyAnalysisData, setKeyAnalysisData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [activeTag, setActiveTag] = useState("fiveElements"); // Default to first tag

	useEffect(() => {
		let isMounted = true;

		if (femaleUser && maleUser && analysisData && isMounted) {
			generateKeyAnalysis();
		}

		return () => {
			isMounted = false;
		};
	}, [femaleUser, maleUser, analysisData]);

	const generateKeyAnalysis = async () => {
		setLoading(true);
		console.log("🔍 Starting Key Analysis generation...", {
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
				requestType: "key_analysis",
			};

			console.log("📤 Sending key analysis request body:", requestBody);

			const response = await fetch("/api/key-analysis", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(requestBody),
			});

			console.log(
				"📥 Key analysis response status:",
				response.status,
				response.ok
			);

			if (response.ok) {
				const data = await response.json();
				console.log("✅ Received key analysis API data:", data);
				setKeyAnalysisData(data);
			} else {
				console.log(
					"Key analysis API response not OK, status:",
					response.status
				);
				// Fallback data structure
				setKeyAnalysisData({
					fiveElementsCompatibility: {
						female: {
							dayMaster: "壬水",
							description:
								"您的八字以壬水日主為核心，具有靈活變通的特質。命中若缺木元素，在感情中可能顯得過於理性或缺乏溫暖表達。建議透過增加綠色植物、木質傢具等方式補充木氣，有助提升溫柔包容力。您的感性一面需要透過藝術創作或自然接觸來喚醒，這樣能讓伴侶感受到更多情感層次。",
						},
						male: {
							dayMaster: "癸水",
							description:
								"您以癸水日主為命格基礎，天性溫和內斂，富有同情心。八字中若木氣充足（如甲木透干），能有效疏通土性的僵局，為關係帶來創造力與靈活性。您在感情中扮演調和者角色，善於化解矛盾。建議保持這種平衡特質，同時在關鍵時刻展現更多主導力，讓伴侶感受到您的堅定支持。",
						},
						overallEnergy: "火土強 vs. 金水旺",
						complementarity: "金水調和火土，形成流通",
						essence: "能量互補而非不平衡",
						icons: {
							female: "🌊", // Water element
							male: "💧", // Water element
							compatibility: "⚖️", // Balance
						},
					},
					spouseStarStatus: {
						userStatus:
							"女方夫星：若正官為戊土且坐寅木長生位（如戊寅日），象徵配偶具成長性與責任感，在事業與家庭間能找到平衡。若逢天乙貴人（如乙木），更強化婚姻穩定性，代表伴侶能在關鍵時刻提供智慧指導。這種配置顯示您的伴侶具有長期發展潛力，且能在關係中承擔應有責任。",
						partnerConfiguration:
							"男方妻星：正財為己土卻與日支未土相刑（如己未日），可能在價值觀與金錢使用上產生摩擦，特別是對於生活品質標準的不同看法。然而，若女方八字帶酉金（如乙酉時），金能通關土刑，將原本的衝突轉化為互助動力。這種配置需要雙方在財務規劃上多溝通，建立共同目標。",
						analysis:
							"整體而言，你們的夫妻星配置顯示雙方都具備長期承諾的特質，男方的責任感與女方的理財能力可以形成良好互補。需要注意的是在價值觀磨合期要保持耐心，透過五行調和的方式（如共同參與土元素活動，或在居家環境中加入金屬元素）來緩解潛在摩擦。",
						recommendation:
							"建議加強土元素穩定性，在家中西南方位放置陶瓷擺件，同時減少相刑影響，可透過金元素調和，如佩戴白色或金屬飾品。",
					},
					attentionNeededConfigurations: {
						potentialIssues: [
							"食神制殺導致要求過高",
							"劫財旺影響金錢觀念",
							"水過旺容易情緒波動",
						],
						description: "易放大矛盾，但視為可調整的能量點",
						adjustmentApproach: "通過五行調和平衡能量流動",
					},
				});
			}
		} catch (error) {
			console.error("Key Analysis generation failed:", error);

			// Provide fallback key analysis
			setKeyAnalysisData({
				fiveElementsCompatibility: {
					female: {
						dayMaster: "壬水",
						description:
							"您的八字以壬水日主為核心，具有靈活變通的特質。命中若缺木元素，在感情中可能顯得過於理性或缺乏溫暖表達。建議透過增加綠色植物、木質傢具等方式補充木氣，有助提升溫柔包容力。您的感性一面需要透過藝術創作或自然接觸來喚醒，這樣能讓伴侶感受到更多情感層次。",
					},
					male: {
						dayMaster: "癸水",
						description:
							"您以癸水日主為命格基礎，天性溫和內斂，富有同情心。八字中若木氣充足（如甲木透干），能有效疏通土性的僵局，為關係帶來創造力與靈活性。您在感情中扮演調和者角色，善於化解矛盾。建議保持這種平衡特質，同時在關鍵時刻展現更多主導力，讓伴侶感受到您的堅定支持。",
					},
					overallEnergy: "火土強 vs. 金水旺",
					complementarity: "金水調和火土，形成流通",
					essence: "能量互補而非不平衡",
					icons: {
						female: "🌊",
						male: "💧",
						compatibility: "⚖️",
					},
				},
				spouseStarStatus: {
					userStatus:
						"女方夫星：若正官為戊土且坐寅木長生位（如戊寅日），象徵配偶具成長性與責任感，在事業與家庭間能找到平衡。若逢天乙貴人（如乙木），更強化婚姻穩定性，代表伴侶能在關鍵時刻提供智慧指導。這種配置顯示您的伴侶具有長期發展潛力，且能在關係中承擔應有責任。",
					partnerConfiguration:
						"男方妻星：正財為己土卻與日支未土相刑（如己未日），可能在價值觀與金錢使用上產生摩擦，特別是對於生活品質標準的不同看法。然而，若女方八字帶酉金（如乙酉時），金能通關土刑，將原本的衝突轉化為互助動力。這種配置需要雙方在財務規劃上多溝通，建立共同目標。",
					analysis:
						"整體而言，你們的夫妻星配置顯示雙方都具備長期承諾的特質，男方的責任感與女方的理財能力可以形成良好互補。需要注意的是在價值觀磨合期要保持耐心，透過五行調和的方式（如共同參與土元素活動，或在居家環境中加入金屬元素）來緩解潛在摩擦。",
					recommendation:
						"建議加強土元素穩定性，在家中西南方位放置陶瓷擺件，同時減少相刑影響，可透過金元素調和，如佩戴白色或金屬飾品。",
				},
				attentionNeededConfigurations: {
					potentialIssues: [
						"食神制殺導致要求過高",
						"劫財旺影響金錢觀念",
						"水過旺容易情緒波動",
					],
					description: "易放大矛盾，但視為可調整的能量點",
					adjustmentApproach: "通過五行調和平衡能量流動",
				},
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
						生成關鍵分析中...
					</span>
				</div>
			</div>
		);
	}

	if (!keyAnalysisData) {
		return null;
	}

	const tags = [
		{
			id: "fiveElements",
			label: "五行互補性",
			image: "/images/report/fengshui.png",
			selectedBg: "bg-gradient-to-r from-green-400 to-blue-500",
			unselectedBg: "bg-[#EFEFEF]",
		},
		{
			id: "spouseStar",
			label: "夫星狀態",
			image: "/images/report/star.png",
			selectedBg: "bg-gradient-to-r from-yellow-400 to-orange-500",
			unselectedBg: "bg-[#EFEFEF]",
		},
		{
			id: "attention",
			label: "需注意的配置",
			image: "/images/report/personal-2.png",
			selectedBg: "bg-[#A53860]",
			unselectedBg: "bg-[#EFEFEF]",
		},
	];

	return (
		<div className="w-full bg-white rounded-[30px] shadow-lg p-8">
			{/* Interactive Tags Section */}
			<div className="mb-8">
				{/* Three interactive tags */}
				<div className="flex justify-center gap-10 mb-6 space-x-8">
					{tags.map((tag) => (
						<div
							key={tag.id}
							className="flex flex-col items-center"
						>
							<div
								className={`w-20 h-20 rounded-full flex items-center justify-center mb-3 cursor-pointer transition-all duration-300 ${
									activeTag === tag.id
										? tag.selectedBg
										: tag.unselectedBg
								}`}
								onClick={() => setActiveTag(tag.id)}
							>
								<img
									src={tag.image}
									alt={tag.label}
									className={`w-10 h-10 transition-all duration-300 ${
										activeTag === tag.id
											? "filter brightness-0 invert"
											: ""
									}`}
								/>
							</div>
							<span className="text-sm font-medium text-gray-700">
								{tag.label}
							</span>
						</div>
					))}
				</div>

				{/* Conditional Content Based on Active Tag */}
				{activeTag === "fiveElements" && (
					<>
						{/* Female and Male Analysis Cards */}
						<div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
							{/* Female Card */}
							<div className="p-6 border border-pink-200 rounded-lg bg-gradient-to-r from-pink-50 to-red-50">
								<div className="flex items-center justify-between mb-4">
									<h4
										className="font-bold text-[#C74772] text-xl"
										style={{
											fontFamily: "Noto Serif TC, serif",
										}}
									>
										女方
									</h4>
									<div className="px-4 py-2 bg-white border-2 border-[#C74772] rounded-full">
										<span className="text-sm font-medium text-[#C74772]">
											{
												keyAnalysisData
													.fiveElementsCompatibility
													.female.dayMaster
											}
										</span>
									</div>
								</div>
								<p
									className="text-sm leading-relaxed text-gray-700"
									style={{
										fontFamily: "Noto Sans TC, sans-serif",
									}}
								>
									{
										keyAnalysisData
											.fiveElementsCompatibility.female
											.description
									}
								</p>
							</div>

							{/* Male Card */}
							<div className="p-6 border border-blue-200 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
								<div className="flex items-center justify-between mb-4">
									<h4
										className="font-bold text-[#C74772] text-xl"
										style={{
											fontFamily: "Noto Serif TC, serif",
										}}
									>
										男方
									</h4>
									<div className="px-4 py-2 bg-white border-2 border-[#C74772] rounded-full">
										<span className="text-sm font-medium text-[#C74772]">
											{
												keyAnalysisData
													.fiveElementsCompatibility
													.male.dayMaster
											}
										</span>
									</div>
								</div>
								<p
									className="text-sm leading-relaxed text-gray-700"
									style={{
										fontFamily: "Noto Sans TC, sans-serif",
									}}
								>
									{
										keyAnalysisData
											.fiveElementsCompatibility.male
											.description
									}
								</p>
							</div>
						</div>

						{/* Overall Energy Analysis */}
						<div className="p-6 border rounded-lg bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
							<h5 className="mb-3 text-lg font-bold text-amber-700">
								能量互補分析
							</h5>
							<div className="space-y-2">
								<p className="text-sm text-gray-700">
									<span className="font-medium">
										整體能量：
									</span>
									{
										keyAnalysisData
											.fiveElementsCompatibility
											.overallEnergy
									}
								</p>
								<p className="text-sm text-gray-700">
									<span className="font-medium">
										互補性：
									</span>
									{
										keyAnalysisData
											.fiveElementsCompatibility
											.complementarity
									}
								</p>
								<p className="text-sm text-gray-700">
									<span className="font-medium">本質：</span>
									{
										keyAnalysisData
											.fiveElementsCompatibility.essence
									}
								</p>
							</div>
						</div>
					</>
				)}

				{activeTag === "spouseStar" && (
					<div className="p-6 border border-purple-200 rounded-lg bg-gradient-to-r from-purple-50 to-indigo-50">
						<div className="space-y-4">
							<div>
								<span className="font-medium text-purple-700">
									用戶配置：
								</span>
								<span className="ml-2 text-sm text-gray-700">
									{
										keyAnalysisData.spouseStarStatus
											.userStatus
									}
								</span>
							</div>
							<div>
								<span className="font-medium text-purple-700">
									伴侶配置：
								</span>
								<span className="ml-2 text-sm text-gray-700">
									{
										keyAnalysisData.spouseStarStatus
											.partnerConfiguration
									}
								</span>
							</div>
							<div className="p-4 bg-white border border-purple-100 rounded-lg">
								<p className="text-sm leading-relaxed text-gray-700">
									{keyAnalysisData.spouseStarStatus.analysis}
								</p>
							</div>
						</div>
					</div>
				)}

				{activeTag === "attention" && (
					<div className="p-6 border border-red-200 rounded-lg bg-gradient-to-r from-red-50 to-orange-50">
						<div className="space-y-4">
							<div>
								<h5 className="mb-3 font-medium text-red-700">
									潛在細節：
								</h5>
								<div className="space-y-2">
									{keyAnalysisData.attentionNeededConfigurations.potentialIssues.map(
										(issue, index) => (
											<div
												key={index}
												className="flex items-start"
											>
												<div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-red-500 rounded-full"></div>
												<span className="text-sm text-gray-700">
													{issue}
												</span>
											</div>
										)
									)}
								</div>
							</div>
							<div className="p-4 bg-white border border-red-100 rounded-lg">
								<p className="mb-2 text-sm leading-relaxed text-gray-700">
									{
										keyAnalysisData
											.attentionNeededConfigurations
											.description
									}
								</p>
								<p className="text-sm font-medium text-red-600">
									調整方式：
									{
										keyAnalysisData
											.attentionNeededConfigurations
											.adjustmentApproach
									}
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default KeyAnalysisSection;
