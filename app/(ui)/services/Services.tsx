"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Service {
  title: string;
  description: string;
  imgSrc: string;
  placeholder: string;
  details: string;
  developers: { name: string; role: string; img: string; profile: string }[];
}

const Services: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Service | null>(null);

  const services: Service[] = [
    {
      title: "AI/ML Application Development",
      description:
        "Leverage the power of Artificial Intelligence and Machine Learning to build smarter systems that drive data-driven decision-making, automate complex workflows, and deliver actionable insights. From predictive analytics to natural language processing, our AI/ML solutions are tailored to meet your unique business needs. We focus on creating scalable, robust, and efficient models that provide long-term value and innovation.",
      imgSrc: "/figma/aiml.jpg",
      placeholder: "/figma/placeholder.jpg",
      details: "Detailed insights into AI/ML development with cutting-edge tech stack.",
      developers: [
        {
          name: "Harsh Gupta",
          role: "Lead AI Engineer",
          img: "/figma/harsh.jpg",
          profile: "#",
        },
        {
          name: "Ankit Singh",
          role: "Backend Engineer",
          img: "/figma/ankit.jpeg",
          profile: "#",
        },
      ],
    },
    {
      title: "Web Development",
      description:
        "Our web development services focus on building highly responsive, scalable, and secure websites tailored to your business goals. We specialize in crafting intuitive user interfaces and powerful backend architectures to ensure seamless performance across devices. Whether it's a simple landing page or a complex enterprise application, we prioritize speed, security, and user engagement.",
      imgSrc: "/figma/webb.webp",
      placeholder: "/figma/placeholder.jpg",
      details: "Comprehensive web development services from front-end to back-end.",
      developers: [
        {
          name: "Aman Pal",
          role: "Full Stack Developer",
          img: "/figma/aman.jpg",
          profile: "#",
        },
        {
          name: "Vedant Pandey",
          role: "Full Stack Developer",
          img: "/figma/vedant.jpeg",
          profile: "#",
        },
        {
          name: "Abhishek Jaiswal",
          role: "Frontend Developer, Lead Designer",
          img: "/figma/abhishek.jpeg",
          profile: "#",
        },
      ],
    },
    {
      title: "App Development",
      description:
        "We build high-performance mobile applications designed to captivate users and streamline operations. Our team specializes in both native and cross-platform app development, using frameworks like React Native, Swift, and Kotlin. From ideation to deployment, we ensure that your mobile app is optimized for performance, security, and user satisfaction.",
      imgSrc: "/figma/app.webp",
      placeholder: "/figma/placeholder.jpg",
      details: "Custom app solutions using React Native, Swift, and Kotlin.",
      developers: [
        {
          name: "Utkarsh Pal",
          role: "Mobile App Developer",
          img: "/figma/utkarsh.jpg",
          profile: "#",
        },
        {
          name: "Arush Agarwal",
          role: "Backend Engineer",
          img: "/figma/aarush.jpg",
          profile: "#",
        },
        {
          name: "Ankit Singh",
          role: "Backend Engineer",
          img: "/figma/ankit.jpeg",
          profile: "#",
        },
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "Design is not just about aesthetics; it's about creating seamless and engaging user experiences. Our UI/UX design services focus on blending creativity with functionality to deliver intuitive designs that meet user needs. From wireframes to prototypes, we ensure every interaction is purposeful and aligned with your brand identity.",
      imgSrc: "/figma/uiux.jpg",
      placeholder: "/figma/placeholder.jpg",
      details: "Focus on user-centric designs for maximum usability and engagement.",
      developers: [
        {
          name: "Abhishek Jaiswal",
          role: "Frontend Developer, Lead Designer",
          img: "/figma/abhishek.jpeg",
          profile: "#",
        },
      ],
    },
    {
      title: "Consultancy",
      description:
        "Our consultancy services are designed to guide your business toward success by identifying opportunities, addressing challenges, and developing actionable strategies. Whether you're looking to optimize operations, enhance digital transformation, or scale your business, our experienced consultants provide insights and roadmaps tailored to your specific needs.",
      imgSrc: "/figma/const.png",
      placeholder: "/figma/placeholder.jpg",
      details: "Expert advice for optimizing operations and driving growth.",
      developers: [
        {
          name: "Sartaj Ahmed",
          role: "Business Consultant",
          img: "/figma/sartaj.jpg",
          profile: "#",
        },
        {
          name: "Arush Agarwal",
          role: "Strategy Analyst",
          img: "/figma/aarush.jpg",
          profile: "#",
        },
      ],
    },
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
        <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
        <p className="mt-4 text-lg text-gray-600">
          Innovative solutions tailored to your business needs.
        </p>
      </header>

      <section className="mt-12 grid gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`grid grid-cols-2 gap-6 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition p-6 items-start ${
              index % 2 === 0 ? "grid-flow-col" : "grid-flow-col-dense"
            }`}
          >
            {/* Description */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-gray-800">{service.title}</h2>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <button
                onClick={() => openModal(service)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition self-start"
              >
                Our Developers
              </button>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <Image
                src={service.imgSrc}
                alt={service.title}
                placeholder="blur"
                blurDataURL={service.placeholder}
                width={400}
                height={250}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </section>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
            <p className="text-gray-600 mt-2">{selectedProject.details}</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Developers Involved:</h3>
              {selectedProject.developers.map((dev, i) => (
                <div key={i} className="flex items-center space-x-3 mt-2">
                  <Image
                    src={dev.img}
                    alt={dev.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <Link href={dev.profile} className="text-blue-600 hover:underline">
                    {dev.name} - {dev.role}
                  </Link>
                </div>
              ))}
            </div>
            <button
              onClick={closeModal}
              className="mt-6 w-full py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
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
