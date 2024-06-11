import React, { useState } from 'react';
import { aiConsultation } from '../services/api';
import AiDoctorChat from '../components/AiDoctorChat';

function AiDoctorPage() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleConsultation = async () => {
    const res = await aiConsultation(prompt);
    setResponse(res.data.response);
  };

  return (
    <div>
      <h1>AI Doctor</h1>
      <AiDoctorChat prompt={prompt} response={response} setPrompt={setPrompt} onConsult={handleConsultation} />
    </div>
  );
}

export default AiDoctorPage;
