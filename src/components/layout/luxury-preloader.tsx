"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

export function LuxuryPreloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLElement | null>(null);
  const lineLeftRef = useRef<HTMLDivElement>(null);
  const lineRightRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Timeline
  const tl = useRef<gsap.core.Timeline | null>(null);

  // Initialization flag
  const hasInitialized = useRef(false);

  // Initialize animations immediately
  useEffect(() => {
    // Only run once on client side
    if (typeof window !== "undefined" && !hasInitialized.current) {
      setIsClient(true);
      hasInitialized.current = true;

      // Short timeout to ensure DOM is ready
      const initTimer = setTimeout(() => {
        animatePreloader();
      }, 10);

      return () => {
        clearTimeout(initTimer);
        if (tl.current) {
          tl.current.kill();
        }
      };
    }
  }, []);

  // Function to handle all animations
  const animatePreloader = () => {
    try {
      // Create GSAP timeline immediately
      tl.current = gsap.timeline();

      // Set initial states if elements exist
      if (lineLeftRef.current && lineRightRef.current) {
        gsap.set([lineLeftRef.current, lineRightRef.current], {
          width: 0,
          opacity: 0,
        });
      }

      if (circleRef.current) {
        gsap.set(circleRef.current, {
          scale: 0,
          opacity: 0,
        });
      }

      // Get valid letter elements
      const letters = letterRefs.current.filter(Boolean);
      letters.forEach(letter => {
        if (letter) {
          gsap.set(letter, { y: 60, opacity: 0 });
        }
      });

      // Build timeline with safety checks
      if (tl.current) {
        // Line animations
        if (lineLeftRef.current) {
          tl.current.to(
            lineLeftRef.current,
            {
              width: "40%",
              opacity: 1,
              duration: 1.2,
              ease: "power3.inOut",
            },
            0.2
          );
        }

        if (lineRightRef.current) {
          tl.current.to(
            lineRightRef.current,
            {
              width: "40%",
              opacity: 1,
              duration: 1.2,
              ease: "power3.inOut",
            },
            0.3
          );
        }

        // Circle animation
        if (circleRef.current) {
          tl.current.to(
            circleRef.current,
            {
              scale: 1,
              opacity: 1,
              duration: 1,
              ease: "elastic.out(1, 0.3)",
            },
            0.8
          );
        }

        // Letters animation
        if (letters.length > 0) {
          tl.current.to(
            letters,
            {
              y: 0,
              opacity: 1,
              stagger: 0.05,
              duration: 1,
              ease: "power3.out",
            },
            1.2
          );
        }
      }

      // Simulate loading progress
      const interval = setInterval(() => {
        setProgress(prev => {
          // Calculate new progress with easing toward the end
          const remaining = 100 - prev;
          const increment = Math.max(0.5, remaining * 0.05);
          const newProgress = prev + increment;

          return newProgress > 99.9 ? 100 : newProgress;
        });
      }, 100);

      // Preloader exit timing
      const timer = setTimeout(() => {
        clearInterval(interval);
        setProgress(100);

        // Play exit animation after a brief pause
        setTimeout(() => {
          try {
            // Animate out elements before hiding preloader
            if (letters.length > 0) {
              gsap.to(letters, {
                y: -60,
                opacity: 0,
                stagger: 0.03,
                duration: 0.6,
                ease: "power2.in",
              });
            }

            const lines = [lineLeftRef.current, lineRightRef.current].filter(
              Boolean
            );
            if (lines.length > 0) {
              gsap.to(lines, {
                width: 0,
                opacity: 0,
                duration: 0.8,
                ease: "power3.inOut",
              });
            }

            if (circleRef.current) {
              gsap.to(circleRef.current, {
                scale: 0,
                opacity: 0,
                duration: 0.6,
                ease: "power2.in",
                onComplete: () => {
                  setLoading(false);

                  // Dispatch event to show main content
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(new Event("preloaderComplete"));
                  }
                },
              });
            } else {
              // Fallback in case circle ref doesn't exist
              setLoading(false);

              // Dispatch event to show main content
              if (typeof window !== "undefined") {
                window.dispatchEvent(new Event("preloaderComplete"));
              }
            }
          } catch (error) {
            console.error("Error during exit animation:", error);
            setLoading(false);

            // Dispatch event even if there's an error
            if (typeof window !== "undefined") {
              window.dispatchEvent(new Event("preloaderComplete"));
            }
          }
        }, 500);
      }, 3000);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    } catch (error) {
      console.error("Error initializing animations:", error);

      // If animations fail, still show content after a delay
      setTimeout(() => {
        setLoading(false);

        // Dispatch event to show main content
        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("preloaderComplete"));
        }
      }, 3000);
    }
  };

  // Progress bar width animation
  useEffect(() => {
    if (!isClient) return;

    try {
      if (progressBarRef.current) {
        gsap.to(progressBarRef.current, {
          width: `${progress}%`,
          duration: 0.4,
          ease: "power1.out",
        });
      }

      // Use a safer approach for text content
      if (progressTextRef.current) {
        progressTextRef.current.textContent = Math.round(progress).toString();
      }
    } catch (error) {
      console.error("Error updating progress:", error);
    }
  }, [progress, isClient]);

  // For server-side rendering, return a static placeholder
  if (!isClient) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black">
        <div className="flex items-center justify-center w-full mb-10">
          <div
            className="h-[1px] bg-white/80 transform origin-right"
            style={{ width: "0%" }}
          />
          <div
            className="w-4 h-4 rounded-full bg-white mx-3 flex-shrink-0"
            style={{ opacity: 0 }}
          />
          <div
            className="h-[1px] bg-white/80 transform origin-left"
            style={{ width: "0%" }}
          />
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          ref={containerRef}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          key="luxury-preloader"
        >
          {/* Subtle grain overlay */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                background:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
                backgroundRepeat: "repeat",
                width: "100%",
                height: "100%",
              }}
            />
          </div>

          {/* Center design */}
          <div className="relative flex flex-col items-center justify-center h-screen z-10">
            {/* Horizontal lines */}
            <div className="flex items-center justify-center w-full mb-10">
              <div
                ref={lineLeftRef}
                className="h-[1px] bg-white/80 transform origin-right"
              />
              <div
                ref={circleRef}
                className="w-4 h-4 rounded-full bg-white mx-3 flex-shrink-0"
              />
              <div
                ref={lineRightRef}
                className="h-[1px] bg-white/80 transform origin-left"
              />
            </div>

            {/* Logo text */}
            <div className="overflow-hidden my-6">
              <div className="flex overflow-hidden">
                {Array.from("BSQUARE").map((letter, i) => (
                  <span
                    key={i}
                    ref={el => {
                      letterRefs.current[i] = el;
                      return undefined;
                    }}
                    className={`text-3xl md:text-4xl font-light tracking-widest text-white ${
                      i === 0 ? "font-medium" : ""
                    }`}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </div>

            {/* Progress */}
            <div className="mt-12 flex flex-col items-center opacity-80">
              <div className="relative w-[180px] h-[1px] bg-white/20 overflow-hidden">
                <div
                  ref={progressBarRef}
                  className="absolute top-0 left-0 h-full bg-white origin-left"
                  style={{ width: "0%" }}
                />
              </div>
              <div className="flex mt-3 items-center text-xs text-white/60 font-light tracking-widest">
                <span
                  ref={ref => {
                    progressTextRef.current = ref;
                  }}
                >
                  0
                </span>
                <span>%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
