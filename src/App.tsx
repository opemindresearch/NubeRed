/**
 * GUÍA DE USO - NUBES MUNICIPALES INTELIGENTES (NMI)
 * 
 * 1. CÓMO ABRIRLO:
 * Este proyecto está construido con React y Vite. Para ejecutarlo localmente:
 * - Asegúrate de tener Node.js instalado.
 * - Ejecuta `npm install` para instalar dependencias.
 * - Ejecuta `npm run dev` para iniciar el servidor de desarrollo.
 * - Abre http://localhost:3000 en tu navegador.
 * 
 * 2. CÓMO EDITAR DATOS MOCK:
 * Todos los datos simulados (categorías, artefactos, métricas, incidencias, fases)
 * se encuentran centralizados en el archivo: `/src/data/mockData.ts`.
 * Simplemente abre ese archivo y modifica los valores JSON. La UI se actualizará automáticamente.
 * 
 * 3. DÓNDE CAMBIAR COLORES Y TIPOGRAFÍAS:
 * - Tipografías: Se definen en `/src/index.css` (Inter y JetBrains Mono). Puedes cambiar las URLs de Google Fonts ahí.
 * - Colores: Utilizamos Tailwind CSS. Los colores principales (red-600, slate-900, etc.) están aplicados directamente 
 *   en los componentes (ej. `className="bg-red-600"`). Para cambiar el tema global, puedes extender la configuración 
 *   de Tailwind en `vite.config.ts` o buscar y reemplazar las clases de color en los componentes.
 */

import { useEffect } from 'react';
import { useAppStore } from './store';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Alcance } from './components/Alcance';
import { Artefactos } from './components/Artefactos';
import { Operacion } from './components/Operacion';
import { Ecosistema } from './components/Ecosistema';
import { Dashboards } from './components/Dashboards';
import { Implementacion } from './components/Implementacion';
import { Casos } from './components/Casos';
import { Contacto } from './components/Contacto';
import { Footer } from './components/Footer';
import { Toasts } from './components/Toasts';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-red-500/30 relative overflow-hidden">
      {/* Global Background Textures - Full Screen Clouds */}
      <div className="fixed inset-0 pointer-events-none -z-50 opacity-[0.05]">
        <img 
          src="https://picsum.photos/seed/nmi-clouds-white/1920/1080?blur=1" 
          alt="" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="fixed inset-0 pointer-events-none -z-50 opacity-[0.03] mix-blend-soft-light">
        <img 
          src="https://picsum.photos/seed/nmi-sky-texture/1920/1080?blur=3" 
          alt="" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="fixed inset-0 pointer-events-none -z-50 opacity-[0.02] mix-blend-multiply">
        <img 
          src="https://picsum.photos/seed/nmi-city-aerial/1920/1080?grayscale&blur=2" 
          alt="" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <Header />
      <main>
        <Hero />
        <Alcance />
        <Artefactos />
        <Operacion />
        <Ecosistema />
        <Dashboards />
        <Implementacion />
        <Casos />
        <Contacto />
      </main>
      <Footer />
      <Toasts />
    </div>
  );
}
