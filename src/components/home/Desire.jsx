import Card from "../Card";
import Card2 from "@/components/Card2"; // Adjust the import path if needed
import { useTranslations } from "next-intl";

const Desire = ({ className = "" }) => {
	const t = useTranslations("home.Desire");

	const cards = [
		{
			title: t("title1"), // "01"
			subtitle: t("subtitle1"), // "財神不進家門？"
			pict: "/images/hero/desire1@2x.png",
		},
		{
			title: t("title2"), // "02"
			subtitle: t("subtitle2"), // "家庭關係不和睦？"
			pict: "/images/hero/desire1-1@2x.png",
		},
		{
			title: t("title3"), // "03"
			subtitle: t("subtitle3"), // "孩子讀書不盡人意？"
			pict: "/images/hero/desire1-2@2x.png",
		},
		{
			title: t("title4"), // "04"
			subtitle: t("subtitle4"), // "事業停滯不前？"
			pict: "/images/hero/desire1-3@2x.png",
		},
	];

	const cards2 = [
		{
			title: t("title5"), // e.g. "身體健康"
			subtitle: t("subtitle5"), // e.g. "不再受疾病困擾"
			pict: "/images/hero/desire2@2x.png",
		},
		{
			title: t("title6"),
			subtitle: t("subtitle6"),
			pict: "/images/hero/desire2-1@2x.png",
		},
		{
			title: t("title7"),
			subtitle: t("subtitle7"),
			pict: "/images/hero/desire2-2@2x.png",
		},
		{
			title: t("title8"),
			subtitle: t("subtitle8"),
			pict: "/images/hero/desire2-3@2x.png",
		},
	];

	return (
		<div className="bg-[#F0F8F6]">
			<section
				className={`
                self-stretch overflow-hidden flex flex-col items-start justify-start
                pt-[60px] pb-[60px] px-[5vw] box-border gap-[40px]
                bg-[url('/images/hero/frame-1410076839@3x.png')] bg-cover bg-no-repeat bg-[top]
                max-w-full z-[1] text-left text-[#073e31] font-['Source_Sans_Pro']
            `}
			>
				<div className="flex flex-row items-start justify-center w-full max-w-full py-0 pl-0 pr-1">
					<div className="flex flex-row items-center justify-center p-2.5 box-border max-w-full">
						<h2
							className="m-0 relative leading-8 font-bold font-[inherit] text-center
                        text-[2rem] md:text-[2.5rem] sm:text-[1.5rem]"
						>
							{t("bigtitle1")}
						</h2>
					</div>
				</div>
				<section
					className="
                    w-max
                    mx-auto
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-4
                    gap-30
                    text-center
                    text-[20px]
                    text-[#1d1d1d]
                    font-[Outfit]
                    px-4
                "
				>
					{cards.map((card, idx) => (
						<Card
							key={idx}
							title={card.title}
							subtitle={card.subtitle}
							pict={card.pict}
							cardWidth="100%"
							className="bg-white shadow-md rounded-2xl"
						/>
					))}
				</section>
				<div className="flex flex-row items-start justify-center w-full max-w-full py-0 pl-0 pr-1">
					<div className="flex flex-row items-center justify-center p-2.5 my-5 box-border max-w-full">
						<h2
							className="m-0 relative leading-8 font-bold font-[inherit] text-center
                        text-[2rem] md:text-[2.5rem] sm:text-[1.5rem]"
						>
							{t("bigtitle2")}
						</h2>
					</div>
				</div>
				<section
					className="
                    w-max
                    mx-auto
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-4
                    gap-30
                    text-center
                    text-[20px]
                    text-[#1d1d1d]
                    font-[Outfit]
                    px-4
                "
				>
					{cards2.map((card, idx) => (
						<Card2
							key={idx}
							title={card.title}
							subtitle={card.subtitle}
							pict={card.pict}
							cardWidth="100%"
							className="bg-white shadow-md rounded-2xl"
						/>
					))}
				</section>
			</section>
		</div>
	);
};

export default Desire;
