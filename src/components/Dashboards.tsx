import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '../store';
import { mockData } from '../data/mockData';
import { Building, GraduationCap, Users, MapPin, AlertCircle, CheckCircle2, TrendingUp, Clock, Activity, Star } from 'lucide-react';
import { cn } from '../utils/cn';

export function Dashboards() {
  const { activeDashboard, setActiveDashboard } = useAppStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const tabs = [
    { id: 'municipio', label: 'Municipio', icon: <Building size={18} /> },
    { id: 'educativa', label: 'Inst. Educativa', icon: <GraduationCap size={18} /> },
    { id: 'ciudadano', label: 'Ciudadano', icon: <Users size={18} /> },
  ] as const;

  const renderMunicipio = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Servicios Activos', value: mockData.metricasDashboard.municipio.activos, icon: <Activity size={20} />, color: 'text-red-700' },
          { label: 'Tiempo Promedio', value: mockData.metricasDashboard.municipio.tiempoRespuesta, icon: <Clock size={20} />, color: 'text-red-600' },
          { label: 'Satisfacción', value: mockData.metricasDashboard.municipio.satisfaccion, icon: <Star size={20} />, color: 'text-red-500' },
          { label: 'Ahorro Estimado', value: mockData.metricasDashboard.municipio.ahorro, icon: <TrendingUp size={20} />, color: 'text-red-800' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className={cn("p-2 rounded-lg bg-red-50", stat.color)}>{stat.icon}</div>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{stat.label}</span>
            </div>
            <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Map Placeholder */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 p-6 shadow-sm relative overflow-hidden min-h-[300px]">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <MapPin size={20} className="text-red-700" /> Mapa de Incidencias
          </h3>
          
          {/* Mock Map Background */}
          <div className="absolute inset-0 top-16 bg-slate-50 rounded-xl m-6 border border-slate-200 overflow-hidden">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* Mock Roads */}
              <path d="M 0 100 Q 150 150 300 100 T 600 150" fill="none" stroke="currentColor" strokeWidth="8" className="text-white" />
              <path d="M 200 0 L 200 300" fill="none" stroke="currentColor" strokeWidth="6" className="text-white" />
              
              {/* Incidents */}
              {mockData.incidencias.map((inc, i) => (
                <g key={i} transform={`translate(${inc.lng * 5}, ${inc.lat * 3})`}>
                  <circle cx="0" cy="0" r="6" className={cn(
                    "animate-pulse",
                    inc.estado === 'Pendiente' ? 'fill-red-700' : 
                    inc.estado === 'En proceso' ? 'fill-red-500' : 'fill-red-300'
                  )} />
                  <circle cx="0" cy="0" r="12" className={cn(
                    "opacity-30",
                    inc.estado === 'Pendiente' ? 'fill-red-700' : 
                    inc.estado === 'En proceso' ? 'fill-red-500' : 'fill-red-300'
                  )} />
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Bitácora Reciente</h3>
          <div className="space-y-4">
            {mockData.incidencias.slice(0, 4).map((inc, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className={cn(
                  "mt-1",
                  inc.estado === 'Pendiente' ? 'text-red-700' : 
                  inc.estado === 'En proceso' ? 'text-red-500' : 'text-red-300'
                )}>
                  {inc.estado === 'Pendiente' ? <AlertCircle size={16} /> : 
                   inc.estado === 'En proceso' ? <Clock size={16} /> : <CheckCircle2 size={16} />}
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-900">{inc.tipo}</div>
                  <div className="text-xs text-slate-500 mt-1">ID: #{inc.id} • {inc.estado}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderEducativa = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Alumnos Involucrados', value: mockData.metricasDashboard.educativa.alumnosInvolucrados, icon: <Users size={20} />, color: 'text-red-700' },
          { label: 'Proyectos Activos', value: mockData.metricasDashboard.educativa.proyectosActivos, icon: <Activity size={20} />, color: 'text-red-600' },
          { label: 'Horas Práctica', value: mockData.metricasDashboard.educativa.horasPractica, icon: <Clock size={20} />, color: 'text-red-500' },
          { label: 'Certificaciones', value: mockData.metricasDashboard.educativa.certsEmitidas, icon: <GraduationCap size={20} />, color: 'text-red-800' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className={cn("p-2 rounded-lg bg-red-50", stat.color)}>{stat.icon}</div>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{stat.label}</span>
            </div>
            <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm min-h-[300px] flex items-center justify-center">
        <p className="text-slate-500">Vista de gestión de alumnos y asignación de tickets en desarrollo...</p>
      </div>
    </div>
  );

  const renderCiudadano = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Trámites Realizados', value: mockData.metricasDashboard.ciudadano.tramitesRealizados, icon: <CheckCircle2 size={20} />, color: 'text-red-700' },
          { label: 'Reportes Activos', value: mockData.metricasDashboard.ciudadano.reportesActivos, icon: <AlertCircle size={20} />, color: 'text-red-600' },
          { label: 'Nivel Confianza', value: mockData.metricasDashboard.ciudadano.nivelConfianza, icon: <Star size={20} />, color: 'text-red-500' },
          { label: 'Tiempo Ahorrado', value: mockData.metricasDashboard.ciudadano.tiempoAhorrado, icon: <Clock size={20} />, color: 'text-red-800' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className={cn("p-2 rounded-lg bg-red-50", stat.color)}>{stat.icon}</div>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{stat.label}</span>
            </div>
            <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm min-h-[300px] flex items-center justify-center">
        <p className="text-slate-500">Expediente ciudadano y seguimiento de trámites en desarrollo...</p>
      </div>
    </div>
  );

  if (!mounted) return null;

  return (
    <section id="dashboards" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Dashboards Especializados</h2>
          <p className="text-lg text-slate-600">
            Vistas personalizadas para cada actor del ecosistema, mostrando la información relevante en tiempo real.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white p-1 rounded-2xl shadow-sm border border-slate-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveDashboard(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                  activeDashboard === tab.id
                    ? "bg-red-800 text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                )}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDashboard}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeDashboard === 'municipio' && renderMunicipio()}
              {activeDashboard === 'educativa' && renderEducativa()}
              {activeDashboard === 'ciudadano' && renderCiudadano()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
