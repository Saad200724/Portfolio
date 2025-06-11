import { motion } from "framer-motion";
import type { Skill } from "@/types";

interface SkillBarProps {
  skill: Skill;
  index: number;
}

export default function SkillBar({ skill, index }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-purple-300 text-sm">{skill.level}</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2">
        <motion.div 
          className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          transition={{ 
            duration: 1,
            delay: index * 0.1,
            ease: "easeOut"
          }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}
