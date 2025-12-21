"use client";

import Link from "next/link";
import {
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    { title: "Project 1", image: "/figma/p1.webp" },
    { title: "Project 2", image: "/figma/p2.webp" },
    { title: "Project 3", image: "/figma/p3.webp" },
  ];

  const carouselContent = [...projects, ...projects, ...projects, ...projects];

  return (
    <section className="py-16 bg-gradient-to-b from-[#162343] to-gray-900 border-t border-white/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

      <h2 className="text-3xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
        Our Latest Projects
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: [0, "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {carouselContent.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative w-[300px] h-[200px] rounded-xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-lg font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Edges fade */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

const Footer = () => {
  const socialIcons = [
    { Icon: BsLinkedin, link: "https://www.linkedin.com/company/d-coder-s/", color: "hover:text-[#0A66C2]" },
    { Icon: BsWhatsapp, link: "https://wa.me/+918690896522", color: "hover:text-[#25D366]" },
    { Icon: BsGithub, link: "https://github.com/d-coder-s", color: "hover:text-white" },
    { Icon: BsTwitter, link: "https://x.com/dcoder_atwork?t=gnvKHiHKKt4MObKNBomSow&s=08", color: "hover:text-[#1DA1F2]" },
    { Icon: BsInstagram, link: "https://www.instagram.com/dcoder_atwork/#", color: "hover:text-[#E1306C]" },
  ];

  return (
    <footer className="w-full bg-gray-900 text-white border-t border-white/10 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 py-16 relative z-10">
        {/* Company Info */}
        <div className="space-y-6">
          <Link href="/" className="inline-block">
            <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Dcoder
            </h2>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Decoder empowers businesses with tailored solutions, delivering
            creative, precise, and impactful results through expertise,
            efficiency, and innovation.
          </p>
          <div className="flex space-x-4">
            {socialIcons.map(({ Icon, link, color }, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-white/5 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-white/10 ${color}`}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
            Navigation
          </h3>
          <ul className="space-y-3 text-gray-400">
            {['Home', 'Services', 'About', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace('projects', 'project').replace('contact', 'contact')}`}
                  className="hover:text-blue-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
            Contact
          </h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <span className="mt-1">📞</span>
              <span className="hover:text-white transition-colors cursor-pointer">+91-8690896522</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1">🌐</span>
              <a href="https://d-coder-s.netlify.app/" className="hover:text-blue-400 transition-colors break-all">
                d-coder-s.netlify.app
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1">✉️</span>
              <a href="mailto:dcoder.atwork@gmail.com" className="hover:text-blue-400 transition-colors">
                dcoder.atwork@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1">📍</span>
              <span>C 8/14 Ghaziabad, Uttar Pradesh</span>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-green-500 rounded-full"></span>
            Services
          </h3>
          <ul className="space-y-3 text-gray-400">
            {['Web Development', 'Mobile App Development', 'UI/UX Design', 'AI/ML', 'Game Development'].map((service, i) => (
              <li key={i} className="hover:text-green-400 transition-colors cursor-default">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-8 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            Copyright © 2024 <span className="text-white font-bold">Dcoder</span>. All Rights Reserved.
          </p>
          <div className="flex text-sm text-gray-500 gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterWithProjects = () => {
  return (
    <footer className="relative bg-gray-900">
      <Projects />
      <Footer />
    </footer>
  );
};

export default FooterWithProjects;
