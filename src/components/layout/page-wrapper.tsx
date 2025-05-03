"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { InteractiveBackground } from "../ui/interactive-background";
import { LoadingSpinner } from "../ui/loading-spinner";
import { useTransition } from "@/context/transition-context";

interface PageWrapperProps {
  children: React.ReactNode;
}

// Map routes to specific background variants for different pages
const routeToBackgroundVariant: Record<
  string,
  {
    variant: "default" | "gradient" | "particles" | "geometric" | "noise";
    intensity: "light" | "medium" | "heavy";
    colorScheme: "primary" | "secondary" | "accent" | "custom";
  }
> = {
  "/": {
    variant: "geometric",
    intensity: "medium",
    colorScheme: "primary",
  },
  "/about": {
    variant: "geometric",
    intensity: "medium",
    colorScheme: "primary",
  },
  "/services": {
    variant: "geometric",
    intensity: "medium",
    colorScheme: "primary",
  },
  "/portfolio": {
    variant: "geometric",
    intensity: "medium",
    colorScheme: "accent",
  },
  "/blog": {
    variant: "geometric",
    intensity: "medium",
    colorScheme: "primary",
  },
  "/contact": {
    variant: "geometric",
    intensity: "medium",
    colorScheme: "primary",
  },
};

export function PageWrapper({ children }: PageWrapperProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { isTransitioning, transitionKey, currentPath } = useTransition();

  // Get background configuration based on current route
  const getBackgroundConfig = () => {
    // Handle nested routes like blog posts
    if (pathname.startsWith("/services/")) {
      return {
        variant: "noise" as const,
        intensity: "heavy" as const,
        colorScheme: "primary" as const,
      };
    }

    return (
      routeToBackgroundVariant[pathname] || {
        variant: "noise" as const,
        intensity: "heavy" as const,
        colorScheme: "primary" as const,
      }
    );
  };

  const config = getBackgroundConfig();

  // Handle client-side only features
  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  // Loader animation variants
  const loaderVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.15 } },
  };

  if (!mounted) {
    // Return a simpler version for server-side rendering to avoid hydration issues
    return <>{children}</>;
  }

  // console.log("config.variant:", config);

  return (
    <InteractiveBackground
      variant={config.variant}
      intensity={config.intensity}
      colorScheme={config.colorScheme}
      className="min-h-screen"
    >
      {/* Loading spinner */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key="loader"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={loaderVariants}
            className="fixed inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm z-50"
          >
            <LoadingSpinner size="large" color="primary" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render content immediately without AnimatePresence for better reliability */}
      <motion.div
        key={`route-${transitionKey}-${currentPath}`}
        initial="initial"
        animate="animate"
        variants={pageVariants}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </InteractiveBackground>
  );
}
