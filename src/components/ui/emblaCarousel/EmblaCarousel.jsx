"use client";
import React from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "@/lib/embla-carousel-autoplay/src";
import { useAutoplay } from "./EmblaCarouselAutoplay";

const EmblaCarousel = (props) => {
	const { slides, options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [
		Autoplay({ playOnInit: true, delay: 5000 }),
	]);
	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useDotButton(emblaApi);

	return (
		<section className="flex flex-row items-center embla lg:left-60 lg:top-10 top-15">
			{/* Vertical Dots */}
			<div className="embla__controls flex flex-col gap-2.5 mr-4">
				<div className="embla__dots flex flex-col gap-2.5">
					{scrollSnaps.map((_, index) => (
						<DotButton
							key={index}
							onClick={() => onDotButtonClick(index)}
							className={"embla__dot lg:w-5 lg:h-5 h-2.5 w-2.5 rounded-full".concat(
								index === selectedIndex
									? " embla__dot--selected"
									: ""
							)}
						/>
					))}
				</div>
			</div>
			{/* Carousel */}
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{slides.map((item, index) => (
						<div
							className="embla__slide max-w-75 lg:max-w-none"
							key={index}
						>
							{item}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default EmblaCarousel;
