import './App.css';
import Carousel from './components/Carrousel';
import Selector from './components/Selector';
import { carData } from './data/carsData';
import CarList from './data/CarList';

function App() {
  return (
    <div className="app-container">
      <h1>Cars Agency</h1>
      <h2>A continuación, nuestros autos disponibles</h2>
      <CarList/>
      <Selector />
    </div>
  );
}

export default App;
