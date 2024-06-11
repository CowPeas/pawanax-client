import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Medical Service App</h1>
      <nav>
        <ul>
          <li><Link to="/clinics">Clinics</Link></li>
          <li><Link to="/pharmacies">Pharmacies</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/appointments">Appointments</Link></li>
          <li><Link to="/ai-doctor">AI Doctor</Link></li>
          <li><Link to="/app-store">App Store</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
