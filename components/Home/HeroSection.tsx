'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Content Data
const slides = [
  {
    image: '/figma/TheLook.webp',
    title: 'Make Your Mark in the Digital World',
    description: 'We create stunning websites that drive results and enhance your digital footprint.',
  },
  {
    image: '/figma/web4.webp',
    title: 'Innovative Apps for Modern Businesses',
    description: 'Deliver high-performance mobile applications that offer exceptional user experiences',
  },
  {
    image: '/figma/Nissa.webp',
    title: 'Smarter Solutions with AI-Powered Precision',
    description: 'Integrate intelligent AI/ML-driven tools to automate processes and improve efficiency',
  },
  {
    image: '/figma/webd.webp',
    title: 'Designing Experiences, Not Just Interfaces',
    description: 'Create intuitive, user-friendly designs that captivate and engage your audience.',
  },
  {
    image: '/figma/webd2.webp',
    title: 'Transform Data into Actionable Insights',
    description: 'Unlock the power of data to drive informed business strategies and measurable growth.',
  },

];

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setIsTransitioning(false);
      }, 500); // Transition duration matches CSS
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 lg:py-20 relative">
      {/* Background Gradient Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center lg:text-left"
        >
          {/* Title with Gradient Text */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              {slides[currentIndex].title}
            </span>
          </h1>

          {/* Description */}
          <motion.p
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-600 text-lg sm:text-xl md:text-2xl dark:text-gray-300 font-light"
          >
            {slides[currentIndex].description}
          </motion.p>

          {/* Button Section */}
          <div className='mt-8'>
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-8 md:py-4 md:px-10 rounded-full font-semibold text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Get Started
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Image Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-64 sm:h-72 md:h-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800"
        >
          <div
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${isTransitioning ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
              }`}
          >
            <Image
              key={currentIndex}
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              fill
              className="object-cover rounded-2xl"
            />
            {/* Gradient Overlay for Text Readability if needed, though separate here */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Lower Static Section */}

    </section>
  );
};

export default HeroSection;
