'use client'
import React from 'react'
import { motion } from 'framer-motion'

import HeroSection from '@/components/Home/HeroSection'
import PortfolioSection from '@/components/Home/PortfolioSection'
import Chooseus from '@/components/Home/Chooseus'
import Developmentprocess from '@/components/Home/Developmentprocess'
import TechCarousel from '@/components/Home/TechCarousel'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
}

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
}

const Home = () => {
    return (
        <motion.div
            className='overflow-x-hidden'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={sectionVariants}>
                <HeroSection />
            </motion.div>
            <motion.div variants={sectionVariants}>
                <PortfolioSection />
            </motion.div>
            <motion.div variants={sectionVariants}>
                <Chooseus />
            </motion.div>
            <motion.div variants={sectionVariants}>
                <Developmentprocess />
            </motion.div>
            <motion.div variants={sectionVariants}>
                <TechCarousel />
            </motion.div>
        </motion.div>
    )
}

export default Home
