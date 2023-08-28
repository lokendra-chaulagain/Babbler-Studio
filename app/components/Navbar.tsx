"use client";
import { useState } from "react";
import CloseIcon from "./icons/CloseIcon";
import ContactIcon from "./icons/ContactIcon";
import HomeIcon from "./icons/HomeIcon";
import MenuIcon from "./icons/MenuIcon";
import ServicesIcon from "./icons/ServicesIcon";
import TestimonialIcon from "./icons/TestimonialIcon";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggle = () => {
    setOpenMenu(!openMenu);
  };

  const navLists = [
    {
      id: 1,
      icon: <HomeIcon />,
      label: "Home",
      href: "/",
    },

    {
      id: 2,
      icon: <ServicesIcon />,
      label: "Services",
      href: "/",
    },

    {
      id: 3,
      icon: <TestimonialIcon />,
      label: "Testimonials",
      href: "/",
    },

    {
      id: 4,
      icon: <ContactIcon />,
      label: "Contact",
      href: "/",
    },
  ];

  return (
    <>
      <div className="flex justify-end md:justify-center py-5">
        <div className=" fixed lg:w-7/12 hidden md:block  ">
          <div className="flex gap-20 ">
            {navLists.map((item, index) => (
              <div
                key={item.id}
                className=" flex items-center gap-1 cursor-pointer   text-gray-300">
                {item.icon}
                <span className=" text-lg font-medium"> {item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          onClick={handleToggle}
          className=" z-50 text-white block md:hidden">
          {openMenu ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>

      <div className={`fixed  mobileMenuVisible  w-full bg-primary  py-7 block md:hidden  ${openMenu ? "mobileMenuVisible" : "mobileMenuHidden"}`}>
        <div className="flex flex-col gap-5 ">
          {navLists.map((item: any, index) => (
            <span className=" cursor-pointer">
              <span className="span-small">0{index + 1}</span> <span className="span-large">{item.label}</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
