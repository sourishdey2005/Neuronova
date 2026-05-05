import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Cpu, Globe, Zap, Users, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[10px] font-mono text-cyan-400 mb-6 uppercase tracking-[0.4em] flex items-center gap-4">
               <span className="w-12 h-[1px] bg-cyan-400/30"></span> 
               COGNITIVE ARCHITECTURE LAB
            </div>
            <h1 className="text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter leading-[0.85] mb-12">
              BEYOND THE <br />
              <span className="text-white/20">ALGORITHMIC</span> <br />
              HORIZON
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl font-sans leading-relaxed max-w-2xl">
              NeuroNova Lab is a research-first collective dedicated to architecting the next generation of high-dimensional intelligence. We don't just build models; we design the cognitive substrates of the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy / Vision Section */}
      <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="text-[10px] font-mono text-cyan-400 mb-6 uppercase tracking-[0.4em]">MISSION_STATEMENT</div>
            <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-12">
              INTELLIGENCE AS A <br /><span className="text-white/20">FOUNDATIONAL</span> FORCE
            </h2>
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <p className="text-gray-400 text-lg leading-relaxed font-sans">
                At NeuroNova, we view intelligence not as a utility, but as a fundamental force of nature. Our research bridges the gap between biological neural dynamics and silicon efficiency, creating systems that adapt and reason with unprecedented depth.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed font-mono uppercase tracking-tight italic border-l border-cyan-400/30 pl-8 flex items-center">
                Towards a future where cognitive substrates are as reliable as the laws of physics.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: <Shield size={18} />, title: "ETHICAL_ALIGNMENT", desc: "Foundational safety protocols integrated into core logic." },
                { icon: <Zap size={18} />, title: "PEAK_EFFICIENCY", desc: "Minimal computational footprint via synaptic pruning." },
                { icon: <Target size={18} />, title: "GLOBAL_SCALE", desc: "Mesh-ready architectures for infinite parallelization." }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="text-cyan-400/50">{item.icon}</div>
                  <h4 className="text-xs font-display font-bold uppercase tracking-[0.2em]">{item.title}</h4>
                  <p className="text-[11px] text-gray-500 font-mono leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Roadmap - How We Deliver */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <div className="text-[10px] font-mono text-cyan-400 mb-6 uppercase tracking-[0.4em]">SYSTEM_MODELS</div>
            <h2 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter leading-none">
              ENGINEERING <br /><span className="text-white/20">METHODOLOGY</span>
            </h2>
          </div>

          <div className="space-y-48">
            {/* Step 01: Velocity */}
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="relative">
                <div className="absolute -left-8 top-0 text-7xl font-display font-bold text-white/5">01</div>
                <div className="text-[10px] font-mono text-cyan-400 mb-4 uppercase tracking-[0.3em]">ACCELERATION</div>
                <h3 className="text-4xl font-display font-bold uppercase mb-6 tracking-tight">AI-AUGMENTED <br />DEVELOPMENT</h3>
                <p className="text-gray-400 leading-relaxed font-sans mb-8">
                  Our engineering workflows are augmented by proprietary neural agents that handle code review, test generation, and architectural evaluation. This integration allows us to bridge the gap from concept to deployment 5x faster than traditional product teams.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border border-white/5 bg-white/[0.02] rounded">
                    <div className="text-xl font-display font-bold text-white mb-1">60%</div>
                    <div className="text-[9px] font-mono text-gray-500 uppercase">Faster Delivery</div>
                  </div>
                  <div className="p-4 border border-white/5 bg-white/[0.02] rounded">
                    <div className="text-xl font-display font-bold text-white mb-1">100%</div>
                    <div className="text-[9px] font-mono text-gray-500 uppercase">In-house Tooling</div>
                  </div>
                </div>
              </div>
              <div className="aspect-video glass-card tech-border bg-white/5 relative overflow-hidden flex items-center justify-center">
                <div className="text-[10px] font-mono text-cyan-400 opacity-20 uppercase tracking-[1em] animate-pulse">SYNCHRONIZING</div>
              </div>
            </div>

            {/* Step 02: Infrastructure */}
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="order-2 lg:order-1 aspect-video glass-card tech-border bg-purple-500/5 flex items-center justify-center">
                <div className="w-full max-w-xs space-y-2 opacity-30">
                  <div className="h-1 bg-purple-400/50 w-full" />
                  <div className="h-1 bg-purple-400/30 w-3/4" />
                  <div className="h-1 bg-purple-400/20 w-1/2" />
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="absolute -left-8 top-0 text-7xl font-display font-bold text-white/5">02</div>
                <div className="text-[10px] font-mono text-purple-400 mb-4 uppercase tracking-[0.3em]">COMPUTE_LAYER</div>
                <h3 className="text-4xl font-display font-bold uppercase mb-6 tracking-tight">PROPRIETARY <br />INFRASTRUCTURE</h3>
                <p className="text-gray-400 leading-relaxed font-sans mb-8">
                  We operate a dedicated H-class GPU cluster. By owning the silicon substrate, we eliminate cloud markups and vendor lock-in, providing our clients with high-performance compute at hardware economics.
                </p>
                <ul className="space-y-4 font-mono text-[10px] text-gray-500 uppercase italic">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-purple-400" /> Dedicated hardware allocation</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-purple-400" /> Zero cloud-vendor premiums</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-purple-400" /> Secure on-premise execution</li>
                </ul>
              </div>
            </div>

            {/* Step 03: Bespoke */}
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="relative">
                <div className="absolute -left-8 top-0 text-7xl font-display font-bold text-white/5">03</div>
                <div className="text-[10px] font-mono text-emerald-400 mb-4 uppercase tracking-[0.3em]">SOLUTIONS</div>
                <h3 className="text-4xl font-display font-bold uppercase mb-6 tracking-tight">ENGINEERED <br />SYSTEMS</h3>
                <p className="text-gray-400 leading-relaxed font-sans mb-8">
                  Custom AI tools and SaaS products built to your specific brief. We design, deploy, and maintain the entire ecosystem, ensuring your intellectual property remains secure and your performance remains optimal.
                </p>
                <div className="flex flex-wrap gap-2 uppercase font-mono text-[9px]">
                  <span className="px-3 py-1 border border-white/10 rounded-full">Autonomous Agents</span>
                  <span className="px-3 py-1 border border-white/10 rounded-full">RAG Architectures</span>
                  <span className="px-3 py-1 border border-white/10 rounded-full">Deep Learning</span>
                </div>
              </div>
              <div className="aspect-video glass-card tech-border bg-emerald-500/5 flex items-center justify-center">
                <div className="text-center font-display font-bold uppercase text-white/10 text-2xl tracking-[0.5em]">BESPOKE</div>
              </div>
            </div>

            {/* Step 04: Public Products */}
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="order-2 lg:order-1 aspect-video glass-card tech-border bg-blue-500/5 flex items-center justify-center">
                <div className="p-8 w-full">
                  <div className="h-32 border border-white/5 rounded relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 tech-grid opacity-10" />
                    <div className="text-[8px] font-mono text-blue-400 animate-pulse">SUBSCRIPTION_READY</div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="absolute -left-8 top-0 text-7xl font-display font-bold text-white/5">04</div>
                <div className="text-[10px] font-mono text-blue-400 mb-4 uppercase tracking-[0.3em]">ACCESSIBILITY</div>
                <h3 className="text-4xl font-display font-bold uppercase mb-6 tracking-tight">RESEARCH <br />ECOSYSTEMS</h3>
                <p className="text-gray-400 leading-relaxed font-sans mb-8">
                  Beyond bespoke client work, we deploy scalable public AI products. These tools leverage our internal infrastructure to provide users with high-fidelity intelligence at scale, with no maintenance required.
                </p>
                <button className="text-[10px] font-mono text-blue-400 flex items-center gap-2 hover:gap-4 transition-all">
                  EXPLORE_REGISTRY <ArrowRight size={12} />
                </button>
              </div>
            </div>

            {/* Step 05: Enterprise */}
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="relative">
                <div className="absolute -left-8 top-0 text-7xl font-display font-bold text-white/5">05</div>
                <div className="text-[10px] font-mono text-amber-400 mb-4 uppercase tracking-[0.3em]">DEDICATIONS</div>
                <h3 className="text-4xl font-display font-bold uppercase mb-6 tracking-tight">ENTERPRISE <br />CLUSTERS</h3>
                <p className="text-gray-400 leading-relaxed font-sans mb-8">
                  For organizations requiring absolute isolation, we deploy private AI clusters on-premise or in dedicated data centers. Complete control, 24/7 monitoring, and 70% cheaper than hyperscale cloud providers.
                </p>
                <div className="bg-amber-400/5 border border-amber-400/20 p-6 rounded">
                  <div className="text-[8px] font-mono text-amber-400 mb-2 uppercase">Secure Protocol Check:</div>
                  <div className="text-sm font-sans italic text-gray-400">"Your box. Your rules. Our engineering."</div>
                </div>
              </div>
              <div className="aspect-video glass-card tech-border bg-amber-500/5 flex items-center justify-center">
                <div className="w-12 h-12 border-2 border-amber-400/20 rounded-full animate-ping" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section - Why NeuroNova */}
      <section className="py-32 px-6 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="text-[10px] font-mono text-cyan-400 mb-6 uppercase tracking-[0.4em]">ADVANTAGE_PROTOCOL</div>
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter italic">ADVANCED TECH <br /><span className="text-white/20">HONEST</span> LOGIC</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="glass-card tech-border p-8 border border-white/5">
              <div className="text-4xl font-display font-bold text-cyan-400 mb-4">-60%</div>
              <h4 className="text-sm font-display font-bold uppercase tracking-widest mb-2">TIME_TO_SHIP</h4>
              <p className="text-gray-500 text-xs font-mono">AI-assisted dev pipelines and internal agents allow us to hit MVPs in weeks, not months.</p>
            </div>
            <div className="glass-card tech-border p-8 border border-white/5">
              <div className="text-4xl font-display font-bold text-purple-400 mb-4">-65%</div>
              <h4 className="text-sm font-display font-bold uppercase tracking-widest mb-2">INFRA_OVERHEAD</h4>
              <p className="text-gray-500 text-xs font-mono">Self-hosted GPU clusters mean no cloud mark-ups on your bill. We own the metal.</p>
            </div>
            <div className="glass-card tech-border p-8 border border-white/5">
              <div className="text-4xl font-display font-bold text-white mb-4">100%</div>
              <h4 className="text-sm font-display font-bold uppercase tracking-widest mb-2">IP_OWNERSHIP</h4>
              <p className="text-gray-500 text-xs font-mono">Your code, your cluster, your customers. We build it, you own the entire result.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-48 px-6 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-1 h-24 bg-gradient-to-b from-cyan-400 to-transparent mx-auto mb-12" />
          <h2 className="text-3xl md:text-5xl font-display italic font-bold tracking-tight mb-12">
            "We are not predicting the future. We are building the machinery that computes it."
          </h2>
          <div className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.4em]">DR. ELARA VANCE // FOUNDING ARCHITECT</div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-[10px] font-mono text-cyan-400 mb-8 uppercase tracking-[0.4em]">INITIATE_ONBOARDING</div>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-12">JOIN THE <span className="text-white/20">REVOLUTION</span></h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="button-primary py-4 px-10 text-xs font-bold uppercase tracking-widest">VIEW_OPEN_POSITIONS</button>
            <button className="button-secondary py-4 px-10 text-xs font-bold uppercase tracking-widest">GET_IN_TOUCH</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
