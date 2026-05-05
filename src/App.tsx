import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Menu, X, Zap, ArrowRight, TrendingUp, Briefcase, BookOpen, Users, FolderCode } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

import { NeuralNetwork3D } from './components/NeuralNetwork3D';
import { CryptoGlobeCanvas } from './components/CryptoGlobe3D';
import { NeuralGlobe3D } from './components/NeuralGlobe3D';
import { DataFabricEngine3D } from './components/DataFabricEngine3D';

// Page Imports
import { ProjectsPage } from './pages/ProjectsPage';
import { ResearchPage } from './pages/ResearchPage';
import { TeamPage } from './pages/TeamPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { CareersPage } from './pages/CareersPage';
import AboutPage from './pages/AboutPage';

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
    <section ref={sectionRef} className="relative h-[200vh] bg-black/20">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background Canvas */}
        <div className="absolute inset-0 z-0">
          <DataFabricEngine3D scrollYProgress={scrollYProgress} mousePos={mousePos} />
        </div>

        <div className="absolute inset-0 tech-grid opacity-5 pointer-events-none" />
        
        {/* Content Overlays */}
        <div className="max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 transition-all">
          <motion.div 
            style={{ 
              opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
              y: useTransform(scrollYProgress, [0, 1], [30, -30])
            }}
            className="max-w-xl"
          >
             <div className="text-[10px] font-mono text-emerald-400 mb-6 tracking-[0.4em] flex items-center gap-3">
               <span className="w-12 h-[1px] bg-emerald-400/30"></span> DATA_SCIENCE_CORE
             </div>
             <h2 className="text-5xl md:text-7xl font-display uppercase font-bold tracking-tighter leading-none mb-8">
               DATA <span className="text-white/20">FABRIC</span> ENGINE
             </h2>
             <p className="text-gray-400 font-sans leading-relaxed text-lg">
               Our neural synthesizing pipeline processes multi-modal data streams at 12.4 PB/S, maintaining absolute structural integrity.
             </p>
          </motion.div>
          
          <motion.div 
             style={{ 
               opacity: useTransform(scrollYProgress, [0.1, 0.3, 0.9, 1], [0, 1, 1, 0])
             }}
             className="grid grid-cols-2 gap-4 w-full md:w-auto"
          >
             {[
               { label: 'INGESTION', stats: '0.02ms' },
               { label: 'VECTORIZE', stats: '99.9%' },
               { label: 'SYNTHESIS', stats: 'ACTIVE' },
               { label: 'ENCRYPTION', stats: 'SHADOW' }
             ].map((item, i) => (
               <div key={i} className="p-6 tech-border glass-card bg-emerald-400/5 flex flex-col gap-2 backdrop-blur-md">
                 <span className="text-[8px] font-mono text-emerald-400/60 uppercase tracking-widest">{item.label}</span>
                 <span className="text-lg font-display font-bold text-white">{item.stats}</span>
               </div>
             ))}
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
    <section ref={sectionRef} className="relative h-[150vh] overflow-hidden bg-[#050505]">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {/* Background Neural Mist / Space */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.1, 1, 1, 0.1]) }}
          className="absolute inset-0 z-0"
        >
          <NeuralGlobe3D scrollYProgress={scrollYProgress} mousePos={mousePos} />
        </motion.div>

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10 px-6">
          <motion.div 
            style={{ 
               opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
               scale: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.98, 1, 1, 0.98])
            }}
          >
            <div className="text-[10px] font-mono text-cyan-400 mb-6 uppercase tracking-[0.4em]">DECENTRALIZED_NODES</div>
            <h2 className="text-5xl md:text-8xl font-display uppercase font-bold tracking-tighter leading-none mb-12">
              NEURAL <span className="text-white/20">PLANETARY</span> NETWORK
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-12 w-full mt-12 bg-black/40 backdrop-blur-sm p-8 tech-border">
            {[
              { title: "MODEL_INFERENCE", detail: "Global synchronized inference nodes with sub-10ms latency." },
              { title: "GRADIENT_SYNC", detail: "Real-time weight updates across 12,000+ decentralized cores." },
              { title: "LATENT_EXPANSION", detail: "Scaling high-dimensional datasets via mesh-topology logic." }
            ].map((item, i) => (
              <div key={i} className="text-left space-y-4 border-l border-white/10 pl-8">
                <h3 className="text-xs font-display font-bold text-cyan-400 uppercase tracking-widest">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-sans">{item.detail}</p>
              </div>
            ))}
          </div>
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative px-6 flex flex-col items-center justify-center min-h-screen text-center overflow-hidden pt-20">
      {/* 3D WebGL Background */}
      <div className="absolute inset-0 z-0">
        <NeuralNetwork3D mousePos={mousePos} scrollY={scrollYProgress} />
      </div>

      <div className="absolute inset-0 tech-grid opacity-5 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="max-w-4xl relative z-10"
      >
        <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-10 text-[10px] font-mono text-cyan-400 border border-cyan-400/30 bg-cyan-400/5 rounded-full uppercase tracking-widest backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          NEURO_CORE_SYSTEMS: ACTIVE
        </div>
        <h1 className="text-6xl md:text-9xl font-display font-bold mb-10 leading-[0.85] uppercase tracking-tighter">
          <span className="block">NEURO</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400">NOVA LAB</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-sans leading-relaxed font-light">
          Architecting high-dimensional intelligence at the intersection of neural networks and biological data synthesis. Precision engineered.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link to="/about" className="group button-primary py-4 px-10 flex items-center gap-3">
            LEARN_THE_LAB <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/contact" className="button-secondary py-4 px-10">INITIATE_CONTACT</Link>
        </div>
      </motion.div>

      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-700 flex flex-col items-center gap-3 pointer-events-none">
        <span className="text-[10px] font-mono tracking-[0.4em] uppercase">SYSTEM_DESCENT</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/10 to-transparent" />
      </motion.div>
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
    { name: 'BTC', price: '₹54,28,100', change: '+2.4%' },
    { name: 'ETH', price: '₹2,84,200', change: '+1.8%' },
    { name: 'SOL', price: '₹11,840', change: '+5.2%' },
    { name: 'NOVA', price: '₹92.40', change: '+12.4%' },
  ];

  return (
    <section ref={sectionRef} className="relative h-[150vh] border-b border-white/5 bg-[#030303]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        {/* 3D Crypto Globe Canvas */}
        <div className="absolute inset-0 z-0">
          <CryptoGlobeCanvas scrollYProgress={scrollYProgress} mousePos={mousePos} />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
          <div className="max-w-xl">
             <div className="text-[10px] font-mono text-emerald-400 mb-6 uppercase tracking-[0.4em]">QUANTS_PROTOCOL</div>
             <h2 className="text-5xl md:text-7xl font-display uppercase font-bold tracking-tighter mb-8 leading-none">
               MARKET <br/><span className="text-white/20">QUANTUM</span> SYSTEM
             </h2>
             <p className="text-gray-400 font-sans leading-relaxed text-lg mb-10">
               Real-time predictive analytics and liquidity profiling across global order books. Our recursive models extract signals with 0.8ms latency.
             </p>
             <div className="grid grid-cols-2 gap-8">
               {tokens.map(token => (
                 <div key={token.name} className="space-y-1">
                   <div className="flex items-center gap-3">
                     <span className="text-[10px] font-mono text-gray-600">{token.name}</span>
                     <span className={`text-[10px] font-mono ${token.change.includes('+') ? 'text-emerald-400' : 'text-rose-400'}`}>{token.change}</span>
                   </div>
                   <div className="text-xl font-display font-medium text-white">{token.price}</div>
                 </div>
               ))}
             </div>
          </div>
          
          <div className="w-full lg:w-1/2 tech-border glass-card bg-emerald-400/[0.05] backdrop-blur-md p-8 relative overflow-hidden">
             <div className="absolute inset-0 tech-grid opacity-10" />
             <div className="text-[10px] font-mono text-emerald-400/50 mb-8 uppercase tracking-widest">LIVE_TRANSFERS_LOG</div>
             <div className="space-y-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex justify-between items-center gap-8 border-b border-white/5 pb-4">
                    <div className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                       <span className="text-[10px] font-mono text-gray-500 uppercase tracking-tighter">NODE_TRANS_{100 + i}</span>
                    </div>
                    <div className="text-xs font-mono text-white">0.08ms</div>
                  </div>
                ))}
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
          <div className="max-w-7xl mx-auto text-center">
            <div className="max-w-3xl mx-auto">
               <div className="text-[10px] font-mono text-cyan-400 mb-6 uppercase tracking-[0.4em]">NEURAL_CORE_V4</div>
               <h2 className="text-5xl md:text-8xl font-display uppercase font-bold tracking-tighter mb-8 leading-[0.85]">THE <span className="text-white/20">SILENT</span> <br/>BRAIN</h2>
               <p className="text-gray-400 text-xl font-sans leading-relaxed mb-12 max-w-lg mx-auto">Witness the convergence of organic intuition and silicon precision. Our core architecture processes 4.8 quadrillion synaptic events per millisecond.</p>
               <div className="flex flex-wrap gap-4 justify-center"><button className="button-primary py-4 px-8 text-xs">INITIALIZE_LINK</button></div>
            </div>
          </div>
        </section>

        <section className="py-12 border-y border-white/10 bg-black overflow-hidden pointer-events-none"><div className="flex animate-marquee whitespace-nowrap gap-12">{[...Array(10)].map((_, i) => <span key={i} className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.5em]">DECRYPTING_FINANCIAL_STREAM // NODE_LINK_READY</span>)}</div></section>
        
        <MarketIntelligenceSection />
        <NeuralIntelligenceSection />
        <DataScienceIntelligenceSection />

        <section className="relative py-32 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-[10px] font-mono text-cyan-400 mb-6 uppercase tracking-[0.4em]">SYSTEM TOPOLOGY</div>
            <h2 className="text-5xl md:text-7xl font-display uppercase font-bold tracking-tighter mb-8 leading-tight">GLOBAL <br/><span className="text-white/20">INFRASTRUCTURE</span></h2>
            <p className="text-gray-400 text-lg mb-12 mx-auto">NeuroNova operates across a decentralized mesh of 12,000+ nodes, ensuring sub-10ms latency for global neural synchronization.</p>
            <div className="flex items-center justify-center gap-6 mt-8">
              <div className="w-24 h-24 tech-border glass-card p-4 flex items-center justify-center">
                <img 
                  src="https://res.cloudinary.com/dodhvvewu/image/upload/v1777982271/123b0cdb-1074-4cfd-9954-0f6fed36f089_zmu6h1.png" 
                  alt="NeuroNova Logo" 
                  className="w-full h-full object-contain opacity-90 brightness-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="h-12 w-[1px] bg-white/10" />
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-relaxed text-left">
                OFFICIAL<br />LABORATORY<br />CERTIFIED
              </div>
            </div>
          </div>
        </section>
        
        <section className="px-6 py-48 bg-white/[0.01] relative overflow-hidden"><div className="absolute inset-0 tech-grid opacity-10" /><motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto text-center relative z-10"><h2 className="text-4xl md:text-6xl font-display mb-12 uppercase tracking-tighter italic font-bold">"The stars of the next century will be built from neurons, not fusion."</h2><div className="w-16 h-1 bg-cyan-400 mx-auto mb-8" /><p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.4em]">NEURONOVA LABORATORY MANIFESTO // V4.2.1</p></motion.div></section>

        {/* Large Logo Branding Section */}
        <section className="py-32 flex flex-col items-center justify-center border-t border-white/5 bg-black relative overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-5 pointer-events-none" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-48 h-48 md:w-72 md:h-72 relative group"
          >
            <div className="absolute inset-0 bg-cyan-400/10 blur-[120px] group-hover:bg-cyan-400/20 transition-all rounded-full" />
            <img 
              src="https://res.cloudinary.com/dodhvvewu/image/upload/v1777982271/123b0cdb-1074-4cfd-9954-0f6fed36f089_zmu6h1.png" 
              alt="NeuroNova Lab" 
              className="w-full h-full object-contain relative z-10 brightness-110 drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="mt-16 text-center">
            <div className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.6em] mb-4">ARCHITECTING_THE_FUTURE</div>
            <div className="w-12 h-[1px] bg-white/10 mx-auto" />
          </div>
        </section>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = [ 
    { name: 'About', path: '/about', icon: <Users size={18} /> }, 
    { name: 'Research', path: '/research', icon: <BookOpen size={18} /> }, 
    { name: 'Projects', path: '/projects', icon: <FolderCode size={18} /> }, 
    { name: 'Team', path: '/team', icon: <Users size={18} /> }, 
    { name: 'Blog', path: '/blog', icon: <Zap size={18} /> },
    { name: 'Careers', path: '/careers', icon: <Briefcase size={18} /> }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 tech-border glass-card flex items-center justify-center group-hover:border-cyan-400 transition-colors overflow-hidden">
            <img 
              src="https://res.cloudinary.com/dodhvvewu/image/upload/v1777982271/123b0cdb-1074-4cfd-9954-0f6fed36f089_zmu6h1.png" 
              alt="Logo" 
              className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity p-1.5"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-display font-bold text-xl uppercase italic">NeuroNova Lab</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">{navLinks.map((link) => (<Link key={link.path} to={link.path} className={`text-sm font-mono tracking-wider transition-colors hover:text-white ${location.pathname === link.path ? 'text-white' : 'text-gray-500'}`}>{link.name.toUpperCase()}</Link>))}<Link to="/contact" className="button-primary py-1.5 px-4 text-xs font-mono">COLLABORATE</Link></div>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
      <AnimatePresence>{isOpen && (<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-20 left-0 w-full bg-[#050505] border-b border-white/10 p-6 flex flex-col gap-6 md:hidden">{navLinks.map((link) => (<Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">{link.icon}<span className="font-display text-lg">{link.name}</span></Link>))}</motion.div>)}</AnimatePresence>
    </nav>
  );
};

const MainContent = () => {
  const location = useLocation();
  return (
    <main className="pt-20">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
              <Home />
            </motion.div>
          } />
          <Route path="/about" element={
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <AboutPage />
            </motion.div>
          } />
          <Route path="/projects" element={
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}>
              <ProjectsPage />
            </motion.div>
          } />
          <Route path="/research" element={
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.02 }} transition={{ duration: 0.4 }}>
              <ResearchPage />
            </motion.div>
          } />
          <Route path="/team" element={
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <TeamPage />
            </motion.div>
          } />
          <Route path="/blog" element={
            <motion.div initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} exit={{ opacity: 0, filter: 'blur(10px)' }} transition={{ duration: 0.5 }}>
              <BlogPage />
            </motion.div>
          } />
          <Route path="/careers" element={
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <CareersPage />
            </motion.div>
          } />
          <Route path="/contact" element={
            <motion.div initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4 }}>
              <ContactPage />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>
    </main>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white">
        <Navbar />
        <MainContent />
        <footer className="border-t border-white/10 py-24 px-6 mt-32 bg-[#030303]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 text-sm">
            <div className="col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 tech-border glass-card p-2">
                  <img 
                    src="https://res.cloudinary.com/dodhvvewu/image/upload/v1777982271/123b0cdb-1074-4cfd-9954-0f6fed36f089_zmu6h1.png" 
                    alt="Logo" 
                    className="w-full h-full object-contain brightness-125"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="font-display font-bold text-2xl uppercase italic tracking-tighter">NeuroNova Lab</div>
              </div>
              <p className="text-gray-500 max-w-sm mb-8 leading-relaxed font-sans">
                Redefining the cognitive landscape through advanced neural architecture, decentralized infrastructure, and ethically-aligned research.
              </p>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Global Ops: Active</span>
              </div>
            </div>
            <div><h4 className="text-white font-display mb-6 uppercase tracking-[0.2em] text-[10px] font-bold">Navigation</h4><ul className="space-y-3 text-gray-500 font-mono text-xs"><li><Link to="/about" className="hover:text-cyan-400 transition-colors tracking-widest">ABOUT_LAB</Link></li><li><Link to="/projects" className="hover:text-cyan-400 transition-colors tracking-widest">PROJECT_NODES</Link></li><li><Link to="/research" className="hover:text-cyan-400 transition-colors tracking-widest">RESEARCH_PAPERS</Link></li><li><Link to="/careers" className="hover:text-cyan-400 transition-colors tracking-widest">OPEN_POSITIONS</Link></li></ul></div>
            <div><h4 className="text-white font-display mb-6 uppercase tracking-[0.2em] text-[10px] font-bold">Contact</h4><p className="text-gray-500 font-mono text-xs tracking-widest">LAB@NEURONOVA.TECH</p><p className="text-gray-500 font-mono mt-4 text-xs tracking-widest">BANGALORE, INDIA<br />// SILICON_HUB_CORE</p></div>
          </div>
          <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-wrap justify-between gap-8">
            <p className="text-[9px] font-mono text-gray-700 uppercase tracking-widest">© 2024 NEURONOVA LABORATORY // ALL_RIGHTS_RESERVED</p>
            <div className="flex gap-8 text-[9px] font-mono text-gray-700 uppercase tracking-widest">
              <span className="cursor-pointer hover:text-white transition-colors">Security_Protocol</span>
              <span className="cursor-pointer hover:text-white transition-colors">Privacy_Core</span>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
