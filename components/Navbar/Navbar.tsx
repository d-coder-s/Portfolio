'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi'; 
import Image from 'next/image'; // Icons for menu toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with text */}
          <div className="flex items-center space-x-3">
            <div className="w-14 h-14 bg-gray-700 rounded-full flex justify-center items-center">
              <Link href="/">
                <Image
                  src="/figma/lo.png"
                  alt="Logo"
                  width={60}
                  height={60}
                  priority
                  className="object-contain"
                />
              </Link>
            </div>
            <div className="text-white text-2xl font-bold">Dcoder</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
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
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="flex flex-col space-y-4 py-4 px-6">
          <Link
            href="/home"
            className="block text-white hover:text-gray-300 transition duration-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="block text-white hover:text-gray-300 transition duration-300"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            href="/about"
            className="block text-white hover:text-gray-300 transition duration-300"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block text-white hover:text-gray-300 transition duration-300"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
