"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  once?: boolean;
}

export function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 50,
  duration = 0.7,
  once = true,
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Make elements visible immediately on mount
    setIsVisible(true);

    // Set up intersection observer for scroll animations
    if (typeof window !== "undefined" && window.IntersectionObserver) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              if (once) {
                observer.unobserve(entry.target);
              }
            } else if (!once) {
              setIsVisible(false);
            }
          });
        },
        {
          threshold: 0.1, // Trigger when 10% of the element is visible
          rootMargin: "0px", // No margin
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }

    // Fallback for browsers without IntersectionObserver
    return () => setIsVisible(true);
  }, [once]);

  const getVariants = () => {
    const baseVariants = {
      hidden: {
        opacity: 0,
        transition: {
          duration: 0.1,
          ease: "easeOut",
        },
      },
      visible: {
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    };

    switch (direction) {
      case "up":
        return {
          ...baseVariants,
          hidden: {
            ...baseVariants.hidden,
            y: distance,
          },
          visible: {
            ...baseVariants.visible,
            y: 0,
          },
        };
      case "down":
        return {
          ...baseVariants,
          hidden: {
            ...baseVariants.hidden,
            y: -distance,
          },
          visible: {
            ...baseVariants.visible,
            y: 0,
          },
        };
      case "left":
        return {
          ...baseVariants,
          hidden: {
            ...baseVariants.hidden,
            x: distance,
          },
          visible: {
            ...baseVariants.visible,
            x: 0,
          },
        };
      case "right":
        return {
          ...baseVariants,
          hidden: {
            ...baseVariants.hidden,
            x: -distance,
          },
          visible: {
            ...baseVariants.visible,
            x: 0,
          },
        };
      default:
        return baseVariants;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={getVariants()}
      className={className}
      style={{
        willChange: "transform, opacity",
      }}
    >
      {children}
    </motion.div>
  );
}
