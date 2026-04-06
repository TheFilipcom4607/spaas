import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter group">
          <div className="bg-violet-500/10 p-1.5 rounded-lg border border-violet-500/20 group-hover:bg-violet-500/20 transition-colors">
            <Zap className="w-5 h-5 text-violet-400" />
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">SPaaS</span>
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-zinc-400">
          <a href="/#features" className="hover:text-white transition-colors hidden md:block">Features</a>
          <a href="/#pricing" className="hover:text-white transition-colors hidden md:block">Pricing</a>
          <Link to="/payment" className="hover:text-white transition-colors">Log in</Link>
          <Link to="/payment" className="bg-white text-zinc-950 px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-all font-semibold hover:scale-105 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
