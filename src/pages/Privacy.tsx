import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full max-w-3xl mx-auto px-4 pt-32 pb-24 relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group mb-12">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to homepage
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Privacy Policy</h1>
        <p className="text-zinc-500 text-sm mb-12">Last updated: April 7, 2026</p>

        <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-400 text-[15px] leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">1. Overview</h2>
            <p>
              SPaaS ("Shitposting as a Service") is a satirical project created for entertainment and portfolio purposes. It is not a real product or service, and no commercial transactions take place on this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">2. Information We Collect</h2>
            <p>
              This website does not collect, store, or process any personal data. There are no accounts, forms, analytics trackers, or payment systems. We do not use cookies or any other tracking technologies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">3. Third-Party Services</h2>
            <p>
              This site is hosted on third-party infrastructure which may collect standard server logs (IP addresses, request timestamps). We have no access to or control over this data. No other third-party services are integrated.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">4. External Links</h2>
            <p>
              This website contains links to external sites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any external site you visit.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">5. Fictional Content Disclaimer</h2>
            <p>
              All brand names, company names, pricing plans, and product features mentioned on this site are entirely fictional and used for comedic purposes. Any resemblance to actual companies or products is coincidental or used in the context of parody.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">6. Contact</h2>
            <p>
              If you have any questions about this privacy policy, you can reach the creator at{' '}
              <a href="https://thefilip.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors underline underline-offset-4">
                thefilip.com
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
