import React, { useMemo, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sphere, Line, PointMaterial, Points, Float as FloatDrei } from '@react-three/drei';
import * as THREE from 'three';

const ParticleNetwork = ({ mousePos, scrollY }: { mousePos: { x: number; y: number }; scrollY: any }) => {
  const { viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const particleCount = 120;
  
  // Generate random positions
  const [positions] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 18;
    }
    return [pos];
  }, [particleCount]);

  const connections = useMemo(() => {
    const indices: number[] = [];
    const maxDistance = 4;
    
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        if (dist < maxDistance) {
          indices.push(i, j);
        }
      }
    }
    return indices;
  }, [positions, particleCount]);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setIndex(connections);
    return geometry;
  }, [positions, connections]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const scrollVal = scrollY.get(); // scroll progress 0 to 1
    
    if (groupRef.current) {
      // Mouse Parallax + Scroll Rotation
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mousePos.x * 0.5 + scrollVal * 2,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -mousePos.y * 0.5 + scrollVal * 0.5,
        0.05
      );
      
      // Zoom based on scroll
      groupRef.current.scale.setScalar(1 + scrollVal * 0.5);
    }

    // Floating animation
    const posAttr = linesRef.current?.geometry.attributes.position;
    if (posAttr) {
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        posAttr.array[i3 + 1] = positions[i3 + 1] + Math.sin(time * 0.5 + i) * 0.3;
        posAttr.array[i3] = positions[i3] + Math.cos(time * 0.3 + i * 0.5) * 0.3;
      }
      posAttr.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      <Points positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#22d3ee"
          size={0.07}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial
          transparent
          opacity={0.1}
          color="#22d3ee"
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      {[...Array(8)].map((_, i) => (
         <PulseNode key={i} index={i} />
      ))}
    </group>
  );
};

const PulseNode = ({ index }: { index: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const position = useMemo(() => [
    (Math.random() - 0.5) * 12,
    (Math.random() - 0.5) * 12,
    (Math.random() - 0.5) * 12
  ] as [number, number, number], []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      const pulse = Math.sin(time * 1.5 + index * 100);
      const scale = 1 + pulse * 0.4;
      meshRef.current.scale.setScalar(scale);
      (meshRef.current.material as THREE.MeshBasicMaterial).opacity = 0.1 + (pulse + 1) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.08, 8, 8]} />
      <meshBasicMaterial color="#22d3ee" transparent opacity={0.3} blending={THREE.AdditiveBlending} />
    </mesh>
  );
};

export const NeuralNetwork3D = ({ mousePos, scrollY }: { mousePos: { x: number; y: number }; scrollY: any }) => {
  return (
    <div className="absolute inset-0 -z-10 bg-black">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 45 }}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.4} />
        <ParticleNetwork mousePos={mousePos} scrollY={scrollY} />
      </Canvas>
    </div>
  );
};
