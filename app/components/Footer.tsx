"use client";
import FacebookIcon from "./icons/FacebookIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import LocationIcon from "./icons/LocationIcon";
import MailIcon from "./icons/MailIcon";
import PhoneIcon from "./icons/PhoneIcon";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Footer() {
  const footerNavs = [
    {
      label: "Company",
      items: [
        {
          href: "#about",
          name: "About",
          offset:"70"
        },
        {
          href: "#testimonials",
          name: "Testimonial",
          offset:"70"
        },

        {
          href: "#contact",
          name: "Contact",
          offset:"70"
        },
      ],
    },
    {
      label: "Contact",
      items: [
        {
          href: "/",
          icon: <PhoneIcon />,
          name: "98735454254",
        },
        {
          href: "/",
          icon: <MailIcon />,
          name: "babblerstudio@gmail.com",
        },
        {
          href: "/",
          icon: <LocationIcon />,
          name: "Baluwatar, Kathmandu, Nepal",
        },
      ],
    },
  ];

  return (
    <footer className=" mt-40 text-gray-300">
      <div className="">
        <div className="flex flex-col md:flex-row ">
          <div className="w-full md:pr-10 ">
            <p className=" text-4xl font-semibold">Babbler Studio</p>
            <p className="leading-relaxed mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad earum asperiores perferendis voluptatum. Velit tenetur ut rem unde distinctio minima officia recusandae inventore dolore, harum placeat.</p>
          </div>

          <div className="w-full flex flex-col sm:flex-row gap-12 sm:gap-0 justify-between mt-10 md:mt-0">
            {footerNavs.map((item, index) => (
              <ul
                className="space-y-4"
                key={index}>
                <h4 className="font-medium text-xl ">{item.label}</h4>
                {item.items.map((item: any, index: number) => (
                  <li key={index}>
                    <AnchorLink
                      href={item.href}
                      offset={item.offset}
                      className="hover:underline  flex items-center gap-1 ">
                      {item.icon}
                      {item.name}
                    </AnchorLink>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <hr className=" opacity-10 mt-12 mb-5" />
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 order items-center justify-between   pb-5">
          <div className=" text-sm order-2 sm:order-1">&copy; 2023 Babbler Studio All rights reserved.</div>
          <ul className=" flex items-center gap-3 order-1 sm:order-2">
            <li className="w-8 h-8 border rounded-full flex items-center justify-center">
              <a href="/">
                <WhatsAppIcon />
              </a>
            </li>

            <li className="w-8 h-8 border rounded-full flex items-center justify-center">
              <a href="/">
                <FacebookIcon />
              </a>
            </li>

            <li className="w-8 h-8 border rounded-full flex items-center justify-center">
              <a href="/">
                <LinkedinIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
