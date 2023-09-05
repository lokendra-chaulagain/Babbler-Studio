"use client";
import FacebookIcon from "./icons/FacebookIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import LocationIcon from "./icons/LocationIcon";
import MailIcon from "./icons/MailIcon";
import PhoneIcon from "./icons/PhoneIcon";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function Footer() {
  const footerNavs = [
    {
      label: "Company",
      items: [
        {
          href: "/",
          name: "About",
        },
        {
          href: "/",
          name: "Testimonial",
        },

        {
          href: "/",
          name: "Careers",
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
    <footer className="flex justify-center mt-20 text-gray-200">
      <div className="w-7/12 ">
        <div className="flex ">
          <div className="w-full pr-20 ">
            <p className=" text-4xl font-semibold">Babbler Studio</p>
            <p className="leading-relaxed mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad earum asperiores perferendis voluptatum. Velit tenetur ut rem unde distinctio minima officia recusandae inventore dolore, harum placeat.</p>
          </div>

          <div className="w-full flex justify-between">
            {footerNavs.map((item, index) => (
              <ul
                className="space-y-4"
                key={index}>
                <h4 className="font-medium text-xl ">{item.label}</h4>
                {item.items.map((item: any, index: number) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="hover:underline  flex items-center gap-1 ">
                      {item.icon}
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <hr className=" opacity-10 mt-10 mb-5" />
        <div className="flex items-center justify-between   pb-5">
          <div className=" text-sm">&copy; 2023 Babbler Studio All rights reserved.</div>
          <ul className=" flex items-center gap-3">
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
