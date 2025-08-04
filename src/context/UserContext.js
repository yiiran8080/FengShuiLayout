"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
	const [userData, setUserData] = useState(null);
	const [isInitialized, setIsInitialized] = useState(false);

	// Load saved user data from localStorage
	useEffect(() => {
		const loadSavedUserData = () => {
			try {
				console.log("UserContext: Attempting to load user data...");

				// FIRST: Check sessionStorage for fresh data (from form submission)
				const sessionData =
					sessionStorage.getItem("freeReportUserData");
				console.log(
					"UserContext: Checking sessionStorage for freeReportUserData:",
					sessionData
				);

				if (sessionData) {
					const sessionUserData = JSON.parse(sessionData);
					const userData = {
						...sessionUserData,
						userId: `free_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
						isFreeUser: true,
					};
					setUserData(userData);
					console.log(
						"UserContext: ✅ Loaded FRESH userData from sessionStorage:",
						userData
					);
					return; // Exit early - use fresh data
				}

				// SECOND: Fall back to localStorage if no fresh sessionStorage data
				const savedFormData = localStorage.getItem("uploadPicFormData");
				console.log(
					"UserContext: savedFormData from localStorage:",
					savedFormData
				);

				if (savedFormData) {
					const formData = JSON.parse(savedFormData);
					console.log("UserContext: Parsed form data:", formData);

					const userData = {
						gender: formData.gender || "female",
						birthDateTime:
							formData.year &&
							formData.month &&
							formData.day &&
							formData.hour
								? `${formData.year}-${formData.month.padStart(2, "0")}-${formData.day.padStart(2, "0")}T${formData.hour.padStart(2, "0")}:00`
								: new Date().toISOString(),
						userId: `free_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
						isFreeUser: true,
					};
					setUserData(userData);
					console.log(
						"UserContext: ⚠️ Loaded CACHED userData from localStorage:",
						userData
					);
				} else {
					console.log(
						"UserContext: No saved data found in either storage"
					);
				}
			} catch (error) {
				console.error("UserContext: Error loading user data:", error);
			}
			setIsInitialized(true);
			console.log("UserContext: Initialization complete");
		};

		loadSavedUserData();
	}, []);

	// Save user data to localStorage when it changes
	const updateUserData = (newUserData) => {
		console.log("UserContext: Updating userData:", newUserData);
		setUserData(newUserData);

		// Optionally save back to localStorage
		if (newUserData) {
			// Clear old data first
			localStorage.removeItem("uploadPicFormData");

			const formData = {
				gender: newUserData.gender,
				year: new Date(newUserData.birthDateTime)
					.getFullYear()
					.toString(),
				month: (
					new Date(newUserData.birthDateTime).getMonth() + 1
				).toString(),
				day: new Date(newUserData.birthDateTime).getDate().toString(),
				hour: new Date(newUserData.birthDateTime).getHours().toString(),
			};
			localStorage.setItem("uploadPicFormData", JSON.stringify(formData));
			console.log(
				"UserContext: Saved formData to localStorage:",
				formData
			);
		}
	};

	// Add this function to force refresh UserContext data
	const refreshUserData = () => {
		// FIRST: Check sessionStorage for fresh data (same priority as initial load)
		const sessionData = sessionStorage.getItem("freeReportUserData");
		console.log(
			"UserContext: forceRefresh - Checking sessionStorage:",
			sessionData
		);

		if (sessionData) {
			const sessionUserData = JSON.parse(sessionData);
			const userData = {
				...sessionUserData,
				userId: `free_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
				isFreeUser: true,
			};
			setUserData(userData);
			console.log(
				"UserContext: ✅ forceRefresh - Loaded FRESH userData from sessionStorage:",
				userData
			);
			return; // Exit early - use fresh data
		}

		// SECOND: Fall back to localStorage only if no sessionStorage data
		const savedFormData = localStorage.getItem("uploadPicFormData");
		if (savedFormData) {
			const formData = JSON.parse(savedFormData);
			const userData = {
				gender: formData.gender || "female",
				birthDateTime:
					formData.year &&
					formData.month &&
					formData.day &&
					formData.hour
						? `${formData.year}-${formData.month.padStart(2, "0")}-${formData.day.padStart(2, "0")}T${formData.hour.padStart(2, "0")}:00`
						: new Date().toISOString(),
				userId: `free_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
				isFreeUser: true,
			};
			setUserData(userData);
			console.log(
				"UserContext: ⚠️ forceRefresh - Loaded CACHED userData from localStorage:",
				userData
			);
		}
	};

	// Add a function to manually refresh context (for same-tab updates)
	const forceRefresh = () => {
		console.log("UserContext: Force refreshing data...");
		refreshUserData();
	};

	// Add a storage event listener to refresh when localStorage changes
	useEffect(() => {
		const handleStorageChange = (e) => {
			if (e.key === "uploadPicFormData") {
				console.log(
					"UserContext: localStorage changed, refreshing data..."
				);
				refreshUserData();
			}
		};

		window.addEventListener("storage", handleStorageChange);
		return () => window.removeEventListener("storage", handleStorageChange);
	}, []);

	return (
		<UserContext.Provider
			value={{
				userData,
				setUserData: updateUserData,
				isInitialized,
				forceRefresh, // Add this
			}}
		>
			{children}
		</UserContext.Provider>
	);
}

export function useUser() {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return context;
}
