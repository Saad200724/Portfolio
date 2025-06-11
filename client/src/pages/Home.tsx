import { motion } from "framer-motion";
import { ChevronDown, Download, Code, Award, Users, Zap } from "lucide-react";
import { Link } from "wouter";
import { Github, MessageCircle, Mail, Briefcase, Facebook } from "lucide-react";
import SEO from "@/components/SEO";
import { DEVELOPER_INFO, SOCIAL_LINKS } from "@/lib/constants";
import profileImage from "@assets/Saad.jpg";

export default function Home() {
  const handleDownloadResume = () => {
    // Create a dummy PDF download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Saad_Tahsin_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <SEO />
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        
        {/* Floating Background Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -3
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Profile Image */}
            <motion.div 
              className="mb-8 relative inline-block"
              initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative">
                <motion.div 
                  className="w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-blue-400 p-1"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-purple-900 to-blue-900">
                    <img 
                      src={profileImage}
                      alt={DEVELOPER_INFO.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
                
                {/* Floating badges */}
                <motion.div 
                  className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Award className="text-white" size={16} />
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-2 -left-2 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full p-2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: -10 }}
                >
                  <Code className="text-white" size={16} />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Saad</span> 👋
            </motion.h1>
            
            <motion.div 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-poppins font-semibold text-white/90 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-4">
                <span>{DEVELOPER_INFO.title}</span>
                <span className="hidden sm:inline">|</span>
                <span>{DEVELOPER_INFO.subtitle}</span>
                <span className="hidden sm:inline">|</span>
                <span>{DEVELOPER_INFO.learning}</span>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-white/80 mb-6 max-w-3xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              {DEVELOPER_INFO.tagline}
            </motion.p>

            {/* Key Stats */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-8 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400">2.5+</div>
                <div className="text-sm text-white/70">Years Python</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">1.5+</div>
                <div className="text-sm text-white/70">Years Fullstack</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">24h</div>
                <div className="text-sm text-white/70">Response Time</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <Link href="/projects">
                <motion.button 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-base sm:text-lg hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Code className="inline mr-2" size={18} />
                  View My Work
                </motion.button>
              </Link>
              <motion.button 
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 rounded-full text-white font-semibold text-base sm:text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300"
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="inline mr-2" size={18} />
                Download Resume
              </motion.button>
            </motion.div>
            
            {/* Current Roles Section */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mb-12 max-w-4xl mx-auto px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              {DEVELOPER_INFO.currentRoles.map((role, index) => (
                <motion.div 
                  key={role.company}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-cyan-400/40 transition-all duration-300"
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      {index === 0 ? <Zap className="text-white" size={20} /> : <Users className="text-white" size={20} />}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-poppins font-semibold text-white mb-1">{role.title}</h3>
                      <p className="text-cyan-300 font-medium mb-2">{role.company}</p>
                      <p className="text-white/70 text-sm">{role.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tech Stack Highlight */}
            <motion.div 
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 mb-12 max-w-3xl mx-auto border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.4 }}
            >
              <h3 className="text-xl font-poppins font-semibold text-white mb-4 text-center">Tech Stack Expertise</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {["Python", "React", "Node.js", "TypeScript", "PostgreSQL", "TailwindCSS"].map((tech, index) => (
                  <motion.span 
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full text-cyan-300 text-sm font-medium border border-cyan-400/30"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 211, 238, 0.2)" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center space-x-8 mt-8 mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.8 }}
            >
              <motion.a 
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white/60 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.3, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a 
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white/60 hover:text-green-400 transition-colors duration-300"
                whileHover={{ scale: 1.3, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={24} />
              </motion.a>
              <motion.a 
                href={SOCIAL_LINKS.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white/60 hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.3, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Briefcase size={24} />
              </motion.a>
              <motion.a 
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white/60 hover:text-blue-500 transition-colors duration-300"
                whileHover={{ scale: 1.3, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook size={24} />
              </motion.a>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-white/60 text-2xl" />
        </motion.div>
      </section>
    </>
  );
}
