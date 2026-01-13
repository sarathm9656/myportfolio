
import React from "react";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function ExperienceSection() {
  const experiences = [
    {
      role: "JR.SOFTWARE ENGINEER",
      company: "Elayne Digital",
      logo: "../src/img/elayne_logo.jpg", // Placeholder
      location: "Kerala Startup Mission, Ernakulam",
      duration: "Oct 27, 2025 - Present",
      description: "Contributing to innovative digital solutions and collaborating with a dynamic team to build scalable web applications. Focusing on modern UI/UX practices and robust backend systems.",
      active: true,
    },
    {
      role: "MERN STACK INTERN",
      company: "Synnefo Solutions",
      logo: "../src/img/synnefo_logo.png" ,// Placeholder
      location: "ernnakulam",
      duration: "Dec 2024 - Jan 2025",
      description: "Completed a 5-month MERN Stack course followed by a 1-month internship. Built responsive and scalable web applications using MongoDB, Express, React, and Node.js.",
      active: false,
    },
    {
      role: "FULL STACK INTERN",
      company: "Laxmi Infotech",
      logo: "../src/img/laxmiinfotech_logo.webp", // Placeholder
      location: "Pathadipalam,Ernnakulam",
      duration: "May 2023",
      description: "Developed interactive user interfaces with React, focusing on intuitive user experiences. Collaborated with the design team to implement UI/UX for several projects.",
      active: false,
    }
  ];

  return (
    <section className="py-20 bg-[#1a1a1a] text-white relative overflow-hidden" id="experience">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h3 className="text-xl font-semibold text-green-500 mb-4 tracking-widest">04. EXPERIENCE</h3>

        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white flex items-center justify-start gap-4">
          <span className="bg-gradient-to-r from-green-400 to-green-600 w-16 h-1.5 rounded-full"></span>
          <span>My Journey</span>
        </h2>

        <div className="relative border-l-2 border-gray-800 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className={`absolute -left-[9px] md:-left-[11px] top-6 w-5 h-5 md:w-6 md:h-6 rounded-full border-4 ${exp.active ? 'bg-black border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)]' : 'bg-gray-900 border-gray-600'} transition-all duration-300 group-hover:border-green-400 group-hover:scale-125 z-20`}></div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-green-500/30 transition-all duration-300 hover:shadow-2xl hover:bg-gray-800/80 group-hover:-translate-y-1">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-4">

                  {/* Company Logo */}
                  <div className="w-16 h-16 rounded-xl bg-gray-800 flex items-center justify-center overflow-hidden border border-gray-700 shrink-0 shadow-lg group-hover:border-green-500/50 transition-colors duration-300">
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1 w-full">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">{exp.role}</h3>
                        <h4 className="text-lg text-gray-300 font-medium flex items-center gap-2 mt-1">
                          <BusinessCenterIcon fontSize="small" className="text-green-500/80" />
                          {exp.company}
                        </h4>
                      </div>

                      {/* Date & Location */}
                      <div className="flex flex-col items-start md:items-end text-sm text-gray-400 gap-2 mt-2 md:mt-0">
                        <span className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
                          <CalendarMonthIcon fontSize="small" className="text-green-500/70" />
                          {exp.duration}
                        </span>
                        {exp.location && (
                          <span className="flex items-center gap-1">
                            <LocationOnIcon fontSize="small" className="text-gray-500" />
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed text-base md:text-lg border-t border-gray-800 pt-4 mt-2">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
