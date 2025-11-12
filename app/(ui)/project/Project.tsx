"use client";

import { useEffect, useRef, useState } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

interface Project {
    title: string;
    images: string[];
    link: string;
    description: string;
}

function ProjectCard({ project }: { project: Project }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 200);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (project.images.length > 1) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
            }, 3000); // 3 seconds interval
            return () => clearInterval(interval);
        }
    }, [project.images]);

    return (
        <section className="flex flex-col items-center space-y-6 mt-10 p-4">
            {/* Project Image */}
            <div
                ref={ref}
                className="w-full h-auto sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] bg-white rounded-xl border border-gray-300 shadow-lg relative overflow-hidden cursor-pointer"
                onClick={() => setShowModal(true)} // Open modal on click
            >
                {project.images.length > 1 ? (
                    <img
                        src={project.images[currentImageIndex]}
                        alt={project.title}
                        className="object-cover w-full h-full transition-opacity duration-500"
                    />
                ) : (
                    <img
                        src={project.images[0]}
                        alt={project.title}
                        className="object-cover w-full h-full"
                    />
                )}
            </div>

            {/* Details Box */}
            <motion.div
                style={{ y }}
                className="bg-white shadow-md rounded-lg p-4 sm:p-6 md:p-8 flex flex-col items-center sm:items-start space-y-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full"
            >
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">{project.title}</h2>
                <p className="text-sm md:text-base text-gray-700">{project.description}</p>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    View Project
                </a>
            </motion.div>

            {/* Fullscreen Modal */}
            {showModal && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-75 flex justify-center items-center"
                    onClick={() => setShowModal(false)} // Close modal on click
                >
                    <div className="relative w-full max-w-5xl h-[90vh] flex justify-center items-center">
                        <img
                            src={project.images[currentImageIndex]}
                            alt="Fullscreen View"
                            className="object-contain w-full h-auto"
                        />
                        <button
                            className="absolute top-4 right-4 text-white text-2xl bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center"
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowModal(false);
                            }}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default function Home() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const projects: Project[] = [
        {
            title: "Health.E",
            images: ["/figma/v1.png", "/figma/v2.png", "/figma/v3.png", "/figma/v4.png"],
            link: "https://health-ee.netlify.app/",
            description: "Health-E is a seamless healthcare platform connecting users with top-tier medical professionals for in-person and virtual consultations. Built with React, TailwindCSS, Node.js, ExpressJS, MongoDB, and Stripe, it offers an intuitive interface for effortless appointment booking and secure service integration.",
        },
        {
            title: "College Insights",
            images: ["/figma/a1.png", "/figma/a2.png", "/figma/a3.png", "/figma/a4.png"], // Multiple images for the carousel
            link: "https://collegeinsights.netlify.app/",
            description: "🎓 College Insights is a web application that helps prospective students explore colleges with ease. It offers a detailed college search, data analytics on key metrics like tuition and acceptance rates, an interactive map for college locations, and a user-friendly interface to enhance the experience.",
        },
        {
            title: "Mind Ease",
            images: ["/figma/v21.png", "/figma/v22.png", "/figma/v23.png"],
            link: "https://mindeasee.netlify.app/",
            description: "MindEase is a mental wellness platform designed to help users manage stress, anxiety, and overall well-being. It offers tools for relaxation, mindfulness exercises, and self-care routines. The app provides a user-friendly interface to track mental health, access therapeutic content, and find personalized solutions to improve mental well-being. Whether you're looking to reduce stress or improve your mood, MindEase aims to support users on their journey to mental balance.",
        },
    {
    title: "MedRoute",
    images: ["/figma/mr1.png", "/figma/mr2.png"],
    link: "https://med-r-c9vd.vercel.app/",
    description: "MedRoute is a full-stack medicine delivery platform built using Next.js 14, React 18, TypeScript, MongoDB, and Tailwind CSS. It features real-time order tracking, pharmacy dashboards, admin panel, emergency delivery options, and an interactive pharmacy locator using Mapbox. The platform ensures secure authentication and a seamless experience for customers, pharmacies, and administrators.",
},
{
    title: "TalentEzee",
    images: ["/figma/te1.png", "/figma/te2.png", "/figma/te3.png"],
    link: "https://talent-ezee.vercel.app/",
    description: "TalentEzee is a modern talent engagement platform built with Next.js 14 and Tailwind CSS. It features influencer onboarding, campaign management, leaderboards, Stripe-based wallet top-ups, and a raffle reward system—all wrapped in a sleek glassmorphism UI. Designed for scale, it combines design excellence with strong technical performance for seamless talent–brand collaboration.",
}
    ];

    return (
        <div className="bg-gray-100 py-10 lg:px-20">
            <main className="text-black font-sans pb-24">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </main>
            <motion.div
                className="fixed top-0 left-0 h-1 bg-blue-500 origin-left"
                style={{ scaleX }}
            />
        </div>
    );
}
