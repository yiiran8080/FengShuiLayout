import Image from "next/image";
import { useTranslations } from "next-intl";

export default function PricePromo() {
	const t = useTranslations("pricePromo");

	return (
		<div className="w-full max-w-[1920px] min-h-[400px] sm:min-h-[500px] lg:h-[619px] [background:linear-gradient(234.41deg,_#fbfffe,_#dff0ea)] overflow-hidden flex flex-col items-start justify-start pt-8 sm:pt-12 lg:pt-[70px] pb-8 sm:pb-12 lg:pb-0 px-4 sm:px-8 lg:px-[380px] box-border relative gap-8 sm:gap-12 lg:gap-[113px]">
			{/* Header Section */}
			<section className="w-full max-w-[1160px] flex flex-row items-start justify-center z-[unset] text-center text-2xl sm:text-3xl lg:text-[40px] text-[#073e31] font-[ABeeZee] mx-auto">
				<div className="w-full max-w-[960px] flex flex-col items-start justify-start gap-6 sm:gap-8 lg:gap-10">
					<h2 className="m-0 self-stretch relative text-[length:inherit] font-[400] font-[inherit] text-xl sm:text-2xl lg:text-[32px] text-center">
						{t("title")}
					</h2>
					<div className="relative self-stretch text-sm leading-6 text-center sm:text-base sm:leading-7">
						{t("desc")}
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="w-full max-w-[1382.5px] flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between gap-8 lg:gap-5 z-[unset] text-left text-xl sm:text-2xl text-[#073e31] font-[ABeeZee] mx-auto">
				<div className="w-full max-w-[1160px] flex flex-col items-start justify-start pt-0 px-0 pb-0 lg:pb-[65px] box-border">
					<div className="w-full flex flex-col sm:flex-row items-start justify-start gap-8 sm:gap-6 md:gap-12 lg:gap-[100px]">
						{/* Feature 1 */}
						<div className="flex-1 min-w-0 sm:min-w-[250px] lg:min-w-[320px] flex flex-col items-center sm:items-start justify-start">
							<div className="flex flex-col items-center justify-start w-full gap-4 sm:items-start sm:gap-5">
								<div className="w-[54px] relative h-[54px] overflow-hidden shrink-0 mx-auto sm:mx-0">
									<Image
										className="absolute top-[1px] left-[0px] w-[54.5px] h-[52px] object-cover"
										loading="lazy"
										width={54.5}
										height={52}
										sizes="100vw"
										alt=""
										src="/images/hero/feature1.png"
									/>
								</div>
								<div className="flex flex-col items-center justify-start w-full gap-2 sm:items-start">
									<h3 className="m-0 relative text-[length:inherit] leading-[28px] sm:leading-[34px] font-[400] font-[inherit] text-lg sm:text-xl lg:text-2xl text-center sm:text-left">
										{t("feature1.title")}
									</h3>
									<div className="relative text-sm sm:text-base leading-6 sm:leading-7 w-full max-w-[320px] text-center sm:text-left">
										{t("feature1.desc")}
									</div>
								</div>
							</div>
						</div>
						{/* Feature 2 */}
						<div className="flex-1 min-w-0 sm:min-w-[250px] lg:min-w-[320px] flex flex-col items-center sm:items-start justify-start">
							<div className="flex flex-col items-center justify-start w-full gap-4 sm:items-start sm:gap-5">
								<Image
									className="w-[54px] h-[54px] relative overflow-hidden shrink-0 object-contain mx-auto sm:mx-0"
									loading="lazy"
									width={54}
									height={54}
									sizes="100vw"
									alt=""
									src="/images/hero/feature2.png"
								/>
								<div className="flex flex-col items-center justify-start w-full gap-2 sm:items-start">
									<h3 className="m-0 relative text-[length:inherit] leading-[28px] sm:leading-[34px] font-[400] font-[inherit] text-lg sm:text-xl lg:text-2xl text-center sm:text-left">
										{t("feature2.title")}
									</h3>
									<div className="relative text-sm sm:text-base leading-6 sm:leading-7 w-full max-w-[320px] text-center sm:text-left">
										{t("feature2.desc")}
									</div>
								</div>
							</div>
						</div>
						{/* Feature 3 */}
						<div className="flex-1 min-w-0 sm:min-w-[250px] lg:min-w-[320px] flex flex-col items-center sm:items-start justify-start">
							<div className="flex flex-col items-center justify-start w-full gap-4 sm:items-start sm:gap-5">
								<Image
									className="w-[54px] h-[54px] relative overflow-hidden shrink-0 object-cover mx-auto sm:mx-0"
									loading="lazy"
									width={54}
									height={54}
									sizes="100vw"
									alt=""
									src="/images/hero/feature4.png"
								/>
								<div className="flex flex-col items-center justify-start w-full gap-2 sm:items-start">
									<h3 className="m-0 relative text-[length:inherit] leading-[28px] sm:leading-[34px] font-[400] font-[inherit] text-lg sm:text-xl lg:text-2xl text-center sm:text-left">
										{t("feature3.title")}
									</h3>
									<div className="relative text-sm sm:text-base leading-6 sm:leading-7 w-full max-w-[320px] text-center sm:text-left">
										{t("feature3.desc")}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Tree image - hidden on mobile, visible on larger screens */}
				<Image
					className="w-[80px] sm:w-[99.5px] relative max-h-full object-cover hidden lg:block shrink-0"
					width={99.5}
					height={193}
					sizes="100vw"
					alt=""
					src="/images/smalltree.png"
				/>
			</section>
		</div>
	);
}
