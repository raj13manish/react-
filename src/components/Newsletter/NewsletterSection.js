import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './NewsletterSection.css';

const NewsletterSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would connect to your newsletter service
    console.log('Newsletter subscription:', email);
    setSubmitted(true);
    setEmail('');
    
    // Reset submission status after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };
  
  return (
    <section className="newsletter" ref={ref}>
      <div className="container">
        <motion.div 
          className="newsletter-content"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Join Our Newsletter for the Latest Exclusive Content</h2>
          {!submitted ? (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Your email address" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          ) : (
            <motion.div 
              className="newsletter-success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <i className="fas fa-check-circle"></i>
              <p>Thank you for subscribing!</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
