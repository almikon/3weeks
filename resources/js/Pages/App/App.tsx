import React, { FC, useEffect, useState } from 'react';
import { Head } from '@inertiajs/react'
import Block from './components/Block';
import '../../../css/app.scss';
import CitySelector from './components/CitySelector';

interface Props {
  data: [{ date: string, day: { avgtemp_c: number, condition: { icon: string } } }];
  city_name: string;
}

const getForecast = async (currentDate: Date, city: string) => {
  return await fetch('/api/weather', {
    method: 'POST',
    body: JSON.stringify({
      date: currentDate,
      city
    })
  });
}

const App: FC<Props> = (props: Props) => {
  const [result, setResult] = useState(false);

  const handleSubmit = async () => {
    const response = await getForecast(new Date(), 'Москва');
  };

  return (
    <>
    <Head title="Прогноз погоды на ближайшие 2 дня. Москва и область." />
    <div className="wrapper">
      <CitySelector />
      {result && <div>
        <h1>{props.city_name}</h1>
        <div className="container">
          {props.data.map((item, index) => (
            <Block
              key={index}
              date={item.date}
              icon={item.day.condition.icon}
              temperature={item.day.avgtemp_c}
            />
          ))}
        </div>
      </div>}
    </div>
    </>
  )
}

export default App;