import { Metadata } from 'next';

import React from 'react'
import Home from './Project'

export const metadata: Metadata = {
    title: "services",
    description: "Welcome to our website.",
};

const page = () => {
    return (
     <Home/>
    )
}

export default page
