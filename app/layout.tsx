import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Nav from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dcoder | Innovating Your Digital Future",
  description: "Dcoder is a premier technology partner specializing in custom web development, mobile apps, AI/ML solutions, and data science. We transform ideas into powerful digital realities.",
  keywords: ["Web Development", "App Development", "AI/ML", "Data Science", "Software Agency", "Dcoder", "React", "Next.js"],
  authors: [{ name: "Dcoder Team" }],
  openGraph: {
    title: "Dcoder | Innovating Your Digital Future",
    description: "Expert solutions in Web, Mobile, AI, and Data Science. Partner with Dcoder for industry-leading digital transformation.",
    url: "https://d-coder-s.netlify.app/",
    siteName: "Dcoder",
    images: [
      {
        url: "/figma/lo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/figma/lo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen text-gray-800`}>
        <Toaster position="top-center" />

        {/* Navbar */}
        <div className="z-50 relative">
          <Nav />
        </div>

        {/* Main content area */}
        <div className="lg:max-w-[1500px] mx-auto z-20 pt-20 md:pt-24">
          {children}
        </div>
        {/* Footer */}
        <div className="mt-8">
          <Footer />
        </div>
      </body>
    </html>
  );
}
