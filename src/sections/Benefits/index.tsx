"use client"
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { motion } from "framer-motion";
import Image from "next/image";

const Benefits: React.FC = () => {
  return (
    <div className="h-full">
      <div
        id="benefits"
        className="mb-26 sm:h-[80vh] md:h-full h-full px-8 flex-col items-center mx-auto justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center "
        >
          <p className="text-7xl text-center">Your Benefits.</p>
          <Image
            src="/benefits/underline.svg"
            alt="Underline"
            width={250}
            height={100}
            className="max-w-full h-auto absolute translate-x-0 translate-y-20 sm:translate-x-16 sm:translate-y-2"
          />
        </motion.div>
        <HoverEffect items={data} />
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
    </div>
  );
};
const data = [
  {
    image: "/benefits/card1gif.webm",
    background: "/benefits/card1.svg",
    Bclass: "-translate-x-8 -translate-y-14 rotate-[24deg]",
    title: "Uncover Hidden Potential",
    description:
      "Our free audit uncovers hidden automation and upgrade opportunities you never knew existed.",
  },
  {
    image: "/benefits/card2gif.webm",
    background: "/benefits/card2.svg",
    Bclass: "-translate-x-8 -translate-y-10 -rotate-90",
    title: "Demystify the World of Automation",
    description:
      "We'll show you how automations can transform your specific online business, making it crystal clear.",
  },
  {
    image: "/benefits/card3gif.webm",
    background: "/benefits/card3.svg",
    Bclass: "-translate-x-6 -translate-y-4",
    title: "Tailor-Made and Cookie Cutter Solutions",
    description:
      "We design system upgrades tailored to your needs. But if you find a perfect system plug, you can start upgrading even faster!",
  },
  {
    image: "/benefits/card4gif.webm",
    background: "/benefits/card4.svg",
    Bclass: "-translate-x-5 translate-y-9",
    title: "Maximize Your Budget",
    description:
      "Get more bang for your buck with affordable, high-impact upgrade solutions that outperform the competition.",
  },
  {
    image: "/benefits/card5gif.webm",
    background: "/benefits/card5.svg",
    Bclass: "-translate-x-7 -translate-y-8 rotate-90",
    title: "Empower Your Team, Not Replace Them",
    description:
      "Our automation systems handle repetitive tasks, freeing you and your team to focus on creative, strategic work.",
  },
  {
    image: "/benefits/card6gif.webm",
    background: "/benefits/card6.svg",
    Bclass: "-translate-x-10 -translate-y-10",
    title: "Seamless Integration",
    description:
      "Our solutions integrate effortlessly with your existing systems, ensuring a smooth transition to a more efficient business.",
  },
];

export default Benefits;
