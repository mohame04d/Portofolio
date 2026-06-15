import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import Tilt from 'react-parallax-tilt';
import { useTranslation } from 'react-i18next';

const ProjectModal = ({ project, onClose, t }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-slate-800 border border-slate-700 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          onClick={e => e.stopPropagation()}
        >
          <div className="relative h-64 sm:h-80 w-full flex-shrink-0">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent pointer-events-none"></div>
            <h3 className="absolute bottom-6 left-6 text-3xl font-bold text-white z-10">{project.title}</h3>
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-slate-900/60 hover:bg-slate-900/90 text-white rounded-full backdrop-blur-md transition-colors z-50 cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="p-6 md:p-8 overflow-y-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 text-xs font-semibold bg-sky-500/10 text-sky-400 rounded-full border border-sky-500/20">
                  {tech}
                </span>
              ))}
            </div>
            
            <h4 className="text-xl font-semibold text-slate-200 mb-3">{t('projects.overview')}</h4>
            <p className="text-slate-400 leading-relaxed mb-6">
              {project.details || project.description}
            </p>
            
            <div className="flex gap-4 pt-4 border-t border-slate-700">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors rtl:flex-row-reverse">
                  <FiGithub size={18} /> {t('projects.sourceCode')}
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition-colors ml-auto rtl:ml-0 rtl:mr-auto rtl:flex-row-reverse">
                  <ExternalLink size={18} /> {t('projects.liveDemo')}
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ProjectCard = ({ project, delay, onClick, t }) => (
  <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.02} transitionSpeed={2000} className="h-full">
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-panel overflow-hidden group flex flex-col h-full cursor-pointer hover:border-sky-500/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] transition-all"
      onClick={onClick}
    >
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-slate-900/80 backdrop-blur-md rounded-full text-xs font-medium text-slate-300 border border-slate-700 group-hover:border-sky-500/50 transition-colors">
          {t('projects.viewDetails')}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow bg-slate-800/80">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors pr-2 rtl:pr-0 rtl:pl-2">{project.title}</h3>
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={(e) => e.stopPropagation()}
              className="text-slate-400 hover:text-sky-400 transition-colors z-20"
              title={t('projects.sourceCode')}
            >
              <FiGithub size={24} />
            </a>
          )}
        </div>
        <p className="text-slate-400 text-sm mb-4 flex-grow line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech, idx) => (
            <span key={idx} className="px-2.5 py-1 text-xs font-medium bg-slate-900/50 text-slate-300 rounded-md border border-slate-700">
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2.5 py-1 text-xs font-medium bg-slate-900/50 text-slate-500 rounded-md border border-slate-700">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const Projects = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      title: t('projects.fintech.title'),
      description: t('projects.fintech.desc'),
      details: t('projects.fintech.details'),
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      tech: ["NestJS", "React.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "WebSockets"],
      github: "https://github.com/mohame04d/Bank-System.git"
    },
    {
      title: t('projects.dental.title'),
      description: t('projects.dental.desc'),
      details: t('projects.dental.details'),
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
      tech: ["Node.js", "React", "Express", "MongoDB", "MERN Stack", "JWT"],
      github: "https://github.com/mohame04d/Dental_Clinic_Backend.git"
    },
    {
      title: t('projects.ecommerce.title'),
      description: t('projects.ecommerce.desc'),
      details: t('projects.ecommerce.details'),
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      tech: ["NestJS", "TypeScript", "MongoDB", "Stripe", "JWT", "Cloudinary"],
      github: "https://github.com/mohame04d/E-Commerce-Nest-.git"
    },
    {
      title: t('projects.store.title'),
      description: t('projects.store.desc'),
      details: t('projects.store.details'),
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
      tech: ["Node.js", "Express", "MongoDB", "React", "Vite", "Tailwind CSS"],
      github: "https://github.com/mohame04d/Online-Store.git"
    }
  ];

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 border-t border-slate-800 relative">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('projects.title1')} <span className="text-gradient">{t('projects.title2')}</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          {t('projects.description')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            delay={index * 0.2} 
            onClick={() => setSelectedProject(project)}
            t={t}
          />
        ))}
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        t={t}
      />
    </section>
  );
};

export default Projects;
