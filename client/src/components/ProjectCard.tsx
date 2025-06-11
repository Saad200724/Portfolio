import { motion } from "framer-motion";
import { Github, ExternalLink, Book } from "lucide-react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'fullstack': return 'bg-blue-500/20 text-blue-300';
      case 'backend': return 'bg-orange-500/20 text-orange-300';
      case 'frontend': return 'bg-green-500/20 text-green-300';
      case 'data': return 'bg-purple-500/20 text-purple-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-poppins font-semibold text-white">
            {project.title}
          </h3>
          <span className={`px-2 py-1 text-xs rounded-full capitalize ${getCategoryColor(project.category)}`}>
            {project.category}
          </span>
        </div>
        
        <p className="text-white/70 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-white transition-colors duration-300 flex items-center"
            >
              <Github size={16} className="mr-1" />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-white transition-colors duration-300 flex items-center"
            >
              <ExternalLink size={16} className="mr-1" />
              Live Demo
            </a>
          )}
          {project.docsUrl && (
            <a 
              href={project.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-white transition-colors duration-300 flex items-center"
            >
              <Book size={16} className="mr-1" />
              Docs
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
