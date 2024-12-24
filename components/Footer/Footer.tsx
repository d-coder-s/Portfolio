"use client";
// import Image from "next/image";
// import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
// import { TfiArrowRight } from "react-icons/tfi";


const Footer = () => {
    return (
        <div className="w-full py-8 sm:px-12 lg:px-12">
            <div className="flex flex-wrap md:justify-between md:space-y-0 sm:space-y-6 sm:justify-center md:items-start sm:items-center">
                {/* Company Info Section */}
                <div className="flex flex-col justify-center space-y-2 sm:w-full md:w-auto">
                    {/* <Image
                                className="w-20 sm:w-20 md:w-20"
                                src="/logo.png"
                                alt="Logo"
                                width={60}
                                height={60}
                            /> */}
                    <h2 className="text-lg font-bold">Solarworks</h2>
                    <div className="flex flex-col text-sm text-gray-400">
                        <span className="font-semibold text-white">Mr. Gautam Verma</span>
                        <span>Contact: 9999021752</span>
                        <span>Email: Gautam.vrma@outlook.com</span>
                        <a
                            href="https://wa.me/9999021752"
                            target="_blank"
                            className="text-blue-400 hover:underline cursor-pointer"
                        >
                            Click for Direct WhatsApp
                        </a>
                        <span>29/31 First Floor, Rajinder Nagar, New Delhi-110060</span>
                    </div>
                </div>

                {/* Quick Links */}
                {/* <div className="justify-center sm:w-full md:w-auto">
                            <h3 className="mb-3 text-sm font-semibold">Jobs by Function</h3>
                            <ul className="space-y-2 text-sm">
                                {[
                                    "Software Engineering Jobs",
                                    "Marketing Jobs",
                                    "Sales Jobs",
                                    "Internship Jobs",
                                ].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={{
                                                pathname: "/job",
                                                query: { function: item.split(" ")[0].toLowerCase() },
                                            }}
                                            className="flex items-center text-gray-400 transition-colors duration-300 hover:text-blue-400 group"
                                        >
                                            <TfiArrowRight
                                                className="mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100"
                                            />
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div> */}

                {/* Services Section */}
                {/* <div className="justify-center sm:w-full md:w-auto">
                            <h3 className="mb-3 text-sm font-semibold">Jobs by Location</h3>
                            <ul className="space-y-2 text-sm">
                                {[
                                    "Jobs in Bangalore",
                                    "Jobs in Delhi",
                                    "Jobs in Hyderabad",
                                ].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={{
                                                pathname: "/job",
                                                query: { location: item.split(" ")[2].toLowerCase() },
                                            }}
                                            className="flex items-center text-gray-400 transition-colors duration-300 hover:text-blue-400 group"
                                        >
                                            <TfiArrowRight
                                                size={12}
                                                className="mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100"
                                            />
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div> */}

                {/* Newsletter Section */}
                <div className="flex flex-col justify-center space-y-4 sm:w-full md:w-auto">
                    <h3 className="text-sm font-semibold">Work with us</h3>
                    <p className="text-gray-400 text-sm">
                        What are you looking for? <br />Write in a few lines and send us your CV.
                    </p>
                    <div className="flex mt-4 space-x-3">
                        {[
                            {
                                Icon: TfiLinkedin,
                                href: "https://www.linkedin.com/company/96432867/admin/dashboard/",
                            },
                            {
                                Icon: BsInstagram,
                                href: "https://www.instagram.com/Solarworks/",
                            },
                        ].map(({ Icon, href }, index) => (
                            <a
                                key={index}
                                href={href}
                                className="p-1.5 bg-[#252540] hover:bg-blue-600 rounded-md transition-colors duration-300"
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-8 pt-4 border-t border-[#252540] flex justify-center">
                <p className="text-xs text-white-500">
                    © 2024 Solarworks. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
