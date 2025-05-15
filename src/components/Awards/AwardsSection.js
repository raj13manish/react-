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
      bgImage: "/assets/images/winning-award.png",
      hoverImage: "/assets/images/hover-img-1.jpeg"
    },
    {
      id: 2,
      title: "Shopping Ads Certification 2022",
      category: "Audience Choice",
      bgImage: "/assets/images/vect.png",
      hoverImage: "/assets/images/hover-img-2.jpeg"
    },
    {
      id: 3,
      title: "Google Ads Display Certification 2022",
      category: "Audience Choice",
      bgImage: "/assets/images/awrd.png",
      hoverImage: "/assets/images/hover-img-3.jpeg"
    },
    {
      id: 4,
      title: "Google Ads Search Certification 2022",
      category: "Audience Choice",
      bgImage: "/assets/images/crtf.png",
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
          <h6 className="section-subtitle">Awards & Achievement</h6>
          <h2 className="section-title">Recognition of Our Excellence</h2>
        </motion.div>
        
        <div className="awards-grid">
          {awards.map((award, index) => (
            <motion.div 
              key={award.id} 
              className="award-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              onMouseEnter={() => setHoveredCard(award.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="award-image">
                <img src={award.bgImage} alt={award.title} className="award-bg" />
                <motion.img 
                  src={award.hoverImage} 
                  alt={award.title} 
                  className="award-hover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === award.id ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="award-content">
                <h6 className="award-subtitle">
                  0{award.id}. {award.title}
                </h6>
                <span>{award.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;