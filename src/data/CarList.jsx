import React, { useEffect, useState } from 'react';
import { getCars} from './CarServices';
import Carrousel from '../components/Carrousel';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const carsData = await getCars();
        console.log(carsData , "Front");
        setCars(carsData);
      } catch (error) {
        console.error("Error fetching cars", error);
      }
    };
    fetchCars();
  }, []);

  //const handleDelete = async (id) => {
    //try {
      //await deleteCar(id);
      //setCars(cars.filter(car => car._id !== id));
    //} catch (error) {
   //   console.error("Error deleting car", error);
   // }
  //};

  return (
    <Carrousel infoCars={cars}/>
  );
};

export default CarList;
