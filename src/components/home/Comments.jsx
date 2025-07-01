import Image from "next/image";
import { useTranslations } from "next-intl";
import CommentsImageCarousel from "@/components/ui/emblaCarousel";

export default function () {
	const t = useTranslations("home.comments");
	return (
		<section className="relative py-10 pb-10 overflow-hidden lg:pb-30 bg-secondary">
			<div className="container px-0 mx-auto lg:px-4">
				<div className="flex flex-col items-center gap-12 mx-auto lg:flex-row lg:gap-24 max-w-8xl">
					<div className="flex flex-col items-center flex-grow gap-6 lg:items-start">
						<h3 className="text-hero lg:text-5xl text-[28px] font-bold text-center lg:text-left">
							{t("title")}
						</h3>
						<p className="px-8 text-center text-secondary-foreground lg:text-xl lg:max-w-90 lg:px-0 lg:text-left">
							{t("description")}
						</p>
					</div>
					<div>
						<CommentsImageCarousel />
					</div>
				</div>
			</div>
		</section>
	);
}
