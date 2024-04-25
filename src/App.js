// src/App.js
import React from 'react';
import ImageDisplay from './components/ImageDisplay';
import UserInput from './components/UserInput';

function App() {
  return (
    <div>
      <h1>Random Image Guessing Game</h1>
      <ImageDisplay />
      <UserInput />
    </div>
  );
}

export default App;
