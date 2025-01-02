"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import Image from "next/image";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    { title: "Project 1", image: "/figma/p1.webp" },
    { title: "Project 2", image: "/figma/p2.webp" },
    { title: "Project 3", image: "/figma/p3.webp" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section className="py-10 bg-gradient-to-b from-[#43536d] to-[#162343] text-white">
      <h2 className="text-2xl font-bold text-center mb-4 text-[#38bdf8]">
        Our Projects
      </h2>
      <div className="relative w-full overflow-hidden max-w-3xl mx-auto">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentProject * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="w-full flex-shrink-0 text-center">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-2"
                priority={index === 0}
              />
              <h3 className="text-md font-medium text-[#38bdf8]">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="w-full py-10 bg-gray-900 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-bold text-white">Dcoder</h2>
          <p className="text-sm text-gray-500 mt-2">
            Decoder empowers businesses with tailored solutions, delivering
            creative, precise, and impactful results through expertise,
            efficiency, and innovation.
          </p>
          <div className="flex space-x-3 mt-4">
            <a
              href="https://www.linkedin.com/company/d-coder-s/"
              className="text-white hover:text-[#3b5998]"
            >
              <BsLinkedin size={20} />
            </a>
            <a
              href="https://wa.me/9651321339" // Replace with your WhatsApp number
              className="text-white hover:text-[#49af43]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsWhatsapp size={20} />
            </a>
            <a
              href="https://github.com/d-coder-s"
              className="text-white hover:text-[#0e0e0e]"
            >
              <BsGithub size={20} />
            </a>
            <a
              href="https://x.com/AbhishekJa42094"
              className="text-white hover:text-[#1DA1F2]"
            >
              <BsTwitter size={20} />
            </a>
            <a href="#" className="text-white hover:text-[#E1306C]">
              <BsInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-md font-semibold text-gray-900">Navigation</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                FAQs/Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-md font-semibold text-gray-900">Contact</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>+91-8690896522</li>
            <li>
              <a
                href="https://d-coder-s.netlify.app/"
                className="hover:underline"
              >
                https://d-coder-s.netlify.app/
              </a>
            </li>
            <li>
              <a
                href="mailto:dcoder.atwork@gmail.com"
                className="hover:underline"
              >
                dcoder.atwork@gmail.com
              </a>
            </li>
            <li>C 8/14 Ghaziabad,Uttar Pradesh</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-md font-semibold text-white">Services</h3>
          <ul className="list-disc list-inside text-gray-500 mt-2">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>AI/ML</li>
            <li>Game development</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-300 text-center pt-4">
        <p className="text-sm text-gray-500">
          Copyright © 2024{" "}
          <span className="text-white font-semibold">Dcoder</span> All Rights
          Reserved.
        </p>
        <div className="text-xs space-x-2 mt-1">
          <a href="#" className="hover:underline">
            User Terms & Conditions
          </a>{" "}
          |
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

const FooterWithProjects = () => {
  return (
    <>
      <Projects />
      <Footer />
    </>
  );
};

export default FooterWithProjects;
