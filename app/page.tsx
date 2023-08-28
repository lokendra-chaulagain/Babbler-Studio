import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className=" bg-primary min-h-screen">
      <Navbar />
      <HeroSection />
     
    </main>
  );
}
