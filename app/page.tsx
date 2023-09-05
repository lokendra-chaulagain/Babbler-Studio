import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TestimonialSection from "./components/TestimonialSection";

export default function Home() {
  return (
    <main className=" bg-primary min-h-screen">
      <Navbar />
      <HeroSection />
      <TestimonialSection/>
      <AboutSection/>
      <Footer/>
    </main>
  );
}
