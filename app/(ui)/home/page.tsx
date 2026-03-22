// import { Metadata } from 'next';
// import Home from './Home'
// import React from 'react'

// export const metadata: Metadata = {
//     title: "Home",
//     description: "Welcome to our website.",
// };

// const page = () => {
//     return (
//         <Home />
//     )
// }

// export default page



import type { Metadata } from "next";
import Home from "./Home";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Dcoder — your digital future, built right. Web development, app development, and data analytics for businesses that care about craft.",
};

export default function HomePage() {
  return <Home />;
}