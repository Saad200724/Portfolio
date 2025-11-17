import type { Project, SkillCategory, Experience } from "@/types";

export const DEVELOPER_INFO = {
  name: "Saad Bin Tofayel Tahsin",
  title: "Python Developer",
  subtitle: "Fullstack Web Developer", 
  learning: "Data Science Learner",
  tagline: "I build performant systems, responsive web apps, and I'm diving deep into data. Ready to bring your ideas to life with clean code and stunning interfaces.",
  bio: "With 2.5+ years of Python development experience and 1.5+ years in fullstack web development, I've built everything from scalable backend APIs to beautiful, responsive frontends. Currently expanding my expertise into data science and machine learning.",
  passion: "I'm passionate about writing clean, maintainable code and creating digital experiences that users love. When I'm not coding, you'll find me exploring new technologies, contributing to open source, or diving deep into data patterns.",
  email: "saadbintofayeltahsin@gmail.com",
  location: "Dhaka, Bangladesh",
  responseTime: "Within 24 hours",
  currentRoles: [
    {
      title: "President",
      company: "CyberHub - The IT Club",
      description: "School IT club leadership and tech initiatives"
    },
    {
      title: "CEO",
      company: "ZnForge",
      description: "Leading innovative tech solutions and product development"
    }
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Python Developer",
    duration: "2.5+ Years",
    description: "Backend APIs, automation, data processing"
  },
  {
    role: "Fullstack Developer", 
    duration: "1.5+ Years",
    description: "React, Node.js, database design"
  },
  {
    role: "Data Science Student",
    duration: "Currently Learning",
    description: "TensorFlow, Pandas, Scikit-learn"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Languages",
    icon: "fas fa-code",
    skills: [
      { name: "Python", level: "Expert", percentage: 90 },
      { name: "JavaScript", level: "Advanced", percentage: 85 },
      { name: "TypeScript", level: "Intermediate", percentage: 75 }
    ]
  },
  {
    name: "Frameworks",
    icon: "fas fa-layer-group", 
    skills: [
      { name: "React", level: "Advanced", percentage: 85 },
      { name: "Node.js", level: "Advanced", percentage: 80 },
      { name: "Express.js", level: "Advanced", percentage: 80 }
    ]
  },
  {
    name: "Learning",
    icon: "fas fa-brain",
    skills: [
      { name: "TensorFlow", level: "Learning", percentage: 40 },
      { name: "Pandas", level: "Learning", percentage: 50 },
      { name: "Scikit-learn", level: "Learning", percentage: 35 }
    ]
  }
];

export const ADDITIONAL_SKILLS = [
  "PostgreSQL", "MongoDB", "Supabase", "TailwindCSS", 
  "Git", "Docker", "Firebase", "RESTful APIs"
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "SciVenture",
    description: "SciVenture is an educational platform designed to bridge the science education gap in Bangladesh through technology. Our mission is to make quality science education accessible to all students regardless of their location or resources. By combining interactive learning modules, AI-powered assistance, and collaborative tools, we create an engaging environment where students can explore scientific concepts, conduct virtual experiments, and develop critical thinking skills.",
    technologies: ["React", "Node.js", "AI", "Educational Technology"],
    category: "fullstack",
    githubUrl: "",
    liveUrl: "https://sciventure.netlify.app/",
    imageUrl: "/SciVenture.png"
  },
  {
    id: "2", 
    title: "ZnBazar",
    description: "Bangladesh's Premier Online Shopping Destination. Discover authentic Bangladeshi products, international brands, and everything in between. Shop with confidence, delivered to your doorstep across Bangladesh.",
    technologies: ["React", "E-commerce", "Payment Gateway", "Delivery System"],
    category: "fullstack",
    githubUrl: "",
    liveUrl: "https://znbazar.netlify.app/", 
    imageUrl: "/image_1748603886733.png"
  },
  {
    id: "3",
    title: "PETman", 
    description: "Revolutionizing Waste Management in Bangladesh. Building a sustainable future through technology, community engagement, and responsible recycling practices. PETman collects and responsibly recycles household and industrial waste — including PET plastic bottles, paper, fabric, and metal — and connects communities, offices, and individuals to waste collectors to build a transparent and sustainable circular economy in Bangladesh.",
    technologies: ["React", "Sustainability", "Green Technology", "Community Platform"],
    category: "fullstack",
    githubUrl: "",
    liveUrl: "https://petman-org.netlify.app/",
    imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  }
];

export const SOCIAL_LINKS = {
  github: "https://github.com/Saad200724",
  whatsapp: "https://wa.me/8801815410558", 
  upwork: "https://www.upwork.com/freelancers/~01b58df8cb4d3f0c99?mp_source=share",
  facebook: "https://www.facebook.com/PhantomsByte"
};
