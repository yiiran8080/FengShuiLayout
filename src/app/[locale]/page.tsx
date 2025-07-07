import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Share from "@/components/home/Share";
import BeforeAfter from "@/components/home/BeforeAfter";
import Comments from "@/components/home/Comments";
import Tips from "@/components/home/Tips";
import FAQ from "@/components/home/FAQ";
import Message from "@/components/home/Message";
import Footer from "@/components/home/Footer";
import Desire from "@/components/home/Desire";
import Theory from "@/components/free/theory"; // Changed import

import { get } from "@/lib/ajax";
export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<section id="hero">
					<Hero />
				</section>
				<Features />
				<Desire />
				<section id="share">
					<Share />
				</section>
				<BeforeAfter />
				<section id="theory">
					<Theory bgColor="bg-white" />{" "}
					{/* Use Theory with white background */}
				</section>
				{/* Hide Tips component on mobile devices */}
				<div className="hidden md:block">
					<Tips />
				</div>
				<Comments />
				{/* <Message /> */}
				<section id="faq">
					<FAQ />
				</section>
			</main>
			<Footer />
		</>
	);
}
