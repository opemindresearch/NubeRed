import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockData } from '../data/mockData';
import { CheckCircle2, Clock, Smartphone, Star } from 'lucide-react';
import { cn } from '../utils/cn';

export function Alcance() {
  const [activeTab, setActiveTab] = useState(mockData.categorias[0].id);
  const activeData = mockData.categorias.find(c => c.id === activeTab) || mockData.categorias[0];

  return (
    <section id="alcance" className="relative py-20 bg-white overflow-hidden">
      {/* Background Image Texture */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-[0.02]">
        <img 
          src="https://picsum.photos/seed/nmi-network/1920/1080?blur=3" 
          alt="" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Alcance del Sistema</h2>
          <p className="text-lg text-slate-600">
            Cobertura integral de servicios municipales, organizados por categorías para una gestión eficiente y transparente.
          </p>
        </div>

        {/* Tabs/Chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {mockData.categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeTab === cat.id
                  ? "bg-red-800 text-white shadow-md shadow-red-800/20"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              )}
            >
              {cat.nombre}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-200">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid md:grid-cols-2 gap-10"
            >
              {/* Left: Info */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{activeData.nombre}</h3>
                <p className="text-slate-600 mb-8">{activeData.desc}</p>
                
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Ejemplos de Servicios</h4>
                <ul className="space-y-3">
                  {activeData.servicios.map((servicio, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle2 size={18} className="text-red-700 flex-shrink-0" />
                      <span>{servicio}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Indicators */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-800 mb-4">
                    <Clock size={20} />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{activeData.indicadores.tiempo}</div>
                  <div className="text-sm text-slate-500">Tiempo de respuesta</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-4">
                    <Smartphone size={20} />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{activeData.indicadores.digitalizacion}</div>
                  <div className="text-sm text-slate-500">Digitalización</div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 col-span-2 flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-slate-900 mb-1">{activeData.indicadores.satisfaccion}</div>
                    <div className="text-sm text-slate-500">Satisfacción Ciudadana</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500">
                    <Star size={24} fill="currentColor" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
