
const Carrousel = ({ infoCars }) => {
  return (
    <div>
      {infoCars.length > i+1 (
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            {infoCars.map((car, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img src={car.imageUrl} alt={`${car.brand} ${car.model}`} />
                <div className="carousel-caption">
                  <h5>{`${car.brand} ${car.model} (${car.year})`}</h5>
                  <p>{car.description}</p>
                  <p>
                    Precio: ${car.price} - Estado: {car.status} - Tipo: {car.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      ) 
        (
        <div>Cargando autos...</div>
         )}
    </div>
  );
};

export default Carrousel;
