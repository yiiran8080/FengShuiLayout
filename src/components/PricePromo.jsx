import Image from "next/image";
import { useTranslations } from "next-intl";

export default function PricePromo() {
	const t = useTranslations("pricePromo");

	return (
		<div
			className="
                w-full
                min-h-[400px]
                sm:min-h-[500px]
                lg:h-[619px]
                bg-secondary
                overflow-hidden
                flex flex-col
                items-center
                justify-start
                pt-8 sm:pt-12 lg:pt-[70px]
                pb-8 sm:pb-12 lg:pb-0
                px-4 sm:px-8 lg:px-[100px]
                box-border
                relative
                gap-8 sm:gap-12 lg:gap-[113px]
            "
			style={{ fontFamily: '"Noto Serif TC", serif' }}
		>
			{/* Header Section */}
			<section
				className="
                    w-full
                    max-w-[1200px]
                    flex flex-col
                    items-center
                    justify-center
                    z-[unset]
                    text-center
                    text-2xl sm:text-3xl lg:text-[40px]
                    text-[#073e31]
                    font-[ABeeZee]
                    mx-auto
                    px-2 sm:px-0
                "
			>
				<div className="w-full max-w-[960px] flex flex-col items-center justify-start gap-6 sm:gap-8 lg:gap-10">
					<h2
						className="m-0 self-stretch relative text-[length:inherit] font-[400] font-[inherit] text-xl sm:text-2xl lg:text-[32px] text-center"
						style={{ fontFamily: '"Noto Serif TC", serif' }}
					>
						{t("title")}
					</h2>
					<div
						className="relative self-stretch text-sm leading-6 text-center sm:text-base sm:leading-7"
						style={{ fontFamily: '"Noto Serif TC", serif' }}
					>
						{t("desc")}
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section
				className="
                    w-full
                    max-w-[1400px]
                    flex flex-col
                    items-center
                    justify-center
                    gap-8
                    z-[unset]
                    text-left text-xl sm:text-2xl text-[#073e31]
                    font-[ABeeZee] mx-auto
                    px-2 sm:px-0
                    sm:flex-row sm:items-center sm:justify-center
                    lg:flex-row lg:items-end lg:justify-center
                    lg:gap-5
                "
				style={{ fontFamily: '"Noto Serif TC", serif' }}
			>
				<div
					className="
                        w-full
                        max-w-[1200px]
                        flex flex-col
                        items-center
                        justify-center
                        pt-0 px-0 pb-0
                        box-border
                        sm:flex-row sm:items-center sm:justify-center
                        lg:pb-[65px]
                        mx-auto
                    "
				>
					<div
						className="
                            w-full
                            max-w-[1000px]
                            flex flex-col
                            gap-8
                            items-center
                            justify-center
                            sm:flex-row sm:gap-6 sm:items-stretch sm:justify-center
                            md:gap-12
                            lg:gap-[80px]
                            mx-auto
                        "
					>
						{/* Feature 1 */}
						<div className="flex-1 min-w-0 sm:min-w-[220px] md:min-w-[250px] lg:min-w-[300px] max-w-[320px] flex flex-col items-center sm:items-center justify-start mb-8 sm:mb-0">
							<div className="flex flex-col items-center justify-start w-full h-full gap-4 sm:gap-5">
								<div className="w-[54px] relative h-[54px] overflow-hidden shrink-0 mx-auto">
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
								<div className="flex flex-col items-center justify-start w-full gap-2">
									<h3
										className="m-0 relative text-[length:inherit] leading-[28px] sm:leading-[34px] font-[400] font-[inherit] text-lg sm:text-xl lg:text-2xl text-center"
										style={{
											fontFamily:
												'"Noto Serif TC", serif',
										}}
									>
										{t("feature1.title")}
									</h3>
									<div
										className="relative text-sm sm:text-base leading-6 sm:leading-7 w-full max-w-[320px] text-center"
										style={{
											fontFamily:
												'"Noto Serif TC", serif',
										}}
									>
										{t("feature1.desc")}
									</div>
								</div>
							</div>
						</div>
						{/* Feature 2 */}
						<div className="flex-1 min-w-0 sm:min-w-[220px] md:min-w-[250px] lg:min-w-[300px] max-w-[320px] flex flex-col items-center sm:items-center justify-start mb-8 sm:mb-0">
							<div className="flex flex-col items-center justify-start w-full h-full gap-4 sm:gap-5">
								<Image
									className="w-[54px] h-[54px] relative overflow-hidden shrink-0 object-contain mx-auto"
									loading="lazy"
									width={54}
									height={54}
									sizes="100vw"
									alt=""
									src="/images/hero/feature2.png"
								/>
								<div className="flex flex-col items-center justify-start w-full gap-2">
									<h3
										className="m-0 relative text-[length:inherit] leading-[28px] sm:leading-[34px] font-[400] font-[inherit] text-lg sm:text-xl lg:text-2xl text-center"
										style={{
											fontFamily:
												'"Noto Serif TC", serif',
										}}
									>
										{t("feature2.title")}
									</h3>
									<div
										className="relative text-sm sm:text-base leading-6 sm:leading-7 w-full max-w-[320px] text-center"
										style={{
											fontFamily:
												'"Noto Serif TC", serif',
										}}
									>
										{t("feature2.desc")}
									</div>
								</div>
							</div>
						</div>
						{/* Feature 3 */}
						<div className="flex-1 min-w-0 sm:min-w-[220px] md:min-w-[250px] lg:min-w-[300px] max-w-[320px] flex flex-col items-center sm:items-center justify-start">
							<div className="flex flex-col items-center justify-start w-full h-full gap-4 sm:gap-5">
								<Image
									className="w-[54px] h-[54px] relative overflow-hidden shrink-0 object-cover mx-auto"
									loading="lazy"
									width={54}
									height={54}
									sizes="100vw"
									alt=""
									src="/images/hero/feature4.png"
								/>
								<div className="flex flex-col items-center justify-start w-full gap-2">
									<h3
										className="m-0 relative text-[length:inherit] leading-[28px] sm:leading-[34px] font-[400] font-[inherit] text-lg sm:text-xl lg:text-2xl text-center"
										style={{
											fontFamily:
												'"Noto Serif TC", serif',
										}}
									>
										{t("feature3.title")}
									</h3>
									<div
										className="relative text-sm sm:text-base leading-6 sm:leading-7 w-full max-w-[320px] text-center"
										style={{
											fontFamily:
												'"Noto Serif TC", serif',
										}}
									>
										{t("feature3.desc")}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Tree image - hidden on mobile, visible on larger screens */}
				<Image
					className="w-[80px] sm:w-[99.5px] relative max-h-full object-cover hidden lg:block shrink-0 absolute right-8 bottom-0"
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
