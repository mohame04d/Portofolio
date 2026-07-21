import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TimelineItem = ({ item, index }) => {
  const isLeft = index % 2 === 0;
  
  return (
    <div className={`mb-12 flex flex-col md:flex-row justify-between items-center w-full ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      <div className="hidden md:block w-5/12"></div>
      
      <div className="z-20 flex items-center bg-white dark:bg-slate-800 shadow-xl shadow-sky-500/10 w-12 h-12 rounded-full border-4 border-slate-50 dark:border-slate-900 absolute left-1/2 -translate-x-1/2 transition-colors">
        <div className="w-full flex justify-center text-sky-500 dark:text-sky-400">
          {item.icon === 'work' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="w-full md:w-5/12 glass-panel p-6"
      >
        <span className="flex items-center gap-2 text-sky-500 dark:text-sky-400 font-medium mb-2 text-sm transition-colors">
          <Calendar size={16} />
          {item.date}
        </span>
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 transition-colors">{item.title}</h3>
        <h4 className="text-lg font-medium text-slate-600 dark:text-slate-300 mb-3 transition-colors">{item.organization}</h4>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm transition-colors">
          {item.description}
        </p>
      </motion.div>
    </div>
  );
};

const Timeline = () => {
  const { t } = useTranslation();

  const timelineData = [
    {
      title: t('timeline.sprints_title'),
      organization: t('timeline.sprints_org'),
      date: t('timeline.sprints_date'),
      description: t('timeline.sprints_desc'),
      icon: 'work'
    },
    {
      title: t('timeline.uni_title'),
      organization: t('timeline.uni_org'),
      date: t('timeline.uni_date'),
      description: t('timeline.uni_desc'),
      icon: 'education'
    }
  ];

  return (
    <section id="experience" className="py-20 border-t border-slate-200 dark:border-slate-800 relative transition-colors">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white transition-colors">{t('timeline.title1')} <span className="text-gradient">{t('timeline.title2')}</span></h2>
      </div>

      <div className="max-w-4xl mx-auto relative px-4">
        {/* Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-sky-500/50 via-violet-500/50 to-transparent z-0"></div>
        
        <div className="relative z-10 pt-10">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
