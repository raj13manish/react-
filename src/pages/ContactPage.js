import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import Head from '../components/Head';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submission:', formData);
    setSubmitted(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    // Hide success message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <PageTransition>
      <Head 
        title="Contact Us" 
        description="Get in touch with the Yashah Media team for inquiries and collaboration opportunities." 
      />

      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for inquiries and collaboration</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Reach Out to Us</h3>
              <p>We're here to answer any questions you may have about our services, processes, or how we can help your business grow.</p>

              <div className="contact-info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h5>Our Office</h5>
                  <p>Unit No- 2012 DLF Corporate Green Tower A, Sector 74a, SPR Road, Gurgaon</p>
                </div>
              </div>

              <div className="contact-info-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h5>Phone</h5>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="contact-info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h5>Email</h5>
                  <p>info@yashahmedia.com</p>
                </div>
              </div>

              <div className="map-wrapper" style={{ marginTop: "1.5rem" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.410016410571!2d76.99521207534987!3d28.406882475788642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05627b8284cd%3A0x8bd60bbbb772b89c!2sYashah%20Media!5e0!3m2!1sen!2sin!4v1747223898798!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yashah Media Location"
                ></iframe>
              </div>
            </div>

            <div className="contact-form-container">
              {!submitted ? (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-input"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-input form-textarea"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              ) : (
                <div className="contact-success">
                  <i className="fas fa-check-circle"></i>
                  <h3>Thank you for contacting us!</h3>
                  <p>We've received your message and will get back to you shortly.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ContactPage;
