'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  const navLinks = [
    { name: 'Home', href: '/home' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isOpen ? 'bg-transparent border-transparent shadow-none' : 'bg-gray-900/80 backdrop-blur-md border-b border-gray-800 shadow-lg'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 z-50 relative">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-gray-700/50 rounded-full flex justify-center items-center backdrop-blur-sm border border-white/10">
                <Image
                  src="/figma/logo.png"
                  alt="Logo"
                  width={60}
                  height={60}
                  priority
                  className="object-contain"
                />
              </div>
              <div className="text-white text-2xl font-bold tracking-tight">Dcoder</div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white hover:text-blue-400 font-medium transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-50 relative">
            <button
              onClick={toggleMenu}
              className="text-white text-2xl focus:outline-none p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-black/40 backdrop-blur-3xl z-40 flex flex-col justify-center items-center"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="flex flex-col space-y-8 text-center relative z-10">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <Link
                    href={link.href}
                    className="text-4xl font-bold text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 inline-block"
                    onClick={toggleMenu}
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-white hover:from-blue-400 hover:to-purple-500">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="absolute bottom-12 text-gray-500 text-sm"
            >
              © 2024 Dcoder. All rights reserved.
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
