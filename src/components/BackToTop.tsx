import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = docHeight > 0 ? Math.min(1, scrollTop / docHeight) : 0;
      setProgress(pct);
      setIsVisible(scrollTop > 240);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const circumference = 2 * Math.PI * 18; // r=18
  const dashOffset = circumference * (1 - progress);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="back-to-top"
          onClick={handleClick}
          aria-label="Back to top"
          className="fixed z-[60] bottom-6 right-6 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="relative p-[2px] rounded-full">
            {/* Glow */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-fuchsia-600 via-rose-500 to-amber-400 opacity-30 blur-xl transition-opacity group-hover:opacity-60" />

            {/* Outer ring */}
            <div className="relative w-14 h-14 rounded-full bg-slate-900/80 backdrop-blur border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              {/* Progress ring */}
              <svg className="absolute inset-0 m-auto rotate-[-90deg]" width="56" height="56" viewBox="0 0 56 56">
                <circle cx="28" cy="28" r="18" stroke="rgba(255,255,255,0.15)" strokeWidth="4" fill="none" />
                <circle
                  cx="28"
                  cy="28"
                  r="18"
                  stroke="url(#grad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                  fill="none"
                />
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f472b6" />
                    <stop offset="50%" stopColor="#fb7185" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Arrow */}
              <div className="absolute inset-0 grid place-items-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-white to-slate-200 text-slate-900 shadow-inner shadow-white/30 group-hover:from-white group-hover:to-slate-100 transition-colors">
                  <ArrowUp className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
          {/* Tooltip */}
          <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 rounded-md bg-white/90 px-2 py-1 text-xs font-medium text-slate-900 opacity-0 shadow group-hover:opacity-100 transition-opacity">
            Back to top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
} 