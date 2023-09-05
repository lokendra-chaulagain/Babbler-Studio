"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import ArrowRightIcon from "./icons/ArrowRightIcon";

export default function HeroSection() {
  return (
    <div id="home" className="min-h-screen pt-24  md:pt-48">
      <div className="flex flex-col md:flex-row order items-center justify-between  ">
        <div className="flex flex-col md:-8/12 order-2 md:order-1">
          <div className="flex flex-col text-center md:text-left">
            <p className="text-gray-300 text-6xl font-semibold tracking-widest leading-tight">BABBLER STUDIO</p>
            <p className="text-gray-300 opacity-90 mt-2 text-lg tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="absolute bottom-10  ">
            <span className="text-gray-300 flex items-center gap-2 cursor-pointer">
              Connect With Us <ArrowRightIcon />
            </span>
          </div>
        </div>

        <div className="w-4/12 order-1">
          <Image
            src={logo}
            alt="image"
            height={250}
            className=""
          />
        </div>
      </div>
    </div>
  );
}
