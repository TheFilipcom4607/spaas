import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertCircle, Loader2 } from 'lucide-react';
import { marketingHomeUrl, marketingUrl, isAppSubdomain } from '../lib/hosts';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (email.trim().toLowerCase() === 'demo@getspaas.com' && password === 'demo') {
        navigate('/dashboard');
        return;
      }
      setLoading(false);
      setError('No account found with those credentials. Please check your email and password and try again.');
    }, 1500);
  };

  return (
    <div className={`${isAppSubdomain ? 'min-h-screen' : 'min-h-[calc(100vh-4rem)]'} flex items-center justify-center px-4 py-8`}>
      <section className="w-full max-w-md md:max-w-xl relative z-10">
        <a href={marketingHomeUrl} className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group mb-8">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to homepage
        </a>

        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-3">
            Welcome <span className="text-violet-400">back</span>
          </h1>
          <p className="text-zinc-400 md:text-base text-sm">Log in to your SPaaS dashboard.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">Email</label>
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
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-zinc-300 mb-2">Password</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-5 py-3.5 rounded-xl bg-zinc-900/60 border border-white/10 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all text-sm md:text-base"
            />
          </div>

          {error && (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400">
              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-full bg-white text-zinc-950 font-semibold hover:bg-zinc-200 transition-all hover:scale-[1.02] shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 disabled:opacity-60 disabled:hover:scale-100 md:text-base"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Signing in...
              </>
            ) : (
              'Sign in'
            )}
          </button>
        </form>

        <p className="text-center text-zinc-600 text-xs mt-6">
          Tour the dashboard with <span className="text-zinc-400 font-mono">demo@getspaas.com</span> / <span className="text-zinc-400 font-mono">demo</span>
        </p>

        <p className="text-center text-zinc-500 text-sm mt-8">
          Don't have an account?{' '}
          <a href={marketingUrl('/trial')} className="text-violet-400 hover:text-violet-300 transition-colors font-medium">Start a free trial</a>
        </p>
      </section>
    </div>
  );
}
