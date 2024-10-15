
import React, { useState } from 'react';

interface Props {
  initialCity: string;
  onSubmit: (city: string, distance: number) => void;
}

const CitySelector: React.FC<Props> = ({ initialCity, onSubmit }) => {
  const [city, setCity] = useState(initialCity);//пока что у нас один город
  const [distance, setDistance] = useState(200);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(city, distance);
  };

  return (
    <form onSubmit={handleSubmit} className="city-selector">
      <h2>{city}</h2>
      <div className="slider-container">
        <label htmlFor="distanceSlider">Расстояние от города (км):</label>
        <input
          type="range"
          id="distanceSlider"
          min="50"
          max="400"
          value={distance}
          onChange={(e) => setDistance(parseInt(e.target.value))}
        />
        <span>{distance} км</span>
      </div>
      <button type="submit" className="submit-button">
        Показать лучшие места для отдыха
      </button>
    </form>
  );
};

export default CitySelector;
