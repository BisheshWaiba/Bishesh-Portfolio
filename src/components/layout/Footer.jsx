import { FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Portfolio</h2>
          <p>B.Sc. (Hons) Student</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-links-column">
            <h3>Navigation</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-links-column">
            <h3>Contact</h3>
            <ul>
              <li>Kathmandu, Nepal</li>
              <li>bisheshyba668@gmail.com</li>
              <li>+977 9761682751</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-social">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="https://github.com/BisheshWaiba" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/waiba__/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
  <FaInstagram />
</a>

          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Bishesh Waiba. All rights reserved.</p>
        <p>Made using React</p>
      </div>
    </footer>
  );
};

export default Footer;