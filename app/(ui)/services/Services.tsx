"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';

// Define Service type
interface Service {
  title: string;
  description: string;
  imgSrc: string;
  placeholder: string;
  details: string;
}

const Services: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Service | null>(null);

  const services: Service[] = [
    {
      title: "AI/ML Application Development",
      description: "Unlock the potential of AI and Machine Learning to enhance business decision-making.",
      imgSrc: "/figma/webd.webp",
      placeholder: "/figma/placeholder.jpg",
      details: "Project details for AI/ML application..."
    },
    {
      title: "Web Development",
      description: "Build scalable and beautiful websites optimized for performance and user experience.",
      imgSrc: "/figma/appd.jpg",
      placeholder: "/figma/placeholder.jpg",
      details: "Detailed web development project..."
    }
  ];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const openModal = (project: Service) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <header className="text-center">
        <h1 className="text-4xl font-semibold text-gray-900">Our Services</h1>
        <p className="mt-4 text-lg text-gray-600">
          We provide cutting-edge AI/ML, Web & App Development solutions.
        </p>
      </header>

      <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card flex p-6 bg-white rounded-lg shadow-lg cursor-pointer"
            onClick={() => openModal(service)}
          >
            <div className="w-1/2 pr-4">
              <h2 className="text-2xl font-semibold text-gray-900">{service.title}</h2>
              <p className="mt-4 text-gray-700">{service.description}</p>
            </div>
            <div className="w-1/2">
              <Image
                src={service.imgSrc}
                alt={service.title}
                width={200}
                height={200}
                onError={() => setSelectedProject({ ...service, imgSrc: service.placeholder })}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </section>

      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="bg-white w-4/5 md:w-2/3 lg:w-1/2 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-900">{selectedProject.title}</h2>
            <p className="mt-4 text-gray-700">{selectedProject.details}</p>
            <button
              onClick={closeModal}
              className="mt-6 w-full py-3 bg-blue-600 text-white font-semibold rounded-lg"
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
