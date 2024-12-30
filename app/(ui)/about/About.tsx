
import React from "react";
import TeamCarousel from './TeamCarousel';

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
          <TeamCarousel />
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