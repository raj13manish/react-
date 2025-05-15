import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticlesCanvas = ({ count = 2000 }) => {
  const points = useRef();

  // Generate random particle positions
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 50;
      const y = (Math.random() - 0.5) * 50;
      const z = (Math.random() - 0.5) * 50;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, [count]);

  // Create colors for particles
  const colors = useMemo(() => {
    const temp = [];
    const color1 = new THREE.Color('#7B55E8');
    const color2 = new THREE.Color('#4B7DFD');
    
    for (let i = 0; i < count; i++) {
      const mixedColor = color1.clone().lerp(color2, Math.random());
      temp.push(mixedColor.r, mixedColor.g, mixedColor.b);
    }
    return new Float32Array(temp);
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (points.current) {
      points.current.rotation.x = time * 0.05;
      points.current.rotation.y = time * 0.03;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        sizeAttenuation={true}
        transparent
        opacity={0.8}
        vertexColors
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default ParticlesCanvas;