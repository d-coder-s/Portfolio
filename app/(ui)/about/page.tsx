import { Metadata } from 'next';

import React from 'react'

import About from './About';

export const metadata: Metadata = {
    title: "About",
    description: "Welcome to our website.",
};

const page = () => {
    return (
     <About/>
    )
}

export default page
