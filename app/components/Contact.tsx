"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./Contact.module.css";

/* ─── Deterministic random for particles ─── */
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(42);

const PARTICLES = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  left: `${rand() * 100}%`,
  top: `${rand() * 100}%`,
  duration: `${10 + rand() * 18}s`,
  delay: `${rand() * 10}s`,
  size: `${1 + rand() * 2}px`,
  opacity: rand() * 0.35 + 0.1,
}));

const HOLOGRAPHIC_LINES = [
  { id: 0, top: "12%", left: "3%", width: "28%", delay: "0s" },
  { id: 1, top: "32%", right: "6%", width: "22%", delay: "-2s" },
  { id: 2, top: "58%", left: "8%", width: "18%", delay: "-4s" },
  { id: 3, top: "78%", right: "4%", width: "30%", delay: "-1s" },
];

const HUD_CIRCLES = [
  { id: 0, size: "320px", top: "8%", right: "4%", duration: "28s", delay: "0s" },
  { id: 1, size: "220px", bottom: "12%", left: "6%", duration: "22s", delay: "-6s" },
  { id: 2, size: "180px", top: "55%", left: "3%", duration: "20s", delay: "-12s" },
];

/* ─── SVG Icons ─── */
function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4L12 13 2 4" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function AvailabilityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function BehanceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.34.5-.84.88-1.5 1.14.9.26 1.58.72 2.02 1.37.44.66.66 1.45.66 2.38 0 .75-.14 1.39-.43 1.93-.29.55-.67 1-1.14 1.35-.48.35-1.02.6-1.65.77-.62.17-1.27.26-1.95.26H0V4.51h6.938v-.007zm-.07 5.98c.55 0 1.01-.15 1.36-.45.36-.3.53-.73.53-1.3 0-.31-.05-.57-.17-.78-.11-.21-.26-.38-.46-.51-.19-.14-.42-.24-.68-.29a3.82 3.82 0 00-.84-.08H3.2v3.42h3.67zm.24 6.28c.32 0 .62-.03.91-.1.29-.07.55-.19.77-.35.22-.16.39-.38.52-.65.13-.27.19-.62.19-1.04 0-.81-.22-1.41-.67-1.77-.44-.36-1.04-.54-1.77-.54H3.2v4.46h3.9l.01-.01zm9.14-10.28h5.85v1.55h-5.85V6.49zm2.72 11.14c.64 0 1.14-.17 1.52-.51.38-.34.6-.81.67-1.41h2.59c-.18 1.2-.7 2.12-1.56 2.77-.86.65-1.94.97-3.21.97-.67 0-1.29-.1-1.87-.3-.58-.2-1.08-.51-1.5-.92-.43-.41-.76-.93-1-1.55-.24-.62-.36-1.34-.36-2.16 0-.78.12-1.49.37-2.12.25-.63.59-1.17 1.02-1.61.43-.44.95-.78 1.54-1.02.59-.24 1.24-.36 1.95-.36.81 0 1.52.15 2.12.46.6.31 1.1.73 1.49 1.26.39.53.67 1.14.85 1.84.18.7.24 1.44.18 2.22h-7.76c-.01.77.22 1.45.7 1.94.48.49 1.1.74 1.87.74l-.01-.01zM18.3 11.9c-.42 0-.77.08-1.06.23-.29.16-.53.36-.72.6-.19.24-.33.5-.42.79-.09.29-.14.57-.16.86h4.64c-.06-.76-.29-1.35-.69-1.77-.41-.42-.94-.63-1.6-.63v.02z" />
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308a10.174 10.174 0 004.392-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4a10.15 10.15 0 006.29 2.166c1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702A10.12 10.12 0 0012 1.818c-.83 0-1.638.08-2.4.234zm10.335 3.483c-.218.29-1.91 2.493-5.724 4.04.24.49.47.985.68 1.485.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* ─── Data ─── */
const CONTACT_CARDS = [
  { id: 0, label: "EMAIL", value: "guettafdhiaeddine@gmail.com", icon: "email" },
  { id: 1, label: "PHONE", value: "+213 560 84 83 22", icon: "phone" },
  { id: 2, label: "LOCATION", value: "Sétif, Algeria", icon: "location" },
  { id: 3, label: "AVAILABILITY", value: "Available For Projects", icon: "availability" },
];

const ICON_MAP: Record<string, React.FC> = {
  email: EmailIcon,
  phone: PhoneIcon,
  location: LocationIcon,
  availability: AvailabilityIcon,
};

