import React from 'react';
import PageTransition from '../components/PageTransition';

const WorkPage = () => {
  return (
    <PageTransition>
      <section className="page-header">
        <div className="container">
          <h1>Our Work</h1>
          <p>Explore our portfolio of successful projects and client collaborations</p>
        </div>
      </section>
      
      <section className="work-content">
        <div className="container">
          <div className="work-filters">
            <button className="work-filter active">All</button>
            <button className="work-filter">Web Development</button>
            <button className="work-filter">Social Media</button>
            <button className="work-filter">Branding</button>
            <button className="work-filter">SEO</button>
          </div>
          
          <div className="work-grid">
            <div className="work-item">
              <div className="work-image">
                <img src="https://placehold.co/600x400/1a1a1a/7B55E8" alt="Project 1" />
                <div className="work-overlay">
                  <div className="work-category">Web Development</div>
                  <h3 className="work-title">E-commerce Platform Redesign</h3>
                  <a href="#" className="work-link">View Project</a>
                </div>
              </div>
            </div>
            
            <div className="work-item">
              <div className="work-image">
                <img src="https://placehold.co/600x400/1a1a1a/4B7DFD" alt="Project 2" />
                <div className="work-overlay">
                  <div className="work-category">Social Media</div>
                  <h3 className="work-title">Brand Awareness Campaign</h3>
                  <a href="#" className="work-link">View Project</a>
                </div>
              </div>
            </div>
            
            {/* Additional portfolio items would be added here */}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default WorkPage;
