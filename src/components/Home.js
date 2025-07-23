import React from 'react';
import { motion } from 'framer-motion';
import '../Home.css';

function Home() {
  return (
    <section
      id="home"
      className="home"
      style={{
        background: `url('/assets/bg-hero.jpg') no-repeat center center/cover`,
        position: 'relative',
        zIndex: 1,
        backgroundAttachment: 'fixed', // 🌀 Parallax scroll
      }}
    >
      <div className="overlay" />

      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Muhammad Haris Kamran
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          AI Enthusiast & Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          Passionate about building intelligent systems using Machine Learning, NLP, Deep Learning and Computer Vision.
        </motion.p>

        <motion.a
          href="#contact"
          className="btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          Let’s Connect
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Home;