const SOCIAL_LINKS = [
  //{ id: 0, label: "GitHub", href: "#", icon: GitHubIcon },
  { id: 0, label: "LinkedIn", href: "https://www.linkedin.com/in/guettafdhiaeddine", icon: LinkedInIcon },
  { id: 1, label: "Instagram", href: "https://www.instagram.com/dhia_eddine_guettaf", icon: InstagramIcon },
  { id: 2, label: "Behance", href: "https://www.behance.net/f9d10cef", icon: BehanceIcon },
  //{ id: 4, label: "Dribbble", href: "#", icon: DribbbleIcon },
];



/* ─── Component ─── */
export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.contact} id="contact" ref={sectionRef}>
      {/* ── Background Atmosphere ── */}
      <div className={styles.bgAtmosphere}>
        <div className={styles.gridOverlay} />
        <div className={styles.fogLayer} />
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className={styles.bgParticle}
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDuration: p.duration,
              animationDelay: p.delay,
              opacity: p.opacity,
            }}
          />
        ))}
        {HUD_CIRCLES.map((hud) => (
          <div
            key={hud.id}
            className={styles.hudCircle}
            style={{
              width: hud.size,
              height: hud.size,
              top: hud.top,
              right: hud.right,
              bottom: hud.bottom,
              left: hud.left,
              animationDuration: hud.duration,
              animationDelay: hud.delay,
            }}
          />
        ))}
        {HOLOGRAPHIC_LINES.map((line) => (
          <div
            key={line.id}
            className={styles.holoLine}
            style={{
              top: line.top,
              left: line.left,
              right: line.right,
              width: line.width,
              animationDelay: line.delay,
            }}
          />
        ))}
        <div className={styles.glowOrb} />
        <div className={styles.glowOrbSecond} />
      </div>

      {/* ── Container ── */}
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${isVisible ? styles.fadeInUp : ""}`}>
          <span className={styles.sectionLabel}>CONTACT</span>
        </div>

        <h2 className={`${styles.mainTitle} ${isVisible ? `${styles.fadeInUp} ${styles.fadeInUpDelay1}` : ""}`}>
          Let&apos;s Create Intelligent Digital Experiences Together
        </h2>

        <p className={`${styles.description} ${isVisible ? `${styles.fadeInUp} ${styles.fadeInUpDelay2}` : ""}`}>
          Whether you&apos;re a visionary startup, an enterprise seeking digital transformation, or an innovator with a bold idea — we partner with forward-thinking teams to architect intelligent systems, engineer scalable platforms, and deliver experiences that redefine industries.
        </p>

        {/* ── Main 2-Column Layout ── */}
        <div className={styles.mainLayout}>
          {/* LEFT SIDE — Contact Information */}
          <div className={`${styles.leftSide} ${isVisible ? `${styles.fadeInUp} ${styles.fadeInUpDelay3}` : ""}`}>
            <p className={styles.introText}>
              Open to innovative collaborations, intelligent software solutions, and futuristic digital projects. Let&apos;s engineer something extraordinary.
            </p>

            {/* Contact Cards */}
            <div className={styles.contactCards}>
              {CONTACT_CARDS.map((card) => {
                const IconComponent = ICON_MAP[card.icon];
                return (
                  <div key={card.id} className={styles.contactCard}>
                    <div className={styles.cardIcon}>
                      {IconComponent && <IconComponent />}
                    </div>
                    <div className={styles.cardLabel}>{card.label}</div>
                    <div className={styles.cardValue}>{card.value}</div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className={styles.socialArea}>
              <span className={styles.socialLabel}>Connect</span>
              <div className={styles.socialLinks}>
                {SOCIAL_LINKS.map((social) => {
                  const SocialIcon = social.icon;
                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      className={styles.socialLink}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SocialIcon />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Status Indicator 
            <div className={styles.statusIndicator}>
              <div className={styles.statusDot} />
              <span className={styles.statusText}>Currently Available For New Projects</span>
            </div>
            */}
          </div>

          {/* RIGHT SIDE — Contact Form */}
          <div className={`${styles.rightSide} ${isVisible ? `${styles.fadeInUp} ${styles.fadeInUpDelay4}` : ""}`}>
            <div className={styles.formContainer}>
              <h3 className={styles.formTitle}>Start a Project</h3>
              <p className={styles.formSubtitle}>Tell us about your vision and we&apos;ll bring it to life.</p>

              <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                {/* Name & Email Row */}
                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel} htmlFor="contact-name">Full Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      className={styles.input}
                      placeholder="John Doe"
                      autoComplete="name"
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel} htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      className={styles.input}
                      placeholder="john@company.com"
                      autoComplete="email"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel} htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    className={styles.input}
                    placeholder="Project Inquiry, Partnership, Engineering Request..."
                  />
                </div>

                {/* Message */}
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel} htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    className={styles.textarea}
                    placeholder="Tell us about your project, goals, and timeline..."
                    rows={5}
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className={styles.submitButton}>
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
