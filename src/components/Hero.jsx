import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Mail, FileDown } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-slate-800/80 border border-sky-500/30 text-sky-400 font-medium text-sm mb-4">
            {t('hero.badge')}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {t('hero.hi')} <br />
            <span className="text-gradient">{t('hero.name')}</span>
          </h1>
          <div className="text-2xl md:text-3xl font-semibold text-slate-300 h-10" key={i18n.language}>
            <TypeAnimation
              sequence={[
                t('hero.typewriter.0'), 2000,
                t('hero.typewriter.1'), 2000,
                t('hero.typewriter.2'), 2000,
                t('hero.typewriter.3'), 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition-all flex items-center gap-2 group"
            >
              {t('hero.viewWork')}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </a>
            <a 
              href="/CV.pdf" 
              download="Mohamed_Elnagar_CV.pdf"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 rounded-lg transition-all flex items-center gap-2 group"
            >
              {t('hero.downloadCV')}
              <FileDown size={18} className="group-hover:-translate-y-1 transition-transform text-sky-400" />
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-transparent hover:bg-slate-800 text-slate-300 rounded-lg transition-all flex items-center gap-2"
            >
              {t('hero.contactMe')}
            </a>
          </div>

          <div className="flex gap-6 pt-8">
            <a href="https://github.com/mohame04d" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <FiGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/mohamed-elnagar-b7ab6a2a2/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-500 transition-colors">
              <FiLinkedin size={24} />
            </a>
            <a href="#contact" className="text-slate-400 hover:text-red-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center relative"
        >
          {/* Decorative glowing background */}
          <div className="absolute w-64 h-64 bg-sky-500/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute w-64 h-64 bg-violet-500/20 rounded-full blur-3xl -z-10 translate-x-20 translate-y-20"></div>
          
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-slate-800 overflow-hidden relative shadow-2xl">
            {/* Use local profile image */}
            <img 
              src="/profile.png" 
              alt="Mohamed Elnagar" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
