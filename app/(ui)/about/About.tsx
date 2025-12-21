
"use client";

import React from "react";
import { motion } from "framer-motion";
import TeamCarousel from './TeamCarousel';

export default function AboutUs() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundImage: "url('/figma/galaxy.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black bg-opacity-70 min-h-screen">
        {/* Header Section */}
        <header className="text-center py-11 bg-gradient-to-r from-[#43536d] to-[#162343] bg-opacity-100">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold">Dcoder</h1>
            <p className="mt-4 text-xl">
              Your galaxy of possibilities for building websites, apps, AI/ML
              solutions, and expert consulting.
            </p>
          </div>
        </header>

        {/* About Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              About Us
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed font-light">
              Dcoder is dedicated to empowering businesses and individuals to
              innovate and succeed. From crafting websites and apps to
              implementing AI/ML solutions, we bring your ideas to life with
              unparalleled precision and creativity. Our consulting services
              ensure your path to success is smooth and guided.
            </p>
            <div className="pt-4">
              <div className="h-1 w-20 bg-blue-500 rounded-full" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full -z-10" />
            <img
              src="/figma/about.png"
              alt="Team working on innovative solutions"
              className="rounded-2xl shadow-2xl border border-white/10"
            />
          </motion.div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">Our Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We specialize in a variety of areas to meet all your technological
              needs with cutting-edge solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-6 relative z-10">
            {[
              { title: "Web Development", color: "from-blue-600 to-blue-400" },
              { title: "Chatbots", color: "from-indigo-600 to-indigo-400" },
              { title: "AI/ML Solutions", color: "from-purple-600 to-purple-400" },
              { title: "Game Design", color: "from-pink-600 to-pink-400" },
              { title: "App Development", color: "from-teal-600 to-teal-400" },
              { title: "JavaScript Apps", color: "from-yellow-500 to-orange-500" },
              { title: "Data Privacy", color: "from-gray-600 to-gray-400" },
              { title: "Cloud Solutions", color: "from-emerald-600 to-emerald-400" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-8 text-center font-semibold rounded-xl shadow-lg backdrop-blur-sm bg-gradient-to-br ${item.color} bg-opacity-10 border border-white/10 hover:border-white/30 transition-all`}
              >
                {item.title}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-700">Meet Our Team</h2>
            <p className="text-gray-300 mt-4">
              The passionate minds driving innovation and excellence at Dcoder.
            </p>
          </div>
          <TeamCarousel />
        </section>

        <section className="py-16 bg-gradient-to-r from-gray-500 to-gray-900 text-center">
          <h2 className="text-4xl font-bold mb-6">Partner with Dcoder</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Ready to transform your ideas into impactful digital solutions?
            Let&apos;s build the future together.
          </p>
          <a
            href="/contact"
            className="bg-white text-black font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-300 transition"
          >
            Contact Us Today
          </a>
        </section>
      </div>
    </div>
  );
}