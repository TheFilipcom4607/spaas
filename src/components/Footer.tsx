import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-zinc-950/60 backdrop-blur-xl py-12 mt-24 relative z-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
          <Zap className="w-5 h-5 text-violet-400" />
          <span className="text-zinc-300">SPaaS</span>
        </div>
        <p className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} SPaaS Inc. All rights reserved. Not a real company.
        </p>
        <div className="flex gap-4 text-sm text-zinc-500">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
