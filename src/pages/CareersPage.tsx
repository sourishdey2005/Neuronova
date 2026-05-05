import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowRight, Zap, X, GraduationCap, Link as LinkIcon, User, Building } from 'lucide-react';

const JOBS = [
  {
    id: 'j-1',
    title: 'Lead Neural Architect',
    location: 'Bangalore / Remote',
    type: 'Full-time',
    category: 'Engineering',
    compensation: '₹85L - ₹1.2Cr + Equity'
  },
  {
    id: 'j-2',
    title: 'Senior Quant Researcher',
    location: 'Mumbai / Remote',
    type: 'Full-time',
    category: 'Research',
    compensation: '₹75L - ₹1.1Cr + Bonus'
  },
  {
    id: 'j-3',
    title: 'Data Synthesis Engineer',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'Data Science',
    compensation: '₹55L - ₹85L'
  },
  {
    id: 'j-4',
    title: 'MLOps Infrastructure Lead',
    location: 'Gurgaon / Remote',
    type: 'Full-time',
    category: 'Infrastructure',
    compensation: '₹60L - ₹95L'
  },
  {
    id: 'j-5',
    title: 'Intern (AIML, Data Science, R&D, Patent)',
    location: 'Bangalore / Remote',
    type: 'Internship',
    category: 'Intern',
    compensation: '₹50k - ₹80k / Month'
  }
];

const ApplicationModal = ({ isOpen, onClose, jobTitle }: { isOpen: boolean; onClose: () => void; jobTitle: string }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      >
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          className="relative w-full max-w-xl glass-card tech-border p-8 overflow-hidden"
        >
          <div className="absolute inset-0 bg-cyan-400/[0.02] pointer-events-none" />
          
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
            <X size={20} />
          </button>

          {!submitted ? (
            <div className="relative z-10">
              <div className="mb-8">
                <div className="text-[10px] font-mono text-cyan-400 mb-2 uppercase tracking-[0.4em]">APPLICATION_FORM</div>
                <h2 className="text-3xl font-display font-bold uppercase tracking-tighter">{jobTitle}</h2>
                <p className="text-gray-500 text-xs mt-2 font-mono uppercase">Please fill in your technical credentials</p>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono text-gray-500 uppercase flex items-center gap-2"><User size={10} /> Name</label>
                    <input required className="w-full bg-white/[0.03] border border-white/10 rounded p-2 focus:border-cyan-400/50 outline-none transition-all text-sm font-sans" placeholder="Alan Turing" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono text-gray-500 uppercase flex items-center gap-2"><MapPin size={10} /> City</label>
                    <input required className="w-full bg-white/[0.03] border border-white/10 rounded p-2 focus:border-cyan-400/50 outline-none transition-all text-sm font-sans" placeholder="Bangalore" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono text-gray-500 uppercase flex items-center gap-2"><GraduationCap size={10} /> Education</label>
                    <input required className="w-full bg-white/[0.03] border border-white/10 rounded p-2 focus:border-cyan-400/50 outline-none transition-all text-sm font-sans" placeholder="PhD in Neural Systems" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono text-gray-500 uppercase flex items-center gap-2"><Zap size={10} /> CGPA / Score</label>
                    <input required className="w-full bg-white/[0.03] border border-white/10 rounded p-2 focus:border-cyan-400/50 outline-none transition-all text-sm font-sans" placeholder="9.5 / 10" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-mono text-gray-500 uppercase flex items-center gap-2"><LinkIcon size={10} /> CV / Portfolio Link</label>
                  <input required type="url" className="w-full bg-white/[0.03] border border-white/10 rounded p-2 focus:border-cyan-400/50 outline-none transition-all text-sm font-sans" placeholder="https://..." />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-mono text-gray-500 uppercase flex items-center gap-2"><Building size={10} /> LinkedIn Profile</label>
                  <input required type="url" className="w-full bg-white/[0.03] border border-white/10 rounded p-2 focus:border-cyan-400/50 outline-none transition-all text-sm font-sans" placeholder="https://linkedin.com/in/..." />
                </div>

                <button type="submit" className="w-full button-primary py-3 rounded text-xs font-bold uppercase tracking-widest mt-6 flex items-center justify-center gap-2">
                  SUBMIT_APPLICATION <ArrowRight size={14} />
                </button>
              </form>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-emerald-400/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold uppercase mb-2">Sync Successful</h3>
              <p className="text-gray-500 font-sans text-sm">Our neural architects will review your credentials and reach out shortly.</p>
              <button onClick={onClose} className="mt-8 text-[10px] font-mono text-cyan-400 uppercase tracking-widest hover:text-white transition-colors">
                CLOSE_TRANSMISSION
              </button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-mono text-cyan-400 mb-6 uppercase tracking-[0.4em]"
          >
            JOIN_THE_CORE
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-display uppercase font-bold tracking-tighter mb-8 leading-[0.85]">
            SHAPE THE <br/><span className="text-white/20">INTELLIGENT</span> <br/>FUTURE
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl font-sans leading-relaxed">
            We are looking for pioneers, outliers, and deep-thinkers who are bored with conventional AI. 
            At NeuroNova, we build the systems that define the next century.
          </p>
        </header>

        <section className="grid gap-6">
          {JOBS.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group glass-card tech-border p-8 hover:border-cyan-400/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/[0.02] transition-colors" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2 py-1 bg-cyan-400/10 text-cyan-400 text-[10px] font-mono rounded uppercase tracking-widest">{job.category}</span>
                  <span className="text-gray-600 text-[10px] font-mono">•</span>
                  <span className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">{job.type}</span>
                </div>
                <h3 className="text-2xl font-display font-bold group-hover:text-cyan-400 transition-colors">{job.title}</h3>
                <div className="flex items-center gap-6 mt-4 text-gray-500 font-mono text-xs">
                  <div className="flex items-center gap-2"><MapPin size={12} /> {job.location}</div>
                  <div className="flex items-center gap-2 text-emerald-400/60 font-medium">{job.compensation}</div>
                </div>
              </div>

              <button 
                onClick={() => setSelectedJob(job.title)}
                className="relative z-10 w-fit button-primary px-8 py-3 text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all"
              >
                APPLY_NOW <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </section>

        <ApplicationModal 
          isOpen={!!selectedJob} 
          onClose={() => setSelectedJob(null)} 
          jobTitle={selectedJob || ''} 
        />

        <section className="mt-32 pt-32 border-t border-white/5">
           <div className="grid md:grid-cols-3 gap-12">
              <div>
                 <div className="text-cyan-400 mb-4"><Briefcase size={32} /></div>
                 <h4 className="text-xl font-display font-bold mb-4 uppercase">AUTONOMY_CORE</h4>
                 <p className="text-gray-500 text-sm leading-relaxed">No micromanagement. You own your nodes. We measure results, not mouse movements.</p>
              </div>
              <div>
                 <div className="text-purple-400 mb-4"><Clock size={32} /></div>
                 <h4 className="text-xl font-display font-bold mb-4 uppercase">DEEP_RESTORATION</h4>
                 <p className="text-gray-500 text-sm leading-relaxed">Unlimited PTO, mental performance coaching, and mandatory focus seasons.</p>
              </div>
              <div>
                 <div className="text-emerald-400 mb-4"><Zap size={32} /></div>
                 <h4 className="text-xl font-display font-bold mb-4 uppercase">VENTURE_UPSIDE</h4>
                 <p className="text-gray-500 text-sm leading-relaxed">Competitive base salaries paired with aggressive equity targets in our research patents.</p>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};
