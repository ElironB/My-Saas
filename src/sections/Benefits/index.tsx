"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { motion } from "framer-motion";

const Benefits: React.FC = () => {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const updateContainerSize = () => {
      const container = document.getElementById("cards");
      if (container) {
        const { width, height } = container.getBoundingClientRect();
        setContainerSize({ width, height });
      }
    };

    // Update container size initially and on window resize
    updateContainerSize();
    window.addEventListener("resize", updateContainerSize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateContainerSize);
    };
  }, []);
  return (
    <div id="benefits" className="p-16">
      <div className="mb-7 flex flex-col items-center">
        <p className="text-6xl mb-4">Your Benefits.</p>
        <Image
          src="/benefits/underline.svg"
          alt="Underline"
          width={250}
          height={100}
          className="max-w-full h-auto absolute translate-x-16 "
        />
      </div>
      <div className="grid sm:grid-cols-3 sm:grid-rows-2 grid-cols-1 md:grid-cols-3 md:grid-rows-2 sm:h-[85vh] w-[80vw] mx-auto justify-center items-center p-9 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeIn" }}
          viewport={{ once: true }}
        >
          <Image
            src="/benefits/card1.svg"
            alt="Background"
            width={400}
            height={400}
            className="max-w-full mx-auto absolute -translate-y-3 translate-x-32 z-1"
          />
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[22rem] rounded-xl p-4 border">
              <CardItem
                translateZ="50"
                className="text-lg font-bold text-neutral-600 dark:text-white"
              >
                Make things float in air
              </CardItem>
              {/* <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Hover over this card to unleash the power of CSS perspective
              </CardItem> */}
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-fit h-full mt-4"
              >
                <div className="rounded-xl group-hover/card:shadow-xl pointer-events-none overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline={true}
                    className="w-full h-fit object-cover"
                  >
                    <source src="/benefits/card1.mp4" type="video/mp4" />
                  </video>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeIn" }}
          viewport={{ once: true }}
        >
          <Image
            src="/benefits/card2.svg"
            alt="Background"
            width={400}
            height={400}
            className="max-w-full mx-auto absolute -translate-y-8 translate-x-20 z-1"
          />
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[22rem] h-auto rounded-xl p-4 border">
              <CardItem
                translateZ="50"
                className="text-lg font-bold text-neutral-600 dark:text-white"
              >
                Make things float in air
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Hover over this card to unleash the power of CSS perspective
              </CardItem>
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-4"
              >
                <Image
                  src="/images/Populated_Leadlist.webp"
                  height={750}
                  width={700}
                  className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeIn" }}
          viewport={{ once: true }}
        >
          <Image
            src="/benefits/card3.svg"
            alt="Background"
            width={400}
            height={400}
            className="max-w-full mx-auto absolute -translate-y-5 -translate-x-5 z-1"
          />
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[22rem] h-auto rounded-xl p-4 border">
              <CardItem
                translateZ="50"
                className="text-lg font-bold text-neutral-600 dark:text-white"
              >
                Make things float in air
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Hover over this card to unleash the power of CSS perspective
              </CardItem>
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-4"
              >
                <Image
                  src="/images/Populated_Leadlist.webp"
                  height={750}
                  width={700}
                  className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeIn" }}
          viewport={{ once: true }}
        >
          <Image
            src="/benefits/card4.svg"
            alt="Background"
            width={400}
            height={400}
            className="max-w-full mx-auto absolute translate-y-24 translate-x-24 z-1"
          />
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[22rem] h-auto rounded-xl p-4 border">
              <CardItem
                translateZ="50"
                className="text-lg font-bold text-neutral-600 dark:text-white"
              >
                Make things float in air
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Hover over this card to unleash the power of CSS perspective
              </CardItem>
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-4"
              >
                <Image
                  src="/images/Populated_Leadlist.webp"
                  height={750}
                  width={700}
                  className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeIn" }}
          viewport={{ once: true }}
        >
          <Image
            src="/benefits/card5.svg"
            alt="Background"
            width={400}
            height={400}
            className="max-w-full mx-auto absolute -translate-y-2 translate-x-20 z-1"
          />
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[22rem] h-auto rounded-xl p-4 border">
              <CardItem
                translateZ="50"
                className="text-lg font-bold text-neutral-600 dark:text-white"
              >
                Make things float in air
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Hover over this card to unleash the power of CSS perspective
              </CardItem>
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={10}
                className="w-full mt-4"
              >
                <Image
                  src="/images/Populated_Leadlist.webp"
                  height={750}
                  width={700}
                  className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeIn" }}
          viewport={{ once: true }}
        >
          <Image
            src="/benefits/card6.svg"
            alt="Background"
            width={400}
            height={400}
            className="max-w-full mx-auto absolute -translate-y-5 -translate-x-5 z-1"
          />
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[22rem] h-auto rounded-xl p-4 border">
              <CardItem
                translateZ="50"
                className="text-lg font-bold text-neutral-600 dark:text-white"
              >
                Make things float in air
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Hover over this card to unleash the power of CSS perspective
              </CardItem>
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateY={-10}
                className="w-full mt-4"
              >
                <Image
                  src="/images/Populated_Leadlist.webp"
                  height={750}
                  width={700}
                  className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </motion.div>
      </div>
    </div>
  );
};
const data = [
  {
    image: "",
    title: "Automatic Invoice Payment",
    description:
      "No need to pay manually, we provide automatic invoice payment service! Set a payment schedule and you are done",
  },
  {
    image: "",
    title: "Clear payment history",
    description:
      "No need to pay manually, we provide automatic invoice payment service! Set a payment schedule and you are done",
  },
  {
    image: "",
    title: "Use of multi-card payments",
    description:
      "No need to pay manually, we provide automatic invoice payment service! Set a payment schedule and you are done",
  },
];

export default Benefits;
