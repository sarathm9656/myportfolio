
import React, { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LaunchIcon from "@mui/icons-material/Launch"; // Keeping for reference or fallback

const ProjectsSection = () => {
  const projects = [
    {
      title: "Online Exam Portal",
      description: "A comprehensive platform for conducting and managing online exams with real-time results and analytics.",
      tags: ["React", "Node.js", "MongoDB"],
      viewLink: "#",
      githubLink: "https://github.com/sarathm9656",
      gradient: "from-green-400 to-blue-500",
    },
    {
      title: "Portfolio Website",
      description: "A personal showcase of my work, skills, and professional journey, featuring dynamic animations.",
      tags: ["React", "Tailwind", "Framer Motion"],
      viewLink: "#",
      githubLink: "https://github.com/sarathm9656/portfolio",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Instagram Clone",
      description: "A responsive clone of the Instagram interface, featuring a feed, profile section, and story layout.",
      tags: ["HTML", "CSS", "JavaScript"],
      viewLink: "https://instasample.netlify.app/#",
      githubLink: "https://github.com/sarathm9656",
      gradient: "from-yellow-400 via-red-500 to-purple-600",
    },
    {
      title: "Student Construction",
      description: "A management system for student construction projects, tracking progress and resource allocation.",
      tags: ["MERN Stack", "Dashboard"],
      viewLink: "#",
      githubLink: "https://github.com/sarathm9656",
      gradient: "from-orange-400 to-red-500",
    },
    {
      title: "E-Commerce Dashboard (Draft)",
      description: "A robust admin dashboard for managing products, orders, and customers with real-time analytics.",
      tags: ["React", "Redux", "Material UI"],
      viewLink: "", // Empty means draft/no link
      githubLink: "",
      gradient: "from-gray-700 to-gray-900",
      isDraft: true,
    },
    {
      title: "Social Media App (Draft)",
      description: "A next-gen social platform focused on privacy and community building with real-time chat.",
      tags: ["Next.js", "Socket.io", "Prisma"],
      viewLink: "",
      githubLink: "",
      gradient: "from-gray-700 to-gray-900",
      isDraft: true,
    },
  ];

  const [visibleCount, setVisibleCount] = useState(4); // Show 4 initially

  const handleShowMore = () => {
    if (visibleCount < projects.length) {
      setVisibleCount(projects.length);
    } else {
      setVisibleCount(4); // Collapse back to 4
    }
  };

  return (
    <section className="bg-[#1a1a1a] text-white py-24 relative overflow-hidden" id="projects">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-green-900/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h3 className="text-xl font-semibold text-green-500 mb-4 tracking-wider">03. PROJECTS</h3>

        <h2 className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-4">
          <span className="bg-gradient-to-r from-green-400 to-green-600 w-16 h-1.5 rounded-full"></span>
          <span>Featured Work</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {projects.slice(0, visibleCount).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Show More Button (Visible for ALL views if there are more projects) */}
        {projects.length > 4 && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={handleShowMore}
              className="px-8 py-3 bg-transparent border border-green-500 text-green-400 font-semibold rounded-full hover:bg-green-500/10 transition-all shadow-lg hover:shadow-green-500/25 flex items-center gap-2"
            >
              {visibleCount < projects.length ? "Show More Projects" : "Show Less"}
              <span className={`transform transition-transform duration-300 ${visibleCount >= projects.length ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className={`group relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 border border-gray-800 hover:border-green-500/50 ${project.isDraft ? 'opacity-70 hover:opacity-100' : 'hover:-translate-y-2'}`}>

      {/* Draft Label */}
      {project.isDraft && (
        <div className="absolute top-4 right-4 z-40 bg-gray-800 text-gray-400 text-xs font-bold px-3 py-1 rounded-full border border-gray-700 uppercase tracking-widest">
          Coming Soon
        </div>
      )}

      {/* Browser Window Mockup */}
      <div className="h-64 bg-gray-800 relative overflow-hidden group-hover:bg-gray-750 transition-colors">
        {/* Browser Header */}
        <div className="absolute top-0 left-0 w-full h-8 bg-gray-900/80 backdrop-blur-md flex items-center px-4 space-x-2 z-20 border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          {/* URL Bar Mockup */}
          <div className="ml-4 flex-1 h-4 bg-gray-800 rounded-full opacity-50"></div>
        </div>

        {/* Project Visual */}
        <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-all duration-700 flex items-center justify-center transform group-hover:scale-110`}>
          {/* Inner Content to simulate UI */}
          <div className="w-3/4 h-3/4 bg-gray-900/90 rounded-lg shadow-2xl p-4 transform rotate-[-2deg] group-hover:rotate-0 transition-transform duration-500 border border-gray-700">
            <div className="w-full h-4 bg-gray-700 rounded mb-2 opacity-50"></div>
            <div className="w-2/3 h-4 bg-gray-700 rounded mb-4 opacity-50"></div>
            <div className="flex gap-2">
              <div className="w-1/3 h-20 bg-gray-800 rounded opacity-50"></div>
              <div className="w-1/3 h-20 bg-gray-800 rounded opacity-50"></div>
              <div className="w-1/3 h-20 bg-gray-800 rounded opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Overlay on hover (Hides links for drafts) */}
        {!project.isDraft && (
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-sm z-30">
            {project.viewLink && (
              <a href={project.viewLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-green-500 rounded-full text-black hover:bg-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg" title="View Project">
                <VisibilityIcon />
              </a>
            )}

            {/* GitHub Link */}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 rounded-full text-white hover:bg-white hover:text-black transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75 shadow-lg" title="View Code">
                <GitHubIcon />
              </a>
            )}
          </div>
        )}
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="px-3 py-1 text-xs font-medium text-green-400 bg-green-400/10 rounded-full border border-green-400/20">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
