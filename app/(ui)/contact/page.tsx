import { Metadata } from 'next';

import React from 'react'
import Contact from './Contact';

export const metadata: Metadata = {
    title: "Contact",
    description: "Welcome to our website.",
};

const page = () => {
    return (
     <Contact/>
    )
}

export default page
