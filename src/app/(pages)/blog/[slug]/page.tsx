"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Heart, MessageCircle, Share2 } from "lucide-react";

// This would typically come from a CMS or database
// Here we're using a static example
const blogPost = {
  title: "Top Web Design Trends in 2023",
  date: "May 15, 2023",
  author: "Alex Johnson",
  authorRole: "UX Designer",
  authorImage:
    "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect fill='%23264653' width='400' height='400'/%3E%3Ctext fill='%23ffffff' font-family='sans-serif' font-size='24' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EAJ%3C/text%3E%3C/svg%3E",
  category: "Design",
  readTime: "5 min read",
  heroImage:
    "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='630' viewBox='0 0 1200 630'%3E%3Crect fill='%23264653' width='1200' height='630'/%3E%3Ctext fill='%23ffffff' font-family='sans-serif' font-size='48' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EWeb Design Trends%3C/text%3E%3C/svg%3E",
  excerpt:
    "Explore the cutting-edge design trends that are shaping the web in 2023, from immersive 3D elements to enhanced accessibility features.",
  content: `
    <p>The digital landscape is constantly evolving, and web design trends reflect these changes. In 2023, we&apos;re seeing a fusion of aesthetics and functionality, with designers prioritizing both visual appeal and user experience.</p>
    
    <h2>1. Immersive 3D Elements</h2>
    <p>Three-dimensional elements are becoming increasingly popular, adding depth and interactivity to websites. With advancements in WebGL and JavaScript libraries like Three.js, designers can now incorporate stunning 3D visualizations without sacrificing performance.</p>
    <p>These elements are particularly effective for product showcases, virtual tours, and interactive storytelling experiences.</p>
    
    <h2>2. Dark Mode as Default</h2>
    <p>Dark mode is no longer just an alternative option but often the default design choice for many websites. It reduces eye strain, saves battery life on OLED screens, and creates a sleek, modern aesthetic that works well with vibrant accent colors.</p>
    
    <h2>3. Micro-interactions and Animation</h2>
    <p>Subtle animations and micro-interactions enhance user engagement by providing immediate feedback and adding personality to digital interfaces. From hover effects to loading animations, these small details significantly improve the overall user experience.</p>
    
    <h2>4. Enhanced Accessibility Features</h2>
    <p>Accessibility is finally getting the attention it deserves in mainstream web design. Designers are implementing features like keyboard navigation, screen reader compatibility, and adequate color contrast to ensure websites are usable by everyone, regardless of ability.</p>
    
    <h2>5. Glassmorphism and Neumorphism</h2>
    <p>These design styles continue to evolve, with glassmorphism (the frosted glass effect) and neumorphism (soft, extruded shapes) creating visually interesting interfaces. When used appropriately, these styles add depth and dimension to flat designs.</p>
    
    <h2>6. Minimalism with Bold Typography</h2>
    <p>Minimalist layouts paired with bold, expressive typography are making a strong statement in 2023. This approach balances simplicity with personality, creating memorable and distinctive brand identities.</p>
    
    <h2>7. Responsive Design for All Devices</h2>
    <p>With the proliferation of devices in various sizes, responsive design remains essential. However, the focus has shifted from merely adapting layouts to creating truly device-specific experiences that leverage the unique capabilities of each platform.</p>
    
    <h2>Conclusion</h2>
    <p>As we navigate through 2023, these trends reflect a maturing web design industry that values both aesthetic innovation and user-centered functionality. The most successful designs will be those that thoughtfully implement these trends in service of their users&apos; needs and business objectives.</p>
  `,
  tags: ["Web Design", "UX/UI", "Design Trends", "Creative", "Development"],
  relatedPosts: [
    {
      id: "responsive-design-principles",
      slug: "responsive-design-principles",
      title: "Core Principles of Responsive Design",
      image:
        "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='630' viewBox='0 0 1200 630'%3E%3Crect fill='%232a9d8f' width='1200' height='630'/%3E%3Ctext fill='%23ffffff' font-family='sans-serif' font-size='40' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EResponsive Design%3C/text%3E%3C/svg%3E",
      category: "Development",
      date: "April 28, 2023",
      excerpt:
        "Learn the fundamental principles of creating responsive designs that work flawlessly across all devices and screen sizes.",
    },
    {
      id: "ux-design-principles",
      slug: "ux-design-principles",
      title: "UX Design Principles Every Designer Should Know",
      image:
        "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='630' viewBox='0 0 1200 630'%3E%3Crect fill='%23118ab2' width='1200' height='630'/%3E%3Ctext fill='%23ffffff' font-family='sans-serif' font-size='40' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EUX Design%3C/text%3E%3C/svg%3E",
      category: "Design",
      date: "May 2, 2023",
      excerpt:
        "Discover the essential principles of user experience design that will help you create more intuitive and user-friendly interfaces.",
    },
    {
      id: "mobile-first-approach",
      slug: "mobile-first-approach",
      title: "Why Mobile-First Design is Essential",
      image:
        "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='630' viewBox='0 0 1200 630'%3E%3Crect fill='%23073b4c' width='1200' height='630'/%3E%3Ctext fill='%23ffffff' font-family='sans-serif' font-size='40' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EMobile-First Design%3C/text%3E%3C/svg%3E",
      category: "Design",
      date: "May 10, 2023",
      excerpt:
        "Explore why starting your design process with mobile devices first leads to better user experiences and more efficient workflows.",
    },
  ],
};

