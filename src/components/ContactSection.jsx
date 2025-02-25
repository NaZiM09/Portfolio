import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        };

        emailjs.send("service_w2z2hhi", "template_qpc8dpl", templateParams, "mUNkCrLVbZA6K28vm")
            .then(() => {
                alert("✅ Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.error("❌ Failed to send message:", error);
                alert("❌ Failed to send message. Please try again.");
            });
    };

    return (
        <div className="flex flex-col items-center mt-20 text-white">

        <h1
            className="text-[36px] font-normal jua-font mb-10"
            style={{ color: "hsla(266, 100%, 64%, 1)" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            Contact Me 📩
        </h1>
    
    
        <div 
            className="relative bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-2xl w-[350px] text-center border border-white/20"
           
        >
            <p className="text-gray-300 text-center mb-4 text-sm">
                Feel free to reach out. I'll get back to you as soon as possible! 🚀
            </p>
    
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 bg-transparent border border-[#7D3C98] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B583FF] text-white placeholder-gray-300"
                        placeholder="Your Name"
                        required
                    />
                </div>
    
                <div className="relative">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 bg-transparent border border-[#7D3C98] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B583FF] text-white placeholder-gray-300"
                        placeholder="Your Email"
                        required
                    />
                </div>
    
                <div className="relative">
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full p-3 bg-transparent border border-[#7D3C98] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B583FF] text-white placeholder-gray-300"
                        placeholder="Your Message"
                        required
                    />
                </div>
    
                <button 
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium rounded-lg text-sm transition hover:opacity-90 hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Send Message 🚀
                </button>
            </form>
    
            {/* روابط التواصل */}
            <div className="flex justify-center gap-6 mt-6">
                <a href="mailto: nazimbenli69@gmail.com" whileHover={{ scale: 1.2 }} className="text-gray-400 text-2xl hover:text-[#B583FF] transition-all">
                    <FaEnvelope />
                </a>
                <a href="https://github.com/NaZiM09" target="_blank" whileHover={{ scale: 1.2 }} className="text-gray-400 text-2xl hover:text-[#B583FF] transition-all">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/benalia-nazim-7235782a0/" target="_blank" whileHover={{ scale: 1.2 }} className="text-gray-400 text-2xl hover:text-[#B583FF] transition-all">
                    <FaLinkedin />
                </a>
            </div>
        </div>
    </div>
        );
}
