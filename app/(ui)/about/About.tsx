
import React from "react";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundImage: "url('/figma/galaxy.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black bg-opacity-70 min-h-screen">
        {/* Header Section */}
        <header className="text-center py-11 bg-gradient-to-r from-gray-500 to-blue-500 bg-opacity-100">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold">Dcoder</h1>
            <p className="mt-4 text-xl">
              Your galaxy of possibilities for building websites, apps, AI/ML
              solutions, and expert consulting.
            </p>
          </div>
        </header>

        {/* About Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-gray-300 text-lg">
              Dcoder is dedicated to empowering businesses and individuals to
              innovate and succeed. From crafting websites and apps to
              implementing AI/ML solutions, we bring your ideas to life with
              unparalleled precision and creativity. Our consulting services
              ensure your path to success is smooth and guided.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/figma/about.png"
              alt="Team working on innovative solutions"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Expertise</h2>
            <p className="text-gray-300 mt-4">
              We specialize in a variety of areas to meet all your technological
              needs.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
            {[
              { title: "Web Development", color: "bg-gradient-to-r from-blue-500 to-purple-500" },
              { title: "Chatbots", color: "bg-gradient-to-r from-indigo-500 to-blue-500" },
              { title: "AI/ML Solutions", color: "bg-gradient-to-r from-purple-500 to-indigo-500" },
              { title: "Game Design", color: "bg-gradient-to-r from-pink-500 to-purple-500" },
              { title: "App Development", color: "bg-gradient-to-r from-teal-500 to-green-500" },
              { title: "JavaScript Apps", color: "bg-gradient-to-r from-yellow-500 to-orange-500" },
              { title: "Data Privacy", color: "bg-gradient-to-r from-gray-500 to-blue-500" },
              { title: "Cloud Solutions", color: "bg-gradient-to-r from-green-500 to-teal-500" },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-6 text-center font-bold rounded-lg shadow-lg transform hover:scale-105 transition ${item.color}`}
              >
                {item.title}
              </div>
            ))}
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-700">Meet Our Team</h2>
            <p className="text-gray-300 mt-4">
              The passionate minds driving innovation and excellence at Dcoder.
            </p>
          </div>
          <div className="flex flex-col items-center gap-8 max-w-6xl mx-auto px-6">
            {[
              {
                name: "Abhishek Jaiswal",
                role: "Frontend Developer, Lead Designer",
                image: "/figma/abhishek.jpeg",
                link: "/team/abhishek",
                discription: "loremjashbhcsbhucjb",
              },
              {
                name: "Vedant Pandey",
                role: "Full Stack Developer",
                image: "/figma/vedant.jpeg",
                link: "/team/vedant",
                discription: "loremjashbhcsbhucjb",
              },
              {
                name: "Aman Pal",
                role: "Full Stack Developer",
                image: "https://via.placeholder.com/150",
                link: "/team/aman",
                discription: "loremjashbhcsbhucjb",
              },
              {
                name: "Utkarsh Pal",
                role: "App Developer",
                image: "https://via.placeholder.com/150",
                link: "/team/utkarsh",
                discription: "loremjashbhcsbhucjb",
              },
              {
                name: "Arush Agarwal",
                role: "Backend Developer",
                image: "https://via.placeholder.com/150",
                link: "/team/arush",
                discription: "loremjashbhcsbhucjb",
              },
              {
                name: "Ankit Kumar",
                role: "Backend Developer",
                image: "/figma/ankit.jpeg",
                link: "/team/ankit",
                discription: "loremjashbhcsbhucjb",
              },
              {
                name: "Harsh Gupta",
                role: "AI-ML & Data Science",
                image: "https://via.placeholder.com/150",
                link: "/team/harsh",
                discription: "loremjashbhcsbhucjb",
              },
              {
                name: "Sartaj Ahmad",
                role: "QA Engineer",
                image: "/figma/sartaj.jpg",
                link: "/team/sartaj",
                discription: "loremjashbhcsbhucjb",
              },
            ].map((teamMember, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-4 w-full max-w-4xl mx-auto"
              >
                
                {index % 2 === 0 ? (
                  <>
                    {/* Left side: Name and Role */}
                    <div className="flex flex-col items-start text-left w-full md:w-1/3">
                      <h3 className="text-xl font-bold text-amber-700">{teamMember.name}</h3>
                      <p className="text-gray-400">{teamMember.role}</p>
                    </div>
                    {/* Right side: Profile Picture and Link */}
                    <div className="flex items-center gap-4 w-full md:w-2/3">
                      <Link href={teamMember.link}>
                        <div className="relative text-center p-0 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 w-40 h-40 flex items-center justify-center overflow-hidden cursor-pointer">
                          <div className="relative w-full h-full">
                            <img
                              src={teamMember.image}
                              alt={teamMember.name}
                              className="w-full h-full object-cover rounded-full border-4 border-gray-700 shadow-md"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                              <p className="text-sm text-white px-2">View Profile</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                      {/* Description */}
                      <p className="flex flex-col text-gray-300 text-left w-full">{teamMember.discription}</p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left side: Profile Picture and Link */}
                    <p className="flex flex-col text-gray-300 items-start text-left w-full md:w-2/4">{teamMember.discription}</p>
                    <div className="flex items-center gap-4 w-full md:w-2/3">
                      <Link href={teamMember.link}>
                        <div className="relative text-center p-0 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 w-40 h-40 flex items-center justify-center overflow-hidden cursor-pointer">
                          <div className="relative w-full h-full">
                            <img
                              src={teamMember.image}
                              alt={teamMember.name}
                              className="w-full h-full object-cover rounded-full border-4 border-gray-700 shadow-md"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                              <p className="text-sm text-white px-2">View Profile</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    {/* Right side: Name, Role, and Description */}
                    <div className="flex flex-col items-start text-left w-full md:w-1/3">
                      <h3 className="text-xl font-bold text-amber-700">{teamMember.name}</h3>
                      <p className="text-gray-400">{teamMember.role}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-gray-500 to-gray-900 text-center">
          <h2 className="text-4xl font-bold mb-6">Partner with Dcoder</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Ready to transform your ideas into impactful digital solutions?
            Let&apos;s build the future together.
          </p>
          <a
            href="/contact"
            className="bg-white text-black font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-300 transition"
          >
            Contact Us Today
          </a>
        </section>
      </div>
    </div>
  );
}