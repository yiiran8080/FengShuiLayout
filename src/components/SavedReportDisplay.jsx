"use client";

import React from "react";

const SavedReportDisplay = ({ savedContent, userInputs }) => {
	if (!savedContent) {
		return <div>No saved content available</div>;
	}

	const renderSection = (title, content) => {
		if (!content) return null;

		return (
			<div className="mb-6 p-6 bg-white rounded-lg shadow-md">
				<h3 className="text-xl font-semibold mb-4 text-gray-800">
					{title}
				</h3>
				<div className="text-gray-700 whitespace-pre-wrap">
					{typeof content === "string"
						? content
						: JSON.stringify(content, null, 2)}
				</div>
			</div>
		);
	};

	const renderAnalysisObject = (title, analysisObj) => {
		if (!analysisObj) return null;

		return (
			<div className="mb-6 p-6 bg-white rounded-lg shadow-md">
				<h3 className="text-xl font-semibold mb-4 text-gray-800">
					{title}
				</h3>
				<div className="space-y-4">
					{Object.entries(analysisObj).map(([key, value]) => (
						<div key={key}>
							<h4 className="font-medium text-gray-800 mb-2">
								{key}:
							</h4>
							<div className="text-gray-700 whitespace-pre-wrap ml-4">
								{typeof value === "string"
									? value
									: JSON.stringify(value, null, 2)}
							</div>
						</div>
					))}
				</div>
			</div>
		);
	};

	return (
		<div className="max-w-4xl mx-auto p-6">
			<div className="mb-8">
				<h1 className="text-3xl font-bold text-gray-800 mb-4">
					已保存的風水報告
				</h1>
				<div className="bg-blue-50 p-4 rounded-lg">
					<h2 className="font-semibold text-blue-800 mb-2">
						報告基本信息：
					</h2>
					<div className="text-blue-700">
						<p>
							<strong>生日：</strong>
							{userInputs?.birthday}
						</p>
						<p>
							<strong>性別：</strong>
							{userInputs?.gender}
						</p>
						<p>
							<strong>關注領域：</strong>
							{userInputs?.concern}
						</p>
						<p>
							<strong>具體問題：</strong>
							{userInputs?.problem}
						</p>
						{userInputs?.partnerBirthday && (
							<p>
								<strong>伴侶生日：</strong>
								{userInputs.partnerBirthday}
							</p>
						)}
					</div>
				</div>
			</div>

			{/* Basic Analysis */}
			{renderAnalysisObject("基礎分析", savedContent.basicAnalysis)}

			{/* Five Element Analysis */}
			{renderSection("五行分析", savedContent.fiveElementAnalysis)}

			{/* Zodiac Analysis */}
			{renderSection("生肖分析", savedContent.zodiacAnalysis)}

			{/* Liu Nian Keyword Analysis */}
			{renderSection(
				"流年關鍵詞分析",
				savedContent.liuNianKeyWordAnalysis
			)}

			{/* Ming Ju Analysis */}
			{renderSection("命局分析", savedContent.mingJuAnalysis)}

			{/* Gan Zhi Analysis */}
			{renderSection("干支分析", savedContent.ganZhiAnalysis)}

			{/* Ji Xiong Analysis */}
			{renderSection("吉凶分析", savedContent.jiXiongAnalysis)}

			{/* Season Analysis */}
			{renderSection("季節分析", savedContent.seasonAnalysis)}

			{/* Core Suggestion Analysis */}
			{renderSection("核心建議", savedContent.coreSuggestionAnalysis)}

			{/* Specific Suggestion Analysis */}
			{renderSection("具體建議", savedContent.specificSuggestionAnalysis)}

			{/* Couple Analysis (if available) */}
			{savedContent.coupleAnalysis &&
				renderSection("配對分析", savedContent.coupleAnalysis)}
		</div>
	);
};

export default SavedReportDisplay;
