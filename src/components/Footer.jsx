import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" text-white py-6 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-8 text-center md:text-left">
        
        {/* Left: Contact Info */}
        <div>
          <p className="text-lg font-semibold">Benalia Nazim</p>
          <p className="text-sm">Web Developer</p>
          <p className="text-sm">Email: nazim@example.com</p>
        </div>

        {/* Divider (Optional line or spacing) */}
        <div className="hidden md:block w-px h-12 bg-white opacity-20"></div>

        {/* Right: Copyright */}
        <div className="text-sm">
          © 2025 Benalia Nazim. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
