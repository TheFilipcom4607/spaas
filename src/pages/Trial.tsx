import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, ChevronDown, Loader2 } from 'lucide-react';

  const platforms = ['X (Twitter)', 'LinkedIn', 'Threads', 'Reddit', 'Bluesky', 'Instagram'];

export default function Trial() {
  const navigate = useNavigate();
  const [aggression, setAggression] = useState(5);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setTimeout(() => navigate('/payment'), 1200);
  };

  return (
    <div className="flex flex-col items-center">
      <section className="w-full max-w-2xl mx-auto px-4 pt-12 md:pt-20 pb-12 md:pb-24 relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group mb-12">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to homepage
        </Link>

        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 text-xs font-medium text-zinc-300 mb-8 backdrop-blur-md shadow-xl">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            14-day free trial, no credit card required
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Start your free trial</h1>
          <p className="text-zinc-400 mb-12">
            Set up your shitposting pipeline in under 2 minutes. Tell us about your brand and we'll configure your AI content engine.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="animate-fade-up space-y-6"
          style={{ animationDelay: '0.15s' }}
        >
          {/* Brand Name */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Brand or Company Name</label>
            <input
              type="text"
              placeholder="Acme Corp"
              className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-white/10 text-white placeholder-zinc-600 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 outline-none transition-all backdrop-blur-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Work Email</label>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-white/10 text-white placeholder-zinc-600 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 outline-none transition-all backdrop-blur-sm"
            />
          </div>

          {/* Shitposting Style */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Shitposting Style</label>
            <div className="relative">
              <select className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-white/10 text-white focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 outline-none transition-all backdrop-blur-sm appearance-none cursor-pointer">
                <option value="" className="bg-zinc-900">Select a personality...</option>
                <option value="corporate-unhinged" className="bg-zinc-900">Corporate Unhinged</option>
                <option value="irony-poisoned" className="bg-zinc-900">Irony Poisoned</option>
                <option value="wholesome-chaos" className="bg-zinc-900">Wholesome Chaos</option>
                <option value="reply-guy" className="bg-zinc-900">Professional Reply Guy</option>
                <option value="thought-leader" className="bg-zinc-900">Thought Leader (Parody)</option>
                <option value="doomposting" className="bg-zinc-900">Existential Doomposting</option>
              </select>
              <ChevronDown className="w-4 h-4 text-zinc-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Target Platforms */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Target Platforms</label>
            <p className="text-xs text-zinc-500 mb-3">Select all platforms you want to deploy to.</p>
            <div className="grid grid-cols-2 gap-3">
              {platforms.map((platform) => (
                <label
                  key={platform}
                  className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/40 border border-white/5 cursor-pointer hover:border-emerald-500/20 transition-all has-[:checked]:border-emerald-500/30 has-[:checked]:bg-emerald-500/5"
                >
                  <input type="checkbox" className="accent-emerald-500 w-4 h-4 rounded" />
                  <span className="text-sm text-zinc-300">{platform}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Aggressiveness Slider */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Content Aggressiveness</label>
            <div className="flex justify-between text-xs text-zinc-500 mb-3">
              <span>Mild Banter</span>
              <span>Corporate Arson</span>
            </div>
            <input
              type="range"
              min={1}
              max={10}
              value={aggression}
              onChange={(e) => setAggression(Number(e.target.value))}
              className="w-full"
              style={{ '--range-pct': `${((aggression - 1) / 9) * 100}%` } as React.CSSProperties}
            />
            <p className="text-center text-xs text-zinc-500 mt-2">Level {aggression}</p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-white text-zinc-950 py-4 rounded-full font-bold text-lg hover:bg-zinc-200 transition-all hover:scale-[1.02] shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Provisioning your bot army...
              </>
            ) : (
              <>
                Start Generating <Sparkles className="w-5 h-5" />
              </>
            )}
          </button>

          <p className="text-center text-xs text-zinc-600">
            By signing up you agree to our{' '}
            <Link to="/terms" className="text-zinc-400 hover:text-white transition-colors underline underline-offset-4">Terms</Link>
            {' '}and{' '}
            <Link to="/privacy" className="text-zinc-400 hover:text-white transition-colors underline underline-offset-4">Privacy Policy</Link>.
          </p>
        </form>
      </section>
    </div>
  );
}
