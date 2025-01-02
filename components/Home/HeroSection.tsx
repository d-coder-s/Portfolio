'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-24">
      {/* Upper Section with Text and Carousel */}
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Elevate Your Online Presence
          </h1>
          <p className="text-gray-600 md:text-lg lg:text-xl dark:text-gray-400">
            We create stunning websites that drive results and enhance your digital footprint.
          </p>
          {/* Button with Link */}
          <div>
            <Link href="/services">
              <button className="bg-blue-500 text-white py-2 px-4 md:py-3 md:px-6 rounded-lg hover:bg-blue-600 transition duration-300">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        {/* Image Carousel */}
        <div
          className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-xl shadow-lg"
          aria-label="Image Carousel"
        >
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
      <div className="mt-12 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
          Explore More with Our Stunning Designs
        </h2>
        <div
          className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-xl shadow-lg"
          aria-label="Static Hero Image"
        >
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