export default function BlogPostPage() {
  const params = useParams();
  // In a real app, you would fetch the blog post data based on the slug
  console.log("Blog post slug:", params.slug);

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="container mb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center text-sm text-muted-foreground mb-4"
          >
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
              {blogPost.category}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            {blogPost.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative w-12 h-12 rounded-full overflow-hidden mr-4"
            >
              <Image
                src={blogPost.authorImage}
                alt={blogPost.author}
                fill
                className="object-cover"
              />
            </motion.div>
            <div>
              <div className="font-medium">{blogPost.author}</div>
              <div className="text-sm text-muted-foreground">
                {blogPost.authorRole}
              </div>
            </div>
            <div className="ml-auto flex items-center text-sm text-muted-foreground">
              <span>{blogPost.date}</span>
              <span className="mx-2">•</span>
              <span>{blogPost.readTime}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-12"
          >
            <Image
              src={blogPost.heroImage}
              alt={blogPost.title}
              fill
              className="object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="container mb-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          {/* Interactive reading progress bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 15, ease: "linear" }}
            style={{ transformOrigin: "left" }}
          />

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 pt-8 border-t"
          >
            <h3 className="text-lg font-medium mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag, index) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                    className="px-3 py-1 bg-primary/10 hover:bg-primary/20 text-primary text-sm rounded-full transition-colors"
                  >
                    {tag}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Author Card with hover effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            className="mt-10 p-6 bg-muted/30 rounded-xl flex flex-col md:flex-row gap-6 items-center transition-all duration-300"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0"
            >
              <Image
                src={blogPost.authorImage}
                alt={blogPost.author}
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">
                About {blogPost.author}
              </h3>
              <p className="text-muted-foreground mb-4">
                Alex is a UX Designer with over 8 years of experience in
                creating user-centered digital experiences. He specializes in
                responsive design, accessibility, and design systems.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <motion.a
                  whileHover={{ scale: 1.2, y: -3 }}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, y: -3 }}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="container mb-16">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight mb-8"
          >
            Related Posts
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPost.relatedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <motion.div
                    className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-4"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105 duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                  <div>
                    <div className="mb-2 flex items-center">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground ml-2">
                        {post.date}
                      </span>
                    </div>
                    <motion.h3
                      className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {post.title}
                    </motion.h3>
                    <p className="text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Button asChild size="lg">
              <Link href="/blog">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center"
                >
                  View all articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Reading time indicator */}
      <motion.div
        className="fixed bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-full shadow-lg z-40 flex items-center space-x-2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Clock className="h-4 w-4" />
        <span className="text-sm font-medium">{blogPost.readTime}</span>
      </motion.div>

      {/* Floating action buttons */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-3">
        {["heart", "message-circle", "share-2"].map((icon, index) => (
          <motion.button
            key={icon}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 + index * 0.2, duration: 0.3 }}
            whileHover={{ scale: 1.2, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
            aria-label={icon}
          >
            <span className="sr-only">{icon}</span>
            {icon === "heart" && <Heart className="h-5 w-5" />}
            {icon === "message-circle" && <MessageCircle className="h-5 w-5" />}
            {icon === "share-2" && <Share2 className="h-5 w-5" />}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
