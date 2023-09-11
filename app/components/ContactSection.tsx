"use client";
import Navbar from "./Navbar";
import ClockIcon from "./icons/ClockIcon";
import LocationIcon from "./icons/LocationIcon";
import PhoneIcon from "./icons/PhoneIcon";

export default function ContactSection() {
  return (
    <div className="text-gray-300  ">
      <div className="flex flex-col md:flex-row items-center justify-between ">
        <div className="w-full flex flex-col justify-between  md:min-h-screen">
          <Navbar />
          <div className=" flex flex-col gap-10">
            <div className="flex items-center gap-3">
              <div className="rounded-lg p-6 shadow-sm  shadow-gray-600">
                <LocationIcon />
              </div>
              <div className="w-full">
                <h4 className="text-lg font-bold ">Our Location</h4>
                <p className=" ">JKageshwori Manohara 44600</p>
                <p className="">Birendrachowk Kathmandu, Nepal.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-lg p-6 shadow-sm  shadow-gray-600">
                <ClockIcon />
              </div>
              <div className="w-full">
                <h4 className="text-lg font-bold ">Available Time</h4>
                <p className="">Sunday - Saturday</p>
                <p className="">10:00AM - 6:00PM</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-lg p-6 shadow-sm  shadow-gray-600">
                <PhoneIcon />
              </div>
              <div className="w-full">
                <h4 className="text-lg font-bold ">Contact </h4>
                <p className="">info@babblerstudio@gmail.com</p>
                <p className="">9864755749</p>
              </div>
            </div>
          </div>
          <span></span>
        </div>

        <div className="w-full">
          <form className="w-full md:p-5  flex flex-col  gap-5 mt-10 md:mt-0">
            <div className="flex flex-col ">
              <label className=" font-medium mb-0.5">Your Email</label>
              <input
                type="email"
                required
                placeholder="Email Address"
                className="py-1.5 outline-none rounded-md px-2 text-gray-300 border border-gray-700 text-opacity-80 bg-gray-400 bg-opacity-20 "
              />
            </div>

            <div className="flex flex-col ">
              <label className=" font-medium mb-0.5">Your Phone</label>
              <input
                type="number"
                required
                placeholder="Phone Number"
                className="py-1.5 outline-none rounded-md px-2 text-gray-300 border border-gray-700 text-opacity-80 bg-gray-400 bg-opacity-20  "
              />
            </div>

            <div className="flex flex-col ">
              <label className=" font-medium mb-0.5">Your Message</label>
              <textarea
                placeholder="Your Message"
                className="py-1.5 outline-none rounded-md px-2 text-gray-300 border border-gray-700  text-opacity-80 bg-gray-400 bg-opacity-20 "
              />
            </div>

            <button
              type="submit"
              className="bg-primary hover:bg-opacity-40 px-3 py-2 rounded-lg text-sm border 1px solid border-gray-800 hover:translate-y-0.5 transition-transform duration-300  ">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
