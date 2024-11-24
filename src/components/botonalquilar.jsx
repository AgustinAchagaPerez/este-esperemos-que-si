import React from "react";

const BotonAlquilar = ({ selectedVehicle, onRent }) => {
  return (
    <button
      onClick={() => onRent(selectedVehicle)}
      className="btn btn-warning"
      disabled={!selectedVehicle}
    >
      Alquilar Auto
    </button>
  );
};

export default BotonAlquilar;
