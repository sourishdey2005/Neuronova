import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Menu, X, Cpu, Beaker, FolderCode, Zap, Mail, BookOpen, Users, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// Page Imports
import { ProjectsPage } from './pages/ProjectsPage';
import { ResearchPage } from './pages/ResearchPage';
import { TeamPage } from './pages/TeamPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';

const NeuralNetworkAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1.5]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const nodes = [
    { x: 100, y: 100, z: 20 }, { x: 300, y: 150, z: -20 }, { x: 500, y: 100, z: 40 },
    { x: 200, y: 300, z: 0 }, { x: 400, y: 350, z: 10 }, { x: 600, y: 300, z: -10 },
    { x: 150, y: 500, z: -30 }, { x: 350, y: 550, z: 50 }, { x: 550, y: 500, z: 0 }
  ];

  const connections = [
    [0, 1], [1, 2], [0, 3], [1, 3], [1, 4], [2, 5], 
    [3, 4], [4, 5], [3, 6], [4, 7], [5, 8], [6, 7], [7, 8]
  ];

  return (
    <motion.div 
      ref={containerRef}
      style={{ opacity, rotateY, scale, perspective: 1000 }}
      className="w-full h-full p-12 preserve-3d"
    >
      <svg viewBox="0 0 700 600" className="w-full h-full stroke-cyan-500/20 fill-none drop-shadow-[0_0_8px_rgba(6,182,212,0.3)]">
        {connections.map(([start, end], i) => (
          <motion.path
            key={`path-${i}`}
            d={`M ${nodes[start].x} ${nodes[start].y} L ${nodes[end].x} ${nodes[end].y}`}
            style={{ 
              pathLength,
              stroke: i % 2 === 0 ? 'rgba(6,182,212,0.3)' : 'rgba(168,85,247,0.3)' 
            }}
            strokeWidth="1.5"
          />
        ))}
        {nodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r="3"
            className="fill-white"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: i * 0.05 }}
          />
        ))}
      </svg>
    </motion.div>
  );
};

