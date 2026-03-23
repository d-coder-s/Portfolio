"use client";

import React from "react";
import { motion } from "framer-motion";

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

const OFFSETS = ["mt-5", "mt-0", "mt-3", "mt-6"] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", delay: i * 0.1 },
  }),
};

const Developmentprocess: React.FC = () => {
  return (
    <section className="bg-dc-cream2 py-12 lg:py-16 overflow-hidden">
  
      <div className="max-w-[1300px] mx-auto px-5 lg:px-10">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-9 text-center" 
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-dc-ink3 mb-2">
            {"// our development process"}
          </p>
          <h2
            className="font-serif font-black italic text-dc-ink"
            style={{
              fontSize: "clamp(24px, 3.2vw, 38px)",
            }} 
          >
            Simple. Transparent. Fast.
          </h2>
        </motion.div>

        {/* ── Steps row ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 items-start">
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
              {/* Dashed connector */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden lg:block absolute top-6 left-[calc(100%+4px)] w-[calc(100%-8px)] border-t-2 border-dashed border-black/20 pointer-events-none"
                  aria-hidden
                />
              )}

              {/* Tape */}
              <div
                className="dc-tape absolute -rotate-2"
                style={{
                  width: 50,
                  height: 14,
                  top: -7,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
                aria-hidden
              />

              {/* Card */}
              <div
                className={`${style.bg} ${style.text} border border-black/[0.08] p-4 flex flex-col gap-2.5`}
              >
       
                <div
                  className={`w-9 h-9 rounded-full border-[2px] ${style.circle} flex items-center justify-center font-serif font-black text-base shrink-0`}
                  
                >
                  {num}
                </div>

                <h3
                  className="font-serif font-bold italic leading-tight"
                  style={{
                    fontSize: "clamp(13px, 1.2vw, 16px)",
                  }} 
                >
                  {title}
                </h3>

                <p
                  className={`font-mono leading-[1.8] ${style.bg === "bg-dc-ink" ? "text-white/60" : "text-dc-ink3"}`}
                  style={{
                    fontSize: "clamp(10px, 0.8vw, 11px)",
                  }}
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
