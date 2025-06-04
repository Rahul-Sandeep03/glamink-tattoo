import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-4">
      <div className="container text-center">
        <h5 className="footer-heading">Follow Us</h5>
        <div className="footer-underline mb-3"></div>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon-link facebook">
  <i className="fab fa-facebook-f"></i>
</a>

<a href="https://www.instagram.com/glamink_tattoostudio?igsh=ZXpsdWw3b2g0NzU0" target="_blank" rel="noopener noreferrer" className="icon-link instagram">
  <i className="fab fa-instagram"></i>
</a>
<a href="https://youtube.com/@gts0812?si=zqDNRtzxZpMLfgy0" target="_blank" rel="noopener noreferrer" className="icon-link youtube">
  <i className="fab fa-youtube"></i>
</a>

        </div>

        <p className="mt-3 small">&copy; {new Date().getFullYear()} GlamInk Tattoo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
