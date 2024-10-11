import React from 'react';
import { Head } from '@inertiajs/react'
import Block from './components/Block';
import '../../../css/app.css';

export default function App({ data, city_name }) {
  return (
    <>
    <Head title="Прогноз погоды на ближайшие 2 дня. Москва и область." />
    <div className="wrapper">
      <h1>{city_name}</h1>
      <div className="container">
          {data.map((item, index) => (
            <Block
              key={index}
              date={item.date}
              icon={item.day.condition.icon}
              temperature={item.day.avgtemp_c}
            />
          ))}
      </div>
    </div>
    </>
  )
}
