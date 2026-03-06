import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, Info, XCircle, X } from 'lucide-react';
import { useAppStore } from '../store';
import { cn } from '../utils/cn';

export function Toasts() {
  const { toasts, removeToast } = useAppStore();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className={cn(
              "pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border min-w-[300px]",
              toast.type === 'success' ? "bg-emerald-50 border-emerald-200 text-emerald-800" :
              toast.type === 'error' ? "bg-red-50 border-red-200 text-red-800" :
              "bg-red-50 border-red-200 text-red-800"
            )}
          >
            {toast.type === 'success' && <CheckCircle size={20} className="text-emerald-500" />}
            {toast.type === 'error' && <XCircle size={20} className="text-red-500" />}
            {toast.type === 'info' && <Info size={20} className="text-red-500" />}
            
            <p className="text-sm font-medium flex-1">{toast.message}</p>
            
            <button 
              onClick={() => removeToast(toast.id)}
              className="p-1 hover:bg-black/5 rounded-md transition-colors"
            >
              <X size={16} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
