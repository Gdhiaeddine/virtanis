"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  FileText,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";
import siteData from "../data/site.json";
import styles from "./ContactPageContent.module.css";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65 },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { once: true, margin: "-60px" },
};

const staggerItem = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

const contactInfo = [
  { icon: Mail, label: "Email", value: siteData.contact.email },
  { icon: Phone, label: "Phone", value: siteData.contact.phone },
  { icon: MapPin, label: "Location", value: siteData.contact.location },
  { icon: Clock, label: "Availability", value: siteData.contact.availability },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function BehanceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.34.5-.84.88-1.5 1.14.9.26 1.58.72 2.02 1.37.44.66.66 1.45.66 2.38 0 .75-.14 1.39-.43 1.93-.29.55-.67 1-1.14 1.35-.48.35-1.02.6-1.65.77-.62.17-1.27.26-1.95.26H0V4.51h6.938v-.007zm-.07 5.98c.55 0 1.01-.15 1.36-.45.36-.3.53-.73.53-1.3 0-.31-.05-.57-.17-.78-.11-.21-.26-.38-.46-.51-.19-.14-.42-.24-.68-.29a3.82 3.82 0 00-.84-.08H3.2v3.42h3.67zm.24 6.28c.32 0 .62-.03.91-.1.29-.07.55-.19.77-.35.22-.16.39-.38.52-.65.13-.27.19-.62.19-1.04 0-.81-.22-1.41-.67-1.77-.44-.36-1.04-.54-1.77-.54H3.2v4.46h3.9l.01-.01zm9.14-10.28h5.85v1.55h-5.85V6.49zm2.72 11.14c.64 0 1.14-.17 1.52-.51.38-.34.6-.81.67-1.41h2.59c-.18 1.2-.7 2.12-1.56 2.77-.86.65-1.94.97-3.21.97-.67 0-1.29-.1-1.87-.3-.58-.2-1.08-.51-1.5-.92-.43-.41-.76-.93-1-1.55-.24-.62-.36-1.34-.36-2.16 0-.78.12-1.49.37-2.12.25-.63.59-1.17 1.02-1.61.43-.44.95-.78 1.54-1.02.59-.24 1.24-.36 1.95-.36.81 0 1.52.15 2.12.46.6.31 1.1.73 1.49 1.26.39.53.67 1.14.85 1.84.18.7.24 1.44.18 2.22h-7.76c-.01.77.22 1.45.7 1.94.48.49 1.1.74 1.87.74l-.01-.01zM18.3 11.9c-.42 0-.77.08-1.06.23-.29.16-.53.36-.72.6-.19.24-.33.5-.42.79-.09.29-.14.57-.16.86h4.64c-.06-.76-.29-1.35-.69-1.77-.41-.42-.94-.63-1.6-.63v.02z" />
    </svg>
  );
}

const socialLinks = [
  { icon: LinkedInIcon, label: "LinkedIn", href: siteData.socialLinks.find(l => l.label === "LinkedIn")?.href || "#" },
  { icon: InstagramIcon, label: "Instagram", href: siteData.socialLinks.find(l => l.label === "Instagram")?.href || "#" },
  { icon: BehanceIcon, label: "Behance", href: siteData.socialLinks.find(l => l.label === "Behance")?.href || "#" },
  { icon: Mail, label: "Email", href: `mailto:${siteData.contact.email}` },
];
/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="contact-title">
      <div className={styles.heroBg} aria-hidden="true">
        <Image
          src="/contact-hero.webp"
          alt="Contact background"
          fill
          priority
          className={styles.heroBgImage}
        />
      </div>

      <div className={styles.heroLeft}>
        <motion.h1
          id="contact-title"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Let&apos;s Build Something{" "}
          <span className={styles.gradientText}>Extraordinary.</span>
        </motion.h1>

        <motion.p
          className={styles.heroDescription}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
        >
          Have a project in mind, need a digital solution, or simply want to
          connect? I&apos;d love to hear from you.
        </motion.p>

        <motion.div
          className={styles.heroActions}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28 }}
        >
          <a href="#contact-form" className={styles.primaryButton}>
            Send Message <ArrowRight size={17} />
          </a>
          <a href="#contact-info" className={styles.secondaryButton}>
            Book A Call <ArrowRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
