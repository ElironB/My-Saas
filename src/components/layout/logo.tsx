"use client";
import Image from "next/image";
import { useState } from "react";

const Logo = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Image
        src="/hovered_logo.svg"
        alt="JoyfulAPI"
        width={34}
        height={34}
        className={`transition-opacity duration-1000 ease-in-out ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <Image
        src="/logo.svg"
        alt="JoyfulAPI"
        width={34}
        height={34}
        className={`absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
    </>
  );
};

export default Logo;
