"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
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
  Target,
  Trophy,
  Users,
} from "lucide-react";
import styles from "./AboutPageContent.module.css";

const storyFeatures = [
  {
    title: "Our Mission",
    description:
      "To empower businesses through innovative digital solutions, intelligent systems, and cutting-edge technologies.",
    icon: Target,
  },
  {
    title: "Our Vision",
    description:
      "To become a global leader in digital innovation and intelligent engineering, shaping the future through technology.",
    icon: Rocket,
  },
];

const values = [
  {
    title: "Innovation",
    description: "We embrace new ideas and technologies to deliver creative solutions.",
    icon: Lightbulb,
  },
  {
    title: "Excellence",
    description: "We are committed to quality, precision, and delivering outstanding results.",
    icon: Trophy,
  },
  {
    title: "Integrity",
    description: "We build trust through transparency, honesty, and ethical practices.",
    icon: ShieldCheck,
  },
  {
    title: "Collaboration",
    description: "We work closely with our clients as partners to achieve shared success.",
    icon: Users,
  },
  {
    title: "Impact",
    description: "We focus on creating solutions that make a meaningful difference.",
    icon: HeartHandshake,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    description: "We understand your business, goals, and challenges.",
    icon: Search,
  },
  {
    step: "02",
    title: "Plan",
    description: "We analyze, strategize, and create a roadmap for success.",
    icon: Target,
  },
  {
    step: "03",
    title: "Design",
    description: "We design modern, intuitive, and user-focused experiences.",
    icon: Palette,
  },
  {
    step: "04",
    title: "Develop",
    description: "We build with clean code and advanced technologies.",
    icon: Code2,
  },
  {
    step: "05",
    title: "Deliver",
    description: "We test, deploy, and support to ensure long-term success.",
    icon: Rocket,
  },
];

const technologies = [
  { name: "Next.js", icon: Globe2 },
  { name: "React", icon: Code2 },
  { name: "TypeScript", icon: ShieldCheck },
  { name: "Node.js", icon: Server },
  { name: "Tailwind CSS", icon: Palette },
  { name: "MongoDB", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "AWS", icon: Cloud },
];

const founder = {
  name: "Dhia Eddine Guettaf",
  role: "Founder & Full Stack Developer",
  location: "Algeria",
  experience: "3+ Years Experience",
  email: "guettafdhiaeddine@gmail.com",
  description:
    "Software developer and tech entrepreneur passionate about AI, web development, and system architecture. I build scalable, efficient, and impactful digital solutions for modern businesses.",
};

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

      <section className={styles.hero} aria-labelledby="about-title">
        <div className={styles.container}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, x: -26 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel>ABOUT VIRTANIS</SectionLabel>
            <h1 id="about-title">
              Building Intelligent Digital Solutions For A Smarter{" "}
              <span>Future</span>
            </h1>
            <p>
              At Virtanis, we combine creativity, engineering, and intelligent
              technologies to craft digital experiences that drive real impact
              and help businesses grow.
            </p>
          </motion.div>

          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src="/about-hero.webp"
                alt="About Virtanis visual"
                fill
                priority
                className={styles.heroImage}
              />
              <div className={styles.imageOverlay} />
              <div className={styles.imageGlow} />
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section className={styles.storySection} {...fadeUp}>
        <div className={styles.container}>
          <div className={styles.storyCopy}>
            <SectionLabel>OUR STORY</SectionLabel>
            <h2>The Story Behind Virtanis</h2>
            <p>
              Virtanis was founded with a simple mission: to build intelligent
              digital solutions that empower businesses, simplify complex
              processes, and create meaningful digital experiences.
            </p>
            <p>
              We believe technology is more than code. It is a tool to solve
              real problems, improve operations, and create a better future.
            </p>

          </div>

          <div className={styles.storyCards}>
            {storyFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className={styles.featureBlock}>
                  <Icon size={20} />
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </motion.section>

      <motion.section className={styles.sectionBox} {...fadeUp}>
        <div className={styles.sectionHeader}>
          <SectionLabel>WHAT WE BELIEVE IN</SectionLabel>
          <h2>Our Core Values</h2>
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

      <motion.section className={styles.approachSection} {...fadeUp}>
        <div className={styles.container}>
          <div className={styles.approachCopy}>
            <SectionLabel>OUR APPROACH</SectionLabel>
            <h2>How We Turn Ideas Into Powerful Solutions</h2>
            <p>
              Our approach is simple, transparent, and results-driven. We follow
              a proven process to ensure every project is delivered with the
              highest quality and maximum impact.
            </p>
            <Link href="/#contact" className={styles.primaryButton}>
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

      <motion.section className={styles.sectionBox} {...fadeUp}>
        <div className={styles.sectionHeader}>
          <SectionLabel>TECHNOLOGIES WE WORK WITH</SectionLabel>
          <h2>Modern Technologies For Modern Solutions</h2>
        </div>
        <div className={styles.techGrid}>
          {technologies.map((technology) => {
            const Icon = technology.icon;
            return (
              <article key={technology.name} className={styles.techCard}>
                <Icon size={24} />
                <h3>{technology.name}</h3>
              </article>
            );
          })}
        </div>
      </motion.section>

      <motion.section className={styles.sectionBox} {...fadeUp}>
        <div className={styles.sectionHeader}>
          <SectionLabel>THE PERSON BEHIND VIRTANIS</SectionLabel>
          <h2>A Passionate Person Of Creator & Engineer</h2>
          <p>
            Virtanis is led by Dhia Eddine Guettaf, a software developer and
            digital creator focused on building intelligent, scalable, and
            beautiful digital solutions.
          </p>
        </div>
        <article className={styles.founderCard}>
          <div className={styles.founderPortrait}>
            <Image
              src="/myPicture.png"
              alt="Dhia Eddine Guettaf, founder and full stack developer behind Virtanis"
              fill
              sizes="(max-width: 900px) 92vw, 420px"
              className={styles.founderImage}
            />
            <div className={styles.founderImageGlow} />
          </div>

          <div className={styles.founderInfo}>
            <span className={styles.founderLabel}>Founder Profile</span>
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
              <a href="https://github.com/" aria-label="Dhia Eddine Guettaf GitHub profile">
                <Code2 size={17} />
              </a>
              <a href="https://linkedin.com/" aria-label="Dhia Eddine Guettaf LinkedIn profile">
                <Globe2 size={17} />
              </a>
            </div>
          </div>
        </article>
      </motion.section>

      <motion.section className={styles.cta} {...fadeUp}>
        <div className={styles.ctaContent}>
          <SectionLabel>GET IN TOUCH</SectionLabel>
          <h2>Let&apos;s Build Something Amazing Together</h2>
          <p>
            Have a project in mind? Let&apos;s collaborate and bring your ideas
            to life with intelligent solutions.
          </p>
          <Link href="/#contact" className={styles.primaryButton}>
            Start Your Project <ArrowRight size={17} />
          </Link>
        </div>
        <div className={styles.contactGrid}>
          <article>
            <Mail size={18} />
            <span>Email</span>
            <strong>hello@virtanis.com</strong>
          </article>
          <article>
            <MapPin size={18} />
            <span>Location</span>
            <strong>Setif, Algeria</strong>
          </article>
          <article>
            <Clock size={18} />
            <span>Availability</span>
            <strong>Available For Projects</strong>
          </article>
        </div>
      </motion.section>
    </main>
  );
}
