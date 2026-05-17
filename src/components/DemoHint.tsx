import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X } from 'lucide-react';
import { loginUrl } from '../lib/hosts';

const STORAGE_KEY = 'spaas:demo-hint-dismissed';
const SHOW_DELAY_MS = 1500;

export default function DemoHint() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.localStorage.getItem(STORAGE_KEY) === '1') return;
    const t = window.setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // localStorage might be unavailable (private mode); dismissal just won't persist
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed z-50 left-4 right-4 bottom-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm"
        >
          <div className="relative rounded-2xl bg-zinc-900/95 border border-violet-500/30 shadow-[0_10px_40px_-10px_rgba(139,92,246,0.4)] md:backdrop-blur-xl p-4 pr-10">
            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss hint"
              className="absolute top-2.5 right-2.5 p-1 rounded-md text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-violet-500/15 border border-violet-500/25 text-violet-300 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-zinc-100">Tour the live demo</p>
                <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                  Poke around the SPaaS dashboard. No signup, no card.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <a
                    href={loginUrl}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-200 transition-colors"
                  >
                    Open demo
                  </a>
                  <button
                    type="button"
                    onClick={dismiss}
                    className="text-xs font-medium text-zinc-500 hover:text-zinc-300 px-2 py-1 transition-colors"
                  >
                    Maybe later
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
