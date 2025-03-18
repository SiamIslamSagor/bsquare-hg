"use client";

import { useRef, useEffect, ElementType } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  el?: ElementType;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
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
  once = true,
  repeatDelay = 3000,
  animation = "fade",
}: AnimatedTextProps) => {
  const controls = useAnimation();
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once });

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const show = async () => {
      await controls.start("animate");

      if (!once) {
        timeout = setTimeout(async () => {
          await controls.start("exit");
          await controls.start("initial");
          await controls.start("animate");
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start("initial");
    }

    return () => clearTimeout(timeout);
  }, [isInView, controls, once, repeatDelay]);

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
