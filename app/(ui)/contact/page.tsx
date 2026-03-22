import type { Metadata } from "next";
import Contact from "./Contact";

export const metadata: Metadata = {
  title: "Contact | Dcoder",
  description:
    "Get in touch with Dcoder. Let's make something awesome together — web development, app development, data analytics, and more.",
};

export default function ContactPage() {
  return <Contact />;
}
