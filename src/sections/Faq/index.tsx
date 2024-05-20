"use client"
import React from "react";
import "@/sections/Header/index.css";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { motion } from "framer-motion";
import Image from "next/image";
import { IconPhone } from "@tabler/icons-react";

export default function Faq() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 py-10 relative h-full w-full pb-36 "
      id="faq"
    >
      <motion.div
        className="flex flex-col sm:ml-32 ml-2 rounded-lg mx-auto relative "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="sm:text-6xl text-4xl mb-4 justify-start items-start">
          Frequently Asked{" "}
          <span style={{ fontFamily: "Courier New", fontWeight: "bold" }}>
            Questions
          </span>
        </h1>
        <Accordion type="single" collapsible>
          {faqData.map((item) => (
            <AccordionItem key={item.key} value={item.key}>
              <AccordionTrigger className="text-xl text-start">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeIn" }}
        viewport={{ once: true }}
        className="flex-col rounded-lg mx-auto lg:w-fit md:w-full sm:w-fit"
      >
        <CardContainer className="inter-var p-9 ">
          <CardBody className="bg-gray-50 relative lg:w-full md:w-full h-[50vh] flex-col items-center justify-center dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-900 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[22rem] rounded-xl p-4">
            <CardItem translateZ="50" rotateZ={10} className="p-9">
              <div className="w-[144px] h-[144px] bg-white rounded-full mb-5">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline={true}
                  className="object-cover w-full h-full scale-95 rounded-full"
                >
                  <source src="/bookcall.webm" type="video/mp4" />
                </video>
              </div>
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-2xl text-center font-bold text-neutral-600 dark:text-white"
            >
              Book a 15-minute intro call Now!
            </CardItem>
            <CardItem translateZ="100">
              <div className="flex items-center justify-center p-12">
                <button
                  className="btn active:scale-95 rounded-lg w-40 "
                  data-cal-namespace=""
                  data-cal-link="octic/15min"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Contact Us
                  <IconPhone style={{ marginLeft: "4px" }} />
                </button>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </motion.div>
    </div>
  );
}
const faqData = [
  {
    key: "1",
    question: "What kinds of online tasks can you guys automate for me?",
    answer:
      "We're experts in automating all sorts of online stuff – from marketing tasks to customer support, data entry, and beyond. If it's repetitive and boring online work or it’s a problem, we can probably systemize it for you.",
  },
  {
    key: "2",
    question: "Tell me more about this free system audit you offer. What's the catch?",
    answer:
      "There's no catch! We'll take a deep dive into your online business, pinpoint areas ripe for system upgrades, and give you a personalized report with our recommendations – all for free. It's a great way to see the potential impact automation can have on your business.",
  },
  {
    key: "3",
    question: "I'm not a tech whiz. Will I be able to use your upgrades?",
    answer:
      "You don't need to be a tech genius! Our tools are designed to be super easy to use, and they work seamlessly with your existing systems. Most of the time, they just work without any prompting. We handle all the tech stuff, so you can relax and let the tech do the work.",
  },
  {
    key: "4",
    question: "How much does all this awesome automation cost?",
    answer:
      "We get it, budgets are important. We offer affordable, customized solutions to fit your needs and your wallet. Plus, our solutions are way more effective than the competition, so you get a lot of bang for your buck.",
  },
  {
    key: "5",
    question: "Wait, is automation going to take away my employees' jobs?",
    answer:
      "Not at all! Automation is all about empowering your team. By letting the robots handle the boring stuff, your employees can focus on more creative, strategic work that makes them (and you!) happier.",
  },
  {
    key: "6",
    question: "What happens after you've set up my automation system? Do you just disappear?",
    answer:
      "Definitely not! We're in this for the long haul. We'll stick around to provide support, make sure everything's running smoothly, and help you get the most out of your automation. Think of us as your automation buddy.",
  },
  {
    key: "7",
    question: "What if we are a small company?",
    answer:
      "No problem, We understand running a small business can be even harder that running a huge corporation. SO, The first 2 system upgrades are on the House to help you get going.",
  },
  {
    key: "8",
    question: "Okay, I'm interested. What do I do next?",
    answer:
      "Awesome! Just hit us up to schedule your free business audit. We'll chat about your goals, take a look at your setup, and create a custom automation plan just for you.",
  },
  {
    key: "9",
    question: "Why should I choose you guys over other automation companies?",
    answer:
      "We're the total package – experts in our field, super affordable, and we actually care about your success. We take the time to get to know your business and create solutions that fit you perfectly.",
  },
  {
    key: "10",
    question: "Any other questions?",
    answer:
      "No question is too big or too small! We're happy to chat about anything you're curious about. Just ask away!",
  },
];

