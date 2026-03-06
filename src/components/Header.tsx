import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useAppStore } from '../store';
import { cn } from '../utils/cn';

export function Header() {
  const { isMenuOpen, toggleMenu, closeMenu } = useAppStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Alcance', href: '#alcance' },
    { name: 'Artefactos', href: '#artefactos' },
    { name: 'Operación', href: '#operacion' },
    { name: 'Dashboards', href: '#dashboards' },
    { name: 'Implementación', href: '#implementacion' },
    { name: 'Casos', href: '#casos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-50"
        style={{ scaleX }}
      />
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-red-800 shadow-md py-3'
            : 'bg-red-700 py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-red-700 font-bold">
              ITM
            </div>
            <span className="font-bold text-xl tracking-tight text-white hidden sm:block">
              ITMx
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-red-100 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-red-100 hover:text-white hover:bg-red-800 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          <div
            className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
            onClick={closeMenu}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="absolute right-0 top-0 bottom-0 w-64 bg-white shadow-xl p-6 flex flex-col gap-6 pt-24"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="text-lg font-medium text-slate-800 hover:text-red-600"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        </div>
      )}
    </>
  );
}
