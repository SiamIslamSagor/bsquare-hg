"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme/theme-toggle";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import bLogo from "@/assets/images/bLogo.png";
import squareLogoBlack from "@/assets/images/sql.png";
import squareLogoWhite from "@/assets/images/sqlW.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  // { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Find the active index based on the current pathname
  React.useEffect(() => {
    const index = navItems.findIndex(item => item.href === pathname);
    setActiveIndex(index);
  }, [pathname]);

  React.useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 w-full py-4 bg-background/80">
        <div className="container flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold tracking-tight">BSquare</span>
          </div>
          <div className="hidden md:flex h-10 w-64 bg-muted/30 rounded-full"></div>
          <div className="block md:hidden h-10 w-10 bg-muted/30 rounded-full"></div>
        </div>
      </header>
    );
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 w-full py-4 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-background/90 backdrop-blur-sm shadow-md"
          : "bg-transparent dark:bg-[#131313]"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex gap-2 items-center z-10">
          {theme === "light" ? (
            <>
              <motion.div
                className="text-xl font-bold tracking-tight relative magnetic-effect"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                data-cursor-text="Home"
              >
                <div className=" duration-75 active:scale-90 transition">
                  <Image
                    src={bLogo}
                    alt="B Button"
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <div className=" duration-75 active:scale-90 transition -mb-5">
                <Image
                  src={squareLogoBlack}
                  alt="Square Text Logo Black"
                  width={115}
                  className="object-cover"
                />
              </div>
            </>
          ) : (
            <>
              {/* new */}
              <motion.div
                className="text-xl font-bold tracking-tight relative magnetic-effect"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                data-cursor-text="Home"
              >
                <div className=" duration-75 active:scale-90 transition">
                  <Image
                    src={bLogo}
                    alt="B Button"
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <div className=" duration-75 active:scale-90 transition -mb-5">
                <Image
                  src={squareLogoWhite}
                  alt="Square Text Logo White"
                  width={115}
                  className="object-cover"
                />
              </div>

              {/* old */}
              {/* <motion.span
                className="text-xl font-bold tracking-tight relative magnetic-effect"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                data-cursor-text="Home"
              >
                <span className="text-primary">B</span>Square
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary rounded-full"></span>
              </motion.span> */}
            </>
          )}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <nav className="relative">
            {/* Background indicator pill that moves */}
            {activeIndex !== -1 && (
              <motion.div
                className="absolute -z-10 bg-primary/10 rounded-full"
                initial={false}
                animate={{
                  x: activeIndex * 110,
                  width: navItems[activeIndex]?.name.length * 14 + 40,
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
              />
            )}

            <ul className="flex space-x-2 items-center">
              {navItems.map((item, index) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`relative px-5 py-2 inline-block font-medium text-sm transition-colors rounded-full group hover:text-primary ${
                      pathname === item.href
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() =>
                      setActiveIndex(
                        navItems.findIndex(i => i.href === pathname)
                      )
                    }
                    data-cursor-text={pathname !== item.href ? item.name : ""}
                  >
                    {/* Hover effect - subtle scale and glow */}
                    <span className="relative z-10 inline-block transition-transform duration-200 group-hover:scale-110">
                      {item.name}
                    </span>

                    {/* Hover effect - bottom dot */}
                    {pathname !== item.href && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-primary scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-70"></span>
                    )}

                    {pathname === item.href && (
                      <motion.span
                        className="absolute bottom-0 left-5 right-5 h-0.5 bg-primary rounded-full"
                        layoutId="underline"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right side actions - visible on all devices */}
        <div className="flex items-center gap-2 md:gap-4">
          <AnimatePresence>
            {!isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full hidden md:inline-flex items-center justify-center magnetic-effect"
                  asChild
                  data-cursor-text="Get Started"
                  onMouseMove={e => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    e.currentTarget.style.transform = `translate(${
                      x * 0.35
                    }px, ${y * 0.35}px)`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translate(0, 0)";
                  }}
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center px-4 py-2"
                  >
                    Get Started
                  </Link>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          <ThemeToggle />

          {/* Mobile Navigation - improved alignment */}
          <div className="md:hidden flex items-center justify-center">
            <Sheet onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 magnetic-effect flex items-center justify-center h-10 w-10"
                  data-cursor-text="Menu"
                >
                  <motion.div
                    animate={isMobileMenuOpen ? "open" : "closed"}
                    className="flex w-6 h-6 flex-col justify-center items-center"
                  >
                    <motion.span
                      className="block h-0.5 w-5 bg-foreground mb-1"
                      variants={{
                        closed: { rotate: 0, y: 0 },
                        open: { rotate: 45, y: 2 },
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span
                      className="block h-0.5 w-5 bg-foreground"
                      variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span
                      className="block h-0.5 w-5 bg-foreground mt-1"
                      variants={{
                        closed: { rotate: 0, y: 0 },
                        open: { rotate: -45, y: -2 },
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="px-0">
                <SheetTitle className="text-center text-xl font-bold mb-8 px-6">
                  <span className="text-primary">B</span>Square
                </SheetTitle>
                <nav className="flex flex-col">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center py-4 px-6 text-lg border-l-2 transition-all group relative overflow-hidden ${
                          pathname === item.href
                            ? "text-primary border-primary bg-primary/5 font-medium"
                            : "text-muted-foreground border-transparent hover:bg-muted/20 hover:text-foreground"
                        }`}
                        data-cursor-text={
                          pathname === item.href ? "Active" : "Navigate"
                        }
                      >
                        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                          {item.name}
                        </span>

                        {/* Subtle background slide animation on hover */}
                        {pathname !== item.href && (
                          <span className="absolute left-0 top-0 h-full w-0 bg-primary/5 -z-10 transition-all duration-300 group-hover:w-full"></span>
                        )}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    className="px-6 mt-8"
                  >
                    <Button
                      className="w-full h-12 magnetic-effect flex items-center justify-center"
                      asChild
                      data-cursor-text="Contact Us"
                      // Enhanced magnetic effect for mobile Get Started button
                      onMouseMove={e => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = e.clientX - rect.left - rect.width / 2;
                        const y = e.clientY - rect.top - rect.height / 2;
                        e.currentTarget.style.transform = `translate(${
                          x * 0.3
                        }px, ${y * 0.3}px)`;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = "translate(0, 0)";
                      }}
                    >
                      <Link
                        href="/contact"
                        className="flex items-center justify-center w-full h-full"
                      >
                        Get Started
                      </Link>
                    </Button>
                  </motion.div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
