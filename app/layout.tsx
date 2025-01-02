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
  title: "Dcoder",
  // description: "A SaaS Product for Resume Reviewing",
  description:"Dcoder is a cutting-edge technology platform specializing in web development, mobile app development, AI/ML solutions, e-commerce, and data science, designed to help businesses thrive in the digital world.",
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
        <div className="sticky top-0 z-50">
          <Nav />
        </div>
        
        {/* Main content area */}
        <div className="lg:max-w-[1500px] mx-auto z-20 ">
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
