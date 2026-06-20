"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import styles from "./Navbar.module.css";

const NAV_LINKS = ["Home", "About", "Journey", "Skills", "Projects", "Services", "Contact"];

function LogoMark() {
  return (
    <span className={styles.logoIcon} aria-hidden="true">
      <Image src="/logo.png" alt="" width={34} height={28} priority />
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    if (pathname === "/about") {
      setActiveSection("About");
      return;
    }

    if (pathname.startsWith("/services")) {
      setActiveSection("Services");
      return;
    }

    const onScroll = () => {
      const sections = NAV_LINKS.filter((link) => link !== "Services").map((link) => {
        const id = link.toLowerCase();
        const el = document.getElementById(id);
        if (!el) return { link, top: Number.NEGATIVE_INFINITY };
        return { link, top: el.getBoundingClientRect().top };
      });

      const current = sections.reduce(
        (closest, section) =>
          section.top <= 120 && section.top > closest.top ? section : closest,
        { link: "Home", top: Number.NEGATIVE_INFINITY }
      );

      setActiveSection(current.link);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const hrefFor = (link: string) =>
    link === "Services"
      ? "/services"
      : link === "About"
        ? "/about"
        : `/#${link.toLowerCase()}`;

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link href="/" className={styles.logoLink} onClick={closeMenu}>
            <LogoMark />
            <span className={styles.logoText}>VIRTANIS</span>
          </Link>

          <div className={styles.center}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link}
                href={hrefFor(link)}
                className={`${styles.navLink} ${
                  activeSection === link ? styles.navLinkActive : ""
                }`}
              >
                {link}
              </Link>
            ))}
          </div>

          <div className={styles.right}>
            <Link href="/#contact" className={styles.ctaButton}>
              Let&apos;s Work Together <ArrowRight size={14} />
            </Link>
            <button
              className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`}
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`${styles.overlay} ${mobileOpen ? styles.overlayOpen : ""}`}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link}
            href={hrefFor(link)}
            className={styles.overlayLink}
            onClick={closeMenu}
          >
            {link}
          </Link>
        ))}
      </div>
    </>
  );
}
