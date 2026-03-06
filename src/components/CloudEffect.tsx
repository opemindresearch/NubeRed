import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

interface CloudEffectProps {
  className?: string;
  count?: number;
  sparkleCount?: number;
}

export function CloudEffect({ className, count = 3, sparkleCount = 5 }: CloudEffectProps) {
  return (
    <div className={cn("absolute pointer-events-none select-none overflow-visible", className)}>
      {/* Sparkles */}
      {Array.from({ length: sparkleCount }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0], 
            scale: [0, 1.2, 0],
            rotate: [0, 90, 180] 
          }}
          transition={{ 
            duration: 1.5 + Math.random() * 1.5, 
            repeat: Infinity, 
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
          className="absolute text-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.8))'
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </motion.div>
      ))}

      {/* Clouds */}
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={`cloud-${i}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.5, 0.8, 0.5], 
            x: [0, 15, -15, 0],
            y: [0, -8, 8, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ 
            duration: 12 + i * 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: i * 2
          }}
          className="absolute"
          style={{
            width: `${140 + i * 50}px`,
            height: `${70 + i * 25}px`,
            top: `${-30 + i * 15}px`,
            left: `${-50 + i * 40}px`,
            zIndex: 10 + i,
          }}
        >
          {/* Main cloud body */}
          <div 
            className="absolute inset-0 bg-white/30 blur-3xl rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0) 70%)'
            }}
          />
          {/* Fluffy highlights */}
          <div 
            className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-white/40 blur-2xl rounded-full"
          />
          <div 
            className="absolute bottom-0 right-1/4 w-2/3 h-2/3 bg-white/20 blur-2xl rounded-full"
          />
        </motion.div>
      ))}
    </div>
  );
}
