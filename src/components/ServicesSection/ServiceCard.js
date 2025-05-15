import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ service, delay, inView }) => {
  return (
    <motion.div 
      className="service-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, boxShadow: '0 20px 30px rgba(0, 0, 0, 0.2)' }}
    >
      <span className="service-number">{service.id < 10 ? `0${service.id}` : service.id}</span>
      <h4 className="service-title">{service.title}</h4>
      <p className="service-description">{service.description}</p>
      <ul className="service-list">
        {service.items.map((item, index) => (
          <li key={index} className="service-list-item">{item}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;