import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaPhone } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="logo">My Portfolio</h1>
                <nav className="social-links">
                    <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://leetcode.com/your-profile" target="_blank" rel="noopener noreferrer"><FaCode /></a>
                    <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
                    <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer"><FaPhone /></a>
                </nav>
            </div>
        </header>
    );
}

export default Header;

