import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Gallery.css';
import Footer from '../components/Footer';
import m1 from '../assets/gallery/minimal/m1.webp';
import m2 from '../assets/gallery/minimal/m2.webp';
import g1 from '../assets/gallery/god/g1.webp';
import g2 from '../assets/gallery/god/g2.webp';
import p1 from '../assets/gallery/piercing/p1.webp';
import p2 from '../assets/gallery/piercing/p2.webp';
import b1 from '../assets/gallery/blood-art/b1.webp';
import b2 from '../assets/gallery/blood-art/b2.webp';

const categories = {
  'Minimal Tattoos': [m1, m2],
  'God Tattoos': [g1, g2],
  'Piercing': [p1, p2],
  'Blood Art': [b1, b2],
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Gallery() {
  const query = useQuery();
  const categoryFromURL = query.get('category');
  const [activeCategory, setActiveCategory] = useState('Minimal Tattoos');

  useEffect(() => {
    if (categoryFromURL && categories[categoryFromURL]) {
      setActiveCategory(categoryFromURL);
    }
  }, [categoryFromURL]);

  const images = categories[activeCategory];

  return (
    <div className="page-wrapper d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <div className="gallery-page py-5">
          <div className="container">
            <h2 className="text-center mb-4">Tattoo Gallery</h2>

            <ul className="nav nav-pills justify-content-center mb-4">
              {Object.keys(categories).map((category) => (
                <li className="nav-item" key={category}>
                  <button
                    className={`nav-link ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category)}
                    type="button"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>

            <div className="row">
              {images.map((img, index) => (
                <div className="col-6 col-sm-4 col-md-3 col-5th mb-4" key={index}>
                  <img
                    src={img}
                    alt={`${activeCategory} ${index + 1}`}
                    className="img-fluid rounded shadow gallery-image"
                    style={{ cursor: 'default' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Gallery;
