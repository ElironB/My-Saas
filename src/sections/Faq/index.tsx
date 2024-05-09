import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function Faq() {
  // Array of questions and answers
  const faqData = [
    {
      key: "1",
      question: "What is React?",
      answer: "React is a declarative, efficient, and flexible JavaScript library for building user interfaces.",
    },
    {
      key: "2",
      question: "Why use React?",
      answer: "React allows developers to create large web applications that can change data, without reloading the page.",
    },
    {
      key: "3",
      question: "How does React work?",
      answer: "React creates a virtual DOM in memory, where it does all the necessary manipulations, before making the changes in the DOM to make it faster.",
    },
  ];

  return (
    <div className="flex flex-col p-12 rounded-lg sm:w-1/2 w-3/4 mx-auto relative">
      <h1 className="text-5xl mb-4 justify-start items-start">
        Frequently Asked{" "}
        <span style={{ fontFamily: "Courier New", fontWeight: "bold" }}>
          Questions
        </span>
      </h1>
      <Accordion type="single" collapsible>
        {faqData.map((item) => (
          <AccordionItem key={item.key} value={item.key}>
            <AccordionTrigger className="text-xl">{item.question}</AccordionTrigger>
            <AccordionContent className="text-lg">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
