import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Zap, Home as HomeIcon, BarChart3, MessageSquareWarning, Bot, Calendar, Settings,
  LogOut, Search, Bell, TrendingUp, Clock, Heart, Repeat2, MessageCircle, Send,
  Sparkles, ShieldCheck, Plus, Filter, X, Menu,
} from 'lucide-react';

const barHeights = [38, 52, 41, 67, 58, 73, 49, 81, 64, 88, 71, 79];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const stats = [
  { label: 'Posts Today', value: '843', change: '+18.4%' },
  { label: 'Ratio Score', value: '94.3', change: '+5.1' },
  { label: 'Avg. Engagement', value: '12.6K', change: '+21.7%' },
  { label: 'Bots Active', value: '8,127', change: 'nominal' },
];

const scheduled = [
  { time: '2:30 PM', text: 'why is everyone mad about [trending topic]? anyway buy our stuff', platform: 'X' },
  { time: '4:00 PM', text: 'we apologize for our previous post. we are not sorry.', platform: 'LinkedIn' },
  { time: '6:15 PM', text: "ratio + you fell off + we're a Fortune 500 company", platform: 'Threads' },
  { time: '8:00 PM', text: "our intern has been fired (he hasn't)", platform: 'X' },
];

const feed = [
  { platform: 'X', text: 'certified shitpost™ hitting different today', likes: '4.2K', reposts: '1.8K', replies: '892' },
  { platform: 'LinkedIn', text: "Excited to announce we've pivoted to chaos", likes: '2.1K', reposts: '634', replies: '347' },
  { platform: 'Threads', text: 'POV: your social media manager just quit', likes: '8.7K', reposts: '3.2K', replies: '1.4K' },
];

const nav = [
  { icon: HomeIcon, label: 'Overview', active: true },
  { icon: Send, label: 'Compose' },
  { icon: Calendar, label: 'Scheduled' },
  { icon: Bot, label: 'Bot Network' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: MessageSquareWarning, label: 'Crisis Mode' },
  { icon: Settings, label: 'Settings' },
];

