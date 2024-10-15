import React from 'react';
import Block from './Block';

interface WeatherData {
  city: string;
  temperature: number;
  condition: string;
  icon: string;
}

interface Props {
   data: WeatherData;
}

const WeatherResult: React.FC<Props> = ({ data }) => {
  return (
    <div className="weather-result">
      <h2>Лучшее место для отдыха: {data.city}</h2>
      <div className="forecast-container">
        {/* {props.data.map((item, index) => (
            <Block
              key={index}
              date={item.date}
              icon={item.day.condition.icon}
              temperature={item.day.avgtemp_c}
            />
        ))} */}
        <Block
          date="Завтра"
          icon={data.icon}
          temperature={data.temperature}
          condition={data.condition}
        />
        <Block
          date="Послезавтра"
          icon={data.icon}
          temperature={data.temperature}
          condition={data.condition}
        />
      </div>
    </div>
  );
};

export default WeatherResult;
