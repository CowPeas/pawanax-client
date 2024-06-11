import React from 'react';

function AiDoctorChat({ prompt, response, setPrompt, onConsult }) {
  return (
    <div>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your symptoms..."
      />
      <button onClick={onConsult}>Consult AI Doctor</button>
      {response && (
        <div>
          <h2>AI Doctor Response</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default AiDoctorChat;
