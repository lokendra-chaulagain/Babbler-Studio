import Image from "next/image";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TestimonialSection from "./components/TestimonialSection";

export default function Home() {
  return (
    <main className="  ">
      <div className="flex justify-center mt-20 text-gray-200">
        <div className="px-4 lg:w-9/12 xl:w-8/12   ">
          <Navbar />
          <HeroSection />
          <AboutSection />

          <TestimonialSection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
