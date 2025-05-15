import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useTexture, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import FloatingObjects from './FloatingObjects';
import ParticlesCanvas from './ParticlesCanvas';

const Scene3D = ({ sceneName = 'default' }) => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 60 }}>
      <SceneContent sceneName={sceneName} />
    </Canvas>
  );
};

const SceneContent = ({ sceneName }) => {
  const { gl } = useThree();
  gl.setClearColor('#0a0a0a');
  
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {sceneName === 'hero' && (
        <>
          <FloatingObjects count={15} />
          <ParticlesCanvas count={1500} />
          <WavySphere position={[-8, 2, -10]} color="#7B55E8" scale={3} />
          <WavySphere position={[8, -3, -5]} color="#4B7DFD" scale={2} />
        </>
      )}
      
      {sceneName === 'services' && (
        <>
          <FloatingObjects count={10} />
          <ParticlesCanvas count={800} />
        </>
      )}
      
      {sceneName === 'awards' && (
        <>
          <FloatingObjects count={5} />
          <ParticlesCanvas count={500} />
        </>
      )}
      
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Suspense>
  );
};

// Additional 3D element - Wavy Sphere
const WavySphere = ({ position, color, scale = 1 }) => {
  const mesh = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(time / 4) * 0.3;
      mesh.current.rotation.y = Math.sin(time / 2) * 0.3;
    }
  });
  
  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <MeshDistortMaterial
        color={color}
        roughness={0.3}
        metalness={0.8}
        distort={0.4}
        speed={2}
      />
    </mesh>
  );
};

export default Scene3D;
