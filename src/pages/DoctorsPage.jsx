import React, { useEffect, useState } from 'react';
import { getDoctors } from '../services/api';
import DoctorList from '../components/DoctorList';

function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    async function fetchDoctors() {
      const response = await getDoctors();
      setDoctors(response.data);
    }

    fetchDoctors();
  }, []);

  return (
    <div>
      <h1>Doctors</h1>
      <DoctorList doctors={doctors} />
    </div>
  );
}

export default DoctorsPage;
