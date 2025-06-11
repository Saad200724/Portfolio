import { Github, MessageCircle, Mail, Briefcase, Facebook } from "lucide-react";
import { SOCIAL_LINKS, DEVELOPER_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-poppins font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {DEVELOPER_INFO.name}
              </div>
              <p className="text-white/60">{DEVELOPER_INFO.title} & {DEVELOPER_INFO.subtitle}</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-green-400 transition-colors duration-300"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-blue-500 transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a 
                href={`mailto:${DEVELOPER_INFO.email}`}
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
              <a 
                href={SOCIAL_LINKS.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-blue-400 transition-colors duration-300"
              >
                <Briefcase size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-white/60">
              © 2024 {DEVELOPER_INFO.name}. Built with React, TypeScript & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
