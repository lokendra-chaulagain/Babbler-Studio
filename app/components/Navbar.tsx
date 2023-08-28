"use client";
import ContactIcon from "./icons/ContactIcon";
import HomeIcon from "./icons/HomeIcon";
import MenuIcon from "./icons/MenuIcon";
import ServicesIcon from "./icons/ServicesIcon";
import TestimonialIcon from "./icons/TestimonialIcon";

export default function Navbar() {
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
    <div className="flex justify-end md:justify-center py-5">
      <div className=" fixed lg:w-7/12 hidden md:block  ">
        <div className="flex gap-20 ">
          {navLists.map((item, index) => (
            <div key={item.id} className=" flex items-center gap-1 cursor-pointer   text-gray-300">
              {item.icon}
              <span className=" text-lg font-medium"> {item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className=" text-white block md:hidden">
        <MenuIcon />
      </div>
    </div>
  );
}
