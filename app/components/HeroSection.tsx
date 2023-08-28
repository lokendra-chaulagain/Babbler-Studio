"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import right from "../../public/right-side.png";
import ArrowRightIcon from "./icons/ArrowRightIcon";

export default function HeroSection() {
  return (
    <div className="h-screen flex  items-start md:items-center justify-center   ">
      <div className="lg:w-7/12 flex items-center justify-between">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <Image
              src={logo}
              alt="image"
              height={250}
              className=""
            />
            <div className="flex flex-col text-center md:text-left">
              <p className="text-gray-300 text-6xl font-semibold tracking-widest">BABBLER STUDIO</p>
              <p className="text-gray-300 opacity-90 mt-2 text-lg tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>

          <div className="absolute bottom-10  ">
            <span className="text-gray-300 flex items-center gap-2 cursor-pointer">
              Connect With Us <ArrowRightIcon />
            </span>
          </div>
        </div>

        <div>

          
          {/* <Image
            src={right}
            alt="image"
          /> */}
        </div>
      </div>
    </div>
  );
}
