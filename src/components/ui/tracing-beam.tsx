import React, { useEffect, useRef, useState, useCallback, useMemo  } from "react";
import { motion, useTransform, useScroll, useSpring, useInView, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

type TracingBeamProps = {
    children: React.ReactNode;
    className: string;
  };
  
  const TracingBeam: React.FC<TracingBeamProps> = ({ children, className}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const contentRef = useRef<HTMLDivElement>(null);
    const [svgHeight, setSvgHeight] = useState(2000);
    const circlePositions = useMemo(() => [[98,20], [570,20],[1040,20],[1790, 20]], []);

    const setSvgHeightAndTitlePositions = useCallback(() => {
        if (contentRef.current) {
          const lastCirclePosition = circlePositions[circlePositions.length - 1][0];
          const svgHeightWithBuffer = Math.max(1000, lastCirclePosition + 100);
          setSvgHeight(svgHeightWithBuffer);
        }
      }, [circlePositions]);

    useEffect(() => {
        setSvgHeightAndTitlePositions();
    }, [setSvgHeightAndTitlePositions]);

    const y1 = useSpring(
        useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
        {
            stiffness: 300,
            damping: 90,
        }
    );
    const y2 = useSpring(
        useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
        {
            stiffness: 300,
            damping: 90,
        }
    );

    return (
        <motion.div ref={ref} className={cn("relative w-full max-w-4xl mx-auto h-full min-h-[500px]", className)}>
            <div className="absolute -left-5 md:-left-20 top-3">
                <svg viewBox={`0 0 40 ${svgHeight}`} width="40" height={svgHeight} className="ml-4 block" aria-hidden="true">
                    <motion.path
                        d={`M 20 0 V ${svgHeight}`}
                        fill="none"
                        stroke="#9091A0"
                        strokeLinejoin="round"
                        strokeOpacity="0.16"
                        transition={{ duration: 10 }}
                    ></motion.path>
                    <motion.path
                        d={`M 20 0 V ${svgHeight}`}
                        fill="none"
                        stroke="url(#gradient)"
                        strokeLinejoin="round"
                        strokeWidth="1.28"
                        className="motion-reduce:hidden"
                        transition={{ duration: 10 }}
                    ></motion.path>
                    {circlePositions.map(([y, x], index) => (
                        <React.Fragment key={index}>
                            <motion.circle
                                className={"hidden sm:block"}
                                cx={20}
                                cy={y + 15}
                                r="19"
                                fill="#1F2937"
                                stroke="url(#gradient)"
                                strokeWidth="2"
                                transition={{ duration: 8, repeat: Infinity, ease: "circInOut", repeatType: "mirror" }}
                                animate={{
                                    strokeDasharray: [45, 15], // Adjusted values for strokeDasharray for the first line
                                    strokeDashoffset: [0, 45], // Adjusted strokeDashoffset for the first line
                                }}
                            />
                            <text
                                className={"hidden sm:block"}
                                x={20}
                                y={y+15}
                                fontSize="19"
                                fontWeight="bold"
                                fill="#18CCFC"
                                textAnchor="middle"
                                dy=".3em"
                            >
                                {index + 1}
                            </text>
                        </React.Fragment>
                    ))}
                    <defs>
                        <motion.linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="" x2="0" y1={y1} y2={y2}>
                            <stop stopColor="#18CCFC" stopOpacity="0"></stop>
                            <stop stopColor="#18CCFC"></stop>
                            <stop offset="0.328" stopColor="#6344F5"></stop>
                            <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
                        </motion.linearGradient>
                    </defs>
                </svg>
            </div>
            <div ref={contentRef}>{children}</div>
        </motion.div>
    );
};

export default TracingBeam;
