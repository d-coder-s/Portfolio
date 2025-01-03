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
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const services: Service[] = [
    {
      title: "Web Development",
      description:
        "Our web development services focus on building highly responsive, scalable, and secure websites tailored to your business goals. We specialize in crafting intuitive user interfaces and powerful backend architectures to ensure seamless performance across devices. Whether it's a simple landing page or a complex enterprise application, we prioritize speed, security, and user engagement.",
      imgSrc: "/figma/webb.webp",
      placeholder: "/figma/placeholder.jpg",
      details:
        "Comprehensive web development services from front-end to back-end.",
      developers: [
        {
          name: "Aman Pal",
          role: "Full Stack Developer",
          img: "/figma/aman.jpg",
          profile: "https://www.linkedin.com/in/aman-pal-ap/",
        },
        {
          name: "Vedant Pandey",
          role: "Full Stack Developer",
          img: "/figma/vedant.jpeg",
          profile: "https://www.linkedin.com/in/vedant-pandey7/",
        },
        {
          name: "Abhishek Jaiswal",
          role: "Frontend Developer, Lead Designer",
          img: "/figma/abhishek.jpeg",
          profile: "https://www.linkedin.com/in/abhishek-jaiswal-278890246/",
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
          profile: "https://www.linkedin.com/in/utkarsh8671/",
        },
        {
          name: "Aarush Agarwal",
          role: "Backend Engineer",
          img: "/figma/aaru.jpg",
          profile: "https://www.linkedin.com/in/aarush-agarwal-ba4b16249/",
        },
        {
          name: "Ankit Singh",
          role: "Backend Engineer",
          img: "/figma/ankit.jpeg",
          profile: "https://www.linkedin.com/in/ankit-kumar-b223762ba/",
        },
        {
          name: "Abhishek Jaiswal",
          role: "Frontend Developer, Lead Designer",
          img: "/figma/abhishek.jpeg",
          profile: "https://www.linkedin.com/in/abhishek-jaiswal-278890246/",
        },
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "Design is not just about aesthetics; it's about creating seamless and engaging user experiences. Our UI/UX design services focus on blending creativity with functionality to deliver intuitive designs that meet user needs. From wireframes to prototypes, we ensure every interaction is purposeful and aligned with your brand identity.",
      imgSrc: "/figma/uiux.jpg",
      placeholder: "/figma/placeholder.jpg",
      details:
        "Focus on user-centric designs for maximum usability and engagement.",
      developers: [
        {
          name: "Abhishek Jaiswal",
          role: "Frontend Developer, Lead Designer",
          img: "/figma/abhishek.jpeg",
          profile: "https://www.linkedin.com/in/abhishek-jaiswal-278890246/",
        },
      ],
    },
       
    {
      title: "AI/ML Application Development",
      description:
        "Leverage the power of Artificial Intelligence and Machine Learning to build smarter systems that drive data-driven decision-making, automate complex workflows, and deliver actionable insights. From predictive analytics to natural language processing, our AI/ML solutions are tailored to meet your unique business needs. We focus on creating scalable, robust, and efficient models that provide long-term value and innovation.",
      imgSrc: "/figma/aiml.jpg",
      placeholder: "/figma/placeholder.jpg",
      details:
        "Detailed insights into AI/ML development with cutting-edge tech stack.",
      developers: [
        {
          name: "Harsh Gupta",
          role: "Lead AI Engineer",
          img: "/figma/harsh.jpg",
          profile: "https://www.linkedin.com/in/harsh-gupta-1b305b25b/",
        },
        {
          name: "Ankit Singh",
          role: "Backend Engineer",
          img: "/figma/ankit.jpeg",
          profile: "https://www.linkedin.com/in/ankit-kumar-b223762ba/",
        },
        {
          name: "Vedant Pandey",
          role: "Contributor",
          img: "/figma/vedant.jpeg",
          profile: "https://www.linkedin.com/in/vedant-pandey7/",
        },
      ],
    },
    {
      title: "Game Development",
      description:
        "Our game development services focus on creating immersive, engaging, and interactive experiences that captivate players across multiple platforms. Whether it's 2D or 3D, mobile or PC, our team specializes in building games that deliver rich gameplay, stunning visuals, and responsive controls. We use cutting-edge game engines like Unity and Unreal Engine to bring your game ideas to life, ensuring top-tier performance and user engagement.",
      imgSrc: "/figma/gaming.png",
      placeholder: "/figma/placeholder.jpg",
      details: "Creating engaging and immersive games for various platforms.",
      developers: [
        {
          name: "Aman Pal",
          role: "Game Developer",
          img: "/figma/aman.jpg",
          profile: "https://www.linkedin.com/in/aman-pal-ap/",
        },
        {
          name: "Utkarsh Pal",
          role: "Mobile Game Developer",
          img: "/figma/utkarsh.jpg",
          profile: "https://www.linkedin.com/in/utkarsh8671/",
        },
        {
          name: "Aarush Agarwal",
          role: "Game Backend Developer",
          img: "/figma/aaru.jpg",
          profile: "https://www.linkedin.com/in/aarush-agarwal-ba4b16249/",
        },
      ],
    }, 
    {
      title: "Data Science ",
      description:
        "Unlock the power of your data with our expert Data Analysis services. Our team of skilled data analysts works closely with you to understand your business challenges and transforms raw data into valuable insights. By leveraging advanced statistical techniques, machine learning models, and data visualization tools, we help you make informed decisions, identify trends, and uncover opportunities for growth. Whether it’s optimizing processes, forecasting future trends, or analyzing customer behavior, our data-driven approach ensures that your business stays ahead of the curve.",
      imgSrc: "/figma/data.jpg",
      placeholder: "/figma/placeholder.jpg",
      details: "Cutting-edge cybersecurity solutions.",
      developers: [
        {
          name: "Harsh Gupta",
          role: "Data Analyst",
          img: "/figma/harsh.jpg",
          profile: "https://www.linkedin.com/in/harsh-gupta-1b305b25b/",
        },
        {
          name: "Sartaj Ahmad",
          role: "Data Analyst",
          img: "/figma/sartaj.jpg",
          profile: "https://www.linkedin.com/in/sartaj-ahamad-26442a228/",
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

  const toggleDescription = (index: number) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
        <p className="mt-4 text-lg text-gray-600">
          Strategic, innovative solutions built around your unique business
          needs.
        </p>
      </header>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 flex flex-col"
          >
            {/* Image */}
            <div className="flex justify-center mb-4">
              <Image
                src={service.imgSrc}
                alt={service.title}
                placeholder="blur"
                blurDataURL={service.placeholder}
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            {/* Description */}
            <h2 className="text-2xl font-semibold text-gray-800">
              {service.title}
            </h2>
            <p className="text-gray-600 mt-2 flex-grow">
              {expanded[index]
                ? service.description
                : `${service.description.substring(0, 100)}...`}
              <button
                onClick={() => toggleDescription(index)}
                className="mt-2 text-blue-600 hover:underline"
              >
                {expanded[index] ? "Read Less" : "Read More"}
              </button>
            </p>

            <div className="mt-4 space-y-2">
              {/* Our Developers and Project Delivered Buttons in one row */}
              <div className="flex gap-2">
                <button
                  onClick={() => openModal(service)}
                  className="w-1/2 px-4 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
                >
                  Our Developers
                </button>
                <button
                  onClick={() => alert("Project Delivered!")} // Replace with your logic
                  className="w-1/2 px-4 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-green-700 transition"
                >
                  Delivered with Success
                </button>
              </div>


              {/* Drop Us a Message Button in second row */}
              <div className="flex">
              <Link
                href="/contact" // Replace with your actual contact page
                className="w-full px-4 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-yellow-600 transition text-center"
              >
                Drop Us a <br /> Message
              </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedProject.title}
            </h2>
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
                  <Link
                    href={dev.profile}
                    className="text-blue-600 hover:underline"
                  >
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
