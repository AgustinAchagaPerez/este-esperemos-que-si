import React from "react";

const BotonSeleccionar = ({ onSelect }) => {
  return (
    <button onClick={onSelect} className="btn btn-secondary">
      Seleccionar Auto
    </button>
  );
};

export default BotonSeleccionar;
