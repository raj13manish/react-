import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingObjects = ({ count = 15, complexity = 'high' }) => {
  const particles = useRef([]);
  
  // Create a variety of geometries for more visual interest
  const geometries = [
    new THREE.IcosahedronGeometry(1, 0), // Simple geometry
    new THREE.TetrahedronGeometry(1, 0),
    new THREE.OctahedronGeometry(1, 0),
    complexity === 'high' ? new THREE.TorusKnotGeometry(0.7, 0.2, 64, 8, 2, 3) : null,
    complexity === 'high' ? new THREE.SphereGeometry(1, 32, 32) : null
  ].filter(Boolean);
  
  // Create array of colors with the new color scheme
  const colors = [
    new THREE.Color('#00c6ff'), // Primary
    new THREE.Color('#0072ff'), // Secondary
    new THREE.Color('#7b2ff7'), // Accent
    new THREE.Color('#00e1ff'),
    new THREE.Color('#6c00ff')
  ];
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    particles.current.forEach((particle, i) => {
      if (!particle) return;
            // More complex animation paths using sine/cosine variations
      const factor = i * 0.2;
      const xFactor = Math.sin(time * 0.1 + i) * Math.cos(time * 0.05 + i * 0.5) * 0.5;
      const yFactor = Math.cos(time * 0.1 + i * 0.8) * Math.sin(time * 0.05 + i * 0.3) * 0.5;
      const zFactor = Math.sin(time * 0.05 + i * 0.2) * 0.3;
      
      particle.position.x += xFactor * 0.01;
      particle.position.y += yFactor * 0.01;
      particle.position.z += zFactor * 0.01;
      
      // Rotation animation
      particle.rotation.x = Math.sin(time * (0.2 + factor * 0.1)) * 0.5;
      particle.rotation.y = Math.cos(time * (0.15 + factor * 0.05)) * 0.5;
      particle.rotation.z += 0.005 * (i % 2 ? 1 : -1);
      
      // Constrain movement to keep particles in view
      if (particle.position.x > 10) particle.position.x = 10;
      if (particle.position.x < -10) particle.position.x = -10;
      if (particle.position.y > 10) particle.position.y = 10;
      if (particle.position.y < -10) particle.position.y = -10;
      if (particle.position.z > 10) particle.position.z = 2;
      if (particle.position.z < -10) particle.position.z = -2;
    });
  });
  
  const meshes = Array.from({ length: count }, (_, i) => {
    // Create random positions
    const x = (Math.random() - 0.5) * 20;
    const y = (Math.random() - 0.5) * 20;
    const z = (Math.random() - 0.5) * 8 - 5;
    
    // Create random sizes
    const scale = Math.random() * 0.7 + 0.2;
    
    // Create random rotation speeds
    const rotationSpeed = Math.random() * 0.02 + 0.005;
    
    // Select random geometry
    const geometry = geometries[Math.floor(Math.random() * geometries.length)];
    
    // Select random color
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Add variation in float speed and intensity based on size
    const floatSpeed = Math.random() * 2 + 1;
    const rotationIntensity = Math.random() * 1 + 0.2;
    const floatIntensity = Math.random() * 2 + 0.5;
    
    return (
      <Float 
        key={i} 
        speed={floatSpeed} 
        rotationIntensity={rotationIntensity} 
        floatIntensity={floatIntensity}
      >
        <mesh 
          ref={el => particles.current[i] = el}
          position={[x, y, z]}
          scale={scale}
          geometry={geometry}
          rotation={[
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
          ]}
        >
          {Math.random() > 0.5 ? (
            <meshStandardMaterial 
              color={color} 
              roughness={0.2}
              metalness={0.8}
              emissive={color}
              emissiveIntensity={0.4} 
              wireframe={Math.random() > 0.7}
            />
          ) : (
            <MeshDistortMaterial
              color={color}
              roughness={0.2}
              metalness={0.8}
              distort={0.4}
              speed={2}
              emissive={color}
              emissiveIntensity={0.3}
            />
          )}
        </mesh>
      </Float>
    );
  });
  
  return <>{meshes}</>;
};

export default FloatingObjects;
