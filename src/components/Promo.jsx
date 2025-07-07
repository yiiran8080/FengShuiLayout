import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Promo() {
	const t = useTranslations("promo");

	return (
		<div
			className="flex flex-col md:flex-row items-center justify-between rounded-[15px] sm:rounded-[20px] mx-2 sm:mx-6 lg:mx-10 bg-[#f5faf7] pt-4 pb-6 px-4 sm:pt-6 sm:pb-8 sm:px-6 md:pt-8 md:pb-10 md:px-8 lg:pt-10 lg:pb-[72px] lg:pl-[84px] lg:pr-[93px] gap-4 sm:gap-6 md:gap-8 lg:gap-24"
			style={{ boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)" }}
		>
			<section className="flex-1 flex flex-col items-start justify-start max-w-full text-left text-Neutral-07-100 font-[Poppins]">
				<div className="flex flex-col items-start justify-start w-full gap-4 sm:gap-6 md:gap-8 lg:gap-11">
					<div className="w-full flex flex-col items-start justify-start gap-3 sm:gap-4 md:gap-5 lg:gap-[21px]">
						<div className="w-full flex flex-col items-start justify-start gap-2 sm:gap-3 md:gap-4 lg:gap-[27px]">
							<p className="m-0 relative tracking-[-0.2px] sm:tracking-[-0.3px] md:tracking-[-0.4px] leading-6 sm:leading-7 md:leading-8 lg:leading-[44px] font-[500] inline-block text-lg sm:text-xl md:text-2xl lg:text-[32px]">
								{t("title")}
							</p>
							<h3 className="m-0 relative text-sm sm:text-base md:text-lg lg:text-xl leading-5 sm:leading-6 md:leading-7 lg:leading-8 font-[400] font-[Inter] inline-block">
								{t("description")}
							</h3>
						</div>
					</div>
					<Link
						href="/price"
						className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[247px]"
					>
						<button
							className="cursor-pointer border-none p-0 bg-transparent w-full h-[40px] sm:h-[44px] md:h-[48px] lg:h-[60px] flex flex-row items-start justify-start relative hover:scale-105 transition-transform duration-300"
							style={{
								filter: "drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))",
							}}
						>
							<div className="h-[35px] sm:h-[38px] md:h-[40px] lg:h-[55px] w-full absolute right-0 bottom-[-6px] sm:bottom-[-7px] md:bottom-[-8px] left-0 filter blur-[8px] sm:blur-[9px] md:blur-[10px] rounded-[50px] bg-[rgba(49,129,97,0.4)]" />
							<div className="rounded-[15px] sm:rounded-[18px] md:rounded-[20px] bg-gradient-to-r from-[#318161] to-[#318177] flex flex-row items-center justify-center py-2 sm:py-3 md:py-3 lg:py-4 px-4 sm:px-5 md:px-6 lg:px-[42px] z-[1] w-full hover:from-[#2a6e56] hover:to-[#2a6e62] transition-colors duration-300">
								<div className="relative text-sm sm:text-base md:text-lg lg:text-2xl font-[500] font-[Ubuntu] text-[#fff] text-center">
									{t("button")}
								</div>
							</div>
						</button>
					</Link>
				</div>
			</section>
			<div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-xs lg:max-w-[348px] flex-shrink-0 mt-4 sm:mt-6 md:mt-8 lg:mt-0">
				<Image
					className="object-cover w-full h-auto rounded-lg"
					loading="lazy"
					width={348}
					height={177}
					sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 348px"
					alt=""
					src="/images/report/fengshui05-1@2x.png"
				/>
			</div>
		</div>
	);
}
