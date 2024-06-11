import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ClinicsPage from './pages/ClinicsPage';
import PharmaciesPage from './pages/PharmaciesPage';
import DoctorsPage from './pages/DoctorsPage';
import AppointmentsPage from './pages/AppointmentsPage';
import AiDoctorPage from './pages/AiDoctorPage';
import AppStorePage from './pages/AppStorePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/clinics" component={ClinicsPage} />
        <Route path="/pharmacies" component={PharmaciesPage} />
        <Route path="/doctors" component={DoctorsPage} />
        <Route path="/appointments" component={AppointmentsPage} />
        <Route path="/ai-doctor" component={AiDoctorPage} />
        <Route path="/app-store" component={AppStorePage} />
      </Switch>
    </Router>
  );
}

export default App;
