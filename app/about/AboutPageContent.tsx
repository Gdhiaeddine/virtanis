"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe2,
  HeartHandshake,
  Lightbulb,
  Mail,
  MapPin,
  Palette,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import styles from "./AboutPageContent.module.css";
import PageCTA from "../components/PageCTA";
import siteData from "../data/site.json";

const storyFeatures = [
  {
    title: "Our Mission",
    description:
      "To engineer robust, high-performance digital systems and AI-powered platforms that deliver measurable market advantage for visionary brands.",
    icon: Target,
  },
  {
    title: "Our Vision",
    description:
      "To be the premier digital engineering studio globally recognized for architectural perfection, intelligent automation, and luxury UX.",
    icon: Rocket,
  },
];

const values = [
  {
    title: "Engineering Rigor",
    description: "Zero compromise on code quality, latency, scalability, and system architecture.",
    icon: ShieldCheck,
  },
  {
    title: "AI-First Innovation",
    description: "Leveraging state-of-the-art machine intelligence to automate and augment complex workflows.",
    icon: Sparkles,
  },
  {
    title: "Apple-Grade Design",
    description: "Minimalist, intuitive, and tactile interfaces that make interacting with technology effortless.",
    icon: Palette,
  },
  {
    title: "Global Partnership",
    description: "Transparent, collaborative execution from initial discovery to worldwide cloud deployment.",
    icon: Globe2,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover & Strategy",
    description: "Comprehensive analysis of business objectives, user requirements, and technical roadmaps.",
    icon: Search,
  },
  {
    step: "02",
    title: "System Architecture",
    description: "Blueprint design of cloud environments, database schemas, and intelligent API topologies.",
    icon: Target,
  },
  {
    step: "03",
    title: "Spatial & UI Design",
    description: "Crafting minimalist design systems, user flows, and interactive high-fidelity prototypes.",
    icon: Palette,
  },
  {
    step: "04",
    title: "Full-Stack Build",
    description: "Writing clean, modular, and typed code with modern frontend and backend frameworks.",
    icon: Code2,
  },
  {
    step: "05",
    title: "Scale & Deploy",
    description: "Automated CI/CD release, global CDN caching, telemetry monitoring, and continuous scaling.",
    icon: Rocket,
  },
];

const technologies = [
  { name: "Next.js", icon: Globe2 },
  { name: "TypeScript", icon: ShieldCheck },
  { name: "React", icon: Code2 },
  { name: "Python & AI", icon: Cpu },
  { name: "Flutter", icon: Smartphone },
  { name: "Node.js", icon: Server },
  { name: "PostgreSQL / DB", icon: Database },
  { name: "Cloud & DevOps", icon: Cloud },
];

const founder = {
  name: "Dhia Eddine Guettaf",
  role: "Founder & Lead Architect",
  location: siteData.contact.location,
  experience: "Full-Spectrum Engineering",
  email: siteData.contact.email,
  description:
    "AI engineer, full-stack systems architect, and digital product craftsman. Dedicated to uniting machine intelligence with architectural precision and world-class product design for ambitious companies.",
};

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8m1.37 9.74V9.92H5.09v8.58h2.74z" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function BehanceIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-4.043 0-5.83-2.613-5.83-5.875 0-3.327 2.05-5.925 5.8-5.925 3.978 0 5.438 2.873 5.161 6.075h-8.083c.092 1.706 1.157 3.025 3.052 3.025 1.42 0 2.378-.718 2.766-1.55l2.235 1.25zm-5.071-5.125c-.042-1.39-.773-2.275-2.28-2.275-1.422 0-2.308.885-2.483 2.275h4.763zm-13.655-6.875h5.578c3.08 0 4.672 1.488 4.672 3.825 0 1.545-.733 2.775-2.039 3.325 1.639.525 2.516 1.95 2.516 3.65 0 2.65-2.001 4.2-4.996 4.2h-5.731v-15zm3.072 6.025h2.15c1.17 0 1.97-.575 1.97-1.6 0-1.05-.75-1.575-1.92-1.575h-2.2v3.175zm0 6.125h2.361c1.33 0 2.238-.675 2.238-1.8 0-1.15-.908-1.775-2.238-1.775h-2.361v3.575z" />
    </svg>
  );
}

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  );
}

function renderSocialIcon(label: string) {
  const l = label.toLowerCase();
  if (l.includes("linkedin")) return <LinkedInIcon size={16} />;
  if (l.includes("instagram")) return <InstagramIcon size={16} />;
  if (l.includes("behance")) return <BehanceIcon size={16} />;
  if (l.includes("github")) return <GithubIcon size={16} />;
  return <Globe2 size={16} />;
}

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65 },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className={styles.sectionLabel}>{children}</span>;
}

