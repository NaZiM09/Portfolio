import { motion } from "framer-motion";

import { FaReact, FaNodeJs, FaJs, FaCss3Alt, FaHtml5, FaDatabase, FaGitAlt, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiC, SiCplusplus} from "react-icons/si";


const skillsRow1 = [
    { name: "Git", icon: <FaGitAlt size={50} color="#F05032" /> },
    { name: "Java", icon: <FaJava size={50} color="#E76F00" /> },
    { name: "C", icon: <SiC size={50} color="#A8B9CC" /> },
    { name: "C++", icon: <SiCplusplus size={50} color="#00599C" /> },
  ];

const skillsRow2 = [
    { name: "React", icon: <FaReact size={50} color="#61DAFB" /> },
    { name: "Next.js", icon: <SiNextdotjs size={50} color="#ffffff" /> },
    { name: "JavaScript", icon: <FaJs size={50} color="#F7DF1E" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={50} color="#38BDF8" /> },
    { name: "Node.js", icon: <FaNodeJs size={50} color="#8CC84B" /> },
    { name: "CSS3", icon: <FaCss3Alt size={50} color="#1572B6" /> },
    { name: "HTML5", icon: <FaHtml5 size={50} color="#E34F26" /> },
    { name: "Database", icon: <FaDatabase size={50} color="#FFA500" /> },
];

export default function SkillsSection() {
    return (
        <div className="flex flex-col ml-5 items-center mt-10 text-white">
           
            <motion.h1
                className="text-[32px] jua-font font- mb-6"
                style={{  color: "hsla(266, 100%, 64%, 1)" }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                My Skills
            </motion.h1>

          
            <motion.div
                className="flex space-x-6 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {skillsRow1.map((skill) => (
                    <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                    >
                        {skill.icon}
                    </motion.div>
                ))}
            </motion.div>

          
            <motion.div
                className="flex space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                {skillsRow2.map((skill) => (
                    <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                    >
                        {skill.icon}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