/* ─── Contact Form Section ─── */
function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "x-contact-form": "virtanis-contact-form" },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitStatus("success");
      setStatusMessage("Your message has been sent successfully!");
      form.reset();
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Could not send your message. Please try again.",
      );
    }
  };

  return (
    <motion.section
      className={styles.formSection}
      id="contact-form"
      aria-labelledby="form-title"
      {...fadeUp}
    >
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <span className={styles.sectionLabel}>MESSAGE</span>
          <h2 id="form-title">Start a Project</h2>
          <p>
            Tell us about your vision and we&apos;ll bring it to life.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGrid}>
            <div className={styles.fieldGroup}>
              <label htmlFor="name" className={styles.fieldLabel}>
                <User size={14} />
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Doe"
                className={styles.input}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="email" className={styles.fieldLabel}>
                <Mail size={14} />
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="john@example.com"
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="subject" className={styles.fieldLabel}>
              <FileText size={14} />
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="Project Inquiry"
              className={styles.input}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="message" className={styles.fieldLabel}>
              <MessageSquare size={14} />
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Tell me about your project..."
              className={styles.textarea}
            />
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={submitStatus === "sending" || submitStatus === "success"}
          >
            <span>
              {submitStatus === "sending"
                ? "Sending..."
                : submitStatus === "success"
                  ? "Message sent!"
                  : "Send Message"}
            </span>
          </button>

          {submitStatus !== "idle" && submitStatus !== "sending" && (
            <p
              className={
                submitStatus === "success"
                  ? styles.successMessage
                  : styles.errorMessage
              }
            >
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </motion.section>
  );
}

/* ─── Contact Information ─── */
function ContactInformation() {
  return (
    <motion.section
      className={styles.infoSection}
      id="contact-info"
      aria-labelledby="info-title"
      {...fadeUp}
    >
      <div className={styles.infoContainer}>
        <div className={styles.infoContent}>
          <div className={styles.infoHeader}>
            <span className={styles.sectionLabel}>CONTACT INFO</span>
            <h2 id="info-title">Contact Information</h2>
          </div>

          <motion.div
            className={styles.infoGrid}
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-60px" }}
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.label} className={styles.infoCard} variants={staggerItem}>
                  <div className={styles.infoIcon}>
                    <Icon size={20} />
                  </div>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>{item.label}</span>
                    <span className={styles.infoValue}>{item.value}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>


      </div>
    </motion.section>
  );
}

/* ─── Social Links ─── */
function SocialLinks() {
  return (
    <motion.section
      className={styles.socialSection}
      aria-labelledby="social-title"
      {...fadeUp}
    >
      <div className={styles.socialContainer}>
        <div className={styles.socialHeader}>
          <span className={styles.sectionLabel}>FOLLOW ME</span>
          <h2 id="social-title">Let&apos;s Connect</h2>
          <p>Follow me on these platforms.</p>
        </div>

        <motion.div
          className={styles.socialGrid}
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-60px" }}
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialCard}
                variants={staggerItem}
                aria-label={link.label}
              >
                <Icon size={24} />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ─── Main Page ─── */
export default function ContactPageContent() {
  return (
    <main className={styles.page}>
      <div className={styles.bgAtmosphere} aria-hidden="true">
        <div className={styles.gridOverlay} />
        <div className={styles.fogLayer} />
        <div className={styles.starField} />
        <div className={styles.glowOne} />
        <div className={styles.glowTwo} />
      </div>

      <div className={styles.container}>
        <HeroSection />
        <ContactForm />
        <ContactInformation />
        <SocialLinks />
      </div>
    </main>
  );
}
