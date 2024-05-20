"use client"
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { IconPhone } from "@tabler/icons-react";

export const Between = () => {
  return (
    <>
      <motion.div
        className="px-[100px] mt-52 h-1/4 mx-auto flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-5xl text-center md:text-center lg:text-start font-semibold">
          &quot;Octic shows that they <br></br>know the art of systems.&quot;
        </h1>
      </motion.div>
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
      <motion.div
        className="px-[20px] mx-auto flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-5xl text-center font-semibold">
          &quot;Experience a you&apos;ll never go<br></br> back&quot;
          transformation
        </h1>
      </motion.div>
      <motion.div
        className=" w-[80vw] md:w-[70w] lg:w-[50vw] h-1/4 mx-auto mt-6 flex flex-col space-y-6 items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="text-xl md:text-2xl lg:text-2xl font-semibold text-center text-zinc-400">
          Octic replaces outdated systems,<br></br> empowers your team to be up
          to 56% more efficient, and reclaims your most valuable asset:{" "}
          <span style={{ fontWeight: "bold" }}>
            Time.
          </span>
        </p>
        <button
          className="btn active:scale-95 rounded-lg w-40 "
          data-cal-namespace=""
          data-cal-link="octic/15min"
          data-cal-config='{"layout":"month_view"}'
        >
          Contact Us
          <IconPhone style={{ marginLeft: "4px" }} />
        </button>
      </motion.div>
      <motion.div
        className=" w-full h-1/4 mt-12 flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Image
          src="/divider-1.svg"
          width={400}
          height={400}
          alt="misc"
          className=""
        />
      </motion.div>
    </>
  );
};
