"use client";

import { useRef, useEffect, ElementType } from "react";
import { motion, useAnimation } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  el?: ElementType;
  className?: string;
  animation?: "fade" | "slide-up" | "slide-down";
};

const defaultAnimations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "slide-up": {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  },
  "slide-down": {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
  },
};

export const AnimatedText = ({
  text,
  el: Wrapper = "span",
  className = "",
  animation = "fade",
}: AnimatedTextProps) => {
  const controls = useAnimation();
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Always animate immediately on mount
    controls.start("animate");
  }, [controls]);

  const getAnimationVariants = () => {
    return defaultAnimations[animation];
  };

  return (
    <div ref={textRef}>
      <motion.div
        initial="initial"
        animate={controls}
        variants={getAnimationVariants()}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Wrapper className={className}>{text}</Wrapper>
      </motion.div>
    </div>
  );
};
