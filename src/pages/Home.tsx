import { ArrowRight, BarChart3, MessageSquareWarning, Zap, Globe, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto px-4 pt-32 pb-24 text-center relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-500/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 text-xs font-medium text-zinc-300 mb-8 relative z-10 backdrop-blur-md shadow-xl">
          <span className="flex h-2 w-2 rounded-full bg-violet-500 animate-pulse"></span>
          SPENGINE 3.0 is now live
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
          <span className="text-violet-400">Shitposting</span> <br className="hidden md:block" />
          as a Service
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
          Automate your brand's descent into internet culture. We leverage advanced AI to generate highly engaging, mildly offensive, and algorithm-optimized content at scale.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing" className="w-full sm:w-auto bg-white text-zinc-950 px-8 py-3.5 rounded-full hover:bg-zinc-200 hover:text-zinc-950 transition-all font-semibold flex items-center justify-center gap-2 hover:scale-105 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]">
            Start Free Trial <ArrowRight className="w-4 h-4" />
          </a>
          <Link to="/payment" className="w-full sm:w-auto bg-zinc-900/80 text-white border border-white/10 px-8 py-3.5 rounded-full hover:bg-zinc-800 hover:text-white hover:border-white/20 transition-all font-semibold flex items-center justify-center backdrop-blur-md">
            Book a Demo
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full max-w-5xl mx-auto px-4 py-24 border-t border-white/5 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Why choose SPaaS?</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Stop paying social media managers to post boring corporate updates. Let our algorithms handle the engagement farming.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<MessageSquareWarning className="w-6 h-6" />}
            title="Context-Aware Trolling"
            description="Our NLP models analyze trending topics and automatically generate controversial takes to maximize quote tweets and replies."
          />
          <FeatureCard 
            icon={<BarChart3 className="w-6 h-6" />}
            title="Engagement Analytics"
            description="Track your ratio metrics in real-time. See exactly which posts are causing the most outrage and double down."
          />
          <FeatureCard 
            icon={<Globe className="w-6 h-6" />}
            title="Multi-Platform Synergy"
            description="Deploy identical low-effort memes across X, Threads, and LinkedIn simultaneously for maximum brand damage."
          />
          <FeatureCard 
            icon={<Zap className="w-6 h-6" />}
            title="Lightning Fast Ratios"
            description="Our distributed network of bot accounts ensures your competitors get ratioed within milliseconds of posting."
          />
          <FeatureCard 
            icon={<ShieldCheck className="w-6 h-6" />}
            title="PR Crisis Mode"
            description="Automatically issue generic, non-apology notes app screenshots when a shitpost goes slightly too far."
          />
          <FeatureCard 
            icon={<Users className="w-6 h-6" />}
            title="Cult Building"
            description="Transform your passive customers into a rabid fanbase ready to defend your brand's honor in the replies."
          />
        </div>
      </section>

      {/* Social Proof */}
      <section className="w-full border-y border-white/5 bg-zinc-900/20 backdrop-blur-xl py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-sm font-semibold tracking-widest uppercase mb-12 text-zinc-500">Trusted by the most unhinged brands on the internet</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-2xl font-bold font-serif">cbrand</div>
            <div className="text-2xl font-black tracking-widest">brianair</div>
            <div className="text-2xl font-medium italic">triolingo</div>
            <div className="text-2xl font-bold tracking-tighter">Crispotle's</div>
            <div className="text-2xl font-light uppercase">Bendy's</div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full max-w-5xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Simple, transparent pricing</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Pay for the engagement you want. Cancel anytime.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard 
            tier="Starter"
            price="$49"
            description="Perfect for small startups looking to build a cult following."
            features={[
              "100 AI-generated shitposts/mo",
              "Basic meme templates",
              "Standard support",
              "1 connected account"
            ]}
          />
          <PricingCard 
            tier="Pro"
            price="$199"
            description="For growing brands that need to dominate the timeline."
            features={[
              "Unlimited shitposts",
              "Custom meme generation",
              "Priority support",
              "5 connected accounts",
              "Automated ratio defense"
            ]}
            isPopular
          />
          <PricingCard 
            tier="Enterprise"
            price="Custom"
            description="Dedicated infrastructure for Fortune 500 shitposting."
            features={[
              "Dedicated account manager",
              "Custom NLP model training",
              "24/7 PR crisis management",
              "Unlimited accounts",
              "SLA guarantees"
            ]}
          />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-violet-500/30 hover:bg-zinc-900/60 transition-all duration-300 backdrop-blur-sm relative z-10">
      <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center mb-6 border border-violet-500/20 group-hover:scale-110 group-hover:bg-violet-500/20 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-zinc-100">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function PricingCard({ tier, price, description, features, isPopular }: { tier: string, price: string, description: string, features: string[], isPopular?: boolean }) {
  return (
    <div className={`p-8 rounded-3xl border ${isPopular ? 'border-violet-500/50 bg-zinc-900/80 shadow-[0_0_40px_-15px_rgba(139,92,246,0.15)]' : 'border-white/5 bg-zinc-900/40'} relative flex flex-col backdrop-blur-xl z-10 transition-transform hover:-translate-y-1 duration-300`}>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold text-zinc-100">{tier}</h3>
        {isPopular && (
          <span className="bg-violet-500/20 text-violet-300 border border-violet-500/30 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
            Most Popular
          </span>
        )}
      </div>
      <div className="mb-4">
        <span className="text-4xl font-bold tracking-tighter text-white">{price}</span>
        {price !== "Custom" && <span className="text-zinc-500 font-medium">/mo</span>}
      </div>
      <p className="text-zinc-400 text-sm mb-8 h-10">{description}</p>
      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
            <Zap className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link to="/payment" className={`w-full py-3.5 rounded-full font-semibold text-center transition-all duration-300 ${isPopular ? 'bg-white text-zinc-950 hover:bg-zinc-200 hover:text-zinc-950 hover:scale-[1.02]' : 'bg-zinc-800 text-white border border-white/5 hover:bg-zinc-700 hover:text-white'}`}>
        Get Started
      </Link>
    </div>
  );
}
