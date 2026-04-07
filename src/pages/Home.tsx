import { useRef, useEffect, useState } from 'react';
import { ArrowRight, BarChart3, MessageSquareWarning, Zap, Globe, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Dashboard from '../components/Dashboard';

const stats = [
  { prefix: '', value: 2.4, decimals: 1, suffix: 'B', label: 'Shitposts served' },
  { prefix: '>', value: 5, decimals: 0, suffix: 'K', label: 'Happy customers' },
  { prefix: '', value: 99.97, decimals: 2, suffix: '%', label: 'Uptime (give or take)' },
  { prefix: '<', value: 12, decimals: 0, suffix: 'ms', label: 'Avg. ratio response time' },
];

const testimonials = [
  {
    quote: "I didn't think a bot army could save my quarterly earnings call, but here we are.",
    name: 'Marcus T.',
    title: 'CEO',
    company: 'cbrand',
  },
  {
    quote: "SPaaS took us from 2 posts a week to 847 a day. Our PR team quit but engagement is through the roof.",
    name: 'Aoife R.',
    title: 'VP of Marketing',
    company: 'brianair',
  },
  {
    quote: "The deepfake meme module alone is worth the Enterprise price. Legal said no. We did it anyway.",
    name: 'Jordan K.',
    title: 'Director of Social Media',
    company: "Crispotle's",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto px-4 pt-20 md:pt-32 pb-16 md:pb-24 text-center relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-500/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        <div
          className="animate-fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 text-xs font-medium text-zinc-300 mb-8 relative z-10 backdrop-blur-md shadow-xl"
        >
          <span className="flex h-2 w-2 rounded-full bg-violet-500 animate-pulse"></span>
          SPENGINE 3.0 is now live
        </div>
        <h1
          className="animate-fade-up text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="text-violet-400">Shitposting</span> <br className="hidden md:block" />
          as a Service
        </h1>
        <p
          className="animate-fade-up text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10"
          style={{ animationDelay: '0.2s' }}
        >
          Automate your brand's descent into internet culture. We leverage advanced AI to generate highly engaging, mildly offensive, and algorithm-optimized content at scale.
        </p>
        <div
          className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: '0.3s' }}
        >
          <Link to="/trial" className="w-full sm:w-auto bg-white text-zinc-950 px-8 py-3.5 rounded-full hover:bg-zinc-200 hover:text-zinc-950 transition-all font-semibold flex items-center justify-center gap-2 hover:scale-105 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]">
            Start Free Trial <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/pricing" className="w-full sm:w-auto bg-zinc-900/80 text-white border border-white/10 px-8 py-3.5 rounded-full hover:bg-zinc-800 hover:text-white hover:border-white/20 transition-all font-semibold flex items-center justify-center backdrop-blur-md">
            View Pricing
          </Link>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="w-full border-y border-white/5 bg-zinc-900/20 backdrop-blur-xl py-12 relative z-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <StatCounter prefix={stat.prefix} target={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
              <p className="text-zinc-500 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard Preview */}
      <div className="w-full pt-16 md:pt-24">
        <Dashboard />
      </div>

      {/* Features Section */}
      <section id="features" className="w-full max-w-5xl mx-auto px-4 py-24 border-t border-white/5 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Why choose SPaaS?</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Stop paying social media managers to post boring corporate updates. Let our algorithms handle the engagement farming.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<MessageSquareWarning className="w-6 h-6" />}
            title="Context-Aware Trolling"
            description="Our NLP models analyze trending topics and automatically generate controversial takes to maximize quote tweets and replies."
            index={0}
          />
          <FeatureCard
            icon={<BarChart3 className="w-6 h-6" />}
            title="Engagement Analytics"
            description="Track your ratio metrics in real-time. See exactly which posts are causing the most outrage and double down."
            index={1}
          />
          <FeatureCard
            icon={<Globe className="w-6 h-6" />}
            title="Multi-Platform Synergy"
            description="Deploy identical low-effort memes across X, Threads, and LinkedIn simultaneously for maximum brand damage."
            index={2}
          />
          <FeatureCard
            icon={<Zap className="w-6 h-6" />}
            title="Lightning Fast Ratios"
            description="Our distributed network of bot accounts ensures your competitors get ratioed within milliseconds of posting."
            index={3}
          />
          <FeatureCard
            icon={<ShieldCheck className="w-6 h-6" />}
            title="PR Crisis Mode"
            description="Automatically issue generic, non-apology notes app screenshots when a shitpost goes slightly too far."
            index={4}
          />
          <FeatureCard
            icon={<Users className="w-6 h-6" />}
            title="Cult Building"
            description="Transform your passive customers into a rabid fanbase ready to defend your brand's honor in the replies."
            index={5}
          />
        </div>
      </section>

      {/* Social Proof */}
      <section className="w-full border-y border-white/5 bg-zinc-900/20 backdrop-blur-xl py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto px-4 text-center"
        >
          <h2 className="text-sm font-semibold tracking-widest uppercase mb-12 text-zinc-500">Trusted by the most unhinged brands on the internet</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-2xl font-bold font-serif">cbrand</div>
            <div className="text-2xl font-black tracking-widest">brianair</div>
            <div className="text-2xl font-medium italic">triolingo</div>
            <div className="text-2xl font-bold tracking-tighter">Crispotle's</div>
            <div className="text-2xl font-light uppercase">Bendy's</div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-5xl mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.35 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">What our customers are saying</h2>
          <p className="text-zinc-400">Don't take our word for it. Take theirs.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm flex flex-col gap-4 relative z-10"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-violet-400 text-lg leading-none">★</span>
                ))}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed flex-1">"{t.quote}"</p>
              <div>
                <p className="text-zinc-200 font-medium text-sm">{t.name}</p>
                <p className="text-zinc-500 text-xs mt-0.5">{t.title} · <span className="text-violet-400">{t.company}</span></p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="w-full max-w-5xl mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Why SPaaS beats the alternatives</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">We ran the numbers. The numbers were embarrassing for everyone except us.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="overflow-x-auto rounded-3xl border border-white/5 backdrop-blur-xl relative z-10"
        >
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="border-b border-white/5">
                <th className="p-6 text-left text-zinc-500 font-medium w-1/4">Capability</th>
                <th className="p-6 text-center font-semibold text-zinc-400 w-1/4">Doing It Yourself</th>
                <th className="p-6 text-center font-semibold text-zinc-400 w-1/4">Hiring an Intern</th>
                <th className="p-6 text-center w-1/4 bg-violet-500/10 border-l border-r border-violet-500/20">
                  <span className="text-violet-300 font-bold">SPaaS</span>
                  <span className="ml-2 text-xs bg-violet-500/20 text-violet-300 border border-violet-500/30 px-2 py-0.5 rounded-full">recommended</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Posts per day", diy: "1–2 (if you remembered)", intern: "3–4 (mostly reposts)", spaas: "∞" },
                { label: "Understands irony", diy: "Sometimes", intern: "Debatable", spaas: "Always" },
                { label: "Will go rogue", diy: "Yes, at 2am", intern: "Yes, on day 3", spaas: "Only if prompted" },
                { label: "Needs coffee", diy: "Desperately", intern: "Constantly", spaas: "No" },
                { label: "PR crisis response time", diy: "After seeing Twitter on the toilet", intern: "After texting their friends about it", spaas: "<200ms" },
                { label: "Ratio accuracy", diy: "Accidental", intern: "Enthusiastic but wrong", spaas: "Surgical" },
                { label: "Asks for a raise", diy: "You are the raise", intern: "Every two weeks", spaas: "Never" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors group">
                  <td className="p-6 font-medium text-zinc-300">{row.label}</td>
                  <td className="p-6 text-center text-zinc-500">{row.diy}</td>
                  <td className="p-6 text-center text-zinc-500">{row.intern}</td>
                  <td className="p-6 text-center font-semibold text-violet-300 bg-violet-500/10 border-l border-r border-violet-500/20 group-hover:bg-violet-500/[0.15] transition-colors">{row.spaas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-400 mb-6 text-lg">Ready to shitpost cheaper, faster and better?</p>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 bg-white text-zinc-950 px-10 py-4 rounded-full font-bold text-lg hover:bg-zinc-200 transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
          >
            See pricing &amp; get started <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-zinc-600 text-xs mt-4">No credit card required.</p>
        </motion.div>
      </section>
    </div>
  );
}

function StatCounter({ prefix = '', target, decimals = 0, suffix }: { prefix?: string; target: number; decimals?: number; suffix: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          let startTime: number | null = null;
          const animate = (ts: number) => {
            if (startTime === null) startTime = ts;
            const progress = Math.min((ts - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(parseFloat((eased * target).toFixed(decimals)));
            if (progress < 1) requestAnimationFrame(animate);
            else setValue(target);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, decimals]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-black text-white">
      {prefix}{decimals > 0 ? value.toFixed(decimals) : Math.floor(value)}{suffix}
    </div>
  );
}

function FeatureCard({ icon, title, description, index }: { icon: React.ReactNode, title: string, description: string, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-violet-500/30 hover:bg-zinc-900/60 transition-all duration-300 backdrop-blur-sm relative z-10"
    >
      <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center mb-6 border border-violet-500/20 group-hover:scale-110 group-hover:bg-violet-500/20 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-zinc-100">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
