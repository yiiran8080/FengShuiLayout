"use client";

import { memo } from "react";

const LoadingSpinner = memo(function LoadingSpinner({
	size = "md",
	text = "載入中...",
	className = "",
}) {
	const sizeClasses = {
		sm: "w-4 h-4",
		md: "w-8 h-8",
		lg: "w-12 h-12",
		xl: "w-16 h-16",
	};

	return (
		<div
			className={`flex flex-col items-center justify-center p-8 ${className}`}
		>
			<div
				className={`${sizeClasses[size]} border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin`}
			/>
			{text && <p className="mt-4 text-sm text-gray-600">{text}</p>}
		</div>
	);
});

export default LoadingSpinner;
