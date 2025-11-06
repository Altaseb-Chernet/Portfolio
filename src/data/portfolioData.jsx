import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaProjectDiagram,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiSupabase,
  SiCplusplus,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";





export const portfolioData = {
  personalInfo: {
    name: "Altaseb Chernet",
    title: "Full Stack Developer | Software Engineer",
    location: "Debre Berhan, Ethiopia",
    university: "Debre Berhan University",
    age: "20",
    email: "altacher227@gmail.com",
    phone: "+251 9889 951 542",
    bio: "Motivated Software Engineering student and full-stack developer passionate about building efficient, scalable, and user-friendly web applications. Skilled in modern front-end and back-end technologies with strong foundations in data structures and algorithms.",
    tagline: "Turning ideas into smart and scalable digital solutions.",
  },
  
  socialLinks: [
    { name: "GitHub", url: "https://github.com/Altaseb-Chernet", icon: "github", username: "Altaseb-Chernet" },
    { name: "LinkedIn", url: "https://linkedin.com/in/altasebchernet", icon: "linkedin", username: "altaseb-chernet" },
    { name: "Email", url: "mailto:altacher227@gmail.com", icon: "email", username: "altaseb.chernet" },
  ],
  
  skills: [
    { name: "HTML5", level: 95, category: "frontend", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", level: 90, category: "frontend", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", level: 90, category: "frontend", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "React", level: 85, category: "frontend", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", level: 80, category: "frontend", icon: <SiNextdotjs className="text-white" /> },
    { name: "Tailwind CSS", level: 85, category: "frontend", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Node.js", level: 80, category: "backend", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", level: 75, category: "backend", icon: <SiExpress className="text-gray-300" /> },
    { name: "Python", level: 80, category: "backend", icon: <FaPython className="text-yellow-500" /> },
    { name: "C++", level: 75, category: "backend", icon: <SiCplusplus className="text-blue-400" /> },
    { name: "SQL / MySQL / PostgreSQL", level: 80, category: "database", icon: <FaDatabase className="text-blue-500" /> },
    { name: "MongoDB", level: 80, category: "database", icon: <SiMongodb className="text-green-400" /> },
    { name: "Firebase / Supabase", level: 70, category: "backend", icon: <SiFirebase className="text-orange-400" /> },
    { name: "Git & GitHub", level: 85, category: "tools", icon: <FaGithub className="text-gray-300" /> },
    { name: "Agile Methodology", level: 75, category: "tools", icon: <FaProjectDiagram className="text-purple-400" /> },

  ],
  
  projects: [
  {
    id: 1,
    title: "Ethio Freelance Platform",
    description: "A full MERN stack freelance marketplace connecting clients and developers with secure authentication, profile management, and project posting.",
    image: "/projects/ethio-freelance.png",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    features: ["User Authentication", "Project Management", "Freelancer Dashboard", "Responsive Design"],
    githubUrl: "https://github.com/Altaseb-Chernet/Ethio-Freelance",
    liveUrl: "https://ethio-freelance.vercel.app",
    status: "Completed"
  },
  {
    id: 2,
    title: "Food Ordering Website",
    description: "A complete food ordering and delivery web system with an admin dashboard for order management.",
    image: "/projects/food-order.png",
    technologies: ["HTML", "CSS", "JavaScript","Local storage"],
    features: ["Smart Serach And filter", "Cart System", "Order History"],
    githubUrl: "https://github.com/Altaseb-Chernet/Resturant_Website",
    liveUrl: "https://megezez-resturant.vercel.app/",
    status: "Completed"
  },

  {
    id: 3,
    title: "Portfolio Website",
    description: "My personal portfolio showcasing projects, skills, and hackathon achievements using Next.js and Tailwind CSS.",
    image: "/projects/portfolio.png",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    features: ["Modern UI", "Animations", "Responsive Design"],
    githubUrl: "https://github.com/Altaseb-Chernet/Portfolio",
    liveUrl: "https://altaseb-chernet.vercel.app",
    status: "Completed"
  },
  {
    id: 4,
    title: "Ethio Internship Platform",
    description: "Platform designed to help students find internship opportunities and companies manage applicants easily.",
    image: "/projects/ethio-internship.png",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    features: ["User Dashboard", "Intern Management", "Admin Panel"],
    githubUrl: "https://github.com/Altaseb-Chernet/Ethio-Internship",
    liveUrl: "#",
    status: "In Progress"
  },
  
  {
    id: 5,
    title: "Tech Event Platform",
    description: "A Next.js and TypeScript-based web app for managing and showcasing technology events and hackathons.",
    image: "/projects/tech-event.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    features: ["Event Management", "Modern UI", "Dynamic Pages"],
    githubUrl: "https://github.com/Altaseb-Chernet/Tech-Event",
    liveUrl: "https://techevent-tau.vercel.app/",
    status: "Completed"
  },
],
hackathons: [
  {
    id: 1,
    name: "Techtonic Tribe Frontend Hackathon",
    date: "March 15-16, 2025",
    role: "Frontend Developer",
    description:
      "Developed an interactive event platform using React and Tailwind CSS with a focus on responsive design and performance.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    achievement: "Top 10 Finalist",
    certificate: "#"
  },
  {
    id: 2,
    name: "Debre Berhan University Coding Challenge",
    date: "2024",
    role: "Participant",
    description:
      "Competed in a data structures and algorithms coding challenge, showcasing optimized problem-solving techniques.",
    technologies: ["C++", "Data Structures", "Algorithms"],
    achievement: "Top Performer",
    certificate: "#"
  },
  {
    id: 3,
    name: "Open Source Hackfest",
    date: "2025",
    role: "Contributor",
    description:
      "Collaborated on open-source projects focusing on full-stack web development with RESTful APIs and React.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    certificate: "#"
  }
],

  
  achievements: [
    {
      id: 1,
      title: "Dean's List Student",
      year: "2023-2024",
      description: "Recognized for consistent academic excellence at Debre Berhan University.",
      status: "Achieved",
      icon: "🏆"
    },
  ],
  
  testimonials: [
    {
      id: 1,
      name: "Professor Alemu",
      role: "Software Engineering Lecturer",
      content: "Demonstrates exceptional problem-solving skills and dedication to learning new technologies.",
      avatar: "👨‍🏫"
    },
    {
      id: 2,
      name: "Hackathon Mentor",
      role: "Techtonic Tribe",
      content: "Showed great teamwork and technical ability during the frontend hackathon competition.",
      avatar: "👨‍💻"
    },
  ],
  
  interests: [
    "Full Stack Web Development",
    "Data Structures & Algorithms",
    "Open Source Contributions",
    "Hackathons & Coding Competitions",
    "UI/UX Design",
    "API Integration",
    "Mobile App Development"
  ]
};
