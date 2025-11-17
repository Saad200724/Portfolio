import { motion } from "framer-motion";
import { Github, MessageCircle, Mail, Briefcase, Facebook, Heart, ArrowUp } from "lucide-react";
import { Link } from "wouter";
import { SOCIAL_LINKS, DEVELOPER_INFO } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];

  const socialLinks = [
    { icon: Github, href: SOCIAL_LINKS.github, label: "GitHub", gradient: "from-gray-600 to-gray-800" },
    { icon: MessageCircle, href: SOCIAL_LINKS.whatsapp, label: "WhatsApp", gradient: "from-green-500 to-emerald-600" },
    { icon: Facebook, href: SOCIAL_LINKS.facebook, label: "Facebook", gradient: "from-blue-600 to-indigo-600" },
    { icon: Briefcase, href: SOCIAL_LINKS.upwork, label: "Upwork", gradient: "from-blue-500 to-cyan-600" },
    { icon: Mail, href: `mailto:${DEVELOPER_INFO.email}`, label: "Email", gradient: "from-purple-600 to-pink-600" }
  ];

  return (
    <footer className="relative overflow-hidden bg-black/40 backdrop-blur-sm border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(147,51,234,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-poppins font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                PhantomsByte
              </h3>
              <p className="text-white/70 leading-relaxed">
                {DEVELOPER_INFO.title} & {DEVELOPER_INFO.subtitle}. Building the future, one line of code at a time.
              </p>
              <div className="flex items-center gap-2 text-white/60">
                <Mail size={16} />
                <a href={`mailto:${DEVELOPER_INFO.email}`} className="hover:text-cyan-400 transition-colors duration-300">
                  {DEVELOPER_INFO.email}
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-xl font-poppins font-bold text-white mb-6">Quick Links</h4>
              <div className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <Link key={link.path} href={link.path}>
                    <a className="text-white/70 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300" />
                      {link.name}
                    </a>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-xl font-poppins font-bold text-white mb-6">Connect With Me</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl bg-gradient-to-br ${social.gradient} shadow-lg hover:scale-110 transition-all duration-300`}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="text-white" size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p 
                className="text-white/60 text-sm text-center md:text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                © {new Date().getFullYear()} {DEVELOPER_INFO.name}. Built with{" "}
                <Heart className="inline w-4 h-4 text-red-500 fill-red-500 mx-1" />
                using React, TypeScript & Tailwind CSS.
              </motion.p>

              <motion.button
                onClick={scrollToTop}
                className="group p-3 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <ArrowUp className="text-white group-hover:translate-y-[-2px] transition-transform duration-300" size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
