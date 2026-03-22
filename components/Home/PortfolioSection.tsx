"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type Item = {
  type: "service" | "project";
  label: string;
  tagline: string;
  desc: string;
  img: string;
  href: string;
  accent: string;
};

/* ─────────────────────────────────────────────────────────────
   Items — SEO optimized content
───────────────────────────────────────────────────────────── */
const ITEMS: Item[] = [
  {
    type: "service",
    label: "Web Development",
    tagline: "Fast. SEO-ready. Converts.",
    desc: "Custom websites and web apps built with React & Next.js — optimised for speed, Core Web Vitals, and real business results.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=85&fit=crop",
    href: "/services/web-development",
    accent: "#f59e0b",
  },
  {
    type: "service",
    label: "Mobile App Development",
    tagline: "iOS & Android. Zero compromise.",
    desc: "Cross-platform mobile apps built with React Native & Flutter — native quality, shipped fast, tested thoroughly.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=85&fit=crop",
    href: "/services/app-development",
    accent: "#06b6d4",
  },
  {
    type: "project",
    label: "Health.E",
    tagline: "Healthcare platform, reimagined.",
    desc: "A full-stack healthcare web app connecting patients with providers — real-time booking, medical records, and teleconsultation.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=85&fit=crop",
    href: "/project",
    accent: "#10b981",
  },
  {
    type: "service",
    label: "UI / UX Design",
    tagline: "Interfaces users actually love.",
    desc: "Research-driven UI/UX design — wireframes, Figma prototypes, and full design systems built to convert and delight.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=85&fit=crop",
    href: "/services/ui-ux-design",
    accent: "#ec4899",
  },
  {
    type: "service",
    label: "AI / ML Solutions",
    tagline: "Smart systems. Measurable results.",
    desc: "Custom AI models, recommendation engines, NLP tools & intelligent automation — built to solve real business problems.",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=85&fit=crop",
    href: "/services/ai-ml-solutions",
    accent: "#10b981",
  },
  {
    type: "project",
    label: "TalentEzee",
    tagline: "Hiring without the friction.",
    desc: "A full-stack talent engagement platform — smart filtering, campaign management, interview scheduling & Stripe-powered rewards.",
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=85&fit=crop",
    href: "/project",
    accent: "#ec4899",
  },
  {
    type: "service",
    label: "Digital Analytics",
    tagline: "Data that drives decisions.",
    desc: "Custom dashboards, funnel analysis & reporting pipelines — stop guessing and start making data-driven business decisions.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85&fit=crop",
    href: "/services/digital-analytics",
    accent: "#f97316",
  },
  {
    type: "service",
    label: "Training & Workshops",
    tagline: "Real skills. Job-ready outcomes.",
    desc: "Hands-on web & app development training for students, freshers & teams — live sessions, real projects, real mentors.",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=85&fit=crop",
    href: "/services/training",
    accent: "#e11d48",
  },
  {
    type: "service",
    label: "Digital Marketing",
    tagline: "Reach the right audience.",
    desc: "SEO, paid ads, content strategy & social media — campaigns that bring in actual customers, not just impressions.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85&fit=crop",
    href: "/services/digital-marketing",
    accent: "#8b5cf6",
  },
];

const INTERVAL = 3200;

