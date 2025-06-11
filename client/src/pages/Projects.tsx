import { useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import SEO from "@/components/SEO";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS, SOCIAL_LINKS } from "@/lib/constants";

type FilterType = 'all' | 'fullstack' | 'backend' | 'frontend' | 'data';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'fullstack', label: 'Fullstack' },
    { value: 'backend', label: 'Backend' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'data', label: 'Data' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeFilter);

  return (
    <>
      <SEO 
        title="Projects - Saad Bin Tofayel Tahsin"
        description="Explore my portfolio of fullstack web applications, backend APIs, and data science projects. Built with React, Python, Node.js, and modern technologies."
        url="/projects"
      />
      <div className="pt-32 pb-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Featured Projects
            </motion.h1>
            
            {/* Project Filter */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter.value
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'bg-white/10 backdrop-blur-sm text-white/80 hover:bg-white/20'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </motion.div>
            
            {/* Projects Grid */}
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              layout
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a 
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-lg hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                <Github className="inline mr-2" size={20} />
                View All Projects
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
