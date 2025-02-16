import React from "react";
import "./Cities.css";

export interface CitiesProps {
  label?: string;
  imageSrc?: string;
  onClick?: () => void;
}

const Cities = ({
  label = "Chihuahua",
  imageSrc = "https://images.vexels.com/media/users/3/148650/isolated/preview/17e90231c8db16d97810081b82f62682-mapa-del-estado-de-chihuahua.png",
  onClick,
}: CitiesProps) => {
  return (
    <button className="cities" onClick={onClick}>
      <span className="cities-text">{label}</span>
      {imageSrc && (
        <img src={imageSrc} className="cities-image" alt={label} />
      )}
    </button>
  );
};

export default Cities;
