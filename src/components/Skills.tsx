import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiNextdotjs } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const skills = [
        { name: 'React', level: 90, icon: React.createElement(FaReact) },
        { name: 'TypeScript', level: 85, icon: React.createElement(SiTypescript) },
        { name: 'Node.js', level: 80, icon: React.createElement(FaNodeJs) },
        { name: 'Next.js', level: 85, icon: React.createElement(SiNextdotjs) },
        { name: 'JavaScript', level: 95, icon: React.createElement(FaJs) },
        { name: 'Python', level: 75, icon: React.createElement(FaPython) },
        { name: 'MongoDB', level: 80, icon: React.createElement(SiMongodb) },
        { name: 'Express.js', level: 85, icon: React.createElement(SiExpress) },
        { name: 'HTML5', level: 95, icon: React.createElement(FaHtml5) },
        { name: 'CSS3', level: 90, icon: React.createElement(FaCss3Alt) },
        { name: 'Git', level: 85, icon: React.createElement(FaGitAlt) },
        { name: 'SQL', level: 80, icon: React.createElement(FaDatabase) },
    ];

    return (
        <section className="skills" id="skills">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title" data-aos="fade-up">Skills & Technologies</h2>
                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                className="skill-card"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="skill-icon">
                                    {skill.icon}
                                </div>
                                <h3 className="skill-name">{skill.name}</h3>
                                <div className="skill-progress">
                                    <div className="progress-bar">
                                        <motion.div
                                            className="progress-fill"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                    <span className="skill-level">{skill.level}%</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Skills;
