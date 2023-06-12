//eslint-disable-next-line
import React from 'react';
import './Dance_Class_Card.css'
const Dance_Class_Card = ({classs}) => {
    //eslint-disable-next-line
    const { name, instructor , available_seats , image, price } = classs

    return (
        <div className='relative'>
            <img className='h-[400px] w-[400px] clipo' src={image} alt="" />
            <p className='absolute right-0 bottom-8 bg-teal-400 px-9 py-4 clipo2 font-bold'>{name} Dance</p>
        </div>
    );
};

export default Dance_Class_Card;
