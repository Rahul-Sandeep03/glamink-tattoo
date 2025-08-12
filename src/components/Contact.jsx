import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div id="contact" className="contact-container container-fluid">
      <div className="row">
        {/* Left Form Section - Hide on small screens */}
        <div className="col-md-4 p-4 form-section d-none d-md-flex flex-column">
          <h2 className="mb-4">Get In Touch</h2>
          <form>
            <div className="form-group mb-3">
              <label>Name</label>
              <input type="text" className="form-control" placeholder="Enter your Name" />
            </div>
            <div className="form-group mb-3">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Enter a valid email address" />
            </div>
            <div className="form-group mb-3">
              <label>Phone Number</label>
              <input type="tel" className="form-control" placeholder="Enter your phone number" />
            </div>
            <div className="form-group mb-3">
              <label>Message</label>
              <textarea className="form-control" rows="4" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" className="btn btn-warning w-100">Submit</button>
          </form>
        </div>

        {/* CALL US Section - Visible on all devices */}
        <div className="col-6 col-md-4 p-4 text-light info-section d-flex flex-column">
          <h5 className="mb-3">CALL US</h5>
          <p>+91 8686656550 <br /> +91 8074628981</p>

          {/* Only show this on md and up */}
          <div className="d-none d-md-block mt-4">
            <h5 className="mb-3">LOCATION</h5>
            <p>
              Siddhartha Mahila Kalasala Rd, <br />
              Opposite Kandari Hotel, Brindavan Colony, <br />
              Sriram Nagar, Vijayawada,<br />
              Andhra Pradesh 520010<br />
            </p>
          </div>

          {/* Only show this on md and up */}
          <div className="d-none d-md-block mt-4">
            <h5 className="mb-3">OUR TOP SERVICES</h5>
            <ul className="list-unstyled">
              <li>Tattoos</li>
              <li>Blood Art</li>
              <li>Piercing</li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="col-6 col-md-4 p-0 map-section" style={{ minHeight: '250px' }}>
          <iframe
            title="GlamInk Tattoo Studio Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.505615148265!2d80.6429215751452!3d16.5005525842432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb7cfef913fb%3A0xef46dfda6abc71f5!2sGlamink%20Tattoo%20studio!5e0!3m2!1sen!2sin!4v1749043369960!5m2!1sen!2sin"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
