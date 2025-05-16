import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './AwardsSection.css';

const AwardsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
   const awards = [
    {
      id: 1,
      title: "Business Excellence Awards 2023",
      category: "Audience Choice",
      bgImage: "/assets/images/hover-1.png",
      hoverImage: "/assets/images/hover-img-1.jpg"

    },
    {
      id: 2,
      title: "Shopping Ads Certification 2022",
      category: "Audience Choice",
      bgImage: "/assets/images/hover-2.png",
      hoverImage: "/assets/images/hover-img-2.jpeg"
    },
    {
      id: 3,
      title: "Google Ads Display Certification 2022",
      category: "Audience Choice",
      bgImage: "/assets/images/hover-3.png",
      hoverImage: "/assets/images/hover-img-3.jpeg"
    },
    {
      id: 4,
      title: "Google Ads Search Certification 2022",
      category: "Audience Choice",
      bgImage: "/assets/images/hover-4.png",
      hoverImage: "/assets/images/hover-img-4.jpeg"
    }
  ];
  
  
  // State for tracking hover card
  const [hoveredCard, setHoveredCard] = useState(null);
  
  return (
    <section className="awards" id="awards" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="section-subtitle">ACHIEVEMENTS & RECOGNITION</h6>
          <h2 className="section-title">Our Award-Winning Excellence</h2>
          <p className="section-description">
            Our commitment to quality and innovation has been recognized through numerous industry awards and certifications.
          </p>
        </motion.div>
        
        <div className="awards-grid">
          {awards.map((award, index) => (
            <motion.div 
              key={award.id} 
              className="award-card"
              initial={{ opacity: 0, y: 50, rotateY: 30 }}
              animate={inView ? { 
                opacity: 1, 
                y: 0,
                rotateY: 0,
                transition: { 
                  duration: 0.8, 
                  delay: 0.15 * index,
                  type: "spring",
                  stiffness: 100
                }
              } : { opacity: 0, y: 50, rotateY: 30 }}
              onMouseEnter={() => setHoveredCard(award.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="award-image">
                <motion.img 
                  src={award.bgImage} 
                  alt={award.title} 
                  className="award-bg"
                  animate={{ 
                    scale: hoveredCard === award.id ? 1.1 : 1,
                    opacity: hoveredCard === award.id ? 0.7 : 1
                  }}
                  transition={{ duration: 0.4 }}
                />
                <motion.img 
                  src={award.hoverImage} 
                  alt={award.title} 
                  className="award-hover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === award.id ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <motion.div 
                className="award-content"
                animate={{ 
                  y: hoveredCard === award.id ? 0 : 30,
                  opacity: hoveredCard === award.id ? 1 : 0.8
                }}
                transition={{ duration: 0.4 }}
              >
                <h6 className="award-subtitle">
                  {award.id < 10 ? `0${award.id}` : award.id}. {award.title}
                </h6>
                <span>{award.category}</span>
                
                <motion.div 
                  className="award-view-btn"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: hoveredCard === award.id ? 1 : 0,
                    scale: hoveredCard === award.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span>View Details</span>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
