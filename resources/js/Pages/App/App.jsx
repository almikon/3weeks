import React from 'react';
import { Head } from '@inertiajs/react'
import '../../../css/app.css';

export default function App({ data }) {
  const Block = ({ title, icon, temperature, items }) => {
    return (
      <div className="block">
        <h2>{title}</h2>
        <div className="icon-temp">
          <img src={icon} alt={`Иконка ${title}`} />
          <p className="temperature">{temperature}</p>
        </div>
        <ul>
          {/* {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))} */}
        </ul>
      </div>
    );
  };
  return (
    <>
    <Head title="Прогноз погоды на ближайшие 2 дня. Москва и область." />
    <div className="container">
        {data.map((item, index) => (
          <Block
            key={index}
            title={item.title}
            icon={item.icon}
            temperature={item.temperature}
            items={item.items}
          />
        ))}
    </div>
    </> 
  )
}

// <Layout>
// </Layout>