import './App.css';
import Selector from './components/Selector';
import CarList from './data/CarList'; 
import Carrousel from './components/Carrousel'; 

function App() {
  return (
    <div className="app-container">
      <h1>Cars Agency</h1>
      <h2>A continuación, nuestros autos disponibles</h2>
      <Carrousel>
  {Cars.map((Cars, index) => (
    <ElementoCarrousel 
      key={index} 
      cars={cars} 
      onSelect={setSelectedcar} 
      className="my-custom-class" 
      style={{ border: "1px solid #ccc" }} 
    />
  ))}
</Carrousel>

      
    </div>
  );
}

export default App;
