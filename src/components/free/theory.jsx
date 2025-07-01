import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Theory() {
	const t = useTranslations("theory");

	return (
		<section className="w-full max-w-full flex flex-col items-center justify-center bg-[#f0f8f6] px-4 sm:px-8 md:px-[60px] lg:px-[120px] xl:px-[200px] py-10 sm:py-14 md:py-20">
			{/* Title Section */}
			<section className="w-full flex flex-row items-start justify-center max-w-full text-left text-2xl sm:text-3xl md:text-[40px] text-[#073e31] font-['Source_Sans_Pro'] mb-6 sm:mb-10">
				<div className="w-full max-w-[729px] flex flex-col items-start justify-start gap-4">
					<div className="flex flex-row flex-wrap items-end justify-start max-w-full gap-4 md:gap-9">
						<div className="w-[48px] sm:w-[64px] md:w-[84px] flex flex-col items-start justify-end pt-0 px-0 pb-3 sm:pb-5 box-border">
							<div className="self-stretch h-[40px] sm:h-[69px] md:h-[90px] relative overflow-hidden shrink-0 opacity-80">
								<Image
									className="absolute top-0 left-0 w-full h-full max-w-full max-h-full overflow-hidden drop-shadow-lg"
									loading="lazy"
									width={100}
									height={90}
									sizes="100vw"
									alt=""
									src="/images/report/Quotemark.png"
								/>
							</div>
						</div>
						<div className="flex flex-row items-center justify-center p-2.5 box-border max-w-full z-[1]">
							<h2 className="m-0 relative text-[length:inherit] leading-8 font-bold font-[inherit] text-xl sm:text-2xl md:text-3xl lg:text-[40px] mq925:text-2xl mq925:leading-[19px] mq450:text-[24px] mq450:leading-[26px]">
								{t("title")}
							</h2>
						</div>
					</div>
					<div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-0 text-center text-base sm:text-lg md:text-xl text-[#004f44] font-[ABeeZee]">
						<div className="relative leading-7 sm:leading-8">
							{t("description")}
						</div>
					</div>
				</div>
			</section>
			{/* Card Section */}
			<section className="w-full flex flex-col md:flex-row items-stretch justify-center gap-4 sm:gap-6 md:gap-8 text-left text-base sm:text-lg md:text-2xl text-[#fff] font-['DM_Sans']">
				{/* Card 1 */}
				<div className="w-full md:w-72 rounded-[10px] bg-[rgba(0,79,68,0.44)] border-[#25826c] border-solid border-[1px] box-border flex flex-col items-center justify-center mb-4 md:mb-0 p-4 sm:p-6">
					<div className="w-full md:w-60 h-[170px] sm:h-[180px] md:h-[211px] flex flex-col items-start justify-start gap-4 sm:gap-[11px]">
						<div className="w-full md:w-[231px] flex flex-col items-start justify-start gap-4 sm:gap-6">
							<Image
								className="w-8 h-8 sm:w-10 sm:h-[40.9px] relative object-contain"
								loading="lazy"
								width={40}
								height={40.9}
								sizes="100vw"
								alt=""
								src="/images/report/icon-container.svg"
							/>
							<div className="flex flex-row items-center justify-center">
								<h3 className="m-0 relative text-[length:inherit] tracking-[-0.03em] leading-[150%] font-semibold font-[inherit] text-base sm:text-lg md:text-xl">
									{t("cards.imageRecognition.title")}
								</h3>
							</div>
						</div>
						<div className="relative self-stretch text-sm leading-6 sm:text-base">
							{t("cards.imageRecognition.description")}
						</div>
					</div>
				</div>
				{/* Card 2 */}
				<div className="w-full md:w-72 rounded-[10px] bg-[rgba(0,79,68,0.44)] border-[#25826c] border-solid border-[1px] box-border flex flex-col items-center justify-center mb-4 md:mb-0 p-4 sm:p-6">
					<div className="w-full md:w-60 h-[170px] sm:h-[180px] md:h-[211px] flex flex-col items-start justify-start gap-4 sm:gap-[11px]">
						<div className="w-full md:w-[231px] flex flex-col items-start justify-start gap-4 sm:gap-6">
							<Image
								className="w-8 h-8 sm:w-10 sm:h-[40.9px] relative object-contain"
								loading="lazy"
								width={40}
								height={40.9}
								sizes="100vw"
								alt=""
								src="/images/report/icon-container-1.svg"
							/>
							<div className="flex flex-row items-center justify-center">
								<h3 className="m-0 relative text-[length:inherit] tracking-[-0.03em] leading-[150%] font-semibold font-[inherit] text-base sm:text-lg md:text-xl">
									{t("cards.knowledgeBase.title")}
								</h3>
							</div>
						</div>
						<div className="relative self-stretch text-sm leading-6 sm:text-base">
							{t("cards.knowledgeBase.description")}
						</div>
					</div>
				</div>
				{/* Card 3 */}
				<div className="w-full md:w-72 rounded-[10px] bg-[rgba(0,79,68,0.44)] border-[#25826c] border-solid border-[1px] box-border flex flex-col items-center justify-center mb-4 md:mb-0 p-4 sm:p-6">
					<div className="w-full md:w-60 h-[170px] sm:h-[180px] md:h-[211px] flex flex-col items-start justify-start gap-4 sm:gap-[11px]">
						<div className="w-full md:w-[231px] flex flex-col items-start justify-start gap-4 sm:gap-6">
							<Image
								className="w-8 h-8 sm:w-10 sm:h-[40.9px] relative object-contain"
								loading="lazy"
								width={40}
								height={40.9}
								sizes="100vw"
								alt=""
								src="/images/report/icon-container-2.svg"
							/>
							<div className="flex flex-row items-center justify-center">
								<h3 className="m-0 relative text-[length:inherit] tracking-[-0.03em] leading-[150%] font-semibold font-[inherit] text-base sm:text-lg md:text-xl">
									{t("cards.energyFlow.title")}
								</h3>
							</div>
						</div>
						<div className="relative self-stretch text-sm leading-6 sm:text-base">
							{t("cards.energyFlow.description")}
						</div>
					</div>
				</div>
				{/* Card 4 */}
				<div className="w-full md:w-72 rounded-[10px] bg-[rgba(0,79,68,0.44)] border-[#25826c] border-solid border-[1px] box-border flex flex-col items-center justify-center p-4 sm:p-6">
					<div className="w-full md:w-60 h-[170px] sm:h-[180px] md:h-[209px] flex flex-col items-start justify-start gap-4 sm:gap-[11px]">
						<div className="w-full md:w-[231px] flex flex-col items-start justify-start gap-4 sm:gap-6">
							<Image
								className="w-8 h-8 sm:w-10 sm:h-[40.9px] relative object-contain"
								loading="lazy"
								width={40}
								height={40.9}
								sizes="100vw"
								alt=""
								src="/images/report/icon-container-3.svg"
							/>
							<div className="flex flex-row items-center justify-center">
								<h3 className="m-0 relative text-[length:inherit] tracking-[-0.03em] leading-[150%] font-semibold font-[inherit] text-base sm:text-lg md:text-xl">
									{t("cards.personalizedAdvice.title")}
								</h3>
							</div>
						</div>
						<div className="relative self-stretch text-sm leading-6 sm:text-base">
							{t("cards.personalizedAdvice.description")}
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}
