import { create } from 'zustand';

interface AppState {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  activeDashboard: 'municipio' | 'educativa' | 'ciudadano';
  setActiveDashboard: (dash: 'municipio' | 'educativa' | 'ciudadano') => void;
  toasts: { id: string; message: string; type: 'success' | 'info' | 'error' }[];
  addToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
  activeDashboard: 'municipio',
  setActiveDashboard: (dash) => set({ activeDashboard: dash }),
  toasts: [],
  addToast: (message, type = 'info') => {
    const id = Math.random().toString(36).substring(7);
    set((state) => ({ toasts: [...state.toasts, { id, message, type }] }));
    setTimeout(() => {
      set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }));
    }, 3000);
  },
  removeToast: (id) => set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) })),
}));
