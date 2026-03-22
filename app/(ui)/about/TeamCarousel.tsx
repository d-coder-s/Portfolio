// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';

// const TeamCarousel = () => {
//   const teamMembers = [
//     { name: 'Abhishek Jaiswal', role: 'Frontend Developer, Lead Designer', image: '/figma/abhishek.jpeg', link: 'https://www.linkedin.com/in/abhishek-jaiswal-278890246/' },
//     { name: 'Vedant Pandey', role: 'Full Stack Developer', image: '/figma/vedant.jpeg', link: 'https://www.linkedin.com/in/vedant-pandey7/' },
//     { name: 'Aman Pal', role: 'Full Stack Developer', image: '/figma/aman.jpg', link: 'https://www.linkedin.com/in/aman-pal-ap/' },
//     { name: 'Arush Agarwal', role: 'Backend Developer', image: '/figma/aaru.jpg', link: 'https://www.linkedin.com/in/aarush-agarwal-ba4b16249/' },
//     { name: 'Harsh Gupta', role: 'AI-ML & Data Science', image: '/figma/harsh.jpg', link: 'https://www.linkedin.com/in/harsh-gupta-1b305b25b/' },
//     { name: 'Utkarsh Pal', role: 'App Developer', image: '/figma/utkarsh.jpg', link: 'https://www.linkedin.com/in/utkarsh8671/' },
//     { name: 'Ankit Kumar', role: 'Backend Developer', image: '/figma/ankit.jpeg', link: 'https://www.linkedin.com/in/ankit-kumar-b223762ba/' },
//     { name: 'Sartaj Ahmad', role: 'QA Engineer', image: '/figma/sartaj.jpg', link: 'https://www.linkedin.com/in/sartaj-ahamad-26442a228/' },
//   ];

//   // Duplicate the array to create the seamless loop effect
//   const carouselContent = [...teamMembers, ...teamMembers];

//   return (
//     <div className="overflow-hidden relative w-full py-10">
//       <motion.div
//         className="flex gap-8 w-max"
//         animate={{ x: [0, "-50%"] }}
//         transition={{
//           repeat: Infinity,
//           ease: "linear",
//           duration: 30,
//         }}
//       >
//         {carouselContent.map((member, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05, y: -5 }}
//             className="w-[280px] bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl flex-shrink-0 flex flex-col items-center text-center transition-all group hover:bg-white/20"
//           >
//             <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-blue-500/30 group-hover:border-blue-400 transition-colors">
//               <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
//             </div>

//             <h3 className="font-bold text-xl text-white mb-1">{member.name}</h3>
//             <p className="text-blue-300 text-sm font-medium mb-4">{member.role}</p>

//             <a
//               href={member.link}
//               target="_blank"
//               rel="noreferrer"
//               className="px-4 py-2 rounded-full bg-blue-600/20 text-blue-300 text-sm font-semibold hover:bg-blue-600 hover:text-white transition-colors"
//             >
//               View Profile
//             </a>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Gradient fade overlay for smooth edge appearance */}
//       <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none" />
//       <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none" />
//     </div>
//   );
// };

// export default TeamCarousel;

// Team member info removed intentionally.
// This component is reserved for future use.

const TeamCarousel = () => null;

export default TeamCarousel;
