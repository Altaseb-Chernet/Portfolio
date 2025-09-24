export const portfolioData = {
  personalInfo: {
    name: "Altaseb Chernet",
    title: "Software Engineering Student",
    location: "Debre Berhan, Ethiopia",
    university: "Debre Berhan University",
    age: "20",
    email: "altaseb.chernet@example.com",
    phone: "+251 9889 951 542",
    bio: "Passionate Software Engineering student specializing in front-end development, data structures, and algorithms. Currently pursuing international scholarship opportunities including the 2026 MEXT KOSEN Scholarship.",
    tagline: "Building digital solutions that make a difference",
  },
  
  socialLinks: [
    { name: "GitHub", url: "https://github.com/altaseb", icon: "github", username: "altaseb" },
    { name: "LinkedIn", url: "https://linkedin.com/in/altaseb", icon: "linkedin", username: "altaseb-chernet" },
    { name: "Email", url: "mailto:altaseb.chernet@example.com", icon: "email", username: "altaseb.chernet" },
  ],
  
  skills: [
    { name: "HTML5", level: 95, category: "frontend", icon: "🔄" },
    { name: "CSS3", level: 90, category: "frontend", icon: "🎨" },
    { name: "JavaScript", level: 85, category: "frontend", icon: "⚡" },
    { name: "Python", level: 80, category: "backend", icon: "🐍" },
    { name: "C++", level: 75, category: "backend", icon: "💻" },
    { name: "SQL", level: 80, category: "database", icon: "🗄️" },
    { name: "React", level: 70, category: "frontend", icon: "⚛️" },
    { name: "Tailwind CSS", level: 85, category: "frontend", icon: "💨" },
  ],
  
  projects: [
    {
      id: 1,
      title: "Food Ordering Website",
      description: "Full-stack food ordering platform with admin dashboard for managing customer orders and order history tracking",
      image: "/project-food.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      features: ["Admin Dashboard", "Order History", "Real-time Updates", "Payment Integration"],
      githubUrl: "https://github.com/altaseb/food-ordering",
      liveUrl: "#",
      status: "Completed"
    },
    {
      id: 2,
      title: "Bajaj Transport Management System",
      description: "C++ application with GUI for managing Bajaj transportation in Debre Berhan city, featuring search and sort functionality",
      image: "/project-bajaj.jpg",
      technologies: ["C++", "GUI", "Database", "File Handling"],
      features: ["Search Functionality", "Sort Algorithms", "Database Integration", "User-friendly GUI"],
      githubUrl: "https://github.com/altaseb/bajaj-system",
      liveUrl: "#",
      status: "Completed"
    },
    {
      id: 3,
      title: "Smart Search & Rating System",
      description: "JavaScript-based intelligent search with real-time rating and review system",
      image: "/project-search.jpg",
      technologies: ["JavaScript", "API Integration", "Local Storage", "UI/UX"],
      features: ["Smart Search", "Real-time Ratings", "User Reviews", "Responsive Design"],
      githubUrl: "https://github.com/altaseb/smart-search",
      liveUrl: "#",
      status: "Completed"
    },
  ],
  
  hackathons: [
    {
      id: 1,
      name: "Techtonic Tribe Frontend Hackathon",
      date: "2024",
      role: "Frontend Developer",
      description: "Participated in competitive frontend development hackathon focusing on modern web technologies",
      achievement: "Top 20 Finalist",
      technologies: ["React", "Tailwind CSS", "JavaScript"]
    },
  ],
  
  achievements: [
    {
      id: 1,
      title: "MEXT KOSEN Scholarship Applicant",
      year: "2026",
      description: "Preparing application for Japanese government scholarship program",
      status: "In Progress",
      icon: "🎓"
    },
    {
      id: 2,
      title: "Dean's List Student",
      year: "2023-2024",
      description: "Consistent academic excellence at Debre Berhan University",
      status: "Achieved",
      icon: "🏆"
    },
  ],
  
  testimonials: [
    {
      id: 1,
      name: "Professor X",
      role: "Software Engineering Lecturer",
      content: "demonstrates exceptional problem-solving skills and dedication to learning new technologies.",
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
    "Frontend Development",
    "Data Structures & Algorithms", 
    "International Scholarships",
    "Open Source Contributions",
    "Hackathons & Coding Competitions",
    "UI/UX Design",
    "Mobile App Development"
  ]
};