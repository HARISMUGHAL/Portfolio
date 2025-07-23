import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <p>Here are some of the technologies, libraries, and tools I work with:</p>
      
      <div className="skills-category">
        <h3>Core Skills</h3>
        <div className="skills-grid">
          <div className="skill-item">Machine Learning</div>
          <div className="skill-item">Deep Learning</div>
          <div className="skill-item">NLP</div>
          <div className="skill-item">Computer Vision</div>
          <div className="skill-item">OOP</div>
        </div>
      </div>

      <div className="skills-category">
        <h3>Programming Languages</h3>
        <div className="skills-grid">
          <div className="skill-item">Python</div>
          <div className="skill-item">Java</div>
          <div className="skill-item">C#</div>
          <div className="skill-item">JavaScript</div>
        </div>
      </div>

      <div className="skills-category">
        <h3>Frameworks & Libraries</h3>
        <div className="skills-grid">
          <div className="skill-item">TensorFlow</div>
          <div className="skill-item">PyTorch</div>
          <div className="skill-item">Keras</div>
          <div className="skill-item">scikit-learn</div>
          <div className="skill-item">OpenCV</div>
          <div className="skill-item">NLTK</div>
          <div className="skill-item">spaCy</div>
          <div className="skill-item">Transformers</div>
          <div className="skill-item">Matplotlib</div>
          <div className="skill-item">Seaborn</div>
        </div>
      </div>

      <div className="skills-category">
        <h3>Tools & Frontend</h3>
        <div className="skills-grid">
          <div className="skill-item">React JS</div>
          <div className="skill-item">Flutter</div>
          <div className="skill-item">Git & GitHub</div>
          <div className="skill-item">PyCharm</div>
          <div className="skill-item">VS Code</div>
          <div className="skill-item">Postman</div>
          <div className="skill-item">Streamlit & Gradio</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
