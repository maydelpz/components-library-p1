import React from "react";
import "./Humedad.css";

export interface HumedadProps {
  label?: string;
  onClick?: () => void;
}

const Humedad = ({
  label = "Humedad",
  onClick,
}: HumedadProps) => {
  return (
    <button className="humedad" onClick={onClick}>
      <span className="humedad-text">{label}</span>
    </button>
  );
};

export default Humedad;
