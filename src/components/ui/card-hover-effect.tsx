"use client";

import { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardHoverEffectProps {
  items: {
    title: string;
    description: string;
    icon?: ReactNode;
    link?: string;
  }[];
  className?: string;
}

export function CardHoverEffect({ items, className }: CardHoverEffectProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative group block p-6 bg-background shadow-sm h-full rounded-xl border overflow-hidden"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="relative z-10">
            {item.icon && (
              <div className="mb-3 text-primary w-10 h-10 flex items-center justify-center">
                {item.icon}
              </div>
            )}
            <div className="flex flex-col h-full">
              <h3 className="font-medium text-xl mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm flex-grow">
                {item.description}
              </p>
              {item.link && (
                <div className="mt-4">
                  <a
                    href={item.link}
                    className="text-primary text-sm font-medium inline-flex items-center hover:underline"
                  >
                    Learn more
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1"
                    >
                      <path
                        d="M6.66669 3.33337L10.6667 8.00004L6.66669 12.6667"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>

          {hoveredIndex === idx && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent z-0"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.15 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
