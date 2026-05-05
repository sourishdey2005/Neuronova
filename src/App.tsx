import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Menu, X, Cpu, Beaker, FolderCode, Zap, Mail, BookOpen, Users, ArrowRight, TrendingUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// Page Imports
import { ProjectsPage } from './pages/ProjectsPage';
import { ResearchPage } from './pages/ResearchPage';
import { TeamPage } from './pages/TeamPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';

import { NeuralNetwork3D } from './components/NeuralNetwork3D';
import { CryptoGlobeCanvas } from './components/CryptoGlobe3D';
import { NeuralGlobe3D } from './components/NeuralGlobe3D';
import { DataFabricEngine3D } from './components/DataFabricEngine3D';

const DataScienceIntelligenceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[150vh] overflow-hidden bg-black/20">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {/* Background Canvas */}
        <div className="absolute inset-0 z-0">
          <DataFabricEngine3D scrollYProgress={scrollYProgress} mousePos={mousePos} />
        </div>

        {/* Technical Overlays */}
        <div className="absolute inset-0 pointer-events-none z-10 px-10">
          <div className="absolute top-1/4 left-10">
             <div className="text-[10px] font-mono text-emerald-400 mb-2 tracking-[0.3em]">DATA_LIFECYCLE</div>
             <div className="w-48 h-[1px] bg-emerald-400/20" />
             <div className="mt-4 space-y-2">
                {['INGEST', 'TRANSFORM', 'VECTORIZE', 'SYNTHESIZE'].map((s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-emerald-400/40 rounded-full" />
                    <div className="text-[8px] font-mono text-gray-500">{s}</div>
                  </div>
                ))}
             </div>
          </div>
          
          <div className="absolute bottom-1/4 right-10 text-right">
             <div className="text-[10px] font-mono text-purple-400 mb-2 tracking-[0.3em]">PROCESSING_LOAD</div>
             <div className="w-48 h-[1px] bg-purple-400/20 ml-auto" />
             <div className="mt-4 flex flex-col items-end gap-1">
                {[...Array(4)].map((_, i) => (
                   <div key={i} className="flex gap-1">
                      {[...Array(8)].map((_, j) => (
                        <motion.div 
                          key={j} 
                          animate={{ opacity: [0.1, 0.5, 0.1] }} 
                          transition={{ duration: 1, delay: (i + j) * 0.1, repeat: Infinity }}
                          className="w-2 h-2 bg-purple-400/20" 
                        />
                      ))}
                   </div>
                ))}
             </div>
          </div>
        </div>

        <div className="relative z-20 text-center max-w-4xl px-6 pointer-events-none">
           <motion.div 
             style={{ 
               opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]),
               y: useTransform(scrollYProgress, [0, 1], [20, -20])
             }}
             className="space-y-6"
           >
              <h2 className="text-6xl md:text-8xl font-display uppercase font-bold tracking-tighter leading-none">
                DATA <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">FABRIC</span> ENGINE
              </h2>
              <p className="text-gray-400 font-mono text-xs uppercase tracking-[0.5em]">Real-time Intelligence Synthesis Pipeline</p>
              
              <div className="flex justify-center gap-12 mt-12">
                 <div className="text-center group">
                    <div className="text-[8px] font-mono text-emerald-400/50 mb-1">LATENCY</div>
                    <div className="text-xl font-mono text-white tracking-widest">0.02ms</div>
                 </div>
                 <div className="text-center group border-l border-white/5 pl-12">
                    <div className="text-[8px] font-mono text-purple-400/50 mb-1">THROUGHPUT</div>
                    <div className="text-xl font-mono text-white tracking-widest">12.4 PB/S</div>
                 </div>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

const NeuralIntelligenceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[150vh] overflow-hidden">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {/* Background Neural Mist / Space */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.1, 1, 1, 0.1]) }}
          className="absolute inset-0 z-0"
        >
          <NeuralGlobe3D scrollYProgress={scrollYProgress} mousePos={mousePos} />
        </motion.div>

        {/* Technical Overlays */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-20 left-10 text-[10px] font-mono text-cyan-400 group">
             <div className="flex items-center gap-3 mb-2">
               <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
               SERVER_LOAD: OPTIMAL [0.04s]
             </div>
             <motion.div initial={{ width: 0 }} whileInView={{ width: 120 }} className="h-[1px] bg-cyan-400/30" />
          </div>
          <div className="absolute bottom-20 right-10 text-right text-[10px] font-mono text-purple-400">
             <div className="mb-2">MODEL_SYNC_RATE: 99.98%</div>
             <div className="flex justify-end gap-1">
               {[...Array(5)].map((_, i) => (
                 <motion.div key={i} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }} className="w-1 h-3 bg-purple-400/40" />
               ))}
             </div>
          </div>
        </div>

        <div className="relative z-20 text-center max-w-4xl px-6">
           <motion.div 
             style={{ 
               opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]),
               scale: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.95, 1, 1, 0.95])
             }}
             className="space-y-6"
           >
              <h2 className="text-6xl md:text-8xl font-display uppercase font-bold tracking-tighter leading-none">
                NEURAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">PLANETARY</span> NETWORK
              </h2>
              <p className="text-gray-400 font-mono text-xs uppercase tracking-[0.5em]">Global Decentralized Intelligence Core</p>
              
              <div className="h-24 relative overflow-hidden flex items-center justify-center">
                 {[
                   "DISTRIBUTED_MODEL_INFERENCE_ONLINE",
                   "REAL_TIME_GRADIENT_UPDATE_SYNC",
                   "MULTIMODAL_LATENT_SPACE_EXPANSION"
                 ].map((text, i) => {
                   const start = i * 0.33; const end = (i + 1) * 0.33;
                   return (
                     <motion.div 
                       key={i}
                       style={{ 
                         opacity: useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]),
                         y: useTransform(scrollYProgress, [start, end], [20, -20])
                       }}
                       className="absolute text-cyan-400/60 font-mono text-sm tracking-widest"
                     >
                       {text}
                     </motion.div>
                   );
                 })}
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

const HeroScene = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotateHero = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const scaleHero = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const width = rect.width || window.innerWidth;
      const height = rect.height || window.innerHeight;
      setMousePos({
        x: (e.clientX - rect.left) / width - 0.5,
        y: (e.clientY - rect.top) / height - 0.5,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative px-6 flex flex-col items-center justify-center min-h-screen text-center overflow-hidden">
      {/* 3D WebGL Background */}
      <NeuralNetwork3D mousePos={mousePos} scrollY={scrollYProgress} />

      <motion.div style={{ y: y1, rotate: rotateHero, x: mousePos.x * 50 }} className="absolute inset-0 tech-grid -z-20 opacity-10 scale-[2] pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 flex items-center justify-center pointer-events-none">
        <motion.div style={{ rotateX: mousePos.y * -20, rotateY: mousePos.x * 20, scale: scaleHero }} className="w-[800px] h-[800px] rounded-full relative preserve-3d flex items-center justify-center">
          <div className="absolute inset-0 bg-cyan-500/5 blur-[140px] animate-pulse" />
          <div className="relative z-20">
            <Cpu size={140} className="text-cyan-400/20 drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]" />
          </div>
          
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-white/5" />
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute inset-10 rounded-full border border-cyan-400/10" />
        </motion.div>
      </div>
      
      <motion.div initial={{ opacity: 1, scale: 1 }} style={{ x: mousePos.x * -20, y: mousePos.y * -20 }} className="max-w-4xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-mono text-cyan-400 border border-cyan-400/30 bg-cyan-400/5 rounded-full backdrop-blur-sm"><Zap size={12} className="animate-pulse" /><span>NEURAL CORE V4.0 // ONLINE</span></motion.div>
        <h1 className="text-6xl md:text-9xl font-display font-bold mb-8 leading-[0.8] uppercase tracking-tighter"><span className="block">NEURO</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400">NOVA LAB</span></h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-sans leading-relaxed">Architecting high-dimensional intelligence at the intersection of neural networks and biological data synthesis. No compromises.</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap items-center justify-center gap-6"><Link to="/projects" className="group button-primary py-4 px-8 flex items-center gap-3">EXPLORE NODES <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></Link><Link to="/contact" className="button-secondary py-4 px-8">INITIATE COLLAB</Link></motion.div>
      </motion.div>

      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"><span className="text-[10px] font-mono tracking-widest">SCROLL</span><div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" /></motion.div>
    </section>
  );
};

const MarketIntelligenceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const tokens = [
    { name: 'BTC', price: '$64,281', change: '+2.4%', color: 'text-orange-400' },
    { name: 'ETH', price: '$3,412', change: '+1.8%', color: 'text-purple-400' },
    { name: 'SOL', price: '$142.5', change: '+5.2%', color: 'text-cyan-400' },
    { name: 'NOVA', price: '$1.08', change: '+12.4%', color: 'text-emerald-400' },
  ];

  return (
    <section ref={sectionRef} className="relative h-[150vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        {/* Market Ticker */}
        <div className="absolute top-0 left-0 w-full z-20 py-4 bg-emerald-500/5 backdrop-blur-md border-b border-white/5 overflow-hidden">
          <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center gap-12">
                {tokens.map(token => (
                  <div key={token.name} className="flex items-center gap-3"><span className="font-mono text-[10px] text-gray-500">{token.name}</span><span className="font-mono text-xs text-white">{token.price}</span><span className={`font-mono text-[10px] ${token.change.includes('+') ? 'text-emerald-400' : 'text-rose-400'}`}>{token.change}</span></div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        {/* 3D Crypto Globe Canvas */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.1, 1, 1, 0.1]) }}
          className="absolute inset-0 z-0"
        >
          <CryptoGlobeCanvas scrollYProgress={scrollYProgress} mousePos={mousePos} />
        </motion.div>

        <div className="absolute inset-0 pointer-events-none z-10"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-emerald-500/5 blur-[180px] rounded-full animate-pulse-slow" /></div>
        
        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-24 items-center relative z-20">
           <div className="relative">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[10px] font-mono text-emerald-400 mb-6 uppercase tracking-[0.4em] flex items-center gap-3"
              >
                <span className="w-8 h-[1px] bg-emerald-400/30" />NEURAL QUANTITATIVE SYSTEMS
              </motion.div>
              <h2 className="text-5xl md:text-8xl font-display uppercase font-bold tracking-tighter mb-12 leading-[0.85]">MARKET <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-[length:200%_auto] animate-gradient-flow">INTELLIGENCE</span></h2>
              
              <div className="relative h-96">
                {[
                  { title: "ALPHA_GENESIS", desc: "Recursive neural networks analyzing multi-exchange order books to extract high-fidelity alpha signals in microseconds.", color: "text-emerald-400", stats: ["LATENCY: 0.8ms", "CONFIDENCE: 99.4%"] },
                  { title: "QUANT_MESH", desc: "Decentralized execution protocol that fragments orders across 12,000 global nodes to eliminate slippage and MEV front-running.", color: "text-cyan-400", stats: ["NODES: 12.4k", "SLIPPAGE: 0.001%"] },
                  { title: "NEURAL_ARBITRAGE", desc: "Sub-millisecond cross-chain liquidity analysis utilizing predictive temporal models for zero-risk variance extraction.", color: "text-purple-400", stats: ["CROSS-CHAIN: 18", "VOLATILITY: ADAPTIVE"] }
                ].map((item, i) => {
                  const start = i * 0.33; const end = (i + 1) * 0.33;
                  const opacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
                  const y = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [20, 0, 0, -20]);
                  return (
                    <motion.div key={i} style={{ opacity, y }} className="absolute inset-0 pointer-events-none">
                      <h4 className={`text-4xl font-display uppercase font-bold mb-6 ${item.color} tracking-tight`}>{item.title}</h4>
                      <p className="text-gray-400 text-xl leading-relaxed font-sans max-w-md mb-8">{item.desc}</p>
                      <div className="flex gap-8 border-l-2 border-emerald-500/20 pl-8 mt-auto">{item.stats.map((stat, idx) => (<div key={idx} className="group/stat"><div className="text-[10px] font-mono text-gray-600 uppercase mb-2 tracking-widest">{stat.split(': ')[0]}</div><div className="text-lg font-mono text-white group-hover:text-emerald-400 transition-colors">{stat.split(': ')[1]}</div></div>))}</div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-16 flex flex-wrap gap-6 relative z-30">
                 {[ 
                   { label: 'WALLET_SYNC', icon: <Zap size={16} />, detail: 'CONNECTED_NODES: 1.2k' }, 
                   { label: 'EXCHANGE_LINK', icon: <TrendingUp size={16} />, detail: 'LIQUIDITY_DEPTH: ACTIVE' } 
                 ].map((mod, i) => (
                   <motion.div
                     key={i}
                     whileHover={{ scale: 1.02, y: -5 }}
                     className="group relative"
                   >
                     <button className="px-8 py-4 tech-border glass-card bg-emerald-400/5 hover:bg-emerald-400/10 transition-all text-xs font-mono text-emerald-400 uppercase tracking-[0.2em] flex items-center gap-4 border border-emerald-400/20 backdrop-blur-xl">
                       {mod.icon}
                       <span>{mod.label}</span>
                       <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                     </button>
                     <div className="absolute top-full left-0 mt-4 opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
                        <div className="glass-card tech-border p-3 border border-emerald-400/10 bg-black/80">
                           <div className="text-[8px] font-mono text-gray-500 tracking-tighter">{mod.detail}</div>
                           <div className="w-full h-1 bg-emerald-400/20 mt-2 overflow-hidden">
                              <motion.div initial={{ x: '-100%' }} animate={{ x: '100%' }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1/2 h-full bg-emerald-400" />
                           </div>
                        </div>
                     </div>
                   </motion.div>
                 ))}
              </div>
           </div>

           <div className="relative h-[60vh] flex items-center justify-center">
              {/* Interaction Details Overlay */}
              <div className="absolute top-0 right-0 z-10 glass-card tech-border p-6 border border-white/5 bg-black/40 backdrop-blur-md">
                 <div className="text-[10px] font-mono text-emerald-400 animate-pulse mb-3 uppercase tracking-widest">LIVE_TRANSFERS</div>
                 <div className="space-y-4">
                    {[
                      { id: '0x71...f2e', amount: '+12.4 ETH', time: 'LIVE' },
                      { id: '0x1c...9b8', amount: '-4.8 BTC', time: 'WAITING' }
                    ].map((tx, i) => (
                      <div key={i} className="flex flex-col gap-1">
                        <div className="text-[8px] font-mono text-gray-500">{tx.id}</div>
                        <div className="text-xs font-mono text-white flex justify-between items-center gap-4">
                          <span>{tx.amount}</span>
                          <span className="text-[8px] px-1 bg-emerald-500/20 text-emerald-400 rounded">{tx.time}</span>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
              
              <div className="absolute bottom-0 left-0 z-10 glass-card tech-border p-6 border border-white/5 bg-black/40 backdrop-blur-md">
                 <div className="text-[10px] font-mono text-cyan-400 mb-3 uppercase tracking-widest">NETWORK_LATENCY</div>
                 <div className="flex items-end gap-1 h-8">
                    {[...Array(12)].map((_, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ height: 4 }}
                        animate={{ height: 4 + Math.random() * 24 }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse', delay: i * 0.05 }}
                        className="w-1 bg-cyan-400/40"
                      />
                    ))}
                 </div>
                 <div className="text-xs font-mono text-white mt-2">0.08ms</div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: (e.clientX / window.innerWidth) - 0.5, y: (e.clientY / window.innerHeight) - 0.5 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative space-y-0 overflow-hidden bg-[#050505] selection:bg-cyan-500/30">
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div style={{ background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, rgba(34, 211, 238, 0.08) 0%, transparent 50%)` }} className="absolute inset-0" />
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 opacity-20"><div className="absolute top-[10%] left-[5%] w-[800px] h-[800px] bg-cyan-500/10 blur-[150px] rounded-full mix-blend-screen" /><div className="absolute bottom-[10%] right-[5%] w-[1000px] h-[1000px] bg-purple-500/10 blur-[180px] rounded-full mix-blend-screen" /></motion.div>
      </div>

      <div className="relative z-10">
        <HeroScene />
        
        {/* Cognitive Core Visualization */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-24">
               <div className="flex-1 order-2 lg:order-1">
                  <div className="text-[10px] font-mono text-cyan-400 mb-6 uppercase tracking-[0.4em]">NEURAL_CORE_V4</div>
                  <h2 className="text-5xl md:text-8xl font-display uppercase font-bold tracking-tighter mb-8 leading-[0.85]">THE <span className="text-white/20">SILENT</span> <br/>BRAIN</h2>
                  <p className="text-gray-400 text-xl font-sans leading-relaxed mb-12 max-w-lg">Witness the convergence of organic intuition and silicon precision. Our core architecture processes 4.8 quadrillion synaptic events per millisecond.</p>
                  <div className="flex flex-wrap gap-4"><button className="button-primary py-4 px-8 text-xs">INITIALIZE_LINK</button></div>
               </div>
               <div className="flex-1 order-1 lg:order-2 relative aspect-square glass-card tech-border p-12 flex items-center justify-center">
                  <div className="w-64 h-64 border border-cyan-400/20 rounded-full animate-spin-slow absolute" />
                  <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }} className="w-32 h-32 bg-cyan-400/10 rounded-full flex items-center justify-center border border-cyan-400/40 relative"><Cpu size={48} className="text-cyan-400" /></motion.div>
               </div>
            </div>
          </div>
        </section>

        <section className="py-12 border-y border-white/10 bg-black overflow-hidden pointer-events-none"><div className="flex animate-marquee whitespace-nowrap gap-12">{[...Array(10)].map((_, i) => <span key={i} className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.5em]">DECRYPTING_FINANCIAL_STREAM // NODE_LINK_READY</span>)}</div></section>
        
        <MarketIntelligenceSection />
        <NeuralIntelligenceSection />
        <DataScienceIntelligenceSection />

        <section className="relative py-32 px-6"><div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center"><div><div className="text-[10px] font-mono text-cyan-400 mb-6 uppercase tracking-[0.4em]">SYSTEM TOPOLOGY</div><h2 className="text-5xl md:text-7xl font-display uppercase font-bold tracking-tighter mb-8 leading-tight">GLOBAL <br/><span className="text-white/20">INFRASTRUCTURE</span></h2><p className="text-gray-400 text-lg mb-12 max-w-xl">NeuroNova operates across a decentralized mesh of 12,000+ nodes, ensuring sub-10ms latency for global neural synchronization.</p>
            <div className="flex items-center gap-6 mt-8">
              <div className="w-24 h-24 tech-border glass-card p-4 flex items-center justify-center">
                <img 
                  src="https://res.cloudinary.com/dodhvvewu/image/upload/v1777982271/123b0cdb-1074-4cfd-9954-0f6fed36f089_zmu6h1.png" 
                  alt="NeuroNova Logo" 
                  className="w-full h-full object-contain opacity-90 brightness-110"
                />
              </div>
              <div className="h-12 w-[1px] bg-white/10" />
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-relaxed">
                OFFICIAL<br />LABORATORY<br />CERTIFIED
              </div>
            </div>
          </div><div className="relative aspect-square tech-border glass-card flex items-center justify-center overflow-hidden"><div className="absolute inset-0 opacity-10 tech-grid" /><div className="w-32 h-32 tech-border flex items-center justify-center p-4 bg-cyan-400/5 text-cyan-400 font-mono text-[8px] text-center uppercase tracking-widest">NODE_ALPHA<br/>STATUS: OK</div></div></div></section>
        
        <section className="px-6 py-48 bg-white/[0.01] relative overflow-hidden"><div className="absolute inset-0 tech-grid opacity-10" /><motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto text-center relative z-10"><h2 className="text-4xl md:text-6xl font-display mb-12 uppercase tracking-tighter italic font-bold">"The stars of the next century will be built from neurons, not fusion."</h2><div className="w-16 h-1 bg-cyan-400 mx-auto mb-8" /><p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.4em]">NEURONOVA LABORATORY MANIFESTO // V4.2.1</p></motion.div></section>
      </div>
    </div>
  );
};

const About = () => (
  <div className="max-w-4xl mx-auto px-6 py-24">
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <div className="text-[10px] font-mono text-cyan-400 mb-4 uppercase tracking-[0.3em]">ORIGIN STORY</div>
      <h1 className="text-6xl font-display mb-12 uppercase tracking-tight font-bold">The <br/><span className="text-white/20">Architectural</span> Shift</h1>
      <div className="grid md:grid-cols-2 gap-12 text-gray-400 leading-relaxed font-sans text-lg lg:text-xl"><p>NeuroNova Lab was founded in 2024 to bridge the gap between abstract neural theory and industrial application.</p><p>Intelligence is the ultimate resource, and we are here to master it.</p></div>
    </motion.div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = [ { name: 'About', path: '/about', icon: <Users size={18} /> }, { name: 'Research', path: '/research', icon: <BookOpen size={18} /> }, { name: 'Projects', path: '/projects', icon: <FolderCode size={18} /> }, { name: 'Team', path: '/team', icon: <Users size={18} /> }, { name: 'Blog', path: '/blog', icon: <Zap size={18} /> } ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group"><div className="w-10 h-10 tech-border glass-card flex items-center justify-center group-hover:border-cyan-400 transition-colors overflow-hidden"><img src="https://res.cloudinary.com/dodhvvewu/image/upload/v1777982271/123b0cdb-1074-4cfd-9954-0f6fed36f089_zmu6h1.png" alt="Logo" className="w-full h-full object-cover"/></div><span className="font-display font-bold text-xl uppercase italic">NeuroNova Lab</span></Link>
        <div className="hidden md:flex items-center gap-8">{navLinks.map((link) => (<Link key={link.path} to={link.path} className={`text-sm font-mono tracking-wider transition-colors hover:text-white ${location.pathname === link.path ? 'text-white' : 'text-gray-500'}`}>{link.name.toUpperCase()}</Link>))}<Link to="/contact" className="button-primary py-1.5 px-4 text-xs font-mono">COLLABORATE</Link></div>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
      <AnimatePresence>{isOpen && (<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-20 left-0 w-full bg-[#050505] border-b border-white/10 p-6 flex flex-col gap-6 md:hidden">{navLinks.map((link) => (<Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">{link.icon}<span className="font-display text-lg">{link.name}</span></Link>))}</motion.div>)}</AnimatePresence>
    </nav>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <footer className="border-t border-white/10 py-12 px-6 mt-32">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-sm">
            <div className="col-span-2"><div className="flex items-center gap-3 mb-6 font-display font-bold text-lg uppercase italic">NeuroNova Lab</div><p className="text-gray-500 max-w-sm mb-6">Redefining the cognitive landscape through neural architecture and ethical research.</p></div>
            <div><h4 className="text-white font-display mb-4 uppercase tracking-widest text-xs">Navigation</h4><ul className="space-y-2 text-gray-500 font-mono"><li><Link to="/about" className="hover:text-white">ABOUT</Link></li><li><Link to="/projects" className="hover:text-white">PROJECTS</Link></li><li><Link to="/research" className="hover:text-white">RESEARCH</Link></li></ul></div>
            <div><h4 className="text-white font-display mb-4 uppercase tracking-widest text-xs">Contact</h4><p className="text-gray-500 font-mono">LAB@NEURONOVA.TECH</p><p className="text-gray-500 font-mono mt-2">SILICON VALLEY, CA</p></div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