/* ─────────────────────────────────────────────────────────────
   Component — unchanged
───────────────────────────────────────────────────────────── */
const PortfolioSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const item = ITEMS[current];

  useEffect(() => {
    if (hovered) return;
    timerRef.current = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % ITEMS.length);
        setVisible(true);
      }, 500);
    }, INTERVAL);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, hovered]);

  const goTo = (i: number) => {
    if (i === current) return;
    setVisible(false);
    setTimeout(() => {
      setCurrent(i);
      setVisible(true);
    }, 400);
  };

  return (
    <section className="bg-dc-ink py-16 lg:py-24">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        {/* ── Section header ──────────────────────────────── */}
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div className="flex items-baseline gap-4">
            <span
              className="font-serif font-black text-white/[0.04] leading-none select-none"
              style={{ fontSize: "clamp(70px, 9vw, 110px)" }}
              aria-hidden
            >
              03
            </span>
            <div>
              <p className="font-mono text-[10px] text-dc-amber tracking-[0.15em] uppercase mb-2">
                // web development · app dev · ui/ux · ai/ml · digital marketing
              </p>
              <h2
                className="font-serif font-bold text-white/90 leading-tight"
                style={{ fontSize: "clamp(28px, 3.8vw, 44px)" }}
              >
                services &amp; projects that{" "}
                <em className="italic text-dc-red">deliver results.</em>
              </h2>
              <p className="font-mono text-[12px] text-white/40 mt-2 max-w-md leading-relaxed">
                From concept to launch — custom web development, mobile apps,
                design &amp; marketing. Everything your business needs, under
                one roof.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 items-end">
            <Link
              href="/project"
              className="font-mono text-[11px] font-bold tracking-[0.1em] uppercase border border-white/20 text-white/50 px-5 py-2.5 transition-all duration-200 hover:border-white/50 hover:text-white hover:bg-white/5 w-full text-center"
            >
              view our portfolio →
            </Link>
            <Link
              href="/services"
              className="font-mono text-[11px] font-bold tracking-[0.1em] uppercase bg-dc-amber text-dc-ink px-5 py-2.5 transition-all duration-200 hover:bg-dc-amber/80 w-full text-center"
            >
              explore all services →
            </Link>
          </div>
        </div>

        {/* ── Spotlight card ──────────────────────────────── */}
        <div
          className="relative w-full overflow-hidden"
          style={{ height: "clamp(340px, 50vw, 560px)" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: visible ? 1 : 0 }}
          >
            <Image
              src={item.img}
              alt={`${item.label} — Dcoder India`}
              fill
              sizes="100vw"
              className="object-cover"
              unoptimized
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* <div
            className="dc-tape absolute z-10 rotate-[-3deg]"
            style={{ width: 80, height: 22, top: 18, left: 32 }}
            aria-hidden
          /> */}

          <div
            className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 transition-all duration-500"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span
                className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 text-white"
                style={{ background: item.accent }}
              >
                {item.type}
              </span>
              <span className="font-mono text-[10px] text-white/30 tracking-wider">
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(ITEMS.length).padStart(2, "0")}
              </span>
            </div>

            <h3
              className="font-serif font-bold text-white leading-tight mb-1"
              style={{ fontSize: "clamp(28px, 4vw, 54px)" }}
            >
              {item.label}
            </h3>

            <p
              className="font-hand text-white/70 mb-3"
              style={{ fontSize: "clamp(14px, 1.6vw, 20px)" }}
            >
              {item.tagline}
            </p>

            <p className="font-mono text-[12px] text-white/50 max-w-lg leading-relaxed mb-6 hidden sm:block">
              {item.desc}
            </p>

            <div
              className="transition-all duration-300"
              style={{
                opacity: hovered ? 1 : 0,
                transform: hovered ? "translateY(0)" : "translateY(8px)",
              }}
            >
              <Link
                href={item.href}
                className="inline-block font-mono text-[11px] font-bold tracking-[0.12em] uppercase border-2 text-white px-6 py-3 transition-colors duration-200 hover:text-dc-ink"
                style={{
                  borderColor: item.accent,
                  backgroundColor: hovered ? item.accent : "transparent",
                }}
              >
                {item.type === "service"
                  ? "explore service →"
                  : "view project →"}
              </Link>
            </div>
          </div>

          <div
            className="absolute bottom-0 left-0 h-[3px] transition-all duration-700"
            style={{ background: item.accent, width: visible ? "100%" : "0%" }}
            aria-hidden
          />
        </div>

        {/* ── Dot nav ─────────────────────────────────────── */}
        <div className="flex items-center gap-2 mt-5 flex-wrap">
          {ITEMS.map((it, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="group flex items-center gap-1.5 transition-all duration-200"
              aria-label={it.label}
            >
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: i === current ? 28 : 8,
                  height: 8,
                  background:
                    i === current ? item.accent : "rgba(255,255,255,0.2)",
                }}
              />
              <span
                className="font-mono text-[9px] tracking-wider uppercase transition-all duration-200 hidden sm:block"
                style={{
                  color:
                    i === current
                      ? "rgba(255,255,255,0.7)"
                      : "rgba(255,255,255,0.2)",
                  maxWidth: i === current ? 120 : 0,
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {it.label}
              </span>
            </button>
          ))}
        </div>

        {/* ── Stats + CTA strip ───────────────────────────── */}
        <div className="mt-10 border border-white/10 p-6 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/[0.02]">
          <div className="flex gap-8 flex-wrap">
            {[
              { num: "20+", label: "projects shipped" },
              { num: "7", label: "services offered" },
              { num: "100%", label: "client satisfaction" },
            ].map(({ num, label }) => (
              <div key={label} className="flex items-baseline gap-2">
                <span className="font-serif font-bold text-dc-amber text-2xl">
                  {num}
                </span>
                <span className="font-mono text-[10px] text-white/30 uppercase tracking-wider">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="font-mono text-[12px] font-bold tracking-[0.12em] uppercase bg-dc-red text-white px-8 py-3 hover:bg-dc-red/80 transition-colors duration-200 shrink-0"
          >
            get a free quote →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