export default function DemoDashboard() {
  const navigate = useNavigate();
  const [composeText, setComposeText] = useState('');
  const [bannerOpen, setBannerOpen] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tone, setTone] = useState('snarky');
  const [platform, setPlatform] = useState('X');
  const [range, setRange] = useState('1M');

  return (
    <div className="fixed inset-0 bg-zinc-950 text-zinc-50 flex">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <button
          aria-label="Close menu"
          className="md:hidden fixed inset-0 bg-zinc-950/70 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 w-60 bg-zinc-900/95 md:bg-zinc-900/60 border-r border-white/5 flex flex-col transition-transform md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-16 flex items-center justify-between px-5 border-b border-white/5">
          <Link to="/" className="flex items-center gap-2 font-bold tracking-tighter text-lg">
            <div className="bg-violet-500/10 p-1.5 rounded-lg border border-violet-500/20">
              <Zap className="w-4 h-4 text-violet-400" />
            </div>
            SPaaS
          </Link>
          <button
            className="md:hidden text-zinc-500 hover:text-white p-1"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {nav.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors border ${
                  item.active
                    ? 'bg-violet-500/15 text-violet-200 border-violet-500/20'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5 border-transparent'
                }`}
              >
                <Icon className="w-4 h-4" /> {item.label}
              </button>
            );
          })}
        </nav>
        <div className="p-3 border-t border-white/5">
          <button
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 border-b border-white/5 bg-zinc-900/40 md:backdrop-blur flex items-center px-4 md:px-6 gap-3 md:gap-4 flex-shrink-0">
          <button
            className="md:hidden text-zinc-400 hover:text-white p-1.5 -ml-1.5"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex-1 relative max-w-md">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-zinc-900/60 border border-white/5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-violet-500/40"
              placeholder="Search posts, bots, ratios..."
            />
          </div>
          <button className="relative p-2 rounded-lg hover:bg-white/5 transition-colors" aria-label="Notifications">
            <Bell className="w-4 h-4 text-zinc-400" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-violet-500"></span>
          </button>
          <div className="flex items-center gap-3 pl-3 border-l border-white/5">
            <div className="w-8 h-8 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-xs font-semibold text-violet-200">
              DM
            </div>
            <div className="hidden sm:block">
              <p className="text-xs text-zinc-200 font-medium leading-tight">Demo User</p>
              <p className="text-[10px] text-zinc-500 leading-tight">demo@getspaas.com</p>
            </div>
          </div>
        </header>

        {/* Demo banner */}
        {bannerOpen && (
          <div className="bg-violet-500/10 border-b border-violet-500/20 px-4 md:px-6 py-2.5 flex items-center gap-3 text-xs text-violet-200 flex-shrink-0">
            <Sparkles className="w-4 h-4 text-violet-400 flex-shrink-0" />
            <span className="flex-1">You're in demo mode. Nothing here is real. Bots are not actually posting. Probably.</span>
            <button
              className="p-1 hover:bg-white/5 rounded transition-colors"
              onClick={() => setBannerOpen(false)}
              aria-label="Dismiss"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Body */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Overview</h1>
                <p className="text-sm text-zinc-500 mt-1">Welcome back. Your bots posted 843 times while you were asleep.</p>
              </div>
              <button className="bg-white text-zinc-950 px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 self-start">
                <Plus className="w-4 h-4" /> New Campaign
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-zinc-900/40 border border-white/5 p-4">
                  <p className="text-xs text-zinc-500 mb-1">{stat.label}</p>
                  <p className="text-xl md:text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> {stat.change}
                  </p>
                </div>
              ))}
            </div>

            {/* Compose */}
            <div className="rounded-xl bg-zinc-900/40 border border-white/5 p-5">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-violet-400" /> AI Compose
                </h2>
                <span className="text-[10px] text-zinc-500 bg-zinc-800/60 px-2 py-0.5 rounded-full border border-white/5">
                  SPENGINE 3.0
                </span>
              </div>
              <textarea
                value={composeText}
                onChange={(e) => setComposeText(e.target.value)}
                rows={2}
                placeholder="give me a controversial take about q4 earnings..."
                className="w-full px-4 py-3 rounded-lg bg-zinc-950/60 border border-white/5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-violet-500/40 resize-none"
              />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-3">
                <div className="flex gap-2 text-xs flex-wrap">
                  <label className="flex items-center gap-1.5 bg-zinc-800/60 border border-white/5 rounded-md pl-2 pr-1 py-1 text-zinc-400">
                    Tone:
                    <select
                      value={tone}
                      onChange={(e) => setTone(e.target.value)}
                      className="bg-transparent text-zinc-200 focus:outline-none cursor-pointer"
                    >
                      <option className="bg-zinc-900">snarky</option>
                      <option className="bg-zinc-900">unhinged</option>
                      <option className="bg-zinc-900">corporate</option>
                      <option className="bg-zinc-900">apologetic</option>
                    </select>
                  </label>
                  <label className="flex items-center gap-1.5 bg-zinc-800/60 border border-white/5 rounded-md pl-2 pr-1 py-1 text-zinc-400">
                    Platform:
                    <select
                      value={platform}
                      onChange={(e) => setPlatform(e.target.value)}
                      className="bg-transparent text-zinc-200 focus:outline-none cursor-pointer"
                    >
                      <option className="bg-zinc-900">X</option>
                      <option className="bg-zinc-900">LinkedIn</option>
                      <option className="bg-zinc-900">Threads</option>
                    </select>
                  </label>
                </div>
                <button className="bg-violet-500 hover:bg-violet-400 transition-colors text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" /> Generate
                </button>
              </div>
            </div>

            {/* Chart + scheduled */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 rounded-xl bg-zinc-900/40 border border-white/5 p-5 flex flex-col">
                <div className="flex items-center justify-between mb-4 gap-2">
                  <h2 className="text-sm font-medium text-zinc-300">Engagement Over Time</h2>
                  <div className="flex gap-1 text-xs">
                    {['1W', '1M', '3M', 'YTD'].map((p) => (
                      <button
                        key={p}
                        onClick={() => setRange(p)}
                        className={`px-2 py-1 rounded-md transition-colors ${
                          range === p ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex-1 min-h-40 flex items-end gap-1.5">
                  {barHeights.map((h, i) => (
                    <div
                      key={i}
                      className="w-full rounded-t-sm bg-violet-500/60 hover:bg-violet-500 transition-colors"
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
              <div className="rounded-xl bg-zinc-900/40 border border-white/5 p-5">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-sm font-medium text-zinc-300">Scheduled Posts</h2>
                  <button className="text-xs text-violet-400 hover:text-violet-300 font-medium">View all</button>
                </div>
                <div className="space-y-2">
                  {scheduled.map((item, i) => (
                    <div key={i} className="rounded-lg bg-zinc-950/40 border border-white/5 p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-3 h-3 text-violet-400" />
                        <span className="text-xs text-violet-400 font-medium">{item.time}</span>
                        <span className="text-[10px] text-zinc-600 ml-auto">{item.platform}</span>
                      </div>
                      <p className="text-xs text-zinc-400 line-clamp-2">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Live feed */}
            <div className="rounded-xl bg-zinc-900/40 border border-white/5 p-5">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                  Live Feed
                  <span className="flex items-center gap-1 text-[10px] text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    live
                  </span>
                </h2>
                <button className="text-xs text-zinc-500 hover:text-zinc-300 flex items-center gap-1.5">
                  <Filter className="w-3 h-3" /> Filter
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {feed.map((item, i) => (
                  <div key={i} className="rounded-lg bg-zinc-950/40 border border-white/5 p-4">
                    <span className="text-[10px] font-medium text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full border border-violet-500/20">
                      {item.platform}
                    </span>
                    <p className="text-sm text-zinc-300 mt-2 mb-3">{item.text}</p>
                    <div className="flex items-center gap-4 text-xs text-zinc-500">
                      <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> {item.likes}</span>
                      <span className="flex items-center gap-1"><Repeat2 className="w-3 h-3" /> {item.reposts}</span>
                      <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" /> {item.replies}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Crisis status */}
            <div className="rounded-xl bg-zinc-900/40 border border-white/5 p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-zinc-200 font-medium">PR Crisis Mode: Standing down</p>
                <p className="text-xs text-zinc-500 mt-0.5">No active outrage cycles detected. Notes-app drafts ready: 14.</p>
              </div>
              <button className="text-xs text-violet-400 hover:text-violet-300 font-medium hidden sm:block flex-shrink-0">
                View drafts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
