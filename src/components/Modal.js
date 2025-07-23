import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>{project.title}</h2>
        <p>{project.desc}</p>
        <a
          href="https://github.com/HARISMUGHAL"
          target="_blank"
          rel="noopener noreferrer"
          className="modal-github-link"
        >
          🔗 View on GitHub
        </a>
      </div>
    </div>
  );
};

export default Modal;
