"use client"
import Image from "next/image";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { motion } from "framer-motion";

export function HowItWorks() {
  return (
    <>
      <div
        id="howitworks"
        className="mb-26 my sm:h-[80vh] md:h-full h-full px-8 flex-col items-center mx-auto w-[75vw] justify-center "
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-7 flex flex-col items-center "
        >
          <p className="text-7xl mb-4">How It Works</p>
        </motion.div>
        <HoverEffect items={content} />
      </div>
      <motion.div
        className="w-full flex items-center justify-center"
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
          className=" scal"
        />
      </motion.div>
    </>
  );
}

const content = [
  {
    title: "Understand & Streamline",
    description:
      "Chat about your business, find growth opportunities, and streamline operations.",
    image: "/howitworks/card1.webm",
    background: "/howitworks/card1.svg",
    arrow: "/howitworks/arrow2-3.svg",
    Bclass: "scale- -translate-x-6 -translate-y-6",
  },
  {
    title: "Automate Tasks",
    description:
      "Set up custom-made automations so you can focus on what matters.",
      image: "/howitworks/card2.webm",
      background: "/howitworks/card2.svg",
    arrow: "/howitworks/arrow2-3.svg",
    Bclass: "scale-120 -translate-x-6 -translate-y-6",
  },
  {
    title: "Launch & Perfect",
    description:
      "Launch automations and tweak them until they’re just right.",
      image: "/howitworks/card3.webm",
      background: "/howitworks/card3.svg",
      Bclass: "-translate-x-6 -translate-y-6",
      Aclass: "scale-75 ",

  },
];
