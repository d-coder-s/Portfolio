import { Metadata } from 'next';

import React from 'react'
import Services from './Services';

export const metadata: Metadata = {
    title: "services",
    description: "Welcome to our website.",
};

const page = () => {
    return (
     <Services/>
    )
}

export default page
