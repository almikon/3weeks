import React, { FC, useState } from 'react';
import { Head } from '@inertiajs/react';
import '../../../css/app.scss';
import CitySelector from './components/CitySelector';
import WeatherResult from './components/WeatherResult';

interface WeatherData {
  city: string;
  temperature: number;
  condition: string;
  icon: string;
}

interface Props {
  initialCity: string;
}

const App: FC<Props> = ({ initialCity }) => {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleForecastRequest = async (city: string, distance: number) => {
    setLoading(true);
    try {
      // const response = await fetch('/api/forecast', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ city, distance }),
      // });
      // const data = await response.json();
      
      //тестируем
      const data = {
        city,
        temperature: 20,
        condition: 'Ясно',
        icon: 'https://openweathermap.org/img/wn/01d@2x.png',
      }
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching forecast:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head title={`Прогноз погоды на ближайшие 2 дня. ${initialCity} и область.`} />
      <div className="wrapper">
        <CitySelector initialCity={initialCity} onSubmit={handleForecastRequest} />
        {loading && <div className="loading">Загрузка...</div>}
        {weatherData && <WeatherResult data={weatherData} />}
      </div>
    </>
  );
};

export default App;
