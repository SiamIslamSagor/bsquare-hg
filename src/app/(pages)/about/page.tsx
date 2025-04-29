"use client";

import amanImg from "@/assets/images/team/aman.jpg";
import ashiqImg from "@/assets/images/team/ashiq.jpg";
import siamImg from "@/assets/images/team/siam.jpg";
import tanvirImg from "@/assets/images/team/tanvir.png";
import tusarImg from "@/assets/images/team/tusar.jpg";
import { PageLoader } from "@/components/layout/page-loader";
import { CustomButton } from "@/components/ui/custom-button";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { SectionHeader } from "@/components/ui/section-header";
import Image from "next/image";
import { LuHandshake } from "react-icons/lu";
import { MdSecurity } from "react-icons/md";
import { RxLapTimer } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const teamMembers = [
  {
    name: "Ashiqur Rahman",
    role: "Founder | Chief Innovation Officer",
    image: ashiqImg,

    bio: "Ashiq is the driving force behind B Square Tech’s vision and innovation. With a deep passion for technology, design, and entrepreneurship, he founded B Square Tech to redefine how businesses grow digitally.",
    social: {
      facebook: "https://www.facebook.com/moin.rahman.397",
      whatsapp: "https://wa.me/8801308970800",
    },
  },
  {
    name: "Tanvir Alom",
    role: "Co-Founder | Chief Technology Officer",
    image: tanvirImg,
    bio: "Tanvir is the technological architect behind B Square Tech’s innovation. As Co-Founder and CTO, he drives the company’s technical vision, overseeing software architecture, security, and system scalability.",
    social: {
      facebook: "https://www.facebook.com/profile.php?id=61566861736650",
      whatsapp: "https://wa.me/8801990821898",
    },
  },
  {
    name: "Md Aman Ullah Aman",
    role: "Lead Graphics & UI/UX Designer",
    image: amanImg,
    bio: "The creative heart of B Square Tech, our Lead Designer transforms ideas into stunning visual experiences. With a sharp eye for aesthetics and deep understanding of user behavior, they craft designs that are both beautiful and functional — from brand identities to seamless user interfaces.",
    social: {},
  },
  {
    name: "MD SIAM ISLAM SAGOR",
    role: "Lead Web Developer",
    image: siamImg,
    bio: "The coding architect behind B Square Tech’s web excellence, our Lead Web Developer ensures that every digital product is crafted with precision, speed, and performance. They lead front-end and back-end development efforts, driving technical innovation and transforming complex ideas into seamless, responsive web experiences.",
    social: {},
  },
  {
    name: "Tushar Molla",
    role: "Lead App Developer",
    image: tusarImg,
    bio: "Our Lead App Developer is the engine behind B Square Tech’s mobile innovation. With expertise in both Android and iOS platforms, they architect fast, intuitive, and scalable mobile apps that turn complex user needs into sleek, high-performance experiences — all while staying ahead of trends and tech.",
    social: {},
  },
];

