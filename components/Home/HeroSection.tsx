'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Next.js Image optimization

const images = [
  '/figma/TheLook.webp',
  '/figma/Nissa.webp',
  '/figma/593c34c2a9ad5ddc8368d9d73c0cffecbe3c8b447161845afd337145e40fed621679389184093.webp'
];

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container px-4 py-12 md:py-24">
      {/* Upper Section with Text and Carousel */}
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Elevate Your Online Presence
          </h1>
          <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
            We create stunning websites that drive results and enhance your digital footprint.
          </p>
          {/* Button */}
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 mt-4">
            Get Started
          </button>
        </div>

        {/* Image Carousel */}
        <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-xl shadow-lg">
          <Image
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-500"
          />
        </div>
      </div>

      {/* Lower Section with Static Image */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Explore More with Our Stunning Designs
        </h2>
        <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/figma/DALL·E 2024-12-12 12.49.51 - A grid layout of 12 web design Figma template previews displayed on a clean and professional workspace. Each template showcases a different design the.webp"
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
