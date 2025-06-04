import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Artist from './components/Artists.jsx';
import Services from './components/Services.jsx';
import Gallery from './pages/Gallery.jsx'; 
import Contact from './components/Contact';
import Appointment from './pages/Appointment';
import Footer from './components/Footer.jsx';
import "./App.css"



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              
              <About />
              <Services />
              <Artist />
              <Contact />
              <Footer />
              
              
            </>
          }
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/appointment" element={<Appointment />} />

      </Routes>
    </Router>
  );
}

export default App;
