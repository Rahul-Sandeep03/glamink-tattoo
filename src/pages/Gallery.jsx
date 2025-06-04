import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './Gallery.css';
import Contact from '../components/Contact';
import m1 from '../assets/gallery/minimal/m1.jpg';
import m2 from '../assets/gallery/minimal/m2.jpg';
import g1 from '../assets/gallery/god/g1.jpg';
import g2 from '../assets/gallery/god/g2.jpg';
import p1 from '../assets/gallery/piercing/p1.jpg';
import p2 from '../assets/gallery/piercing/p2.jpg';
import b1 from '../assets/gallery/blood-art/b1.jpg';
import b2 from '../assets/gallery/blood-art/b2.jpg';

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
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    if (categoryFromURL && categories[categoryFromURL]) {
      setActiveCategory(categoryFromURL);
    }
  }, [categoryFromURL]);

  const images = categories[activeCategory];

  return (
    <>
      <div className="gallery-page py-5">
        <div className="container">
          <h2 className="text-center mb-4">Tattoo Gallery</h2>

          <ul className="nav nav-pills justify-content-center mb-4">
            {Object.keys(categories).map((category) => (
              <li className="nav-item" key={category}>
                <button
                  className={`nav-link ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(category);
                    setPhotoIndex(0);
                  }}
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
                  onClick={() => {
                    setPhotoIndex(index);
                    setIsOpen(true);
                  }}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            ))}
          </div>

          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + images.length - 1) % images.length)
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % images.length)
              }
              imageTitle={`${activeCategory} - ${photoIndex + 1}`}
            />
          )}
        </div>
      </div>

      {/* Bonus Heading + Contact Section */}
      <div className="text-center my-5">
        <h3 className="fw-bold">Want to Book Your Tattoo? Contact Us!</h3>
      </div>
      <Contact />
    </>
  );
}

export default Gallery;
