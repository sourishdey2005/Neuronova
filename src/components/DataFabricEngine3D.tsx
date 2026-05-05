import React, { useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Line, Sphere, Html, Float } from '@react-three/drei';
import * as THREE from 'three';

const STAGES = [
  { name: 'INGESTION', color: '#6366f1', status: 'RAW_STREAM', params: { size: '1.2TB/s', nodes: 64 } },
  { name: 'CLEANING', color: '#a855f7', status: 'FILTERING', params: { dropped: '0.02%', latency: '4ms' } },
  { name: 'ENGINEERING', color: '#ec4899', status: 'TRANSFORMING', params: { features: 124, depth: 'High' } },
  { name: 'TRAINING', color: '#06b6d4', status: 'OPTIMIZING', params: { epoch: 42, loss: '0.0012' } },
  { name: 'INSIGHT', color: '#10b981', status: 'SYNTHESIZED', params: { confidence: '99.8%', ready: 'TRUE' } },
];

const ProcessingNode = ({ position, stage, index }: { position: THREE.Vector3; stage: typeof STAGES[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const s = 1 + Math.sin(state.clock.getElapsedTime() * 2 + index) * 0.1 + (hovered ? 0.4 : 0);
      meshRef.current.scale.lerp(new THREE.Vector3(s, s, s), 0.1);
    }
  });

  return (
    <group position={position}>
      <mesh 
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial 
          color={stage.color} 
          emissive={stage.color} 
          emissiveIntensity={hovered ? 2 : 0.5}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Label and Metrics */}
      <Html distanceFactor={10} position={[0, 0.4, 0]} center>
         <div className={`transition-all duration-300 ${hovered ? 'scale-110 opacity-100' : 'scale-100 opacity-60'}`}>
            <div className="text-[10px] font-mono whitespace-nowrap text-white font-bold tracking-widest bg-black/40 px-2 py-1 backdrop-blur-sm border border-white/10">
              {stage.name}
            </div>
            {hovered && (
              <div className="mt-2 glass-card tech-border p-3 border border-white/10 bg-black/90 pointer-events-none">
                <div className="text-[8px] font-mono text-emerald-400 mb-1">{stage.status}</div>
                {Object.entries(stage.params).map(([key, val]) => (
                  <div key={key} className="text-[7px] font-mono text-gray-500 uppercase">
                    {key}: <span className="text-white">{val}</span>
                  </div>
                ))}
              </div>
            )}
         </div>
      </Html>
    </group>
  );
};

const DataStream = ({ start, end, color, chaos = 1, index, type = 'pipeline' }: { start: THREE.Vector3; end: THREE.Vector3; color: string; chaos?: number; index: number; type?: 'pipeline' | 'inbound' }) => {
  const particleCount = type === 'pipeline' ? 25 : 15;
  const positions = useMemo(() => new Float32Array(particleCount * 3), [particleCount]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    for (let i = 0; i < particleCount; i++) {
        const t = ((time * (type === 'pipeline' ? 0.8 : 1.2) + i * 0.4 + index * 0.3) % 2) / 2;
        const currentPos = new THREE.Vector3().lerpVectors(start, end, t);
        
        // Data evolution logic: particles become more structured (less noise) as chaos decreases
        const noise = chaos * (1 - t) * 0.8;
        const patternFactor = (1 - chaos) * 0.2; // Aligned pattern
        
        positions[i * 3] = currentPos.x + Math.sin(time * 8 + i) * noise + (patternFactor ? Math.sin(i * 10) * patternFactor : 0);
        positions[i * 3 + 1] = currentPos.y + Math.cos(time * 8 + i) * noise + (patternFactor ? Math.cos(i * 10) * patternFactor : 0);
        positions[i * 3 + 2] = currentPos.z + Math.sin(time * 3 + i) * noise * 0.2;
    }
  });

  return (
    <Points positions={positions} stride={3}>
      <PointMaterial
        transparent
        size={type === 'pipeline' ? 0.08 : 0.05}
        sizeAttenuation={true}
        color={color}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.6}
      />
    </Points>
  );
};

