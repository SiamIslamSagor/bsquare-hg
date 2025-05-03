import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { SectionHeader } from "@/components/ui/section-header";
import { CustomButton } from "@/components/ui/custom-button";
import { PageLoader } from "@/components/layout/page-loader";
import { CheckIcon } from "lucide-react";
import { ServiceDataItem } from "../types";

export default function ClientServicePage({
  service,
}: {
  service: ServiceDataItem;
}) {
  return (
    <PageLoader>
      <div className="space-y-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <ScrollAnimation>
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                  {service.title}
                </h1>
                <p className="text-xl leading-8 text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <ScrollAnimation>
              <SectionHeader
                subtitle="Pricing Plans"
                title={`${service.title} Packages`}
                description="Choose the perfect package that suits your business needs and budget."
              />
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {service.plans.map((plan, index) => (
                <ScrollAnimation
                  key={plan.name}
                  delay={index * 0.1}
                  direction="up"
                >
                  <div
                    className={`bg-background p-6 rounded-xl shadow-sm border ${
                      plan.popular
                        ? "border-primary/20 bg-primary/5"
                        : "border-muted hover:border-primary/20 transition-colors"
                    } relative h-full flex flex-col`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        Popular
                      </div>
                    )}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {plan.description}
                      </p>
                      <div className="flex items-baseline mb-4">
                        <span className="text-3xl font-bold">{plan.price}</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckIcon className="h-5 w-5 text-primary mr-2" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <CustomButton
                      href="/contact"
                      label="Get Started"
                      variant={plan.popular ? "default" : "outline"}
                      className="w-full"
                      withArrow
                    />
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Need a custom plan? We can create a tailored solution for your
                specific needs.
              </p>
              <CustomButton
                href="/contact"
                label="Contact for Custom Quote"
                variant="secondary"
                withArrow
              />
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <ScrollAnimation>
              <SectionHeader
                subtitle="Our Process"
                title={`How We Implement ${service.title}`}
                description="A structured approach to delivering exceptional results for your business."
              />
            </ScrollAnimation>

            <div className="grid md:grid-cols-4 gap-8 mt-12">
              {[
                {
                  number: "01",
                  title: "Discovery",
                  description:
                    "We begin by understanding your goals, target audience, and project requirements.",
                },
                {
                  number: "02",
                  title: "Planning",
                  description:
                    "Our team develops a detailed strategy and timeline for your project.",
                },
                {
                  number: "03",
                  title: "Implementation",
                  description:
                    "We execute the plan using the latest technologies and best practices.",
                },
                {
                  number: "04",
                  title: "Support",
                  description:
                    "Ongoing maintenance and updates to ensure your project continues to perform.",
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
                  Let&apos;s discuss how our {service.title.toLowerCase()}{" "}
                  services can help bring your vision to life.
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
