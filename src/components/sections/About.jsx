import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <div className="underline"></div>
        </motion.div>
        
        <div className="about-content-wrapper">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            
            <p>
              My name is Bishesh Waiba, and I am currently pursuing a B.Sc. (Hons) degree at Sunway College. I have a growing passion for designing and coding, and I enjoy exploring how technology can be applied to solve real-world problems. What excites me most about the digital world is the opportunity to create solutions that are not only functional but also meaningful to people’s everyday lives. Alongside technical knowledge, I deeply value skills such as teamwork, communication, and problem-solving, which I continue to strengthen through my academic journey and personal projects.
            </p>
            
            <p>
              Although I am at the beginning of my professional path and have yet to gain formal industry experience, I am eager to build a strong foundation through continuous learning, experimentation, and collaboration. I believe that challenges are opportunities to grow, and I am motivated to explore projects that push me to think creatively and adapt to new situations. My long-term vision is to combine my technical background with my interest in environmental research, contributing to sustainable solutions that address global challenges such as climate change and resource management.
            </p>

            <p>
             Beyond academics, I find balance in creative and active pursuits. Photography allows me to capture unique perspectives and appreciate the beauty in small details, while football keeps me physically active, disciplined, and team-oriented. Both of these hobbies shape who I am outside the classroom and remind me of the importance of creativity, balance, and collaboration in all areas of life.
            </p>
            
            <motion.div
              className="education-list"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Education</h3>
              <ul>
                <li>
                  <strong>B.Sc. (Hons) Computer Science</strong> - Sunway College (2024 - Present)
                  <p>Focusing on software development, algorithms, and data structures.</p>
                </li>
                <li>
                  <strong>Higher Secondary Education</strong> - Times International Secondary School (2021 - 2023)
                  <p>Completed with distinction in Science and Mathematics.</p>
                </li>
              </ul>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;