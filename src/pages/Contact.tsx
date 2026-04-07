import { ArrowLeft, Mail, Headphones, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const contacts = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'General Inquiries',
    description: 'Got a question, a hot take, or just want to say hi? We read everything.',
    email: 'hello@getspaas.com',
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: 'Support',
    description: 'Having trouble with your bot army? Ratio not landing? We\'ve got you.',
    email: 'support@getspaas.com',
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'Enterprise Sales',
    description: 'Need government-grade shitposting at scale? Let\'s talk.',
    email: 'enterprise@getspaas.com',
  },
];

export default function Contact() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full max-w-3xl mx-auto px-4 pt-20 md:pt-32 pb-24 relative z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-violet-500/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group mb-12">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to homepage
        </Link>

        <div className="animate-fade-up text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
            Get in <span className="text-violet-400">touch</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            We're real people behind this very serious enterprise software company. Reach out anytime.
          </p>
        </div>

        <div className="space-y-4">
          {contacts.map((item, i) => (
            <motion.a
              key={item.email}
              href={`mailto:${item.email}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex items-start gap-6 p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-violet-500/30 hover:bg-zinc-900/60 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center border border-violet-500/20 group-hover:scale-110 group-hover:bg-violet-500/20 transition-all duration-300 flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-zinc-100 mb-1">{item.title}</h3>
                <p className="text-zinc-400 text-sm mb-3">{item.description}</p>
                <span className="text-violet-400 text-sm font-medium group-hover:text-violet-300 transition-colors">
                  {item.email}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}
