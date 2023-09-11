"use client";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nam inventore excepturi suscipit cumque consectetur consequuntur hic maiores ducimus, quisquam quae perferendis, dicta ex aperiam.",
      nameAndPosition: "Santosh Paude (CEO)",
      company: "Digital Gorkha",
    },

    {
      id: 2,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nam inventoretur hic maiores ducimus, quisquam quae perferendis, dicta ex aperiam.",
      nameAndPosition: "Santosh Paude (CEO)",
      company: "Digital Gorkha",
    },

    {
      id: 3,
      content: "Lorem ipsum dolor sit amet consectetur am inventore excepturi suscipit cumque consectetur consequuntur hic maiores ducimus, quisquam quae perferendis, dicta ex aperiam.",
      nameAndPosition: "Santosh Paude (CEO)",
      company: "Digital Gorkha",
    },

    {
      id: 4,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing  inventore excepturi suscipit hic maiores ducimus, quisquam quae perferendis, dicta ex aperiam.",
      nameAndPosition: "Santosh Paude (CEO)",
      company: "Digital Gorkha",
    },
  ];
  return (
    <div id="testimonials" className="text-gray-300 mt-12 pb-12">
      <p className=" text-4xl font-medium  text-center mb-10">Testimonials</p>
      {/* <section className="">
        <EmblaCarousel
          slides={SLIDES}
          options={OPTIONS}
        />
      </section> */}

      <div className=" grid grid-1 md:grid-cols-2 gap-16 lg:gap-10 xl:gap-16">
        {testimonials.map((item: any, index: any) => (
          <div
            key={item.id}
            className=" flex flex-col gap-2 justify-center items-center md:border md:rounded-md md:border-neutral-800 md:border-opacity-60 md:p-3">
            <q className="text-center tracking-wider">{item.content}</q>
            <p className=" text-2xl">{item.nameAndPosition}</p>
            <p className=" text-lg font-sans">{item.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
