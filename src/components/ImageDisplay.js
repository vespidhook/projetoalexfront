// src/components/ImageDisplay.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageDisplay = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/get-image');
        setImage(response.data.image_url);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div>
      {image && <img src={image} alt="Random Image" />}
    </div>
  );
};

export default ImageDisplay;
