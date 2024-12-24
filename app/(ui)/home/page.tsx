import { Metadata } from 'next';
import Home from './Home'
import React from 'react'

export const metadata: Metadata = {
    title: "Home",
    description: "Welcome to our website.",
};

const page = () => {
    return (
        <Home />
    )
}

export default page
