import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="about-content"
                >
                    <h2 className="section-title" data-aos="fade-up">About Me</h2>
                    <div className="about-grid">
                        <div className="about-text" data-aos="fade-right">
                            <p>
                                I'm a passionate Full Stack Developer with over 3 years of experience 
                                in creating innovative web solutions. I specialize in modern JavaScript 
                                frameworks and have a strong background in both frontend and backend development.
                            </p>
                            <p>
                                My journey in software development started with a curiosity about how 
                                things work behind the scenes. This curiosity has driven me to continuously 
                                learn and adapt to new technologies, ensuring I deliver cutting-edge solutions 
                                that meet modern business needs.
                            </p>
                            <div className="about-stats">
                                <div className="stat">
                                    <span className="stat-number">50+</span>
                                    <span className="stat-label">Projects Completed</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">3+</span>
                                    <span className="stat-label">Years Experience</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">20+</span>
                                    <span className="stat-label">Happy Clients</span>
                                </div>
                            </div>
                        </div>
                        <div className="about-image" data-aos="fade-left">
                            <div className="image-container">
                                <div className="code-preview">
                                    <div className="code-header">
                                        <div className="code-buttons">
                                            <span className="code-btn red"></span>
                                            <span className="code-btn yellow"></span>
                                            <span className="code-btn green"></span>
                                        </div>
                                        <span className="code-title">portfolio.js</span>
                                    </div>
                                    <div className="code-content">
                                        <div className="code-line">
                                            <span className="code-keyword">const</span> 
                                            <span className="code-variable"> developer</span> 
                                            <span className="code-operator"> = </span>
                                            <span className="code-string">{'{'}</span>
                                        </div>
                                        <div className="code-line">
                                            <span className="code-property">  name:</span> 
                                            <span className="code-string">'Your Name'</span>,
                                        </div>
                                        <div className="code-line">
                                            <span className="code-property">  skills:</span> 
                                            <span className="code-string">['React', 'Node.js']</span>,
                                        </div>
                                        <div className="code-line">
                                            <span className="code-property">  passion:</span> 
                                            <span className="code-string">'Building Amazing Apps'</span>
                                        </div>
                                        <div className="code-line">
                                            <span className="code-string">{'}'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
