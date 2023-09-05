"use client";
import { useState } from "react";
import CloseIcon from "./icons/CloseIcon";
import ContactIcon from "./icons/ContactIcon";
import HomeIcon from "./icons/HomeIcon";
import MenuIcon from "./icons/MenuIcon";
import ServicesIcon from "./icons/ServicesIcon";
import TestimonialIcon from "./icons/TestimonialIcon";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
      href: "#home",
      offset:"100"
    },

    {
      id: 2,
      icon: <ServicesIcon />,
      label: "About Us",
      href: "#about",
      offset:"70"
    },

    {
      id: 3,
      icon: <TestimonialIcon />,
      label: "Testimonials",
      href: "#testimonials",
      offset:"70"
    },

    {
      id: 4,
      icon: <ContactIcon />,
      label: "Contact",
      href: "#contact",
      offset:"70"
    },
  ];

  return (
    <>
      <div className="flex ">
        <div className="w-full fixed top-0  hidden md:block z-50 py-5 bg-primary  ">
          <div className="flex gap-20 ">
            {navLists.map((item, index) => (
              <AnchorLink
                offset="100"
                href={item.href}
                key={item.id}
                className=" flex items-center gap-1 cursor-pointer   text-gray-300">
                {item.icon}
                <span className=" text-lg font-medium"> {item.label}</span>
              </AnchorLink>
            ))}
          </div>
        </div>

        <div className=" flex justify-start">
          <div
            onClick={handleToggle}
            className=" z-50 fixed  top-0 right-0 py-5 px-4 text-gray-300 block md:hidden">
            {openMenu ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
      </div>

      <div className={`fixed py-5  mobileMenuVisible  w-full bg-primary z-40  block md:hidden  ${openMenu ? "mobileMenuVisible" : "mobileMenuHidden"}`}>
        <div className="flex flex-col gap-5 ">
          {navLists.map((item: any, index) => (
            <AnchorLink
              href={item.href}
              offset={item.offset}
              key={item.id}
              className=" cursor-pointer"
              onClick={handleToggle}>
              <span className="span-small">0{index + 1}</span> <span className="span-large">{item.label}</span>
            </AnchorLink>
          ))}
        </div>
      </div>
    </>
  );
}
