"use client";

import Image from "next/image";
import { CustomButton } from "@/components/ui/custom-button";
import { PageLoader } from "@/components/layout/page-loader";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform with advanced filtering and search capabilities.",
    image:
      "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='720' viewBox='0 0 1080 720'%3E%3Crect fill='%23264653' width='1080' height='720'/%3E%3Ctext fill='%23ffffff' font-family='sans-serif' font-size='40' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EE-commerce Platform%3C/text%3E%3C/svg%3E",
    category: "Web Development",
  },
  {
    title: "Mobile Banking App",
    description:
      "Secure and intuitive mobile banking application with biometric authentication.",
    image:
      "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='720' viewBox='0 0 1080 720'%3E%3Crect fill='%232a9d8f' width='1080' height='720'/%3E%3Ctext fill='%23ffffff' font-family='sans-serif' font-size='40' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EMobile Banking App%3C/text%3E%3C/svg%3E",
    category: "Mobile Development",
  },
  {
    title: "Brand Identity",
    description: "Complete brand identity design for a tech startup.",
    image:
      "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='720' viewBox='0 0 1080 720'%3E%3Crect fill='%23e9c46a' width='1080' height='720'/%3E%3Ctext fill='%23ffffff' font-family='sans-serif' font-size='40' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EBrand Identity%3C/text%3E%3C/svg%3E",
    category: "Branding",
  },
  {
    title: "UI/UX Design System",
    description: "Comprehensive design system for a SaaS platform.",
    image:
      "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='720' viewBox='0 0 1080 720'%3E%3Crect fill='%23f4a261' width='1080' height='720'/%3E%3Ctext fill='%23ffffff' font-family='sans-serif' font-size='40' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EUI/UX Design System%3C/text%3E%3C/svg%3E",
    category: "UI/UX Design",
  },
];

export default function ProjectsPage() {
  return (
    <PageLoader>
      <div className="space-y-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <ScrollAnimation>
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                  Our Portfolio
                </h1>
                <p className="text-xl leading-8 text-muted-foreground">
                  Explore our latest projects and see how we&apos;ve helped
                  businesses achieve their digital goals.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ScrollAnimation
                  key={project.title}
                  delay={index * 0.15}
                  direction="up"
                  distance={40}
                >
                  <div className="group relative overflow-hidden rounded-xl bg-background shadow-sm border hover:shadow-md transition-shadow duration-300">
                    <div className="aspect-[4/3] relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-sm font-medium text-primary">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-semibold mt-2 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <CustomButton
                        href={`/projects/${project.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        label="View Project"
                        variant="ghost"
                        withArrow
                      />
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container text-center">
            <ScrollAnimation delay={0.1}>
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Start Your Project?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Let&apos;s create something amazing together.
                </p>
                <CustomButton
                  href="/contact"
                  label="Get in Touch"
                  size="lg"
                  withArrow
                />
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </div>
    </PageLoader>
  );
}