export default function AboutPageContent() {
  return (
    <main className={styles.page}>
      <div className={styles.bgAtmosphere} aria-hidden="true">
        <div className={styles.gridOverlay} />
        <div className={styles.fogLayer} />
        <div className={styles.starField} />
        <div className={styles.glowOne} />
        <div className={styles.glowTwo} />
      </div>

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="about-title">
        <div className={styles.heroBg} aria-hidden="true">
          <Image
            src="/about-hero.webp"
            alt="About Virtanis background"
            fill
            priority
            className={styles.heroBgImage}
          />
        </div>

        <div className={styles.container}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, x: -26 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel>ABOUT VIRTANIS</SectionLabel>
            <h1 id="about-title">
              Engineering <span className={styles.serifAccent}>Intelligent Digital</span> Systems For The Future
            </h1>
            <p>
              Virtanis is an elite digital engineering studio. We partner with ambitious
              companies worldwide to architect, design, and deploy scalable software platforms,
              custom AI systems, and immersive digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story & Mission Section */}
      <motion.section className={styles.storySection} {...fadeUp}>
        <div className={styles.container}>
          <div className={styles.storyCopy}>
            <SectionLabel>THE VIRTANIS ETHOS</SectionLabel>
            <h2>Architecting High-Value Digital Solutions</h2>
            <p>
              Virtanis was established with a singular objective: to build intelligent software
              and web platforms that simplify complexity, scale effortlessly, and leave a lasting
              impression on end users.
            </p>
            <p>
              We believe great software is where computational engineering meets uncompromising
              design aesthetics. Every line of code and every interaction is crafted with precision.
            </p>
          </div>

          <div className={styles.storyCards}>
            {storyFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className={styles.featureBlock}>
                  <div className={styles.iconBox}>
                    <Icon size={20} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Core Values Section */}
      <motion.section className={styles.sectionBox} {...fadeUp}>
        <div className={styles.sectionHeader}>
          <SectionLabel>OUR PILLARS</SectionLabel>
          <h2>The Engineering Principles We Live By</h2>
        </div>
        <div className={styles.valuesGrid}>
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article key={value.title} className={styles.glassCard}>
                <div className={styles.iconBox}>
                  <Icon size={22} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            );
          })}
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section className={styles.approachSection} {...fadeUp}>
        <div className={styles.container}>
          <div className={styles.approachCopy}>
            <SectionLabel>OUR METHODOLOGY</SectionLabel>
            <h2>From Blueprint To Global Production</h2>
            <p>
              Our execution pipeline is transparent, agile, and engineered for high-velocity
              product delivery without sacrificing code quality or security.
            </p>
            <Link href="/contact" className={styles.primaryButton}>
              Start Your Project <ArrowRight size={17} />
            </Link>
          </div>

          <div className={styles.timeline}>
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.step} className={styles.timelineCard}>
                  <div className={styles.timelineIcon}>
                    <Icon size={18} />
                    <span>{step.step}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Tech Stack Section */}
      <motion.section className={styles.sectionBox} {...fadeUp}>
        <div className={styles.sectionHeader}>
          <SectionLabel>CORE STACK & TOOLS</SectionLabel>
          <h2>Modern Technologies For Resilient Systems</h2>
        </div>
        <div className={styles.techGrid}>
          {technologies.map((technology) => {
            const Icon = technology.icon;
            return (
              <article key={technology.name} className={styles.techCard}>
                <div className={styles.techIconWrapper}>
                  <Icon size={24} />
                </div>
                <h3>{technology.name}</h3>
              </article>
            );
          })}
        </div>
      </motion.section>

      {/* Leadership / Founder Section */}
      <motion.section className={styles.sectionBox} {...fadeUp}>
        <div className={styles.sectionHeader}>
          <SectionLabel>STUDIO LEADERSHIP</SectionLabel>
          <h2>Engineering Leadership & Vision</h2>
          <p>
            Virtanis is led by Dhia Eddine Guettaf, an AI engineer and full-stack systems
            architect dedicated to building digital platforms that drive real-world impact.
          </p>
        </div>
        <article className={styles.founderCard}>
          <div className={styles.founderPortrait}>
            <Image
              src="/myPicture.png"
              alt="Dhia Eddine Guettaf, Founder of Virtanis"
              fill
              sizes="(max-width: 900px) 92vw, 420px"
              className={styles.founderImage}
            />
            <div className={styles.founderImageGlow} />
          </div>

          <div className={styles.founderInfo}>
            <span className={styles.founderLabel}>Studio Leadership</span>
            <h3>{founder.name}</h3>
            <strong>{founder.role}</strong>
            <p>{founder.description}</p>

            <div className={styles.founderDetails}>
              <span>
                <MapPin size={15} />
                {founder.location}
              </span>
              <span>
                <Award size={15} />
                {founder.experience}
              </span>
              <span>
                <Mail size={15} />
                {founder.email}
              </span>
            </div>

            <div className={styles.socials}>
              {siteData.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                >
                  {renderSocialIcon(social.label)}
                </a>
              ))}
            </div>
          </div>
        </article>
      </motion.section>

      <div className={styles.container}>
        <PageCTA
          heading="Let's Build Something Exceptional"
          description="Ready to elevate your digital product with intelligent engineering and high-value design? Let's discuss your project."
          primaryText="Start Your Project"
          primaryHref="/contact"
        />
      </div>
    </main>
  );
}
