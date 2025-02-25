import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import SwingLoader from "./custom controls/pingo";


export default function HeroSection() {
  return (
    <section className="h-[560px] flex items-center px-12 bg-gradient-to-b">
     
      <div className="flex-1  flex flex-col justify-center items-start">
        
       
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-2"
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[24px] leading-[30px] jua-font font-normal"
            style={{  color: "hsla(260, 20%, 86%, 1)" }}
          >
            Hello! I am
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }} 
            className="text-[24px] leading-[30px] jua-font font-normal"
            style={{ color: "hsla(266, 100%, 64%, 1)" }}
          >
            Benalia Nazim
          </motion.h1>
        </motion.div>

       
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }} 
          className="mt-4 text-[18px] jua-font leading-[28px] font-normal max-w-lg"
          style={{  color: "hsla(260, 20%, 86%, 1)" }}
        >
          Hi, I'm{" "}
          <span style={{ color: "hsla(266, 100%, 64%, 1)" }} className="jua-font">Benalia Nazim</span>, a software
          developer skilled in both frontend and backend. I create modern, functional,
          and responsive websites.
          <br />
          <span style={{ color: "hsla(266, 100%, 64%, 1)" }}>
            Let's build something great together!
          </span>
        </motion.p>

    
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.8 }} 
          className="mt-6 ml-2 flex space-x-15 jua-font" 
        >
          <a href="https://github.com/NaZiM09" target="_blank" rel="noopener noreferrer"
            className="text-[hsla(260,20%,86%,1)] hover:text-[hsla(266,100%,64%,1)] text-[40px] transition hover:scale-105">
            <FaGithub />
          </a>

          <a href="https://www.facebook.com/profile.php?id=100021725253482" target="_blank" rel="noopener noreferrer"
            className="text-[hsla(260,20%,86%,1)] hover:text-[hsla(266,100%,64%,1)] text-[40px] transition hover:scale-105">
            <FaFacebook />
          </a>

          <a href="https://www.linkedin.com/in/benalia-nazim-7235782a0/" target="_blank" rel="noopener noreferrer"
            className="text-[hsla(260,20%,86%,1)] hover:text-[hsla(266,100%,64%,1)] text-[40px] transition hover:scale-105">
            <FaLinkedin />
          </a>

          <a href="https://www.instagram.com/nazim____69/" target="_blank" rel="noopener noreferrer"
            className="text-[hsla(260,20%,86%,1)] hover:text-[hsla(266,100%,64%,1)] text-[40px] transition hover:scale-105">
            <FaInstagram />
          </a>
        </motion.div>

     <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 1 }} 
       className="mt-8 ml-5 flex space-x-4"
       >
   
       <a 
       href="src/pdf/CV.pdf" 
       download 
       className="px-6 py-3  text-[hsla(261,57%,90%,1)] bg-[hsla(266,100%,53%,1)] rounded-lg shadow-md 
       transition-all duration-300 hover:shadow-[0px_0px_20px_hsla(266,100%,53%,0.7)] hover:scale-105"
         >
       Download CV
       </a>

  
      <a 
       href="C:\Users\nazim\Desktop\home\web\Portfolio\nazim-portfolio\src\components\ProjectsSection.jsx" 
       className="px-6 py-3 text-[hsla(266,100%,53%,1)] bg-[hsla(261,57%,90%,1)] rounded-lg shadow-md 
       transition-all duration-300 hover:shadow-[0px_0px_20px_hsla(261,57%,90%,0.7)] hover:scale-105"
      >
        Show Projects
      </a>
     </motion.div>


      </div>

      {/* القسم الأيمن: الصورة */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1, delay: 0.5 }} 
        className="flex-1 flex justify-center items-center left-12 relative"
      >
        <div className="w-72 h-72 rounded-full absolute bg-[hsla(266,100%,64%,0.4)] blur-3xl"></div>
        <img
          src="public/pictures/me4.jpg"
          alt="Benalia Nazim"
          className="rounded-full shadow-xl relative"
          style={{ width: "250px", height: "249.6543273925781px" }}
        />
      </motion.div>
      
    </section>
  );
}
