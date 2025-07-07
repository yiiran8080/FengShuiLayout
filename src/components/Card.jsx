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
			className={`
                h-[200px] sm:h-[240px] lg:h-[272px] 
                aspect-square lg:aspect-auto
                rounded-[16px] sm:rounded-[20px] lg:rounded-[22px] 
                bg-[#fff] flex flex-col items-center justify-center lg:justify-start 
                pt-[8px] sm:pt-[10px] lg:pt-[13.1px] 
                px-2 sm:px-3 lg:px-4 
                pb-[12px] sm:pb-[18px] lg:pb-[24px] 
                box-border relative text-center 
                text-[14px] sm:text-[18px] lg:text-[22px] 
                text-[#1d1d1d] font-[Outfit] 
                shadow-[2px_2px_4px_rgba(0,0,0,0.15)] sm:shadow-[3px_3px_4px_rgba(0,0,0,0.2)] lg:shadow-[4px_4px_4px_rgba(0,0,0,0.25)]
                ${className}
            `}
			style={cardStyle}
		>
			<div className="w-[254px] relative rounded-[22px] bg-[#fff] h-[272px] hidden z-[0]" />
			<Image
				className="
                    h-[120px] w-[140px] 
                    sm:h-[140px] sm:w-[160px] 
                    lg:h-[180px] lg:w-[220px] 
                    relative object-cover z-[1] 
                    mb-1 sm:mb-2
                "
				loading="lazy"
				width={220}
				height={180}
				sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, 220px"
				alt=""
				src={pict}
			/>
			<div
				className="w-full capitalize inline-block z-[1] 
                    mt-1 sm:mt-2 lg:mt-4
                    text-sm sm:text-sm lg:text-lg
                    leading-tight sm:leading-normal
                "
				style={divStyle}
			>
				<p className="px-1 m-0 font-medium">{subtitle}</p>
			</div>
		</div>
	);
};

export default Card;
