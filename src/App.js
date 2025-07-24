import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'; 
import Skills from './components/Skills'; 
import Project from './components/Project';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About /> {/* ✅ This renders your About section */}
      {/* Skills, Projects, Contact will be added next */}
      <Skills /> 
      <Project />
      <Footer />
      <Contact />
      <ScrollToTop />
    </div>
  );

}



export default App;
