import React from "react";
import "./ButtonCities.css";

export interface ButtonCitiesProps {
  label?: string;
  imageSrc?: string;
  onClick?: () => void;
}

const ButtonCities = ({
  label = "Chihuahua",
  imageSrc = "https://images.vexels.com/media/users/3/148650/isolated/preview/17e90231c8db16d97810081b82f62682-mapa-del-estado-de-chihuahua.png",
  onClick,
}: ButtonCitiesProps) => {
  return (
    <button className="button-cities" onClick={onClick}>
      <span className="button-cities-text">{label}</span>
      {imageSrc && (
        <img src={imageSrc} className="button-cities-image" alt={label} />
      )}
    </button>
  );
};

export default ButtonCities;
