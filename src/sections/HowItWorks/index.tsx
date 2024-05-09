"use client";
import React, { useRef } from "react";
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
      <TracingBeam className="px-6 space-y-28 w-full">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative shadow-xl" id="howitworks">
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
                <div className="text-lg  prose prose-lg dark:prose-invert">
                  <p className="mb-4">{item.description}</p>
                  {item.content}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </TracingBeam>
  );
}

const content = [
 {
   title: "Step 1: Populating Your Lead List",
   description: "We'll save you time and maximize your lead generation by helping you build a super-targeted lead list. It doesn't matter if you're starting from scratch or need to spruce up your existing database – we've got your back.",
   content: (
     <div className="h-full w-full flex items-center justify-center text-white">
       <Image
         src="/images/Leadlist.webp"
         width={500}
         height={500}
         alt="Unpopulated Leadlist"
       />
     </div>
   ),
 },
 {
   title: "Step 2: Supercharging Your Lead Data",
   description: "Take your lead list to the next level with our advanced data enrichment. We'll dig up valuable insights about your prospects like their contact info, job roles, and company details. Armed with this info, you can create highly personal and effective outreach campaigns.",
   content: (
     <div className="h-full w-full flex items-center justify-center text-white">
       <Image
         src="/images/Populated_Leadlist.webp"
         width={500}
         height={500}
         alt="Populated Leadlist"
       />
     </div>
   ),
 },
 {
   title: "Step 3: Crafting Ultra-Personalized Emails with AI",
   description: "Say hello to our AI-powered email crafting machine! It can create amazing, personalized email content for each of your prospects based on their preferences and pain points. No more boring bulk emails – your recipients will be impressed!",
   content: (
     <div className="h-full w-full flex items-center justify-center text-white">
       <Image
         src="/images/Example_email.webp"
         width={500}
         height={300}
         alt="Example Email Result"
       />
     </div>
   ),
 },
 {
   title: "Step 4: Launching Your Awesome Email Campaigns🚀🚀🚀",
   description: "It's go time! With your lead list populated, data enriched, and personalized emails ready, you can easily schedule and automate your email outreach using our super-friendly platform. Sit back and relax while we ensure your messages reach the right inboxes at the right time.",
 },
];