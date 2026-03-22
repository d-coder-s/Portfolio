"use client";

import React from "react";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   Process steps data — SEO optimized
───────────────────────────────────────────────────────────── */
const STEPS = [
  {
    num: "1",
    title: "You reach out",
    description:
      "Share your idea — no formal brief needed. A rough outline or voice note is enough to get started.",
    style: {
      bg: "bg-dc-ink",
      text: "text-dc-cream",
      circle: "bg-dc-ink border-dc-ink text-dc-cream",
    },
  },
  {
    num: "2",
    title: "We scope & quote",
    description:
      "Clear deliverables, honest pricing, realistic timeline. No hidden costs, no surprise 'phase 2' invoices.",
    style: {
      bg: "bg-dc-sticky-yellow",
      text: "text-dc-ink",
      circle: "bg-dc-sticky-yellow border-dc-ink text-dc-ink",
    },
  },
  {
    num: "3",
    title: "We design & build",
    description:
      "Weekly progress updates, async-friendly communication, and real developers responding to your messages.",
    style: {
      bg: "bg-dc-ink",
      text: "text-dc-cream",
      circle: "bg-dc-ink border-dc-ink text-dc-cream",
    },
  },
  {
    num: "4",
    title: "You launch & grow",
    description:
      "Clean handoff with full documentation. We stick around post-launch for support, fixes, and future updates.",
    style: {
      bg: "bg-dc-sticky-yellow",
      text: "text-dc-ink",
      circle: "bg-dc-sticky-yellow border-dc-ink text-dc-ink",
    },
  },
] as const;

/* ─────────────────────────────────────────────────────────────
   Vertical offsets
───────────────────────────────────────────────────────────── */
const OFFSETS = ["mt-6", "mt-0", "mt-4", "mt-8"] as const;

/* ─────────────────────────────────────────────────────────────
   Animation variants
───────────────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", delay: i * 0.1 },
  }),
};

/* ─────────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────────── */
const Developmentprocess: React.FC = () => {
  return (
    <section className="bg-dc-cream2 py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        {/* ── Section header ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
  
          <p className="font-mono text-[13px] tracking-[0.2em] uppercase text-dc-ink3 mb-3">
            {"// our development process"}
          </p>
          <h2
            className="font-serif font-black italic text-dc-ink"
            style={{ fontSize: "clamp(38px, 5vw, 60px)" }}
          >
            Simple. Transparent. Fast.
          </h2>
        </motion.div>

        {/* ── Steps row ─────────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-start">
          {STEPS.map(({ num, title, description, style }, i) => (
            <motion.div
              key={num}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative ${OFFSETS[i]}`}
            >
              {/* Dashed connector line */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden lg:block absolute top-7 left-[calc(100%+4px)] w-[calc(100%-8px)] border-t-2 border-dashed border-black/20 pointer-events-none"
                  aria-hidden
                />
              )}

              {/* Tape */}
              <div
                className="dc-tape absolute -rotate-2"
                style={{
                  width: 60,
                  height: 18,
                  top: -9,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
                aria-hidden
              />

              {/* Card */}
              <div
                className={`
                  ${style.bg} ${style.text}
                  border border-black/[0.08]
                  p-5 lg:p-6
                  flex flex-col gap-3
                `}
              >
                <div
                  className={`
                    w-12 h-12 rounded-full border-[2.5px]
                    ${style.circle}
                    flex items-center justify-center
                    font-serif font-black text-xl
                    shrink-0
                  `}
                >
                  {num}
                </div>

                <h3
                  className="font-serif font-bold italic leading-tight"
                  style={{ fontSize: "clamp(17px, 1.6vw, 20px)" }}
                >
                  {title}
                </h3>

                <p
                  className={`font-mono leading-[1.9] ${
                    style.bg === "bg-dc-ink" ? "text-white/60" : "text-dc-ink3"
                  }`}
                  style={{ fontSize: "clamp(12px, 1vw, 13px)" }}
                >
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Developmentprocess;
