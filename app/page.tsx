import type { Metadata } from "next";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export const metadata: Metadata = {
  title: "Virtanis | Next-Generation Digital Agency & AI Engineering",
  description:
    "Virtanis is a next-generation digital agency building intelligent AI systems, enterprise web platforms, and mobile apps. Engineer your digital future today.",
  alternates: {
    canonical: "https://virtanis.com",
  },
  openGraph: {
    title: "Virtanis | Next-Generation Digital Agency & AI Engineering",
    description:
      "Virtanis is a next-generation digital agency building intelligent AI systems, enterprise web platforms, and mobile apps. Engineer your digital future today.",
    url: "https://virtanis.com",
    siteName: "Virtanis",
    type: "website",
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
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
