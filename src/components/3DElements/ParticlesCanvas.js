import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticlesCanvas = ({ count = 2000 }) => {
  const points = useRef();
  const groupRef = useRef();

  // Create particle system with more variations
  const particleSystem = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const color1 = new THREE.Color('#00c6ff');
    const color2 = new THREE.Color('#0072ff');
    const color3 = new THREE.Color('#7b2ff7');
    
    for (let i = 0; i < count; i++) {
      // Create particles in a more interesting distribution
      let radius = Math.random() * 30;
      let theta = Math.random() * Math.PI * 2;
      let phi = Math.random() * Math.PI * 2;
      
      // Use either sphere distribution or full space distribution based on index
      const useSphereDist = i % 2 === 0;
      
      if (useSphereDist) {
        // Sphere distribution
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);
      } else {
        // Random full space distribution
        positions[i * 3] = (Math.random() - 0.5) * 40;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
      }
      
      // Random color between 3 colors
      let mixFactor1 = Math.random();
      let mixFactor2 = Math.random();
      
      let mixedColor;
      if (mixFactor1 > 0.66) {
        mixedColor = color1.clone().lerp(color2, mixFactor2);
      } else if (mixFactor1 > 0.33) {
        mixedColor = color2.clone().lerp(color3, mixFactor2);
      } else {
        mixedColor = color3.clone().lerp(color1, mixFactor2);
      }
      
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
      
      // Varied sizes for particles
      sizes[i] = Math.random() * 0.2 + 0.1;
    }
    
    return {
      positions,
      colors,
      sizes
    };
  }, [count]);

  // Animation
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (points.current) {
      // Rotate the entire point cloud
      points.current.rotation.x = time * 0.05;
      points.current.rotation.y = time * 0.03;
    }
    
    if (groupRef.current) {
      // Wave effect through the particles
      const positions = points.current.geometry.attributes.position.array;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const y = positions[i3 + 1];
        const z = positions[i3 + 2];
        
        // Distance from center
        const distance = Math.sqrt(x * x + y * y + z * z);
        
        // Wave effect - subtle movement based on distance and time
        const waveFactor = Math.sin(distance * 0.3 + time * 0.5) * 0.05;
        
        positions[i3] += x * waveFactor;
        positions[i3 + 1] += y * waveFactor;
        positions[i3 + 2] += z * waveFactor;
      }
      
      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleSystem.positions.length / 3}
            array={particleSystem.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particleSystem.colors.length / 3}
            array={particleSystem.colors}
            itemSize={3}
          />
          <bufferAttribute 
            attach="attributes-size"
            count={particleSystem.sizes.length}
            array={particleSystem.sizes}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.15}
          sizeAttenuation={true}
          transparent
          opacity={0.8}
          vertexColors
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
};

export default ParticlesCanvas;
