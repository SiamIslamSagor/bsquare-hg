import { Variants } from "framer-motion";

// Fade in animation
export const fadeIn = (
  direction: "up" | "down" | "left" | "right" = "up",
  delay: number = 0
): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

// Stagger container for children animations
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

// Card hover animation
export const cardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeOut",
    },
  },
};

// Text character reveal animation
export const textReveal = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
    },
  }),
};

// Page transition animation
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
  },
  out: {
    opacity: 0,
    transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
  },
};
