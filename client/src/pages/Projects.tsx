import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Sparkles, FolderKanban } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import SEO from "@/components/SEO";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS, SOCIAL_LINKS } from "@/lib/constants";

type FilterType = 'all' | 'fullstack' | 'backend' | 'frontend' | 'data';

interface DbProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  githubUrl: string | null;
  liveUrl: string | null;
  docsUrl: string | null;
  imageUrl: string;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const { data: dbProjects = [] } = useQuery<DbProject[]>({
    queryKey: ["/api/projects"],
  });

  const allProjects = [
    ...dbProjects.map(p => ({
      id: p.id.toString(),
      title: p.title,
      description: p.description,
      technologies: p.technologies,
      category: p.category as 'fullstack' | 'backend' | 'frontend' | 'data',
      githubUrl: p.githubUrl || undefined,
      liveUrl: p.liveUrl || undefined,
      docsUrl: p.docsUrl || undefined,
      imageUrl: p.imageUrl
    })),
    ...PROJECTS
  ];

  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'fullstack', label: 'Fullstack' },
    { value: 'backend', label: 'Backend' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'data', label: 'Data Science' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  return (
    <>
      <SEO 
        title="Projects - Saad Bin Tofayel Tahsin"
        description="Explore my portfolio of fullstack web applications, backend APIs, and data science projects. Built with React, Python, Node.js, and modern technologies."
        url="/projects"
      />
      <div className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(14,165,233,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-2">
                  <FolderKanban size={16} />
                  Showcase
                </span>
              </motion.div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-poppins font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                A collection of my best work in web development, backend systems, and data science
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {filters.map((filter) => (
                <motion.button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`relative px-8 py-3 rounded-2xl font-semibold transition-all duration-300 overflow-hidden ${
                    activeFilter === filter.value
                      ? 'text-white shadow-lg shadow-purple-500/50'
                      : 'text-white/70 hover:text-white border border-white/10 hover:border-white/30'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeFilter === filter.value && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{filter.label}</span>
                </motion.button>
              ))}
            </motion.div>
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeFilter}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
            
            {filteredProjects.length === 0 && (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-2xl text-white/60">No projects found in this category</p>
              </motion.div>
            )}
            
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <a 
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl text-white font-bold text-lg shadow-2xl shadow-purple-500/50 hover:scale-105 transition-all duration-300"
              >
                <Github size={24} />
                View All on GitHub
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
