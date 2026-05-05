import { motion } from 'motion/react';
import { TEAM } from '../constants';
import { Github, Linkedin, Briefcase, Globe } from 'lucide-react';

export const TeamPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <div>
          <div className="text-[10px] font-mono text-cyan-400 mb-4 uppercase tracking-[0.4em]">PERSONNEL DIRECTORY</div>
          <h1 className="text-6xl font-display mb-4 uppercase font-bold tracking-tight leading-none">LAB <span className="text-white/20">LEADERSHIP</span></h1>
          <p className="text-gray-500 font-mono text-xs max-w-lg uppercase tracking-wider">
            High-clearance architects driving the NeuroNova mission.
          </p>
        </div>
        <div className="p-4 tech-border glass-card bg-cyan-400/5 h-fit">
           <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-1">TOTAL_STAFF</div>
           <div className="text-3xl font-display text-white">42 / 128</div>
        </div>
      </motion.div>

      <div className="space-y-12">
        {TEAM.map((member, i) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative tech-border glass-card overflow-hidden bg-black/40"
          >
            {/* Dossier Header */}
            <div className="p-8 md:p-12 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-8 bg-white/[0.02]">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="w-20 h-20 tech-border glass-card flex items-center justify-center bg-cyan-400/5 flex-shrink-0">
                  <Briefcase size={32} className="text-cyan-400/50" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-2 px-2 py-0.5 border border-cyan-400/20 w-fit rounded">
                    {member.role}
                  </div>
                  <h3 className="text-5xl font-display uppercase font-bold tracking-tighter text-white group-hover:text-cyan-400 transition-colors">
                    {member.name}
                  </h3>
                </div>
              </div>
              
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-all bg-black/40"><Linkedin size={20} /></a>
                <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 hover:border-white hover:text-white transition-all bg-black/40"><Github size={20} /></a>
                <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 hover:border-white hover:text-white transition-all bg-black/40"><Globe size={20} /></a>
              </div>
            </div>

            {/* Dossier Body */}
            <div className="grid lg:grid-cols-[1fr_400px] gap-12">
              <div className="space-y-12">
                <div className="relative p-8 md:p-12 bg-black/40 border border-white/5 rounded-2xl overflow-hidden group/dossier">
                  <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/10 select-none">FILE_REF: {member.id.toUpperCase()}</div>
                  <div className="text-[100px] font-display text-white/[0.01] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">DOSSIER</div>
                  
                  <div className="mb-12 relative z-10">
                    <div className="text-[10px] font-mono text-cyan-400/50 uppercase tracking-[0.3em] mb-6 border-b border-white/5 pb-2">01 // PROFESSIONAL_SUMMARY</div>
                    <p className="text-gray-400 text-lg leading-relaxed font-sans">
                      {member.bio}
                    </p>
                  </div>

                  {member.focusAreas && (
                    <div className="relative z-10">
                      <div className="text-[10px] font-mono text-cyan-400/50 uppercase tracking-[0.3em] mb-6 border-b border-white/5 pb-2">02 // STRATEGIC_DOMAINS</div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {member.focusAreas.map((area, idx) => (
                          <div key={idx} className="p-4 bg-white/[0.03] border border-white/5 rounded flex items-center gap-4 group/item hover:border-cyan-400/30 transition-all hover:translate-x-1">
                            <span className="text-cyan-400 font-mono text-xs">0{idx + 1}</span>
                            <span className="text-sm text-gray-300 font-mono uppercase tracking-wider">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-8 bg-black/60 border border-white/10 rounded-2xl h-full flex flex-col justify-between">
                  <div className="mb-10">
                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em] mb-6 border-b border-white/5 pb-2">CORE_LOGIC_SKILLS</div>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map(skill => (
                        <span key={skill} className="px-3 py-1.5 text-[10px] font-mono bg-cyan-400/5 border border-cyan-400/10 text-cyan-400/70 uppercase tracking-widest rounded-lg">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl border-t-2 border-t-cyan-400/30">
                      <div className="flex items-center gap-3 mb-6 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        STATUS: ACTIVE_DUTY
                      </div>
                      <div className="space-y-4">
                         <div className="flex justify-between items-center text-[10px] font-mono">
                            <span className="text-gray-600">CLEARANCE:</span>
                            <span className="text-white/60 tracking-widest uppercase">Level_S_Alpha</span>
                         </div>
                         <div className="flex justify-between items-center text-[10px] font-mono">
                            <span className="text-gray-600">REG_DATE:</span>
                            <span className="text-white/60 tracking-widest">2026.05.05</span>
                         </div>
                         <div className="flex justify-between items-center text-[10px] font-mono">
                            <span className="text-gray-600">ID_REF:</span>
                            <span className="text-cyan-400/50 uppercase">{member.id}</span>
                         </div>
                      </div>
                    </div>

                    <div className="text-[8px] font-mono text-gray-700 leading-tight italic uppercase">
                      This dossier is classified under the NeuroNova intelligence protocol v4.2. Unauthorized access is strictly prohibited and monitored.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dossier Footer Decor */}
            <div className="p-4 bg-black/60 border-t border-white/5 flex justify-between items-center px-12">
               <div className="text-[9px] font-mono text-white/5 uppercase tracking-[0.5em]">CONFIDENTIAL // PERSONNEL FILE</div>
               <div className="w-24 h-[1px] bg-white/5" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
