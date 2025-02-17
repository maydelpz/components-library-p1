import React from "react";
import "./Humedad.css";

export interface HumedadProps {
  label?: string;
  imageSrc?: string;
  onClick?: () => void;
}

const Humedad = ({
  label = "Humedad",
 
  onClick,
}: HumedadProps) => {
  return (
    <button className="button-humedad" onClick={onClick}>
      <span className="Humedad-text">{label}</span>
      
    </button>
  );
};

export default Humedad;
