"use client";

import Link from "next/link";
import Image from "next/image";
import {
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
  BsWhatsapp,
  BsEnvelope,
} from "react-icons/bs";

const SOCIAL_LINKS = [
  {
    Icon: BsLinkedin,
    href: "https://www.linkedin.com/company/d-coder-s/",
    label: "LinkedIn",
  },
  { Icon: BsWhatsapp, href: "https://wa.me/+918690896522", label: "WhatsApp" },
  {
    Icon: BsWhatsapp,
    href: "https://wa.me/+919548566064",
    label: "WhatsApp 2",
  },
  // { Icon: BsGithub, href: "https://github.com/d-coder-s", label: "GitHub" },
  { Icon: BsTwitterX, href: "https://x.com/dcoder_atwork", label: "X" },
  {
    Icon: BsInstagram,
    href: "https://www.instagram.com/dcoder_atwork/",
    label: "Instagram",
  },
  { Icon: BsEnvelope, href: "mailto:dcoder.atwork@gmail.com", label: "Email" },
] as const;

const NAV_LINKS = [
  { label: "home", href: "/home" },
  { label: "services", href: "/services" },
  { label: "our work", href: "/project" },
  { label: "about", href: "/about" },
  { label: "contact", href: "/contact" },
] as const;

const SERVICES = [
  { label: "web development", href: "/services/web-development" },
  { label: "mobile app development", href: "/services/app-development" },
  { label: "ui/ux design", href: "/services/ui-ux-design" },
  { label: "ai / ml solutions", href: "/services/ai-ml-solutions" },
  { label: "digital analytics", href: "/services/digital-analytics" },
  { label: "digital marketing", href: "/services/digital-marketing" },
  { label: "training & workshops", href: "/services/training" },
] as const;

const CONTACT_ITEMS = [
  { icon: "📞", val: "+91-8690896522", href: "tel:+918690896522" },
  { icon: "📞", val: "+91-9548566064", href: "tel:+919548566064" },
  {
    icon: "✉️",
    val: "dcoder.atwork@gmail.com",
    href: "mailto:dcoder.atwork@gmail.com",
  },
  { icon: "🌐", val: "dcoder.online", href: "https://dcoder.online" },
  { icon: "📍", val: "Remote — India", href: null },
] as const;

const ColHead = ({ children }: { children: React.ReactNode }) => (
  <h5 className="font-mono text-[13px] font-bold tracking-[0.14em] uppercase text-dc-amber mb-6 flex items-center gap-2">
    <span className="w-5 h-0.5 bg-dc-amber inline-block" />
    {children}
  </h5>
);

const Footer: React.FC = () => (
  <footer
    className="bg-dc-ink w-full"
    style={{ borderTop: "3px solid #c8860a" }}
  >
    {/* ── Top strip ─────────────────────────────────────── */}
    <div className="border-b border-white/[0.08]">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 py-3 flex items-center justify-between gap-4 flex-wrap">
 
        <p className="font-mono text-[12px] tracking-[0.14em] uppercase text-white/50">
          {"// remote-first digital studio · est. 2024"}
        </p>
        <p className="font-mono text-[12px] text-white/30 tracking-widest">
          d&lt;coder/&gt;
        </p>
      </div>
    </div>

    {/* ── Main grid ─────────────────────────────────────── */}
    <div className="max-w-[1500px] mx-auto px-6 lg:px-12 pt-14 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr_1fr_1.2fr] gap-12 lg:gap-10">
        {/* Brand */}
        <div>
          {/* Logo */}
          <Link href="/home" className="inline-flex items-center gap-2.5 mb-5">
            <Image
              src="/figma/dcode.png"
              alt="Dcoder icon"
              width={160}
              height={40}
              className="h-14 w-auto object-contain"
            />
          </Link>

          <p className="font-mono text-[13px] text-white/75 leading-[2] max-w-[280px] mb-3">
            independent digital studio building websites, apps, ai solutions
            &amp; providing various IT services — tailored to your business
            goals, shipped on time.
          </p>
    
          <p className="font-mono text-[12px] text-white/40 mb-7">
            {"// no fluff. just real, handcrafted code."}
          </p>

          {/* Sticky note */}
          <div className="relative inline-block bg-dc-sticky-yellow border border-black/[0.1] px-4 py-3 -rotate-[1.5deg] mb-8">
            <div
              className="dc-tape absolute -rotate-2"
              style={{
                width: 52,
                height: 16,
                top: -8,
                left: "50%",
                transform: "translateX(-50%)",
              }}
              aria-hidden
            />
            <p className="font-hand text-[18px] text-dc-ink2 leading-[1.4]">
              open for projects ✦
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2.5 flex-wrap">
            {SOCIAL_LINKS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto") ? undefined : "noopener noreferrer"
                }
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/60 transition-all duration-200 hover:text-dc-amber hover:border-dc-amber/60"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigate */}
        <div>
          <ColHead>navigate</ColHead>
          <ul className="flex flex-col gap-0.5">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="group flex items-center gap-2 font-mono text-[13.5px] text-white/70 py-1.5 transition-colors duration-200 hover:text-white"
                >
                  <span className="text-dc-red text-[11px] opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    →
                  </span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <ColHead>services</ColHead>
          <ul className="flex flex-col gap-0.5">
            {SERVICES.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="group flex items-center gap-2 font-mono text-[13.5px] text-white/70 py-1.5 transition-colors duration-200 hover:text-white"
                >
                  <span className="text-dc-amber text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    ✦
                  </span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <ColHead>get in touch</ColHead>
          <div className="flex flex-col gap-4 mb-8">
            {CONTACT_ITEMS.map(({ icon, val, href }) => (
              <div key={val} className="flex items-start gap-3">
                <span className="text-[15px] shrink-0 mt-0.5" aria-hidden>
                  {icon}
                </span>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="font-mono text-[13px] text-white/75 hover:text-white transition-colors duration-200 break-all leading-[1.7]"
                  >
                    {val}
                  </a>
                ) : (
                  <span className="font-mono text-[13px] text-white/75 leading-[1.7]">
                    {val}
                  </span>
                )}
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-mono text-[12px] font-bold tracking-[0.1em] uppercase bg-dc-red text-white px-5 py-3 transition-colors duration-200 hover:bg-[#a93226]"
          >
            ✦ get a free quote
          </Link>
        </div>
      </div>
    </div>

    {/* ── Bottom bar ────────────────────────────────────── */}
    <div className="border-t border-white/[0.08]">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-[12px] text-white/50">
          © {new Date().getFullYear()} dcoder. all rights reserved.
        </p>
        <p className="font-hand text-[22px] text-white/50">
          made with ♥ in india
        </p>
        <div className="flex items-center gap-5">
          <a
            href="#"
            className="font-mono text-[12px] text-white/50 hover:text-white transition-colors duration-200"
          >
            terms
          </a>
          <span className="text-white/25">·</span>
          <a
            href="#"
            className="font-mono text-[12px] text-white/50 hover:text-white transition-colors duration-200"
          >
            privacy
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
