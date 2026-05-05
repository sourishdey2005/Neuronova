import { motion } from 'motion/react';
import { TEAM } from '../constants';
import { Github, Linkedin, Briefcase, Globe } from 'lucide-react';

export const TeamPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20"
      >
        <div className="text-[10px] font-mono text-cyan-400 mb-4 uppercase tracking-[0.3em]">EXECUTIVE BOARD</div>
        <h1 className="text-6xl font-display mb-4 uppercase font-bold tracking-tight">LAB <span className="text-white/20">LEADERSHIP</span></h1>
        <p className="text-gray-500 font-mono text-sm max-w-lg">
          The multidisciplinary architects driving the NeuroNova mission at the intersection of capital, code, and neural theory.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {TEAM.map((member, i) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group relative flex flex-col tech-border glass-card p-12 hover:bg-white/[0.04] transition-all overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none" />
            
            <div className="relative flex flex-col gap-8 relative z-10 text-left">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-2">
                    {member.role}
                  </span>
                  <h3 className="text-5xl font-display uppercase font-bold tracking-tighter text-white">
                    {member.name}
                  </h3>
                </div>
                
                <div className="flex gap-4 text-gray-500">
                  <a href="#" className="hover:text-cyan-400 transition-colors p-2 bg-white/5 rounded-full border border-white/10 hover:border-cyan-400/50"><Linkedin size={18} /></a>
                  <a href="#" className="hover:text-white transition-colors p-2 bg-white/5 rounded-full border border-white/10 hover:border-white/50"><Github size={18} /></a>
                  <a href="#" className="hover:text-white transition-colors p-2 bg-white/5 rounded-full border border-white/10 hover:border-white/50"><Globe size={18} /></a>
                </div>
              </div>

              <div className="grid lg:grid-cols-[1fr_300px] gap-12">
                <div>
                  <div className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] mb-4">PROFILE SUMMARY</div>
                  <p className="text-gray-400 text-base leading-relaxed mb-8 font-sans">
                    {member.bio}
                  </p>

                  {member.focusAreas && (
                    <div>
                      <div className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] mb-6">STRATEGIC FOCUS AREAS</div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {member.focusAreas.map((area, idx) => (
                          <div key={idx} className="p-4 bg-white/[0.02] border border-white/5 rounded-lg flex items-center gap-3 group/item hover:border-cyan-400/30 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                            <span className="text-xs text-gray-300 font-mono uppercase tracking-wider">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-8">
                  <div>
                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] mb-4">CORE COMPETENCIES</div>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map(skill => (
                        <span key={skill} className="px-2 py-1 text-[9px] font-mono bg-cyan-400/5 border border-cyan-400/20 text-cyan-400/80 uppercase tracking-wider rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl">
                    <div className="flex items-center gap-2 mb-4 text-[10px] font-mono text-gray-500 uppercase">
                      <Briefcase size={14} className="text-cyan-400" /> SYSTEM ID
                    </div>
                    <div className="text-lg font-mono text-white/40 tracking-wider">
                      NN-ID: {member.id.toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Data Decors */}
            <div className="absolute bottom-4 right-6 font-mono text-[8px] text-white/5 uppercase tracking-[0.5em] pointer-events-none">
              AUTH LEVEL: CLEARANCE_A
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
