import React, { useState, useEffect } from "react";
import { HashLink } from 'react-router-hash-link';

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
    const yOffset = -80; // Adjust this value based on your header height
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  return (
    <header className={`${theme} ${isSticky ? 'sticky' : ''}`}>
      <div className="header-content">
        <h1>Ayman Farhan</h1>
        <p>Data Scientist | Machine Learning Engineer</p>
        <nav>
          <HashLink smooth to="#about" scroll={scrollWithOffset}>About</HashLink>
          <HashLink smooth to="#skills" scroll={scrollWithOffset}>Skills</HashLink>
          <HashLink smooth to="#projects" scroll={scrollWithOffset}>Projects</HashLink>
          <HashLink smooth to="#contact" scroll={scrollWithOffset}>Contact</HashLink>
        </nav>
      </div>
      <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
        {theme === "light" ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
      </button>
    </header>
  );
};

export default Header;