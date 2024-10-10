import React, { useState } from "react";
import WheelPicker from "react-simple-wheel-picker";

const WeightPicker = ({ onWeightChange }) => {
  // Genera las opciones de peso en formato 80 a 120
  const pesos = Array.from({ length: 41 }, (_, i) => ({ id: i, value: (80 + i).toString() }));

  const [selectedPeso, setSelectedPeso] = useState(pesos[0].value);

  const handlePesoChange = (peso) => {
    setSelectedPeso(peso.value);
    onWeightChange(peso.value); // Envía el valor al componente padre
  };

  return (
    <div>
      <h3>Peso (kg)</h3>
      <WheelPicker
        data={pesos}
        onChange={handlePesoChange}
        selectedID={pesos.find((item) => item.value === selectedPeso).id}
        height={200}
        width={100}
        itemHeight={40}
      />
      <p className="text-white">Seleccionado: {selectedPeso} kg</p>
    </div>
  );
};

export default WeightPicker;