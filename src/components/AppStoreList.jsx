import React from 'react';

function AppStoreList({ apps }) {
  return (
    <div>
      <ul>
        {apps.map(app => (
          <li key={app._id}>
            <h2>{app.name}</h2>
            <p>{app.description}</p>
            <a href={app.url} target="_blank" rel="noopener noreferrer">Visit</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppStoreList;
