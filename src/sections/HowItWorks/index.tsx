"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import TracingBeam from "@/components/ui/tracing-beam";

export function HowItWorks() {
  const { scrollYProgress } = useScroll();
  const ref = useRef<HTMLDivElement>(null);
  const itemsVisible = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 1, 1, 1, 1]
  );
  return (
    <>
      <TracingBeam className="px-6 space-y-28 w-full">
        <div
          className="max-w-2xl mx-auto antialiased pt-4 relative"
          id="howitworks"
        >
          <h1 className="mb-10 text-5xl font-bold">How It Works</h1>
          <motion.div
            ref={ref}
            style={{
              opacity: itemsVisible,
            }}
          >
            {content.map((item, index) => (
              <motion.div
                key={`content-${index}`}
                className="mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl mb-6 font-semibold">{item.title}</h2>
                <div className="text-lg prose prose-lg dark:prose-invert">
                  <p className="mb-4">{item.description}</p>
                  {item.content}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </TracingBeam>
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
          className=""
        />
      </motion.div>
    </>
  );
}

const content = [
  {
    title: "Step 1: Getting to Know You",
    description:
      "Let's sit down and chat about your business. We'll find out where we can help you grow and make things run smoother.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/Leadlist.webp"
          width={500}
          height={500}
          alt="Business Understanding"
        />
      </div>
    ),
  },
  {
    title: "Step 2: Spotting Time Wasters",
    description:
      "We'll dig deep and spot where you're losing precious time and resources. Our goal is to streamline your operations and make your life easier.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/Populated_Leadlist.webp"
          width={500}
          height={500}
          alt="Efficiency Insights"
        />
      </div>
    ),
  },
  {
    title: "Step 3: Automating the Boring Stuff",
    description:
      "No more repetitive tasks! We'll set up personalized automations tailored to your business, so you can focus on what really matters.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/Example_email.webp"
          width={500}
          height={300}
          alt="Personalized Automations"
        />
      </div>
    ),
  },
  {
    title: "Step 4: Launch and Perfect",
    description:
      "Ready, set, go! Launch your automations and we'll keep tweaking them until they're just right. Your time is valuable, and we're here to make sure you save as much of it as possible.",
  },
];
