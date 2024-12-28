"use client"
import React, { useState, useEffect } from "react";

const Services: React.FC = () => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Data for service cards with image paths and fallback placeholder
  const services = [
    {
      title: "AI/ML Application Development",
      description: "Unlock the potential of AI and Machine Learning to enhance business decision-making.",
      imgSrc: "/figma/webd.webp", // Replace with actual image path
      placeholder: "/figma/placeholder.jpg", // Image fallback in case the original image fails to load
      details: "Project details for AI/ML application, including technology stack, development process, and key developers."
    },
    {
      title: "Web Development",
      description: "Build scalable and beautiful websites optimized for performance and user experience.",
      imgSrc: "/figma/appd.jpg", // Replace with actual image path
      placeholder: "/figma/placeholder.jpg", // Image fallback in case the original image fails to load
      details: "Detailed web development project involving front-end and back-end technologies."
    },
    {
      title: "App Development",
      description: "Create high-performance mobile apps that engage users and grow your brand.",
      imgSrc: "/figma/app.webp", // Replace with actual image path
      placeholder: "/figma/placeholder.jpg", // Image fallback in case the original image fails to load
      details: "App development project using React Native, Swift, Kotlin, and more."
    },
    {
      title: "Consultancy",
      description: "Get expert consultancy to transform your business strategies and operations.",
      imgSrc: "/figma/const.png", // Replace with actual image path
      placeholder: "/figma/placeholder.jpg", // Image fallback in case the original image fails to load
      details: "Our consultancy services help your business define strategic goals, identify challenges, and create actionable plans for growth."
    },
    {
      title: "UI/UX Design",
      description: "Create user-friendly and visually appealing interfaces to engage users.",
      imgSrc: "/figma/uiux.jpg", // Replace with actual image path
      placeholder: "/figma/placeholder.jpg", // Image fallback in case the original image fails to load
      details: "We design seamless user experiences and intuitive interfaces to ensure maximum engagement and satisfaction."
    }
  ];

  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header Section */}
      <header className="text-center">
        <h1 className="text-4xl font-semibold text-gray-900">Our Services</h1>
        <p className="mt-4 text-lg text-gray-600">
          We provide cutting-edge AI/ML, Web & App Development solutions, and expert Consultancy to help you transform your business.
        </p>
      </header>

      {/* Services Grid Section */}
      <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card flex p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
            onClick={() => openModal(service)}
          >
            {/* Left side: Service Description */}
            <div className="w-1/2 pr-4">
              <h2 className="text-2xl font-semibold text-gray-900">{service.title}</h2>
              <p className="mt-4 text-gray-700">{service.description}</p>
            </div>

            {/* Right side: Project Image */}
            <div className="w-1/2">
              <img
                src={service.imgSrc}
                alt={service.title}
                onError={(e) => e.currentTarget.src = service.placeholder} // If the image fails to load, fallback to placeholder
                className="w-full h-full object-cover rounded-lg transition-opacity duration-300"
              />
            </div>
          </div>
        ))}
      </section>

      {/* Modal: Show Detailed Project Information */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => closeModal()}  // Close modal on click outside
        >
          <div className="bg-white w-4/5 md:w-2/3 lg:w-1/2 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-900">{selectedProject.title}</h2>
            <p className="mt-4 text-gray-700">{selectedProject.details}</p>
            <div className="mt-4">
              <h3 className="text-xl font-semibold">Developers Involved:</h3>
              <ul className="text-gray-600 mt-2 space-y-2">
                <li>John Doe - Lead Developer</li>
                <li>Jane Smith - AI Specialist</li>
                <li>Michael Lee - Frontend Developer</li>
              </ul>
            </div>
            <button
              onClick={closeModal}
              className="mt-6 w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
