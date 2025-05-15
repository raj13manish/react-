import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedBackground = () => {
  const meshRef = useRef();
  
  // Load texture for the background
  const texture = useTexture('/assets/images/stars/star-2.png');
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(5, 5);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.1;
    
    // Animate the texture coordinates
    texture.offset.x = time * 0.05;
    texture.offset.y = time * 0.03;
    
    // Subtle rotation of the background plane
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(time * 0.2) * 0.02;
    }
  });
  
  return (
    <mesh ref={meshRef} position={[0, 0, -10]} rotation={[0, 0, 0]}>
      <planeGeometry args={[50, 50]} />
      <meshBasicMaterial 
        map={texture} 
        transparent
        opacity={0.4}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        color="#3a2d8f"
      />
    </mesh>
  );
};

export default AnimatedBackground;