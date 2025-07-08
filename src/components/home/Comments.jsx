import Image from "next/image";
import { useTranslations } from "next-intl";
import CommentsImageCarousel from "@/components/ui/emblaCarousel";

export default function () {
	const t = useTranslations("home.comments");
	return (
		<section
			className="relative py-6 pb-6 overflow-hidden sm:py-8 sm:pb-8 md:py-10 md:pb-10 lg:pb-30 bg-secondary"
			style={{ fontFamily: "Noto Serif TC, serif" }}
		>
			<div className="container px-4 lg:px-4">
				<div className="flex flex-col items-center gap-6 mx-auto sm:gap-8 md:gap-10 lg:flex-row lg:gap-4 max-w-8xl">
					{/* Text Content */}
					<div className="flex flex-col items-center flex-grow gap-4 sm:gap-5 md:gap-6 lg:items-start">
						<h3
							className="px-4 text-hero lg:text-5xl text-[24px] sm:text-[26px] md:text-[28px] font-bold text-center lg:text-left lg:ml-30 lg:px-0"
							style={{ fontFamily: "Noto Serif TC, serif" }}
						>
							{t("title")}
						</h3>
						<p
							className="px-6 text-center text-secondary-foreground text-sm sm:text-base md:text-lg lg:text-xl lg:max-w-[600px] lg:px-0 lg:text-left lg:ml-30"
							style={{ fontFamily: "Noto Serif TC, serif" }}
						>
							{t("description")}
						</p>
					</div>

					{/* Carousel Container */}
					<div className="flex justify-center w-full px-4 sm:px-6 md:px-8 lg:justify-start lg:px-0">
						<CommentsImageCarousel />
					</div>
				</div>
			</div>
		</section>
	);
}
