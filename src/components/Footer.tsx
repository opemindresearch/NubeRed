import { motion } from 'framer-motion';

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold">
                NMI
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Nubes Municipales
              </span>
            </div>
            <p className="text-sm max-w-sm leading-relaxed">
              Automatización de servicios públicos, operados con institución educativa y supervisión municipal. Una iniciativa para transformar México desde sus municipios.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#alcance" className="hover:text-red-400 transition-colors">Alcance</a></li>
              <li><a href="#artefactos" className="hover:text-red-400 transition-colors">Artefactos</a></li>
              <li><a href="#operacion" className="hover:text-red-400 transition-colors">Operación</a></li>
              <li><a href="#dashboards" className="hover:text-red-400 transition-colors">Dashboards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-400 transition-colors">Aviso de Privacidad</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Seguridad</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-sm text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Nubes Municipales Inteligentes. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
