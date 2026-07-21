import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      
      if (current !== activeSection) {
        setActiveSection(current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const navLinks = [
    { name: t('navbar.home'), href: '#home', section: 'home' },
    { name: t('navbar.about'), href: '#about', section: 'about' },
    { name: t('navbar.experience'), href: '#experience', section: 'experience' },
    { name: t('navbar.projects'), href: '#projects', section: 'projects' },
    { name: t('navbar.contact'), href: '#contact', section: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-gradient tracking-tighter">
              M.Elnagar
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`font-medium transition-colors ${activeSection === link.section ? 'text-sky-500 dark:text-sky-400' : 'text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400'}`}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={toggleTheme}
              className="text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 focus:outline-none flex items-center"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={toggleLanguage}
              className="text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 font-medium transition-colors flex items-center gap-1"
            >
              <Globe size={18} />
              {i18n.language === 'en' ? 'عربي' : 'EN'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 focus:outline-none flex items-center"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={toggleLanguage}
              className="text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 focus:outline-none flex items-center"
            >
              <Globe size={20} />
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-panel mx-4 mt-2 p-4 absolute left-0 right-0"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-medium transition-colors block ${activeSection === link.section ? 'text-sky-500 dark:text-sky-400' : 'text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400'}`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
