"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * PageLoader component ensures content is loaded before displaying
 * Wrap individual page components for proper loading transitions
 */
export function PageLoader({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const hasRunRef = useRef(false);

  useEffect(() => {
    // Prevent running the effect more than once
    if (hasRunRef.current) return;
    hasRunRef.current = true;

    // Set content to visible almost immediately (just a tiny delay for stability)
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 10);

    return () => {
      clearTimeout(timer);
      hasRunRef.current = false;
    };
  }, []);

  // If user prefers reduced motion, skip the animation
  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isReady ? 1 : 0 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="w-full min-h-screen" // Ensure minimum height for visibility
    >
      {children}
    </motion.div>
  );
}
