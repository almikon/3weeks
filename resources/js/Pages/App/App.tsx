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
      const result = await getForecast(city, distance);
      setWeatherData(result);
    } catch (error) {
      console.error('Error fetching forecast:', error);
    } finally {
      setLoading(false);
    }
  };

  const getForecast = async (city: string, distance: number) => {
    try {
      const response = await fetch(`/api/forecast?city=${encodeURIComponent(city)}&distance=${distance}`);

      if (!response.ok) {
        throw new Error('Ошибка при получении прогноза');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Ошибка:', error);
      throw error;
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
