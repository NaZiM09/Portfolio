const navLinks = [
    { name: "Home", href: "/PrincipalePage" },
    { name: "About", href: "" },
    { name: "Projects", href: "/" },
    { name: "Contacts", href: "/" },
  ];

export default function Navbar() {
    return (
    <nav className="flex justify-between items-center px-8 py-4 absolute top-2  w-full">
       
       <div className="text-[hsla(261,20%,85%,1)] hover:text-[hsla(260,57%,65%,1)] text-xl font-bold jua-font">
       Portfolio
       </div>

  
       {/* الروابط */}
        <div
        className="flex space-x-12 bg-transparent px-4 py-2 rounded-md backdrop-blur-md"
        style={{ width: 574, height: 45, paddingTop: 8, paddingRight: 16, paddingBottom: 8, paddingLeft: 16 }}
        >  
       {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href} 
          className="px-4 py-2 rounded-md transition duration-300 text-[hsla(261,20%,85%,1)] hover:text-[hsla(260,57%,65%,1)] jua-font"
        >
          {link.name}
        </a>
          ))}
       </div>
      </nav>
    );
  }
  