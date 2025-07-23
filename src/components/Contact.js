import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>You can reach out via email, GitHub, or LinkedIn.</p>

      <div className="contact-details">
        <p><strong>Email:</strong> harixmughal65@gmail.com</p>
        <p><strong>Phone:</strong> 0332 5254756</p>
        <p><strong>Location:</strong> Islamabad, Pakistan</p>
      </div>

      <div className="contact-icons">
        <a href="https://github.com/HARISMUGHAL" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:harixmughal65@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Contact;
