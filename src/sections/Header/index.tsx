"use client";
import { AnimatePresence, motion } from "framer-motion";
import "@/sections/Header/index.css";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Span } from "@/components/ui/moving-border";
import { IconArrowRight } from "@tabler/icons-react";
import { Resend } from "resend";
import { useSupabaseClient } from "@supabase/auth-helpers-react";


const Header = () => {
  const resend = new Resend('re_LnJF5Fy8_AZkfsaFBRZqs1umEdmT2Unom');
  const supabase = useSupabaseClient();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ text: "", isError: false });
  const [isValidEmail, setIsValidEmail] = useState(true);

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
        .eq('email', email.toLowerCase());
    
      if (fetchError) {
        console.error('Error fetching emails:', fetchError);
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
          console.error('Error inserting email:', insertError);
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
    };
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
          className="flex items-center gap-4 w-auto sm:w-full relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
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
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto"
            style={{ width: "300px" }}
            onChange={handleEmailChange}
          />
          <button
            className="btn active:scale-95 active:signal rounded-lg"
            onClick={handleSubmit}
          >
            Send
            <IconArrowRight />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
