import type { Metadata } from "next";
import About from "./About";

export const metadata: Metadata = {
  title: "About | Dcoder",
  description:
    "Meet the Dcoder team — a small, opinionated studio building websites, apps, AI/ML solutions, and more from Ghaziabad, UP.",
};

export default function AboutPage() {
  return <About />;
}
