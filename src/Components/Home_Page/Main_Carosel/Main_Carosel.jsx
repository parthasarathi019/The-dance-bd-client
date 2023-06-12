//eslint-disable-next-line
import React from 'react';
import'./Main_Carosel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/local_Img/dance_Img_slider/dance_img_0.png'
import img2 from '../../../assets/local_Img/dance_Img_slider/dance_img_01.png'
import img3 from '../../../assets/local_Img/dance_Img_slider/dance_img_02.png'
import img4 from '../../../assets/local_Img/dance_Img_slider/dance_img_03.png'
import { Carousel } from 'react-responsive-carousel';
const Main_Carosel = () => {
    return (
        <div>
             <section>
                    <Carousel className='main-slide'>
                        <div>
                            <img className='h-[240px] md:h-[600px]' src={img2} />
                            <p className="legend md:text-[2em]">We Offer a wide range of dance styles and programs to cater to different interests and skill levels.</p>
                        </div>
                        <div>
                            <img className='h-[240px] md:h-[600px]' src={img1} />
                            <p className="legend md:text-[2em]">Include popular dance styles like ballet, contemporary, hip-hop, jazz, salsa, or ballroom.</p>
                        </div>
                        <div>
                            <img className='h-[240px] md:h-[600px]' src={img3} />
                            <p className="legend md:text-[2em]">Create a dance environment that is conducive to learning and growth.</p>
                        </div>
                        <div>
                            <img className='h-[240px] md:h-[600px]' src={img4} />
                            <p className="legend md:text-[2em]">Ensure they have proper certifications and a proven track record in teaching dance.</p>
                        </div>
                    </Carousel>
                </section>
        </div>
    );
};

export default Main_Carosel;