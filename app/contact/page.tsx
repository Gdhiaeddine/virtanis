import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact | Virtanis",
  description:
    "Get in touch with Virtanis for AI solutions, web development, mobile apps, UI/UX design, cloud infrastructure and digital product development.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-1">
      <ContactPageContent />
    </div>
  );
}
