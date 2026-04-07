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
        <p className="text-zinc-500 text-sm mb-12">Last updated: January 1st, 1970</p>

        <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-400 text-[15px] leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">1. Information We Collect</h2>
            <p>
              We collect absolutely nothing because this is not a real product. However, if it were, we would probably collect everything: your name, email, browser history, guilty pleasures, and the shitposts you almost sent but chickened out of.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">2. How We Use Your Information</h2>
            <p>
              If we had your data (we don't), we would use it exclusively to train our Shitposting Engine to generate content that sounds vaguely like you but is funnier. We would never sell your data. We would simply use it to ratio you more effectively.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">3. Cookies</h2>
            <p>
              This website uses exactly zero cookies. Not even the metaphorical kind. If your browser is showing cookie warnings, that's a personal problem between you and your browser. We recommend therapy for both of you.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">4. Third-Party Services</h2>
            <p>
              We don't integrate with any third-party services because, again, nothing here is real. The brands mentioned on this site ("cbrand", "brianair", "triolingo", "Crispotle's", "Bendy's") are fictional parodies and are not affiliated with any real companies that may or may not have similar names.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">5. Data Retention</h2>
            <p>
              We retain your data for exactly zero seconds because we never collected it in the first place. Our data retention policy is essentially "you can't lose what you never had," which is also our dating philosophy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">6. Your Rights</h2>
            <p>
              You have the right to close this tab at any time. You also have the right to share this site with friends and pretend you built it. We won't sue you. Probably.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">7. Contact</h2>
            <p>
              If you have questions about this privacy policy, please reconsider. But if you must, you can reach us at{' '}
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
