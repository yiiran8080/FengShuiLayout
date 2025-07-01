import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function BeforeAfter() {
	const t = useTranslations("home.compare");
	return (
		<section className="relative overflow-hidden pb-30 pt-30 bg-secondary">
			<img
				src="/images/hero/5-2@2x.png"
				alt=""
				className="absolute top-[-5] object-contain w-[400] right-[-50]"
			/>
			<div className="container px-8 mx-auto md:px-4 ">
				<div className="flex flex-col items-center max-w-6xl gap-12 mx-auto md:flex-row md:gap-24">
					<div className="flex flex-col items-center flex-grow gap-6 md:items-start">
						<h3 className="text-hero md:text-5xl text-[28px]  font-bold">
							{t("title")}
						</h3>
						<p className="text-center text-secondary-foreground md:text-xl md:text-left max-w-90">
							{t("description")}
						</p>
						<Link
							href="/price"
							className="inline-flex items-center gap-2 px-10 py-3 font-bold text-white transition-colors transition-transform duration-200 rounded-[20px] shadow-[0_8px_32px_0_rgba(0,0,0,0.35)] cursor-pointer md:mt-9 bg-button-primary md:text-2xl transform hover:-translate-y-1"
						>
							{t("cta")}
						</Link>
					</div>
					<div className="relative">
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								background: "#f3f4f6",
								boxShadow: "0 8px 16px rgba(0, 0, 0, 0.25)",
							}}
						>
							<BeforeAfterSlider
								beforeImg="/images/after2.png" // modern bright room
								afterImg="/images/before.png" // old dark room
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
