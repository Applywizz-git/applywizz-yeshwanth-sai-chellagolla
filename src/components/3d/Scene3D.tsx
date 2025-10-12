import { Canvas } from '@react-three/fiber';
import { CodeStreamBackground } from './CodeStreamBackground';
import { Suspense } from 'react';

interface Scene3DProps {
  className?: string;
}

export function Scene3D({ className = '' }: Scene3DProps) {
  return (
    <div className={`fixed inset-0 -z-10 opacity-20 ${className}`}>
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Suspense fallback={null}>
          <CodeStreamBackground />
        </Suspense>
      </Canvas>
    </div>
  );
}
