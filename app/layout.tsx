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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} min-h-screen text-gray-800`}
      >
        <Toaster position="top-center" />
        <div className="h-16 z-50">
          <Nav />
        </div>
        <div className="lg:max-w-[1500px] mx-auto z-20 ">
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}