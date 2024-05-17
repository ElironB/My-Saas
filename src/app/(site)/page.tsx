
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Benefits from "@/sections/Benefits";
import Header from "@/sections/Header";
import { HowItWorks } from "@/sections/HowItWorks";
import { Between } from "@/sections/BetweenSections";
import Pline from "@/components/ui/pline";
import Faq from "@/sections/Faq";
import Image from "next/image";


export default function Home() {
  return (
    <main
      className="bg-gray-900 bg-dot-white/[0.3] w-[90vw] md:w-[80w] lg:w-[75vw] mx-auto w"
      id="root"
    >
      <Pline
        scene="https://prod.spline.design/NTwW6U5ID333fvMR/scene.splinecode"
        className="absolute w-[90vw] md:w-[80w] lg:w-[75vw] h-[66vh] translate-y-[384px] pointer-events-none"
      />

      <div className="px-[20px]">
        <Navbar />
        <Header />
      </div>
      <Between/>
      <div className="mx-auto w-[75vw] z-10">
        <Benefits />
      </div>
      
      {/* <Pricing/> */}

      <HowItWorks />
      <Faq />
      <Footer />
    </main>
  );
}
