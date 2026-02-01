import LogoLoop from './LogoLoop';
import { motion } from "framer-motion"; 
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaDatabase,
  FaGitAlt,
  FaJava,
  FaWpforms,
  FaPython
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiC,
  SiCplusplus,
  SiElectron
} from "react-icons/si";

/* ===== Row 1 ===== */
const techLogosRow1 = [
  { node: <FaHtml5 className="text-orange-500" />, title: 'HTML' },
  { node: <FaCss3Alt className="text-blue-500" />, title: 'CSS' },
  { node: <FaJs className="text-yellow-400" />, title: 'JavaScript' },
  { node: <FaReact className="text-cyan-400" />, title: 'React' },
  { node: <SiNextdotjs className="text-black dark:text-white" />, title: 'Next.js' },
  { node: <SiTypescript className="text-blue-600" />, title: 'TypeScript' },
  { node: <SiElectron className="text-blue-200" />, title: 'Electron' },
  { node: <SiTailwindcss className="text-sky-400" />, title: 'Tailwind CSS' },
];


const techLogosRow2 = [
  
  { node: <FaNodeJs className="text-green-500" />, title: 'Node.js' },
  { node: <SiMongodb className="text-green-600" />, title: 'MongoDB' },
  { node: <FaDatabase className="text-indigo-400" />, title: 'Database' },
  { node: <FaGitAlt className="text-red-500" />, title: 'Git' },
  { node: <FaJava className="text-red-600" />, title: 'Java' },
  { node: <SiC className="text-blue-500" />, title: 'C' },
  { node: <SiCplusplus className="text-blue-600" />, title: 'C++' },
  { node: <FaWpforms className="text-blue-700" />, title: 'WordPress' },
  { node: <FaPython className="text-yellow-600" />, title: 'Python' },
];

export default function SkillsSection() {
  return (
    <div className="h-[260px] mt-40 relative overflow-hidden space-y-6">
      <motion.h1
        className="text-[32px] jua-font mb-6 text-center"
        style={{ color: "hsla(266, 100%, 64%, 1)" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h1>

      {/* ===== First Row ===== */}
      <LogoLoop
        logos={techLogosRow1}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        scaleOnHover
        fadeOut
        ariaLabel="Frontend skills"
      />

      {/* ===== Second Row ===== */}
      <LogoLoop
        logos={techLogosRow2}
        speed={120}
        direction="right"
        logoHeight={48}
        gap={40}
        scaleOnHover
        fadeOut
        ariaLabel="Backend & other skills"
        
      />

    </div>
  );
}
