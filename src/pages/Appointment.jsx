
import React from 'react';
import Contact from '../components/Contact';
import './Appointment.css'; 

function Appointment() {
  return (
    <>
      <div className="appointment-page container py-5">
        <h2 className="text-center mb-4">Tattoo Appointment Form</h2>
        <form className="p-4 bg-light rounded shadow">
          <div className="row mb-3">
            <div className="col-md-6">
              <label>First Name</label>
              <input type="text" className="form-control" placeholder="First Name" required/>
            </div>
            <div className="col-md-6">
              <label>Last Name</label>
              <input type="text" className="form-control" placeholder="Last Name" required />
            </div>
          </div>

          <div className="mb-3">
            <label>Phone Number</label>
            <input type="tel" className="form-control" placeholder="+91 12345 67890" required />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="example@example.com" />
          </div>

          <div className="mb-3">
            <label>Upload Design</label>
            <input type="file" className="form-control" />
          </div>

          <div className="mb-3">
            <label>Preferred Appointment Date & Time</label>
            <input type="datetime-local" className="form-control" required/>
          </div>

         

          <button type="submit" className="btn btn-dark w-100">Schedule</button>
        </form>
      </div>

      <div className="mt-5">
        <Contact />
      </div>
    </>
  );
}

export default Appointment;
