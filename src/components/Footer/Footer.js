import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <img src="/assets/images/logo-dark.png" alt="Yashah Media" className="footer-logo" />
            <p>
              Our creative expertise drives innovative, result-oriented strategies that elevate brands and accelerate business growth.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" className="footer-social-icon" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="footer-social-icon" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="footer-social-icon" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" className="footer-social-icon" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="footer-links-section">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li className="footer-link"><Link to="/">Home</Link></li>
              <li className="footer-link"><Link to="/about">About</Link></li>
              <li className="footer-link"><Link to="/services">Services</Link></li>
              <li className="footer-link"><Link to="/work">Our Work</Link></li>
              <li className="footer-link"><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-links-section">
            <h5 className="footer-title">Our Services</h5>
            <ul className="footer-links">
              <li className="footer-link"><Link to="/services">Website Development</Link></li>
              <li className="footer-link"><Link to="/services">Social Media Marketing</Link></li>
              <li className="footer-link"><Link to="/services">SEO</Link></li>
              <li className="footer-link"><Link to="/services">Brand Promotions</Link></li>
              <li className="footer-link"><Link to="/services">Content Writing</Link></li>
            </ul>
          </div>

          <div className="footer-links-section">
            <h5 className="footer-title">Contact Us</h5>
            <ul className="footer-links">
              <li className="footer-link">
                <i className="fas fa-map-marker-alt"></i> Unit No- 2012 DLF Corporate Green Tower A, Sector 74a, SPR Road, Gurgaon
              </li>
              <li className="footer-link">
                <i className="fas fa-phone"></i> +91 98765 43210
              </li>
              <li className="footer-link">
                <i className="fas fa-envelope"></i> info@yashahmedia.com
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Yashah Media Pvt. Ltd. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy" className="footer-bottom-link">Privacy Policy</Link>
            <Link to="/terms-of-service" className="footer-bottom-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;