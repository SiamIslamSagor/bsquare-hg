"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { CustomButton } from "@/components/ui/custom-button";
import { PageLoader } from "@/components/layout/page-loader";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

const services = [
  {
    title: "Web Development",
    description:
      "Custom websites and web applications built with cutting-edge technologies and best practices.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3h18v18H3z"></path>
        <path d="M3 9h18"></path>
        <path d="M9 21V9"></path>
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful and intuitive user interfaces that enhance user experience and drive engagement.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
    ),
  },
  {
    title: "Branding",
    description:
      "Comprehensive branding solutions that help your business stand out and connect with your audience.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
    ),
  },
  {
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12" y2="18"></line>
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <PageLoader>
      <div className="space-y-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <ScrollAnimation>
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                  Our Services
                </h1>
                <p className="text-xl leading-8 text-muted-foreground">
                  We offer a comprehensive range of digital services to help
                  your business thrive in the modern digital landscape.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ScrollAnimation
                  key={service.title}
                  delay={index * 0.1}
                  direction="up"
                >
                  <div className="bg-background p-6 rounded-xl shadow-sm border">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <CustomButton
                      href="/contact"
                      label="Learn More"
                      variant="ghost"
                      withArrow
                    />
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <ScrollAnimation>
              <SectionHeader
                subtitle="Our Process"
                title="How We Work"
                description="A systematic approach to delivering exceptional results."
              />
            </ScrollAnimation>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  number: "01",
                  title: "Discovery",
                  description:
                    "We begin by understanding your goals, target audience, and project requirements.",
                },
                {
                  number: "02",
                  title: "Design",
                  description:
                    "Our team creates detailed designs and prototypes that align with your vision.",
                },
                {
                  number: "03",
                  title: "Development",
                  description:
                    "We build your project using the latest technologies and best practices.",
                },
              ].map((step, index) => (
                <ScrollAnimation
                  key={step.number}
                  delay={index * 0.15}
                  direction="up"
                  distance={40}
                >
                  <div className="relative">
                    <div className="text-4xl font-bold text-primary/20 mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container text-center">
            <ScrollAnimation>
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Let&apos;s discuss how we can help bring your vision to life.
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
    </PageLoader>
  );
}
