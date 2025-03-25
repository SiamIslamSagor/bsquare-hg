"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type PageStateContextType = {
  hasAnimated: boolean;
  setHasAnimated: (value: boolean) => void;
  isScrolled: boolean;
  setIsScrolled: (value: boolean) => void;
};

const PageStateContext = createContext<PageStateContextType>({
  hasAnimated: false,
  setHasAnimated: () => {},
  isScrolled: false,
  setIsScrolled: () => {},
});

export const usePageState = () => useContext(PageStateContext);

export function PageStateProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Reset animation state when pathname changes
  useEffect(() => {
    setHasAnimated(false);
    setIsScrolled(false);
  }, [pathname]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <PageStateContext.Provider
      value={{
        hasAnimated,
        setHasAnimated,
        isScrolled,
        setIsScrolled,
      }}
    >
      {children}
    </PageStateContext.Provider>
  );
}
