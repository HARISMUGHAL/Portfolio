import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
        I'm Haris — an AI Enthusiast & Developer passionate about building intelligent systems using Machine Learning, NLP, and Deep Learning.
      </p>

      <div className="about-content">
        <h3>Summary</h3>
        <p>
          AI-focused developer with hands-on experience in building and deploying real-world models.
          Strong skills in Python, deep learning, and working in collaborative environments.
          Always eager to solve meaningful problems through technology.
        </p>

        <h3>Work Experience</h3>
        <ul>
          <li><strong>Machine Learning Intern – Developers Hub (Feb–May 2024):</strong> Trained and tuned models, worked on chatbot/NLP pipelines, image classification.</li>
          <li><strong>Graphic Designer – Upwork (Jul 2021–Apr 2024):</strong> Designed logos, flyers, banners using Adobe tools.</li>
          <li><strong>Customer Service Rep – BPO (Nov 2022–Aug 2023):</strong> Provided technical and customer support to international clients.</li>
        </ul>

        <h3>Education</h3>
        <p>
          BSAI (Bachelor in Artificial Intelligence) – Barani Institute of IT (PMAS), 7th Semester
        </p>

        <h3>Location</h3>
        <p>Islamabad, Pakistan</p>
      </div>
    </section>
  );
};

export default About;
