import type { Metadata } from "next";
import Project from "./Project";

export const metadata: Metadata = {
  title: "Projects | Dcoder",
  description:
    "Real work shipped into the world — explore Dcoder's portfolio of web apps, mobile apps, and data platforms.",
};

export default function ProjectPage() {
  return <Project />;
}
