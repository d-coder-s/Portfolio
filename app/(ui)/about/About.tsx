"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import TornEdge from "@/components/ui/TornEdge";

/* ─────────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────────── */
const STATS = [
  { num: "8+", label: "skilled team members", bg: "bg-dc-sticky-yellow" },
  { num: "7", label: "services under one roof", bg: "bg-dc-sticky-pink" },
  { num: "20+", label: "projects shipped & live", bg: "bg-dc-sticky-blue" },
  { num: "0", label: "boring websites made", bg: "bg-dc-sticky-mint" },
] as const;

const EXPERTISE = [
  {
    label: "Web Development",
    bg: "bg-dc-sticky-yellow",
    rotate: "-rotate-[2deg]",
    offset: "mt-4",
  },
  {
    label: "App Development",
    bg: "bg-dc-sticky-pink",
    rotate: "rotate-[1.5deg]",
    offset: "mt-0",
  },
  {
    label: "UI/UX Design",
    bg: "bg-dc-sticky-blue",
    rotate: "-rotate-[1deg]",
    offset: "mt-6",
  },
  {
    label: "AI/ML Solutions",
    bg: "bg-dc-sticky-mint",
    rotate: "rotate-[2.5deg]",
    offset: "mt-2",
  },
  {
    label: "Digital Analytics",
    bg: "bg-dc-sticky-yellow",
    rotate: "-rotate-[1.5deg]",
    offset: "mt-8",
  },
  {
    label: "Game Development",
    bg: "bg-dc-sticky-pink",
    rotate: "rotate-[1deg]",
    offset: "mt-0",
  },
  {
    label: "Digital Marketing",
    bg: "bg-dc-sticky-blue",
    rotate: "-rotate-[2.5deg]",
    offset: "mt-4",
  },
  {
    label: "AI Chatbots",
    bg: "bg-dc-sticky-mint",
    rotate: "rotate-[2deg]",
    offset: "mt-2",
  },
] as const;

const WHY_ITEMS = [
  {
    text: "You work directly with the developers building your product — not an account manager",
    tag: "// direct access",
  },
  {
    text: "No middlemen, no hand-offs — just clear, honest communication throughout",
    tag: "// no middlemen",
  },
  {
    text: "Opinionated about quality. Quiet about ego.",
    tag: "// craft first",
  },
  {
    text: "Fixed-scope projects or flexible monthly retainers — you choose what works",
    tag: "// flexible engagement",
  },
  {
    text: "We'll tell you honestly if your idea needs rethinking before we build it",
    tag: "// honest consulting",
  },
  {
    text: "Realistic timelines and transparent pricing — no surprise invoices, ever",
    tag: "// no bs estimates",
  },
] as const;

const VALUES = [
  {
    icon: "✦",
    title: "Craft over shortcuts",
    body: "We'd rather take an extra day and ship something we're genuinely proud of than rush something mediocre out the door.",
  },
  {
    icon: "→",
    title: "Honest by default",
    body: "We tell you what we actually think — including when your idea needs rethinking. That's the kind of partner you deserve.",
  },
  {
    icon: "◎",
    title: "Small on purpose",
    body: "We're not trying to be a 500-person agency. Staying small means every client talks directly to someone who cares.",
  },
  {
    icon: "⚡",
    title: "Shipped beats perfect",
    body: "A live product that's 90% right beats a perfect product that never launches. We move fast — without cutting corners.",
  },
] as const;

const TESTIMONIALS = [
  {
    quote: '"shipped our MVP in under 6 weeks 🚀"',
    author: "Founder",
    bg: "bg-dc-sticky-yellow",
    rotate: "-rotate-[2.5deg]",
    stars: false,
  },
  {
    quote: '"they actually get it without 10 meetings"',
    author: "CTO",
    bg: "bg-dc-sticky-pink",
    rotate: "rotate-[3deg]",
    stars: false,
  },
  {
    quote: '"dashboard looks 🔥 and the data is actually right lol"',
    author: "Head of Ops",
    bg: "bg-dc-sticky-mint",
    rotate: "-rotate-[1.5deg]",
    stars: false,
  },
  {
    quote: "would hire again. and again.",
    author: "— literally every client",
    bg: "bg-dc-sticky-blue",
    rotate: "rotate-[2.5deg]",
    stars: true,
  },
] as const;

