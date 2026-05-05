import { motion } from 'motion/react';
import { Send, Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import React, { useState } from 'react';

export const ContactPage = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
        setFormState('success');
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-24">
        <div>
          <h1 className="text-6xl font-display mb-12 uppercase leading-tight">Initiate <br/><span className="text-white/20">Collaboration</span></h1>
          
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="p-4 bg-white/5 border border-white/10 rounded h-fit">
                <Mail className="text-cyan-400" size={24} />
              </div>
              <div>
                <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-1">Direct Comms</h4>
                <p className="text-xl font-display text-white">LAB@NEURONOVA.TECH</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="p-4 bg-white/5 border border-white/10 rounded h-fit">
                <MapPin className="text-purple-400" size={24} />
              </div>
              <div>
                <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-1">Geospatial Origin</h4>
                <p className="text-xl font-display text-white">BANGALORE, INDIA</p>
              </div>
            </div>

            <hr className="border-white/10" />

            <div className="flex gap-6">
              <a href="#" className="p-3 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors text-white/50 hover:text-white">
                <Github size={20} />
              </a>
              <a href="#" className="p-3 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors text-white/50 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors text-white/50 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="tech-border glass-card p-10 relative overflow-hidden">
          {formState === 'success' ? (
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="h-full flex flex-col items-center justify-center text-center space-y-6"
            >
              <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 rounded-full flex items-center justify-center mb-4">
                <Send size={32} />
              </div>
              <h2 className="text-3xl font-display uppercase font-bold text-white">Transmission Recieved</h2>
              <p className="text-gray-500 font-mono text-sm max-w-xs">
                Your data has been encrypted and routed to our research team. Expect a response in 24-48 cycles.
              </p>
              <button 
                onClick={() => setFormState('idle')}
                className="button-secondary text-xs"
              >
                SUBMIT ANOTHER LOG
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">IDENTIFICATION [NAME]</label>
                <input 
                  required
                  type="text" 
                  placeholder="Subject name..."
                  className="w-full bg-white/5 border border-white/10 p-4 font-sans focus:border-cyan-400 outline-none transition-all placeholder:text-gray-700 text-white" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">NETWORK ADDRESS [EMAIL]</label>
                <input 
                  required
                  type="email" 
                  placeholder="contact@network.host"
                  className="w-full bg-white/5 border border-white/10 p-4 font-sans focus:border-cyan-400 outline-none transition-all placeholder:text-gray-700 text-white" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">COLLABORATION INTEREST</label>
                <select className="w-full bg-white/5 border border-white/10 p-4 font-sans focus:border-cyan-400 outline-none transition-all text-gray-400">
                  <option>AI/ML Research Integration</option>
                  <option>Data Science Partnership</option>
                  <option>Media/Press Inquiry</option>
                  <option>Talent Application</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">ENCRYPTED MESSAGE</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Details of your request..."
                  className="w-full bg-white/5 border border-white/10 p-4 font-sans focus:border-cyan-400 outline-none transition-all placeholder:text-gray-700 resize-none text-white" 
                />
              </div>

              <button 
                type="submit"
                disabled={formState === 'submitting'}
                className="button-primary w-full py-4 flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {formState === 'submitting' ? 'UPLOADING...' : 'SEND TRANSMISSION'}
                <Send size={18} />
              </button>
            </form>
          )}

          {/* Decorative scanner line */}
          <style>{`
            @keyframes scan {
              0% { transform: translateY(0); }
              100% { transform: translateY(600px); }
            }
          `}</style>
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-[scan_3s_linear_infinite]" />
        </div>
      </div>
    </div>
  );
};
