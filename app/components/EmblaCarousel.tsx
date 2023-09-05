import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel, { EmblaCarouselType, EmblaOptionsType } from "embla-carousel-react";
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselArrowsDotsButtons";
// import imageByIndex from './imageByIndex'
import Image from "next/image";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className=" flex justify-center">
      <div className="embla w-5/12 px-10 text-white">
        <div
          className="embla__viewport"
          ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div
                className="embla__slide"
                key={index}>
                <div className="embla__slide__number">
                  <span>{index + 1}</span>
                </div>

                <div className=" flex flex-col gap-2 justify-center items-center">
                  <p className="text-center tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nam inventore excepturi suscipit cumque consectetur consequuntur hic maiores ducimus, quisquam quae perferendis, dicta ex aperiam.</p>
                  <p className=" text-2xl">Santosh Paudel (CEO)</p>
                  <p className=" text-lg">Digital Gorkha</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="embla__buttons">
          <PrevButton
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={scrollNext}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={"embla__dot".concat(index === selectedIndex ? " embla__dot--selected" : "")}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
