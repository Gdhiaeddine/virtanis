"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";
import { getTranslations, Locale } from "../data/translations";
import styles from "./Footer.module.css";

/* ─── Deterministic random for particles ─── */
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(101);

const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${rand() * 100}%`,
  top: `${50 + rand() * 50}%`,
  duration: `${8 + rand() * 12}s`,
  delay: `${rand() * 6}s`,
  size: `${1 + rand() * 1.5}px`,
  opacity: rand() * 0.25 + 0.08,
}));

const FOOTER_NAV_ITEMS = [
  { id: "home", key: "home" as const },
  { id: "about", key: "about" as const },
  { id: "services", key: "services" as const },
  { id: "skills", key: "skills" as const },
  { id: "projects", key: "projects" as const },
  { id: "contact", key: "contact" as const },
];

interface FooterProps {
  locale?: Locale;
}

export default function Footer({ locale: propLocale }: FooterProps = {}) {
  const pathname = usePathname();
  const isFr = propLocale === "fr" || pathname === "/fr" || pathname.startsWith("/fr/");
  const locale: Locale = propLocale ?? (isFr ? "fr" : "en");
  const t = getTranslations(locale).footer;

  const hrefFor = (id: string) => {
    if (id === "home") return isFr ? "/fr" : "/";
    if (id === "services") return "/services";
    if (id === "about") return "/about";
    if (id === "projects") return "/projects";
    if (id === "skills") return "/skills";
    if (id === "contact") return "/contact";
    return isFr ? `/fr#${id}` : `/#${id}`;
  };

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      const isServices = id === "services";
      const isAbout = id === "about";
      const isProjects = id === "projects";
      const isSkills = id === "skills";
      const isContact = id === "contact";
      if (
        isServices ||
        isAbout ||
        isProjects ||
        isSkills ||
        isContact ||
        pathname.startsWith("/services") ||
        pathname === "/about" ||
        pathname === "/projects" ||
        pathname === "/skills" ||
        pathname === "/contact"
      ) {
        return;
      }
      
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    [pathname]
  );

  return (
    <footer className={styles.footer}>
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
        {/* Holographic circles */}
        <div
          className={styles.hudCircle}
          style={{
            width: "320px",
            height: "320px",
            bottom: "-160px",
            left: "calc(50% - 160px)",
            animationDuration: "30s",
          }}
        />
        <div className={styles.glowOrb} />
      </div>

      {/* ── Container ── */}
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* LEFT SECTION — Logo, Brand name, Copyright */}
          <div className={styles.leftSection}>
            <Link href={isFr ? "/fr" : "/"} className={styles.logoArea}>
              <Image
                src="/logo.png"
                alt="Virtanis"
                width={32}
                height={32}
                className={styles.logoIcon}
                priority
              />
              <span className={styles.logoText}>VIRTANIS</span>
            </Link>
            <span className={styles.copyright} suppressHydrationWarning>
              &copy; {new Date().getFullYear()} Virtanis. {t.rightsReserved}
            </span>
          </div>

          {/* RIGHT SECTION — Navigation Links (like navbar) */}
          <div className={styles.rightSection}>
            {FOOTER_NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={hrefFor(item.id)}
                className={styles.navLink}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {t.items[item.key]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
