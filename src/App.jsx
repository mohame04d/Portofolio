import React from 'react';
import Navbar from './components/Navbar';
import MouseGlow from './components/MouseGlow';
import ScrollProgress from './components/ScrollProgress';
import { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useTheme } from './context/ThemeContext';

const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
const Timeline = React.lazy(() => import('./components/Timeline'));
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  const { i18n } = useTranslation();
  const { theme } = useTheme();
  const isArabic = i18n.language === 'ar';

  return (
    <div 
      className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 relative selection:bg-sky-500/30 transition-colors duration-300"
      dir={isArabic ? 'rtl' : 'ltr'}
      style={{ fontFamily: isArabic ? "'Tajawal', sans-serif" : "'Inter', sans-serif" }}
    >
      <ScrollProgress />
      <MouseGlow />
      <Toaster position="bottom-right" toastOptions={{
        style: {
          background: theme === 'dark' ? '#1e293b' : '#ffffff',
          color: theme === 'dark' ? '#f8fafc' : '#0f172a',
          border: theme === 'dark' ? '1px solid #334155' : '1px solid #e2e8f0',
        },
      }} />
      <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-50 dark:opacity-20 transition-colors duration-300"></div>
      
      <Helmet>
        <title>{isArabic ? 'محمد النجار | مطور ويب' : 'Mohamed Elnagar | Full Stack Developer'}</title>
        <meta name="description" content="Portfolio of Mohamed Elnagar, a Full Stack Developer specializing in React, Node.js, and modern web technologies." />
      </Helmet>
      
      <Navbar />
      
      <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <Timeline />
          <Projects />
        </main>
        
        <Contact />
      </React.Suspense>
    </div>
  );
}

export default App;
