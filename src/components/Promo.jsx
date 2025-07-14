import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Promo() {
	const t = useTranslations("promo");

	return (
		<div
			className="
                w-full
                flex flex-col lg:flex-row
                items-center lg:items-center
                justify-center lg:justify-between
                bg-[#f5faf7]
                px-4 py-6
                sm:px-6 sm:py-8
                md:px-8 md:py-10
                lg:px-12 lg:py-12
                xl:px-16 xl:py-16
                2xl:px-20 2xl:py-20
                gap-6 lg:gap-12 xl:gap-16
            "
			style={{
				fontFamily: '"Noto Serif TC", serif',
			}}
		>
			{/* Left Content Section */}
			<section className="flex flex-col items-center justify-center flex-1 max-w-3xl text-center lg:items-start lg:text-left">
				<div className="flex flex-col items-center justify-center w-full gap-3 lg:items-start sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7">
					{/* Title and Description */}
					<div className="flex flex-col items-center justify-start w-full gap-2 lg:items-start sm:gap-3 md:gap-4 lg:gap-5">
						<div className="flex flex-col items-center justify-start w-full gap-1 lg:items-start sm:gap-2 md:gap-3 lg:gap-4">
							<h1
								className="m-0 relative tracking-[-0.1px] sm:tracking-[-0.2px] md:tracking-[-0.3px] lg:tracking-[-0.4px] leading-tight font-[500] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl max-w-full"
								style={{
									fontFamily: '"Noto Serif TC", serif',
									color: "#073E31",
								}}
							>
								{t("title")}
							</h1>
							<h2
								className="m-0 relative leading-relaxed font-[400] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl max-w-3xl opacity-90"
								style={{
									fontFamily: '"Noto Serif TC", serif',
									color: "#088C6E",
								}}
							>
								{t("description1")}
							</h2>
							<h2
								className="m-0 relative leading-relaxed font-[400] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl max-w-3xl opacity-90"
								style={{
									fontFamily: '"Noto Serif TC", serif',
									color: "#088C6E",
								}}
							>
								{t("description2")}
							</h2>
						</div>
					</div>
				</div>
			</section>

			{/* Right Button Section */}
			<div className="flex flex-col items-center justify-center flex-shrink-0 lg:items-end">
				<Link
					href="/price"
					className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[400px]"
				>
					<button
						className="
                            cursor-pointer border-none p-0 bg-transparent 
                            w-full 
                            h-[40px] sm:h-[45px] md:h-[50px] lg:h-[55px] xl:h-[60px] 2xl:h-[65px]
                            flex flex-row items-center justify-center 
                            relative 
                            hover:scale-105 
                            transition-all duration-300 ease-in-out
                            group
                        "
						style={{
							filter: "drop-shadow(0 4px 15px rgba(0, 0, 0, 0.2))",
							fontFamily: '"Noto Serif TC", serif',
						}}
					>
						{/* Shadow/Blur Effect */}
						<div
							className="
                                h-[35px] sm:h-[40px] md:h-[45px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                                w-full 
                                absolute 
                                right-0 bottom-[-6px] sm:bottom-[-7px] md:bottom-[-8px] left-0 
                                filter blur-[8px] sm:blur-[9px] md:blur-[10px] 
                                rounded-[20px] sm:rounded-[22px] md:rounded-[25px] 
                                bg-[rgba(49,129,97,0.3)]
                                group-hover:bg-[rgba(49,129,97,0.4)]
                                transition-all duration-300
                            "
						/>

						{/* Main Button */}
						<div
							className="
                                rounded-[15px] sm:rounded-[18px] md:rounded-[20px] 
                                bg-gradient-to-r from-[#318161] to-[#318177] 
                                flex flex-row items-center justify-center 
                                py-2 sm:py-3 md:py-3 lg:py-4 xl:py-4 2xl:py-5
                                px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14
                                z-[1] w-full 
                                hover:from-[#2a6e56] hover:to-[#2a6e62] 
                                group-hover:shadow-xl
                                transition-all duration-300
                            "
						>
							<div
								className="
                                    relative 
                                    text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl
                                    font-[500] 
                                    text-[#fff] 
                                    text-center
                                    tracking-wide
                                    group-hover:scale-105
                                    transition-transform duration-300
                                "
								style={{
									fontFamily: '"Noto Serif TC", serif',
								}}
							>
								{t("button")}
							</div>
						</div>
					</button>
				</Link>
			</div>
		</div>
	);
}
