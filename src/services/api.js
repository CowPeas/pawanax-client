import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

export const getClinics = () => api.get('/clinics');
export const getDrugs = () => api.get('/pharmacies/drugs');
export const getDrugPrices = (drugName) => api.get(`/pharmacies/drugs/${drugName}/prices`);
export const getDoctors = () => api.get('/doctors');
export const startConsultation = (consultationId) => api.post('/doctors/consultation/start', { consultationId });
export const endConsultation = (consultationId) => api.post('/doctors/consultation/end', { consultationId });
export const bookAppointment = (appointmentData) => api.post('/appointments', appointmentData);
export const getAppointments = (userId) => api.get(`/appointments/${userId}`);
export const aiConsultation = (prompt) => api.post('/ai-doctors', { prompt });
export const getPartnerApps = () => api.get('/app-store');

export default api;
