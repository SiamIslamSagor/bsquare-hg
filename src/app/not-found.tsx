"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CustomButton } from "@/components/ui/custom-button";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] text-center py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-9xl font-bold text-primary">404</h1>

        <div className="mt-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            Oops! The page you are looking for doesn&apos;t exist or has been
            moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton
              href="/"
              label="Back to Home"
              variant="default"
              withArrow
            />
            <CustomButton
              href="/contact"
              label="Contact Us"
              variant="outline"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-16 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="w-full h-[2px] bg-muted absolute top-1/2 left-0"></div>
        <div className="relative bg-background px-4 py-2 inline-block">
          <Link
            href="/sitemap"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            View our sitemap
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
