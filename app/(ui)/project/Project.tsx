"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TornEdge from "@/components/ui/TornEdge";

/* ─────────────────────────────────────────────────────────────
   Types
───────────────────────────────────────────────────────────── */
interface Project {
  title: string;
  category: string;
  images: string[];
  link: string;
  description: string;
  tags: string[];
  num: string;
  containImage?: boolean;
}

/* ─────────────────────────────────────────────────────────────
   Data — SEO optimized
───────────────────────────────────────────────────────────── */
const PROJECTS: Project[] = [
  {
    num: "// 001",
    title: "TaskFlow",
    category: "full-stack · task management",
    images: ["/figma/task1.png", "/figma/task2.png"],
    link: "https://www.indesol.com/",
    tags: ["React", "Node.js", "MongoDB", "TypeScript"],
    description:
      "A role-based task management platform built for teams that need real accountability. Supports multiple roles — Boss, Delegator, Delegatee, and Admin — with smart task assignment, progress tracking, deadline management, and full audit trails. Every task is logged, every handoff is tracked, every status update is recorded in real time.",
  },
  {
    num: "// 002",
    title: "Health.E",
    category: "web development · healthcare",
    images: ["/figma/v1.png", "/figma/v2.png", "/figma/v3.png"],
    link: "https://health-ee.netlify.app/",
    tags: ["React", "Node.js", "MongoDB"],
    description:
      "A full-stack healthcare web platform connecting patients with providers. Built for speed, accessibility, and a friction-free experience — from appointment booking to follow-up care.",
  },
  {
    num: "// 003",
    title: "College Insights",
    category: "data analytics · education",
    images: ["/figma/a1.png", "/figma/a2.png"],
    link: "https://collegeinsights.netlify.app/",
    tags: ["React", "D3.js", "Mapbox"],
    description:
      "A data analytics web app helping students discover and compare colleges. Advanced search, visualised data on tuition and acceptance rates, and an interactive location map.",
  },
  {
    num: "// 004",
    title: "Mind Ease",
    category: "web development · mental wellness",
    images: ["/figma/v21.png", "/figma/v22.png", "/figma/v23.png"],
    link: "https://mindeasee.netlify.app/",
    tags: ["React", "Tailwind", "Firebase"],
    description:
      "A mental wellness web platform helping users manage stress, anxiety, and daily well-being. Includes mindfulness tools, self-care routines, and personalised content — built with React and Firebase.",
  },
  {
    num: "// 005",
    title: "MedRoute",
    category: "full-stack · medicine delivery",
    images: ["/figma/mr1.png", "/figma/mr2.png"],
    link: "https://med-r-c9vd.vercel.app/",
    tags: ["Next.js", "TypeScript", "MongoDB", "Mapbox"],
    description:
      "A full-stack medicine delivery platform built with Next.js 14 and TypeScript. Real-time order tracking, pharmacy dashboards, admin panel, emergency delivery, and an interactive pharmacy locator.",
  },
  {
    num: "// 006",
    title: "TalentEzee",
    category: "full-stack · talent management",
    images: ["/figma/te1.png", "/figma/te2.png", "/figma/te3.png"],
    link: "https://talent-ezee.vercel.app/",
    tags: ["Next.js", "Tailwind", "Stripe"],
    description:
      "A modern talent engagement and influencer marketing platform. Built with Next.js 14 — features campaign management, performance leaderboards, Stripe wallet top-ups, and a raffle reward system.",
  },
];

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
   Tape
───────────────────────────────────────────────────────────── */
const Tape = ({
  rotate = "-rotate-2",
  width = 70,
}: {
  rotate?: string;
  width?: number;
}) => (
  <div
    className={`dc-tape absolute ${rotate}`}
    style={{
      width,
      height: 20,
      top: -11,
      left: "50%",
      transform: "translateX(-50%)",
    }}
    aria-hidden
  />
);

