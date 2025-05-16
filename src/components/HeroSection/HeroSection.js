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
          WE CREATE IMMERSIVE DIGITAL EXPERIENCES
        </motion.h6>
        
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          BEYOND DIGITAL BOUNDARIES
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Our creative expertise drives innovative, result-oriented strategies that elevate brands 
          and accelerate business growth. From social media marketing to SEO, website development, 
          and brand promotions, we craft compelling digital experiences.
        </motion.p>
        
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link to="/contact" className="btn btn-primary">
            <span>Get Started</span>
          </Link>
          <Link to="/services" className="btn btn-secondary">
            <span>Our Services</span>
          </Link>
        </motion.div>
      </div>
      
      <div className="hero-scroll-indicator">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <span>Scroll Down</span>
          <i className="fas fa-chevron-down"></i>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
