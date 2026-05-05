import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project } from '../types';

export interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
  key?: string | number;
}

export const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={() => onClick(project)}
      className="group relative flex flex-col tech-border glass-card overflow-hidden cursor-pointer"
    >
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-400 border border-cyan-400/20 px-2 py-0.5 rounded">
            {project.category}
          </span>
          <div className="flex gap-3 text-gray-500">
            {project.githubUrl && (
              <a href={project.githubUrl} className="hover:text-white transition-colors">
                <Github size={18} />
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} className="hover:text-white transition-colors">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
        
        <h3 className="text-xl font-display mb-3 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span key={tech} className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-1 border border-white/5">
              {tech}
            </span>
          ))}
        </div>
        
        <button className="flex items-center gap-2 text-xs font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity">
          VIEW SYSTEM LOGS <ArrowRight size={14} />
        </button>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};
