"use client";

import { useParams } from "next/navigation";
import { SectionHeader } from "@/components/ui/section-header";
import { CustomButton } from "@/components/ui/custom-button";
import { PageLoader } from "@/components/layout/page-loader";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { IoTerminalOutline } from "react-icons/io5";
import { PiChartLineUp } from "react-icons/pi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoMegaphone } from "react-icons/go";
import { VscTools } from "react-icons/vsc";
import { CheckIcon } from "lucide-react";
import { notFound } from "next/navigation";
import { ServiceData, ServicePlan } from "../types";
import { slugify } from "@/lib/utils";

// Service data with pricing details
const serviceData: ServiceData = {
  "web-development": {
    title: "Web Development",
    description:
      "Custom websites and web applications built with cutting-edge technologies and best practices.",
    icon: <IoTerminalOutline className="w-6 h-6" />,
    plans: [
      {
        name: "Starter",
        price: "$149",
        description: "Perfect for small businesses and startups",
        features: [
          "Blogs, Portfolio, Forums & Communities",
          "WordPress & other CMS",
          "Domain setup",
          "Contact forms",
          "3 revisions",
          "5-7 days delivery",
        ],
        includes: {
          hosting: false,
          domainSetup: true,
          seoSetup: false,
          contactForms: true,
          speedOptimization: false,
          sslSetup: false,
          adminPanel: false,
          revisions: "3 times",
          support: false,
          deliveryTime: "5-7 days",
        },
      },
      {
        name: "Standard",
        price: "$249",
        description: "For growing businesses with more needs",
        features: [
          "Event or Wedding Website",
          "Restaurant Menu Site",
          "4–6 pages",
          "Basic SEO",
          "Google Maps integration",
          "Contact form with validation",
          "5 revisions",
          "7-10 days delivery",
        ],
        includes: {
          hosting: false,
          domainSetup: true,
          seoSetup: true,
          contactForms: true,
          speedOptimization: false,
          sslSetup: false,
          adminPanel: false,
          revisions: "5 times",
          support: false,
          deliveryTime: "7-10 days",
        },
      },
      {
        name: "Pro",
        price: "$1,999",
        description: "For established businesses seeking growth",
        popular: true,
        features: [
          "Portfolio with Gallery & Blog",
          "Coaching/Trainer Website with Booking System",
          "Nonprofit Organization Site",
          "Small E-commerce (up to 10 products)",
          "6–10 pages",
          "Blog integration",
          "Booking/contact system",
          "7 revisions",
          "15-20 days delivery",
        ],
        includes: {
          hosting: true,
          domainSetup: true,
          seoSetup: true,
          contactForms: true,
          speedOptimization: true,
          sslSetup: true,
          adminPanel: true,
          revisions: "7 times",
          support: "7 days",
          deliveryTime: "15-20 days",
        },
      },
      {
        name: "Premium",
        price: "$5,999",
        description: "Enterprise-grade solutions for large businesses",
        features: [
          "Full E-commerce Store",
          "Online Course Platform (basic LMS)",
          "Real Estate Listing Website",
          "Membership or Subscription Website",
          "10+ pages",
          "Admin panel",
          "Payment gateway integration",
          "10 revisions",
          "25-30 days delivery",
        ],
        includes: {
          hosting: true,
          domainSetup: true,
          seoSetup: true,
          contactForms: true,
          speedOptimization: true,
          sslSetup: true,
          adminPanel: true,
          revisions: "10 times",
          support: "15 days",
          deliveryTime: "25-30 days",
        },
      },
    ],
  },
  "ui/ux-design": {
    title: "UI/UX Design",
    description:
      "Beautiful and intuitive user interfaces that enhance user experience and drive engagement.",
    icon: <IoColorPaletteOutline className="w-6 h-6" />,
    plans: [
      {
        name: "Starter",
        price: "$149",
        description: "Basic UI/UX design for startups",
        features: [
          "Single page design concept",
          "Basic user flows",
          "Wire framing",
          "3 revisions",
          "7-10 days delivery",
        ],
      },
      {
        name: "Standard",
        price: "$249",
        description: "Complete UI/UX solution for growing businesses",
        features: [
          "Multi-page design concept",
          "User flows & personas",
          "Wire framing & prototyping",
          "Style guide",
          "5 revisions",
          "10-15 days delivery",
        ],
      },
      {
        name: "Pro",
        price: "$1,999",
        popular: true,
        description: "Advanced UI/UX for established businesses",
        features: [
          "Complete app/website design",
          "User research & testing",
          "Detailed user flows",
          "High-fidelity prototypes",
          "Comprehensive style guide",
          "7 revisions",
          "15-20 days delivery",
        ],
      },
      {
        name: "Premium",
        price: "$5,999",
        description: "Enterprise UI/UX solutions",
        features: [
          "Complete design system",
          "User research & analytics",
          "Advanced prototyping",
          "A/B testing",
          "Design-to-code handoff",
          "Interactive prototypes",
          "10 revisions",
          "20-30 days delivery",
        ],
      },
    ],
  },
  "graphic-design": {
    title: "Graphic Design",
    description:
      "From logos to full brand identity kits, we create visually impactful designs that build recognition and set you apart.",
    icon: <IoColorPaletteOutline className="w-6 h-6" />,
    plans: [
      {
        name: "Starter",
        price: "$99",
        description: "Basic design needs for new businesses",
        features: [
          "Logo design (2 concepts)",
          "Business card design",
          "Social media profile graphics",
          "3 revisions",
          "5-7 days delivery",
        ],
      },
      {
        name: "Standard",
        price: "$169",
        description: "Complete brand identity for growing businesses",
        features: [
          "Logo design (3-5 concepts)",
          "Business card and letterhead",
          "Social media kit (profile + post templates)",
          "Email signature design",
          "5 revisions",
          "7-10 days delivery",
        ],
      },
      {
        name: "Pro",
        price: "$599",
        popular: true,
        description: "Comprehensive design package for established brands",
        features: [
          "Full brand identity package",
          "Logo design (5+ concepts)",
          "Business stationery suite",
          "Social media kit (all platforms)",
          "Basic brand guidelines",
          "Marketing materials (brochure, flyer)",
          "7 revisions",
          "10-15 days delivery",
        ],
      },
      {
        name: "Premium",
        price: "$1,599",
        description: "Enterprise-level design solutions",
        features: [
          "Premium brand identity system",
          "Comprehensive brand guidelines",
          "Complete marketing collateral package",
          "Packaging design",
          "Trade show/event materials",
          "Web/UI design elements",
          "10 revisions",
          "20-25 days delivery",
        ],
      },
    ],
  },
  "graphics-design": {
    title: "Graphics Design",
    description:
      "From logos to full brand identity kits, we create visually impactful designs that build recognition and set you apart.",
    icon: <IoColorPaletteOutline className="w-6 h-6" />,
    plans: [
      {
        name: "Starter",
        price: "$99",
        description: "Basic design needs for new businesses",
        features: [
          "Logo design (2 concepts)",
          "Business card design",
          "Social media profile graphics",
          "3 revisions",
          "5-7 days delivery",
        ],
      },
      {
        name: "Standard",
        price: "$169",
        description: "Complete brand identity for growing businesses",
        features: [
          "Logo design (3-5 concepts)",
          "Business card and letterhead",
          "Social media kit (profile + post templates)",
          "Email signature design",
          "5 revisions",
          "7-10 days delivery",
        ],
      },
      {
        name: "Pro",
        price: "$599",
        popular: true,
        description: "Comprehensive design package for established brands",
        features: [
          "Full brand identity package",
          "Logo design (5+ concepts)",
          "Business stationery suite",
          "Social media kit (all platforms)",
          "Basic brand guidelines",
          "Marketing materials (brochure, flyer)",
          "7 revisions",
          "10-15 days delivery",
        ],
      },
      {
        name: "Premium",
        price: "$1,599",
        description: "Enterprise-level design solutions",
        features: [
          "Premium brand identity system",
          "Comprehensive brand guidelines",
          "Complete marketing collateral package",
          "Packaging design",
          "Trade show/event materials",
          "Web/UI design elements",
          "10 revisions",
          "20-25 days delivery",
        ],
      },
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description:
      "ROI-driven strategies including SEO, Facebook & Google Ads, content marketing, and social media growth — all tailored to scale your business online.",
    icon: <GoMegaphone className="w-6 h-6" />,
    plans: [
      {
        name: "Starter",
        price: "$49",
        description: "Essential marketing for new businesses",
        features: [
          "Basic SEO setup",
          "Social media profile setup",
          "Google My Business setup",
          "Monthly performance report",
        ],
      },
      {
        name: "Standard",
        price: "$99",
        description: "Marketing strategy for growing businesses",
        features: [
          "Comprehensive SEO strategy",
          "Content calendar (4 posts/month)",
          "Social media management (2 platforms)",
          "Basic Google Ads setup",
          "Bi-weekly performance reports",
        ],
      },
      {
        name: "Pro",
        price: "$599",
        popular: true,
        description: "Full-scale marketing for established businesses",
        features: [
          "Advanced SEO optimization",
          "Content strategy and creation (8 posts/month)",
          "Social media management (3 platforms)",
          "Google & Facebook Ads management",
          "Email marketing campaign",
          "Weekly performance reports",
        ],
      },
      {
        name: "Premium",
        price: "$999",
        description: "Enterprise marketing solutions",
        features: [
          "Complete digital marketing strategy",
          "Content marketing (12+ posts/month)",
          "Social media management (all platforms)",
          "PPC campaign management (all platforms)",
          "Conversion rate optimization",
          "Competitor analysis",
          "Custom reporting dashboard",
        ],
      },
    ],
  },
  "mobile-apps": {
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
    plans: [
      {
        name: "Starter",
        price: "$399",
        description: "Basic app development for startups",
        features: [
          "Single platform (iOS or Android)",
          "Basic UI/UX design",
          "Up to 5 screens",
          "Basic functionality",
          "3 revisions",
          "10-15 days delivery",
        ],
      },
      {
        name: "Standard",
        price: "$499",
        description: "Complete app solution for growing businesses",
        features: [
          "Cross-platform (iOS & Android)",
          "Custom UI/UX design",
          "Up to 8 screens",
          "User authentication",
          "Basic database integration",
          "5 revisions",
          "15-20 days delivery",
        ],
      },
      {
        name: "Pro",
        price: "$5,999",
        popular: true,
        description: "Advanced app development for established businesses",
        features: [
          "Cross-platform with native components",
          "Premium UI/UX design",
          "Up to 15 screens",
          "Advanced user management",
          "Payment gateway integration",
          "API integration",
          "Push notifications",
          "7 revisions",
          "25-30 days delivery",
        ],
      },
      {
        name: "Premium",
        price: "$11,999",
        description: "Enterprise app solutions",
        features: [
          "Fully native apps for all platforms",
          "Enterprise UI/UX design",
          "Unlimited screens",
          "Complex functionality",
          "Full backend development",
          "Analytics integration",
          "Offline capabilities",
          "10 revisions",
          "2-3 months delivery",
        ],
      },
    ],
  },
  branding: {
    title: "Branding",
    description:
      "Comprehensive branding solutions that help your business stand out and connect with your audience.",
    icon: <PiChartLineUp className="w-6 h-6" />,
    plans: [
      {
        name: "Starter",
        price: "$299",
        description: "Essential branding for new businesses",
        features: [
          "Logo design",
          "Color palette",
          "Typography selection",
          "3 revisions",
          "7-10 days delivery",
        ],
      },
      {
        name: "Standard",
        price: "$399",
        description: "Complete branding package for growing businesses",
        features: [
          "Logo design",
          "Brand identity system",
          "Business card design",
          "Letterhead design",
          "Social media profile setup",
          "5 revisions",
          "10-15 days delivery",
        ],
      },
      {
        name: "Pro",
        price: "$9,999",
        popular: true,
        description: "Comprehensive branding for established businesses",
        features: [
          "Full brand development",
          "Market research & positioning",
          "Complete visual identity system",
          "Brand guidelines manual",
          "Marketing collateral design",
          "Website design concept",
          "7 revisions",
          "20-30 days delivery",
        ],
      },
      {
        name: "Premium",
        price: "$20,999",
        description: "Enterprise branding solutions",
        features: [
          "Strategic brand consulting",
          "Comprehensive market analysis",
          "Complete brand identity system",
          "Extensive brand guidelines",
          "Full marketing material design",
          "Website & social media design",
          "Brand launch strategy",
          "10 revisions",
          "1-2 months delivery",
        ],
      },
    ],
  },
  "e-commerce-solutions": {
    title: "E-Commerce Solutions",
    description:
      "Complete eCommerce websites with secure payment gateways, inventory systems, product management, and performance optimization.",
    icon: <MdOutlineShoppingCart className="w-6 h-6" />,
    plans: [
      {
        name: "Starter",
        price: "$499",
        description: "Basic e-commerce for new businesses",
        features: [
          "Up to 20 products",
          "Basic product pages",
          "Shopping cart functionality",
          "Payment gateway integration",
          "Mobile responsive design",
          "3 revisions",
          "7-10 days delivery",
        ],
      },
      {
        name: "Standard",
        price: "$699",
        description: "Complete e-commerce solution for growing businesses",
        features: [
          "Up to 100 products",
          "Custom product pages",
          "Advanced shopping cart",
          "Multiple payment options",
          "Basic inventory management",
          "Order tracking system",
          "5 revisions",
          "15-20 days delivery",
        ],
      },
      {
        name: "Pro",
        price: "$16,999",
        popular: true,
        description: "Advanced e-commerce for established businesses",
        features: [
          "Unlimited products",
          "Custom e-commerce design",
          "Advanced product filtering",
          "Customer account management",
          "Inventory & order management",
          "Sales & discount system",
          "Basic analytics integration",
          "7 revisions",
          "20-30 days delivery",
        ],
      },
      {
        name: "Premium",
        price: "$29,999",
        description: "Enterprise e-commerce solutions",
        features: [
          "Enterprise-grade e-commerce platform",
          "Multi-vendor capability",
          "Advanced CRM integration",
          "Inventory management system",
          "Custom checkout process",
          "Advanced analytics & reporting",
          "Multi-currency & tax system",
          "10 revisions",
          "1-2 months delivery",
        ],
      },
    ],
  },
  "website-maintenance-&-support": {
    title: "Website Maintenance & Support",
    description:
      "Ongoing updates, backups, bug fixes, and performance monitoring to keep your site running smoothly and securely, 24/7.",
    icon: <VscTools className="w-6 h-6" />,
    plans: [
      {
        name: "Starter",
        price: "$19",
        description: "Basic maintenance for small websites",
        features: [
          "Monthly backup",
          "Security monitoring",
          "Basic performance optimization",
          "Up to 1 hour of updates per month",
        ],
      },
      {
        name: "Standard",
        price: "$39",
        description: "Complete maintenance for growing websites",
        features: [
          "Weekly backups",
          "Security monitoring & updates",
          "Performance optimization",
          "Monthly content updates",
          "Up to 3 hours of updates per month",
          "Email support",
        ],
      },
      {
        name: "Pro",
        price: "$999",
        popular: true,
        description: "Advanced maintenance for established websites",
        features: [
          "Daily backups",
          "Advanced security monitoring",
          "Comprehensive performance optimization",
          "Weekly content updates",
          "Up to 10 hours of updates per month",
          "Priority email & phone support",
          "Monthly performance reports",
        ],
      },
      {
        name: "Premium",
        price: "$2,999",
        description: "Enterprise website maintenance solutions",
        features: [
          "Continuous backup system",
          "Enterprise security monitoring",
          "Comprehensive performance optimization",
          "Unlimited content updates",
          "Up to 20 hours of development per month",
          "24/7 priority support",
          "Weekly performance reports",
        ],
      },
    ],
  },
};

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return Object.keys(serviceData).map(key => ({
    slug: slugify(key),
  }));
}

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  console.log("slug:", slug);

  ///////////////////////////////

  ///////////////////////////////

  // Create a mapping object to find services by their slugified names
  const serviceMap = new Map();
  Object.values(serviceData).forEach(serviceData => {
    const slugifiedTitle = slugify(serviceData.title);
    serviceMap.set(slugifiedTitle, serviceData);
  });

  // Find the service that matches the slug
  const service = serviceMap.get(slug);

  // If no service is found, redirect to 404
  if (!service) {
    notFound();
  }

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
              {service.plans.map((plan: ServicePlan, index: number) => (
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
                      {plan.features.map((feature: string, idx: number) => (
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
