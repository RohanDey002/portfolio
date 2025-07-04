import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-text">
                        <p>
                            Made with <FaHeart className="heart-icon" /> by Your Name
                        </p>
                        <p>&copy; 2023 Portfolio. All rights reserved.</p>
                    </div>
                    <div className="footer-social">
                        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://leetcode.com/your-profile" target="_blank" rel="noopener noreferrer">
                            <FaCode />
                        </a>
                        <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
