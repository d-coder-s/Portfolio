"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "home", href: "/home" },
  { name: "services", href: "/services" },
  { name: "our work", href: "/project" },
  { name: "about", href: "/about" },
  { name: "contact", href: "/contact" },
] as const;

const overlayVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: { type: "spring", stiffness: 400, damping: 40 },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.07,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, x: 40 },
  open: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setIsOpen(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-dc-ink border-b-2 border-dc-amber">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12 h-[58px] flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/home"
            onClick={close}
            className="inline-flex items-center"
          >
            <div className="inline-flex items-center">
              <Image
                src="/figma/dcode.png"
                alt="Dcoder — Digital Studio India"
                width={200}
                height={50}
                priority
                className="h-12 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ name, href }) => {
              const isActive =
                pathname === href || pathname?.startsWith(href.split("#")[0]);
              return (
                <li key={name}>
                  <Link
                    href={href}
                    className={`font-mono text-[13px] tracking-[0.1em] uppercase transition-colors duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white/90"
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Hire us CTA */}
          <div className="hidden md:block">
            <Link href="/contact" className="dc-btn-hire text-[12px] px-4 py-2">
              ✦ hire us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="md:hidden text-white p-1.5 transition-colors hover:text-dc-amber"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            className="fixed inset-0 z-40 bg-dc-ink flex flex-col justify-center px-10"
          >
            <span
              className="absolute top-6 right-8 font-serif font-black text-white/[0.03] select-none pointer-events-none"
              style={{ fontSize: "clamp(80px,20vw,160px)" }}
              aria-hidden
            >
              menu
            </span>

            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map(({ name, href }) => (
                <motion.li key={name} variants={itemVariants}>
                  <Link
                    href={href}
                    onClick={close}
                    className="font-serif font-black italic text-white/80 hover:text-white transition-colors duration-200 block py-2 border-b border-white/[0.06]"
                    style={{ fontSize: "clamp(32px, 8vw, 52px)" }}
                  >
                    {name}
                    <span className="text-dc-red ml-2 not-italic text-[0.5em] align-middle">
                      →
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              variants={itemVariants}
              className="absolute bottom-10 left-10 right-10 flex items-center justify-between"
            >
              <Link
                href="/contact"
                onClick={close}
                className="dc-btn-hire text-[11px]"
              >
                ✦ hire us
              </Link>
              <span className="font-mono text-[10px] text-white/20 tracking-widest">
                © 2025 dcoder
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
