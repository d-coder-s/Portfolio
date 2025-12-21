import React from 'react';
import { motion } from 'framer-motion';

const Chooseus = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Why Partner with Us?
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          We deliver excellence through innovation, tailored strategies, and a commitment to your success.
        </p>
      </motion.div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {[
          {
            title: 'Custom Website Development',
            description: 'Empower your business with tailored web solutions designed to excel.',
            icon: '💻',
            gradient: 'from-blue-500/10 to-cyan-500/10',
            border: 'hover:border-blue-400'
          },
          {
            title: 'E-Commerce Development',
            description: 'Boost your online sales with seamless e-commerce experiences.',
            icon: '🛒',
            gradient: 'from-purple-500/10 to-pink-500/10',
            border: 'hover:border-purple-400'
          },
          {
            title: 'App Development',
            description: 'Build high-performance mobile applications for seamless user experiences.',
            icon: '📱',
            gradient: 'from-emerald-500/10 to-teal-500/10',
            border: 'hover:border-emerald-400'
          },
          {
            title: 'AI/ML Application Development',
            description: 'Empower your business with AI/ML-driven intelligent applications and automation.',
            icon: '🤖',
            gradient: 'from-orange-500/10 to-yellow-500/10',
            border: 'hover:border-orange-400'
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className={`flex flex-col items-start p-8 rounded-2xl bg-gradient-to-br ${item.gradient} backdrop-blur-sm border border-transparent ${item.border} transition-all duration-300 shadow-sm hover:shadow-2xl group cursor-default`}
          >
            {/* Icon */}
            <div className="text-5xl mb-6 p-4 bg-white rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
              {item.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Chooseus;
