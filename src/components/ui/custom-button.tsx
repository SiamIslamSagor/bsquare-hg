"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
  iconPosition?: "left" | "right";
  withArrow?: boolean;
  isExternal?: boolean;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export function CustomButton({
  href,
  label,
  icon,
  className,
  iconPosition = "right",
  withArrow,
  isExternal,
  ...props
}: CustomButtonProps) {
  // Add state to track hover state of the entire button
  const [isHovered, setIsHovered] = useState(false);

  // Button content with improved arrow animation
  const buttonContent = (
    <>
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {label}
      {withArrow && (
        <motion.span
          className="ml-2 inline-block"
          animate={{ x: isHovered ? 8 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          →
        </motion.span>
      )}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </>
  );

  const buttonClasses = cn("relative overflow-hidden group", className);

  // Hover handlers for the entire button
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // External link with button
  if (href && isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Button className={buttonClasses} {...props}>
          {buttonContent}
        </Button>
      </a>
    );
  }

  // Internal link with button
  if (href) {
    return (
      <Link
        href={href}
        className="inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Button className={buttonClasses} {...props}>
          {buttonContent}
        </Button>
      </Link>
    );
  }

  // Regular button
  return (
    <Button
      className={buttonClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {buttonContent}
    </Button>
  );
}
