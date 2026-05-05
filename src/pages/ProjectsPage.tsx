import { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ProjectCard } from '../components/ProjectCard';
import { Category, Project } from '../types';
import { DetailOverlay } from '../components/DetailOverlay';

export const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState<Category | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  const filterOptions = ['All', 'Foundation AI', 'Data Science', 'Quant Finance', 'Infrastructure', 'Science & Society', 'Frontier Research'] as const;

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-16 gap-8">
        <div>
          <h1 className="text-6xl font-display mb-4 uppercase font-bold tracking-tighter">PROJECT <span className="text-white/20">REGISTRY</span></h1>
          <p className="text-gray-400 font-mono text-sm max-w-lg">
            A comprehensive index of NeuroNova’s operational deployments. Categorized by node specialization and implementation focus.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 p-1 bg-white/5 border border-white/10 rounded-lg">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 text-[10px] font-mono transition-all rounded uppercase ${
                activeFilter === filter 
                  ? 'bg-cyan-400 text-black' 
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, i) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={i} 
            onClick={setSelectedProject}
          />
        ))}
      </div>

      <DetailOverlay
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
        category={selectedProject?.category}
        content={selectedProject?.fullContent || selectedProject?.description || ''}
        specifications={selectedProject?.specifications}
        techStack={selectedProject?.techStack}
      />

      {filteredProjects.length === 0 && (
        <div className="py-32 text-center border border-dashed border-white/10">
          <p className="text-gray-500 font-mono">NO ACTIVE PROJECTS FOUND IN THIS REGISTRY</p>
        </div>
      )}
    </div>
  );
};
