import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="contact-content">
                        <div className="contact-info" data-aos="fade-right">
                            <h3>Let's Work Together</h3>
                            <p>
                                I'm always open to discussing new opportunities and interesting projects. 
                                Feel free to reach out if you have any questions or just want to say hello!
                            </p>
                            <div className="contact-details">
                                <div className="contact-item">
                                    <FaMapMarkerAlt className="contact-icon" />
                                    <span>Your City, Country</span>
                                </div>
                                <div className="contact-item">
                                    <FaPhone className="contact-icon" />
                                    <span>+1 (234) 567-8900</span>
                                </div>
                                <div className="contact-item">
                                    <FaEnvelope className="contact-icon" />
                                    <span>your.email@example.com</span>
                                </div>
                            </div>
                        </div>
                        
                        <motion.form 
                            className="contact-form" 
                            onSubmit={handleSubmit}
                            data-aos="fade-left"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                            </div>
                            <motion.button
                                type="submit"
                                className="submit-btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send Message
                            </motion.button>
                        </motion.form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
