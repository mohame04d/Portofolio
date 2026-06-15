import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const ContactInfo = ({ icon: Icon, title, value, href }) => (
  <div className="flex items-start gap-4 mb-6">
    <div className="p-3 bg-sky-500/10 text-sky-400 rounded-lg flex-shrink-0">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="text-sm font-medium text-slate-400 mb-1">{title}</h4>
      {href ? (
        <a href={href} className="text-lg font-medium text-slate-200 hover:text-sky-400 transition-colors">
          {value}
        </a>
      ) : (
        <p className="text-lg font-medium text-slate-200">{value}</p>
      )}
    </div>
  </div>
);

const Contact = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loadingToast = toast.loading(t('contact.form.sending'));
    
    // Simulate API call
    setTimeout(() => {
      toast.dismiss(loadingToast);
      toast.success(t('contact.form.success'));
      e.target.reset();
    }, 1500);
  };

  return (
    <footer id="contact" className="relative border-t border-slate-800 bg-slate-900/50 pt-20 pb-10 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('contact.title1')} <span className="text-gradient">{t('contact.title2')}</span></h2>
            <p className="text-slate-400 mb-8 max-w-md leading-relaxed">
              {t('contact.description')}
            </p>
            
            <div className="space-y-4">
              <ContactInfo 
                icon={Mail} 
                title={t('contact.email')} 
                value="mohakim88tr@gmail.com" 
                href="mailto:mohakim88tr@gmail.com"
              />
              <ContactInfo 
                icon={Phone} 
                title={t('contact.phone')} 
                value="+201069532055" 
                href="tel:+201069532055"
              />
              <ContactInfo 
                icon={MapPin} 
                title={t('contact.location')} 
                value={t('contact.egypt')} 
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-8"
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">{t('contact.form.nameLabel')}</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-sky-500 text-slate-200 transition-colors"
                  placeholder={t('contact.form.namePlaceholder')}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">{t('contact.form.emailLabel')}</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-sky-500 text-slate-200 transition-colors"
                  placeholder={t('contact.form.emailPlaceholder')}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">{t('contact.form.messageLabel')}</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-sky-500 text-slate-200 transition-colors resize-none"
                  placeholder={t('contact.form.messagePlaceholder')}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {t('contact.form.sendButton')}
              </button>
            </form>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {t('contact.rights')}
          </p>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/mohame04d" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:bg-slate-700 transition-all">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/mohamed-elnagar-b7ab6a2a2/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:bg-slate-700 transition-all">
              <FiLinkedin size={20} />
            </a>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400 hover:bg-sky-500 hover:text-white transition-all ml-4"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
