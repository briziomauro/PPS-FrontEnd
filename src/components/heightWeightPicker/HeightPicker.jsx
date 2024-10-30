import React, { useState } from "react";
import WheelPicker from "react-simple-wheel-picker";

const HeightPicker = ({ onHeightChange }) => {
  // Genera las opciones de altura desde 1,50 a 2,50
  const alturas = Array.from({ length: 101 }, (_, i) => ({ id: i, value: (1.50 + i / 100).toFixed(2).replace('.', ',') }));

  // Valor inicial 1,80
  const [selectedAltura, setSelectedAltura] = useState("1,80");

  const handleAlturaChange = (altura) => {
    setSelectedAltura(altura.value);
    onHeightChange(altura.value); // Envía el valor al componente padre
  };

  return (
    <div className="flex flex-col justify-center items-center w-[200px]">
      
      <WheelPicker 
        data={alturas}
        onChange={handleAlturaChange}
        selectedID={alturas.find((item) => item.value === selectedAltura).id}
        height={200}
        width={120}
        itemHeight={40}
      />
      <p className="text-white">Seleccionado: {selectedAltura} m</p>
    </div>
  );
};

export default HeightPicker;
