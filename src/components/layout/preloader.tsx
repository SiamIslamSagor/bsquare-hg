"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const progressCompleted = useRef(false);
  const controls = useAnimation();

  // Client-side only state
  const [isClient, setIsClient] = useState(false);
  const [backgroundPatterns, setBackgroundPatterns] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      delay: number;
      duration: number;
    }>
  >([]);

  // Initialize client-side only values
  useEffect(() => {
    // Mark as client-side rendered
    setIsClient(true);

    // Generate background patterns only on client side
    setBackgroundPatterns(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 10 + Math.random() * 20,
        delay: Math.random() * 2,
        duration: 10 + Math.random() * 20,
      }))
    );

    // Start with subtle pulsating animation
    controls.start({
      scale: [1, 1.05, 1],
      transition: {
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
      },
    });

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 10;
        // Slow down progress as it approaches 100%
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 150);

    // Complete loading after minimum display time (2.8s)
    const timer = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      progressCompleted.current = true;

      // Small delay before hiding the preloader
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      controls.stop();
    };
  }, [controls]);

  // SVG animation variants
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  // Container animation variants
  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 0.95,
      filter: "blur(10px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Letter animation for the brand name
  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  // To prevent hydration mismatch, return null for server render
  if (!isClient) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
          key="preloader"
        >
          {/* Animated background elements */}
          {backgroundPatterns.map(pattern => (
            <motion.div
              key={pattern.id}
              className="absolute rounded-full bg-primary/5"
              style={{
                width: pattern.size,
                height: pattern.size,
                left: `${pattern.x}%`,
                top: `${pattern.y}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.5, 1],
                opacity: [0, 0.8, 0],
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                repeat: Infinity,
                duration: pattern.duration,
                delay: pattern.delay,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-background opacity-80" />

          {/* Core content */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
            animate={controls}
          >
            {/* SVG Logo Animation */}
            <div className="relative w-32 h-32 mb-8">
              <motion.svg
                width="128"
                height="128"
                viewBox="0 0 128 128"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial="hidden"
                animate="visible"
              >
                <motion.path
                  d="M64 16L16 48L64 80L112 48L64 16Z"
                  stroke="hsl(var(--primary))"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={pathVariants}
                />
                <motion.path
                  d="M16 80L64 112L112 80"
                  stroke="hsl(var(--primary))"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={pathVariants}
                  transition={{
                    ...pathVariants.visible.transition,
                    delay: 0.5,
                  }}
                />
                <motion.path
                  d="M16 48V80"
                  stroke="hsl(var(--primary))"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={pathVariants}
                  transition={{
                    ...pathVariants.visible.transition,
                    delay: 1,
                  }}
                />
                <motion.path
                  d="M112 48V80"
                  stroke="hsl(var(--primary))"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={pathVariants}
                  transition={{
                    ...pathVariants.visible.transition,
                    delay: 1,
                  }}
                />
                {/* Additional decorative elements */}
                <motion.circle
                  cx="64"
                  cy="48"
                  r="4"
                  fill="hsl(var(--primary))"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.3 }}
                />
              </motion.svg>
            </div>

            {/* Animated text */}
            <div className="text-3xl font-bold tracking-wider mb-8 flex">
              <motion.span
                className="text-primary"
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                custom={0}
              >
                B
              </motion.span>
              {Array.from("Square").map((letter, i) => (
                <motion.span
                  key={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i + 1}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Progress bar */}
            <motion.div
              className="w-64 h-1 bg-muted/50 rounded-full overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: "16rem" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </motion.div>

            {/* Loading text */}
            <motion.div
              className="relative h-6 mt-4 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.p
                className="text-sm text-muted-foreground absolute inset-0 flex justify-center items-center"
                initial={{ y: -20, opacity: 0 }}
                animate={{
                  y: progressCompleted.current ? 20 : 0,
                  opacity: progressCompleted.current ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {Math.round(progress)}% Loading...
              </motion.p>

              {progressCompleted.current && (
                <motion.p
                  className="text-sm text-primary absolute inset-0 flex justify-center items-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Ready to explore!
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