const HeroScene = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -300]);
  const rotateHero = useTransform(scrollY, [0, 1000], [0, 45]);
  const scaleHero = useTransform(scrollY, [0, 1000], [1, 1.4]);

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
    <section ref={containerRef} className="relative px-6 flex flex-col items-center justify-center min-h-screen text-center overflow-hidden">
      {/* Deep Parallax Grid Layers */}
      <motion.div 
        style={{ y: y1, rotate: rotateHero, x: mousePos.x * 120 }} 
        className="absolute inset-0 tech-grid -z-20 opacity-20 scale-[2]" 
      />
      <motion.div 
        style={{ y: y2, rotate: useTransform(scrollY, [0, 1000], [0, -45]), x: -mousePos.x * 80 }} 
        className="absolute inset-0 tech-grid -z-20 opacity-10 rotate-45 scale-[3]" 
      />

      {/* Interactive Floating Nodes */}
      <div className="absolute inset-0 -z-15 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: mousePos.x * (i * 30) + Math.sin(i) * 150,
              y: mousePos.y * (i * 30) + Math.cos(i) * 150,
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              x: { type: 'spring', damping: 25, stiffness: 50 },
              y: { type: 'spring', damping: 25, stiffness: 50 },
              opacity: { duration: 3 + Math.random() * 2, repeat: Infinity },
              scale: { duration: 3 + Math.random() * 2, repeat: Infinity }
            }}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full blur-[1px]"
            style={{
              left: `${(i * 9) % 100}%`,
              top: `${(i * 17) % 100}%`,
            }}
          />
        ))}
      </div>
      
      {/* 3D Neural Core Animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 flex items-center justify-center pointer-events-none">
        <motion.div 
          style={{ 
            rotateX: mousePos.y * -50,
            rotateY: mousePos.x * 50,
            scale: scaleHero
          }}
          className="w-[700px] h-[700px] rounded-full relative preserve-3d flex items-center justify-center"
        >
          {/* Multiple Glowing Rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-white/5" 
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-cyan-400/20 scale-110" 
          />

          {/* Complex SVG Neural Network Pulsing Pathways */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 800 800" className="w-full h-full stroke-cyan-500/30 fill-none drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              {[...Array(24)].map((_, i) => {
                const angle = (i / 24) * Math.PI * 2;
                const x2 = 400 + Math.cos(angle) * 350;
                const y2 = 400 + Math.sin(angle) * 350;
                return (
                  <g key={i}>
                    <motion.path
                      d={`M 400 400 L ${x2} ${y2}`}
                      initial={{ pathLength: 0, opacity: 0.2 }}
                      animate={{ pathLength: [0, 1, 1, 0], opacity: [0.1, 0.5, 0.5, 0.1] }}
                      transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: i * 0.1 }}
                      strokeWidth="1.5"
                    />
                    <motion.circle
                      cx={x2}
                      cy={y2}
                      r="3"
                      className="fill-cyan-400"
                      animate={{ 
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.5, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                    />
                  </g>
                );
              })}
              <circle cx="400" cy="400" r="5" className="fill-white shadow-2xl" />
            </svg>
          </div>
          
          <div className="absolute inset-0 bg-cyan-500/5 blur-[140px] animate-pulse" />
          <Cpu size={140} className="text-cyan-400/20" />
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ 
          x: mousePos.x * -20,
          y: mousePos.y * -20
        }}
        className="max-w-4xl relative z-10"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-mono text-cyan-400 border border-cyan-400/30 bg-cyan-400/5 rounded-full"
        >
          <Zap size={12} className="animate-pulse" />
          <span>NEURAL CORE V4.0 // ONLINE</span>
        </motion.div>
        
        <h1 className="text-6xl md:text-9xl font-display font-bold mb-8 leading-[0.8] uppercase tracking-tighter">
          <span className="block">NEURO</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400">NOVA LAB</span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-sans leading-relaxed"
        >
          Architecting high-dimensional intelligence at the intersection of neural networks and biological data synthesis. No compromises.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <Link to="/projects" className="group button-primary py-4 px-8 flex items-center gap-3">
            EXPLORE NODES <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/contact" className="button-secondary py-4 px-8">INITIATE COLLAB</Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono tracking-widest">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
};

