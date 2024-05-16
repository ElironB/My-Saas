"use client";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Benefits from "@/sections/Benefits";
import Header from "@/sections/Header";
import { HowItWorks } from "@/sections/HowItWorks";
import Image from "next/image";
import Pricing from "@/sections/Pricing";
import Pline from "@/components/ui/pline";
import Faq from "@/sections/Faq";
import { motion } from "framer-motion";

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
      <motion.div
        className=" w-full h-1/4 flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Image
          src="/divider.svg"
          width={800}
          height={800}
          alt="misc"
          className=""
        />
      </motion.div>
      <div className="mx-auto w-[75vw] z-10">
        <Benefits />
      </div>
      <motion.div
        className=" w-full h-1/4 flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Image
          src="/misc-13.svg"
          width={400}
          height={400}
          alt="misc"
          className=""
        />
      </motion.div>
      <Faq />
      {/* <Pricing/> */}

      <HowItWorks />

      <Footer />
    </main>
  );
}
