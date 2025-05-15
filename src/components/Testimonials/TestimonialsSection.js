import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const testimonials = [
    {
      id: 1,
      text: "Yashah Media transformed our online presence with their innovative strategies. Their team is highly professional, creative, and result-driven. Highly recommended for digital growth!",
      name: "Amit Sharma",
      location: "New Delhi",
      image: "/assets/images/user.png"
    },
    {
      id: 2,
      text: "Exceptional service! Their social media marketing and branding expertise helped us reach a wider audience and boost engagement. Truly a game-changer for our business.",
      name: "Neha Verma",
      location: "Gurugram",
      image: "/assets/images/profile.png"
    },
    {
      id: 3,
      text: "Their website and app development services exceeded our expectations. The designs were modern, user-friendly, and perfectly aligned with our brand vision. Great job!",
      name: "Rahul Khanna",
      location: "New Delhi",
      image: "/assets/images/user.png"
    },
    {
      id: 4,
      text: "From content writing to ad films, every service was top-notch. Their creativity and attention to detail truly set them apart. Extremely satisfied with their work!",
      name: "Vikas Mehta",
      location: "Noida",
      image: "/assets/images/user.png"
    }
  ];
  
  // State for auto-sliding testimonials
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // Auto rotate testimonials
  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [inView, testimonials.length]);
  
  return (
    <section className="testimonials" ref={ref}>
      <div className="container testimonials-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="section-subtitle">Client Testimonials</h6>
          <h2 className="section-title">What Our Clients Say</h2>
        </motion.div>
        
        <div className="testimonials-slider">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTestimonial}
              className="testimonial-card active"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <p className="testimonial-text">"{testimonials[activeTestimonial].text}"</p>
              <div className="testimonial-author">
                <img 
                  src={testimonials[activeTestimonial].image} 
                  alt={testimonials[activeTestimonial].name} 
                  className="testimonial-author-image" 
                />
                <div>
                  <h6>{testimonials[activeTestimonial].name}</h6>
                  <span>{testimonials[activeTestimonial].location}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`testimonial-dot ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;