const Home = () => (
  <div className="space-y-32">
    <HeroScene />
    {/* Live Node Status (New Section) */}
    <section className="px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'ACTIVE MODELS', val: '128' },
          { label: 'THYROID RECOGNITION', val: '99.4%' },
          { label: 'PATENT PIPELINE', val: '14' },
          { label: 'RESEARCH NODES', val: '22' }
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 tech-border glass-card text-center"
          >
            <div className="text-[10px] font-mono text-cyan-400 mb-2 uppercase tracking-widest">{stat.label}</div>
            <div className="text-3xl font-display text-white">{stat.val}</div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Discovery Cycle with Neural Network Animation */}
    <section className="relative px-6 py-48 bg-black">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-start">
        <div className="sticky top-48">
          <h2 className="text-5xl md:text-7xl font-display mb-12 uppercase leading-[0.8] font-bold tracking-tighter">
            ACCELERATING <br/>
            <span className="text-white/20">THE CYCLE</span>
          </h2>
          
          <div className="relative space-y-32">
            {[
              { 
                level: '01', 
                title: 'NEURAL SYNTHESIS', 
                desc: 'Auto-generation of specific model architectures optimized for edge hardware through recursive neural search.',
                color: 'text-cyan-400'
              },
              { 
                level: '02', 
                title: 'DISTRIBUTED COMPUTE', 
                desc: 'A global high-performance grid utilizing unused server telemetry to scale training across 12 jurisdictions.',
                color: 'text-purple-400'
              },
              { 
                level: '03', 
                title: 'SEMANTIC INDEXING', 
                desc: 'Deep-learning vector search engines that map multi-million document patent databases in milliseconds.',
                color: 'text-emerald-400'
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.8 }}
                className="group flex gap-8 items-start relative z-10"
              >
                <div className={`flex-shrink-0 w-16 h-16 rounded border border-white/10 bg-white/5 flex items-center justify-center font-display text-2xl group-hover:border-white/30 transition-all ${item.color}`}>
                  {item.level}
                </div>
                <div>
                  <h4 className="text-2xl font-display text-white mb-3 uppercase font-bold tracking-tight">{item.title}</h4>
                  <p className="text-gray-500 text-lg leading-relaxed max-w-md">{item.desc}</p>
                </div>
              </motion.div>
            ))}
            
            {/* Vertical Progress Line */}
            <div className="absolute left-8 top-16 bottom-0 w-[1px] bg-gradient-to-b from-white/20 to-transparent -z-10" />
          </div>
        </div>

        {/* Dynamic Neural Network Component */}
        <div className="sticky top-48 h-[600px] hidden lg:block overflow-hidden tech-border glass-card">
          <div className="absolute inset-0 tech-grid opacity-20" />
          <NeuralNetworkAnimation />
        </div>
      </div>
    </section>

    {/* Domains Grid */}
    <section className="px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
           <div className="text-[10px] font-mono text-purple-400 mb-2 uppercase tracking-[0.3em]">SPECIALIZATIONS</div>
           <h2 className="text-5xl font-display uppercase tracking-tight font-bold">Research <span className="text-white/20">Domains</span></h2>
        </div>
        <p className="text-gray-500 font-mono text-xs max-w-xs uppercase">Targeted operational spheres integrated under the NeuroNova protocol.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: 'AI/ML ARCH', icon: <Cpu className="text-cyan-400" />, desc: 'Developing non-linear optimization models and generative frameworks for cognitive tasks.' },
          { title: 'BIO DATA SCIENCE', icon: <Zap className="text-purple-400" />, desc: 'Massive dataset synthesis and biological pattern recognition at scale.' },
          { title: 'PATENT STRATEGY', icon: <Beaker className="text-emerald-400" />, desc: 'AI-driven analysis of prior art and innovative claim drafting for deep-tech sectors.' }
        ].map((domain, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="p-10 tech-border glass-card relative group hover:bg-white/[0.04] transition-all"
          >
            <div className="mb-8 p-4 w-fit bg-white/5 rounded border border-white/10 group-hover:border-cyan-400/50 transition-colors">
              {domain.icon}
            </div>
            <h3 className="text-2xl font-display mb-4 uppercase font-bold tracking-tight">{domain.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">{domain.desc}</p>
            <div className="text-[10px] font-mono text-gray-700 uppercase tracking-widest">REG: NODE_{i + 1}X</div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Lab Manifesto Callout */}
    <section className="px-6 py-48 bg-white/[0.01] relative overflow-hidden">
       <div className="absolute inset-0 tech-grid opacity-10" />
       <motion.div 
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         className="max-w-5xl mx-auto text-center relative z-10"
       >
          <h2 className="text-4xl md:text-6xl font-display mb-12 uppercase tracking-tighter leading-none italic">
            The stars of the next century will be built from neurons, not fusion. We are ready for the ignition.
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mb-8" />
          <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.4em]">NEURONOVA LABORATORY MANIFESTO // 2026.05.05</p>
       </motion.div>
    </section>
  </div>
);

