'use client';

import React, { useState, useEffect, useRef } from 'react';
import {  FaSearch, FaCode, FaBug, FaRocket, FaProjectDiagram } from 'react-icons/fa';
import { FaReact, FaNodeJs, FaJs, FaAws, FaAngular, FaAndroid, FaSwift, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiKotlin, SiFlutter, SiTensorflow, SiNumpy, SiPandas, SiScikitlearn, SiNextdotjs, SiMongodb, SiExpress, SiCanva } from 'react-icons/si';


const DevelopmentProcess = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const techContainerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      icon: <FaSearch size={64} className="text-blue-500" />,
      title: 'Understanding Your Needs',
      description: 'Understanding your needs and setting a clear roadmap.',
    },
    {
      icon: <FaCode size={64} className="text-green-500" />,
      title: 'Development',
      description: 'Bringing your vision to life.',
    },
    {
      icon: <FaBug size={64} className="text-red-500" />,
      title: 'Deployment & Support',
      description: 'Deploying the project and providing ongoing assistance.',
    },
    {
      icon: <FaProjectDiagram size={64} className="text-yellow-500" />,
      title: 'Quality Assurance',
      description: 'Ensuring the product is error-free and meets quality standards.',
    },
    {
      icon: <FaRocket size={64} className="text-purple-500" />,
      title: 'Launch & Feedback',
      description: 'Launching the product and gathering user feedback for improvement.',
    },
  ];

  const techStack = [
    { icon: <FaReact size={48} className="text-blue-500" />, name: 'React' },
    { icon: <FaNodeJs size={48} className="text-green-500" />, name: 'Node.js' },
    { icon: <FaJs size={48} className="text-yellow-500" />, name: 'JavaScript' },
    { icon: <SiTypescript size={48} className="text-blue-700" />, name: 'TypeScript' },
    { icon: <SiKotlin size={48} className="text-teal-500" />, name: 'Kotlin' },
    { icon: <SiFlutter size={48} className="text-blue-500" />, name: 'Flutter' },
    { icon: <FaAndroid size={48} className="text-green-600" />, name: 'Android Studio' },
    { icon: <FaSwift size={48} className="text-gray-700" />, name: 'Swift' },
    { icon: <FaAngular size={48} className="text-red-600" />, name: 'Angular' },
    { icon: <SiNumpy size={48} className="text-green-500" />, name: 'Numpy' },
    { icon: <SiPandas size={48} className="text-blue-400" />, name: 'Pandas' },
    { icon: <SiScikitlearn size={48} className="text-yellow-600" />, name: 'Scikit-learn' },
    { icon: <SiTensorflow size={48} className="text-orange-500" />, name: 'TensorFlow' },
    { icon: <SiNextdotjs size={48} className="text-black" />, name: 'Next.js' },
    { icon: <SiMongodb size={48} className="text-green-500" />, name: 'MongoDB' },
    { icon: <SiExpress size={48} className="text-gray-800" />, name: 'Express.js' },
    { icon: <FaAws size={48} className="text-yellow-500" />, name: 'AWS' },
    { icon: <FaFigma size={48} className="text-pink-500" />, name: 'Figma' },
    
    { icon: <SiCanva size={48} className="text-green-500" />, name: 'Canva' },
  ];

  // Automatic swipe for development process
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000); // Auto-swipe every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [steps.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prevIndex) => {
        if (prevIndex + 1 >= techStack.length) {
          return 0; // Loop back to React after AWS without gaps
        }
        return prevIndex + 1;
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [techStack.length]);

  // Scroll the tech container when the current index changes
  useEffect(() => {
    if (techContainerRef.current) {
      const techWidth = techContainerRef.current.children[0].clientWidth;
      techContainerRef.current.style.transition = 'transform 1s ease-in-out';
      // Apply scroll animation with translateX
      techContainerRef.current.style.transform = `translateX(-${currentTechIndex * techWidth}px)`;
    }
  }, [currentTechIndex]);
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
                  {steps[currentStep].icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{steps[currentStep].title}</h3>
                <p className="text-gray-500">{steps[currentStep].description}</p>
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

      {/* Technology Stack Section */}
      <section className="container px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
        <div className="flex justify-center overflow-hidden">
          <div
            ref={techContainerRef}
            className="flex transition-all duration-1000 ease-in-out space-x-6"
          >
            {techStack.map((tech, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-4">
                <div className="mb-4">{tech.icon}</div>
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentProcess;
