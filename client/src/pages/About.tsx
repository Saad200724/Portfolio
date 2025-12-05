import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Sparkles, Code2, Database, Brain, Rocket } from "lucide-react";
import SEO from "@/components/SEO";
import { DEVELOPER_INFO, EXPERIENCES } from "@/lib/constants";

export default function About() {
  const tools = [
    { 
      category: "Languages", 
      items: ["Python", "JavaScript", "TypeScript"],
      icon: Code2,
      color: "from-cyan-500 to-blue-600"
    },
    { 
      category: "Frameworks", 
      items: ["React", "Node.js", "Express.js"],
      icon: Rocket,
      color: "from-purple-500 to-pink-600"
    },
    { 
      category: "Databases", 
      items: ["PostgreSQL", "MongoDB", "Supabase"],
      icon: Database,
      color: "from-emerald-500 to-teal-600"
    },
    { 
      category: "Learning", 
      items: ["Data Science (Basic)", "AI/ML Learner"],
      icon: Brain,
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <>
      <SEO 
        title="About Saad Bin Tofayel Tahsin - Python Developer & Fullstack Engineer | 2.5+ Years Experience"
        description="I am Saad Bin Tofayel (Tahsin), a Python developer and fullstack engineer with 2.5+ years of coding experience. MIT aspirant specializing in React, Node.js, AI/ML, and data science. Built 15+ projects from backend APIs to responsive web applications in Dhaka, Bangladesh."
        keywords="about saad tahsin, python developer bangladesh, fullstack engineer dhaka, mit aspirant, react developer, nodejs expert, ai ml student, data science learner, web developer portfolio, coding experience, backend api development, responsive web applications"
        url="/about"
      />
      <div className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(147,51,234,0.1),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-20"
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
                <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Get to Know Me
                </span>
              </motion.div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-poppins font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  About Me
                </span>
              </h1>
            </motion.div>
            
            {/* Bento Grid Layout */}
            <div className="grid lg:grid-cols-12 gap-6 mb-12">
              {/* Bio Card - Spans 8 columns */}
              <motion.div 
                className="lg:col-span-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/50">
                    <GraduationCap className="text-white" size={28} />
                  </div>
                  <h3 className="text-3xl font-poppins font-bold text-white">My Journey</h3>
                </div>
                <div className="space-y-4 text-white/80 leading-relaxed">
                  <p className="text-lg">
                    {DEVELOPER_INFO.bio}
                  </p>
                  <p className="text-lg">
                    {DEVELOPER_INFO.passion}
                  </p>
                </div>
              </motion.div>
              
              {/* Quick Stats - Spans 4 columns */}
              <motion.div 
                className="lg:col-span-4 space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                {[
                  { label: "Experience", value: "2.5+", subtitle: "Years Coding", icon: Code2, gradient: "from-cyan-500 to-blue-600" },
                  { label: "Projects", value: "15+", subtitle: "Projects Completed", icon: Award, gradient: "from-emerald-500 to-teal-600" },
                  { label: "MIT", value: "MIT", subtitle: "Aspirants", icon: Briefcase, gradient: "from-purple-500 to-pink-600" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-500 group"
                    whileHover={{ scale: 1.02, y: -5 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                        <stat.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-white/60">{stat.subtitle}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Experience Timeline */}
            <motion.div 
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/50">
                  <Award className="text-white" size={28} />
                </div>
                <h3 className="text-3xl font-poppins font-bold text-white">Experience Timeline</h3>
              </div>
              
              <div className="space-y-6 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-purple-500 before:to-pink-500">
                {EXPERIENCES.map((exp, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-6 relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50 z-10 ring-4 ring-black/50">
                      <Brain className="text-white" size={18} />
                    </div>
                    <div className="flex-1 bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-cyan-500/30">
                      <h4 className="text-xl font-bold text-white mb-2">{exp.role}</h4>
                      <p className="text-cyan-300 font-semibold mb-2">{exp.duration}</p>
                      <p className="text-white/70">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Tech Stack Bento Grid */}
            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
            >
              {tools.map((category, index) => (
                <motion.div 
                  key={category.category}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-500 group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-purple-300 mb-3">{category.category}</h4>
                  <div className="space-y-2">
                    {category.items.map((item) => (
                      <div key={item} className="text-white/80 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
