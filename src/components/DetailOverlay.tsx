import { motion, AnimatePresence } from 'motion/react';
import { X, Cpu, Rocket, BookOpen, Layers, Terminal } from 'lucide-react';

interface DetailOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category?: string;
  content: string;
  specifications?: string[];
  techStack?: string[];
  type?: string;
}

export const DetailOverlay = ({ 
  isOpen, 
  onClose, 
  title, 
  category, 
  content, 
  specifications, 
  techStack,
  type 
}: DetailOverlayProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 overflow-hidden"
        >
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl" 
          />
          
          <motion.div
            initial={{ y: 50, scale: 0.95, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 50, scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-5xl h-full max-h-[85vh] bg-neutral-900 tech-border overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-black/20">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 tech-border glass-card flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/dodhvvewu/image/upload/v1777982271/123b0cdb-1074-4cfd-9954-0f6fed36f089_zmu6h1.png" 
                    alt="NeuroNova Logo" 
                    className="w-full h-full object-contain p-1.5"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">{category || type}</div>
                  <h2 className="text-2xl font-display uppercase font-bold tracking-tight">{title}</h2>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors text-white/50 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content Container */}
            <div className="flex-grow overflow-y-auto p-8 md:p-12 scrollbar-thin scrollbar-thumb-white/10">
              <div className="grid md:grid-cols-[1fr_300px] gap-12">
                {/* Main Content */}
                <div className="space-y-8">
                  <section>
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4 uppercase tracking-widest">
                      <BookOpen size={14} /> Abstract & Intelligence
                    </div>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300 leading-relaxed text-lg font-sans">
                        {content}
                      </p>
                    </div>
                  </section>

                  {specifications && specifications.length > 0 && (
                    <section>
                      <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4 uppercase tracking-widest">
                        <Layers size={14} /> System Specifications
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {specifications.map((spec, i) => (
                          <div key={i} className="p-4 bg-white/5 border border-white/5 rounded flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5" />
                            <span className="text-sm text-gray-400 font-sans">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}
                </div>

                {/* Sidebar Info */}
                <div className="space-y-8">
                  {techStack && (
                    <section className="p-6 bg-black/40 border border-white/5 rounded-xl">
                      <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4 uppercase tracking-widest">
                        <Cpu size={14} /> Tech Stack
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {techStack.map((tech) => (
                          <span key={tech} className="px-2 py-1 text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </section>
                  )}

                  <section className="p-6 bg-cyan-500/5 border border-cyan-500/10 rounded-xl">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4 uppercase tracking-widest">
                      <Rocket size={14} /> Status
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500 font-mono">ENCRYPTION:</span>
                        <span className="text-emerald-400 font-mono">ACTIVE [256-BIT]</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500 font-mono">LATENCY:</span>
                        <span className="text-cyan-400 font-mono">12ms</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500 font-mono">NODE AUTH:</span>
                        <span className="text-white font-mono">VERIFIED</span>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/10 bg-black/40 text-center">
              <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                NeuroNova Laboratory Information System © 2025 // Secure Node Access Verified
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
