import React, { useState } from 'react';

const CitySelector = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [distance, setDistance] = useState(0);
  const [manualDistance, setManualDistance] = useState('');

  const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород'];

  const handleDistanceChange = (value) => {
    setDistance(value);
    setManualDistance(value.toString());
  };

  return (
    <div>
      <label htmlFor="citySelect">Выберите город:</label>
      <select 
        id="citySelect" 
        value={selectedCity} 
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        <option value="">Выберите город</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>

      <div>
        <label htmlFor="distanceSlider">Расстояние от города (км):</label>
        <input 
          type="range" 
          id="distanceSlider" 
          min="0" 
          max="100" 
          value={distance} 
          onChange={(e) => handleDistanceChange(e.target.value)}
        />
        <span>{distance} км</span>
      </div>

      <div>
        <label htmlFor="manualDistance">Введите расстояние вручную:</label>
        <input 
          type="number" 
          id="manualDistance" 
          value={manualDistance} 
          onChange={(e) => {
            const value = parseInt(e.target.value) || 0;
            setManualDistance(e.target.value);
            setDistance(value);
          }}
        />
      </div>
    </div>
  );
};

export default CitySelector;
