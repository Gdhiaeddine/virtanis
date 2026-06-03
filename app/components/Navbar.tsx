"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import styles from "./Navbar.module.css";

const NAV_LINKS = ["Home", "About", "Journey", "Skills", "Projects", "Contact"];

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => {
        const id = link.toLowerCase();
        const el = document.getElementById(id);
        if (!el) return { id, top: -1 };
        return { id, top: el.getBoundingClientRect().top };
      });

      const current = sections.reduce((closest, section) => {
        if (section.top <= 100 && section.top > closest.top) return section;
        return closest;
      }, { id: "home", top: -Infinity });

      if (current.id !== "home" || window.scrollY > 100) {
        setActiveSection(current.id.charAt(0).toUpperCase() + current.id.slice(1));
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
      e.preventDefault();
      const id = link.toLowerCase();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setMobileOpen(false);
    },
    []
  );

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <>
      <nav
        className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}
      >
        <div className={styles.container}>
          <div className={styles.left}>
            <a
              href="#home"
              className={styles.logoLink}
              onClick={(e) => handleNavClick(e, "Home")}
            >
              <Image
                className={styles.logoIcon}
                src="/logo.png"
                alt="Virtanis"
                width={32}
                height={32}
                priority
              />
              <span className={styles.logoText}>VIRTANIS</span>
            </a>
          </div>

          <div className={styles.center}>
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`${styles.navLink} ${
                  activeSection === link ? styles.navLinkActive : ""
                }`}
                onClick={(e) => handleNavClick(e, link)}
              >
                {link}
              </a>
            ))}
          </div>

          <div className={styles.right}>
            <a href="#contact" className={styles.ctaButton} onClick={(e) => handleNavClick(e, "Contact")}>
              Let&apos;s Talk
            </a>
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className={`${styles.hamburger} ${
                mobileOpen ? styles.hamburgerOpen : ""
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`${styles.overlay} ${mobileOpen ? styles.overlayOpen : ""}`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={styles.overlayLink}
            onClick={(e) => handleNavClick(e, link)}
          >
            {link}
          </a>
        ))}
      </div>
    </>
  );
}
