import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Space_Mono, Caveat } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Nav from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import LeadPopup from "@/components/LeadPopup/LeadPopup";

/* ─────────────────────────────────────────────────────────────
   Font loading
───────────────────────────────────────────────────────────── */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-space-mono",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

/* ─────────────────────────────────────────────────────────────
   Global Metadata
───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://dcoder.online"),
  title: {
    default: "Dcoder | Web Development, App Dev, UI/UX & AI Solutions — India",
    template: "%s | Dcoder — Digital Studio India",
  },
  description:
    "Dcoder is an independent digital studio building custom websites, mobile apps, UI/UX designs, and AI/ML solutions. Remote-first, India-based. Trusted by startups and growing businesses. No fluff — just real, handcrafted code.",
  keywords: [
    "web development company India",
    "custom website development India",
    "mobile app development India",
    "UI UX design agency India",
    "AI ML solutions India",
    "data analytics services India",
    "digital marketing agency India",
    "React Next.js development agency India",
    "full stack development company India",
    "affordable web development India",
    "hire web developer India",
    "independent digital studio India",
    "remote web development India",
    "software development company India",
    "Dcoder",
  ],
  authors: [{ name: "Dcoder", url: "https://dcoder.online" }],
  creator: "Dcoder",
  publisher: "Dcoder",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://dcoder.online",
    siteName: "Dcoder",
    title: "Dcoder | Web Development, App Dev, UI/UX & AI Solutions — India",
    description:
      "Independent digital studio building high-performance websites, mobile apps, UI/UX designs & AI/ML solutions. Remote-first. Affordable. India.",
    images: [
      {
        url: "/figma/lo.png",
        width: 1200,
        height: 630,
        alt: "Dcoder — Independent Digital Studio India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dcoder | Web Development, App Dev & AI Solutions — India",
    description:
      "Independent digital studio — custom web development, mobile apps, UI/UX design & AI/ML solutions. Remote-first. India.",
    images: ["/figma/lo.png"],
    creator: "@dcoder_atwork",
  },
  icons: {
    icon: "/figma/D.png",
    shortcut: "/figma/D.png",
    apple: "/figma/D.png",
  },
  category: "technology",
};

/* ─────────────────────────────────────────────────────────────
   Root layout
───────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${playfair.variable}
          ${spaceMono.variable}
          ${caveat.variable}
          font-mono
          bg-dc-cream
          dc-dot-bg
          text-dc-ink
          min-h-screen
          overflow-x-hidden
          antialiased
        `}
      >
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              fontFamily: "var(--font-space-mono)",
              fontSize: "12px",
              background: "#1a1208",
              color: "#f0ebe0",
              border: "1px solid rgba(200,134,10,0.4)",
            },
          }}
        />

        {/* JSON-LD structured data — Organization + WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://dcoder.online/#organization",
                  name: "Dcoder",
                  url: "https://dcoder.online",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://dcoder.online/figma/lo.png",
                  },
                  description:
                    "Independent digital studio specialising in custom web development, mobile app development, UI/UX design, AI/ML solutions, digital analytics, and digital marketing. Remote-first, India-based. Serving startups and businesses globally.",
                  email: "dcoder.atwork@gmail.com",
                  telephone: "+91-8690896522",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Remote",
                    addressCountry: "IN",
                  },
                  sameAs: [
                    "https://www.linkedin.com/company/d-coder-s/",
                    "https://github.com/d-coder-s",
                    "https://x.com/dcoder_atwork",
                    "https://www.instagram.com/dcoder_atwork/",
                  ],
                  foundingDate: "2024",
                  numberOfEmployees: { "@type": "QuantitativeValue", value: 8 },
                  areaServed: ["IN", "Worldwide"],
                  serviceType: [
                    "Web Development",
                    "Mobile App Development",
                    "UI/UX Design",
                    "AI/ML Solutions",
                    "Digital Analytics",
                    "Digital Marketing",
                    "Developer Training",
                    "Game Development",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://dcoder.online/#website",
                  url: "https://dcoder.online",
                  name: "Dcoder",
                  description:
                    "Independent digital studio — web development, app development, UI/UX design, AI/ML solutions & digital marketing. Remote-first. India.",
                  publisher: {
                    "@id": "https://dcoder.online/#organization",
                  },
                },
              ],
            }),
          }}
        />

        <Nav />
        <LeadPopup />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
