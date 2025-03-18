"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CustomButton } from "@/components/ui/custom-button";
import { SectionHeader } from "@/components/ui/section-header";
import { staggerContainer, fadeIn } from "@/lib/animations";

const featuredProjects = [
  {
    id: 1,
    title: "EcoSmart Web Platform",
    category: "Web Development",
    image:
      "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='720' viewBox='0 0 1080 720'%3E%3Crect fill='%23264653' width='1080' height='720'/%3E%3Ctext fill='%23ffffff' font-family='sans-serif' font-size='40' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EEcoSmart Web Platform%3C/text%3E%3C/svg%3E",
    link: "/portfolio/ecosmart",
  },
  {
    id: 2,
    title: "Luxury Brand Redesign",
    category: "Branding",
    image:
      "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='720' viewBox='0 0 1080 720'%3E%3Crect fill='%232a9d8f' width='1080' height='720'/%3E%3Ctext fill='%23ffffff' font-family='sans-serif' font-size='40' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3ELuxury Brand Redesign%3C/text%3E%3C/svg%3E",
    link: "/portfolio/luxury-brand",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "UI/UX Design",
    image:
      "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='720' viewBox='0 0 1080 720'%3E%3Crect fill='%23e9c46a' width='1080' height='720'/%3E%3Ctext fill='%23ffffff' font-family='sans-serif' font-size='40' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EMobile Banking App%3C/text%3E%3C/svg%3E",
    link: "/portfolio/banking-app",
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
      "Custom websites and applications built with modern technologies for optimal performance and user experience.",
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
    title: "UI/UX Design",
    description:
      "Intuitive and engaging user experiences designed to delight your users and achieve business goals.",
    link: "/services#ui-design",
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
          d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
        />
      </svg>
    ),
    title: "Branding",
    description:
      "Comprehensive brand identities that communicate your values and connect with your target audience.",
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
      "Native and cross-platform mobile applications that deliver seamless experiences across devices.",
    link: "/services#mobile-apps",
  },
];

// Add placeholder images to public directory
export const dynamic = "force-dynamic";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16 pt-24 sm:pb-24 sm:pt-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content */}
            <motion.div
              variants={fadeIn("right")}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                We craft <span className="text-primary">digital</span>{" "}
                experiences that <span className="text-primary">inspire</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                BSquare is a full-service digital agency specializing in
                creating beautiful interfaces and meaningful experiences that
                drive results.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <CustomButton
                  href="/contact"
                  label="Start a Project"
                  withArrow
                  variant="default"
                  size="lg"
                />
                <CustomButton
                  href="/portfolio"
                  label="View Our Work"
                  variant="outline"
                  size="lg"
                />
              </div>
            </motion.div>

            {/* Right Content with Animation */}
            <motion.div
              variants={fadeIn("left", 0.2)}
              className="relative h-[400px] sm:h-[600px] lg:h-[500px] w-full overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl"></div>
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: currentIndex === index ? 1 : 0,
                    y: currentIndex === index ? 0 : 20,
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <SectionHeader
            subtitle="What We Do"
            title="Our Services"
            description="We provide end-to-end solutions tailored to your business goals and user needs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -5 }}
                className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="mb-4 p-3 bg-primary/10 text-primary rounded-full w-fit">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeader
            subtitle="Featured Projects"
            title="Our Recent Work"
            description="Check out some of our award-winning projects that showcase our expertise and creativity."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative overflow-hidden rounded-xl"
              >
                <Link
                  href={project.link}
                  className="block aspect-[4/3] relative"
                >
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
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
                  </div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <CustomButton
              href="/portfolio"
              label="View All Projects"
              variant="outline"
              withArrow
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to bring your ideas to life?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let&apos;s collaborate to create something extraordinary that
              exceeds your expectations.
            </p>
            <CustomButton
              href="/contact"
              label="Get in Touch"
              size="lg"
              withArrow
            />
          </motion.div>
        </div>
      </section>

      <div className="bg-primary text-primary-foreground p-4 rounded-lg shadow-lg mb-6 text-center">
        <h2 className="text-2xl font-bold">Tailwind CSS v3 is working!</h2>
        <p className="mt-2">
          Your website is now running with stable Tailwind CSS v3.
        </p>
      </div>
    </>
  );
}
