import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="flex justify-center max-h-screen overflow-hidden ">
      <div className="px-4  lg:w-11/12   ">
        <HeroSection />
      </div>
    </div>
  );
}
