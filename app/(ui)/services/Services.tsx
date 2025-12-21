"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
          }
        }}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            whileHover={{ y: -10 }}
            className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col group"
          >
            {/* Image */}
            <div className="flex justify-center mb-6 overflow-hidden rounded-lg">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <Image
                  src={service.imgSrc}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg transform transition-transform duration-500"
                />
              </motion.div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
              {service.title}
            </h2>
            <p className="text-gray-600 mt-3 flex-grow leading-relaxed">
              {expanded[index]
                ? service.description
                : `${service.description.substring(0, 100)}...`}
              <button
                onClick={() => toggleDescription(index)}
                className="ml-2 text-blue-600 font-medium hover:underline text-sm"
              >
                {expanded[index] ? "Read Less" : "Read More"}
              </button>
            </p>

            <div className="mt-6 space-y-3">

              <div className="flex gap-3">
                <button
                  onClick={() => openModal(service)}
                  className="w-1/2 px-4 py-2.5 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition shadow-md"
                >
                  Our Team
                </button>
                <Link
                  href="/project"
                  className="w-1/2 px-4 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-md text-center"
                >
                  Browse Work
                </Link>
              </div>

              <div className="flex">
                <Link
                  href="/contact"
                  className="w-full px-4 py-2.5 bg-white border-2 border-gray-200 text-gray-700 font-bold rounded-lg hover:border-blue-500 hover:text-blue-600 transition text-center"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Modal */}
      <motion.div>
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 flex justify-center items-center z-50 px-4">

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              layoutId={`modal-${selectedProject.title}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 max-w-md w-full shadow-2xl relative z-10 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    {selectedProject.title}
                  </h2>
                  <h3 className="text-gray-400 text-xs mt-0.5">Project Team</h3>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed border-b border-white/5 pb-4">
                {selectedProject.details}
              </p>

              <div className="space-y-2">
                <h3 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">Core Developers</h3>
                {selectedProject.developers.map((dev, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center space-x-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                  >
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500/30">
                      <Image
                        src={dev.img}
                        alt={dev.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <Link
                        href={dev.profile}
                        target="_blank"
                        className="text-white text-sm font-medium hover:text-blue-400 transition-colors block"
                      >
                        {dev.name}
                      </Link>
                      <span className="text-[10px] text-gray-500 uppercase">{dev.role}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/5">
                <button
                  onClick={closeModal}
                  className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:scale-[1.02]"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Services;
