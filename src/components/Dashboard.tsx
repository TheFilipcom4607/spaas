import { TrendingUp, Clock, Heart, Repeat2, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const barHeights = [40, 55, 35, 70, 65, 80, 45, 90, 75, 60, 85, 95];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const stats = [
  { label: 'Posts Today', value: '847', change: '+23%' },
  { label: 'Ratio Score', value: '94.7', change: '+5.2' },
  { label: 'Avg. Engagement', value: '12.4K', change: '+18%' },
  { label: 'Bots Active', value: '8,291', change: 'nominal' },
];

const scheduled = [
  { time: '2:30 PM', text: 'why is everyone mad about [trending topic]? anyway buy our stuff', platform: 'X' },
  { time: '4:00 PM', text: 'we apologize for our previous post. we are not sorry.', platform: 'LinkedIn' },
  { time: '6:15 PM', text: 'ratio + you fell off + we\'re a Fortune 500 company', platform: 'Threads' },
  { time: '8:00 PM', text: 'our intern has been fired (he hasn\'t)', platform: 'X' },
];

const feed = [
  { platform: 'X', text: 'certified shitpost™ hitting different today', likes: '4.2K', reposts: '1.8K', replies: '892' },
  { platform: 'LinkedIn', text: 'Excited to announce we\'ve pivoted to chaos', likes: '2.1K', reposts: '634', replies: '347' },
  { platform: 'Threads', text: 'POV: your social media manager just quit', likes: '8.7K', reposts: '3.2K', replies: '1.4K' },
];

export default function Dashboard() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="rounded-2xl bg-zinc-900/60 border border-white/5 overflow-hidden shadow-2xl backdrop-blur-sm">
          {/* Title bar */}
          <div className="h-10 bg-zinc-900/80 flex items-center px-4 border-b border-white/5 gap-4">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/70"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/70"></span>
            </div>
            <span className="text-xs text-zinc-500 flex-1 text-center">app.spaas.io/dashboard</span>
          </div>

          {/* Dashboard body */}
          <div className="p-4 md:p-6">
            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-zinc-800/50 border border-white/5 p-3 md:p-4">
                  <p className="text-xs text-zinc-500 mb-1">{stat.label}</p>
                  <p className="text-xl md:text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> {stat.change}
                  </p>
                </div>
              ))}
            </div>

            {/* Chart + Scheduled */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
              {/* Bar chart */}
              <div className="md:col-span-2 rounded-xl bg-zinc-800/50 border border-white/5 p-4">
                <p className="text-sm font-medium text-zinc-300 mb-4">Engagement Over Time</p>
                <div className="h-32 flex items-end gap-1.5">
                  {barHeights.map((h, i) => (
                    <div
                      key={i}
                      className="w-full rounded-t-sm bg-violet-500/60"
                      style={{ height: `${h}%` }}
                    ></div>
                  ))}
                </div>
                <div className="flex justify-between text-[10px] text-zinc-600 mt-2">
                  {days.map((d, i) => (
                    <span key={i}>{d}</span>
                  ))}
                </div>
              </div>

              {/* Scheduled posts */}
              <div className="rounded-xl bg-zinc-800/50 border border-white/5 p-4">
                <p className="text-sm font-medium text-zinc-300 mb-3">Scheduled Posts</p>
                <div className="space-y-2">
                  {scheduled.map((item, i) => (
                    <div key={i} className="rounded-lg bg-zinc-900/50 p-2.5">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-3 h-3 text-violet-400" />
                        <span className="text-xs text-violet-400">{item.time}</span>
                        <span className="text-[10px] text-zinc-600 ml-auto">{item.platform}</span>
                      </div>
                      <p className="text-xs text-zinc-400 line-clamp-2">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Live feed */}
            <div className="rounded-xl bg-zinc-800/50 border border-white/5 p-4">
              <p className="text-sm font-medium text-zinc-300 mb-3">Live Feed</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {feed.map((item, i) => (
                  <div key={i} className="rounded-lg bg-zinc-900/50 p-3">
                    <span className="text-[10px] font-medium text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full border border-violet-500/20">{item.platform}</span>
                    <p className="text-xs text-zinc-400 mt-2 mb-3">{item.text}</p>
                    <div className="flex items-center gap-4 text-xs text-zinc-600">
                      <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> {item.likes}</span>
                      <span className="flex items-center gap-1"><Repeat2 className="w-3 h-3" /> {item.reposts}</span>
                      <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" /> {item.replies}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
