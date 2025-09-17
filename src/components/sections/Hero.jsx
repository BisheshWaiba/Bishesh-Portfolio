import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Hero.css';
import profileImage from '../../assets/images/Photo.png';



const Hero = () => {
  return (
    <section id="home" className="hero-container">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Hi, I'm <span className="highlight">Bishesh Waiba</span></h1>
          <h2>B.Sc. (Hons) Student</h2>
          <p>
            Curious Mind | Dedicated Student | Exploring Data science & analytics
          </p>
          <div className="hero-buttons">
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
          <div className="social-icons">
            <motion.a
              href="https://github.com/BisheshWaiba"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#6e5494' }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#0077b5' }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/waiba__/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#E1306C' }}
            >
              <FaInstagram />
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src={profileImage} 
            alt="Bishesh Waiba" 
            className="profile-img" 
          />
        </motion.div>
      </div>
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Hero;