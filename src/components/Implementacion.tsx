import { useState } from 'react';
import { motion } from 'framer-motion';
import { mockData } from '../data/mockData';
import { Calculator, Download, ChevronRight, CheckCircle2 } from 'lucide-react';
import { cn } from '../utils/cn';

export function Implementacion() {
  const [poblacion, setPoblacion] = useState(50000);
  const [presupuesto, setPresupuesto] = useState(1000000);
  const [nivel, setNivel] = useState('Básico');
  const [institucion, setInstitucion] = useState('Universidad Tecnológica Local');
  const [isSimulating, setIsSimulating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSimulate = () => {
    setIsSimulating(true);
    setShowResult(false);
    setTimeout(() => {
      setIsSimulating(false);
      setShowResult(true);
    }, 1500);
  };

  const handleDownload = () => {
    const planText = `
PLAN DE IMPLEMENTACIÓN NMI
==========================
Población: ${poblacion.toLocaleString()} habitantes
Presupuesto Estimado: $${presupuesto.toLocaleString()} MXN
Nivel Objetivo: ${nivel}
Institución Operadora: ${institucion}

FASES SUGERIDAS:
${mockData.fasesImplementacion.map(f => `- ${f.mes}: ${f.nombre}\n  Hitos: ${f.hitos.join(', ')}`).join('\n\n')}
    `;
    
    // Create a blob and download
    const blob = new Blob([planText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Plan_Implementacion_NMI.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="implementacion" className="relative py-20 bg-white overflow-hidden">
      {/* Background Image Texture */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-[0.02]">
        <img 
          src="https://picsum.photos/seed/nmi-blueprint/1920/1080?blur=2" 
          alt="" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simulador de Implementación</h2>
          <p className="text-lg text-slate-600">
            Calcula el tiempo, costo y fases necesarias para desplegar NMI en tu municipio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Inputs */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Calculator size={20} className="text-red-700" /> Parámetros
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="flex justify-between text-sm font-medium text-slate-700 mb-2">
                  <span>Población (habitantes)</span>
                  <span className="text-red-700 font-bold">{poblacion.toLocaleString()}</span>
                </label>
                <input 
                  type="range" 
                  min="10000" 
                  max="1000000" 
                  step="10000"
                  value={poblacion} 
                  onChange={(e) => setPoblacion(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-700"
                />
              </div>

              <div>
                <label className="flex justify-between text-sm font-medium text-slate-700 mb-2">
                  <span>Presupuesto Estimado (MXN)</span>
                  <span className="text-emerald-600 font-bold">${presupuesto.toLocaleString()}</span>
                </label>
                <input 
                  type="range" 
                  min="500000" 
                  max="10000000" 
                  step="100000"
                  value={presupuesto} 
                  onChange={(e) => setPresupuesto(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Nivel de Automatización Inicial
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Básico', 'Intermedio', 'Avanzado', 'IA'].map((n) => (
                    <button
                      key={n}
                      onClick={() => setNivel(n)}
                      className={cn(
                        "px-3 py-2 rounded-lg text-sm font-medium border transition-colors",
                        nivel === n 
                          ? "bg-red-50 border-red-700 text-red-800" 
                          : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                      )}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Institución Educativa Operadora
                </label>
                <select 
                  value={institucion}
                  onChange={(e) => setInstitucion(e.target.value)}
                  className="w-full bg-white border border-slate-200 text-slate-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-700"
                >
                  <option>Universidad Tecnológica Local</option>
                  <option>Instituto Tecnológico Regional</option>
                  <option>Universidad Autónoma Estatal</option>
                  <option>Otra Institución</option>
                </select>
              </div>

              <button
                onClick={handleSimulate}
                disabled={isSimulating}
                className="w-full bg-red-800 hover:bg-red-900 text-white font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSimulating ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Calculando...
                  </>
                ) : (
                  <>Generar Plan de Implementación <ChevronRight size={18} /></>
                )}
              </button>
            </div>
          </div>

          {/* Output */}
          <div className="bg-red-900 rounded-3xl p-8 border border-red-950 text-white relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/20 blur-3xl rounded-full pointer-events-none" />
            
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              Resultado del Simulador
            </h3>

            {!showResult && !isSimulating && (
              <div className="h-full flex flex-col items-center justify-center text-red-200 min-h-[300px]">
                <Calculator size={48} className="mb-4 opacity-50" />
                <p>Ajusta los parámetros y genera un plan.</p>
              </div>
            )}

            {isSimulating && (
              <div className="h-full flex flex-col items-center justify-center text-red-200 min-h-[300px]">
                <div className="w-12 h-12 border-4 border-red-400/30 border-t-red-400 rounded-full animate-spin mb-4" />
                <p className="animate-pulse">Analizando variables...</p>
              </div>
            )}

            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6 relative z-10"
              >
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-red-950/50 p-4 rounded-xl border border-red-800">
                    <div className="text-xs text-red-200 uppercase mb-1">Duración Estimada</div>
                    <div className="text-2xl font-bold text-white">8 Meses</div>
                  </div>
                  <div className="bg-red-950/50 p-4 rounded-xl border border-red-800">
                    <div className="text-xs text-red-200 uppercase mb-1">Artefactos Base</div>
                    <div className="text-2xl font-bold text-white">12 Módulos</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-red-200 uppercase tracking-wider">Plan Sugerido</h4>
                  {mockData.fasesImplementacion.map((fase, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-red-800 text-white flex items-center justify-center text-sm font-bold border border-red-700">
                          {i + 1}
                        </div>
                        {i < mockData.fasesImplementacion.length - 1 && (
                          <div className="w-px h-full bg-red-800 my-1" />
                        )}
                      </div>
                      <div className="pb-4">
                        <div className="font-bold text-white flex items-center gap-2">
                          {fase.nombre} <span className="text-xs font-normal text-red-200 bg-red-950 px-2 py-0.5 rounded-full">{fase.mes}</span>
                        </div>
                        <ul className="mt-2 space-y-1">
                          {fase.hitos.map((hito, j) => (
                            <li key={j} className="text-sm text-red-100 flex items-start gap-2">
                              <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                              {hito}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleDownload}
                  className="w-full mt-4 bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 border border-white/10"
                >
                  <Download size={18} /> Descargar Plan (.txt)
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
