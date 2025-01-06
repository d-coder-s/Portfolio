'use client';
import { useRef } from "react";
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
    image: string;
    link: string;
    description: string;
}

function ProjectCard({ project }: { project: Project }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <section className="h-[80vh] flex md:space-x-6 sm:space-x-0 sm:space-y-8 items-center justify-center">
            <div
                ref={ref}
                className="md:w-[50vw] md:h-[50vh] rounded-xl sm:w-[90vw] sm:h-[80vh] w-[90vw] h-[80vh] border border-black relative"
            >
                <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                />
            </div>
            <motion.div
                style={{ y }}
                className="sm:absolute md:relative absolute text-center mt-4 flex flex-col items-center"
            >
                <h2 className="text-2xl font-bold text-black">{project.title}</h2>
                <p className="mt-2 text-sm text-black sm:px-10 max-w-md">{project.description}</p> {/* Display description */}
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-blue font-normal"
                >
                    View Project
                </a>
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
            title: "Project One",
            image: "/1.jpg",
            link: "https://example.com/project-one",
            description: "An innovative solution to modern challenges using cutting-edge technology.",
        },
        {
            title: "Project Two",
            image: "/2.jpg",
            link: "https://example.com/project-two",
            description: "A creative project that combines design and functionality seamlessly.",
        },
        {
            title: "Project Three",
            image: "/3.jpg",
            link: "https://example.com/project-three",
            description: "A groundbreaking platform aimed at improving productivity and collaboration.",
        },
        {
            title: "Project Four",
            image: "/4.jpg",
            link: "https://example.com/project-four",
            description: "A sleek and modern interface to enhance user experience and engagement.",
        },
        {
            title: "Project Five",
            image: "/5.jpg",
            link: "https://example.com/project-five",
            description: "An elegant and efficient tool to streamline everyday tasks effortlessly.",
        },
    ];

    return (
        <div className="border-white py-10 lg:px-20">
            <main className="text-black sm:space-y-10 lg:space-y-0 font-sofia pb-24">
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
