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
  FaJava,
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
  SiTypescript,
  SiPrisma,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";



export const portfolioData = {
  personalInfo: {
    name: "Altaseb Chernet",
    title: "Full Stack Developer | Software Engineer",
    location: "Debre Berhan, Ethiopia",
    university: "Debre Berhan University",
    age: "20",
    email: "altacher227@gmail.com",
    phone: "+251 970 208 456",
    bio: "Aspiring Software Engineer with strong hands-on experience in full-stack web development, specializing in modern JavaScript and TypeScript ecosystems. Proficient in building scalable and responsive applications with solid backend integration. Passionate about building performant, user-focused solutions.",
    tagline: "Turning ideas into smart and scalable digital solutions.",
  },
  
  socialLinks: [
    { name: "GitHub", url: "https://github.com/Altaseb-Chernet", icon: "github", username: "Altaseb-Chernet" },
    { name: "LinkedIn", url: "https://linkedin.com/in/altasebchernet", icon: "linkedin", username: "altaseb-chernet" },
    { name: "Email", url: "mailto:altacher227@gmail.com", icon: "email", username: "altaseb.chernet" },
  ],
  
  skills: [
    { name: "HTML5", category: "frontend", icon: <FaHtml5 /> },
    { name: "CSS3", category: "frontend", icon: <FaCss3Alt /> },
    { name: "JavaScript", category: "frontend", icon: <FaJsSquare /> },
    { name: "TypeScript", category: "frontend", icon: <SiTypescript /> },
    { name: "React", category: "frontend", icon: <FaReact /> },
    { name: "Next.js", category: "frontend", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", category: "frontend", icon: <SiTailwindcss /> },
    { name: "Node.js", category: "backend", icon: <FaNodeJs /> },
    { name: "Express.js", category: "backend", icon: <SiExpress /> },
    { name: "Python", category: "backend", icon: <FaPython /> },
    { name: "Java", category: "backend", icon: <FaJava /> },
    { name: "C++", category: "backend", icon: <SiCplusplus /> },
    { name: "RESTful APIs", category: "backend", icon: <TbApi /> },
    { name: "SQL / MySQL / PostgreSQL", category: "database", icon: <FaDatabase /> },
    { name: "MongoDB", category: "database", icon: <SiMongodb /> },
    { name: "Firebase / Supabase", category: "database", icon: <SiFirebase /> },
    { name: "Prisma", category: "database", icon: <SiPrisma /> },
    { name: "Git & GitHub", category: "tools", icon: <FaGithub /> },
    { name: "Agile Methodology", category: "tools", icon: <FaProjectDiagram /> },
  ],
  
  experience: [
    {
      id: 1,
      role: "DevOps Engineer",
      company: "Balina Software Company",
      type: "Full-time",
      location: "Debre Berhan",
      duration: "Mar 2026 – Present",
      description: "Managing infrastructure, deployment pipelines, and ensuring high availability of services using containerization and orchestration tools.",
      technologies: ["Docker", "Kubernetes", "Linux", "CI/CD", "AWS"],
    },
    {
      id: 2,
      role: "Version Control System",
      company: "Balina Software Company",
      type: "Part-time",
      location: "Debre Berhan",
      duration: "Feb 2026 – Present",
      description: "Led the organization's version control system, ensuring seamless collaboration and workflow efficiency across teams.",
      technologies: ["Git", "PowerShell", "Git Bash", "GitHub"],
    },
    {
      id: 3,
      role: "Angular Developer",
      company: "Balina Software Company",
      type: "Part-time",
      location: "Debre Berhan",
      duration: "Jan 2026 – Present",
      description: "Building and maintaining responsive frontend web applications with a focus on clean, scalable code.",
      technologies: ["Angular CLI", "Cypress", "Angular", "TypeScript"],
    },
    {
      id: 4,
      role: "Software Engineering Intern",
      company: "Bajaj Transport Management System",
      type: "Internship",
      location: "Addis Ababa",
      duration: "2024",
      description: "Built the Bajaj Transport Management System using C++ and SQL, implementing advanced search, sort, and GUI functionalities for transport management.",
      technologies: ["C++", "SQL", "Data Structures"],
    },
  ],

  education: {
    degree: "Bachelor's in Software Engineering",
    institution: "Debre Berhan University",
    location: "Debre Berhan, Ethiopia",
    duration: "Jun 2023 – Jun 2028",
    highlights: ["Dean's List Student (2023-2024)", "Focus on Full-Stack Development & DSA"],
  },

  certifications: [
    {
      id: 1,
      name: "Full Stack Web Development",
      issuer: "Miracle Technology",
      date: "Nov 2025 – Dec 2025",
    },
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
  {
    id: 6,
    title: "mashabesh design website",
    description: "🛍️ Mashabesha Design — Interactive Shopping Platform Built with Next.js, TypeScript, PostgreSQL, Prisma & Chapa Payment Mashabesha Design is a modern, interactive e-commerce platform.",
    image: "/projects/mashabesh.png",
    technologies: ["typescript", "nextjs", "tailwindcss", "postgresql", "prisma", "chapa"],
    features: ["👕 Customer Features", "🎛️ Admin Dashboard", "💳 Payments", "Responsive Design", "Amharic/English"],
    githubUrl: "https://",
    liveUrl: "https://mashabeshdesign.com/",
    status: "Completed"
  }
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
