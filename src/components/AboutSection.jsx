import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <div className="relative flex items-center justify-between mb-10">
            {/* القسم الخاص بالمحتوى النصي */}
            <div>
                <motion.div 
                    initial={{ opacity: 0, x: -50 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.8 }}
                    className="flex items-center ml-130 mb-20 space-x-2 justify-center"
                >
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }} 
                        className="text-[24px] leading-[30px] jua-font font-normal ml-10"
                        style={{  color: "hsla(266, 100%, 64%, 1)" }}
                    >
                        About Me
                    </motion.h1>
                </motion.div>

                <div className="w-[707px] h-[378px] rounded-[20px] bg-[hsla(265,61%,16%,1)] mt-5 s ml-10 hadow-lg p-5">
                    <p
                    className="mt-4 text-[18px] jua-font leading-[28px] font-normal "
                    style={{  color: "hsla(260, 20%, 86%, 1)" }}
                  >
                   Who I Am <br/> <span>Hi, I’m </span>
                    <span style={{ color: "hsla(266, 100%, 64%, 1)" }} className="jua-font">Nazim Benalia {" "}</span>
                     <span>, a 21-year-old university student and  passionate{" "}</span>
                     <br/>
                    <span style={{ color: "hsla(266, 100%, 64%, 1)" }}>
                    software engineer {" "}
                    </span>
                    <span>from Algeria.</span>
                    <br/> <br/> 
                    <span>My Education<br/>
                    I’m currently a third-year Computer Science student in Boumerdas University .{" "}</span>
                    <br/> <br/> 
                    <span>
                      
                    What I Can Do <br/>
                     specialize in building responsive and {" "}  
                    </span>
                    <span style={{ color: "hsla(266, 100%, 64%, 1)" }}>
                     dynamic websites{" "}
                    </span>
                    <span>using cutting-edge <br/>
                    technologies like </span>
                    <span style={{ color: "hsla(266, 100%, 64%, 1)" }}>
                    eact, Next.js, CSS, HTML,{" "}</span>
                    <span>
                      and{" "}
                    </span>
                    <span style={{ color: "hsla(266, 100%, 64%, 1)" }}>
                    PHP.{" "}</span>
                    <span>With experience in both <br/>
                      frontend and backend development, I’m equipped to handle end-to-end <br/>
                      development tasks efficiently. </span>
                    </p>
                </div>
            </div>

            <div className="mr-20 mt-40">
                <img
                    src="/pictures/image.png"
                    alt="Benalia Nazim"
                    className="rounded-full shadow-xl"
                    style={{ width: "329px", height: "307px" }}
                />
            </div>
        </div>
    );
}
