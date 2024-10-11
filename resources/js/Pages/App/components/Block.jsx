import React from 'react';

export default function Block({ date, icon, temperature, items }) {
    return (
    <div className="block">
        <h2>{date.split('-').reverse().join('.')}</h2>
        <div className="icon-temp">
        <img src={icon} />
        <p className="temperature">{temperature}&deg;C</p>
        </div>
    </div>
    );
};
