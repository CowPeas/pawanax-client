import React from 'react';

function DoctorList({ doctors }) {
  return (
    <div>
      <ul>
        {doctors.map(doctor => (
          <li key={doctor._id}>
            <h2>{doctor.name}</h2>
            <p>Specialization: {doctor.specialization}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorList;
