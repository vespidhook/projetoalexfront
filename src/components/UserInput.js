// src/components/UserInput.js
import React, { useState } from 'react';
import axios from 'axios';

const UserInput = () => {
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!userInput.trim()) {
      setError('Please enter a value.');
      return;
    }
    try {
      const imageId = 1; // Aqui você precisa fornecer o ID da imagem apropriado
      const response = await axios.post('http://127.0.0.1:8000/api/check-answer', { image_id: imageId, user_input: userInput });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error checking answer:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
    </div>
  );
};

export default UserInput;
