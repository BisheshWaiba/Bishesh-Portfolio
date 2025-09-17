import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';
import websiteImage from '../../assets/images/website.png';
import chatbotImage from '../../assets/images/Chatbot.png';
import pythonImage from '../../assets/images/Python.png';
import smartLightingImage from '../../assets/images/SmartLighting.png';

const Projects = () => {
  // we don’t need activeFilter anymore
  // const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A fully responsive e-commerce platform with product filtering, cart functionality, and payment integration.',
      image: websiteImage,
      tags: ['HTML', 'CSS', 'Figma'],
      category: 'fullstack',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 2,
      title: 'PostPartum Chatbot',
      description: 'Postpartum Support Chatbot – Built with Node.js backend, HTML/CSS/JS frontend, and integrated APIs for interactive responses.',
      image: chatbotImage,
      tags: ['React', 'Framer Motion', 'CSS'],
      category: 'frontend',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 3,
      title: 'Hospital Management System',
      description: 'Developed a Python-based Hospital Management System with CLI and Tkinter GUI for efficient patient and doctor management.',
      image: pythonImage,
      tags: ['Python', 'GUI'],
      category: 'fullstack',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 4,
      title: 'Smart Lighting - IoT',
      description: 'Designed a Smart Lighting System on Arduino (TinkerCAD) using LDR and motion sensors to automate LED control, programmed in C/C++',
      image: smartLightingImage,
      tags: ['Arduino', 'C/C++', 'TinkerCAD'],
      category: 'frontend',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ];

  // since filters are gone, just use projects directly
  const filteredProjects = projects;

  return (
    <section id="projects" className="projects-container">
      <div className="projects-content">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>My Projects</h2>
          <div className="underline"></div>
        </motion.div>

        {/* 🔹 Removed the project-filters block */}

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-img">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-image" />
                ) : (
                  <div className="project-img-placeholder">
                    <span>Project Image</span>
                  </div>
                )}

              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>Want to see more of my work?</p>
          <motion.a
            href="https://github.com/BisheshWaiba"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
