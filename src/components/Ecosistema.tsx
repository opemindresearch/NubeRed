import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, GraduationCap, Cloud, Users } from 'lucide-react';
import { cn } from '../utils/cn';

export function Ecosistema() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const layers = [
    { 
      id: 1, 
      title: 'Gobernanza Municipal', 
      icon: <Building size={24} />, 
      color: 'bg-red-600',
      responsabilidades: ['Definición de políticas públicas', 'Asignación de presupuesto', 'Aprobación de servicios'],
      entregables: ['Marco regulatorio', 'Convenios de colaboración']
    },
    { 
      id: 2, 
      title: 'Institución Educativa', 
      icon: <GraduationCap size={24} />, 
      color: 'bg-red-700',
      responsabilidades: ['Operación técnica', 'Soporte de Nivel 1 y 2', 'Capacitación a funcionarios'],
      entregables: ['Reportes de SLA', 'Alumnos certificados', 'Mejoras al código']
    },
    { 
      id: 3, 
      title: 'Nube Inteligente', 
      icon: <Cloud size={24} />, 
      color: 'bg-red-800',
      responsabilidades: ['Hospedaje seguro', 'Procesamiento de IA', 'Trazabilidad inmutable'],
      entregables: ['APIs disponibles', 'Dashboards en tiempo real', 'Backups automáticos']
    },
    { 
      id: 4, 
      title: 'Ciudadanía', 
      icon: <Users size={24} />, 
      color: 'bg-red-900',
      responsabilidades: ['Uso responsable de servicios', 'Retroalimentación', 'Participación activa'],
      entregables: ['Reportes ciudadanos', 'Evaluaciones de servicio']
    }
  ];

  return (
    <section className="relative py-20 bg-slate-50 overflow-hidden">
      {/* Background Image Texture */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-[0.03]">
        <img 
          src="https://picsum.photos/seed/nmi-layers/1920/1080?grayscale&blur=3" 
          alt="" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ecosistema de 4 Capas</h2>
          <p className="text-lg text-slate-600">
            Un modelo colaborativo donde cada actor tiene un rol definido para garantizar el éxito del municipio inteligente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Diagram */}
          <div className="relative aspect-square max-w-md mx-auto w-full">
            {/* Center Connection */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-dashed border-slate-300 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none"></div>
            
            {layers.map((layer, index) => {
              // Position in a circle
              const angle = (index * 90) * (Math.PI / 180);
              const radius = 120; // distance from center
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.button
                  key={layer.id}
                  onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
                  className={cn(
                    "absolute top-1/2 left-1/2 w-32 h-32 -ml-16 -mt-16 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-300 shadow-lg",
                    layer.color,
                    "text-white hover:scale-105 hover:shadow-xl",
                    activeLayer === layer.id ? "ring-4 ring-white scale-110 z-20" : "z-10 opacity-90"
                  )}
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {layer.icon}
                  <span className="text-xs font-bold text-center px-2">{layer.title}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Details Panel */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 min-h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {activeLayer ? (
                <motion.div
                  key={activeLayer}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {layers.filter(l => l.id === activeLayer).map(layer => (
                    <div key={layer.id}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white", layer.color)}>
                          {layer.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">{layer.title}</h3>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Responsabilidades</h4>
                          <ul className="space-y-2">
                            {layer.responsabilidades.map((resp, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-slate-700">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0"></div>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Entregables</h4>
                          <div className="flex flex-wrap gap-2">
                            {layer.entregables.map((ent, idx) => (
                              <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm border border-slate-200">
                                {ent}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-slate-500"
                >
                  <div className="w-16 h-16 mx-auto mb-4 opacity-20">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                  </div>
                  <p>Selecciona una capa en el diagrama para ver sus detalles y responsabilidades.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
