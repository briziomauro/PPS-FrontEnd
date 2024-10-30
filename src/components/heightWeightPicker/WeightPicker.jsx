import React, { useState } from "react";
import WheelPicker from "react-simple-wheel-picker";

const WeightPicker = ({ onWeightChange }) => {
  // Genera las opciones de peso desde 40 hasta 120
  const pesos = Array.from({ length: 81 }, (_, i) => ({ id: i, value: (40 + i).toString() }));

  // Valor inicial 80 kg
  const [selectedPeso, setSelectedPeso] = useState("80");

  const handlePesoChange = (peso) => {
    setSelectedPeso(peso.value);
    onWeightChange(peso.value); // Envía el valor al componente padre
  };

  return (
    <div className="flex flex-col justify-center items-center w-[200px]">
      
      <WheelPicker
        data={pesos}
        onChange={handlePesoChange}
        selectedID={pesos.find((item) => item.value === selectedPeso).id}
        height={200}
        width={120}
        itemHeight={40}
      />
      <p className="text-white">Seleccionado: {selectedPeso} kg</p>
    </div>
  );
};

export default WeightPicker;
