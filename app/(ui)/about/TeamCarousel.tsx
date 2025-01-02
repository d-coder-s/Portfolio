'use client';

import React, { useState, useEffect, useRef } from 'react';

const TeamCarousel = () => {
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
  const teamContainerRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    { name: 'Abhishek Jaiswal', role: 'Frontend Developer, Lead Designer', image: '/figma/abhishek.jpeg', link: 'https://www.linkedin.com/in/abhishek-jaiswal-278890246/' },
    { name: 'Vedant Pandey', role: 'Full Stack Developer', image: '/figma/vedant.jpeg', link: 'https://www.linkedin.com/in/vedant-pandey7/' },
    { name: 'Aman Pal', role: 'Full Stack Developer', image: '/figma/aman.jpg', link: 'https://www.linkedin.com/in/aman-pal-ap/' },
    { name: 'Arush Agarwal', role: 'Backend Developer', image: '/figma/aaru.jpg', link: 'https://www.linkedin.com/in/aarush-agarwal-ba4b16249/' },
    { name: 'Harsh Gupta', role: 'AI-ML & Data Science', image: '/figma/harsh.jpg', link: 'https://www.linkedin.com/in/harsh-gupta-1b305b25b/' },
    { name: 'Utkarsh Pal', role: 'App Developer', image: '/figma/utkarsh.jpg', link: 'https://www.linkedin.com/in/utkarsh8671/' },
    { name: 'Ankit Kumar', role: 'Backend Developer', image: '/figma/ankit.jpeg', link: 'https://www.linkedin.com/in/ankit-kumar-b223762ba/' },
    { name: 'Sartaj Ahmad', role: 'QA Engineer', image: '/figma/sartaj.jpg', link: 'https://www.linkedin.com/in/sartaj-ahamad-26442a228/' },
  ];

  // Automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMemberIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [teamMembers.length]);

  // Scroll the team container when the current index changes
  useEffect(() => {
    if (teamContainerRef.current) {
      const memberWidth = teamContainerRef.current.children[0].clientWidth;
      teamContainerRef.current.style.transition = "transform 1s ease-in-out";
      teamContainerRef.current.style.transform = `translateX(-${currentMemberIndex * memberWidth}px)`;
    }
  }, [currentMemberIndex]);

  return (
    <div className="overflow-hidden">
      <div ref={teamContainerRef} className="flex transition-transform duration-1000 ease-in-out">
        {teamMembers.map((member, index) => (
          <div key={index} className="min-w-[250px] mx-4 flex-shrink-0 text-center">
            <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="font-semibold text-xl">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <a href={member.link} className="text-blue-500 hover:underline mt-2 block">View Profile</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCarousel;
