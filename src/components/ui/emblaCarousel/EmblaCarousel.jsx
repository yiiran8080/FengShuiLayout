'use client'
import React from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
// import {
//     PrevButton,
//     NextButton,
//     usePrevNextButtons
// } from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    // const {
    //     prevBtnDisabled,
    //     nextBtnDisabled,
    //     onPrevButtonClick,
    //     onNextButtonClick
    // } = usePrevNextButtons(emblaApi)

    return (
        <section className="embla lg:left-60 lg:top-45 top-15">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((item, index) => (
                        <div className="embla__slide max-w-75 lg:max-w-none" key={index}>
                            {
                                item
                            }
                            {/* <div className="embla__slide__number">{index + 1}</div> */}
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls lg:mt-57 mt-6.5 relative lg:left-0 left-[42%]">
                {/* <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div> */}

                <div className="embla__dots gap-2.5">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot lg:w-5 lg:h-5 h-2.5 w-2.5'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel
