"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParticleProps {
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  opacity: number;
  rotation: number;
}

type BackgroundVariant =
  | "default"
  | "gradient"
  | "particles"
  | "geometric"
  | "noise";

interface InteractiveBackgroundProps {
  variant?: BackgroundVariant;
  className?: string;
  intensity?: "light" | "medium" | "heavy";
  colorScheme?: "primary" | "secondary" | "accent" | "custom";
  customColors?: string[];
  children?: React.ReactNode;
}

export function InteractiveBackground({
  variant = "default",
  className,
  intensity = "medium",
  colorScheme = "primary",
  customColors,
  children,
}: InteractiveBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [particles, setParticles] = useState<ParticleProps[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [keyboardControl, setKeyboardControl] = useState(false);
  const [announcement, setAnnouncement] = useState<string | null>(null);

  // Generate color palette based on colorScheme
  const getColorPalette = () => {
    switch (colorScheme) {
      case "primary":
        return [
          "hsl(var(--primary) / 0.05)",
          "hsl(var(--primary) / 0.1)",
          "hsl(var(--primary) / 0.15)",
        ];
      case "secondary":
        return [
          "hsl(var(--secondary) / 0.05)",
          "hsl(var(--secondary) / 0.1)",
          "hsl(var(--secondary) / 0.15)",
        ];
      case "accent":
        return [
          "hsl(var(--accent) / 0.05)",
          "hsl(var(--accent) / 0.1)",
          "hsl(var(--accent) / 0.15)",
        ];
      case "custom":
        return (
          customColors || [
            "hsl(var(--primary) / 0.05)",
            "hsl(var(--primary) / 0.1)",
            "hsl(var(--primary) / 0.15)",
          ]
        );
      default:
        return [
          "hsl(var(--primary) / 0.05)",
          "hsl(var(--primary) / 0.1)",
          "hsl(var(--primary) / 0.15)",
        ];
    }
  };

  // Get number of particles based on intensity
  const getParticleCount = () => {
    switch (intensity) {
      case "light":
        return 40;
      case "medium":
        return 150;
      case "heavy":
        return 250;
      default:
        return 100;
    }
  };

  const applySpecialEffect = useCallback((effectType: string) => {
    console.log(`Special effect requested: ${effectType}`);
  }, []);

  // Initialize dimensions and particles
  useEffect(() => {
    if (!containerRef.current || isInitialized) return;

    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });

        // Generate particles
        const colors = getColorPalette();
        const newParticles: ParticleProps[] = [];
        const particleCount = getParticleCount();
        console.log("particleCount:", particleCount);
        for (let i = 0; i < particleCount; i++) {
          newParticles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 60 + 20,
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: Math.random() * 1.5 + 0.5,
            opacity: Math.random() * 0.6 + 0.1,
            rotation: Math.random() * 360,
          });
        }

        setParticles(newParticles);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    setIsInitialized(true);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorScheme, intensity, isInitialized, customColors]);

  // Add keyboard controls for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k") {
        const newState = !keyboardControl;
        setKeyboardControl(newState);
        setAnnouncement(
          newState
            ? "Keyboard control mode activated. Press 1, 2, or 3 for special effects."
            : "Keyboard control mode deactivated."
        );
        return;
      }

      if (keyboardControl) {
        switch (e.key) {
          case "1":
            applySpecialEffect("pulse");
            break;
          case "2":
            applySpecialEffect("wave");
            break;
          case "3":
            applySpecialEffect("explode");
            break;
          default:
            return;
        }
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyboardControl, applySpecialEffect]);

  // Clear announcements after they've been read
  useEffect(() => {
    if (announcement) {
      const timer = setTimeout(() => {
        setAnnouncement(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [announcement]);

  // Different background styles based on variant
  const renderBackground = () => {
    console.log("variant:", variant);
    switch (variant) {
      case "gradient":
        return (
          <motion.div
            className="absolute inset-0 opacity-50 bg-gradient-to-br from-transparent via-primary/5 to-transparent"
            animate={{
              background: [
                "linear-gradient(45deg, transparent 0%, hsl(var(--primary) / 0.05) 50%, transparent 100%)",
                "linear-gradient(135deg, transparent 0%, hsl(var(--primary) / 0.07) 50%, transparent 100%)",
                "linear-gradient(225deg, transparent 0%, hsl(var(--primary) / 0.05) 50%, transparent 100%)",
                "linear-gradient(315deg, transparent 0%, hsl(var(--primary) / 0.07) 50%, transparent 100%)",
                "linear-gradient(45deg, transparent 0%, hsl(var(--primary) / 0.05) 50%, transparent 100%)",
              ],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        );

      case "geometric":
        return (
          <>
            {/* Subtle backdrop filter effect */}
            <div className="absolute inset-0 backdrop-blur-[1px] bg-background/20" />

            {/* Main geometric elements - reduced count */}
            {particles.slice(0, 40).map((particle, index) => (
              <motion.div
                key={index}
                className="absolute rounded-md bg-primary/5"
                initial={{
                  x: particle.x,
                  y: particle.y,
                  width: particle.size,
                  height: particle.size,
                  opacity: particle.opacity,
                  rotate: particle.rotation,
                }}
                animate={{
                  x: [
                    particle.x,
                    particle.x + Math.sin(index * 0.5) * 20,
                    particle.x - Math.sin(index * 0.3) * 20,
                    particle.x,
                  ],
                  y: [
                    particle.y,
                    particle.y - Math.cos(index * 0.5) * 20,
                    particle.y + Math.cos(index * 0.3) * 20,
                    particle.y,
                  ],
                  rotate: [
                    particle.rotation,
                    particle.rotation + 45,
                    particle.rotation + 90,
                    particle.rotation + 180,
                  ],
                  opacity: [
                    particle.opacity,
                    particle.opacity * 1.2,
                    particle.opacity * 0.9,
                    particle.opacity,
                  ],
                  scale: [1, 1.03, 0.97, 1],
                }}
                transition={{
                  duration: particle.speed * 60, // Increased duration for better performance
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                style={{
                  backgroundColor: particle.color,
                  mixBlendMode: "multiply",
                  boxShadow: "0 0 30px rgba(0,0,0,0.03)",
                  backdropFilter: "blur(1px)",
                }}
              />
            ))}

            {/* Static gradient */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/[0.01] via-transparent to-primary/[0.01]" />

            {/* Professional accent lines */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute h-[1px] w-3/4 left-1/2 top-1/4 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              <div className="absolute h-[1px] w-1/2 left-1/4 top-2/3 transform -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
              <div className="absolute w-[1px] h-1/2 left-1/3 top-1/4 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
              <div className="absolute w-[1px] h-3/4 left-2/3 top-1/8 bg-gradient-to-b from-transparent via-primary/15 to-transparent" />
            </div>

            {/* Reduced floating dots with slower animations */}
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={`dot-${i}`}
                className="absolute rounded-full bg-primary/30"
                initial={{
                  x: Math.random() * dimensions.width,
                  y: Math.random() * dimensions.height,
                  width: Math.random() * 4 + 1,
                  height: Math.random() * 4 + 1,
                  opacity: 0.2,
                }}
                animate={{
                  y: [
                    Math.random() * dimensions.height,
                    Math.random() * dimensions.height,
                  ],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  y: {
                    duration: 80 + Math.random() * 30, // Increased duration for better performance
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  },
                  opacity: {
                    duration: 12 + Math.random() * 8,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  },
                }}
              />
            ))}
          </>
        );

      case "particles":
        return (
          <>
            {particles.slice(0, 100).map((particle, index) => (
              <motion.div
                key={index}
                className="absolute rounded-full"
                initial={{
                  x: particle.x,
                  y: particle.y,
                  width: particle.size,
                  height: particle.size,
                  opacity: particle.opacity,
                }}
                animate={{
                  x: [
                    particle.x,
                    particle.x + Math.sin(index) * 60,
                    particle.x - Math.cos(index) * 60,
                    particle.x,
                  ],
                  y: [
                    particle.y,
                    particle.y - Math.cos(index) * 60,
                    particle.y + Math.sin(index) * 60,
                    particle.y,
                  ],
                  opacity: [
                    particle.opacity,
                    particle.opacity * 1.3,
                    particle.opacity * 0.7,
                    particle.opacity,
                  ],
                  scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                  duration: particle.speed * 50, // Increased duration for better performance
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundColor: particle.color,
                  filter: "blur(8px)",
                  mixBlendMode: "multiply",
                }}
              />
            ))}
            {/* Static gradient instead of mouse-following */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/[0.01] via-transparent to-primary/[0.01]" />
          </>
        );

      case "noise":
        return (
          <>
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.003' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
                backgroundSize: "cover",
                mixBlendMode: "multiply",
              }}
            />

            {/* Static gradient */}
            <div
              className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/[0.01] via-transparent to-primary/[0.01]"
              style={{
                backdropFilter: "blur(60px)",
              }}
            />

            <div className="absolute inset-0 bg-background/30 backdrop-blur-[1px]" />

            {/* Reduced number of floating elements with slower animations */}
            {Array.from({ length: 2 }).map((_, index) => (
              <motion.div
                key={`float-${index}`}
                className="absolute rounded-full bg-primary/5"
                initial={{
                  x: Math.random() * dimensions.width,
                  y: Math.random() * dimensions.height,
                  width: Math.random() * 200 + 100,
                  height: Math.random() * 200 + 100,
                  opacity: 0.05,
                }}
                animate={{
                  x: [
                    Math.random() * dimensions.width,
                    Math.random() * dimensions.width,
                  ],
                  y: [
                    Math.random() * dimensions.height,
                    Math.random() * dimensions.height,
                  ],
                  opacity: [0.05, 0.08, 0.05],
                }}
                transition={{
                  duration: 90 + Math.random() * 30, // Increased duration for better performance
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "linear",
                }}
                style={{
                  filter: "blur(60px)",
                  mixBlendMode: "multiply",
                }}
              />
            ))}
          </>
        );

      case "default":
      default:
        return (
          <>
            {particles.slice(0, 250).map((particle, index) => (
              <motion.div
                key={index}
                className="absolute rounded-full"
                initial={{
                  x: particle.x,
                  y: particle.y,
                  width: particle.size,
                  height: particle.size,
                  opacity: particle.opacity,
                }}
                animate={{
                  scale: [1, 1.05, 0.95, 1],
                  opacity: [
                    particle.opacity,
                    particle.opacity * 1.1,
                    particle.opacity * 0.9,
                    particle.opacity,
                  ],
                }}
                transition={{
                  scale: {
                    duration: particle.speed * 25, // Increased duration for better performance
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  opacity: {
                    duration: particle.speed * 30, // Increased duration for better performance
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                style={{
                  backgroundColor: particle.color,
                  filter: "blur(40px)",
                  mixBlendMode: "multiply",
                }}
              />
            ))}

            {keyboardControl && (
              <motion.div
                className="absolute w-16 h-16 rounded-full border-2 border-primary z-10 pointer-events-none"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.7 }}
                exit={{ scale: 0.5, opacity: 0 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary"
                  animate={{ scale: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ opacity: 0.3 }}
                />
              </motion.div>
            )}
          </>
        );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative z-0 overflow-hidden", className)}
    >
      <div className="absolute inset-0 -z-10">{renderBackground()}</div>
      {children}

      {/* Screen reader announcement */}
      {announcement && (
        <div role="status" aria-live="polite" className="sr-only">
          {announcement}
        </div>
      )}

      <div className="sr-only">
        Interactive background. Press K to toggle keyboard control. When
        keyboard control is active, use numbers 1-3 for special effects.
      </div>
    </div>
  );
}
