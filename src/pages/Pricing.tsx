import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/mo',
    description: 'For brands just dipping their toes into chaos.',
    features: [
      '50 shitposts per day',
      'Basic ratio detection',
      '3 platform integrations',
      'Auto-generated memes (low-res)',
      'Email support (we might reply)',
    ],
    cta: 'Select Starter',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$149',
    period: '/mo',
    description: 'For brands ready to become a main character.',
    features: [
      'Unlimited shitposts',
      'Advanced ratio warfare',
      'All platform integrations',
      'HD meme generation',
      'PR Crisis autopilot',
      'Competitor trolling suite',
      'Priority support (we will reply)',
      'Custom bot army (up to 10k)',
    ],
    cta: 'Select Pro',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$999',
    period: '/mo',
    description: 'For brands that want to watch the world burn.',
    features: [
      'Everything in Pro',
      'Dedicated chaos agent',
      'Government-grade shitposting',
      'Deepfake meme capabilities',
      'Legal team on retainer',
      '24/7 war room access',
      'Custom AI personality cloning',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full max-w-6xl mx-auto px-4 pt-32 pb-24 text-center relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-500/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 text-xs font-medium text-zinc-300 mb-8 relative z-10 backdrop-blur-md shadow-xl">
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          No credit card required to start
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
          Simple, <span className="text-violet-400">transparent</span> pricing
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-16">
          Choose the plan that matches your appetite for destruction. All plans include a 14-day free trial of regret.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 rounded-3xl border backdrop-blur-sm text-left transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-violet-500/10 border-violet-500/30 shadow-[0_0_60px_-15px_rgba(139,92,246,0.3)] scale-[1.02]'
                  : 'bg-zinc-900/40 border-white/5 hover:border-white/10'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold bg-violet-500 text-white px-4 py-1 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-zinc-100 mb-2">{plan.name}</h3>
              <p className="text-zinc-500 text-sm mb-6">{plan.description}</p>
              <div className="mb-8">
                <span className="text-5xl font-black text-white">{plan.price}</span>
                <span className="text-zinc-500 text-lg">{plan.period}</span>
              </div>
              <ul className="flex flex-col gap-3 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-zinc-300">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-violet-400' : 'text-zinc-500'}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/payment"
                className={`w-full py-3.5 rounded-full font-semibold text-center transition-all hover:scale-105 flex items-center justify-center gap-2 ${
                  plan.highlighted
                    ? 'bg-white text-zinc-950 hover:bg-zinc-200 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]'
                    : 'bg-zinc-800 text-white border border-white/10 hover:bg-zinc-700 hover:border-white/20'
                }`}
              >
                {plan.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ / Bottom note */}
        <div className="mt-20 text-center">
          <p className="text-zinc-500 text-sm">
            All prices are made up. Taxes may apply in jurisdictions that tax fictional services.
          </p>
        </div>
      </section>
    </div>
  );
}
