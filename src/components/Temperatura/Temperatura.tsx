import React from "react";
import "./Temperatura.css";

export interface TemperaturaProps {
  label?: string;
  onClick?: () => void;
}

const Temperatura = ({
  label = "Temperatura",
  onClick,
}: TemperaturaProps) => {
  return (
    <button className="temperatura" onClick={onClick}>
      <span className="temperatura-text">{label}</span>
    </button>
  );
};

export default Temperatura;
