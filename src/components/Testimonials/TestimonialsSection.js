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
      position: "Marketing Director",
      company: "TechCorp Ltd.",
      location: "New Delhi",
      image: "/assets/images/testimonials/tes2.png"
    },
    {
      id: 2,
      text: "Exceptional service! Their social media marketing and branding expertise helped us reach a wider audience and boost engagement. Truly a game-changer for our business.",
      name: "Neha Verma",
      position: "CEO",
      company: "StyleHouse",
      location: "Gurugram",
      image: "/assets/images/testimonials/tes1.jpg"
    },
    {
      id: 3,
      text: "Their website and app development services exceeded our expectations. The designs were modern, user-friendly, and perfectly aligned with our brand vision. Great job!",
      name: "Rahul Khanna",
      position: "Product Manager",
      company: "InnovateTech",
      location: "New Delhi",
      image: "/assets/images/testimonials/tes2.png"
    },
    {
      id: 4,
      text: "From content writing to ad films, every service was top-notch. Their creativity and attention to detail truly set them apart. Extremely satisfied with their work!",
      name: "Vikas Mehta",
      position: "Brand Director",
      company: "GlobalBrand Inc.",
      location: "Noida",
      image: "/assets/images/testimonials/tes2.png"
    }
  ];
  
  // State for auto-sliding testimonials
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  
  // Auto rotate testimonials
  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => {
        if (prev === testimonials.length - 1) {
          setDirection(-1);
          return prev - 1;
        } else if (prev === 0) {
          setDirection(1);
          return prev + 1;
        } else {
          return prev + direction;
        }
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, [inView, testimonials.length, direction]);
  
  const handlePrevious = () => {
    setDirection(-1);
    setActiveTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  
  const handleNext = () => {
    setDirection(1);
    setActiveTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };
  
  return (
    <section className="testimonials" ref={ref}>
      <div className="container testimonials-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="section-subtitle">CLIENT TESTIMONIALS</h6>
          <h2 className="section-title">What Our Clients Say</h2>
        </motion.div>
        
        <div className="testimonials-slider-container">
          <button 
            className="testimonial-nav testimonial-prev" 
            onClick={handlePrevious}
            aria-label="Previous testimonial"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="testimonials-slider">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTestimonial}
                className="testimonial-card"
                initial={{ 
                  opacity: 0, 
                  x: direction > 0 ? 100 : -100,
                  scale: 0.8
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  scale: 1
                }}
                exit={{ 
                  opacity: 0, 
                  x: direction > 0 ? -100 : 100,
                  scale: 0.8
                }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              >
                <div className="testimonial-quote-icon">
                  <i className="fas fa-quote-right"></i>
                </div>
                <p className="testimonial-text">{testimonials[activeTestimonial].text}</p>
                <div className="testimonial-author">
                  <img 
                    src={testimonials[activeTestimonial].image} 
                    alt={testimonials[activeTestimonial].name} 
                    className="testimonial-author-image" 
                  />
                  <div className="testimonial-author-info">
                    <h6>{testimonials[activeTestimonial].name}</h6>
                    <p className="testimonial-position">
                      {testimonials[activeTestimonial].position}, {testimonials[activeTestimonial].company}
                    </p>
                    <span className="testimonial-location">
                      <i className="fas fa-map-marker-alt"></i> {testimonials[activeTestimonial].location}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <button 
            className="testimonial-nav testimonial-next" 
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              className={`testimonial-dot ${index === activeTestimonial ? 'active' : ''}`}
              onClick={() => {
                setDirection(index > activeTestimonial ? 1 : -1);
                setActiveTestimonial(index);
              }}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
