import type { Metadata } from "next";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import { SplashScreen } from "@/components/ui/splash-screen";

export const metadata: Metadata = {
  title: "Virtanis | Agence Digitale de Nouvelle Génération & Ingénierie IA",
  description:
    "Virtanis est un studio d'ingénierie numérique concevant des écosystèmes web haute performance, des plateformes mobiles et des systèmes d'intelligence artificielle.",
  alternates: {
    canonical: "https://virtanis.com/fr",
    languages: {
      en: "https://virtanis.com",
      fr: "https://virtanis.com/fr",
      "x-default": "https://virtanis.com",
    },
  },
  openGraph: {
    title: "Virtanis | Agence Digitale de Nouvelle Génération & Ingénierie IA",
    description:
      "Virtanis est un studio d'ingénierie numérique concevant des écosystèmes web haute performance, des plateformes mobiles et des systèmes d'intelligence artificielle.",
    url: "https://virtanis.com/fr",
    siteName: "Virtanis",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Virtanis — Agence Digitale & IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtanis | Agence Digitale de Nouvelle Génération & Ingénierie IA",
    description:
      "Virtanis est un studio d'ingénierie numérique concevant des écosystèmes web haute performance, des plateformes mobiles et des systèmes d'intelligence artificielle.",
    images: ["/og-image.png"],
  },
};

export default function FrenchHome() {
  return (
    <main className="flex flex-col flex-1">
      <SplashScreen />
      <Hero locale="fr" />
      <Skills locale="fr" />
      <Projects locale="fr" />
      <About locale="fr" />
      <Contact locale="fr" />
    </main>
  );
}
