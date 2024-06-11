import React, { useEffect, useState } from 'react';
import { getDrugs, getDrugPrices } from '../services/api';
import DrugList from '../components/DrugList';

function PharmaciesPage() {
  const [drugs, setDrugs] = useState([]);
  const [selectedDrug, setSelectedDrug] = useState(null);
  const [drugPrices, setDrugPrices] = useState([]);

  useEffect(() => {
    async function fetchDrugs() {
      const response = await getDrugs();
      setDrugs(response.data);
    }

    fetchDrugs();
  }, []);

  useEffect(() => {
    if (selectedDrug) {
      async function fetchDrugPrices() {
        const response = await getDrugPrices(selectedDrug);
        setDrugPrices(response.data);
      }

      fetchDrugPrices();
    }
  }, [selectedDrug]);

  return (
    <div>
      <h1>Pharmacies</h1>
      <DrugList drugs={drugs} onSelectDrug={setSelectedDrug} />
      {selectedDrug && (
        <div>
          <h2>Prices for {selectedDrug}</h2>
          <ul>
            {drugPrices.map(price => (
              <li key={price._id}>{price.pharmacy.name}: ${price.price}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PharmaciesPage;
