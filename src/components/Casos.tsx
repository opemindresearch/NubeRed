import { motion } from 'framer-motion';
import { Quote, TrendingUp, Clock, Users, ShieldCheck } from 'lucide-react';
import { CloudEffect } from './CloudEffect';

export function Casos() {
  return (
    <section id="casos" className="relative py-20 bg-slate-50 overflow-hidden">
      {/* Background Image Texture */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-[0.03]">
        <img 
          src="https://picsum.photos/seed/nmi-city-casos/1920/1080?grayscale&blur=2" 
          alt="" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Casos de Éxito</h2>
          <p className="text-lg text-slate-600">
            Impacto real de Nubes Municipales Inteligentes en la transformación de la administración pública local.
          </p>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200">
          <div className="grid lg:grid-cols-2">
            {/* Image/Visual Side */}
            <div className="relative h-64 lg:h-auto bg-gradient-to-br from-red-700 to-red-600 p-8 flex flex-col justify-between text-white">
              {/* Abstract City Pattern */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="city" width="60" height="60" patternUnits="userSpaceOnUse">
                      <rect x="10" y="20" width="20" height="40" fill="currentColor" />
                      <rect x="40" y="10" width="15" height="50" fill="currentColor" />
                      <rect x="0" y="30" width="10" height="30" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#city)" />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-sm font-medium mb-6 border border-white/30">
                  <ShieldCheck size={16} /> Caso Destacado
                </div>
                <div className="relative">
                  <CloudEffect className="-top-12 -left-8 w-48 h-24 opacity-90 z-20" count={3} sparkleCount={6} />
                  <h3 className="text-4xl font-extrabold mb-2 relative z-10">Comalcalco</h3>
                </div>
                <p className="text-red-100 text-lg">Tabasco, México</p>
              </div>

              <div className="relative z-10 mt-auto">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <Quote size={32} className="text-red-200 mb-4 opacity-50" />
                  <p className="text-lg font-medium leading-relaxed">
                    "NMI nos permitió pasar de procesos manuales en papel a una gestión 100% digital, operada por nuestros propios estudiantes locales."
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-400 flex items-center justify-center font-bold text-red-900">
                      PM
                    </div>
                    <div>
                      <div className="font-bold">Presidente Municipal</div>
                      <div className="text-sm text-red-200">Administración 2021-2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Side */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h4 className="text-2xl font-bold text-slate-900 mb-8">Resultados de Implementación</h4>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-100 text-red-700 flex items-center justify-center flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-slate-900">Reducción de Tiempos</h5>
                    <p className="text-slate-600 mt-1">Los trámites que tomaban días ahora se resuelven en horas, gracias a la automatización de flujos.</p>
                    <div className="mt-3 flex items-end gap-2">
                      <span className="text-3xl font-black text-red-700">-60%</span>
                      <span className="text-sm text-slate-500 mb-1">en tiempo de respuesta</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-slate-900">Eficiencia Recaudatoria</h5>
                    <p className="text-slate-600 mt-1">Aumento en la captación de ingresos propios mediante pasarelas de pago digitales.</p>
                    <div className="mt-3 flex items-end gap-2">
                      <span className="text-3xl font-black text-emerald-600">+45%</span>
                      <span className="text-sm text-slate-500 mb-1">en recaudación</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-slate-900">Talento Local</h5>
                    <p className="text-slate-600 mt-1">Estudiantes de la institución educativa local operando y dando soporte a la plataforma.</p>
                    <div className="mt-3 flex items-end gap-2">
                      <span className="text-3xl font-black text-amber-600">120</span>
                      <span className="text-sm text-slate-500 mb-1">alumnos certificados</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
