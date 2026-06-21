import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Trial from './pages/Trial';
import Pricing from './pages/Pricing';
import Payment from './pages/Payment';
import Login from './pages/Login';
import DemoDashboard from './pages/DemoDashboard';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import ContactSales from './pages/ContactSales';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DotGrid from './components/DotGrid';
import DemoHint from './components/DemoHint';
import { isAppSubdomain } from './lib/hosts';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppShell() {
  const location = useLocation();

  if (isAppSubdomain) {
    const isDashboard = location.pathname === '/dashboard';
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-emerald-500/30 relative overflow-hidden">
        <ScrollToTop />
        {!isDashboard && <DotGrid />}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<DemoDashboard />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    );
  }

  const isDashboard = location.pathname === '/dashboard';
  const hideFooter = isDashboard || location.pathname === '/payment' || location.pathname === '/login';
  const hideNavbar = isDashboard;
  const hideDotGrid = isDashboard;
  const showDemoHint = !isDashboard && !['/login', '/payment', '/contact-sales'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-emerald-500/30 relative overflow-hidden">
      <ScrollToTop />
      {!hideDotGrid && <DotGrid />}
      {!hideNavbar && <Navbar />}
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trial" element={<Trial />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DemoDashboard />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-sales" element={<ContactSales />} />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
      {showDemoHint && <DemoHint />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
