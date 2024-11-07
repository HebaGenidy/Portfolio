import { useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (event, targetId) => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close the menu if open (for mobile views)
    }
  };

  return (
    <nav id="home" className="cls-navbar">
      <h1 className="cls-logo">Heba.</h1>
      <ul className={`cls-nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
        <li><a href="#about-carrots" onClick={(e) => handleNavClick(e, 'about-carrots')}>About</a></li>
        <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a></li>
        <li><a href="#services" onClick={(e) => handleNavClick(e, 'Projects')}>Projects</a></li>
        <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
      </ul>
      <div className="cls-hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Nav;
