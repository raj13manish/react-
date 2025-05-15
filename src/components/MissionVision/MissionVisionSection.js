import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import './MissionVisionSection.css';

// 3D Shape Component for Mission Vision Section
const Shape = ({ position, color, scale = 1, rotation = [0, 0, 0] }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh position={position} rotation={rotation} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.5}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
};

// Environment component for better lighting
const Environment = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
    </>
  );
};

const MissionVisionSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const items = [
    {
      id: 1,
      title: "Strategic Marketing",
      description: "We develop data-driven strategic marketing plans to enhance brand visibility, drive engagement, and maximize ROI. Our tailored approach ensures targeted audience reach, stronger market positioning, and sustainable business growth across digital and traditional platforms."
    },
    {
      id: 2,
      title: "Our Mission",
      description: "Our mission is to empower brands with innovative digital solutions, enhancing visibility, engagement, and growth. We strive to deliver result-driven strategies that create lasting impact and help businesses thrive in a competitive landscape."
    },
    {
      id: 3,
      title: "Our Vision",
      description: "Our vision is to be a leading digital solutions provider, driving innovation and excellence. We aim to transform brands with creative strategies, cutting-edge technology, and impactful storytelling for long-term success."
    }
  ];
  
  return (
    <section className="mission-vision" ref={ref}>
      <div className="mission-vision-canvas">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <Suspense fallback={null}>
            <Environment />
            <Shape position={[-6, 3, -5]} color="#7B55E8" scale={1.2} rotation={[0.5, 0.5, 0]} />
            <Shape position={[6, -3, -2]} color="#4B7DFD" scale={0.8} rotation={[0.2, 0.4, 0.3]} />
            <Shape position={[0, 4, -3]} color="#6366F1" scale={0.5} rotation={[0.1, 0.2, 0.5]} />
            <Shape position={[-4, -5, -4]} color="#7B55E8" scale={0.7} rotation={[0.3, 0.1, 0.2]} />
            <Shape position={[5, 5, -6]} color="#4B7DFD" scale={0.6} rotation={[0.1, 0.5, 0.2]} />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="container">
        <div className="mission-vision-grid">
          {items.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="mission-vision-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              whileHover={{ 
                y: -5,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
                background: 'linear-gradient(135deg, rgba(123, 85, 232, 0.05) 0%, rgba(75, 125, 253, 0.05) 100%)'
              }}
            >
              <h6>{item.title}</h6>
              <p>{item.description}</p>
              <span className="mission-vision-number">0{item.id}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
