import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <motion.div 
        className="loading-logo"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src="/assets/images/logo-dark.png" alt="Yashah Media" />
      </motion.div>
      
      <div className="loading-spinner">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="spinner"
        />
      </div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="loading-text"
      >
        Loading amazing experiences...
      </motion.p>
      
      <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #0a0a0a;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }
        
        .loading-logo {
          margin-bottom: 2rem;
        }
        
        .loading-logo img {
          height: 60px;
          width: auto;
        }
        
        .loading-spinner {
          margin-bottom: 1rem;
        }
        
        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(255, 255, 255, 0.1);
          border-top-color: #7B55E8;
          border-radius: 50%;
        }
        
        .loading-text {
          font-size: 0.9rem;
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
