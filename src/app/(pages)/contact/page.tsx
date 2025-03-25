"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { CustomButton } from "@/components/ui/custom-button";
import { PageLoader } from "@/components/layout/page-loader";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // For parallax scrolling effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Create transform values for parallax effect
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -30]);
  const mapY = useTransform(scrollYProgress, [0.5, 1], [0, -20]);

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <PageLoader>
      <div className="space-y-20" ref={containerRef}>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent to-background/5 pointer-events-none"
            style={{ transform: `translateY(${heroY.get()}px)` }}
          />
          <div className="container relative">
            <ScrollAnimation>
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                  Let&apos;s Start a Conversation
                </h1>
                <p className="text-xl leading-8 text-muted-foreground">
                  Have a project in mind? We&apos;d love to hear from you. Send
                  us a message and we&apos;ll respond as soon as possible.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              <ScrollAnimation direction="right">
                <div>
                  <SectionHeader
                    subtitle="Get in Touch"
                    title="Send Us a Message"
                    description="Fill out the form below and we'll get back to you as soon as possible."
                  />

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-8 p-8 rounded-lg bg-primary/5 text-center"
                    >
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
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
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We&apos;ll get back to you
                        shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      className="mt-8 space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                          <motion.label
                            htmlFor="name"
                            className="block text-sm font-medium mb-2"
                            animate={{
                              scale: focusedField === "name" ? 1.05 : 1,
                              color:
                                focusedField === "name"
                                  ? "hsl(var(--primary))"
                                  : "currentColor",
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            Name
                          </motion.label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            className="w-full px-4 py-2 rounded-lg border bg-background transition-shadow duration-300 focus:outline-none focus:ring-0 focus:border-transparent"
                            placeholder="Your name"
                          />
                          <motion.div
                            className="absolute bottom-0 left-0 h-0.5 bg-primary"
                            initial={{ width: 0 }}
                            animate={{
                              width: focusedField === "name" ? "100%" : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        <div className="relative">
                          <motion.label
                            htmlFor="email"
                            className="block text-sm font-medium mb-2"
                            animate={{
                              scale: focusedField === "email" ? 1.05 : 1,
                              color:
                                focusedField === "email"
                                  ? "hsl(var(--primary))"
                                  : "currentColor",
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            Email
                          </motion.label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            className="w-full px-4 py-2 rounded-lg border bg-background transition-shadow duration-300 focus:outline-none focus:ring-0 focus:border-transparent"
                            placeholder="your@email.com"
                          />
                          <motion.div
                            className="absolute bottom-0 left-0 h-0.5 bg-primary"
                            initial={{ width: 0 }}
                            animate={{
                              width: focusedField === "email" ? "100%" : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <motion.label
                          htmlFor="subject"
                          className="block text-sm font-medium mb-2"
                          animate={{
                            scale: focusedField === "subject" ? 1.05 : 1,
                            color:
                              focusedField === "subject"
                                ? "hsl(var(--primary))"
                                : "currentColor",
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          Subject
                        </motion.label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("subject")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-2 rounded-lg border bg-background transition-shadow duration-300 focus:outline-none focus:ring-0 focus:border-transparent"
                          placeholder="What's this about?"
                        />
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-primary"
                          initial={{ width: 0 }}
                          animate={{
                            width: focusedField === "subject" ? "100%" : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <div className="relative">
                        <motion.label
                          htmlFor="message"
                          className="block text-sm font-medium mb-2"
                          animate={{
                            scale: focusedField === "message" ? 1.05 : 1,
                            color:
                              focusedField === "message"
                                ? "hsl(var(--primary))"
                                : "currentColor",
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          Message
                        </motion.label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          value={formState.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-2 rounded-lg border bg-background transition-shadow duration-300 focus:outline-none focus:ring-0 focus:border-transparent"
                          placeholder="Your message..."
                        ></textarea>
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-primary"
                          initial={{ width: 0 }}
                          animate={{
                            width: focusedField === "message" ? "100%" : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <CustomButton
                          type="submit"
                          label={isSubmitting ? "Sending..." : "Send Message"}
                          size="lg"
                          withArrow
                          className={
                            isSubmitting ? "opacity-80 cursor-wait" : ""
                          }
                          disabled={isSubmitting}
                        />
                      </motion.div>
                    </form>
                  )}
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="left">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
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
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                          ),
                          title: "Phone",
                          content: "+1 (555) 123-4567",
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
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                          ),
                          title: "Email",
                          content: "contact@bsquare.com",
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
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                          ),
                          title: "Address",
                          content: (
                            <>
                              123 Business Street
                              <br />
                              New York, NY 10001
                            </>
                          ),
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/30 transition-colors cursor-pointer"
                          whileHover={{ scale: 1.03, x: 5 }}
                        >
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-medium">{item.title}</h4>
                            <p className="text-muted-foreground">
                              {item.content}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-background p-6 rounded-lg shadow-sm border">
                    <h3 className="text-2xl font-semibold mb-4">
                      Business Hours
                    </h3>
                    <div className="space-y-2">
                      {[
                        { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                        { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                        { day: "Sunday", hours: "Closed" },
                      ].map((schedule, index) => (
                        <motion.div
                          key={index}
                          className="flex justify-between py-2 px-3 rounded hover:bg-muted/30 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-muted-foreground">
                            {schedule.day}
                          </span>
                          <span className="font-medium">{schedule.hours}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-t from-transparent to-background/5 pointer-events-none"
            style={{ transform: `translateY(${mapY.get()}px)` }}
          />
          <div className="container relative">
            <ScrollAnimation>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1641234567890!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </div>
    </PageLoader>
  );
}
