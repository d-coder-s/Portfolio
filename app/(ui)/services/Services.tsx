"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TornEdge from "@/components/ui/TornEdge";
import SERVICES_DATA from "@/lib/servicesData";

/* ─────────────────────────────────────────────────────────────
   Animation variants
───────────────────────────────────────────────────────────── */
const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};
const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: 0.1 },
  },
};


/* ─────────────────────────────────────────────────────────────
   Tape strip
───────────────────────────────────────────────────────────── */
const Tape = ({
  rotate = "-rotate-2",
  width = 65,
}: {
  rotate?: string;
  width?: number;
}) => (
  <div
    className={`dc-tape absolute ${rotate}`}
    style={{
      width,
      height: 19,
      top: -10,
      left: "50%",
      transform: "translateX(-50%)",
    }}
    aria-hidden
  />
);

/* ─────────────────────────────────────────────────────────────
   Service Row — alternating layout
───────────────────────────────────────────────────────────── */
const ServiceRow = ({
  service,
  index,
}: {
  service: (typeof SERVICES_DATA)[number];
  index: number;
}) => {
  const [expanded, setExpanded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`
        grid grid-cols-1 lg:grid-cols-2 gap-0
        border-b-2 border-dashed border-black/[0.1] last:border-none
        ${isEven ? "bg-dc-cream" : "bg-dc-cream2"}
      `}
    >
      {/* ── Image side ─────────────────────────────── */}
      <motion.div
        variants={isEven ? fadeLeft : fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`relative overflow-hidden ${isEven ? "" : "lg:order-2"}`}
        style={{ minHeight: 380 }}
      >
        <Image
          src={service.imgSrc}
          alt={`${service.title} services — Dcoder India`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 hover:scale-105"
        />

        {/* Big number overlay */}
        <span
          className="absolute top-4 left-6 font-serif font-black text-white/20 leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(80px, 12vw, 140px)" }}
          aria-hidden
        >
          {service.num}
        </span>

        {/* Accent bottom bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ background: service.accent }}
          aria-hidden
        />

        {/* Sticky note on image */}
        <div
          className={`
            absolute top-6 right-6
            ${service.stickyBg}
            border border-black/[0.08] px-4 py-3
            rotate-[2.5deg]
          `}
        >
          <Tape rotate="-rotate-[2deg]" width={52} />
          <p className="font-hand text-[16px] text-dc-ink2 leading-[1.5] whitespace-pre-line">
            {service.stickyText}
          </p>
        </div>
      </motion.div>

      {/* ── Text side ──────────────────────────────── */}
      <motion.div
        variants={isEven ? fadeRight : fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`flex flex-col justify-center px-10 lg:px-14 py-14 ${isEven ? "" : "lg:order-1"}`}
      >
        {/* Number + tagline */}
    
        <div className="flex items-center gap-4 mb-5 flex-wrap">
          <span className="font-mono text-[11px] tracking-[0.18em] text-dc-ink3 uppercase">
            {"// "}
            {service.num}
          </span>
          <span className="font-hand text-[17px] px-3 py-0.5 border border-dashed border-black/20 text-dc-ink3">
            {service.tagline}
          </span>
        </div>

        {/* Title — links to detail page */}
        <Link href={`/services/${service.slug}`}>
          <h2
            className="font-serif font-black text-dc-ink leading-tight mb-4 hover:underline underline-offset-4 cursor-pointer"
            style={{
              fontSize: "clamp(32px, 3.5vw, 52px)",
              textDecorationColor: service.accent,
            }}
          >
            {service.title}
          </h2>
        </Link>

        {/* Accent underline */}
        <div
          className="h-[3px] w-16 mb-6"
          style={{ background: service.accent }}
          aria-hidden
        />

        {/* Description */}
        <p className="font-mono text-[13px] text-dc-ink2 leading-[2] mb-2 max-w-[500px]">
          {expanded
            ? service.description
            : `${service.description.slice(0, 140)}...`}
          <button
            onClick={() => setExpanded((v) => !v)}
            className="ml-2 font-bold underline underline-offset-3 cursor-pointer"
            style={{ color: service.accent }}
          >
            {expanded ? "read less" : "read more"}
          </button>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-5 mb-8">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] text-dc-ink3 dc-border-dashed px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex gap-3 flex-wrap">
          {/* Learn more → detail page */}
          <Link
            href={`/services/${service.slug}`}
            className="
              font-mono text-[11px] font-bold tracking-[0.1em] uppercase
              text-white px-5 py-3
              border-l-2 border-dc-amber
              transition-all duration-200
              hover:opacity-85
            "
            style={{ background: service.accent }}
          >
            learn more →
          </Link>

          {/* Get a quote */}
          <Link
            href="/contact"
            className="
              font-mono text-[11px] font-bold tracking-[0.1em] uppercase
              border border-dc-ink text-dc-ink px-5 py-3
              transition-all duration-200
              hover:bg-dc-ink hover:text-dc-cream
            "
          >
            get a quote
          </Link>
        </div>
      </motion.div>
    </motion.article>
  );
};

