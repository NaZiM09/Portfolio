import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa"; 


const projects = [
   {
    "title": "University Management",
    "description": "A system that enables students to request various documents from their institution, track the status of their requests, and receive the documents upon approval. I work on the frontend using React and Tailwind CSS, and some parts of the backend using PHP.",
    "image": "src/pictures/3.png",
    "projectLink": "https://www.university-management.website/",
    "githubLink": "https://github.com/mohamed123127/University-management"
}
,
    {
        "title": "Car Location System",
        "description": "A Vehicle Rental Management System allows managing the process of booking, tracking, and returning vehicles in a rental agency.",
        "image": "src/pictures/Car-location.jpg",
        "projectLink": "https://drive.google.com/drive/folders/1IuiwhtaxX5lQaGxilFcJmseirBP-usJH?usp=sharing",
        "githubLink": "https://github.com/mohamed123127/CarLocation"
    }
    ,
    {
        title: "Time-managemnt",
        description: "In progresse",
        image: "src/pictures/time-management.png",
        projectLink: "#",
        githubLink: "https://github.com/mohamed123127/Time-Management"
    }
];

export default function ProjectsSection() {
    return (
        <div className="flex flex-col items-center mt-20 text-white">
            {/* العنوان */}
            <h1
                className="text-[36px] font-normal jua-font  mb-10"
                style={{ color: "hsla(266, 100%, 64%, 1)" }}
                
             
            >
                My Projects
            </h1>

            {/* عرض المشاريع */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-2xl w-[320px] text-center border border-white/20"
                      
                    >
                        {/* صورة المشروع */}
                        <div className="overflow-hidden rounded-xl">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-[200px] object-cover rounded-xl transition-transform duration-500 hover:scale-110"
                            />
                        </div>

                        {/* محتوى البطاقة */}
                        <h2 className="text-xl font-semibold mt-5">{project.title}</h2>
                        <p className="text-gray-300 mt-3 text-sm">{project.description}</p>

                        {/* أزرار الروابط */}
                        <div className="mt-5 bottom-0 flex justify-center space-x-3">
                            {/* زر عرض المشروع */}
                            <a 
                                href={project.projectLink} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium rounded-lg text-sm transition hover:opacity-90 hover:scale-105"
                            >
                                View Project
                            </a>

                            {/* زر GitHub مع الأيقونة */}
                            <a 
                                href={project.githubLink} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-4 py-2 bg-gray-800 text-white font-medium rounded-lg text-sm transition hover:bg-gray-700 hover:scale-105"
                            >
                                <FaGithub className="mr-2" /> View Code
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
