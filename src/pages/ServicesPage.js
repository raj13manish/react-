import React from 'react';
import PageTransition from '../components/PageTransition';

const ServicesPage = () => {
  return (
    <PageTransition>
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Discover our comprehensive range of digital solutions</p>
        </div>
      </section>
      
      <section className="services-content">
        <div className="container">
          <div className="services-detail-grid">
            <div className="service-detail-card">
              <div className="service-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>Website & App Development</h3>
              <p>
                Our expert developers create stunning, functional websites and mobile applications 
                that deliver exceptional user experiences. We focus on responsive design, 
                seamless functionality, and optimal performance to help your business thrive in 
                the digital world.
              </p>
              <ul className="service-features">
                <li>Custom Website Design & Development</li>
                <li>Mobile App Development</li>
                <li>E-commerce Solutions</li>
                <li>Content Management Systems</li>
                <li>Website Maintenance & Support</li>
              </ul>
            </div>
            
            <div className="service-detail-card">
              <div className="service-icon">
                <i className="fas fa-hashtag"></i>
              </div>
              <h3>Social Media Marketing</h3>
              <p>
                Our social media strategies help brands connect with their audience, build 
                engagement, and drive conversions. Through targeted campaigns, compelling content, 
                and data-driven analytics, we enhance your brand presence across social platforms.
              </p>
              <ul className="service-features">
                <li>Social Media Strategy Development</li>
                <li>Content Creation & Curation</li>
                <li>Community Management</li>
                <li>Paid Social Media Advertising</li>
                <li>Performance Analysis & Reporting</li>
              </ul>
            </div>
            
            {/* Additional services would be added here */}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ServicesPage;
