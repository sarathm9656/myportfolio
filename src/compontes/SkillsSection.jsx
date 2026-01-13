
import React from "react";
import 'devicon/devicon.min.css';

function SkillsSection() {

  // Categorized Skills Data
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", iconClass: "devicon-react-original", hoverColor: "group-hover:text-[#61DAFB]" },
        { name: "JavaScript", iconClass: "devicon-javascript-plain", hoverColor: "group-hover:text-[#F7DF1E]" },
        { name: "HTML5", iconClass: "devicon-html5-plain", hoverColor: "group-hover:text-[#E34F26]" },
        { name: "CSS3", iconClass: "devicon-css3-plain", hoverColor: "group-hover:text-[#1572B6]" },
        { name: "Bootstrap", iconClass: "devicon-bootstrap-plain", hoverColor: "group-hover:text-[#7952B3]" },
        { name: "Tailwind", iconClass: "devicon-tailwindcss-plain", hoverColor: "group-hover:text-[#06B6D4]" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", iconClass: "devicon-nodejs-plain", hoverColor: "group-hover:text-[#339933]" },
        { name: "Express", iconClass: "devicon-express-original", hoverColor: "group-hover:text-white" },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", iconClass: "devicon-mongodb-plain", hoverColor: "group-hover:text-[#47A248]" },
        { name: "MySQL", iconClass: "devicon-mysql-plain", hoverColor: "group-hover:text-[#4479A1]" },
        { name: "Firebase", iconClass: "devicon-firebase-plain", hoverColor: "group-hover:text-[#FFCA28]" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", iconClass: "devicon-git-plain", hoverColor: "group-hover:text-[#F05032]" },
        { name: "GitHub", iconClass: "devicon-github-original", hoverColor: "group-hover:text-white" },
        { name: "Postman", iconClass: "devicon-postman-plain", hoverColor: "group-hover:text-[#FF6C37]" },
        { name: "Figma", iconClass: "devicon-figma-plain", hoverColor: "group-hover:text-[#F24E1E]" },
      ]
    }
  ];

  return (
    <section className="bg-[#1a1a1a] py-20 relative overflow-hidden" id="skills">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-900/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <h3 className="text-xl font-semibold text-green-500 mb-2 tracking-widest">02. SKILLS</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center justify-center md:justify-start gap-4">
            <span className="bg-gradient-to-r from-green-400 to-green-600 w-16 h-1.5 rounded-full hidden md:block"></span>
            <span>My Tech Stack</span>
          </h2>
        </div>

        {/* Categorized Skills Grid */}
        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-2xl font-bold text-gray-300 mb-8 border-l-4 border-green-500 pl-4">{category.title}</h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {category.skills.map((skill, index) => (
                  <div key={index} className="group flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-transparent border border-gray-800 hover:border-green-500/50 transition-all duration-500 hover:bg-gray-900/50 relative overflow-hidden shadow-lg hover:shadow-green-900/20 cursor-default">

                    {/* Unique Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Icon - Grayscale initially, color on hover + Float Animation */}
                    <i className={`${skill.iconClass} text-3xl md:text-4xl text-gray-500 transition-all duration-300 ${skill.hoverColor} group-hover:scale-110 drop-shadow-2xl animate-float`} style={{ animationDelay: `${index * 0.1}s` }}></i>

                    {/* Skill Name */}
                    <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors tracking-wide uppercase delay-75 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SkillsSection;
