"use client";

import React from "react";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   Data — SEO optimized
───────────────────────────────────────────────────────────── */
const WHY_ITEMS = [
  {
    text: "You work directly with the developers building your product — not an account manager",
    tag: "// direct access",
  },
  {
    text: "Full-stack expertise — web development, app dev, UI/UX, AI/ML & digital marketing under one roof",
    tag: "// one studio, all skills",
  },
  {
    text: "Affordable pricing with fixed-scope projects or flexible monthly retainers",
    tag: "// flexible pricing",
  },
  {
    text: "We'll tell you honestly if your idea needs rethinking before we build it",
    tag: "// honest consulting",
  },
  {
    text: "Realistic timelines, transparent estimates — no hidden fees, ever",
    tag: "// no bs estimates",
  },
  {
    text: "Remote-first studio serving startups and businesses across India and globally",
    tag: "// india-based, globally trusted",
  },
] as const;

type Testimonial = {
  quote: string;
  author: string;
  bg: string;
  rotate: string;
  size: string;
  stars?: boolean;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote: '"shipped our MVP in under 6 weeks 🚀"',
    author: "Founder",
    bg: "bg-dc-sticky-yellow",
    rotate: "-rotate-[2.5deg]",
    size: "text-[17px]",
  },
  {
    quote: '"they actually get it without 10 meetings"',
    author: "CTO",
    bg: "bg-dc-sticky-pink",
    rotate: "rotate-[3deg]",
    size: "text-[15px]",
  },
  {
    quote: '"dashboard looks 🔥 and the data is actually right lol"',
    author: "Head of Ops",
    bg: "bg-dc-sticky-mint",
    rotate: "-rotate-[1.5deg]",
    size: "text-[14px]",
  },
  {
    quote: "would hire again and again — literally every client",
    author: "",
    bg: "bg-dc-sticky-blue",
    rotate: "rotate-[2.5deg]",
    size: "text-[14px]",
    stars: true,
  },
];

const STATS = [
  { num: "20+", label: "projects shipped" },
  { num: "7", label: "services offered" },
  { num: "24h", label: "avg response time" },
  { num: "0", label: "boring websites made" },
] as const;

/* ─────────────────────────────────────────────────────────────
   Animation variants
───────────────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut", delay: i * 0.07 },
  }),
};

/* ─────────────────────────────────────────────────────────────
   Tape
───────────────────────────────────────────────────────────── */
const Tape = ({
  rotate = "-rotate-2",
  width = 52,
}: {
  rotate?: string;
  width?: number;
}) => (
  <div
    className={`dc-tape absolute ${rotate}`}
    style={{
      width,
      height: 17,
      top: -9,
      left: "50%",
      transform: "translateX(-50%)",
    }}
    aria-hidden
  />
);

