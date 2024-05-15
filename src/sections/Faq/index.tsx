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
  // Array of questions and answers
  const faqData = [
    {
      key: "1",
      question: "What is React?",
      answer:
        "React is a declarative, efficient, and flexible JavaScript library for building user interfaces.",
    },
    {
      key: "2",
      question: "Why use React?",
      answer:
        "React allows developers to create large web applications that can change data, without reloading the page.",
    },
    {
      key: "3",
      question: "How does React work?",
      answer:
        "React creates a virtual DOM in memory, where it does all the necessary manipulations, before making the changes in the DOM to make it faster.",
    },
    {
      key: "4",
      question: "What are components in React?",
      answer:
        "Components are independent and reusable bits of code in React, which serve as the building blocks of the application's UI.",
    },
    {
      key: "5",
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension for JavaScript recommended by React for describing what the UI should look like. It looks similar to HTML but has full capability of JavaScript.",
    },
    {
      key: "6",
      question: "What are props in React?",
      answer:
        "Props (short for properties) are a way of passing data from parent to child components, essentially making them read-only.",
    },
    {
      key: "7",
      question: "What are state and lifecycle in React?",
      answer:
        "State is a set of data that determines the component rendering and behavior. The lifecycle methods are special methods in React's class components that run at particular points in a component's existence.",
    },
    {
      key: "8",
      question: "How do you handle events in React?",
      answer:
        "In React, events are handled using camelCase syntax, and the event handlers are passed as functions rather than strings.",
    },
    {
      key: "9",
      question: "What is Redux?",
      answer:
        "Redux is a predictable state container for JavaScript apps, often used with React. It helps manage the state of the application in a single immutable state tree.",
    },
    {
      key: "10",
      question: "How do you perform conditional rendering in React?",
      answer:
        "Conditional rendering in React works the same way conditions work in JavaScript. Depending on some condition, certain JSX may be rendered, or other JSX may be rendered.",
    },
  ];

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 py-10 relative h-full w-full pb-36 "
      id="faq"
    >
      <motion.div className="flex flex-col ml-32 rounded-lg mx-auto relative " initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}>
        <h1 className="text-6xl mb-4 justify-start items-start">
          Frequently Asked{" "}
          <span style={{ fontFamily: "Courier New", fontWeight: "bold" }}>
            Questions
          </span>
        </h1>
        <Accordion type="single" collapsible>
          {faqData.map((item) => (
            <AccordionItem key={item.key} value={item.key}>
              <AccordionTrigger className="text-xl">
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
        className="flex-col rounded-lg mx-auto"
      >
        <CardContainer className="inter-var p-9">
          <CardBody className="bg-gray-50 relative h-[50vh] flex-col items-center justify-center dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-900 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[22rem] rounded-xl p-4">
            <CardItem
              translateZ="50"
              rotateZ={10}
              className=" p-9"
            >
              <div className="w-[144px] h-[144px] bg-white rounded-full mb-5 translate-x-14">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline={true}
                  className="object-cover translate-y-3"
                  width={144}
                  height={144}
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
            {/* <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Hover over this card to unleash the power of CSS perspective
              </CardItem> */}
            <CardItem
              translateZ="100"
            >
              <div className="flex items-center justify-center p-12 translate-x-3 -translate-y-4">
                <button
                  className="btn active:scale-95 rounded-lg w-40 "
                  data-cal-namespace=""
                  data-cal-link="eli-ben/30min"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Contact Us
                  <IconPhone style={{ marginLeft: "4px" }} />{" "}
                </button>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </motion.div>
    </div>
  );
}
