import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";
import '../App.css';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ textAlign: 'center' }}
    >
      <section id="contact">
        <h2><i className="fas fa-envelope"></i> Contact</h2>
        <motion.div 
          className="social-icons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.a 
            href="mailto:aymnrgab@outlook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faEnvelope} title="Email" size="2x" />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/aymanragab" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faLinkedin} title="LinkedIn" size="2x" />
          </motion.a>
          <motion.a 
            href="https://github.com/aymanrgab" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faGithub} title="GitHub" size="2x" />
          </motion.a>
        </motion.div>
      </section>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        © 2024 Ayman Farhan. All rights reserved.
      </motion.p>
    </motion.footer>
  );
}

export default Footer;