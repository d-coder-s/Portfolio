import React from 'react';
import Image from 'next/image'; // Ensure you import Image for Next.js image optimization

const HeroSection = () => {
  return (
    <section className="container px-4 py-12 md:py-24">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Elevate Your Online Presence
          </h1>
          <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
            We create stunning websites that drive results and enhance your digital footprint
          </p>
          {/* Normal button */}
          <button
            className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 mt-4"
          >
            Get Started
          </button>
        </div>
        <div className="grid gap-4 items-center">
          <Image
            alt="Website mockups"
            className="aspect-video overflow-hidden rounded-xl object-cover"
            height={310}
            src="/placeholder.svg"
            width={550}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
