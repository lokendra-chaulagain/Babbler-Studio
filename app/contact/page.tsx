"use client";

import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ContactIcon from "../components/icons/ContactIcon";
import ServicesIcon from "../components/icons/ServicesIcon";

export default function Page() {
  // px-4  lg:w-11/12
  return (
    <div className="flex justify-center max-h-screen overflow-hidden ">
      <div className="   ">
        <div className="flex justify-between max-h-screen">
          <div className="flex flex-col justify-between text-white min-h-screen">
            <div className="flex justify-center">
              <div className=" w-11/12">
                <Navbar />
              </div>
            </div>
            <div className=" flex justify-center">
              <p className="w-11/12 text-9xl font-bold">BABBLER.</p>
            </div>

            <div
              className=" "
              style={{ width: "100vw" }}>
              <hr className=" border-gray-500 border-opacity-50" />
              <div className=" flex justify-center">
                <div className="flex items-center justify-between my-24 w-11/12">
                    <div className="w-full flex flex-col gap-3">
                    <p>TELEPHONE</p>
                    <p>0977645353947</p>
                  </div>
                    <div className="w-full flex flex-col gap-3">
                    <p>E-MAIL</p>
                    <p>BABBLERSTUDIO@GMAIL.COM</p>
                  </div>
                    <div className="w-full flex flex-col gap-3">
                    <p>OTHER INFO</p>
                    <p>BABBLERSTUDIO@GMAIL.COM</p>
                    <p>BABBLERSTUDIO@GMAIL.COM</p>
                  </div>
                </div>
              </div>
              <hr className=" border-gray-500 border-opacity-50" />
            </div>

            <div className=" flex justify-center pb-14">
              <div className=" w-11/12">
                <div className=" flex items-center justify-between">
                  <div className="w-full flex flex-col gap-3 ">
                    <div>
                      <p className=" text-9xl font-bold">Booking</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corporis quo magni asperiores esse ipsam, mollitia facere vel maiores quidem.</p>
                    </div>
                    <p>info@babblergmail.com</p>
                  </div>

                  <div className="w-full flex flex-col items-center gap-3">
                    <svg
                      viewBox="0 0 576 512"
                      fill="currentColor"
                      className="h-10 w-10">
                      <path d="M192 352V48c0-26.5 21.5-48 48-48h294.1c21.1 0 36.4 20.1 30.9 40.4L558.5 64H400c-8.8 0-16 7.2-16 16s7.2 16 16 16h149.8l-17.5 64H400c-8.8 0-16 7.2-16 16s7.2 16 16 16h123.6l-17.5 64H400c-8.8 0-16 7.2-16 16s7.2 16 16 16h97.5L480 352H192zm16 32h288c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48zm144 96c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zM147.5 30.7c10.8 6.7 15.3 21 10.6 33.4l-22 57.8c-4.2 10.9-14.5 17.6-25.3 16.4l-33.3-3.6c-13.6 42.2-13.6 88.4 0 130.7l33.3-3.6c10.9-1.2 21.2 5.5 25.3 16.4l22 57.8c4.7 12.4.2 26.7-10.6 33.4l-44 27.2c-9.7 6-21.9 4.2-29.8-4.3C-24.6 286-24.6 114 73.7 7.8c7.9-8.5 20.1-10.3 29.8-4.3l44 27.2z" />
                    </svg>
                    <p className="text-3xl font-bold">SAY HELLO TO US</p>
                    <p className=" text-xl">9484865694</p>
                  </div>

                  <div className="w-full flex flex-col gap-3">
                    <p className=" text-3xl font-bold"> WE ARE AVAILABLE ON</p>
                    <p className="flex items-center gap-1 text-xl font-medium">
                      {" "}
                      <ServicesIcon />
                      Facebook
                    </p>
                    <p className="flex items-center gap-1 text-xl font-medium">
                      <ServicesIcon />
                      Linkedin
                    </p>
                    <p className="flex items-center gap-1 text-xl font-medium">
                      <ServicesIcon />
                      Twitter
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
