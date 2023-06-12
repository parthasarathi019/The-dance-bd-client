//eslint-disable-next-line
import React from 'react';
import './Instructors_Card.css'
import { GiMoebiusStar } from 'react-icons/gi';

const Instructors_Card = ({classs}) => {
    //eslint-disable-next-line
    const { name, instructor , available_seats , img_url, price } = classs

    return (
        <div className='rounded-md border-2 border-pink-100 px-8 pt-8 pb-3 bg-[#f7dbdb17] shadow-md shadow-pink-300'>
            <img className='h-[400px] w-[400px] clip1' src={img_url} alt="" />
            {/* <p className='absolute right-0 bottom-8 bg-teal-400 px-7 py-2 clip2'>ddhehdhyrrut</p> */}
           <div className='text-center'>
           <p className='clip0 bg-red-400 tracking-[.3px] font-bold text-[1.3em] py-2 px-5'>{name}</p>
           <div className='flex items-center justify-center'><GiMoebiusStar></GiMoebiusStar><p>𝖙𝖔𝖕 𝖎𝖓𝖘𝖙𝖗𝖚𝖈𝖙𝖔𝖗</p></div>
           </div>
        </div>
    );
};

export default Instructors_Card;

