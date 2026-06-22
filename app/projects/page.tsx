import type { Metadata } from "next";
import ProjectsPageContent from "./ProjectsPageContent";

export const metadata: Metadata = {
  title: "Projects | Virtanis",
  description:
    "Explore Virtanis projects in AI, web development, mobile apps, UI/UX design, 3D interactive experiences, and cloud DevOps solutions.",
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
