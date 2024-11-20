/*import axios from 'axios';
const API_URL = 'http://localhost:3002';  
// Crear un carro
export const createCar = async (carData) => {
  try {
    const response = await axios.post(API_URL, carData);
    return response.data;
  } catch (error) {
    console.error("Error creating car", error);
    throw error;
  }
};

// Obtener todos los carros
export const getCars = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching cars", error);
    throw error;
  }
};

// Obtener un carro por ID
export const getCarById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching car", error);
    throw error;
  }
};

// Actualizar un carro
export const updateCar = async (id, carData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, carData);
    return response.data;
  } catch (error) {
    console.error("Error updating car", error);
    throw error;
  }
};

// Eliminar un carro
export const deleteCar = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting car", error);
    throw error;
  }
};
*/