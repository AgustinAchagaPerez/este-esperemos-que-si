import { useState } from 'react';

function Selector() {
  const [option, setOption] = useState('alquiler');

  return (
    <div className="selector">
      <button
        className={option === 'alquiler' ? 'active' : ''}
        onClick={() => setOption('alquiler')}
      >
        Alquiler
      </button>
      <button
        className={option === 'compra' ? 'active' : ''}
        onClick={() => setOption('compra')}
      >
        Compra
      </button>
      <p>Opción seleccionada: {option}</p>
      <p>Felicitaciones, has hecho {option} de un auto exitosamente</p>
    </div>
  );
}
export default Selector;
