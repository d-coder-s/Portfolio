"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const RECEIPT_ITEMS = [
  { label: "Web Dev", checked: true },
  { label: "App Dev", checked: true },
  { label: "Analytics", checked: true },
  { label: "Good vibes", checked: true },
] as const;

const Tape = ({ rotate = "-rotate-2" }: { rotate?: string }) => (
  <div
    className={`dc-tape absolute ${rotate}`}
    style={{
      width: 60,
      height: 16,
      top: -8,
      left: "50%",
      transform: "translateX(-50%)",
    }}
    aria-hidden
  />
);

const HeroSection: React.FC = () => {
  return (
    <section className="max-w-[1300px] mx-auto px-5 lg:px-10 py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative overflow-hidden">
      {/* ── LEFT ─────────────────────────────────────────── */}
      <div>
        {/* EST badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 border-[1.5px] border-dc-ink px-3 py-1 font-mono text-[10px] tracking-[0.18em] uppercase text-dc-ink2 mb-5">
            EST. 2024 &nbsp;·&nbsp; independent studio
            <span className="text-[7px] opacity-50">✦</span>
          </div>
        </motion.div>

        {/* Headline */}
        <div className="mb-5 leading-none">
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="block font-serif italic font-bold text-dc-red mb-1"
            style={{ fontSize: "clamp(11px, 1.1vw, 14px)" }}
          >
            <span style={{ color: "#f97316" }}>&lt;/</span>
            <span className="text-black">Dcoder</span>
            <span style={{ color: "#f97316" }}>&gt;</span>
            <span className="text-dc-red">
              {" "}
              — India&apos;s independent digital studio.
            </span>
          </motion.span>

          <motion.span
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="block font-serif font-black text-dc-ink"
            style={{ fontSize: "clamp(32px, 4.2vw, 58px)", lineHeight: 0.92 }}
          >
            your{" "}
            <span className="relative inline-block">
              digital
              <motion.svg
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.85, ease: "easeOut" }}
                style={{ originX: 0 }}
                className="absolute -bottom-1 left-0 w-full pointer-events-none"
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2,7 Q30,2 60,7 Q90,12 120,6 Q150,2 180,7 Q190,8 198,6"
                  stroke="#c8860a"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </motion.span>

          <motion.span
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.44 }}
            className="block font-serif font-black text-dc-ink"
            style={{ fontSize: "clamp(32px, 4.2vw, 58px)", lineHeight: 0.92 }}
          >
            future,
          </motion.span>

          <motion.span
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.56 }}
            className="block font-serif font-black italic text-dc-red"
            style={{ fontSize: "clamp(32px, 4.2vw, 58px)", lineHeight: 0.92 }}
          >
            built right.
          </motion.span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="font-mono text-[11px] text-dc-ink3 leading-[2] mb-7 max-w-[400px]"
        >
          {"// custom web development & mobile apps"}
          <br />
          {"// ai/ml solutions & data analytics"}
          <br />
          {"// web"}&nbsp;·&nbsp;{"apps"}&nbsp;·&nbsp;{"data"}&nbsp;·&nbsp;
          {"design"}
          <br />
          {"// real work. honest timelines. zero fluff."}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="flex items-center gap-5 flex-wrap"
        >
          <Link href="/contact" className="dc-btn-primary">
            → let&apos;s build together
          </Link>
          <Link
            href="/project"
            className="font-hand text-base text-dc-ink3 flex items-center gap-1 hover:text-dc-ink transition-colors duration-200"
          >
            see our work <span className="text-dc-red">→</span>
          </Link>
        </motion.div>
      </div>

      {/* ── RIGHT: 3-row collage ─────────────────────────── */}
      <div className="hidden lg:flex flex-col gap-3" aria-hidden>
        {/* ── ROW 1 ─────────────────────────────────────── */}
        <div className="flex gap-3 items-end">
          {/* Receipt */}
          <motion.div
            initial={{ opacity: 0, y: -30, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="relative bg-dc-paper border border-black/[0.09] p-3 w-[155px] shrink-0"
          >
            <Tape rotate="-rotate-2" />
            <p className="font-mono text-[9px] font-bold text-dc-ink pb-1.5 mb-1.5 border-b border-black/10 tracking-wide">
              STUDIO_RECEIPT.txt
            </p>
            {RECEIPT_ITEMS.map(({ label, checked }) => (
              <div
                key={label}
                className="flex items-baseline gap-1 font-mono text-[9px] text-dc-ink2 my-1"
              >
                <span className="shrink-0">{label}</span>
                <span className="flex-1 border-b border-dotted border-black/20 mb-[2px]" />
                <span className="text-dc-red font-bold shrink-0">
                  {checked ? "✓" : "○"}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Currently open — yellow */}
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 2.5 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="relative bg-dc-sticky-yellow border border-black/[0.07] p-3 w-[130px]"
          >
            <Tape rotate="rotate-[3deg]" />
            <p className="font-hand text-[13px] text-dc-ink2 leading-[1.5]">
              <span className="font-bold">✦ Currently open</span>
              <br />
              taking 2 new
              <br />
              projects for Q2 &apos;25
            </p>
          </motion.div>

          {/* Git commit */}
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: 3 }}
            animate={{ opacity: 1, y: 0, rotate: -1.5 }}
            transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
            className="relative bg-dc-ink border border-white/10 p-3 w-[140px]"
          >
            <Tape rotate="-rotate-[2deg]" />
            <p className="font-mono text-[8px] text-dc-amber mb-1.5 tracking-widest">
              $ git log
            </p>
            <div className="space-y-1">
              {[
                { hash: "a3f9c2", msg: "feat: launch v2" },
                { hash: "b7e1d4", msg: "fix: zero bugs" },
                { hash: "c2a8f1", msg: "chore: ship it" },
              ].map(({ hash, msg }) => (
                <p key={hash} className="font-mono text-[8px] leading-[1.6]">
                  <span className="text-yellow-400">{hash}</span>
                  <span className="text-white/50"> {msg}</span>
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── ROW 2 ─────────────────────────────────────── */}
        <div className="flex gap-3 items-start ml-5">
          {/* dcoder.config.js */}
          <motion.div
            initial={{ opacity: 0, x: -20, rotate: -2 }}
            animate={{ opacity: 1, x: 0, rotate: 1.5 }}
            transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
            className="relative bg-dc-ink border border-white/10 p-3 w-[170px] shrink-0"
          >
            <Tape rotate="rotate-[2deg]" />
            <p className="font-mono text-[8px] text-dc-amber mb-2 tracking-wide">
              {"// dcoder.config.js"}
            </p>
            <p className="font-mono text-[8px] text-white/70 leading-[1.9]">
              <span className="text-green-400">const</span> studio = {"{"}
              <br />
              &nbsp;&nbsp;vibes:{" "}
              <span className="text-yellow-300">&apos;immaculate&apos;</span>,
              <br />
              &nbsp;&nbsp;bugs: <span className="text-blue-300">0</span>,
              <br />
              &nbsp;&nbsp;coffee: <span className="text-red-400">Infinity</span>
              ,
              <br />
              &nbsp;&nbsp;ships: <span className="text-green-300">true</span>
              <br />
              {"}"}
            </p>
          </motion.div>

          {/* 5+ count — pink */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{
              duration: 0.5,
              delay: 0.65,
              type: "spring",
              stiffness: 200,
            }}
            className="relative bg-dc-sticky-pink border border-black/[0.07] px-3 py-3 w-[120px]"
          >
            <Tape rotate="-rotate-[2deg]" />
            <p className="font-serif font-black text-[30px] text-dc-ink leading-none">
              5+
            </p>
            <p className="font-mono text-[9px] text-dc-ink3 mt-1 leading-[1.6]">
              live projects
              <br />
              shipped ✦
            </p>
          </motion.div>

          {/* Tech tags — sand */}
          <motion.div
            initial={{ opacity: 0, x: 20, rotate: 0 }}
            animate={{ opacity: 1, x: 0, rotate: 2 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            className="relative bg-dc-sticky-sand border border-black/[0.07] p-3 w-[135px]"
          >
            <Tape rotate="rotate-[3deg]" />
            <p className="font-mono text-[8px] text-dc-ink3 tracking-[0.1em] uppercase mb-2">
              {"// stack"}
            </p>
            <div className="flex flex-wrap gap-1">
              {["Next.js", "React", "Node", "Python", "MongoDB", "Flutter"].map(
                (t) => (
                  <span
                    key={t}
                    className="font-mono text-[8px] font-bold text-dc-ink2 border border-dashed border-black/25 px-1 py-0.5"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </motion.div>
        </div>

        {/* ── ROW 3 ─────────────────────────────────────── */}
        <div className="flex gap-3 items-center ml-2">
          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: -1.5 }}
            transition={{ duration: 0.6, delay: 0.75, ease: "easeOut" }}
            className="relative bg-[#0d1117] border border-white/10 p-3 w-[185px] shrink-0"
          >
            <Tape rotate="-rotate-[1.5deg]" />
            <div className="flex gap-1 mb-2">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
              <span className="w-2 h-2 rounded-full bg-green-500/80" />
            </div>
            <p className="font-mono text-[8px] leading-[2]">
              <span className="text-green-400">dcoder@studio</span>
              <span className="text-white/40">:~$</span>
              <span className="text-white/80"> npm run build</span>
              <br />
              <span className="text-green-400">✓</span>
              <span className="text-white/50"> compiled in 1.2s</span>
              <br />
              <span className="text-green-400">✓</span>
              <span className="text-white/50"> 0 errors found</span>
              <br />
              <span className="text-dc-amber">→</span>
              <span className="text-white/50"> ready to ship 🚀</span>
            </p>
          </motion.div>

          {/* Fun fact — blue */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 3 }}
            transition={{ duration: 0.6, delay: 0.85, ease: "easeOut" }}
            className="relative bg-dc-sticky-blue border border-black/[0.07] p-3 w-[125px]"
          >
            <Tape rotate="rotate-[2deg]" />
            <p className="font-hand text-[13px] text-dc-ink2 leading-[1.5]">
              Fun fact 📊
              <br />
              avg client
              <br />
              retention:
              <br />
              2+ years. not bad,
              <span className="font-mono text-[8px] text-dc-ink3 block mt-1">
                — our proudest stat
              </span>
            </p>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: -8 }}
            transition={{
              duration: 0.6,
              delay: 0.9,
              type: "spring",
              stiffness: 180,
            }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-[72px] h-[72px] rounded-full bg-dc-sticky-yellow border-2 border-dc-ink flex items-center justify-center text-center">
              <span className="font-hand text-[12px] text-dc-ink leading-[1.3]">
                hand-
                <br />
                crafted
                <br />
                code ✦
              </span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.05 }}
              className="bg-dc-ink text-dc-cream font-mono text-[9px] font-bold tracking-[0.14em] px-2.5 py-1.5 rotate-[1deg]"
            >
              OPEN FOR WORK
            </motion.div>
          </motion.div>
        </div>

        {/* Doodles */}
        <svg
          className="absolute bottom-8 left-[220px] w-10 h-6 opacity-10 pointer-events-none"
          viewBox="0 0 56 24"
          fill="none"
        >
          <path
            d="M2,12 Q8,2 14,12 Q20,22 26,12 Q32,2 38,12 Q44,22 50,12 Q53,7 55,12"
            stroke="#1a1208"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="absolute top-4 right-4 w-6 h-6 opacity-10 pointer-events-none"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M16,2 L18,12 L28,8 L22,16 L30,22 L20,20 L20,30 L14,22 L4,26 L10,18 L2,12 L12,14 Z"
            fill="#1a1208"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
