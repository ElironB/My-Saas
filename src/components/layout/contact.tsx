"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Textarea } from "../ui/textarea";

export function DialogDemo(props: { element: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [problem, setProblem] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isTopicEmpty, setIsTopicEmpty] = useState(false);
  const [isProblemEmpty, setIsProblemEmpty] = useState(false);
  const [message, setMessage] = useState({ text: "", isError: false });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail));
  };

  const handleTopicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTopic = e.target.value;
    setTopic(newTopic);
    setIsTopicEmpty(newTopic.trim() === "");
  };
  const handleProblemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProblem = e.target.value;
    setProblem(newProblem);
    setIsProblemEmpty(newProblem.trim() === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isProblemEmpty && !isTopicEmpty && problem.trim() !== "" && topic.trim() !== "") {
      console.log("Form submitted successfully!");
      setMessage({
        text: "Submitted Successfully! We'll return to you within 1-3 business days. Thank you for your feedback 😄",
        isError: false,
      });
      setName("");
      setEmail("");
      setTopic("");
    } else {
      let errorMsg = "";
      if (isTopicEmpty || topic.trim() === "") {
        errorMsg += "Please enter a topic.";
      }
      if (isProblemEmpty || problem.trim() === "") {
        errorMsg += "Please enter a problem.";
      }
      setMessage({ text: errorMsg, isError: true });
    }
  };

  const TriggerElement =
    props.element === "button" ? (
      <DialogTrigger asChild>
        <button>Contact Us</button>
      </DialogTrigger>
    ) : (
      <DialogTrigger asChild>
        <a className="hover:underline">Contact Us</a>
      </DialogTrigger>
    );

  return (
    <Dialog>
      {TriggerElement}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            Fill in the details to your request. Click save when you&apos;re
            done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="gap-6 py-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Label htmlFor="name" className="w-20 shrink-0">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Thomas Shelby"
                className="w-full px-4 py-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-4">
              <Label htmlFor="topic" className="w-20 shrink-0">
                Topic*
              </Label>
              <Input
                id="topic"
                placeholder="Bug In Dashboard"
                className={`w-full px-4 py-2 ${
                  isTopicEmpty || topic.trim() === "" ? "border-red-500" : ""
                }`}
                value={topic}
                onChange={handleTopicChange}
              />
            </div>
            <div className="flex items-center gap-4">
              <Label htmlFor="Problem" className="w-20 shrink-0">
                What&apos;s seems to be the problem?*
              </Label>
              <Textarea
                id="problem"
                placeholder="I love your app too much"
                className={`w-full px-4 py-2 ${
                  isProblemEmpty || problem.trim() === "" ? "border-red-500" : ""
                }`}
                value={problem}
              />
            </div>
            {message.text && (
              <div
                className={`ml-20 ${
                  message.isError ? "text-red-500" : "text-green-500"
                }`}
              >
                {message.text}
              </div>
            )}
          </div>
        </form>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            Send
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}