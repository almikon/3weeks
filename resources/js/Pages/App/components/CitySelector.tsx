import React, { useState } from 'react';

const CitySelector = () => {
  const [distance, setDistance] = useState(200);

  return (
    <div className="block">
      <h2>Москва</h2>
      <div>
        <label htmlFor="distanceSlider">Расстояние от города (км):</label>
        <input
          type="range"
          id="distanceSlider"
          min="50"
          max="400"
          value={distance}
          onChange={(e) => setDistance(parseInt(e.target.value) || 0)}
        />
        <span>{distance} км</span>
      </div>
      <button>Показать лучшие места для отдыха</button>
    </div>
  );
};

export default CitySelector;
