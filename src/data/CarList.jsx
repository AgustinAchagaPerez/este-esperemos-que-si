/*import React, { useEffect, useState } from 'react';
import { getCars, deleteCar } from 'CarServices';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const carsData = await getCars();
        setCars(carsData);
      } catch (error) {
        console.error("Error fetching cars", error);
      }
    };
    fetchCars();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteCar(id);
      setCars(cars.filter(car => car._id !== id));
    } catch (error) {
      console.error("Error deleting car", error);
    }
  };

  return (
    <div>
      <h1>Acá nuestros autos disponibles</h1>
      <ul>
        {cars.map(car => (
          <li key={car._id}>
            {car.brand} - {car.model} ({car.year})
            <button onClick={() => handleDelete(car._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
*/
