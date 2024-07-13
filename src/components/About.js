import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <motion.section 
    id="about" 
    className="about-section"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2><i className="fas fa-user"></i> About Me</h2>
    <motion.p 
      className="about-text"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      I'm a passionate data scientist with expertise in machine learning, statistical analysis, and data visualization. I specialize in developing innovative solutions to complex data problems and turning insights into actionable strategies.
    </motion.p>
    <motion.div 
      className="cta-buttons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <a href="#contact" className="cta-button primary">Contact Me</a>
      <a href="#projects" className="cta-button secondary">View Projects</a>
    </motion.div>
  </motion.section>
);

export default About;