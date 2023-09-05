// "use client";

// import ArrowRight from "./icons/ArrowRight";
// import SendIcon from "./icons/SendIcon";

// export default function AboutSection() {
//   return (
//     <section className="flex justify-center my-52 text-gray-200">
//       <div className="w-7/12 flex flex-col gap-7 items-center justify-between ">
//         <p className=" px-3 py-1 bg-neutral-700 rounded-full text-sm flex items-center gap-2 cursor-pointer">
//           🎉 157+ Satisfied Customer in th community <ArrowRight />{" "}
//         </p>
//         <p className=" text-4xl font-medium  text-center mb-7">About Us</p>
//         <div className="flex">
//           <div>
//             <div>
//               <div className=" text-yellow-500 flex justify-end ">
//                 <SendIcon />
//               </div>
//               <p className="px-3 py-0.5 border mr-3 border-yellow-500 rounded-full text-xs flex items-center gap-2 cursor-pointer">Web Development</p>
//             </div>

//             <div>
//               <div className=" text-yellow-500 flex justify-end ">
//                 <SendIcon />
//               </div>
//               <p className="px-3 py-0.5 border mr-3 border-yellow-500 rounded-full text-xs flex items-center gap-2 cursor-pointer">Mobile Application</p>
//             </div>
//           </div>
//           <div>2</div>
//           <div>
//           <div>
//               <div className=" text-yellow-500  rotate_icon ">
//                 <SendIcon />
//               </div>
//               <p className="px-3 py-0.5 border mr-3 border-yellow-500 rounded-full text-xs flex items-center  mt-20  cursor-pointer">Mobile Application</p>
//             </div>

//             <div>
//               <div className=" text-yellow-500  rotate_icon p">
//                 <SendIcon />
//               </div>
//               <p className="px-3 py-0.5 border mr-3 border-yellow-500 rounded-full text-xs flex items-center  mt-20  cursor-pointer">Mobile Application</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import ArrowRight from "./icons/ArrowRight";
import SendIcon from "./icons/SendIcon";

export default function AboutSection() {
  return (
    <section className="flex justify-center my-52 text-gray-200">
      <div className="w-7/12 flex flex-col gap-7 items-center justify-between ">
        <p className=" px-3 py-1 bg-neutral-700 rounded-full text-sm flex items-center gap-2 cursor-pointer">
          🎉 157+ Satisfied Customer in th community <ArrowRight />{" "}
        </p>
        <p className=" text-4xl font-medium  text-center mb-7">About Us</p>

        <div className="flex gap-10 w-full">
          <div className=" flex flex-col justify-between">
            <div>
              <div className=" text-yellow-500 flex justify-end ">
                <SendIcon />
              </div>
              <p className="px-3 py-0.5 border mr-3 border-yellow-500 bg-yellow-500 bg-opacity-20 rounded-full text-xs flex items-center gap-2 cursor-pointer">Web Development</p>
            </div>

            <div>
              <div className=" text-blue-500 flex justify-end ">
                <SendIcon />
              </div>
              <p className="px-3 py-0.5 border mr-3 border-blue-500 bg-blue-500 bg-opacity-20 rounded-full text-xs flex items-center gap-2 cursor-pointer">Mobile Application</p>
            </div>
          </div>

          <div className=" w-8/12 flex flex-col  gap-5">
            <p className=" text-3xl text-center">Lorem ipsum dolor sit.</p>
            <p className=" text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore eaque consectetur sunt dolorem consequuntur accusantium doloribus autem beatae doloremque harum excepturi suscipit dicta rerum nulla quasi vero dolore saepe natus, maiores placeat voluptates laboriosam voluptatibus! Quos ut voluptatibus optio illum ipsum temporibus, beatae maxime delectus incidunt non repudiandae, et quae dicta cupiditate tempore nostrum consectetur rerum, id aliquid aperiam.</p>
         
        <div className=" flex justify-center">
        <button className=" border rounded-full border-neutral-400 px-4 py-0.5">Button</button>
        </div>
          </div>

          <div className=" flex flex-col justify-between">
            <div>
              <div className=" text-green-500  rotate_icon_top ">
                <SendIcon />
              </div>
              <p className="px-3 py-0.5 border border-green-500 bg-green-500 bg-opacity-20  rounded-full text-xs flex items-center gap-2 cursor-pointer">Marketing Stragety</p>
            </div>

            <div>
              <div className=" text-pink-500  rotate_icon_bottom ">
                <SendIcon />
              </div>
              <p className="px-3 py-0.5 border border-pink-500 bg-pink-500 bg-opacity-20 rounded-full text-xs flex items-center gap-2 cursor-pointer">SAAS Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
