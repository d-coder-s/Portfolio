import React, { useState } from 'react';

const DevelopmentProcess = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      icon: '/figma/discovery.png',  // Replace with your actual icon path
      title: 'Understanding Your Needs',
      description: 'Understanding your needs and setting a clear roadmap.',
    },
    {
      icon: '/figma/sketch.png',  // Replace with your actual icon path
      title: 'Development',
      description: 'Bringing your vision to life.',
    },{
      icon: '/figma/coding.png',  // Replace with your actual icon path
      title: 'Deployment & Support',
      description: 'Deploying the project and providing ongoing assistance.',
    },
    {
      icon: '/figma/test.png',  // Replace with your actual icon path
      title: 'Quality Assurance',
      description: 'Ensuring the product is error-free and meets quality standards.',
    },
    {
      icon: '/figma/rocket.png',  // Replace with your actual icon path
      title: 'Deployment & Support',
      description: 'Deploying the project and providing ongoing assistance.',
    },
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      <section className="container px-4 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Our Proven Development Process</h2>
        <div className="max-w-md mx-auto text-center">
          <div className="mb-6">
            {steps[currentStep] && (
              <>
                <div className="w-16 h-16 mx-auto mb-4">
                  <img
                    src={steps[currentStep].icon}  // Display the PNG icon
                    alt={steps[currentStep].title}
                    className="w-full h-full object-contain"
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
          <div className="flex justify-between">
            {/* Go Back Button */}
            <button
              onClick={handlePreviousStep}
              className="px-4 py-2 bg-gray-600 text-white rounded-full"
              disabled={currentStep === 0}
            >
              Go Back
            </button>
            {/* Next Step Button */}
            <button
              onClick={handleNextStep}
              className="px-4 py-2 bg-blue-600 text-white rounded-full"
              disabled={currentStep === steps.length - 1}
            >
              Next Step
            </button>
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
              <img
                src={`/icons/${tech}.png`}  // Replace with actual icon paths
                alt={tech}
                className="w-12 h-12"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DevelopmentProcess;
