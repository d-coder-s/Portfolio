

import React, { useState, useEffect } from 'react';
import { FaSearch, FaCode, FaBug, FaRocket, FaProjectDiagram } from 'react-icons/fa';

const Developmentprocess = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { icon: <FaSearch size={64} className="text-blue-500" />, title: 'Understanding Your Needs', description: 'Understanding your needs and setting a clear roadmap.' },
    { icon: <FaCode size={64} className="text-green-500" />, title: 'Development', description: 'Bringing your vision to life.' },
    { icon: <FaBug size={64} className="text-red-500" />, title: 'Deployment & Support', description: 'Deploying the project and providing ongoing assistance.' },
    { icon: <FaProjectDiagram size={64} className="text-yellow-500" />, title: 'Quality Assurance', description: 'Ensuring the product is error-free and meets quality standards.' },
    { icon: <FaRocket size={64} className="text-purple-500" />, title: 'Launch & Feedback', description: 'Launching the product and gathering user feedback for improvement.' },
  ];


  // Automatic swipe for development process
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [steps.length]);
  return (
    <div className="w-full">
      {/* Development Process Section */}
      <section className="container mx-auto px-4 md:px-6 py-20 bg-gray-50/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Our Proven Development Process</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We follow a structured agile methodology to ensure transparency, quality, and timely delivery of your project.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Bar / Steps Indicator */}
          <div className="flex justify-between items-center mb-16 relative">
            {/* Line Background */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 -translate-y-1/2 rounded-full" />
            {/* Active Line */}
            <div
              className="absolute top-1/2 left-0 h-1 bg-blue-600 -z-10 -translate-y-1/2 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            />

            {steps.map((step, index) => (
              <div
                key={index}
                className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border-4 transition-all duration-300 z-10 ${index <= currentStep ? 'bg-blue-600 border-blue-600 text-white scale-110' : 'bg-white border-gray-300 text-gray-400'}`}
              >
                {index + 1}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center border border-gray-100 relative overflow-hidden">

            {/* Decorative blob */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="inline-block p-6 rounded-full bg-blue-50 mb-8 animate-pulse-slow">
                {steps[currentStep].icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">{steps[currentStep].title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto">{steps[currentStep].description}</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Developmentprocess;
