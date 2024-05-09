"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string | JSX.Element;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  const supabaseClient = useSupabaseClient();

  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      console.log(error);
    }
  };
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.0) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className={cn(
          "flex max-w-fit fixed top-5 inset-x-0 mx-auto border-solid dark:border-white/[0.3] rounded-full dark:bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] py-2 pr-2 pl-8 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative transition-colors dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-slate-300 duration-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block font-semibold text-l">
              {navItem.name}
            </span>
          </Link>
        ))}
        {!user ? (
          <Link href="/sign-in">
            <button className="border text-l font-medium relative border-neutral-200 dark:border-white/[0.3] text-black dark:text-white px-4 py-2 rounded-lg">
              <span className="transition-colors hover:text-slate-300 duration-300">
                Login
              </span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
            </button>
          </Link>
        ) : (
          <div className="flex items-center">
              <button
                className="border text-l font-medium relative border-neutral-200 dark:border-white/[0.3] text-black dark:text-white px-4 py-2 rounded-lg"
                data-cal-namespace=""
                data-cal-link="eli-ben/30min"
                data-cal-config='{"layout":"month_view"}'
              >
                <span className="transition-colors hover:text-slate-300 duration-300">
                  Get a Quote!
                </span>
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
              </button>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
