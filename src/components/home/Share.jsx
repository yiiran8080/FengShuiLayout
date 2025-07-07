"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import useMobile from "@/app/hooks/useMobile";

export default function Share() {
	const t = useTranslations("home.share");
	const isMobile = useMobile();

	const steps = [
		{
			number: 1,
			title: t("subtitle1"),
			subtitle: t("description1"),
			icon: "/images/hero/share-1.png",
		},
		{
			number: 2,
			title: t("subtitle2"),
			subtitle: t("description2"),
			icon: "/images/hero/share-2.png",
		},
		{
			number: 3,
			title: t("subtitle3"),
			subtitle: t("description3"),
			icon: "/images/hero/share-3.png",
		},
		{
			number: 4,
			title: t("subtitle4"),
			subtitle: t("description4"),
			icon: "/images/hero/share-4.png",
		},
	];

	if (isMobile) {
		return (
			<section className="relative py-8 overflow-hidden bg-white">
				<div className="container px-4 mx-auto">
					{/* Background Image */}
					<div className="absolute inset-0 flex justify-center">
						<img
							src="/images/hero/ratio2.png"
							alt=""
							className="object-contain w-full h-auto opacity-10"
						/>
					</div>

					{/* Title */}
					<div className="relative z-10 mb-8 text-center">
						<h2 className="text-2xl font-bold text-[#004f44] mb-6">
							{t("title")}
						</h2>
					</div>

					{/* Steps */}
					<div className="relative z-10 flex flex-col items-center space-y-6">
						{steps.map((step, index) => (
							<div
								key={step.number}
								className="relative flex items-start w-full max-w-sm space-x-4"
							>
								{/* Step Circle */}
								<div className="relative flex-shrink-0">
									<div className="w-16 h-16 bg-[#318173] rounded-full shadow-lg flex items-center justify-center">
										<Image
											src={step.icon}
											alt=""
											width={32}
											height={step.number === 4 ? 48 : 32}
											className="object-contain"
										/>
									</div>
									<div className="absolute -top-2 -right-2 w-6 h-6 bg-[#f0f8f6] rounded-full flex items-center justify-center text-sm font-semibold text-[#318173] shadow">
										{step.number}
									</div>
								</div>

								{/* Step Content */}
								<div className="flex-1 pt-2 text-center">
									<h3 className="font-bold text-[#004f44] text-base mb-1">
										{step.title}
									</h3>
									<p className="text-sm text-gray-600">
										{step.subtitle}
									</p>
								</div>

								{/* Connecting Line */}
								{index < steps.length - 1 && (
									<div
										className="absolute left-8 top-16 w-0.5 h-6 bg-[#d8ead8] z-0"
										style={{ marginTop: "1rem" }}
									/>
								)}
							</div>
						))}
					</div>
				</div>
			</section>
		);
	}

	// Desktop version - responsive while keeping exact same visual layout
	return (
		<section className="relative overflow-hidden bg-white md:py-10 py-15">
			<div className="container mx-auto relative min-h-[500px]">
				{/* Background Image */}
				<img
					src="/images/hero/5-1@2x.png"
					alt=""
					className="absolute top-0 left-[-250px] object-contain w-[400px] h-auto"
				/>

				{/* Title */}
				<b className="absolute top-[76px] left-1/2 transform -translate-x-1/2 text-[46px] text-[#004f44] whitespace-nowrap">
					{t("title")}
				</b>

				{/* Main Content Container - Centered */}
				<div className="absolute top-[239px] left-1/2 transform -translate-x-1/2 w-[1157px] h-[200px] text-[15px] text-Black-100">
					{/* Progress Line */}
					<div className="absolute top-[54.5px] left-[56.5px] border-[#d8ead8] border-solid border-t-[5px] box-border w-[940px] h-[5px]" />

					{/* Small Gray Circles */}
					<div className="absolute top-[-29px] left-[80px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-[#f0f8f6] w-[57px] h-[57px] z-[unset]" />
					<div className="absolute top-[-29px] left-[398px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-[#f0f8f6] w-[57px] h-[57px] z-[unset]" />
					<div className="absolute top-[-29px] left-[709px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-[#f0f8f6] w-[57px] h-[57px] z-[unset]" />
					<div className="absolute top-[-29px] left-[1030px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-[#f0f8f6] w-[57px] h-[57px] z-[unset]" />

					{/* Main Green Circles */}
					<div className="absolute top-[0px] left-[calc(50%_-_580.5px)] shadow-[0px_4px_23.7px_#318173] rounded-[50%] bg-[#318173] w-[110px] h-[110px]" />
					<div className="absolute top-[0px] left-[313px] shadow-[0px_4px_23.7px_#318173] rounded-[50%] bg-[#318173] w-[110px] h-[110px]" />
					<div className="absolute top-[0px] left-[626px] shadow-[0px_4px_23.7px_#318173] rounded-[50%] bg-[#318173] w-[110px] h-[110px]" />
					<div className="absolute top-[0px] left-[949px] shadow-[0px_4px_23.7px_#318173] rounded-[50%] bg-[#318173] w-[110px] h-[110px] z-[2]" />

					{/* Step Content */}
					<div className="absolute top-[140px] left-[0px] leading-[30px]">
						<p className="m-0">
							<b>{t("subtitle1")}</b>
						</p>
						<p className="m-0">{t("description1")}</p>
					</div>
					<div className="absolute top-[140px] left-[305px] leading-[30px]">
						<p className="m-0">
							<b>{t("subtitle2")}</b>
						</p>
						<p className="m-0">{t("description2")}</p>
					</div>
					<div className="absolute top-[140px] left-[614px] leading-[30px]">
						<p className="m-0">
							<b>{t("subtitle3")}</b>
						</p>
						<p className="m-0">{t("description3")}</p>
					</div>
					<div className="absolute top-[140px] left-[calc(50%_+_333.5px)] leading-[30px]">
						<p className="m-0">
							<b>{t("subtitle4")}</b>
						</p>
						<p className="m-0">{t("description4")}</p>
					</div>

					{/* Step Numbers */}
					<div className="absolute top-[-15px] left-[104px] text-[25px] leading-[30px] font-['Microsoft_YaHei'] text-[#318173]">
						1
					</div>
					<div className="absolute top-[-15px] left-[419px] text-[25px] leading-[30px] font-['Microsoft_YaHei'] text-[#318173]">
						2
					</div>

					{/* Step Icons */}
					<Image
						className="absolute top-[32px] left-[28px] w-[50px] h-[50px] object-cover"
						width={50}
						height={50}
						sizes="100vw"
						alt=""
						src="/images/hero/share-1.png"
					/>
					<Image
						className="absolute top-[32px] left-[343px] w-[50px] h-[50px] object-cover"
						width={50}
						height={50}
						sizes="100vw"
						alt=""
						src="/images/hero/share-2.png"
					/>
					<Image
						className="absolute top-[32px] left-[656px] w-[50px] h-[50px] object-cover"
						width={50}
						height={50}
						sizes="100vw"
						alt=""
						src="/images/hero/share-3.png"
					/>
					<Image
						className="absolute top-[10px] left-[979px] w-[50px] h-[90px] object-cover z-[2]"
						width={50}
						height={90}
						sizes="100vw"
						alt=""
						src="/images/hero/share-4.png"
					/>
				</div>

				{/* Step 3 Number */}
				<div className="absolute top-[224px] left-1/2 transform -translate-x-1/2 translate-x-[150px] text-[25px] leading-[30px] font-['Microsoft_YaHei'] text-[#318173]">
					3
				</div>

				{/* Step 4 Number Circle */}
				<div className="absolute top-[224px] left-1/2 transform -translate-x-1/2 translate-x-[473px] text-[25px] leading-[30px] font-['Microsoft_YaHei'] text-[#318173]">
					4
				</div>

				{/* Bottom Decorative Image */}
				<div className="w-[160px] absolute m-0 bottom-[17.6px] left-0 max-h-full overflow-hidden flex items-center justify-center z-[2]">
					<Image
						className="w-full object-cover absolute left-[12px] top-0 h-full [transform:scale(1)]"
						loading="lazy"
						width={160}
						height={240}
						sizes="100vw"
						alt=""
						src="/images/hero/5-1@2x.png"
					/>
				</div>
			</div>
		</section>
	);
}
