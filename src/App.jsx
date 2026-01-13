
import './App.css'

import React from "react";
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import WelcomeSection from "./compontes/WelcomeSection";
import AboutSection from "./compontes/AboutSection";
import SkillsSection from "./compontes/SkillsSection";
import ProjectsSection from "./compontes/ProjectsSection";
import ContactSection from "./compontes/ContactSection";
import ExperienceSection from "./compontes/Experiance_section"
import Footer from './compontes/footer';
import Particles_back from './compontes/ParticlesBackground';
import Navbar from './compontes/Navbar';

import "animate.css/animate.min.css";


import './index.css';

const App = () => {


  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <div id="home"><WelcomeSection /></div>
            <div id="about"><AboutSection /></div>
            <div id="skills"><SkillsSection /></div>
            <div id="projects"><ProjectsSection /></div>
            <div id="experience"><ExperienceSection /></div>
            <div id="contact"><ContactSection /></div>
            <Footer />


          </>
          } />
          {/* <Route path="/home" element={<WelcomeSection />} /> */}
          <Route path="/contact" element={<ContactSection />} />




        </Routes>
      </div>
    </BrowserRouter>


  );

}






//     <div className=" rgb(18, 18, 18) text-white">

//       {/* <Particles_back/> */}
//       <Navbar/>
//       <WelcomeSection />
//       <AboutSection />
//       <SkillsSection />
//       <ProjectsSection />
//       <ExperienceSection/>
//       <ContactSection />
//       <Footer/>
//     </div>
//   );
// };

export default App;


