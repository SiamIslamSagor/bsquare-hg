"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { CustomButton } from "@/components/ui/custom-button";
import { SectionHeader } from "@/components/ui/section-header";
import { useTransition } from "@/context/transition-context";
import { usePageState } from "@/context/page-state-context";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { PiChartLineUpBold } from "react-icons/pi";
import project1 from "@/assets/images/projects/p1.jpg";
import project2 from "@/assets/images/projects/p2.jpg";
import project3 from "@/assets/images/projects/p3.jpg";

const featuredProjects = [
  {
    id: 1,
    title: "EcoSmart Web Platform",
    category: "Web Development",
    image: project1,
    link: "#",
  },
  {
    id: 2,
    title: "Luxury Brand Redesign",
    category: "Branding",
    image: project2,
    link: "#",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "UI/UX Design",
    image: project3,
    link: "#",
  },
];

const services = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
    title: "Web Development",
    description:
      "Building stunning, high-performing websites that deliver seamless user experiences and drive real business results. From sleek portfolio sites to complex enterprise platforms — we bring your vision to life.",
    link: "/services#web-development",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
    title: "Graphic Design",
    description:
      "Designing captivating visuals that breathe life into your brand identity. From logos to social media graphics — we create designs that are not just seen but remembered.",
    link: "/services#ui-design",
  },
  {
    icon: <PiChartLineUpBold className="w-6 h-6" />,
    title: "Digital Marketing",
    description:
      "Empowering businesses with smart digital marketing strategies that maximize visibility, generate leads, and drive growth. SEO, Social Media, PPC — we cover it all to take your brand further.",
    link: "/services#branding",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
    title: "Mobile Apps",
    description:
      "Creating intuitive, fast, and feature-rich mobile applications tailored for both Android and iOS. Whether it's a startup app or a business solution, we deliver apps that engage and perform.",
    link: "/services#mobile-apps",
  },
];

// Add placeholder images to public directory
export const dynamic = "force-dynamic";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isTransitioning } = useTransition();
  const { hasAnimated, setHasAnimated } = usePageState();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect for hero section - now used in the component
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Handle auto-rotation for featured projects
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setInterval(() => {
        setCurrentIndex(prevIndex =>
          prevIndex === featuredProjects.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [isTransitioning]);

  // Set hasAnimated after initial animations
  useEffect(() => {
    if (!hasAnimated && !isTransitioning) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [hasAnimated, isTransitioning, setHasAnimated]);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16 pt-24 sm:pb-24 sm:pt-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <ScrollAnimation direction="right" delay={0.2} distance={40}>
              <motion.div
                className="text-center lg:text-left"
                style={{
                  y: heroY,
                  opacity: heroOpacity,
                }}
              >
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                  {/* We Create Digital{" "}
                  <span className="text-primary">Experiences</span> */}
                  Your Vision, Our Innovation
                </h1>
                <p className="text-xl leading-8 text-muted-foreground mb-6">
                  We transform your ambitions into impactful digital solutions
                  with creativity and precision.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <CustomButton
                    href="/contact"
                    label="Start a Project"
                    withArrow
                  />
                  <CustomButton
                    href="/portfolio"
                    label="View Our Work"
                    variant="outline"
                    withArrow
                  />
                </div>
              </motion.div>
            </ScrollAnimation>

            {/* Right Content */}
            <ScrollAnimation direction="left" delay={0.3} distance={40}>
              <div className="relative h-[400px] sm:h-[600px] lg:h-[500px] w-full overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl"></div>
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: currentIndex === index ? 1 : 0,
                      zIndex: currentIndex === index ? 10 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-xl"
                      priority={index === 0}
                    />
                  </motion.div>
                ))}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {featuredProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full ${
                        currentIndex === index ? "bg-primary" : "bg-muted"
                      }`}
                      aria-label={`View slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <ScrollAnimation>
            <SectionHeader
              subtitle="What We Do"
              title="Our Services"
              description="Crafting Excellence Across Digital Horizons"
            />
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map((service, index) => (
              <ScrollAnimation
                key={service.title}
                delay={index * 0.15}
                direction="up"
                distance={40}
              >
                <div className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="mb-4 p-3 bg-primary/10 text-primary rounded-full w-fit">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className="text-primary font-medium inline-flex items-center hover:underline"
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
                  </Link>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <ScrollAnimation>
            <SectionHeader
              subtitle="Featured Projects"
              title="Our Recent Work"
              description="Check out some of our award-winning projects that showcase our expertise and creativity."
            />
          </ScrollAnimation>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ScrollAnimation
                key={project.id}
                delay={index * 0.15}
                direction="up"
                distance={40}
              >
                <div className="group relative overflow-hidden rounded-xl">
                  <Link
                    href={project.link}
                    className="block aspect-[4/3] relative"
                  >
                    {/* <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                      <div className="text-center p-4">
                        <span className="text-primary text-sm tracking-wide uppercase">
                          {project.category}
                        </span>
                        <h3 className="text-white text-2xl font-bold mt-2">
                          {project.title}
                        </h3>
                        <span className="mt-4 inline-flex items-center text-white border-b border-white pb-1">
                          View Project
                        </span>
                      </div>
                    </div> */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </Link>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={0.2}>
            <div className="mt-12 text-center">
              <CustomButton
                href="/portfolio"
                label="View All Projects"
                variant="outline"
                withArrow
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let&apos;s turn your vision into reality with our creative and
                technical expertise.
              </p>
              <CustomButton
                href="/contact"
                label="Start a Project"
                size="lg"
                withArrow
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