/* ─────────────────────────────────────────────────────────────
   Animation variants
───────────────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", delay: i * 0.07 },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.15 },
  },
};

/* ─────────────────────────────────────────────────────────────
   Tape strip
───────────────────────────────────────────────────────────── */
const Tape = ({
  rotate = "-rotate-2",
  width = 60,
}: {
  rotate?: string;
  width?: number;
}) => (
  <div
    className={`dc-tape absolute ${rotate}`}
    style={{
      width,
      height: 18,
      top: -9,
      left: "50%",
      transform: "translateX(-50%)",
    }}
    aria-hidden
  />
);

/* ─────────────────────────────────────────────────────────────
   Section heading
───────────────────────────────────────────────────────────── */
const SectionHead = ({
  num,
  title,
  sub,
}: {
  num: string;
  title: React.ReactNode;
  sub: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex items-baseline gap-4 mb-12"
  >
    <span
      className="font-serif font-black text-black/[0.05] leading-none select-none shrink-0"
      style={{ fontSize: "clamp(70px, 9vw, 110px)" }}
      aria-hidden
    >
      {num}
    </span>
    <div>
      <h2
        className="font-serif font-bold text-dc-ink leading-tight"
        style={{ fontSize: "clamp(28px, 3.8vw, 44px)" }}
      >
        {title}
      </h2>
      <p className="font-mono text-[11px] text-dc-ink3 mt-1 tracking-[0.04em]">
        {sub}
      </p>
    </div>
  </motion.div>
);

/* ─────────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────────── */
export default function About() {
  return (
    <>
      {/* ══ HERO ════════════════════════════════════════════ */}
      <section className="bg-dc-ink border-b-2 border-dc-amber pt-16 pb-20 relative overflow-hidden">
        <span
          className="absolute -bottom-4 right-6 font-serif font-black text-white/[0.03] select-none pointer-events-none leading-none"
          style={{ fontSize: "clamp(80px, 14vw, 180px)" }}
          aria-hidden
        >
          about
        </span>
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 mb-3">
              // who we are
            </p>
            <h1
              className="font-serif font-black text-white/90 leading-tight mb-4"
              style={{ fontSize: "clamp(36px, 6vw, 76px)" }}
            >
              independent digital studio.{" "}
              <em className="italic text-dc-red">real results.</em>
            </h1>
            <p className="font-mono text-[13px] text-white/35 max-w-lg leading-[1.9]">
              web development · mobile apps · ui/ux design · ai/ml solutions ·
             digital analytics · digital marketing — built by people who
              genuinely care about your product. remote-first. est. 2024.
            </p>
          </motion.div>
        </div>
      </section>

      <TornEdge from="dc-ink" to="dc-cream" flip />

      {/* ══ ABOUT US ════════════════════════════════════════ */}
      <section className="bg-dc-cream py-16 lg:py-20">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
          <SectionHead
            num="01"
            title={
              <>
                about <em className="italic text-dc-red">us.</em>
              </>
            }
            sub="// the story so far"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — text + stats */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="font-mono text-[13px] text-dc-ink2 leading-[2] mb-6 max-w-[520px]">
                Dcoder is an independent digital studio helping startups and
                businesses build high-quality digital products. From custom web
                development and mobile app development to AI/ML solutions, UI/UX
                design, and digital marketing — we bring your ideas to life with
                precision, creativity, and real technical depth.
              </p>
              <p className="font-mono text-[13px] text-dc-ink2 leading-[2] max-w-[520px] mb-10">
                We are a remote-first studio, serving clients across India and
                globally. Small team, big output. You always work directly with
                the people building your product — not a rotating cast of
                project managers who've never seen your codebase.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-4">
                {STATS.map(({ num, label, bg }, i) => (
                  <div
                    key={label}
                    className={`relative ${bg} border border-black/[0.08] px-5 py-4 ${i % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
                  >
                    <Tape
                      rotate={i % 2 === 0 ? "-rotate-2" : "rotate-2"}
                      width={50}
                    />
                    <p className="font-serif font-black text-[40px] text-dc-ink leading-none">
                      {num}
                    </p>
                    <p className="font-mono text-[10px] text-dc-ink3 mt-1">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — collage */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative hidden lg:block h-[460px]"
              aria-hidden
            >
              {/* Code card */}
              <div className="absolute top-0 left-0 w-[300px] bg-[#0d1117] border border-white/10 p-5 -rotate-[1.5deg]">
                <Tape rotate="-rotate-2" width={72} />
                <div className="flex gap-1.5 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <p className="font-mono text-[9px] leading-[2]">
                  <span className="text-dc-amber">// about dcoder</span>
                  <br />
                  <span className="text-green-400">const</span>
                  <span className="text-white/70"> studio = {"{"}</span>
                  <br />
                  <span className="text-white/50"> name: </span>
                  <span className="text-yellow-300">&apos;Dcoder&apos;</span>
                  <span className="text-white/50">,</span>
                  <br />
                  <span className="text-white/50"> founded: </span>
                  <span className="text-blue-300">2024</span>
                  <span className="text-white/50">,</span>
                  <br />
                  <span className="text-white/50"> type: </span>
                  <span className="text-yellow-300">
                    &apos;remote-first studio&apos;
                  </span>
                  <span className="text-white/50">,</span>
                  <br />
                  <span className="text-white/50"> team: </span>
                  <span className="text-blue-300">8</span>
                  <span className="text-white/50">,</span>
                  <br />
                  <span className="text-white/50"> boring_sites: </span>
                  <span className="text-blue-300">0</span>
                  <br />
                  <span className="text-white/70">{"}"}</span>
                </p>
              </div>

              {/* Yellow sticky */}
              <div className="absolute top-4 right-0 w-[175px] bg-dc-sticky-yellow border border-black/[0.07] p-4 rotate-[3deg]">
                <Tape rotate="rotate-[2deg]" width={52} />
                <p className="font-hand text-[17px] text-dc-ink2 leading-[1.5]">
                  <span className="font-bold">est. 2024</span>
                  <br />
                  remote-first 🌐
                  <br />
                  india-based 📍
                </p>
              </div>

              {/* Git log */}
              <div className="absolute top-[200px] left-8 w-[240px] bg-dc-ink border border-white/10 p-4 rotate-[1.5deg]">
                <Tape rotate="rotate-[2deg]" width={56} />
                <p className="font-mono text-[9px] text-dc-amber mb-2 tracking-widest">
                  $ git log --oneline
                </p>
                {[
                  { hash: "a3f9c2", msg: "feat: launch dcoder v1" },
                  { hash: "b7e1d4", msg: "fix: zero boring sites" },
                  { hash: "c2a8f1", msg: "chore: hire great devs" },
                  { hash: "d5f2e8", msg: "feat: 20+ projects live" },
                ].map(({ hash, msg }) => (
                  <p key={hash} className="font-mono text-[9px] leading-[1.8]">
                    <span className="text-yellow-400">{hash}</span>
                    <span className="text-white/45"> {msg}</span>
                  </p>
                ))}
              </div>

              {/* Pink sticky */}
              <div className="absolute top-[210px] right-4 w-[160px] bg-dc-sticky-pink border border-black/[0.07] p-4 -rotate-[2.5deg]">
                <Tape rotate="-rotate-[2deg]" width={52} />
                <p className="font-hand text-[16px] text-dc-ink2 leading-[1.5]">
                  ✦ open for
                  <br />
                  new projects
                  <br />
                  let&apos;s talk →
                </p>
              </div>

              {/* Badge */}
              <div className="absolute bottom-[60px] left-4 w-[88px] h-[88px] rounded-full bg-dc-sticky-yellow border-2 border-dc-ink flex items-center justify-center text-center -rotate-[8deg]">
                <span className="font-hand text-[13px] text-dc-ink leading-[1.3]">
                  hand-
                  <br />
                  crafted
                  <br />
                  code ✦
                </span>
              </div>

              {/* Blue sticky */}
              <div className="absolute bottom-[40px] right-8 w-[175px] bg-dc-sticky-blue border border-black/[0.07] p-4 rotate-[2deg]">
                <Tape rotate="-rotate-[1.5deg]" width={52} />
                <p className="font-hand text-[15px] text-dc-ink2 leading-[1.5]">
                  avg response
                  <br />
                  under 24hrs ⚡<br />
                  <span className="font-mono text-[10px] text-dc-ink3">
                    we&apos;re always around
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <TornEdge from="dc-cream" to="dc-ink" />

      {/* ══ VALUES ══════════════════════════════════════════ */}
      <section className="bg-dc-ink py-16 lg:py-20">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-baseline gap-4 mb-12"
          >
            <span
              className="font-serif font-black text-white/[0.05] leading-none select-none shrink-0"
              style={{ fontSize: "clamp(70px, 9vw, 110px)" }}
              aria-hidden
            >
              02
            </span>
            <div>
              <h2
                className="font-serif font-bold text-white/90 leading-tight"
                style={{ fontSize: "clamp(28px, 3.8vw, 44px)" }}
              >
                what we <em className="italic text-dc-red">believe in.</em>
              </h2>
              <p className="font-mono text-[11px] text-white/30 mt-1 tracking-[0.04em]">
                // the principles we actually operate by — not just put on a
                slide
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(({ icon, title, body }, i) => (
              <motion.div
                key={title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/[0.04] border border-white/[0.08] p-6 hover:bg-white/[0.07] transition-colors duration-200"
              >
                <div
                  className="font-mono text-[22px] text-dc-amber mb-4"
                  aria-hidden
                >
                  {icon}
                </div>
                <h3 className="font-serif font-bold text-white/90 text-[17px] mb-3 leading-tight">
                  {title}
                </h3>
                <p className="font-mono text-[11.5px] text-white/45 leading-[1.85]">
                  {body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TornEdge from="dc-ink" to="dc-cream2" flip />

      {/* ══ EXPERTISE ═══════════════════════════════════════ */}
      <section className="bg-dc-cream2 py-16 lg:py-20">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
          <SectionHead
            num="03"
            title={
              <>
                our <em className="italic text-dc-red">expertise.</em>
              </>
            }
            sub="// full-stack digital services — web, mobile, design, AI & more"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 items-start">
            {EXPERTISE.map(({ label, bg, rotate, offset }, i) => (
              <motion.div
                key={label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ rotate: 0, y: -6 }}
                className={`relative ${bg} ${rotate} ${offset} border border-black/[0.07] px-5 py-5 text-center transition-all duration-300 hover:shadow-[3px_4px_0_rgba(0,0,0,0.07)] cursor-default`}
              >
                <Tape
                  rotate={i % 2 === 0 ? "-rotate-2" : "rotate-3"}
                  width={52}
                />
                <span className="font-hand text-[18px] text-dc-ink2 leading-tight">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TornEdge from="dc-cream2" to="dc-cream" />

      {/* ══ WHY US ══════════════════════════════════════════ */}
      <section className="bg-dc-cream py-16 lg:py-20">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
          <SectionHead
            num="04"
            title={
              <>
                why choose <em className="italic text-dc-red">dcoder.</em>
              </>
            }
            sub="// not by accident — every decision is intentional"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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
                    <span className="font-mono text-[13px] text-dc-ink2 leading-[1.8]">
                      {text}
                    </span>
                    <span className="font-mono text-[10px] text-dc-ink3 tracking-[0.1em] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {tag}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* Testimonials */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {TESTIMONIALS.map(({ quote, author, bg, rotate, stars }) => (
                <div
                  key={author}
                  className={`relative ${bg} ${rotate} border border-black/[0.07] p-4 font-hand hover:rotate-0 transition-transform duration-300`}
                >
                  <Tape rotate="-rotate-2" width={52} />
                  {stars && (
                    <p className="text-dc-amber tracking-[2px] text-[13px] mb-1.5">
                      ★★★★★
                    </p>
                  )}
                  <blockquote className="text-[15px] text-dc-ink2 leading-[1.5] mb-2">
                    {quote}
                  </blockquote>
                  <cite className="font-mono text-[10px] text-dc-ink3 not-italic">
                    — {author}
                  </cite>
                </div>
              ))}

              {/* client_feedback.log */}
              <div className="col-span-2 relative bg-dc-ink border border-white/10 px-5 py-4 rotate-[0.5deg] hover:rotate-0 transition-transform duration-300">
                <Tape rotate="rotate-[2deg]" width={60} />
                <p className="font-mono text-[9px] text-dc-amber mb-1.5 tracking-widest">
                  // client_feedback.log
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
            </motion.div>
          </div>
        </div>
      </section>

      <TornEdge from="dc-cream" to="dc-ink" />

      {/* ══ PARTNER CTA ═════════════════════════════════════ */}
      <section className="bg-dc-ink py-20 lg:py-24 relative overflow-hidden">
        <span
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 font-serif font-black text-white/[0.03] select-none pointer-events-none leading-none whitespace-nowrap"
          style={{ fontSize: "clamp(60px, 10vw, 140px)" }}
          aria-hidden
        >
          let&apos;s build
        </span>

        <svg
          className="absolute top-10 right-16 w-14 h-14 opacity-10 pointer-events-none"
          viewBox="0 0 56 56"
          fill="none"
          aria-hidden
        >
          <path
            d="M28,4 L31,22 L48,16 L38,28 L52,36 L34,34 L36,52 L26,40 L10,48 L18,34 L4,24 L22,28 Z"
            fill="white"
          />
        </svg>
        <svg
          className="absolute bottom-12 left-12 w-20 h-10 opacity-10 pointer-events-none"
          viewBox="0 0 80 32"
          fill="none"
          aria-hidden
        >
          <path
            d="M2,16 Q10,2 20,16 Q30,30 40,16 Q50,2 60,16 Q70,30 78,16"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        <div className="max-w-[1500px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 mb-4">
                // ready to start a project?
              </p>
              <h2
                className="font-serif font-black text-white/90 leading-tight mb-5"
                style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
              >
                partner with <em className="italic text-dc-red">dcoder.</em>
              </h2>
              <p className="font-mono text-[13px] text-white/40 leading-[1.9] max-w-md mb-8">
                ready to build a website, app, or digital product that actually
                works? no full brief needed — a quick 15-minute call is all it
                takes to get started.
              </p>

              <div className="flex flex-col gap-3">
                {[
                  {
                    icon: "✉",
                    val: "dcoder.atwork@gmail.com",
                    href: "mailto:dcoder.atwork@gmail.com",
                  },
                  {
                    icon: "📞",
                    val: "+91-8690896522",
                    href: "tel:+918690896522",
                  },
                  { icon: "🌐", val: "Remote — India & Worldwide", href: null },
                ].map(({ icon, val, href }) => (
                  <div key={val} className="flex items-center gap-3">
                    <span className="text-[13px]" aria-hidden>
                      {icon}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className="font-mono text-[12px] text-white/40 hover:text-white/70 transition-colors duration-200"
                      >
                        {val}
                      </a>
                    ) : (
                      <span className="font-mono text-[12px] text-white/40">
                        {val}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 }}
            >
              <div className="relative bg-dc-paper border border-black/[0.08] p-8 -rotate-[1deg] hover:rotate-0 transition-transform duration-300">
                <Tape rotate="-rotate-2" width={80} />
                <svg
                  className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none"
                  viewBox="0 0 48 48"
                  aria-hidden
                >
                  <path d="M48,48 L28,48 L48,28 Z" fill="#f0ebe0" />
                </svg>
                <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-dc-ink3 mb-3">
                  // start your project today
                </p>
                <p className="font-serif font-bold text-dc-ink text-[22px] mb-6 leading-tight">
                  let&apos;s build something
                  <br />
                  <em className="italic text-dc-red">
                    people will actually use.
                  </em>
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="dc-btn-primary w-full justify-center"
                  >
                    → get a free quote
                  </Link>
                  <Link
                    href="/services"
                    className="font-mono text-[11px] font-bold tracking-[0.1em] uppercase border border-dc-ink text-dc-ink px-5 py-3 text-center transition-all duration-200 hover:bg-dc-ink hover:text-dc-cream"
                  >
                    explore our services
                  </Link>
                </div>
                <p className="font-hand text-[16px] text-dc-ink3 mt-5 text-center">
                  free consultation · avg response under 24hrs ⚡
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <TornEdge from="dc-ink" to="dc-cream" flip />
    </>
  );
}
