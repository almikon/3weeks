import React, { FC, useState } from 'react';
import { Head } from '@inertiajs/react'
import Block from './components/Block';
import '../../../css/app.scss';
import CitySelector from './components/CitySelector';

interface Props {
  data: [{ date: string, day: { avgtemp_c: number, condition: { icon: string } } }];
  city_name: string;
}

const App: FC<Props> = (props: Props) => {
  const [result, setResult] = useState(props.data);

  return (
    <>
    <Head title="Прогноз погоды на ближайшие 2 дня. Москва и область." />
    <div className="wrapper">
      <CitySelector />
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
    </div>
    </>
  )
}

export default App;