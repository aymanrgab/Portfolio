import React, { useState, useEffect } from "react";
import { HashLink } from 'react-router-hash-link';
import { motion } from "framer-motion";

const Header = ({ theme, toggleTheme }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  return (
    <header className={`${theme} ${isSticky ? 'sticky' : ''}`}>
      <motion.div 
        className="header-content"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Ayman Farhan</h1>
        <p>Data Scientist | Machine Learning Engineer</p>
        <nav>
          <HashLink smooth to="#about" scroll={scrollWithOffset}>About</HashLink>
          <HashLink smooth to="#skills" scroll={scrollWithOffset}>Skills</HashLink>
          <HashLink smooth to="#projects" scroll={scrollWithOffset}>Projects</HashLink>
          <HashLink smooth to="#contact" scroll={scrollWithOffset}>Contact</HashLink>
        </nav>
        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
          {theme === "light" ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
        </button>
      </motion.div>
    </header>
  );
};

export default Header;
