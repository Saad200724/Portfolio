import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { DEVELOPER_INFO, EXPERIENCES } from "@/lib/constants";

export default function About() {
  const tools = [
    { category: "Languages", items: ["Python", "JavaScript", "TypeScript"] },
    { category: "Frameworks", items: ["React", "Node.js", "Express.js"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "Supabase"] },
    { category: "Tools", items: ["Git", "Docker", "VS Code"] }
  ];

  return (
    <>
      <SEO 
        title="About - Saad Bin Tofayel Tahsin"
        description="Learn about my journey as a Python developer and fullstack engineer. 2.5+ years of experience building scalable systems and beautiful user interfaces."
        url="/about"
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
              About Me
            </motion.h1>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Bio Content */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-poppins font-semibold mb-4 text-white">My Journey</h3>
                  <p className="text-white/80 leading-relaxed mb-4">
                    {DEVELOPER_INFO.bio}
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    {DEVELOPER_INFO.passion}
                  </p>
                </div>
                
                {/* Experience Timeline */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-poppins font-semibold mb-6 text-white">Experience</h3>
                  
                  <div className="space-y-4">
                    {EXPERIENCES.map((exp, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start space-x-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      >
                        <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-white">{exp.role}</h4>
                          <p className="text-purple-300 text-sm">{exp.duration}</p>
                          <p className="text-white/70 text-sm">{exp.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Tech Stack Showcase */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                    alt="Clean developer workspace" 
                    className="w-full h-64 object-cover" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-poppins font-semibold mb-3 text-white">My Development Environment</h3>
                    <p className="text-white/70 text-sm">Clean, organized, and optimized for productivity</p>
                  </div>
                </div>
                
                {/* Tools & Technologies */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-poppins font-semibold mb-6 text-white">Tools of Trade</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {tools.map((category, index) => (
                      <motion.div 
                        key={category.category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      >
                        <h4 className="font-semibold text-purple-300 mb-2">{category.category}</h4>
                        <div className="space-y-1">
                          {category.items.map((item) => (
                            <span key={item} className="text-white/80 text-sm block">{item}</span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
