import { motion } from 'framer-motion';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="contact-page">
      {/* Contact Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-hero-content"
          >
            <h1>Get in Touch</h1>
            <p>Let's discuss how we can help advance your neurotechnology goals</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="contact-info"
            >
              <h2>Contact Information</h2>
              <p className="contact-subtitle">Reach out to us directly or fill out the form and we'll get back to you promptly.</p>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <i className="info-icon icon-location"></i>
                  </div>
                  <div className="info-content">
                    <h3>Location</h3>
                    <p>123 Innovation Drive<br />Silicon Valley, CA 94025</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <i className="info-icon icon-phone"></i>
                  </div>
                  <div className="info-content">
                    <h3>Call Us</h3>
                    <p>6382624227</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <i className="info-icon icon-email"></i>
                  </div>
                  <div className="info-content">
                    <h3>Email Us</h3>
                    <p className="email-link">business@neurostack.in</p>
                  </div>
                </div>
              </div>
              
              
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="contact-form"
            >
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>Tell us about your project and needs</p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your project or inquiry in detail..."
                    required
                    rows="5"
                  ></textarea>
                </div>
                
                <div className="form-footer"> 
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="button button-primary"
                  >
                    Submit
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;