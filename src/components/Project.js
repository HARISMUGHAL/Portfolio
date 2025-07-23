import React, { useState } from 'react';
import './Project.css';
import Modal from './Modal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projectList = [
    {
      title: "Multiple Chatbots",
      desc: "Built NLP-based chatbots for task automation & response systems.",
      github: "https://github.com/HARISMUGHAL",
    },
    {
      title: "Prediction Models",
      desc: "Trained regression/classification models on custom datasets.",
      github: "https://github.com/HARISMUGHAL",
    },
    {
      title: "Audio Classification",
      desc: "CNN model trained on spectrograms to classify spoken words.",
      github: "https://github.com/HARISMUGHAL",
    },
    {
      title: "Bike Classification",
      desc: "Classified sports bikes using computer vision on bike images.",
      github: "https://github.com/HARISMUGHAL",
    },
    {
      title: "Author Profiling (NLP)",
      desc: "Predicted author traits from text using NLP + ML pipeline.",
      github: "https://github.com/HARISMUGHAL",
    },
    {
      title: "Parking System (C#)",
      desc: "TCP client-server parking system with thread safety & logs.",
      github: "https://github.com/HARISMUGHAL",
    },
    {
      title: "OOP Projects",
      desc: "Java & C# OOP apps built during academic projects.",
      github: "https://github.com/HARISMUGHAL",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <p>Here are some AI-driven and full-stack projects I've worked on:</p>

      <div className="projects-grid">
        {projectList.map((project, idx) => (
          <div
            className="project-card"
            key={idx}
            onClick={() => handleOpenModal(project)}
            style={{ cursor: 'pointer' }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
