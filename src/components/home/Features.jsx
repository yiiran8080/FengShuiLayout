import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Features() {
	const t = useTranslations("home.features");
	const features = [
		{
			title: t("title1"),
			description: t("subtitle1"),
			icon: "/images/hero/feature1.png",
		},
		{
			title: t("title2"),
			description: t("subtitle2"),
			icon: "/images/hero/feature2.png",
		},
		{
			title: t("title3"),
			description: t("subtitle3"),
			icon: "/images/hero/feature3.png",
		},
		{
			title: t("title4"),
			description: t("subtitle4"),
			icon: "/images/hero/feature4.png",
		},
	];

	return (
		<section className="py-10 bg-white md:py-20">
			<div className="container w-full px-4 md:p-0">
				<h3 className="mb-12 text-2xl font-bold text-center md:text-3xl lg:text-4xl md:mb-25 text-hero font-yahei">
					{t("title")}
				</h3>
				<div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4 md:gap-12 lg:gap-14 max-w-7xl">
					{features.map((feature, index) => (
						<div
							key={index}
							className="flex flex-col items-center text-center"
						>
							{/* Mobile: Stacked layout */}
							<div className="flex flex-col items-center md:hidden">
								<img
									src={feature.icon}
									alt={feature.title}
									className="w-[61px] h-[61px] object-contain mb-4"
								/>
								<h3
									className="mb-2 font-Acme"
									style={{
										color: "#004F44",
										fontWeight: 600,
										fontSize: "28px",
										lineHeight: "1.2",
									}}
								>
									{feature.title}
								</h3>
								<p
									className="font-AbeeZee"
									style={{
										fontWeight: 400,
										fontSize: "18px",
										color: "#073E31",
										lineHeight: "1.4",
									}}
								>
									{feature.description}
								</p>
							</div>

							{/* Desktop: Side-by-side layout */}
							<div className="items-start hidden gap-4 md:flex lg:gap-6">
								<img
									src={feature.icon}
									alt={feature.title}
									className="w-[61px] h-[61px] object-contain flex-shrink-0"
								/>
								<div className="flex flex-col text-left">
									<h3
										className="mb-2 font-Acme"
										style={{
											color: "#004F44",
											fontWeight: 600,
											fontSize: "32px",
											lineHeight: "1.2",
										}}
									>
										{feature.title}
									</h3>
									<p
										className="font-AbeeZee"
										style={{
											fontWeight: 400,
											fontSize: "22px",
											color: "#073E31",
											lineHeight: "1.4",
										}}
									>
										{feature.description}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
