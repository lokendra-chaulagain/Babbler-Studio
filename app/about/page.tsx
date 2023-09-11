"use client";

import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

export default function Page() {
  return (
    <div className="flex justify-center max-h-screen overflow-hidden ">
      <div className="px-4 w-full  lg:w-11/12   ">
        <div className="flex justify-between max-h-screen items-center ">
          <div className="w-full lg:w-6/12 flex flex-col justify-between text-white min-h-screen ">
            <Navbar />
            <div className=" ">
            <p className=" text-2xl font-medium">Who we are ?</p>
            <p className="tracking-wider">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quasi eius illo impedit ipsam delectus sint velit eos in, est magni, expedita harum sapiente quisquam.</p>

            <p className=" text-2xl  font-medium mt-5">What we do ?</p>
            <p className="tracking-wider">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quasi eius illo impedit ipsam delectus sint velit eos in, est magni, expedita harum sapiente quisquam.</p>
          </div>
            <span></span>
          </div>

          <div className="w-5/12 hidden lg:block text-gray-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, hic? Quisquam tempore porro officia quo minima, cumque placeat nihil asperiores! Voluptatibus nisi non cum placeat, porro molestias fuga, fugiat eligendi expedita et, illum ipsum totam error explicabo quaerat animi ea maxime voluptatem recusandae. Aliquid asperiores laboriosam ullam nisi ex cumque blanditiis quasi fugit commodi alias maxime voluptas corrupti nulla excepturi ut, doloremque minima nihil dolore quod
            saepe porro esse pariatur repellat eligendi. In nihil, amet quisquam voluptates earum atque aspernatur, facere incidunt illum reiciendis assumenda unde officiis quo culpa sapiente aperiam sed. Libero porro ullam, corporis, doloribus repellendus facilis veritatis debitis nemo ducimus quas eum voluptates delectus. Odio nemo ipsum excepturi eaque fuga enim laborum illo quis quidem neque cupiditate necessitatibus doloribus culpa autem pariatur, unde error aliquam eos voluptatem ex
            assumenda earum aperiam. Minus, nesciunt? Dolorum praesentium voluptas distinctio ab deleniti autem unde, nihil, molestiae excepturi quisquam, tenetur quis consectetur in? Incidunt impedit nam quasi autem alias debitis explicabo obcaecati illum at placeat esse quisquam, quia id maiores quis doloribus veritatis quod nisi totam doloremque a repudiandae nostrum. Error blanditiis commodi dolores autem laboriosam nostrum, facilis perferendis molestiae molestias quis alias praesentium et
            iure repellendus animi sapiente corrupti voluptates!
          </div>
        </div>
      </div>
    </div>
  );
}
