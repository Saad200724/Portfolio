import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'fullstack': return { bg: 'from-blue-500/20 to-cyan-500/20', text: 'text-cyan-300', border: 'border-cyan-500/40' };
      case 'backend': return { bg: 'from-orange-500/20 to-red-500/20', text: 'text-orange-300', border: 'border-orange-500/40' };
      case 'frontend': return { bg: 'from-green-500/20 to-emerald-500/20', text: 'text-green-300', border: 'border-green-500/40' };
      case 'data': return { bg: 'from-purple-500/20 to-pink-500/20', text: 'text-purple-300', border: 'border-purple-500/40' };
      default: return { bg: 'from-gray-500/20 to-gray-600/20', text: 'text-gray-300', border: 'border-gray-500/40' };
    }
  };

  const categoryStyle = getCategoryColor(project.category);

  return (
    <motion.div
      className="group relative h-full"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* 3D Card Container with Premium Effects */}
      <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20">
        
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/10 transition-all duration-500 z-0" />
        
        {/* Image Section with Parallax Effect */}
        <div className="relative overflow-hidden h-56">
          <motion.img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          
          {/* Category Badge */}
          <div className="absolute top-4 right-4 z-10">
            <motion.span 
              className={`px-4 py-2 bg-gradient-to-r ${categoryStyle.bg} backdrop-blur-md text-xs font-bold rounded-full capitalize ${categoryStyle.text} border ${categoryStyle.border} shadow-lg`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {project.category}
            </motion.span>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="relative p-6 z-10">
          <h3 className="text-2xl font-poppins font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
            {project.title}
          </h3>
          
          <p className="text-white/70 mb-5 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
          
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white/80 text-xs font-medium rounded-lg border border-white/20 hover:border-purple-400/50 hover:bg-white/20 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 text-xs font-medium rounded-lg border border-purple-400/30">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
          
          {/* Action Links */}
          <div className="flex items-center gap-4">
            {project.githubUrl && (
              <motion.a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-white text-sm font-semibold transition-all duration-300 border border-white/20 hover:border-white/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} />
                Code
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 rounded-xl text-white text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} />
                Live Demo
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={14} />
                </motion.span>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
