'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const DevelopmentProcess = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      icon: '/figma/discovery.png',
      title: 'Understanding Your Needs',
      description: 'Understanding your needs and setting a clear roadmap.',
    },
    {
      icon: '/figma/sketch.png',
      title: 'Development',
      description: 'Bringing your vision to life.',
    },
    {
      icon: '/figma/coding.png',
      title: 'Deployment & Support',
      description: 'Deploying the project and providing ongoing assistance.',
    },
    {
      icon: '/figma/test.png',
      title: 'Quality Assurance',
      description: 'Ensuring the product is error-free and meets quality standards.',
    },
    {
      icon: '/figma/rocket.png',
      title: 'Deployment & Support',
      description: 'Deploying the project and providing ongoing assistance.',
    },
  ];

  // Automatic Swipe
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000); // Auto-swipe every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [steps.length]);

  const handleNextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <div>
      {/* Development Process Section */}
      <section className="container px-6 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Our Proven Development Process</h2>
        <div className="max-w-md mx-auto text-center">
          <div className="mb-6">
            {steps[currentStep] && (
              <>
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <Image
                    src={steps[currentStep].icon}
                    alt={steps[currentStep].title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {steps[currentStep].title}
                </h3>
                <p className="text-gray-500">
                  {steps[currentStep].description}
                </p>
              </>
            )}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
          
         
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="container px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Tech Stack We Master
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'react',
            'nodejs',
            'javascript',
            'typescript',
            'python',
            'java',
            'aws',
            'azure',
          ].map((tech, i) => (
            <div
              key={i}
              className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center"
            >
              <Image
                src={`/icons/${tech}.png`}
                alt={tech}
                width={48}
                height={48}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DevelopmentProcess;
