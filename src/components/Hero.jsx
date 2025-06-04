import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import './Hero.css';
import heroBg from '../assets/hero-bg.jpg';

function Hero() {
  return (
    <header
      className="hero-section d-flex align-items-center text-white text-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="overlay"></div>
      <div className="container position-relative z-2">
        <h1 className="display-4 fw-bold">Creating Great Tattoos<br /></h1>
        <p className="lead">
          Explore a curated collection of custom tattoos that blend creativity, precision, and individuality.
          <br />
          Each design tells a story — from bold blackwork to intricate fine-line artistry.
        </p>
       <div className="mt-4 row justify-content-center">
  <div className="col-12 col-md-auto mb-2 mb-md-0">
    <Link to="/appointment" className="btn btn-warning w-100">Book Appointment Now</Link>
  </div>
  <div className="col-12 col-md-auto">
    <Link to="/gallery" className="btn btn-outline-light w-100">Our Work</Link>
  </div>
</div>

      </div>
    </header>
  );
}

export default Hero;
