"use client";
import { AnimatePresence, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import "@/sections/Header/index.css";
import { useState, useEffect } from "react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight.tsx";
import { Resend } from "resend";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const Header = () => {
  const resend = new Resend("re_LnJF5Fy8_AZkfsaFBRZqs1umEdmT2Unom");
  const supabase = useSupabaseClient();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ text: "", isError: false });
  const [isValidEmail, setIsValidEmail] = useState(true);
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === "") {
      console.log("Please enter an email first.");
      setMessage({ text: "Please enter an email first.", isError: true });
    } else if (!isValidEmail) {
      console.log("Please enter a valid email address.");
      setMessage({
        text: "Please enter a valid email address.",
        isError: true,
      });
    } else {
      // Attempt to find the email in the database
      let { data: existingEmails, error: fetchError } = await supabase
        .from("emails")
        .select()
        .eq("email", email.toLowerCase());

      if (fetchError) {
        console.error("Error fetching emails:", fetchError);
        setMessage({
          text: "An error occurred. Please try again.",
          isError: true,
        });
        return;
      }

      if (existingEmails != null && existingEmails.length > 0) {
        // Email already exists in the database
        setMessage({
          text: "Email was already sent. (Please check spam folder)",
          isError: true,
        });
      } else {
        // Insert the new email since it does not exist
        const { data: insertData, error: insertError } = await supabase
          .from("emails")
          .insert([{ email: email.toLowerCase() }]);

        if (insertError) {
          console.error("Error inserting email:", insertError);
          setMessage({
            text: "Failed to submit your email. Please try again.",
            isError: true,
          });
        } else {
          console.log("Form submitted successfully!");
          setMessage({
            text: "Submitted Successfully! We'll return to you within 1-3 business days😄.",
            isError: false,
          });
          setEmail("");
        }
      }
    }
  };
  useEffect(() => {
    if (message.text !== "") {
      const timer = setTimeout(() => {
        setMessage({ text: "", isError: false });
      }, 4800); // Clears the message after 4.8 seconds
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [message.text]);

  return (
    <div className="flex h-[100vh] max-w-full flex-col items-center justify-center md:flex-row md:pb-24 relative z-40 ">
      <motion.div className="flex flex-col gap-6 items-center text-center -translate-y-16" >
        
         <HeroHighlight>
          <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl  md:text-7xl lg:text-8xl font-semibold pt-36 "
        >
          Think Different. <br></br>  {" "}
          <Highlight className="text-white leading-snug">
          Think Octic
        </Highlight>
          
        </motion.h1>
        </HeroHighlight>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-gray-400 text-xl sm:text-2xl leading-normal font-semibold mt-4"
        >
          Automations with Effective Outcomes. <br></br>Your One Stop To Time Freedom
        </motion.p>
        {/* <Span className="bg-black px-4 py-1 rounded-full text-white">
          25% off for early signups
        </Span> */}
        <motion.div
          className="flex items-center justify-center gap-4 w-auto sm:w-full relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <AnimatePresence>
            {message.text && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0,
                  exit: { duration: 0.5 },
                }}
                className={`absolute bottom-full left-0 ml-1 w-full text-start ${
                  message.isError ? "text-red-500" : "text-green-500"
                }`}
              >
                {message.text}
              </motion.div>
            )}
          </AnimatePresence>
          {/* <Input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto"
            style={{ width: "300px" }}
            onChange={handleEmailChange}
          /> */}  
          <button className="btn active:scale-95 active:signal rounded-lg w-fit" data-cal-namespace=""
              data-cal-link="octic/15min"
              data-cal-config='{"layout":"month_view"}'>
            Book a Call!
          </button>
        </motion.div>
        <motion.div
          className="flex row"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="loader absolute translate-y-1 mr-2">
          <div className="circle circle-1 absolute"></div>
          <div className="circle circle-2 absolute"></div>
          <div className="circle circle-3 absolute"></div>
          <div className="circle circle-4 absolute"></div>
          </div>
          <p className="text-sm"> Save Time Now!</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
