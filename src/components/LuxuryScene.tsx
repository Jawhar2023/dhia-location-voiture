import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function GoldOctahedron() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={ref} position={[2, 0, -2]}>
        <octahedronGeometry args={[2, 0]} />
        <meshStandardMaterial color="#C9A14A" wireframe transparent opacity={0.12} />
      </mesh>
    </Float>
  );
}

function GoldRing() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ref.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={ref} position={[-3, 1, -3]}>
        <torusGeometry args={[1.5, 0.02, 16, 100]} />
        <meshStandardMaterial color="#C9A14A" transparent opacity={0.2} />
      </mesh>
    </Float>
  );
}

export default function LuxuryScene() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.15} />
        <pointLight position={[10, 10, 10]} color="#C9A14A" intensity={0.8} />
        <pointLight position={[-10, -5, 5]} color="#8B1E1E" intensity={0.3} />
        <Stars
          radius={80}
          depth={60}
          count={800}
          factor={3}
          saturation={0}
          fade
          speed={0.5}
        />
        <GoldOctahedron />
        <GoldRing />
      </Canvas>
    </div>
  );
}
