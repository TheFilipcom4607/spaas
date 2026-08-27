import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';

const reasons = [
  'Violated community guidelines',
  'Violated our own community guidelines',
  'Was actually funny (under review)',
  'Legal asked. Legal never asks.',
];

export default function NotFound() {
  return (
    <div className="min-h-[calc(100svh-4rem)] flex flex-col items-center justify-center px-4 pt-20 pb-36 md:pb-20 text-center relative z-10">
      {/* Background glow */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="animate-fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 text-xs font-medium text-zinc-300 mb-8 md:backdrop-blur-md shadow-xl">
        <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
        Post removed · 404
      </div>

      <h1
        className="animate-fade-up text-4xl md:text-6xl font-bold tracking-tighter mb-5 leading-tight max-w-3xl"
        style={{ animationDelay: '0.1s' }}
      >
        This post was <span className="text-emerald-400">deleted</span> after the backlash
      </h1>

      <p
        className="animate-fade-up text-lg text-zinc-400 max-w-xl mx-auto mb-10"
        style={{ animationDelay: '0.2s' }}
      >
        Our legal team is thrilled. Our engagement is not.
      </p>

      <div
        className="animate-fade-up w-full max-w-md text-left p-6 rounded-3xl bg-zinc-900/40 border border-white/5 md:backdrop-blur-sm mb-10"
        style={{ animationDelay: '0.3s' }}
      >
        <h2 className="text-sm font-medium text-zinc-300 flex items-center gap-2 mb-4">
          <ShieldCheck className="w-4 h-4 text-emerald-400" /> Reason for removal
        </h2>
        <ul className="flex flex-col gap-2.5">
          {reasons.map((reason, i) => (
            <li key={reason} className="flex items-start gap-3 text-sm text-zinc-400">
              <span
                className={`mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border text-[10px] font-bold ${
                  i === 2
                    ? 'border-emerald-500/40 bg-emerald-500/20 text-emerald-300'
                    : 'border-white/10 bg-zinc-800/60 text-transparent'
                }`}
              >
                ✓
              </span>
              {reason}
            </li>
          ))}
        </ul>
      </div>

      <div
        className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md"
        style={{ animationDelay: '0.4s' }}
      >
        <Link
          to="/"
          className="w-full sm:w-auto bg-white text-zinc-950 px-8 py-3.5 rounded-full hover:bg-zinc-200 transition-all font-semibold flex items-center justify-center gap-2 hover:scale-105 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]"
        >
          <ArrowLeft className="w-4 h-4" /> Back to safety
        </Link>
        <Link
          to="/pricing"
          className="w-full sm:w-auto bg-zinc-900/80 text-white border border-white/10 px-8 py-3.5 rounded-full hover:bg-zinc-800 hover:border-white/20 transition-all font-semibold flex items-center justify-center gap-2 md:backdrop-blur-md"
        >
          Post something worse <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
