import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full max-w-3xl mx-auto px-4 pt-32 pb-24 relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group mb-12">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to homepage
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Terms of Service</h1>
        <p className="text-zinc-500 text-sm mb-12">Last updated: January 1st, 1970</p>

        <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-400 text-[15px] leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">1. Acceptance of Terms</h2>
            <p>
              By visiting this website, you acknowledge that you have a sense of humor, or at the very least, you're pretending to have one. If you do not agree with these terms, please close this tab and go touch grass.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">2. Description of Service</h2>
            <p>
              SPaaS (Shitposting as a Service) is a fictional satirical product. It does not exist, has never existed, and will never exist (unless someone with too much money and too little judgment decides to fund it). Any resemblance to real SaaS products is entirely intentional and meant to be funny.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">3. User Obligations</h2>
            <p>
              You agree to: (a) laugh at least once while browsing this site, (b) share it with at least one person who "totally needs to see this", and (c) not attempt to actually purchase any of the pricing plans listed, as they will lead to a page that calls you out.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">4. Intellectual Property</h2>
            <p>
              All content on this site, including but not limited to the text, design, fake testimonials, and made-up brand names, is the intellectual property of the creator. "Intellectual" being used loosely here. The site was built as a portfolio piece and shitpost simultaneously, which we consider a flex.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">5. Limitation of Liability</h2>
            <p>
              SPaaS is not responsible for: (a) any milk expelled through your nose while reading this site, (b) awkward conversations that arise from sharing this at work, (c) existential crises triggered by realizing this is better designed than your actual startup, or (d) time lost scrolling through fake pricing tiers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">6. Termination</h2>
            <p>
              You may terminate your use of this site at any time by closing the browser tab. We reserve the right to terminate this site whenever we get bored of it, which historically takes about 3-6 months.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">7. Governing Law</h2>
            <p>
              These terms are governed by the laws of the internet, which as we all know, are completely unenforceable. In the event of a dispute, both parties agree to settle it via a public Twitter thread.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">8. Contact</h2>
            <p>
              For any questions regarding these terms, please visit{' '}
              <a href="https://thefilip.com" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-4">
                thefilip.com
              </a>{' '}
              and pretend you have a legitimate legal inquiry.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
