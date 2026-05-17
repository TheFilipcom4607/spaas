import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Zap, Home as HomeIcon, BarChart3, MessageSquareWarning, Bot, Calendar, Settings,
  LogOut, Search, Bell, TrendingUp, Clock, Heart, Repeat2, MessageCircle, Send,
  Sparkles, ShieldCheck, Plus, Filter, X, Menu, ChevronDown, Monitor, Activity,
  Globe, Flame, ArrowUpRight, Server, FileText, Key, CreditCard, AlertTriangle,
  Check, PlayCircle, ArrowRight, ArrowLeft,
} from 'lucide-react';

type ViewId = 'Overview' | 'Compose' | 'Scheduled' | 'Bot Network' | 'Analytics' | 'Crisis Mode' | 'Settings';

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

const scheduledFull = [
  { day: 'Today', items: scheduled },
  {
    day: 'Tomorrow',
    items: [
      { time: '9:00 AM', text: 'rise and grind, sheeple', platform: 'X' },
      { time: '12:00 PM', text: 'we will not be releasing a statement at this time', platform: 'LinkedIn' },
      { time: '3:30 PM', text: 'silly little memes for our silly little brand', platform: 'Threads' },
    ],
  },
  {
    day: 'Thursday',
    items: [
      { time: '10:00 AM', text: 'remember to hydrate and ratio your competitors', platform: 'X' },
      { time: '2:00 PM', text: 'we have nothing to add to the discourse', platform: 'LinkedIn' },
    ],
  },
];

const feed = [
  { platform: 'X', text: 'certified shitpost™ hitting different today', likes: '4.2K', reposts: '1.8K', replies: '892' },
  { platform: 'LinkedIn', text: "Excited to announce we've pivoted to chaos", likes: '2.1K', reposts: '634', replies: '347' },
  { platform: 'Threads', text: 'POV: your social media manager just quit', likes: '8.7K', reposts: '3.2K', replies: '1.4K' },
];

const topPosts = [
  { text: "our CEO doesn't know we run this account", engagement: '94.8K', delta: '+312%' },
  { text: "we just laid off the social media team. dm for openings.", engagement: '61.2K', delta: '+207%' },
  { text: "actually unionize. our brand supports the workers.", engagement: '48.7K', delta: '+184%' },
];

const regions = [
  { name: 'us-east-1', bots: '2,134', status: 'healthy', uptime: '99.99%' },
  { name: 'eu-west-3', bots: '1,872', status: 'healthy', uptime: '99.94%' },
  { name: 'ap-southeast-1', bots: '1,491', status: 'degraded', uptime: '97.21%' },
  { name: 'sa-east-1', bots: '983', status: 'healthy', uptime: '99.98%' },
  { name: 'me-south-1', bots: '647', status: 'healthy', uptime: '100.00%' },
  { name: 'af-north-1', bots: '512', status: 'healthy', uptime: '99.81%' },
];

const activity = [
  { time: '12s ago', text: 'SPENGINE generated 47 replies to a competitor thread', tag: 'auto' },
  { time: '1m ago', text: 'Crisis filter caught one post mentioning "the FBI". Quarantined.', tag: 'shield' },
  { time: '4m ago', text: 'Bot #4471 was ratioed harder than expected. Promoted to senior.', tag: 'auto' },
  { time: '7m ago', text: 'Scheduled apology #213 published to LinkedIn', tag: 'send' },
  { time: '12m ago', text: 'Trending topic detected: "layoffs". 6 takes drafted.', tag: 'flame' },
];

const drafts = [
  { text: 'actually we love taxes', status: 'queued', time: '3m ago' },
  { text: "our condolences to the family of [BRAND]'s social media manager", status: 'awaiting review', time: '14m ago' },
  { text: 'btw the meeting could have been an email', status: 'queued', time: '32m ago' },
  { text: 'hot take: iPhone users and Android users are literally the same', status: 'rejected', time: '1h ago' },
];

const botModels = [
  { name: 'SP-Engager-7B', purpose: 'replies and quote tweets', count: '4,218' },
  { name: 'SP-Ratio-13B', purpose: 'controversial takes', count: '2,104' },
  { name: 'SP-Apology-3B', purpose: 'damage control', count: '891' },
  { name: 'SP-TrendSniffer', purpose: 'trending topic detection', count: '914' },
];

const botStats = [
  { label: 'Total Bots', value: '12,847' },
  { label: 'Active Now', value: '8,127' },
  { label: 'Idle', value: '4,476' },
  { label: 'Quarantined', value: '244' },
];

const platformBreakdown = [
  { name: 'X', value: 64, color: 'bg-violet-500' },
  { name: 'LinkedIn', value: 21, color: 'bg-sky-500' },
  { name: 'Threads', value: 15, color: 'bg-emerald-500' },
];

const toneBreakdown = [
  { name: 'snarky', value: 47 },
  { name: 'unhinged', value: 28 },
  { name: 'corporate', value: 14 },
  { name: 'apologetic', value: 11 },
];

const apologies = [
  { title: 'Generic non-apology', body: "We hear you. We're listening. We'll do better." },
  { title: 'Notes app screenshot', body: 'Times New Roman 14pt, centered, no margins, exported as PNG.' },
  { title: 'Intern blame', body: 'An intern who no longer works here has been let go.' },
  { title: 'Pivot to charity', body: 'In light of recent events, we are donating $5,000 to...' },
];

