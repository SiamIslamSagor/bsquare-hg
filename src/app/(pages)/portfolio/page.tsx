"use client";

import { PageLoader } from "@/components/layout/page-loader";
import { SectionHeader } from "@/components/ui/section-header";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import logop1 from "@/assets/images/portfolio/logop1.jpg";
import web1 from "@/assets/images/portfolio/web1.jpg";
import web2 from "@/assets/images/portfolio/web2.jpg";
import web3 from "@/assets/images/portfolio/web3.jpg";
import web4 from "@/assets/images/portfolio/web4.jpg";
import appp1 from "@/assets/images/portfolio/appp1.jpg";
// Example portfolio projects
const projects = [
  {
    id: 1543,
    title: "Job Portal Platform",
    description:
      "A fully-featured job portal connecting employers and job seekers with advanced search filters, resume uploads, and real-time application tracking. Built for scalability and a seamless user experience across all devices.",
    category: "Web Development",
    image: web1,
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "TailwindCSS",
      "Framer Motion",
    ],
    link: "#",
  },
  {
    id: 25675,
    title: "Real Estate Marketplace",
    description:
      "A modern real estate platform allowing users to buy, sell, and rent properties including flats, houses, and land. Featuring smart property search, location maps, user profiles, and secure booking processes — optimized for all devices.",
    category: "Web Development",
    image: web2,
    technologies: ["Next.js", "Express.js", "Stripe", "TailwindCSS"],
    link: "#",
  },
  {
    id: 3243,
    title: "Home Garage - Logo Design & Branding",
    description:
      "Complete brand identity creation for Home Garage, a modern vehicle service company. Delivered a sleek, memorable logo along with full branding materials including color palettes, business cards, and social media assets to establish a strong, professional presence.",
    category: "Graphics Design & Branding",
    image: logop1,
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    link: "#",
  },
  {
    id: 4,
    title: "Food Hub - Food Donation Platform",
    description:
      "A humanitarian platform designed to connect donors, volunteers, and organizations to fight hunger. Food Hub enables users to donate excess food, schedule pickups, and track donations — promoting community-driven food sharing through a user-friendly digital platform.",
    category: "Web Development",
    image: web3,
    technologies: ["Next.js", "Node.js", "Mongoose", "TailwindCSS"],
    link: "#",
  },
  {
    id: 6234,
    title: "Home Garage — Vehicle Service Booking App",
    description:
      "Home Garage is a smart mobile app that connects vehicle owners with trusted garages and mechanics nearby. Users can schedule car maintenance, track service history, and get real-time updates — all from their phone. Built for reliability, ease, and speed.",
    category: "Mobile App Development",
    image: appp1,
    technologies: ["Flutter", "Firebase", "GetX", "Google Maps API"],
    link: "#",
  },
  {
    id: 5456,
    title: "Recipe Sharing Platform",
    description:
      "Cookify is a vibrant recipe-sharing platform where food lovers can discover, share, and save thousands of recipes across various cuisines. Features include user profiles, bookmarking, advanced search filters, and responsive design for a seamless cooking inspiration experience.",
    category: "Web Development",
    image: web4,
    technologies: ["Next.js", "Firebase", "TailwindCSS", "Framer Motion"],
    link: "#",
  },
];

// Project categories for filter
const categories = [
  "All",
  "Web Development",
  "Mobile App",
  "Branding",
  "Web Application",
  "Web & Mobile App",
];

