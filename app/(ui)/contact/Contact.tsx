/* eslint-disable react/no-unescaped-entities */
'use client';

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_rtdbpts', 
          'template_b1lyz1o', 
          formRef.current,
          'zcdmren8ioOPY7Z2K' 
        )
        .then(
          (result) => {
            toast.success('Message sent successfully!');
            console.log(result.text);
          },
          (error) => {
            toast.error('Failed to send the message, please try again.');
            console.log(error.text);
          }
        );

      (e.target as HTMLFormElement).reset();
    } else {
      console.error('Form reference is undefined');
    }
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
        <h1 className="text-4xl font-bold mb-2">Let&apos;s make something awesome together.</h1>
          <p className="text-lg">
            Drop us a line, or give us a heads-up if you&apos;re interested giving us the opportunity to turn your beautiful idea in an amazing site.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center py-8">
        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center lg:items-start">
          {/* Left Section */}
          <div className="lg:w-1/2 w-full px-4 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-600 mb-6">
              Connect with Our Team of Experts
            </h1>
            <p className="text-gray-600 mb-6">
              Contact our team of excellence-driven experts today to bring your project to life.
            </p>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-600 mb-4">Frequently Asked Questions</h2>
              <div>
                <details className="mb-2">
                  <summary className="font-medium text-blue-700 cursor-pointer">
                    How long does it take to complete a project?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    The timeline depends on the project&apos;s complexity. Typically, projects take 2,8 weeks.
                  </p>
                </details>
                <details className="mb-2">
                  <summary className="font-medium text-blue-700 cursor-pointer">
                    What is your pricing structure?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    We offer flexible pricing based on hourly rates or fixed packages tailored to your needs.
                  </p>
                </details>
                <details>
                  <summary className="font-medium text-blue-700 cursor-pointer">
                    Do you provide post-launch support?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Yes, we offer ongoing support and maintenance services to ensure your app runs smoothly.
                  </p>
                </details>
              </div>
            </div>

            {/* Contact Information */}
            <h1 className="text-gray-600 text-4xl font-bold mb-5">Directly reach us</h1>
            <div className="space-y-2">
              <p className="text-gray-600">📞 8690896522</p>
              <p className="text-gray-600">✉️ dcoder.atwork@gmail.com</p>
              <p className="text-gray-600">📍 Ghaziabad (UP)</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 w-full px-4 lg:px-8 mt-8 lg:mt-0">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-gray-600 text-white rounded-lg shadow-lg p-8 space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-900"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-900"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="phone">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-900"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="location">
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-900"
                    placeholder="Location"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="expertise">
                  What Expertise You're Interested In *
                </label>
                <select
                  name="expertise"
                  id="expertise"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-900"
                  required
                >
                  <option value="">Select</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="project">
                  Tell Us About Your Project *
                </label>
                <textarea
                  name="project"
                  id="project"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-900"
                  placeholder="Leave your message here"
                  maxLength={1000}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-white hover:bg-blue-600 text-gray-600 font-semibold rounded-md transition"
              >
                SUBMIT →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