/* ─────────────────────────────────────────────────────────────
   Page component
───────────────────────────────────────────────────────────── */
const Services: React.FC = () => {
  return (
    <>
      {/* ── Page hero ─────────────────────────────────────── */}
      <section className="bg-dc-ink border-b-2 border-dc-amber pt-16 pb-20 relative overflow-hidden">
        <span
          className="absolute -bottom-4 right-6 font-serif font-black text-white/[0.03] select-none pointer-events-none leading-none"
          style={{ fontSize: "clamp(80px, 14vw, 180px)" }}
          aria-hidden
        >
          services
        </span>

        <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
         
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 mb-3">
              {"// what we offer"}
            </p>
            <h1
              className="font-serif font-black text-white/90 leading-tight mb-5"
              style={{ fontSize: "clamp(36px, 6vw, 76px)" }}
            >
              digital services{" "}
              <em className="italic text-dc-red">that deliver.</em>
            </h1>
            <p className="font-mono text-[13px] text-white/40 max-w-xl leading-[1.9] mb-10">
              strategic, innovative solutions built around your unique business
              needs — web development, app development, ai/ml, data analytics
              &amp; more.
            </p>

            {/* Quick-jump pills */}
            <div className="flex flex-wrap gap-2">
              {SERVICES_DATA.map((s) => (
                <a
                  key={s.num}
                  href={`#service-${s.num}`}
                  className="
                    font-mono text-[11px] tracking-wide
                    border border-white/15 text-white/40
                    px-4 py-1.5
                    transition-all duration-200
                    hover:border-white/40 hover:text-white/80
                  "
                >
                  {s.title}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <TornEdge from="dc-ink" to="dc-cream" flip />

      {/* ── Service rows ──────────────────────────────────── */}
      <section aria-label="Our Services">
        {SERVICES_DATA.map((svc, i) => (
          <div key={svc.slug} id={`service-${svc.num}`}>
            <ServiceRow service={svc} index={i} />
          </div>
        ))}
      </section>

      {/* ── CTA strip ─────────────────────────────────────── */}
      <TornEdge from="dc-cream2" to="dc-cream" />

      <section
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{ background: "#f0ebe0" }}
      >
        {/* Watermark */}
        <span
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-serif font-black select-none pointer-events-none leading-none whitespace-nowrap"
          style={{
            fontSize: "clamp(60px, 12vw, 160px)",
            color: "rgba(0,0,0,0.05)",
          }}
          aria-hidden
        >
          let&apos;s build
        </span>

        {/* Doodles */}
        <svg
          className="absolute top-10 right-16 w-14 h-14 opacity-15 pointer-events-none"
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
          className="absolute bottom-12 left-12 w-20 h-10 opacity-15 pointer-events-none"
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
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-mono text-[11px] tracking-[0.22em] uppercase text-dc-ink2 mb-6 text-center opacity-50"
          >
            {"// not sure which service you need?"}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-serif font-black text-dc-ink leading-[0.95] text-center mb-12"
            style={{ fontSize: "clamp(48px, 8vw, 110px)" }}
          >
            let&apos;s figure
            <br />
            it out <em className="italic text-dc-red">together.</em>
          </motion.h2>

          {/* 3 sticky notes */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-5 mb-14"
          >
            {[
              {
                bg: "bg-dc-sticky-yellow",
                rotate: "-rotate-[2deg]",
                text: "no brief\nneeded ✦",
                sub: "a voice note works",
              },
              {
                bg: "bg-dc-sticky-pink",
                rotate: "rotate-[2.5deg]",
                text: "15-min call\nis enough →",
                sub: "we scope it for you",
              },
              {
                bg: "bg-dc-sticky-mint",
                rotate: "-rotate-[1.5deg]",
                text: "honest\nquote. fast.",
                sub: "no hidden fees",
              },
            ].map(({ bg, rotate, text, sub }) => (
              <div
                key={text}
                className={`relative ${bg} ${rotate} border border-black/[0.07] px-6 py-5 min-w-[160px]`}
              >
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
                <p className="font-hand text-[20px] text-dc-ink leading-[1.4] whitespace-pre-line font-bold mb-1">
                  {text}
                </p>
                <p className="font-mono text-[10px] text-dc-ink3">{sub}</p>
              </div>
            ))}
          </motion.div>

          {/* Buttons + contact */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="dc-btn-primary text-[14px] px-10 py-4 justify-center"
              >
                → start a conversation
              </Link>
              <Link
                href="/project"
                className="
                  font-mono text-[12px] font-bold tracking-[0.1em] uppercase
                  border-2 border-dc-ink text-dc-ink
                  px-10 py-4 text-center
                  transition-all duration-200
                  hover:bg-dc-ink hover:text-dc-cream
                "
              >
                see our work
              </Link>
            </div>

            <div className="flex items-center gap-6 flex-wrap justify-center">
              <a
                href="mailto:dcoder.atwork@gmail.com"
                className="font-mono text-[11px] text-dc-ink2 opacity-60 hover:opacity-100 transition-opacity duration-200"
              >
                ✉ dcoder.atwork@gmail.com
              </a>
              <span className="text-dc-ink opacity-20">·</span>
              <a
                href="tel:+918690896522"
                className="font-mono text-[11px] text-dc-ink2 opacity-60 hover:opacity-100 transition-opacity duration-200"
              >
                📞 +91-8690896522
              </a>
              <span className="text-dc-ink opacity-20">·</span>
              <span className="font-mono text-[11px] text-dc-ink2 opacity-40">
                avg response: 24h ⚡
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <TornEdge from="dc-cream" to="dc-ink" />
    </>
  );
};

export default Services;
