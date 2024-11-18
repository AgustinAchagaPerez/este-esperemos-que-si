import { useState } from 'react';

function Selector() {
  const [option, setOption] = useState('alquiler');

  return (
    <div className="selector">
      <label>
        <input
          type="radio"
          value="alquiler"
          checked={option === 'alquiler'}
          onChange={(e) => setOption(e.target.value)}
        />
        Alquiler
      </label>
      <label>
        <input
          type="radio"
          value="compra"
          checked={option === 'compra'}
          onChange={(e) => setOption(e.target.value)}
        />
        Compra
      </label>
      <p>Opción seleccionada: {option}</p>
    </div>
  );
}

export default Selector;
