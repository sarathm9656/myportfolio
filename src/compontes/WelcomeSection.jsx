import React, { useState, useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Particles_back from "./ParticlesBackground";
import 'animate.css';

const Typewriter = ({ words, typingSpeed = 150, deletingSpeed = 100, pauseTime = 2000 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index === words.length) {
      setIndex(0);
      return;
    }

    if (subIndex === words[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, words, typingSpeed, deletingSpeed, pauseTime]);

  // Blinking cursor effect
  useEffect(() => {
    const blinkTimeout = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkTimeout);
  }, []);

  return (
    <span className="text-green-400">
      {words[index].substring(0, subIndex)}
      <span className={`${blink ? "opacity-100" : "opacity-0"}`}>|</span>
    </span>
  );
};

export default function WelcomeSection() {
  const roles = [
    "MERN Stack Developer.",
    "Frontend Developer.",
    "Backend Developer.",
    "Web Designer."
  ];

  return (
    <>
      {/* Section with particles background - Full Screen Cover */}
      <div className="relative h-screen w-full bg-[#1a1a1a] text-white overflow-hidden" id="home">

        {/* Particles Background - Absolute Full Coverage with lower z-index */}
        <div className="absolute inset-0 z-0">
          <Particles_back />
        </div>

        {/* Content Overlay - z-10 to stay above particles */}
        <div className="relative z-10 h-full w-full flex flex-col justify-between p-8 sm:p-14">

          {/* Top Right: Resume */}
          <div className="flex justify-end pt-[50px]">
            <a
              href="/Sarath M.pdf"
              download="SarathM_Resume.pdf"
              className="text-white hover:text-green-400 font-medium text-lg border border-white hover:border-green-400 px-4 py-2 rounded transition-all duration-300"
            >
              Resume
            </a>
          </div>

          {/* Center Left: Main Content */}
          <div className="flex flex-col justify-center items-start max-w-4xl mt-[-50px] md:mt-0 pl-6 sm:pl-12 md:pl-24 lg:pl-32 pt-[100px]">
            <h6 className="text-green-400 font-mono text-sm md:text-base mb-4 animate__animated animate__fadeInDown">
              hi! my name is
            </h6>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-100 tracking-tight mb-4 animate__animated animate__fadeInUp animate__delay-1s">
              Sarath M
            </h1>

            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-400 animate__animated animate__fadeInUp animate__delay-1s min-h-[60px] md:min-h-[80px]">
              I am a <Typewriter words={roles} />
            </h2>

            {/* CTA Button */}
            <div className="mt-8 animate__animated animate__fadeInUp animate__delay-2s">
              <a href="#about" className="px-6 py-3 border border-green-400 text-green-400 rounded-tl-[20px] rounded-br-[20px] hover:bg-green-400/10 transition-all duration-300 font-mono text-sm">
                About Me
              </a>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex justify-between items-end w-full pb-20">

            {/* Bottom Left: Say Hello */}
            <div className="animate__animated animate__fadeInLeft animate__delay-2s">
              <a href="mailto:sarathmullath2003@gmail.com" className="text-xl md:text-2xl font-bold hover:text-green-400 transition-colors">
                Say Hello!
              </a>
            </div>

            {/* Bottom Right: Social Icons (Vertical Stack) */}
            <div className="flex flex-col gap-6 text-gray-400 animate__animated animate__fadeInRight animate__delay-2s">
              <a href="https://www.instagram.com/sarath_0z4?igsh=dnFyNHltbjRvNmR5" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 hover:-translate-x-1 transition-all duration-300">
                <InstagramIcon fontSize="medium" className="md:!text-[1.8rem]" />
              </a>
              <a href="https://github.com/sarathm9656" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 hover:-translate-x-1 transition-all duration-300">
                <GitHubIcon fontSize="medium" className="md:!text-[1.8rem]" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 hover:-translate-x-1 transition-all duration-300">
                <LinkedInIcon fontSize="medium" className="md:!text-[1.8rem]" />
              </a>
              <a href="mailto:sarathmullath2003@gmail.com" className="hover:text-green-500 hover:-translate-x-1 transition-all duration-300">
                <EmailIcon fontSize="medium" className="md:!text-[1.8rem]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
