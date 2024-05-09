"use client";
import { motion } from "framer-motion";
import "@/sections/Header/index.css";
import { Input } from "@/components/ui/input";
import { Span } from "@/components/ui/moving-border";
import { IconArrowRight } from "@tabler/icons-react";


const Header = () => {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center w-[50vw] md:flex-row md:pb-24 relative">
      <div className="flex flex-col sm:items-start gap-6 items-center text-center sm:text-left -translate-y-16">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl font-semibold leading-snug pt-36 text-gradient_text_white"
        >
          Not A Developer <br></br>
          Agency.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-gray-400 text-l sm:text-xl leading-normal text-gradient_text_white font-semibold"
        >
          We Automate Entire Businesses.<br></br>
          We Will Automate Anything That Can Be Automated. <br></br>
        </motion.p>
        <Span className="bg-black px-4 py-1 rounded-full text-white">
          25% off for early signups
        </Span>
        <motion.div
          className="flex items-center gap-4 w-auto sm:w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto"
            style={{ width: "300px" }}
          />
          <button className="btn active:scale-95 active:signal rounded-lg">
            Send
            <IconArrowRight />
          </button>
        </motion.div>
      </div>
    </div>
  );
};
const testimonials = [
  {
    quote: "Social Media Insights Endpoint",
    name: "",
    title: "",
  },
  {
    quote: "Sentiment Analysis Endpoint",
    name: "",
    title: "",
  },
  {
    quote: "Text Summarization Endpoint",
    name: "",
    title: "",
  },
  {
    quote: "Content Generation Endpoint",
    name: "",
    title: "",
  },
  {
    quote: "Machine Translation Endpoint",
    name: "",
    title: "",
  },
  {
    quote: "Topic Modeling Endpoint",
    name: "",
    title: "",
  },
  {
    quote: "Fraud Detection Endpoint",
    name: "",
    title: "",
  },
  {
    quote: "Risk Assessment Endpoint",
    name: "",
    title: "",
  },
  {
    quote: "Customer Churn Prediction Endpoint",
    name: "",
    title: "",
  },
  {
    quote: "Recommendation Engine Endpoint",
    name: "",
    title: "",
  },
  {
    quote: "Image Recognition Endpoint",
    name: "",
    title: "",
  },
  {
    quote: "Speech-to-Text Endpoint",
    name: "",
    title: "",
  },
  {
    quote: "Text-to-Speech Endpoint",
    name: "",
    title: "",
  },
  {
    quote: "Anomaly Detection Endpoint",
    name: "",
    title: "",
  },
  {
    quote: "Data Filtering and Cleaning Endpoint",
    name: "",
    title: "",
  },
  {
    quote: "Data Visualization Endpoint",
    name: "",
    title: "",
  },
  {
    quote: "Custom AI Model Development Endpoint",
    name: "",
    title: "",
  },
  {
    quote: "Chatbot Development Endpoint",
    name: "",
    title: "",
  },
  {
    quote: "Smart Workflow Automation Endpoint",
    name: "",
    title: "",
  },
];
export default Header;
