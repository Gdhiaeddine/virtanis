"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { getTranslations, Locale } from "../data/translations";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  { id: "home", key: "home" as const },
  { id: "about", key: "about" as const },
  { id: "skills", key: "skills" as const },
  { id: "projects", key: "projects" as const },
  { id: "services", key: "services" as const },
  { id: "contact", key: "contact" as const },
];

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
  const [scrolledSection, setScrolledSection] = useState("home");

  const isFr = pathname === "/fr" || pathname.startsWith("/fr/");
  const locale: Locale = isFr ? "fr" : "en";
  const t = getTranslations(locale).navbar;

  const routeSection =
    pathname === "/about"
      ? "about"
      : pathname === "/projects"
        ? "projects"
        : pathname.startsWith("/services")
          ? "services"
          : pathname === "/skills"
            ? "skills"
            : pathname === "/contact"
              ? "contact"
              : null;

  const activeSection = routeSection ?? scrolledSection;

  useEffect(() => {
    if (routeSection) {
      return;
    }

    const onScroll = () => {
      const sections = NAV_ITEMS.filter(
        (item) =>
          item.id !== "about" &&
          item.id !== "services" &&
          item.id !== "projects" &&
          item.id !== "skills" &&
          item.id !== "contact"
      ).map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, top: Number.NEGATIVE_INFINITY };
        return { id: item.id, top: el.getBoundingClientRect().top };
      });

      const current = sections.reduce(
        (closest, section) =>
          section.top <= 120 && section.top > closest.top ? section : closest,
        { id: "home", top: Number.NEGATIVE_INFINITY }
      );

      setScrolledSection(current.id);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, routeSection]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const hrefFor = (id: string) => {
    if (id === "home") return isFr ? "/fr" : "/";
    if (id === "services") return "/services";
    if (id === "about") return "/about";
    if (id === "projects") return "/projects";
    if (id === "skills") return "/skills";
    if (id === "contact") return "/contact";
    return isFr ? `/fr#${id}` : `/#${id}`;
  };

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link href={isFr ? "/fr" : "/"} className={styles.logoLink} onClick={closeMenu}>
            <LogoMark />
            <span className={styles.logoText}>VIRTANIS</span>
          </Link>

          <div className={styles.center}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={hrefFor(item.id)}
                className={`${styles.navLink} ${
                  activeSection === item.id ? styles.navLinkActive : ""
                }`}
              >
                {t.items[item.key]}
              </Link>
            ))}
          </div>

          <div className={styles.right}>
            <div className={styles.langSwitcher} role="group" aria-label={t.switchAria}>
              <Link
                href="/"
                className={`${styles.langBtn} ${!isFr ? styles.langBtnActive : ""}`}
                aria-label="English"
                aria-current={!isFr ? "page" : undefined}
              >
                EN
              </Link>
              <Link
                href="/fr"
                className={`${styles.langBtn} ${isFr ? styles.langBtnActive : ""}`}
                aria-label="Français"
                aria-current={isFr ? "page" : undefined}
              >
                FR
              </Link>
            </div>

            <Link href="/contact" className={styles.ctaButton}>
              {t.cta} <ArrowRight size={14} />
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
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.id}
            href={hrefFor(item.id)}
            className={styles.overlayLink}
            onClick={closeMenu}
          >
            {t.items[item.key]}
          </Link>
        ))}

        <div className={styles.mobileLangSwitcher} role="group" aria-label={t.switchAria}>
          <Link
            href="/"
            className={`${styles.mobileLangBtn} ${!isFr ? styles.mobileLangBtnActive : ""}`}
            onClick={closeMenu}
          >
            EN
          </Link>
          <Link
            href="/fr"
            className={`${styles.mobileLangBtn} ${isFr ? styles.mobileLangBtnActive : ""}`}
            onClick={closeMenu}
          >
            FR
          </Link>
        </div>
      </div>
    </>
  );
}
