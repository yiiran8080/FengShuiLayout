// import React from 'react'
// import ReactDOM from 'react-dom/client'
import EmblaCarousel from "./EmblaCarousel";
import { useTranslations } from "next-intl";
import Image from "next/image";
import "./css/embla.css";

const slideData = [
	{
		img: "/images/hero/slide1.jpg",
		author: "Amanda",
		profileKey: "p1",
		commentKey: "c1",
	},
	{
		img: "/images/hero/slide2.jpg",
		author: "Mr & Mrs Cheng",
		profileKey: "p2",
		commentKey: "c2",
	},
	{
		img: "/images/hero/slide3.jpg",
		author: "Patrick & Sharon",
		profileKey: "p3",
		commentKey: "c3",
	},
	{
		img: "/images/hero/slide4.jpg",
		author: "Steven",
		profileKey: "p4",
		commentKey: "c4",
	},
	{
		img: "/images/hero/slide5.jpg",
		author: "Mr. & Mrs Wong",
		profileKey: "p5",
		commentKey: "c5",
	},
];

export default function CommentsCarousel() {
	const t = useTranslations("home.comments");

	const ratings = [4.9, 5.0, 4.8, 4.8, 4.9];

	const slides = slideData.map((slide, i) => (
		<div
			key={i}
			className="relative flex items-center justify-center w-full lg:w-auto h-74 lg:h-165"
		>
			{/* Background image */}
			<img
				src={slide.img}
				alt=""
				className="absolute top-0 left-0 object-cover w-full lg:w-120 lg:h-165 h-80"
				style={{ zIndex: 0 }}
			/>
			{/* Card content */}
			<div className="relative z-10 flex flex-col w-auto px-3 py-4 bg-white/80 lg:w-112 h-80 rounded-2xl lg:px-6 lg:py-8">
				<p className="lg:text-xl text-[#111] font-medium mt-1 self-center lg:self-start">
					{slide.author}
				</p>
				<span className="text-[#888888] self-center lg:self-start text-xs lg:text-base">
					{t(slide.profileKey)}
				</span>
				<div className="flex items-center self-center mt-3 lg:self-start">
					<div className="flex">
						{Array.from({ length: 5 }).map((_, idx) => (
							<div
								key={idx}
								className="relative w-3 h-3 lg:w-5 lg:h-5"
							>
								<Image
									src="/images/hero/vector.png"
									fill
									alt=""
								/>
							</div>
						))}
					</div>
					<span className="text-[#111] ml-2 text-xs lg:text-base">
						({ratings[i].toFixed(1)})
					</span>
				</div>
				<p className="text-[#888888] leading-6 mt-3 text-sm lg:text-base">
					{t(slide.commentKey)}
				</p>
			</div>
		</div>
	));

	// The wrapper below ensures the dots are vertically centered next to the carousel
	return (
		<div>
			<EmblaCarousel slides={slides} options={{}} />
		</div>
	);
}
