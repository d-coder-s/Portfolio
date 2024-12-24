'use client'
import React from 'react'

import HeroSection from '@/components/Home/HeroSection'
import PortfolioSection from '@/components/Home/PortfolioSection'
import Chooseus from '@/components/Home/Chooseus'
import Developmentprocess from '@/components/Home/Developmentprocess'

const Home = () => {
    return (
        <div className=''>
            <HeroSection />
            <PortfolioSection/>
            <Chooseus/>
            <Developmentprocess/>
        </div>
    )
}

export default Home
