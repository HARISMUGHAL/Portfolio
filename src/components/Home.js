import React from 'react';
import { motion } from 'framer-motion';
import '../Home.css';

const backgroundStyle = {
  background: "url('/assets/bg-hero.jpg') no-repeat center center/cover",
  position: 'relative',
};

function Home() {
  return (
    <section id="home" className="home" style={backgroundStyle}>
      {/* 🔥 Overlay to darken background */}
      <div className="overlay"></div>

      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Muhammad Haris Kamran</h1>
        <h2>AI Enthusiast & Developer</h2>
        <p>
          Passionate about building intelligent systems using Machine Learning, NLP, Deep Learning and Computer Vision.
        </p>
        <a href="#contact" className="btn">Let’s Connect</a>
      </motion.div>
    </section>
  );
}

export default Home;
