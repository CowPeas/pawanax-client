import React, { useEffect, useState } from 'react';
import { getPartnerApps } from '../services/api';
import AppStoreList from '../components/AppStoreList';

function AppStorePage() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    async function fetchApps() {
      const response = await getPartnerApps();
      setApps(response.data);
    }

    fetchApps();
  }, []);

  return (
    <div>
      <h1>Medical Apps Playstore</h1>
      <AppStoreList apps={apps} />
    </div>
  );
}

export default AppStorePage;
