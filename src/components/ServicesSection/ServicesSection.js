import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceCard from './ServiceCard';
import './ServicesSection.css';

const ServicesSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const services = [
    {
      id: 1,
      title: "Website & App Development",
      description: "We create user-friendly websites and high-performance apps with seamless functionality, engaging experiences, and optimized performance to drive growth.",
      items: [
        "Custom Website Design & Development",
        "Mobile App Development",
        "Ecommerce & CMS Solutions"
      ]
    },
    {
      id: 2,
      title: "Social Media Marketing",
      description: "We help brands grow by creating engaging, data-driven social media strategies. Our approach boosts visibility, drives engagement, and builds strong connections with your audience for measurable business success.",
      items: [
        "Strategy & Campaign Management",
        "Content Creation & Branding",
        "Ads & Performance Marketing"
      ]
    },
    {
      id: 3,
      title: "Product Photography",
      description: "We capture high-quality, visually compelling product images that enhance brand appeal and drive sales. Our professional photography ensures stunning visuals that showcase product details, quality, and uniqueness.",
      items: [
        "Ecommerce Product Photography",
        "Creative & Lifestyle Shoots",
        "Ad & Promotional Photography"
      ]
    },
    {
      id: 4,
      title: "SEO",
      description: "We optimize your online presence to improve search rankings, increase organic traffic, and enhance brand visibility. Our SEO strategies ensure long-term growth and higher conversions.",
      items: [
        "On-Page & Technical SEO",
        "Off-Page SEO & Link Building",
        "Keyword Research & Content Optimization"
      ]
    },
    {
      id: 5,
      title: "Ad Films",
      description: "We create compelling ad films that captivate audiences, enhance brand storytelling, and drive engagement. Our creative approach ensures visually stunning and impactful video content tailored to your brand's vision.",
      items: [
        "Brand Commercials",
        "Product & Service Promotions",
        "Social Media & Digital Ads"
      ]
    },
    {
      id: 6,
      title: "Brand Promotions",
      description: "We elevate your brand's presence through strategic promotions that enhance visibility, engagement, and customer loyalty. Our innovative approach ensures maximum impact across digital and traditional platforms.",
      items: [
        "Influencer & Social Media Campaigns",
        "Digital & Offline Marketing",
        "Event & Product Launch Promotions"
      ]
    },
    {
      id: 7,
      title: "Content Writing",
      description: "We create compelling, high-quality content that engages audiences, enhances brand credibility, and drives conversions. Our strategic approach ensures impactful storytelling across digital platforms.",
      items: [
        "Website & Blog Content",
        "Social Media & Ad Copy",
        "Product Descriptions & Brand Storytelling"
      ]
    }
  ];
  
  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="section-subtitle">Technologies We Specialize In</h6>
          <h2 className="section-title">Our Exceptional Digital Transformation Services</h2>
          <p className="section-description">
            We provide innovative and result-driven digital solutions tailored to your business needs. Our expertise ensures enhanced brand visibility, engagement, and growth in the competitive digital space.
          </p>
        </motion.div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} delay={0.2 * index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;