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
    const y = useParallax(scrollYProgress, 200); // Reduced parallax for cleaner feel

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Automatic image rotation
    useEffect(() => {
        if (project.images.length > 1) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
            }, 3000); // 3-second interval
            return () => clearInterval(interval);
        }
    }, [project.images]);

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 px-4 py-16"
        >
            {/* Image Section */}
            <motion.div
                ref={ref}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative w-full md:w-3/5 lg:w-2/5 aspect-video rounded-xl overflow-hidden shadow-2xl group"
            >
                {/* Glowing Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-70 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />

                <div className="relative w-full h-full bg-gray-900 rounded-xl overflow-hidden border border-white/10">
                    {project.images.length > 0 ? (
                        <motion.img
                            key={currentImageIndex}
                            src={project.images[currentImageIndex]}
                            alt={project.title || "Project Image"}
                            className="object-cover w-full h-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                        />
                    ) : (
                        <div className="flex items-center justify-center w-full h-full bg-gray-800 text-gray-400">
                            No Image Available
                        </div>
                    )}
                </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
                style={{ y }}
                className="max-w-xl bg-white/10 dark:bg-gray-900/40 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 dark:border-white/5 text-center space-y-6 relative overflow-hidden"
            >
                {/* Subtle sheen effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

                <h2 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 tracking-tight">
                    {project.title || "Untitled Project"}
                </h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                    {project.description || "No description provided."}
                </p>
                <motion.a
                    href={project.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:shadow-blue-600/40 transition-all duration-300"
                >
                    View Project
                </motion.a>
            </motion.div>
        </motion.section>
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
            images: ["/figma/v1.png", "/figma/v2.png", "/figma/v3.png"],
            link: "https://health-ee.netlify.app/",
            description: "Health-E is a seamless healthcare platform...",
        },
        {
            title: "College Insights",
            images: ["/figma/a1.png", "/figma/a2.png"],
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
        <div className="py-10 lg:px-20">
            <main className="space-y-10">
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
