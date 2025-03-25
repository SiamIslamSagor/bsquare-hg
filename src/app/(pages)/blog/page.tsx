"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { PageLoader } from "@/components/layout/page-loader";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

// Example blog articles
const featuredArticles = [
  {
    id: "web-design-trends-2023",
    title: "Top Web Design Trends in 2023",
    excerpt:
      "Explore the cutting-edge design trends that are shaping the web in 2023, from immersive 3D elements to enhanced accessibility features.",
    date: "May 15, 2023",
    category: "Design",
    author: "Alex Johnson",
    image:
      "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='630' viewBox='0 0 1200 630'%3E%3Crect fill='%23264653' width='1200' height='630'/%3E%3Ctext fill='%23ffffff' font-family='sans-serif' font-size='40' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EWeb Design Trends%3C/text%3E%3C/svg%3E",
    readTime: "5 min read",
  },
  {
    id: "responsive-design-principles",
    title: "Core Principles of Responsive Design",
    excerpt:
      "Master the fundamental principles that make responsive design effective across devices and screen sizes in today&apos;s multi-device world.",
    date: "April 28, 2023",
    category: "Development",
    author: "Sarah Williams",
    image:
      "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='630' viewBox='0 0 1200 630'%3E%3Crect fill='%232a9d8f' width='1200' height='630'/%3E%3Ctext fill='%23ffffff' font-family='sans-serif' font-size='40' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EResponsive Design%3C/text%3E%3C/svg%3E",
    readTime: "7 min read",
  },
  {
    id: "seo-strategies-2023",
    title: "SEO Strategies That Actually Work",
    excerpt:
      "Discover proven SEO techniques that can significantly improve your website's visibility and ranking in search engine results.",
    date: "April 15, 2023",
    category: "Marketing",
    author: "Michael Chen",
    image:
      "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='630' viewBox='0 0 1200 630'%3E%3Crect fill='%23e9c46a' width='1200' height='630'/%3E%3Ctext fill='%23ffffff' font-family='sans-serif' font-size='40' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3ESEO Strategies%3C/text%3E%3C/svg%3E",
    readTime: "6 min read",
  },
];

const recentArticles = [
  {
    id: "ai-web-development",
    title: "How AI is Transforming Web Development",
    excerpt:
      "Artificial intelligence is revolutionizing the way websites are built, tested, and maintained. Here&apos;s what you need to know.",
    date: "June 2, 2023",
    category: "Technology",
    author: "Emily Rodriguez",
    image:
      "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='630' viewBox='0 0 1200 630'%3E%3Crect fill='%23f4a261' width='1200' height='630'/%3E%3Ctext fill='%23ffffff' font-family='sans-serif' font-size='40' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EAI Development%3C/text%3E%3C/svg%3E",
    readTime: "8 min read",
  },
  {
    id: "optimizing-website-speed",
    title: "Essential Tips for Optimizing Website Speed",
    excerpt:
      "Website speed is critical for user experience and SEO. Learn practical techniques to make your website lightning fast.",
    date: "May 25, 2023",
    category: "Performance",
    author: "David Kim",
    image:
      "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='630' viewBox='0 0 1200 630'%3E%3Crect fill='%23e76f51' width='1200' height='630'/%3E%3Ctext fill='%23ffffff' font-family='sans-serif' font-size='40' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EWebsite Speed%3C/text%3E%3C/svg%3E",
    readTime: "5 min read",
  },
  {
    id: "ux-design-principles",
    title: "UX Design Principles Every Designer Should Know",
    excerpt:
      "Creating exceptional user experiences requires a solid understanding of core UX principles. Here&apos;s what every designer should master.",
    date: "May 18, 2023",
    category: "Design",
    author: "Alex Johnson",
    image:
      "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='630' viewBox='0 0 1200 630'%3E%3Crect fill='%23118ab2' width='1200' height='630'/%3E%3Ctext fill='%23ffffff' font-family='sans-serif' font-size='40' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EUX Design%3C/text%3E%3C/svg%3E",
    readTime: "6 min read",
  },
  {
    id: "mobile-first-approach",
    title: "Why Mobile-First Design is Essential",
    excerpt:
      "With mobile usage dominating internet traffic, designing for mobile first is no longer optional. Learn why and how to implement this approach.",
    date: "May 10, 2023",
    category: "Design",
    author: "Sarah Williams",
    image:
      "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='630' viewBox='0 0 1200 630'%3E%3Crect fill='%23073b4c' width='1200' height='630'/%3E%3Ctext fill='%23ffffff' font-family='sans-serif' font-size='40' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EMobile-First Design%3C/text%3E%3C/svg%3E",
    readTime: "4 min read",
  },
];

// Blog categories
const categories = [
  "All",
  "Design",
  "Development",
  "Marketing",
  "Technology",
  "Performance",
];

