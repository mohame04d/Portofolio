import React from 'react';
import Navbar from './components/Navbar';
import MouseGlow from './components/MouseGlow';
import ScrollProgress from './components/ScrollProgress';
import { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <div 
      className="min-h-screen bg-slate-900 text-slate-50 relative selection:bg-sky-500/30"
      dir={isArabic ? 'rtl' : 'ltr'}
      style={{ fontFamily: isArabic ? "'Tajawal', sans-serif" : "'Inter', sans-serif" }}
    >
      <ScrollProgress />
      <MouseGlow />
      <Toaster position="bottom-right" toastOptions={{
        style: {
          background: '#1e293b',
          color: '#f8fafc',
          border: '1px solid #334155',
        },
      }} />
      <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
      
      <Navbar />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Timeline />
        <Projects />
      </main>
      
      <Contact />
    </div>
  );
}

export default App;
