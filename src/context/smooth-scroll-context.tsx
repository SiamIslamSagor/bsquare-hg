"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

interface SmoothScrollContextType {
  lenis: Lenis | null;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
});

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      // CUSTOMIZATION OPTIONS:
      // duration: Controls how long the scrolling animation lasts (in seconds)
      // - Higher values (2-3) = slower, more dramatic scrolling
      // - Lower values (0.5-1) = faster, more responsive scrolling
      duration: 1.8,

      // easing: Controls the animation curve of the scroll
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

      // orientation: Direction of the scroll ('vertical' or 'horizontal')
      orientation: "vertical",
      gestureOrientation: "vertical",

      // smoothWheel: Enable/disable smooth scrolling for mouse wheel
      smoothWheel: true,

      // wheelMultiplier: How much to scroll per wheel event
      // - Higher values = faster scrolling
      // - Lower values = slower scrolling
      wheelMultiplier: 0.8,

      // touchMultiplier: How much to scroll per touch event
      // - Higher values = faster scrolling
      // - Lower values = slower scrolling
      touchMultiplier: 1.5,

      // autoResize: Automatically update on window resize
      autoResize: true,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    setLenis(lenisInstance);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ lenis }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
