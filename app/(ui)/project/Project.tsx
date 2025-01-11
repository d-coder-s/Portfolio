'use client';
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
    const y = useParallax(scrollYProgress, 300);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Set up automatic image rotation for Project
    useEffect(() => {
        if (project.images.length > 1) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
            }, 2000); // 2 seconds interval
            return () => clearInterval(interval); // Cleanup on unmount
        }
    }, [project.images]);

    return (
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 px-4 py-10">
            {/* Image Section */}
            <div
                ref={ref}
                className="relative w-full md:w-3/5 lg:w-2/5 aspect-video border border-gray-300 rounded-lg overflow-hidden shadow-lg"
            >
                {project.images.length > 1 ? (
                    <motion.img
                        key={currentImageIndex}
                        src={project.images[currentImageIndex]}
                        alt={project.title}
                        className="object-contain w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                ) : (
                    <img
                        src={project.images[0]}
                        alt={project.title}
                        className="object-contain w-full h-full"
                    />
                )}
            </div>

            {/* Text Content */}
            <motion.div
                style={{ y }}
                className="max-w-xl bg-white p-6 rounded-lg shadow-md text-center space-y-4"
            >
                <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                </h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {project.description}
                </p>
                <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:bg-blue-600 transition duration-300"
                >
                    View Project
                </motion.a>
            </motion.div>
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
            images: ["/figma/v1.png","/figma/v2.png","/figma/v3.png","/figma/v4.png","/figma/v5.png"],
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
            title: "MetaVerse",
            images: ["/figma/ab2.png","/figma/ab3.png","/figma/ab4.png","/figma/ab5.png"],
            link: "https://6721c603c35f890f30251154--mtaversaaa.netlify.app/",
            description: "Metaverse is a cutting-edge virtual platform designed to immerse users in dynamic and interactive 3D spaces. Built with React, Next.js, and Tailwind CSS, the project features smooth animations, responsive design, and engaging user interactions. It offers an innovative way to explore virtual environments, allowing users to navigate, interact, and connect within a fully immersive world. With advanced rendering technologies like WebGL and Three.js, the Metaverse project is set to redefine digital experiences.",
        },
        {
            title: "Travel App",
            images: ["/figma/ab21.png","/figma/ab22.png","/figma/ab23.png","/figma/ab24.png"],
            link: "https://672085748ca91692bf854135--travlly.netlify.app/",
            description: "Travel App is an interactive platform designed to help users explore travel destinations, plan trips, and discover exciting places worldwide. With features like destination search, an interactive map, weather integration, and user reviews, this app offers an intuitive and seamless experience for travel enthusiasts. Built with React, Next.js, and Tailwind CSS, the app ensures responsiveness across devices while offering detailed travel information and tools to plan your next adventure",
        },
        {
            title: "Mind Ease",
            images: ["/figma/v21.png","/figma/v22.png","/figma/v23.png"],
            link: "https://mindeasee.netlify.app/",
            description: "MindEase is a mental wellness platform designed to help users manage stress, anxiety, and overall well-being. It offers tools for relaxation, mindfulness exercises, and self-care routines. The app provides a user-friendly interface to track mental health, access therapeutic content, and find personalized solutions to improve mental well-being. Whether you're looking to reduce stress or improve your mood, MindEase aims to support users on their journey to mental balance.",
        },
        {
            title: "Sumz",
            images: ["/figma/ab31.png", "/figma/ab32.png"], // Multiple images for the carousel
            link: "https://67249488cf9357fe0e030a78--ai-summmarizzer.netlify.app/",
            description: "AI Summarizer is an intelligent tool that leverages advanced natural language processing (NLP) techniques to generate concise and accurate summaries from long-form text. Whether it's articles, research papers, or documents, this tool provides users with quick, clear, and actionable insights, saving time and enhancing productivity. Built using Next.js, Redux, and Tailwind CSS, the app offers a seamless and responsive user experience while delivering high-quality summaries powered by AI.",
        },
        
    ];

    return (
        <div className="py-10 lg:px-20">
            <main className="space-y-10">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </main>
            <motion.div
                className="fixed top-0 left-0 h-1 bg-blue origin-left"
                style={{ scaleX }}
            />
        </div>
    );
}
