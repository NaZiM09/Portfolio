import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="AboutSection" className="mb-16">

      {/* ===== Title ===== */}
      <div className="flex justify-center mb-10">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="leading-[30px] jua-font text-[28px] md:text-[32px] text-center"
          style={{ color: "hsla(266, 100%, 64%, 1)" }}
        >
          About Me
        </motion.h1>
      </div>

      {/* ===== Content ===== */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 px-4 md:px-16">

        {/* ===== Text Section ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-[60%] max-w-[750px] rounded-[20px]
          bg-[hsla(265,61%,16%,1)] shadow-lg p-6"
        >
          <p
            className="text-base md:text-[18px] jua-font leading-[26px] md:leading-[28px]"
            style={{ color: "hsla(260, 20%, 86%, 1)" }}
          >
            Who I Am <br />
            Hi, I’m{" "}
            <span style={{ color: "hsla(266, 100%, 64%, 1)" }}>
              Nazim Benalia
            </span>
            , a 21-year-old university student and passionate <br />
            <span style={{ color: "hsla(266, 100%, 64%, 1)" }}>
              Artificial Intelligence student
            </span>{" "}
            and aspiring{" "}
            <span style={{ color: "hsla(266, 100%, 64%, 1)" }}>
              software engineer
            </span>{" "}
            from Algeria.

            <br /><br />

            My Education <br />
            I’m currently a{" "}
            <span style={{ color: "hsla(266, 100%, 64%, 1)" }}>
              Master’s degree student (4th year)
            </span>{" "}
            in Computer Science, specializing in{" "}
            <span style={{ color: "hsla(266, 100%, 64%, 1)" }}>
              Artificial Intelligence
            </span>
            , at Boumerdas University.

            <br /><br />

            What I Can Do <br />
            I specialize in building responsive and dynamic websites using{" "}
            <span style={{ color: "hsla(266, 100%, 64%, 1)" }}>
              React, Next.js, CSS, HTML, PHP, and Electron
            </span>
            . <br />
            I also build desktop applications using{" "}
            <span style={{ color: "hsla(266, 100%, 64%, 1)" }}>
              Electron + React
            </span>
            , and work with databases like{" "}
            <span style={{ color: "hsla(266, 100%, 64%, 1)" }}>
              MySQL, SQLite
            </span>
            . <br />
            On the backend, I use{" "}
            <span style={{ color: "hsla(266, 100%, 64%, 1)" }}>
              Laravel and Python FastAPI
            </span>{" "}
            to build scalable applications.
          </p>
        </motion.div>

        {/* ===== Image Section ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/pictures/image.png"
            alt="Benalia Nazim"
            className="rounded-full shadow-xl
            w-[200px] h-[200px]
            md:w-[300px] md:h-[300px]
            object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
