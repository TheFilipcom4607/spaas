import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loader2, ArrowLeft, ExternalLink } from 'lucide-react';

export default function Joke() {
  const [isPreparing, setIsPreparing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreparing(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isPreparing) {
    return (
      <div className="h-[calc(100svh-4rem)] flex flex-col items-center justify-center px-4 text-center relative z-10">
        <Loader2 className="w-12 h-12 text-violet-500 animate-spin mb-6" />
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-200">
          Preparing secure checkout...
        </h2>
        <p className="text-zinc-500 mt-2">Please do not close this window.</p>
      </div>
    );
  }

  return (
    <div className="h-[calc(100svh-4rem)] flex flex-col items-center justify-center px-4 text-center relative z-10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase text-white">
        It's a joke, <br className="md:hidden" />what did you expect?
      </h1>

      <a
        href="https://thefilip.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all hover:scale-105 mb-12 shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)]"
      >
        Go see my other stuff at thefilip.com <ExternalLink className="w-5 h-5" />
      </a>

      <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to the homepage
      </Link>
    </div>
  );
}
