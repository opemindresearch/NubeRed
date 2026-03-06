import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockData } from '../data/mockData';
import { ChevronDown, ChevronUp, ChevronRight, Layers, Cpu, ShieldCheck, Zap } from 'lucide-react';
import { cn } from '../utils/cn';

export function Artefactos() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getNivelIcon = (nivel: string) => {
    switch (nivel) {
      case 'Básico': return <Layers size={16} className="text-slate-500" />;
      case 'Intermedio': return <Zap size={16} className="text-red-500" />;
      case 'Avanzado': return <ShieldCheck size={16} className="text-indigo-500" />;
      case 'IA': return <Cpu size={16} className="text-purple-500" />;
      default: return <Layers size={16} />;
    }
  };

  const getNivelColor = (nivel: string) => {
    switch (nivel) {
      case 'Básico': return 'bg-slate-100 text-slate-700';
      case 'Intermedio': return 'bg-red-100 text-red-700';
      case 'Avanzado': return 'bg-indigo-100 text-indigo-700';
      case 'IA': return 'bg-purple-100 text-purple-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <section id="artefactos" className="relative py-20 bg-slate-50 overflow-hidden">
      {/* Background Image Texture */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-[0.03]">
        <img 
          src="https://picsum.photos/seed/nmi-tech/1920/1080?grayscale&blur=2" 
          alt="" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Catálogo de Artefactos</h2>
          <p className="text-lg text-slate-600">
            Módulos aplicativos diseñados para resolver problemas específicos con distintos niveles de automatización.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockData.artefactos.map((art) => (
            <motion.div
              key={art.id}
              layout
              className={cn(
                "relative rounded-3xl shadow-lg overflow-hidden transition-all duration-300",
                expandedId === art.id ? "bg-red-900 ring-2 ring-red-500/50" : "bg-red-800 hover:bg-red-900"
              )}
            >
              {/* Card Header (Clickable) */}
              <div 
                className="p-8 cursor-pointer flex flex-col h-full relative z-10"
                onClick={() => toggleExpand(art.id)}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="text-3xl font-bold text-white">
                    {art.id.toString().padStart(2, '0')}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 pr-12">{art.nombre}</h3>
                <p className="text-sm text-red-100 line-clamp-2">{art.problema}</p>
              </div>

              {/* Decorative Circle Accent */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-red-500 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <div className="absolute top-8 left-8 text-white">
                  {expandedId === art.id ? <ChevronUp size={24} /> : <ChevronRight size={24} />}
                </div>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedId === art.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden relative z-10"
                  >
                    <div className="px-8 pb-8 pt-2 border-t border-red-700/50">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="px-3 py-1 bg-red-950/50 text-red-200 rounded-full text-xs font-medium border border-red-700/50">
                            Nivel: {art.nivel}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-red-300 uppercase tracking-wider mb-2">Flujo Resumido</h4>
                          <div className="flex items-center gap-2 text-sm text-white bg-red-950/50 p-3 rounded-lg border border-red-700/50">
                            <span className="font-mono text-xs">{art.flujo.split('->').join(' → ')}</span>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-xs font-semibold text-red-300 uppercase tracking-wider mb-2">Requisitos</h4>
                          <p className="text-sm text-red-100">{art.reqs}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
