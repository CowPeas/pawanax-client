import React from 'react';

function ClinicList({ clinics }) {
  return (
    <div>
      <ul>
        {clinics.map(clinic => (
          <li key={clinic._id}>
            <h2>{clinic.name}</h2>
            <p>{clinic.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClinicList;
