import { motion } from 'framer-motion';
import { useState } from 'react';
import { Play, Pause, ArrowRight, Activity, Zap } from 'lucide-react';
import { CloudEffect } from './CloudEffect';

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Image Texture */}
      <div className="absolute inset-0 pointer-events-none -z-30 opacity-[0.04]">
        <img 
          src="https://picsum.photos/seed/nmi-clouds-hero/1920/1080?blur=1" 
          alt="" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      {/* Background subtle elements */}
      <div className="absolute inset-0 bg-white/80 -z-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-red-200 to-transparent blur-3xl rounded-full" />
        <CloudEffect className="top-20 left-0 w-full h-full opacity-30" count={6} sparkleCount={0} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start gap-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            Plataforma Activa
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight"
          >
            <CloudEffect className="-top-10 -left-10 w-64 h-32 opacity-80 z-20" count={4} sparkleCount={8} />
            <span className="relative z-10">Nubes Municipales <span className="text-red-700">Inteligentes</span></span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 max-w-xl leading-relaxed"
          >
            Automatización de servicios públicos, operados con institución educativa y supervisión municipal. Transforma tu municipio hoy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <a href="#artefactos" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-800 text-white font-medium hover:bg-red-900 transition-all shadow-lg shadow-red-800/20 hover:shadow-red-800/40">
              Ver artefactos <ArrowRight size={18} />
            </a>
            <a href="#casos" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-medium border border-slate-200 hover:bg-slate-50 transition-all">
              Ver impacto <Activity size={18} />
            </a>
            <a href="#implementacion" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-medium hover:bg-slate-200 transition-all">
              Simular <Zap size={18} />
            </a>
          </motion.div>
        </div>

        <div className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center z-10">
          {/* Controls */}
            <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-0 right-0 p-2 bg-white/80 backdrop-blur rounded-full shadow-sm text-slate-500 hover:text-red-700 z-20 transition-colors"
            title={isPlaying ? "Pausar animación" : "Reproducir animación"}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>

          {/* Isometric Illustration Simulation */}
          <div className="relative w-full max-w-md aspect-square">
            {/* Base Grid */}
            <div className="absolute inset-0 border border-slate-200/50 rounded-full transform rotate-x-60 rotate-z-45 scale-150 opacity-20" style={{ transform: 'rotateX(60deg) rotateZ(45deg) scale(1.5)' }} />
            
            {/* Building (Presidencia) */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-slate-200 rounded-lg shadow-2xl border-b-4 border-r-4 border-slate-300 flex items-center justify-center z-10"
              style={{ transform: 'translate(-50%, -50%) rotateX(60deg) rotateZ(45deg)' }}
            >
              <div className="w-16 h-16 bg-white/50 rounded" />
            </motion.div>

            {/* Cloud */}
            <motion.div
              animate={isPlaying ? { 
                y: [0, -15, 0],
                scale: [1, 1.05, 1],
                filter: ['drop-shadow(0 0 20px rgba(239,68,68,0.3))', 'drop-shadow(0 0 40px rgba(239,68,68,0.6))', 'drop-shadow(0 0 20px rgba(239,68,68,0.3))']
              } : {}}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <svg width="160" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-700 fill-red-700/20 drop-shadow-2xl">
                <path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.1325 20.1768 10.1986 17.8576 10.0154C17.3846 6.61397 14.4824 4 11 4C7.13401 4 4 7.13401 4 11C4 11.1375 4.00396 11.2741 4.01174 11.4095C2.28583 12.0163 1 13.6521 1 15.5C1 17.9853 3.01472 20 5.5 20H16.5" />
              </svg>
            </motion.div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full z-15 pointer-events-none" style={{ overflow: 'visible' }}>
              <motion.path
                d="M 200 120 Q 150 200 100 250"
                fill="none"
                stroke="url(#grad1)"
                strokeWidth="2"
                strokeDasharray="5 5"
                animate={isPlaying ? { strokeDashoffset: [20, 0] } : {}}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.path
                d="M 220 120 Q 280 200 320 230"
                fill="none"
                stroke="url(#grad1)"
                strokeWidth="2"
                strokeDasharray="5 5"
                animate={isPlaying ? { strokeDashoffset: [20, 0] } : {}}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.path
                d="M 210 130 Q 210 220 210 280"
                fill="none"
                stroke="url(#grad1)"
                strokeWidth="3"
                strokeDasharray="8 8"
                animate={isPlaying ? { strokeDashoffset: [32, 0] } : {}}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#621132" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8b2046" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>

            {/* Floating Icons */}
            <motion.div 
              animate={isPlaying ? { y: [0, -10, 0] } : {}} 
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-1/4 left-1/4 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-red-700 z-20"
            >
              <Activity size={20} />
            </motion.div>
            <motion.div 
              animate={isPlaying ? { y: [0, -10, 0] } : {}} 
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-1/3 right-1/4 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-red-500 z-20"
            >
              <Zap size={20} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
