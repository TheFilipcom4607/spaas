import { useState } from 'react';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/mo',
    description: 'For small teams getting started.',
    features: [
      '10 shitposts per day',
      'Basic ratio detection',
      '3 platform integrations',
      'Auto-generated memes',
      'Email support',
    ],
    cta: 'Select Starter',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$149',
    period: '/mo',
    description: 'For brands ready to scale their presence.',
    features: [
      'Unlimited shitposts',
      'Advanced ratio warfare',
      'All platform integrations',
      'HD meme generation',
      'PR Crisis autopilot',
      'Competitor trolling suite',
      'Priority support',
      'Custom bot army (up to 10k)',
    ],
    cta: 'Select Pro',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$999',
    period: '/mo',
    description: 'For organizations who want to fire their social media teams.',
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

const faqs = [
  {
    question: 'Can I cancel anytime?',
    answer: 'Absolutely. You can cancel your subscription at any time from your dashboard with zero penalties or hidden fees. If you cancel mid-cycle, you\'ll retain access for the remainder of your billing period.',
  },
  {
    question: 'Do you offer annual billing?',
    answer: 'Yes. All plans are available with annual billing at a 20% discount compared to monthly pricing. Annual plans are billed upfront and include priority onboarding and a dedicated account manager for Pro and Enterprise tiers.',
  },
  {
    question: 'What platforms do you support?',
    answer: 'SPaaS currently integrates with X (formerly Twitter), Threads, LinkedIn, Reddit, Bluesky, and Mastodon. Our Enterprise plan also supports custom integrations via our API, allowing you to deploy content to virtually any platform with a public posting interface.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Every plan includes a 14-day free trial with full access to all features in that tier. No credit card is required to start. At the end of your trial, you can choose to subscribe or your account will be gracefully downgraded.',
  },
  {
    question: 'How does the bot army work?',
    answer: 'Our proprietary distributed engagement network consists of AI-operated accounts that interact with your content organically. Each bot maintains a unique posting history, profile photo, and behavioral pattern to avoid detection. The Pro plan includes up to 10,000 managed accounts, while Enterprise offers unlimited scaling.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'Starter plans include email support with a 24-hour response time. Pro plans get priority support with a 4-hour SLA and access to our dedicated Slack channel. Enterprise clients receive 24/7 war room access with a named support engineer and direct phone line.',
  },
];

export default function Pricing() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full max-w-6xl mx-auto px-4 pt-20 md:pt-32 pb-12 md:pb-24 text-center relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-500/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        <div
          className="animate-fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 text-xs font-medium text-zinc-300 mb-8 relative z-10 backdrop-blur-md shadow-xl"
        >
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          No credit card required to start
        </div>
        <h1
          className="animate-fade-up text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight"
          style={{ animationDelay: '0.1s' }}
        >
          Simple, <span className="text-violet-400">transparent</span> pricing
        </h1>
        <p
          className="animate-fade-up text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-16"
          style={{ animationDelay: '0.2s' }}
        >
          Choose the plan that fits your team. All plans include a 14-day free trial.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40, scale: plan.highlighted ? 0.95 : 1 }}
              whileInView={{ opacity: 1, y: 0, scale: plan.highlighted ? 1.02 : 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className={`relative flex flex-col p-8 rounded-3xl border backdrop-blur-sm text-left transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-violet-500/10 border-violet-500/30 shadow-[0_0_60px_-15px_rgba(139,92,246,0.3)]'
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
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-zinc-500 text-sm">
            All plans billed monthly. Cancel anytime.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 w-full max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Frequently Asked Questions</h2>
            <p className="text-zinc-400">Everything you need to know before getting started.</p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-violet-500/20 transition-all flex justify-between items-center gap-4"
      >
        <span className="text-base font-medium text-zinc-100">{question}</span>
        <ChevronDown className={`w-5 h-5 text-zinc-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-3 text-sm text-zinc-400 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