const About = () => (
  <div className="max-w-4xl mx-auto px-6 py-24">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="text-[10px] font-mono text-cyan-400 mb-4 uppercase tracking-[0.3em]">ORIGIN STORY</div>
      <h1 className="text-6xl font-display mb-12 uppercase tracking-tight font-bold">The <br/><span className="text-white/20">Architectural</span> Shift</h1>
      
      <div className="grid md:grid-cols-2 gap-12 text-gray-400 leading-relaxed font-sans text-lg lg:text-xl">
        <p>
          NeuroNova Lab was founded in 2024 to bridge the gap between abstract neural theory and industrial application. We believe that intelligence is the ultimate resource, and current architectures are only scratching the surface of what's possible.
        </p>
        <p>
          Our team combines heavy-duty AI research with strategic patent intelligence. This allows us to not just invent the future, but to secure the intellectual foundations of the next cognitive revolution.
        </p>
      </div>

      <div className="mt-24 grid md:grid-cols-3 gap-8">
        {[
          { label: 'COMPUTE', val: '9.2 PF' },
          { label: 'MODELS', val: '430+' },
          { label: 'PATENTS', val: '12' }
        ].map(stat => (
          <div key={stat.label} className="p-8 tech-border bg-white/[0.02]">
            <div className="text-[10px] font-mono text-gray-600 mb-2 uppercase tracking-widest">{stat.label}</div>
            <div className="text-4xl font-display text-white">{stat.val}</div>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/about', icon: <Users size={18} /> },
    { name: 'Research', path: '/research', icon: <BookOpen size={18} /> },
    { name: 'Projects', path: '/projects', icon: <FolderCode size={18} /> },
    { name: 'Team', path: '/team', icon: <Users size={18} /> },
    { name: 'Blog', path: '/blog', icon: <Zap size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 tech-border glass-card flex items-center justify-center group-hover:border-cyan-400 transition-colors overflow-hidden">
            <img 
              src="https://res.cloudinary.com/dodhvvewu/image/upload/v1777982271/123b0cdb-1074-4cfd-9954-0f6fed36f089_zmu6h1.png" 
              alt="NeuroNova Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-display font-bold tracking-tighter text-xl uppercase italic">NeuroNova Lab</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-sm font-mono tracking-wider transition-colors hover:text-white ${location.pathname === link.path ? 'text-white' : 'text-gray-500'}`}
            >
              {link.name.toUpperCase()}
            </Link>
          ))}
          <Link to="/contact" className="button-primary py-1.5 px-4 text-xs font-mono">
            COLLABORATE
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-[#050505] border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors"
              >
                {link.icon}
                <span className="font-display text-lg">{link.name}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
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
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 tech-border glass-card flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/dodhvvewu/image/upload/v1777982271/123b0cdb-1074-4cfd-9954-0f6fed36f089_zmu6h1.png" 
                    alt="NeuroNova Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-display font-bold text-lg uppercase italic">NeuroNova Lab</span>
              </div>
              <p className="text-gray-500 max-w-sm mb-6">
                Redefining the cognitive landscape through neural architecture and ethical research.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-500 hover:text-white transition-colors underline decoration-white/20">GitHub</a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors underline decoration-white/20">LinkedIn</a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors underline decoration-white/20">Twitter / X</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-display mb-4 uppercase tracking-widest text-xs">Navigation</h4>
              <ul className="space-y-2 text-gray-500 font-mono">
                <li><Link to="/about" className="hover:text-white">ABOUT</Link></li>
                <li><Link to="/projects" className="hover:text-white">PROJECTS</Link></li>
                <li><Link to="/research" className="hover:text-white">RESEARCH</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-display mb-4 uppercase tracking-widest text-xs">Contact</h4>
              <p className="text-gray-500 font-mono">LAB@NEURONOVA.TECH</p>
              <p className="text-gray-500 font-mono mt-2">SILICON VALLEY, CA</p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 py-6 border-t border-white/5 flex justify-between items-center text-xs text-gray-500 font-mono">
            <span>© 2026 NEURONOVA LABORATORY</span>
            <span>OPERATING STATUS: OPTIMAL</span>
          </div>
        </footer>
      </div>
    </Router>
  );
}