export default function PortfolioPage() {
  return (
    <PageLoader>
      <div className="space-y-24 py-16">
        {/* Hero Section */}
        <section className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <SectionHeader
              subtitle="Our Work"
              title="Featured Projects"
              description="Explore our portfolio of successful projects that showcase our expertise in digital design and development."
            />
          </motion.div>
        </section>

        {/* Project Filters */}
        <section className="container">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-muted/50 hover:bg-primary/10 text-sm font-medium transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="bg-background rounded-xl overflow-hidden shadow-sm border group h-full flex flex-col"
              >
                <div className="relative aspect-[4/2.5] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      href={project.link}
                      className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      View Project
                    </Link>
                  </div> */}
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <span className="text-sm text-primary mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-muted/70 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="container py-20 bg-muted/30 rounded-xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-3xl font-bold text-center mb-16"
            >
              Our Process
            </motion.h2>

            <div className="flex flex-col items-center justify-center w-full">
              {/* Process Steps */}
              <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-3xl mx-auto">
                <div className="space-y-12">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex gap-4"
                  >
                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden relative">
                      <motion.div
                        className="absolute inset-0 bg-primary/10 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut",
                        }}
                      />
                      <span className="font-bold text-lg relative z-10">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Discovery</h3>
                      <p className="text-muted-foreground">
                        We begin by understanding your business, objectives, and
                        target audience to define a clear strategy.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden relative">
                      <motion.div
                        className="absolute inset-0 bg-primary/10 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut",
                          delay: 0.1,
                        }}
                      />
                      <span className="font-bold text-lg relative z-10">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Design</h3>
                      <p className="text-muted-foreground">
                        We create wireframes and visual designs that align with
                        your brand and provide optimal user experience.
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-12">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex gap-4"
                  >
                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden relative">
                      <motion.div
                        className="absolute inset-0 bg-primary/10 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                      />
                      <span className="font-bold text-lg relative z-10">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Development
                      </h3>
                      <p className="text-muted-foreground">
                        Our developers bring the designs to life with clean,
                        efficient, and scalable code.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="flex gap-4"
                  >
                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden relative">
                      <motion.div
                        className="absolute inset-0 bg-primary/10 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut",
                          delay: 0.3,
                        }}
                      />
                      <span className="font-bold text-lg relative z-10">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Launch & Support
                      </h3>
                      <p className="text-muted-foreground">
                        We deploy your project and provide ongoing support to
                        ensure its continued success.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Process visualization */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-20 w-full max-w-3xl mx-auto"
              >
                <div className="relative h-1 bg-muted rounded-full overflow-hidden mb-8">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-primary rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  />
                </div>

                <div className="flex justify-between relative">
                  {[0, 1, 2, 3].map(step => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + step * 0.08, duration: 0.3 }}
                      className="flex flex-col items-center"
                    >
                      <motion.div
                        className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground mb-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.7 + step * 0.08,
                          duration: 0.3,
                          type: "spring",
                          stiffness: 200,
                        }}
                      >
                        <span className="font-medium">{step + 1}</span>
                      </motion.div>
                      <motion.span
                        className="text-sm text-muted-foreground capitalize text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 + step * 0.08, duration: 0.3 }}
                      >
                        {step === 0 && "Discovery"}
                        {step === 1 && "Design"}
                        {step === 2 && "Development"}
                        {step === 3 && "Launch"}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {/* <section className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Client Testimonials
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-background rounded-xl p-6 shadow-sm border"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
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
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <p className="text-sm text-muted-foreground">
                    CEO, TechStart Inc.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">
                &quot;BSquare transformed our digital presence with a stunning
                website that perfectly captures our brand identity. Their team
                was professional, responsive, and delivered beyond our
                expectations.&quot;
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.3 }}
              className="bg-background rounded-xl p-6 shadow-sm border"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
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
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Michael Chen</h3>
                  <p className="text-sm text-muted-foreground">
                    Founder, GreenLife
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">
                &quot;Working with BSquare on our e-commerce platform was a
                game-changer for our business. Their attention to detail and
                technical expertise resulted in a seamless user experience that
                increased our conversions by 40%.&quot;
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="bg-background rounded-xl p-6 shadow-sm border"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
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
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Emma Rodriguez</h3>
                  <p className="text-sm text-muted-foreground">
                    Marketing Director, FashionForward
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">
                &quot;The mobile app BSquare developed for us has received
                outstanding feedback from our users. Their team understood our
                vision perfectly and executed it with creativity and technical
                excellence.&quot;
              </p>
            </motion.div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="bg-primary/5 py-16">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let&apos;s collaborate to create something amazing together.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLoader>
  );
}
