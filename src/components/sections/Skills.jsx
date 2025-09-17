import { motion } from 'framer-motion';
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaGitAlt, FaCss3Alt } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'CSS', icon: <FaCss3Alt />, color: '#264de4' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
  ];

  return (
    <section id="skills" className="skills-container">
      <div className="skills-content">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>My Skills</h2>
          <div className="underline"></div>
        </motion.div>

        <motion.p
          className="skills-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Here are some of the technologies and tools I work with on a regular basis.
          I'm always learning and expanding my skill set to stay current with the latest trends.
        </motion.p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-extra"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Soft Skills</h3>
          <div className="skills-tags">
            <span className="skill-tag">Teamwork and Collaboration</span>
            <span className="skill-tag">UI/UX Design</span>
            <span className="skill-tag">Problem-Solving</span>
            <span className="skill-tag">Communication</span>
            <span className="skill-tag">Time Management</span>
            <span className="skill-tag">Creativity</span>
            <span className="skill-tag">Critical Thinking</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;