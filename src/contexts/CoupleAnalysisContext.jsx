"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CoupleAnalysisContext = createContext();

export const useCoupleAnalysis = () => {
	const context = useContext(CoupleAnalysisContext);
	if (!context) {
		throw new Error(
			"useCoupleAnalysis must be used within a CoupleAnalysisProvider"
		);
	}
	return context;
};

export const CoupleAnalysisProvider = ({
	children,
	user1,
	user2,
	specificProblem,
}) => {
	const [analysisData, setAnalysisData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// Cache for component-specific analysis to prevent re-loading
	const [annualAnalysisCache, setAnnualAnalysisCache] = useState(null);
	const [godAnalysisCache, setGodAnalysisCache] = useState(null);
	const [individualAnalysisCache, setIndividualAnalysisCache] = useState({});
	const [coupleMingJuCache, setCoupleMingJuCache] = useState(null);
	const [coupleSeasonCache, setCoupleSeasonCache] = useState(null);
	const [coupleCoreSuggestionCache, setCoupleCoreSuggestionCache] =
		useState(null);

	useEffect(() => {
		const fetchAnalysis = async () => {
			if (!user1?.birthDateTime || !user2?.birthDateTime) {
				setLoading(false);
				return;
			}

			try {
				setLoading(true);
				console.log("🔮 Fetching comprehensive couple analysis...");

				const response = await fetch("/api/couple-analysis", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						birthday: user1.birthDateTime,
						birthday2: user2.birthDateTime,
						gender: user1.gender || "male",
						gender2: user2.gender || "female",
						problem: specificProblem || "感情關係和諧改善建議",
						sessionId: `couple-analysis-${Date.now()}`,
					}),
				});

				if (!response.ok) {
					throw new Error(
						`Analysis request failed: ${response.status}`
					);
				}

				const result = await response.json();

				if (result.success && result.data) {
					console.log("✅ Couple analysis completed successfully");
					setAnalysisData(result.data);
					setError(null);
				} else {
					throw new Error(result.error || "Analysis failed");
				}
			} catch (err) {
				console.error("❌ Failed to fetch couple analysis:", err);
				setError(err.message);
				setAnalysisData(null);
			} finally {
				setLoading(false);
			}
		};

		fetchAnalysis();
	}, [user1, user2, specificProblem]);

	const value = {
		analysisData,
		loading,
		error,
		// Cache management
		annualAnalysisCache,
		setAnnualAnalysisCache,
		godAnalysisCache,
		setGodAnalysisCache,
		individualAnalysisCache,
		setIndividualAnalysisCache,
		coupleMingJuCache,
		setCoupleMingJuCache,
		coupleSeasonCache,
		setCoupleSeasonCache,
		coupleCoreSuggestionCache,
		setCoupleCoreSuggestionCache,
		refetch: () => {
			setAnalysisData(null);
			setError(null);
			// Clear all caches when refetching
			setAnnualAnalysisCache(null);
			setGodAnalysisCache(null);
			setIndividualAnalysisCache({});
			setCoupleMingJuCache(null);
			setCoupleSeasonCache(null);
			setCoupleCoreSuggestionCache(null);
			// Re-trigger the useEffect
			setLoading(true);
		},
	};

	return (
		<CoupleAnalysisContext.Provider value={value}>
			{children}
		</CoupleAnalysisContext.Provider>
	);
};
