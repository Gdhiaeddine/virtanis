"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Brain,
  Palette,
  Box,
  Cloud,
  Check,
} from "lucide-react";
import styles from "./ServicesGrid.module.css";

interface Service {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  description: string;
  checklist: string[];
}

const SERVICES: Service[] = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "We build modern, responsive, and high-performance web applications tailored to your business goals.",
    checklist: [
      "Custom Websites",
      "Web Applications",
      "E-Commerce Solutions",
      "CMS Development",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications built with Flutter to deliver smooth performance and beautiful user experiences.",
    checklist: [
      "Android & iOS Apps",
      "Cross-Platform Flutter",
      "UI/UX Focused",
      "App Maintenance",
    ],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions that automate processes, analyze data, and provide smart predictions to accelerate your business.",
    checklist: [
      "AI Model Development",
      "Data Analysis",
      "Predictive Systems",
      "Automation Workflows",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Clean, modern, and intuitive interfaces that enhance user experience and strengthen your brand identity.",
    checklist: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
    ],
  },
  {
    icon: Box,
    title: "3D & Interactive Experiences",
    description:
      "Immersive 3D worlds, interactive models, and engaging animations that bring ideas to life in a unique way.",
    checklist: [
      "3D Modeling",
      "Three.js Experiences",
      "WebGL Animations",
      "Product Visualizations",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Reliable cloud infrastructure, deployment pipelines, and DevOps solutions to ensure your systems are fast and available.",
    checklist: [
      "Cloud Deployment",
      "CI/CD Pipelines",
      "Server Management",
      "Performance Monitoring",
    ],
  },
];

const SLUG_MAP: Record<string, string> = {
  "Web Development": "web-development",
  "Mobile App Development": "mobile-development",
  "AI & Machine Learning": "ai-ml",
  "UI/UX Design": "ui-ux",
  "3D & Interactive Experiences": "three-d-interactive",
  "Cloud & DevOps": "cloud-devops",
};

function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = service.icon;
  const slug = SLUG_MAP[service.title] || "";
  const href = `/services/${slug}`;

  return (
    <motion.div
      className="flex"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link href={href} className={styles.card}>
        <div className={styles.cardTopGlow} />
        <div className={styles.iconWrap}>
          <Icon size={26} />
        </div>
        <h3 className={styles.cardTitle}>{service.title}</h3>
        <p className={styles.cardDescription}>{service.description}</p>
        <ul className={styles.checklist}>
          {service.checklist.map((item) => (
            <li key={item} className={styles.checkItem}>
              <span className={styles.checkIcon}>
                <Check size={14} />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <div className={styles.learnMore}>
          Learn More <span className={styles.arrow}>→</span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ServicesGrid() {
  return (
    <section className={styles.services} id="services">
      {/* Background glow */}
      <div className={styles.bgGlow} />

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.sectionLabel}>WHAT WE DO</span>
          <h2 className={styles.title}>
            Services That Drive Innovation & Growth
          </h2>
          <p className={styles.description}>
            We combine advanced technologies with creative engineering to build
            digital products that are scalable, secure, and designed to deliver
            exceptional user experiences.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
