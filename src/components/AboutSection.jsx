import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <div>
          <div className="flex justify-center mb-10 ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center mb-10 space-x-2 justify-center md:justify-start"
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="leading-[30px] jua-font text-[28px] md:text-[32px] text-center md:text-left"
            style={{ color: "hsla(266, 100%, 64%, 1)" }}
          >
            About Me
          </motion.h1>
        </motion.div>
</div>
    <div
  id="AboutSection"
  className="relative flex flex-col md:flex-row items-center justify-center md:justify-between mb-10 px-4 md:px-16"
>
  {/* Text Section */}
  <div className="w-full md:w-[60%]">
    <div className="w-full max-w-[750px] rounded-[20px] bg-[hsla(265,61%,16%,1)] mt-5 shadow-lg p-5 mx-auto md:mx-0">
      <p
        className="mt-4 text-base md:text-[18px] jua-font leading-[26px] md:leading-[28px] font-normal"
        style={{ color: "hsla(260, 20%, 86%, 1)" }}
      >
        Who I Am <br />
        <span>Hi, I’m </span>
        <span
          style={{ color: "hsla(266, 100%, 64%, 1)" }}
          className="jua-font"
        >
          Nazim Benalia{" "}
        </span>
        <span>, a 21-year-old university student and passionate </span>
        <br />
        <span style={{ color: "hsla(266, 100%, 64%, 1)" }}>
          software engineer{" "}
        </span>
        <span>from Algeria.</span>
        <br /> <br />
        <span>
          My Education
          <br />
          I’m currently a third-year Computer Science student in Boumerdas
          University.
        </span>
        <br /> <br />
       <span>
  What I Can Do
  <br />
  I specialize in building responsive and dynamic websites using cutting-edge
  technologies like{" "}
</span>
<span style={{ color: "hsla(266, 100%, 64%, 1)" }}>
  React, Next.js, CSS, HTML, PHP, and Electron
</span>
<span>
  . With experience in both frontend and backend development, I’m equipped to handle
  end-to-end development tasks efficiently.
  <br />
  I also have experience building desktop applications using{" "}
</span>
<span style={{ color: "hsla(266, 100%, 64%, 1)" }}>
  Electron + React
</span>
<span>
  , and working with databases like{" "}
</span>
<span style={{ color: "hsla(266, 100%, 64%, 1)" }}>
  MySQL, SQLite
</span>
<span>
  . On the backend, I’m comfortable with{" "}
</span>
<span style={{ color: "hsla(266, 100%, 64%, 1)" }}>
  Laravel and Python FastAPI
</span>
<span>
  , allowing me to build robust and scalable applications.
</span>

      </p>
    </div>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-auto flex justify-center mt-10 md:mt-0">
    <img
      src="/pictures/image.png"
      alt="Benalia Nazim"
      className="rounded-full shadow-xl w-[200px] h-[200px] md:w-[329px] md:h-[307px]"
    />
  </div>
</div>

    </div>
  );
}
