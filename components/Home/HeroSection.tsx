'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
  {
    image: '/figma/webd3.webp',
    title: 'Visionary Guidance for Continued Growth',
    description: 'Expert consultancy services to optimize operations and accelerate business outcomes.',
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
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 text-center lg:text-left">
  {/* Title */}
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
    {slides[currentIndex].title}
  </h1>

  {/* Description */}
  <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl dark:text-gray-400">
    {slides[currentIndex].description}
  </p>

  {/* Button Section */}
  <div className='mt-3'>
            <Link href="/services">
              <button className="bg-blue-500 text-white py-2 px-4 md:py-3 md:px-6 rounded-lg hover:bg-blue-600 transition duration-300">
                Get Started
              </button>
            </Link>
          </div>
</div>

        {/* Image Carousel */}
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:h-[500px] overflow-hidden rounded-xl shadow-lg">
          <div
            className={`absolute inset-0 transition-transform duration-500 ${
              isTransitioning ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
            }`}
          >
            <Image
              key={currentIndex}
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Lower Static Section */}
      <div className="mt-8 md:mt-12 text-center">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
          Explore More with Our Stunning Designs
        </h2>
        <div
          className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl shadow-lg"
          aria-label="Static Hero Image"
        >
          <Image
            src="/figma/hs.webp"
            alt="Additional Hero Image"
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
