"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string | any;
    description: React.ReactNode | any;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--neutral-900)",
    "var(--black)",
    "var(--neutral-900)",
    "var(--black)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--black), var(--black))",    
    "linear-gradient(to bottom right, var(--black), var(--black))",
    "linear-gradient(to bottom right, var(--black), var(--black))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="lg:h-[45rem] md:h-[50rem] py-12 h-[45rem] no-visible-scrollbar overflow-y-auto lg:flex justify-center relative space-x-10 rounded-md lg:p-12 md:p-20 p-12"
      ref={ref}
    >
      <h1 className="lg:hidden h-fit md:h-fit w-fit font-bold md:text-[56px] text-[42px] sticky top-0 lg:leading-tight md:leading-none leading-none flex lg:items-center text-left ">
        My Career and <br /> Expertise Journey.
      </h1>
      <h1 className="sm:hidden lg:block h-full w-fit font-bold text-[56px] sticky flex top-0 lg:leading-tight items-center text-left">
        My Career <br /> and Expertise <br /> Journey.
      </h1>
      <div className="div relative flex lg:items-start md:items-center justify-center md:p-12 py-20">
        <div className="max-w-2xl">
          <div className="lg:h-20 sm:h-20"/>
            {content.map((item, index) => (
              <div key={item.title + index} className="lg:m-8 md:m-2">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.2,
                  }}
                  className="text-2xl font-bold text-white"
                >
                  {item.title}
                </motion.h2>
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.2,
                  }}
                  className="text-md text-[#ABABAB] lg:max-w-lg md:max-w-full text-justify lg:pb-20 lg:mt-5 md:mt-10 md:pb-28 mt-5 pb-24"
                >
                  {item.description}
                </motion.div>
              </div>
            ))}
            <div className="h-16 md:h-0 lg:h-12"/>
          </div>
        </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "lg:block md:hidden h-[320px] w-[480px] rounded-3xl sticky top-40 overflow-hidden md:bg-cover items-center",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};