import { motion } from "framer-motion";
import { Download, Code, Sparkles, Zap, Rocket, Target } from "lucide-react";
import { Link } from "wouter";
import { Github, MessageCircle, Briefcase, Facebook } from "lucide-react";
import SEO from "@/components/SEO";
import { DEVELOPER_INFO, SOCIAL_LINKS } from "@/lib/constants";

const profileImage = "https://avatars.githubusercontent.com/u/156579953?v=4";

export default function Home() {
  const handleDownloadResume = () => {
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
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
        
        {/* Advanced Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        
        {/* Animated Gradient Orbs */}
        <motion.div 
          className="absolute top-0 -left-40 w-[500px] h-[500px] bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-gradient-to-l from-cyan-600/20 via-blue-600/20 to-purple-600/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-emerald-600/10 via-teal-600/10 to-cyan-600/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="container mx-auto px-6 relative z-10"
        >
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Premium Profile Section */}
            <motion.div 
              className="mb-12 relative inline-block"
              initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="relative">
                {/* Glow Ring */}
                <motion.div 
                  className="absolute inset-0 w-52 h-52 sm:w-60 sm:h-60 mx-auto rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-75 blur-2xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <motion.div 
                  className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto rounded-full p-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-900 to-black ring-4 ring-white/10">
                    <img 
                      src={profileImage}
                      alt={DEVELOPER_INFO.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </motion.div>
                
                {/* Premium Floating Badges */}
                <motion.div 
                  className="absolute -top-3 -right-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-3 shadow-lg shadow-emerald-500/50"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
                  whileHover={{ scale: 1.2, rotate: 15 }}
                >
                  <Award className="text-white" size={20} />
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-3 -left-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-3 shadow-lg shadow-violet-500/50"
                  initial={{ opacity: 0, scale: 0, rotate: 180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 1.4, duration: 0.6, type: "spring" }}
                  whileHover={{ scale: 1.2, rotate: -15 }}
                >
                  <Code className="text-white" size={20} />
                </motion.div>

                <motion.div 
                  className="absolute top-1/2 -right-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-2.5 shadow-lg shadow-orange-500/50"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6, duration: 0.6, type: "spring" }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <Sparkles className="text-white" size={18} />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Hero Text with Enhanced Typography */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div 
                className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Available for Freelance
                </span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-poppins font-bold mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Saad
                  </span>
                  <motion.span 
                    className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 -z-10 blur-sm"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 1 }}
                  />
                </span>
                <motion.span
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatDelay: 3 }}
                  className="inline-block ml-2"
                >
                  👋
                </motion.span>
              </h1>
            </motion.div>
            
            <motion.div 
              className="text-xl sm:text-2xl md:text-3xl font-poppins font-semibold text-white/90 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex flex-wrap items-center justify-center gap-3">
                <motion.span 
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30"
                  whileHover={{ scale: 1.05, borderColor: "rgba(139, 92, 246, 0.5)" }}
                >
                  {DEVELOPER_INFO.title}
                </motion.span>
                <span className="text-cyan-400">•</span>
                <motion.span 
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30"
                  whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
                >
                  {DEVELOPER_INFO.subtitle}
                </motion.span>
                <span className="text-cyan-400">•</span>
                <motion.span 
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600/20 to-emerald-600/20 border border-cyan-500/30"
                  whileHover={{ scale: 1.05, borderColor: "rgba(6, 182, 212, 0.5)" }}
                >
                  {DEVELOPER_INFO.learning}
                </motion.span>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {DEVELOPER_INFO.tagline}
            </motion.p>

            {/* Premium Stats Grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {[
                { value: "2.5+", label: "Years Python", icon: Code, color: "from-cyan-500 to-blue-500" },
                { value: "1.5+", label: "Years Fullstack", icon: Zap, color: "from-purple-500 to-pink-500" },
                { value: "24h", label: "Response Time", icon: Rocket, color: "from-emerald-500 to-teal-500" }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 p-6 hover:border-white/30 transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="relative">
                    <div className="flex justify-center mb-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                        <stat.icon className="text-white" size={24} />
                      </div>
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/60 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Premium CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-5 justify-center items-center px-4 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <Link href="/projects">
                <motion.button 
                  className="group relative w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl text-white font-bold text-lg overflow-hidden shadow-2xl shadow-purple-500/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Code size={20} />
                    View My Work
                  </span>
                </motion.button>
              </Link>
              <motion.button 
                className="group relative w-full sm:w-auto px-10 py-4 rounded-2xl text-white font-bold text-lg overflow-hidden border-2 border-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-300"
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Download size={20} />
                  Download Resume
                </span>
              </motion.button>
            </motion.div>

            {/* Current Roles - Bento Style */}
            <motion.div 
              className="grid grid-cols-1 gap-6 mt-16 mb-16 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              {DEVELOPER_INFO.currentRoles.map((role, index) => (
                <motion.div 
                  key={role.company}
                  className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-500"
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.5 + index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -8 }}
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:scale-110 transition-transform duration-500">
                      <Target className="text-white" size={28} />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-2xl font-poppins font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {role.title}
                      </h3>
                      <p className="text-lg text-cyan-300 font-semibold mb-3">{role.company}</p>
                      <p className="text-white/70 leading-relaxed">{role.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tech Stack with Premium Pills */}
            <motion.div 
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 mb-16 max-w-4xl mx-auto border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7 }}
            >
              <h3 className="text-3xl font-poppins font-bold text-white mb-6 text-center">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Tech Stack Expertise
                </span>
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {["Python", "React", "Node.js", "TypeScript", "PostgreSQL", "TailwindCSS"].map((tech, index) => (
                  <motion.span 
                    key={tech}
                    className="group relative px-6 py-3 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-2xl border border-cyan-400/30 backdrop-blur-sm overflow-hidden cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.9 + index * 0.1 }}
                    whileHover={{ scale: 1.1, borderColor: "rgba(34, 211, 238, 0.6)" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300" />
                    <span className="relative text-cyan-300 font-semibold">{tech}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Premium Social Links */}
            <motion.div 
              className="flex justify-center gap-6 mt-12 mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.1 }}
            >
              {[
                { icon: Github, href: SOCIAL_LINKS.github, color: "from-gray-600 to-gray-800", hoverColor: "hover:shadow-gray-500/50" },
                { icon: MessageCircle, href: SOCIAL_LINKS.whatsapp, color: "from-green-500 to-emerald-600", hoverColor: "hover:shadow-green-500/50" },
                { icon: Briefcase, href: SOCIAL_LINKS.upwork, color: "from-blue-500 to-blue-700", hoverColor: "hover:shadow-blue-500/50" },
                { icon: Facebook, href: SOCIAL_LINKS.facebook, color: "from-blue-600 to-indigo-600", hoverColor: "hover:shadow-blue-600/50" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-4 rounded-2xl bg-gradient-to-br ${social.color} shadow-lg ${social.hoverColor} transition-all duration-300`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 + index * 0.1 }}
                >
                  <social.icon className="text-white" size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
