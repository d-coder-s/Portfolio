"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ServiceDetail } from "@/lib/servicesData";
import TornEdge from "@/components/ui/TornEdge";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", delay: i * 0.08 },
  }),
};
const fadeLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};
const fadeRight = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: 0.1 },
  },
};

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
      height: 17,
      top: -9,
      left: "50%",
      transform: "translateX(-50%)",
    }}
    aria-hidden
  />
);

const PaperPin = ({
  color = "#c0392b",
  className = "",
}: {
  color?: string;
  className?: string;
}) => (
  <svg
    width="18"
    height="24"
    viewBox="0 0 20 28"
    fill="none"
    className={`absolute pointer-events-none z-10 ${className}`}
    aria-hidden
  >
    <circle cx="10" cy="8" r="7" fill={color} />
    <circle cx="10" cy="8" r="3.5" fill="rgba(255,255,255,0.3)" />
    <line
      x1="10"
      y1="14"
      x2="10"
      y2="28"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const FaqItem = ({
  q,
  a,
  accent,
}: {
  q: string;
  a: string;
  accent: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-dashed border-black/[0.12]">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-mono text-[12px] font-bold text-dc-ink leading-[1.6]">
          {q}
        </span>
        <div
          className="w-6 h-6 flex items-center justify-center shrink-0 text-white font-light text-lg leading-none transition-transform duration-300"
          style={{
            background: accent,
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
          aria-hidden
        >
          +
        </div>
      </button>
      <div
        className={`font-mono text-[11px] text-dc-ink3 leading-[1.9] overflow-hidden transition-all duration-300 ${open ? "max-h-48 pb-4" : "max-h-0"}`}
      >
        {a}
      </div>
    </div>
  );
};

const STEP_BG = [
  "bg-dc-sticky-yellow",
  "bg-dc-paper",
  "bg-dc-sticky-pink",
  "bg-dc-paper",
  "bg-dc-sticky-mint",
];
const STEP_ROTATE = [
  "-rotate-[1.5deg]",
  "rotate-[1deg]",
  "-rotate-[1deg]",
  "rotate-[1.5deg]",
  "-rotate-[0.8deg]",
];
const STEP_OFFSET = ["mt-4", "mt-0", "mt-6", "mt-2", "mt-8"];

/* ─────────────────────────────────────────────────────────────
   Main component
───────────────────────────────────────────────────────────── */
export default function ServiceDetailClient({
  service,
}: {
  service: ServiceDetail;
}) {
  return (
    <>
      {/* ══ HERO ════════════════════════════════════════════ */}
      <section className="bg-dc-ink relative overflow-hidden border-b-2 border-dc-amber">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden
        />
        <span
          className="absolute -bottom-4 right-0 font-serif font-black text-white/[0.03] select-none pointer-events-none leading-none"
          style={{ fontSize: "clamp(50px, 9vw, 120px)" }}
          aria-hidden
        >
          {service.title}
        </span>

        <div className="max-w-[1500px] mx-auto px-6 lg:px-12 pt-10 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="pb-10"
            >
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 font-mono text-[10px] text-white/30 mb-4"
              >
                <Link
                  href="/services"
                  className="hover:text-white/60 transition-colors duration-200"
                >
                  services
                </Link>
                <span aria-hidden>/</span>
                <span className="text-white/55">
                  {service.title.toLowerCase()}
                </span>
              </nav>

              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/30 mb-2">
                {service.heroLabel}
              </p>
              <h1
                className="font-serif font-black text-white/90 leading-tight mb-4"
                style={{ fontSize: "clamp(28px, 4.5vw, 58px)" }}
              >
                {service.title}.<br />
                <em className="italic text-dc-red">{service.tagline}</em>
              </h1>
              <p className="font-mono text-[11px] text-white/45 max-w-lg leading-[1.8] mb-6">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] border px-2.5 py-1 text-white/50"
                    style={{ borderColor: `${service.accent}55` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2.5 flex-wrap">
                <Link href="/contact" className="dc-btn-primary">
                  → get a free quote
                </Link>
                <Link
                  href="/project"
                  className="font-mono text-[10px] font-bold tracking-[0.1em] uppercase border border-white/20 text-white/50 px-4 py-2.5 hover:border-white/40 hover:text-white transition-all duration-200"
                >
                  view our portfolio
                </Link>
              </div>
            </motion.div>

            {/* Right — polaroid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="relative self-end hidden lg:block"
            >
              <div className="relative bg-dc-paper p-3 pb-10 -rotate-[1.5deg] hover:rotate-0 transition-transform duration-300">
                <Tape rotate="-rotate-2" width={80} />
                <PaperPin color={service.accent} className="-top-3 left-6" />
                <PaperPin color={service.accent} className="-top-3 right-6" />
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.imgSrc}
                    alt={`${service.title} services India — Dcoder Digital Studio`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 0px, 50vw"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ background: service.accent }}
                    aria-hidden
                  />
                </div>
                <p className="font-hand text-[15px] text-dc-ink3 text-center mt-3">
                  {service.title} ✦
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <TornEdge from="dc-ink" to="dc-cream" flip />

      {/* ══ OVERVIEW + HIGHLIGHTS ═══════════════════════════ */}
      <section className="bg-dc-cream py-12 lg:py-16">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 items-start">
            {/* Sidebar */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:sticky lg:top-24 flex flex-col gap-3"
            >
              <div className="relative bg-dc-sticky-yellow border border-black/[0.08] px-4 py-4 -rotate-[1.5deg]">
                <Tape rotate="rotate-2" width={52} />
                <p className="font-mono text-[10px] text-dc-ink3 tracking-[0.12em] uppercase mb-1">
                  {"// service overview"}
                </p>
                <p className="font-serif font-bold text-dc-ink text-[17px] leading-tight">
                  {service.title}
                </p>
              </div>
              <p
                className="font-serif font-black leading-none select-none opacity-10 mt-1"
                style={{
                  fontSize: "clamp(64px, 8vw, 110px)",
                  color: service.accent,
                }}
                aria-hidden
              >
                {service.num}
              </p>
            </motion.div>

            {/* Main content */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p
                className="font-mono text-[10px] tracking-[0.16em] uppercase mb-2"
                style={{ color: service.accent }}
              >
                {"// what we deliver"}
              </p>
              <h2
                className="font-serif font-bold text-dc-ink leading-tight mb-5"
                style={{ fontSize: "clamp(22px, 2.5vw, 34px)" }}
              >
                why hire us for{" "}
                <em className="italic" style={{ color: service.accent }}>
                  {service.title}
                </em>
                ?
              </h2>
              <p
                className="font-mono text-[12px] text-dc-ink2 leading-[2] mb-8 border-l-4 pl-4"
                style={{ borderColor: service.accent }}
              >
                {service.overview}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.highlights.map(
                  ({ icon, title, body, featured }, i) => {
                    if (featured) {
                      return (
                        <motion.div
                          key={title}
                          custom={i}
                          variants={fadeUp}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="sm:col-span-2 relative bg-dc-ink border-2 p-6 overflow-hidden"
                          style={{ borderColor: service.accent }}
                        >
                          <Tape rotate="-rotate-2" width={65} />
                          <div
                            className="absolute top-0 right-0 w-28 h-28 opacity-10 pointer-events-none"
                            style={{
                              background: `radial-gradient(circle at top right, ${service.accent}, transparent)`,
                            }}
                            aria-hidden
                          />
                          <div className="flex items-center gap-3 mb-3 flex-wrap">
                            <span
                              className="font-mono text-[10px] font-bold tracking-[0.16em] uppercase px-2.5 py-1 text-dc-ink"
                              style={{ background: service.accent }}
                            >
                              ✦ now available
                            </span>
                            <span className="font-mono text-[10px] text-white/30 tracking-[0.12em] uppercase">
                              {"// hands-on training & workshops"}
                            </span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                            <div
                              className="w-14 h-14 flex items-center justify-center text-[28px] shrink-0 border border-white/10"
                              style={{ background: `${service.accent}20` }}
                              aria-hidden
                            >
                              {icon}
                            </div>
                            <div className="flex-1">
                              <h3
                                className="font-serif font-black text-white leading-tight mb-2"
                                style={{ fontSize: "clamp(16px, 1.8vw, 21px)" }}
                              >
                                {title}
                              </h3>
                              <p className="font-mono text-[11px] text-white/60 leading-[1.9] mb-4 max-w-2xl">
                                We offer structured online training programmes
                                covering{" "}
                                <span
                                  className="font-bold px-1.5 py-0.5 text-dc-ink"
                                  style={{ background: service.accent }}
                                >
                                  Google Analytics 4
                                </span>{" "}
                                and{" "}
                                <span
                                  className="font-bold px-1.5 py-0.5 text-dc-ink"
                                  style={{ background: service.accent }}
                                >
                                  Adobe Analytics
                                </span>{" "}
                                — from fundamentals to advanced custom reporting
                                and dashboards. Live sessions with recorded
                                access. Available for marketing, product, and
                                data teams of 2 to 50+.
                              </p>
                              <div className="flex flex-wrap gap-2.5 items-center">
                                <Link
                                  href="/contact"
                                  className="font-mono text-[10px] font-bold tracking-[0.1em] uppercase text-dc-ink px-4 py-2 transition-opacity duration-200 hover:opacity-85"
                                  style={{ background: service.accent }}
                                >
                                  → enquire about training
                                </Link>
                                {[
                                  "online",
                                  "live sessions",
                                  "recorded access",
                                  "teams of 2–50+",
                                ].map((tag) => (
                                  <span
                                    key={tag}
                                    className="font-mono text-[10px] text-white/40 border border-white/15 px-2.5 py-1"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    }

                    return (
                      <motion.div
                        key={title}
                        custom={i}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative bg-dc-paper border border-black/[0.07] p-4"
                      >
                        <div
                          className="absolute top-0 left-4 right-4 h-[2.5px]"
                          style={{ background: service.accent }}
                          aria-hidden
                        />
                        <div
                          className="w-9 h-9 flex items-center justify-center text-[18px] mb-2.5 border border-black/[0.07]"
                          style={{ background: `${service.accent}18` }}
                          aria-hidden
                        >
                          {icon}
                        </div>
                        <h3 className="font-serif font-bold text-dc-ink text-[14px] mb-1.5">
                          {title}
                        </h3>
                        <p className="font-mono text-[11px] text-dc-ink3 leading-[1.8]">
                          {body}
                        </p>
                      </motion.div>
                    );
                  },
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <TornEdge from="dc-cream" to="dc-cream2" />

      {/* ══ APPROACH ════════════════════════════════════════ */}
      <section className="bg-dc-cream2 py-12 lg:py-16">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-9"
          >
            <p
              className="font-mono text-[10px] tracking-[0.16em] uppercase mb-2"
              style={{ color: service.accent }}
            >
              {"// our development process"}
            </p>
            <h2
              className="font-serif font-bold text-dc-ink leading-tight"
              style={{ fontSize: "clamp(22px, 2.8vw, 36px)" }}
            >
              how we <em className="italic text-dc-red">deliver.</em>
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-4 items-start">
            {service.approach.map(({ step, title, desc }, i) => (
              <motion.div
                key={step}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative ${STEP_BG[i]} border border-black/[0.07] p-5 flex-1 ${STEP_ROTATE[i]} ${STEP_OFFSET[i]} hover:rotate-0 transition-transform duration-300`}
              >
                <Tape
                  rotate={i % 2 === 0 ? "-rotate-2" : "rotate-2"}
                  width={48}
                />
                <PaperPin color={service.accent} className="-top-3 right-5" />
                <span
                  className="font-serif font-black text-[42px] leading-none opacity-10 block mb-1.5"
                  style={{ color: service.accent }}
                  aria-hidden
                >
                  {step}
                </span>
                <h3 className="font-serif font-bold italic text-dc-ink text-[15px] mb-1.5">
                  {title}
                </h3>
                <p className="font-mono text-[11px] text-dc-ink3 leading-[1.8]">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TornEdge from="dc-cream2" to="dc-ink" />

      {/* ══ TECH STACK ══════════════════════════════════════ */}
      <section className="bg-dc-ink py-12 lg:py-16">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-white/30 mb-2">
              {"// technologies & tools we use"}
            </p>
            <h2
              className="font-serif font-bold text-white/90 leading-tight"
              style={{ fontSize: "clamp(22px, 2.8vw, 36px)" }}
            >
              our <em className="italic text-dc-red">tech stack.</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.stack.map(({ category, items }, i) => (
              <motion.div
                key={category}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/[0.04] border border-white/[0.08] p-4"
              >
                <div
                  className="h-[3px] w-full mb-3"
                  style={{ background: service.accent }}
                  aria-hidden
                />
                <p
                  className="font-mono text-[10px] tracking-[0.14em] uppercase mb-2.5"
                  style={{ color: service.accent }}
                >
                  {category}
                </p>
                <ul className="flex flex-col gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 font-mono text-[11px] text-white/65"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: service.accent }}
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TornEdge from="dc-ink" to="dc-cream" flip />

      {/* ══ FAQ ═════════════════════════════════════════════ */}
      <section className="bg-dc-cream py-12 lg:py-16">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 items-start">
            <div className="lg:sticky lg:top-24 flex flex-col gap-5">
              <div>
                <p
                  className="font-mono text-[10px] tracking-[0.16em] uppercase mb-2"
                  style={{ color: service.accent }}
                >
                  {"// frequently asked questions"}
                </p>
                <h2
                  className="font-serif font-bold text-dc-ink leading-tight"
                  style={{ fontSize: "clamp(20px, 2.5vw, 32px)" }}
                >
                  common <em className="italic text-dc-red">questions.</em>
                </h2>
              </div>

              <div
                className={`relative ${service.stickyBg} border border-black/[0.07] p-4 -rotate-[1.5deg] max-w-[200px]`}
              >
                <Tape rotate="rotate-2" width={52} />
                <p className="font-hand text-[15px] text-dc-ink2 leading-[1.5] whitespace-pre-line font-bold">
                  {service.stickyText}
                </p>
                <p className="font-mono text-[10px] text-dc-ink3 mt-1.5">
                  — dcoder
                </p>
              </div>

              <div className="border-t border-dashed border-black/[0.12] pt-5">
                <p className="font-mono text-[11px] text-dc-ink3 mb-3 leading-[1.8]">
                  still have questions? we&apos;re happy to walk through your
                  specific requirements — no commitment needed.
                </p>
                <Link href="/contact" className="dc-btn-primary inline-flex">
                  → get a free consultation
                </Link>
              </div>
            </div>

            <div className="border-t border-dashed border-black/[0.12]">
              {service.faqs.map(({ q, a }) => (
                <FaqItem key={q} q={q} a={a} accent={service.accent} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <TornEdge from="dc-cream" to="dc-yellow-light" />

      {/* ══ BOTTOM CTA ══════════════════════════════════════ */}
      <section
        className="py-14 text-center relative overflow-hidden"
        style={{ background: "#faf8dc" }}
      >
        <span
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 font-serif font-black select-none pointer-events-none leading-none text-center"
          style={{
            fontSize: "clamp(80px, 15vw, 190px)",
            color: "rgba(0,0,0,0.05)",
          }}
          aria-hidden
        >
          {service.num}
        </span>

        <svg
          className="absolute top-10 right-16 w-12 h-12 opacity-15 pointer-events-none"
          viewBox="0 0 56 56"
          fill="none"
          aria-hidden
        >
          <path
            d="M28,4 L31,22 L48,16 L38,28 L52,36 L34,34 L36,52 L26,40 L10,48 L18,34 L4,24 L22,28 Z"
            fill="#1a1208"
          />
        </svg>
        <svg
          className="absolute bottom-12 left-12 w-16 h-8 opacity-15 pointer-events-none"
          viewBox="0 0 80 32"
          fill="none"
          aria-hidden
        >
          <path
            d="M2,16 Q10,2 20,16 Q30,30 40,16 Q50,2 60,16 Q70,30 78,16"
            stroke="#1a1208"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        <div className="max-w-[1500px] mx-auto px-6 lg:px-12 relative z-10">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-dc-ink2 opacity-50 mb-3">
            {"// ready to hire a "}
            {service.title.toLowerCase()}
            {" agency in India?"}
          </p>
          <h2
            className="font-serif font-black text-dc-ink leading-tight mb-5"
            style={{ fontSize: "clamp(28px, 4.5vw, 62px)" }}
          >
            let&apos;s build something{" "}
            <em className="italic text-dc-red">that delivers.</em>
          </h2>
          <p className="font-mono text-[11px] text-dc-ink2 opacity-60 mb-8 max-w-lg mx-auto leading-[1.8]">
            no long briefs needed. just drop us a message — we&apos;ll scope it,
            price it, and get started fast.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link
              href="/contact"
              className="dc-btn-primary px-8 py-3.5 text-[12px]"
            >
              → get a free quote
            </Link>
            <Link
              href="/services"
              className="font-mono text-[11px] font-bold tracking-[0.1em] uppercase border-2 border-dc-ink text-dc-ink px-7 py-3.5 transition-all duration-200 hover:bg-dc-ink hover:text-dc-cream"
            >
              ← all services
            </Link>
          </div>

          {/* Other services */}
          <div className="border-t border-dc-ink/[0.12] pt-6">
            <p className="font-mono text-[10px] text-dc-ink2 opacity-40 tracking-[0.14em] uppercase mb-3">
              {"// explore our other services"}
            </p>
            <div className="flex flex-wrap gap-1.5 justify-center">
              {[
                { slug: "web-development", label: "web development" },
                { slug: "app-development", label: "app development" },
                { slug: "ui-ux-design", label: "ui/ux design" },
                { slug: "ai-ml-solutions", label: "ai / ml solutions" },
                { slug: "game-development", label: "game development" },
                { slug: "digital-analytics", label: "digital analytics" },
                { slug: "digital-marketing", label: "digital marketing" },
              ]
                .filter((s) => s.slug !== service.slug)
                .map(({ slug, label }) => (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    className="font-mono text-[10px] border border-dc-ink/20 text-dc-ink2 px-3.5 py-1 opacity-60 transition-all duration-200 hover:opacity-100 hover:border-dc-ink"
                  >
                    {label}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
