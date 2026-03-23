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
        <div className="max-w-[1300px] mx-auto px-5 lg:px-10 h-[46px] flex items-center justify-between">        
          {/* Logo */}
          <Link
            href="/home"
            onClick={close}
            className="inline-flex items-center"
          >
            <Image
              src="/figma/dcode.png"
              alt="Dcoder — Digital Studio India"
              width={200}
              height={50}
              priority
              className="h-9 w-auto object-contain" 
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-5">
        
            {NAV_LINKS.map(({ name, href }) => {
              const isActive =
                pathname === href || pathname?.startsWith(href.split("#")[0]);
              return (
                <li key={name}>
                  <Link
                    href={href}
                    className={`font-mono text-[11px] tracking-[0.1em] uppercase transition-colors duration-200 ${
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
            <Link
              href="/contact"
              className="dc-btn-hire text-[10px] px-3 py-1.5"
            >
              ✦ hire us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="md:hidden text-white p-1 transition-colors hover:text-dc-amber"
          >
            {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
     
          </button>
        </div>
      </nav>

      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            className="fixed inset-0 z-40 bg-dc-ink flex flex-col justify-center px-8"
     
          >
            <span
              className="absolute top-6 right-8 font-serif font-black text-white/[0.03] select-none pointer-events-none"
              style={{
                fontSize: "clamp(60px, 16vw, 120px)",
              }}
              aria-hidden
            >
              menu
            </span>

            <ul className="flex flex-col gap-1.5">
              {NAV_LINKS.map(({ name, href }) => (
                <motion.li key={name} variants={itemVariants}>
                  <Link
                    href={href}
                    onClick={close}
                    className="font-serif font-black italic text-white/80 hover:text-white transition-colors duration-200 block py-1.5 border-b border-white/[0.06]"
                    style={{
                      fontSize: "clamp(26px, 7vw, 42px)",
                    }} 
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
              className="absolute bottom-8 left-8 right-8 flex items-center justify-between"
           
            >
              <Link
                href="/contact"
                onClick={close}
                className="dc-btn-hire text-[10px]"
              >
                ✦ hire us
              </Link>
              <span className="font-mono text-[9px] text-white/20 tracking-widest">
                © 2026 dcoder
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
