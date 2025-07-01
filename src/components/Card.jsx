"use client";
import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const Card = ({ className = "", cardWidth, divTop, pict, title, subtitle }) => {
	const cardStyle = useMemo(() => {
		return {
			width: cardWidth,
		};
	}, [cardWidth]);

	const divStyle = useMemo(() => {
		return {
			top: divTop,
		};
	}, [divTop]);

	return (
		<div
			className={`h-[272px] rounded-[22px] bg-[#fff] flex flex-col items-center justify-start pt-[13.1px] px-4 pb-[24px] box-border relative text-center text-[22px] text-[#1d1d1d] font-[Outfit] shadow-[4px_4px_4px_rgba(0,0,0,0.25)]`}
			style={cardStyle}
		>
			<div className="w-[254px] relative rounded-[22px] bg-[#fff] h-[272px] hidden z-[0]" />
			<Image
				className="h-[180px] w-[220px] relative object-cover z-[1] mb-2"
				loading="lazy"
				width={220}
				height={180}
				sizes="100vw"
				alt=""
				src={pict}
			/>
			<div
				className="w-full capitalize inline-block z-[1] mt-4"
				style={divStyle}
			>
				<p className="m-0 text-lg font-medium">{subtitle}</p>
			</div>
		</div>
	);
};

export default Card;
