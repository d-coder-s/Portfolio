import React from 'react';

const Chooseus = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
      Why Partner with Us for Various Services?
      </h2>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
        {
          title: 'Custom Website Development',
          description: 'Empower your business with tailored web solutions designed to excel.',
          icon: '💻',
        },
        {
          title: 'E-Commerce Development',
          description: 'Boost your online sales with seamless e-commerce experiences.',
          icon: '🛒',
        },
        {
          title: 'App Development',
          description: 'Build high-performance mobile applications for seamless user experiences.',
          icon: '📱',
        },
        {
          title: 'AI/ML Application Development',
          description: 'Empower your business with AI/ML-driven intelligent applications and automation.',
          icon: '🤖',
        },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-start p-6 sm:p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="text-4xl sm:text-5xl mb-4">{item.icon}</div>
            {/* Title */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
              {item.title}
            </h3>
            {/* Description */}
            <p className="text-gray-500 text-sm sm:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Chooseus;
