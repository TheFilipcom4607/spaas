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
        <p className="text-zinc-500 text-sm mb-12">Last updated: April 7, 2026</p>

        <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-400 text-[15px] leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing this website, you acknowledge that SPaaS is a satirical project and not a real product or service. No binding agreement is formed by browsing this site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">2. Description of Service</h2>
            <p>
              SPaaS (Shitposting as a Service) is a fictional SaaS product created for entertainment and as a portfolio piece. All features, pricing plans, testimonials, and brand partnerships described on this site are entirely made up.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">3. No Commercial Activity</h2>
            <p>
              This website does not sell any products or services. No payments are processed, no subscriptions are created, and no user accounts exist. The pricing page is part of the satirical experience.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">4. Intellectual Property</h2>
            <p>
              All original content on this site, including text, design, and code, is the property of the creator. The fictional brand names referenced on this site are used for comedic purposes and are not affiliated with any real companies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">5. Limitation of Liability</h2>
            <p>
              This website is provided "as is" without warranties of any kind. The creator is not liable for any damages arising from your use of or inability to use this site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">6. Changes to Terms</h2>
            <p>
              We reserve the right to update these terms at any time. Continued use of the site constitutes acceptance of any changes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">7. Contact</h2>
            <p>
              For questions about these terms, visit{' '}
              <a href="https://thefilip.com" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-4">
                thefilip.com
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
