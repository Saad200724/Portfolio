import { motion } from "framer-motion";
import { Code, Layers, Brain, Zap, Sparkles, TrendingUp, Database, Cloud } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import SEO from "@/components/SEO";
import SkillBar from "@/components/SkillBar";
import { SKILL_CATEGORIES, ADDITIONAL_SKILLS } from "@/lib/constants";

interface DbSkillCategory {
  id: number;
  name: string;
  icon: string;
  skills: {
    id: number;
    name: string;
    level: string;
    percentage: number;
  }[];
}

interface DbAdditionalSkill {
  id: number;
  name: string;
}

export default function Skills() {
  const { data: dbCategories = [] } = useQuery<DbSkillCategory[]>({
    queryKey: ["/api/skill-categories"],
  });

  const { data: dbAdditionalSkills = [] } = useQuery<DbAdditionalSkill[]>({
    queryKey: ["/api/additional-skills"],
  });

  const allCategories = [
    ...dbCategories.map(cat => ({
      name: cat.name,
      icon: cat.icon,
      skills: cat.skills.map(s => ({
        name: s.name,
        level: s.level as 'Expert' | 'Advanced' | 'Intermediate' | 'Learning',
        percentage: s.percentage
      }))
    })),
    ...SKILL_CATEGORIES
  ];

  const allAdditionalSkills = [
    ...dbAdditionalSkills.map(s => s.name),
    ...ADDITIONAL_SKILLS
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "fas fa-code": return <Code size={28} />;
      case "fas fa-layer-group": return <Layers size={28} />;
      case "fas fa-brain": return <Brain size={28} />;
      case "fas fa-database": return <Database size={28} />;
      case "fas fa-cloud": return <Cloud size={28} />;
      default: return <Code size={28} />;
    }
  };

  const iconColors = [
    "from-cyan-500 to-blue-600",
    "from-purple-500 to-pink-600",
    "from-emerald-500 to-teal-600",
    "from-orange-500 to-red-600",
    "from-indigo-500 to-purple-600"
  ];

  return (
    <>
      <SEO 
        title="Technical Skills & Expertise - Saad Bin Tofayel Tahsin | Python, React, Node.js, AI/ML"
        description="Comprehensive technical skills portfolio: Expert in Python, JavaScript, TypeScript. Advanced proficiency in React, Node.js, Express.js. Database expertise in PostgreSQL, MongoDB, Supabase. Learning AI/ML and Data Science. Tools: Git, Linux, Docker, VS Code. 2.5+ years of hands-on coding experience."
        keywords="python skills, javascript developer, typescript expert, react developer skills, nodejs backend, expressjs api, postgresql database, mongodb nosql, supabase backend, ai ml learning, data science beginner, git version control, linux commands, docker containers, fullstack developer skills, web development expertise, programming languages, frontend frameworks, backend technologies"
        url="/skills"
      />
      <div className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-sm font-semibold flex items-center gap-2">
                  <Code size={16} className="text-purple-400" />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Technical Excellence</span>
                </span>
              </motion.div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-poppins font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                  Skills & Expertise
                </span>
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Crafted through years of hands-on experience and continuous learning
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {allCategories.map((category, categoryIndex) => (
                <motion.div 
                  key={`${category.name}-${categoryIndex}`}
                  className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.15 }}
                  whileHover={{ scale: 1.02, y: -8 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${iconColors[categoryIndex % iconColors.length]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative">
                    <div className="flex items-center mb-8">
                      <div className={`w-16 h-16 bg-gradient-to-br ${iconColors[categoryIndex % iconColors.length]} rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-purple-500/50 group-hover:scale-110 transition-transform duration-500`}>
                        {getIcon(category.icon)}
                      </div>
                      <h3 className="text-2xl font-poppins font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {category.name}
                      </h3>
                    </div>
                    
                    <div className="space-y-5">
                      {category.skills.map((skill, skillIndex) => (
                        <SkillBar 
                          key={`${skill.name}-${skillIndex}`}
                          skill={skill} 
                          index={skillIndex} 
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/50">
                  <Sparkles className="text-white" size={28} />
                </div>
                <h3 className="text-3xl font-poppins font-bold text-white">
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    Additional Technologies
                  </span>
                </h3>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                {allAdditionalSkills.map((skill, index) => (
                  <motion.span 
                    key={`${skill}-${index}`}
                    className="group relative px-6 py-3 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-purple-500/50 transition-all duration-300 overflow-hidden cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -4 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/20 group-hover:to-blue-600/20 transition-all duration-300" />
                    <span className="relative text-white font-semibold">{skill}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
                <Zap className="text-yellow-400" size={24} />
                <span className="text-white/90 font-medium">
                  Constantly learning and evolving with new technologies
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
