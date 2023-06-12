//eslint-disable-next-line
import React, { useState } from 'react';
import Main_Carosel from './Main_Carosel/Main_Carosel';
import Dance_Class_Section from './Dance_Class_Section/Dance_Class_Section';
import Popular_Instractor_Section from './Popular_Instractor_Section/Popular_Instractor_Section';
import Extra_Section from './Extra_Section/Extra_Section';
import { TbSunHigh , TbSunOff} from 'react-icons/tb';


const Home_Page = () => {
    const [LightShown, setLightShown] = useState(false);

    const toggleMode = () => {
        setLightShown(!LightShown);
      };
    return (
        <div className={`md:max-w-[1280px] mx-auto ${LightShown ? 'bg-black text-white' : 'bg-white'}`}>
            <p className={`text-red-500 fixed right-0 text-right top-0  z-10 font-bold`}>{LightShown ? <TbSunOff onClick={toggleMode} className='text-lime-400 text-[1.9em] cursor-pointer' /> : <TbSunHigh onClick={toggleMode} className='text-yellow-300  text-[1.9em] cursor-pointer'/>}</p>
            <Main_Carosel></Main_Carosel>
            <Dance_Class_Section></Dance_Class_Section>
            <Popular_Instractor_Section></Popular_Instractor_Section>
            <Extra_Section></Extra_Section>
        </div>
    );
};

export default Home_Page;