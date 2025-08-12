import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
import minimalTattoo from '../assets/minimal-tattoo.webp';
import allTattoo from '../assets/all-tattoo.webp';
import piercing from '../assets/piercing.webp';
import bloodArt from '../assets/blood-art.webp';

const services = [
  {
    title: 'Minimal Tattoos',
    image: minimalTattoo,
    description: 'Elegant and simple tattoos designed with minimalistic flair, perfect for subtle personal statements.',
  },
  {
    title: 'God Tattoos',
    image: allTattoo,
    description: 'From traditional to modern styles, we offer a wide range of tattooing options tailored to your preferences.',
  },
  {
    title: 'Piercing',
    image: piercing,
    description: 'Professional body piercing services in a safe, hygienic environment by certified experts.',
  },
  {
    title: 'Blood Art',
    image: bloodArt,
    description: 'Unique and bold, blood art tattoos offer an intense form of expression crafted with precision.',
  },
];

function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const handleKnowMore = () => {
    const category = services[activeIndex].title;
    navigate(`/gallery?category=${encodeURIComponent(category)}`);
  };

  return (
    <section id="services" className="services-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-4">OUR SERVICES</h2>
        <div className="scrollable-services d-flex justify-content-center mb-4 flex-wrap gap-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-tab text-center p-2 ${index === activeIndex ? 'active-tab' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <img src={service.image} alt={service.title} className="tab-thumbnail rounded" />
              <h6 className="mt-2">{service.title}</h6>
            </div>
          ))}
        </div>

        <div className="text-center service-detail mx-auto">
          <img src={services[activeIndex].image} alt={services[activeIndex].title} className="selected-img mb-3 shadow" />
          <h3 className="fw-bold">{services[activeIndex].title}</h3>
          <p className="px-3">{services[activeIndex].description}</p>
          <button className="btn btn-dark mt-2" onClick={handleKnowMore}>
            KNOW MORE
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
