import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Joke from './pages/Payment.tsx';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DotGrid from './components/DotGrid';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-violet-500/30 relative overflow-hidden">
        <DotGrid />
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
