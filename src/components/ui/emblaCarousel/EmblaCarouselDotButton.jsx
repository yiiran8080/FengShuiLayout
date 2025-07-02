"use client";
import React, { useCallback, useEffect, useState } from "react";

export const useDotButton = (emblaApi) => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState([]);

	const onDotButtonClick = useCallback(
		(index) => {
			if (!emblaApi) return;
			emblaApi.scrollTo(index);
		},
		[emblaApi]
	);

	const onInit = useCallback((emblaApi) => {
		setScrollSnaps(emblaApi.scrollSnapList());
	}, []);

	const onSelect = useCallback((emblaApi) => {
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		onInit(emblaApi);
		onSelect(emblaApi);
		emblaApi
			.on("reInit", onInit)
			.on("reInit", onSelect)
			.on("select", onSelect);
	}, [emblaApi, onInit, onSelect]);

	return {
		selectedIndex,
		scrollSnaps,
		onDotButtonClick,
	};
};

export const DotButton = ({ selected, ...restProps }) => (
	<button
		type="button"
		className={`relative w-5 h-5 rounded-full border-2 border-[#D7D8D7] flex items-center justify-center mx-1 transition-colors duration-200
      ${selected ? "border-[#19ad6b] bg-[#D7D8D7]" : "bg-white"}
    `}
		{...restProps}
	>
		{/* Centered, vivid green dot with shadow */}
		<span
			className={`transition-all duration-200 rounded-full
        ${
			selected
				? "w-3 h-3 bg-[#20B580] shadow-lg shadow-[#19ad6b]/60"
				: "w-2 h-2 bg-[#20B580]"
		}
      `}
		/>
	</button>
);
