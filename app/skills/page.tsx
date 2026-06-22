import type { Metadata } from "next";
import SkillsPageContent from "./SkillsPageContent";

export const metadata: Metadata = {
  title: "Skills | Virtanis",
  description:
    "Explore the technical skills, technologies, and expertise behind Virtanis, including AI, web development, mobile apps, cloud infrastructure, UI/UX design, and modern software engineering.",
};

export default function SkillsPage() {
  return (
    <div className="flex flex-col flex-1">
      <SkillsPageContent />
    </div>
  );
}
