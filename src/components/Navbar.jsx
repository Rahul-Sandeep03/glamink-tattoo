import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black py-3 px-3 shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={logo} alt="GlamInk Logo" height="36" className="me-1" />
          <span className="brand-text">
            <span className="glam">GlamInk</span> Tattoo
          </span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {['about', 'services', 'artists', 'contact'].map((section) => (
              <li className="nav-item" key={section}>
                <button className="nav-link text-uppercase btn btn-link" onClick={() => handleNavigation(section)}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
            <li className="nav-item">
              <a className="nav-link text-uppercase" href="/gallery">Gallery</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
