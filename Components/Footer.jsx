import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer id='services' className="cls-footer">
            <div className="cls-footer-left">
                &copy; 2024 Heba Mohamed. All rights reserved.
            </div>
            <div className="cls-footer-right">
                <a href="https://github.com/HebaGenidy" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/heba-mohamed-a60b42334" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedinIn />
                </a>
                <a href="heba.mohamed@btu.edu.eg" aria-label="Email">
                    <FaEnvelope />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
