'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Slide {
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

const slides: Slide[] = [
  {
    title: 'Custom Website Development',
    description: 'Empower your business with tailored web solutions designed to excel.',
    image: '/figma/cdd.png',
    bgColor: 'bg-gray-100',
  },
  {
    title: 'E-Commerce Development',
    description: 'Boost your online sales with seamless e-commerce experiences.',
    image: '/figma/eco.png',
    bgColor: 'bg-blue-200',
  },
  {
    title: 'App Development',
    description: 'Build high-performance mobile applications for seamless user experiences.',
    image: '/figma/app.png',
    bgColor: 'bg-purple-200',
  },
  {
    title: 'AI/ML Application Development',
    description: 'Empower your business with AI/ML-driven intelligent applications and automation.',
    image: '/figma/aiml.png',
    bgColor: 'bg-green-200',
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting intuitive and visually appealing user experiences for maximum engagement.',
    image: '/figma/ui.png',
    bgColor: 'bg-purple-200',
  },
  {
    title: 'Data Science ',
    description: 'Leveraging data-driven insights to optimize business strategies and fuel growth.',
    image: '/figma/da.png',
    bgColor: 'bg-blue-200',
  },
  {
    title: 'Game Developer',
    description: 'Providing expert guidance to optimize strategies and drive game development success.',
    image: '/figma/gd.png',
    bgColor: 'bg-green-200',
  },
];

const PortfolioSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slide Navigation
  const updateSlide = useCallback((step: number) => {
    setCurrentIndex((prev) => (prev + step + slides.length) % slides.length);
  }, []);

  const prevSlide = useCallback(() => updateSlide(-1), [updateSlide]);
  const nextSlide = useCallback(() => updateSlide(1), [updateSlide]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Auto Slide Change
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
      {/* Section Title */}
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
        Your Partner in Digital Transformation and Innovation
      </h2>

      {/* Slide Container */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        className={`flex flex-col sm:flex-row items-center justify-between p-8 sm:p-12 rounded-3xl shadow-xl transition-all duration-500 bg-white/10 backdrop-blur-md border border-gray-200 relative overflow-hidden`}
      >
        {/* Background Color Blob */}
        <div className={`absolute inset-0 opacity-20 ${slides[currentIndex].bgColor} -z-10`} />

        {/* Text Content */}
        <div className="w-full sm:w-1/2 text-center sm:text-left space-y-6 mb-8 sm:mb-0 relative z-10">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">{slides[currentIndex].title}</h3>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{slides[currentIndex].description}</p>
          <button className="px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-black transition-colors shadow-lg">
            Learn More
          </button>
        </div>

        {/* Image Content */}
        <div className="w-full sm:w-1/2 flex justify-center relative z-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-full max-w-[450px] aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <Image
              src={slides[currentIndex].image}
              alt={`${slides[currentIndex].title} image`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              priority
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="p-2 sm:p-3 bg-gray-300 rounded-full hover:bg-gray-400 transition-all"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="p-2 sm:p-3 bg-gray-300 rounded-full hover:bg-gray-400 transition-all"
        >
          ▶
        </button>

      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all ${currentIndex === index ? 'bg-blue-500 scale-125' : 'bg-gray-300'
              }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
