import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const FloatingObjects = ({ count = 15 }) => {
  const particles = useRef([]);
  
  // Create a simple geometry for floating objects
  const geometry = new THREE.IcosahedronGeometry(1, 0);
  
  // Create array of colors
  const colors = [
    new THREE.Color('#7B55E8'),
    new THREE.Color('#4B7DFD'),
    new THREE.Color('#6366F1')
  ];
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    particles.current.forEach((particle, i) => {
      // Custom animation for each particle
      const x = Math.sin(time * 0.1 + i) * 0.5;
      const y = Math.cos(time * 0.1 + i * 0.8) * 0.5;
      
      particle.position.x += x * 0.01;
      particle.position.y += y * 0.01;
      
      // Constrain movement to keep particles in view
      if (particle.position.x > 10) particle.position.x = 10;
      if (particle.position.x < -10) particle.position.x = -10;
      if (particle.position.y > 10) particle.position.y = 10;
      if (particle.position.y < -10) particle.position.y = -10;
    });
  });
  
  const meshes = Array.from({ length: count }, (_, i) => {
    // Create random positions
    const x = (Math.random() - 0.5) * 20;
    const y = (Math.random() - 0.5) * 20;
    const z = (Math.random() - 0.5) * 8 - 5;
    
    // Create random sizes
    const scale = Math.random() * 0.5 + 0.1;
    
    // Create random rotation speeds
    const rotationSpeed = Math.random() * 0.01;
    
    // Select random color
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    return (
      <Float 
        key={i} 
        speed={1} 
        rotationIntensity={rotationSpeed} 
        floatIntensity={2}
      >
        <mesh 
          ref={el => particles.current[i] = el}
          position={[x, y, z]}
          scale={scale}
          geometry={geometry}
          rotation={[
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            0
          ]}
        >
          <meshStandardMaterial 
            color={color} 
            roughness={0.4}
            metalness={0.8}
            emissive={color}
            emissiveIntensity={0.5} 
          />
        </mesh>
      </Float>
    );
  });
  
  return <>{meshes}</>;
};

export default FloatingObjects;