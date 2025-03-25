"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { usePathname } from "next/navigation";

type TransitionContextType = {
  isTransitioning: boolean;
  transitionKey: number;
  previousPath: string | null;
  currentPath: string;
};

const TransitionContext = createContext<TransitionContextType>({
  isTransitioning: false,
  transitionKey: 0,
  previousPath: null,
  currentPath: "",
});

export const useTransition = () => useContext(TransitionContext);

export function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionKey, setTransitionKey] = useState(0);
  const [previousPath, setPreviousPath] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState(pathname);

  // Use ref to avoid multiple transition triggers
  const isTransitioningRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Initial mount - set current path
    if (!previousPath) {
      setPreviousPath(pathname);
      setCurrentPath(pathname);
      setTransitionKey(1); // Start with a non-zero key
      return;
    }

    // If pathname changed and not already transitioning
    if (pathname !== previousPath && !isTransitioningRef.current) {
      // Mark as transitioning to prevent multiple transitions
      isTransitioningRef.current = true;

      // Clean up any existing timers
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      // Set current path immediately to ensure new page content is ready
      setCurrentPath(pathname);

      // Show loading indicator
      setIsTransitioning(true);

      // Wait a very short time before incrementing the key to trigger remount
      // This ensures the DOM has time to process the currentPath change
      timerRef.current = setTimeout(() => {
        setTransitionKey(prev => prev + 1);

        // After animation delay, complete transition
        const cleanupTimer = setTimeout(() => {
          setPreviousPath(pathname);
          setIsTransitioning(false);
          isTransitioningRef.current = false;
        }, 350); // Shorter delay matched to animation durations

        timerRef.current = cleanupTimer;
      }, 50);

      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
        isTransitioningRef.current = false;
      };
    }
  }, [pathname, previousPath]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <TransitionContext.Provider
      value={{
        isTransitioning,
        transitionKey,
        previousPath,
        currentPath,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
}
