import { motion } from 'motion/react';
import { useState } from 'react';
import { PAPERS } from '../constants';
import { ChevronRight } from 'lucide-react';
import { Category, ResearchPaper } from '../types';
import { DetailOverlay } from '../components/DetailOverlay';

export const ResearchPage = () => {
  const [activeFilter, setActiveFilter] = useState<Category | 'All'>('All');
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(null);

  const filteredPapers = activeFilter === 'All' 
    ? PAPERS 
    : PAPERS.filter(p => p.category === activeFilter);

  const filterOptions = ['All', 'Foundation AI', 'Data Science', 'Quant Finance', 'Infrastructure', 'Science & Society', 'Frontier Research'] as const;

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <div>
          <div className="text-[10px] font-mono text-cyan-400 mb-4 uppercase tracking-[0.3em]">TECHNICAL REPOSITORY</div>
          <h1 className="text-6xl font-display mb-4 uppercase font-bold tracking-tight">IP <span className="text-white/20">&</span> ARCHITECTURE</h1>
        </div>

        <div className="flex flex-wrap gap-2 p-1 bg-white/5 border border-white/10 rounded-lg h-fit">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1 text-[10px] font-mono transition-all rounded uppercase ${
                activeFilter === filter 
                  ? 'bg-cyan-400 text-black' 
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="grid gap-8">
        {filteredPapers.map((paper, i) => (
          <motion.div
            key={paper.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative tech-border glass-card overflow-hidden transition-all duration-500 cursor-pointer hover:bg-white/[0.03]"
            onClick={() => setSelectedPaper(paper)}
          >
            <div className="p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className={`px-2 py-0.5 text-[10px] font-mono rounded border uppercase ${
                    paper.type === 'Publication' ? 'text-emerald-400 border-emerald-400/20' : 
                    paper.type === 'Patent' ? 'text-cyan-400 border-cyan-400/20' : 'text-purple-400 border-purple-400/20'
                  }`}>
                  {paper.type}
                </span>
                <span className="text-gray-600 font-mono text-[10px] uppercase tracking-widest">{paper.date}</span>
              </div>
              
              <h3 className="text-3xl font-display mb-4 uppercase font-bold tracking-tighter transition-colors group-hover:text-cyan-400">
                {paper.title}
              </h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-4xl font-sans">
                {paper.abstract}
              </p>

              <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">
                ACCESS SYSTEM LOGS 
                <ChevronRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <DetailOverlay
        isOpen={!!selectedPaper}
        onClose={() => setSelectedPaper(null)}
        title={selectedPaper?.title || ''}
        category={selectedPaper?.category}
        type={selectedPaper?.type}
        content={selectedPaper?.insight || selectedPaper?.abstract || ''}
        specifications={selectedPaper?.specifications}
      />
    </div>
  );
};
