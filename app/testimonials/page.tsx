"use client";
import Navbar from "../components/Navbar";
import TestimonialSection from "../components/TestimonialSection";

export default function Page() {
  return (
    <div className="flex justify-center  items-center  ">
      <div className="px-4  lg:w-11/12   ">
        <div className="flex justify-between max-h-screen">
          <div className="flex flex-col justify-between text-white ">
            <Navbar />
            <TestimonialSection />
          </div>
        </div>
      </div>
    </div>
  );
}
