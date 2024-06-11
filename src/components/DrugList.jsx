import React from 'react';

function DrugList({ drugs, onSelectDrug }) {
  return (
    <div>
      <ul>
        {drugs.map(drug => (
          <li key={drug._id} onClick={() => onSelectDrug(drug.name)}>
            {drug.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DrugList;
