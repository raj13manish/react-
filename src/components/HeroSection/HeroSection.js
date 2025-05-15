import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Scene3D from '../3DElements/Scene3D';
import './HeroSection.css';

const HeroSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  return (
    <section className="hero" ref={ref}>
      <div className="hero-canvas">
        <Scene3D sceneName="hero" />
      </div>
      
      <div className="container hero-content">
        <motion.h6
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We thrive on creativity and innovation. Our team is constantly exploring new.
        </motion.h6>
        
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Beyond Digital Boundaries
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Our creative expertise drives innovative, result-oriented strategies that elevate brands and accelerate business growth. From social media marketing to SEO, website development, and brand promotions, we craft compelling digital experiences.
        </motion.p>
        
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
          <Link to="/services" className="btn btn-secondary">Our Services</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
