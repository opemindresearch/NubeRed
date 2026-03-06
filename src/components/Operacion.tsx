import { motion } from 'framer-motion';
import { User, Cpu, Building2, CheckCircle, Star } from 'lucide-react';

export function Operacion() {
  const steps = [
    { id: 1, title: 'Solicitud', actor: 'Ciudadano', icon: <User size={20} />, desc: 'Ingresa petición vía App o Web.', color: 'bg-red-500' },
    { id: 2, title: 'Clasificación', actor: 'Nube Inteligente', icon: <Cpu size={20} />, desc: 'IA categoriza y asigna prioridad.', color: 'bg-red-600' },
    { id: 3, title: 'Asignación', actor: 'Nube Inteligente', icon: <Cpu size={20} />, desc: 'Ruteo automático al área responsable.', color: 'bg-red-700' },
    { id: 4, title: 'Ejecución', actor: 'Municipio', icon: <Building2 size={20} />, desc: 'Cuadrilla atiende y sube evidencia.', color: 'bg-red-800' },
    { id: 5, title: 'Validación', actor: 'Inst. Educativa', icon: <CheckCircle size={20} />, desc: 'Revisión de calidad y cierre técnico.', color: 'bg-red-900' },
    { id: 6, title: 'Evaluación', actor: 'Ciudadano', icon: <Star size={20} />, desc: 'Califica el servicio recibido.', color: 'bg-red-500' },
  ];

  return (
    <section id="operacion" className="relative py-20 bg-white overflow-hidden">
      {/* Background Image Texture */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-[0.02]">
        <img 
          src="https://picsum.photos/seed/nmi-process/1920/1080?blur=4" 
          alt="" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Operación y Gestión</h2>
          <p className="text-lg text-slate-600">
            Flujo estandarizado que garantiza trazabilidad, transparencia y eficiencia en cada solicitud.
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative mt-24 mb-12">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>
          
          <div className="relative z-10 flex justify-between">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center group w-40"
              >
                {/* Top Tooltip/Info */}
                <div className="mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -top-24 bg-slate-900 text-white text-xs p-3 rounded-lg shadow-xl w-48 text-center pointer-events-none">
                  <div className="font-bold mb-1">{step.actor}</div>
                  {step.desc}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-900 transform rotate-45"></div>
                </div>

                {/* Node */}
                <div className={`w-14 h-14 rounded-full ${step.color} text-white flex items-center justify-center shadow-lg border-4 border-white z-10 transition-transform group-hover:scale-110 cursor-pointer`}>
                  {step.icon}
                </div>

                {/* Bottom Label */}
                <div className="mt-4 text-center">
                  <div className="font-bold text-slate-900 text-sm">{step.title}</div>
                  <div className="text-xs text-slate-500 mt-1">{step.actor}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden relative pl-8 space-y-8">
          {/* Connecting Line */}
          <div className="absolute top-0 bottom-0 left-11 w-1 bg-slate-200 z-0"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative z-10 flex items-start gap-6"
            >
              <div className={`w-12 h-12 rounded-full ${step.color} text-white flex items-center justify-center shadow-lg border-4 border-white flex-shrink-0`}>
                {step.icon}
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex-1">
                <div className="font-bold text-slate-900">{step.title}</div>
                <div className="text-xs font-medium text-red-700 mb-2">{step.actor}</div>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
