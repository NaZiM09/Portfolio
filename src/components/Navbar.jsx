import { useState } from "react";
import { Menu, X } from "lucide-react"; // أيقونات الهامبرغر والإغلاق

const navLinks = [
  { name: "Home", href: "#nav" },
  { name: "About", href: "#AboutSection" },
  { name: "Projects", href: "#ProjectsSection" },
  { name: "Contacts", href: "#ContactSection" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // التحكم في القائمة

  return (
    <nav id="nav" className="flex justify-between items-center px-8 py-4 absolute top-2 w-full z-30">
    
      <div className="text-[hsla(261,20%,85%,1)] hover:text-[hsla(260,57%,65%,1)] text-xl font-bold jua-font">
        Portfolio
      </div>

      <button
        className="md:hidden text-white focus:outline-none relative z-40"
        onClick={() => setIsOpen(!isOpen)}
        style={{ marginRight: '4px' }}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

   
      <div
        className={`md:flex space-x-12 bg-transparent px-4 py-2 rounded-md backdrop-blur-md 
        ${isOpen ? "absolute top-16 left-0 w-full flex flex-col items-center bg-black/90 py-4 space-y-4" : "hidden md:flex"}`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="px-4 py-2 rounded-md transition duration-300 text-[hsla(261,20%,85%,1)] hover:text-[hsla(260,57%,65%,1)] jua-font"
           onClick={e => {
              e.preventDefault();
              setIsOpen(false);
              const targetId = link.href.replace('#', '');
              const target = document.getElementById(targetId);
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
