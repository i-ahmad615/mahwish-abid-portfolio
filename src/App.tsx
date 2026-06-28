/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import RecentWorks from "./components/RecentWorks";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";

export default function App() {
  const [view, setView] = useState<'portfolio' | 'contact'>('portfolio');

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [view]);

  return (
    <div className="min-h-screen bg-[#0d1116] text-white selection:bg-[#00df8f] selection:text-[#0d1116] overflow-x-hidden relative font-sans antialiased">
      {/* Absolute Noise Overlay or glow structures */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/40 via-[#0d1116] to-[#0d1116] pointer-events-none z-0" />

      {/* Primary Components */}
      <Navbar currentView={view} setView={setView} />
      
      <main id="main-content">
        {view === 'portfolio' ? (
          <>
            <Hero setView={setView} />
            <About />
            <RecentWorks />
            <Services />
            <Footer setView={setView} />
          </>
        ) : (
          <ContactPage onClose={() => setView('portfolio')} />
        )}
      </main>
    </div>
  );
}

