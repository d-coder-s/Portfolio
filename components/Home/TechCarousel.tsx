"use client";

import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaJava,
  FaAws,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiFirebase,
  SiVercel,
  SiPostgresql,
  SiFlutter,
  SiRedux,
  SiGraphql,
  SiAdobe,
  SiGoogleanalytics,
} from "react-icons/si";

const ROW_1 = [
  { name: "React", Icon: FaReact, color: "#61DAFB", bg: "#e8f9ff" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#000000", bg: "#f0f0f0" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6", bg: "#e8f0ff" },
  {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
    color: "#06B6D4",
    bg: "#e8f9ff",
  },
  { name: "Node.js", Icon: FaNodeJs, color: "#339933", bg: "#e8f5e8" },
  { name: "Python", Icon: FaPython, color: "#3776AB", bg: "#e8f0ff" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248", bg: "#e8f5e8" },
  { name: "AWS", Icon: FaAws, color: "#FF9900", bg: "#fff5e8" },
  { name: "Flutter", Icon: SiFlutter, color: "#02569B", bg: "#e8f0ff" },
  { name: "Redux", Icon: SiRedux, color: "#764ABC", bg: "#f0e8ff" },
  { name: "Adobe XD", Icon: SiAdobe, color: "#FF61F6", bg: "#ffe8ff" },
  {
    name: "G. Analytics",
    Icon: SiGoogleanalytics,
    color: "#E37400",
    bg: "#fff3e8",
  },
] as const;

const ROW_2 = [
  { name: "JavaScript", Icon: FaJs, color: "#F7DF1E", bg: "#fffde8" },
  { name: "HTML5", Icon: FaHtml5, color: "#E34F26", bg: "#ffe8e8" },
  { name: "CSS3", Icon: FaCss3Alt, color: "#1572B6", bg: "#e8f0ff" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28", bg: "#fffde8" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791", bg: "#e8f0ff" },
  { name: "Java", Icon: FaJava, color: "#007396", bg: "#e8f5ff" },
  { name: "Vercel", Icon: SiVercel, color: "#000000", bg: "#f0f0f0" },
  { name: "Figma", Icon: FaFigma, color: "#F24E1E", bg: "#ffe8e8" },
  { name: "Git", Icon: FaGitAlt, color: "#F05032", bg: "#ffe8e8" },
  { name: "GraphQL", Icon: SiGraphql, color: "#E10098", bg: "#ffe8f5" },
] as const;

const LOOP_1 = [...ROW_1, ...ROW_1];
const LOOP_2 = [...ROW_2, ...ROW_2];
const ROTATIONS = [-2.5, 1.8, -1.2, 2.2, -1.8, 1.2, -2, 1.5, -0.8, 2.5];

type Tech = {
  name: string;
  Icon: React.ElementType;
  color: string;
  bg: string;
};

function Sticker({ tech, index }: { tech: Tech; index: number }) {
  const [hovered, setHovered] = useState(false);
  const rot = ROTATIONS[index % ROTATIONS.length];

  return (
    <div
      className="relative shrink-0 cursor-default select-none"
      style={{ width: 76 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="flex flex-col items-center gap-1.5 py-3 px-2 border border-black/[0.1] transition-all duration-300"
        style={{
          background: tech.bg,
          transform: hovered
            ? "rotate(0deg) translateY(-5px) scale(1.07)"
            : `rotate(${rot}deg)`,
          boxShadow: hovered
            ? `4px 6px 0 rgba(0,0,0,0.15), 0 0 0 2px ${tech.color}40`
            : "2px 3px 0 rgba(0,0,0,0.1)",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
        }}
      >
        {index % 4 === 0 && (
          <div
            className="dc-tape absolute -rotate-1"
            style={{
              width: 36,
              height: 11,
              top: -6,
              left: "50%",
              transform: "translateX(-50%) rotate(-1deg)",
            }}
            aria-hidden
          />
        )}
        <tech.Icon style={{ color: tech.color, fontSize: 22 }} aria-hidden />{" "}
        <div
          className="w-1 h-1 rounded-full"
          style={{ background: tech.color, opacity: 0.6 }}
          aria-hidden
        />
        <span className="font-mono text-[8px] font-bold text-dc-ink tracking-wide text-center leading-tight whitespace-nowrap">
          {tech.name}
        </span>
      </div>
    </div>
  );
}

const TechCarousel: React.FC = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section className="bg-dc-cream2 py-10 lg:py-14 relative overflow-hidden">
      {/* ── Header ── */}
      <div className="max-w-[1300px] mx-auto px-5 lg:px-10 mb-7">
        <div className="flex items-end justify-between flex-wrap gap-3">
          <div className="flex items-baseline gap-3">
            <span
              className="font-serif font-black text-black/[0.04] leading-none select-none"
              style={{
                fontSize: "clamp(38px, 5vw, 60px)",
              }}
              aria-hidden
            >
              04
            </span>
            <div>
              <p className="font-mono text-[9px] text-dc-red tracking-[0.15em] uppercase mb-1">
                {"// react · next.js · node.js · flutter · python · aws"}
              </p>
              <h2
                className="font-serif font-bold text-dc-ink leading-tight"
                style={{
                  fontSize: "clamp(18px, 2.4vw, 28px)",
                }}
              >
                technologies we{" "}
                <em className="italic text-dc-red">actually use.</em>
              </h2>
              <p className="font-mono text-[10px] text-dc-ink3 mt-1 tracking-[0.04em]">
                {"// the tools powering our web & app development projects."}
              </p>
            </div>
          </div>

          {/* Sticky note */}
          <div
            className="bg-dc-sticky-yellow border border-black/10 px-3 py-2.5 max-w-[160px] hidden md:block"
            style={{
              transform: "rotate(-1.5deg)",
              boxShadow: "2px 3px 0 rgba(0,0,0,0.08)",
            }}
          >
            <p className="font-hand text-[13px] text-dc-ink leading-snug">
              always learning,
              <br />
              always shipping ✦
            </p>
          </div>
        </div>
      </div>

      {/* ── Row 1 ── */}
      <div
        className="relative w-full mb-3 py-3"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-dc-cream2 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-dc-cream2 to-transparent pointer-events-none z-10" />
        <div
          className="flex gap-3 w-max"
          style={{
            animation: "scroll-left 32s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {LOOP_1.map((tech, i) => (
            <Sticker key={`r1-${i}`} tech={tech} index={i} />
          ))}
        </div>
      </div>

      {/* ── Row 2 ── */}
      <div
        className="relative w-full py-3"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-dc-cream2 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-dc-cream2 to-transparent pointer-events-none z-10" />
        <div
          className="flex gap-3 w-max"
          style={{
            animation: "scroll-right 28s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {LOOP_2.map((tech, i) => (
            <Sticker key={`r2-${i}`} tech={tech} index={i} />
          ))}
        </div>
      </div>

      {/* ── Footer line ── */}
      <div className="max-w-[1300px] mx-auto px-5 lg:px-10 mt-7">
        <div className="border-t border-dashed border-black/10 pt-4 flex items-center justify-between flex-wrap gap-2">
          <p className="font-hand text-[15px] text-dc-ink3">
            + more tools added to our stack every sprint ✦
          </p>
          <p className="font-mono text-[9px] text-dc-ink3 tracking-[0.1em] uppercase">
            {"// always learning · always building"}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left  { from { transform: translateX(0);    } to { transform: translateX(-50%); } }
        @keyframes scroll-right { from { transform: translateX(-50%); } to { transform: translateX(0);    } }
      `}</style>
    </section>
  );
};

export default TechCarousel;
