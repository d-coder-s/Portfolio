'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for menu toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-semibold">
          <Link href="/">Dcoder</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link href="/home" className="text-white hover:text-gray-300 transition duration-300">
            Home
          </Link>
          <Link href="/services" className="text-white hover:text-gray-300 transition duration-300">
            Services
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300 transition duration-300">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300 transition duration-300">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-4 bg-gray-700 rounded-lg">
          <Link href="/home" className="block text-white hover:text-gray-300 transition duration-300">
            Home
          </Link>
          <Link href="/services" className="block text-white hover:text-gray-300 transition duration-300">
            Services
          </Link>
          <Link href="/about" className="block text-white hover:text-gray-300 transition duration-300">
            About
          </Link>
          <Link href="/contact" className="block text-white hover:text-gray-300 transition duration-300">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
