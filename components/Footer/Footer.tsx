'use client';

import { useState, useEffect } from "react";
import Link from 'next/link';
import { BsInstagram } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import Image from 'next/image';

const Footer = () => {
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
    <footer className="w-full py-10 bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-white">
      {/* Projects Section */}
      <section className="py-4">
        <h2 className="text-2xl font-bold text-center mb-4 text-[#38bdf8]">Our Projects</h2>
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
                <h3 className="text-md font-medium text-[#38bdf8]">{project.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info & Social Links */}
      <div className="flex flex-wrap justify-between gap-6 mt-8 border-t border-[#334155] pt-6 px-4">
        {/* Contact Details */}
        <div className="flex flex-col space-y-1 text-sm">
          <h2 className="text-lg font-bold text-[#38bdf8]">Dcoder</h2>
          <p>Abhishek Jaiswal</p>
          <p>Contact: <span className="text-[#38bdf8]">8690896522</span></p>
          <p>Email: <a href="mailto:dcoder.atwork@gmail.com" className="hover:underline text-[#38bdf8]">dcoder.atwork@gmail.com</a></p>
          <p>Location: Ghaziabad-201015</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-1 text-sm">
          <h3 className="text-lg font-semibold text-[#38bdf8]">Quick Links</h3>
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About Us</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center space-x-2">
          {[
            { Icon: TfiLinkedin, href: "https://www.linkedin.com/company/dcoder123/" },
            { Icon: BsInstagram, href: "https://www.instagram.com" },
            { Icon: FaTwitter, href: "https://twitter.com" },
       
          ].map(({ Icon, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#475569] hover:bg-[#38bdf8] rounded-md transition duration-300 flex items-center justify-center"
            >
              <Icon size={20} className="text-white" />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 pt-4 border-t border-[#334155] text-center">
        <p className="text-xs text-gray-400">
          © 2024 <span className="text-[#38bdf8] font-semibold">Dcoder</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
