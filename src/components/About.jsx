import { motion } from 'framer-motion';
import { Server, Layout, Database, Terminal, Users, Cpu } from 'lucide-react';
import GithubStats from './GithubStats';
import Tilt from 'react-parallax-tilt';
import { useTranslation } from 'react-i18next';

const SkillCard = ({ title, icon: Icon, skills, delay }) => (
  <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="h-full">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-panel p-6 h-full"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-lg bg-sky-500/10 text-sky-400">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-semibold text-slate-200">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, idx) => (
          <li key={idx} className="text-slate-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  </Tilt>
);

const About = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('about.categories.backend'),
      icon: Server,
      skills: ["Node.js", "Express.js", "NestJS", "C++"],
      delay: 0.1
    },
    {
      title: t('about.categories.databases'),
      icon: Database,
      skills: ["PostgreSQL", "MongoDB (Mongoose)", "Microsoft SQL Server", "Prisma & TypeORM"],
      delay: 0.2
    },
    {
      title: t('about.categories.frontend'),
      icon: Layout,
      skills: ["React.js", "JavaScript/TypeScript", "Tailwind CSS", "HTML5 & CSS3"],
      delay: 0.3
    },
    {
      title: t('about.categories.api_devops'),
      icon: Terminal,
      skills: ["RESTful APIs", "GraphQL", "WebSockets / Socket.io", "Git, GitHub Actions CI/CD"],
      delay: 0.4
    },
    {
      title: t('about.categories.architecture'),
      icon: Cpu,
      skills: ["SOLID Principles", "Design Patterns", "OOP", "Microservices & Clean Code"],
      delay: 0.5
    },
    {
      title: t('about.categories.soft_skills'),
      icon: Users,
      skills: [
        t('about.soft_skills_list.0'), 
        t('about.soft_skills_list.1'), 
        t('about.soft_skills_list.2'), 
        t('about.soft_skills_list.3')
      ],
      delay: 0.6
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-800">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('about.title1')} <span className="text-gradient">{t('about.title2')}</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          {t('about.description')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <SkillCard key={idx} {...category} />
        ))}
      </div>

      <GithubStats />
    </section>
  );
};

export default About;
