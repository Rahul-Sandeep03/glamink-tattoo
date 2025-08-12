import React from 'react';
import './Artist.css';
import artistImg from '../assets/artistt.webp';

function Artist() {
  return (
    <section id="artists" className="artist-section">
      <div className="container">
        <h2 className="section-title text-center">MEET OUR ARTISTS</h2>
        <div className="artist-card">
          <div className="artist-image">
            <img src={artistImg} alt="Tattoo Artist" />
          </div>
          <div className="artist-info">
            <h3>Hemanth Sai</h3>
            <p className="subtitle">• PROFESSIONAL TATTOO ARTIST | EXPERIENCE: 10+ YEARS</p>
            <p className="bio">
              Ethan is a highly skilled tattoo artist with over a decade of experience. His specialties include
              fine line, realism, and geometric tattoos. He blends passion and precision in every piece of art.
            </p>
            <div className="social-icons">
              <a href="https://www.instagram.com/she_call_me_hemu?igsh=MXM2enBueTZrOHJoaA==">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://facebook.com">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Artist;
