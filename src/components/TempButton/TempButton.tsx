import React, { useState } from "react";
import "./TempButton.css";

interface TempData {
  rango: string;
  info: string;
}

const temperaturas: TempData[] = [
  { rango: "10-20°C", info: "Chihuahua" },
  { rango: "30-40°C", info: "Veracruz" },
  { rango: "40-50°C", info: "Sonora" },
];

const TempButton: React.FC = () => {
  const [seleccionado, setSeleccionado] = useState<TempData | null>(null);

  return (
    <div className="temp-container">
      <div className="button-group">
        {temperaturas.map((temp, index) => (
          <button
            key={index}
            onClick={() => setSeleccionado(temp)}
            className={`temp-button ${seleccionado?.rango === temp.rango ? "active" : ""}`}
          >
            {temp.rango}
          </button>
        ))}
      </div>

      {seleccionado && (
        <div className="info-box">
          <p className="info-title">{seleccionado.rango}</p>
          <p className="info-text">{seleccionado.info}</p>
        </div>
      )}
    </div>
  );
};

export default TempButton;
