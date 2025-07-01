"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function () {
	const t = useTranslations("home.tips");
	const [active, setActive] = useState(null);
	const [tipRotations, setTipRotations] = useState({});
	const tips = Array(6).fill(0); // Assuming you have 6 tips as in the original code
	const angles = [0, 0, -6, -10, 0, -16];

	useEffect(() => {
		const initialRotations = {};
		tips.forEach((tip, idx) => {
			// You can use random or set specific angles, e.g. [-15, -7, 0, 7, 15, 20]
			initialRotations[idx] = Math.floor(Math.random() * 40) - 20; // -20 to 20 deg
		});
		setTipRotations(initialRotations);
	}, []);

	const handleClick = (e, index) => {
		e.stopPropagation();
		setActive(index);
	};
	return (
		<section
			className="relative flex flex-col items-center pl-10 overflow-auto bg-center bg-cover md:py-20 py-15"
			style={{ backgroundImage: "url('/images/hero/tipsbg.png')" }}
			onClick={() => setActive(null)}
		>
			<div>
				<div className="flex items-end justify-center border-b-8 border-[#7EAAAB] rounded-sm pb-0 px-12">
					{active == 0 ? (
						<Image
							priority={true}
							className="mr-1 md:mr-2"
							width="224"
							height="400"
							src="https://d3cbeloe0vn1bb.cloudfront.net/images/tips/1.png"
							alt=""
						/>
					) : (
						<div
							style={{
								writingMode: "vertical-lr",
								transform: `rotate(${angles[0]}deg)`,
							}}
							className={`relativemd:h-100 h-100 bg-[rgb(220,196,184)] leading-8 tracking-widest
                   flex items-center justify-center mx-0 text-center text-white md:mr-0 mr-0
                   cursor-pointer md:w-20 w-20 md:text-2xl text-xs
                   `}
							onClick={(e) => handleClick(e, 0)}
						>
							<span>{t("tip1")}</span>
						</div>
					)}
					{active == 1 ? (
						<Image
							priority={true}
							className="mr-1 md:mr-2"
							width="224"
							height="400"
							src="https://d3cbeloe0vn1bb.cloudfront.net/images/tips/2.png"
							alt=""
						/>
					) : (
						<div
							style={{
								writingMode: "vertical-lr",
								transform: `rotate(${angles[1]}deg)`,
							}}
							className={`relative md:h-110 h-100 bg-[rgb(142,180,166)] leading-8 tracking-widest
                   flex items-center justify-center mx-0 text-center text-white  md:mr-5 mr-2
                   cursor-pointer md:w-40 w-20 md:text-2xl text-xs
                   `}
							onClick={(e) => handleClick(e, 1)}
						>
							<span>{t("tip2")}</span>
						</div>
					)}
					{active == 2 ? (
						<Image
							priority={true}
							className="mr-1 md:mr-2"
							width="224"
							height="400"
							src="https://d3cbeloe0vn1bb.cloudfront.net/images/tips/3.png"
							alt=""
						/>
					) : (
						<div
							style={{
								writingMode: "vertical-lr",
								transform: `rotate(${angles[2]}deg)`,
							}}
							className={`relative md:h-100 h-100 bg-[#40807D] leading-8 tracking-widest
                   flex items-center justify-center mx-0 text-center text-white md:mr-4 mr-2
                   cursor-pointer md:w-20 w-10 md:text-2xl text-xs
                   `}
							onClick={(e) => handleClick(e, 2)}
						>
							<span>{t("tip3")}</span>
						</div>
					)}
					{active == 3 ? (
						<Image
							priority={true}
							className="mr-1 md:mr-2"
							width="224"
							height="400"
							src="https://d3cbeloe0vn1bb.cloudfront.net/images/tips/4.png"
							alt=""
						/>
					) : (
						<div
							style={{
								writingMode: "vertical-lr",
								transform: `rotate(${angles[3]}deg)`,
							}}
							className={`relative md:h-100 h-100 bg-[#407EA5] leading-8 tracking-widest
                   flex items-center justify-center mx-0 text-center text-white md:mr-9 mr-1
                   cursor-pointer md:w-20 w-10 md:text-2xl text-xs
                   `}
							onClick={(e) => handleClick(e, 3)}
						>
							<span>{t("tip4")}</span>
						</div>
					)}
					{active == 4 ? (
						<Image
							priority={true}
							className="mr-1 md:mr-2"
							width="224"
							height="400"
							src="https://d3cbeloe0vn1bb.cloudfront.net/images/tips/5.png"
							alt=""
						/>
					) : (
						<div
							style={{
								writingMode: "vertical-lr",
								transform: `rotate(${angles[4]}deg)`,
							}}
							className={`relative md:h-100 h-100 bg-[#7A6B9B] leading-8 tracking-widest
                   flex items-center justify-center mx-0 text-center text-white  md:mr-13 mr-1
                   cursor-pointer md:w-20 w-10 md:text-2xl text-xs
                   `}
							onClick={(e) => handleClick(e, 4)}
						>
							<span>{t("tip5")}</span>
						</div>
					)}
					{active == 5 ? (
						<Image
							priority={true}
							className="mr-1 md:mr-2"
							width="224"
							height="400"
							src="https://d3cbeloe0vn1bb.cloudfront.net/images/tips/6.png"
							alt=""
						/>
					) : (
						<div
							style={{
								writingMode: "vertical-lr",
								transform: `rotate(${angles[5]}deg)`,
							}}
							className={`relative md:h-100 h-100 bg-[#D782A3] leading-8 tracking-widest
                   flex items-center justify-center mx-0 text-center text-white rounded-l-none rounded-r-xl md:mr-1 mr-1
                   cursor-pointer md:w-20 w-10 md:text-2xl text-xs
                   `}
							onClick={(e) => handleClick(e, 5)}
						>
							<span>{t("tip6")}</span>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
