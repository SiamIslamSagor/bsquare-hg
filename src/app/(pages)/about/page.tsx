"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { CustomButton } from "@/components/ui/custom-button";
import { PageLoader } from "@/components/layout/page-loader";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    image:
      "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='1000' viewBox='0 0 800 1000'%3E%3Crect fill='%23264653' width='800' height='1000'/%3E%3Ctext fill='%23ffffff' font-family='sans-serif' font-size='40' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EAlex Johnson%3C/text%3E%3C/svg%3E",
    bio: "With over 15 years of experience in digital innovation, Alex leads our team with vision and expertise.",
    social: {
      twitter: "https://twitter.com/username",
      linkedin: "https://linkedin.com/in/username",
    },
  },
  {
    name: "Sarah Williams",
    role: "Creative Director",
    image:
      "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='1000' viewBox='0 0 800 1000'%3E%3Crect fill='%232a9d8f' width='800' height='1000'/%3E%3Ctext fill='%23ffffff' font-family='sans-serif' font-size='40' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3ESarah Williams%3C/text%3E%3C/svg%3E",
    bio: "Sarah brings her artistic vision and strategic thinking to create impactful brand experiences.",
    social: {
      twitter: "https://twitter.com/username",
      linkedin: "https://linkedin.com/in/username",
    },
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    image:
      "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='1000' viewBox='0 0 800 1000'%3E%3Crect fill='%23e9c46a' width='800' height='1000'/%3E%3Ctext fill='%23ffffff' font-family='sans-serif' font-size='40' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EMichael Chen%3C/text%3E%3C/svg%3E",
    bio: "Michael&apos;s technical expertise ensures our digital solutions are robust, scalable, and future-proof.",
    social: {
      twitter: "https://twitter.com/username",
      linkedin: "https://linkedin.com/in/username",
    },
  },
  {
    name: "Emily Rodriguez",
    role: "UX/UI Designer",
    image:
      "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='1000' viewBox='0 0 800 1000'%3E%3Crect fill='%23f4a261' width='800' height='1000'/%3E%3Ctext fill='%23ffffff' font-family='sans-serif' font-size='40' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EEmily Rodriguez%3C/text%3E%3C/svg%3E",
    bio: "Emily combines user research with creative design to craft intuitive and engaging user experiences.",
    social: {
      twitter: "https://twitter.com/username",
      linkedin: "https://linkedin.com/in/username",
    },
  },
];

const timeline = [
  {
    year: "2015",
    title: "Humble Beginnings",
    description:
      "BSquare was founded in a small studio apartment with a vision to create beautiful digital experiences.",
  },
  {
    year: "2017",
    title: "Studio Expansion",
    description:
      "We moved to a proper office space and expanded our team to include specialized designers and developers.",
  },
  {
    year: "2019",
    title: "Award Recognition",
    description:
      "Our projects gained industry recognition, winning multiple design and development awards.",
  },
  {
    year: "2021",
    title: "Global Reach",
    description:
      "We expanded our client base internationally, working with brands across four continents.",
  },
  {
    year: "2023",
    title: "Innovation Lab",
    description:
      "We launched our innovation lab focused on emerging technologies and cutting-edge digital solutions.",
  },
];

export default function AboutPage() {
  return (
    <PageLoader>
      <div className="space-y-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimation direction="right" delay={0.2}>
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                    We are <span className="text-primary">BSquare</span>
                  </h1>
                  <p className="text-xl leading-8 text-muted-foreground mb-6">
                    A collective of creative minds passionate about crafting
                    digital experiences that inspire and drive results.
                  </p>
                  <p className="text-base text-muted-foreground mb-8">
                    Founded in 2015, we&apos;ve been helping brands transform
                    their digital presence through innovative design and
                    technology solutions.
                  </p>
                  <CustomButton
                    href="/contact"
                    label="Get to Know Us"
                    withArrow
                  />
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="left" delay={0.4}>
                <div className="relative rounded-xl overflow-hidden h-[400px] md:h-[500px]">
                  <Image
                    src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='720' viewBox='0 0 1080 720'%3E%3Crect fill='%23264653' width='1080' height='720'/%3E%3Ctext fill='%23ffffff' font-family='sans-serif' font-size='40' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EBSquare Team%3C/text%3E%3C/svg%3E"
                    alt="BSquare Team"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Mission Values Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <ScrollAnimation>
              <SectionHeader
                subtitle="Our Mission"
                title="Why We Do What We Do"
                description="We believe in the power of good design and technology to transform businesses and people's lives."
              />
            </ScrollAnimation>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                {
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
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  ),
                  title: "Integrity",
                  description:
                    "We build trust through transparent communication and delivering on our promises.",
                },
                {
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
                      <path d="M2 12h5l2 5 5-10 2 5h6"></path>
                    </svg>
                  ),
                  title: "Innovation",
                  description:
                    "We challenge conventions and explore new possibilities to create unique solutions.",
                },
                {
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
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  ),
                  title: "Collaboration",
                  description:
                    "We work closely with our clients, treating their goals as our own.",
                },
              ].map((value, index) => (
                <ScrollAnimation
                  key={value.title}
                  delay={index * 0.1}
                  direction="up"
                >
                  <div className="bg-background p-6 rounded-xl shadow-sm border">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey Timeline */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <ScrollAnimation>
              <SectionHeader
                subtitle="Our Journey"
                title="From Startup to Industry Leader"
                description="A brief timeline of our growth and milestones over the years."
              />
            </ScrollAnimation>

            <div className="mt-12 relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-border transform md:translate-x-[-1px]"></div>

              <div className="relative">
                {timeline.map((item, index) => (
                  <ScrollAnimation
                    key={item.year}
                    delay={index * 0.15}
                    direction={index % 2 === 0 ? "right" : "left"}
                    distance={40}
                  >
                    <div
                      className={`flex flex-col md:flex-row gap-8 mb-12 ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="md:w-1/2 flex justify-end md:pr-12">
                        <div
                          className={`${
                            index % 2 === 0 ? "md:text-left" : "md:text-right"
                          }`}
                        >
                          <span className="text-4xl font-bold text-primary">
                            {item.year}
                          </span>
                          <h3 className="text-xl font-semibold mt-2 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Timeline dot */}
                      <div className="absolute left-[-9px] md:left-1/2 md:transform md:translate-x-[-9px] w-5 h-5 bg-primary rounded-full"></div>

                      <div className="md:w-1/2 md:pl-12"></div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <ScrollAnimation>
              <SectionHeader
                subtitle="Our Team"
                title="Meet the Creative Minds"
                description="A talented group of professionals passionate about creating exceptional digital experiences."
              />
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {teamMembers.map((member, index) => (
                <ScrollAnimation
                  key={member.name}
                  delay={index * 0.15}
                  direction="up"
                  distance={40}
                >
                  <div className="bg-background rounded-xl overflow-hidden shadow-sm border group">
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-primary text-sm mb-2">{member.role}</p>
                      <p className="text-muted-foreground text-sm mb-4">
                        {member.bio}
                      </p>
                      <div className="flex space-x-3">
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container text-center">
            <ScrollAnimation>
              <div className="max-w-3xl mx-auto">
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
    </PageLoader>
  );
}
