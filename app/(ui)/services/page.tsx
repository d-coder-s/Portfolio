import type { Metadata } from "next";
import Services from "./Services";

export const metadata: Metadata = {
  title:
    "Services | Web Development, App Dev, UI/UX & AI Solutions — Dcoder India",
  description:
    "Dcoder offers full-stack digital services — custom web development, mobile app development, UI/UX design, AI/ML solutions, digital analytics, digital marketing & developer training. Remote-first. Affordable. India.",
  keywords: [
    "web development services India",
    "mobile app development company India",
    "UI UX design agency India",
    "AI ML solutions India",
    "digital analytics services India",
    "digital marketing agency India",
    "developer training India",
    "affordable web development India",
    "custom software development India",
    "full stack development agency India",
    "Dcoder digital studio",
  ],
  alternates: {
    canonical: "https://www.dcoder.online.com/services",
  },
  openGraph: {
    title: "Digital Services | Web, App, UI/UX, AI/ML & More — Dcoder India",
    description:
      "From custom websites and mobile apps to AI solutions and developer training — Dcoder delivers end-to-end digital services for startups and businesses across India.",
    url: "https://www.dcoder.online.com/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Services | Dcoder — Web, App & AI Development India",
    description:
      "Custom web development, app development, UI/UX design, AI/ML solutions & more. Affordable. Remote-first. India.",
  },
};

export default function ServicesPage() {
  return <Services />;
}
