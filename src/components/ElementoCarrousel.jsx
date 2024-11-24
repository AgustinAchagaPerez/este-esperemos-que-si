//ACA ESTÁN LOS DATOS DEL CARROUSEL QUE LOS TRAIGO CON UN METODO CONSTRUCTOR CON LOS DATOS DE LA BASE DE DATOS
/*const ElementoCarrousel = ({ vehicle, onSelect }) => {
    const { brand, model, year, price, status, type, description, imageUrl } = vehicle;
    
    return (
      <div className="carousel-item">
        <img src={imageUrl} alt={`${brand} ${model}`} />
        <div className="carousel-caption">
          <h5>{`${brand} ${model} (${year})`}</h5>
          <p>{description}</p>
          <p>
            Precio: ${price} - Estado: {status} - Tipo: {type}
          </p>
          <button onClick={() => onSelect(vehicle)} className="btn btn-primary">
            Seleccionar
          </button>
        </div>
      </div>
    );
  };
  export default ElementoCarrousel;
  */
  const ElementoCarrousel = ({ vehicle = {}, onSelect, style, className = "" }) => {
    const { 
      brand = "Desconocido", 
      model = "Modelo no disponible", 
      year = "Año no especificado", 
      price = "0", 
      status = "No especificado", 
      type = "Tipo no especificado", 
      description = "Sin descripción", 
      imageUrl = "" 
    } = vehicle;
  
    return (
      <div className={`carousel-item ${className}`} style={style}>
        <img 
          src={imageUrl || "https://via.placeholder.com/300"} 
          alt={`${brand} ${model}`} 
          className="img-fluid"
        />
        <div className="carousel-caption">
          <h5>{`${brand} ${model} (${year})`}</h5>
          <p>{description}</p>
          <p>
            Precio: ${price} - Estado: {status} - Tipo: {type}
          </p>
          <button 
            onClick={() => onSelect(vehicle)} 
            className="btn btn-primary">
            Seleccionar
          </button>
        </div>
      </div>
    );
  };
  
  export default ElementoCarrousel;
  