const crisesHandled = [
  { title: 'Tweet about Q3 earnings that was technically illegal', time: 'yesterday', severity: 'high' },
  { title: 'Accidentally subtweeted a competitor\'s CEO', time: '3d ago', severity: 'medium' },
  { title: 'Used the wrong meme format. literally just the wrong one.', time: '1w ago', severity: 'low' },
];

const integrations = [
  { name: 'X (formerly Twitter)', detail: '@yourcompany · connected 142d ago', connected: true },
  { name: 'LinkedIn', detail: 'YourCompany Inc. · connected 142d ago', connected: true },
  { name: 'Threads', detail: '@yourcompany · connected 89d ago', connected: true },
  { name: 'Bluesky', detail: 'not connected', connected: false },
  { name: 'TikTok', detail: 'not connected', connected: false },
];

const nav: { icon: typeof Bot; label: ViewId }[] = [
  { icon: HomeIcon, label: 'Overview' },
  { icon: Send, label: 'Compose' },
  { icon: Calendar, label: 'Scheduled' },
  { icon: Bot, label: 'Bot Network' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: MessageSquareWarning, label: 'Crisis Mode' },
  { icon: Settings, label: 'Settings' },
];

function Dropdown({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 bg-zinc-800/60 border border-white/5 rounded-md px-3 py-1.5 text-xs text-zinc-200 hover:bg-zinc-800 hover:border-white/10 transition-colors"
      >
        <span className="text-zinc-500">{label}:</span>
        <span>{value}</span>
        <ChevronDown className={`w-3 h-3 text-zinc-500 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute z-50 top-full mt-1.5 left-0 min-w-[150px] rounded-lg bg-zinc-900 border border-white/10 shadow-2xl overflow-hidden py-1">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`w-full text-left px-3 py-1.5 text-xs transition-colors ${
                opt === value
                  ? 'bg-violet-500/15 text-violet-200'
                  : 'text-zinc-300 hover:bg-white/5'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ActivityIcon({ tag }: { tag: string }) {
  const map: Record<string, { icon: typeof Bot; color: string; bg: string }> = {
    auto: { icon: Bot, color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/20' },
    shield: { icon: ShieldCheck, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
    send: { icon: Send, color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20' },
    flame: { icon: Flame, color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' },
  };
  const { icon: Icon, color, bg } = map[tag] ?? map.auto;
  return (
    <div className={`w-7 h-7 rounded-lg border flex items-center justify-center flex-shrink-0 ${bg}`}>
      <Icon className={`w-3.5 h-3.5 ${color}`} />
    </div>
  );
}

function PageHeader({ title, subtitle, action }: { title: string; subtitle: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">{title}</h1>
        <p className="text-sm text-zinc-500 mt-1">{subtitle}</p>
      </div>
      {action}
    </div>
  );
}

function Toggle({ on }: { on: boolean }) {
  return (
    <span
      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
        on ? 'bg-violet-500' : 'bg-zinc-700'
      }`}
    >
      <span
        className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
          on ? 'translate-x-5' : 'translate-x-1'
        }`}
      />
    </span>
  );
}

type TourStep = {
  selector?: string;
  view?: ViewId;
  title: string;
  body: string;
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'center';
};

const tourSteps: TourStep[] = [
  {
    placement: 'center',
    title: 'Welcome to SPaaS',
    body: "You're in demo mode. Nothing here is real, but everything is clickable. Let's take a quick tour.",
  },
  {
    selector: 'sidebar',
    view: 'Overview',
    placement: 'right',
    title: 'Navigate the workspace',
    body: 'Compose drafts, manage your bot army, watch the analytics climb. Every section is a click away.',
  },
  {
    selector: 'stats',
    view: 'Overview',
    placement: 'bottom',
    title: 'Your key metrics',
    body: 'Posts today, ratio score, engagement, active bots. The numbers that keep your CMO sleeping at night.',
  },
  {
    selector: 'compose',
    view: 'Overview',
    placement: 'bottom',
    title: 'Generate posts with AI',
    body: 'Tell SPENGINE a vibe, pick a tone, hit generate. Plausible deniability included.',
  },
  {
    selector: 'chart',
    view: 'Overview',
    placement: 'top',
    title: 'Track engagement over time',
    body: 'See your reach climb as the bots do what bots do best: engage.',
  },
  {
    selector: 'scheduled',
    view: 'Overview',
    placement: 'left',
    title: 'A pipeline of upcoming chaos',
    body: 'Posts queued and waiting for their moment. View all to see the full schedule.',
  },
  {
    selector: 'bots',
    view: 'Bot Network',
    placement: 'bottom',
    title: 'A globally distributed bot army',
    body: '12,847 bots across six regions. Always-on, always opinionated.',
  },
  {
    selector: 'crisis',
    view: 'Crisis Mode',
    placement: 'bottom',
    title: 'For when things go sideways',
    body: 'Arm Crisis Mode to pause posts, deploy apologies, and blame the intern. (The intern is fine.)',
  },
  {
    placement: 'center',
    title: "You're all set",
    body: "That's the grand tour. Poke around. Nothing here is real, so feel free to break things.",
  },
];

function TourOverlay({
  step,
  index,
  total,
  onNext,
  onPrev,
  onClose,
}: {
  step: TourStep;
  index: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
}) {
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    let raf = 0;
    let cancelled = false;

    const measure = () => {
      if (!step.selector) {
        setRect(null);
        setReady(true);
        return;
      }
      const el = document.querySelector<HTMLElement>(`[data-tour="${step.selector}"]`);
      if (!el) {
        setRect(null);
        setReady(true);
        return;
      }
      el.scrollIntoView({ block: 'center', behavior: 'smooth' });
      // Let the smooth scroll settle, then measure.
      window.setTimeout(() => {
        if (cancelled) return;
        setRect(el.getBoundingClientRect());
        setReady(true);
      }, 320);
    };

    setReady(false);
    raf = window.requestAnimationFrame(measure);

    const onResize = () => {
      if (!step.selector) return;
      const el = document.querySelector<HTMLElement>(`[data-tour="${step.selector}"]`);
      if (el) setRect(el.getBoundingClientRect());
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, [step]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight' || e.key === 'Enter') onNext();
      else if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onNext, onPrev, onClose]);

  const placement = step.placement ?? 'bottom';
  const tooltipWidth = 340;
  const padding = 12;

  let tooltipStyle: React.CSSProperties;
  if (!rect || placement === 'center') {
    tooltipStyle = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: tooltipWidth,
    };
  } else {
    let top = 0;
    let left = 0;
    if (placement === 'bottom') {
      top = rect.bottom + 16;
      left = rect.left + rect.width / 2 - tooltipWidth / 2;
    } else if (placement === 'top') {
      top = rect.top - 16 - 180;
      left = rect.left + rect.width / 2 - tooltipWidth / 2;
    } else if (placement === 'right') {
      top = rect.top + rect.height / 2 - 90;
      left = rect.right + 16;
    } else if (placement === 'left') {
      top = rect.top + rect.height / 2 - 90;
      left = rect.left - 16 - tooltipWidth;
    }
    // Clamp to viewport.
    const maxLeft = window.innerWidth - tooltipWidth - padding;
    const maxTop = window.innerHeight - 200 - padding;
    left = Math.max(padding, Math.min(left, maxLeft));
    top = Math.max(padding, Math.min(top, maxTop));
    tooltipStyle = { position: 'fixed', top, left, width: tooltipWidth };
  }

  const isFirst = index === 0;
  const isLast = index === total - 1;

  return (
    <div className="fixed inset-0 z-[100]" aria-hidden={!ready}>
      {/* Backdrop + spotlight */}
      {rect && step.selector ? (
        <div
          className="pointer-events-none transition-all duration-300"
          style={{
            position: 'fixed',
            top: rect.top - 8,
            left: rect.left - 8,
            width: rect.width + 16,
            height: rect.height + 16,
            boxShadow: '0 0 0 9999px rgba(9, 9, 11, 0.72)',
            borderRadius: 14,
            border: '2px solid rgb(167 139 250)',
            transition: 'top .3s, left .3s, width .3s, height .3s, opacity .2s',
            opacity: ready ? 1 : 0,
          }}
        />
      ) : (
        <div
          className="absolute inset-0 bg-zinc-950/75 backdrop-blur-sm transition-opacity duration-200"
          style={{ opacity: ready ? 1 : 0 }}
          onClick={onClose}
        />
      )}

      {/* Tooltip */}
      <div
        style={{ ...tooltipStyle, opacity: ready ? 1 : 0 }}
        className="rounded-2xl bg-zinc-900 border border-violet-500/30 shadow-2xl p-5 transition-opacity duration-200"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] uppercase tracking-wider font-semibold text-violet-300 bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 rounded-full">
            Tour · {index + 1} of {total}
          </span>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-white/5 transition-colors"
            aria-label="Close tour"
          >
            <X className="w-3.5 h-3.5 text-zinc-400" />
          </button>
        </div>
        <h3 className="text-base font-semibold text-white mb-1.5">{step.title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed mb-4">{step.body}</p>
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={onClose}
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            Skip tour
          </button>
          <div className="flex items-center gap-2">
            {!isFirst && (
              <button
                onClick={onPrev}
                className="flex items-center gap-1.5 text-xs font-medium text-zinc-300 bg-zinc-800/60 hover:bg-zinc-800 border border-white/10 px-3 py-1.5 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-3 h-3" /> Back
              </button>
            )}
            <button
              onClick={onNext}
              className="flex items-center gap-1.5 text-xs font-semibold text-white bg-violet-500 hover:bg-violet-400 px-3 py-1.5 rounded-lg transition-colors"
            >
              {isLast ? 'Finish' : 'Next'}
              {!isLast && <ArrowRight className="w-3 h-3" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DemoDashboard() {
  const navigate = useNavigate();
  const [active, setActive] = useState<ViewId>('Overview');
  const [composeText, setComposeText] = useState('');
  const [bannerOpen, setBannerOpen] = useState(true);
  const [tone, setTone] = useState('snarky');
  const [platform, setPlatform] = useState('X');
  const [range, setRange] = useState('1M');
  const [crisisArmed, setCrisisArmed] = useState(false);
  const [tourStep, setTourStep] = useState<number>(-1);
  const [tourPromptOpen, setTourPromptOpen] = useState(true);

  useEffect(() => {
    const previous = document.title;
    document.title = 'SPaaS Dashboard';
    return () => {
      document.title = previous;
    };
  }, []);

  const startTour = () => {
    setTourPromptOpen(false);
    setActive('Overview');
    setTourStep(0);
  };
  const endTour = () => setTourStep(-1);
  const declineTour = () => setTourPromptOpen(false);
  const nextStep = () => {
    setTourStep((s) => {
      const next = s + 1;
      if (next >= tourSteps.length) return -1;
      const view = tourSteps[next]?.view;
      if (view) setActive(view);
      return next;
    });
  };
  const prevStep = () => {
    setTourStep((s) => {
      const prev = Math.max(0, s - 1);
      const view = tourSteps[prev]?.view;
      if (view) setActive(view);
      return prev;
    });
  };


  return (
    <>
      {/* Mobile gate */}
      <div className="md:hidden fixed inset-0 bg-zinc-950 text-zinc-50 flex flex-col items-center justify-center px-8 text-center z-50">
        <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-6">
          <Monitor className="w-7 h-7 text-violet-400" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight mb-3">Open on desktop</h1>
        <p className="text-sm text-zinc-400 leading-relaxed max-w-xs mb-8">
          The SPaaS demo dashboard is built for bigger screens. Pop it open on your laptop to take the tour.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-white text-zinc-950 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors"
        >
          Back to login
        </Link>
      </div>

      {/* Dashboard (desktop only) */}
      <div className="hidden md:flex fixed inset-0 bg-zinc-950 text-zinc-50">
        {tourStep >= 0 && tourSteps[tourStep] && (
          <TourOverlay
            step={tourSteps[tourStep]}
            index={tourStep}
            total={tourSteps.length}
            onNext={nextStep}
            onPrev={prevStep}
            onClose={endTour}
          />
        )}
        {tourPromptOpen && tourStep < 0 && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
            <div
              className="absolute inset-0 bg-zinc-950/75 backdrop-blur-sm"
              onClick={declineTour}
            />
            <div className="relative w-[360px] rounded-2xl bg-zinc-900 border border-violet-500/30 shadow-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                  <PlayCircle className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white leading-tight">Take the tour?</h3>
                  <p className="text-xs text-zinc-500 mt-0.5">A quick walkthrough of the dashboard.</p>
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                We can walk you through the key features in about a minute. You can replay it anytime from the header.
              </p>
              <div className="flex items-center justify-end gap-2">
                <button
                  onClick={declineTour}
                  className="text-xs font-medium text-zinc-300 bg-zinc-800/60 hover:bg-zinc-800 border border-white/10 px-3 py-2 rounded-lg transition-colors"
                >
                  No thanks
                </button>
                <button
                  onClick={startTour}
                  className="flex items-center gap-1.5 text-xs font-semibold text-white bg-violet-500 hover:bg-violet-400 px-3 py-2 rounded-lg transition-colors"
                >
                  <PlayCircle className="w-3.5 h-3.5" /> Start tour
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Sidebar */}
        <aside data-tour="sidebar" className="w-60 bg-zinc-900/60 border-r border-white/5 flex flex-col flex-shrink-0">
          <div className="h-16 flex items-center px-5 border-b border-white/5">
            <Link to="/" className="flex items-center gap-2 font-bold tracking-tighter text-lg">
              <div className="bg-violet-500/10 p-1.5 rounded-lg border border-violet-500/20">
                <Zap className="w-4 h-4 text-violet-400" />
              </div>
              SPaaS
            </Link>
          </div>
          <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
            {nav.map((item) => {
              const Icon = item.icon;
              const isActive = item.label === active;
              return (
                <button
                  key={item.label}
                  onClick={() => setActive(item.label)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors border ${
                    isActive
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
          <header className="h-16 border-b border-white/5 bg-zinc-900/40 backdrop-blur flex items-center px-6 gap-4 flex-shrink-0">
            <div className="flex-1 relative max-w-md">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                className="w-full pl-9 pr-4 py-2 rounded-lg bg-zinc-900/60 border border-white/5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-violet-500/40"
                placeholder="Search posts, bots, ratios..."
              />
            </div>
            <button
              onClick={startTour}
              className="hidden lg:flex items-center gap-1.5 text-xs font-medium text-violet-200 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/20 px-3 py-1.5 rounded-lg transition-colors"
            >
              <PlayCircle className="w-3.5 h-3.5" /> Take tour
            </button>
            <button className="relative p-2 rounded-lg hover:bg-white/5 transition-colors" aria-label="Notifications">
              <Bell className="w-4 h-4 text-zinc-400" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-violet-500"></span>
            </button>
            <div className="flex items-center gap-3 pl-3 border-l border-white/5">
              <div className="w-8 h-8 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-xs font-semibold text-violet-200">
                DM
              </div>
              <div>
                <p className="text-xs text-zinc-200 font-medium leading-tight">Demo User</p>
                <p className="text-[10px] text-zinc-500 leading-tight">demo@getspaas.com</p>
              </div>
            </div>
          </header>

          {/* Demo banner */}
          {bannerOpen && (
            <div className="bg-violet-500/10 border-b border-violet-500/20 px-6 py-2.5 flex items-center gap-3 text-xs text-violet-200 flex-shrink-0">
              <Sparkles className="w-4 h-4 text-violet-400 flex-shrink-0" />
              <span className="flex-1">You're in demo mode. Nothing here is real. Bots are not actually posting.</span>
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
            <div className="p-6 space-y-6 max-w-7xl mx-auto">
              {active === 'Overview' && (
                <>
                  <PageHeader
                    title="Overview"
                    subtitle="Welcome back. Your bots posted 843 times while you were asleep."
                    action={
                      <button className="bg-white text-zinc-950 px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-2">
                        <Plus className="w-4 h-4" /> New Campaign
                      </button>
                    }
                  />

                  <div data-tour="stats" className="grid grid-cols-4 gap-4">
                    {stats.map((stat) => (
                      <div key={stat.label} className="rounded-xl bg-zinc-900/40 border border-white/5 p-4">
                        <p className="text-xs text-zinc-500 mb-1">{stat.label}</p>
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                        <p className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
                          <TrendingUp className="w-3 h-3" /> {stat.change}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div data-tour="compose" className="rounded-xl bg-zinc-900/40 border border-white/5 p-5">
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
                    <div className="flex items-center justify-between gap-3 mt-3">
                      <div className="flex gap-2 flex-wrap">
                        <Dropdown
                          label="Tone"
                          value={tone}
                          options={['snarky', 'unhinged', 'corporate', 'apologetic']}
                          onChange={setTone}
                        />
                        <Dropdown
                          label="Platform"
                          value={platform}
                          options={['X', 'LinkedIn', 'Threads']}
                          onChange={setPlatform}
                        />
                      </div>
                      <button className="bg-violet-500 hover:bg-violet-400 transition-colors text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5" /> Generate
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div data-tour="chart" className="col-span-2 rounded-xl bg-zinc-900/40 border border-white/5 p-5 flex flex-col">
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
                    <div data-tour="scheduled" className="rounded-xl bg-zinc-900/40 border border-white/5 p-5">
                      <div className="flex items-center justify-between mb-3">
                        <h2 className="text-sm font-medium text-zinc-300">Scheduled Posts</h2>
                        <button
                          onClick={() => setActive('Scheduled')}
                          className="text-xs text-violet-400 hover:text-violet-300 font-medium"
                        >
                          View all
                        </button>
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

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-zinc-900/40 border border-white/5 p-5">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                          <Globe className="w-4 h-4 text-violet-400" /> Bot Network
                        </h2>
                        <span className="text-[10px] text-zinc-500">global · 99.97% uptime</span>
                      </div>
                      <div className="space-y-2">
                        {regions.slice(0, 4).map((r) => (
                          <div
                            key={r.name}
                            className="flex items-center justify-between rounded-lg bg-zinc-950/40 border border-white/5 px-3 py-2.5"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <span
                                className={`w-2 h-2 rounded-full flex-shrink-0 ${
                                  r.status === 'healthy' ? 'bg-emerald-400' : 'bg-amber-400'
                                }`}
                              ></span>
                              <span className="text-xs text-zinc-300 font-mono">{r.name}</span>
                            </div>
                            <div className="flex items-center gap-4 text-xs">
                              <span className="text-zinc-500">{r.bots} bots</span>
                              <span
                                className={
                                  r.status === 'healthy' ? 'text-emerald-400' : 'text-amber-400'
                                }
                              >
                                {r.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl bg-zinc-900/40 border border-white/5 p-5">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                          <Flame className="w-4 h-4 text-orange-400" /> Top performing posts
                        </h2>
                        <span className="text-[10px] text-zinc-500">last 24h</span>
                      </div>
                      <div className="space-y-2">
                        {topPosts.map((p, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 rounded-lg bg-zinc-950/40 border border-white/5 p-3"
                          >
                            <span className="text-sm font-bold text-zinc-500 w-5 flex-shrink-0">
                              {i + 1}
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed">
                                {p.text}
                              </p>
                              <div className="flex items-center gap-3 mt-1.5 text-[11px]">
                                <span className="text-zinc-500">{p.engagement} engagement</span>
                                <span className="text-emerald-400 flex items-center gap-0.5">
                                  <ArrowUpRight className="w-3 h-3" />
                                  {p.delta}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

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
                    <div className="grid grid-cols-3 gap-3">
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

                  <div className="rounded-xl bg-zinc-900/40 border border-white/5 p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                        <Activity className="w-4 h-4 text-violet-400" /> Recent Activity
                      </h2>
                      <button className="text-xs text-violet-400 hover:text-violet-300 font-medium">View log</button>
                    </div>
                    <div className="space-y-2">
                      {activity.map((a, i) => (
                        <div key={i} className="flex items-center gap-3 rounded-lg hover:bg-white/[0.02] transition-colors px-2 py-2">
                          <ActivityIcon tag={a.tag} />
                          <p className="text-xs text-zinc-300 flex-1 min-w-0">{a.text}</p>
                          <span className="text-[10px] text-zinc-600 flex-shrink-0">{a.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl bg-zinc-900/40 border border-white/5 p-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-zinc-200 font-medium">PR Crisis Mode: Standing down</p>
                      <p className="text-xs text-zinc-500 mt-0.5">No active outrage cycles detected. Notes-app drafts ready: 14.</p>
                    </div>
                    <button
                      onClick={() => setActive('Crisis Mode')}
                      className="text-xs text-violet-400 hover:text-violet-300 font-medium flex-shrink-0"
                    >
                      View drafts
                    </button>
                  </div>
                </>
              )}

              {active === 'Compose' && (
                <>
                  <PageHeader
                    title="Compose"
                    subtitle="Tell SPENGINE what you want to be hated for today."
                    action={
                      <button className="bg-white text-zinc-950 px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-2">
                        <Plus className="w-4 h-4" /> New Draft
                      </button>
                    }
                  />

                  <div className="rounded-xl bg-zinc-900/40 border border-white/5 p-6">
                    <div className="flex items-center justify-between mb-4">
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
                      rows={6}
                      placeholder="describe the vibe, the target, the level of plausible deniability..."
                      className="w-full px-4 py-3 rounded-lg bg-zinc-950/60 border border-white/5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-violet-500/40 resize-none"
                    />
                    <div className="flex items-center justify-between gap-3 mt-3">
                      <div className="flex gap-2 flex-wrap">
                        <Dropdown
                          label="Tone"
                          value={tone}
                          options={['snarky', 'unhinged', 'corporate', 'apologetic']}
                          onChange={setTone}
                        />
                        <Dropdown
                          label="Platform"
                          value={platform}
                          options={['X', 'LinkedIn', 'Threads']}
                          onChange={setPlatform}
                        />
                        <Dropdown
                          label="Length"
                          value="short"
                          options={['short', 'medium', 'thread']}
                          onChange={() => {}}
                        />
                      </div>
                      <button className="bg-violet-500 hover:bg-violet-400 transition-colors text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5" /> Generate
                      </button>
                    </div>
                  </div>

                  <div className="rounded-xl bg-zinc-900/40 border border-white/5 p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-violet-400" /> Drafts
                        <span className="text-[10px] text-zinc-500 font-normal">({drafts.length})</span>
                      </h2>
                      <button className="text-xs text-zinc-500 hover:text-zinc-300 flex items-center gap-1.5">
                        <Filter className="w-3 h-3" /> Filter
                      </button>
                    </div>
                    <div className="space-y-2">
                      {drafts.map((d, i) => {
                        const statusColor =
                          d.status === 'queued'
                            ? 'text-violet-300 bg-violet-500/10 border-violet-500/20'
                            : d.status === 'awaiting review'
                              ? 'text-amber-300 bg-amber-500/10 border-amber-500/20'
                              : 'text-zinc-400 bg-zinc-800/60 border-white/5';
                        return (
                          <div
                            key={i}
                            className="flex items-center gap-3 rounded-lg bg-zinc-950/40 border border-white/5 p-3"
                          >
                            <p className="text-sm text-zinc-300 flex-1 min-w-0">{d.text}</p>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full border whitespace-nowrap ${statusColor}`}>
                              {d.status}
                            </span>
                            <span className="text-[10px] text-zinc-600 w-14 text-right">{d.time}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

              {active === 'Scheduled' && (
                <>
                  <PageHeader
                    title="Scheduled"
                    subtitle="Future content, queued and waiting for its moment."
                    action={
                      <button className="bg-white text-zinc-950 px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-2">
                        <Plus className="w-4 h-4" /> Schedule Post
                      </button>
                    }
                  />

                  <div className="flex items-center gap-2">
                    <Dropdown label="Filter" value="all platforms" options={['all platforms', 'X', 'LinkedIn', 'Threads']} onChange={() => {}} />
                    <Dropdown label="Range" value="7 days" options={['24h', '7 days', '30 days']} onChange={() => {}} />
                  </div>

                  <div className="space-y-6">
                    {scheduledFull.map((group) => (
                      <div key={group.day}>
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">{group.day}</h3>
                          <div className="flex-1 h-px bg-white/5"></div>
                          <span className="text-[10px] text-zinc-600">{group.items.length} posts</span>
                        </div>
                        <div className="space-y-2">
                          {group.items.map((item, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-4 rounded-xl bg-zinc-900/40 border border-white/5 p-4 hover:bg-zinc-900/60 transition-colors"
                            >
                              <div className="flex flex-col items-center justify-center w-16 flex-shrink-0">
                                <Clock className="w-3 h-3 text-violet-400 mb-0.5" />
                                <span className="text-xs text-violet-400 font-medium">{item.time}</span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm text-zinc-200 leading-relaxed">{item.text}</p>
                                <div className="flex items-center gap-3 mt-2">
                                  <span className="text-[10px] font-medium text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full border border-violet-500/20">
                                    {item.platform}
                                  </span>
                                  <span className="text-[10px] text-zinc-600">queued</span>
                                </div>
                              </div>
                              <button className="text-xs text-zinc-500 hover:text-white p-1 rounded transition-colors">
                                <ChevronDown className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {active === 'Bot Network' && (
                <>
                  <PageHeader
                    title="Bot Network"
                    subtitle="A globally distributed army of opinions you didn't have to have."
                    action={
                      <button className="bg-white text-zinc-950 px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-2">
                        <Plus className="w-4 h-4" /> Deploy bot pool
                      </button>
                    }
                  />

                  <div data-tour="bots" className="grid grid-cols-4 gap-4">
                    {botStats.map((s) => (
                      <div key={s.label} className="rounded-xl bg-zinc-900/40 border border-white/5 p-4">
                        <p className="text-xs text-zinc-500 mb-1">{s.label}</p>
                        <p className="text-2xl font-bold text-white">{s.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 rounded-xl bg-zinc-900/40 border border-white/5 p-5">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                          <Globe className="w-4 h-4 text-violet-400" /> Regions
                        </h2>
                        <span className="text-[10px] text-zinc-500">99.97% combined uptime</span>
                      </div>
                      <div className="space-y-2">
                        {regions.map((r) => (
                          <div
                            key={r.name}
                            className="flex items-center justify-between rounded-lg bg-zinc-950/40 border border-white/5 px-4 py-3"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <span
                                className={`w-2 h-2 rounded-full flex-shrink-0 ${
                                  r.status === 'healthy' ? 'bg-emerald-400' : 'bg-amber-400'
                                }`}
                              ></span>
                              <span className="text-sm text-zinc-200 font-mono">{r.name}</span>
                            </div>
                            <div className="flex items-center gap-6 text-xs">
                              <span className="text-zinc-500 w-20 text-right">{r.bots} bots</span>
                              <span className="text-zinc-500 w-20 text-right font-mono">{r.uptime}</span>
                              <span
                                className={`w-20 text-right ${
                                  r.status === 'healthy' ? 'text-emerald-400' : 'text-amber-400'
                                }`}
                              >
                                {r.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl bg-zinc-900/40 border border-white/5 p-5">
                      <h2 className="text-sm font-medium text-zinc-300 flex items-center gap-2 mb-4">
                        <Server className="w-4 h-4 text-violet-400" /> Bot Models
                      </h2>
                      <div className="space-y-3">
                        {botModels.map((m) => (
                          <div key={m.name} className="rounded-lg bg-zinc-950/40 border border-white/5 p-3">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs font-mono text-violet-300">{m.name}</span>
                              <span className="text-[10px] text-zinc-500">{m.count}</span>
                            </div>
                            <p className="text-[11px] text-zinc-500">{m.purpose}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {active === 'Analytics' && (
                <>
                  <PageHeader
                    title="Analytics"
                    subtitle="Numbers that make ratios look like a strategy."
                    action={
                      <div className="flex gap-1 text-xs bg-zinc-900/40 border border-white/5 rounded-lg p-1">
                        {['1W', '1M', '3M', 'YTD'].map((p) => (
                          <button
                            key={p}
                            onClick={() => setRange(p)}
                            className={`px-3 py-1.5 rounded-md transition-colors ${
                              range === p ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    }
                  />

                  <div className="grid grid-cols-4 gap-4">
                    {stats.map((stat) => (
                      <div key={stat.label} className="rounded-xl bg-zinc-900/40 border border-white/5 p-4">
                        <p className="text-xs text-zinc-500 mb-1">{stat.label}</p>
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                        <p className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
                          <TrendingUp className="w-3 h-3" /> {stat.change}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl bg-zinc-900/40 border border-white/5 p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-sm font-medium text-zinc-300">Engagement Over Time</h2>
                      <span className="text-[10px] text-zinc-500">total engagement: 1.2M</span>
                    </div>
                    <div className="h-64 flex items-end gap-2">
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

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-zinc-900/40 border border-white/5 p-5">
                      <h2 className="text-sm font-medium text-zinc-300 mb-4">Posts by Platform</h2>
                      <div className="space-y-3">
                        {platformBreakdown.map((p) => (
                          <div key={p.name}>
                            <div className="flex justify-between text-xs mb-1.5">
                              <span className="text-zinc-300">{p.name}</span>
                              <span className="text-zinc-500">{p.value}%</span>
                            </div>
                            <div className="h-2 rounded-full bg-zinc-800/60 overflow-hidden">
                              <div className={`h-full ${p.color}`} style={{ width: `${p.value}%` }}></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl bg-zinc-900/40 border border-white/5 p-5">
                      <h2 className="text-sm font-medium text-zinc-300 mb-4">Engagement by Tone</h2>
                      <div className="space-y-3">
                        {toneBreakdown.map((t) => (
                          <div key={t.name}>
                            <div className="flex justify-between text-xs mb-1.5">
                              <span className="text-zinc-300">{t.name}</span>
                              <span className="text-zinc-500">{t.value}%</span>
                            </div>
                            <div className="h-2 rounded-full bg-zinc-800/60 overflow-hidden">
                              <div className="h-full bg-violet-500" style={{ width: `${t.value}%` }}></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {active === 'Crisis Mode' && (
                <>
                  <PageHeader
                    title="Crisis Mode"
                    subtitle="For when someone notices what your bots have been doing."
                    action={
                      <button
                        onClick={() => setCrisisArmed((v) => !v)}
                        className={`px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors ${
                          crisisArmed
                            ? 'bg-red-500 text-white hover:bg-red-400'
                            : 'bg-white text-zinc-950 hover:bg-zinc-200'
                        }`}
                      >
                        <AlertTriangle className="w-4 h-4" /> {crisisArmed ? 'Disarm' : 'Arm Crisis Mode'}
                      </button>
                    }
                  />

                  <div
                    data-tour="crisis"
                    className={`rounded-xl border p-5 flex items-center gap-4 transition-colors ${
                      crisisArmed
                        ? 'bg-red-500/10 border-red-500/20'
                        : 'bg-zinc-900/40 border-white/5'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 ${
                        crisisArmed
                          ? 'bg-red-500/10 border-red-500/20'
                          : 'bg-emerald-500/10 border-emerald-500/20'
                      }`}
                    >
                      <ShieldCheck className={`w-5 h-5 ${crisisArmed ? 'text-red-400' : 'text-emerald-400'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-zinc-200 font-medium">
                        {crisisArmed ? 'Crisis Mode: Armed' : 'Crisis Mode: Standing down'}
                      </p>
                      <p className="text-xs text-zinc-500 mt-0.5">
                        {crisisArmed
                          ? 'All posts paused. Apology templates on standby. Legal has been notified (allegedly).'
                          : 'No active outrage cycles detected. Notes-app drafts ready: 14.'}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-zinc-900/40 border border-white/5 p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-violet-400" /> Apology Templates
                      </h2>
                      <button className="text-xs text-violet-400 hover:text-violet-300 font-medium">New template</button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {apologies.map((a) => (
                        <div key={a.title} className="rounded-lg bg-zinc-950/40 border border-white/5 p-4">
                          <p className="text-sm font-medium text-zinc-200 mb-1">{a.title}</p>
                          <p className="text-xs text-zinc-500 leading-relaxed">{a.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl bg-zinc-900/40 border border-white/5 p-5">
                    <h2 className="text-sm font-medium text-zinc-300 flex items-center gap-2 mb-4">
                      <Activity className="w-4 h-4 text-violet-400" /> Recent crises handled
                    </h2>
                    <div className="space-y-2">
                      {crisesHandled.map((c, i) => {
                        const tone =
                          c.severity === 'high'
                            ? 'text-red-300 bg-red-500/10 border-red-500/20'
                            : c.severity === 'medium'
                              ? 'text-amber-300 bg-amber-500/10 border-amber-500/20'
                              : 'text-zinc-400 bg-zinc-800/60 border-white/5';
                        return (
                          <div
                            key={i}
                            className="flex items-center gap-3 rounded-lg bg-zinc-950/40 border border-white/5 p-3"
                          >
                            <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full border ${tone}`}>
                              {c.severity}
                            </span>
                            <p className="text-xs text-zinc-300 flex-1 min-w-0">{c.title}</p>
                            <span className="text-[10px] text-zinc-600 flex-shrink-0">{c.time}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

              {active === 'Settings' && (
                <>
                  <PageHeader
                    title="Settings"
                    subtitle="Workspace, billing, and the keys to the chaos."
                  />

                  <div className="rounded-xl bg-zinc-900/40 border border-white/5 p-5">
                    <h2 className="text-sm font-medium text-zinc-300 mb-4">Profile</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-zinc-500 mb-1.5 block">Name</label>
                        <input
                          defaultValue="Demo User"
                          className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-sm text-zinc-200 focus:outline-none focus:border-violet-500/40"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-zinc-500 mb-1.5 block">Email</label>
                        <div className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-sm text-zinc-500 flex items-center justify-between">
                          <span>demo@getspaas.com</span>
                          <span className="text-[10px] text-zinc-600">read-only</span>
                        </div>
                      </div>
                      <div>
                        <label className="text-xs text-zinc-500 mb-1.5 block">Workspace</label>
                        <input
                          defaultValue="YourCompany Inc."
                          className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-sm text-zinc-200 focus:outline-none focus:border-violet-500/40"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-zinc-500 mb-1.5 block">Timezone</label>
                        <input
                          defaultValue="America/New_York"
                          className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-sm text-zinc-200 focus:outline-none focus:border-violet-500/40"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-zinc-900/40 border border-white/5 p-5">
                      <h2 className="text-sm font-medium text-zinc-300 flex items-center gap-2 mb-4">
                        <CreditCard className="w-4 h-4 text-violet-400" /> Plan & Billing
                      </h2>
                      <div className="rounded-lg bg-zinc-950/40 border border-white/5 p-4 mb-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-violet-300">Pro</span>
                          <span className="text-xs text-zinc-500">$899/mo</span>
                        </div>
                        <p className="text-xs text-zinc-500">Up to 10,000 bots · Unlimited posts · Crisis Mode included</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 text-xs font-medium bg-zinc-800/60 hover:bg-zinc-800 border border-white/5 px-3 py-2 rounded-lg text-zinc-200 transition-colors">
                          Manage plan
                        </button>
                        <button className="flex-1 text-xs font-medium bg-zinc-800/60 hover:bg-zinc-800 border border-white/5 px-3 py-2 rounded-lg text-zinc-200 transition-colors">
                          Invoices
                        </button>
                      </div>
                    </div>
                    <div className="rounded-xl bg-zinc-900/40 border border-white/5 p-5">
                      <h2 className="text-sm font-medium text-zinc-300 flex items-center gap-2 mb-4">
                        <Key className="w-4 h-4 text-violet-400" /> API Keys
                      </h2>
                      <div className="rounded-lg bg-zinc-950/40 border border-white/5 p-3 mb-3 font-mono text-xs flex items-center justify-between">
                        <span className="text-zinc-500">sk_live_••••••••••••a4f9</span>
                        <button className="text-violet-400 hover:text-violet-300">Copy</button>
                      </div>
                      <button className="w-full text-xs font-medium bg-zinc-800/60 hover:bg-zinc-800 border border-white/5 px-3 py-2 rounded-lg text-zinc-200 transition-colors">
                        Generate new key
                      </button>
                    </div>
                  </div>

                  <div className="rounded-xl bg-zinc-900/40 border border-white/5 p-5">
                    <h2 className="text-sm font-medium text-zinc-300 mb-4">Connected Platforms</h2>
                    <div className="space-y-2">
                      {integrations.map((i) => (
                        <div
                          key={i.name}
                          className="flex items-center justify-between rounded-lg bg-zinc-950/40 border border-white/5 p-3"
                        >
                          <div>
                            <p className="text-sm text-zinc-200 font-medium">{i.name}</p>
                            <p className="text-[11px] text-zinc-500 mt-0.5">{i.detail}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            {i.connected && (
                              <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                                <Check className="w-3 h-3" /> connected
                              </span>
                            )}
                            <Toggle on={i.connected} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5">
                    <h2 className="text-sm font-medium text-red-300 mb-1">Danger Zone</h2>
                    <p className="text-xs text-zinc-500 mb-4">These actions are permanent. Mostly.</p>
                    <div className="flex gap-2">
                      <button className="text-xs font-medium bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 px-3 py-2 rounded-lg text-red-300 transition-colors">
                        Pause all bots
                      </button>
                      <button className="text-xs font-medium bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 px-3 py-2 rounded-lg text-red-300 transition-colors">
                        Delete workspace
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
