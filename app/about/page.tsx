import type { Metadata } from "next";
import Footer from "../components/Footer";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About Virtanis | Intelligent Digital Solutions & AI Engineering",
  description:
    "Learn about Virtanis, a digital engineering brand building intelligent software systems, AI-powered solutions, modern web platforms, mobile apps, and scalable digital experiences.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1">
      <AboutPageContent />
    </div>
  );
}