export default function BlogPage() {
  // For parallax scrolling effect
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Create transform values for parallax effect
  const featuredY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const recentY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const communityY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  // Rotation for cards on scroll
  const featuredRotate = useTransform(scrollYProgress, [0, 0.5], [0, 3]);
  const recentRotate = useTransform(scrollYProgress, [0, 0.5], [0, -2]);

  return (
    <PageLoader>
      <div className="space-y-20" ref={containerRef}>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <ScrollAnimation>
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                  Insights & Resources
                </h1>
                <p className="text-xl leading-8 text-muted-foreground">
                  Explore our latest articles, guides, and industry insights to
                  stay informed about web design, development, and digital
                  marketing.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent to-background/5 pointer-events-none"
            style={{ transform: `translateY(${featuredY.get()}px)` }}
          />
          <div className="container relative">
            <ScrollAnimation>
              <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
            </ScrollAnimation>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredArticles.map((article, index) => (
                <ScrollAnimation
                  key={article.id}
                  delay={index * 0.1}
                  direction="up"
                >
                  <div
                    className="bg-background rounded-xl overflow-hidden shadow-sm border group"
                    style={{
                      transform: `rotate(${
                        index % 2 === 0
                          ? featuredRotate.get() / 2
                          : -featuredRotate.get() / 2
                      }deg)`,
                      transition: "transform 0.1s ease-out",
                    }}
                  >
                    <Link href={`/blog/${article.id}`} className="block">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                          {article.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                          <span>{article.date}</span>
                          <span className="mx-2">•</span>
                          <span>{article.readTime}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                              />
                            </svg>
                          </div>
                          <span className="text-sm font-medium">
                            {article.author}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Filter and Recent Articles */}
        <section className="py-16 md:py-24 relative">
          <div
            className="absolute inset-0 bg-gradient-to-t from-transparent to-background/5 pointer-events-none"
            style={{ transform: `translateY(${recentY.get()}px)` }}
          />
          <div className="container">
            <ScrollAnimation>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold">Recent Articles</h2>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category, index) => (
                    <ScrollAnimation
                      key={category}
                      delay={index * 0.05}
                      direction="down"
                    >
                      <button className="px-4 py-2 rounded-full bg-muted/50 hover:bg-primary/10 text-sm font-medium transition-colors">
                        {category}
                      </button>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 gap-8">
              {recentArticles.map((article, index) => (
                <ScrollAnimation
                  key={article.id}
                  delay={index * 0.1}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <div
                    className="bg-background rounded-xl overflow-hidden shadow-sm border group flex flex-col md:flex-row"
                    style={{
                      transform: `rotate(${
                        index % 2 === 0
                          ? recentRotate.get() / 3
                          : -recentRotate.get() / 3
                      }deg)`,
                      transition: "transform 0.1s ease-out",
                    }}
                  >
                    <Link
                      href={`/blog/${article.id}`}
                      className="relative md:w-1/3 h-48 md:h-auto overflow-hidden"
                    >
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </Link>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium mr-2">
                          {article.category}
                        </span>
                        <span>{article.date}</span>
                        <span className="mx-2">•</span>
                        <span>{article.readTime}</span>
                      </div>
                      <Link href={`/blog/${article.id}`} className="block">
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                      </Link>
                      <p className="text-muted-foreground mb-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                            />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">
                          {article.author}
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            <ScrollAnimation delay={0.2}>
              <div className="mt-12 text-center">
                <button className="inline-flex items-center justify-center rounded-md border border-input px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-muted">
                  Load More Articles
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Join Community Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-b from-background/5 to-transparent pointer-events-none"
            style={{ transform: `translateY(${communityY.get()}px)` }}
          />
          <div className="container">
            <ScrollAnimation>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Follow us on social media to stay updated with the latest
                  trends, insights, and tutorials in web design and development.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
              {["Twitter", "LinkedIn", "Instagram", "GitHub"].map(
                (platform, index) => (
                  <ScrollAnimation
                    key={platform}
                    delay={index * 0.1}
                    direction="up"
                  >
                    <div className="bg-background p-8 rounded-xl shadow-sm border text-center hover:border-primary hover:shadow-md transition-all duration-300 transform hover:-translate-y-2">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
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
                            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                          />
                        </svg>
                      </div>
                      <h3 className="font-semibold mb-2">{platform}</h3>
                      <p className="text-sm text-muted-foreground">
                        Join our {platform} community
                      </p>
                    </div>
                  </ScrollAnimation>
                )
              )}
            </div>

            {/* Background shapes */}
            <div className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-primary/5 z-0"></div>
            <div className="absolute bottom-1/4 right-10 w-24 h-24 rounded-full bg-primary/5 z-0"></div>
            <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-xl bg-primary/5 z-0"></div>
          </div>
        </section>
      </div>
    </PageLoader>
  );
}
