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
  ArrowRight,
} from "lucide-react";
import styles from "./ServicesGrid.module.css";

interface Service {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  tag: string;
  description: string;
  checklist: string[];
}

const SERVICES: Service[] = [
  {
    icon: Globe,
    title: "Web Platform Development",
    tag: "Next.js / Node / GraphQL",
    description:
      "Enterprise-grade, ultra-responsive web applications, headless commerce platforms, and scalable APIs engineered for speed and conversion.",
    checklist: [
      "Custom Next.js & React Architectures",
      "Enterprise SaaS & Web Applications",
      "High-Conversion Headless Commerce",
      "High-Throughput GraphQL & REST APIs",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Systems & Applications",
    tag: "Flutter / iOS / Android",
    description:
      "Cross-platform and native mobile software delivering 60 FPS performance, offline-first reliability, and seamless hardware integration.",
    checklist: [
      "Cross-Platform Flutter Development",
      "Native iOS & Android Architecture",
      "Real-Time Data & Offline Synchronization",
      "App Store & Google Play Lifecycle Deployment",
    ],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning Systems",
    tag: "PyTorch / FastAPI / LangChain",
    description:
      "Production-ready machine learning models, custom LLM agents, predictive intelligence, and automated pipelines that drive quantifiable ROI.",
    checklist: [
      "Custom Predictive & Classification Models",
      "Autonomous AI Agents & LLM Fine-Tuning",
      "Automated Data Ingestion & ETL Pipelines",
      "Sub-20ms Inference API Microservices",
    ],
  },
  {
    icon: Palette,
    title: "Product Design & UI/UX Architecture",
    tag: "Figma / Design Systems",
    description:
      "Executive visual design, frictionless user experience flows, and comprehensive atomic design systems created for market leaders.",
    checklist: [
      "User Research & Journey Mapping",
      "High-Fidelity Interactive Prototyping",
      "Comprehensive Scalable Design Systems",
      "Micro-Interactions & Motion Design",
    ],
  },
  {
    icon: Box,
    title: "3D & Interactive Experiences",
    tag: "Three.js / WebGL / GLSL",
    description:
      "Real-time 3D product visualizers, spatial computing web interfaces, and custom shader animations that leave lasting brand impressions.",
    checklist: [
      "Custom Three.js & WebGL Visualizers",
      "Real-Time 3D Product Configurators",
      "High-Performance Custom Shader Pipelines",
      "Spatial & Interactive Web Experiences",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure & DevOps",
    tag: "AWS / Docker / Kubernetes",
    description:
      "Zero-downtime CI/CD automation, scalable container orchestration, infrastructure as code, and 99.99% uptime operational management.",
    checklist: [
      "Automated Zero-Downtime CI/CD Pipelines",
      "Docker & Kubernetes Containerization",
      "Infrastructure as Code (Terraform)",
      "24/7 Observability & SLA Monitoring",
    ],
  },
];

const SLUG_MAP: Record<string, string> = {
  "Web Platform Development": "web-development",
  "Mobile Systems & Applications": "mobile-development",
  "AI & Machine Learning Systems": "ai-ml",
  "Product Design & UI/UX Architecture": "ui-ux",
  "3D & Interactive Experiences": "three-d-interactive",
  "Cloud Infrastructure & DevOps": "cloud-devops",
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
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className={styles.cardHeader}>
        <div className={styles.iconWrap}>
          <Icon size={24} className={styles.icon} />
        </div>
        <span className={styles.techTag}>{service.tag}</span>
      </div>

      <h3 className={styles.cardTitle}>{service.title}</h3>
      <p className={styles.cardDescription}>{service.description}</p>

      <div className={styles.deliverablesHeader}>KEY DELIVERABLES</div>
      <ul className={styles.checklist}>
        {service.checklist.map((item) => (
          <li key={item} className={styles.checkItem}>
            <span className={styles.checkIcon}>
              <Check size={13} />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className={styles.cardFooter}>
        <Link href={href} className={styles.exploreLink}>
          <span>Explore Service Specification</span>
          <ArrowRight size={14} className={styles.arrowIcon} />
        </Link>
      </div>
    </motion.article>
  );
}

export default function ServicesGrid() {
  return (
    <section className={styles.services} id="services-grid" aria-label="Core Engineering Pillars">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.sectionLabel}>CORE PILLARS</span>
          <h2 className={styles.title}>
            Engineered For Precision, Velocity & Scale
          </h2>
          <p className={styles.description}>
            Six foundational engineering and design disciplines orchestrated to build
            market-defining digital platforms, automated workflows, and high-performance software.
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
