import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function CodeStreamBackground() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Generate code stream nodes
  const particles = useMemo(() => {
    const positions = [];
    const count = 100;
    
    for (let i = 0; i < count; i++) {
      positions.push(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
    }
    
    return new Float32Array(positions);
  }, []);

  // Generate connection lines
  const lineGeometry = useMemo(() => {
    const positions = [];
    const particleCount = particles.length / 3;
    
    for (let i = 0; i < particleCount; i++) {
      if (Math.random() > 0.7) {
        const targetIndex = Math.floor(Math.random() * particleCount);
        positions.push(
          particles[i * 3], particles[i * 3 + 1], particles[i * 3 + 2],
          particles[targetIndex * 3], particles[targetIndex * 3 + 1], particles[targetIndex * 3 + 2]
        );
      }
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
    return geometry;
  }, [particles]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.05;
      pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    }
    
    if (linesRef.current) {
      linesRef.current.rotation.y = time * 0.05;
      linesRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    }
  });

  return (
    <>
      {/* Particles (nodes) */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          color="#14B8A6"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>

      {/* Connection lines */}
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#7C3AED" transparent opacity={0.2} />
      </lineSegments>

      {/* Ambient glow */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#14B8A6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7C3AED" />
    </>
  );
}
