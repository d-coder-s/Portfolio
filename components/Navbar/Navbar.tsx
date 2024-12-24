import React from 'react';
import Link from 'next/link'; // Next.js Link component

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-semibold">
          <Link href="/">Logo</Link> {/* Replace with your logo */}
        </div>
        <div className="space-x-4">
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
      </div>
    </nav>
  );
};

export default Navbar;