const FabricCore = ({ scrollYProgress, mousePos }: { scrollYProgress: any; mousePos: { x: number; y: number } }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  const nodeGap = 4.5;
  const nodes = useMemo(() => STAGES.map((s, i) => ({
    ...s,
    pos: new THREE.Vector3(i * nodeGap - (STAGES.length - 1) * nodeGap / 2, 0, 0)
  })), [nodeGap]);

  // Multi-directional inbound streams
  const inboundStreams = useMemo(() => [
    { start: new THREE.Vector3(-15, 8, -5), end: nodes[0].pos, color: '#6366f1' },
    { start: new THREE.Vector3(-15, -8, -5), end: nodes[0].pos, color: '#4f46e5' },
    { start: new THREE.Vector3(-18, 0, 5), end: nodes[0].pos, color: '#818cf8' },
  ], [nodes]);

  useFrame(() => {
    if (groupRef.current) {
      const scroll = scrollYProgress.get();
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mousePos.x * 0.25, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mousePos.y * 0.25, 0.05);
      
      // Horizontal Parallax based on scroll
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, -scroll * 12 + 6, 0.1);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Background Ambient Particles */}
      <Points count={800}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={new Float32Array(2400).map(() => (Math.random() - 0.5) * 50)}
            count={800}
            itemSize={3}
          />
        </bufferGeometry>
        <PointMaterial transparent color="#ffffff" size={0.015} opacity={0.08} blending={THREE.AdditiveBlending} />
      </Points>

      {/* Inbound Streams */}
      {inboundStreams.map((stream, i) => (
        <DataStream key={`in-${i}`} {...stream} chaos={1.5} index={i} type="inbound" />
      ))}

      {/* Pipeline Stages */}
      {nodes.map((node, i) => (
        <React.Fragment key={i}>
          <ProcessingNode position={node.pos} stage={node} index={i} />
          {i < nodes.length - 1 && (
            <DataStream 
              start={node.pos} 
              end={nodes[i+1].pos} 
              color={node.color} 
              chaos={1 - (i / nodes.length)} 
              index={i}
            />
          )}
        </React.Fragment>
      ))}

      {/* Orbiting Evolving Clusters */}
      <Float speed={2} rotationIntensity={2} floatIntensity={1}>
         <group position={[2, 4, -5]}>
            <Points count={100}>
               <bufferGeometry>
                  <bufferAttribute attach="attributes-position" array={new Float32Array(300).map(() => (Math.random() - 0.5) * 2)} count={100} itemSize={3} />
               </bufferGeometry>
               <PointMaterial transparent color="#ec4899" size={0.05} opacity={0.3} />
            </Points>
            <mesh>
               <icosahedronGeometry args={[0.8, 1]} />
               <meshBasicMaterial color="#ec4899" wireframe transparent opacity={0.1} />
            </mesh>
         </group>
      </Float>
      
      <Float speed={3} rotationIntensity={1} floatIntensity={2}>
         <group position={[-5, -4, 2]}>
            <mesh>
               <octahedronGeometry args={[0.6, 0]} />
               <meshBasicMaterial color="#06b6d4" wireframe transparent opacity={0.1} />
            </mesh>
            <TransactionPulse scale={0.4} color="#06b6d4" />
         </group>
      </Float>
    </group>
  );
};

const TransactionPulse = ({ scale = 1, color = "#10b981" }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      const s = scale * (1 + Math.sin(state.clock.getElapsedTime() * 4) * 0.3);
      meshRef.current.scale.set(s, s, s);
      (meshRef.current.material as THREE.MeshBasicMaterial).opacity = 0.2 + Math.sin(state.clock.getElapsedTime() * 4) * 0.1;
    }
  });
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial color={color} transparent opacity={0.2} wireframe blending={THREE.AdditiveBlending} />
    </mesh>
  );
};

export const DataFabricEngine3D = ({ scrollYProgress, mousePos }: { scrollYProgress: any; mousePos: { x: number; y: number } }) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <pointLight position={[5, 5, 5]} intensity={1} color="#6366f1" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#10b981" />
        <ambientLight intensity={0.2} />
        <FabricCore scrollYProgress={scrollYProgress} mousePos={mousePos} />
      </Canvas>
    </div>
  );
};
