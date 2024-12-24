import React from 'react';
import Image from 'next/image'; // Import the Image component

const PortfolioSection = () => {
  return (
    <section className="container px-4 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Comprehensive Web Development Solutions
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="relative aspect-video">
            <Image
              alt={`Portfolio item ${i + 1}`}
              className="rounded-lg object-cover"
              fill
              src="/placeholder.svg" // Replace with your actual image paths
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
