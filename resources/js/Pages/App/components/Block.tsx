import React, { FC } from 'react';

type Props = {
    date: string,
    icon: string,
    temperature: number
}

const Block: FC<Props> = ({ date, icon, temperature}) => {
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

export default Block;