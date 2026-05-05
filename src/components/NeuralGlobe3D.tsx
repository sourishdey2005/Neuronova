import React, { useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Line, Sphere, Html } from '@react-three/drei';
import * as THREE from 'three';

const NeuralPathway = ({ start, end, delay = 0 }: { start: THREE.Vector3; end: THREE.Vector3; delay?: number }) => {
  const lineRef = useRef<THREE.Line>(null);
  const pulseRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const t = ((time + delay) % 2) / 2; // Pulse cycles every 2 seconds
    if (pulseRef.current) {
      pulseRef.current.position.lerpVectors(start, end, t);
      pulseRef.current.scale.setScalar(0.5 + Math.sin(t * Math.PI) * 1.2);
    }
  });

  return (
    <group>
      <Line
        points={[start, end]}
        color="#22d3ee"
        lineWidth={0.5}
        transparent
        opacity={0.1}
      />
      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.6} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  );
};

const NeuralNode = ({ position, label, info }: { position: THREE.Vector3; label: string; info: any }) => {
  const [hovered, setHovered] = useState(false);
  const [flashing, setFlashing] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Random activation flash
      if (Math.random() > 0.997 && !flashing) {
        setFlashing(true);
        setTimeout(() => setFlashing(false), 200);
      }

      const s = hovered ? 1.5 : (flashing ? 1.4 : 1);
      meshRef.current.scale.lerp(new THREE.Vector3(s, s, s), 0.1);
      
      const targetColor = hovered ? "#22d3ee" : (flashing ? "#ffffff" : "#3b82f6");
      (meshRef.current.material as THREE.MeshBasicMaterial).color.lerp(new THREE.Color(targetColor), 0.2);
    }
  });

  return (
    <group position={position}>
      <mesh 
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial 
          color="#3b82f6"
          transparent 
          opacity={0.8} 
          blending={THREE.AdditiveBlending} 
        />
      </mesh>
      {hovered && (
        <Html distanceFactor={10} position={[0.2, 0.2, 0]}>
          <div className="glass-card tech-border p-3 border border-cyan-400/30 bg-black/90 pointer-events-none whitespace-nowrap backdrop-blur-xl">
             <div className="text-[10px] font-mono text-cyan-400 mb-1 uppercase tracking-widest">{label}</div>
             <div className="text-[8px] font-mono text-gray-400">
               LATENCY: {info.latency}ms<br/>
               ACCURACY: {info.accuracy}%<br/>
               PARAMS: {info.params}
             </div>
          </div>
        </Html>
      )}
    </group>
  );
};

const TrainingWave = ({ delay = 0 }: { delay: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = (state.clock.getElapsedTime() + delay) % 4; // 4 second cycle
    if (meshRef.current) {
      const scale = time * 3; // Expands from 0 to 12
      meshRef.current.scale.setScalar(scale);
      (meshRef.current.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.2 * (1 - time / 4));
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshBasicMaterial color="#a855f7" transparent opacity={0.1} wireframe />
    </mesh>
  );
};

const OrbitingModule = ({ radius, speed, label, color }: { radius: number; speed: number; label: string; color: string }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * speed;
    }
  });

  return (
    <group ref={groupRef}>
      <group position={[radius, 0, 0]}>
        <mesh>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshBasicMaterial color={color} wireframe />
        </mesh>
        <Html distanceFactor={12} position={[0.4, 0, 0]}>
          <div className="text-[8px] font-mono whitespace-nowrap opacity-40 uppercase tracking-widest text-white">
            {label}
          </div>
        </Html>
      </group>
      <Line
        points={new THREE.EllipseCurve(0, 0, radius, radius).getPoints(64).map(p => new THREE.Vector3(p.x, 0, p.y))}
        color={color}
        lineWidth={0.2}
        transparent
        opacity={0.05}
      />
    </group>
  );
};

const NeuralGlobeCore = ({ scrollYProgress, mousePos }: { scrollYProgress: any; mousePos: { x: number; y: number } }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  const nodeCount = 40;
  const nodes = useMemo(() => {
    const n = [];
    for (let i = 0; i < nodeCount; i++) {
      const radius = 4;
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      n.push({
        pos: new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        ),
        label: i % 4 === 0 ? "TRANSFORMER_BLOCK" : i % 3 === 0 ? "CNN_LAYER" : "EMBEDDING_SPACE",
        info: {
          latency: (Math.random() * 2).toFixed(2),
          accuracy: (98 + Math.random() * 1.5).toFixed(1),
          params: (Math.random() * 100).toFixed(0) + "M"
        }
      });
    }
    return n;
  }, []);

  const pathIndices = useMemo(() => {
    const indices = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (nodes[i].pos.distanceTo(nodes[j].pos) < 3.5) {
          indices.push([i, j]);
        }
      }
    }
    return indices;
  }, [nodes]);

  useFrame((state) => {
    if (groupRef.current) {
      const scroll = scrollYProgress.get();
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        scroll * Math.PI + mousePos.x * 0.4,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -mousePos.y * 0.4,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      {/* Background Neural Mist */}
      <Points count={1000}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={new Float32Array(3000).map(() => (Math.random() - 0.5) * 25)}
            count={1000}
            itemSize={3}
          />
        </bufferGeometry>
        <PointMaterial 
          transparent 
          color="#3b82f6" 
          size={0.03} 
          sizeAttenuation={true} 
          depthWrite={false} 
          opacity={0.2} 
        />
      </Points>

      {/* Interconnected Nodes */}
      {nodes.map((node, i) => (
        <NeuralNode key={i} position={node.pos} label={node.label} info={node.info} />
      ))}

      {/* Training Cycles */}
      {[0, 1.33, 2.66].map((d) => (
        <TrainingWave key={d} delay={d} />
      ))}

      {/* Real-time Pathways */}
      {pathIndices.map(([i, j], idx) => (
        <NeuralPathway key={idx} start={nodes[i].pos} end={nodes[j].pos} delay={idx * 0.1} />
      ))}

      {/* AI Components Orbit */}
      <OrbitingModule radius={6} speed={0.4} label="INFERENCE_ENGINE" color="#22d3ee" />
      <OrbitingModule radius={7.5} speed={-0.2} label="DEEP_LEARNING_V2" color="#8b5cf6" />
      <OrbitingModule radius={9} speed={0.15} label="TRAINING_MESH" color="#3b82f6" />

      {/* Central Core Glow */}
      <Sphere args={[3.8, 32, 32]}>
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.03} wireframe />
      </Sphere>
    </group>
  );
};

export const NeuralGlobe3D = ({ scrollYProgress, mousePos }: { scrollYProgress: any; mousePos: { x: number; y: number } }) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#22d3ee" />
        <NeuralGlobeCore scrollYProgress={scrollYProgress} mousePos={mousePos} />
      </Canvas>
    </div>
  );
};
