'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

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
      <div
        className={`flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 rounded-xl shadow-md transition-all duration-500 ${slides[currentIndex].bgColor}`}
      >
        {/* Text Content */}
        <div className="w-full sm:w-1/2 text-center sm:text-left space-y-4 sm:space-y-6 mb-6 sm:mb-0">
          <h3 className="text-lg sm:text-2xl font-bold">{slides[currentIndex].title}</h3>
          <p className="text-sm sm:text-base text-gray-600">{slides[currentIndex].description}</p>
        </div>

        {/* Image Content */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <div className="w-64 sm:w-80 md:w-96 lg:w-[400px] h-56 sm:h-64 md:h-80 lg:h-96 relative rounded-md overflow-hidden shadow-md">
            <Image
              src={slides[currentIndex].image}
              alt={`${slides[currentIndex].title} image`}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>

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
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all ${
              currentIndex === index ? 'bg-blue-500 scale-125' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
