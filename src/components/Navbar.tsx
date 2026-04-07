import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl relative">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter group">
          <div className="bg-violet-500/10 p-1.5 rounded-lg border border-violet-500/20 group-hover:bg-violet-500/20 transition-colors">
            <Zap className="w-5 h-5 text-violet-400" />
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">SPaaS</span>
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-zinc-400">
          <a href="/#features" className="hover:text-white transition-colors hidden md:block">Features</a>
          <Link to="/pricing" className="hover:text-white transition-colors hidden md:block">Pricing</Link>
          <Link to="/payment" className="hover:text-white transition-colors hidden md:block">Log in</Link>
          <Link to="/pricing" className="bg-white text-zinc-950 px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-all font-semibold hover:scale-105 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
            Get Started
          </Link>
          <button
            className="md:hidden text-zinc-400 hover:text-white transition-colors p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-zinc-950/95 backdrop-blur-xl border-b border-white/5 md:hidden"
          >
            <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
              <a
                href="/#features"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors px-3 py-2.5 rounded-xl hover:bg-white/5"
              >
                Features
              </a>
              <Link
                to="/pricing"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors px-3 py-2.5 rounded-xl hover:bg-white/5"
              >
                Pricing
              </Link>
              <Link
                to="/payment"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors px-3 py-2.5 rounded-xl hover:bg-white/5"
              >
                Log in
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