const timeline = [
  {
    year: "2021",
    title: " — The Build Begins",
    description:
      "B Square Tech was officially launched with a small remote team, taking on freelance web and app development projects from local businesses.",
  },
  {
    year: "2022",
    title: " — Client Portal v1 Released",
    description:
      "We built a dedicated client portal for real-time project tracking, communication, and feedback — taking our client experience to the next level.",
  },
  {
    year: "2023",
    title: "— Services Go Pro",
    description:
      "Expanded our service offerings to include branding, graphics design, and digital marketing — transforming into a full-service tech agency.",
  },
  {
    year: "2024",
    title: " — Cross-Border Projects",
    description:
      "Delivered projects for clients across 7+ countries, adapting to diverse industries and introducing localized digital solutions.",
  },
  {
    year: "2025",
    title: " — Innovation and Beyond",
    description:
      "Integrated AI tools, animation workflows, and automation into our pipeline — leading a new wave of creative, scalable digital transformation.",
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
                    {/* We are <span className="text-primary">BSquare</span> */}
                    Who We Are
                  </h1>
                  <p className="text-xl leading-8 text-muted-foreground mb-6">
                    Founded with the mission to bridge technology and
                    creativity, B Square Tech has quickly become a trusted name
                    for businesses seeking digital transformation. We are a
                    passionate team of developers, designers, and strategists
                    dedicated to crafting high-quality websites, apps, visuals,
                    and marketing strategies. From startups to established
                    enterprises — we deliver tailored, scalable, and
                    performance-driven solutions that help businesses thrive in
                    the digital age.
                  </p>
                  {/* <p className="text-xl leading-8 text-muted-foreground mb-6">
                    A collective of creative minds passionate about crafting
                    digital experiences that inspire and drive results.
                  </p>
                  <p className="text-base text-muted-foreground mb-8">
                    Founded in 2015, we&apos;ve been helping brands transform
                    their digital presence through innovative design and
                    technology solutions.
                  </p> */}
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
                // subtitle="Our Mission"
                title="Why Choose Us?"
                description="Because We Don’t Just Build Projects — We Build Trust."
              />
            </ScrollAnimation>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  icon: <LuHandshake className="w-6 h-6" />,
                  title: "Client-Centered Approach",
                  description:
                    "We listen first, act second. Your goals become our goals, and every solution is crafted around your unique needs.",
                },
                {
                  icon: <MdSecurity className="w-6 h-6" />,
                  title: "End-to-End Expertise",
                  description:
                    "From strategy to execution, we handle everything in-house — design, development, deployment, and marketing.",
                },
                {
                  icon: <RxLapTimer className="w-6 h-6" />,
                  title: "On-Time Delivery",
                  description:
                    "We respect deadlines as much as we respect quality. Our systems ensure rapid development without compromise.",
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
                description="A timeline of our real growth, expansion, and future vision."
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

            <div className="mt-12 space-y-8">
              {/* First row - 2 members */}
              <div className="flex flex-col justify-center md:flex-row gap-6 md:max-w-[768px] lg:max-w-[1000px] mx-auto">
                <div className="flex-1 md:max-w-[350px]">
                  <ScrollAnimation delay={0.15} direction="up" distance={40}>
                    <div className="bg-background rounded-xl overflow-hidden shadow-sm border group h-full">
                      <div className="aspect-[3/4] relative overflow-hidden">
                        <Image
                          src={teamMembers[0].image}
                          alt={teamMembers[0].name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold">
                          {teamMembers[0].name}
                        </h3>
                        <p className="text-primary text-sm mb-2">
                          {teamMembers[0].role}
                        </p>
                        <p className="text-muted-foreground text-sm mb-4">
                          {teamMembers[0].bio}
                        </p>
                        <div className="flex space-x-3">
                          <a
                            href={teamMembers[0].social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <FaFacebook className="w-6 h-6" />
                          </a>
                          <a
                            href={teamMembers[0].social.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <IoLogoWhatsapp className="w-6 h-6" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>

                <div className="flex-1 md:max-w-[350px]">
                  <ScrollAnimation delay={0.3} direction="up" distance={40}>
                    <div className="bg-background rounded-xl overflow-hidden shadow-sm border group h-full">
                      <div className="aspect-[3/4] relative overflow-hidden">
                        <Image
                          src={teamMembers[1].image}
                          alt={teamMembers[1].name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold">
                          {teamMembers[1].name}
                        </h3>
                        <p className="text-primary text-sm mb-2">
                          {teamMembers[1].role}
                        </p>
                        <p className="text-muted-foreground text-sm mb-4">
                          {teamMembers[1].bio}
                        </p>
                        <div className="flex space-x-3">
                          <a
                            href={teamMembers[1].social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <FaFacebook className="w-6 h-6" />
                          </a>
                          <a
                            href={teamMembers[1].social.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <IoLogoWhatsapp className="w-6 h-6" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>

              {/* Second row - 3 members */}
              <div className="flex justify-between flex-col md:flex-row gap-6 md:max-w-[1000px] mx-auto">
                <div className="flex-1 md:max-w-[300px]">
                  <ScrollAnimation delay={0.45} direction="up" distance={40}>
                    <div className="bg-background rounded-xl overflow-hidden shadow-sm border group h-full">
                      <div className="aspect-[3/4] relative overflow-hidden">
                        <Image
                          src={teamMembers[2].image}
                          alt={teamMembers[2].name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold">
                          {teamMembers[2].name}
                        </h3>
                        <p className="text-primary text-sm mb-2">
                          {teamMembers[2].role}
                        </p>
                        <p className="text-muted-foreground text-sm mb-4">
                          {teamMembers[2].bio}
                        </p>
                        {/* <div className="flex space-x-3">
                          <a
                            href={teamMembers[2].social.twitter}
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
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07a4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                          <a
                            href={teamMembers[2].social.linkedin}
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
                        </div> */}
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>

                <div className="flex-1 md:max-w-[300px]">
                  <ScrollAnimation delay={0.6} direction="up" distance={40}>
                    <div className="bg-background rounded-xl overflow-hidden shadow-sm border group h-full">
                      <div className="aspect-[3/4] relative overflow-hidden">
                        <Image
                          src={teamMembers[3].image}
                          alt={teamMembers[3].name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold">
                          {teamMembers[3].name}
                        </h3>
                        <p className="text-primary text-sm mb-2">
                          {teamMembers[3].role}
                        </p>
                        <p className="text-muted-foreground text-sm mb-4">
                          {teamMembers[3].bio}
                        </p>
                        {/* <div className="flex space-x-3">
                          <a
                            href={teamMembers[3].social.twitter}
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
                            href={teamMembers[3].social.linkedin}
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
                        </div> */}
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>

                <div className="flex-1 md:max-w-[300px]">
                  <ScrollAnimation delay={0.75} direction="up" distance={40}>
                    <div className="bg-background rounded-xl overflow-hidden shadow-sm border group h-full">
                      <div className="aspect-[3/4] relative overflow-hidden">
                        <Image
                          src={teamMembers[4].image}
                          alt={teamMembers[4].name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold">
                          {teamMembers[4].name}
                        </h3>
                        <p className="text-primary text-sm mb-2">
                          {teamMembers[4].role}
                        </p>
                        <p className="text-muted-foreground text-sm mb-4">
                          {teamMembers[4].bio}
                        </p>
                        {/* <div className="flex space-x-3">
                          <a
                            href={teamMembers[4].social.twitter}
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
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07a4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                          <a
                            href={teamMembers[4].social.linkedin}
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
                        </div> */}
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
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
