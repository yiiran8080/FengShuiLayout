"use client";

import React, { createContext, useContext, useState } from "react";

const ImageContext = createContext();

export function ImageProvider({ children }) {
	const [preview, setPreview] = useState(null);
	const [file, setFile] = useState(null);

	return (
		<ImageContext.Provider value={{ preview, setPreview, file, setFile }}>
			{children}
		</ImageContext.Provider>
	);
}

export function useImage() {
	return useContext(ImageContext);
}
