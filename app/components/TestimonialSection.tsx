"use client";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function TestimonialSection() {
  return (
    <div className="text-white">
      <p className=" text-5xl font-medium  text-center mb-7">Testimonials</p>
      <section className="">
        <EmblaCarousel
          slides={SLIDES}
          options={OPTIONS}
        />
      </section>
    </div>
  );
}
