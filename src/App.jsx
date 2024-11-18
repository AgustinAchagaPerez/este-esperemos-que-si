import './App.css';
import Carousel from './components/Carrousel';
import Selector from './components/Selector';
import { carData } from './data/carData';

function App() {
  return (
    <div className="app-container">
      <h1>Cars Agency</h1>
      <h2>A continuación, nuestros autos disponibles</h2>
      <Carousel cars={carData} />
      <Selector />
    </div>
  );
}

export default App;
