import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import frame1 from "../Assets/frame4.png"
import frame2 from "../Assets/frame2.png"
import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import home1 from "../Assets/home1.jpeg"
import home2 from "../Assets/home2.jpeg"
import home3 from "../Assets/home3.jpeg"
import home4 from "../Assets/home4.jpeg"
import home5 from "../Assets/home5.jpeg"

const Home = () => {
  

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };


  const services = [
    {
      title: 'Agentic AI Systems',
      description: 'Build AI assistants that act, think, and plan like humans',
      image: `url(${home1})`,
    },
    {
      title: 'LLM Solutions',
      description: 'Fine-tuned, secure large language models tailored to your domain',
      image: `url(${home2})`,
    },
    {
      title: 'Computer Vision',
      description: 'From object detection to medical imaging, we help machines see clearly',
      image: `url(${home3})`,
    },
    {
      title: 'Development',
      description: 'Build, scale, and deploy digital products with AI at the core',
      image: `url(${home4})`,
    },
    {
      title: 'API-as-a-Service',
      description: 'Plug in AI features with one line of code. Scalable. Reliable. Fast.',
      image: `url(${home5})`,
    }
  ];

  const testimonials = [
    {
      text: "Their custom LLM saved us over 40 hours a week in manual work. And their team? Incredibly responsive and thoughtful.",
      author: "Ananya Rao",
      position: "COO, LexSecure LegalTech"
    },
    {
      text: "We integrated their API for image captioning in under a day — and it scaled beautifully. Our team was blown away by the accuracy.",
      author: "Rajat Mehra",
      position: "CTO, VizTrack Analytics"
    },
    {
      text: "Honestly, I thought AI was out of our league. But their edge-ready posture system transformed our physiotherapy platform. It just works.",
      author: "Dr. Neha Balan",
      position: "Co-founder, MoviThera Health"
    }
  ];

  const achievements = [
    {
      text: "Deployed 15+ AI-powered products across healthcare, fintech, edtech, and manufacturing.",
      color: "#0A2647"
    },
    {
      text: "Clients in 6 countries — with seamless deployment across cloud and edge.",
      color: "#134886"
    },
    {
      text: "98% API uptime and auto-scalable infrastructure for mission-critical workloads.",
      color: "#1C69C4"
    },
    {
      text: "Partnered with leading research institutions for AI innovation in assistive tech.",
      color: "rgba(10, 38, 71, 0.10)"
    },
    {
      text: "Selected for India's Top 100 DeepTech Startups list, 2024.",
      color: "rgba(10, 38, 71, 0.10)"
    }
  ];

  

  return (
    <div className="home-page">
      {/* Hero Section */}
      <motion.section
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage:`url(${frame1}) `,
          backgroundColor: '#0A2647',
          backgroundSize: 'cover',
        }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          {...fadeIn}>Commoditizing AI</motion.h1>
        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Making intelligent systems accessible, affordable, and actionable — for everyone.
        </motion.p>
        {/* services button */}
        <button style={{
          paddingLeft: '40px',
          paddingRight: '40px',
          paddingTop: '10px',
          paddingBottom: '10px',
          borderRadius: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer'
        }}>
          <div style={{
            textAlign: 'center',
            color: 'black',
            fontSize: '20px',
            fontWeight: '500',
            lineHeight: '30px'
          }}><Link to="/services" className="explore-link">Our Services</Link></div>
        </button>
      </motion.section>

      {/* Welcome Section */}
      <motion.section
        className="welcome-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        // style={{background:'black'}}
        style={{ backgroundImage:`url(${frame2})`, backgroundSize: 'cover'}}
      >
        <p style={{color:'white',fontSize:'30px'}}>Welcome to Neurostack</p>
        <p style={{color:'white',fontSize:'20px'}}>We're not just building AI — <span style={{color:'#0A2647'}}>we're simplifying it, scaling it, and putting it to work for businesses like yours.</span> From custom-trained LLMs to powerful vision APIs and edge-ready agents, our solutions are built to plug into your world without the complexity.</p>
        <p style={{color:'white',fontSize:'20px'}}>Whether you want to transform your existing workflow or launch an AI-native product, we help you move faster — with solutions that are smart, scalable, and production-ready.</p>
      </motion.section>

      {/* Services Preview */}
      <section className="services-preview">
        <h2>What We Offer</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              style={{ background: '#FEFFF3', padding: '25px', borderRadius: '30px', height: '402px', width: '328px', flexDirection: 'column', gap: '20px', display: 'flex', justifyContent: "space-evenly" }}
            >
              <div style={{ height: "40px", width: "277px", background: '#FF9C55', borderRadius: '40px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ height: '40px', width: '40px', borderRadius: '100%', background: '#FFCEAA', display: 'flex', justifyContent: 'center', alignItems: 'center',paddingTop:'10px' }}>
                  <h3>{index + 1}</h3>
                </div>

                <h3 style={{paddingTop:'10px'}}>{service.title}</h3>


              </div>
              <div
              style={{ width: '277px', height: '124px', borderRadius: "20px",backgroundImage:service.image,backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >
              </div>

              <p>{service.description}</p>           
            </motion.div>
          ))}
          <motion.div
          className="explore-all-services" 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',borderRadius:'40px',height:'50px',width:'277px',marginTop:'180px',marginLeft:'40px',cursor:'pointer' }}>
          <Link to="/services" className="explore-link">
          Explore All Services →
        </Link>
          </motion.div>
           
        </div>
        
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 * index, duration: 0.5 }}
            >
              <span className="stars">⭐️⭐️⭐️⭐️⭐️</span>
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-author">— {testimonial.author}</p>
              <p className="testimonial-position">{testimonial.position}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* new achievement */}
      <section className="achievements">
      <h2>Our Achievements</h2>
      
      <div className="achievements-container">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="achievement-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
          >
            <div className="achievement-icon" />
            <div 
              className="achievement-text"
              style={{ color: achievement.color }}
            >
              {achievement.text}
            </div>
          </motion.div>
        ))}
      </div>
    </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to See What AI Can Do for You?</h2>
        <p>Let's talk. Whether you're just exploring or ready to scale, we're here to build with you.</p>
        <div className="cta-buttons">
          <Link to="/contact" className="cta-button secondary">Talk to Our Team</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
