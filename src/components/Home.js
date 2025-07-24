import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import '../Home.css';

function Home() {
  return (
    <section id="home" className="home">
      <div className="overlay"></div>

      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Muhammad Haris Kamran</h1>

        <h2>
          <Typewriter
            words={[
              'AI Engineer',
              'Deep Learning Developer',
              'NLP Specialist',
              'Computer Vision Researcher',
              'React & Flutter Dev'
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1200}
          />
        </h2>

        <p>
          Passionate about building intelligent systems using Machine Learning, NLP, Deep Learning and Computer Vision.
        </p>

        <a href="#contact" className="btn">Let’s Connect</a>
      </motion.div>
    </section>
  );
}

export default Home;
