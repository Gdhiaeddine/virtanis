import type { Metadata } from "next";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import { SplashScreen } from "@/components/ui/splash-screen";

export const metadata: Metadata = {
  title: "Virtanis | Next-Generation Digital Agency & AI Engineering",
  description:
    "Virtanis is a next-generation digital agency building intelligent AI systems, enterprise web platforms, and mobile apps. Engineer your digital future today.",
  alternates: {
    canonical: "https://virtanis.com",
    languages: {
      en: "https://virtanis.com",
      fr: "https://virtanis.com/fr",
      "x-default": "https://virtanis.com",
    },
  },
  openGraph: {
    title: "Virtanis | Next-Generation Digital Agency & AI Engineering",
    description:
      "Virtanis is a next-generation digital agency building intelligent AI systems, enterprise web platforms, and mobile apps. Engineer your digital future today.",
    url: "https://virtanis.com",
    siteName: "Virtanis",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Virtanis — Next-Generation Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtanis | Next-Generation Digital Agency & AI Engineering",
    description:
      "Virtanis is a next-generation digital agency building intelligent AI systems, enterprise web platforms, and mobile apps. Engineer your digital future today.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <SplashScreen />
      <Hero locale="en" />
      <Skills locale="en" />
      <Projects locale="en" />
      <About locale="en" />
      <Contact locale="en" />
    </main>
  );
}
