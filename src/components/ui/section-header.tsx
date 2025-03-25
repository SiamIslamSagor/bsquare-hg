"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedText } from "./animated-text";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <motion.div
      className={cn("max-w-3xl mb-12 md:mb-16", alignClasses[align], className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {subtitle && (
        <div className="inline-block mb-2">
          <div className="text-sm md:text-base font-medium text-primary">
            {subtitle}
          </div>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
        <AnimatedText text={title} animation="slide-up" />
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg max-w-[85%] mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
