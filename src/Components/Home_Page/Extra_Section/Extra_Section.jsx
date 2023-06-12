// import React from 'react';
import img from '../../../assets/local_Img/Extra_Section_pic/extra_Section_Image.jpeg';
import'./Extra_Section.css'
//eslint-disable-next-line
// import { Fade, Slide } from "react-awesome-reveal";
import AOS from 'aos';
AOS.init();

AOS.init({
  // Global settings:
  disable: false, 
  startEvent: 'DOMContentLoaded', 
  initClassName: 'aos-init', 
  animatedClassName: 'aos-animate', 
  useClassNames: false, 
  disableMutationObserver: false, 
  debounceDelay: 50, 
  throttleDelay: 99, 
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 110, 
  delay: 200, 
  duration: 1200, 
  easing: 'ease', 
  once: false, 
  mirror: false, 
  anchorPlacement: 'top-bottom', 

});

import 'aos/dist/aos.css'; 
const Extra_Section = () => {
    return (
        <div className='pt-6'>
             <div className='py-3'>
                <p className='text-center md:text-[2.5em] font-semibold'>...New Event Lunched...</p>
            </div>
            <section className='flex flex-col md:flex-row justify-between items-center'>
               <p className=' text-[1.2em] text-center md:text-left md:text-[1.9em] font-bold tracking-[3px]'>𝒲ℯ 𝒜𝓁𝓈ℴ 𝒪𝒻𝒻ℯ𝓇 𝒲ℯ𝒹𝒹𝒾𝓃ℊ 𝒟𝒶𝓃𝒸ℯ 𝒮𝒽ℴ𝓇𝓉 𝒞𝓁𝒶𝓈𝓈ℯ𝓈...</p>
               <div data-aos="zoom-in"> <img className='w-[500px] rounded-sm clip01' src={img} alt="" /></div>
            </section>
        </div>
    );
};

export default Extra_Section;

////////