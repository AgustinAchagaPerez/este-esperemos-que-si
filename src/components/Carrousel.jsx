import React, { useState } from 'react';
import './Carrousel.css';

const Carousel = ({ cars }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cars.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      {/* Botón anterior */}
      <button className="carousel-btn prev" onClick={prevSlide}>
        &#10094;
      </button>

      {/* Contenedor de las imágenes */}
      <div className="carousel-images">
        <img
          className="carousel-image"
          src={cars[currentIndex].image}
          alt={cars[currentIndex].model}
        />
        <p>{cars[currentIndex].description}</p>
      </div>

      {/* Botón siguiente */}
      <button className="carousel-btn next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
