"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

type CursorState = "default" | "hover" | "click" | "text" | "magnetic";

export function CustomCursor() {
  const followerRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [isVisible, setIsVisible] = useState(false);
  const [textContent, setTextContent] = useState("");

  // Using motion values and springs for smooth animation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Improved spring config for cursor elements
  const cursorX = useSpring(mouseX, {
    damping: 28,
    stiffness: 350,
    mass: 0.45,
  });
  const cursorY = useSpring(mouseY, {
    damping: 28,
    stiffness: 350,
    mass: 0.45,
  });

  // Spring config for follower (more damping for smoother follow with slight delay)
  const followerX = useSpring(mouseX, {
    damping: 20,
    stiffness: 180,
    mass: 0.55,
  });
  const followerY = useSpring(mouseY, {
    damping: 20,
    stiffness: 180,
    mass: 0.55,
  });

  // Scale springs for interactive feedback
  const cursorScale = useSpring(1, {
    damping: 20,
    stiffness: 200,
  });
  const followerScale = useSpring(1, {
    damping: 10,
    stiffness: 200,
  });

  // Text opacity for text content
  const textOpacity = useSpring(0, {
    damping: 20,
    stiffness: 300,
  });

  // Rotation for magnetic effect
  const rotate = useMotionValue(0);

  useEffect(() => {
    // Add class to html element for global cursor styling
    document.documentElement.classList.add("has-custom-cursor");

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Show cursor on the first mouse move
    const handleFirstMove = () => {
      setIsVisible(true);
      window.removeEventListener("mousemove", handleFirstMove);
    };

    // Hide cursor when it leaves the window
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Show cursor when it enters the window
    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Handle cursor states based on interactions
    const handleMouseDown = () => {
      setCursorState("click");
      cursorScale.set(0.8);
      followerScale.set(1.5);
      rotate.set(15); // Rotate on click

      // Reset rotation after click
      setTimeout(() => {
        rotate.set(0);
      }, 150);
    };

    const handleMouseUp = () => {
      // Always reset to default state on mouseup, regardless of current state
      setCursorState("default");
      cursorScale.set(1);
      followerScale.set(1);
    };

    // Additional handler to force reset state when clicking on document
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // If clicking on a non-interactive element, ensure we reset to default state
      if (
        target.tagName.toLowerCase() !== "a" &&
        target.tagName.toLowerCase() !== "button" &&
        !target.closest("a") &&
        !target.closest("button") &&
        !target.classList.contains("hoverable") &&
        !target.closest(".hoverable") &&
        !target.classList.contains("magnetic-effect") &&
        !target.closest(".magnetic-effect") &&
        !target.hasAttribute("data-cursor-text") &&
        !target.closest("[data-cursor-text]")
      ) {
        // Slight delay to ensure it happens after handleMouseUp
        setTimeout(() => {
          setCursorState("default");
          cursorScale.set(1);
          followerScale.set(1);
          textOpacity.set(0);
          rotate.set(0);
        }, 50);
      }
    };

    // Magnetic effect handler
    const handleMagneticEffect = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance from mouse to center
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      // Move the element slightly towards the cursor
      target.style.transform = `translate(${distanceX * 0.2}px, ${
        distanceY * 0.2
      }px)`;
    };

    const resetMagneticEffect = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      if (!target) return;

      // Reset the element position
      target.style.transform = `translate(0px, 0px)`;
    };

    // Handle hoverable elements
    const handleElementMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check for magnetic elements
      if (
        target.classList.contains("magnetic-effect") ||
        target.closest(".magnetic-effect")
      ) {
        setCursorState("magnetic");
        cursorScale.set(1.5);
        followerScale.set(2.5);
        rotate.set(5);

        // Apply magnetic effect to the element
        const magneticElement = target.classList.contains("magnetic-effect")
          ? target
          : target.closest(".magnetic-effect");

        if (magneticElement) {
          magneticElement.addEventListener(
            "mousemove",
            handleMagneticEffect as EventListener
          );
          magneticElement.addEventListener(
            "mouseleave",
            resetMagneticEffect as EventListener
          );
        }

        return;
      }

      // Check for text hover effect
      if (
        target.hasAttribute("data-cursor-text") ||
        target.closest("[data-cursor-text]")
      ) {
        const textElement = target.hasAttribute("data-cursor-text")
          ? target
          : target.closest("[data-cursor-text]");

        if (textElement) {
          const text = textElement?.getAttribute("data-cursor-text") || "";
          setTextContent(text);
          setCursorState("text");
          cursorScale.set(0.1);
          followerScale.set(4);
          textOpacity.set(1);
        }

        return;
      }

      // Standard interactive elements
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("hoverable") ||
        target.closest(".hoverable")
      ) {
        setCursorState("hover");
        cursorScale.set(0.5);
        followerScale.set(2);
      }
    };

    const handleElementMouseLeave = () => {
      setCursorState("default");
      cursorScale.set(1);
      followerScale.set(1);
      textOpacity.set(0);
      rotate.set(0);
    };

    // Handle document mousemove for better state transitions
    const handleDocumentMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check if we're over a non-interactive element
      if (
        cursorState !== "default" &&
        target.tagName.toLowerCase() !== "a" &&
        target.tagName.toLowerCase() !== "button" &&
        !target.closest("a") &&
        !target.closest("button") &&
        !target.classList.contains("hoverable") &&
        !target.closest(".hoverable") &&
        !target.classList.contains("magnetic-effect") &&
        !target.closest(".magnetic-effect") &&
        !target.hasAttribute("data-cursor-text") &&
        !target.closest("[data-cursor-text]")
      ) {
        setCursorState("default");
        cursorScale.set(1);
        followerScale.set(1);
        textOpacity.set(0);
        rotate.set(0);
      }
    };

    document.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mousemove", handleFirstMove, { once: true });
    document.addEventListener("mousemove", handleDocumentMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Apply event listeners to all interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, .hoverable, .magnetic-effect, [data-cursor-text]"
    );
    interactiveElements.forEach(element => {
      element.addEventListener(
        "mouseenter",
        handleElementMouseEnter as EventListener
      );
      element.addEventListener("mouseleave", handleElementMouseLeave);
    });

    // Create a mutation observer to detect new interactive elements
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes.length) {
          const newInteractiveElements = document.querySelectorAll(
            "a:not([data-cursor-attached]), button:not([data-cursor-attached]), .hoverable:not([data-cursor-attached]), .magnetic-effect:not([data-cursor-attached]), [data-cursor-text]:not([data-cursor-attached])"
          );

          newInteractiveElements.forEach(element => {
            element.addEventListener(
              "mouseenter",
              handleElementMouseEnter as EventListener
            );
            element.addEventListener("mouseleave", handleElementMouseLeave);
            element.setAttribute("data-cursor-attached", "true");
          });
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Cleanup function
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      document.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mousemove", handleDocumentMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);

      interactiveElements.forEach(element => {
        element.removeEventListener(
          "mouseenter",
          handleElementMouseEnter as EventListener
        );
        element.removeEventListener("mouseleave", handleElementMouseLeave);

        if (element.classList.contains("magnetic-effect")) {
          element.removeEventListener(
            "mousemove",
            handleMagneticEffect as EventListener
          );
          element.removeEventListener(
            "mouseleave",
            resetMagneticEffect as EventListener
          );
        }
      });

      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Follower color based on state
  const getFollowerColor = () => {
    switch (cursorState) {
      case "hover":
        return "border-primary";
      case "click":
        return "border-primary";
      case "magnetic":
        return "border-primary";
      case "text":
        return "border-transparent bg-primary/10";
      default:
        return "border-foreground/30";
    }
  };

  // Only render cursor on client side and when visible
  if (typeof window === "undefined" || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Small dot */}
      <motion.div
        className="fixed pointer-events-none z-[9997] h-1.5 w-1.5 rounded-full bg-foreground/20"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: cursorState === "default" ? 0.6 : 0,
        }}
      />

      {/* Follower cursor ring - only large ring, removed the medium dot */}
      <motion.div
        ref={followerRef}
        className={`fixed pointer-events-none z-[9998] h-8 w-8 rounded-full border ${getFollowerColor()} transition-colors duration-200`}
        style={{
          x: followerX,
          y: followerY,
          translateX: "-50%",
          translateY: "-50%",
          scale: followerScale,
        }}
      >
        {/* Text content for text hover */}
        <motion.div
          ref={textContentRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-medium text-foreground"
          style={{ opacity: textOpacity }}
        >
          {textContent}
        </motion.div>
      </motion.div>
    </>
  );
}
