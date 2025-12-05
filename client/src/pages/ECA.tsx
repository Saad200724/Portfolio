import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Award, Calendar, Building, X, ChevronRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import SEO from "@/components/SEO";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Eca {
  id: number;
  title: string;
  organization: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string | null;
  imageUrl: string | null;
}

export default function ECA() {
  const { data: ecas = [], isLoading } = useQuery<Eca[]>({
    queryKey: ["/api/ecas"],
  });

  const [selectedEca, setSelectedEca] = useState<Eca | null>(null);

  return (
    <>
      <SEO 
        title="ECA - Saad Bin Tofayel Tahsin"
        description="Extra Curricular Activities and Leadership Experiences"
        url="/eca"
      />
      <div className="pt-32 pb-20 relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(14,165,233,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
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
                <span className="text-sm font-semibold flex items-center gap-2">
                  <Award size={16} className="text-cyan-400" />
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Extra Curricular Activities</span>
                </span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-poppins font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  ECA & Leadership
                </span>
              </h1>

              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                My journey beyond academics - leadership roles, community involvement, and extracurricular achievements
              </p>
            </motion.div>

            {isLoading ? (
              <div className="text-center py-20">
                <div className="inline-block w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : ecas.length === 0 ? (
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-3xl border border-purple-500/30 backdrop-blur-xl">
                  <Rocket className="text-cyan-400" size={32} />
                  <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Coming Soon...
                  </span>
                </div>
                <p className="text-xl text-white/70 mt-8 max-w-2xl mx-auto">
                  Exciting content about my extracurricular activities is on the way. Stay tuned!
                </p>
              </motion.div>
            ) : (
              <div className="flex flex-col gap-8">
                {ecas.map((eca, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <motion.div
                      key={eca.id}
                      className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 cursor-pointer"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                      data-testid={`card-eca-${eca.id}`}
                      onClick={() => setSelectedEca(eca)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/10 transition-all duration-500" />

                      <div className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0`}>
                        {eca.imageUrl && (
                          <div className="md:w-auto flex-shrink-0">
                            <img 
                              src={eca.imageUrl} 
                              alt={eca.title}
                              className="h-48 md:h-56 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                              data-testid={`img-eca-${eca.id}`}
                            />
                          </div>
                        )}

                        <div className={`flex-1 p-6 flex flex-col justify-center ${!eca.imageUrl ? 'md:w-full' : ''}`}>
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30 flex-shrink-0">
                              <Award className="text-white" size={24} />
                            </div>
                            <div>
                              <h3 className="text-2xl font-poppins font-bold text-white group-hover:text-purple-300 transition-colors duration-300" data-testid={`text-eca-title-${eca.id}`}>
                                {eca.title}
                              </h3>
                              <div className="flex items-center gap-2 mt-1 text-white/60">
                                <Building size={14} />
                                <span className="text-sm" data-testid={`text-eca-org-${eca.id}`}>{eca.organization}</span>
                              </div>
                            </div>
                          </div>

                          <div className="mb-4">
                            <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 rounded-full text-sm font-semibold text-purple-300 border border-purple-500/30" data-testid={`badge-eca-role-${eca.id}`}>
                              {eca.role}
                            </span>
                          </div>

                          <p className="text-white/70 mb-2 line-clamp-2" data-testid={`text-eca-desc-${eca.id}`}>
                            {eca.description}
                          </p>

                          <span className="text-cyan-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300 flex items-center gap-1 mb-4">
                            Click for more <ChevronRight size={14} />
                          </span>

                          <div className="flex items-center gap-2 text-white/50 text-sm">
                            <Calendar size={14} />
                            <span data-testid={`text-eca-date-${eca.id}`}>{eca.startDate} - {eca.endDate || "Present"}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedEca} onOpenChange={(open) => !open && setSelectedEca(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800 border-purple-500/30">
          {selectedEca && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-poppins font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" data-testid="modal-eca-title">
                  {selectedEca.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {selectedEca.imageUrl && (
                  <div className="w-full flex justify-center">
                    <img 
                      src={selectedEca.imageUrl} 
                      alt={selectedEca.title}
                      className="max-w-full h-auto max-h-96 object-contain rounded-xl"
                      data-testid="modal-eca-image"
                    />
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 text-white/70">
                    <Building size={18} />
                    <span data-testid="modal-eca-org">{selectedEca.organization}</span>
                  </div>
                  <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 rounded-full text-sm font-semibold text-purple-300 border border-purple-500/30" data-testid="modal-eca-role">
                    {selectedEca.role}
                  </span>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <Calendar size={16} />
                    <span data-testid="modal-eca-date">{selectedEca.startDate} - {selectedEca.endDate || "Present"}</span>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Description</h4>
                  <p className="text-white/80 leading-relaxed whitespace-pre-wrap" data-testid="modal-eca-description">
                    {selectedEca.description}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}