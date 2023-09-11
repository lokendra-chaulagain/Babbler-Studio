"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import right from "../../public/right-side.png";
import ArrowRightIcon from "./icons/ArrowRightIcon";
import Navbar from "./Navbar";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex justify-between max-h-screen">
      <div className="flex flex-col justify-between text-white min-h-screen">
        <Navbar />
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <Image
            src={logo}
            alt="image"
            height={250}
            className=""
          />

          <div className="flex flex-col text-center md:text-left">
            <p className="text-gray-300 text-6xl font-semibold tracking-widest leading-tight">BABBLER STUDIO</p>
            <p className="text-gray-300 opacity-90 mt-2  tracking-wider text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <Link
          href={"/contact"}
          className="text-4xl font-medium text-gray-300 flex items-center gap-2 cursor-pointer pb-8">
          Connect With Us <ArrowRightIcon />
        </Link>
      </div>

      <div className=" hidden lg:block">
        <Image
          src={right}
          alt="image"
          className=" min-h-screen w-full "
        />
      </div>
    </div>
  );
}
