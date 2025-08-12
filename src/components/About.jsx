import React from 'react';
import './About.css';
import artistImg from '../assets/artist-photo.webp';
import certified from '../assets/cerGla.webp';

const About = () => {
  return (
    <section id="about" className="about-section py-5">

      <div className="container">
        <div className="text-center mb-4">
          <h2 className="about-title">ABOUT US</h2>
          <hr className="decor-line mx-auto" />
        </div>

        <div className="row align-items-center">
          {/* Left side - Artist Image */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={artistImg}
              alt="Tattoo Artist"
              className="about-img main-img shadow"
            />
          </div>

          {/* Right side - Certificate and Text */}
          <div className="col-md-6">
            <div className="text-center mb-3">
              <img
                src={certified}
                alt="Certified"
                className="about-img certificate-img shadow"
              />
            </div>
            <h3 className="about-subtitle">CERTIFIED PASSION FOR INK</h3>
            <p>
              Hemanth Sai is a certified tattoo artist known for his precision and creativity.
              He successfully completed a professional diploma at the prestigious{' '}
              <a
                href="https://www.alienstattooschool.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aliens Tattoo Art School
              </a>, gaining expert knowledge in skin art and design.
            </p>
            <p>
              With every tattoo, he aims to turn your vision into permanent art. From realism to
              geometric designs, his work speaks for itself.
            </p>
            <div className="signature">– Hemanth Sai</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
