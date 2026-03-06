import { useState, FormEvent } from 'react';
import { Send, Calendar, MessageSquare, Building, User, Mail, Phone } from 'lucide-react';
import { useAppStore } from '../store';

export function Contacto() {
  const { addToast } = useAppStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      addToast('Mensaje enviado correctamente. Nos pondremos en contacto pronto.', 'success');
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contacto" className="relative py-20 bg-white overflow-hidden">
      {/* Background Image Texture */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-[0.02]">
        <img 
          src="https://picsum.photos/seed/nmi-contact-bg/1920/1080?blur=5" 
          alt="" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Info Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Transforma tu municipio hoy
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Nubes Municipales Inteligentes es una iniciativa diseñada para modernizar la administración pública, empoderar el talento local y mejorar la vida de los ciudadanos.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-700">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-500">Correo Electrónico</div>
                  <div className="text-lg font-bold text-slate-900">contacto@nmi.mx</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-700">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-500">Teléfono</div>
                  <div className="text-lg font-bold text-slate-900">+52 (55) 1234-5678</div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowDemoModal(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20"
            >
              <Calendar size={20} /> Agendar Demo Virtual
            </button>
          </div>

          {/* Form Side */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <MessageSquare size={24} className="text-red-700" /> Envíanos un mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nombre completo</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <User size={18} />
                    </div>
                    <input required type="text" className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-700 focus:border-transparent outline-none transition-all" placeholder="Juan Pérez" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Municipio</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Building size={18} />
                    </div>
                    <input required type="text" className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-700 focus:border-transparent outline-none transition-all" placeholder="Comalcalco" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Correo electrónico</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Mail size={18} />
                  </div>
                  <input required type="email" className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-700 focus:border-transparent outline-none transition-all" placeholder="juan@municipio.gob.mx" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
                <textarea required rows={4} className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-700 focus:border-transparent outline-none transition-all resize-none" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-800 hover:bg-red-900 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Enviar Mensaje <Send size={18} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
            <button 
              onClick={() => setShowDemoModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Agendar Demo</h3>
            <p className="text-slate-600 mb-6">Selecciona una fecha y hora para una demostración guiada de la plataforma.</p>
            
            <div className="space-y-4">
              <div className="p-4 border border-slate-200 rounded-xl text-center text-slate-500">
                [Integración con Calendly / Selector de Fecha Mock]
              </div>
              <button 
                onClick={() => {
                  setShowDemoModal(false);
                  addToast('Demo agendada correctamente. Recibirás un correo de confirmación.', 'success');
                }}
                className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl"
              >
                Confirmar Horario
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
