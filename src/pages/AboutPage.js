import React from 'react';
import PageTransition from '../components/PageTransition';

const AboutPage = () => {
  return (
    <PageTransition>
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about our journey, values, and the team behind Yashah Media</p>
        </div>
      </section>
      
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Yashah Media was founded with a vision to revolutionize the digital marketing landscape. 
                Starting as a small team of passionate professionals in 2015, we've grown into a 
                full-service digital solutions company serving clients across industries.
              </p>
              <p>
                Our journey has been defined by continuous innovation, adaptation to emerging technologies, 
                and an unwavering commitment to delivering exceptional results for our clients.
              </p>
              
              <h3>Our Values</h3>
              <ul className="values-list">
                <li>
                  <strong>Innovation</strong> - We constantly explore new ideas and approaches to 
                  stay ahead in the digital landscape.
                </li>
                <li>
                  <strong>Excellence</strong> - We strive for excellence in everything we do, 
                  ensuring the highest quality in our deliverables.
                </li>
                <li>
                  <strong>Integrity</strong> - We maintain transparency and honesty in all our 
                  client relationships and business practices.
                </li>
                <li>
                  <strong>Collaboration</strong> - We believe in the power of teamwork and 
                  collaborative efforts for achieving remarkable results.
                </li>
              </ul>
            </div>
            
            <div className="about-image">
              <img src='/assets/images/about.jpg' alt="Yashah Media Team"  />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AboutPage;
