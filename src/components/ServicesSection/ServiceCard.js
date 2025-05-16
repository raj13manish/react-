import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ service, delay, inView }) => {
  // Icons for services based on service ID
  const serviceIcons = {
    1: <i className="fas fa-laptop-code"></i>,
    2: <i className="fas fa-hashtag"></i>,
    3: <i className="fas fa-camera"></i>,
    4: <i className="fas fa-search"></i>,
    5: <i className="fas fa-film"></i>,
    6: <i className="fas fa-bullhorn"></i>,
    7: <i className="fas fa-pen-fancy"></i>
  };

  return (
    <motion.div 
      className="service-card"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.8, 
        delay, 
        type: "spring", 
        stiffness: 100 
      }}
      whileHover={{ 
        y: -15,
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
      }}
    >
      <div className="service-icon">
        {serviceIcons[service.id]}
      </div>
      <span className="service-number">{service.id < 10 ? `0${service.id}` : service.id}</span>
      
      <h4 className="service-title">{service.title}</h4>
      <p className="service-description">{service.description}</p>
      
      <ul className="service-list">
        {service.items.map((item, index) => (
          <motion.li 
            key={index} 
            className="service-list-item"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ 
              duration: 0.5, 
              delay: delay + 0.1 * (index + 1)
            }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
      
      <motion.div 
        className="service-cta"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: delay + 0.5 }}
      >
        <a href="#" className="service-link">Learn More</a>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
