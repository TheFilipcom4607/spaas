import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building2, CheckCircle2, Loader2 } from 'lucide-react';

export default function ContactSales() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center">
      <section className="w-full max-w-2xl mx-auto px-4 pt-20 md:pt-28 pb-24 relative z-10">
        <div className="hidden md:block absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-violet-500/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        <Link to="/pricing" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group mb-10">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to pricing
        </Link>

        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-5">
            <Building2 className="w-7 h-7" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-3">
            Talk to <span className="text-violet-400">sales</span>
          </h1>
          <p className="text-zinc-400 md:text-base text-sm max-w-md mx-auto">
            Tell us about your shitposting needs. A chaos agent will reach out within one business day.
          </p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center text-center p-10 rounded-3xl bg-zinc-900/40 border border-white/5 md:backdrop-blur-sm">
            <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-5">
              <CheckCircle2 className="w-7 h-7 text-green-400" />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 mb-2">Thanks, we got it.</h2>
            <p className="text-zinc-400 text-sm max-w-sm">
              Our sales team will be in touch shortly. In the meantime, feel free to explore the demo dashboard.
            </p>
            <Link
              to="/pricing"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 font-semibold hover:bg-zinc-200 transition-all hover:scale-105 text-sm"
            >
              Back to pricing
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">Full name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="w-full px-5 py-3.5 rounded-xl bg-zinc-900/60 border border-white/10 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all text-sm md:text-base"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">Work email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full px-5 py-3.5 rounded-xl bg-zinc-900/60 border border-white/10 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all text-sm md:text-base"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-zinc-300 mb-2">Company</label>
                <input
                  id="company"
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Acme Inc."
                  className="w-full px-5 py-3.5 rounded-xl bg-zinc-900/60 border border-white/10 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all text-sm md:text-base"
                />
              </div>
              <div>
                <label htmlFor="teamSize" className="block text-sm font-medium text-zinc-300 mb-2">Team size</label>
                <select
                  id="teamSize"
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="w-full px-5 py-3.5 rounded-xl bg-zinc-900/60 border border-white/10 text-zinc-100 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all text-sm md:text-base appearance-none"
                >
                  <option value="">Select…</option>
                  <option value="1-10">1–10</option>
                  <option value="11-50">11–50</option>
                  <option value="51-200">51–200</option>
                  <option value="201-1000">201–1,000</option>
                  <option value="1000+">1,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">How can we help?</label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your goals, current stack, and any specific requirements."
                className="w-full px-5 py-3.5 rounded-xl bg-zinc-900/60 border border-white/10 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all text-sm md:text-base resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full bg-white text-zinc-950 font-semibold hover:bg-zinc-200 transition-all hover:scale-[1.02] shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 disabled:opacity-60 disabled:hover:scale-100 md:text-base"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Sending…
                </>
              ) : (
                'Get a custom quote'
              )}
            </button>

            <p className="text-center text-zinc-600 text-xs">
              By submitting, you agree to our <Link to="/privacy" className="text-zinc-400 hover:text-zinc-200 transition-colors">privacy policy</Link>.
            </p>
          </form>
        )}
      </section>
    </div>
  );
}
