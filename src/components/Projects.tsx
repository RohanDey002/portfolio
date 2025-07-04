import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Project One',
            description: 'A project description goes here, highlighting key features and technologies used.',
            link: '#',
        },
        {
            title: 'Project Two',
            description: 'A project description goes here, highlighting key features and technologies used.',
            link: '#',
        },
        {
            title: 'Project Three',
            description: 'A project description goes here, highlighting key features and technologies used.',
            link: '#',
        },
        {
            title: 'Project Four',
            description: 'A project description goes here, highlighting key features and technologies used.',
            link: '#',
        },
    ];

    return (
        <section className="projects" id="projects">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">My Projects</h2>
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                className="project-card"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
