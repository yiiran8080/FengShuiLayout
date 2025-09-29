"use client";

export default function LoadingSpinner({ size = "md" }) {
	const sizeClasses = {
		sm: "w-4 h-4",
		md: "w-8 h-8",
		lg: "w-12 h-12",
		xl: "w-16 h-16",
	};

	return (
		<div className="flex items-center justify-center">
			<div className={`${sizeClasses[size]} animate-spin`}>
				<div className="w-full h-full border-4 border-amber-200 border-t-amber-600 rounded-full"></div>
			</div>
		</div>
	);
}
