import HeroSection from './HeroSection'
import SkillsSection from './SkilsSection'
import ProjectsSection from './ProjectsSection'
import ContactSection from './ContactSection'
import Navbar from './Navbar'
import AboutSection from './AboutSection'
import Footer from './Footer'
import LightPillar from './LightPillar'

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">

      {/* 🔥 BACKGROUND EFFECT */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <LightPillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={1}
          rotationSpeed={0.3}
          glowAmount={0.002}
          pillarWidth={3}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={25}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
      </div>

      {/* Dark overlay (اختياري بصح مهم) */}
      <div className="absolute inset-0 bg-black/70 z-[1]" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-[2]">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>

    </div>
  )
}
