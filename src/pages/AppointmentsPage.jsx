import React, { useEffect, useState } from 'react';
import { bookAppointment, getAppointments } from '../services/api';
import AppointmentList from '../components/AppointmentList';

function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({ clinic: '', date: '' });

  useEffect(() => {
    async function fetchAppointments() {
      const response = await getAppointments(1); // Assume user ID is 1 for now
      setAppointments(response.data);
    }

    fetchAppointments();
  }, []);

  const handleBookAppointment = async () => {
    const response = await bookAppointment({ ...newAppointment, user: 1 }); // Assume user ID is 1 for now
    setAppointments([...appointments, response.data]);
  };

  return (
    <div>
      <h1>Appointments</h1>
      <AppointmentList appointments={appointments} />
      <div>
        <h2>Book New Appointment</h2>
        <input
          type="text"
          placeholder="Clinic ID"
          value={newAppointment.clinic}
          onChange={(e) => setNewAppointment({ ...newAppointment, clinic: e.target.value })}
        />
        <input
          type="date"
          value={newAppointment.date}
          onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
        />
        <button onClick={handleBookAppointment}>Book Appointment</button>
      </div>
    </div>
  );
}

export default AppointmentsPage;
