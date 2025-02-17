import React from "react";
import "./TemperatureCard.css";

export interface TemperatureCardProps {
  label?: string;
  city?: string;
  date?: string;
  text?: string;
  grades?: string;
  imageLocationSrc?: string;
  imageTemperatureSrc?: string;
}

const TemperatureCard = ({
  label = "Temperatura",
  city = "Chihuahua",
  date = "Mon, 15 Feb",
  grades = "27°C",
  text = "Sunny",
  imageTemperatureSrc = "https://png.pngtree.com/png-clipart/20201209/original/pngtree-sun-png-clipart-colored-png-image_5656301.png",
}: TemperatureCardProps) => {
  return (
    <div className="card-temperature">
      <span className="card-temperature-city">{city}</span>
      <span className="card-temperature-date">{date}</span>
      
      {imageTemperatureSrc && (
        <img src={imageTemperatureSrc} className="card-temperature-image" alt={label} />
      )}

      <span className="card-temperature-grades">{grades}</span>
      <span className="card-temperature-text">{text}</span>
      
    </div>
  );
};

export default TemperatureCard;