/* ─────────────────────────────────────────────────────────────
   Image rotator
───────────────────────────────────────────────────────────── */
const ImageRotator = ({
  images,
  title,
}: {
  images: string[];
  title: string;
  containImage?: boolean;
}) => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % images.length), 3500);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-video overflow-hidden border border-black/[0.08]">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${title} screenshot ${i + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0"}`}
          priority={i === 0}
        />
      ))}
      {images.length > 1 && (
        <div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5"
          aria-hidden
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-1.5 h-1.5 transition-all duration-200 ${i === idx ? "bg-dc-cream scale-125" : "bg-dc-cream/40"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   Project card
───────────────────────────────────────────────────────────── */
const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const isEven = index % 2 === 0;
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-12 items-center py-10 border-b border-dashed border-black/[0.1] last:border-none"
    >
      {/* Image */}
      <motion.div
        variants={isEven ? fadeLeft : fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`relative ${isEven ? "" : "lg:order-2"}`}
      >
        <div
          className={`${isEven ? "-rotate-[2deg]" : "rotate-[2deg]"} hover:rotate-0 transition-transform duration-300`}
        >
          <Tape rotate={isEven ? "-rotate-[3deg]" : "rotate-[3deg]"} />
          <ImageRotator
            images={project.images}
            title={project.title}
            containImage={project.containImage}
          />
          <p className="font-hand text-[13px] text-dc-ink3 text-center mt-2">
            {project.title} ✦
            <span className="font-mono text-[10px] ml-2">
              {project.category}
            </span>
          </p>
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        variants={isEven ? fadeRight : fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={isEven ? "" : "lg:order-1"}
      >
        <p className="font-mono text-[10px] text-dc-ink3 tracking-[0.14em] mb-2">
          {project.num}
        </p>
        <h2
          className="font-serif font-bold text-dc-ink leading-tight mb-3"
          style={{ fontSize: "clamp(22px, 2.4vw, 32px)" }}
        >
          {project.title}
        </h2>
        <p className="font-mono text-[11px] text-dc-ink2 leading-[1.8] mb-4 max-w-[480px]">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] text-dc-ink3 dc-border-dashed px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="dc-btn-primary inline-flex"
        >
          view live project →
        </Link>
      </motion.div>
    </motion.article>
  );
};

/* ─────────────────────────────────────────────────────────────
   Page component
───────────────────────────────────────────────────────────── */
export default function Project() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-dc-ink border-b-2 border-dc-amber pt-10 pb-14 relative overflow-hidden">
        <span
          className="absolute -bottom-4 right-6 font-serif font-black text-white/[0.03] select-none pointer-events-none leading-none"
          style={{ fontSize: "clamp(60px, 10vw, 130px)" }}
          aria-hidden
        >
          projects
        </span>
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 mb-2">
            {"// our work · web apps · mobile apps · ui/ux"}
          </p>
          <h1
            className="font-serif font-black text-white/90 leading-tight mb-3"
            style={{ fontSize: "clamp(28px, 4.5vw, 58px)" }}
          >
            web &amp; app development{" "}
            <em className="italic text-dc-red">portfolio.</em>
          </h1>
          <p className="font-mono text-[11px] text-white/35 max-w-lg leading-[1.8]">
            real products, shipped into the world — from healthcare platforms
            and data analytics tools to talent tech and delivery apps. no
            mockups, no fakes.
          </p>
        </div>
      </section>

      <TornEdge from="dc-ink" to="dc-cream" flip />

      {/* ── Project list ──────────────────────────────────── */}
      <section className="max-w-[1500px] mx-auto px-6 lg:px-12 py-6 lg:py-10">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </section>

      <TornEdge from="dc-cream" to="dc-cream2" />

      {/* ── Bottom CTA ────────────────────────────────────── */}
      <section className="bg-dc-cream2 py-10 text-center">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
          <p className="font-mono text-[11px] text-dc-ink3 mb-3 tracking-[0.1em] opacity-60">
            {"// have a project in mind? let's talk"}
          </p>
          <h2
            className="font-serif font-bold text-dc-ink mb-5"
            style={{ fontSize: "clamp(20px, 2.8vw, 32px)" }}
          >
            ready to build your next{" "}
            <em className="italic text-dc-red">digital product?</em>
          </h2>
          <Link href="/contact" className="dc-btn-primary inline-flex mx-auto">
            get a free quote →
          </Link>
        </div>
      </section>

      <TornEdge from="dc-cream2" to="dc-cream" />
    </>
  );
}
