import React, { useState } from "react";
import WheelPicker from "react-simple-wheel-picker";

const HeightPicker = ({ onHeightChange }) => {
  // Genera las opciones de altura en formato 1,90 a 2,50
  const alturas = Array.from({ length: 150 }, (_, i) => ({ id: i, value: (1 + i / 100).toFixed(2).replace('.', ',') }));

  const [selectedAltura, setSelectedAltura] = useState(alturas[0].value);

  const handleAlturaChange = (altura) => {
    setSelectedAltura(altura.value);
    onHeightChange(altura.value); // Envía el valor al componente padre
  };

  return (
    <div>
      <h3>Altura (m)</h3>
      <WheelPicker 
        data={alturas}
        onChange={handleAlturaChange}
        selectedID={alturas.find((item) => item.value === selectedAltura).id}
        height={200}
        width={100}
        itemHeight={40}
      />
      <p className="text-white">Seleccionado: {selectedAltura} m</p>
    </div>
  );
};

export default HeightPicker;
