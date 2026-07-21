import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const GithubStats = () => {
  const { t } = useTranslation();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 transition-colors"
    >
      <h3 className="text-2xl font-bold mb-8 text-center text-slate-800 dark:text-slate-200 transition-colors">
        {t('githubStats.title1')} <span className="text-sky-400">{t('githubStats.title2')}</span>
      </h3>
      <div className="flex justify-center bg-white/50 dark:bg-slate-900/50 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 glass-panel overflow-x-auto transition-colors">
        <GitHubCalendar 
          username="mohame04d" 
          colorScheme="dark"
          theme={{
            dark: ['#1e293b', '#0ea5e980', '#0ea5e9a0', '#0ea5e9d0', '#0ea5e9'],
            light: ['#f1f5f9', '#0ea5e980', '#0ea5e9a0', '#0ea5e9d0', '#0ea5e9']
          }}
          fontSize={14}
          blockSize={12}
          blockMargin={4}
        />
      </div>
    </motion.div>
  );
};

export default GithubStats;
