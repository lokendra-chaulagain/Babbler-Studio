// import HeroSection from "./components/HeroSection";

// export default function Home() {
//   return (
//     <div className="flex justify-center max-h-screen overflow-hidden ">
//       <div className="px-4  lg:w-11/12   ">
//         <HeroSection />
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import logo from "../public/logo.svg";
import Image from "next/image";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState("01");
  const [index, setIndex] = useState(0);

  return (
    <div className="flex justify-center max-h-screen overflow-hidden ">
      <div className="lg:w-11/12 text-gray-300  flex  flex-col justify-between h-screen ">
        <Navbar />

        <div className="flex justify-between">
          <p className="w-full leading-loose text-3xl tracking-wider  ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eius laborum a unde soluta nemo natus vero autem nihil libero nulla officia nobis exercitationem quaerat reiciendis tenetur incidunt, laudantium consequatur architecto eligendi praesentium. Modi eveniet dicta iure accusamus sunt.</p>
          <p className=" w-full">2</p>
        </div>

        <div className=" pb-10">
          <div className="flex items-center gap-6">
            {lists.map((item: any, index: any) => (
              <p
                onClick={() => {
                  setSelectedItem(item.label), setIndex(index);
                }}
                className={`${selectedItem === item.label ? "text-7xl cursor-pointer font-medium" :"cursor-pointer text-lg font-medium"} `}>
                {item.label}
              </p>
            ))}
          </div>
          <p
            className="tracking-widest font-semibold whitespace-nowrap text-center "
            style={{ fontSize: "140px" }}>
            {lists[index].title}
          </p>
          <p className="text-center text-under ">{lists[index].subtitle}</p>
        </div>
      </div>
    </div>
  );
}

const lists = [
  {
    label: "01",
    title: "SOFTWARE ",
    subtitle: "Software Development",
  },
  {
    label: "02",
    title: " APPLICATION",
    subtitle: "Application Development",
  },
  {
    label: "03",
    title: "DESIGN",
    subtitle: "System Design",
  },
  {
    label: "04",
    title: "Marketing",
    subtitle: "Digital Marketing",
  },
];
