import React from 'react';
import MarqueeModule from 'react-fast-marquee';
import { useTranslation } from 'react-i18next';

// Vite/CommonJS compat
const Marquee = MarqueeModule.default ? MarqueeModule.default : MarqueeModule;

const skills = [
  "React.js", "Node.js", "Express.js", "NestJS", "TypeScript", 
  "JavaScript", "MongoDB", "PostgreSQL", "Tailwind CSS", 
  "HTML5", "CSS3", "C++", "Git", "GitHub Actions"
];

const SkillsMarquee = () => {
  const { t } = useTranslation();

  return (
    <div className="py-10 my-10 border-y border-slate-200 dark:border-slate-800 overflow-hidden transition-colors">
      <h3 className="text-xl font-semibold mb-6 text-center text-slate-700 dark:text-slate-300">
        {t('about.categories.frontend') || 'Tech Stack'} & {t('about.categories.backend') || 'More'}
      </h3>
      <Marquee gradient={false} speed={40} className="py-2">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="mx-4 px-6 py-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium shadow-sm transition-colors hover:border-sky-500 hover:text-sky-500"
          >
            {skill}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SkillsMarquee;
