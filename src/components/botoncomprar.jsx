import React from "react";

const BotonComprar = ({ selectedVehicle, onPurchase }) => {
  return (
    <button
      onClick={() => onPurchase(selectedVehicle)}
      className="btn btn-success"
      disabled={!selectedVehicle}
    >
      Comprar Auto
    </button>
  );
};

export default BotonComprar;
