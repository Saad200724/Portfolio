
import { motion } from "framer-motion";
import { Sparkles, Rocket } from "lucide-react";
import SEO from "@/components/SEO";

export default function ECA() {
  return (
    <>
      <SEO 
        title="ECA - Saad Bin Tofayel Tahsin"
        description="Extra Curricular Activities - Coming Soon"
        url="/eca"
      />
      <div className="pt-32 pb-20 relative overflow-hidden min-h-screen flex items-center justify-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(14,165,233,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                className="inline-block mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-2">
                  <Sparkles size={16} />
                  Extra Curricular Activities
                </span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-poppins font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  ECA
                </span>
              </h1>

              <motion.div
                className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-3xl border border-purple-500/30 backdrop-blur-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <Rocket className="text-cyan-400" size={32} />
                <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Coming Soon...
                </span>
              </motion.div>

              <motion.p
                className="text-xl text-white/70 mt-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Exciting content about my extracurricular activities is on the way. Stay tuned!
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
