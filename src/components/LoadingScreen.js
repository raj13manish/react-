import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <motion.div 
        className="loading-logo"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.8,
          type: "spring",
          stiffness: 100
        }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100">
          <motion.circle 
            cx="50" 
            cy="50" 
            r="30"
            stroke="#00c6ff"
            strokeWidth="4"
            fill="none"
            initial={{ pathLength: 0, rotate: -90 }}
            animate={{ pathLength: 1, rotate: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle 
            cx="50" 
            cy="50" 
            r="20"
            stroke="#0072ff"
            strokeWidth="4"
            fill="none"
            initial={{ pathLength: 0, rotate: 90 }}
            animate={{ pathLength: 1, rotate: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.circle 
            cx="50" 
            cy="50" 
            r="10"
            stroke="#7b2ff7"
            strokeWidth="4"
            fill="none"
            initial={{ pathLength: 0, rotate: -90 }}
            animate={{ pathLength: 1, rotate: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </svg>
      </motion.div>
      
      <motion.div 
        className="loading-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3>YASHAH MEDIA</h3>
        <p>Creating Digital Excellence</p>
      </motion.div>
      
      <motion.div
        className="loading-progress"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2 }}
      />
      
      <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: var(--darker-bg);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }
        
        .loading-logo {
          margin-bottom: 2rem;
        }
        
        .loading-text {
          text-align: center;
        }
        
        .loading-text h3 {
          background: linear-gradient(to right, #00c6ff, #0072ff, #7b2ff7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
          letter-spacing: 3px;
        }
        
        .loading-text p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          letter-spacing: 1px;
        }
        
        .loading-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(to right, #00c6ff, #0072ff, #7b2ff7);
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
