"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaPython,
    FaJava,
    FaAws
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiMongodb,
    SiTypescript,
    SiFirebase,
    SiVercel
} from "react-icons/si";

const TechCarousel = () => {
    const technologies = [
        { name: "React", Icon: FaReact, color: "text-[#61DAFB]" },
        { name: "Next.js", Icon: SiNextdotjs, color: "text-white" },
        { name: "Node.js", Icon: FaNodeJs, color: "text-[#339933]" },
        { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-[#06B6D4]" },
        { name: "MongoDB", Icon: SiMongodb, color: "text-[#47A248]" },
        { name: "TypeScript", Icon: SiTypescript, color: "text-[#3178C6]" },
        { name: "JavaScript", Icon: FaJs, color: "text-[#F7DF1E]" },
        { name: "HTML5", Icon: FaHtml5, color: "text-[#E34F26]" },
        { name: "CSS3", Icon: FaCss3Alt, color: "text-[#1572B6]" },
        { name: "Python", Icon: FaPython, color: "text-[#3776AB]" },
        { name: "Java", Icon: FaJava, color: "text-[#007396]" },
        { name: "AWS", Icon: FaAws, color: "text-[#FF9900]" },
        { name: "Firebase", Icon: SiFirebase, color: "text-[#FFCA28]" },
        { name: "Vercel", Icon: SiVercel, color: "text-white" },
    ];

    // Tripling the array to ensure smooth infinite scrolling for wider screens
    const carouselContent = [...technologies, ...technologies, ...technologies];

    return (
        <section className="py-20 bg-gray-900 border-t border-white/5 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900 -z-10" />

            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 inline-block"
                >
                    Technologies We Work With
                </motion.h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto px-6">
                    We leverage the latest and most powerful tools in the industry to build robust, scalable, and high-performance solutions.
                </p>
            </div>

            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-12 w-max"
                    animate={{ x: [0, "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 50, // Slower duration for a steady tech showcase
                    }}
                >
                    {carouselContent.map((tech, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center gap-4 group min-w-[100px]"
                        >
                            <div className={`text-6xl ${tech.color} drop-shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]`}>
                                <tech.Icon />
                            </div>
                            <span className="text-gray-400 text-sm font-medium tracking-wide group-hover:text-white transition-colors">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Edges fade - stronger for this section */}
                <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent pointer-events-none" />
            </div>
        </section>
    );
};

export default TechCarousel;
