import { motion } from 'motion/react';
import { Send, Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import React, { useState } from 'react';

export const ContactPage = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'AI/ML Research Integration',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    try {
      // Note: In a real scenario, you would use a Google Apps Script Web App URL
      // Since we don't have the URL yet, we show how to implement it.
      // The user will need to provide the deployed Web App URL.
      const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SHEET_WEBAPP_URL || '';
      
      if (!SCRIPT_URL) {
        console.warn('Google Sheets Web App URL not found. Mocking successful submission.');
        await new Promise(resolve => setTimeout(resolve, 1500));
        setFormState('success');
        return;
      }

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setFormState('success');
      setFormData({ name: '', email: '', interest: 'AI/ML Research Integration', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setFormState('error');
    }
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
              <h2 className="text-3xl font-display uppercase font-bold text-white">Transmission Received</h2>
              <p className="text-gray-500 font-mono text-sm max-w-xs">
                Your data has been encrypted and successfully logged in our central registry. Expect a response in 24-48 cycles.
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
              {formState === 'error' && (
                <div className="p-4 bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs font-mono mb-6">
                  ERROR: FAILED_TO_LOG_TRANSMISSION. RETRY_LATER.
                </div>
              )}
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">IDENTIFICATION [NAME]</label>
                <input 
                  required
                  name="name"
                  type="text" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Subject name..."
                  className="w-full bg-white/5 border border-white/10 p-4 font-sans focus:border-cyan-400 outline-none transition-all placeholder:text-gray-700 text-white" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">NETWORK ADDRESS [EMAIL]</label>
                <input 
                  required
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="contact@network.host"
                  className="w-full bg-white/5 border border-white/10 p-4 font-sans focus:border-cyan-400 outline-none transition-all placeholder:text-gray-700 text-white" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">COLLABORATION INTEREST</label>
                <select 
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 p-4 font-sans focus:border-cyan-400 outline-none transition-all text-gray-400"
                >
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
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
