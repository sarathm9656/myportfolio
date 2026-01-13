
import React from "react";
import TagCloudComponent from "./TagCloudComponent";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'; // Activity/Role icon
import CodeIcon from '@mui/icons-material/Code'; // Tech icon
import VerifiedIcon from '@mui/icons-material/Verified'; // Success icon

function AboutSection() {

  // Stats Data
  const stats = [
    { label: "Years Experience", value: "01+", icon: <VerifiedIcon className="text-green-500" /> },
    { label: "Completed Projects", value: "05+", icon: <CodeIcon className="text-blue-500" /> },
    { label: "Happy Clients", value: "02+", icon: <EmojiPeopleIcon className="text-yellow-500" /> },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-[#1a1a1a] text-white min-h-screen flex items-center justify-center overflow-hidden" id="about">

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h6 className="text-xl font-semibold text-green-500 mb-2 tracking-widest text-left">01. INTRO</h6>
          <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-4">
            <span className="bg-gradient-to-r from-green-400 to-green-600 w-16 h-1.5 rounded-full"></span>
            <span>About Me</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Left Column: Text Content */}
          <div className="flex-1 space-y-8">
            <div className="prose prose-lg text-gray-400 leading-relaxed text-justify md:text-left">
              <p>
                Hello! My name is <span className="text-green-400 font-bold">Sarath M</span> and I enjoy creating things that live on the internet. My interest in web development started back in 2023 when I decided to try editing custom Tumblr themes — turns out hacking together buttons and gradients taught me a lot about HTML & CSS!
              </p>
              <p>
                Fast-forward to today, and I’ve had the privilege of building accessible, inclusive products and digital experiences. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
              </p>

              {/* Quote Block */}
              <div className="relative border-l-4 border-green-500 pl-6 py-4 my-8 bg-gray-900/50 rounded-r-xl italic text-gray-300 shadow-lg">
                <span className="absolute -top-4 left-4 text-6xl text-green-500/20 font-serif">"</span>
                "Code is like humor. When you have to explain it, it’s bad."
                <span className="block mt-3 text-sm font-bold text-green-500 not-italic">— Cory House</span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-2">
                    {stat.icon}
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                  </div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a href="#contact" className="inline-flex items-center gap-2 text-green-400 font-bold hover:text-green-300 transition-colors border-b-2 border-green-500 hover:border-green-300 pb-1 text-sm uppercase tracking-widest group">
                Let’s build something amazing
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual / Tag Cloud */}
          <div className="flex-1 w-full flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative p-2 md:p-10 bg-gray-900/40 backdrop-blur-md rounded-full md:rounded-2xl border border-gray-800 shadow-2xl hover:border-green-500/30 transition-all duration-500 group w-[300px] h-[300px] md:w-auto md:h-auto flex items-center justify-center">
              {/* Dynamic Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

              {/* Scale down slightly on mobile to ensure it fits */}
              <div className="scale-75 md:scale-100 transform transition-transform duration-300">
                <TagCloudComponent />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
