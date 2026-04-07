import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Trial from './pages/Trial';
import Pricing from './pages/Pricing';
import Payment from './pages/Payment';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DotGrid from './components/DotGrid';

function AppLayout() {
  const location = useLocation();
  const hideFooter = location.pathname === '/payment';

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-violet-500/30 relative overflow-hidden">
      <DotGrid />
      <Navbar />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trial" element={<Trial />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
