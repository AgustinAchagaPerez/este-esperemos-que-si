import React, { useState } from 'react';
import './Carrousel.css';

const Carousel = ({ infoCars }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % infocars.length);
  };
 // ACA METO LA LOGICA DEL FOR EACH ARREGLO DE ELEMENTO CARROUSEL CON TODOS LOS AUTOS ACA (ELEMENTOS CREADOS A PARTIR DE LA BASE DE DATOS)
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? infocars.length - 1 : prevIndex - 1
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
       {}
      Y LOS BOTONES DE SELECCIONAR,
      ALQUILAR O COMPRAR ACÁ
      </div>

      {/* Botón siguiente */}
      <button className="carousel-btn next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
