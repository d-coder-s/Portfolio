"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-dc-ink flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Ghost watermark */}
      <span
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-serif font-black text-white/[0.03] select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(120px, 30vw, 320px)" }}
        aria-hidden
      >
        404
      </span>

      {/* Doodle — star */}
      <svg
        className="absolute top-12 right-16 w-12 h-12 opacity-10 pointer-events-none"
        viewBox="0 0 56 56"
        fill="none"
        aria-hidden
      >
        <path
          d="M28,4 L31,22 L48,16 L38,28 L52,36 L34,34 L36,52 L26,40 L10,48 L18,34 L4,24 L22,28 Z"
          fill="white"
        />
      </svg>

      {/* Doodle — squiggle */}
      <svg
        className="absolute bottom-16 left-12 w-20 h-10 opacity-10 pointer-events-none"
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

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center max-w-lg"
      >
        {/* Tape */}
        <div
          className="dc-tape -rotate-2 relative mb-8"
          style={{ width: 80, height: 20 }}
          aria-hidden
        />

        {/* Paper card */}
        <div
          className="relative bg-dc-paper border border-black/[0.08] px-10 py-12 -rotate-[0.5deg]"
          style={{ boxShadow: "6px 8px 0 rgba(0,0,0,0.15)" }}
        >
          {/* Torn corner */}
          <svg
            className="absolute bottom-0 right-0 w-10 h-10 pointer-events-none"
            viewBox="0 0 40 40"
            aria-hidden
          >
            <path d="M40,40 L22,40 L40,22 Z" fill="#e8e3d8" />
          </svg>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-[11px] tracking-[0.2em] uppercase text-dc-ink3 mb-3"
          >
            // error 404 · page not found
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="font-serif font-black text-dc-ink leading-tight mb-3"
            style={{ fontSize: "clamp(36px, 6vw, 56px)" }}
          >
            lost in the <em className="italic text-dc-red">void.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="font-mono text-[13px] text-dc-ink3 leading-[1.9] mb-8"
          >
            the page you&apos;re looking for doesn&apos;t exist — it may have
            moved, been deleted, or never existed in the first place.
          </motion.p>

          {/* Sticky note */}
          <div
            className="inline-block bg-dc-sticky-yellow border border-black/[0.07] px-4 py-3 rotate-[1.5deg] mb-8 relative"
            style={{ boxShadow: "2px 3px 0 rgba(0,0,0,0.08)" }}
          >
            <p className="font-hand text-[17px] text-dc-ink2 leading-snug">
              but hey, we&apos;re still here ✦
            </p>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              href="/home"
              className="group relative font-mono text-[12px] font-bold uppercase tracking-[0.15em] bg-dc-ink text-dc-cream px-8 py-3 overflow-hidden"
            >
              <span className="absolute inset-0 bg-dc-red translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative">← back to home</span>
            </Link>
            <Link
              href="/contact"
              className="font-mono text-[12px] font-bold uppercase tracking-[0.15em] border-2 border-dc-ink text-dc-ink px-8 py-3 transition-all duration-200 hover:bg-dc-ink hover:text-dc-cream"
            >
              contact us
            </Link>
          </motion.div>
        </div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-3 justify-center mt-8"
        >
          {[
            { href: "/services", label: "services" },
            { href: "/project", label: "projects" },
            { href: "/about", label: "about us" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-mono text-[11px] text-white/40 border border-white/15 px-4 py-1.5 transition-all duration-200 hover:text-white hover:border-white/40"
            >
              {label}
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
