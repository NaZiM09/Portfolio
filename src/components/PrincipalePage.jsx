import { useState } from 'react'


import HeroSection from './HeroSection'
import SkillsSection from './SkilsSection'
import ProjectsSection from './ProjectsSection'
import ContactSection from './ContactSection'
import Navbar from './Navbar'
import AboutSection from './AboutSection'
import Footer from './Footer'
export default function Page() {

  

  return (
    <>
   <div className="bg-gradient-to-b from-[#130428] via-[#38126D] to-[#1B0837]"
   >
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </div>
    </>
  )
}


