import React from 'react';

interface Props {
  date: string;
  icon: string;
  temperature: number;
  condition: string;
}

const Block: React.FC<Props> = ({ date, icon, temperature, condition }) => {
  return (
    <div className="weather-block">
      <h3>{date}</h3>
      <div className="weather-info">
        <img src={icon} alt={condition} className="weather-icon" />
        <p className="temperature">{temperature}°C</p>
      </div>
      <p className="condition">{condition}</p>
    </div>
  );
};

export default Block;
