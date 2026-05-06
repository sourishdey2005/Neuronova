import React, { useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Points, PointMaterial, MeshDistortMaterial, Html } from '@react-three/drei';
import * as THREE from 'three';

const tokens = [
  { symbol: 'BTC', price: '₹54,28,100', trend: '+2.4%', cap: '$1.2T' },
  { symbol: 'ETH', price: '₹2,84,200', trend: '+1.8%', cap: '$340B' },
  { symbol: 'SOL', price: '₹14,500', trend: '+5.2%', cap: '$65B' },
  { symbol: 'MATIC', price: '₹62.40', trend: '-0.4%', cap: '$8B' },
  { symbol: 'DOT', price: '₹620', trend: '+1.1%', cap: '$9B' },
];

const Globe = ({ onClick }: { onClick: () => void }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group>
      {/* Outer Shell */}
      <mesh ref={meshRef} onClick={(e) => { e.stopPropagation(); onClick(); }}>
        <sphereGeometry args={[3, 64, 64]} />
        <meshBasicMaterial 
          color="#10b981" 
          wireframe 
          transparent 
          opacity={0.05} 
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      
      {/* Inner Glow */}
      <Sphere args={[2.8, 32, 32]}>
        <MeshDistortMaterial
          color="#06b6d4"
          speed={2}
          distort={0.2}
          transparent
          opacity={0.1}
        />
      </Sphere>
    </group>
  );
};

const OrbitingData = ({ count = 20 }) => {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const radius = 3.2 + Math.random() * 1.5;
        const phi = Math.acos(2 * Math.random() - 1);
        const theta = 2 * Math.PI * Math.random();
        
        p[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        p[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        p[i * 3 + 2] = radius * Math.cos(phi);
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.005;
      pointsRef.current.rotation.z += 0.002;
    }
  });

  return (
    <Points ref={pointsRef} positions={points}>
      <PointMaterial
        transparent
        color="#10b981"
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const TransactionPulse = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const s = 1 + Math.sin(state.clock.getElapsedTime() * 3) * 0.1;
      meshRef.current.scale.set(s, s, s);
      (meshRef.current.material as THREE.MeshBasicMaterial).opacity = 0.3 + Math.sin(state.clock.getElapsedTime() * 3) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[3.5, 32, 32]} />
      <meshBasicMaterial 
        color="#10b981" 
        transparent 
        opacity={0.2} 
        wireframe
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
};

export const CryptoGlobe3D = ({ scrollYProgress, mousePos }: { scrollYProgress: any, mousePos: { x: number, y: number } }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [activeToken, setActiveToken] = useState<typeof tokens[0] | null>(null);
  const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0 });
  const [isRotating, setIsRotating] = useState(false);

  const handleGlobeClick = () => {
    const randomToken = tokens[Math.floor(Math.random() * tokens.length)];
    setActiveToken(randomToken);
    
    // Set a random target rotation
    setTargetRotation({
      x: (Math.random() - 0.5) * Math.PI * 2,
      y: (Math.random() - 0.5) * Math.PI * 2
    });
    setIsRotating(true);

    // Hide tooltip after some time
    setTimeout(() => {
      setActiveToken(null);
      setIsRotating(false);
    }, 4000);
  };

  useFrame((state) => {
    if (groupRef.current) {
      const scroll = scrollYProgress.get();
      
      if (isRotating) {
        // Smoothly interpolate to target rotation during "random spin"
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotation.x, 0.05);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotation.y, 0.05);
      } else {
        // Normal parallax/scroll rotation
        groupRef.current.rotation.y = THREE.MathUtils.lerp(
          groupRef.current.rotation.y,
          scroll * Math.PI * 2 + mousePos.x * 0.5,
          0.05
        );
        groupRef.current.rotation.x = THREE.MathUtils.lerp(
          groupRef.current.rotation.x,
          -mousePos.y * 0.5,
          0.05
        );
      }
      
      groupRef.current.position.y = Math.sin(scroll * Math.PI) * 2;
      groupRef.current.scale.setScalar(1 + scroll * 0.5);
    }
  });

  return (
    <group ref={groupRef}>
      <Globe onClick={handleGlobeClick} />
      <OrbitingData count={40} />
      <TransactionPulse />
      
      {activeToken && (
        <Html position={[0, 4, 0]} center>
          <div className="bg-black/80 backdrop-blur-xl border border-emerald-400/50 p-4 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.2)] min-w-[160px] animate-in fade-in zoom-in duration-300 pointer-events-none">
            <div className="flex justify-between items-start mb-2">
              <span className="text-emerald-400 font-mono text-xs font-bold tracking-widest">{activeToken.symbol}</span>
              <span className={`text-[10px] font-mono ${activeToken.trend.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                {activeToken.trend}
              </span>
            </div>
            <div className="text-2xl font-display font-bold text-white mb-1">{activeToken.price}</div>
            <div className="flex justify-between text-[8px] font-mono text-white/40 uppercase tracking-widest">
              <span>MKT_CAP</span>
              <span>{activeToken.cap}</span>
            </div>
          </div>
        </Html>
      )}

      {/* Light Sources */}
      <pointLight position={[10, 10, 10]} intensity={1} color="#10b981" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
    </group>
  );
};

export const CryptoGlobeCanvas = ({ scrollYProgress, mousePos }: { scrollYProgress: any, mousePos: { x: number, y: number } }) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <CryptoGlobe3D scrollYProgress={scrollYProgress} mousePos={mousePos} />
      </Canvas>
    </div>
  );
};
