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
    image: '/figma/web.webp',
    bgColor: 'bg-gray-100'
  },
  {
    title: 'E-Commerce Development',
    description: 'Empower your business with tailored web solutions designed to excel.',
    image: '/figma/ecommerce.webp',
    bgColor: 'bg-blue-200'
  }
];

const PortfolioSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reusable function to update slide index
  const updateSlide = useCallback((step: number) => {
    setCurrentIndex((prev) => (prev + step + slides.length) % slides.length);
  }, []);

  const prevSlide = useCallback(() => updateSlide(-1), [updateSlide]);
  const nextSlide = useCallback(() => updateSlide(1), [updateSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full max-w-4xl mx-auto p-6">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-6">
        Comprehensive Web Development Solutions
      </h2>

      {/* Slide Content */}
      <div
        className={`flex flex-col md:flex-row items-center justify-center p-6 rounded-lg transition-all duration-500 ${slides[currentIndex].bgColor}`}
      >
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold">{slides[currentIndex].title}</h3>
          <p className="text-sm text-gray-600 mt-2">
            {slides[currentIndex].description}
          </p>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={slides[currentIndex].image}
            alt={`${slides[currentIndex].title} image`}
            className="w-3/4 md:w-full rounded-md shadow-md object-cover"
            width={400}
            height={300}
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition-all"
        >
          ◀️
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition-all"
        >
          ▶️
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              currentIndex === index ? 'bg-blue-500 scale-125' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
