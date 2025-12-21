"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    expertise: "",
    project: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_uqmtxdg", // Service ID
        "template_6i6iiik", // Template ID
        formData, // Form data sent directly
        "8ohgmMCekGJIm_2yC" // Public Key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          console.log(result.text);
          setFormData({
            name: "",
            email: "",
            phone: "",
            location: "",
            expertise: "",
            project: "",
          });
        },
        (error) => {
          toast.error("Failed to send the message, please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-blue-50 min-h-screen">
      <ToastContainer />
      <div
        className="relative bg-cover bg-center min-h-[400px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/figma/vv2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">
            Let&apos;s make something awesome together.
          </h1>
          <p className="text-lg">
            Drop us a line, or give us a heads-up if you&apos;re interested
            giving us the opportunity to turn your beautiful idea in an amazing
            site.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl w-full flex flex-col lg:flex-row items-center lg:items-start gap-12"
        >
          {/* Left Section */}
          <div className="lg:w-1/2 w-full">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Connect with Our <br />
              <span className="text-blue-600">Team of Experts</span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg font-light">
              Contact our team of excellence-driven experts today to bring your
              project to life with precision and creativity.
            </p>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-white/20">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-blue-500 rounded-full" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg p-3 open:bg-blue-50 transition-colors">
                  <summary className="font-medium text-gray-700 cursor-pointer flex justify-between items-center outline-none">
                    How long does it take to complete a project?
                    <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="mt-3 text-gray-600 text-sm leading-relaxed"
                  >
                    The timeline depends on the project&apos;s complexity.
                    Typically, projects take 2-8 weeks.
                  </motion.p>
                </details>
                <details className="group bg-gray-50 rounded-lg p-3 open:bg-blue-50 transition-colors">
                  <summary className="font-medium text-gray-700 cursor-pointer flex justify-between items-center outline-none">
                    What is your pricing structure?
                    <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    We offer flexible pricing based on hourly rates or fixed
                    packages tailored to your needs.
                  </p>
                </details>
                <details className="group bg-gray-50 rounded-lg p-3 open:bg-blue-50 transition-colors">
                  <summary className="font-medium text-gray-700 cursor-pointer flex justify-between items-center outline-none">
                    Do you provide post-launch support?
                    <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    Yes, we offer ongoing support and maintenance services to
                    ensure your app runs smoothly.
                  </p>
                </details>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-gray-800 text-2xl font-bold mb-4">Directly reach us</h2>
              <div className="space-y-3 pl-4 border-l-4 border-blue-500">
                <p className="text-gray-600 flex items-center gap-3 hover:text-blue-600 transition-colors group cursor-pointer">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-1">📞</span>
                  +91-8690896522
                </p>
                <p className="text-gray-600 flex items-center gap-3 hover:text-blue-600 transition-colors cursor-pointer">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-1">✉️</span>
                  dcoder.atwork@gmail.com
                </p>
                <p className="text-gray-600 flex items-center gap-3 hover:text-blue-600 transition-colors cursor-pointer">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-1">📍</span>
                  Ghaziabad (UP)
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="lg:w-1/2 w-full">
            <motion.form
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              onSubmit={handleSubmit}
              className="bg-gray-800/90 backdrop-blur-md text-white rounded-2xl shadow-2xl p-8 lg:p-10 space-y-6 border border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Send us a Message</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-400 outline-none transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-400 outline-none transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300" htmlFor="phone">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-400 outline-none transition-all"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300" htmlFor="location">
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-400 outline-none transition-all"
                    placeholder="City, Country"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300" htmlFor="expertise">
                  What Expertise You&apos;re Interested In *
                </label>
                <div className="relative">
                  <select
                    name="expertise"
                    id="expertise"
                    value={formData.expertise}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white outline-none appearance-none transition-all"
                    required
                  >
                    <option value="" className="bg-gray-800 text-gray-400">Select an option</option>
                    <option value="Web Development" className="bg-gray-800">Web Development</option>
                    <option value="Mobile App Development" className="bg-gray-800">Mobile App Development</option>
                    <option value="UI/UX Design" className="bg-gray-800">UI/UX Design</option>
                    <option value="Other" className="bg-gray-800">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300" htmlFor="project">
                  Tell Us About Your Project *
                </label>
                <textarea
                  name="project"
                  id="project"
                  rows={4}
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-400 outline-none transition-all resize-none"
                  placeholder="Share details about your idea..."
                  maxLength={1000}
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-300"
              >
                SEND MESSAGE →
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