/* ─────────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────────── */
const Chooseus: React.FC = () => {
  return (
    <section className="max-w-[1500px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
      {/* ── Section header ──────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-baseline gap-4 mb-10"
      >
        <span
          className="font-serif font-black text-black/[0.05] leading-none select-none"
          style={{ fontSize: "clamp(70px, 9vw, 110px)" }}
          aria-hidden
        >
          02
        </span>
        <div>
          <h2
            className="font-serif font-bold text-dc-ink leading-tight"
            style={{ fontSize: "clamp(28px, 3.8vw, 44px)" }}
          >
            why hire <em className="italic text-dc-red">dcoder.</em>
          </h2>
 
          <p className="font-mono text-[11px] text-dc-ink3 mt-1 tracking-[0.04em]">
            {"// affordable · experienced · remote-first digital studio india"}
          </p>
        </div>
      </motion.div>

      {/* ── Stats strip ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10"
      >
        {STATS.map(({ num, label }, i) => (
          <div
            key={label}
            className={`
              relative border border-black/[0.08] px-4 py-4 text-center
              ${i === 0 ? "bg-dc-sticky-yellow -rotate-[1deg]" : ""}
              ${i === 1 ? "bg-dc-sticky-pink   rotate-[0.8deg]" : ""}
              ${i === 2 ? "bg-dc-sticky-blue   -rotate-[0.5deg]" : ""}
              ${i === 3 ? "bg-dc-sticky-mint   rotate-[1deg]" : ""}
            `}
          >
            <Tape rotate={i % 2 === 0 ? "-rotate-2" : "rotate-2"} width={44} />
            <p
              className="font-serif font-black text-dc-ink leading-none"
              style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
            >
              {num}
            </p>
            <p className="font-mono text-[10px] text-dc-ink3 mt-1 tracking-wide">
              {label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* ── Two-column body ─────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14 items-start">
        {/* LEFT — bullet list */}
        <ul className="flex flex-col">
          {WHY_ITEMS.map(({ text, tag }, i) => (
            <motion.li
              key={text}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-start gap-4 py-4 border-b border-dashed border-black/[0.14] first:border-t first:border-dashed first:border-black/[0.14] group"
            >
              <span className="font-mono text-[13px] font-bold text-dc-red mt-0.5 shrink-0 group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-[12.5px] text-dc-ink2 leading-[1.8]">
                  {text}
                </span>
                <span className="font-mono text-[10px] text-dc-ink3 tracking-[0.1em] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {tag}
                </span>
              </div>
            </motion.li>
          ))}
        </ul>

        {/* RIGHT — desktop testimonial collage */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="hidden lg:block"
          aria-label="Client testimonials"
        >
          <div className="grid grid-cols-2 gap-4">
            {TESTIMONIALS.map(({ quote, author, bg, rotate, size, stars }) => (
              <div
                key={author || quote}
                className={`relative ${bg} ${rotate} border border-black/[0.07] p-4 font-hand hover:rotate-0 transition-transform duration-300`}
              >
                <Tape rotate="-rotate-2" />
                {stars && (
                  <p className="text-dc-amber tracking-[2px] text-[13px] mb-1.5">
                    ★★★★★
                  </p>
                )}
                <blockquote
                  className={`${size} text-dc-ink2 leading-[1.5] mb-2`}
                >
                  {quote}
                </blockquote>
                {author && (
                  <cite className="font-mono text-[10px] text-dc-ink3 not-italic">
                    — {author}
                  </cite>
                )}
              </div>
            ))}
          </div>

          {/* Bottom row */}
          <div className="flex items-center gap-4 mt-5">
            <div className="relative bg-dc-ink border border-white/10 px-5 py-4 flex-1 -rotate-[1deg] hover:rotate-0 transition-transform duration-300">
              <Tape rotate="rotate-[2deg]" width={60} />

              <p className="font-mono text-[9px] text-dc-amber mb-1.5 tracking-widest">
                {"// client_feedback.log"}
              </p>
              <p className="font-mono text-[9px] text-white/70 leading-[1.9]">
                <span className="text-green-400">INFO</span>
                <span className="text-white/50"> client_satisfaction: </span>
                <span className="text-yellow-300">100%</span>
                <br />
                <span className="text-green-400">INFO</span>
                <span className="text-white/50"> repeat_clients: </span>
                <span className="text-blue-300">true</span>
                <br />
                <span className="text-green-400">INFO</span>
                <span className="text-white/50"> referrals_received: </span>
                <span className="text-green-300">many</span>
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 shrink-0">
              <svg
                className="w-12 h-12 opacity-15"
                viewBox="0 0 48 48"
                fill="none"
                aria-hidden
              >
                <path
                  d="M24,4 L27,19 L42,14 L32,24 L44,32 L29,30 L30,46 L22,34 L8,40 L16,28 L4,20 L19,22 Z"
                  fill="#1a1208"
                />
              </svg>
              <div className="w-[58px] h-[58px] rounded-full bg-dc-sticky-yellow border-2 border-dc-ink flex items-center justify-center text-center rotate-[6deg]">
                <span className="font-hand text-[12px] text-dc-ink leading-tight">
                  100%
                  <br />
                  happy ✦
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — mobile flat cards */}
        <div className="flex flex-col gap-3 lg:hidden">
          {TESTIMONIALS.map(({ quote, author, bg, stars }) => (
            <div
              key={author || quote}
              className={`${bg} p-4 border border-black/[0.07] font-hand`}
            >
              {stars && (
                <p className="text-dc-amber text-[13px] mb-1.5">★★★★★</p>
              )}
              <blockquote className="text-[15px] text-dc-ink2 leading-[1.5] mb-1.5">
                {quote}
              </blockquote>
              {author && (
                <cite className="font-mono text-[10px] text-dc-ink3 not-italic">
                  — {author}
                </cite>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chooseus;
