import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import SwingLoader from "./custom controls/pingo";

export default function HeroSection() {
  return (
    <section
      id="HeroSection"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center px-6 md:px-12 py-10 bg-gradient-to-b"
    >
      {/* النصوص والأزرار */}
      <div className="flex-1 flex flex-col justify-center items-start text-center md:text-left">
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
            style={{ color: "hsla(260, 20%, 86%, 1)" }}
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
          style={{ color: "hsla(260, 20%, 86%, 1)" }}
        >
          Hi, I'm{" "}
          <span style={{ color: "hsla(266, 100%, 64%, 1)" }} className="jua-font">
            Benalia Nazim
          </span>
          , a software developer skilled in both frontend and backend. I create
          modern, functional, and responsive websites.
          <br />
          <span style={{ color: "hsla(266, 100%, 64%, 1)" }}>
            Let's build something great together!
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 flex space-x-6"
        >
          <a
            href="https://github.com/NaZiM09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsla(260,20%,86%,1)] hover:text-[hsla(266,100%,64%,1)] text-[32px] sm:text-[40px] transition hover:scale-105"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.facebook.com/na.zim.214980"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsla(260,20%,86%,1)] hover:text-[hsla(266,100%,64%,1)] text-[32px] sm:text-[40px] transition hover:scale-105"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.linkedin.com/in/benalia-nazim-7235782a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsla(260,20%,86%,1)] hover:text-[hsla(266,100%,64%,1)] text-[32px] sm:text-[40px] transition hover:scale-105"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/_naz___im/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsla(260,20%,86%,1)] hover:text-[hsla(266,100%,64%,1)] text-[32px] sm:text-[40px] transition hover:scale-105"
          >
            <FaInstagram />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="/pdf/CV.pdf"
            download
            className="px-6 py-3 text-[hsla(261,57%,90%,1)] bg-[hsla(266,100%,53%,1)] rounded-lg shadow-md 
              transition-all duration-300 hover:shadow-[0px_0px_20px_hsla(266,100%,53%,0.7)] hover:scale-105 text-center"
          >
            Download CV
          </a>

          <a
            href="#ProjectsSection"
            className="px-6 py-3 text-[hsla(266,100%,53%,1)] bg-[hsla(261,57%,90%,1)] rounded-lg shadow-md 
              transition-all duration-300 hover:shadow-[0px_0px_20px_hsla(261,57%,90%,0.7)] hover:scale-105 text-center"
          >
            Show Projects
          </a>
        </motion.div>
      </div>

      {/* صورة البروفايل */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex-1 flex justify-center items-center relative mb-10 md:mb-0"
      >
        <div className="w-60 h-60 md:w-72 md:h-72 rounded-full absolute bg-[hsla(266,100%,64%,0.4)] blur-3xl"></div>
        <img
          src="/pictures/me4.jpg"
          alt="Benalia Nazim"
          className="rounded-full shadow-xl relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]"
        />
      </motion.div>
    </section>
  );
}
