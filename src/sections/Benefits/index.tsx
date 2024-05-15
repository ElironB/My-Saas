import { HoverEffect } from "@/components/ui/card-hover-effect";
import Image from "next/image";

const Benefits: React.FC = () => {
  return (
    <div id="benefits" className="mb-52 sm:h-[80vh] h-full px-8 flex-col items-center mx-auto w-[65vw] justify-center ">
      <div className="mb-7 flex flex-col items-center ">
        <p className="text-7xl mb-4">Your Benefits.</p>
        <Image
          src="/benefits/underline.svg"
          alt="Underline"
          width={250}
          height={100}
          className="max-w-full h-auto absolute translate-x-16 translate-y-2"
        />
      </div>
       <HoverEffect items={data} />
    </div>
  );
};
const data = [
  {
    image: "/benefits/card1gif.webm",
    title: "Design board",
    description:
      "Easily manage your design queue with a Trello board.",
  },
  {
    image: "/benefits/card2gif.webm",
    background: "/benefits/card2.svg",
    title: "Lightning fast delivery",
    description:
      "Get your design one at a time in just a few days on average.",
  },
  {
    image: "/benefits/card1gif.webm",
    title: "Fixed monthly rate",
    description:
      "No surprises here! Pay the same fixed price each month.",
  },
  {
    image: "/benefits/card1gif.webm",
    title: "Top-notch quality",
    description:
      "Insane design quality at your fingertips whenever you need it.",
  },
  {
    image: "/benefits/card1gif.webm",
    title: "Flexible and scalable",
    description:
      "Scale up or down as needed, and pause or cancel at anytime.",
  },
  {
    image: "/benefits/card1gif.webm",
    title: "Unique and all yours",
    description:
      "Each of your designs is made especially for you and is 100% yours.",
  },
];

export default Benefits;
