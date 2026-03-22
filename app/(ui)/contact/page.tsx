// import { Metadata } from 'next';

// import React from 'react'
// import Contact from './Contact';

// export const metadata: Metadata = {
//     title: "Contact",
//     description: "Welcome to our website.",
// };

// const page = () => {
//     return (
//      <Contact/>
//     )
// }

// export default page

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