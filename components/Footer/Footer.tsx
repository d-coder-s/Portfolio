'use client';

import { useState, useEffect } from "react";
import { BsInstagram } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import Image from 'next/image';

const Footer = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Project 1",
      image: "/figma/p1.webp",
    },
    {
      title: "Project 2",
      image: "/figma/p2.webp",
    },
    {
      title: "Project 3",
      image: "/figma/p3.webp",
    },
  ];

  // Handle the transition every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 3000); // Change project every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [projects.length]);

  return (
    <div className="w-full py-8 sm:px-12 lg:px-12">
      {/* Projects Section */}
      <section className="mt-8 py-12">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">Our Projects</h2>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-all duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentProject * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-full px-8 py-4 text-center bg-gray-800 rounded-lg shadow-lg flex-shrink-0"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400} // Set an appropriate width
                  height={300} // Set an appropriate height
                  className="w-full h-96 object-cover rounded-lg mb-4"
                  priority={index === 0} // Optimize the first image for LCP
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <div className="flex flex-wrap md:justify-between md:space-y-0 sm:space-y-6 sm:justify-center md:items-start sm:items-center">
        <div className="flex flex-col justify-center space-y-2 sm:w-full md:w-auto">
          <h2 className="text-lg font-bold">Dcoder</h2>
          <div className="flex flex-col text-sm text-gray-400">
            <span className="font-semibold text-white">Abhishek jaiswal</span>
            <span>Contact: 8690896522</span>
            <span>Email: dcoder.atwork@gmail.com</span>
            <a
              href="https://wa.me/9999021752"
              target="_blank"
              className="text-blue-400 hover:underline cursor-pointer"
            >
              Click for Direct WhatsApp
            </a>
            <span>29/31 First Floor, Rajinder Nagar, New Delhi-110060</span>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col justify-center space-y-4 sm:w-full md:w-auto">
          <h3 className="text-sm font-semibold">Work with us</h3>
          <p className="text-gray-400 text-sm">
            What are you looking for? <br />
            Write in a few lines and send us your CV.
          </p>
          <div className="flex mt-4 space-x-3">
            {[
              {
                Icon: TfiLinkedin,
                href: "https://www.linkedin.com/company/96432867/admin/dashboard/",
              },
              {
                Icon: BsInstagram,
                href: "https://www.instagram.com/Solarworks/",
              },
            ].map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="p-1.5 bg-[#252540] hover:bg-blue-600 rounded-md transition-colors duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 pt-4 border-t border-[#252540] flex justify-center">
        <p className="text-xs text-gray-400">© 2024 Solarworks. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
