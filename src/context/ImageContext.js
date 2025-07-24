"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const ImageContext = createContext();

// Helper function to convert base64 back to file
const base64ToFile = (base64, filename, type) => {
	const arr = base64.split(",");
	const mime = arr[0].match(/:(.*?);/)[1];
	const bstr = atob(arr[1]);
	let n = bstr.length;
	const u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new File([u8arr], filename, { type: mime });
};

export function ImageProvider({ children }) {
	const [preview, setPreview] = useState(null);
	const [file, setFile] = useState(null);
	const [isInitialized, setIsInitialized] = useState(false);

	// Load saved image data on initialization
	useEffect(() => {
		const loadSavedImageData = async () => {
			if (isInitialized) return;

			try {
				const savedFileData =
					sessionStorage.getItem("uploadPicFileData");
				if (savedFileData) {
					const fileData = JSON.parse(savedFileData);

					// Check if file data is not too old (1 hour expiry)
					const isDataFresh =
						!fileData.timestamp ||
						Date.now() - fileData.timestamp < 60 * 60 * 1000;

					if (isDataFresh) {
						const restoredFile = base64ToFile(
							fileData.base64,
							fileData.name,
							fileData.type
						);
						const previewUrl = URL.createObjectURL(restoredFile);

						setFile(restoredFile);
						setPreview(previewUrl);

						console.log(
							"ImageContext: File restored from sessionStorage:",
							fileData.name
						);
						console.log(
							"ImageContext: Preview URL created:",
							previewUrl
						);
					} else {
						// Clear old data
						sessionStorage.removeItem("uploadPicFileData");
						console.log(
							"ImageContext: Cleared old file data from sessionStorage"
						);
					}
				}
			} catch (error) {
				console.error(
					"ImageContext: Error loading saved image data:",
					error
				);
				// Clear corrupted data
				sessionStorage.removeItem("uploadPicFileData");
			}

			setIsInitialized(true);
		};

		loadSavedImageData();

		// Cleanup blob URLs on unmount
		return () => {
			if (preview && preview.startsWith("blob:")) {
				URL.revokeObjectURL(preview);
			}
		};
	}, []);

	// Custom setPreview that cleans up old blob URLs
	const setPreviewWithCleanup = (newPreview) => {
		if (preview && preview.startsWith("blob:")) {
			URL.revokeObjectURL(preview);
		}
		setPreview(newPreview);
	};

	// Custom setFile that also updates preview if needed
	const setFileWithPreview = (newFile) => {
		setFile(newFile);
		// If setting file to null, also clear preview
		if (!newFile && preview) {
			setPreviewWithCleanup(null);
		}
	};

	return (
		<ImageContext.Provider
			value={{
				preview,
				setPreview: setPreviewWithCleanup,
				file,
				setFile: setFileWithPreview,
				isInitialized,
			}}
		>
			{children}
		</ImageContext.Provider>
	);
}

export function useImage() {
	return useContext(ImageContext);
}
