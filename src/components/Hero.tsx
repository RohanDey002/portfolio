import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-background">
                <div className="floating-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                    <div className="shape shape-4"></div>
                    <div className="shape shape-5"></div>
                </div>
            </div>
            
            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-text"
                >
                    <h1 className="hero-title">
                        <span className="greeting">Hello, I'm</span>
                        <span className="name">Your Name</span>
                        <span className="role">Full Stack Developer</span>
                    </h1>
                    <p className="hero-description">
                        I create beautiful, responsive, and user-friendly web applications 
                        using modern technologies. Let's build something amazing together.
                    </p>
                    <div className="hero-buttons">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary"
                        >
                            View My Work
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-secondary"
                        >
                            Download CV
                        </motion.button>
                    </div>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="hero-image"
                >
                    <div className="profile-image">
                        <div className="image-placeholder">
                            <span>Your Photo</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
