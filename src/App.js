import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading assets
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    // Create background ripple effect
    const createRipple = () => {
      const rippleContainer = document.createElement('div');
      rippleContainer.classList.add('background-ripple');
      
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const size = Math.random() * 200 + 100;
      const duration = Math.random() * 10 + 10; // seconds
      
      rippleContainer.style.left = `${x}px`;
      rippleContainer.style.top = `${y}px`;
      rippleContainer.style.width = `${size}px`;
      rippleContainer.style.height = `${size}px`;
      rippleContainer.style.animationDuration = `${duration}s`;
      
      document.body.appendChild(rippleContainer);
      
      // Remove the ripple after animation completes
      setTimeout(() => {
        document.body.removeChild(rippleContainer);
      }, duration * 1000);
    };
    
    // Create ripples periodically
    const rippleInterval = setInterval(createRipple, 8000);
    createRipple(); // Create one immediately
    
    return () => clearInterval(rippleInterval);
  }, []);
  
  // Add styles for ripple effect to the document
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .background-ripple {
        position: fixed;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(0, 198, 255, 0.05) 0%, transparent 70%);
        pointer-events: none;
        z-index: 0;
        opacity: 0;
        transform: scale(0);
        animation: rippleEffect ease-out forwards;
      }
      
      @keyframes rippleEffect {
        0% {
          opacity: 0;
          transform: scale(0);
        }
        20% {
          opacity: 0.5;
          transform: scale(0.5);
        }
        100% {
          opacity: 0;
          transform: scale(1);
        }
      }
    `;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);
  
  if (loading) {
    return <LoadingScreen />;
  }
  
    return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
