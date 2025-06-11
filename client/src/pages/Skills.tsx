import { motion } from "framer-motion";
import { Code, Layers, Brain } from "lucide-react";
import SEO from "@/components/SEO";
import SkillBar from "@/components/SkillBar";
import { SKILL_CATEGORIES, ADDITIONAL_SKILLS } from "@/lib/constants";

export default function Skills() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "fas fa-code": return <Code size={24} />;
      case "fas fa-layer-group": return <Layers size={24} />;
      case "fas fa-brain": return <Brain size={24} />;
      default: return <Code size={24} />;
    }
  };

  return (
    <>
      <SEO 
        title="Skills - Saad Bin Tofayel Tahsin"
        description="Explore my technical skills in Python, JavaScript, React, Node.js, and data science. Expert level programming with continuous learning in emerging technologies."
        url="/skills"
      />
      <div className="pt-32 pb-20 relative bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Skills & Expertise
            </motion.h1>
            
            {/* Skills Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {SKILL_CATEGORIES.map((category, categoryIndex) => (
                <motion.div 
                  key={category.name}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4 text-white">
                      {getIcon(category.icon)}
                    </div>
                    <h3 className="text-xl font-poppins font-semibold text-white">{category.name}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar 
                        key={skill.name} 
                        skill={skill} 
                        index={skillIndex} 
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Additional Skills Tags */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h3 className="text-2xl font-poppins font-semibold mb-8 text-white">Additional Technologies</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {ADDITIONAL_SKILLS.map((skill, index) => (
                  <motion.span 
                    key={skill}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20 hover:border-purple-500/50 transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
