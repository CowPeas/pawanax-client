import React from 'react';

function AppointmentList({ appointments }) {
  return (
    <div>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment._id}>
            <h2>Clinic: {appointment.clinic.name}</h2>
            <p>Date: {new Date(appointment.date).toLocaleDateString()}</p>
            <p>Status: {appointment.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentList;
