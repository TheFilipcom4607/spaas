import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loader2, ArrowLeft, ExternalLink } from 'lucide-react';

const steps = [
  { title: 'Preparing secure checkout...', subtitle: 'Please do not close this window.' },
  { title: 'Provisioning your account...', subtitle: 'Spinning up your bot operators.' },
  { title: 'Loading payment form...', subtitle: 'Almost there.' },
];

const STEP_MS = 1500;

export default function Joke() {
  const [step, setStep] = useState(0);
  const [isPreparing, setIsPreparing] = useState(true);

  useEffect(() => {
    if (step < steps.length - 1) {
      const t = setTimeout(() => setStep(step + 1), STEP_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setIsPreparing(false), STEP_MS);
    return () => clearTimeout(t);
  }, [step]);

  if (isPreparing) {
    const { title, subtitle } = steps[step];
    return (
      <div className="h-[calc(100svh-4rem)] flex flex-col items-center justify-center px-4 text-center relative z-10">
        <Loader2 className="w-12 h-12 text-violet-500 animate-spin mb-6" />
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-200">
          {title}
        </h2>
        <p className="text-zinc-500 mt-2">{subtitle}</p>
      </div>
    );
  }

  return (
    <div className="h-[calc(100svh-4rem)] flex flex-col items-center justify-center px-4 text-center relative z-10">
      {/* Background glow */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

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
