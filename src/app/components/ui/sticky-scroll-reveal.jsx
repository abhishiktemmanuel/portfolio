'use client';
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"], // Modified offset
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / (cardLength - 1));
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "rgba(26, 26, 26, 0.25)",
    "rgba(0, 48, 63, 0.25)",
    "rgba(53, 59, 69, 0.25)",
    "rgba(88, 28, 135, 0.25)"
  ];


  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-screen overflow-y-auto flex flex-col lg:flex-row justify-between relative p-4 lg:p-10"
      ref={ref}>
      <div className="w-full lg:w-3/4 relative flex flex-col justify-center px-4 lg:px-10">
        <div className="max-w-2xl max-h-[90vh] mx-auto">
          {content.map((item, index) => (
            <motion.div
              key={item.title + index}
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: activeCard === index ? 1 : 0.3,
                y: activeCard === index ? 0 : 20
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2
                className="text-3xl lg:text-4xl font-bold text-white mb-6"
              >
                {item.title}
              </motion.h2>
              <motion.h3
                className="text-2xl lg:text-3xl font-bold text-white mb-6"
              >
                {item.degree}
              </motion.h3>
              <motion.h4
                className="text-xl lg:text-2xl font-bold text-white mb-6"
              >
                {item.year}
              </motion.h4>

              <motion.p
                className="text-lg text-gray-300 leading-relaxed"
              >
                {item.description}
              </motion.p>
              <motion.p
                className="text-base text-gray-300 leading-relaxed"
              >
                {item.location}
              </motion.p>
            </motion.div>
          ))}
          <div className="h-80" /> {/* Increased padding height */}
        </div>
      </div>

      <motion.div
        className={cn(
          "hidden lg:block w-1/2 sticky top-10 h-[80vh] rounded-2xl overflow-hidden",
          contentClassName
        )}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          transition: { duration: 0.5 }
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          {content[activeCard].content ?? null}
        </div>
      </motion.div>
    </motion.div>
  );
};
